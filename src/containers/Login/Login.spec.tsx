import { navigate } from '@reach/router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './';

jest.mock('@reach/router');

window.alert = jest.fn();

describe('Login - Container para a página de login', () => {
  test('Deve renderizar os elementos', async () => {
    render(<Login />);

    const title = await screen.findByText(/ILPI Melhor Idade/i);
    const inputUser = await screen.findByPlaceholderText(/Usuário/i);
    const inputPassword = await screen.findByPlaceholderText(/Senha/i);
    const buttonSubmit = await screen.findByText(/Entrar/i);

    expect(title).toBeVisible();
    expect(inputUser).toBeVisible();
    expect(inputPassword).toBeVisible();
    expect(buttonSubmit).toBeVisible();
    expect(buttonSubmit).toBeDisabled();
  });

  test('Deve submeter as informações corretas', async () => {
    render(<Login />);

    const inputUser = await screen.findByPlaceholderText(/Usuário/i);
    const inputPassword = await screen.findByPlaceholderText(/Senha/i);
    const buttonSubmit = await screen.findByText(/Entrar/i);

    expect(buttonSubmit).toBeDisabled();

    userEvent.type(inputUser, 'test');
    userEvent.type(inputPassword, '123456');

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    await waitFor(() => expect(navigate).toHaveBeenCalledTimes(1));
  });

  test('Deve submeter as informações incorretas', async () => {
    render(<Login />);

    const inputUser = await screen.findByPlaceholderText(/Usuário/i);
    const inputPassword = await screen.findByPlaceholderText(/Senha/i);
    const buttonSubmit = await screen.findByText(/Entrar/i);

    expect(buttonSubmit).toBeDisabled();

    userEvent.type(inputUser, 'test2');
    userEvent.type(inputPassword, '1234567');

    await waitFor(() => expect(buttonSubmit).toBeEnabled());

    userEvent.click(buttonSubmit);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledTimes(0);
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('Credenciais inválidas');
    });
  });
});
