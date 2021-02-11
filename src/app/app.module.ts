import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { SubscriberService } from './services/subscriber.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { EffectsModule } from '@ngrx/effects';
import { SubscriberEffects } from './effects';
import { SubscriberCreateDialogComponent } from './components/subscriber-create-dialog/subscriber-create-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberListComponent,
    SubscriberComponent,
    SubscriberCreateDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      SubscriberEffects
    ]),
  ],
  providers: [SubscriberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
