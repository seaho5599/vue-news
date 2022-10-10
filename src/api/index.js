import axios from 'axios';
// http Request 및 response URL
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 전처 API 데이터 호출 함수
function fetchNewsList() {

    return axios.get(`${config.baseUrl}news/1.json`)
}
function fetchAskList() {

    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList() {
  
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchUserInfo(username) {
  
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

export {
  fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo
}