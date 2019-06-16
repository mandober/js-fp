export class App {
  seconds = 0;

  constructor() {
    setInterval(() => this.seconds++, 1000);
  }
}