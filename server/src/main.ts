import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
    try {
        const PORT = process.env.PORT

        const app = await NestFactory.create(AppModule, {cors: true})
        app.setGlobalPrefix('api')

        await app.listen(PORT, () => console.log(`Start server in port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
bootstrap()