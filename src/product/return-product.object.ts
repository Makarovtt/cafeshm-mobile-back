import { Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { returnCategoryObjects } from 'src/category/return-category.objects'

export const returnProductObject: Prisma.ProductSelect<DefaultArgs> = {
	id: true,
	name: true,
	description: true,
	volume: true,
	unit: true,
	minportion: true,
	price: true,
	createdAt: true,
	slug: true,
	image: true,
	sort: true,
	show: true,
	recommended: true,
	category: { select: returnCategoryObjects }
}
