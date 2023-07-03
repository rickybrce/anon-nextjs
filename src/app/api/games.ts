import { Api } from ".";


export function getGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
  });
}

export function createGame({
  name,
  open_date,
  close_date,
  bets_soft_close,
  bets_hard_close,
  enter_amount,
  remove_bet_amount,
  bet_late_amount,
  extra_coins_amount,
  extra_lev_amount,
  reveal_bet_amount,
  category1_name,
  category2_name,
  category3_name,
  category4_name
  
}) {
  const api = new Api();
  return api.request({
    endpoint: "games",
    type: "POST",
    auth: true,
    body: {
      name,
      open_date,
      close_date,
      bets_soft_close,
      bets_hard_close,
      enter_amount,
      remove_bet_amount,
      bet_late_amount,
      extra_coins_amount,
      extra_lev_amount,
      reveal_bet_amount,
      category1_name,
      category2_name,
      category3_name,
      category4_name
    },
  });
}


export function getGame(id: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/"+id,
    type: "GET",
    auth: true
  });
}
