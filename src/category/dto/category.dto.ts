import { IsNumber, IsString } from 'class-validator'

export class CategoryDto {
	@IsString()
	name: string

	@IsString()
	image: string

	@IsNumber()
	sort: number
}
