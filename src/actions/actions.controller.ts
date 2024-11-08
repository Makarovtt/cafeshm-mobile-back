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
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ActionsService } from './actions.service'
import { ActionDto } from './dto/actions.dto'

@Controller('actions')
export class ActionsController {
	constructor(private readonly actionsService: ActionsService) {}

	@Get()
	async getAll() {
		return this.actionsService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.actionsService.bySlug(slug)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.actionsService.byId(id)
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.actionsService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Param('id') id: string, @Body() dto: ActionDto) {
		return this.actionsService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.actionsService.delete(id)
	}
}
