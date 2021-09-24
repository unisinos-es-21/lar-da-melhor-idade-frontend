import { setupServer } from 'msw/node';

import { authHandlers, institutionalizedHandlers } from './handlers';

export const server = setupServer(
  ...authHandlers,
  ...institutionalizedHandlers
);
