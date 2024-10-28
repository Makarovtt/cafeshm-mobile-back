import { Injectable } from '@nestjs/common'
import { ProductDto } from './dto/product.dto'
import { generateSlug } from 'src/utils/generate-slug'
import { returnProductObject } from './return-product.object'
import { CategoryService } from 'src/category/category.service'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private categoryService: CategoryService
	) {}

	async getAll(searchTerm?: string) {
		if (searchTerm) return this.search(searchTerm)

		return this.prisma.product.findMany({
			select: returnProductObject
			// orderBy: {
			// 	createdAt: 'desc'
			// }
		})
	}

	async getRecommended() {
		return this.prisma.product.findMany({
			where: {
				recommended: 1
			},
			select: returnProductObject,
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async search(searchTerm: string) {
		return this.prisma.product.findMany({
			where: {
				OR: [
					{
						name: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					},
					{
						description: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					}
				]
			},
			select: returnProductObject
		})
	}

	async bySlug(slug: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				slug
			},
			select: returnProductObject
		})

		if (!product) throw new Error('Категория не найдена')

		return product
	}

	async byCategory(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: returnProductObject
		})

		if (!products) throw new Error('Продукты не найдена')

		return products
	}

	async create() {
		return this.prisma.product.create({
			data: {
				name: '',
				slug: '',
				image: '',
				description: '',
				volume: '',
				unit: '',
				minportion: 1,
				price: 0,
				sort: 0,
				show: 1,
				recommended: 0
			}
		})
	}

	async update(id: string, dto: ProductDto) {
		const {
			name,
			description,
			price,
			minportion,
			volume,
			unit,
			sort,
			show,
			recommended,
			categoryId,
			image
		} = dto

		await this.categoryService.byId(categoryId)

		return this.prisma.product.update({
			where: {
				id
			},
			data: {
				name,
				description,
				volume,
				unit,
				price,
				image,
				minportion,
				sort,
				show,
				recommended,
				slug: generateSlug(name),
				category: {
					connect: {
						id: categoryId
					}
				}
			}
		})
	}

	async delete(id: string) {
		return this.prisma.product.delete({
			where: {
				id
			}
		})
	}
}
