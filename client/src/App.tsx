import React from "react";
import {ToastContainer} from 'react-toastify'
import {FormTodo, Loader, TodoList} from "./components";
import {http} from "./config/http";

type todo = {
    name: string,
    line: boolean,
    _id: number
}

interface IRes {
    data: todo[]
}

interface IState {
    todo: todo[]
    loader: boolean
}

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            todo: [],
            loader: false
        }
    }

    componentDidMount() {
        this.getAllTodo()
    }

    async getAllTodo(): Promise<void> {
        try {
            if (!this.state.loader) {
                this.setState({loader: true})
            }
            const res: IRes = await http('/todo')
            this.setState({todo: res.data, loader: false})
        } catch (e) {
        }
    }

    addTodo = async (value: string): Promise<void> => {
        try {
            this.setState({loader: true})
            await http('/todo', 'POST', {name: value})
            this.getAllTodo()
        } catch (e) {
        }
    }

    changeTodo = async (_id: number, line: boolean): Promise<void> => {
        this.setState({loader: true})
        await http('/todo', 'PUT', {_id, line: !line})
        this.getAllTodo()
    }

    deleteTodo = async (_id: number): Promise<void> => {
        this.setState({loader: true})
        await http(`/todo/${_id}`, 'DELETE')
        this.getAllTodo()
    }

    render() {
        return (
            <>
                <ToastContainer/>
                <FormTodo
                    addTodo={this.addTodo}
                />
                {
                    this.state.loader ?
                        <Loader/> :
                        <TodoList
                            todo={this.state.todo}
                            changeTodo={this.changeTodo}
                            deleteTodo={this.deleteTodo}
                        />
                }
            </>
        )
    }
}

export default App