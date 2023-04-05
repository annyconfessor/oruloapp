import axios, { AxiosResponse, AxiosInstance } from 'axios'
import qs from 'qs'

import { API_TOKEN } from '../constants/config.ts'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://www.orulo.com.br/api/v2',
  timeout: 5000,
  headers: { 
    Authorization: `Bearer ${API_TOKEN}`
  }
});

type BuildingResponse = {
  buildings: any[]
}

export const getBuildings = async (params): Promise<AxiosResponse<BuildingResponse>> => {
  const result = await instance.get(`/buildings?${qs.stringify(params)}`)

  return result
}