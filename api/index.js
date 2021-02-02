import {
  request
} from "../utils/request"

export const getShopLists = data => {
  return request('shop', 'get', data)
}