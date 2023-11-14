import { IContainer } from './Container.interface';

import s from './Container.module.scss';

export const Container = ({ children }: IContainer) => {
    return <div className={s.container}>{children}</div>;
};
