import { AxiosError } from 'axios';

export interface UseFetchResponseInterface<T> {
    loading: boolean,
    response: {
        items: T[],
        meta: {
            totalPages: number,
        }
    } | null,
    error: AxiosError | null
}