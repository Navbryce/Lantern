export class Post {
  title: string;
  description: string;
  numberOfUp = 0;
  numberOfDown = 0;
  constructor (titleValue, descriptionValue, initialUp, initialDown) {
    this.title = titleValue;
    this.description = descriptionValue;
    this.numberOfUp = initialUp;
    this.numberOfDown = initialDown;
  }


}
