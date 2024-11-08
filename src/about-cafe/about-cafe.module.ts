import { Module } from '@nestjs/common'
import { AboutCafeService } from './about-cafe.service'
import { AboutCafeController } from './about-cafe.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [AboutCafeController],
	providers: [AboutCafeService, PrismaService],
	exports: [AboutCafeService]
})
export class AboutCafeModule {}
