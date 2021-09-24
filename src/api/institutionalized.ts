import { client } from './client';

import {
  InstitutionalizedRequest,
  InstitutionalizedListRequest,
  InstitutionalizedListResponse,
} from './interface/institutionalized';

export function register(institutionalizedRequest: InstitutionalizedRequest) {
  return client.post<InstitutionalizedRequest>(
    'institutionalized',
    institutionalizedRequest
  );
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
