import { AnyAction } from 'redux';

import types from '../action-types';
import { IAppState } from '.';

/**
 *  Initial state
 */
// export const initialState: IAppState = {
//   loading: true,
//   settings: null,
//   pages: null,
//   navigations: null,
//   settingsLoaded: false
// };

export const appReducer = (state = initialState, action) => {
  /**
   *  Destructure data from payload
   */
  const { type, payload } = action;

  switch (type) {
    /**
     *  Settings success
     */
    case types.GET_SETTINGS_SUCCESS:
      return { ...state, settings: payload };

    /**
     *  Settings laoded
     */
    case types.SETTINGS_LOADED:
      return { ...state, settingsLoaded: true };

    /**
     *  Send request
     */
    case types.GET_DATA_SUCCESS:
      return { ...state, ...payload };

    /**
     *  Send request
     */
    case types.SENT_REQUEST:
      return { ...state, loading: true };

    /**
     *  Loaded
     */
    case types.RECEIVED_RESPONSE:
      return { ...state, loading: false };

    /**
     *  Default
     */
    default:
      return state;
  }
};
