import { rest } from 'msw';

import { AuthRequest, AuthResponse } from 'api/interface/auth';
import { ErrorResponse } from 'api/interface/error';

const BASE_URL = 'https://lar-da-melhor-idade-backend.herokuapp.com';

export const authHandlers = [
  rest.post<AuthRequest, AuthResponse | ErrorResponse>(
    `${BASE_URL}/auth/authenticate`,
    (req, res, ctx) => {
      const { body } = req;
      const { username, password } = body;

      if (username === 'test' && password === '123456') {
        return res(
          ctx.json({
            token: 'token-jwt',
            expires: 1,
          })
        );
      } else {
        return res(
          ctx.json({ message: 'Credenciais inválidas' }),
          ctx.status(401)
        );
      }
    }
  ),
];
