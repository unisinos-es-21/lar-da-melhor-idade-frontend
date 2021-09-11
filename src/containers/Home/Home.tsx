import { RouteComponentProps } from '@reach/router';

import { useHello } from '../../api/hello';

export interface HomeProps extends RouteComponentProps {}

export function Home(props: HomeProps) {
  const data = useHello();

  return <div>{data ? data : 'aguarde..'}</div>;
}
