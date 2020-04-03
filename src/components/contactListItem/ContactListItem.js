import React from "react";
import s from '../app.module.css'

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={s.li}>
      <span >{name}  </span>
      <span >{number}</span>
      <button className={s.button} onClick={(e)=>deleteContact(e.target.id)} type="button" id={id}>
      &#8855;
      </button>
    </li>
  );
};

export default ContactListItem;