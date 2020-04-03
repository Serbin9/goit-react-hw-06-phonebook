import React, { Component } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";
import s from './app.module.css'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import phone from '../animation/phone.module.css'
import store from './../redux/store';
import {addContant, deleteContact, filterContact} from '../redux/phoneAction'
console.log('store', store)

class App extends Component {
  state = {
  //   contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    // ],
    filter: "",
    flag: false
  };

  // componentDidMount(){
    
    // const contacts = (JSON.parse(localStorage.getItem('contacts') !== null)) ? (JSON.parse(localStorage.getItem('contacts'))):[];
    // console.log('object', contacts)
    // this.setState(prevState=>({contacts:[...prevState.contacts, ...contacts], flag:true}))
  // }
  // componentDidUpdate(){
    // localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  // }
  
  submitContact = (data) => {

    const isNameExist= this.state.contacts.some(contact=>contact.name===data.name)
   ! isNameExist
    ? this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))
    : alert(`Write correct name`)
  };

  // deleteContact = e => {
  //   const id = e.target.id;
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id)
  //   }));
  // };

  nameFilter = async(e) => {
    await this.setState({
      filter: e.target.value
    });
    await this.props.filterContact(this.state.filter);
  };

  // getFilteredContacts = () => {
  //   return this.state.contacts.filter(contact =>
      // contact.name.toLowerCase().includes(this.state.filter)
  //   );
  // };

  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          // in={this.state.flag}
          timeout={1500}
          classNames={phone}>
        
        <h1 className={s.h1}>Phonebook</h1>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} addContant={this.props.addContant} />
        <h2 className={s.h2}>Contacts</h2>
        <Filter nameFilter={this.nameFilter} />
        <ContactList
          contacts={this.state.filter===""?this.props.contacts:this.props.filter}
           deleteContact={this.props.deleteContact}
        />
      </div>
    )

    }
}
const mapStateToProps=state=>{
  console.log('state', state)
  return {
    contacts: state.phoneReducer.contacts,
    // id: state.phoneReducer.id,
    filter: state.phoneReducer.filter
  }
}
export default connect(mapStateToProps, {addContant, deleteContact, filterContact})(App);