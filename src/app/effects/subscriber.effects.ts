import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofType, toPayload } from 'ts-action-operators';
import * as SubscriberAction from '../actions/subscriber.actions';
import { SubscriberService } from '../services/subscriber.service';


@Injectable()
export class SubscriberEffects {

  getSubscriberList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubscriberAction.GetSubscriberListAction),
      switchMap(() =>
        this.subscriberService.getSubscribers().pipe(
          map((subscribers: any) => SubscriberAction.GetSubscriberListSuccessAction(subscribers.data.Items),
          catchError(err => of(console.log(err)))
        ))));
      });

  getSubscriber$ = createEffect(() => {
   return this.actions$.pipe(
      ofType(SubscriberAction.GetSubscriberAction),
      toPayload(),
      switchMap(payload => this.subscriberService.getSubscriberById(payload).pipe(
        map(subscriber => SubscriberAction.GetSubscriberSuccessAction(subscriber.data.Items[0]),
        catchError(err => of(console.log(err))))
      )));
  });

  createSubscriber$ = createEffect(() => {
    return this.actions$.pipe(
       ofType(SubscriberAction.CreateSubscriberAction),
       toPayload(),
       switchMap(payload => this.subscriberService.createSubscriber(payload).pipe(
         map(subscriber => SubscriberAction.CreateSubscriberSuccessAction(subscriber),
         catchError(err => of(console.log(err))))
       )));
   });

  constructor(private actions$: Actions,
              private subscriberService: SubscriberService) {
  }
}
