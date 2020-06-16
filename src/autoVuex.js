import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  con: 1,
  docWidth: document.documentElement.clientWidth,
  docScrollTop: 0,
  subArtComment: false,
  subLeaveSay: false,
  nowAllArt: 0,
  reGuideLocal: false,
  reLocal: false,
  mob: false,
  isArt: true,
  nowClassify: {
    label: 'null',
    id: 0,
    count: 0
  }
}
const mutations = {
  Add (state) {
    state.con++
  },
  setterScrollTop (state,payload) {
    state.docScrollTop = payload.scrolltop;
  },
  setterWidth (state,payload) {
    state.docWidth = payload.width;
  },
  setterSubArtCom (state,payload) {
    state.subArtComment = payload.subTF;
  },
  setterSubLeaveSay (state,payload) {
    state.subLeaveSay = payload.subly;
  },
  setterReGuideLocal (state,payload) {
    state.reGuideLocal = payload.reguidelocal;
  },
  setterReLocal (state,payload) {
    state.reLocal = payload.relocal;
  },
  setterMob (state,payload) {
    state.mob = payload.mob;
  },
  setterNowAllArt (state,payload) {
    state.nowAllArt = payload.account;
  },
  setterIsArt(state,payload) {
    state.isArt = payload.isArt;
  },
  setterNowClassify (state,payload) {
    state.nowClassify.label = payload.label;
    state.nowClassify.id = payload.id;
    state.nowClassify.count = payload.count;
  }
}

const getters = {
  checkEmail: (state) => (email) => {
    var regx = /^[a-zA-Z0-9_@.]+$/;
    var checkMsg = 1;
    var emailCon = email;
    if(emailCon === ''){
      checkMsg = 1;
    }
    else if(regx.test(emailCon) === false){
      checkMsg = 2;
    }
    else{
      checkMsg = 1;
    }
    return checkMsg;
  },
  checkName: (state) => (name) => {
    var checkMsg = 1;
    var name = name;
    if(/\s/.test(name) === true || name === ''){
      checkMsg = 0;
    }
    else {
      checkMsg = 1;
    }
    return checkMsg;
  },
  checkContent: (state) => (content) => {
    var checkMsg = 1;
    var content = content.replace(/\s/g,'');
    if(content.length == 0){
      checkMsg = 0;
    }
    else {
      checkMsg = 1;
    }
    return checkMsg;
  },
  getNowData() {
    var d = new Date();
    var month = (d.getMonth()+1).toString();
    var day = d.getDate().toString();
    var hour = d.getHours().toString();
    var minutes = d.getMinutes().toString();
    month = month.length === 1 ? ('0' + month) : month;
    day = day.length === 1 ? ('0' + day) : day;
    hour = hour.length === 1 ? ('0' + hour) : hour;
    minutes = minutes.length === 1 ? ('0' + minutes) : minutes;
    var timeYMD = d.getFullYear() + '-' + month + '-' + day;
    var timeHM = hour + ':' + minutes;
    return timeYMD + ' ' + timeHM;
  },
  getNowPathId: (state) => (path) => {
    var e,n;
    e = path;
    switch(e) {
      case '/bloghome': n = 1;break;
      case '/blogart': n = 2;break;
      case '/blogonroad': n = 3;break;
      case '/blogdiary': n = 4;break;
      case '/bloglink': n = 5;break;
      case '/blogabout': n = 6;break;
      default : n = 2;break;
    }
    return n;
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
