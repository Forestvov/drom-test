import { Link } from 'react-router-dom';

import s from './OrderLink.module.scss';

export const OrderLink = () => {
    return (
        <Link className={s.link} to="orders">
            Заявки
        </Link>
    );
};
