import { DropDownOptionType } from 'shared/ui/DropDown';

export interface IState extends IStatus {
    cities: ICity[];
    citiesOptions: DropDownOptionType[];
    selectedCity: ICity;
    defaultCity: ICity;
    dates: IDateState[];
    datesOptions: DropDownOptionType[];
    times: DropDownOptionType[];
}

export interface IStatus {
    status: 'pending' | 'error' | 'success' | 'default';
}

export interface ICity {
    id: string;
    name: string;
    address: string;
    phones: string[];
    price: number;
}

export interface IDateState {
    id: string;
    value: string;
    times: IDateContent[];
}

export interface IDate {
    [data: string]: IDateTime;
}

export interface IDateTime {
    [time: string]: IDateContent;
}

export interface IDateContent {
    day: string;
    begin: string;
    end: string;
    date: string;
    isBooked: boolean;
}
