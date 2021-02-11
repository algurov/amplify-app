import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Reducers from '../../reducers';
import * as SubscriberActions from '../../actions/subscriber.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'src/app/models/subscriber';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})

export class SubscriberComponent implements OnInit {

  form: FormGroup;
  subscriber$: Observable<Subscriber>;
  constructor(private store: Store<Reducers.State>, private router: Router, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
    this.subscriber$ = store.select(Reducers.getSelectedSubscriber);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', []],
      lastName: ['', []],
      nickname: ['', []]
    });
    this.subscriber$.subscribe(v => {
      this.form.setValue({
        email: v.email,
        firstName: v.firstName,
        lastName: v.lastName,
        nickname: v.nickname
      });
    });
    this.store.dispatch(SubscriberActions.GetSubscriberAction(this.activatedRoute.snapshot.params.id));
  }
}
