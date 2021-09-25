import { useCallback, useEffect, useState } from 'react';
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

import { getRegister } from '../../../api/institutionalized';
import { registerMedicalRecord } from '../../../api/medical-record';

import { MedicalRecordRequest } from '../../../api/interface/medical-record';
import { InstitutionalizedResponse } from '../../../api/interface/institutionalized';

export interface InstitutionalizedMedicalRecordProps
  extends RouteComponentProps {
  id?: string;
}

const schema = yup.object().shape({
  medicalAppointmentDate: yup.string().required(),
  anamnesis: yup.string().required(),
  reason: yup.number().required(),
  definitiveDiagnosis: yup.string().required(),
  diagnosticHypotheses: yup.string().required(),
  infectiousDiseaseDescription: yup.string(),
  responsible: yup.string().required(),
});

export function InstitutionalizedMedicalRecordRegister({
  id = '0',
}: InstitutionalizedMedicalRecordProps) {
  const [institutionalized, setInstitutionalized] =
    useState<InstitutionalizedResponse>();

  const formik = useFormik<MedicalRecordRequest>({
    validationSchema: schema,
    validateOnMount: true,
    initialValues: {
      medicalAppointmentDate: '',
      anamnesis: '',
      reason: -1,
      definitiveDiagnosis: '',
      diagnosticHypotheses: '',
      infectiousDiseaseCarrier: false,
      infectiousDiseaseDescription: '',
      responsible: '',
    },
    onSubmit: async (values) => {
      await registerMedicalRecord({
        ...values,
        infectiousDiseaseCarrier:
          values.infectiousDiseaseDescription.length !== 0,
        institutionalized: institutionalized,
      })
        .then(async () => {
          await navigate('/institutionalized');
        })
        .catch((err) => {
          const { response } = err;

          alert(response.data.message ?? 'Erro inesperado');
        });
    },
  });

  useEffect(() => {
    async function fetchRegister() {
      const { data } = await getRegister(id);

      setInstitutionalized(data);
    }

    fetchRegister();
  }, [id]);

  const onChangeReason = useCallback(
    (evt) => {
      formik.setFieldValue('reason', evt.target.value);
    },
    [formik]
  );

  return (
    <section className="flex flex-col justify-start items-center w-full min-h-screen bg-white space-y-8 md:p-0">
      <Header className="px-4 md:px-0">
        <Title type="h1">
          ILPI Melhor Idade {'>'} Institucionalizado {'>'} Prontuário
        </Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 md:px-0">
        <Card className="w-full">
          <Card.Header className="flex items-center space-x-4">
            <Icon icon="heart" size="2x" />
            <Title color={Color.WHITE}>Cadastrar Prontuário</Title>
          </Card.Header>
          <Card.Content>
            <form className="flex flex-wrap" onSubmit={formik.handleSubmit}>
              <div className="w-full mt-4 md:w-5/12 md:mr-4">
                <Text className="mb-4">Institucionalizado:</Text>
                <Input
                  placeholder="Institucionalizado"
                  name="institutionalized"
                  defaultValue={institutionalized?.name}
                  type="text"
                  disabled
                />
              </div>
              <div className="w-full mt-4 md:w-5/12 md:mr-4">
                <Text className="mb-4">Nascimento:</Text>
                <Input
                  placeholder="Nascimento"
                  name="birthDay"
                  defaultValue={institutionalized?.birthDay}
                  type="text"
                  disabled
                />
              </div>
              <div className="w-full mt-4 md:w-5/12 md:mr-4">
                <Text className="mb-4">Data consulta:</Text>
                <Input
                  placeholder="Data consulta"
                  name="medicalAppointmentDate"
                  value={formik.values.medicalAppointmentDate}
                  type="date"
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'medicalAppointmentDate',
                      evt.target.value
                    )
                  }
                />
              </div>
              <div className="w-full mt-4 md:w-5/12">
                <Text className="mb-4">Responsável (médico/enfermeiro):</Text>
                <Input
                  placeholder="CRM"
                  name="responsible"
                  value={formik.values.responsible}
                  onChange={(evt) =>
                    formik.setFieldValue('responsible', evt.target.value)
                  }
                />
              </div>
              <div className="w-full mt-4 md:w-5/12">
                <Text className="mb-4">Amamnese:</Text>
                <Input
                  placeholder="Amamnese"
                  name="anamnesis"
                  value={formik.values.anamnesis}
                  onChange={(evt) =>
                    formik.setFieldValue('anamnesis', evt.target.value)
                  }
                />
              </div>
              <div className="flex flex-col w-full space-y-4 md:space-y-0 md:space-x-4 md:mt-6 md:flex-row md:items-center ">
                <Text>Motivo:</Text>
                <Input
                  type="radio"
                  name="reason"
                  label="Consulta"
                  value={0}
                  onChange={onChangeReason}
                />
                <Input
                  type="radio"
                  name="reason"
                  label="Admissão"
                  value={1}
                  onChange={onChangeReason}
                />
                <Input
                  type="radio"
                  name="reason"
                  label="Emergência"
                  value={2}
                  onChange={onChangeReason}
                />
              </div>
              <div className="w-full mt-4 md:w-5/12 md:mr-4">
                <Text className="mb-4">Hipóteses diagnósticas:</Text>
                <Input
                  placeholder="Hipóteses diagnósticas"
                  name="diagnosticHypotheses"
                  value={formik.values.diagnosticHypotheses}
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'diagnosticHypotheses',
                      evt.target.value
                    )
                  }
                />
              </div>
              <div className="w-full mt-4 md:w-5/12">
                <Text className="mb-4">Hipóteses diagnósticas:</Text>
                <Input
                  placeholder="Diagnósticas definitivo"
                  name="definitiveDiagnosis"
                  value={formik.values.definitiveDiagnosis}
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'definitiveDiagnosis',
                      evt.target.value
                    )
                  }
                />
              </div>
              <div className="w-full mt-4 md:w-5/12 md:mr-4">
                <Text className="mb-4">Doença infectocontagiosa:</Text>
                <Input
                  placeholder="Doença infectocontagiosa"
                  name="infectiousDiseaseDescription"
                  value={formik.values.infectiousDiseaseDescription}
                  onChange={(evt) =>
                    formik.setFieldValue(
                      'infectiousDiseaseDescription',
                      evt.target.value
                    )
                  }
                />
              </div>
              <div className="w-full mt-4 md:w-5/12">
                <Text className="mb-4">CID:</Text>
                <Input
                  placeholder="CID"
                  name="responsible"
                  value={formik.values.cid}
                  onChange={(evt) =>
                    formik.setFieldValue('cid', evt.target.value)
                  }
                />
              </div>
              <div className="flex flex-col w-full mt-4 space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:mt-8">
                <Button
                  type="submit"
                  color={Color.GREEN}
                  icon="save"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Cadastrar
                </Button>
                <Button
                  type="button"
                  color={Color.BLACK}
                  icon="ban"
                  onClick={async () => await navigate(`/institutionalized`)}
                >
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
