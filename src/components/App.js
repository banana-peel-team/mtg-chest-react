import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './common/Header';
import history from '../utils/history';
import RouteFromPath from './routes/RouteFromPath';
import routes from '../routes';

const App = ({ authenticated, checked }) => (
  <Fragment>
    <Helmet>
      <title>RS React Redux Base</title>
    </Helmet>
    <ConnectedRouter history={history}>
      {checked &&
        <Fragment>
          { authenticated && <Header /> }
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
  checked: bool.isRequired
};

const mapState = state => ({
  checked: state.getIn(['session', 'checked']),
  authenticated: state.getIn(['session', 'authenticated'])
});

export default connect(mapState)(App);
