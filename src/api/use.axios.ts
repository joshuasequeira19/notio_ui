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

/**
 * API Hook for Axios, to make API calls in a component that needs data on mount
 */

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

                setData(response.data?.data);
                if (error) setError(null);
            
            }).catch ((error) => {

                setError(error.response.data);
                if (data) setData(null);

            }).finally (() => {
                setLoading(false);
            })

    }, []);

    return {data, loading, error}
}

/**
 * API Hook for Axios, to make API calls in a component that needs data on demand, whenever it needs it
 */

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

                setData(response.data?.data);
                if (error) setError(null);
            
            }).catch ((error) => {

                setError(error.response.data);
                if (data) setData(null);

            }).finally (() => {
                setLoading(false);
            })

    }

    return {data, loading, error, fetchData}
}

export { useAxios, useLazyAxios}