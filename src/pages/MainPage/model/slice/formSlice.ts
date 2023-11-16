import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bookingService } from 'pages/MainPage';

import { formatData } from '../../helpers/formatData';
import { formatTimes } from '../../helpers/formatTimes';

import { ICity, IState, IStatus } from '../types/formModel';

const initialCity: ICity = {
    address: '',
    id: 'initial',
    name: 'Владивосток',
    price: 0,
    phones: [],
};

const initialState: IState = {
    status: 'default',
    cities: [],
    citiesOptions: [],
    defaultCity: initialCity,
    selectedCity: initialCity,
    dates: [],
    datesOptions: [],
    times: [],
};

export const slice = createSlice({
    name: 'bookingSlice',
    initialState,
    reducers: {
        selectCity(state, actions: PayloadAction<{ id: string }>) {
            state.dates = [];
            state.datesOptions = [];
            state.times = [];
            state.selectedCity =
                state.cities.find((city) => city.id === actions.payload.id) ??
                initialCity;
        },
        selectDate(state, actions: PayloadAction<{ id: string }>) {
            const dateFind = state.dates.find(
                (date) => date.id === actions.payload.id,
            );

            if (dateFind) {
                state.times = dateFind.times.map((time) => ({
                    name: `${time.begin}-${time.end}`,
                    id: time.date,
                }));
            } else {
                state.times = [];
            }
        },
        clearSelects(state) {
            state.selectedCity = state.defaultCity;
            state.times = [];
        },
        setStatus(state, actions: PayloadAction<IStatus>) {
            state.status = actions.payload.status;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            bookingService.endpoints.getCities.matchFulfilled,
            (state, action) => {
                state.cities = action.payload.cities;

                state.citiesOptions = action.payload.cities.map((city) => ({
                    name: city.name,
                    id: city.id,
                }));

                const defaultCity =
                    action.payload.cities.find(
                        (city) => city.name === 'Владивосток',
                    ) ?? action.payload.cities[0];

                state.selectedCity = defaultCity ?? action.payload.cities[0];
                state.defaultCity = defaultCity ?? action.payload.cities[0];
            },
        );

        builder.addMatcher(
            bookingService.endpoints.getCities.matchRejected,
            (state) => {
                state.cities = [];
                state.citiesOptions = [];
                state.selectedCity = initialCity;
            },
        );

        builder.addMatcher(
            bookingService.endpoints.getDayList.matchFulfilled,
            (state, { payload }) => {
                const dates = Object.keys(payload.data)
                    .map((key) => ({
                        id: key,
                        value: formatData(key),
                        times: formatTimes(payload.data[key]),
                    }))
                    .filter((date) => date.times.length > 0);

                state.dates = dates;

                state.datesOptions = dates.map((date) => ({
                    id: date.id,
                    name: date.value,
                }));
            },
        );
    },
});

export const { reducer: bookingReducer, actions: bookingActions } = slice;
