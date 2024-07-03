import css from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.list}>
            {contacts.map((contact, i) => {
                return (
                    <Contact
                        key={i}
                        item={contact}
                        onDelete={onDelete}
                    ></Contact>
                );
            })}
        </ul>
    )
}

export default ContactList;