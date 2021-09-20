import { render, screen } from '@testing-library/react';

import { InstitutionalizedHome } from '.';

describe('InstitutionalizedHome - Container para a página de institucionalizado', () => {
  test('Deve renderizar os elementos', async () => {
    render(<InstitutionalizedHome />);

    const title = await screen.findByText(
      'ILPI Melhor Idade > Institucionalizado'
    );
    const titleCardUser = await screen.findByText('Institucionalizados');
    const inputCardUser = await screen.findByText(/Cadastrar/i);

    expect(title).toBeVisible();
    expect(titleCardUser).toBeVisible();
    expect(inputCardUser).toBeVisible();
  });
});
