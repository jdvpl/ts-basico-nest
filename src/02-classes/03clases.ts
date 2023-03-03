export class User {


  constructor(public readonly id: number, public readonly name: string) {

  }
  get imageUrl(): string {
    return `https://randomuser.me/api/portraits/men/${this.id}.jpg`
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!!`)
  }
  speak() {
    console.log(this.name, this.name)
  }
}

export const user = new User(91, "jiren")