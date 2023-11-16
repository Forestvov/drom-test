import { Price } from 'shared/ui/Price/Price';

import { IMainAddress } from './MainAddress.interface';

import s from './MainAddress.module.scss';

export const MainAddress = (props: IMainAddress) => {
    const { price, address, phones } = props;
    return (
        <div className={s.block}>
            <p>{address}</p>
            <div className={s.phones}>
                {phones.map((phone, idx) => (
                    <div key={idx}>
                        <a href={`tel:${phone}`}>{phone}</a>
                        <span>, </span>
                    </div>
                ))}
            </div>
            {price > 0 && (
                <p>
                    Стоимость услугу <Price price={price} />
                </p>
            )}
        </div>
    );
};
