import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserService } from './user.service'
import { BonusesDto, EmailDto, NameDto, PhoneDto } from './dto/user.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async getAll() {
		return this.userService.getAll()
	}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@HttpCode(200)
	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') id: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(id, productId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile/name/:id')
	@Auth()
	async updateName(@Param('id') id: string, @Body() dto: NameDto) {
		return this.userService.updateName(id, dto.name)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile/phone/:id')
	@Auth()
	async updatePhone(@Param('id') id: string, @Body() dto: PhoneDto) {
		return this.userService.updatePhone(id, dto.phone)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile/email/:id')
	@Auth()
	async updateEmail(@Param('id') id: string, @Body() dto: EmailDto) {
		return this.userService.updateEmail(id, dto.email)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile/bonuses/:id')
	@Auth()
	async updateBonuses(@Param('id') id: string, @Body() dto: BonusesDto) {
		return this.userService.updateBonuses(id, dto.bonuses)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.userService.delete(id)
	}
}
