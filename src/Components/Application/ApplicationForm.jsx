/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";
import BkashIcon from "./bkashIcon";
import NagadIcon from "./NagadIcon";
import UploadButton from "./UploadButton";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const ApplicationForm = () => {
  const { t, i18n } = useTranslation("global");
  const isBn = i18n.language === "bn";
  const [formStep, setFormStep] = useState(0);
  const [otherFiles, setOtherFiles] = useState([]);
  const [singleImage, setSingleImage] = useState(null);

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: "all" });

  const completeFormStep = async () => {
    const isValidForm = await trigger();
    if (isValidForm) {
      setFormStep((step) => step + 1);
    }
  };

  const formSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("reason", data.reason);
      formData.append("paymentMethod", data.paymentMethod);
      formData.append("phone", data.phone);
      formData.append("checkbox", data.checkbox);
      formData.append("status", "pending");
      formData.append("mainFile", data.mainFile[0]);

      for (let i = 0; i < otherFiles.length; i++) {
        formData.append("others", otherFiles[i]);
      }

      const response = await axios.post(
        "http://localhost:5000/applications",
        formData
      );

      if (response.data.insertedId) {
        alert("application submitted successfully!");
        reset();
        setSingleImage(null);
        setOtherFiles([]);
        setFormStep(0);
      }
    } catch (error) {
      console.error("Error submitting data: ", error);
    }
  };

  const handleMultipleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setOtherFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handlePdfError = (error) => {
    console.error('Error loading PDF:', error);
  };

  return (
    <>
      <div className="w-[794px] mx-auto bg-white rounded-xl shadow-applicationBox p-10">
        <div className="flex gap-10 w-full justify-center items-center pb-10">
          <div
            className="flex gap-3.5 cursor-pointer text-thunder-500 text-[22px] font-normal"
            onClick={() => setFormStep(0)}
          >
            <h1
              className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${
                formStep === 0 ? "bg-plant-700 text-white" : ""
              }`}
            >
              <span>{t("applicationForm.formCount1")}</span>
            </h1>
            <h1
              className={`${
                formStep === 0 ? "text-plant-700 font-semibold" : ""
              }`}
            >
              {t("applicationForm.form1Title")}
            </h1>
          </div>

          <div
            className="flex gap-3.5 cursor-pointer text-thunder-500 text-[22px] font-normal"
            onClick={() => setFormStep(1)}
          >
            <h1
              className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${
                formStep === 1 ? "bg-plant-700 text-white" : ""
              }`}
            >
              {t("applicationForm.formCount2")}
            </h1>
            <h1
              className={`${
                formStep === 1 ? "text-plant-700 font-semibold" : ""
              }`}
            >
              {t("applicationForm.form2Title")}
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit(formSubmit)}>
          {formStep === 0 && (
            <div className="space-y-5">
              <div className="grid grid-cols-[210px_auto] gap-6 items-center">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <label>
                    <span>{t("applicationForm.nameLabel")}</span>
                    <span className="text-[#F02727]">*</span>
                  </label>
                </div>
                <div className="w-full">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder={t("applicationForm.namePlaceHolder")}
                    required
                    className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                  />
                  {errors.name && (
                    <p className="text-[#F02727] font-medium">
                      {t("validation.name")}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[210px_auto] gap-6 items-center">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <label>
                    <span>{t("applicationForm.addressLabel")}</span>
                    <span className="text-[#F02727]">*</span>
                  </label>
                </div>
                <div className="w-full">
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    name="address"
                    placeholder={t("applicationForm.addressPlaceHolder")}
                    required
                    className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                  />
                  {errors.address && (
                    <p className="text-[#F02727] font-medium">
                      {t("validation.address")}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[210px_auto] gap-6">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <label>
                    <span>{t("applicationForm.detailsLabel")}</span>
                    <span className="text-[#F02727]">*</span>
                  </label>
                </div>
                <div className="w-full">
                  <textarea
                    {...register("reason", { required: true })}
                    name="reason"
                    placeholder={t("applicationForm.detailsPlaceHolder")}
                    required
                    className="w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg resize-none"
                  ></textarea>
                  {errors.reason && (
                    <p className="text-[#F02727] font-medium">
                      {t("validation.reason")}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[210px_auto] gap-6">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <label>
                    <span>{t("applicationForm.paymentLabel")}</span>
                    <span className="text-[#F02727]">*</span>
                  </label>
                </div>
                <div className="w-[494px] gap-3 flex">
                  <div className="w-1/2">
                    <input
                      type="radio"
                      id="bkash"
                      name="paymentMethod"
                      {...register("paymentMethod", {
                        required: true,
                      })}
                      value={t("applicationForm.paymentMethod1")}
                      className="hidden"
                    />
                    <label htmlFor="bkash">
                      <div className="h-11 w-full flex gap-2 justify-center items-center bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg">
                        <BkashIcon />
                        <span>{t("applicationForm.paymentMethod1")}</span>
                      </div>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <input
                      type="radio"
                      id="nagad"
                      name="paymentMethod"
                      {...register("paymentMethod", {
                        required: true,
                      })}
                      value={t("applicationForm.paymentMethod2")}
                      className="hidden"
                    />
                    <label htmlFor="nagad">
                      <div className="h-11 w-full flex justify-center items-center gap-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg">
                        <NagadIcon />
                        <span>{t("applicationForm.paymentMethod2")}</span>
                      </div>
                    </label>
                  </div>
                  {errors.paymentMethod && (
                    <p className="text-[#F02727] font-medium w-full col-span-2">
                      {t("validation.paymentMethod")}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[210px_auto] gap-6 items-center">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <label>
                    <span>{t("applicationForm.phoneLabel")}</span>
                    <span className="text-[#F02727]">*</span>
                  </label>
                </div>
                <div className="w-full">
                  <input
                    {...register("phone", {
                      required: true,
                    })}
                    name="phone"
                    type="text"
                    placeholder={t("applicationForm.phonePlaceholder")}
                    required
                    className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                  />
                  {errors.phone && (
                    <p className="text-[#F02727] font-medium w-full">
                      {t("validation.phone")}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-6 items-center pl-[234px]">
                <div className="w-full pb-5">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      name="checkbox"
                      {...register("checkbox", { required: true })}
                      className="checkbox checkbox-primary"
                    />

                    <span className="w-[480px] text-thunder-500 text-lg pl-2">
                      {t("applicationForm.checkboxTitle")}
                    </span>
                  </label>
                  {errors.checkbox && (
                    <p className="text-[#F02727] font-medium w-full">
                      {t("validation.checkbox")}
                    </p>
                  )}
                  <p className="text-thunder-500 text-base">
                    {t("applicationForm.termsTitle")}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-5 pt-5">
                <button
                  type="button"
                  className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${
                    isBn ? "font-nsb" : "font-archivo"
                  }`}
                  onClick={completeFormStep}
                >
                  <span className="h-8">
                    {t("applicationForm.nextStepBtn")}
                  </span>
                </button>
              </div>
            </div>
          )}
          {formStep === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-[210px_auto] gap-6 items-center">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <p>
                    <span>{t("applicationFormStep2.mainDocumentTitle")}</span>
                    <span className="text-[#F02727]">*</span>
                  </p>
                  <p className="text-[#848696] text-xs font-medium leading-5">
                    {t("applicationFormStep2.mainDocumentDescription")}
                  </p>
                </div>

                <div className="w-full">
                  <label htmlFor="mainFile" className="w-80 h-40 block">
                    {singleImage ? (
                      singleImage.type.includes("pdf") ? (
                        <Document file={URL.createObjectURL(singleImage)} className="overflow-hidden w-80 h-40">
                          <Page pageNumber={1} width={320} height={160} />
                        </Document>
                      ) : (
                        <img
                          src={URL.createObjectURL(singleImage)}
                          alt="uploaded-image"
                          className="w-80 h-40 object-fit"
                        />
                      )
                    ) : (
                      <UploadButton />
                    )}
                  </label>
                  <input
                    {...register("mainFile", {
                      onChange: (e) => setSingleImage(e.target.files[0]),
                      required: true,
                    })}
                    className="hidden"
                    id="mainFile"
                    type="file"
                  />

                  {errors.mainFile && (
                    <p className="text-[#F02727] font-medium w-full">
                      {singleImage ? "" : t("validation.mainFile")}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[210px_auto] gap-6 items-center">
                <div className="w-full font-medium text-lg text-thunder-500">
                  <p>
                    <span>{t("applicationFormStep2.otherDocumentsTitle")}</span>
                  </p>
                  <p className="text-[#848696] text-xs font-medium leading-5">
                    {t("applicationFormStep2.otherDocumentsDescription")}
                  </p>
                </div>
                <div className="w-full">
                  <label htmlFor="others" className="w-80 block">
                    {otherFiles.length > 0 ? (
                      <div className="grid grid-cols-3 gap-4">
                        {otherFiles.map((file, index) =>
                          file.type.includes("pdf") ? (
                            <div key={index} className="relative w-80 h-40">
                              <Document file={URL.createObjectURL(file)}  className="overflow-hidden w-80 h-40">
                                <Page pageNumber={1} width={320} height={160} />
                              </Document>
                            </div>
                          ) : (
                            <div key={index} className="relative w-80 h-40">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`uploaded-image-${index}`}
                                className="w-80 h-40 object-cover"
                              />
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <UploadButton />
                    )}
                  </label>
                  <input
                    id="others"
                    className="hidden"
                    type="file"
                    {...register("others", {
                      onChange: (e) => handleMultipleImageChange(e),
                    })}
                    multiple
                  />
                </div>
              </div>
              <div className="flex justify-center gap-5 pt-5">
                <button
                  type="submit"
                  className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${
                    isBn ? "font-nsb" : "font-archivo"
                  }`}
                >
                  <span className="h-8">{t("applicationForm.submitBtn")}</span>
                </button>
              </div>
            </div>
          )}
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default ApplicationForm;
