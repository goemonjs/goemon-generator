import { createAction } from 'redux-actions';
import { createTypeAsyncAction } from 'type-redux';
import * as config from 'react-global-configuration';
import { envs } from 'env';

import MemberApiClient from './clients/member-api-client';

// Redux Action Reducer Samples
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const UPDATE_FETCH_STATUS = 'UPDATE_FETCH_STATUS';

export const updateFetchStatus = createAction<boolean>(UPDATE_FETCH_STATUS);
export const getProfile = createTypeAsyncAction('GET_PROFILE', () => {
  const client = new MemberApiClient(config.get('protocol') + config.get('host'));
  return client.getUserProfile();
});
