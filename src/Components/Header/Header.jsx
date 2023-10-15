import { NavLink } from 'react-router-dom';
import logo from '../../assets/Shohayota-logo.svg';
const Header = () => {
  return (
    <div className="relative w-full bg-plant-700">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              src={logo}
              alt="Shohayota"
              className="w-auto h-10"
            />
          </span>
          <span className="font-bold font-lss text-white text-[40px] leading-none mt-1">সহায়তা</span>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-8">
            <li className="block">
              <NavLink>
                <span>হোম</span>
              </NavLink>
            </li>
            <li className="block">
              <NavLink className={`py-[22.5px] block`}>
                <span>আমরা কেন সাহায্য করছি</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span>শর্তাবলি</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span>যোগাযোগ করুন</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div>
            <button className="w-[120px] h-8 rounded-3xl p-1 bg-plant-600 flex justify-between items-center relative text-lg">
              <span className="bg-white absolute w-1/2 h-[26px] rounded-[46px] z-0 left-1"></span>
              <span className="z-10 w-1/2 h-[26px]">Ban</span>
              <span className="z-10">Eng</span>
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
            ></line>
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
            ></line>
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
            ></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
