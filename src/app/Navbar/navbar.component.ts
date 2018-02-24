import { Component, Input } from '@angular/core';
import { Post } from '../Dependencies/post.class'
import { Profile } from '../Dependencies/profile.class'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() selectedTabObject: any; // an object so that the main component and this component have the same instance
  @Input() profile: Profile;
  selectedTab: number; // the number version of trhe selectedTabObject
  ngOnInit () {
    this.selectedTab = this.selectedTabObject.tabNumber; // stores the intial number in the number version of the selectedTabObject
  }

  selectTab (newTab) {
    this.selectedTabObject.tabNumber = newTab;
    this.selectedTab = newTab;
  }
}
