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
  voteHistory: Array<Post>; // The vote history array in profile is an array of javascript objects with a "post" property and "vote" property
  addInterest: boolean;

  constructor () {
  }
  ngOnInit() {
    this.addInterest = false;
    this.profile.voteHistoryObservable.subscribe((voteHistory) => {
      this.getVoteHistoryPosts(voteHistory);
    });
  }
  addInterestToUser (interest: any) {
    if (this.profile.interests.indexOf(interest) == -1) { // the interest is not already an interest for the user. addCategory checks the blacklist categories (already filtered out)
      this.profile.addInterest(interest);
    }
    this.closeAdd();
  }
  closeAdd () { // Closes the add dialogue
    this.addInterest = false;
  }
  getVoteHistoryPosts (newVoteHistory: any): void { // Required rather than just sending the profile.voteHistory variable to the "vote history" tab because profile.voteHistory is a javascript object where each property is has two properties (an ID and post)
    var posts = [];
    Object.keys(newVoteHistory).forEach(function(key,index) {
      posts.push(newVoteHistory[key].post);
    });
    this.voteHistory = posts;
  }

}
