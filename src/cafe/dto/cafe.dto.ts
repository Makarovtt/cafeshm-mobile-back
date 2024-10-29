import { IsNumber, IsString } from 'class-validator'

export class CafeDto {
	@IsString()
	name: string

	@IsString()
	address: string

	@IsNumber()
	sort: number
}
