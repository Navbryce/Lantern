import { Component, Input } from '@angular/core';

@Component({
  selector: 'vote-counter',
  templateUrl: './vote-counter.component.html',
  styleUrls: ['./vote-counter.component.css']
})
export class VoteCounterComponent {
  @Input("upvotes") upVotes: number;
  @Input("downvotes") downVotes: number;
  userVote = 0;

  switchVote (newVote): void { // -1 - downvote, 0 - no vote, +1 - up vote
      if (this.userVote == -1) {
        this.downVotes -= 1;
      }else if (this.userVote == 1) {
        this.upVotes -= 1;
      }
      if (this.userVote != newVote) { // If you are switching your vote to the same vote, then you are toggling your vote OFF aka setting status to 0
        if (newVote == 1) {
          this.upVotes += 1;
        } else if (newVote == -1) {
          this.downVotes += 1;
        }
        this.userVote = newVote;
      } else { // If you are switching your vote to the same vote, then you are toggling your vote OFF aka setting status to 0
        this.userVote = 0;
      }
  }

  voteDown (): void {
    this.switchVote(-1);
  }
  voteUp (): void {
    this.switchVote(1);
  }


}
