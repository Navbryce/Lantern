export class Profile {
  userName: string;
  interests: Array<string>
  constructor (userName, interests) {
    this.userName = userName;
    this.interests = interests;
  }
}
