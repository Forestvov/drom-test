import { IPageTitle } from './PageTitle.interface';

import s from './PageTitle.module.scss';

export const PageTitle = ({ title }: IPageTitle) => {
    return <h1 className={s.title}>{title}</h1>;
};
