
import PropTypes from 'prop-types';

import ContactListItem from "./ContactListItem";


const ContactList = ({ contacts, deleted }) => {
    const elements = contacts.map(({id, name, number}) => {
        return (
            <ContactListItem
            key={id}
                name={name}
                id={id}
                number={number}
                deleted={deleted}
        />
        )
        
    })
        return (
            <ul>
                {elements}
            </ul>
        )
}

ContactList.defaultProps = {
    contacts: [],
};

ContactList.propTypes ={
    deleted: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            })
        ),
}

export default ContactList;