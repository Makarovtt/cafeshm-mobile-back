import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnProductObject } from 'src/product/return-product.object'
import Stripe from 'stripe'
import { OrderDto } from './dto/order.dto'
import { error } from 'console'
import { throwError } from 'rxjs'

@Injectable()
export class OrderService {
	private stripe: Stripe

	constructor(private prisma: PrismaService) {
		this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
	}

	async getAll() {
		return this.prisma.order.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				items: {
					include: {
						product: {
							select: returnProductObject
						}
					}
				}
			}
		})
	}

	async getByUserId(userId: string) {
		return this.prisma.order.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			include: {
				items: {
					include: {
						product: {
							select: returnProductObject
						}
					}
				}
			}
		})
	}

	async placeOrder(dto: OrderDto, userId: string) {
		const total = dto.total
		const isBonus = dto.isBonus
		const receiving = dto.receiving
		const totalBonus = dto.totalBonus

		let timeready = ''
		if (dto.timeready.value === 'now') {
			timeready = dto.timeready.value
		} else {
			timeready = dto.timeready.day + ' ' + dto.timeready.time
		}

		// if (total < 1000) {
		// 	throw new Error('Сумма заказа должна быть более 1000 рублей')
		// }
		const order = await this.prisma.$transaction([
			this.prisma.order.create({
				data: {
					items: {
						create: dto.items
					},
					total,
					isBonus,
					receiving,
					timeready,
					user: {
						connect: { id: userId }
					},
					addressCafe: {
						connect: { id: dto.cafeId }
					}
				}
			}),
			this.prisma.adresses.create({
				data: {
					street: dto.userInfo.street,
					home: dto.userInfo.home,
					privatehome: dto.userInfo.privatehome,
					flat: dto.userInfo.flat,
					entrance: dto.userInfo.entrance,
					floor: dto.userInfo.floor,
					user: {
						connect: { id: userId }
					}
				}
			}),
			this.prisma.user.update({
				where: {
					id: userId
				},
				data: {
					bonuses: isBonus
						? { decrement: totalBonus }
						: { increment: dto.addBonus }
				}
			})
		])

		// const totalInCents = Math.round(total * 100)

		// const paymentIntent = await this.stripe.paymentIntents.create({
		// 	amount: totalInCents,
		// 	currency: 'usd',
		// 	automatic_payment_methods: {
		// 		enabled: true
		// 	},
		// 	description: `Order by userId ${order.userId}`
		// })

		// return { clientSecret: paymentIntent.client_secret }
		if (order) return 'ok'
		throwError(error)
	}
}
