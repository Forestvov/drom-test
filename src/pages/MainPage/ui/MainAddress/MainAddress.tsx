import { Price } from 'shared/ui/Price/Price';

import s from './MainAddress.module.scss';

export const MainAddress = () => {
    return (
        <div className={s.block}>
            <p>ул. Первая 1, ст. 1</p>
            <p>
                <a href="tel:74242424242">74242424242</a>,{' '}
                <a href="tel:74242424242">74242424242</a>
            </p>
            <p>
                Стоимость услугу <Price price={12000} />
            </p>
        </div>
    );
};
