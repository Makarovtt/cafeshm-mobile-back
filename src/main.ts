import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.enableCors({
		origin: [
			'http://localhost:3000',
			'https://5.35.87.23:5400',
			'https://5.35.87.23:4200',
			'servermobile.cafeshm.ru:4200'
		]
	})
	await app.listen(4200)
}
bootstrap()
