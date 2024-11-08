import { IsString } from 'class-validator'

export class ActionDto {
	@IsString()
	title: string

	@IsString()
	image: string

	@IsString()
	text: string
}
