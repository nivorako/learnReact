import React, { Component } from 'react';
import ToDoForm from './Components/ToDoForm';
import List from './Components/list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : []
    };
  }
  toggleTodoState(todo){
    alert(todo.title);
  }
  onNewToDo(todo){
    let newToDoList = this.state.todos;
    newToDoList.push(todo);
    this.setState({ todos: newToDoList });
  }
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo-App</h2>
        </div>
        <div className="App-intro">
          <ToDoForm onNewToDo={this.onNewToDo.bind(this)}/>
          <List todos={this.state.todos} 
                onTodoToggle={this.toggleTodoState.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;