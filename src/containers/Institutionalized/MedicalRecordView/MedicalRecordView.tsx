import { useEffect, useState } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import {
  Button,
  Card,
  Color,
  Icon,
  Header,
  Title,
  Text,
  Size,
} from '@lar_melhor_idade/design-system';

import { getMedicalRecord } from 'api/medical-record';
import { MedicalRecordResponse } from 'api/interface/medical-record';

export interface MedicalRecordListProps extends RouteComponentProps {
  id?: string;
  idMedicalRecord?: string;
}

export function InstitutionalizedMedicalRecordView({
  id = '0',
  idMedicalRecord = '0',
}: MedicalRecordListProps) {
  const [medicalRecord, setMedicalRecord] = useState<MedicalRecordResponse>();

  useEffect(() => {
    async function fetchList() {
      if (idMedicalRecord !== '0') {
        const { data } = await getMedicalRecord(idMedicalRecord);
        setMedicalRecord(data);
      }
    }

    fetchList();
  }, [idMedicalRecord]);

  return (
    <section className="flex flex-col justify-start items-center w-full min-h-screen bg-white space-y-8 md:p-0">
      <Header className="px-4 md:px-0">
        <Title type="h1">
          <span
            className="cursor-pointer"
            onClick={async () => await navigate(`/home`)}
          >
            ILPI Melhor Idade
          </span>
          {' > '}
          <span
            className="cursor-pointer"
            onClick={async () => await navigate(`/institutionalized`)}
          >
            Institucionalizado
          </span>
          {' > '}
          <span
            className="cursor-pointer"
            onClick={async () =>
              await navigate(`/institutionalized/medical-record/${id}/list`)
            }
          >
            Prontuários
          </span>
          {' > '}
          Prontuário
        </Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 space-y-4 md:px-0">
        <Card>
          <Card.Header className="flex items-center space-x-4">
            <Icon icon="heart" size="2x" />
            <Title color={Color.WHITE}>Prontuário</Title>
          </Card.Header>
          <Card.Content>
            <div>
              <ul className="space-y-4">
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Nome:
                  </Title>
                  <Text>{medicalRecord?.institutionalized?.name}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Nascimento:
                  </Title>
                  <Text>{medicalRecord?.institutionalized?.birthDay}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Data da consulta:
                  </Title>
                  <Text>{medicalRecord?.medicalAppointmentDate}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Responsável:
                  </Title>
                  <Text>{medicalRecord?.responsible}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Anamnesis:
                  </Title>
                  <Text>{medicalRecord?.anamnesis}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Hipóteses diagnósticas:
                  </Title>
                  <Text>{medicalRecord?.diagnosticHypotheses}</Text>
                </li>
                <li>
                  <Title className="font-bold" size={Size.MEDIUM}>
                    Diagnóstico definitivo:
                  </Title>
                  <Text>{medicalRecord?.definitiveDiagnosis}</Text>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Button
                type="button"
                color={Color.BLACK}
                icon="arrow-right"
                onClick={async () =>
                  await navigate(`/institutionalized/medical-record/${id}/list`)
                }
              >
                Voltar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
