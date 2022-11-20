import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import style from './all.module.css'

import Contacts from "./contacts";





export class App extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  

 handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
   console.log(name, number);
   this.setState(prevState => ({
    
   }))
    // this.props.onSubmit({ name, number });
    form.reset();
  };

  render() {
    const { contacts } = this.state
  
    return (
    
    <div className={style.phonebook}>
        <h1>Phonebook</h1>
        <form className={style.contacts} onSubmit={this.handleSubmit}>
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
          
          <Contacts
            title='Contacts'
            contacts={contacts}
          />
          
        
        </form>
      </div>
    );
  }
}

