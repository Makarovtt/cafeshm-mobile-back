import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { returnUserObjects } from './return-user.objects'
// import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.user.findMany({
			select: returnUserObjects
		})
	}

	async getById(id: string, selectObject: Prisma.UserSelect = {}) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			select: {
				...returnUserObjects,
				favorites: {
					select: {
						id: true,
						name: true,
						price: true,
						image: true,
						slug: true,
						category: {
							select: {
								name: true
							}
						}
					}
				},
				...selectObject
			}
		})

		if (!user) {
			throw new Error('User not found')
		}

		return user
	}

	async toggleFavorite(userId: string, productId: string) {
		const user = await this.getById(userId)

		if (!user) throw new NotFoundException('User not found!')

		const isExists = user.favorites.some(product => product.id === productId)

		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				favorites: {
					[isExists ? 'disconnect' : 'connect']: {
						id: productId
					}
				}
			}
		})

		return { message: 'Success' }
	}

	async updateName(id: string, name: string) {
		return this.prisma.user.update({
			where: {
				id
			},
			data: {
				name: name
			}
		})
	}

	async updatePhone(id: string, phone: string) {
		return this.prisma.user.update({
			where: {
				id
			},
			data: {
				phone: phone
			}
		})
	}

	async updateEmail(id: string, email: string) {
		return this.prisma.user.update({
			where: {
				id
			},
			data: {
				email: email
			}
		})
	}

	async delete(id: string) {
		return this.prisma.user.delete({
			where: {
				id
			}
		})
	}
}
