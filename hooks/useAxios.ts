import { nodeApis } from "@/data/api";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
interface ApiState {
  loading: boolean;
  errors: string;
  response: any;
}
const useAxios = () => {
  const [apiState, setApiState] = useState<ApiState>({
    loading: false,
    errors: "",
    response: [],
  });
  const apiInstance = axios.create({
    baseURL: nodeApis.baseURL,
  });
  const abortController = new AbortController();
  const fetchApiData = async <T>(
    axiosRequestConfig: AxiosRequestConfig<T>
  ): Promise<any> => {
    try {
      abortController.abort();
      setApiState((prev) => ({ ...prev, loading: true, errors: "" }));
      const response = await apiInstance<T>(axiosRequestConfig);
      setApiState((prev) => ({ ...prev, response: response.data }));
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error(
          "path:suvarna-bhagya/hooks/useAxios.ts",
          "axios request cancelled",
          error
        );
      } else if (error instanceof Error) {
        const errorMessage = error.message;
        console.error(
          "path:suvarna-bhagya/hooks/useAxios.ts",
          "Axios error",
          `message ${error.message}`,
          error
        );
        setApiState((prev) => ({
          ...prev,
          errors: errorMessage ? errorMessage : "Failed to Fetch Data",
        }));
      } else {
        console.error("path:suvarna-bhagya/hooks/useAxios.ts", "axios error");

        setApiState((prev) => ({ ...prev, errors: "something went wrong" }));
      }
    } finally {
      setApiState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };
  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);
  return { apiState, fetchApiData } as const;
};
export default useAxios;
