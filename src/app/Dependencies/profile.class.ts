import { Post } from './post.class'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
export class Profile {

  email: string;
  ID: number;
  interests: Array<string>;
  userName: string;

  voteHistory: any; // Properties should be the postID; Javascript object, not array because it would be filled with holes (not really a problmem but massive when printing in ocnosle)
  voteHistorySource = new BehaviorSubject<any>([]);
  voteHistoryObservable = this.voteHistorySource.asObservable(); // Lets other classes know when the vote history changed

  constructor (userName, email, interests, voteHistory) {
    this.userName = userName;
    this.email = email;
    this.interests = interests.sort();
    this.ID = this.generateID();
    this.voteHistory = voteHistory;
    this.voteHistorySource.next(voteHistory)
  }

  addInterest (interest: string) {
    this.interests.push(interest);
    this.interests = this.interests.sort(); // should be done with binary add. not enough time to implement
  }

  voteOnPost(post, vote) {
    if (this.voteHistory[post.ID] != null) { // It is already in the votehistory
      var shouldDelete = this.voteHistory[post.ID].changeVote(vote);
      if (shouldDelete) {
        delete this.voteHistory[post.ID]; // Removes from the vote history because the vote is 0
      }
      this.voteHistorySource.next(this.voteHistory); // Lets other classes know when the vote history changed
    } else if (vote != 0) { // if the vote is not in the vote history and the vote is not zero
      var voteHistoryElement = new VoteHistoryElement(post, vote);
      this.voteHistory[post.ID] = voteHistoryElement;
      this.voteHistorySource.next(this.voteHistory); // Lets other classes know when the vote history changed
    }
    console.log(this.voteHistory);

  }
  generateID (): number {
    return Math.floor(1000000 * Math.random());
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
