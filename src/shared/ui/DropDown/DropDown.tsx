import { useRef, useState } from 'react';

import { cn } from 'shared/lib/cn/cn';
import { useOnOutsideClick } from 'shared/lib/hooks/useOnOutsideClick';

import { DropDownOptionType, IDropDown } from './DropDown.interface';

import s from './DropDown.module.scss';

export const DropDown = (props: IDropDown) => {
    const {
        options,
        placeholder,
        onSelect = () => null,
        errorMessage,
        onBlur = () => null,
        onChange,
        value,
        isTouched,
    } = props;

    const ref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const onCloseHandler = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useOnOutsideClick(ref, onCloseHandler);

    const onSelectHandler = (value: DropDownOptionType) => {
        onSelect(value);
        onChange(value.name);
        onCloseHandler();
        onBlur();
    };

    const toggleOpen = () => {
        onBlur();
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className={s.inner} ref={ref}>
            <button
                className={cn(s.header, {
                    [s.open]: isOpen,
                    [s.error]: errorMessage,
                    [s.isTouched]: isTouched,
                    [s.isNotTouched]: !isTouched,
                })}
                onClick={toggleOpen}
                type="button"
            >
                <span>{value ?? placeholder}</span>
                <svg
                    className={s.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    viewBox="0 0 95 56"
                >
                    <path
                        d="M47.5 56c-2.2 0-4.3-.8-6-2.5l-39-39c-3.3-3.3-3.3-8.7 0-12s8.7-3.3 12 0l33 33 33-33c3.3-3.3 8.7-3.3 12 0s3.3 8.7 0 12l-39 39c-1.7 1.7-3.8 2.5-6 2.5z"
                        fill="#000"
                    />
                </svg>
            </button>

            {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}

            <div className={cn(s.body, { [s.open]: isOpen })}>
                <ul className={s.list}>
                    {options.length > 0 ? (
                        options.map((option) => (
                            <li key={option.id}>
                                <button
                                    className={
                                        value === option.name ? s.current : ''
                                    }
                                    onClick={() => onSelectHandler(option)}
                                    type="button"
                                >
                                    {option.name}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>Список пуст</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
