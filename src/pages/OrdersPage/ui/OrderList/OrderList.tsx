import { useEffect, useState } from 'react';

import { IOrder } from '../../model/types/order';

import { OrderItem } from '../OrderItem/OrderItem';

import s from './OrderList.module.scss';

export const OrderList = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const orders = window.localStorage.getItem('orders');

        if (orders) {
            setOrders(JSON.parse(orders));
        }
    }, []);

    const deleteItemHandler = (id: string) => {
        const newOrders = orders.filter((order) => order.id !== id);
        window.localStorage.setItem('orders', JSON.stringify(newOrders));
        setOrders(newOrders);
    };

    if (orders.length === 0) {
        return (
            <div className={s.empty}>
                <h2>Список пуст</h2>
            </div>
        );
    }

    return (
        <div className={s.list}>
            {orders.map((order) => (
                <OrderItem
                    {...order}
                    onRemove={deleteItemHandler}
                    key={order.id}
                />
            ))}
        </div>
    );
};
