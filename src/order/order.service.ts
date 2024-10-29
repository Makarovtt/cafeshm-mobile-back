import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnProductObject } from 'src/product/return-product.object'
import Stripe from 'stripe'
import { OrderDto } from './dto/order.dto'

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
		const total = dto.items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		)

		const receiving = dto.receiving

		if (total < 1000) {
			throw new Error('Сумма заказа должна быть более 1000 рублей')
		}
		const order = await this.prisma.order.create({
			data: {
				items: {
					create: dto.items
				},
				total,
				receiving,
				user: {
					connect: { id: userId }
				}
			}
		})

		const totalInCents = Math.round(total * 100)

		const paymentIntent = await this.stripe.paymentIntents.create({
			amount: totalInCents,
			currency: 'usd',
			automatic_payment_methods: {
				enabled: true
			},
			description: `Order by userId ${order.userId}`
		})

		return { clientSecret: paymentIntent.client_secret }
	}
}
