import { Injectable } from '@nestjs/common'
import { CategoryDto } from './dto/category.dto'
import { generateSlug } from 'src/utils/generate-slug'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObjects } from './return-category.objects'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.category.findMany({
			select: returnCategoryObjects,
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async byId(id: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				id
			},
			select: returnCategoryObjects
		})

		if (!category) throw new Error('Категория не найдена')

		return category
	}

	async bySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				slug
			},
			select: returnCategoryObjects
		})

		if (!category) throw new Error('Категория не найдена')

		return category
	}

	async create() {
		return this.prisma.category.create({
			data: {
				name: '',
				slug: '',
				image: '',
				sort: 0
			}
		})
	}

	async update(id: string, dto: CategoryDto) {
		return this.prisma.category.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image,
				sort: dto.sort
			}
		})
	}

	async delete(id: string) {
		return this.prisma.category.delete({
			where: {
				id
			}
		})
	}
}
