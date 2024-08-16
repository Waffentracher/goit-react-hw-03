import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles['contact-info']}>
        <p>
          <FaUser className={styles['contact-icon']} />
          {name}
        </p>
        <p>
          <FaPhone className={styles['contact-icon']} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
