import { Api } from ".";


export function getGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
  });
}

export function createGame(
  name: any,
  open_date: any,
  close_date: any,
  bets_soft_close: any,
  bets_hard_close: any,
  enter_amount: any,
  remove_bet_amount: any,
  bet_late_amount: any,
  extra_coins_amount: any,
  extra_lev_amount: any,
  reveal_bet_amount : any,    
  category1_name: any,
  category2_name: any,
  category3_name: any,
  category4_name: any,
  
): any {
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

export function getActiveGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/active?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
  });
}
export function getPastGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/past?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
  });
}

export function getUserActiveGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/user_active?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
  });
}
export function getUserPastGames(skip: any, limit: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/user_past?skip="+skip+"&limit="+limit,
    type: "GET",
    auth: true
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

export function updateGame(
  id: any,
  name: any,
  open_date: any,
  close_date: any,
  bets_soft_close: any,
  bets_hard_close: any,
  enter_amount: any,
  remove_bet_amount: any,
  bet_late_amount: any,
  extra_coins_amount: any,
  extra_lev_amount: any,
  reveal_bet_amount: any,
  category1_name: any,
  category2_name: any,
  category3_name: any,
  category4_name: any,
): any {
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

export function deleteGame(
  id: any,
): any {
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

export function createCoin(
  game_id: any,
): any {
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

export function enterGame(
  game_id: any,
  character_id: any,
): any {
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

export function buyExtraCoins(
  game_id: any,
  user_game_id: any,
): any {
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

export function buyExtraLeverage(
  leverage: any,
  user_game_id: any,
): any {
  const api = new Api();
  return api.request({
    endpoint: "games/buy_extra_leverage/"+user_game_id +"/"+leverage,
    type: "POST",
    auth: true,
    body: {
      leverage,
      user_game_id
    },
  });
}

export function revealBet(
  user_game_id: any,
  user_id: any,
): any {
  const api = new Api();
  return api.request({
    endpoint: "games/buy_extra_leverage/"+user_game_id +"/"+user_id,
    type: "POST",
    auth: true,
    body: {
      user_id,
      user_game_id
    },
  });
}

export function getScoreboard(game_id: any): any {
  const api = new Api();
  return api.request({
    endpoint: "games/scoreboard/"+game_id,
    type: "GET",
    auth: true
  });
}