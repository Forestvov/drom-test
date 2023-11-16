import { IDateContent, IDateTime } from '../model/types/formModel';

export const formatTimes = (times: IDateTime): IDateContent[] => {
    return Object.keys(times)
        .map((key) => ({
            ...times[key],
        }))
        .filter((time) => !time.isBooked);
};
