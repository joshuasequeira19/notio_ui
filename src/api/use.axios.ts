import { useEffect, useState } from "react";
import axiosInstance from "./axios";


interface baseAxiosProps {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    withCredentials?: boolean;
    body?: {};
    headers?: {};
    params?: {};
}

interface useAxiosProps extends baseAxiosProps { }

function useAxios<T>({url, method = 'GET', withCredentials = true, body = {}, headers = {}, params = {}} : useAxiosProps) {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect (() => {

        setLoading(true);

        axiosInstance
            .request({
                url,
                method,
                data: body,
                headers,
                params,
                withCredentials
            
            }).then ((response) => {

                setData(response.data);
                if (error) setError(null);
            
            }).catch ((error) => {

                setError(error);
                if (data) setData(null);

            }).finally (() => {
                setLoading(false);
            })

    }, [url, method, body, headers, params]);

    return {data, loading, error}
}

interface useLazyAxiosProps extends baseAxiosProps { }

function useLazyAxios<T>({url, method = 'GET', withCredentials = true, body = {}, headers = {}, params = {}} : useLazyAxiosProps) {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ApiError | null>(null);

    function fetchData() {

        setLoading(true);
        
        axiosInstance
            .request({
                url,
                method,
                data: body,
                headers,
                params,
                withCredentials
            
            }).then ((response) => {

                setData(response.data);
                if (error) setError(null);
            
            }).catch ((error) => {

                setError(error);
                if (data) setData(null);

            }).finally (() => {
                setLoading(false);
            })

    }

    return {data, loading, error, fetchData}
}

export { useAxios, useLazyAxios}