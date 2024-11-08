import { Prisma } from '@prisma/client'

export const returnCafeObjects: Prisma.AdressesCafeSelect = {
	id: true,
	name: true,
	address: true,
	sort: true
}
