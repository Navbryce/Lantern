import { Component, Input } from '@angular/core';
import { Post } from '../../Dependencies/post.class'
import { Profile } from '../../Dependencies/profile.class'

@Component({
  selector: 'all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})
export class AllTabComponent { // Probably want to make this extend general tab
  @Input() profile: Profile;
  posts: Array<Post>;
  makingPost: false;

  constructor () {
  }
  ngOnInit() {
    this.posts = this.generateInitialPosts();
  }

  closeMakePost(): void { // Closes the make post window
    this.makingPost = false;
  }

  generateInitialPosts (): Array<Post> { // For demo purposes
    var posts = [];
    posts.push(new Post("Title 1", [], "At the top", 5000, 122, 0));
    return posts;
  }
}
