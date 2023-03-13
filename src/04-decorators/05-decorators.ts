class NewUser {
  constructor(public readonly id: number, public name: string) { }
  scream() {
    console.log(`No quiero !!!`)
  }
  speak() {
    console.log(`NAHHHHH`)
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewUser;
  }
}

@MyDecorator()
export class Randomuser {
  constructor(public readonly id: number, public name: string) { }
  scream() {
    console.log(`${this.name.toUpperCase()}`)
  }
  speak() {
    console.log(`${this.name.toLowerCase()} `)
  }
}

export const user = new Randomuser(3, "Jiren");
user.scream()