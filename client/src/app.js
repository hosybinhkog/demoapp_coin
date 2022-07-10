import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';
import { DefaultLayout } from './components';
import store from '~/redux/store';
import { loadUser } from '~/redux/actions/user.action';

import UserRoute from './routes/UserRoute';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        {routes.private.map((route, index) => {
          let Layout = DefaultLayout;

          if (route.layout === null) {
            Layout = React.Fragment;
          } else if (route.layout) {
            Layout = route.layout;
          }

          const Element = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <UserRoute>
                  <Layout title={route.title}>
                    <Element />
                  </Layout>
                </UserRoute>
              }
            />
          );
        })}
        {/* Public route position is END ==> * 404 * */}
        {routes.publicRoute.map((route, index) => {
          let Layout = DefaultLayout;

          if (route.layout === null) {
            Layout = React.Fragment;
          } else if (route.layout) {
            Layout = route.layout;
          }

          const Element = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout title={route.title}>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
