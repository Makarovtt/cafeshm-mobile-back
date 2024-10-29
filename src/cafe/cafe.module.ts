import { Module } from '@nestjs/common'
import { CafeService } from './cafe.service'
import { CafeController } from './cafe.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [CafeController],
	providers: [CafeService, PrismaService],
	exports: [CafeService]
})
export class CafeModule {}
