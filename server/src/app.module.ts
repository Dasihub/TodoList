import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { TodoModule } from './todo/todo.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    providers: [],
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        MongooseModule.forRoot(process.env.MONGO),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'public')
        }),
        TodoModule
    ]
})

export class AppModule {}