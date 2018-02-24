import { Post } from './post.class'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
export class Profile {

  userName: string;
  email: string;
  interests: Array<string>;

  voteHistory: any; // Properties should be the postID; Javascript object, not array because it would be filled with holes (not really a problmem but massive when printing in ocnosle)
  voteHistorySource = new BehaviorSubject<any>([]);
  voteHistoryObservable = this.voteHistorySource.asObservable(); // Lets other classes know when the vote history changed

  constructor (userName, email, interests, voteHistory) {
    this.userName = userName;
    this.email = email;
    this.interests = interests;
    this.voteHistory = voteHistory;
    this.voteHistorySource.next(voteHistory)
  }

  voteOnPost(post, vote) {
    if (this.voteHistory[post.id] != null) { // It is already in the votehistory
      var shouldDelete = this.voteHistory[post.id].changeVote(vote);
      if (shouldDelete == true) {
        delete this.voteHistory[post.id]; // Removes from the vote history because the vote is 0
      }
      this.voteHistorySource.next(this.voteHistory); // Lets other classes know when the vote history changed
    } else if (vote != 0) { // if the vote is not in the vote history and the vote is not zero
      var voteHistoryElement = new VoteHistoryElement(post, vote);
      this.voteHistory[post.id] = voteHistoryElement;
      this.voteHistorySource.next(this.voteHistory); // Lets other classes know when the vote history changed
    }
  }
}

export class VoteHistoryElement {
  post: Post;
  vote: number;
  constructor (post, vote) {
    this.post = post;
    this.vote = vote;
  }
  changeVote (newVote: number): boolean { // Will return true if the vote was switched to 0. the element should be deleted if so
    this.vote = newVote;
    return newVote == 0
  }
}
