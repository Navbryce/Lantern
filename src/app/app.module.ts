import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './Post/post.component';
import { VoteCounterComponent } from './Post/VoteCounter/vote-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    VoteCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
