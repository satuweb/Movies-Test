import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Movies from './pages/Movies';

const App = () => {

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" component={Movies} exact />
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
