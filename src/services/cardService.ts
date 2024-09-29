import axios from "axios";
import api from "../utils/index";
import {  Result } from "@/models/result";
import { CardRequest } from "@/models/requests/cardRequest";
import { CardResponse } from "@/models/responses/cardResponse";

export const CardService = {
  Post: async (card: CardRequest): Promise<CardResponse | null> => {
    try {
      const API_URL = `${api.baseUrlApi}/Card`;
      const httpHeaders = {
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post<CardResponse>(API_URL, card, {
        headers: httpHeaders,
      });

      if (response.status === 200 && response.data) {
        return response.data;
      }

      return null; 
    } catch (error: any) {
      if (error) {
        const result: Result<CardResponse> = error.response?.data;
        throw new Error(result?.message || "Erro interno servidor tente novamente mais tarde!");
      }

      throw new Error("Não foi possível concluir a criação do card.");
    }
  },
};
