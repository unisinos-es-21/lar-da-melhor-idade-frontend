import { client } from './client';
import { MedicalRecordRequest } from './interface/medical-record';

export function registerMedicalRecord(
  medicalRecordRequest: MedicalRecordRequest
) {
  return client.post('medicalRecord', medicalRecordRequest);
}
