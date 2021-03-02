import {
  get,
  post,
  del
} from "../utils/request";

// 获取银行详情
export const bankDetailApi = (id) => get(`/crm/api/bank/detail/${id}`)

// 获取poenID
export const login = (data) => post(`/crm/api/user/login`, data)




