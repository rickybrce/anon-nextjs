import { Api } from ".";



export function updateCoins(
  id: any,
  category: any,
  name: any,
  symbol: any,
  coingecko_id: any,
  is_extra: any,
  
): any {
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


export function deleteCoin(
  id: any,
): any {
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
