import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { TermsService } from './terms.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { TermsDto } from './dto/terms.dto'

@Controller('terms')
export class TermsController {
	constructor(private readonly termsService: TermsService) {}

	@Get()
	async getAll() {
		return this.termsService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.termsService.bySlug(slug)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.termsService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.termsService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Param('id') id: string, @Body() dto: TermsDto) {
		return this.termsService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.termsService.delete(id)
	}
}
