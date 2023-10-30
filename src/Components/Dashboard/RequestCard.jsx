import PropTypes from 'prop-types';
import BkashIcon from '../Application/bkashIcon';
import NagadIcon from '../Application/NagadIcon';
import { Link } from 'react-router-dom';
const RequestCard = ({ request }) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4">
        <p className="text-sm font-medium text-gray-900">{request?.name}</p>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900 ">{request?.phone}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        {request?.paymentMethod === 'বিকাশ' || request?.paymentMethod === 'Bkash' ? (
          <span className="flex gap-x-2">
            <BkashIcon />
            {request?.paymentMethod}
          </span>
        ) : (
          <span className="flex gap-x-2">
            <NagadIcon />
            {request?.paymentMethod}
          </span>
        )}
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span
          className={`inline-flex rounded-full px-3 pt-1 pb-1.5 text-xs font-semibold leading-5 capitalize ${request?.status === 'declined' && 'bg-red-200 text-red-800'} ${
            request?.status === 'approved' && 'bg-green-200 text-green-800'
          } ${request?.status === 'pending' && 'bg-yellow-200 text-yellow-800'}`}
        >
          {request?.status}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <Link to={`/dashboard/request/${request?._id}`}>
          <button
            type="button"
            className="rounded-md border border-plant-700 px-3 py-2 text-sm font-semibold text-plant-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plant-700"
          >
            View
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default RequestCard;

RequestCard.propTypes = {
  request: PropTypes.object,
};
