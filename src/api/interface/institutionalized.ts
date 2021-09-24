export interface InstitutionalizedRequest {
  name: string;
  cpf: string;
  phone: string;
  birthDay: string;
  gender: number;
}

export interface InstitutionalizedListRequest {
  name?: string;
  page?: number;
}

export interface InstitutionalizedListResponse {
  content: {
    name: string;
    cpf: string;
    phone: string;
    birthDay: string;
    gender: string;
  }[];
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
