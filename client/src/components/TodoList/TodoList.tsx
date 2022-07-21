import React from "react";
import style from './todo_list.scss'

interface IProps {
    changeTodo: (id: number) => void
    deleteTodo: (id: number) => void
    todo: {name: string, line: boolean, id: number}[]
}

class TodoList extends React.Component<IProps, {}>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={style.todo}>
                <div className={style.todo__container}>
                    {
                        this.props.todo.map((item, index) => (
                            <div className={style.todo__item} key={item.id}>
                                <div style={{width: '100%'}}>{index + 1}</div>
                                <div style={item.line ? {width: '100%', textDecoration: 'line-through'} : {width: '100%'}}>{item.name}</div>
                                <div style={{width: '100%'}}>
                                    <button onClick={this.props.deleteTodo.bind(this, item.id)} className={style.todo__btn}>&times;</button>
                                </div>
                                <div style={{width: '100%'}}>
                                    <input
                                        className={style.todo__checkbox}
                                        type="checkbox"
                                        checked={item.line}
                                        onChange={this.props.changeTodo.bind(this, item.id)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TodoList