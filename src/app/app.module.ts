import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './Post/post.component';
import { VoteCounterComponent } from './Post/VoteCounter/vote-counter.component';
import { NavbarComponent } from './Navbar/navbar.component';
import {RecommendedTabComponent} from './Tabs/RecommendedTab/recommended-tab.component'
import {AllTabComponent} from './Tabs/AllTab/all-tab.component'




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    VoteCounterComponent,
    NavbarComponent,
    RecommendedTabComponent,
    AllTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
