import types from '../action-types';

/**
 *  Initial state
 */
const initialState = {
  pending: true
};

export const appReducer = (state = initialState, action) => {
  /**
   *  Destructured props
   */
  const { type, payload } = action;
  switch (type) {
    /**
     *  Sent request
     */
    case types.SENT_REQUEST:
      return { ...state, pending: true };

    /**
     *  Recieved response
     */
    case types.RECEIVED_RESPONSE:
      return { ...state, pending: false };

    /**
     *  Default state
     */
    default:
      return state;
  }
};
