import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';

const DashboardLayout = () => {
  return (
    <>
      <HeaderDashboard />
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
