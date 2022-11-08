// eslint-disable-next-line no-console

export class Greeting {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log(`${this.name} Hello world!`);
  }
}
