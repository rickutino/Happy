import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import OrphanagesMap from '../pages/OrphanagesMap/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/orphanages" component={OrphanagesMap} />
  </Switch>
);
export default Routes;
