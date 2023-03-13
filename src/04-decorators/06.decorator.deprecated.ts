import { Deprecated } from "../functions/deprecated.decorator";

export class Randomuser {
  constructor(public readonly id: number, public name: string) { }
  scream() {
    console.log(`${this.name.toUpperCase()}`)
  }
  @Deprecated("most use speak2 method insted")
  speak() {
    console.log(`${this.name.toLowerCase()} `)
  }
  speak2() {
    console.log(`${this.name.toLowerCase()} !!!!! `)
  }
}

export const user = new Randomuser(3, "Jiren");
user.speak()