// import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'
import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsString()
	phone: string

	// @IsEmail()
	// email: string

	@MinLength(6, {
		message: 'Пароль должен быьб не менее 6 символов'
	})
	@IsString()
	password: string
}
