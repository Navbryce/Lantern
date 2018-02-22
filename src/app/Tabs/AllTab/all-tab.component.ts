import { Component } from '@angular/core';
import { Post } from '../../Dependencies/post.class'

@Component({
  selector: 'all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})
export class AllTabComponent {
  posts: Array<Post>;

  constructor () {
  }
  ngOnInit() {
    this.posts = this.generateInitialPosts();

  }
  generateInitialPosts (): Array<Post> { // For demo purposes
    var posts = [];
    posts.push(new Post("Title 1", "At the top", 5000, 122));


    return posts;
  }
}
