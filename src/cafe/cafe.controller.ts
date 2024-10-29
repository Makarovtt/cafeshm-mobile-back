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
import { CafeService } from './cafe.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CafeDto } from './dto/cafe.dto'

@Controller('cafe')
export class CafeController {
	constructor(private readonly cafeService: CafeService) {}

	@Get()
	async getAll() {
		return this.cafeService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.cafeService.bySlug(slug)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.cafeService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.cafeService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Param('id') id: string, @Body() dto: CafeDto) {
		return this.cafeService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.cafeService.delete(id)
	}
}
