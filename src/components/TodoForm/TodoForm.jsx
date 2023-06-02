import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Form, Label, Input, Button } from './ContactForm.styled';

export class TodoForm extends Component {
  state = {
    name: '',
    note: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', note: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="">
          Note
          <textarea
            id=""
            name="note"
            value={this.state.note}
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button type="submit">Add Note</button>
      </form>
    );
  }
}
