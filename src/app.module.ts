import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ProductModule } from './product/product.module'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { OrderModule } from './order/order.module'
import { CafeModule } from './cafe/cafe.module';
import { ActionsModule } from './actions/actions.module';
import { TermsModule } from './terms/terms.module';
import { AboutCafeModule } from './about-cafe/about-cafe.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		}),
		ConfigModule.forRoot(),
		AuthModule,
		CategoryModule,
		ProductModule,
		UserModule,
		OrderModule,
		CafeModule,
		ActionsModule,
		TermsModule,
		AboutCafeModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
