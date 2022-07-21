import React from "react";
import {FormTodo, TodoList} from "./components";

interface IState {
    todo: {name: string, line: boolean, id: number}[]
}

class App extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);

        this.state = {
            todo: [
                {name: 'Dosya', line: false, id: 1},
                {name: 'Ravil', line: true, id: 2},
                {name: 'Mk', line: false, id: 3}
            ]
        }
    }

    addTodo = async (value: string): Promise<void> => {
        const newTodo: {name: string, line: boolean, id: number} = {
            name: value,
            id: Date.now(),
            line: false
        }
        this.setState({todo: [...this.state.todo, newTodo]})
    }

    changeTodo = async (id: number): Promise<void> => {
        this.setState({todo: this.state.todo.map(item => item.id == id ? {...item, line: !item.line} : item)})
    }

    deleteTodo = async (id: number): Promise<void> => {
        this.setState({todo: this.state.todo.filter(item => item.id != id)})
    }

    render() {
        return (
            <>
                <FormTodo
                    addTodo={this.addTodo}
                />
                <TodoList
                    todo={this.state.todo}
                    changeTodo={this.changeTodo}
                    deleteTodo={this.deleteTodo}
                />
            </>
        )
    }
}

export default App