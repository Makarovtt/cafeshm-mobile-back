import { IsString } from 'class-validator'

export class AboutCafeDto {
	@IsString()
	title: string

	@IsString()
	text: string
}
