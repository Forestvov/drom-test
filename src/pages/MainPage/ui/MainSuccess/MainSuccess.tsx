import { useEffect, useState } from 'react';

import { useAppDispatch, useStateSelector } from 'shared/lib/hooks/hookStore';
import { cn } from 'shared/lib/cn/cn';

import s from './MainSuccess.module.scss';

import { bookingActions } from 'pages/MainPage';

const { setStatus } = bookingActions;

export const MainSuccess = () => {
    const status = useStateSelector((state) => state.bookingReducer.status);

    const [isShow, setIsShow] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        let timer;

        if (status === 'success' && !timer) {
            setIsShow(true);

            timer = setTimeout(() => {
                setIsShow(false);
                dispatch(setStatus({ status: 'default' }));
            }, 3000);
        }

        return () => {
            if (status === 'success') {
                timer = null;
                dispatch(setStatus({ status: 'default' }));
            }
        };
    }, [status]);

    return (
        <div className={cn(s.messageSuccess, { [s.show]: isShow })}>
            Запись прошла успешно!
        </div>
    );
};
