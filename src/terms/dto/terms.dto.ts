import { IsString } from 'class-validator'

export class TermsDto {
	@IsString()
	title: string

	@IsString()
	text: string
}
