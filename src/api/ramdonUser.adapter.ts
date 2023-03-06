import axios from "axios";

export class RandonUserAdapter implements HttpAdapter {

  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    // peticion get
    const { data } = await this.axios.get<T>(url);
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

// liskov principle
export class RandonUserFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    // peticion get
    const resp = await fetch(url);
    const data: T = await resp.json()
    return data;
  }
}

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}