import {Document} from 'mongoose'
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
    @Prop({type: String, required: true})
    name: string

    @Prop({type: Boolean, required: true})
    line: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)