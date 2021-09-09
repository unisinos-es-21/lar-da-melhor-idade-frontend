import { RouteComponentProps } from '@reach/router';
import {
  Title,
  Card,
  Input,
  Button,
  Color,
  Size,
} from '@lar_melhor_idade/design-system';

export interface LoginProps extends RouteComponentProps {}

export function Login(props: LoginProps) {
  return (
    <section className="flex justify-center items-center w-full min-h-screen p-8 bg-blue-200 md:p-0">
      <div className="container grid grid-rows-1 grid-cols-1 md:grid-cols-3 space-y-8">
        <Title
          type="h1"
          className="w-full text-center md:col-start-2 md:col-end-2"
          color={Color.WHITE}
          size={Size.LARGE}
        >
          ILPI Melhor Idade
        </Title>
        <Card className="md:col-start-2 md:col-end-2">
          <Card.Header>
            <Title color={Color.WHITE}>Acessar</Title>
          </Card.Header>
          <Card.Content className="space-y-8">
            <Input placeholder="Usuário" name="user" iconLabel="user" />
            <Input
              placeholder="Senha"
              type="password"
              name="password"
              iconLabel="lock"
              iconInternal="eye"
            />
            <Button className="w-full" icon="arrow-right" color={Color.BLACK}>
              Entrar
            </Button>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
