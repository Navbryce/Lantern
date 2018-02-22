import { Component } from '@angular/core';
import { Post } from './Dependencies/post.class'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab: any; // passed as a parameter to the navbar

  constructor () {
  }
  ngOnInit() {
    this.selectedTab = {'tabNumber': 0}; // Set the initial tab when the users loads in. An object so that the main component and this component have the same instance
  }

}
