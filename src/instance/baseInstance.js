import axios from 'axios';

export const USER_API = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr"
})

export const MBTI_API = axios.create({
  baseURL: "https://olive-fascinated-hyssop.glitch.me"
})