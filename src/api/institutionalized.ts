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
  param: InstitutionalizedListRequest = { pageNumber: 0, cpf: '', name: '' }
) {
  const params = new URLSearchParams();

  params.append('pageNumber', String(param.pageNumber ?? 0));
  params.append('cpf', param.cpf ?? '');
  params.append('name', param.name ?? '');

  const url = `institutionalized?${params.toString()}`;

  return client.get<InstitutionalizedListResponse>(url);
}
