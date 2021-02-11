import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Reducers from '../../reducers';
import * as SubscriberActions from '../../actions/subscriber.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubscriberCreateDialogComponent } from '../subscriber-create-dialog/subscriber-create-dialog.component';
import { Subscriber } from 'src/app/models/subscriber';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.scss']
})

export class SubscriberListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName'];
  subscribers$: Observable<Subscriber[]>;
  constructor(private store: Store<Reducers.State>, private router: Router, private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.subscribers$ = store.select(Reducers.getSubscriberList);
  }

  ngOnInit(): void {
    this.store.dispatch(SubscriberActions.GetSubscriberListAction());
  }

  openSubscriber(item: any): void {
    this.router.navigate([item.id], { relativeTo: this.activatedRoute });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dlg = this.dialog.open(SubscriberCreateDialogComponent, dialogConfig);
    dlg.afterClosed().subscribe(v => {
      if (v) {
        this.store.dispatch(SubscriberActions.CreateSubscriberAction(v));
      }
    }
    );
}
}
