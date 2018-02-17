import { Component, Input } from '@angular/core';
import { Post } from '../Dependencies/app.post.class'

@Component({
  selector: 'post-element',
  templateUrl: './app.post.html',
  styleUrls: ['./app.post.css']
})
export class PostComponent {
  @Input() post: Post;

}
