import { createAction } from 'redux-actions';
import { createTypeAsyncAction } from 'type-redux';
import ProfileService from '../services/profile-service';

// Redux Action Reducer Samples
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const UPDATE_FETCH_STATUS = 'UPDATE_FETCH_STATUS';

export const updateFetchStatus = createAction<boolean>(UPDATE_FETCH_STATUS);
export const loadProfile = createTypeAsyncAction(LOAD_PROFILE, ProfileService.getProfile);
