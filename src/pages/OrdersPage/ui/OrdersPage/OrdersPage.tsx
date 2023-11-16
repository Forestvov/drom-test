import { Container } from 'shared/ui/Container';
import { LogoLoader } from 'shared/ui/LogoLoader';
import { PageTitle } from 'shared/ui/PageTitle/PageTitle';

import { OrderList } from '../OrderList/OrderList';

const OrdersPage = () => {
    return (
        <Container>
            <LogoLoader />
            <PageTitle title="Все записи" />
            <OrderList />
        </Container>
    );
};

export default OrdersPage;
