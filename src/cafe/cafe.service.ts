import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCafeObjects } from './return-cafe.objects'
import { generateSlug } from 'src/utils/generate-slug'
import { CafeDto } from './dto/cafe.dto'

@Injectable()
export class CafeService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.adressesCafe.findMany({
			select: returnCafeObjects,
			orderBy: {
				sort: 'asc'
			}
		})
	}

	async create() {
		return this.prisma.adressesCafe.create({
			data: {
				name: '',
				slug: '',
				address: '',
				sort: 0
			}
		})
	}

	async byId(id: string) {
		const cafe = await this.prisma.adressesCafe.findUnique({
			where: {
				id
			},
			select: returnCafeObjects
		})

		if (!cafe) throw new Error('Кафе не найдено')

		return cafe
	}

	async bySlug(slug: string) {
		const cafe = await this.prisma.adressesCafe.findUnique({
			where: {
				slug
			},
			select: returnCafeObjects
		})

		if (!cafe) throw new Error('Кафе не найдено')

		return cafe
	}

	async update(id: string, dto: CafeDto) {
		return this.prisma.adressesCafe.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				address: dto.address,
				sort: dto.sort
			}
		})
	}

	async delete(id: string) {
		return this.prisma.adressesCafe.delete({
			where: {
				id
			}
		})
	}
}
