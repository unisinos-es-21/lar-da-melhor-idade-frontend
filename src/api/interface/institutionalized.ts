export interface InstitutionalizedRequest {
  name: string;
  cpf: string;
  phone: string;
  birthDay: string;
  gender: number;
}

export interface InstitutionalizedListRequest {
  name?: string;
  cpf?: string;
  pageNumber?: number;
}

export interface InstitutionalizedListResponse {
  content: {
    name: string;
    cpf: string;
    phone: string;
    birthDay: string;
    gender: number;
  }[];
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
