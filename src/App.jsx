import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, userRoutes } from './routes';
import PrivateRoutes from './utils/privateRoutes';
import SpinLoader from './components/common/spin-loader';

function App() {
  return (
    <div className="h-screen bg-slate-100">
      <Suspense fallback={<SpinLoader withBody={true} />}>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}

          <Route element={<PrivateRoutes />}>
            {userRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


