import { useCallback } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Button,
  Card,
  Header,
  Icon,
  Input,
  Title,
  Color,
  Text,
} from '@lar_melhor_idade/design-system';
import { formatCPF } from '@brazilian-utils/brazilian-utils';

import { InstitutionalizedRequest } from '../../../api/interface/institutionalized';
import { register } from '../../../api/institutionalized';

export interface InstitutionalizedRegisterProps extends RouteComponentProps {}

const schema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthDay: yup.string().required(),
  gender: yup.number().required(),
});

export function InstitutionalizedRegister({
  ...props
}: InstitutionalizedRegisterProps) {
  const formik = useFormik<InstitutionalizedRequest>({
    validationSchema: schema,
    validateOnMount: true,
    initialValues: {
      name: '',
      cpf: '',
      phone: '',
      birthDay: '',
      gender: -1,
    },
    onSubmit: async (values) => {
      await register(values)
        .then(async () => {
          await navigate('/institutionalized');
        })
        .catch((err) => {
          const { response } = err;

          alert(response.data.message ?? 'Erro inesperado');
        });
    },
  });

  const onChangeGender = useCallback(
    (evt) => {
      formik.setFieldValue('gender', evt.target.value);
    },
    [formik]
  );

  return (
    <section
      className="flex flex-col justify-start items-center w-full min-h-screen bg-white space-y-8 md:p-0"
      {...props}
    >
      <Header className="px-4 md:px-0">
        <Title type="h1">
          ILPI Melhor Idade {'>'} Institucionalizado {'>'} Cadastrar
        </Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 md:px-0">
        <Card className="w-full">
          <Card.Header className="flex items-center space-x-4">
            <Icon icon="user" size="2x" />
            <Title color={Color.WHITE}>Cadastrar Institucionalizado</Title>
          </Card.Header>
          <Card.Content>
            <form className="flex flex-wrap" onSubmit={formik.handleSubmit}>
              <div className="w-full md:w-5/12 md:mr-4">
                <Text className="mb-4">Nome:</Text>
                <Input
                  placeholder="Nome"
                  name="name"
                  value={formik.values.name}
                  onChange={(evt) =>
                    formik.setFieldValue('name', evt.target.value)
                  }
                />
              </div>
              <div className="w-full md:w-5/12">
                <Text className="mb-4">CPF:</Text>
                <Input
                  placeholder="CPF"
                  name="cpf"
                  value={formatCPF(formik.values.cpf)}
                  maxLength={14}
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'cpf',
                      evt.target.value.replace(/[.|-]/gi, '')
                    )
                  }
                />
              </div>
              <div className="w-full md:w-5/12 md:mt-6 md:mr-4">
                <Text className="mb-4">Data de nascimento:</Text>
                <Input
                  placeholder="Data de Nascimento"
                  name="birthDay"
                  value={formik.values.birthDay}
                  type="date"
                  onChange={(evt) =>
                    formik.setFieldValue('birthDay', evt.target.value)
                  }
                />
              </div>
              <div className="w-full md:w-5/12 md:mt-6">
                <Text className="mb-4">Telefone:</Text>
                <Input
                  placeholder="Telefone"
                  name="phone"
                  value={formik.values.phone}
                  maxLength={15}
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'phone',
                      evt.target.value.replace(/[(|)| |-]/gi, '')
                    )
                  }
                />
              </div>
              <div className="flex items-center w-full space-x-4 md:mt-6">
                <Text>Sexo:</Text>
                <Input
                  type="radio"
                  name="gender"
                  label="Masculino"
                  value={0}
                  onChange={onChangeGender}
                />
                <Input
                  type="radio"
                  name="gender"
                  label="Feminino"
                  value={1}
                  onChange={onChangeGender}
                />
                <Input
                  type="radio"
                  name="gender"
                  label="Outro"
                  value={2}
                  onChange={onChangeGender}
                />
              </div>
              <div className="flex w-full space-x-4 md:mt-8">
                <Button
                  type="submit"
                  color={Color.GREEN}
                  icon="save"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Cadastrar
                </Button>
                <Button type="button" color={Color.BLACK} icon="ban">
                  Cancelar
                </Button>
              </div>
            </form>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}