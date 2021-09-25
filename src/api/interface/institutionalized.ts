export interface InstitutionalizedRequest {
  name: string;
  cpf: string;
  phone: string;
  birthDay: string;
  gender: number;
}

export interface InstitutionalizedResponse extends InstitutionalizedRequest {
  id: number;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}

export interface InstitutionalizedListRequest {
  name?: string;
  page?: number;
}

export interface InstitutionalizedListResponse {
  content: {
    id: number;
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
