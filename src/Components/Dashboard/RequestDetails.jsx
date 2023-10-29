import { useLoaderData } from 'react-router-dom';

const RequestDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>RequestDetails :</div>;
};

export default RequestDetails;
