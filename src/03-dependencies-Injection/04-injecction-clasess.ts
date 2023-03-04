import { RandonUserAdapter } from "../api/ramdonUser.adapter";
import { RandomUserResponse, Result } from "../interfaces/randonUser-response.interface";

export class User {


  constructor(public readonly id: number, public readonly name: string, private readonly http: RandonUserAdapter) {

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
    const { data } = await this.http.get("https://randomuser.me/api/");
    return data.results;
  }
}
const instanceAdapter = new RandonUserAdapter()
export const user = new User(27, "kakaroto", instanceAdapter);
console.log(user.getUser())