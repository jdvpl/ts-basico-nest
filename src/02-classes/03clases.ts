export class User {


  constructor(public readonly id: number, public readonly name: string) {

  }

}

export const user = new User(2, "jiren")