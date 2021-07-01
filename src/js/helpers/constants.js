import axios from 'axios';
export default {
  isAuthorized: axios.defaults.headers.common.Authorization,
};
