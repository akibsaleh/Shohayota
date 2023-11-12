import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/dashboardLogo.svg';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
const HeaderDashboard = () => {
  const { loggedInUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    return logOut()
      .then(() => {
        navigate('/');
        toast.success('Logged Out successfully');
      })
      .catch(() => toast.error('Something went wrong'));
  };
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-plant-700 border-b border-white/[.5] py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-white"
            href="/"
            aria-label="Brand"
          >
            <img
              src={logo}
              alt="Shohayota"
              className="h-8 w-auto"
            />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <Link
              to="/dashboard"
              className="font-medium text-white sm:py-6 "
            >
              Dashboard
            </Link>
            <NavLink
              to="/dashboard/pending"
              className="font-medium text-white sm:py-6 "
            >
              Pending
            </NavLink>
            <NavLink
              to="/dashboard/approved"
              className="font-medium text-white sm:py-6 "
            >
              Approved
            </NavLink>
            <div className="bg-plant-600 text-white px-5 py-2 rounded-full font-semibold flex justify-center items-center gap-3">
              <p>{loggedInUser?.displayName ? loggedInUser?.displayName : 'User'}</p>{' '}
              <button
                type="button"
                onClick={handleLogoutBtn}
              >
                <RiLogoutBoxRLine className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDashboard;
