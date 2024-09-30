import { CardResponse } from "./cardResponse";

export interface GetAllCardsResponse {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
    items: CardResponse[]; 
  }