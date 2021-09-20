import { client } from './client';

import { InstitutionalizedRequest } from './interface/institutionalized';

export function register(institutionalizedRequest: InstitutionalizedRequest) {
  return client.post<InstitutionalizedRequest>(
    'institutionalized',
    institutionalizedRequest
  );
}
