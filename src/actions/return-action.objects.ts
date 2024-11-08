import { Prisma } from '@prisma/client'

export const returnActionObjects: Prisma.ActionsSelect = {
	id: true,
	title: true,
	image: true,
	text: true,
	slug: true
}
