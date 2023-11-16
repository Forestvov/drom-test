import { Container } from 'shared/ui/Container';
import { PageTitle } from 'shared/ui/PageTitle/PageTitle';
import { LogoLoader } from 'shared/ui/LogoLoader';
import { OrderLink } from 'shared/ui/OrderLink';

import { useGetCitiesQuery } from '../../model/service/bookingService';

import { MainDescription } from '../MainDescription/MainDescription';
import { MainForm } from '../MainForm/MainForm';
import { MainSuccess } from '../MainSuccess/MainSuccess';

const MainPage = () => {
    useGetCitiesQuery();

    return (
        <Container>
            <LogoLoader />
            <PageTitle title="Онлайн запись" />
            <MainForm />
            <MainDescription />
            <MainSuccess />
            <OrderLink />
        </Container>
    );
};

export default MainPage;
