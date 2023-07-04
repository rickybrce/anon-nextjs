import { Api } from ".";

export function getBetsFromUserGame(user_game_id: any): any {
  const api = new Api();
  return api.request({
    endpoint: "bets/"+user_game_id,
    type: "GET",
    auth: true
  });
}

export function getRevealedBetsFromUserGame(user_game_id: any): any {
  const api = new Api();
  return api.request({
    endpoint: "bets/revealed_bets/"+user_game_id,
    type: "GET",
    auth: true
  });
}

export function createBet({
  user_game_id,
  coin_id,
  is_payed,
  submition_date,
  category_id,
  leverage,
  position_type,
  amount,
  coin_price
  
}) {
  const api = new Api();
  return api.request({
    endpoint: "bets/?user_game_id="+user_game_id+"&coin_id="+coin_id+"&is_payed="+is_payed,
    type: "POST",
    auth: true,
    body: {
      submition_date,
      category_id,
      leverage,
      position_type,
      amount,
      coin_price
    },
  });
}


export function deleteBet({
  id,
  is_payed
}) {
  const api = new Api();
  return api.request({
    endpoint: "bets/"+id+"?is_payed="+is_payed,
    type: "DELETE",
    auth: true,
    body: {
      id
    },
  });
}
