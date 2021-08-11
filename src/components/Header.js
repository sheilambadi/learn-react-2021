import PropTypes from 'prop-types'

// destructure props
const Header = ({ title }) => {
    return (
        <header>
            {/* <h1 style={{color: 'blue', backgroundColor: 'beige'}}>{title}</h1> */}
            <h1 style={headingStyle}>{title}</h1>

        </header>
    )
}

Header.defaultProps = {
    title: 'Tracker App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'blue', 
    backgroundColor: 'beige'
}

export default Header
