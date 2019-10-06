import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ''
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  updateInput(input) {
    this.setState({newItem: input});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo App</h2>
          <br />
          <input 
            type="text" 
            placeholder="Write a Todo" 
            required 
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />

          <button 
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >Add Todo</button>

          <div>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" checked={item.isDone} />
                    {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
