import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import { validations, login } from '../../utils/constraints';

const messages = defineMessages({
  username: { id: 'login.form.username' },
  password: { id: 'login.form.password' }
});

export const LoginForm = ({ handleSubmit, error, submitting, intl }) => (
  <form onSubmit={handleSubmit}>
    {error && <strong>{error}</strong>}
    <div>
      <Field
        name="username"
        label={intl.formatMessage(messages.username)}
        component={Input}
        type="text"
      />
    </div>
    <div>
      <Field
        name="password"
        label={intl.formatMessage(messages.password)}
        component={Input}
        type="password"
      />
    </div>
    <button type="submit">
      <FormattedMessage id="login.form.submit" />
    </button>
    {submitting && <Loading />}
  </form>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(injectIntl(LoginForm));
