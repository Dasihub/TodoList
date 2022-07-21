import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {UpdateTodoDto} from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllTodo() {
        return this.todoService.getAllTodo()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createTodo(@Body() value: CreateTodoDto) {
        return this.todoService.createTodo(value)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    changeTodo(@Body() todoDto: UpdateTodoDto) {
        return this.todoService.changeTodo(todoDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: number) {
        return this.todoService.delete(id)
    }
}
