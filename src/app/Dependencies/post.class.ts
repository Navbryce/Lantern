export class Post {
  title: string;
  id: number;
  description: string;
  votes: any; //Javascript object with "up", "down", and "userVote" properties
  constructor (titleValue, descriptionValue, initialUp, initialDown, initialVote) {
    this.id = this.generateID();
    this.title = titleValue;
    this.description = descriptionValue;
    this.votes = {
      up: initialUp,
      down: initialDown,
      userVote: initialVote
    }
    this.changeUserVote(initialVote);
  }

  changeUserVote (newVote: number): void {
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
  }

  generateID (): number {
    return Math.floor(1000000 * Math.random());
  }


}
