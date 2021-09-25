import { InstitutionalizedResponse } from './institutionalized';

export interface MedicalRecordRequest {
  institutionalized?: InstitutionalizedResponse;
  medicalAppointmentDate: string;
  reason: number;
  anamnesis: string;
  diagnosticHypotheses: string;
  definitiveDiagnosis: string;
  infectiousDiseaseCarrier: boolean;
  infectiousDiseaseDescription: string;
  responsible: string;
  cid?: string;
}

export interface MedicalRecordResponse extends MedicalRecordRequest {
  id: number;
}

export interface InstitutionalizedListRequest {
  institutionalizedId: string;
  medicalAppointmentDate?: string;
  page?: number;
}

export interface MedicalRecordListResponse {
  content: MedicalRecordResponse[];
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
