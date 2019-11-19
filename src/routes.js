import Platillos from './Platillos'
import Bebidas from './Bebidas'
import Lienzo from './Lienzo';

export const routes = [
    {
        exact,
        path: '/',
        component: Lienzo
    },
    {
        path: '/platillos',
        component: Platillos
    },
    {
        path: '/bebidas',
        component: Bebidas
    },
];