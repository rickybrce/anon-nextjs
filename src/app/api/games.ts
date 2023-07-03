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

export function updateGame({
  id,
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
    endpoint: "games/"+id,
    type: "PUT",
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

export function deleteGame({
  id
}) {
  const api = new Api();
  return api.request({
    endpoint: "games/"+id,
    type: "DELETE",
    auth: true,
    body: {
      id
    },
  });
}

export function createCoin({
  game_id
}) {
  const api = new Api();
  return api.request({
    endpoint: "games/"+game_id+"/coin",
    type: "POST",
    auth: true,
    body: {
      game_id
    },
  });
}

export function enterGame({
  game_id,
  character_id
}) {
  const api = new Api();
  return api.request({
    endpoint: "games/enter/"+game_id+"/"+character_id,
    type: "POST",
    auth: true,
    body: {
      game_id
    },
  });
}

export function buyExtraCoins({
  game_id,
  user_game_id
}) {
  const api = new Api();
  return api.request({
    endpoint: "games/buy_extra_coins/"+game_id+"?user_game_id="+user_game_id    ,
    type: "POST",
    auth: true,
    body: {
      game_id
    },
  });
}