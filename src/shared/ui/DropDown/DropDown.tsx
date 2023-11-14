import { useRef, useState } from 'react';

import { cn } from 'shared/lib/cn/cn';
import { useOnOutsideClick } from 'shared/lib/hooks/useOnOutsideClick';

import s from './DropDown.module.scss';

export const DropDown = () => {
    const [value, setValue] = useState('Владивосток');
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);

    useOnOutsideClick(ref, () => setIsOpen(false));

    const onSelect = (value: string) => {
        setValue(value);
        setIsOpen(false);
    };

    return (
        <div className={s.inner} ref={ref}>
            <button
                className={cn(s.header, { [s.open]: isOpen })}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <span>{value}</span>
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
            <div className={cn(s.body, { [s.open]: isOpen })}>
                <ul className={s.list}>
                    <li>
                        <button onClick={() => onSelect('Владивосток')}>
                            Владивосток
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onSelect('Приморск')}>
                            Приморск
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onSelect('Большой Камень')}>
                            Большой Камень
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
