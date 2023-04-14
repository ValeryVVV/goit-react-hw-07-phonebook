import ContactList from "./ContactLists/ContactLists";
import Filter from "./Filter/Filter";

import style from './App.module.css';
import ContactForm from "./ContactForm/ContactForm";

export default function App() {
    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )

};
