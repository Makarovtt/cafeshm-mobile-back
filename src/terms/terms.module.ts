import { Module } from '@nestjs/common'
import { TermsService } from './terms.service'
import { TermsController } from './terms.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [TermsController],
	providers: [TermsService, PrismaService],
	exports: [TermsService]
})
export class TermsModule {}
