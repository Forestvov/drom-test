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
                    field: { onChange, value, onBlur },
                    fieldState: { error, isTouched, invalid },
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
                                    [s.isTouched]: isTouched,
                                    [s.isNotTouched]: !isTouched,
                                    [s.invalid]: !invalid && isTouched,
                                },
                                [className],
                            )}
                            mask="+7 (999) 999-99-99"
                            value={value}
                            disabled={disabled}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                        {error && (
                            <p className={s.errorText}>{error.message}</p>
                        )}
                    </div>
                )}
                control={control}
                name={name}
            />
        );
    }

    return (
        <Controller
            render={({
                field: { onChange, value, onBlur },
                fieldState: { error, isTouched, invalid },
            }) => (
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
                                [s.isTouched]: isTouched,
                                [s.isNotTouched]: !isTouched,
                                [s.invalid]: !invalid && isTouched,
                            },
                            [className],
                        )}
                        {...register(name)}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        placeholder={placeholder}
                        value={value}
                        type={type}
                    />
                    {error && <p className={s.errorText}>{error.message}</p>}
                </div>
            )}
            control={control}
            name={name}
        />
    );
};
