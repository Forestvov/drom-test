import { FormProvider, useForm } from 'react-hook-form';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';

import { MainAddress } from '../MainAddress/MainAddress';
import s from './MainForm.module.scss';
import { DropDown } from 'shared/ui/DropDown';

export const MainForm = () => {
    const methods = useForm();

    const { handleSubmit } = methods;

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <DropDown />
                <MainAddress />
                <div className={s.row}>
                    <div className={s.form__grid}>
                        <DropDown />
                        <DropDown />
                    </div>
                </div>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                />
                <Input type="text" name="name" placeholder="Ваше имя" />
                <Button className={s.button} type="submit">
                    Записатсья
                </Button>
            </form>
        </FormProvider>
    );
};
