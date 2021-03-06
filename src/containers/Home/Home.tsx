import { navigate, RouteComponentProps } from '@reach/router';

import {
  Button,
  Card,
  Header,
  Icon,
  Title,
  Color,
} from '@lar_melhor_idade/design-system';

export interface HomeProps extends RouteComponentProps {}

export function Home(_props: HomeProps) {
  return (
    <section className="flex flex-col justify-start items-center w-full min-h-screen bg-gray-50 space-y-8 md:p-0">
      <Header color={Color.BLACK} className="px-4 md:px-0 ">
        <Title type="h1" color={Color.WHITE}>
          ILPI Melhor Idade
        </Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 space-y-8 md:grid-cols-4 md:px-0">
        <Card>
          <Card.Header className="flex items-center space-x-4">
            <Icon icon="user" size="2x" />
            <Title color={Color.WHITE}>Institucionalizados</Title>
          </Card.Header>
          <Card.Content>
            <Button
              className="w-full"
              type="button"
              color={Color.BLACK}
              icon="arrow-right"
              onClick={async () => await navigate('/institutionalized')}
            >
              Acessar
            </Button>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
