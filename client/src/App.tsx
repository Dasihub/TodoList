import React from "react";
import {TodoList} from "./components";

interface IState {
    todo: {name: string, line: boolean, id: number}[]
}

class App extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);

        this.state = {
            todo: [
                {name: 'Dosya', line: false, id: 1},
                {name: 'Ravil', line: false, id: 2},
                {name: 'Mk', line: false, id: 3}
            ]
        }
    }

    render() {
        return (
            <>
                <TodoList
                    todo={this.state.todo}
                />
            </>
        )
    }
}

export default App