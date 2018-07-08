import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginForm from '../components/user/LoginForm';
import { login } from '../actions/sessionActions';
import routes from '../constants/routesPaths';

const LoginPage = ({ login, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="session-page login-page grid-container full">
      <div className="grid-x grid-margin-x align-middle">
        <div className="session-wrapper">
          <p><FormattedMessage id="login.title" /></p>
          <LoginForm onSubmit={login} />
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(LoginPage);
