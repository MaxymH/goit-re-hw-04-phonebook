import PropTypes from 'prop-types';

import s from './contactListItem.module.css'

const ContactListItem = ({ id, name, number, deleted }) => {
    return (
    <li className={s.item} >
        {name}: {number}
            <button
                className={s.button}
        type="button"
        onClick={() => deleted(id)}
        >
        Delete
        </button>
    </li>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleted: PropTypes.func.isRequired,
}


export default ContactListItem