import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Reducers from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  loading = false;
  title = 'amplify-app';

  constructor(private store: Store<Reducers.State>, private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.store.select(Reducers.getSubscriberLoading).subscribe(v => {
      this.loading = v;
      this.cdRef.detectChanges();
    });
  }
}
