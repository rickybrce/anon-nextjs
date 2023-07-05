import { Preferences } from "@capacitor/preferences";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
//const API_URL = "http://ungames-laravel.localhost:8016/api";

export class ApiException {
  name: string;
  message: string;
  response: any;

  constructor(message: string, response: any) {
    this.name = "ApiException";
    this.message = message;
    this.response = response;
  }
}

type ApiRequest = {
  type?: string;
  endpoint: string;
  auth?: boolean;
  body?: any;
  demo?: boolean;
};

export class Api {
  async request(params: ApiRequest): Promise<any> {
    // Fetch it from storage, if route requires auth, if no token present, fail

    const headers = new Headers();
    headers.append("Content-type", "applications/json");
    headers.append("Accept", "application/json");

    if (params.auth) {
      const token = await Preferences.get({ key: "token" });
      headers.append("Authorization", `Bearer ${token.value}`);
    }

    return fetch(`${API_URL}/${params.endpoint}`, {
      method: params.type || "GET",
      body: params.body ? JSON.stringify(params.body) : null,
      mode: "cors",
      redirect: "follow",
      headers,
    }).then(async (response: any) => {
     // console.log(response)
      if (response.status === 422) {
        console.log("Wrong login token")
        //await Preferences.remove({ key: "token" });
        //await Preferences.clear();
      }

      if (response.status === 401) {
        await Preferences.remove({ key: "token" });
        await Preferences.remove({ key: "user" });

        await Preferences.clear();
        //window.location.replace("/");
        // TODO: Is this ok to do?
        // window.location.reload();
      }

      if (!response.status.toString().startsWith("2")) {
        throw new ApiException("error", await response.json());
      }

      if (response.status === 204) {
        return;
      }

      return response.text().then((text: string) => {
        return text ? JSON.parse(text) : {};
      });
    });
  }
}
