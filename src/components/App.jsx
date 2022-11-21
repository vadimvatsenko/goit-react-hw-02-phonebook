import React, { Component } from "react";
// import PropTypes from 'prop-types';

// import style from './all.module.css'
import defaultContacts from './contacts/contacts.json';

import Section from "./section";
import Contacts from "./contacts";
import Form from "./form";
import Radio from './radioButton';

export class App extends Component {
  state = {
  contacts: defaultContacts,
  filter: '',
  // name: '',
  // number: ''
  }

  formSubmitHandle = (data) => {
    console.log(data)
  }
  
  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }





  render() {
    const { contacts } = this.state
  
    return (
      <Section
        title='Phonebook'>
        <Form
          onSubmitHandle={this.formSubmitHandle} />
        <Contacts
          title='Contacts'
          contacts={contacts}
          onDeliteContact = {this.deliteContact}
        />
        <Radio/>
      </Section>
    );
  }
}

