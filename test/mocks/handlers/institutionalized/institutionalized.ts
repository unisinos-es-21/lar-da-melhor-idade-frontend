import { rest } from 'msw';

import {
  InstitutionalizedListRequest,
  InstitutionalizedListResponse,
} from 'api/interface/institutionalized';
import { ErrorResponse } from 'api/interface/error';

const BASE_URL = 'https://lar-da-melhor-idade-backend.herokuapp.com';

export const institutionalizedHandlers = [
  rest.get<
    InstitutionalizedListRequest,
    InstitutionalizedListResponse | ErrorResponse
  >(`${BASE_URL}/institutionalized`, (req, res, ctx) => {
    return res(
      ctx.json<InstitutionalizedListResponse>({
        content: [
          {
            id: 1,
            name: 'João José da Silva Santos14',
            cpf: '00000000014',
            phone: '545034540',
            birthDay: '1971-09-22',
            gender: 'OTHER',
          },
        ],
        first: true,
        last: true,
        number: 1,
        totalPages: 1,
      })
    );
  }),
];
