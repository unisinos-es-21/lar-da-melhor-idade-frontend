import { client } from 'api/client';

import {
  InstitutionalizedRequest,
  InstitutionalizedResponse,
  InstitutionalizedListRequest,
  InstitutionalizedListResponse,
} from 'api/interface/institutionalized';

export function register(institutionalizedRequest: InstitutionalizedRequest) {
  return client.post<InstitutionalizedRequest>(
    'institutionalized',
    institutionalizedRequest
  );
}

export function getRegister(id: string) {
  return client.get<InstitutionalizedResponse>(`institutionalized/${id}`);
}

export function getList(
  param: InstitutionalizedListRequest = { page: 0, name: '' }
) {
  const params = new URLSearchParams();

  params.append('page', String(param.page ?? 0));
  params.append('name', param.name ?? '');

  const url = `institutionalized?${params.toString()}`;

  return client.get<InstitutionalizedListResponse>(url);
}
