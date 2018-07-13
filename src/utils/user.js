import get from 'lodash/get';
import isString from 'lodash/isString';
import DecodeJWT from 'jwt-decode';
// import { debugAdd } from '../utils/debug';

const TokenName = 'jwtToken';
const UserInfoName = 'USER_INFO';

export class User {
  // constructor() {
  //   // console.log('User constructor');
  // }

  get info () {
    if (this.id) {
      if (this.infoCache) {
        return this.infoCache;
      }
      return this.getInfo();
    }
    return {};
  }

  set info (info) {
    if (!this.setInfo(info)) {
      this.unsetInfo();
    }
  }

  get token () {
    if (this.tokenCache) {
      return this.tokenCache;
    }
    return this.getToken(true);
  }

  set token (token) {
    null !== token ? this.setToken(token) : this.unsetToken();
  }

  get id () {
    let auth = this.decodeToken(this.token);
    return auth.id || '';
  }

  get openId () {
    let auth = this.decodeToken();
    return auth.openid || '';
  }

  get classroomId () {
    let auth = this.decodeToken();
    return auth.classroom_id * 1;
  }

  get isAuthenticated () {
    return this.validTokenAuth();
  }

  getToken (force = false) {
    let token = wx.getStorageSync(TokenName) || null;
    if (true === force) {
      return token;
    }

    if (this.validToken(token)) {
      return token;
    }

    return null;
  }

  setToken (token) {
    if (isString(token) && token && true === this.validToken(token)) {
      this.tokenCache = token;
      wx.setStorageSync(TokenName, token);
      return true;
    }

    return false;
  }

  unsetToken () {
    this.tokenCache = null;
    wx.removeStorageSync(TokenName);
    return true;
  }

  // getInfo (force = false) {
  getInfo () {
    let info = wx.getStorageSync(UserInfoName) || {};
    return info;
  }

  setInfo (info) {
    if (info && info.id) {
      this.infoCache = info;
      wx.setStorageSync(UserInfoName, info);
      return true;
    }

    return false;
  }

  unsetInfo () {
    this.infoCache = null;
    wx.removeStorageSync(UserInfoName);
    return true;
  }

  decodeToken (token = this.token) {
    try {
      return DecodeJWT(token);
    }
    catch (err) {
      return {};
    }
  }

  validToken (token = this.token, options = {}) {
    // offset 是提前了多久，默认提前 60 秒
    const offset = (1000 * get(options, 'offset')) || 1000 * 60;
    if (!token) {
      return false;
    }

    try {
      let { exp } = DecodeJWT(token);
      return Date.now() < exp * 1000 - offset;
    }
    catch (error) {
      return false;
    }
  }

  validTokenAuth (token = this.token) {
    if (!this.validToken(token)) {
      return false;
    }

    let auth = this.decodeToken(token);
    return auth && 0 < auth.id;
  }
}

export default new User();
