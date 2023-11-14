import s from './MainDescription.module.scss';

export const MainDescription = () => {
    return (
        <p className={s.text}>
            Нажимая «Записаться», я выражаю своё согласие с обработкой моих
            персональных данных в соответствии с{' '}
            <a href="/">принятой политикой конфиденциальности</a> и принимаю{' '}
            <a href="/">пользовательское соглашение</a>
        </p>
    );
};
