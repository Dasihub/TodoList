import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {IdTodoDto} from "./dto/id-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {
    }

    @Get()
    getAllTodo() {
        return this.todoService.getAllTodo()
    }

    @Post()
    createTodo(@Body() value: CreateTodoDto) {
        return this.todoService.createTodo(value)
    }

    @Put()
    changeTodo(@Body() id: IdTodoDto) {
        return this.todoService.changeTodo(id.id)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.todoService.delete(id)
    }
}
