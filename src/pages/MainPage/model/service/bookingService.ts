import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ICity, IDate } from '../types/formModel';

import { api } from 'shared/const/api';

export const bookingService = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: api,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getCities: builder.query<{ cities: ICity[] }, void>({
            query: () => ({
                url: '/8aae9cc5-2253-47da-8bdb-d8e925099ecc?mocky-delay=700ms',
                method: 'GET',
            }),
        }),
        getDayList: builder.mutation<{ data: IDate }, { id: string }>({
            query: ({ id }) => ({
                url: `${id}?mocky-delay=700ms`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetCitiesQuery, useGetDayListMutation } = bookingService;
