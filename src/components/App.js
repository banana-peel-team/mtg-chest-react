import React, { Fragment } from 'react';
import { bool, object } from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './common/Header';
import history from '../utils/history';
import RouteFromPath from './routes/RouteFromPath';
import routes from '../routes';

const App = ({ authenticated, checked, currentUser }) => (
  <Fragment>
    <Helmet>
      <title>MTG Chest</title>
    </Helmet>
    <ConnectedRouter history={history}>
      {checked &&
        <Fragment>
          { authenticated && <Header currentUser={currentUser} /> }
          <Switch>
            {routes.map((route, index) =>
              <RouteFromPath
                key={`route${index}`}
                {...route}
                authenticated={authenticated}
              />)
            }
          </Switch>
        </Fragment>
      }
    </ConnectedRouter>
  </Fragment>
);

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired,
  currentUser: object
};

const mapState = state => ({
  checked: state.getIn(['session', 'checked']),
  authenticated: state.getIn(['session', 'authenticated']),
  currentUser: state.getIn(['session', 'user'])
});

export default connect(mapState)(App);
