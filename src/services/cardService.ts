import api from "../utils/index";
import { Result } from "@/models/result";
import { CardResponse } from "@/models/responses/cardResponse";
import { Filter } from "@/models/requests/filter";
import axios from "axios";
import { GetAllCardsResponse } from "@/models/responses/getAllCardsResponse";
import { PatchRequest } from "@/models/requests/patchRequest";

export const CardService = {
  Post: async (card: FormData): Promise<CardResponse | null> => {
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
        throw new Error(result?.message || "Erro interno no servidor tente novamente mais tarde!");
      }

      throw new Error("Não foi possível concluir a criação do card.");
    }
  },
  GetAll: async (filterParams: Filter) => {
    try {
      const API_URL = `${api.baseUrlApi}/Card`;

      const httpHeaders = {
        "Content-Type": "application/json",
      };

      const response = await axios.get<GetAllCardsResponse>(API_URL,
        {
          params: filterParams,
          headers: httpHeaders
        });

      if (response.status === 200 && response.data) {
        return response.data;
      }

    } catch (error: any) {
      if (error) {
        const result: Result<CardResponse> = error.response?.data;
        throw new Error(result?.message || "Erro interno no servidor tente novamente mais tarde!");
      }
      throw new Error("Não foi possível concluir a busca dos cards.");
    }
  },
  Delete: async (id: number) => {
    try {
      const API_URL = `${api.baseUrlApi}/Card/${id}`;

      const httpHeaders = {
        "Content-Type": "application/json",
      };

      const response = await axios.delete(API_URL, {
        headers: httpHeaders,
      });

      if (response) {
        return response.data;
      }
    } catch (error: any) {
      if (error) {
        const result: Result<CardResponse> = error.response?.data;
        throw new Error(result?.message || "Erro interno servidor tente novamente mais tarde!");
      }
      throw new Error("Não foi possível concluir a exclusão do card.");
    }
  },
  Patch: async (id: number, patchRequest: PatchRequest) => {
    try {
      const API_URL = `${api.baseUrlApi}/Card/${id}`;

      const httpHeaders = {
        "Content-Type": "application/json",
      };

      const response = await axios.patch<CardResponse>(API_URL, patchRequest, {
        headers: httpHeaders,
      });

      if (response) {
        return response.data;
      }
    } catch (error: any) {
      if (error) {
        const result: Result<CardResponse> = error.response?.data;
        throw new Error(result?.message || "Erro interno servidor tente novamente mais tarde!");
      }
      throw new Error("Não foi possível concluir a edição do card.");
    }
  },
};
