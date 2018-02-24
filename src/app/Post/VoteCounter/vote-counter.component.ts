import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote-counter',
  templateUrl: './vote-counter.component.html',
  styleUrls: ['./vote-counter.component.css']
})
export class VoteCounterComponent {
  @Output() voteSignal = new EventEmitter<number>();
  @Input() votes: any; // up, down, and userVote properties

  ngOnInit() {
  }
  voteDown (): void {
    this.voteSignal.next(-1);
  }
  voteUp (): void {
    this.voteSignal.next(1);
  }


}
