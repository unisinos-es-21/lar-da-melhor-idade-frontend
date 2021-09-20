import { Router, RouteComponentProps } from '@reach/router';

import { InstitutionalizedHome } from './Home';
import { InstitutionalizedRegister } from './Register';

export interface InstitutionalizedProps extends RouteComponentProps {}

export function Institutionalized(props: InstitutionalizedProps) {
  return (
    <Router {...props}>
      <InstitutionalizedHome path="/" />
      <InstitutionalizedRegister path="/register" />
    </Router>
  );
}
