import { HttpAdapter, RandonUserFetchAdapter } from "../api/ramdonUser.adapter";
import { RandomUserResponse, Result } from "../interfaces/randonUser-response.interface";

export class User {
  constructor(public readonly id: number, public readonly name: string, private readonly http: HttpAdapter) {

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
    const data = await this.http.get<RandomUserResponse>("https://randomuser.me/api/");
    console.log(data.results[0].location.timezone.description)
    return data.results;
  }
}
const instanceFetchAdapter = new RandonUserFetchAdapter();
export const user = new User(27, "kakaroto", instanceFetchAdapter);
user.getUser()