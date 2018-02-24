export class Post {
  title: string;
  id: number;
  description: string;
  numberOfUp = 0;
  numberOfDown = 0;
  constructor (titleValue, descriptionValue, initialUp, initialDown) {
    this.id = this.generateID();
    this.title = titleValue;
    this.description = descriptionValue;
    this.numberOfUp = initialUp;
    this.numberOfDown = initialDown;
  }
  generateID (): number {
    return Math.floor(1000000 * Math.random());
  }


}
