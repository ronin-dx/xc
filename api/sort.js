import {
  request
} from "../utils/request"

export const getSortLists = data => {
  return request('sort', 'get', data)
}