import { RouteProps } from 'react-router-dom';

import { AppRoutes, getRouteMain, getRouteOrders } from 'shared/const/router';

import { MainPage } from 'pages/MainPage';
import { OrdersPage } from 'pages/OrdersPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ORDERS]: {
        path: getRouteOrders(),
        element: <OrdersPage />,
    },
};
