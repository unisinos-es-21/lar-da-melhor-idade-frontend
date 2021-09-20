import { render, screen } from '@testing-library/react';

import { Home } from './';

describe('Home - Container para a página inicial', () => {
  test('Deve renderizar os elementos', async () => {
    render(<Home />);

    const title = await screen.findByText(/ILPI Melhor Idade/i);
    const titleCardUser = await screen.findByText(/Institucionalizados/i);
    const inputCardUser = await screen.findByText(/Acessar/i);

    expect(title).toBeVisible();
    expect(titleCardUser).toBeVisible();
    expect(inputCardUser).toBeVisible();
  });
});
