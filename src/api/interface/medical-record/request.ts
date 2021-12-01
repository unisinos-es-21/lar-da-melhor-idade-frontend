import { InstitutionalizedResponse } from 'api/interface/institutionalized';

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

export interface InstitutionalizedListRequest {
  institutionalizedId: string;
  medicalAppointmentDate?: string;
  page?: number;
}
