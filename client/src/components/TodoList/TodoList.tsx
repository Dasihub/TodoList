import React from "react";
import style from './todo_list.scss'

interface IProps {
    todo: {name: string, line: boolean, id: number}[]
}

class TodoList extends React.Component<IProps, {}>{
    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                {
                    this.props.todo.map((item, index) => (
                        <div className={style.todo} key={item.id}>
                            <div>{index + 1}</div>
                            <div>{item.name}</div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={item.line}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TodoList