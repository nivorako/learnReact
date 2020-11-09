import React, { Component } from 'react';
import ToDoForm from './Components/ToDoForm';
import List from './Components/list';
import './App.css';

class Footer extends Component {
  render(){
    return(
      <div className="texte">ici y aura le texte</div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : []
    };
  }
  toggleTodoState(todo,index){
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodo = this.state.todos;
    newTodo[index] = _todo;
    this.setState({ todos : newTodo})
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
        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;