import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import style from './all.module.css'
import defaultContacts from './contacts/contacts.json'

import Contacts from "./contacts";





export class App extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
  contacts: defaultContacts,
  filter: '',
  name: '',
  number: ''
}
  
  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  handleChange = (event) => {

  }

  handleSubmit = (ev) => {
    console.log(ev.target.value);
    this.setState()
  }

  render() {
    const { contacts } = this.state
  
    return (
    
    <div className={style.phonebook}>
        <h1>Phonebook</h1>
        <form className={style.contacts} onChange={this.handleSubmit}>
          <label className={style.label__header} htmlFor={this.nameInputId}>Name</label>
          <input
            className={style.label__input}
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={style.label__header} htmlFor={this.numberInputId}>Number</label>
          <input
            className={style.label__input}
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={style.phonebook__button} type="submit">Add contact</button>
          
         
          
        
        </form>
         <Contacts
          title='Contacts'
          contacts={contacts}
          onDeliteContact = {this.deliteContact}
          />
      </div>
    );
  }
}

