import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnTermsObjects } from './return-terms.objects'
import { TermsDto } from './dto/terms.dto'
import { generateSlug } from 'src/utils/generate-slug'

@Injectable()
export class TermsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.rules.findMany({
			select: returnTermsObjects,
			orderBy: {
				id: 'asc'
			}
		})
	}

	async create() {
		return this.prisma.rules.create({
			data: {
				title: '',
				slug: '',
				text: ''
			}
		})
	}

	async byId(id: string) {
		const term = await this.prisma.rules.findUnique({
			where: {
				id
			},
			select: returnTermsObjects
		})

		if (!term) throw new Error('Документ не найден')

		return term
	}

	async bySlug(slug: string) {
		const term = await this.prisma.rules.findUnique({
			where: {
				slug
			},
			select: returnTermsObjects
		})

		if (!term) throw new Error('Документ не найден')

		return term
	}

	async update(id: string, dto: TermsDto) {
		return this.prisma.rules.update({
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
		return this.prisma.rules.delete({
			where: {
				id
			}
		})
	}
}
