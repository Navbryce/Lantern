export class Post {
  categories: Array<string>;
  description: string;
  ID: number;
  title: string;
  votes: any; //Javascript object with "up", "down", and "userVote" properties
  recommendFactor: number; // A number between 0 and 1 used to quantify how much Lantern recommends post.
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
    this.recommendFactor = this.getRecommendFactor(0, 1); // Temporary. See method description. Will be added as a parameter for the constructor as well
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

  getRecommendFactor ( min: number, max: number): number { // currently done randomly because their until  ML/Graph Theory algorithims are implemented
    var value = ((max-min) * Math.random()) + min;
    value = Math.round(value * 100)/100; // Math.Round rounds to the nearest integer
    var valueString = "" + value;  // Sometimes Math.Round does not round to two digits because of the /100. Converting to string automatically rounds
    valueString = valueString.substr(0, 4); // Because of commas
    console.log(valueString)
    value = parseFloat(valueString);

    return value;
  }

  getVotesTotal (): number {
    return this.votes.up - this.votes.down;
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
