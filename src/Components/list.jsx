import React, { Component } from 'react';
import ToDoForm from './ToDoForm';

class List extends Component {
    showTodos(todos){
        return(
            todos.map((todo,idx) => {
            return (
                <div className="todo" 
                    // key == id (ici sert à identifier chaque elt)
                key="todo-{todo.title}" 
                onClick={() => this.toggleTodo(todo,idx)}>
                    {todo.title} {todo.done ? "oui" : "non"}
                </div>
                )
            })
        );
    }
    toggleTodo(todo,index){
        this.props.onTodoToggle(todo,index);
    }
    render(){
      return (
        <div className="List">
            {this.showTodos(this.props.todos)}
            todos: [{this.props.todos.length}]
        </div>
        );
    }
}

export default List;