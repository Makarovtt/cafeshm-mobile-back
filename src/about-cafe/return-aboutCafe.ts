import { Prisma } from '@prisma/client'

export const returnAboutCafeObjects: Prisma.AboutCafeSelect = {
	id: true,
	title: true,
	slug: true,
	text: true
}
