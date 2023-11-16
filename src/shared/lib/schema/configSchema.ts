import * as yup from 'yup';

const escapeRegExp = (stringToGoIntoTheRegex: string) => {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
const phoneMask = '+7 (999) 999-99-99';
const phoneRegExp = new RegExp(
    escapeRegExp(phoneMask).replace(/9/g, '[0-9]'),
    'gi',
);

export const configSchema = {
    name: yup.string().required('Пожалуйста, укажите имя'),
    city: yup.string().required('Пожалуйста, выберите город'),
    date: yup.string().required('Пожалуйста, выберите дату'),
    time: yup.string().required('Пожалуйста, выберите время'),
    phone: yup
        .string()
        .required('Необходимо ввести телефон')
        .matches(
            phoneRegExp,
            'Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связатсья с вами',
        ),
};
