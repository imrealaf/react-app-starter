import types from '../action-types';

/**
 *  Send request
 *  @type action creator
 */
export const sentRequest = () => {
  return {
    type: types.SENT_REQUEST
  };
};

/**
 *  Receive response
 *  @type action creator
 */
export const receivedResponse = () => {
  return {
    type: types.RECEIVED_RESPONSE
  };
};
