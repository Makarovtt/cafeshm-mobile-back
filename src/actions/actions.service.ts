import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnActionObjects } from './return-action.objects'
import { generateSlug } from 'src/utils/generate-slug'
import { ActionDto } from './dto/actions.dto'

@Injectable()
export class ActionsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.actions.findMany({
			select: returnActionObjects,
			orderBy: {
				id: 'asc'
			}
		})
	}

	async create() {
		return this.prisma.actions.create({
			data: {
				title: '',
				slug: '',
				image: '',
				text: ''
			}
		})
	}

	async byId(id: string) {
		const cafe = await this.prisma.actions.findUnique({
			where: {
				id
			},
			select: returnActionObjects
		})

		if (!cafe) throw new Error('Акция не найдена')

		return cafe
	}

	async bySlug(slug: string) {
		const cafe = await this.prisma.actions.findUnique({
			where: {
				slug
			},
			select: returnActionObjects
		})

		if (!cafe) throw new Error('Акция не найдена')

		return cafe
	}

	async update(id: string, dto: ActionDto) {
		return this.prisma.actions.update({
			where: {
				id
			},
			data: {
				title: dto.title,
				slug: generateSlug(dto.title),
				image: dto.image,
				text: dto.text
			}
		})
	}

	async delete(id: string) {
		return this.prisma.actions.delete({
			where: {
				id
			}
		})
	}
}
