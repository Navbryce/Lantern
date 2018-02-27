import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './Post/post.component';
import { VoteCounterComponent } from './Post/VoteCounter/vote-counter.component';
import { NavbarComponent } from './Navbar/navbar.component';
import {RecommendedTabComponent} from './Tabs/RecommendedTab/recommended-tab.component'
import {AllTabComponent} from './Tabs/AllTab/all-tab.component'
import {ProfileTabComponent} from './Tabs/ProfileTab/profile-tab.component'
import {GeneralTabComponent} from './Tabs/general-tab.component'
import {AddCategoryComponent} from './UserInput/CategoryAdd/add-category.component'



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    VoteCounterComponent,
    NavbarComponent,
    GeneralTabComponent,
    RecommendedTabComponent,
    AllTabComponent,
    ProfileTabComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
