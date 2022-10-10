import { createStore } from 'vuex';
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList
} from '../api/index'

export default createStore({
  state: {  
    news:[],
    ask:[],
    jobs:[],
    user:{},
    item:[]
},
actions: {
  fetchNews({commit}){
    fetchNewsList()
    .then(res =>{
      console.log(res.data)
      commit('NEWS_LISt', res.data)
    })
    .catch(err=> console.log(err))
  },
  fetchAsk({commit}){
    fetchAskList()
    .then(res =>{
      console.log(res.data)
      commit('ASK_LIST',res.data)
    })
    .catch(err=> console.log(err))
  },
  fetchJobs({commit}){
    fetchJobsList()
    .then(res =>{
      
      console.log(res.data)
      commit('JOBS_LIST', res.datas)
    })
    .catch(err=> console.log(err))
  },
},
mutations: {
  NEWS_LISt(state, payload){
    state.news = payload
  },
  ASK_LISt(state, payload){
    state.ask = payload
  },
  JOBS_LIST(state, payload){
    state.jobs = payload
  }
},
getters: {
   getNewsList(state){
    return state.news
   },
   getAskList(state){
    return state.ask
   },
   getJobsList(state){
    return state.jobs
   },
}
});