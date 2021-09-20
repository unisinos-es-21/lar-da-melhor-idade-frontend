import { RouteComponentProps } from '@reach/router';

import {
  Button,
  Card,
  Header,
  Icon,
  Title,
  Color,
} from '@lar_melhor_idade/design-system';

export interface InstitutionalizedProps extends RouteComponentProps {}

export function Institutionalized({ ...props }: InstitutionalizedProps) {
  return (
    <section
      className="flex flex-col justify-start items-center w-full min-h-screen bg-white space-y-8 md:p-0"
      {...props}
    >
      <Header className="px-4 md:px-0">
        <Title type="h1">ILPI Melhor Idade {'>'} Institucionalizado</Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 md:px-0">
        <Card className="w-full">
          <Card.Header className="flex items-center space-x-4">
            <Icon icon="user" size="2x" />
            <Title color={Color.WHITE}>Institucionalizados</Title>
          </Card.Header>
          <Card.Content>
            <Button type="button" color={Color.BLACK} icon="plus">
              Cadastrar
            </Button>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
