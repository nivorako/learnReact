import React, { Component } from 'react';

class ToDoForm extends Component {
    onClick(evt){
        evt.preventDefault();
        const text = this.todoTitle.value;
        this.props.onNewToDo({
            title:'txt',
            createDate: new Date()
        });
    }
    render(){
        return(
            <div className="form">
                <input type='text' ref={(input) => this.todoTitle = input}/>
                <button onClick={this.onClick.bind(this)}>Ajouter</button>
            </div>
        );
    }
}
export default ToDoForm;