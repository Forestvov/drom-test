export interface IDropDown {
    value: string | undefined;
    placeholder: string;
    options: DropDownOptionType[];
    errorMessage?: string;
    isTouched?: boolean;
    onSelect?(value: DropDownOptionType): void;
    onChange(value: string): void;
    onBlur?: () => void;
}

export type DropDownOptionType = {
    id: string;
    name: string;
};
