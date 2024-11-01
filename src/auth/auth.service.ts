import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { AuthDto } from './dto/auth.dto'
import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException('Неправельный токен')

		const user = await this.prisma.user.findUnique({
			where: {
				id: result.id
			}
		})

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	async register(dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				phone: dto.phone
			}
		})

		if (oldUser)
			throw new BadRequestException(
				'Такой пользователь уже есть. Если это Ваш номер Залогиньтесь'
			)

		const user = await this.prisma.user.create({
			data: {
				phone: dto.phone,
				name: '',
				// name: faker.person.firstName(),
				avatarPath: faker.image.avatar(),
				email: '',
				// phone: faker.phone.number(),
				password: await hash(dto.password)
			}
		})

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	private async issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return { accessToken, refreshToken }
	}

	private returnUserFields(user: User) {
		return {
			id: user.id,
			phone: user.phone
		}
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				phone: dto.phone
			}
		})

		if (!user) throw new NotFoundException('Пользователь не найден')

		const isValid = await verify(user.password, dto.password)

		if (!isValid) throw new UnauthorizedException('Неверный пароль')

		return user
	}
}
