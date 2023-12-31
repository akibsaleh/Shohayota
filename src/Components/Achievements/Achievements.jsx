/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import people from '../../assets/people-fill.svg';
import gift from '../../assets/gift-fill.svg';
const Achievements = ({approvedData}) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEng = i18n.language === 'en';

  const totalApproved = approvedData.length;
  const totalAmount = approvedData.reduce((acc, curr) => acc + curr.amount, 0);
  const totalAmountBD = totalAmount.toLocaleString("bn-BD");
  const totalApprovedBD = totalApproved.toLocaleString("bn-BD");

  return (
    <div className="relative max-w-screen-xl lg:mx-auto bg-apache min-h-[212px] -mt-[106px] z-20 rounded-[20px] px-10 md:px-[60px] py-[50px] flex flex-col md:flex-row mx-5">
      <div className="w-full md:w-1/2 lg:w-6/12">
        <h2 className=" text-3xl md:text-[42px] text-thunder-700 leading-snug font-bold text-center lg:text-left pb-5 md:pb-0">
          {isBn && (
            <span className="font-lss">
              এখন পর্যন্ত
              <br />
              আমাদের অর্জনসমূহ
            </span>
          )}
          {isEng && (
            <span className="font-archivo">
              Our Accomplishments
              <br />
              to Date
            </span>
          )}
        </h2>
      </div>
      <div className="w-full md:w-1/2 lg::w-2/3 lg:w-6/12 flex gap-x-6 items-start md:items-center">
        <div className="w-1/2 lg:w-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-6 text-thunder-700">
          <img
            src={people}
            alt="Assited"
            className="w-[68] h-auto p-[14px] bg-white/40 rounded-[20px]"
          />
          <div className="text-center lg:text-left pt-5 lg:pt-0">
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal md:leading-[36px] -mb-[5px]">{t('achieve.assist')}</p>
            <p className="text-[26px] font-bold leading-[48px]">
              {isBn ? totalApprovedBD + ' জন' : totalApproved + ' Individuals'}
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:w-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-6 text-thunder-700">
          <img
            src={gift}
            alt="Donated"
            className="w-[68] h-auto p-[14px] bg-white/40 rounded-[20px]"
          />
          <div className="text-center lg:text-left pt-5 lg:pt-0">
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal -mb-[5px]">{t('achieve.donate')}</p>
            <p className="text-[26px] font-bold leading-[48px]">
            {isBn ? totalAmountBD + ' টাকা' : totalAmount + ' BDT'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
