import { AxiosResponse } from 'axios';
import { client } from './client';

import { AuthResponse, AuthRequest } from './interface/auth';

export function login(authRequest: AuthRequest) {
  return client.post<AuthRequest, AxiosResponse<AuthResponse>>(
    'auth/authenticate',
    authRequest
  );
}
