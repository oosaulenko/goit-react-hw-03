import css from './Contact.module.css';

import {FaUser} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";

const Contact = ({item, onDelete}) => {
    return (
        <li className={css.card}>
            <div>
                <p><FaUser/>{item.name}</p>
                <p><FaPhone/>{item.number}</p>
            </div>
            <button onClick={() => onDelete(item)}>Delete</button>
        </li>
    )
}

export default Contact;