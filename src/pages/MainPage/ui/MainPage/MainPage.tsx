import { Container } from 'shared/ui/Container';
import { PageTitle } from 'shared/ui/PageTitle/PageTitle';
import { LogoLoader } from 'shared/ui/LogoLoader';

import { MainForm } from '../MainForm/MainForm';
import { MainDescription } from '../MainDescription/MainDescription';

const MainPage = () => {
    return (
        <Container>
            <LogoLoader />
            <PageTitle title="Онлайн запись" />
            <MainForm />
            <MainDescription />
        </Container>
    );
};

export default MainPage;
