/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useTranslation } from 'react-i18next';
import { Document, Page, pdfjs } from 'react-pdf';
import BkashIcon from './bkashIcon';
import NagadIcon from './NagadIcon';
import UploadButton from './UploadButton';
import axios from 'axios';
import { storage } from '../Firebase/firebase.init';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { IoClose } from 'react-icons/io5';
import BangladeshIcon from '../Contact/BangladeshIcon';
import successapply from '../../assets/success-application.svg';
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

const ApplicationForm = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const [payMethod, setPayMethod] = useState('');
  const [formStep, setFormStep] = useState(0);
  const [otherFiles, setOtherFiles] = useState([]);
  const [singleImage, setSingleImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unique, setUnique] = useState(false);
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: 'all' });

  const checkUniqueness = async (e) => {
    const inputVal = e.target.value;
    if (inputVal.length === 11) {
      const result = await axios.get(`http://localhost:5000/checkApplicants?phone=${inputVal}`);
      if (result.data === 'absent') {
        setUnique(true);
      }
    } else {
      setUnique(false);
    }
  };

  console.log(unique);

  const completeFormStep = async () => {
    const isValidForm = await trigger();
    if (isValidForm && unique) {
      setFormStep((step) => step + 1);
    }
  };

  const formSubmit = async (data) => {
    setLoading(true);
    const emailData = {
      name: data.name,
      phone: data.phone,
    };
    const dateTime = Date.now();
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('address', data.address);
      formData.append('reason', data.reason);
      formData.append('paymentMethod', data.paymentMethod);
      formData.append('phone', data.phone);
      formData.append('checkbox', data.checkbox);
      formData.append('status', 'pending');

      const imageRef = ref(storage, `images/${data.name}/${singleImage.name + dateTime}`);
      await uploadBytes(imageRef, singleImage)
        .then(async () => {
          const imageUrl = await getDownloadURL(imageRef);
          formData.append('mainFile', imageUrl);
        })
        .catch((error) => {
          console.log('Error uploading single file :', error);
        });

      for (let i = 0; i < otherFiles.length; i++) {
        const otherFileRef = ref(storage, `images/${data.name}/otherFiles/${otherFiles[i].name + dateTime}`);

        await uploadBytes(otherFileRef, otherFiles[i])
          .then(async () => {
            const otherFileUrl = await getDownloadURL(otherFileRef);
            formData.append('others', otherFileUrl);
          })
          .catch((error) => {
            console.log(`Error uploading other file ${i + 1}:`, error);
          });
      }

      const response = await axios.post('https://shohahoyta-server.vercel.app/applications', formData);

      if (response.data.insertedId) {
        setLoading(false);
        Swal.fire({
          html: `<div class="custom-success-modal">
          <img
            src=${window.location.origin + successapply}
            alt="Success"
            class="modal-image"
          />
          <p class="modal-title">${t('applicationForm.modaltitle')}</p>
          <p class="modal-desc">${t('applicationForm.modaldesc')}</p>
          
        </div>`,
          confirmButtonText: `<button class="modal-btn">${t('applicationForm.modalBtn')}</button>`,
          confirmButtonColor: '#215A4D',
          cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        });
        emailjs.send('service_97cax8q', 'template_snvmhsm', emailData, 'ldur-PuGdgsotgwML').then(
          (result) => {
            if (result.status === 200) {
              console.log('Your message sent successfully');
            }
          },
          (error) => {
            console.error(error.text);
          }
        );
        reset();
        setSingleImage(null);
        setOtherFiles([]);
        setFormStep(0);
      }
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  const handleMultipleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setOtherFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleMoreFiles = () => {
    const otherInput = document.getElementById('others');
    if (otherInput) otherInput.click();
  };

  const handleTerms = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full max-w-xl md:max-w-[794px] mx-auto bg-white rounded-xl shadow-applicationBox py-10 px-10 md:px-6 lg:p-10">
        <div className="w-full relative">
          <div className="flex gap-4 md:gap-10 w-full justify-center items-center pb-10">
            <div
              className="flex gap-3.5 cursor-pointer text-thunder-500 text-base md:text-[22px] font-normal"
              onClick={() => setFormStep(0)}
            >
              <h1 className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${formStep === 0 ? 'bg-plant-700 text-white' : ''}`}>
                <span>{t('applicationForm.formCount1')}</span>
              </h1>
              <h1 className={`${formStep === 0 ? 'text-plant-700 font-semibold' : ''}`}>{t('applicationForm.form1Title')}</h1>
            </div>
            <div
              className="flex gap-3.5 cursor-pointer text-thunder-500 text-base md:text-[22px] font-normal"
              onClick={() => setFormStep(1)}
            >
              <h1 className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${formStep === 1 ? 'bg-plant-700 text-white' : ''}`}>{t('applicationForm.formCount2')}</h1>
              <h1 className={`${formStep === 1 ? 'text-plant-700 font-semibold' : ''}`}>{t('applicationForm.form2Title')}</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            {formStep === 0 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
                  <div className="w-full font-medium md:text-lg text-thunder-500">
                    <label>
                      <span>{t('applicationForm.nameLabel')}</span>
                      <span className="text-[#F02727]">*</span>
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder={t('applicationForm.namePlaceHolder')}
                      required
                      className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
                    />
                    {errors.name && <p className="text-[#F02727] font-medium">{t('validation.name')}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
                  <div className="w-full font-medium md:text-lg text-thunder-500">
                    <label>
                      <span>{t('applicationForm.addressLabel')}</span>
                      <span className="text-[#F02727]">*</span>
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      {...register('address', { required: true })}
                      type="text"
                      name="address"
                      placeholder={t('applicationForm.addressPlaceHolder')}
                      required
                      className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
                    />
                    {errors.address && <p className="text-[#F02727] font-medium">{t('validation.address')}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6">
                  <div className="w-full font-medium md:text-lg text-thunder-500">
                    <label>
                      <span>{t('applicationForm.detailsLabel')}</span>
                      <span className="text-[#F02727]">*</span>
                    </label>
                  </div>
                  <div className="w-full">
                    <textarea
                      {...register('reason', { required: true })}
                      name="reason"
                      placeholder={t('applicationForm.detailsPlaceHolder')}
                      required
                      className="w-full md:w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg resize-none"
                    ></textarea>
                    {errors.reason && <p className="text-[#F02727] font-medium">{t('validation.reason')}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6">
                  <div className="w-full font-medium md:text-lg text-thunder-500">
                    <label>
                      <span>{t('applicationForm.paymentLabel')}</span>
                      <span className="text-[#F02727]">*</span>
                    </label>
                  </div>
                  <div className="w-full gap-3 grid grid-cols-2">
                    <div className="w-full">
                      <input
                        type="radio"
                        onClick={(e) => setPayMethod(e.target.value)}
                        id="bkash"
                        {...register('paymentMethod', {
                          required: true,
                        })}
                        value={t('applicationForm.paymentMethod1')}
                        className="hidden"
                      />
                      <label htmlFor="bkash">
                        <div
                          className={`h-11 w-full flex gap-2 justify-center items-center  border-[1px] border-plant-100 rounded-md text-thunder-500 text-l ${
                            payMethod === 'বিকাশ' || payMethod === 'Bkash' ? 'bg-plant-300/50' : 'bg-haze'
                          }`}
                        >
                          <BkashIcon />
                          <span>{t('applicationForm.paymentMethod1')}</span>
                        </div>
                      </label>
                    </div>
                    <div className="w-full">
                      <input
                        onClick={(e) => setPayMethod(e.target.value)}
                        type="radio"
                        id="nagad"
                        {...register('paymentMethod', {
                          required: true,
                        })}
                        value={t('applicationForm.paymentMethod2')}
                        className="hidden"
                      />
                      <label htmlFor="nagad">
                        <div
                          className={`h-11 w-full flex gap-2 justify-center items-center  border-[1px] border-plant-100 rounded-md text-thunder-500 text-l ${
                            payMethod === 'নগদ' || payMethod === 'Nagad' ? 'bg-plant-300/50' : 'bg-haze'
                          }`}
                        >
                          <NagadIcon />
                          <span>{t('applicationForm.paymentMethod2')}</span>
                        </div>
                      </label>
                    </div>
                    {errors.paymentMethod && <p className="text-[#F02727] font-medium w-full col-span-2">{t('validation.paymentMethod')}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
                  <div className="w-full font-medium md:text-lg text-thunder-500">
                    <label>
                      <span>{t('applicationForm.phoneLabel')}</span>
                      <span className="text-[#F02727]">*</span>
                    </label>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-start w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze divide-x divide-solid gap-x-2.5">
                      <span className="flex gap-x-1 leading-[26px] text-thunder-500 font-archivo">
                        <span className="mt-[3px]">
                          <BangladeshIcon />
                        </span>
                        <span className={isBn ? 'font-nsb' : 'font-archivo'}>{t('contact.phoneInputPrefix')}</span>
                      </span>
                      <input
                        {...register('phone', {
                          required: isBn ? 'বিকাশ/নগদ একাউন্ট খোলা আছে এমন একটি মোবাইল নাম্বার লিখুন' : 'Please insert a valid phone number which has a Bkash/Nagad account',
                          pattern: {
                            value: /^(013|014|015|016|017|018|019)\d{8}$/,
                            message: isBn ? 'অনুগ্রহও করে একটি সঠিক বাংলাদেশী ফোন নাম্বার দিন।' : 'Please enter a valid BD phone number',
                          },
                        })}
                        onBlur={checkUniqueness}
                        name="phone"
                        type="text"
                        placeholder={t('applicationForm.phonePlaceholder')}
                        required
                        className={`input w-full bg-haze pl-2.5 leading-[26px] focus-within:outline-none ${isBn ? 'font-nsb' : 'font-archivo'}`}
                      />
                    </div>
                    {errors.phone && <p className="text-[#F02727] font-medium w-full mt-2">{errors.phone?.message}</p>}
                    {!unique ? <p className="text-[#F02727] font-medium w-full mt-2">Already Applied</p> : ''}
                  </div>
                </div>
                <div className="flex gap-x-6 gap-y-2 md:gap-6 items-center md:pl-[234px]">
                  <div className="w-full pb-5">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        name="checkbox"
                        {...register('checkbox', { required: true })}
                        className="checkbox checkbox-primary"
                      />
                      <span className="w-full md:w-[480px] text-thunder-500 md:text-lg pl-2">{t('applicationForm.checkboxTitle')}</span>
                    </label>
                    {errors.checkbox && <p className="text-[#F02727] font-medium w-full">{t('validation.checkbox')}</p>}
                    <p className="text-thunder-500 text-base">
                      {isBn ? (
                        <span>
                          উপরক্ত তথ্য প্রদানের মাধ্যমে আপনি নিশ্চিত করছেন যে আপনি আমাদের{' '}
                          <button
                            type="button"
                            onClick={() => handleTerms('terms')}
                          >
                            শর্তাবলি
                          </button>{' '}
                          পড়েছেন এবং একমত প্রকাশ করছেন।
                        </span>
                      ) : (
                        <span>
                          By providing the above information you confirm that you have read and agree to our{' '}
                          <button
                            type="button"
                            onClick={() => handleTerms('terms')}
                          >
                            Terms
                          </button>
                          .
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-5 pt-5">
                  <button
                    type="button"
                    className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${isBn ? 'font-nsb' : 'font-archivo'}`}
                    onClick={completeFormStep}
                  >
                    <span className="h-8">{t('applicationForm.nextStepBtn')}</span>
                  </button>
                </div>
              </div>
            )}
            {formStep === 1 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
                  <div className="w-full font-medium md:text-lg text-thunder-500 text-center md:text-left">
                    <p>
                      <span>{t('applicationFormStep2.mainDocumentTitle')}</span>
                      <span className="text-[#F02727]">*</span>
                    </p>
                    <p className="text-[#848696] text-xs font-medium leading-5">{t('applicationFormStep2.mainDocumentDescription')}</p>
                  </div>
                  <div className="w-80 max-w-full relative place-self-center md:place-self-start">
                    <label htmlFor="mainFile">
                      {singleImage ? (
                        singleImage.type.includes('pdf') ? (
                          <div className="w-full h-40 p-1.5 border border-haze rounded-md shadow relative overflow-hidden">
                            <div className="bg-black rounded-md w-full h-[148px] overflow-hidden">
                              <Document file={URL.createObjectURL(singleImage)}>
                                <Page pageNumber={1} />
                              </Document>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-40 p-1.5 border border-haze rounded-md shadow relative overflow-hidden">
                            <div className="bg-black rounded-md w-full h-[148px] overflow-hidden">
                              <img
                                src={URL.createObjectURL(singleImage)}
                                alt="uploaded-image"
                                className={`w-full object-cover object-left-top rounded-md ${singleImage ? 'opacity-80' : 'opacity-100'}`}
                              />
                            </div>
                          </div>
                        )
                      ) : (
                        <UploadButton />
                      )}
                    </label>
                    {singleImage ? (
                      <button
                        className="absolute top-5 right-5 bg-gray-900 rounded-full p-1"
                        onClick={() => setSingleImage(null)}
                      >
                        <IoClose className="text-2xl text-white" />
                      </button>
                    ) : undefined}
                    <input
                      {...register('mainFile', {
                        onChange: (e) => setSingleImage(e.target.files[0]),
                        required: true,
                      })}
                      className="hidden"
                      id="mainFile"
                      type="file"
                    />
                    {errors.mainFile && <p className="text-[#F02727] font-medium w-full">{t('validation.mainFile')}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
                  <div className="w-full font-medium md:text-lg text-thunder-500 text-center md:text-left">
                    <p>
                      <span>{t('applicationFormStep2.otherDocumentsTitle')}</span>
                    </p>
                    <p className="text-[#848696] text-xs font-medium leading-5">{t('applicationFormStep2.otherDocumentsDescription')}</p>
                  </div>
                  <div className="w-80 h-40 relative place-self-center md:place-self-start">
                    {otherFiles.length > 0 ? (
                      <div className={`flex gap-x-2 w-80 h-40 overflow-hidden border-plant-700 border rounded-md p-1.5`}>
                        {otherFiles.map((file, index) =>
                          file.type.includes('pdf') ? (
                            <div
                              key={index}
                              className={`relative overflow-hidden ${otherFiles.length > 1 ? `w-1/${otherFiles.length}` : 'w-full'} min-w-[97px] h-[148px] object-cover`}
                            >
                              <div>
                                <Document file={URL.createObjectURL(file)}>
                                  <Page
                                    pageNumber={1}
                                    width={200}
                                  />
                                </Document>
                              </div>
                              <button
                                type="button"
                                className="absolute top-1 right-1 bg-gray-900 rounded-full p-0.5"
                                onClick={() => setOtherFiles(otherFiles.filter((_, idx) => idx !== index))}
                              >
                                <IoClose className="md:text-lg text-white" />
                              </button>
                            </div>
                          ) : (
                            <div
                              key={index}
                              className={`relative overflow-hidden ${otherFiles.length > 1 ? `w-1/${otherFiles.length}` : 'w-full'} min-w-[97px] h-[148px] object-cover`}
                            >
                              <div>
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={`uploaded-image-${index}`}
                                  className="w-full h-[148px] object-cover rounded-md"
                                />
                              </div>
                              <button
                                type="button"
                                className="absolute top-1 right-1 bg-gray-900 rounded-full p-0.5"
                                onClick={() => setOtherFiles(otherFiles.filter((_, idx) => idx !== index))}
                              >
                                <IoClose className="md:text-lg text-white" />
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <label htmlFor="others">
                        <UploadButton />
                      </label>
                    )}
                    <input
                      id="others"
                      className="hidden"
                      type="file"
                      {...register('others', {
                        onChange: (e) => handleMultipleImageChange(e),
                      })}
                      multiple
                    />
                    {otherFiles.length > 0 && otherFiles.length < 5 ? (
                      <div className="block w-44 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40">
                        <button
                          type="button"
                          className="w-44 text-sm font-bold rounded-full px-7 pt-2.5 pb-2 bg-white text-plant-700"
                          onClick={handleMoreFiles}
                        >
                          {`${t('applicationFormStep2.more')}`}
                        </button>
                      </div>
                    ) : undefined}
                  </div>
                </div>
                <div className="flex justify-center gap-5 pt-5">
                  <button
                    type="submit"
                    className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${isBn ? 'font-nsb' : 'font-archivo'}`}
                  >
                    <span className="h-8">{t('applicationForm.submitBtn')}</span>
                  </button>
                </div>
              </div>
            )}
          </form>
          {loading && (
            <div className="bg-white/80 absolute w-full top-0 bottom-0 left-0 h-full flex flex-col justify-center items-center z-50">
              <p className="text-sxl pb-2">{t('applicationForm.loading')}</p>
              <BarLoader
                color="#215A4D"
                width={500}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
