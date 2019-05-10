import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'; // fontawesome icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // fontawesome icons
import { faUser } from '@fortawesome/free-solid-svg-icons'; // add fontawesome icons here and below in libary.add

import { Messages, Users, NotFoundPage } from 'containers';

import GlobalStyle from '../../global-styles';

library.add(fab, faUser); // add fontawesome icons here
/**
 * APP CONTAINER
 */
export default function App() {
  return (
    <div>
      {/* ROUTING COMPONENTS */}
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/messages" component={Messages} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* GLOBAL STYLE */}
      <GlobalStyle />
    </div>
  );
}
