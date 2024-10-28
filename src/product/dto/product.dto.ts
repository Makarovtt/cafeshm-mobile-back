import { IsNumber, IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsString()
	volume: string

	@IsString()
	unit: string

	@IsString()
	image: string

	@IsString()
	categoryId: string

	@IsNumber()
	minportion: number

	@IsNumber()
	price: number

	@IsNumber()
	sort: number

	@IsNumber()
	show: number

	@IsNumber()
	recommended: number
}
