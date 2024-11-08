import { Prisma } from '@prisma/client'

export const returnUserObjects: Prisma.UserSelect = {
	id: true,
	email: true,
	name: true,
	avatarPath: true,
	password: false,
	phone: true,
	bonuses: true,
	addresses: true
}
