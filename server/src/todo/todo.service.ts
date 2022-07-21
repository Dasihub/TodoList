import { Injectable } from '@nestjs/common';
import {CreateTodoDto} from "./dto/create-todo.dto";

type typeTodo = {name: string, line: false, id: number}

@Injectable()
export class TodoService {
    private todo: typeTodo[] = [
        {name: 'Dosya', line: false, id: 1},
        {name: 'Mk', line: false, id: 2},
    ]

    async getAllTodo() {
        return this.todo
    }

    async createTodo(value: CreateTodoDto) {
        const newTodo: typeTodo = {name: value.name, line: false, id: Date.now()}
        this.todo.push(newTodo)
        return newTodo
    }

    async changeTodo(id: number) {
        const t: any = this.todo.map(item => item.id == id ? {...item, line: !item.line} : item)
        this.todo = t
        return this.todo
    }

    async delete(id: number) {
        this.todo = this.todo.filter(item => item.id != id)
        return this.todo
    }
}
