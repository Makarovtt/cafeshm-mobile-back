import { Prisma } from '@prisma/client'

export const returnTermsObjects: Prisma.RulesSelect = {
	id: true,
	title: true,
	slug: true,
	text: true
}
