/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useTranslation } from "react-i18next";
import ApplicationCardStep2 from "./ApplicationCardStep2";
import BkashIcon from "./bkashIcon";
import NagadIcon from "./NagadIcon";
import FileIcon from "./FileIcon";
import UploadButton from "./UploadButton";
import axios from "axios";

const ApplicationForm = () => {
  const { t, i18n } = useTranslation("global");
  const isBn = i18n.language === "bn";
  const [formStep, setFormStep] = useState(0);

  const { register, control, handleSubmit } = useForm();

  const completeFormStep = () => {
    setFormStep((step) => step + 1);
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

      for (let i = 0; i < data.others.length; i++) {
        formData.append(`others${i+1}`, data.others[i]);
      }

      const response = await axios.post(
        "http://localhost:5000/applications",
        formData
      );
      if (response.data.insertedId) {
        alert("application submitted successfully!");
      }
    } catch (error) {
      console.error("error submitting data: ", error);
    }
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
                  {...register("name")}
                  name="name"
                  type="text"
                  placeholder={t("applicationForm.namePlaceHolder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
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
                  {...register("address")}
                  type="text"
                  name="address"
                  placeholder={t("applicationForm.addressPlaceHolder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
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
                  {...register("reason")}
                  name="reason"
                  placeholder={t("applicationForm.detailsPlaceHolder")}
                  required
                  className="w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg resize-none"
                ></textarea>
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
                    {...register("paymentMethod")}
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
                    {...register("paymentMethod")}
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
                  {...register("phone")}
                  name="phone"
                  type="text"
                  placeholder={t("applicationForm.phonePlaceholder")}
                  required
                  className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
                />
              </div>
            </div>
            <div className="flex gap-6 items-center pl-[234px]">
              <div className="w-full pb-5">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    name="checkbox"
                    {...register("checkbox")}
                    className="checkbox checkbox-primary"
                  />
                  <span className="w-[480px] text-thunder-500 text-lg pl-2">
                    {t("applicationForm.checkboxTitle")}
                  </span>
                </label>
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
                <span className="h-8">{t("applicationForm.nextStepBtn")}</span>
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
                <label htmlFor="mainFile">
                  <UploadButton />
                </label>
                <input
                  {...register("mainFile")}
                  className="hidden"
                  id="mainFile"
                  type="file"
                  accept="image/*,.pdf"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-[210px_auto] gap-6 items-center">
              <div className="w-full font-medium text-lg text-thunder-500">
                <p>
                  <span>{t("applicationFormStep2.otherDocumentsTitle")}</span>
                  <span className="text-[#F02727]">*</span>
                </p>
                <p className="text-[#848696] text-xs font-medium leading-5">
                  {t("applicationFormStep2.otherDocumentsDescription")}
                </p>
              </div>
              <div className="w-full">
                <label htmlFor="others">
                  <UploadButton />
                </label>
                <input
                  id="others"
                  className="hidden"
                  type="file"
                  accept="image/*,.pdf"
                  {...register("others")}
                  required
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
