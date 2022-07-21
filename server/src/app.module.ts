import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { TodoModule } from './todo/todo.module';
@Module({
    providers: [],
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        TodoModule
    ]
})

export class AppModule {}