import { client } from './client';

import {
  MedicalRecordRequest,
  InstitutionalizedListRequest,
  MedicalRecordResponse,
  MedicalRecordListResponse,
} from './interface/medical-record';

export function registerMedicalRecord(
  medicalRecordRequest: MedicalRecordRequest
) {
  return client.post('medicalRecord', medicalRecordRequest);
}

export function deleteMedicalRecord(id: string) {
  return client.delete(`medicalRecord/${id}`);
}

export function getMedicalRecord(id: string) {
  return client.get<MedicalRecordResponse>(`medicalRecord/${id}`);
}

export function getMedicalRecordList(
  param: InstitutionalizedListRequest = {
    page: 0,
    institutionalizedId: '0',
    medicalAppointmentDate: '',
  }
) {
  const params = new URLSearchParams();

  params.append('page', String(param.page ?? 0));
  params.append('institutionalizedId', param.institutionalizedId ?? '');
  params.append('medicalAppointmentDate', param.medicalAppointmentDate ?? '');

  const url = `medicalRecord?${params.toString()}`;

  return client.get<MedicalRecordListResponse>(url);
}
