import { Router, RouteComponentProps } from '@reach/router';

import { InstitutionalizedHome } from './Home';
import { InstitutionalizedRegister } from './Register';
import { InstitutionalizedMedicalRecord } from './MedicalRecord';

export interface InstitutionalizedProps extends RouteComponentProps {}

export function Institutionalized(_props: InstitutionalizedProps) {
  return (
    <Router>
      <InstitutionalizedHome path="/" />
      <InstitutionalizedRegister path="/register" />
      <InstitutionalizedMedicalRecord path="/medical-record/:id/*" />
    </Router>
  );
}
