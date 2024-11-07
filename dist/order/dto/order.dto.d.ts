export declare class OrderItemDto {
    price: number;
    productId: string;
    quantity: number;
}
export declare class OrderDeliveryAdressDto {
    street: string;
    home: string;
    privatehome: boolean;
    flat?: string;
    entrance?: string;
    floor?: string;
}
export declare class OrderTimeOrder {
    value: string;
    day: string;
    time: string;
}
export declare class OrderDto {
    items: OrderItemDto[];
    total: number;
    totalBonus: number;
    addBonus: number;
    isBonus: boolean;
    receiving: string;
    timeready: OrderTimeOrder;
    cafeId: string;
    userInfo: OrderDeliveryAdressDto;
}
