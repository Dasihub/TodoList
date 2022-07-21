import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { TodoModule } from './todo/todo.module';
import {MongooseModule} from "@nestjs/mongoose";
@Module({
    providers: [],
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        MongooseModule.forRoot(process.env.MONGO),
        TodoModule
    ]
})

export class AppModule {}