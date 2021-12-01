import { render, screen } from '@testing-library/react';

import { InstitutionalizedHome } from '.';

describe('InstitutionalizedHome - Container para a página de institucionalizado', () => {
  test('Deve renderizar os elementos', async () => {
    render(<InstitutionalizedHome />);

    const title = await screen.findByText(/ILPI Melhor Idade/i);
    const titleCardUser = await screen.findByText('Institucionalizados');
    const inputCardUser = await screen.findByText(/Cadastrar/i);

    const tableColumnHeaderName = await screen.findByText('Nome');
    const tableColumnHeaderCPF = await screen.findByText('CPF');
    const tableColumnHeaderPhone = await screen.findByText('Telefone');
    const tableColumnHeaderBirthDay = await screen.findByText(
      'Data de Nascimento'
    );
    const tableColumnHeaderGender = await screen.findByText('Sexo');

    const tableRowName = await screen.findByText('João José da Silva Santos14');
    const tableRowCPF = await screen.findByText('00000000014');
    const tableRowPhone = await screen.findByText('545034540');
    const tableRowBirthDay = await screen.findByText('1971-09-22');
    const tableRowGender = await screen.findByText('Outro');

    expect(title).toBeVisible();
    expect(titleCardUser).toBeVisible();
    expect(inputCardUser).toBeVisible();
    expect(tableColumnHeaderName).toBeVisible();
    expect(tableColumnHeaderCPF).toBeVisible();
    expect(tableColumnHeaderPhone).toBeVisible();
    expect(tableColumnHeaderBirthDay).toBeVisible();
    expect(tableColumnHeaderGender).toBeVisible();
    expect(tableRowName).toBeVisible();
    expect(tableRowCPF).toBeVisible();
    expect(tableRowPhone).toBeVisible();
    expect(tableRowBirthDay).toBeVisible();
    expect(tableRowGender).toBeVisible();
  });
});
