import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    name: string;
    disabled?: boolean;
}
