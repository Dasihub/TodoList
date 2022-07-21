import React from "react";
import style from './form_todo.scss'

interface IState {
    value: string
}

interface IProps {
    addTodo: (value: string) => void
}

class FormTodo extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: ''
        }
    }

    change(e: React.ChangeEvent<HTMLInputElement>)  {
        this.setState({value: e.target.value})
    }

    click(e: React.FormEvent) {
        e.preventDefault()
        if (this.state.value.length) {
            this.props.addTodo(this.state.value)
            this.setState({value: ''})
        }
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
                    onClick={this.click.bind(this)}
                >Добавить</button>
            </form>
        )
    }
}

export default FormTodo