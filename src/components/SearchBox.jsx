import styles from './SearchBox.module.css';
import PropTypes from 'prop-types';
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts..."
      className={styles.input}
    />
  );
};
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBox;
