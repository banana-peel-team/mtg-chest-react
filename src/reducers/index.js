import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-session';

import router from './routerReducer';
import card from './cardReducer';

const rootReducer = combineReducers({
  form,
  session,
  router,
  card
});

export default rootReducer;
