import * as subscriberActions from '../actions/subscriber.actions';
import { Subscriber } from '../models/subscriber';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export const EMPTY_SUBSCRIBER: Subscriber = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  nickname: ''
};

const subscriberAdapter: EntityAdapter<Subscriber> = createEntityAdapter<Subscriber>({
  selectId: (element: Subscriber) => element.id
});

export interface State extends EntityState<Subscriber>{
  is_loading: boolean;
  selectedSubscriber: any;
}

export const initialState: State = subscriberAdapter.getInitialState({
  is_loading: false,
  selectedSubscriber: EMPTY_SUBSCRIBER
});

export const { selectAll } = subscriberAdapter.getSelectors();
export const getSelectedSubscriber = (state: State) => state.selectedSubscriber;
export const getScubscribersIsLoading = (state: State) => state.is_loading;

export function reducer(state: State = initialState, action: typeof subscriberActions.Actions.actions): State {
  switch (action.type) {

    case subscriberActions.GetSubscriberListAction.type:
      return {...state,
        is_loading: true,
      };
    case subscriberActions.GetSubscriberListSuccessAction.type:
      return subscriberAdapter.setAll(action.payload, {
        ...state,
        is_loading: false
      });

    case subscriberActions.CreateSubscriberAction.type:
      return {
        ...state,
        is_loading: true
      };

    case subscriberActions.CreateSubscriberSuccessAction.type:
      return subscriberAdapter.addOne(action.payload, {
        ...state,
        is_loading: false
      });

    case subscriberActions.GetSubscriberAction.type:
      return {...state,
        selectedSubscriber: EMPTY_SUBSCRIBER,
        is_loading: true,

      };

      case subscriberActions.GetSubscriberSuccessAction.type:
        return {...state,
          is_loading: false,
          selectedSubscriber: action.payload
        };

    default:
      return state;
  }
}

