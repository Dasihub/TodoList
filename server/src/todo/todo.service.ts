import { Injectable } from '@nestjs/common';
import {CreateTodoDto} from "./dto/create-todo.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Todo, TodoDocument} from "./schema/todo.schema";
import {Model} from "mongoose";
import {UpdateTodoDto} from "./dto/update-todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {
    }

    async getAllTodo() {
        const todos = await this.todoModel.find().exec()
        return {
            message: 'Данные успешно получены',
            type: 'success',
            data: todos
        }
    }

    async createTodo(value: CreateTodoDto) {
        const newTodo = new this.todoModel({name: value.name, line: false})
        return {
            message: 'Данные успешно добавлены',
            type: 'success',
            data: newTodo.save()
        }
    }

    async changeTodo(todoDto: UpdateTodoDto) {
        const result = await this.todoModel.updateOne({_id: todoDto._id}, {line: todoDto.line})
        return {
            message: 'Данные успешно обновлены',
            type: 'success',
            data: result
        }
    }

    async delete(_id: number) {
        const result = await this.todoModel.deleteOne({_id})
        return {
            message: 'Данные успешно удалено',
            type: 'success',
            data: result
        }
    }
}
