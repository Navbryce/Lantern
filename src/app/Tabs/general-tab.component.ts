import { Component, Input } from '@angular/core';
import { Post } from '../Dependencies/post.class'
import { Profile } from '../Dependencies/profile.class'

@Component({
  selector: 'gen-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})
export class GeneralTabComponent { // Probably want to make this extend general tab
  @Input() profile: Profile;
  @Input() posts: Array<Post>;

  constructor () {
  }
  ngOnInit() {
  }
}
