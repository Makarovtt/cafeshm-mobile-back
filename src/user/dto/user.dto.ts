import { IsEmail, IsString, MinLength } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Пароль должен быьб не менее 6 символов'
	})
	@IsString()
	password: string

	@IsString()
	name: string

	@IsString()
	phone: string
}

export class NameDto {
	@IsString()
	name: string
}

export class EmailDto {
	@IsEmail()
	email: string
}

export class PhoneDto {
	@IsString()
	phone: string
}
