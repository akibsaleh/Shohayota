import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: '#ECB869',
                color: '#272836',
              },
            },
            error: {
              style: {
                background: '#ECB869',
                color: '#272836',
              },
            },
          }}
        />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
