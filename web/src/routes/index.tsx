import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import OrphanagesMap from '../pages/OrphanagesMap/index';
import Orphanage from '../pages/Orphanage/index';
import CreateOrphanage from '../pages/CreateOrphanage/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />
    <Route path="/orphanages/create" component={CreateOrphanage} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
);
export default Routes;
