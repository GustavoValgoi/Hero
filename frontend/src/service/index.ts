import axios, { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_BASE_API;
const axiosInstance = axios.create({
  baseURL,
});

type UseApiFunctions = {
  usePOST<T>(url: string, bodyData: T): Promise<AxiosResponse>;
  usePUT<T>(url: string, bodyData: T): Promise<AxiosResponse>;
  useGET(url: string): Promise<AxiosResponse>;
  useDELETE(url: string): Promise<AxiosResponse>;
  axiosInstance?: AxiosInstance;
};

export const useApi = (): UseApiFunctions => {
  const usePOST = async <T>(
    url: string,
    bodyData: T,
  ): Promise<AxiosResponse> => {
    return axiosInstance.post(url, bodyData);
  };

  const usePUT = async <T>(
    url: string,
    bodyData: T,
  ): Promise<AxiosResponse> => {
    return axiosInstance.put(url, bodyData);
  };

  const useGET = async (url: string): Promise<AxiosResponse> => {
    return axiosInstance.get(url);
  };

  const useDELETE = async (url: string): Promise<AxiosResponse> => {
    return axiosInstance.delete(url);
  };

  return { axiosInstance, usePOST, useGET, useDELETE, usePUT };
};
