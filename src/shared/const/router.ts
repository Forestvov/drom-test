export enum AppRoutes {
    MAIN = 'main',
    ORDERS = 'orders',
}

export const getRouteMain = () => '/';
export const getRouteOrders = () => '/orders';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteOrders()]: AppRoutes.ORDERS,
};
