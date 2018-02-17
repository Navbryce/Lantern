import { Component, Input } from '@angular/core';
import { Post } from '../Dependencies/post.class'

@Component({
  selector: 'post-element',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post;
  expanded: boolean;
  expandText: string; // Opposite of text of status

  ngOnInit () {
    this.expanded = false;
    this.expandText = this.getTextOfStatus(!this.expanded);
  }

  getTextOfStatus (status): string {
    return status ? "Expanded":"Minimize"
  }

  toggleExpand (): boolean { // toggles expanded status and returns new status
    this.expanded = !this.expanded;
    this.expandText = this.getTextOfStatus(!this.expanded);
    return this.expanded;
  }

}