import axios from 'axios';
import whoAmI from './who-am-i';
const API_URL = "http://localhost:3100";

let lastUrl = null;

const router = {
  setLastRouteUrl: (url) => {
    lastUrl = url;
  },
  routeTo: (url) => {
    if (whoAmI.client() && url === lastUrl) {
      return Promise.reject();
    }

    return axios.get(API_URL + url)
    .then(result => {
      // add to history in browser
      whoAmI.client() && window.history.pushState("", "", url);
      return result;
    })
    .then(result => {
      router.setLastRouteUrl(url);
      return result;
    })
    .then(result => {
      return result.data;
    });
  }
};

export default router;
