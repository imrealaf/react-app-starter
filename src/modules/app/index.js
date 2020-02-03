import * as actions from './app.actions';
import { appReducer } from './app.reducer';

/**
 *  User state interface
 */
// export interface IAppState {
//   loading: boolean;
//   settings?: any;
//   pages?: any;
//   navigations?: any;
//   settingsLoaded?: boolean;
// }

/**
 *  User actions
 */
export const appActions = actions;

/**
 *  User reducer (state)
 */
export const app = appReducer;
