import PropTypes from 'prop-types';


const TitlePhonebook = ({ title }) => {
    return (
        <h2 >{title }</h2>
    )
}

TitlePhonebook.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TitlePhonebook