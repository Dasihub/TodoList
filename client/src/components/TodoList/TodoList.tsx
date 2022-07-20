import React from "react";
import style from './todo_list.scss'

interface IProps {
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
                                <div style={{width: '100%'}}>{item.name}</div>
                                <div style={{width: '100%'}}>
                                    <button className={style.todo__btn}>&times;</button>
                                </div>
                                <div style={{width: '100%'}}>
                                    <input
                                        className={style.todo__checkbox}
                                        type="checkbox"
                                        checked={item.line}
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