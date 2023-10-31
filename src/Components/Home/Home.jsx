/* eslint-disable react/prop-types */
import Achievements from '../Achievements/Achievements';
import Application from '../Application/Application';
import Banner from '../Banner/Banner';
import RecentDonations from '../RecentDonations/RecentDonations';

const Home = ({ homeRef }) => {
  return (
    <div
      ref={homeRef}
      id="home"
      className="overflow-hidden"
    >
      <Banner />
      <Achievements />
      <Application />
      <RecentDonations />
    </div>
  );
};

export default Home;
