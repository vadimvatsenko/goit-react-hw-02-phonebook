import React, { Component } from "react";
import { nanoid } from 'nanoid'
import style from './all.module.css'
// import Section from './section/section';
// import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
// import Statistics from "./statistics/statistics";
// import Notification from "components/notification/notification";
// import PropTypes from 'prop-types';

// const id = nanoid();

export class App extends Component {
 state = {
  contacts: [],
  name: ''
  }
  


  render() {


    return (
      <div className={style.phonebook}>
        <h1>Phonebook</h1>
        <form className={style.contacts}>
          <label className={ style.label__header} htmlFor="name">Name</label>
          <input
            className={style.label__input}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={ style.label__header} htmlFor="tel">Number</label>
          <input
            className={style.label__input}
            id='tel'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={style.phonebook__button} type="submit">Add contact</button>
          
          <div>
            <h2>Contacts</h2>
            
          </div>
          
        
        </form>
      </div>
    );
  }
}

