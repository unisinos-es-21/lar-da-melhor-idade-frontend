import { render, screen } from '@testing-library/react';

import { Institutionalized } from './';

describe('Institutionalized - Container para a página de institucionalizado', () => {
  test('Deve renderizar os elementos', async () => {
    render(<Institutionalized />);

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
