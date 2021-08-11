import PropTypes from 'prop-types';
import Button from './Button';

// destructure props
const Header = ({ title }) => {
  const onClick = () => {
    console.log('Clicked');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Tracker App'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const headingStyle = {
  color: 'blue',
  backgroundColor: 'beige'
};

export default Header;
