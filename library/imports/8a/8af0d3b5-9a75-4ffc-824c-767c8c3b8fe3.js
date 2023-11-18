"use strict";
cc._RF.push(module, '8af0dO1mnVP/IJMdnyMO4/j', 'uma.min');
// common-plugin/Scripts/UMengSDK/quickGame/uma.min.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var e = "[UMENG] -- ",
    t = function () {
  var t = null,
      n = !1;

  function i() {
    this.setDebug = function (e) {
      n = e;
    };

    this.d = function () {
      if (n) try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.i = function () {
      try {
        if (n) try {
          "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
          console.log.apply(console, arguments);
        } catch (e) {}
      } catch (e) {}
    };

    this.e = function () {
      if (n) try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.w = function () {
      if (n) try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.v = function () {
      if (n) try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.t = function () {
      if (n) try {
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.tip = function () {
      try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.tip_w = function (e) {
      try {
        console.log("%c [UMENG] -- " + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
      } catch (e) {}
    };

    this.err = function () {
      try {
        "string" == typeof arguments[0] && (arguments[0] = e + arguments[0]);
        console.log.apply(console, arguments);
      } catch (e) {}
    };

    this.repeat = function (e) {
      for (var t = e; t.length < 86;) {
        t += e;
      }

      return t;
    };
  }

  return function () {
    null === t && (t = new i());
    return t;
  };
}(),
    n = function () {
  var e = null;

  function t() {
    var e = {};

    this.useOpenid = function () {
      return !!e.useOpenid;
    };

    this.useSwanid = function () {
      return !!e.useSwanid;
    };

    this.autoGetOpenid = function () {
      return !!e.autoGetOpenid;
    };

    this.appKey = function () {
      return e.appKey;
    };

    this.uploadUserInfo = function () {
      return e.uploadUserInfo;
    };

    this.enableVerify = function () {
      return e.enableVerify;
    };

    this.set = function (t) {
      e = t;
    };

    this.get = function () {
      return e;
    };

    this.setItem = function (t, n) {
      e[t] = n;
    };

    this.getItem = function (t) {
      return e[t];
    };
  }

  return function () {
    e || (e = new t());
    return e;
  };
}();

function i() {}

i.prototype = {
  on: function on(e, t, n) {
    var i = this.e || (this.e = {});
    (i[e] || (i[e] = [])).push({
      fn: t,
      ctx: n
    });
    return this;
  },
  once: function once(e, t, n) {
    var i = this;

    function r() {
      i.off(e, r);
      t.apply(n, arguments);
    }

    r._ = t;
    return this.on(e, r, n);
  },
  emit: function emit(e) {
    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) {
      n[i].fn.apply(n[i].ctx, t);
    }

    return this;
  },
  off: function off(e, t) {
    var n = this.e || (this.e = {}),
        i = n[e],
        r = [];
    if (i && t) for (var o = 0, s = i.length; o < s; o++) {
      i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
    }
    r.length ? n[e] = r : delete n[e];
    return this;
  }
};
var r = new i();
r.messageType = {
  CONFIG_LOADED: 0,
  UMA_LIB_INITED: 1
};

function o() {
  return cc ? cc.sys && cc.sys.platform && cc.sys.platform <= 111 && cc.sys.platform >= 108 ? qg || hbs : void 0 : qg || hbs;
}

var s = o();

var a = new (function () {
  function e() {}

  e.prototype.setStorage = function (e, t, n) {
    if (s.setStorage) s.setStorage({
      key: e,
      value: t,
      success: function success() {
        "function" == typeof n && n(!0);
      },
      fail: function fail() {
        "function" == typeof n && n(!1);
      }
    });else {
      localStorage.setItem(e, t);
      "function" == typeof n && n(!0);
    }
  };

  e.prototype.getStorage = function (e, n) {
    if (s.getStorage) s.getStorage({
      key: e,
      success: function success(e) {
        "function" == typeof n && n(e);
      },
      fail: function fail(i, r) {
        t().w(e + "code = : " + r);
        "function" == typeof n && n();
      }
    });else if (localStorage) {
      var i = localStorage.getItem(e);
      "function" == typeof n && n(i);
    }
  };

  e.prototype.removeStorage = function (e, t) {
    if (s.deleteStorage) s.deleteStorage({
      key: e,
      success: function success() {
        "function" == typeof t && t(!0);
      },
      fail: function fail() {
        "function" == typeof t && t(!1);
      }
    });else if (localStorage) {
      localStorage.removeItem(e);
      "function" == typeof t && t(!0);
    }
  };

  e.prototype.getSystemInfo = function (e) {
    s.getSystemInfo({
      success: function success(t) {
        var n = {
          model: t.model,
          brand: t.brand,
          screenWidth: t.screenWidth,
          screenHeight: t.screenHeight,
          platform: t.osType,
          pixelRatio: t.pixelRatio,
          platformVersion: t.platformVersionCode,
          language: t.language,
          deviceName: t.model,
          OSVersion: t.osVersionName,
          resolution: "",
          statusBarHeight: t.statusBarHeight
        };

        if (t.system) {
          var i = t.system.split(" ");

          if (Array.isArray(i)) {
            !n.platform && (n.platform = i[0]);
            !n.OSVersion && (n.OSVersion = i[1]);
          }
        }

        var r = Math.round(t.screenWidth * t.pixelRatio),
            o = Math.round(t.screenHeight * t.pixelRatio);
        n.resolution = r > o ? r + "*" + o : o + "*" + r;
        "function" == typeof e && e(n);
      },
      fail: function fail() {
        "function" == typeof e && e();
      }
    });
  };

  e.prototype.getDeviceInfo = function (e) {
    "function" == typeof e && e("");
  };

  e.prototype.getNetworkInfo = function (e) {
    s.getNetworkType({
      success: function success(t) {
        "function" == typeof e && e({
          networkAvailable: "none" !== t.networkType,
          networkType: t.networkType
        });
      },
      fail: function fail() {
        "function" == typeof e && e();
      }
    });
  };

  e.prototype.request = function (e) {
    var t = e.success,
        n = e.fail,
        i = !1,
        r = null;

    e.success = function (e) {
      if (!i) {
        r && clearTimeout(r);
        "function" == typeof t && t(e);
      }
    };

    e.fail = function () {
      if (!i) {
        r && clearTimeout(r);
        "function" == typeof n && n(!1);
      }
    };

    s.request ? s.request(e) : XMLHttpRequest && function (e, t) {
      void 0 === t && (t = !0);
      (e = e || {}).method = e.method || "GET";
      e.url = e.url || "";

      e.success = e.success || function () {};

      e.fail = e.fail || function () {};

      var n,
          i,
          r = new XMLHttpRequest(),
          o = [];

      if ("object" == typeof e.data) {
        for (var s in e.data) {
          o.push(s + "=" + encodeURIComponent(e.data[s]));
        }

        n = JSON.stringify(e.data || {});
        i = o.join("&");
      } else if ("string" == typeof e.data) {
        n = e.data;
        i = e.data;
      }

      "POST" === e.method ? r.open(e.method, e.url, t) : r.open(e.method, e.url + "?" + i || "", t);

      if (e.header && "object" == typeof e.header) {
        for (var a in e.header) {
          r.setRequestHeader(a, e.header[a]);
        }

        e.header["content-type"] || e.header["Content-Type"] || r.setRequestHeader("content-type", "text/plain");
      }

      t && (r.timeout = e.timeout || 3e4);

      r.onreadystatechange = function () {
        if (4 == r.readyState && 200 == r.status) {
          var t = {};

          try {
            t = JSON.parse(r.responseText);
          } catch (e) {}

          e.success({
            data: t,
            status: r.status
          });
        } else 4 == r.readyState && e.fail({
          data: null,
          status: r.status
        });
      };

      "POST" === e.method ? r.send(n || "") : r.send();
    }(e, !0);
    r = setTimeout(function () {
      r && clearTimeout(r);
      i = !0;
      "function" == typeof n && n(i);
    }, e.timeout || 3e4);
  };

  e.prototype.getSdkType = function () {
    return this.getPlatform() + "mp";
  };

  e.prototype.getPlatform = function () {
    return "quickgame";
  };

  e.prototype.getUserInfo = function (e) {
    e && e();
  };

  e.prototype.getAppInfoSync = function () {
    return {};
  };

  e.prototype.onShareAppMessage = function (e) {};

  e.prototype.shareAppMessage = function (e) {};

  e.prototype.getContext = function () {
    return o();
  };

  e.prototype.getLaunchOptionsSync = function () {
    var e = null;
    if (e) return e;
    if (!s.getLaunchOptionsSync) return {};

    try {
      e = s.getLaunchOptionsSync();
    } catch (t) {
      e = null;
    }

    return e || {};
  };

  return e;
}())(),
    _u = function u(e, t) {
  return (_u = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }
  })(e, t);
};

function c(e, t) {
  _u(e, t);

  function n() {
    this.constructor = e;
  }

  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}

var f = {
  SESSION_INTERVAL: 3e4,
  LOG_URL: "/quickgamem_logs",
  GET_OPENID_URL: "",
  USERINFO_URL: "/uminiprogram_logs/comm/uif",
  ENDPOINT: "https://umini.shujupie.com",
  ENDPOINTB: "https://ulogs.umeng.com",
  DEVICE_INFO_KEY: "device_info",
  ADVERTISING_ID: "mobile_ad_id",
  ANDROID_ID: "android_id",
  CURRENT_SESSION: "current_session",
  SESSION_PAUSE_TIME: "session_pause_time",
  EVENT_SEND_DEFAULT_INTERVAL: 15e3,
  EVENT_LAST_SEND_TIME: "last_send_time",
  MAX_EVENTID_LENGTH: 128,
  MAX_PROPERTY_KEY_LENGTH: 256,
  MAX_PROPERTY_KEYS_COUNT: 100,
  REPORT_POLICY: "report_policy",
  REPORT_INTERVAL_TIME: "report_interval_time",
  REPORT_POLICY_START_SEND: "1",
  REPORT_POLICY_INTERVAL: "6",
  IMPRINT: "imprint",
  SEED_VERSION: "1.0.0",
  IMPL_VERSION: "2.7.2-beta.17928427",
  ALIPAY_AVAILABLE_VERSION: "10.1.52",
  SHARE_PATH: "um_share_path",
  SHARES: "shares",
  REQUESTS: "requests",
  UUID: "um_uuid",
  UUID_SUFFIX: "ud",
  OPENID: "um_od",
  UNIONID: "um_unid",
  ALIPAYID: "um_alipayid",
  USERID: "um_userid",
  PROVIDER: "um_provider",
  SWANID: "um_swanid",
  ANONYMOUSID: "um_anonymousid",
  LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
  UM_SSRC: "_um_ssrc",
  USER_INFO: "user_info",
  IS_ALIYUN: !1
};

var p,
    l = {
  isNumber: function isNumber(e) {
    return !Number.isNaN(parseInt(e, 10));
  },
  compareVersion: function compareVersion(e, t) {
    for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
      var o = parseInt(n[r] || 0, 10),
          s = parseInt(i[r] || 0, 10);
      if (o > s) return 1;
      if (o < s) return -1;
    }

    return 0;
  },
  getRandomStr: function getRandomStr(e) {
    for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], i = 0; i < Number(e); i++) {
      t += n[Math.round(Math.random() * (n.length - 1))];
    }

    return t;
  },
  clone: function clone(e) {
    return JSON.parse(JSON.stringify(e));
  },
  startsWith: function startsWith(e, t) {
    return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
  },
  endsWith: function endsWith(e, t) {
    return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t;
  },
  assign: function assign(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");

    for (var t = Object(e), n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      if (i) for (var r in i) {
        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
      }
    }

    return t;
  },
  deepEqual: function e(t, n) {
    if (t === n) return !0;

    if (t && "object" == typeof t && n && "object" == typeof n) {
      if (Object.keys(t).length !== Object.keys(n).length) return !1;

      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
        if (!e(t[i], n[i])) return !1;
      }

      return !0;
    }

    return !1;
  },
  trimStart: function trimStart(e, t) {
    if (!e) return "";

    if ("string" == typeof t && t.length) {
      var n = new RegExp("^" + t + "*");
      e = e.replace(n, "");
    } else e = e.replace(/^s*/, "");

    return e;
  },
  trimEnd: function trimEnd(e, t) {
    if (!e) return "";
    var n, i;

    if ("string" == typeof t && t.length) {
      n = new RegExp(t);
      i = e.length;

      for (; n.test(e.charAt(i));) {
        i -= 1;
      }

      return e.slice(0, i + 1);
    }

    n = /s/;
    i = e.length - 1;

    for (; n.test(e.charAt(i));) {
      i -= 1;
    }

    return e.slice(0, i + 1);
  },
  isFunction: function isFunction(e) {
    return "function" == typeof e;
  }
},
    d = function (e) {
  c(n, e);

  function n() {
    var t = null !== e && e.apply(this, arguments) || this;
    t._openid = "";
    t._unionid = "";
    t._useOpenid = !1;
    return t;
  }

  n.prototype.initID = function (e) {
    var n = this;
    n._idType = n._useOpenid ? "openid" : "uuid";
    t().v("id type: ", n._idType);
    a.getStorage(f.UNIONID, function (e) {
      n._unionid = e;
    });
    this._useOpenid ? a.getStorage(f.OPENID, function (t) {
      n._openid = t;
      e && e();
    }) : e && e();
  };

  n.prototype.setUseOpenid = function (e) {
    this._useOpenid = e;
  };

  n.prototype.setOpenid = function (e) {
    if (!this._openid && e) {
      this._openid = e;
      a.setStorage(f.OPENID, e);
    }
  };

  n.prototype.setUnionid = function (e) {
    if (!this._unionid && e) {
      this._unionid = e;
      a.setStorage(f.UNIONID, e);
    }
  };

  n.prototype.getIdTracking = function () {
    var t = e.prototype.getIdTracking.call(this);
    this._openid && (t.openid = this._openid);
    this._unionid && (t.unionid = this._unionid);
    this._userid && (t.userid = this._userid);
    return t;
  };

  n.prototype.getId = function () {
    return this._useOpenid ? this._openid : this._uuid;
  };

  return n;
}(function () {
  function e() {
    this._uuid = "";
    this._userid = "";
    this._provider = "";
    this._idType = "";
  }

  e.prototype.createUUID = function () {
    return l.getRandomStr(10) + Date.now() + l.getRandomStr(7) + f.UUID_SUFFIX;
  };

  e.prototype.initUUID = function (e) {
    var t = this;
    a.getStorage(f.UUID, function (n) {
      if (n) t._uuid = n;else {
        t._uuid = t.createUUID();
        a.setStorage(f.UUID, t._uuid);
      }
      e && e(n);
    });
  };

  e.prototype.initUserid = function () {
    var e = this;
    a.getStorage(f.USERID, function (n) {
      if (!e._userid && n) {
        e._userid = n;
        t().v("userId is ", n);
      }
    });
    a.getStorage(f.PROVIDER, function (n) {
      if (!e._provider && n) {
        e._provider = n;
        t().v("provider is ", n);
      }
    });
  };

  e.prototype.init = function (e) {
    var t = this;
    t.initUUID(function () {
      t.initUserid();
      t.initID(e);
    });
  };

  e.prototype.setUserid = function (e, t) {
    if (!this._userid && e) {
      this._userid = e;
      this._provider = t;
      a.setStorage(f.USERID, e);
      a.setStorage(f.PROVIDER, t);
    }
  };

  e.prototype.getUserId = function () {
    return this._userid;
  };

  e.prototype.getProvider = function () {
    return this._provider;
  };

  e.prototype.getIdType = function () {
    return this._idType;
  };

  e.prototype.getIdTracking = function () {
    var e = {};
    this._uuid && (e.uuid = this._uuid);
    this._userid && (e.userid = this._userid);
    return e;
  };

  return e;
}()),
    h = o(),
    g = function (e) {
  c(n, e);

  function n() {
    return null !== e && e.apply(this, arguments) || this;
  }

  n.prototype.getOpenIdAsync = function (e, n) {
    var i = this;
    h.login({
      success: function success(r) {
        r.code ? a.request({
          url: f.ENDPOINT + f.GET_OPENID_URL,
          method: "GET",
          data: {
            key: e,
            code: r.code
          },
          success: function success(e) {
            if (e && 200 === e.statusCode && e.data && e.data.data) {
              var t = e.data.data;
              i.setOpenid(t.oid);
              i.setUnionid(t.uid);
              return n && n(!0);
            }

            n && n();
          },
          fail: function fail(e) {
            t().v("wx request failed...", e);
            n && n();
          }
        }) : n && n();
      },
      fail: function fail() {
        n && n();
      }
    });
  };

  return n;
}(d),
    v = (p = null, function () {
  p || (p = new g());
  return p;
}),
    _ = function () {
  var e = null;

  function t() {
    var e = !1,
        t = null,
        n = [];

    this.addPageStart = function (n) {
      if (n && !e) {
        t = {
          ts: Date.now(),
          path: n,
          page_name: n
        };
        e = !0;
      }
    };

    this.addPageEnd = function (i) {
      if (e && i && t && i === t.page_name) {
        var r = Date.now() - t.ts;
        t.duration = Math.abs(r);
        n.push(t);
        t = null;
        e = !1;
      }
    };

    this.get = function () {
      return n;
    };

    this.getCurrentPage = function () {
      return t;
    };

    this.clear = function () {
      n.length = 0;
    };
  }

  return function () {
    e || (e = new t());
    return e;
  };
}(),
    y = {};

var m = function () {
  var e = null,
      n = [],
      i = "";

  function r() {
    return {
      add: function add(e, r) {
        t().v("share origin: %o", e);
        var o = {
          title: e && e.title,
          path: e && e.path && e.path.split("?")[0],
          _um_sts: Date.now()
        };
        o.path && o.path.length > 1 && l.startsWith(o.path, "/") && (o.path = l.trimStart(o.path, "/"));
        var s = e.path || "",
            a = v().getId();

        if (a) {
          var u = i.split(","),
              c = (u = u.filter(function (e) {
            return e.length > 0;
          })).indexOf(a);
          c >= 0 && (u = u.slice(0, c));
          u.length < 3 && u.push(a);
          var f = u.join(",");
          -1 !== s.indexOf("?") ? s += "&_um_ssrc=" + f : s += "?_um_ssrc=" + f;
          var p = Date.now();
          s += "&_um_sts=" + p;

          if (r) {
            var d = function (e) {
              var t = [];

              for (var n in e) {
                "_um_ssrc" !== n && "_um_sts" !== n && t.push(n + "=" + e[n]);
              }

              return t.join("&");
            }(y),
                h = d ? d + "&_um_ssrc=" + f + "&_um_sts=" + p : "_um_ssrc=" + f + "&_um_sts=" + p;

            e.query = e.query ? e.query + "&_um_ssrc=" + f + "&_um_sts=" + p : h;
          } else e.path = s;

          o._um_ssrc = f;
          o._um_sts = p;
        }

        n.push(o);
        t().v("share: %o", e);
        return e;
      },
      setShareSource: function setShareSource(e) {
        i = e;
      },
      clear: function clear() {
        n.length = 0;
      },
      get: function get() {
        return n;
      }
    };
  }

  return function () {
    e || (e = new r());
    return e;
  };
}(),
    S = function S(e) {
  if (e) try {
    return JSON.stringify(e);
  } catch (e) {}
  return "";
},
    I = function I(e) {
  if (e) try {
    return JSON.parse(e);
  } catch (e) {}
  return null;
},
    O = function () {
  var e = null,
      t = "",
      i = null,
      r = !1;

  function o() {
    this.load = function (e) {
      if (i) {
        a.removeStorage(t);
        e();
      } else {
        t = "um_cache_" + n().appKey();
        a.getStorage(t, function (n) {
          i = I(n) || {};
          r = !0;
          a.removeStorage(t);
          e();
        });
      }
    };

    this.save = function () {
      i && a.setStorage(t, S(i));
    };

    this.set = function (e, t) {
      i && (i[e] = t);
    };

    this.get = function (e) {
      return (i || {})[e];
    };

    this.remove = function (e) {
      i && i[e] && delete i[e];
    };

    this.getAll = function () {
      return i;
    };

    this.clear = function () {
      i = null;
    };

    this.has = function (e) {
      return !!this.get(e);
    };

    this.isLoaded = function () {
      return r;
    };
  }

  return function () {
    e || (e = new o());
    return e;
  };
}(),
    E = function () {
  var e,
      n,
      i = [],
      r = [];

  function o() {
    if (i.length) {
      var e = O().get("ekvs");

      if (function (e) {
        var t = 0;

        for (var n in e) {
          Array.isArray(e[n]) && (t += e[n].length);
        }

        return t;
      }(e) + i.length <= 1e4) {
        e = s(e, i);
        O().set("ekvs", e);
      }
    }
  }

  function s(e, t) {
    var i = (e = e || {})[n];
    Array.isArray(i) && i.length ? e[n] = i.concat(t) : e[n] = [].concat(t);
    return e;
  }

  return function () {
    e || (e = {
      addEvent: function addEvent(e) {
        if (n) {
          i.unshift(e);

          if (i.length > 1) {
            o();
            i.length = 0;
          }
        } else {
          t().w("session id is null: ", n);
          r.unshift(e);
        }
      },
      setSessionId: function setSessionId(e) {
        n = e;
        t().v("setSessionId: ", n);

        if (Array.isArray(r) && r.length && n) {
          for (var i = 0; i < r.length; i++) {
            this.addEvent(r[i]);
          }

          r.length = 0;
        }
      },
      getEkvs: function getEkvs() {
        var e = O().get("ekvs");
        i && i.length && (e = s(e, i));
        return e;
      },
      clear: function clear() {
        O().remove("ekvs");
        i.length = 0;
      }
    });
    return e;
  };
}(),
    T = "2g",
    N = "3g",
    A = "4g",
    b = "half_session",
    k = "close_session",
    D = "ekv",
    w = ["access", "access_subtype"],
    R = function () {
  var e = null;

  function t() {
    var e = !1,
        t = {};

    function i(e) {
      var i = O().get(f.IMPRINT);
      i && (t.imprint = i);
      t.device_type = "Phone";
      t.sdk_version = f.IMPL_VERSION;
      t.appkey = n().appKey();
      a.getDeviceInfo(function (e) {
        t.device_info = e || "";
      });
      var r = a.getAppInfoSync();
      t.appid = r.appId;
      t.app_env = r.appEnv;
      t.app_version = r.appVersion;
      a.getSystemInfo(function (n) {
        a.getNetworkInfo(function (i) {
          var r = function (e, t) {
            var n = {};
            (e = e || {}).safeArea = e.safeArea || {};
            var i = (t = t || {}).networkType;
            "none" === i && (i = "unknown");
            var r = e.model || "",
                o = e.platform || "",
                s = e.brand || "",
                u = s.toLowerCase();
            n.sdk_type = a.getSdkType();
            n.platform = a.getPlatform();
            n.platform_sdk_version = e.platformSDKVersion;
            n.platform_version = e.platformVersion;
            n.resolution = e.resolution;
            n.pixel_ratio = e.pixelRatio;
            n.os = o;
            n.font_size_setting = e.fontSizeSetting;
            n.device_model = r;
            n.device_brand = s;
            n.device_manufacturer = u;
            n.device_manuid = r;
            n.device_name = r;
            n.os_version = e.OSVersion;
            n.language = e.language;
            n.theme = e.theme;
            n.benchmark_level = e.benchmarkLevel;
            n.status_bar_height = e.statusBarHeight;
            n.safe_area_top = e.safeArea.top;
            n.safe_area_left = e.safeArea.left;
            n.safe_area_right = e.safeArea.right;
            n.safe_area_bottom = e.safeArea.bottom;
            n.safe_area_height = e.safeArea.height;
            n.safe_area_width = e.safeArea.width;
            n.storage = e.storage;
            n.screen_width = e.screenWidth;
            n.screen_height = e.screenHeight;
            n.host = e.host;

            switch (i = i ? i.toLowerCase() : "") {
              case A:
                n.access_subtype = "LTE";
                n.access = "4G";
                break;

              case N:
                n.access_subtype = "CDMA";
                n.access = "3G";
                break;

              case T:
                n.access_subtype = "GRPS";
                n.access = "2G";
                break;

              default:
                n.access = i;
                delete n.access_subtype;
            }

            return n;
          }(n, i);

          l.assign(t, r);
          e && e();
        });
      });
    }

    return {
      init: function init() {
        i(function () {
          e = !0;
        });
      },
      isLoaded: function isLoaded() {
        return e;
      },
      get: function get() {
        return t;
      },
      getRealtimeFields: function getRealtimeFields() {
        var e = {};
        w.forEach(function (n) {
          e[n] = t[n];
        });
        return e;
      },
      setIdTracking: function setIdTracking(e) {
        this.setItem("id_tracking", e);
      },
      setIdType: function setIdType(e) {
        this.setItem("id_type", e);
      },
      setAppVersion: function setAppVersion(e) {
        this.setItem("app_version", e);
      },
      setSuperProperty: function setSuperProperty(e) {
        t.sp || (t.sp = {});
        t.sp.isv = e;
      },
      getSuperProperty: function getSuperProperty() {
        return t && t.sp ? t.sp.isv : "";
      },
      setItem: function setItem(e, n) {
        t[e] = n;
      },
      getItem: function getItem(e) {
        return t[e];
      }
    };
  }

  return {
    instance: function instance() {
      e || (e = t());
      return e;
    }
  };
}(),
    U = function () {
  var e = null,
      n = null,
      i = null;

  function r() {
    return {
      resume: function resume(e) {
        var r = !1;
        i || (i = O().get(f.CURRENT_SESSION));
        var o = new Date();
        n = o.getTime();

        if (!i || !i.end_time || n - i.end_time > f.SESSION_INTERVAL) {
          r = !0;
          !function (e) {
            try {
              var n = (i || {}).options || {},
                  r = l.assign({}, function (e) {
                var n = {};

                for (var i in e) {
                  0 === i.indexOf("_um_") && (n[i] = e[i]);
                }

                t().v("query: ", e);
                t().v("_um_params: ", n);
                return n;
              }(e.query));
              r.path = e.path || n.path;
              r.scene = e.scene ? a.getPlatform() + "_" + e.scene : n.scene;
              var o = e.referrerInfo;
              o && (r.referrerAppId = o.appId);
              t().v("session options: ", r);
              var s = r[f.UM_SSRC];
              s && m().setShareSource(s);
              var u = Date.now();
              i = {
                id: l.getRandomStr(10) + u,
                start_time: u,
                options: r
              };
            } catch (e) {
              t().e("生成新session失败: ", e);
            }
          }(e);
          t().v("开始新的session(%s): ", i.id, i);
        } else t().v("延续上一次session(%s): %s ", i.id, o.toLocaleTimeString(), i);

        return r;
      },
      pause: function pause() {
        !function () {
          if (i) {
            var e = new Date();
            i.end_time = e.getTime();
            "number" != typeof i.duration && (i.duration = 0);
            i.duration = i.end_time - n;
            O().set(f.CURRENT_SESSION, i);
            t().v("退出会话(%s): %s ", i.id, e.toLocaleTimeString(), i);
          }
        }();
      },
      getCurrentSessionId: function getCurrentSessionId() {
        return (i || {}).id;
      },
      getCurrentSession: function getCurrentSession() {
        return i;
      },
      cloneCurrentSession: function cloneCurrentSession() {
        return l.clone(i);
      }
    };
  }

  return function () {
    e || (e = r());
    return e;
  };
}();

function P(e) {
  var t = null;

  switch (e) {
    case b:
      t = function () {
        var e = null,
            t = U().cloneCurrentSession();
        t && (e = {
          header: {
            st: "1"
          },
          analytics: {
            sessions: [t]
          }
        });
        return e;
      }();

      break;

    case k:
      t = function () {
        var e = null,
            t = {},
            n = U().cloneCurrentSession();

        if (n) {
          var i = _().get(),
              r = m().get();

          Array.isArray(i) && i.length && (n.pages = l.clone(i));
          Array.isArray(r) && r.length && (n.shares = l.clone(r));

          _().clear();

          m().clear();
          t.sessions = [n];
        }

        var o = E().getEkvs();

        if (o) {
          t.ekvs = l.clone(o);
          E().clear();
        }

        (t.sessions || t.ekvs) && (e = {
          analytics: t
        });
        return e;
      }();

      break;

    case D:
      t = function () {
        var e = null,
            t = E().getEkvs();

        if (t) {
          e = {
            analytics: {
              ekvs: l.clone(t)
            }
          };
          E().clear();
        }

        return e;
      }();

  }

  return t;
}

var C = {
  sessions: "sn",
  ekvs: "e",
  active_user: "active_user"
},
    L = {
  sdk_type: "sdt",
  access: "ac",
  access_subtype: "acs",
  device_model: "dm",
  language: "lang",
  device_type: "dt",
  device_manufacturer: "dmf",
  device_name: "dn",
  platform_version: "pv",
  id_type: "it",
  font_size_setting: "fss",
  os_version: "ov",
  device_manuid: "did",
  platform_sdk_version: "psv",
  device_brand: "db",
  appkey: "ak",
  _id: "id",
  id_tracking: "itr",
  imprint: "imp",
  sdk_version: "sv",
  resolution: "rl",
  testToken: "ttn",
  theme: "t5",
  benchmark_level: "bml",
  screen_width: "sw",
  screen_height: "sh",
  status_bar_height: "sbh",
  safe_area_top: "sat",
  safe_area_left: "sal",
  safe_area_right: "sar",
  safe_area_bottom: "sab",
  safe_area_height: "sah",
  safe_area_width: "saw",
  pixel_ratio: "pr",
  storage: "s7",
  host: "hs"
},
    M = {
  uuid: "ud",
  unionid: "und",
  openid: "od",
  anonymousid: "nd",
  alipay_id: "ad",
  device_id: "dd",
  userid: "puid"
};

function j(e, t) {
  var n = V(e, t);
  e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = V(e.id_tracking, M));
  return n;
}

function V(e, t) {
  var n = {};

  for (var i in e) {
    t[i] ? n[t[i]] = e[i] : n[i] = e[i];
  }

  return n;
}

function x(e, t) {
  var n = {};
  if (e) for (var i in e) {
    e[i] && (n[t[i]] = e[i]);
  }
  return n;
}

var q = "";

function G() {
  return q;
}

var F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    H = function (e) {
  for (var t = {}, n = 0, i = e.length; n < i; n++) {
    t[e.charAt(n)] = n;
  }

  return t;
}(F),
    K = String.fromCharCode,
    Y = function Y(e) {
  if (e.length < 2) {
    return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? K(192 | t >>> 6) + K(128 | 63 & t) : K(224 | t >>> 12 & 15) + K(128 | t >>> 6 & 63) + K(128 | 63 & t);
  }

  var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
  return K(240 | t >>> 18 & 7) + K(128 | t >>> 12 & 63) + K(128 | t >>> 6 & 63) + K(128 | 63 & t);
},
    J = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    X = function X(e) {
  var t = [0, 2, 1][e.length % 3],
      n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
  return [F.charAt(n >>> 18), F.charAt(n >>> 12 & 63), t >= 2 ? "=" : F.charAt(n >>> 6 & 63), t >= 1 ? "=" : F.charAt(63 & n)].join("");
},
    B = function B(e) {
  return function (e) {
    return e.replace(J, Y);
  }(e).replace(/[\s\S]{1,3}/g, X);
},
    W = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
    z = function z(e) {
  switch (e.length) {
    case 4:
      var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
      return K(55296 + (t >>> 10)) + K(56320 + (1023 & t));

    case 3:
      return K((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

    default:
      return K((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
  }
},
    Q = function Q(e) {
  var t = e.length,
      n = t % 4,
      i = (t > 0 ? H[e.charAt(0)] << 18 : 0) | (t > 1 ? H[e.charAt(1)] << 12 : 0) | (t > 2 ? H[e.charAt(2)] << 6 : 0) | (t > 3 ? H[e.charAt(3)] : 0),
      r = [K(i >>> 16), K(i >>> 8 & 255), K(255 & i)];
  r.length -= [0, 0, 2, 1][n];
  return r.join("");
},
    Z = function Z(e) {
  return function (e) {
    return e.replace(/[\s\S]{1,4}/g, Q);
  }(e).replace(W, z);
},
    $ = function $(e, t) {
  return t ? B(String(e)).replace(/[+\/]/g, function (e) {
    return "+" == e ? "-" : "_";
  }).replace(/=/g, "") : B(String(e));
},
    ee = function ee(e) {
  return Z(String(e).replace(/[-_]/g, function (e) {
    return "-" == e ? "+" : "/";
  }).replace(/[^A-Za-z0-9\+\/]/g, ""));
};

var te = new function () {
  var e = "",
      t = this;

  this.set = function (t) {
    e = t;
  };

  this.get = function () {
    return e;
  };

  this.getImpObj = function () {
    return I(ee(e));
  };

  this.getItem = function (e) {
    var n = t.getImpObj();
    return n && n[e] || "";
  };

  this.load = function () {
    e = O().get(f.IMPRINT);
  };

  this.save = function () {
    e && O().set(f.IMPRINT, e);
  };
}();

function ne(e, n, i, r) {
  R.instance().setIdType(v().getIdType());
  R.instance().setIdTracking(v().getIdTracking());
  var o = v().getUserId();
  o && e.analytics && (e.analytics.active_user = {
    puid: o,
    provider: v().getProvider()
  });
  var s = l.clone(R.instance().get());
  e.header = l.assign(s, e.header, {
    ts: Date.now(),
    testToken: G(),
    traceId: l.getRandomStr(10) + Date.now() + l.getRandomStr(9)
  });

  var u = function (e) {
    return {
      h: j(e.header, L),
      a: x(e.analytics, C)
    };
  }(e),
      c = S(u),
      p = {
    url: f.ENDPOINT + f.LOG_URL,
    method: "POST",
    data: $(c),
    success: function success(r) {
      var o = r.code || r.status || r.statusCode;

      if (200 === o || 413 === o) {
        t().i("数据发送成功: ", e, c);
        !function (e) {
          if (e) {
            R.instance().setItem(f.IMPRINT, e);
            te.set(e);
            te.save();
            t().v("imprint: ", te.getImpObj());
            te.getItem("ttn_invalid") && (q = "");
          }
        }((r.data || {}).imprint);
        "function" == typeof n && n(r);
      } else {
        t().w("数据发送失败: ", c);
        "function" == typeof i && i();
      }
    },
    fail: function fail(e) {
      t().w("超时: ", c);
      "function" == typeof i && i();
    },
    complete: function complete() {
      "function" == typeof r && r();
    }
  };

  a.request(l.assign(p, {
    header: {
      "content-type": "text/plain",
      "Msg-Type": a.getSdkType() + "/json"
    }
  }));
}

function ie(e) {
  var t = e,
      n = [];

  this.enqueue = function (e) {
    "number" == typeof t && this.size() >= t && this.dequeue();
    n.push(e);
  };

  this.dequeue = function () {
    return n.shift();
  };

  this.front = function () {
    return n[0];
  };

  this.isEmpty = function () {
    return 0 === n.length;
  };

  this.clear = function () {
    n.length = 0;
  };

  this.size = function () {
    return n.length;
  };

  this.items = function () {
    return n;
  };

  this.print = function () {
    console.log(n.toString());
  };
}

var re = function () {
  var e = null,
      n = !1,
      i = [],
      r = new ie(50);

  function o(e, t, n) {
    if (R.instance().isLoaded()) {
      t = t || {};
      var i = P(e);

      if (i) {
        var s = R.instance().getRealtimeFields();
        i.header = l.assign({}, i.header, s);
        i.noCache = t.noCache;
        r.enqueue(i);
      }

      "function" == typeof n && n();
    } else setTimeout(function () {
      o(e, t, n);
    }, 100);
  }

  function s(e) {
    var t = r.front();
    if (t) ne(t, function () {
      r.dequeue();
      s(e);
    }, function () {
      var t = r.dequeue();
      t && !t.noCache && i.push(t);
      s(e);
    });else {
      !function () {
        i.forEach(function (e) {
          r.enqueue(e);
        });
        i.length = 0;
      }();
      e();
    }
  }

  function a(e) {
    if (v().getId()) {
      if (n) t().i("队列正在发送中");else {
        n = !0;
        s(function () {
          n = !1;
          "function" == typeof e && e();
        });
      }
    } else {
      t().i("获取id标识失败，暂缓发送");
      "function" == typeof e && e();
    }
  }

  function u() {
    this.send = function (e, t, n) {
      e ? this.add(e, t, function () {
        a(n);
      }) : a(n);
    };

    this.add = function (e, t, n) {
      o(e, t, n);
    };

    this.load = function () {
      var e = O().get(f.REQUESTS);
      e && e.length && e.forEach(function (e) {
        r.enqueue(e);
      });
      O().remove(f.REQUESTS);
    };

    this.save = function () {
      O().set(f.REQUESTS, l.clone(r.items()));
      r.clear();
    };
  }

  return function () {
    e || (e = new u());
    return e;
  };
}(),
    oe = function () {
  var e = null,
      i = null;

  function r() {
    this.setUserInfo = function (e) {
      i = e;
    };

    this.update = function () {
      e(i) || a.getUserInfo(function (t) {
        e(t);
      });
    };

    function e(e) {
      if (e && "object" == typeof e) {
        var i = O().get(f.USER_INFO);
        i && l.deepEqual(e, i) || function (e, i) {
          var r = n().appKey(),
              o = a.getSdkType(),
              s = v().getId(),
              u = v().getIdType();
          if (!(r && o && s && u)) return;
          var c = {
            ak: n().appKey(),
            sdt: a.getSdkType(),
            uin: e.nickName,
            uia: e.avatar || e.avatarUrl,
            uig: e.gender,
            uit: e.country,
            uip: e.province,
            uic: e.city,
            uil: e.language,
            id: v().getId(),
            it: v().getIdType(),
            age: e.age,
            cln: e.constellation
          },
              p = JSON.stringify(c);
          p = $(p);
          a.request({
            url: f.ENDPOINT + f.USERINFO_URL,
            method: "POST",
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: "ui=" + p,
            success: function success(n) {
              t().v("用户信息上传成功: ", e);
              i && i(n && n.data && 200 === n.data.code);
            },
            fail: function fail() {
              t().e("用户信息上传失败: ", e);
              i && i(!1);
            }
          });
        }(e, function (t) {
          t && O().set(f.USER_INFO, e);
        });
        return !0;
      }

      return !1;
    }
  }

  return function () {
    e || (e = new r());
    return e;
  };
}();

function se(e, t) {
  this.id = e;
  this.ts = Date.now();
  var n = typeof t;
  if ("string" === n && t) this[e] = t;else if ("object" === n) for (var i in t) {
    ({}).hasOwnProperty.call(t, i) && (this[i] = t[i]);
  }
}

function ae() {
  var e = !1,
      i = !1,
      r = 0;

  this.init = function (i) {
    t().v("sdk version: " + f.IMPL_VERSION);
    e ? t().v("Lib重复实例化") : O().load(function () {
      t().v("cache初始化成功: ", O().getAll());
      !function () {
        v().setUseOpenid && v().setUseOpenid(n().useOpenid());
        v().init(function () {
          R.instance().init();
          t().v("Header初始化成功");
        });
      }();
      e = !0;
      "function" == typeof i && i();
      t().tip("SDK集成成功");
    });
  };

  this.resume = function (r) {
    if (e && !i) {
      t().v("showOptions: ", r);
      var o;
      i = !0;
      n().enableVerify() && r && r.query && (o = r.query._ttn, q = o || q);

      this._resume(r);
    }
  };

  this._resume = function (e) {
    re().load();
    var i = U().resume(e),
        r = U().getCurrentSessionId();
    E().setSessionId(r);
    i && re().add(b, {}, function () {
      v().setUseOpenid && v().setUseOpenid(n().useOpenid());

      if (n().useOpenid() && n().autoGetOpenid() && !v().getId()) {
        t().v("get id async");
        o(10, 3e3);
      } else {
        t().v("session auto send");
        re().send();
      }
    });

    function o(e, i) {
      v().getId() || e <= 0 || v().getOpenIdAsync(n().appKey(), function (n) {
        if (n) {
          t().v("获取id成功");
          re().send();
        } else {
          t().v("获取openid失败,启动重试,剩余可用次数", e - 1);
          setTimeout(function () {
            o(e - 1, i);
          }, i);
        }
      });
    }
  };

  this.pause = function (o) {
    if (e) {
      i = !1;
      r = 0;
      U().pause();
      n().uploadUserInfo() && oe().update();
      re().send(k, {}, function () {
        re().save();
        O().save();
        t().v("cache save success");
        "function" == typeof o && o();
      });
    }
  };

  this.setOpenid = function (e) {
    t().v("setOpenId: %s", e);
    v().setOpenid(e);
    re().send();
  };

  this.setUnionid = function (e) {
    t().v("setUnionid: %s", e);
    v().setUnionid(e);
  };

  this.setUserid = function (e, n) {
    t().v("setUserid: %s", e, n);
    v().setUserid(e, n);
  };

  this.setUserInfo = function (e) {
    t().v("setUserInfo: %s", e);
    oe().setUserInfo(e);
  };

  this.setAnonymousid = function (e) {
    t().v("setAnonymousId: %s", e);
    v().setAnonymousid(e);
    re().send();
  };

  this.setAppVersion = function (e) {
    e && "string" != typeof e ? t().w("setAppVersion方法只接受字符串类型参数") : R.instance().setAppVersion(e);
  };

  this.setAlipayUserid = function (e) {
    if (e && "string" != typeof e) t().w("setAlipayUserid方法只接受字符串类型参数");else {
      t().v("setAlipayUserid: %s", e);
      v().setAlipayUserid(e);
    }
  };

  this.setDeviceId = function (e) {
    if ("string" == typeof e) {
      v().setDeviceId(e);
      return e;
    }
  };

  this.setSuperProperty = function (e) {
    if (e && "string" != typeof e) t().w("超级属性只支持字符串类型");else {
      var n = this;

      if (R.instance().getSuperProperty() !== e) {
        R.instance().setSuperProperty(e);
        n.pause(function () {
          n.resume();
        });
      }
    }
  };

  this.trackEvent = function (n, i) {
    if (e) {
      t().v("event: ", n, i);

      if (function (e, n) {
        if (!e || "string" != typeof e) {
          t().e('please check trackEvent id. id should be "string" and not null');
          return !1;
        }

        var i = ["id", "ts", "du"],
            r = {};
        i.forEach(function (e) {
          r[e] = 1;
        });

        if (r[e]) {
          t().e("eventId不能与以下保留字冲突: " + i.join(","));
          return !1;
        }

        if (e.length > f.MAX_EVENTID_LENGTH) {
          t().e("The maximum length of event id shall not exceed " + f.MAX_EVENTID_LENGTH);
          return !1;
        }

        if (n && ("object" != typeof n || Array.isArray(n)) && "string" != typeof n) {
          t().e("please check trackEvent properties. properties should be string or object(not include Array)");
          return !1;
        }

        if ("object" == typeof n) {
          var o = 0;

          for (var s in n) {
            if ({}.hasOwnProperty.call(n, s)) {
              if (s.length > f.MAX_PROPERTY_KEY_LENGTH) {
                t().e("The maximum length of property key shall not exceed " + f.MAX_PROPERTY_KEY_LENGTH);
                return !1;
              }

              if (o >= f.MAX_PROPERTY_KEYS_COUNT) {
                t().e("The maximum count of properties shall not exceed " + f.MAX_PROPERTY_KEYS_COUNT);
                return !1;
              }

              if (r[s]) {
                t().e("属性中的key不能与以下保留字冲突: " + i.join(","));
                return !1;
              }

              o += 1;
            }
          }
        }

        return !0;
      }(n, i)) {
        var o = new se(n, i);
        E().addEvent(o);
        var s = !!G(),
            a = s ? 0 : f.EVENT_SEND_DEFAULT_INTERVAL,
            u = Date.now();

        if (function (e, t) {
          return "number" != typeof r || "number" != typeof t || r <= 0 || e - r > t;
        }(u, a)) {
          r = u;
          re().send(D, {
            noCache: s
          }, function () {});
        }
      }
    }
  };

  this.trackShare = function (n) {
    if (e) try {
      if (a.getSdkType().indexOf("game") > -1) {
        n = m().add(n, !0);
        t().v("shareQuery: ", n);
      } else {
        n = m().add(n, !1);
        t().v("sharePath: ", n.path);
      }
    } catch (e) {
      t().v("shareAppMessage: ", e);
    }
    return n;
  };

  this.trackPageStart = function (t) {
    e && _().addPageStart(t);
  };

  this.trackPageEnd = function (t) {
    e && _().addPageEnd(t);
  };

  this.onShareAppMessage = function (e) {
    var t = this;
    a.onShareAppMessage(function () {
      return t.trackShare(e());
    });
  };

  this.shareAppMessage = function (e) {
    this.trackShare(e);
    a.shareAppMessage(e);
  };
}

var ue = [];

function ce() {}

ce.prototype = {
  createMethod: function createMethod(e, n, i) {
    try {
      e[n] = i && i[n] ? function () {
        return i[n].apply(i, arguments);
      } : function () {
        ue.push([n, [].slice.call(arguments)]);
      };
    } catch (e) {
      t().v("create method errror: ", e);
    }
  },
  installApi: function installApi(e, n) {
    try {
      var i,
          r,
          o = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage,setUserInfo".split(",");

      for (i = 0, r = o.length; i < r; i++) {
        this.createMethod(e, o[i], n);
      }

      if (n) for (i = 0, r = ue.length; i < r; i++) {
        var s = ue[i];

        try {
          n[s[0]].apply(n, s[1]);
        } catch (e) {
          t().v("impl[v[0]].apply error: ", s[0], e);
        }
      }
    } catch (e) {
      t().v("install api errror: ", e);
    }
  }
};
var fe = [f.ENDPOINT, f.ENDPOINTB];

function pe(e, n) {
  var i, r;
  0 === e || 1 === e && n ? i = f.ENDPOINT : 2 === e && n ? i = f.ENDPOINTB : n && (i = fe[e]);

  if (e >= fe.length || n) {
    n && (r = i, f.ENDPOINT = r);
    n && t().v("命中可用服务", i);
    !n && t().tip_w("未命中可用服务");
    return !1;
  }

  a.request({
    url: f.ENDPOINT + "/uminiprogram_logs/ckdh",
    success: function success(t) {
      200 === (t.code || t.status || t.statusCode) && t.data && 200 === t.data.code ? pe(e + 1, !0) : pe(e + 1, !1);
    },
    fail: function fail() {
      pe(e + 1, !1);
    }
  });
}

var le = {
  init: function init(e) {
    f.ENDPOINTB && setTimeout(function () {
      pe(0, !1);
    }, e);
  }
},
    de = new ce(),
    he = {
  _inited: !1,
  _log: t(),
  preinit: function preinit(e) {
    if (e && "object" == typeof e) for (var t in e) {
      f[t] = e[t];
    }
    return f;
  },
  use: function use(e, t) {
    e && l.isFunction(e.install) ? e.install(he, t) : l.isFunction(e) && e(he, t);
    return he;
  },
  messager: r,
  init: function init(e) {
    if (this._inited) t().v("已经实例过，请避免重复初始化");else if (e) {
      if (e.appKey) {
        "boolean" != typeof e.useOpenid && (e.useOpenid = !0);
        n().set(e);
        t().setDebug(e.debug);
        this._inited = !0;
        var i = this;
        r.emit(r.messageType.CONFIG_LOADED, e);

        try {
          var o = new ae();
          t().v("成功创建Lib对象");
          if (!a.getContext()) return;
          o.init(function () {
            t().v("Lib对象初始化成功");
            de.installApi(i, o);
            t().v("安装Lib接口成功");
            r.emit(r.messageType.UMA_LIB_INITED, e);
          });
          le.init(3e3);
        } catch (e) {
          t().w("创建Lib对象异常: " + e);
        }
      } else t().err("请确保传入正确的appkey");
    } else t().err("请正确设置相关信息！");
  }
};

try {
  de.installApi(he, null);
} catch (e) {
  t().w("uma赋值异常: ", e);
}

var ge = "https://ucc.umeng.com/v1/mini/fetch",
    ve = "https://pslog.umeng.com/mini_ablog",
    _e = "2.7.2-beta.17928427",
    ye = "none",
    me = {},
    Se = Array.isArray;

me.isArray = Se || function (e) {
  return "[object Array]" === toString.call(e);
};

me.isObject = function (e) {
  return e === Object(e) && !me.isArray(e);
};

me.isEmptyObject = function (e) {
  if (me.isObject(e)) {
    for (var t in e) {
      if (hasOwnProperty.call(e, t)) return !1;
    }

    return !0;
  }

  return !1;
};

me.isUndefined = function (e) {
  return void 0 === e;
};

me.isString = function (e) {
  return "[object String]" === toString.call(e);
};

me.isDate = function (e) {
  return "[object Date]" === toString.call(e);
};

me.isNumber = function (e) {
  return "[object Number]" === toString.call(e);
};

me.each = function (e, t, n) {
  if (null != e) {
    var i = {},
        r = Array.prototype.forEach;
    if (r && e.forEach === r) e.forEach(t, n);else if (e.length === +e.length) {
      for (var o = 0, s = e.length; o < s; o++) {
        if (o in e && t.call(n, e[o], o, e) === i) return;
      }
    } else for (var a in e) {
      if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return;
    }
  }
};

me.buildQuery = function (e, t) {
  var n,
      i,
      r = [];
  void 0 === t && (t = "&");
  me.each(e, function (e, t) {
    n = encodeURIComponent(e.toString());
    i = encodeURIComponent(t);
    r[r.length] = i + "=" + n;
  });
  return r.join(t);
};

me.JSONDecode = function (e) {
  if (e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      console.error("JSONDecode error", e);
    }

    return null;
  }
};

me.JSONEncode = function (e) {
  try {
    return JSON.stringify(e);
  } catch (e) {
    console.error("JSONEncode error", e);
  }
};

var Ie = Object.create(null);

function Oe(e) {
  t().v("开始构建 fetch body");
  a.getSystemInfo(function (t) {
    a.getNetworkInfo(function (i) {
      var r = (i = i || {}).networkType;
      r = r === ye ? "unknown" : r.toUpperCase();
      Ie.access = r;
      !function (e, t) {
        var i = e.brand || "";
        Ie.deviceType = "Phone";
        Ie.sdkVersion = _e;
        Ie.appkey = n().appKey();
        Ie.sdkType = a.getSdkType();
        Ie.umid = v().getId();

        if (e) {
          Ie.language = e.language || "";
          Ie.os = e.OS;
          Ie.osVersion = e.OSVersion;
          Ie.deviceName = e.deviceName;
          Ie.platformVersion = e.platformVersion;
          Ie.platformSdkVersion = e.platformSDKVersion;
          Ie.deviceBrand = i;
          var r = e.resolution.split("*");

          if (me.isArray(r)) {
            Ie.resolutionHeight = Number(r[0]);
            Ie.resolutionWidth = Number(r[1]);
          }
        }

        !function (e) {
          if (e) {
            Ie.installTime = e.install_datetime && Date.parse(e.install_datetime);
            Ie.scene = e.install_scene;
            Ie.channel = e.install_channel;
            Ie.campaign = e.install_campaign;
          }
        }(te.getImpObj());
        t && t(Ie);
      }(t, e);
    });
  });
}

var Ee = Object.create(null),
    Te = null,
    Ne = !1,
    Ae = {
  minFetchIntervalSeconds: 43200
};

function be(e) {
  e && me.each(e, function (e) {
    Ee[e.k] = e;
  });
}

function ke() {
  var e = this;
  this.STORAGE_NAME = null;
  r.once(r.messageType.CONFIG_LOADED, function (n) {
    t().v("云配初始化开始...");
    e.init(n);
  });
}

ke.prototype = {
  setDefaultValues: function setDefaultValues(e) {
    Ne && me.isObject(e) && me.each(e, function (e, t) {
      Ee[t] && Ee[t].v || (Ee[t] = {
        v: e
      });
    });
  },
  getValue: function getValue(e) {
    t().v("从配置项中读取 value, 当前配置为: ", Ee);
    t().v("待读取的 key : ", e);

    try {
      if (!Ne) return;
      var i = Ee[e] || {};
      t().v("读取相应配置ing..., 结果为: ", i);

      if (me.isNumber(i.e) && me.isNumber(i.g)) {
        t().v("读取到相应配置, 开始数据上报...");
        !function (e) {
          var i = {
            appkey: n().appKey(),
            sdkType: a.getSdkType(),
            expId: e && e.e,
            groupId: e && e.g,
            clientTs: Date.now(),
            key: e && e.k,
            value: e && e.v,
            umid: v().getId()
          };

          try {
            a.request({
              url: ve,
              method: "POST",
              data: [i],
              success: function success(e) {
                e && 200 === e.statusCode ? t().v("上传数据成功", i) : t().w("ablog 请求成功, 返回结果异常 ", e);
              },
              fail: function fail(e) {
                t().w("ablog 请求数据错误 ", i, e);
              }
            });
          } catch (e) {
            t().w("urequest 调用错误", e);
          }
        }(i);
      }

      return i.v;
    } catch (n) {
      t().w("getValue error, key: ", e);
    }
  },
  active: function active(e) {
    try {
      if (!Ne) return;
      var n, i;
      e && e.params && (n = e.params);
      e && e.callback && (i = e.callback);
      t().v("激活配置项: ", n);

      if (n) {
        t().v("本地已缓存的配置项: ", Ee);
        be(n);
        t().v("合并后的配置项: ", Ee);
        i && i(Ee);
        t().v("active 结束");
      } else {
        t().v("配置项为空!! 读取本地配置...");
        a.getStorage(this.STORAGE_NAME, function (e) {
          if (e) {
            be((e = me.JSONDecode(e) || {}).params);
            t().v("当前本地配置项为: ", Ee);
            i && i(Ee);
            t().v("active 结束");
          } else t().v("当前本地配置项为空, 退出激活");
        });
      }
    } catch (e) {
      t().w("SDK active 错误", e);
    }
  },
  init: function init(e) {
    if (e.appKey) {
      Te = e.appKey;
      this.STORAGE_NAME = "um_remote_config_{{" + Te + "}}";
    }

    if (Te) {
      if (Ne) t().w("SDK 已经初始化, 请避免重复初始化");else {
        Ne = !0;
        this.setOptions(e);
        this.active();
      }
    } else t().err("请检查您的小程序 appKey, appKey 不能为空");
  },
  setOptions: function setOptions(e) {
    if (me.isObject(e)) {
      var t = e.minFetchIntervalSeconds;
      me.isNumber(t) && (Ae.minFetchIntervalSeconds = Math.max(t, 5));
    }
  },
  fetch: function fetch(e) {
    if (Ne && this.STORAGE_NAME) {
      var n, i;
      e && e.active && (n = e.active);
      e && e.callback && (i = e.callback);
      var r = this;
      a.getStorage(this.STORAGE_NAME, function (e) {
        t().v("开始读缓存 data is ", e);

        if ((e = me.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * Ae.minFetchIntervalSeconds) {
          t().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch");
          i && i(e.params);
        } else Oe(function (e) {
          t().v("缓存数据不存在, 构建 fetch body :", e);

          try {
            a.request({
              url: ge,
              method: "POST",
              data: e,
              success: function success(e) {
                if (e && 200 === e.statusCode && e.data && e.data.cc) {
                  t().v("fetch 请求成功, 响应数据: ", e.data);
                  var o = Object.create(null);
                  me.each(e.data.cc, function (e) {
                    o[e.k] = e;
                  });
                  var s = {
                    ts: Date.now(),
                    params: o
                  };
                  t().v("开始缓存 fetch 请求的云配置结果...");
                  a.setStorage(r.STORAGE_NAME, me.JSONEncode(s), function (e) {
                    t().v("缓存云配置成功, 缓存数据为: ", s);
                    t().v("缓存云配置成功, 成功消息为: ", e);
                    t().v("云配拉取数据是否自动激活: ", n);

                    if (e && n) {
                      t().v("激活云配置...");
                      r.active({
                        params: o,
                        callback: i
                      });
                    }
                  });
                } else {
                  t().w("fetch 请求成功,返回结果异常 ", e.data);
                  i && i();
                }
              },
              fail: function fail(n) {
                t().w("fetch请求数据错误 ", e, n);
                i && i();
              }
            });
          } catch (e) {
            t().w("urequest调用错误", e);
          }
        });
      });
    }
  }
};
var De = {
  install: function install(e, t) {
    e.rc || (e.rc = new ke());
    e.messager.once(e.messager.messageType.CONFIG_LOADED, function () {
      e._log.v("plugin rc installed");
    });
    return e.rc;
  }
},
    we = "_um",
    Re = "revenue",
    Ue = "stage",
    Pe = "level",
    Ce = "running",
    Le = "end",
    Me = "init",
    je = "set",
    Ve = [we, Ue, "start"].join(".");

function xe(e) {
  var t = {};

  for (var n in e) {
    var i = e[n];
    if ("object" == typeof i) for (var r in i) {
      t[n + "." + r] = i[r];
    } else t[n] = i;
  }

  return t;
}

var qe = {
  install: function install(e, t) {
    e.revenue = function (t) {
      e.trackEvent([we, Re, t.group].join("."), xe(t));
    };

    var n = 0;
    e.stage = {
      onStart: function onStart(t) {
        n = Date.now();
        e.trackEvent(Ve, xe(t));
      },
      onEnd: function onEnd(t) {
        "number" != typeof t._um_sdu && (t._um_sdu = 0 !== n ? Date.now() - n : 0);
        e.trackEvent([we, Ue, Le, t.event].join("."), xe(t));
      },
      onRunning: function onRunning(t) {
        e.trackEvent([we, Ue, Ce, t.event].join("."), xe(t));
      }
    };
    e.level = {
      onInitLevel: function onInitLevel(t) {
        e.trackEvent([we, Pe, Me].join("."), xe(t));
      },
      onSetLevel: function onSetLevel(t) {
        e.trackEvent([we, Pe, je].join("."), xe(t));
      }
    };
    e.messager.once(e.messager.messageType.CONFIG_LOADED, function () {
      e._log.v("plugin game-ext installed");
    });
    return e;
  }
},
    Ge = a.getContext();

if (void 0 !== Ge) {
  Ge.onShow(function (e) {
    t().v("game onShow: ", e);
    n = e.query, y = n;
    var n;
    he.resume(e, !0);
  });
  Ge.onHide(function () {
    t().v("game onHide");
    he.pause();
  });
}

var Fe = he.init;

he.init = function (e) {
  if (e && e.useOpenid) {
    t().tip_w(t().repeat("!"));
    t().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取");
    t().tip_w(t().repeat("!"));
  }

  he.resume({});
  Fe.call(he, e);
};

he.use(De);
he.use(qe);
Ge && (Ge.uma = he);
var _default = he;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();