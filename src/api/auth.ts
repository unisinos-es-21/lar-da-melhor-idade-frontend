import { AxiosResponse } from 'axios';

import { client } from '@base/api/client';
import { AuthResponse, AuthRequest } from '@base/api/interface/auth';

export function auth(authRequest: AuthRequest) {
  return client.post<AuthRequest, AxiosResponse<AuthResponse>>(
    'auth/authenticate',
    authRequest
  );
}
