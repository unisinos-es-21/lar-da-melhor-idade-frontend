import { navigate } from '@reach/router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from './';

jest.mock('@reach/router');

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

  test('Deve navegar para a página de institucionalizado', async () => {
    render(<Home />);

    const inputCardUser = await screen.findByText(/Acessar/i);

    expect(inputCardUser).toBeVisible();

    userEvent.click(inputCardUser);

    await waitFor(() => expect(navigate).toHaveBeenCalledTimes(1));
  });
});
