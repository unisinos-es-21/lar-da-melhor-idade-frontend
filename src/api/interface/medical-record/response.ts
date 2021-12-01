import { InstitutionalizedResponse } from 'api/interface/institutionalized';

export interface MedicalRecordResponse {
  id: number;
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

export interface MedicalRecordListResponse {
  content: MedicalRecordResponse[];
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
