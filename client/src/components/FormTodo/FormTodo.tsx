import React from "react";
import style from './form_todo.scss'

interface IState {
    value: string
}

class FormTodo extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            value: ''
        }
    }

    change(e: React.ChangeEvent<HTMLInputElement>)  {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form className={style.form}>
                <input
                    className={style.form__input}
                    onChange={this.change.bind(this)}
                    value={this.state.value}
                />
                <button
                    className={style.form__btn}
                >Добавить</button>
            </form>
        )
    }
}

export default FormTodo