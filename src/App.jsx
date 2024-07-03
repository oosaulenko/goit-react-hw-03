import {useEffect, useState} from 'react'
import './App.css'

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import contactsList from './contacts.json';

function App() {
    const initialState = () => {
        return JSON.parse(localStorage.getItem('contacts')) || contactsList;
    };

    const [contacts, setContacts] = useState(initialState);

    useEffect(() =>
            localStorage.setItem('contacts', JSON.stringify(contacts)),
        [contacts]
    );

    function onDelete(item) {
        setContacts(contacts.filter((contact) => contact !== item));
    }

    const [filter, setFilter] = useState('');

    function updateFilter(e) {
        setFilter(e.target.value.toLowerCase());
    }

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
    );

    const initialValues = {
        name: '',
        number: '',
    };

    const onSubmit = (values, actions) => {
        setContacts([...contacts, values]);
        actions.resetForm();
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm initialValues={initialValues} onSubmit={onSubmit}/>
            <SearchBox updateFilter={updateFilter}/>
            <ContactList contacts={filteredContacts} onDelete={onDelete}/>
        </div>
    )
}

export default App
