import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './form.module.css'

const Form = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

   const handleChange = (e) => {
        const {name , value} = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            
            case 'number': 
                setNumber(value)
                break;
        
            default:
                return;
        }
    }
    const onSubmitForm = e => {
        e.preventDefault()
        onSubmit({name, number})
        setName('')
        setNumber('')
    }

    return (
            <form className={s.form} onSubmit={onSubmitForm}>
                <h3 className={s.title}>Name</h3>
                <label>
                    <input
                        className={s.input}
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <h3 className={s.title}>Number</h3>
                <label>
                    <input
                        className={s.input}
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={s.button} type='submit'>Add contact</button>
            </form>
        )
}


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}



export default Form