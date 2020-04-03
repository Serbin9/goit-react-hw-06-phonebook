import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from '../app.module.css'


class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContant({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p className={s.name}>Name</p>
              <input className={s.input}
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
          </div>
          <div>
            <p className={s.name}>Number</p>
            <input className={s.input}
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={number}
            />
          </div>
          <div>
            <button className={s.buttonAdd} type="submit">Add contact</button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;