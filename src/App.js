import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Content from './components/Content/Content';
import Loading from './components/Loading/Loading';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const App = () => (
  <Switch>
    <Suspense fallback={<Loading />}>
      <Content>
        <Route path='/:cityName?' exact component={HomePage} />
        {/* <Redirect to='/' /> */}
      </Content>
    </Suspense>
  </Switch>
);

export default App;
