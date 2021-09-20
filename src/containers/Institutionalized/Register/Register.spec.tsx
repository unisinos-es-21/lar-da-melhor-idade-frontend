import { render, screen } from '@testing-library/react';

import { InstitutionalizedRegister } from '.';

describe('InstitutionalizedRegister - Container para a página de cadastro institucionalizado', () => {
  test('Deve renderizar os elementos', async () => {
    render(<InstitutionalizedRegister />);

    const title = await screen.findByText(
      'ILPI Melhor Idade > Institucionalizado > Cadastrar'
    );
    const titleCardUser = await screen.findByText(
      'Cadastrar Institucionalizado'
    );
    const inputName = await screen.findByPlaceholderText(/Nome/i);
    const inputCpf = await screen.findByPlaceholderText(/CPF/i);
    const inputBirthDay = await screen.findByPlaceholderText(
      /Data de Nascimento/i
    );
    const inputPhone = await screen.findByPlaceholderText(/Telefone/i);
    const inputGender1 = await screen.findByText(/Masculino/i);
    const inputGender2 = await screen.findByText(/Feminino/i);
    const inputGender3 = await screen.findByText(/Outro/i);
    const inputCardUser = await screen.findByText('Cadastrar');
    const cancelCardUser = await screen.findByText(/Cancelar/i);

    expect(title).toBeVisible();
    expect(titleCardUser).toBeVisible();
    expect(inputName).toBeVisible();
    expect(inputCpf).toBeVisible();
    expect(inputBirthDay).toBeVisible();
    expect(inputPhone).toBeVisible();
    expect(inputGender1).toBeVisible();
    expect(inputGender2).toBeVisible();
    expect(inputGender3).toBeVisible();
    expect(inputCardUser).toBeVisible();
    expect(cancelCardUser).toBeVisible();
  });
});
