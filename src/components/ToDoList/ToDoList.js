import React from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {

    constructor () {
        super()
        
        this.state = {
            ToAdd: "",
            ToDo: [
                {
                    id: 1,
                    text: "Pick up dry cleaning",
                    completed: true,
                },
                {
                    id: 2,
                    text: "Go to the store",
                    completed: true,
                },
                {
                    id: 3,
                    text: "Find a good job",
                    completed: false,
                }
            ]
        }
    }

    handleCheck = (id) => {
        this.setState(prevState => {
            let updatedState = prevState.ToDo.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return {
                ToDo: updatedState
            }
        })
    }

    deleteChecked = () => {
        let itemsToKeep = []
        for (let i = 0; i < this.state.ToDo.length; i++) {
            if (!this.state.ToDo[i].completed) {
                itemsToKeep.push(this.state.ToDo[i])
            }
        }
        this.setState({ToDo: itemsToKeep})
    }

    addItem = () => {
        this.setState(prevState => {
            let newItem = {
                id: (prevState.ToDo.length+1),
                text: prevState.ToAdd,
                completed: false
            }
            let items = prevState.ToDo
            items.push(newItem)
            return {ToDo: items}
        })
    }

    handleChange = (event) => {
        let toAdd = event.target.value
        this.setState({ToAdd: toAdd})
    }

    render () {

        const ToDoItems = this.state.ToDo.map(item => <ToDoItem 
            key={item.id} 
            text={item.text} 
            completed={item.completed} 
            handleChange={this.handleCheck}
            id={item.id}
            />)

        return (
            <div>
                <h4>To Do List</h4>
                <p style={{margin: 0}}>
                    This app was created to demonstrate I am able to work with several different parts of the 
                    React codebase. It mostly demonstrates my ability to change state and use functions within 
                    the React code. 
                </p>
                {ToDoItems}
                <form>
                    <input type="text" style={{display: "inline-block"}} onChange={this.handleChange}></input>
                </form>
                <button style={{display: "inline-block"}} onClick={this.addItem}>Add Item</button>
                <button style={{float: 'right'}} onClick={this.deleteChecked}>Delete Checked Items</button>
            </div>
        )
    }
}

export default ToDoList