import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
    try {
        const PORT = process.env.PORT

        const app = await NestFactory.create(AppModule)
        await app.listen(PORT, () => console.log(`Start server in port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
bootstrap()