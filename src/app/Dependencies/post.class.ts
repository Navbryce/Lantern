export class Post {
  categories: Array<string>;
  description: string;
  ID: number;
  title: string;
  votes: any; //Javascript object with "up", "down", and "userVote" properties
  constructor (titleValue: string, categories: Array<string>, descriptionValue: string, initialUp: number, initialDown: number, initialVote: number) {
    this.ID = this.generateID();
    this.title = titleValue;
    this.categories = categories;
    this.description = descriptionValue;
    this.votes = {
      up: initialUp,
      down: initialDown,
      userVote: initialVote
    }
    this.changeUserVote(initialVote);
  }
  addCategory (category: string): void {
    this.categories.push(category);
  }
  changeUserVote (newVote: number): number {  // Returns the "effective" user vote. 0 if they unvoted or NEVER VOTED
    if (this.votes.userVote == -1) { // this.votes.userVote is current vote
      this.votes.down -= 1;
    }else if (this.votes.userVote == 1) {
      this.votes.up -= 1;
    }
    if (this.votes.userVote != newVote) { // If you are switching your vote to the same vote, then you are toggling your vote OFF aka setting status to 0
      if (newVote == 1) {
        this.votes.up += 1;
      } else if (newVote == -1) {
        this.votes.down += 1;
      }
      this.votes.userVote = newVote;
    } else { // If you are switching your vote to the same vote, then you are toggling your vote OFF aka setting status to 0
      this.votes.userVote = 0;
    }
    return this.votes.userVote; // Returns the "effective" user vote. 0 if they unvoted or NEVER VOTED
  }

  generateID (): number {
    return Math.floor(1000000 * Math.random());
  }
}
export class Comment { // Comments can be voted on
  comment: string;
  userID: number;
  votes: any;

  constructor(userID: number, comment: string, intialUp, intialDown, initialVote) {
    this.votes.up = intialUp;
    this.votes.down = intialDown;
    this.votes.intialVote = initialVote;
  }
}
