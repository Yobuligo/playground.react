export class Stopwatch {
  start() {
    console.log("Start stopwatch");
  }

  get time(): string {
    return new Date().toString();
  }
}
