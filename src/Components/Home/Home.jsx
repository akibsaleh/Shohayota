/* eslint-disable react/prop-types */
import axios from 'axios';
import Achievements from '../Achievements/Achievements';
import Application from '../Application/Application';
import Banner from '../Banner/Banner';
import RecentDonations from '../RecentDonations/RecentDonations';
import { useEffect, useState } from 'react';

const Home = ({ homeRef }) => {
  const [approvedData, setApprovedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://shohahoyta-server.vercel.app/approvedStatus');
        setApprovedData(response.data);
      } catch (error) {
        console.error('Error fetching approvedData: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        ref={homeRef}
        id="home"
        className="overflow-hidden"
      >
        <Banner />
        <Achievements approvedData={approvedData} />
        <Application />
      </div>
      <RecentDonations />
    </>
    
  );
};

export default Home;
