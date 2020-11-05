import React, { Component } from 'react';
import ToDoForm from './ToDoForm';

class List extends Component {
    showTodos(todos){
        return(
            todos.map((todo) => {
            return (
                <div className="todo" 
                key="todo-{todo.title}" 
                onClick={() => this.toggleTodo(todo)}>
                    {todo.title} {todo.done ? "oui" : "non"}
                </div>
                )
            })
        );
    }
    toggleTodo(todo){
        //alert("todo clicked"+" "+todo.title);
    }
    render(){
      return (
        <div className="List">
            todos: [{this.props.todos.length}]
            {this.showTodos(this.props.todos)}
        </div>
        );
    }
}

export default List;