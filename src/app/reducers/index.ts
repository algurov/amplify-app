import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';
import * as SubscriberReducer from './subscriber.store';

export interface State {
  subscriber: SubscriberReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  subscriber: SubscriberReducer.reducer
};

export const getSubscriberState = (state: State) => state.subscriber;
export const getSubscriberList = createSelector(getSubscriberState, SubscriberReducer.selectAll);
export const getSelectedSubscriber = createSelector(getSubscriberState, SubscriberReducer.getSelectedSubscriber);
export const getSubscriberLoading = createSelector(getSubscriberState, SubscriberReducer.getScubscribersIsLoading);

