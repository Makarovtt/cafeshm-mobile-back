import {
	IsArray,
	IsBoolean,
	IsNumber,
	IsObject,
	IsString
} from 'class-validator'

export class OrderItemDto {
	@IsNumber()
	price: number

	@IsString()
	productId: string

	@IsNumber()
	quantity: number
}

export class OrderDeliveryAdressDto {
	street: string
	home: string
	privatehome: boolean
	flat?: string
	entrance?: string
	floor?: string
}

export class OrderTimeOrder {
	value: string
	day: string
	time: string
}

export class OrderDto {
	@IsArray()
	items: OrderItemDto[]

	@IsNumber()
	total: number

	@IsNumber()
	totalBonus: number

	@IsNumber()
	addBonus: number

	@IsBoolean()
	isBonus: boolean

	@IsString()
	receiving: string

	@IsObject()
	timeready: OrderTimeOrder

	@IsString()
	cafeId: string

	@IsObject()
	userInfo: OrderDeliveryAdressDto
}
