/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useTranslation } from "react-i18next";
import ApplicationCardStep2 from "./ApplicationCardStep2";

const ApplicationForm = () => {
  const { t, i18n } = useTranslation("global");
  const isBn = i18n.language === "bn";
  const [formStep, setFormStep] = useState(0);


  const { register, control, handleSubmit } = useForm();

  const completeFormStep = () => {
    setFormStep((step) => step + 1);
  };

  const formSubmit = (data) => {
    console.log('form submitted', data);
  };

  return (
    <div className="w-[794px] mx-auto bg-white rounded-xl">
      <div className="flex gap-5">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setFormStep(0)}
        >
          <h1>{t("applicationForm.formCount1")}</h1>
          <h1>{t("applicationForm.form1Title")}</h1>
        </div>

        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setFormStep(1)}
        >
          <h1>{t("applicationForm.formCount2")}</h1>
          <h1>{t("applicationForm.form2Title")}</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        {formStep === 0 && (
          <div className="p-10 space-y-5">
            <div className="flex gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t("applicationForm.nameLabel")}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register("name")}
                  type="text"
                  placeholder={t("applicationForm.namePlaceHolder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t("applicationForm.addressLabel")}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register("address")}
                  type="text"
                  placeholder={t("applicationForm.addressPlaceHolder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t("applicationForm.detailsLabel")}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <textarea
                  {...register("reason")}
                  placeholder={t("applicationForm.detailsPlaceHolder")}
                  required
                  className="w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t("applicationForm.paymentLabel")}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-[494px] space-x-3 flex">
                <input
                  type="radio"
                  id="bkash"
                  {...register("paymentMethod")}
                  value={t("applicationForm.paymentMethod1")}
                  className="hidden"
                />
                <label
                  htmlFor="bkash"
                  className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                >
                  {t("applicationForm.paymentMethod1")}
                </label>
                <input
                  type="radio"
                  id="nagad"
                  {...register("paymentMethod")}
                  value={t("applicationForm.paymentMethod2")}
                  className="hidden"
                />
                <label
                  htmlFor="nagad"
                  className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
                >
                  {t("applicationForm.paymentMethod2")}
                </label>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <label>
                  <span>{t("applicationForm.phoneLabel")}</span>
                  <span className="text-[#F02727]">*</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder={t("applicationForm.phonePlaceholder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-full">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    {...register("checkbox")}
                    className="checkbox checkbox-primary"
                  />
                  <span className="w-[480px] text-thunder-500 text-lg pl-2">
                    {t("applicationForm.checkboxTitle")}
                  </span>
                </label>
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
            <span className="h-8">{t("applicationForm.nextStepBtn")}</span>
          </button>
        </div>
          </div>
        )}
        {formStep === 1 && (
          <div className="p-10 space-y-5">
      <div className="flex gap-6 items-center">
        <div className="w-full font-medium text-lg text-thunder-500">
          <label>
            <span>{t("applicationFormStep2.mainDocumentTitle")}</span>
            <span className="text-[#F02727]">*</span>
          </label>
          <p className="text-[#848696] text-xs font-medium leading-5">
            {t("applicationFormStep2.mainDocumentDescription")}
          </p>
        </div>
        <div className="w-full">
          <input
            {...register("mainFile")}
            id="mainFile"
            type="file"
            required
            
          />
        </div>
        <div>
            <label htmlFor="mainFile">{t("applicationFormStep2.upload")}</label>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="w-full font-medium text-lg text-thunder-500">
          <label>
            <span>{t("applicationFormStep2.otherDocumentsTitle")}</span>
            <span className="text-[#F02727]">*</span>
          </label>
          <p className="text-[#848696] text-xs font-medium leading-5">
            {t("applicationFormStep2.otherDocumentsDescription")}
          </p>
        </div>
        <div className="w-full">
          <input
            id="others"
            type="file"
            {...register("others")}
            required
            
          />
        </div>
        <div>
            <label htmlFor="mainFile">{t("applicationFormStep2.upload")}</label>
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
  );
};

export default ApplicationForm;
