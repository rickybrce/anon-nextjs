import { Api } from ".";

type GetTokenProps = {
  token?: string;
  username?: string;
  password?: string;
};

export async function getToken({
  token = "",
  username = "",
  password = ""
}: GetTokenProps): Promise<any> {
  const api = new Api();

  if (token) {
    return api.request({
      endpoint: "token",
      type: "POST",
      body: {
        token
      },
    });
  }

  return api.request({
    endpoint: "token",
    type: "POST",
    body: {
      username,
      password
    },
  });
}
