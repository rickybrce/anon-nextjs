import { Api } from ".";



export function updateCoins({
  id,
  category,
  name,
  symbol,
  coingecko_id,
  is_extra
  
}) {
  const api = new Api();
  return api.request({
    endpoint: "coins/"+id,
    type: "PUT",
    auth: true,
    body: {
      category,
      name,
      symbol,
      coingecko_id,
      is_extra
    },
  });
}


export function deleteCoin({
  id
}) {
  const api = new Api();
  return api.request({
    endpoint: "coins/"+id,
    type: "DELETE",
    auth: true,
    body: {
      id
    },
  });
}
