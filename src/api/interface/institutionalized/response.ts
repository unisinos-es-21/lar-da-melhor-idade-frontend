export interface InstitutionalizedResponse {
  id: number;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  name: string;
  cpf: string;
  phone: string;
  birthDay: string;
  gender: number;
}

export interface InstitutionalizedContentResponse {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  birthDay: string;
  gender: string;
}

export interface InstitutionalizedListResponse {
  content: InstitutionalizedContentResponse[];
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
