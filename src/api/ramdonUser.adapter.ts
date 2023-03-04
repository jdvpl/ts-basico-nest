import axios from "axios";

export class RandonUserAdapter {

  private readonly axios = axios;

  async get(url: string) {
    // peticion get
    const { data } = await this.axios.get(url);
    return data;
  }
  async post(url: string, data: any) {
    // peticion get
    return;
  }
  async patch(url: string, data: any) {
    // peticion get
    return;
  }
  async put(url: string, data: any) {
    // peticion get
    return;
  }
  async delete(url: string, data: any) {
    // peticion get
    return;
  }

}