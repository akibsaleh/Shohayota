/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';

const ApplicationForm = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="w-[794px] mx-auto bg-white rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="p-10 space-y-5"
      >
        <div className="flex gap-6 items-center">
          <div className="w-full font-medium text-lg text-thunder-500">
            <label>
              <span>{t('applicationForm.nameLabel')}</span>
              <span className="text-[#F02727]">*</span>
            </label>
          </div>
          <div className="w-full">
            <input
              name="name"
              type="text"
              placeholder={t('applicationForm.namePlaceHolder')}
              required
              className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-full font-medium text-lg text-thunder-500">
            <label>
              <span>{t('applicationForm.addressLabel')}</span>
              <span className="text-[#F02727]">*</span>
            </label>
          </div>
          <div className="w-full">
            <input
              name="address"
              type="text"
              placeholder={t('applicationForm.addressPlaceHolder')}
              required
              className="w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-full font-medium text-lg text-thunder-500">
            <label>
              <span>{t('applicationForm.detailsLabel')}</span>
              <span className="text-[#F02727]">*</span>
            </label>
          </div>
          <div className="w-full">
            <textarea
              name="reason"
              placeholder={t('applicationForm.detailsPlaceHolder')}
              required
              className="w-[480px] h-[100px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none text-lg resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-full font-medium text-lg text-thunder-500">
            <label>
              <span>{t('applicationForm.paymentLabel')}</span>
              <span className="text-[#F02727]">*</span>
            </label>
          </div>
          <div className="w-[494px] space-x-3 flex">
            <button
              name="bkash"
              className="py-[5px] pr-[80px] pl-[72px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
            >
              {t('applicationForm.paymentMethod1')}
            </button>
            <button
              name="nagad"
              className="py-[5px] pr-[72px] pl-[80px] bg-haze border-[1px] border-plant-100 rounded-md text-thunder-500 text-lg"
            >
              {t('applicationForm.paymentMethod2')}
            </button>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-full font-medium text-lg text-thunder-500">
            <label>
              <span>{t('applicationForm.phoneLabel')}</span>
              <span className="text-[#F02727]">*</span>
            </label>
          </div>
          <div className="w-full">
            <input
              name="phone"
              type="text"
              placeholder={t('applicationForm.phonePlaceholder')}
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
                defaultChecked="checked"
                name="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="w-[480px] text-thunder-500 text-lg pl-2">{t('applicationForm.checkboxTitle')}</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
