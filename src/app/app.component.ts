import { Component } from '@angular/core';
import { Post } from './Dependencies/app.post.class'

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
    posts.push(new Post("Title 1", "Description"));
    posts.push(new Post("Title 2", "Description"));
    posts.push(new Post("Title 3", "Description"));
    posts.push(new Post("Title 4", "Description"));

    return posts;
  }
}
