import { Injectable } from '@nestjs/common'
import { returnAboutCafeObjects } from './return-aboutCafe'
import { PrismaService } from 'src/prisma.service'
import { AboutCafeDto } from './dto/aboutCafe.dto'
import { generateSlug } from 'src/utils/generate-slug'

@Injectable()
export class AboutCafeService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.aboutCafe.findMany({
			select: returnAboutCafeObjects,
			orderBy: {
				id: 'asc'
			}
		})
	}

	async create() {
		return this.prisma.aboutCafe.create({
			data: {
				title: '',
				slug: '',
				text: ''
			}
		})
	}

	async byId(id: string) {
		const term = await this.prisma.aboutCafe.findUnique({
			where: {
				id
			},
			select: returnAboutCafeObjects
		})

		if (!term) throw new Error('Страница не найдена')

		return term
	}

	async bySlug(slug: string) {
		const term = await this.prisma.aboutCafe.findUnique({
			where: {
				slug
			},
			select: returnAboutCafeObjects
		})

		if (!term) throw new Error('Страница не найдена')

		return term
	}

	async update(id: string, dto: AboutCafeDto) {
		return this.prisma.aboutCafe.update({
			where: {
				id
			},
			data: {
				title: dto.title,
				slug: generateSlug(dto.title),
				text: dto.text
			}
		})
	}

	async delete(id: string) {
		return this.prisma.aboutCafe.delete({
			where: {
				id
			}
		})
	}
}
