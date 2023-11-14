import InputMask from 'react-input-mask';
import { Controller, useFormContext } from 'react-hook-form';

import { cn } from 'shared/lib/cn/cn';

import { InputProps } from './Input.interface';
import s from './Input.module.scss';

export const Input = (props: InputProps) => {
    const { type, className, disabled, placeholder, name } = props;

    const { register, control } = useFormContext();

    if (type === 'tel') {
        return (
            <Controller
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <div
                        className={cn(s.inner, {
                            [s.error]: Boolean(error),
                        })}
                    >
                        <InputMask
                            className={cn(
                                s.input,
                                {
                                    [s.error]: Boolean(error),
                                },
                                [className],
                            )}
                            mask="+7 (999) 999-99-99"
                            value={value}
                            disabled={disabled}
                            onChange={(e) => {
                                onChange(e);
                            }}
                            placeholder={placeholder}
                        />
                        {error && <p className={s.error}>{error.message}</p>}
                    </div>
                )}
                control={control}
                name={name}
            />
        );
    }

    return (
        <Controller
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <div
                    className={cn(s.inner, {
                        [s.error]: Boolean(error),
                    })}
                >
                    <input
                        className={cn(
                            s.input,
                            {
                                [s.error]: Boolean(error),
                            },
                            [className],
                        )}
                        {...register(name)}
                        onChange={onChange}
                        disabled={disabled}
                        placeholder={placeholder}
                        value={value}
                        type={type}
                    />
                    {error && <p className={s.error}>{error.message}</p>}
                </div>
            )}
            control={control}
            name={name}
        />
    );
};
