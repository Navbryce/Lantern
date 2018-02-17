import { Component } from '@angular/core';
import { Post } from './Dependencies/post.class'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Array<Post>;

  constructor () {
  }
  ngOnInit() {
    this.posts = this.generateInitialPosts();

  }
  generateInitialPosts (): Array<Post> { // For demo purposes
    var posts = [];
    posts.push(new Post("Title 1", "Description", 5, 1));
    posts.push(new Post("Title 2", "Description", 1, 4));
    posts.push(new Post("Title 3", "Description", 100, 1));
    posts.push(new Post("Title 4", "Description", 500, 30));

    return posts;
  }
}
