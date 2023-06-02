import { Component } from 'react';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoFilter } from './TodoFilter/TodoFilter';
import { TodoList } from './TodoList/TodoList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    todoNotes: [
      { id: 'id-1', name: 'Rosie Simpson', note: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', note: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', note: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', note: '227-91-26' },
    ],
    filter: '',
  };

  addNote = data => {
    console.log(data);
    const newNote = { id: nanoid(2), ...data };

    this.setState(prevState => ({
      todoNotes: [...prevState.todoNotes, newNote],
    }));
  };

  deleteNote = noteId => {
    this.setState(prevState => ({
      todoNotes: prevState.todoNotes.filter(note => note.id !== noteId),
    }));
  };

  handleChangeFiter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  visibleNotes = () => {
    const { todoNotes, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return todoNotes.filter(note =>
      note.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const filtredNotes = this.visibleNotes();
    return (
      <div>
        <TodoForm onSubmit={this.addNote} />
        <TodoFilter
          value={this.state.filter}
          onChange={this.handleChangeFiter}
        />
        <TodoList todoNotes={filtredNotes} onDelete={this.deleteNote} />
      </div>
    );
  }
}
