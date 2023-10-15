import Achievements from '../Achievements/Achievements';
import Application from '../Application/Application';
import Banner from '../Banner/Banner';
import RecentDonations from '../RecentDonations/RecentDonations';

const Home = () => {
  return (
    <div>
      <Banner />
      <Achievements />
      <Application />
      <RecentDonations />
    </div>
  );
};

export default Home;
