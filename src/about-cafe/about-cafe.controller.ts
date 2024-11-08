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
import { AboutCafeService } from './about-cafe.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { AboutCafeDto } from './dto/aboutCafe.dto'

@Controller('about-cafe')
export class AboutCafeController {
	constructor(private readonly aboutCafeService: AboutCafeService) {}

	@Get()
	async getAll() {
		return this.aboutCafeService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.aboutCafeService.bySlug(slug)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.aboutCafeService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.aboutCafeService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Param('id') id: string, @Body() dto: AboutCafeDto) {
		return this.aboutCafeService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.aboutCafeService.delete(id)
	}
}
