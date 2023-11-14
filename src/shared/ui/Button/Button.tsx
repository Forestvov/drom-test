import { cn } from 'shared/lib/cn/cn';

import { IButton } from './Button.interface';

import s from './Button.module.scss';

export const Button = (props: IButton) => {
    const { className, disabled, children, type } = props;

    return (
        <button
            className={cn(s.button, {}, [className])}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
