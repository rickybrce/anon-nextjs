import { Api } from ".";



export function getUser() {
  const api = new Api();
  return api.request({
    endpoint: "user",
    type: "GET",
    auth: true,
  });
}

export function getBlancedItems() {
  const api = new Api();
  return api.request({
    endpoint: "users/balance_items",
    type: "GET",
    auth: true,
  });
}

export function getBalance() {
  const api = new Api();
  return api.request({
    endpoint: "users/balance",
    type: "GET",
    auth: true,
  });
}

export function getAllCharacters() {
  const api = new Api();
  return api.request({
    endpoint: "users/all_characters",
    type: "GET",
    auth: true,
  });
}

export function getAvailableCharacters() {
  const api = new Api();
  return api.request({
    endpoint: "users/available_characters",
    type: "GET",
    auth: true,
  });
}
