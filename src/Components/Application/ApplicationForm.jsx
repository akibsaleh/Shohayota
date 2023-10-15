import { useTranslation } from "react-i18next";

const ApplicationForm = () => {
  const { t, i18n } = useTranslation("global");
  const isBn = i18n.language === "bn";

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="flex gap-6">
        <div className="w-[210px] font-medium text-lg text-thunder-500">
          <label>
            <span>{t("applicationForm.nameLabel")}</span>
            <span className="text-[#F02727]">*</span>
          </label>
        </div>
        <div>
          <input
            name="name"
            type="text"
            placeholder={t("applicationForm.namePlaceHolder")}
            required
          />
        </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
