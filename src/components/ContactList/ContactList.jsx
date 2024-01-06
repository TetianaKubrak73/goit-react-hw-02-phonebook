import React from 'react';
import style from './ContactList.module.css';

// Компонент списка контактов
const ContactList = ({ contacts, onRemoveContact }) => (
  <list>
    {contacts.map(contact => (
      <item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка удаления контакта
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </item>
    ))}
  </list>
);

export default ContactList;
