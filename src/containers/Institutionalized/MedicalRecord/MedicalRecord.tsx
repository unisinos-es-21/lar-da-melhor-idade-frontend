import { Router, RouteComponentProps } from '@reach/router';

import { InstitutionalizedMedicalRecordRegister } from '../MedicalRecordRegister';
import { InstitutionalizedMedicalRecordList } from '../MedicalRecordList';
import { InstitutionalizedMedicalRecordView } from '../MedicalRecordView';

export interface InstitutionalizedMedicalRecordProps
  extends RouteComponentProps {}

export function InstitutionalizedMedicalRecord(
  props: InstitutionalizedMedicalRecordProps
) {
  return (
    <Router>
      <InstitutionalizedMedicalRecordRegister path="/" />
      <InstitutionalizedMedicalRecordList path="/list" />
      <InstitutionalizedMedicalRecordView path="/view/:idMedicalRecord" />
    </Router>
  );
}
