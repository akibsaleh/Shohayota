/* eslint-disable react/prop-types */

const ApplicationCardStep2 = ({t, register}) => {

  return (
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
    </div>
  );
};

export default ApplicationCardStep2;
