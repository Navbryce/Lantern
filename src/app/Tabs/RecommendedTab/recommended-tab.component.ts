import { Component, Input } from '@angular/core';
import { Post } from '../../Dependencies/post.class'
import { Profile } from '../../Dependencies/profile.class'

@Component({
  selector: 'rec-tab',
  templateUrl: './recommended-tab.component.html',
  styleUrls: ['./recommended-tab.component.css']
})
export class RecommendedTabComponent { // Probably want to make this extend general tab
  @Input() profile: Profile;
  posts: Array<Post>;

  constructor () {
  }
  ngOnInit() {
    this.posts = this.generateInitialPosts();

  }
  generateInitialPosts (): Array<Post> { // For demo purposes
    var posts = [];
    posts.push(new Post("Title 1", [], "Scharnhorst was a German capital ship, alternatively described as a battleship and battlecruiser, of Nazi Germany's Kriegsmarine. She was the lead ship of her class, which included one other ship, Gneisenau. The ship was built at the Kriegsmarinewerft dockyard in Wilhelmshaven; she was laid down on 15 June 1935 and launched a year and four months later on 3 October 1936. Completed in January 1939, the ship was armed with a main battery of nine 28 cm (11 in) C/34 guns in three triple turrets. Plans to replace these weapons with six 38 cm (15 in) SK C/34 guns in twin turrets were never carried out.", 5, 1, 0));
    posts.push(new Post("Title 2", [], "Description", 1, 4, 0));
    posts.push(new Post("Title 3", [], "Description", 100, 1, 0));
    posts.push(new Post("Title 4", [], "Description", 500, 30, 0));

    return posts;
  }
}
