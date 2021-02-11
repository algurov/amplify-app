import { action, payload, union } from 'ts-action';

export const GetSubscriberListAction = action('GET_SUBSCRIBERS_LIST');
export const GetSubscriberListSuccessAction = action('GET_SUBSCRIBERS_LIST_SUCCESS', payload<any>());
export const GetSubscriberAction = action('GET_SUBSCRIBER', payload<string>());
export const GetSubscriberSuccessAction = action('GET_SUBSCRIBER_SUCCESS', payload<any>());
export const CreateSubscriberAction = action('CREATE_SUBSCRIBER', payload<any>());
export const CreateSubscriberSuccessAction = action('CREATE_SUBSCRIBER_SUCCESS', payload<any>());

export const Actions = union(
  GetSubscriberAction, GetSubscriberListAction, GetSubscriberListSuccessAction, GetSubscriberSuccessAction,
  CreateSubscriberAction, CreateSubscriberSuccessAction
);
