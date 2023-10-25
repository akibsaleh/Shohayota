import { useForm } from 'react-hook-form';
import BangladeshIcon from './BangladeshIcon';
import { useTranslation } from 'react-i18next';
import { DevTool } from '@hookform/devtools';

const ContactForm = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control flex gap-x-6">
          <label className="label w-52 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className={`label-text ${isBn ? 'font-nsb' : 'font-archivo'}`}>{t('contact.nameInputLabel')}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder={t('contact.nameInput')}
            id="fullName"
            {...register('fullName')}
            className={`input leading-[26px] w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze ${isBn ? 'font-nsb' : 'font-archivo'}`}
          />
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-52 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className={`label-text ${isBn ? 'font-nsb' : 'font-archivo'}`}>{t('contact.phoneInputLabel')}</span>
            <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center justify-start w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze divide-x divide-solid gap-x-2.5">
            <span className="flex gap-x-1 leading-[26px] text-thunder-500 font-archivo">
              <span className="mt-[3px]">
                <BangladeshIcon />
              </span>
              <span className={isBn ? 'font-nsb' : 'font-archivo'}>{t('contact.phoneInputPrefix')}</span>
            </span>
            <input
              type="text"
              placeholder={t('contact.phoneInput')}
              id="phone"
              {...register('phone')}
              className={`input w-full bg-haze pl-2.5 leading-[26px] ${isBn ? 'font-nsb' : 'font-archivo'}`}
            />
          </div>
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-52 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className={`label-text ${isBn ? 'font-nsb' : 'font-archivo'}`}>{t('contact.emailInputLabel')}</span>
          </label>
          <input
            type="text"
            placeholder={t('contact.emailInput')}
            id="email"
            {...register('email')}
            className={`input leading-[26px] w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze ${isBn ? 'font-nsb' : 'font-archivo'}`}
          />
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-52 text-thunder-500 leading-[26px] pt-2 pb-1.5">
            <span className={`label-text ${isBn ? 'font-nsb' : 'font-archivo'}`}>{t('contact.messageInputLabel')}</span>
            <span className="text-red-600">*</span>
          </label>
          <textarea
            className={`textarea textarea-bordered h-24 w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze ${isBn ? 'font-nsb' : 'font-archivo'}`}
            placeholder={t('contact.messageInput')}
            id="message"
            {...register('message')}
          ></textarea>
        </div>
        <div className="form-control flex justify-center gap-5 pt-5">
          <button
            type="submit"
            className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 ${isBn ? 'font-nsb' : 'font-archivo'}`}
          >
            <span className="h-8">{t('contact.submitButton')}</span>
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ContactForm;
