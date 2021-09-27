import { useCallback, useEffect, useMemo, useState } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import {
  Button,
  Header,
  Title,
  Color,
  Table,
} from '@lar_melhor_idade/design-system';

import {
  getMedicalRecordList,
  deleteMedicalRecord,
} from '../../../api/medical-record';
import { MedicalRecordListResponse } from '../../../api/interface/medical-record';

export interface MedicalRecordListProps extends RouteComponentProps {
  id?: string;
}

const columns = [
  { column: 'medicalAppointmentDate', description: 'Data consulta' },
  { column: 'responsible', description: 'Médico' },
  { column: 'actions', description: 'Ações' },
];

function TableActions({
  id,
  idMedicalRecord,
  handleRemove,
}: {
  id: string;
  idMedicalRecord: number;
  handleRemove: Function;
}) {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <Button
        color={Color.BLACK}
        onClick={async () =>
          await navigate(
            `/institutionalized/medical-record/${id}/view/${idMedicalRecord}`
          )
        }
      >
        Ver
      </Button>
      <Button
        color={Color.RED}
        onClick={async () => {
          await deleteMedicalRecord(String(idMedicalRecord));

          handleRemove();
        }}
      >
        Apagar
      </Button>
    </div>
  );
}

export function InstitutionalizedMedicalRecordList({
  id = '0',
}: MedicalRecordListProps) {
  const [listProps, setListProps] = useState<MedicalRecordListResponse>({
    content: [],
    first: true,
    last: true,
    number: 0,
    totalPages: 0,
  });

  useEffect(() => {
    async function fetchList() {
      const { data } = await getMedicalRecordList({ institutionalizedId: id });

      setListProps(data);
    }

    fetchList();
  }, [id]);

  const columnsHeader = useMemo(
    () => columns.map((column) => column.description),
    []
  );

  const dataBody = useMemo(() => {
    return listProps?.content.map(
      ({ medicalAppointmentDate, responsible, id: idMedicalRecord }) => {
        const values = [
          medicalAppointmentDate,
          responsible,
          <TableActions
            id={id}
            idMedicalRecord={idMedicalRecord}
            handleRemove={async () => {
              const { data } = await getMedicalRecordList({
                institutionalizedId: String(id),
              });

              setListProps(data);
            }}
          />,
        ];

        return { values };
      }
    );
  }, [id, listProps]);

  const handleFilter = useCallback(
    async (value) => {
      const { data } = await getMedicalRecordList({
        medicalAppointmentDate: value,
        institutionalizedId: id,
      });

      setListProps(data);
    },
    [id]
  );

  const handleNextOrPrevPage = useCallback(
    async (value) => {
      const { data } = await getMedicalRecordList({
        page: value,
        institutionalizedId: id,
      });

      setListProps(data);
    },
    [id]
  );

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
          Prontuários
        </Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 space-y-4 md:px-0">
        <div>
          <Button
            className="w-auto"
            type="button"
            color={Color.BLACK}
            icon="plus"
            onClick={async () =>
              await navigate(`/institutionalized/medical-record/${id}`)
            }
          >
            Cadastrar
          </Button>
        </div>
        <Table
          title="Prontuário"
          inputName="search"
          inputPlaceholder="Pesquisar"
          data={dataBody}
          columns={columnsHeader}
          totalPages={listProps.totalPages}
          page={listProps.number}
          isFirst={listProps.first}
          isLast={listProps.last}
          filter={handleFilter}
          nextPage={() => handleNextOrPrevPage(listProps.number + 1)}
          previousPage={() => handleNextOrPrevPage(listProps.number - 1)}
        />
      </div>
    </section>
  );
}
