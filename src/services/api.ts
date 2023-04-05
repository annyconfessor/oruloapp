import axios, { AxiosResponse, AxiosInstance } from 'axios'

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

export const getBuildings = async (): Promise<AxiosResponse<BuildingResponse>> => {
  const result = await instance.get('/buildings')

  return result
}