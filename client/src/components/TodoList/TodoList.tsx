import React from "react";
import style from './todo_list.scss'

interface IProps {
    deleteTodo: (_id: number) => void
    changeTodo: (_id: number, line: boolean) => void
    todo: {name: string, line: boolean, _id: number}[]
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
                            <div className={style.todo__item} key={item._id}>
                                <div style={{width: '100%'}}>{index + 1}</div>
                                <div style={item.line ? {width: '100%', textDecoration: 'line-through'} : {width: '100%'}}>{item.name}</div>
                                <div style={{width: '100%'}}>
                                    <button onClick={this.props.deleteTodo.bind(this, item._id)} className={style.todo__btn}>&times;</button>
                                </div>
                                <div style={{width: '100%'}}>
                                    <input
                                        className={style.todo__checkbox}
                                        type="checkbox"
                                        checked={item.line}
                                        onChange={this.props.changeTodo.bind(this, item._id, item.line)}
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