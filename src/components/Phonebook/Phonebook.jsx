
import { useEffect, useState } from "react"
import { nanoid } from 'nanoid';

import Filter from "./Filter";
import TitlePhonebook from "./TitlePhonebook";
import Form from "./Form"
import ContactList from "./ContactList";

const Phonebook = () => {
    const [contacts, setContacts] = useState(() => { return JSON.parse(window.localStorage.getItem('contacts'))?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]})
    const [filter, setFilter] = useState('')

    useEffect(() => {
    const contacts = localStorage.getItem('contacts')
            if (!contacts || contacts.length === 0) {
                return
            } else {
                const parseContacts = JSON.parse(contacts)
        setContacts(
            parseContacts
        )
            }
    }, [])
            
    useEffect(() => {
    
    localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    
    const addContact = ({ name, number }) => {
        if (contacts.find(item => item.name === name)) {
            alert(`${name} is already in your Phonebook`);
            return;
            }

        setContacts(prevState => {
            const newContact = {
            id: nanoid(),
            name,
            number,
        };
        return[...prevState, newContact];
        })
        
    }
    const filterr = e => {
        setFilter(e.target.value)
    }

    const filteredContact = () => {
    if (!filter) {
            return contacts;
        }
        const filteredContacts = contacts.filter(({ name }) => {
            const res = name.toLowerCase().includes(filter.toLowerCase());
            return res;
        });
        
        return filteredContacts;
    }

    const deleted = id => {
        
        const res = contacts.filter(contact => contact.id !== id)
        setContacts(res)
    }

    return ( 
            <div>
                <TitlePhonebook title='Phonebook'/>
            <Form
                onSubmit={addContact}
            />
            <TitlePhonebook
                title='Contacts'
            />
            <Filter
                onChange={filterr}
                filter={filter}
            />
                <ContactList
                    contacts={filteredContact()}
                    deleted={deleted}
                />
            </div>
        )
}


export default Phonebook