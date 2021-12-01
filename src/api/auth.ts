import { AxiosResponse } from 'axios';

import { client } from 'api/client';
import { AuthResponse, AuthRequest } from 'api/interface/auth';

export function auth(authRequest: AuthRequest) {
  return client.post<AuthRequest, AxiosResponse<AuthResponse>>(
    'auth/authenticate',
    authRequest
  );
}
