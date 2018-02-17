export class Post {
  title: string;
  description: string;
  numberOfUp = 0;
  numberOfDown = 0;
  constructor (titleValue, descriptionValue) {
    this.title = titleValue;
    this.description = descriptionValue;
  }
  voteDown (): void {
    this.numberOfDown--;
  }
  voteUp (): void {
    this.numberOfUp++;
  }

}
