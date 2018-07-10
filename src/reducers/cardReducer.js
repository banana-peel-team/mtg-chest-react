import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  loading: false,
  collection: Immutable.Map({})
});

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COLLECTION: {
      return state.set('loading', true);
    }
    case types.GET_COLLECTION_ERROR: {
      return state.set('loading', false);
    }
    case types.GET_COLLECTION_SUCCESS: {
      const { collection } = action;
      const newState = state.set('loading', false);
      return newState.set('collection', Immutable.fromJS(collection));
    }
    default: {
      return state;
    }
  }
};

export default cardReducer;
