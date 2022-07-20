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

    addTodo(value: string) {
    }

    render() {
        return (
            <>
                <FormTodo/>
                <TodoList
                    todo={this.state.todo}
                />
            </>
        )
    }
}

export default App