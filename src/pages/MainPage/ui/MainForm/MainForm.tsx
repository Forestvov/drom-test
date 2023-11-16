import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { bookingActions } from 'pages/MainPage';

import { useAppDispatch, useStateSelector } from 'shared/lib/hooks/hookStore';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { DropDown } from 'shared/ui/DropDown';
import { useYupValidationResolver } from 'shared/lib/hooks/useYupValidationResolver';

import { useGetDayListMutation } from '../../model/service/bookingService';
import { MainAddress } from '../MainAddress/MainAddress';

import { schema } from './MainForm.schema';

import s from './MainForm.module.scss';
import { cn } from 'shared/lib/cn/cn';

const { selectCity, selectDate, clearSelects, setStatus } = bookingActions;

interface IFields {
    city: string | undefined;
    date: string | undefined;
    time: string | undefined;
    name: string | undefined;
    phone: string | undefined;
}

export const MainForm = () => {
    const { citiesOptions, selectedCity, times, datesOptions, status } =
        useStateSelector((state) => state.bookingReducer);

    const dispatch = useAppDispatch();

    const [getDayList] = useGetDayListMutation();

    const fetchDayList = async (id: string) => {
        await getDayList({ id });
    };

    const resolver = useYupValidationResolver(schema);

    const methods = useForm<IFields>({
        mode: 'onBlur',
        resolver,
        defaultValues: {
            city: 'Владивосток',
        },
    });

    const {
        handleSubmit,
        formState: { isValid },
        setValue,
        control,
        reset,
    } = methods;

    useEffect(() => {
        if (selectedCity.id !== 'initial') {
            setValue('city', selectedCity.name);
            fetchDayList(selectedCity.id);
        }
    }, [selectedCity]);

    useEffect(() => {
        if (status === 'success') {
            reset();
            setValue('phone', '');
        }
    }, [status]);

    const onSubmit = (data: IFields) => {
        const formData = {
            ...data,
            id: Date.now(),
        };

        new Promise(function (resolve) {
            dispatch(setStatus({ status: 'pending' }));
            setTimeout(() => {
                const storageOrders = window.localStorage.getItem('orders');

                if (!storageOrders) {
                    window.localStorage.setItem(
                        'orders',
                        JSON.stringify([formData]),
                    );
                    return;
                }

                const newOrders = JSON.parse(storageOrders);

                window.localStorage.setItem(
                    'orders',
                    JSON.stringify([...newOrders, formData]),
                );

                resolve('success');
            }, 3000);
        }).then(() => {
            dispatch(setStatus({ status: 'success' }));
            dispatch(clearSelects());
        });
    };

    return (
        <FormProvider {...methods}>
            <form
                className={cn(s.form, { [s.disable]: status === 'pending' })}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    render={({
                        field: { onChange, value, onBlur },
                        fieldState: { isTouched },
                    }) => (
                        <DropDown
                            onBlur={onBlur}
                            onChange={onChange}
                            onSelect={(value) => {
                                setValue('date', undefined);
                                setValue('time', undefined);
                                dispatch(selectCity({ id: value.id }));
                            }}
                            placeholder="Город"
                            value={value}
                            options={citiesOptions}
                            isTouched={isTouched}
                        />
                    )}
                    control={control}
                    name="city"
                />

                <MainAddress
                    address={selectedCity.address}
                    price={selectedCity.price}
                    phones={selectedCity.phones}
                />

                <div className={s.row}>
                    <div className={s.form__grid}>
                        <Controller
                            render={({
                                field: { onChange, onBlur, value },
                                fieldState: { error, isTouched },
                            }) => (
                                <DropDown
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    placeholder="Дата"
                                    onSelect={(value) => {
                                        dispatch(selectDate({ id: value.id }));
                                    }}
                                    value={value}
                                    options={datesOptions}
                                    errorMessage={error?.message}
                                    isTouched={isTouched}
                                />
                            )}
                            control={control}
                            name="date"
                        />

                        <Controller
                            render={({
                                field: { onChange, onBlur, value },
                                fieldState: { error, isTouched },
                            }) => (
                                <DropDown
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    placeholder="Время"
                                    value={value}
                                    options={times}
                                    errorMessage={error?.message}
                                    isTouched={isTouched}
                                />
                            )}
                            control={control}
                            name="time"
                        />
                    </div>
                </div>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                />
                <Input type="text" name="name" placeholder="Ваше имя" />
                <Button className={s.button} disabled={!isValid} type="submit">
                    Записатсья
                </Button>
            </form>
        </FormProvider>
    );
};
