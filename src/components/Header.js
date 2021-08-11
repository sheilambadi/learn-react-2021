import PropTypes from 'prop-types'

// destructure props
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tracker App'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
