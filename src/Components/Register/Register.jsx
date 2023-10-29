import { Link } from 'react-router-dom';
import loginBg from '../../assets/loginBG.png';
import relief from '../../assets/relief.png';
import logoWhite from '../../assets/shohayota-white.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const [visible, setVisible] = useState(false);
  const { handleRegistration, profileUpdate } = useContext(AuthContext);
  const passwordRef = useRef();
  const bgImg = {
    backgroundImage: `url(${loginBg})`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(name, email, password);
    handleRegistration(email, password)
      .then(() => profileUpdate(name).then(() => toast.success(`${name} registered successfully`)))
      .catch((error) => toast.error(error.message));
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-plant-700">
      <div
        className="w-full flex justify-evenly items-center bg-no-repeat bg-center"
        style={bgImg}
      >
        <div className="p-4 sm:p-7 bg-white w-full max-w-md rounded-md">
          <div className="flex flex-col gap-y-2 w-full items-center py-2">
            <img
              src={logoWhite}
              alt="Shohayota"
              className="h-8 w-auto"
            />
            <p className="mt-2 text-sm text-gray-600 ">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-plant-700 decoration-2 hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 "
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                      required=""
                      placeholder="Enter your Full Name"
                    />
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 "
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                      required=""
                      aria-describedby="email-error"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 "
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <div>
                      <label
                        htmlFor="password"
                        className="sr-only"
                      >
                        Label
                      </label>
                      <div className="flex rounded-md shadow-sm">
                        <input
                          ref={passwordRef}
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 block w-full border border-gray-300 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter password of minimum 6 character"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setVisible(!visible);
                            passwordRef.current.type === 'password' ? (passwordRef.current.type = 'text') : (passwordRef.current.type = 'password');
                          }}
                          className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-plant-100 text-plant-800 transition-all text-xl"
                        >
                          {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                <button
                  type="submit"
                  className="text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 w-40 place-self-center mt-3"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
        <img
          src={relief}
          alt="charity"
          className="h-[500px] w-auto"
        />
      </div>
    </main>
  );
};

export default Register;
