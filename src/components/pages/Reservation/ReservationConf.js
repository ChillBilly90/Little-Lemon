import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReservationConfirmed = () => {
  return (
    <div className="container ReservationConfirmed ">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>You've compeleted our reservation process!</h2>
      <p>You will recive an email, sent to the address provided.</p>
    </div>
  );
};

export default ReservationConfirmed;