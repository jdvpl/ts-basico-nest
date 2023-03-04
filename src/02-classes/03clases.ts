import axios from "axios"
import { RandomUserResponse, Result } from "../interfaces/randonUser-response.interface";

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

  async getUser(): Promise<Result[]> {
    const { data } = await axios.get<RandomUserResponse>("https://randomuser.me/api/");
    return data.results;
  }
}

export const user = new User(91, "jiren")
const lol = new User(27, "kakaroto");
console.log(lol.getUser())