/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useTranslation } from 'react-i18next';
import ApplicationCardStep2 from './ApplicationCardStep2';

const ApplicationForm = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const [formStep, setFormStep] = useState(0);

  const { register, control, handleSubmit } = useForm();

  const completeFormStep = () => {
    setFormStep((step) => step + 1);
  };

  console.log(formStep);

  const renderButton = () => {
    if (formStep === 0) {
      return (
        <div className="flex justify-center gap-5 pt-5">
          <button
            type="button"
            className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${isBn ? 'font-nsb' : 'font-archivo'}`}
            onClick={completeFormStep}
          >
            <span className="h-8">{t('applicationForm.nextStepBtn')}</span>
          </button>
        </div>
      );
    } else if (formStep === 1) {
      return (
        <div className="flex justify-center gap-5 pt-5">
          <button
            type="submit"
            className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${isBn ? 'font-nsb' : 'font-archivo'}`}
            onClick={completeFormStep}
          >
            <span className="h-8">{t('applicationForm.submitBtn')}</span>
          </button>
        </div>
      );
    } else {
      return undefined;
    }
  };
  const formSubmit = () => {
    console.log('form submitted');
  };

  return (
    <div className="w-[794px] mx-auto bg-white rounded-xl shadow-applicationBox p-10">
      <div className="flex gap-10 w-full justify-center items-center pb-10">
        <div
          className="flex gap-3.5 cursor-pointer text-thunder-500 text-[22px] font-normal"
          onClick={() => setFormStep(0)}
        >
          <h1 className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${formStep === 0 ? 'bg-plant-700 text-white' : ''}`}>
            <span>{t('applicationForm.formCount1')}</span>
          </h1>
          <h1 className={`${formStep === 0 ? 'text-plant-700 font-semibold' : ''}`}>{t('applicationForm.form1Title')}</h1>
        </div>

        <div
          className="flex gap-3.5 cursor-pointer text-thunder-500 text-[22px] font-normal"
          onClick={() => setFormStep(1)}
        >
          <h1 className={`border border-plant-700 rounded-full w-7 h-7 flex justify-center items-center ${formStep === 1 ? 'bg-plant-700 text-white' : ''}`}>{t('applicationForm.formCount2')}</h1>
          <h1 className={`${formStep === 1 ? 'text-plant-700 font-semibold' : ''}`}>{t('applicationForm.form2Title')}</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        {formStep === 0 && (
          <div className="space-y-5">
            <div className="grid grid-cols-[200px_auto] gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t('applicationForm.nameLabel')}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register('name')}
                  type="text"
                  placeholder={t('applicationForm.namePlaceHolder')}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t('applicationForm.addressLabel')}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register('address')}
                  type="text"
                  placeholder={t('applicationForm.addressPlaceHolder')}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-6">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t('applicationForm.detailsLabel')}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <textarea
                  {...register('reason')}
                  placeholder={t('applicationForm.detailsPlaceHolder')}
                  required
                  className="w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg resize-none"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-6">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t('applicationForm.paymentLabel')}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-[494px] gap-3 flex">
                {/* <button
                type="button"
                {...register("paymentMethod", { value: t("applicationForm.paymentMethod1") })}
                  className="py-[5px] pr-[80px] pl-[72px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                >
                  {t("applicationForm.paymentMethod1")}
                </button>
                <button
                type="button"
                {...register("paymentMethod", { value: t("applicationForm.paymentMethod2") })}
                  className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                >
                  {t("applicationForm.paymentMethod2")}
                </button> */}
                <div className="w-1/2">
                  <input
                    type="radio"
                    id="bkash"
                    {...register('paymentMethod')}
                    value={t('applicationForm.paymentMethod1')}
                    className="hidden"
                  />
                  <label
                    htmlFor="bkash"
                    className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                  >
                    {t('applicationForm.paymentMethod1')}
                  </label>
                </div>
                <div className="w-1/2">
                  <input
                    type="radio"
                    id="nagad"
                    {...register('paymentMethod')}
                    value={t('applicationForm.paymentMethod2')}
                    className="hidden"
                  />
                  <label
                    htmlFor="nagad"
                    className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                  >
                    {t('applicationForm.paymentMethod2')}
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t('applicationForm.phoneLabel')}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register('phone')}
                  type="text"
                  placeholder={t('applicationForm.phonePlaceholder')}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="flex gap-6 items-center pl-56">
              <div className="w-full pb-5">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    {...register('checkbox')}
                    className="checkbox checkbox-primary"
                  />
                  <span className="w-[480px] text-thunder-500 text-lg pl-2">{t('applicationForm.checkboxTitle')}</span>
                </label>
                <p className="text-thunder-500 text-base">{t('applicationForm.termsTitle')}</p>
              </div>
            </div>
          </div>
        )}
        {formStep === 1 && (
          <ApplicationCardStep2
            t={t}
            register={register}
            control={control}
          ></ApplicationCardStep2>
        )}
        {renderButton()}
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ApplicationForm;
