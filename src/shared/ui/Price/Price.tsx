import { IPrice } from './Price.interface';

const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

export const Price = ({ price }: IPrice) => {
    return <span>{formatter.format(price)} ₽</span>;
};
