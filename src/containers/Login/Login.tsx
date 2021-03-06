import { RouteComponentProps, navigate } from '@reach/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Title,
  Card,
  Input,
  Button,
  Color,
  Size,
} from '@lar_melhor_idade/design-system';

import { auth } from 'api/auth';

export interface LoginProps extends RouteComponentProps {}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export function Login(props: LoginProps) {
  const formik = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ username, password }) => {
      await auth({ username, password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          navigate('/home');
        })
        .catch((err) => {
          const { response } = err;

          alert(response.data.message ?? 'Erro inesperado');
        });
    },
  });

  return (
    <section className="flex justify-center items-center w-full min-h-screen p-8 bg-gray-50 md:p-0">
      <div className="container grid grid-rows-1 grid-cols-1 md:grid-cols-3 space-y-8">
        <Title
          type="h1"
          className="w-full text-center md:col-start-2 md:col-end-2"
          color={Color.BLACK}
          size={Size.LARGE}
        >
          ILPI Melhor Idade
        </Title>
        <Card className="md:col-start-2 md:col-end-2">
          <Card.Header>
            <Title color={Color.WHITE}>Acessar</Title>
          </Card.Header>
          <Card.Content>
            <form className="space-y-8" onSubmit={formik.handleSubmit}>
              <Input
                placeholder="Usuário"
                name="username"
                iconLabel="user"
                value={formik.values.username}
                onChange={(evt) =>
                  formik.setFieldValue('username', evt.target.value)
                }
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                iconLabel="lock"
                iconInternal="eye"
                value={formik.values.password}
                onChange={(evt) =>
                  formik.setFieldValue('password', evt.target.value)
                }
              />
              <Button
                className="w-full"
                icon="arrow-right"
                type="submit"
                color={Color.BLACK}
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Entrar
              </Button>
            </form>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
