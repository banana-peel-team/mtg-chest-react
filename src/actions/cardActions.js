import { SubmissionError } from 'redux-form/immutable';
import * as types from './actionTypes';
import cardApi from '../api/cardApi';

export const getCollectionProcess = () => ({
  type: types.GET_COLLECTION
});

export const getCollectionSuccess = collection => ({
  type: types.GET_COLLECTION_SUCCESS,
  collection
});

export const getCollectionError = error => ({
  type: types.GET_COLLECTION_ERROR,
  error
});

export const getCollection = () =>
  (dispatch) => {
    dispatch(getCollectionProcess());
    cardApi.getCollection().then((collection) => {
      dispatch(getCollectionSuccess(collection));
    }).catch((err) => {
      dispatch(getCollectionError(err));
      throw new SubmissionError(err.errors);
    });
  };
