import { lazy } from 'react';

const routesImport = {
  login: lazy(() => import('./modules/security/pages/Login')),
  cpeControl: lazy(() => import('./modules/establishment/pages/cpe-control')),
  recordEstablishment: lazy(() =>
    import('./modules/establishment/pages/record-establishment')
  ),
};

export const publicRoutes = [
  {
    path: '/login',
    element: routesImport.login,
    title: 'Iniciar sesión',
  },
];

export const userRoutes = [
  {
    path: '/',
    element: routesImport.cpeControl,
    title: 'Control de CPE',
  },
  {
    path: '/record-establishment',
    element: routesImport.recordEstablishment,
    title: 'Registrar establecimiento',
  },
];
