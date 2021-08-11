import PropTypes from 'prop-types';
import Button from './Button';

// destructure props
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Tracker App'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: 'blue',
//   backgroundColor: 'beige'
// };

export default Header;
