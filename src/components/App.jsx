import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import defaultContacts from './contacts/contacts.json';
import Section from "./section";
import Contacts from "./contacts";
import Form from "./form";
import Filter from './filter'
// import Radio from './radioButton';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

export class App extends Component {
  state = {
  // contacts: defaultContacts,
  contacts: [],
  filter: '',
  // name: '',
  // number: ''
  }



  formSubmitHandle = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const getAllContactsNames = this.state.contacts.map(cont => cont.name);

    if (getAllContactsNames.includes(name)) {
      return Notify.warning(`${name} is already in contacts`);
    }
  
    // this.setState(prevState => ({
    //   contacts: [newContact, ...prevState.contacts]
    // }))
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }));
    
  };


 

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    });
  };
  
  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContatcts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    // const { filter } = this.state;
    const visibleContacts = this.getVisibleContatcts();
 
    return (
      <Section title='Phonebook'>
        <Form
          onSubmitHandle={this.formSubmitHandle} />
        
        <Contacts
          title='Contacts'
         
          contacts={visibleContacts}
          onDeliteContact={this.deliteContact}>
          
          <Filter value={filter} onChange={this.changeFilter} />
           {contacts.length === 0 ? (
            <div>Emty</div>) : <div>Yes</div>
          }
          
        </Contacts>
        
        {/* <Radio/> */}
      </Section>
    );
  }
}

