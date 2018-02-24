import { Component, Input } from '@angular/core';
import { Post } from '../../Dependencies/post.class' // For post history
import { Profile } from '../../Dependencies/profile.class'

@Component({
  selector: 'profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {
  @Input() profile: Profile;

  constructor () {
  }
  ngOnInit() {
  }

}
