import { IOrder } from '../../model/types/order';

import s from './OrderItem.module.scss';

interface IOrderItem extends IOrder {
    onRemove: (id: string) => void;
}

export const OrderItem = (props: IOrderItem) => {
    const { name, date, time, phone, city, onRemove, id } = props;

    return (
        <div className={s.order}>
            <div className={s.order__row}>
                <div className={s.order__name}>Город:</div>
                <div className={s.order__value}>{city}</div>
            </div>

            <div className={s.order__row}>
                <div className={s.order__name}>Дата:</div>
                <div className={s.order__value}>{date}</div>
            </div>

            <div className={s.order__row}>
                <div className={s.order__name}>Время:</div>
                <div className={s.order__value}>{time}</div>
            </div>

            <div className={s.order__row}>
                <div className={s.order__name}>Имя пользователя:</div>
                <div className={s.order__value}>{name}</div>
            </div>

            <div className={s.order__row}>
                <div className={s.order__name}>Телефон пользователя:</div>
                <div className={s.order__value}>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
            </div>

            <button className={s.order__clear} onClick={() => onRemove(id)}>
                +
            </button>
        </div>
    );
};
