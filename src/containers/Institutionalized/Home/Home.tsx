import { useCallback, useEffect, useMemo, useState } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import {
  Button,
  Header,
  Title,
  Color,
  Table,
} from '@lar_melhor_idade/design-system';

import { getList } from '../../../api/institutionalized';
import { InstitutionalizedListResponse } from '../../../api/interface/institutionalized';

export interface InstitutionalizedProps extends RouteComponentProps {}

const columns = [
  { column: 'name', description: 'Nome' },
  { column: 'cpf', description: 'CPF' },
  { column: 'phone', description: 'Telefone' },
  { column: 'birthDay', description: 'Data de Nascimento' },
  { column: 'gender', description: 'Sexo' },
];

export function InstitutionalizedHome({ ...props }: InstitutionalizedProps) {
  const [listProps, setListProps] = useState<InstitutionalizedListResponse>({
    content: [],
    first: true,
    last: true,
    number: 0,
    totalPages: 0,
  });

  useEffect(() => {
    async function fetchList() {
      const { data } = await getList();

      setListProps(data);
    }

    fetchList();
  }, []);

  const columnsHeader = useMemo(
    () => columns.map((column) => column.description),
    []
  );

  const dataBody = useMemo(() => {
    return listProps?.content.map(({ name, cpf, phone, birthDay, gender }) => {
      const values = [name, cpf, phone, birthDay, gender];

      return { values };
    });
  }, [listProps]);

  const handleFilter = useCallback(async (value) => {
    const { data } = await getList({ name: value });

    setListProps(data);
  }, []);

  const handleNextOrPrevPage = useCallback(async (value) => {
    const { data } = await getList({ page: value });

    setListProps(data);
  }, []);

  return (
    <section
      className="flex flex-col justify-start items-center w-full min-h-screen bg-white space-y-8 md:p-0"
      {...props}
    >
      <Header className="px-4 md:px-0">
        <Title type="h1">ILPI Melhor Idade {'>'} Institucionalizado</Title>
      </Header>
      <div className="container grid grid-cols-1 px-4 space-y-4 md:px-0">
        <div>
          <Button
            className="w-auto"
            type="button"
            color={Color.BLACK}
            icon="plus"
            onClick={async () => await navigate('/institutionalized/register')}
          >
            Cadastrar
          </Button>
        </div>
        <Table
          title="Institucionalizados"
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
