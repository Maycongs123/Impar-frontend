export interface CardResponse {
    id: number;
    name: string;
    status: CardStatusEnum;
    photoBase64: string;
    photoId: number;
}

export enum CardStatusEnum {
    ACTIVE = 1,
    INACTIVE = 0
}