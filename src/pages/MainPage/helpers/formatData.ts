export const formatData = (str: string): string => {
    const date = new Date(str);
    return new Intl.DateTimeFormat('ru-RU', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }).format(date);
};
