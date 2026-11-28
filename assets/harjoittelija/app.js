function pp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var xl = { exports: {} }, Xs = {}, jl = { exports: {} }, Ke = {};
var Rd;
function vp() {
  if (Rd) return Ke;
  Rd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(T) {
    return T === null || typeof T != "object" ? null : (T = y && T[y] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function E(T, S, te) {
    this.props = T, this.context = S, this.refs = w, this.updater = te || C;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(T, S) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, S, "setState");
  }, E.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function D() {
  }
  D.prototype = E.prototype;
  function P(T, S, te) {
    this.props = T, this.context = S, this.refs = w, this.updater = te || C;
  }
  var B = P.prototype = new D();
  B.constructor = P, b(B, E.prototype), B.isPureReactComponent = !0;
  var z = Array.isArray, V = Object.prototype.hasOwnProperty, Z = { current: null }, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(T, S, te) {
    var he, Ce = {}, G = null, me = null;
    if (S != null) for (he in S.ref !== void 0 && (me = S.ref), S.key !== void 0 && (G = "" + S.key), S) V.call(S, he) && !F.hasOwnProperty(he) && (Ce[he] = S[he]);
    var Te = arguments.length - 2;
    if (Te === 1) Ce.children = te;
    else if (1 < Te) {
      for (var De = Array(Te), ie = 0; ie < Te; ie++) De[ie] = arguments[ie + 2];
      Ce.children = De;
    }
    if (T && T.defaultProps) for (he in Te = T.defaultProps, Te) Ce[he] === void 0 && (Ce[he] = Te[he]);
    return { $$typeof: s, type: T, key: G, ref: me, props: Ce, _owner: Z.current };
  }
  function K(T, S) {
    return { $$typeof: s, type: T.type, key: S, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function X(T) {
    return typeof T == "object" && T !== null && T.$$typeof === s;
  }
  function re(T) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(te) {
      return S[te];
    });
  }
  var we = /\/+/g;
  function W(T, S) {
    return typeof T == "object" && T !== null && T.key != null ? re("" + T.key) : S.toString(36);
  }
  function le(T, S, te, he, Ce) {
    var G = typeof T;
    (G === "undefined" || G === "boolean") && (T = null);
    var me = !1;
    if (T === null) me = !0;
    else switch (G) {
      case "string":
      case "number":
        me = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case s:
          case i:
            me = !0;
        }
    }
    if (me) return me = T, Ce = Ce(me), T = he === "" ? "." + W(me, 0) : he, z(Ce) ? (te = "", T != null && (te = T.replace(we, "$&/") + "/"), le(Ce, S, te, "", function(ie) {
      return ie;
    })) : Ce != null && (X(Ce) && (Ce = K(Ce, te + (!Ce.key || me && me.key === Ce.key ? "" : ("" + Ce.key).replace(we, "$&/") + "/") + T)), S.push(Ce)), 1;
    if (me = 0, he = he === "" ? "." : he + ":", z(T)) for (var Te = 0; Te < T.length; Te++) {
      G = T[Te];
      var De = he + W(G, Te);
      me += le(G, S, te, De, Ce);
    }
    else if (De = x(T), typeof De == "function") for (T = De.call(T), Te = 0; !(G = T.next()).done; ) G = G.value, De = he + W(G, Te++), me += le(G, S, te, De, Ce);
    else if (G === "object") throw S = String(T), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.");
    return me;
  }
  function U(T, S, te) {
    if (T == null) return T;
    var he = [], Ce = 0;
    return le(T, he, "", "", function(G) {
      return S.call(te, G, Ce++);
    }), he;
  }
  function ue(T) {
    if (T._status === -1) {
      var S = T._result;
      S = S(), S.then(function(te) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = te);
      }, function(te) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = te);
      }), T._status === -1 && (T._status = 0, T._result = S);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var fe = { current: null }, Q = { transition: null }, ce = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Q, ReactCurrentOwner: Z };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ke.Children = { map: U, forEach: function(T, S, te) {
    U(T, function() {
      S.apply(this, arguments);
    }, te);
  }, count: function(T) {
    var S = 0;
    return U(T, function() {
      S++;
    }), S;
  }, toArray: function(T) {
    return U(T, function(S) {
      return S;
    }) || [];
  }, only: function(T) {
    if (!X(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Ke.Component = E, Ke.Fragment = o, Ke.Profiler = d, Ke.PureComponent = P, Ke.StrictMode = u, Ke.Suspense = k, Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ce, Ke.act = ee, Ke.cloneElement = function(T, S, te) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var he = b({}, T.props), Ce = T.key, G = T.ref, me = T._owner;
    if (S != null) {
      if (S.ref !== void 0 && (G = S.ref, me = Z.current), S.key !== void 0 && (Ce = "" + S.key), T.type && T.type.defaultProps) var Te = T.type.defaultProps;
      for (De in S) V.call(S, De) && !F.hasOwnProperty(De) && (he[De] = S[De] === void 0 && Te !== void 0 ? Te[De] : S[De]);
    }
    var De = arguments.length - 2;
    if (De === 1) he.children = te;
    else if (1 < De) {
      Te = Array(De);
      for (var ie = 0; ie < De; ie++) Te[ie] = arguments[ie + 2];
      he.children = Te;
    }
    return { $$typeof: s, type: T.type, key: Ce, ref: G, props: he, _owner: me };
  }, Ke.createContext = function(T) {
    return T = { $$typeof: p, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: f, _context: T }, T.Consumer = T;
  }, Ke.createElement = L, Ke.createFactory = function(T) {
    var S = L.bind(null, T);
    return S.type = T, S;
  }, Ke.createRef = function() {
    return { current: null };
  }, Ke.forwardRef = function(T) {
    return { $$typeof: h, render: T };
  }, Ke.isValidElement = X, Ke.lazy = function(T) {
    return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: ue };
  }, Ke.memo = function(T, S) {
    return { $$typeof: j, type: T, compare: S === void 0 ? null : S };
  }, Ke.startTransition = function(T) {
    var S = Q.transition;
    Q.transition = {};
    try {
      T();
    } finally {
      Q.transition = S;
    }
  }, Ke.unstable_act = ee, Ke.useCallback = function(T, S) {
    return fe.current.useCallback(T, S);
  }, Ke.useContext = function(T) {
    return fe.current.useContext(T);
  }, Ke.useDebugValue = function() {
  }, Ke.useDeferredValue = function(T) {
    return fe.current.useDeferredValue(T);
  }, Ke.useEffect = function(T, S) {
    return fe.current.useEffect(T, S);
  }, Ke.useId = function() {
    return fe.current.useId();
  }, Ke.useImperativeHandle = function(T, S, te) {
    return fe.current.useImperativeHandle(T, S, te);
  }, Ke.useInsertionEffect = function(T, S) {
    return fe.current.useInsertionEffect(T, S);
  }, Ke.useLayoutEffect = function(T, S) {
    return fe.current.useLayoutEffect(T, S);
  }, Ke.useMemo = function(T, S) {
    return fe.current.useMemo(T, S);
  }, Ke.useReducer = function(T, S, te) {
    return fe.current.useReducer(T, S, te);
  }, Ke.useRef = function(T) {
    return fe.current.useRef(T);
  }, Ke.useState = function(T) {
    return fe.current.useState(T);
  }, Ke.useSyncExternalStore = function(T, S, te) {
    return fe.current.useSyncExternalStore(T, S, te);
  }, Ke.useTransition = function() {
    return fe.current.useTransition();
  }, Ke.version = "18.3.1", Ke;
}
var $d;
function iu() {
  return $d || ($d = 1, jl.exports = vp()), jl.exports;
}
var Od;
function kp() {
  if (Od) return Xs;
  Od = 1;
  var s = iu(), i = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, k, j) {
    var v, y = {}, x = null, C = null;
    j !== void 0 && (x = "" + j), k.key !== void 0 && (x = "" + k.key), k.ref !== void 0 && (C = k.ref);
    for (v in k) u.call(k, v) && !f.hasOwnProperty(v) && (y[v] = k[v]);
    if (h && h.defaultProps) for (v in k = h.defaultProps, k) y[v] === void 0 && (y[v] = k[v]);
    return { $$typeof: i, type: h, key: x, ref: C, props: y, _owner: d.current };
  }
  return Xs.Fragment = o, Xs.jsx = p, Xs.jsxs = p, Xs;
}
var Id;
function yp() {
  return Id || (Id = 1, xl.exports = kp()), xl.exports;
}
var a = yp(), _ = iu(), ja = {}, Sl = { exports: {} }, Xt = {}, wl = { exports: {} }, El = {};
var Fd;
function gp() {
  return Fd || (Fd = 1, (function(s) {
    function i(Q, ce) {
      var ee = Q.length;
      Q.push(ce);
      e: for (; 0 < ee; ) {
        var T = ee - 1 >>> 1, S = Q[T];
        if (0 < d(S, ce)) Q[T] = ce, Q[ee] = S, ee = T;
        else break e;
      }
    }
    function o(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function u(Q) {
      if (Q.length === 0) return null;
      var ce = Q[0], ee = Q.pop();
      if (ee !== ce) {
        Q[0] = ee;
        e: for (var T = 0, S = Q.length, te = S >>> 1; T < te; ) {
          var he = 2 * (T + 1) - 1, Ce = Q[he], G = he + 1, me = Q[G];
          if (0 > d(Ce, ee)) G < S && 0 > d(me, Ce) ? (Q[T] = me, Q[G] = ee, T = G) : (Q[T] = Ce, Q[he] = ee, T = he);
          else if (G < S && 0 > d(me, ee)) Q[T] = me, Q[G] = ee, T = G;
          else break e;
        }
      }
      return ce;
    }
    function d(Q, ce) {
      var ee = Q.sortIndex - ce.sortIndex;
      return ee !== 0 ? ee : Q.id - ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      s.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, h = p.now();
      s.unstable_now = function() {
        return p.now() - h;
      };
    }
    var k = [], j = [], v = 1, y = null, x = 3, C = !1, b = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(Q) {
      for (var ce = o(j); ce !== null; ) {
        if (ce.callback === null) u(j);
        else if (ce.startTime <= Q) u(j), ce.sortIndex = ce.expirationTime, i(k, ce);
        else break;
        ce = o(j);
      }
    }
    function z(Q) {
      if (w = !1, B(Q), !b) if (o(k) !== null) b = !0, ue(V);
      else {
        var ce = o(j);
        ce !== null && fe(z, ce.startTime - Q);
      }
    }
    function V(Q, ce) {
      b = !1, w && (w = !1, D(L), L = -1), C = !0;
      var ee = x;
      try {
        for (B(ce), y = o(k); y !== null && (!(y.expirationTime > ce) || Q && !re()); ) {
          var T = y.callback;
          if (typeof T == "function") {
            y.callback = null, x = y.priorityLevel;
            var S = T(y.expirationTime <= ce);
            ce = s.unstable_now(), typeof S == "function" ? y.callback = S : y === o(k) && u(k), B(ce);
          } else u(k);
          y = o(k);
        }
        if (y !== null) var te = !0;
        else {
          var he = o(j);
          he !== null && fe(z, he.startTime - ce), te = !1;
        }
        return te;
      } finally {
        y = null, x = ee, C = !1;
      }
    }
    var Z = !1, F = null, L = -1, K = 5, X = -1;
    function re() {
      return !(s.unstable_now() - X < K);
    }
    function we() {
      if (F !== null) {
        var Q = s.unstable_now();
        X = Q;
        var ce = !0;
        try {
          ce = F(!0, Q);
        } finally {
          ce ? W() : (Z = !1, F = null);
        }
      } else Z = !1;
    }
    var W;
    if (typeof P == "function") W = function() {
      P(we);
    };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), U = le.port2;
      le.port1.onmessage = we, W = function() {
        U.postMessage(null);
      };
    } else W = function() {
      E(we, 0);
    };
    function ue(Q) {
      F = Q, Z || (Z = !0, W());
    }
    function fe(Q, ce) {
      L = E(function() {
        Q(s.unstable_now());
      }, ce);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, s.unstable_continueExecution = function() {
      b || C || (b = !0, ue(V));
    }, s.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(k);
    }, s.unstable_next = function(Q) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var ce = 3;
          break;
        default:
          ce = x;
      }
      var ee = x;
      x = ce;
      try {
        return Q();
      } finally {
        x = ee;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(Q, ce) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var ee = x;
      x = Q;
      try {
        return ce();
      } finally {
        x = ee;
      }
    }, s.unstable_scheduleCallback = function(Q, ce, ee) {
      var T = s.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? T + ee : T) : ee = T, Q) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = ee + S, Q = { id: v++, callback: ce, priorityLevel: Q, startTime: ee, expirationTime: S, sortIndex: -1 }, ee > T ? (Q.sortIndex = ee, i(j, Q), o(k) === null && Q === o(j) && (w ? (D(L), L = -1) : w = !0, fe(z, ee - T))) : (Q.sortIndex = S, i(k, Q), b || C || (b = !0, ue(V))), Q;
    }, s.unstable_shouldYield = re, s.unstable_wrapCallback = function(Q) {
      var ce = x;
      return function() {
        var ee = x;
        x = ce;
        try {
          return Q.apply(this, arguments);
        } finally {
          x = ee;
        }
      };
    };
  })(El)), El;
}
var Dd;
function xp() {
  return Dd || (Dd = 1, wl.exports = gp()), wl.exports;
}
var zd;
function jp() {
  if (zd) return Xt;
  zd = 1;
  var s = iu(), i = xp();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function x(e) {
    return k.call(y, e) ? !0 : k.call(v, e) ? !1 : j.test(e) ? y[e] = !0 : (v[e] = !0, !1);
  }
  function C(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, n, r) {
    if (t === null || typeof t > "u" || C(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function w(e, t, n, r, l, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function P(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      D,
      P
    );
    E[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(D, P);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(D, P);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, n, r) {
    var l = E.hasOwnProperty(t) ? E[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, r) && (n = null), r || l === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var z = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = /* @__PURE__ */ Symbol.for("react.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.provider"), re = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, T;
  function S(e) {
    if (T === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
  }
  var te = !1;
  function he(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (I) {
          var r = I;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (I) {
          r = I;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          r = I;
        }
        e();
      }
    } catch (I) {
      if (I && r && typeof I.stack == "string") {
        for (var l = I.stack.split(`
`), c = r.stack.split(`
`), m = l.length - 1, g = c.length - 1; 1 <= m && 0 <= g && l[m] !== c[g]; ) g--;
        for (; 1 <= m && 0 <= g; m--, g--) if (l[m] !== c[g]) {
          if (m !== 1 || g !== 1)
            do
              if (m--, g--, 0 > g || l[m] !== c[g]) {
                var N = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
              }
            while (1 <= m && 0 <= g);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? S(e) : "";
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return S(e.type);
      case 16:
        return S("Lazy");
      case 13:
        return S("Suspense");
      case 19:
        return S("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = he(e.type, !1), e;
      case 11:
        return e = he(e.type.render, !1), e;
      case 1:
        return e = he(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case Z:
        return "Portal";
      case K:
        return "Profiler";
      case L:
        return "StrictMode";
      case W:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case re:
        return (e.displayName || "Context") + ".Consumer";
      case X:
        return (e._context.displayName || "Context") + ".Provider";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case U:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return G(t);
      case 8:
        return t === L ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function De(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ie(e) {
    var t = De(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(m) {
        r = "" + m, c.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(m) {
        r = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function de(e) {
    e._valueTracker || (e._valueTracker = ie(e));
  }
  function oe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = De(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ye(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function _e(e, t) {
    var n = t.checked;
    return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ve(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function ge(e, t) {
    ve(e, t);
    var n = Te(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Le(e, t.type, n) : t.hasOwnProperty("defaultValue") && Le(e, t.type, Te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Me(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Le(e, t, n) {
    (t !== "number" || ye(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Oe = Array.isArray;
  function Ge(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ie(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Qe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Oe(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Te(n) };
  }
  function at(e, t) {
    var n = Te(t.value), r = Te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function $t(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function it(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Be(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? it(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var st, Mt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (st = st || document.createElement("div"), st.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = st.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function zt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var _t = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_t).forEach(function(e) {
    Ve.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), _t[t] = _t[e];
    });
  });
  function Ye(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _t.hasOwnProperty(e) && _t[e] ? ("" + t).trim() : t + "px";
  }
  function A(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ye(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var H = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function se(e, t) {
    if (t) {
      if (H[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function be(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Re = null;
  function We(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var tt = null, xt = null, ft = null;
  function Tn(e) {
    if (e = Os(e)) {
      if (typeof tt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Or(t), tt(e.stateNode, e.type, t));
    }
  }
  function fi(e) {
    xt ? ft ? ft.push(e) : ft = [e] : xt = e;
  }
  function hs() {
    if (xt) {
      var e = xt, t = ft;
      if (ft = xt = null, Tn(e), t) for (e = 0; e < t.length; e++) Tn(t[e]);
    }
  }
  function dr(e, t) {
    return e(t);
  }
  function ms() {
  }
  var hi = !1;
  function Ai(e, t, n) {
    if (hi) return e(t, n);
    hi = !0;
    try {
      return dr(e, t, n);
    } finally {
      hi = !1, (xt !== null || ft !== null) && (ms(), hs());
    }
  }
  function mi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Or(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Ue = !1;
  if (h) try {
    var rt = {};
    Object.defineProperty(rt, "passive", { get: function() {
      Ue = !0;
    } }), window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    Ue = !1;
  }
  function lt(e, t, n, r, l, c, m, g, N) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (J) {
      this.onError(J);
    }
  }
  var yt = !1, Ht = null, fn = !1, Dn = null, ps = { onError: function(e) {
    yt = !0, Ht = e;
  } };
  function vs(e, t, n, r, l, c, m, g, N) {
    yt = !1, Ht = null, lt.apply(ps, arguments);
  }
  function fr(e, t, n, r, l, c, m, g, N) {
    if (vs.apply(this, arguments), yt) {
      if (yt) {
        var I = Ht;
        yt = !1, Ht = null;
      } else throw Error(o(198));
      fn || (fn = !0, Dn = I);
    }
  }
  function Mn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function zn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Li(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function hr(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === n) return Li(l), e;
          if (c === r) return Li(l), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = l, r = c;
      else {
        for (var m = !1, g = l.child; g; ) {
          if (g === n) {
            m = !0, n = l, r = c;
            break;
          }
          if (g === r) {
            m = !0, r = l, n = c;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = c.child; g; ) {
            if (g === n) {
              m = !0, n = c, r = l;
              break;
            }
            if (g === r) {
              m = !0, r = c, n = l;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function mr(e) {
    return e = hr(e), e !== null ? pr(e) : null;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = pr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bt = i.unstable_scheduleCallback, vr = i.unstable_cancelCallback, kr = i.unstable_shouldYield, Da = i.unstable_requestPaint, ht = i.unstable_now, Bn = i.unstable_getCurrentPriorityLevel, xn = i.unstable_ImmediatePriority, $ = i.unstable_UserBlockingPriority, ke = i.unstable_NormalPriority, Je = i.unstable_LowPriority, Zt = i.unstable_IdlePriority, mt = null, Bt = null;
  function ks(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function") try {
      Bt.onCommitFiberRoot(mt, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Pt = Math.clz32 ? Math.clz32 : Lh, Ph = Math.log, Ah = Math.LN2;
  function Lh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ph(e) / Ah | 0) | 0;
  }
  var yr = 64, gr = 4194304;
  function ys(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, c = e.pingedLanes, m = n & 268435455;
    if (m !== 0) {
      var g = m & ~l;
      g !== 0 ? r = ys(g) : (c &= m, c !== 0 && (r = ys(c)));
    } else m = n & ~l, m !== 0 ? r = ys(m) : c !== 0 && (r = ys(c));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, c = t & -t, l >= c || l === 16 && (c & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Pt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Rh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $h(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - Pt(c), g = 1 << m, N = l[m];
      N === -1 ? ((g & n) === 0 || (g & r) !== 0) && (l[m] = Rh(g, t)) : N <= t && (e.expiredLanes |= g), c &= ~g;
    }
  }
  function za(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function du() {
    var e = yr;
    return yr <<= 1, (yr & 4194240) === 0 && (yr = 64), e;
  }
  function Ba(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Pt(t), e[t] = n;
  }
  function Oh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Pt(n), c = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~c;
    }
  }
  function Va(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Pt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var nt = 0;
  function fu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var hu, Ka, mu, pu, vu, Ua = !1, jr = [], Vn = null, Kn = null, Un = null, xs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Hn = [], Ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ku(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        xs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(t.pointerId);
    }
  }
  function Ss(e, t, n, r, l, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: c, targetContainers: [l] }, t !== null && (t = Os(t), t !== null && Ka(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Fh(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Vn = Ss(Vn, e, t, n, r, l), !0;
      case "dragenter":
        return Kn = Ss(Kn, e, t, n, r, l), !0;
      case "mouseover":
        return Un = Ss(Un, e, t, n, r, l), !0;
      case "pointerover":
        var c = l.pointerId;
        return xs.set(c, Ss(xs.get(c) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return c = l.pointerId, js.set(c, Ss(js.get(c) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function yu(e) {
    var t = pi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = zn(n), t !== null) {
            e.blockedOn = t, vu(e.priority, function() {
              mu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Sr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Re = r, n.target.dispatchEvent(r), Re = null;
      } else return t = Os(n), t !== null && Ka(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function gu(e, t, n) {
    Sr(e) && n.delete(t);
  }
  function Dh() {
    Ua = !1, Vn !== null && Sr(Vn) && (Vn = null), Kn !== null && Sr(Kn) && (Kn = null), Un !== null && Sr(Un) && (Un = null), xs.forEach(gu), js.forEach(gu);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Dh)));
  }
  function Es(e) {
    function t(l) {
      return ws(l, e);
    }
    if (0 < jr.length) {
      ws(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vn !== null && ws(Vn, e), Kn !== null && ws(Kn, e), Un !== null && ws(Un, e), xs.forEach(t), js.forEach(t), n = 0; n < Hn.length; n++) r = Hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) yu(n), n.blockedOn === null && Hn.shift();
  }
  var Ri = z.ReactCurrentBatchConfig, wr = !0;
  function zh(e, t, n, r) {
    var l = nt, c = Ri.transition;
    Ri.transition = null;
    try {
      nt = 1, Ha(e, t, n, r);
    } finally {
      nt = l, Ri.transition = c;
    }
  }
  function Bh(e, t, n, r) {
    var l = nt, c = Ri.transition;
    Ri.transition = null;
    try {
      nt = 4, Ha(e, t, n, r);
    } finally {
      nt = l, Ri.transition = c;
    }
  }
  function Ha(e, t, n, r) {
    if (wr) {
      var l = Ga(e, t, n, r);
      if (l === null) uo(e, t, r, Er, n), ku(e, r);
      else if (Fh(l, e, t, n, r)) r.stopPropagation();
      else if (ku(e, r), t & 4 && -1 < Ih.indexOf(e)) {
        for (; l !== null; ) {
          var c = Os(l);
          if (c !== null && hu(c), c = Ga(e, t, n, r), c === null && uo(e, t, r, Er, n), c === l) break;
          l = c;
        }
        l !== null && r.stopPropagation();
      } else uo(e, t, r, null, n);
    }
  }
  var Er = null;
  function Ga(e, t, n, r) {
    if (Er = null, e = We(r), e = pi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = zn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Er = e, null;
  }
  function xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Bn()) {
          case xn:
            return 1;
          case $:
            return 4;
          case ke:
          case Je:
            return 16;
          case Zt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Wa = null, Nr = null;
  function ju() {
    if (Nr) return Nr;
    var e, t = Wa, n = t.length, r, l = "value" in Gn ? Gn.value : Gn.textContent, c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var m = n - e;
    for (r = 1; r <= m && t[n - r] === l[c - r]; r++) ;
    return Nr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Cr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Tr() {
    return !0;
  }
  function Su() {
    return !1;
  }
  function qt(e) {
    function t(n, r, l, c, m) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Tr : Su, this.isPropagationStopped = Su, this;
    }
    return ee(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tr);
    }, persist: function() {
    }, isPersistent: Tr }), t;
  }
  var $i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qa = qt($i), Ns = ee({}, $i, { view: 0, detail: 0 }), Vh = qt(Ns), Ya, Ja, Cs, Mr = ee({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cs && (Cs && e.type === "mousemove" ? (Ya = e.screenX - Cs.screenX, Ja = e.screenY - Cs.screenY) : Ja = Ya = 0, Cs = e), Ya);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ja;
  } }), wu = qt(Mr), Kh = ee({}, Mr, { dataTransfer: 0 }), Uh = qt(Kh), Hh = ee({}, Ns, { relatedTarget: 0 }), Xa = qt(Hh), Gh = ee({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wh = qt(Gh), Qh = ee({}, $i, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Yh = qt(Qh), Jh = ee({}, $i, { data: 0 }), Eu = qt(Jh), Xh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Zh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function em(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qh[e]) ? !!t[e] : !1;
  }
  function Za() {
    return em;
  }
  var tm = ee({}, Ns, { key: function(e) {
    if (e.key) {
      var t = Xh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(e) {
    return e.type === "keypress" ? Cr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), nm = qt(tm), im = ee({}, Mr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nu = qt(im), sm = ee({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), rm = qt(sm), am = ee({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), om = qt(am), lm = ee({}, Mr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), um = qt(lm), cm = [9, 13, 27, 32], qa = h && "CompositionEvent" in window, Ts = null;
  h && "documentMode" in document && (Ts = document.documentMode);
  var dm = h && "TextEvent" in window && !Ts, Cu = h && (!qa || Ts && 8 < Ts && 11 >= Ts), Tu = " ", Mu = !1;
  function _u(e, t) {
    switch (e) {
      case "keyup":
        return cm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Oi = !1;
  function fm(e, t) {
    switch (e) {
      case "compositionend":
        return bu(t);
      case "keypress":
        return t.which !== 32 ? null : (Mu = !0, Tu);
      case "textInput":
        return e = t.data, e === Tu && Mu ? null : e;
      default:
        return null;
    }
  }
  function hm(e, t) {
    if (Oi) return e === "compositionend" || !qa && _u(e, t) ? (e = ju(), Nr = Wa = Gn = null, Oi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Cu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mm[e.type] : t === "textarea";
  }
  function Au(e, t, n, r) {
    fi(r), t = Lr(t, "onChange"), 0 < t.length && (n = new Qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Ms = null, _s = null;
  function pm(e) {
    Ju(e, 0);
  }
  function _r(e) {
    var t = Bi(e);
    if (oe(t)) return e;
  }
  function vm(e, t) {
    if (e === "change") return t;
  }
  var Lu = !1;
  if (h) {
    var eo;
    if (h) {
      var to = "oninput" in document;
      if (!to) {
        var Ru = document.createElement("div");
        Ru.setAttribute("oninput", "return;"), to = typeof Ru.oninput == "function";
      }
      eo = to;
    } else eo = !1;
    Lu = eo && (!document.documentMode || 9 < document.documentMode);
  }
  function $u() {
    Ms && (Ms.detachEvent("onpropertychange", Ou), _s = Ms = null);
  }
  function Ou(e) {
    if (e.propertyName === "value" && _r(_s)) {
      var t = [];
      Au(t, _s, e, We(e)), Ai(pm, t);
    }
  }
  function km(e, t, n) {
    e === "focusin" ? ($u(), Ms = t, _s = n, Ms.attachEvent("onpropertychange", Ou)) : e === "focusout" && $u();
  }
  function ym(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(_s);
  }
  function gm(e, t) {
    if (e === "click") return _r(t);
  }
  function xm(e, t) {
    if (e === "input" || e === "change") return _r(t);
  }
  function jm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var hn = typeof Object.is == "function" ? Object.is : jm;
  function bs(e, t) {
    if (hn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !hn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fu(e, t) {
    var n = Iu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Iu(n);
    }
  }
  function Du(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Du(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zu() {
    for (var e = window, t = ye(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ye(e.document);
    }
    return t;
  }
  function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Sm(e) {
    var t = zu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Du(n.ownerDocument.documentElement, n)) {
      if (r !== null && no(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, c = Math.min(r.start, l);
          r = r.end === void 0 ? c : Math.min(r.end, l), !e.extend && c > r && (l = r, r = c, c = l), l = Fu(n, c);
          var m = Fu(
            n,
            r
          );
          l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), c > r ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wm = h && "documentMode" in document && 11 >= document.documentMode, Ii = null, io = null, Ps = null, so = !1;
  function Bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    so || Ii == null || Ii !== ye(r) || (r = Ii, "selectionStart" in r && no(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ps && bs(Ps, r) || (Ps = r, r = Lr(io, "onSelect"), 0 < r.length && (t = new Qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ii)));
  }
  function br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Fi = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, ro = {}, Vu = {};
  h && (Vu = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function Pr(e) {
    if (ro[e]) return ro[e];
    if (!Fi[e]) return e;
    var t = Fi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Vu) return ro[e] = t[n];
    return e;
  }
  var Ku = Pr("animationend"), Uu = Pr("animationiteration"), Hu = Pr("animationstart"), Gu = Pr("transitionend"), Wu = /* @__PURE__ */ new Map(), Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Wu.set(e, t), f(t, [e]);
  }
  for (var ao = 0; ao < Qu.length; ao++) {
    var oo = Qu[ao], Em = oo.toLowerCase(), Nm = oo[0].toUpperCase() + oo.slice(1);
    Wn(Em, "on" + Nm);
  }
  Wn(Ku, "onAnimationEnd"), Wn(Uu, "onAnimationIteration"), Wn(Hu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Gu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
  function Yu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, fr(r, t, void 0, e), e.currentTarget = null;
  }
  function Ju(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t) for (var m = r.length - 1; 0 <= m; m--) {
          var g = r[m], N = g.instance, I = g.currentTarget;
          if (g = g.listener, N !== c && l.isPropagationStopped()) break e;
          Yu(l, g, I), c = N;
        }
        else for (m = 0; m < r.length; m++) {
          if (g = r[m], N = g.instance, I = g.currentTarget, g = g.listener, N !== c && l.isPropagationStopped()) break e;
          Yu(l, g, I), c = N;
        }
      }
    }
    if (fn) throw e = Dn, fn = !1, Dn = null, e;
  }
  function ut(e, t) {
    var n = t[vo];
    n === void 0 && (n = t[vo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Xu(t, e, 2, !1), n.add(r));
  }
  function lo(e, t, n) {
    var r = 0;
    t && (r |= 4), Xu(n, e, r, t);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[Ar]) {
      e[Ar] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Cm.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || (t[Ar] = !0, lo("selectionchange", !1, t));
    }
  }
  function Xu(e, t, n, r) {
    switch (xu(t)) {
      case 1:
        var l = zh;
        break;
      case 4:
        l = Bh;
        break;
      default:
        l = Ha;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ue || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function uo(e, t, n, r, l) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var m = r.tag;
      if (m === 3 || m === 4) {
        var g = r.stateNode.containerInfo;
        if (g === l || g.nodeType === 8 && g.parentNode === l) break;
        if (m === 4) for (m = r.return; m !== null; ) {
          var N = m.tag;
          if ((N === 3 || N === 4) && (N = m.stateNode.containerInfo, N === l || N.nodeType === 8 && N.parentNode === l)) return;
          m = m.return;
        }
        for (; g !== null; ) {
          if (m = pi(g), m === null) return;
          if (N = m.tag, N === 5 || N === 6) {
            r = c = m;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ai(function() {
      var I = c, J = We(n), q = [];
      e: {
        var Y = Wu.get(e);
        if (Y !== void 0) {
          var pe = Qa, je = e;
          switch (e) {
            case "keypress":
              if (Cr(n) === 0) break e;
            case "keydown":
            case "keyup":
              pe = nm;
              break;
            case "focusin":
              je = "focus", pe = Xa;
              break;
            case "focusout":
              je = "blur", pe = Xa;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Xa;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = rm;
              break;
            case Ku:
            case Uu:
            case Hu:
              pe = Wh;
              break;
            case Gu:
              pe = om;
              break;
            case "scroll":
              pe = Vh;
              break;
            case "wheel":
              pe = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = Nu;
          }
          var Ee = (t & 4) !== 0, gt = !Ee && e === "scroll", R = Ee ? Y !== null ? Y + "Capture" : null : Y;
          Ee = [];
          for (var M = I, O; M !== null; ) {
            O = M;
            var ne = O.stateNode;
            if (O.tag === 5 && ne !== null && (O = ne, R !== null && (ne = mi(M, R), ne != null && Ee.push(Rs(M, ne, O)))), gt) break;
            M = M.return;
          }
          0 < Ee.length && (Y = new pe(Y, je, null, n, J), q.push({ event: Y, listeners: Ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Y = e === "mouseover" || e === "pointerover", pe = e === "mouseout" || e === "pointerout", Y && n !== Re && (je = n.relatedTarget || n.fromElement) && (pi(je) || je[_n])) break e;
          if ((pe || Y) && (Y = J.window === J ? J : (Y = J.ownerDocument) ? Y.defaultView || Y.parentWindow : window, pe ? (je = n.relatedTarget || n.toElement, pe = I, je = je ? pi(je) : null, je !== null && (gt = Mn(je), je !== gt || je.tag !== 5 && je.tag !== 6) && (je = null)) : (pe = null, je = I), pe !== je)) {
            if (Ee = wu, ne = "onMouseLeave", R = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Nu, ne = "onPointerLeave", R = "onPointerEnter", M = "pointer"), gt = pe == null ? Y : Bi(pe), O = je == null ? Y : Bi(je), Y = new Ee(ne, M + "leave", pe, n, J), Y.target = gt, Y.relatedTarget = O, ne = null, pi(J) === I && (Ee = new Ee(R, M + "enter", je, n, J), Ee.target = O, Ee.relatedTarget = gt, ne = Ee), gt = ne, pe && je) t: {
              for (Ee = pe, R = je, M = 0, O = Ee; O; O = Di(O)) M++;
              for (O = 0, ne = R; ne; ne = Di(ne)) O++;
              for (; 0 < M - O; ) Ee = Di(Ee), M--;
              for (; 0 < O - M; ) R = Di(R), O--;
              for (; M--; ) {
                if (Ee === R || R !== null && Ee === R.alternate) break t;
                Ee = Di(Ee), R = Di(R);
              }
              Ee = null;
            }
            else Ee = null;
            pe !== null && Zu(q, Y, pe, Ee, !1), je !== null && gt !== null && Zu(q, gt, je, Ee, !0);
          }
        }
        e: {
          if (Y = I ? Bi(I) : window, pe = Y.nodeName && Y.nodeName.toLowerCase(), pe === "select" || pe === "input" && Y.type === "file") var Ne = vm;
          else if (Pu(Y)) if (Lu) Ne = xm;
          else {
            Ne = ym;
            var Pe = km;
          }
          else (pe = Y.nodeName) && pe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Ne = gm);
          if (Ne && (Ne = Ne(e, I))) {
            Au(q, Ne, n, J);
            break e;
          }
          Pe && Pe(e, Y, I), e === "focusout" && (Pe = Y._wrapperState) && Pe.controlled && Y.type === "number" && Le(Y, "number", Y.value);
        }
        switch (Pe = I ? Bi(I) : window, e) {
          case "focusin":
            (Pu(Pe) || Pe.contentEditable === "true") && (Ii = Pe, io = I, Ps = null);
            break;
          case "focusout":
            Ps = io = Ii = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Bu(q, n, J);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            Bu(q, n, J);
        }
        var Ae;
        if (qa) e: {
          switch (e) {
            case "compositionstart":
              var $e = "onCompositionStart";
              break e;
            case "compositionend":
              $e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $e = "onCompositionUpdate";
              break e;
          }
          $e = void 0;
        }
        else Oi ? _u(e, n) && ($e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Cu && n.locale !== "ko" && (Oi || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Oi && (Ae = ju()) : (Gn = J, Wa = "value" in Gn ? Gn.value : Gn.textContent, Oi = !0)), Pe = Lr(I, $e), 0 < Pe.length && ($e = new Eu($e, e, null, n, J), q.push({ event: $e, listeners: Pe }), Ae ? $e.data = Ae : (Ae = bu(n), Ae !== null && ($e.data = Ae)))), (Ae = dm ? fm(e, n) : hm(e, n)) && (I = Lr(I, "onBeforeInput"), 0 < I.length && (J = new Eu("onBeforeInput", "beforeinput", null, n, J), q.push({ event: J, listeners: I }), J.data = Ae));
      }
      Ju(q, t);
    });
  }
  function Rs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Lr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, c = l.stateNode;
      l.tag === 5 && c !== null && (l = c, c = mi(e, n), c != null && r.unshift(Rs(e, c, l)), c = mi(e, t), c != null && r.push(Rs(e, c, l))), e = e.return;
    }
    return r;
  }
  function Di(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zu(e, t, n, r, l) {
    for (var c = t._reactName, m = []; n !== null && n !== r; ) {
      var g = n, N = g.alternate, I = g.stateNode;
      if (N !== null && N === r) break;
      g.tag === 5 && I !== null && (g = I, l ? (N = mi(n, c), N != null && m.unshift(Rs(n, N, g))) : l || (N = mi(n, c), N != null && m.push(Rs(n, N, g)))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Tm = /\r\n?/g, Mm = /\u0000|\uFFFD/g;
  function qu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Mm, "");
  }
  function Rr(e, t, n) {
    if (t = qu(t), qu(e) !== t && n) throw Error(o(425));
  }
  function $r() {
  }
  var co = null, fo = null;
  function ho(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var mo = typeof setTimeout == "function" ? setTimeout : void 0, _m = typeof clearTimeout == "function" ? clearTimeout : void 0, ec = typeof Promise == "function" ? Promise : void 0, bm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ec < "u" ? function(e) {
    return ec.resolve(null).then(e).catch(Pm);
  } : mo;
  function Pm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function po(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Es(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Es(t);
  }
  function Qn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function tc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var zi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + zi, $s = "__reactProps$" + zi, _n = "__reactContainer$" + zi, vo = "__reactEvents$" + zi, Am = "__reactListeners$" + zi, Lm = "__reactHandles$" + zi;
  function pi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = tc(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = tc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Os(e) {
    return e = e[jn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Bi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Or(e) {
    return e[$s] || null;
  }
  var ko = [], Vi = -1;
  function Yn(e) {
    return { current: e };
  }
  function ct(e) {
    0 > Vi || (e.current = ko[Vi], ko[Vi] = null, Vi--);
  }
  function ot(e, t) {
    Vi++, ko[Vi] = e.current, e.current = t;
  }
  var Jn = {}, Ot = Yn(Jn), Gt = Yn(!1), vi = Jn;
  function Ki(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, c;
    for (c in n) l[c] = t[c];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Wt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ir() {
    ct(Gt), ct(Ot);
  }
  function nc(e, t, n) {
    if (Ot.current !== Jn) throw Error(o(168));
    ot(Ot, t), ot(Gt, n);
  }
  function ic(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, me(e) || "Unknown", l));
    return ee({}, n, r);
  }
  function Fr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, vi = Ot.current, ot(Ot, e), ot(Gt, Gt.current), !0;
  }
  function sc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = ic(e, t, vi), r.__reactInternalMemoizedMergedChildContext = e, ct(Gt), ct(Ot), ot(Ot, e)) : ct(Gt), ot(Gt, n);
  }
  var bn = null, Dr = !1, yo = !1;
  function rc(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function Rm(e) {
    Dr = !0, rc(e);
  }
  function Xn() {
    if (!yo && bn !== null) {
      yo = !0;
      var e = 0, t = nt;
      try {
        var n = bn;
        for (nt = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        bn = null, Dr = !1;
      } catch (l) {
        throw bn !== null && (bn = bn.slice(e + 1)), bt(xn, Xn), l;
      } finally {
        nt = t, yo = !1;
      }
    }
    return null;
  }
  var Ui = [], Hi = 0, zr = null, Br = 0, an = [], on = 0, ki = null, Pn = 1, An = "";
  function yi(e, t) {
    Ui[Hi++] = Br, Ui[Hi++] = zr, zr = e, Br = t;
  }
  function ac(e, t, n) {
    an[on++] = Pn, an[on++] = An, an[on++] = ki, ki = e;
    var r = Pn;
    e = An;
    var l = 32 - Pt(r) - 1;
    r &= ~(1 << l), n += 1;
    var c = 32 - Pt(t) + l;
    if (30 < c) {
      var m = l - l % 5;
      c = (r & (1 << m) - 1).toString(32), r >>= m, l -= m, Pn = 1 << 32 - Pt(t) + l | n << l | r, An = c + e;
    } else Pn = 1 << c | n << l | r, An = e;
  }
  function go(e) {
    e.return !== null && (yi(e, 1), ac(e, 1, 0));
  }
  function xo(e) {
    for (; e === zr; ) zr = Ui[--Hi], Ui[Hi] = null, Br = Ui[--Hi], Ui[Hi] = null;
    for (; e === ki; ) ki = an[--on], an[on] = null, An = an[--on], an[on] = null, Pn = an[--on], an[on] = null;
  }
  var en = null, tn = null, dt = !1, mn = null;
  function oc(e, t) {
    var n = dn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function lc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, en = e, tn = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, en = e, tn = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ki !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, en = e, tn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function So(e) {
    if (dt) {
      var t = tn;
      if (t) {
        var n = t;
        if (!lc(e, t)) {
          if (jo(e)) throw Error(o(418));
          t = Qn(n.nextSibling);
          var r = en;
          t && lc(e, t) ? oc(r, n) : (e.flags = e.flags & -4097 | 2, dt = !1, en = e);
        }
      } else {
        if (jo(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, dt = !1, en = e;
      }
    }
  }
  function uc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    en = e;
  }
  function Vr(e) {
    if (e !== en) return !1;
    if (!dt) return uc(e), dt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ho(e.type, e.memoizedProps)), t && (t = tn)) {
      if (jo(e)) throw cc(), Error(o(418));
      for (; t; ) oc(e, t), t = Qn(t.nextSibling);
    }
    if (uc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                tn = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        tn = null;
      }
    } else tn = en ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cc() {
    for (var e = tn; e; ) e = Qn(e.nextSibling);
  }
  function Gi() {
    tn = en = null, dt = !1;
  }
  function wo(e) {
    mn === null ? mn = [e] : mn.push(e);
  }
  var $m = z.ReactCurrentBatchConfig;
  function Is(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
          var g = l.refs;
          m === null ? delete g[c] : g[c] = m;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Kr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function dc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fc(e) {
    function t(R, M) {
      if (e) {
        var O = R.deletions;
        O === null ? (R.deletions = [M], R.flags |= 16) : O.push(M);
      }
    }
    function n(R, M) {
      if (!e) return null;
      for (; M !== null; ) t(R, M), M = M.sibling;
      return null;
    }
    function r(R, M) {
      for (R = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? R.set(M.key, M) : R.set(M.index, M), M = M.sibling;
      return R;
    }
    function l(R, M) {
      return R = ri(R, M), R.index = 0, R.sibling = null, R;
    }
    function c(R, M, O) {
      return R.index = O, e ? (O = R.alternate, O !== null ? (O = O.index, O < M ? (R.flags |= 2, M) : O) : (R.flags |= 2, M)) : (R.flags |= 1048576, M);
    }
    function m(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function g(R, M, O, ne) {
      return M === null || M.tag !== 6 ? (M = ml(O, R.mode, ne), M.return = R, M) : (M = l(M, O), M.return = R, M);
    }
    function N(R, M, O, ne) {
      var Ne = O.type;
      return Ne === F ? J(R, M, O.props.children, ne, O.key) : M !== null && (M.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === ue && dc(Ne) === M.type) ? (ne = l(M, O.props), ne.ref = Is(R, M, O), ne.return = R, ne) : (ne = ha(O.type, O.key, O.props, null, R.mode, ne), ne.ref = Is(R, M, O), ne.return = R, ne);
    }
    function I(R, M, O, ne) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== O.containerInfo || M.stateNode.implementation !== O.implementation ? (M = pl(O, R.mode, ne), M.return = R, M) : (M = l(M, O.children || []), M.return = R, M);
    }
    function J(R, M, O, ne, Ne) {
      return M === null || M.tag !== 7 ? (M = Ci(O, R.mode, ne, Ne), M.return = R, M) : (M = l(M, O), M.return = R, M);
    }
    function q(R, M, O) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = ml("" + M, R.mode, O), M.return = R, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return O = ha(M.type, M.key, M.props, null, R.mode, O), O.ref = Is(R, null, M), O.return = R, O;
          case Z:
            return M = pl(M, R.mode, O), M.return = R, M;
          case ue:
            var ne = M._init;
            return q(R, ne(M._payload), O);
        }
        if (Oe(M) || ce(M)) return M = Ci(M, R.mode, O, null), M.return = R, M;
        Kr(R, M);
      }
      return null;
    }
    function Y(R, M, O, ne) {
      var Ne = M !== null ? M.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return Ne !== null ? null : g(R, M, "" + O, ne);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case V:
            return O.key === Ne ? N(R, M, O, ne) : null;
          case Z:
            return O.key === Ne ? I(R, M, O, ne) : null;
          case ue:
            return Ne = O._init, Y(
              R,
              M,
              Ne(O._payload),
              ne
            );
        }
        if (Oe(O) || ce(O)) return Ne !== null ? null : J(R, M, O, ne, null);
        Kr(R, O);
      }
      return null;
    }
    function pe(R, M, O, ne, Ne) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return R = R.get(O) || null, g(M, R, "" + ne, Ne);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case V:
            return R = R.get(ne.key === null ? O : ne.key) || null, N(M, R, ne, Ne);
          case Z:
            return R = R.get(ne.key === null ? O : ne.key) || null, I(M, R, ne, Ne);
          case ue:
            var Pe = ne._init;
            return pe(R, M, O, Pe(ne._payload), Ne);
        }
        if (Oe(ne) || ce(ne)) return R = R.get(O) || null, J(M, R, ne, Ne, null);
        Kr(M, ne);
      }
      return null;
    }
    function je(R, M, O, ne) {
      for (var Ne = null, Pe = null, Ae = M, $e = M = 0, Tt = null; Ae !== null && $e < O.length; $e++) {
        Ae.index > $e ? (Tt = Ae, Ae = null) : Tt = Ae.sibling;
        var qe = Y(R, Ae, O[$e], ne);
        if (qe === null) {
          Ae === null && (Ae = Tt);
          break;
        }
        e && Ae && qe.alternate === null && t(R, Ae), M = c(qe, M, $e), Pe === null ? Ne = qe : Pe.sibling = qe, Pe = qe, Ae = Tt;
      }
      if ($e === O.length) return n(R, Ae), dt && yi(R, $e), Ne;
      if (Ae === null) {
        for (; $e < O.length; $e++) Ae = q(R, O[$e], ne), Ae !== null && (M = c(Ae, M, $e), Pe === null ? Ne = Ae : Pe.sibling = Ae, Pe = Ae);
        return dt && yi(R, $e), Ne;
      }
      for (Ae = r(R, Ae); $e < O.length; $e++) Tt = pe(Ae, R, $e, O[$e], ne), Tt !== null && (e && Tt.alternate !== null && Ae.delete(Tt.key === null ? $e : Tt.key), M = c(Tt, M, $e), Pe === null ? Ne = Tt : Pe.sibling = Tt, Pe = Tt);
      return e && Ae.forEach(function(ai) {
        return t(R, ai);
      }), dt && yi(R, $e), Ne;
    }
    function Ee(R, M, O, ne) {
      var Ne = ce(O);
      if (typeof Ne != "function") throw Error(o(150));
      if (O = Ne.call(O), O == null) throw Error(o(151));
      for (var Pe = Ne = null, Ae = M, $e = M = 0, Tt = null, qe = O.next(); Ae !== null && !qe.done; $e++, qe = O.next()) {
        Ae.index > $e ? (Tt = Ae, Ae = null) : Tt = Ae.sibling;
        var ai = Y(R, Ae, qe.value, ne);
        if (ai === null) {
          Ae === null && (Ae = Tt);
          break;
        }
        e && Ae && ai.alternate === null && t(R, Ae), M = c(ai, M, $e), Pe === null ? Ne = ai : Pe.sibling = ai, Pe = ai, Ae = Tt;
      }
      if (qe.done) return n(
        R,
        Ae
      ), dt && yi(R, $e), Ne;
      if (Ae === null) {
        for (; !qe.done; $e++, qe = O.next()) qe = q(R, qe.value, ne), qe !== null && (M = c(qe, M, $e), Pe === null ? Ne = qe : Pe.sibling = qe, Pe = qe);
        return dt && yi(R, $e), Ne;
      }
      for (Ae = r(R, Ae); !qe.done; $e++, qe = O.next()) qe = pe(Ae, R, $e, qe.value, ne), qe !== null && (e && qe.alternate !== null && Ae.delete(qe.key === null ? $e : qe.key), M = c(qe, M, $e), Pe === null ? Ne = qe : Pe.sibling = qe, Pe = qe);
      return e && Ae.forEach(function(mp) {
        return t(R, mp);
      }), dt && yi(R, $e), Ne;
    }
    function gt(R, M, O, ne) {
      if (typeof O == "object" && O !== null && O.type === F && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case V:
            e: {
              for (var Ne = O.key, Pe = M; Pe !== null; ) {
                if (Pe.key === Ne) {
                  if (Ne = O.type, Ne === F) {
                    if (Pe.tag === 7) {
                      n(R, Pe.sibling), M = l(Pe, O.props.children), M.return = R, R = M;
                      break e;
                    }
                  } else if (Pe.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === ue && dc(Ne) === Pe.type) {
                    n(R, Pe.sibling), M = l(Pe, O.props), M.ref = Is(R, Pe, O), M.return = R, R = M;
                    break e;
                  }
                  n(R, Pe);
                  break;
                } else t(R, Pe);
                Pe = Pe.sibling;
              }
              O.type === F ? (M = Ci(O.props.children, R.mode, ne, O.key), M.return = R, R = M) : (ne = ha(O.type, O.key, O.props, null, R.mode, ne), ne.ref = Is(R, M, O), ne.return = R, R = ne);
            }
            return m(R);
          case Z:
            e: {
              for (Pe = O.key; M !== null; ) {
                if (M.key === Pe) if (M.tag === 4 && M.stateNode.containerInfo === O.containerInfo && M.stateNode.implementation === O.implementation) {
                  n(R, M.sibling), M = l(M, O.children || []), M.return = R, R = M;
                  break e;
                } else {
                  n(R, M);
                  break;
                }
                else t(R, M);
                M = M.sibling;
              }
              M = pl(O, R.mode, ne), M.return = R, R = M;
            }
            return m(R);
          case ue:
            return Pe = O._init, gt(R, M, Pe(O._payload), ne);
        }
        if (Oe(O)) return je(R, M, O, ne);
        if (ce(O)) return Ee(R, M, O, ne);
        Kr(R, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, M !== null && M.tag === 6 ? (n(R, M.sibling), M = l(M, O), M.return = R, R = M) : (n(R, M), M = ml(O, R.mode, ne), M.return = R, R = M), m(R)) : n(R, M);
    }
    return gt;
  }
  var Wi = fc(!0), hc = fc(!1), Ur = Yn(null), Hr = null, Qi = null, Eo = null;
  function No() {
    Eo = Qi = Hr = null;
  }
  function Co(e) {
    var t = Ur.current;
    ct(Ur), e._currentValue = t;
  }
  function To(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Yi(e, t) {
    Hr = e, Eo = Qi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Qt = !0), e.firstContext = null);
  }
  function ln(e) {
    var t = e._currentValue;
    if (Eo !== e) if (e = { context: e, memoizedValue: t, next: null }, Qi === null) {
      if (Hr === null) throw Error(o(308));
      Qi = e, Hr.dependencies = { lanes: 0, firstContext: e };
    } else Qi = Qi.next = e;
    return t;
  }
  var gi = null;
  function Mo(e) {
    gi === null ? gi = [e] : gi.push(e);
  }
  function mc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Mo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, r);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function _o(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function pc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Xe & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ln(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Mo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ln(e, n);
  }
  function Gr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Va(e, n);
    }
  }
  function vc(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          c === null ? l = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? l = c = t : c = c.next = t;
      } else l = c = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: c, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Wr(e, t, n, r) {
    var l = e.updateQueue;
    Zn = !1;
    var c = l.firstBaseUpdate, m = l.lastBaseUpdate, g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var N = g, I = N.next;
      N.next = null, m === null ? c = I : m.next = I, m = N;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, g = J.lastBaseUpdate, g !== m && (g === null ? J.firstBaseUpdate = I : g.next = I, J.lastBaseUpdate = N));
    }
    if (c !== null) {
      var q = l.baseState;
      m = 0, J = I = N = null, g = c;
      do {
        var Y = g.lane, pe = g.eventTime;
        if ((r & Y) === Y) {
          J !== null && (J = J.next = {
            eventTime: pe,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var je = e, Ee = g;
            switch (Y = t, pe = n, Ee.tag) {
              case 1:
                if (je = Ee.payload, typeof je == "function") {
                  q = je.call(pe, q, Y);
                  break e;
                }
                q = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Ee.payload, Y = typeof je == "function" ? je.call(pe, q, Y) : je, Y == null) break e;
                q = ee({}, q, Y);
                break e;
              case 2:
                Zn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, Y = l.effects, Y === null ? l.effects = [g] : Y.push(g));
        } else pe = { eventTime: pe, lane: Y, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, J === null ? (I = J = pe, N = q) : J = J.next = pe, m |= Y;
        if (g = g.next, g === null) {
          if (g = l.shared.pending, g === null) break;
          Y = g, g = Y.next, Y.next = null, l.lastBaseUpdate = Y, l.shared.pending = null;
        }
      } while (!0);
      if (J === null && (N = q), l.baseState = N, l.firstBaseUpdate = I, l.lastBaseUpdate = J, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      Si |= m, e.lanes = m, e.memoizedState = q;
    }
  }
  function kc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(o(191, l));
        l.call(r);
      }
    }
  }
  var Fs = {}, Sn = Yn(Fs), Ds = Yn(Fs), zs = Yn(Fs);
  function xi(e) {
    if (e === Fs) throw Error(o(174));
    return e;
  }
  function bo(e, t) {
    switch (ot(zs, t), ot(Ds, e), ot(Sn, Fs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Be(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Be(t, e);
    }
    ct(Sn), ot(Sn, t);
  }
  function Ji() {
    ct(Sn), ct(Ds), ct(zs);
  }
  function yc(e) {
    xi(zs.current);
    var t = xi(Sn.current), n = Be(t, e.type);
    t !== n && (ot(Ds, e), ot(Sn, n));
  }
  function Po(e) {
    Ds.current === e && (ct(Sn), ct(Ds));
  }
  var pt = Yn(0);
  function Qr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ao = [];
  function Lo() {
    for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0;
  }
  var Yr = z.ReactCurrentDispatcher, Ro = z.ReactCurrentBatchConfig, ji = 0, vt = null, St = null, Nt = null, Jr = !1, Bs = !1, Vs = 0, Om = 0;
  function It() {
    throw Error(o(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!hn(e[n], t[n])) return !1;
    return !0;
  }
  function Oo(e, t, n, r, l, c) {
    if (ji = c, vt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yr.current = e === null || e.memoizedState === null ? zm : Bm, e = n(r, l), Bs) {
      c = 0;
      do {
        if (Bs = !1, Vs = 0, 25 <= c) throw Error(o(301));
        c += 1, Nt = St = null, t.updateQueue = null, Yr.current = Vm, e = n(r, l);
      } while (Bs);
    }
    if (Yr.current = qr, t = St !== null && St.next !== null, ji = 0, Nt = St = vt = null, Jr = !1, t) throw Error(o(300));
    return e;
  }
  function Io() {
    var e = Vs !== 0;
    return Vs = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? vt.memoizedState = Nt = e : Nt = Nt.next = e, Nt;
  }
  function un() {
    if (St === null) {
      var e = vt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = St.next;
    var t = Nt === null ? vt.memoizedState : Nt.next;
    if (t !== null) Nt = t, St = e;
    else {
      if (e === null) throw Error(o(310));
      St = e, e = { memoizedState: St.memoizedState, baseState: St.baseState, baseQueue: St.baseQueue, queue: St.queue, next: null }, Nt === null ? vt.memoizedState = Nt = e : Nt = Nt.next = e;
    }
    return Nt;
  }
  function Ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fo(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = St, l = r.baseQueue, c = n.pending;
    if (c !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = c.next, c.next = m;
      }
      r.baseQueue = l = c, n.pending = null;
    }
    if (l !== null) {
      c = l.next, r = r.baseState;
      var g = m = null, N = null, I = c;
      do {
        var J = I.lane;
        if ((ji & J) === J) N !== null && (N = N.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var q = {
            lane: J,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          N === null ? (g = N = q, m = r) : N = N.next = q, vt.lanes |= J, Si |= J;
        }
        I = I.next;
      } while (I !== null && I !== c);
      N === null ? m = r : N.next = g, hn(r, t.memoizedState) || (Qt = !0), t.memoizedState = r, t.baseState = m, t.baseQueue = N, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        c = l.lane, vt.lanes |= c, Si |= c, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Do(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, c = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = l = l.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== l);
      hn(c, t.memoizedState) || (Qt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, r];
  }
  function gc() {
  }
  function xc(e, t) {
    var n = vt, r = un(), l = t(), c = !hn(r.memoizedState, l);
    if (c && (r.memoizedState = l, Qt = !0), r = r.queue, zo(wc.bind(null, n, r, e), [e]), r.getSnapshot !== t || c || Nt !== null && Nt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Us(9, Sc.bind(null, n, r, l, t), void 0, null), Ct === null) throw Error(o(349));
      (ji & 30) !== 0 || jc(n, t, l);
    }
    return l;
  }
  function jc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = vt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, vt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Sc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ec(t) && Nc(e);
  }
  function wc(e, t, n) {
    return n(function() {
      Ec(t) && Nc(e);
    });
  }
  function Ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !hn(e, n);
    } catch {
      return !0;
    }
  }
  function Nc(e) {
    var t = Ln(e, 1);
    t !== null && yn(t, e, 1, -1);
  }
  function Cc(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, vt, e), [t.memoizedState, e];
  }
  function Us(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = vt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, vt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Tc() {
    return un().memoizedState;
  }
  function Xr(e, t, n, r) {
    var l = wn();
    vt.flags |= e, l.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Zr(e, t, n, r) {
    var l = un();
    r = r === void 0 ? null : r;
    var c = void 0;
    if (St !== null) {
      var m = St.memoizedState;
      if (c = m.destroy, r !== null && $o(r, m.deps)) {
        l.memoizedState = Us(t, n, c, r);
        return;
      }
    }
    vt.flags |= e, l.memoizedState = Us(1 | t, n, c, r);
  }
  function Mc(e, t) {
    return Xr(8390656, 8, e, t);
  }
  function zo(e, t) {
    return Zr(2048, 8, e, t);
  }
  function _c(e, t) {
    return Zr(4, 2, e, t);
  }
  function bc(e, t) {
    return Zr(4, 4, e, t);
  }
  function Pc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ac(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zr(4, 4, Pc.bind(null, t, e), n);
  }
  function Bo() {
  }
  function Lc(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Rc(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function $c(e, t, n) {
    return (ji & 21) === 0 ? (e.baseState && (e.baseState = !1, Qt = !0), e.memoizedState = n) : (hn(n, t) || (n = du(), vt.lanes |= n, Si |= n, e.baseState = !0), t);
  }
  function Im(e, t) {
    var n = nt;
    nt = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ro.transition;
    Ro.transition = {};
    try {
      e(!1), t();
    } finally {
      nt = n, Ro.transition = r;
    }
  }
  function Oc() {
    return un().memoizedState;
  }
  function Fm(e, t, n) {
    var r = ii(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ic(e)) Fc(t, n);
    else if (n = mc(e, t, n, r), n !== null) {
      var l = Kt();
      yn(n, e, r, l), Dc(n, t, r);
    }
  }
  function Dm(e, t, n) {
    var r = ii(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ic(e)) Fc(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, g = c(m, n);
        if (l.hasEagerState = !0, l.eagerState = g, hn(g, m)) {
          var N = t.interleaved;
          N === null ? (l.next = l, Mo(t)) : (l.next = N.next, N.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = mc(e, t, l, r), n !== null && (l = Kt(), yn(n, e, r, l), Dc(n, t, r));
    }
  }
  function Ic(e) {
    var t = e.alternate;
    return e === vt || t !== null && t === vt;
  }
  function Fc(e, t) {
    Bs = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Dc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Va(e, n);
    }
  }
  var qr = { readContext: ln, useCallback: It, useContext: It, useEffect: It, useImperativeHandle: It, useInsertionEffect: It, useLayoutEffect: It, useMemo: It, useReducer: It, useRef: It, useState: It, useDebugValue: It, useDeferredValue: It, useTransition: It, useMutableSource: It, useSyncExternalStore: It, useId: It, unstable_isNewReconciler: !1 }, zm = { readContext: ln, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ln, useEffect: Mc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Xr(
      4194308,
      4,
      Pc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Xr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Xr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = wn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, vt, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Cc, useDebugValue: Bo, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = Cc(!1), t = e[0];
    return e = Im.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = vt, l = wn();
    if (dt) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), Ct === null) throw Error(o(349));
      (ji & 30) !== 0 || jc(r, t, n);
    }
    l.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return l.queue = c, Mc(wc.bind(
      null,
      r,
      c,
      e
    ), [e]), r.flags |= 2048, Us(9, Sc.bind(null, r, c, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = Ct.identifierPrefix;
    if (dt) {
      var n = An, r = Pn;
      n = (r & ~(1 << 32 - Pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Om++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Bm = {
    readContext: ln,
    useCallback: Lc,
    useContext: ln,
    useEffect: zo,
    useImperativeHandle: Ac,
    useInsertionEffect: _c,
    useLayoutEffect: bc,
    useMemo: Rc,
    useReducer: Fo,
    useRef: Tc,
    useState: function() {
      return Fo(Ks);
    },
    useDebugValue: Bo,
    useDeferredValue: function(e) {
      var t = un();
      return $c(t, St.memoizedState, e);
    },
    useTransition: function() {
      var e = Fo(Ks)[0], t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: gc,
    useSyncExternalStore: xc,
    useId: Oc,
    unstable_isNewReconciler: !1
  }, Vm = { readContext: ln, useCallback: Lc, useContext: ln, useEffect: zo, useImperativeHandle: Ac, useInsertionEffect: _c, useLayoutEffect: bc, useMemo: Rc, useReducer: Do, useRef: Tc, useState: function() {
    return Do(Ks);
  }, useDebugValue: Bo, useDeferredValue: function(e) {
    var t = un();
    return St === null ? t.memoizedState = e : $c(t, St.memoizedState, e);
  }, useTransition: function() {
    var e = Do(Ks)[0], t = un().memoizedState;
    return [e, t];
  }, useMutableSource: gc, useSyncExternalStore: xc, useId: Oc, unstable_isNewReconciler: !1 };
  function pn(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Vo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ea = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Kt(), l = ii(e), c = Rn(r, l);
    c.payload = t, n != null && (c.callback = n), t = qn(e, c, l), t !== null && (yn(t, e, l, r), Gr(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Kt(), l = ii(e), c = Rn(r, l);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = qn(e, c, l), t !== null && (yn(t, e, l, r), Gr(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Kt(), r = ii(e), l = Rn(n, r);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, r), t !== null && (yn(t, e, r, n), Gr(t, e, r));
  } };
  function zc(e, t, n, r, l, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, m) : t.prototype && t.prototype.isPureReactComponent ? !bs(n, r) || !bs(l, c) : !0;
  }
  function Bc(e, t, n) {
    var r = !1, l = Jn, c = t.contextType;
    return typeof c == "object" && c !== null ? c = ln(c) : (l = Wt(t) ? vi : Ot.current, r = t.contextTypes, c = (r = r != null) ? Ki(e, l) : Jn), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function Vc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ea.enqueueReplaceState(t, t.state, null);
  }
  function Ko(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _o(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? l.context = ln(c) : (c = Wt(t) ? vi : Ot.current, l.context = Ki(e, c)), l.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Vo(e, t, c, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ea.enqueueReplaceState(l, l.state, null), Wr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xi(e, t) {
    try {
      var n = "", r = t;
      do
        n += Ce(r), r = r.return;
      while (r);
      var l = n;
    } catch (c) {
      l = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Uo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ho(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Km = typeof WeakMap == "function" ? WeakMap : Map;
  function Kc(e, t, n) {
    n = Rn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      oa || (oa = !0, al = r), Ho(e, t);
    }, n;
  }
  function Uc(e, t, n) {
    n = Rn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ho(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      Ho(e, t), typeof r != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), n;
  }
  function Hc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Km();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = ip.bind(null, e, t, n), t.then(e, e));
  }
  function Gc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Wc(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Um = z.ReactCurrentOwner, Qt = !1;
  function Vt(e, t, n, r) {
    t.child = e === null ? hc(t, null, n, r) : Wi(t, e.child, n, r);
  }
  function Qc(e, t, n, r, l) {
    n = n.render;
    var c = t.ref;
    return Yi(t, l), r = Oo(e, t, n, r, c, l), n = Io(), e !== null && !Qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (dt && n && go(t), t.flags |= 1, Vt(e, t, r, l), t.child);
  }
  function Yc(e, t, n, r, l) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !hl(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, Jc(e, t, c, r, l)) : (e = ha(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & l) === 0) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : bs, n(m, r) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = ri(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jc(e, t, n, r, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (bs(c, r) && e.ref === t.ref) if (Qt = !1, t.pendingProps = r = c, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Qt = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Go(e, t, n, r, l);
  }
  function Xc(e, t, n) {
    var r = t.pendingProps, l = r.children, c = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ot(qi, nn), nn |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ot(qi, nn), nn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = c !== null ? c.baseLanes : n, ot(qi, nn), nn |= r;
    }
    else c !== null ? (r = c.baseLanes | n, t.memoizedState = null) : r = n, ot(qi, nn), nn |= r;
    return Vt(e, t, l, n), t.child;
  }
  function Zc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Go(e, t, n, r, l) {
    var c = Wt(n) ? vi : Ot.current;
    return c = Ki(t, c), Yi(t, l), n = Oo(e, t, n, r, c, l), r = Io(), e !== null && !Qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (dt && r && go(t), t.flags |= 1, Vt(e, t, n, l), t.child);
  }
  function qc(e, t, n, r, l) {
    if (Wt(n)) {
      var c = !0;
      Fr(t);
    } else c = !1;
    if (Yi(t, l), t.stateNode === null) na(e, t), Bc(t, n, r), Ko(t, n, r, l), r = !0;
    else if (e === null) {
      var m = t.stateNode, g = t.memoizedProps;
      m.props = g;
      var N = m.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = ln(I) : (I = Wt(n) ? vi : Ot.current, I = Ki(t, I));
      var J = n.getDerivedStateFromProps, q = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== r || N !== I) && Vc(t, m, r, I), Zn = !1;
      var Y = t.memoizedState;
      m.state = Y, Wr(t, r, m, l), N = t.memoizedState, g !== r || Y !== N || Gt.current || Zn ? (typeof J == "function" && (Vo(t, n, J, r), N = t.memoizedState), (g = Zn || zc(t, n, g, r, Y, N, I)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = N), m.props = r, m.state = N, m.context = I, r = g) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      m = t.stateNode, pc(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : pn(t.type, g), m.props = I, q = t.pendingProps, Y = m.context, N = n.contextType, typeof N == "object" && N !== null ? N = ln(N) : (N = Wt(n) ? vi : Ot.current, N = Ki(t, N));
      var pe = n.getDerivedStateFromProps;
      (J = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (g !== q || Y !== N) && Vc(t, m, r, N), Zn = !1, Y = t.memoizedState, m.state = Y, Wr(t, r, m, l);
      var je = t.memoizedState;
      g !== q || Y !== je || Gt.current || Zn ? (typeof pe == "function" && (Vo(t, n, pe, r), je = t.memoizedState), (I = Zn || zc(t, n, I, r, Y, je, N) || !1) ? (J || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(r, je, N), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(r, je, N)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = je), m.props = r, m.state = je, m.context = N, r = I) : (typeof m.componentDidUpdate != "function" || g === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Wo(e, t, n, r, c, l);
  }
  function Wo(e, t, n, r, l, c) {
    Zc(e, t);
    var m = (t.flags & 128) !== 0;
    if (!r && !m) return l && sc(t, n, !1), $n(e, t, c);
    r = t.stateNode, Um.current = t;
    var g = m && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && m ? (t.child = Wi(t, e.child, null, c), t.child = Wi(t, null, g, c)) : Vt(e, t, g, c), t.memoizedState = r.state, l && sc(t, n, !0), t.child;
  }
  function ed(e) {
    var t = e.stateNode;
    t.pendingContext ? nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nc(e, t.context, !1), bo(e, t.containerInfo);
  }
  function td(e, t, n, r, l) {
    return Gi(), wo(l), t.flags |= 256, Vt(e, t, n, r), t.child;
  }
  var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function nd(e, t, n) {
    var r = t.pendingProps, l = pt.current, c = !1, m = (t.flags & 128) !== 0, g;
    if ((g = m) || (g = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), g ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ot(pt, l & 1), e === null)
      return So(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = r.children, e = r.fallback, c ? (r = t.mode, c = t.child, m = { mode: "hidden", children: m }, (r & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = ma(m, r, 0, null), e = Ci(e, r, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Yo(n), t.memoizedState = Qo, e) : Jo(t, m));
    if (l = e.memoizedState, l !== null && (g = l.dehydrated, g !== null)) return Hm(e, t, m, r, g, l, n);
    if (c) {
      c = r.fallback, m = t.mode, l = e.child, g = l.sibling;
      var N = { mode: "hidden", children: r.children };
      return (m & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = N, t.deletions = null) : (r = ri(l, N), r.subtreeFlags = l.subtreeFlags & 14680064), g !== null ? c = ri(g, c) : (c = Ci(c, m, n, null), c.flags |= 2), c.return = t, r.return = t, r.sibling = c, t.child = r, r = c, c = t.child, m = e.child.memoizedState, m = m === null ? Yo(n) : { baseLanes: m.baseLanes | n, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~n, t.memoizedState = Qo, r;
    }
    return c = e.child, e = c.sibling, r = ri(c, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Jo(e, t) {
    return t = ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ta(e, t, n, r) {
    return r !== null && wo(r), Wi(t, e.child, null, n), e = Jo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hm(e, t, n, r, l, c, m) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(o(422))), ta(e, t, m, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = r.fallback, l = t.mode, r = ma({ mode: "visible", children: r.children }, l, 0, null), c = Ci(c, l, m, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, (t.mode & 1) !== 0 && Wi(t, e.child, null, m), t.child.memoizedState = Yo(m), t.memoizedState = Qo, c);
    if ((t.mode & 1) === 0) return ta(e, t, m, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var g = r.dgst;
      return r = g, c = Error(o(419)), r = Uo(c, r, void 0), ta(e, t, m, r);
    }
    if (g = (m & e.childLanes) !== 0, Qt || g) {
      if (r = Ct, r !== null) {
        switch (m & -m) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== c.retryLane && (c.retryLane = l, Ln(e, l), yn(r, e, l, -1));
      }
      return fl(), r = Uo(Error(o(421))), ta(e, t, m, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), l._reactRetry = t, null) : (e = c.treeContext, tn = Qn(l.nextSibling), en = t, dt = !0, mn = null, e !== null && (an[on++] = Pn, an[on++] = An, an[on++] = ki, Pn = e.id, An = e.overflow, ki = t), t = Jo(t, r.children), t.flags |= 4096, t);
  }
  function id(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), To(e.return, t, n);
  }
  function Xo(e, t, n, r, l) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = n, c.tailMode = l);
  }
  function sd(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, c = r.tail;
    if (Vt(e, t, r.children, n), r = pt.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && id(e, n, t);
        else if (e.tag === 19) id(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ot(pt, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Qr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Xo(t, !1, l, n, c);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Qr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Xo(t, !0, n, null, c);
        break;
      case "together":
        Xo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function na(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Si |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Gm(e, t, n) {
    switch (t.tag) {
      case 3:
        ed(t), Gi();
        break;
      case 5:
        yc(t);
        break;
      case 1:
        Wt(t.type) && Fr(t);
        break;
      case 4:
        bo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ot(Ur, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ot(pt, pt.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? nd(e, t, n) : (ot(pt, pt.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        ot(pt, pt.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return sd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ot(pt, pt.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xc(e, t, n);
    }
    return $n(e, t, n);
  }
  var rd, Zo, ad, od;
  rd = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Zo = function() {
  }, ad = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, xi(Sn.current);
      var c = null;
      switch (n) {
        case "input":
          l = _e(e, l), r = _e(e, r), c = [];
          break;
        case "select":
          l = ee({}, l, { value: void 0 }), r = ee({}, r, { value: void 0 }), c = [];
          break;
        case "textarea":
          l = Ie(e, l), r = Ie(e, r), c = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      se(n, r);
      var m;
      n = null;
      for (I in l) if (!r.hasOwnProperty(I) && l.hasOwnProperty(I) && l[I] != null) if (I === "style") {
        var g = l[I];
        for (m in g) g.hasOwnProperty(m) && (n || (n = {}), n[m] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? c || (c = []) : (c = c || []).push(I, null));
      for (I in r) {
        var N = r[I];
        if (g = l?.[I], r.hasOwnProperty(I) && N !== g && (N != null || g != null)) if (I === "style") if (g) {
          for (m in g) !g.hasOwnProperty(m) || N && N.hasOwnProperty(m) || (n || (n = {}), n[m] = "");
          for (m in N) N.hasOwnProperty(m) && g[m] !== N[m] && (n || (n = {}), n[m] = N[m]);
        } else n || (c || (c = []), c.push(
          I,
          n
        )), n = N;
        else I === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, g = g ? g.__html : void 0, N != null && g !== N && (c = c || []).push(I, N)) : I === "children" ? typeof N != "string" && typeof N != "number" || (c = c || []).push(I, "" + N) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (N != null && I === "onScroll" && ut("scroll", e), c || g === N || (c = [])) : (c = c || []).push(I, N));
      }
      n && (c = c || []).push("style", n);
      var I = c;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, od = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Hs(e, t) {
    if (!dt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wm(e, t, n) {
    var r = t.pendingProps;
    switch (xo(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ft(t), null;
      case 1:
        return Wt(t.type) && Ir(), Ft(t), null;
      case 3:
        return r = t.stateNode, Ji(), ct(Gt), ct(Ot), Lo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mn !== null && (ul(mn), mn = null))), Zo(e, t), Ft(t), null;
      case 5:
        Po(t);
        var l = xi(zs.current);
        if (n = t.type, e !== null && t.stateNode != null) ad(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Ft(t), null;
          }
          if (e = xi(Sn.current), Vr(t)) {
            r = t.stateNode, n = t.type;
            var c = t.memoizedProps;
            switch (r[jn] = t, r[$s] = c, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ut("cancel", r), ut("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ut("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < As.length; l++) ut(As[l], r);
                break;
              case "source":
                ut("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ut(
                  "error",
                  r
                ), ut("load", r);
                break;
              case "details":
                ut("toggle", r);
                break;
              case "input":
                ae(r, c), ut("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!c.multiple }, ut("invalid", r);
                break;
              case "textarea":
                Qe(r, c), ut("invalid", r);
            }
            se(n, c), l = null;
            for (var m in c) if (c.hasOwnProperty(m)) {
              var g = c[m];
              m === "children" ? typeof g == "string" ? r.textContent !== g && (c.suppressHydrationWarning !== !0 && Rr(r.textContent, g, e), l = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (c.suppressHydrationWarning !== !0 && Rr(
                r.textContent,
                g,
                e
              ), l = ["children", "" + g]) : d.hasOwnProperty(m) && g != null && m === "onScroll" && ut("scroll", r);
            }
            switch (n) {
              case "input":
                de(r), Me(r, c, !0);
                break;
              case "textarea":
                de(r), $t(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = it(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = m.createElement(n, { is: r.is }) : (e = m.createElement(n), n === "select" && (m = e, r.multiple ? m.multiple = !0 : r.size && (m.size = r.size))) : e = m.createElementNS(e, n), e[jn] = t, e[$s] = r, rd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = be(n, r), n) {
                case "dialog":
                  ut("cancel", e), ut("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ut("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < As.length; l++) ut(As[l], e);
                  l = r;
                  break;
                case "source":
                  ut("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ut(
                    "error",
                    e
                  ), ut("load", e), l = r;
                  break;
                case "details":
                  ut("toggle", e), l = r;
                  break;
                case "input":
                  ae(e, r), l = _e(e, r), ut("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = ee({}, r, { value: void 0 }), ut("invalid", e);
                  break;
                case "textarea":
                  Qe(e, r), l = Ie(e, r), ut("invalid", e);
                  break;
                default:
                  l = r;
              }
              se(n, l), g = l;
              for (c in g) if (g.hasOwnProperty(c)) {
                var N = g[c];
                c === "style" ? A(e, N) : c === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && Mt(e, N)) : c === "children" ? typeof N == "string" ? (n !== "textarea" || N !== "") && zt(e, N) : typeof N == "number" && zt(e, "" + N) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (d.hasOwnProperty(c) ? N != null && c === "onScroll" && ut("scroll", e) : N != null && B(e, c, N, m));
              }
              switch (n) {
                case "input":
                  de(e), Me(e, r, !1);
                  break;
                case "textarea":
                  de(e), $t(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Te(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, c = r.value, c != null ? Ge(e, !!r.multiple, c, !1) : r.defaultValue != null && Ge(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ft(t), null;
      case 6:
        if (e && t.stateNode != null) od(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = xi(zs.current), xi(Sn.current), Vr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[jn] = t, (c = r.nodeValue !== n) && (e = en, e !== null)) switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jn] = t, t.stateNode = r;
        }
        return Ft(t), null;
      case 13:
        if (ct(pt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (dt && tn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) cc(), Gi(), t.flags |= 98560, c = !1;
          else if (c = Vr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[jn] = t;
            } else Gi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ft(t), c = !1;
          } else mn !== null && (ul(mn), mn = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (pt.current & 1) !== 0 ? wt === 0 && (wt = 3) : fl())), t.updateQueue !== null && (t.flags |= 4), Ft(t), null);
      case 4:
        return Ji(), Zo(e, t), e === null && Ls(t.stateNode.containerInfo), Ft(t), null;
      case 10:
        return Co(t.type._context), Ft(t), null;
      case 17:
        return Wt(t.type) && Ir(), Ft(t), null;
      case 19:
        if (ct(pt), c = t.memoizedState, c === null) return Ft(t), null;
        if (r = (t.flags & 128) !== 0, m = c.rendering, m === null) if (r) Hs(c, !1);
        else {
          if (wt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = Qr(e), m !== null) {
              for (t.flags |= 128, Hs(c, !1), r = m.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) c = n, e = r, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ot(pt, pt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && ht() > es && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Qr(m), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !dt) return Ft(t), null;
          } else 2 * ht() - c.renderingStartTime > es && n !== 1073741824 && (t.flags |= 128, r = !0, Hs(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (n = c.last, n !== null ? n.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = ht(), t.sibling = null, n = pt.current, ot(pt, r ? n & 1 | 2 : n & 1), t) : (Ft(t), null);
      case 22:
      case 23:
        return dl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (nn & 1073741824) !== 0 && (Ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ft(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Qm(e, t) {
    switch (xo(t), t.tag) {
      case 1:
        return Wt(t.type) && Ir(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ji(), ct(Gt), ct(Ot), Lo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Po(t), null;
      case 13:
        if (ct(pt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Gi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ct(pt), null;
      case 4:
        return Ji(), null;
      case 10:
        return Co(t.type._context), null;
      case 22:
      case 23:
        return dl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ia = !1, Dt = !1, Ym = typeof WeakSet == "function" ? WeakSet : Set, xe = null;
  function Zi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      kt(e, t, r);
    }
    else n.current = null;
  }
  function qo(e, t, n) {
    try {
      n();
    } catch (r) {
      kt(e, t, r);
    }
  }
  var ld = !1;
  function Jm(e, t) {
    if (co = wr, e = zu(), no(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, c = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var m = 0, g = -1, N = -1, I = 0, J = 0, q = e, Y = null;
          t: for (; ; ) {
            for (var pe; q !== n || l !== 0 && q.nodeType !== 3 || (g = m + l), q !== c || r !== 0 && q.nodeType !== 3 || (N = m + r), q.nodeType === 3 && (m += q.nodeValue.length), (pe = q.firstChild) !== null; )
              Y = q, q = pe;
            for (; ; ) {
              if (q === e) break t;
              if (Y === n && ++I === l && (g = m), Y === c && ++J === r && (N = m), (pe = q.nextSibling) !== null) break;
              q = Y, Y = q.parentNode;
            }
            q = pe;
          }
          n = g === -1 || N === -1 ? null : { start: g, end: N };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fo = { focusedElem: e, selectionRange: n }, wr = !1, xe = t; xe !== null; ) if (t = xe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, xe = e;
    else for (; xe !== null; ) {
      t = xe;
      try {
        var je = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (je !== null) {
              var Ee = je.memoizedProps, gt = je.memoizedState, R = t.stateNode, M = R.getSnapshotBeforeUpdate(t.elementType === t.type ? Ee : pn(t.type, Ee), gt);
              R.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var O = t.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (ne) {
        kt(t, t.return, ne);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, xe = e;
        break;
      }
      xe = t.return;
    }
    return je = ld, ld = !1, je;
  }
  function Gs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          l.destroy = void 0, c !== void 0 && qo(t, n, c);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function sa(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function el(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ud(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ud(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[$s], delete t[vo], delete t[Am], delete t[Lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function dd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function tl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (tl(e, t, n), e = e.sibling; e !== null; ) tl(e, t, n), e = e.sibling;
  }
  function nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (nl(e, t, n), e = e.sibling; e !== null; ) nl(e, t, n), e = e.sibling;
  }
  var At = null, vn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) fd(e, t, n), n = n.sibling;
  }
  function fd(e, t, n) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function") try {
      Bt.onCommitFiberUnmount(mt, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Dt || Zi(n, t);
      case 6:
        var r = At, l = vn;
        At = null, ei(e, t, n), At = r, vn = l, At !== null && (vn ? (e = At, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : At.removeChild(n.stateNode));
        break;
      case 18:
        At !== null && (vn ? (e = At, n = n.stateNode, e.nodeType === 8 ? po(e.parentNode, n) : e.nodeType === 1 && po(e, n), Es(e)) : po(At, n.stateNode));
        break;
      case 4:
        r = At, l = vn, At = n.stateNode.containerInfo, vn = !0, ei(e, t, n), At = r, vn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var c = l, m = c.destroy;
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && qo(n, t, m), l = l.next;
          } while (l !== r);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Dt && (Zi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          kt(n, t, g);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Dt = (r = Dt) || n.memoizedState !== null, ei(e, t, n), Dt = r) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ym()), t.forEach(function(r) {
        var l = rp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function kn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var c = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              At = g.stateNode, vn = !1;
              break e;
            case 3:
              At = g.stateNode.containerInfo, vn = !0;
              break e;
            case 4:
              At = g.stateNode.containerInfo, vn = !0;
              break e;
          }
          g = g.return;
        }
        if (At === null) throw Error(o(160));
        fd(c, m, l), At = null, vn = !1;
        var N = l.alternate;
        N !== null && (N.return = null), l.return = null;
      } catch (I) {
        kt(l, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) md(t, e), t = t.sibling;
  }
  function md(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (kn(t, e), En(e), r & 4) {
          try {
            Gs(3, e, e.return), sa(3, e);
          } catch (Ee) {
            kt(e, e.return, Ee);
          }
          try {
            Gs(5, e, e.return);
          } catch (Ee) {
            kt(e, e.return, Ee);
          }
        }
        break;
      case 1:
        kn(t, e), En(e), r & 512 && n !== null && Zi(n, n.return);
        break;
      case 5:
        if (kn(t, e), En(e), r & 512 && n !== null && Zi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            zt(l, "");
          } catch (Ee) {
            kt(e, e.return, Ee);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var c = e.memoizedProps, m = n !== null ? n.memoizedProps : c, g = e.type, N = e.updateQueue;
          if (e.updateQueue = null, N !== null) try {
            g === "input" && c.type === "radio" && c.name != null && ve(l, c), be(g, m);
            var I = be(g, c);
            for (m = 0; m < N.length; m += 2) {
              var J = N[m], q = N[m + 1];
              J === "style" ? A(l, q) : J === "dangerouslySetInnerHTML" ? Mt(l, q) : J === "children" ? zt(l, q) : B(l, J, q, I);
            }
            switch (g) {
              case "input":
                ge(l, c);
                break;
              case "textarea":
                at(l, c);
                break;
              case "select":
                var Y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!c.multiple;
                var pe = c.value;
                pe != null ? Ge(l, !!c.multiple, pe, !1) : Y !== !!c.multiple && (c.defaultValue != null ? Ge(
                  l,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : Ge(l, !!c.multiple, c.multiple ? [] : "", !1));
            }
            l[$s] = c;
          } catch (Ee) {
            kt(e, e.return, Ee);
          }
        }
        break;
      case 6:
        if (kn(t, e), En(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, c = e.memoizedProps;
          try {
            l.nodeValue = c;
          } catch (Ee) {
            kt(e, e.return, Ee);
          }
        }
        break;
      case 3:
        if (kn(t, e), En(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Es(t.containerInfo);
        } catch (Ee) {
          kt(e, e.return, Ee);
        }
        break;
      case 4:
        kn(t, e), En(e);
        break;
      case 13:
        kn(t, e), En(e), l = e.child, l.flags & 8192 && (c = l.memoizedState !== null, l.stateNode.isHidden = c, !c || l.alternate !== null && l.alternate.memoizedState !== null || (rl = ht())), r & 4 && hd(e);
        break;
      case 22:
        if (J = n !== null && n.memoizedState !== null, e.mode & 1 ? (Dt = (I = Dt) || J, kn(t, e), Dt = I) : kn(t, e), En(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !J && (e.mode & 1) !== 0) for (xe = e, J = e.child; J !== null; ) {
            for (q = xe = J; xe !== null; ) {
              switch (Y = xe, pe = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, Y, Y.return);
                  break;
                case 1:
                  Zi(Y, Y.return);
                  var je = Y.stateNode;
                  if (typeof je.componentWillUnmount == "function") {
                    r = Y, n = Y.return;
                    try {
                      t = r, je.props = t.memoizedProps, je.state = t.memoizedState, je.componentWillUnmount();
                    } catch (Ee) {
                      kt(r, n, Ee);
                    }
                  }
                  break;
                case 5:
                  Zi(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    kd(q);
                    continue;
                  }
              }
              pe !== null ? (pe.return = Y, xe = pe) : kd(q);
            }
            J = J.sibling;
          }
          e: for (J = null, q = e; ; ) {
            if (q.tag === 5) {
              if (J === null) {
                J = q;
                try {
                  l = q.stateNode, I ? (c = l.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (g = q.stateNode, N = q.memoizedProps.style, m = N != null && N.hasOwnProperty("display") ? N.display : null, g.style.display = Ye("display", m));
                } catch (Ee) {
                  kt(e, e.return, Ee);
                }
              }
            } else if (q.tag === 6) {
              if (J === null) try {
                q.stateNode.nodeValue = I ? "" : q.memoizedProps;
              } catch (Ee) {
                kt(e, e.return, Ee);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              J === q && (J = null), q = q.return;
            }
            J === q && (J = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        kn(t, e), En(e), r & 4 && hd(e);
        break;
      case 21:
        break;
      default:
        kn(
          t,
          e
        ), En(e);
    }
  }
  function En(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (cd(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (zt(l, ""), r.flags &= -33);
            var c = dd(e);
            nl(e, c, l);
            break;
          case 3:
          case 4:
            var m = r.stateNode.containerInfo, g = dd(e);
            tl(e, g, m);
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        kt(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e, t, n) {
    xe = e, pd(e);
  }
  function pd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; xe !== null; ) {
      var l = xe, c = l.child;
      if (l.tag === 22 && r) {
        var m = l.memoizedState !== null || ia;
        if (!m) {
          var g = l.alternate, N = g !== null && g.memoizedState !== null || Dt;
          g = ia;
          var I = Dt;
          if (ia = m, (Dt = N) && !I) for (xe = l; xe !== null; ) m = xe, N = m.child, m.tag === 22 && m.memoizedState !== null ? yd(l) : N !== null ? (N.return = m, xe = N) : yd(l);
          for (; c !== null; ) xe = c, pd(c), c = c.sibling;
          xe = l, ia = g, Dt = I;
        }
        vd(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = l, xe = c) : vd(e);
    }
  }
  function vd(e) {
    for (; xe !== null; ) {
      var t = xe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Dt || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Dt) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : pn(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && kc(t, c, r);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                kc(t, m, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var N = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && n.focus();
                    break;
                  case "img":
                    N.src && (n.src = N.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var I = t.alternate;
                if (I !== null) {
                  var J = I.memoizedState;
                  if (J !== null) {
                    var q = J.dehydrated;
                    q !== null && Es(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          Dt || t.flags & 512 && el(t);
        } catch (Y) {
          kt(t, t.return, Y);
        }
      }
      if (t === e) {
        xe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, xe = n;
        break;
      }
      xe = t.return;
    }
  }
  function kd(e) {
    for (; xe !== null; ) {
      var t = xe;
      if (t === e) {
        xe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, xe = n;
        break;
      }
      xe = t.return;
    }
  }
  function yd(e) {
    for (; xe !== null; ) {
      var t = xe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              sa(4, t);
            } catch (N) {
              kt(t, n, N);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (N) {
                kt(t, l, N);
              }
            }
            var c = t.return;
            try {
              el(t);
            } catch (N) {
              kt(t, c, N);
            }
            break;
          case 5:
            var m = t.return;
            try {
              el(t);
            } catch (N) {
              kt(t, m, N);
            }
        }
      } catch (N) {
        kt(t, t.return, N);
      }
      if (t === e) {
        xe = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, xe = g;
        break;
      }
      xe = t.return;
    }
  }
  var Zm = Math.ceil, ra = z.ReactCurrentDispatcher, il = z.ReactCurrentOwner, cn = z.ReactCurrentBatchConfig, Xe = 0, Ct = null, jt = null, Lt = 0, nn = 0, qi = Yn(0), wt = 0, Ws = null, Si = 0, aa = 0, sl = 0, Qs = null, Yt = null, rl = 0, es = 1 / 0, On = null, oa = !1, al = null, ti = null, la = !1, ni = null, ua = 0, Ys = 0, ol = null, ca = -1, da = 0;
  function Kt() {
    return (Xe & 6) !== 0 ? ht() : ca !== -1 ? ca : ca = ht();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (Xe & 2) !== 0 && Lt !== 0 ? Lt & -Lt : $m.transition !== null ? (da === 0 && (da = du()), da) : (e = nt, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xu(e.type)), e);
  }
  function yn(e, t, n, r) {
    if (50 < Ys) throw Ys = 0, ol = null, Error(o(185));
    gs(e, n, r), ((Xe & 2) === 0 || e !== Ct) && (e === Ct && ((Xe & 2) === 0 && (aa |= n), wt === 4 && si(e, Lt)), Jt(e, r), n === 1 && Xe === 0 && (t.mode & 1) === 0 && (es = ht() + 500, Dr && Xn()));
  }
  function Jt(e, t) {
    var n = e.callbackNode;
    $h(e, t);
    var r = xr(e, e === Ct ? Lt : 0);
    if (r === 0) n !== null && vr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && vr(n), t === 1) e.tag === 0 ? Rm(xd.bind(null, e)) : rc(xd.bind(null, e)), bm(function() {
        (Xe & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (fu(r)) {
          case 1:
            n = xn;
            break;
          case 4:
            n = $;
            break;
          case 16:
            n = ke;
            break;
          case 536870912:
            n = Zt;
            break;
          default:
            n = ke;
        }
        n = Md(n, gd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function gd(e, t) {
    if (ca = -1, da = 0, (Xe & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (ts() && e.callbackNode !== n) return null;
    var r = xr(e, e === Ct ? Lt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = fa(e, r);
    else {
      t = r;
      var l = Xe;
      Xe |= 2;
      var c = Sd();
      (Ct !== e || Lt !== t) && (On = null, es = ht() + 500, Ei(e, t));
      do
        try {
          tp();
          break;
        } catch (g) {
          jd(e, g);
        }
      while (!0);
      No(), ra.current = c, Xe = l, jt !== null ? t = 0 : (Ct = null, Lt = 0, t = wt);
    }
    if (t !== 0) {
      if (t === 2 && (l = za(e), l !== 0 && (r = l, t = ll(e, l))), t === 1) throw n = Ws, Ei(e, 0), si(e, r), Jt(e, ht()), n;
      if (t === 6) si(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !qm(l) && (t = fa(e, r), t === 2 && (c = za(e), c !== 0 && (r = c, t = ll(e, c))), t === 1)) throw n = Ws, Ei(e, 0), si(e, r), Jt(e, ht()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Ni(e, Yt, On);
            break;
          case 3:
            if (si(e, r), (r & 130023424) === r && (t = rl + 500 - ht(), 10 < t)) {
              if (xr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Kt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = mo(Ni.bind(null, e, Yt, On), t);
              break;
            }
            Ni(e, Yt, On);
            break;
          case 4:
            if (si(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var m = 31 - Pt(r);
              c = 1 << m, m = t[m], m > l && (l = m), r &= ~c;
            }
            if (r = l, r = ht() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = mo(Ni.bind(null, e, Yt, On), r);
              break;
            }
            Ni(e, Yt, On);
            break;
          case 5:
            Ni(e, Yt, On);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Jt(e, ht()), e.callbackNode === n ? gd.bind(null, e) : null;
  }
  function ll(e, t) {
    var n = Qs;
    return e.current.memoizedState.isDehydrated && (Ei(e, t).flags |= 256), e = fa(e, t), e !== 2 && (t = Yt, Yt = n, t !== null && ul(t)), e;
  }
  function ul(e) {
    Yt === null ? Yt = e : Yt.push.apply(Yt, e);
  }
  function qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], c = l.getSnapshot;
          l = l.value;
          try {
            if (!hn(c(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function si(e, t) {
    for (t &= ~sl, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function xd(e) {
    if ((Xe & 6) !== 0) throw Error(o(327));
    ts();
    var t = xr(e, 0);
    if ((t & 1) === 0) return Jt(e, ht()), null;
    var n = fa(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = za(e);
      r !== 0 && (t = r, n = ll(e, r));
    }
    if (n === 1) throw n = Ws, Ei(e, 0), si(e, t), Jt(e, ht()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ni(e, Yt, On), Jt(e, ht()), null;
  }
  function cl(e, t) {
    var n = Xe;
    Xe |= 1;
    try {
      return e(t);
    } finally {
      Xe = n, Xe === 0 && (es = ht() + 500, Dr && Xn());
    }
  }
  function wi(e) {
    ni !== null && ni.tag === 0 && (Xe & 6) === 0 && ts();
    var t = Xe;
    Xe |= 1;
    var n = cn.transition, r = nt;
    try {
      if (cn.transition = null, nt = 1, e) return e();
    } finally {
      nt = r, cn.transition = n, Xe = t, (Xe & 6) === 0 && Xn();
    }
  }
  function dl() {
    nn = qi.current, ct(qi);
  }
  function Ei(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _m(n)), jt !== null) for (n = jt.return; n !== null; ) {
      var r = n;
      switch (xo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ir();
          break;
        case 3:
          Ji(), ct(Gt), ct(Ot), Lo();
          break;
        case 5:
          Po(r);
          break;
        case 4:
          Ji();
          break;
        case 13:
          ct(pt);
          break;
        case 19:
          ct(pt);
          break;
        case 10:
          Co(r.type._context);
          break;
        case 22:
        case 23:
          dl();
      }
      n = n.return;
    }
    if (Ct = e, jt = e = ri(e.current, null), Lt = nn = t, wt = 0, Ws = null, sl = aa = Si = 0, Yt = Qs = null, gi !== null) {
      for (t = 0; t < gi.length; t++) if (n = gi[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, c = n.pending;
        if (c !== null) {
          var m = c.next;
          c.next = l, r.next = m;
        }
        n.pending = r;
      }
      gi = null;
    }
    return e;
  }
  function jd(e, t) {
    do {
      var n = jt;
      try {
        if (No(), Yr.current = qr, Jr) {
          for (var r = vt.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Jr = !1;
        }
        if (ji = 0, Nt = St = vt = null, Bs = !1, Vs = 0, il.current = null, n === null || n.return === null) {
          wt = 1, Ws = t, jt = null;
          break;
        }
        e: {
          var c = e, m = n.return, g = n, N = t;
          if (t = Lt, g.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var I = N, J = g, q = J.tag;
            if ((J.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Y = J.alternate;
              Y ? (J.updateQueue = Y.updateQueue, J.memoizedState = Y.memoizedState, J.lanes = Y.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var pe = Gc(m);
            if (pe !== null) {
              pe.flags &= -257, Wc(pe, m, g, c, t), pe.mode & 1 && Hc(c, I, t), t = pe, N = I;
              var je = t.updateQueue;
              if (je === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(N), t.updateQueue = Ee;
              } else je.add(N);
              break e;
            } else {
              if ((t & 1) === 0) {
                Hc(c, I, t), fl();
                break e;
              }
              N = Error(o(426));
            }
          } else if (dt && g.mode & 1) {
            var gt = Gc(m);
            if (gt !== null) {
              (gt.flags & 65536) === 0 && (gt.flags |= 256), Wc(gt, m, g, c, t), wo(Xi(N, g));
              break e;
            }
          }
          c = N = Xi(N, g), wt !== 4 && (wt = 2), Qs === null ? Qs = [c] : Qs.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var R = Kc(c, N, t);
                vc(c, R);
                break e;
              case 1:
                g = N;
                var M = c.type, O = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ti === null || !ti.has(O)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var ne = Uc(c, g, t);
                  vc(c, ne);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Ed(n);
      } catch (Ne) {
        t = Ne, jt === n && n !== null && (jt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sd() {
    var e = ra.current;
    return ra.current = qr, e === null ? qr : e;
  }
  function fl() {
    (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Ct === null || (Si & 268435455) === 0 && (aa & 268435455) === 0 || si(Ct, Lt);
  }
  function fa(e, t) {
    var n = Xe;
    Xe |= 2;
    var r = Sd();
    (Ct !== e || Lt !== t) && (On = null, Ei(e, t));
    do
      try {
        ep();
        break;
      } catch (l) {
        jd(e, l);
      }
    while (!0);
    if (No(), Xe = n, ra.current = r, jt !== null) throw Error(o(261));
    return Ct = null, Lt = 0, wt;
  }
  function ep() {
    for (; jt !== null; ) wd(jt);
  }
  function tp() {
    for (; jt !== null && !kr(); ) wd(jt);
  }
  function wd(e) {
    var t = Td(e.alternate, e, nn);
    e.memoizedProps = e.pendingProps, t === null ? Ed(e) : jt = t, il.current = null;
  }
  function Ed(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wm(n, t, nn), n !== null) {
          jt = n;
          return;
        }
      } else {
        if (n = Qm(n, t), n !== null) {
          n.flags &= 32767, jt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          wt = 6, jt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        jt = t;
        return;
      }
      jt = t = e;
    } while (t !== null);
    wt === 0 && (wt = 5);
  }
  function Ni(e, t, n) {
    var r = nt, l = cn.transition;
    try {
      cn.transition = null, nt = 1, np(e, t, n, r);
    } finally {
      cn.transition = l, nt = r;
    }
    return null;
  }
  function np(e, t, n, r) {
    do
      ts();
    while (ni !== null);
    if ((Xe & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if (Oh(e, c), e === Ct && (jt = Ct = null, Lt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || la || (la = !0, Md(ke, function() {
      return ts(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = cn.transition, cn.transition = null;
      var m = nt;
      nt = 1;
      var g = Xe;
      Xe |= 4, il.current = null, Jm(e, n), md(n, e), Sm(fo), wr = !!co, fo = co = null, e.current = n, Xm(n), Da(), Xe = g, nt = m, cn.transition = c;
    } else e.current = n;
    if (la && (la = !1, ni = e, ua = l), c = e.pendingLanes, c === 0 && (ti = null), ks(n.stateNode), Jt(e, ht()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (oa) throw oa = !1, e = al, al = null, e;
    return (ua & 1) !== 0 && e.tag !== 0 && ts(), c = e.pendingLanes, (c & 1) !== 0 ? e === ol ? Ys++ : (Ys = 0, ol = e) : Ys = 0, Xn(), null;
  }
  function ts() {
    if (ni !== null) {
      var e = fu(ua), t = cn.transition, n = nt;
      try {
        if (cn.transition = null, nt = 16 > e ? 16 : e, ni === null) var r = !1;
        else {
          if (e = ni, ni = null, ua = 0, (Xe & 6) !== 0) throw Error(o(331));
          var l = Xe;
          for (Xe |= 4, xe = e.current; xe !== null; ) {
            var c = xe, m = c.child;
            if ((xe.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var N = 0; N < g.length; N++) {
                  var I = g[N];
                  for (xe = I; xe !== null; ) {
                    var J = xe;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, J, c);
                    }
                    var q = J.child;
                    if (q !== null) q.return = J, xe = q;
                    else for (; xe !== null; ) {
                      J = xe;
                      var Y = J.sibling, pe = J.return;
                      if (ud(J), J === I) {
                        xe = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = pe, xe = Y;
                        break;
                      }
                      xe = pe;
                    }
                  }
                }
                var je = c.alternate;
                if (je !== null) {
                  var Ee = je.child;
                  if (Ee !== null) {
                    je.child = null;
                    do {
                      var gt = Ee.sibling;
                      Ee.sibling = null, Ee = gt;
                    } while (Ee !== null);
                  }
                }
                xe = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, xe = m;
            else e: for (; xe !== null; ) {
              if (c = xe, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, c, c.return);
              }
              var R = c.sibling;
              if (R !== null) {
                R.return = c.return, xe = R;
                break e;
              }
              xe = c.return;
            }
          }
          var M = e.current;
          for (xe = M; xe !== null; ) {
            m = xe;
            var O = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && O !== null) O.return = m, xe = O;
            else e: for (m = M; xe !== null; ) {
              if (g = xe, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sa(9, g);
                }
              } catch (Ne) {
                kt(g, g.return, Ne);
              }
              if (g === m) {
                xe = null;
                break e;
              }
              var ne = g.sibling;
              if (ne !== null) {
                ne.return = g.return, xe = ne;
                break e;
              }
              xe = g.return;
            }
          }
          if (Xe = l, Xn(), Bt && typeof Bt.onPostCommitFiberRoot == "function") try {
            Bt.onPostCommitFiberRoot(mt, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        nt = n, cn.transition = t;
      }
    }
    return !1;
  }
  function Nd(e, t, n) {
    t = Xi(n, t), t = Kc(e, t, 1), e = qn(e, t, 1), t = Kt(), e !== null && (gs(e, 1, t), Jt(e, t));
  }
  function kt(e, t, n) {
    if (e.tag === 3) Nd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ti === null || !ti.has(r))) {
          e = Xi(n, e), e = Uc(t, e, 1), t = qn(t, e, 1), e = Kt(), t !== null && (gs(t, 1, e), Jt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ip(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Kt(), e.pingedLanes |= e.suspendedLanes & n, Ct === e && (Lt & n) === n && (wt === 4 || wt === 3 && (Lt & 130023424) === Lt && 500 > ht() - rl ? Ei(e, 0) : sl |= n), Jt(e, t);
  }
  function Cd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = gr, gr <<= 1, (gr & 130023424) === 0 && (gr = 4194304)));
    var n = Kt();
    e = Ln(e, t), e !== null && (gs(e, t, n), Jt(e, n));
  }
  function sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Cd(e, n);
  }
  function rp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), Cd(e, n);
  }
  var Td;
  Td = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Gt.current) Qt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Qt = !1, Gm(e, t, n);
      Qt = (e.flags & 131072) !== 0;
    }
    else Qt = !1, dt && (t.flags & 1048576) !== 0 && ac(t, Br, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        na(e, t), e = t.pendingProps;
        var l = Ki(t, Ot.current);
        Yi(t, n), l = Oo(null, t, r, e, l, n);
        var c = Io();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Wt(r) ? (c = !0, Fr(t)) : c = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _o(t), l.updater = ea, t.stateNode = l, l._reactInternals = t, Ko(t, r, e, n), t = Wo(null, t, r, !0, c, n)) : (t.tag = 0, dt && c && go(t), Vt(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (na(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = op(r), e = pn(r, e), l) {
            case 0:
              t = Go(null, t, r, e, n);
              break e;
            case 1:
              t = qc(null, t, r, e, n);
              break e;
            case 11:
              t = Qc(null, t, r, e, n);
              break e;
            case 14:
              t = Yc(null, t, r, pn(r.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pn(r, l), Go(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pn(r, l), qc(e, t, r, l, n);
      case 3:
        e: {
          if (ed(t), e === null) throw Error(o(387));
          r = t.pendingProps, c = t.memoizedState, l = c.element, pc(e, t), Wr(t, r, null, n);
          var m = t.memoizedState;
          if (r = m.element, c.isDehydrated) if (c = { element: r, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            l = Xi(Error(o(423)), t), t = td(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Xi(Error(o(424)), t), t = td(e, t, r, n, l);
            break e;
          } else for (tn = Qn(t.stateNode.containerInfo.firstChild), en = t, dt = !0, mn = null, n = hc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Gi(), r === l) {
              t = $n(e, t, n);
              break e;
            }
            Vt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return yc(t), e === null && So(t), r = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = l.children, ho(r, l) ? m = null : c !== null && ho(r, c) && (t.flags |= 32), Zc(e, t), Vt(e, t, m, n), t.child;
      case 6:
        return e === null && So(t), null;
      case 13:
        return nd(e, t, n);
      case 4:
        return bo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wi(t, null, r, n) : Vt(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pn(r, l), Qc(e, t, r, l, n);
      case 7:
        return Vt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Vt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Vt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, c = t.memoizedProps, m = l.value, ot(Ur, r._currentValue), r._currentValue = m, c !== null) if (hn(c.value, m)) {
            if (c.children === l.children && !Gt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var g = c.dependencies;
            if (g !== null) {
              m = c.child;
              for (var N = g.firstContext; N !== null; ) {
                if (N.context === r) {
                  if (c.tag === 1) {
                    N = Rn(-1, n & -n), N.tag = 2;
                    var I = c.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var J = I.pending;
                      J === null ? N.next = N : (N.next = J.next, J.next = N), I.pending = N;
                    }
                  }
                  c.lanes |= n, N = c.alternate, N !== null && (N.lanes |= n), To(
                    c.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                N = N.next;
              }
            } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (m = c.return, m === null) throw Error(o(341));
              m.lanes |= n, g = m.alternate, g !== null && (g.lanes |= n), To(m, n, t), m = c.sibling;
            } else m = c.child;
            if (m !== null) m.return = c;
            else for (m = c; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (c = m.sibling, c !== null) {
                c.return = m.return, m = c;
                break;
              }
              m = m.return;
            }
            c = m;
          }
          Vt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Yi(t, n), l = ln(l), r = r(l), t.flags |= 1, Vt(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = pn(r, t.pendingProps), l = pn(r.type, l), Yc(e, t, r, l, n);
      case 15:
        return Jc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pn(r, l), na(e, t), t.tag = 1, Wt(r) ? (e = !0, Fr(t)) : e = !1, Yi(t, n), Bc(t, r, l), Ko(t, r, l, n), Wo(null, t, r, !0, e, n);
      case 19:
        return sd(e, t, n);
      case 22:
        return Xc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Md(e, t) {
    return bt(e, t);
  }
  function ap(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, t, n, r) {
    return new ap(e, t, n, r);
  }
  function hl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function op(e) {
    if (typeof e == "function") return hl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === we) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = dn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ha(e, t, n, r, l, c) {
    var m = 2;
    if (r = e, typeof e == "function") hl(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case F:
        return Ci(n.children, l, c, t);
      case L:
        m = 8, l |= 8;
        break;
      case K:
        return e = dn(12, n, t, l | 2), e.elementType = K, e.lanes = c, e;
      case W:
        return e = dn(13, n, t, l), e.elementType = W, e.lanes = c, e;
      case le:
        return e = dn(19, n, t, l), e.elementType = le, e.lanes = c, e;
      case fe:
        return ma(n, l, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case X:
            m = 10;
            break e;
          case re:
            m = 9;
            break e;
          case we:
            m = 11;
            break e;
          case U:
            m = 14;
            break e;
          case ue:
            m = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = dn(m, n, t, l), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function Ci(e, t, n, r) {
    return e = dn(7, e, r, t), e.lanes = n, e;
  }
  function ma(e, t, n, r) {
    return e = dn(22, e, r, t), e.elementType = fe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ml(e, t, n) {
    return e = dn(6, e, null, t), e.lanes = n, e;
  }
  function pl(e, t, n) {
    return t = dn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function lp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ba(0), this.expirationTimes = Ba(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ba(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function vl(e, t, n, r, l, c, m, g, N) {
    return e = new lp(e, t, n, g, N), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = dn(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _o(c), e;
  }
  function up(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function _d(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (Mn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Wt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Wt(n)) return ic(e, n, t);
    }
    return t;
  }
  function bd(e, t, n, r, l, c, m, g, N) {
    return e = vl(n, r, !0, e, l, c, m, g, N), e.context = _d(null), n = e.current, r = Kt(), l = ii(n), c = Rn(r, l), c.callback = t ?? null, qn(n, c, l), e.current.lanes = l, gs(e, l, r), Jt(e, r), e;
  }
  function pa(e, t, n, r) {
    var l = t.current, c = Kt(), m = ii(l);
    return n = _d(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(c, m), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qn(l, t, m), e !== null && (yn(e, l, m, c), Gr(e, l, m)), m;
  }
  function va(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Pd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function kl(e, t) {
    Pd(e, t), (e = e.alternate) && Pd(e, t);
  }
  function cp() {
    return null;
  }
  var Ad = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function yl(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = yl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    pa(e, t, null, null);
  }, ka.prototype.unmount = yl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wi(function() {
        pa(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && yu(e);
    }
  };
  function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ld() {
  }
  function dp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var c = r;
        r = function() {
          var I = va(m);
          c.call(I);
        };
      }
      var m = bd(t, r, e, 0, null, !1, !1, "", Ld);
      return e._reactRootContainer = m, e[_n] = m.current, Ls(e.nodeType === 8 ? e.parentNode : e), wi(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = va(N);
        g.call(I);
      };
    }
    var N = vl(e, 0, !1, null, null, !1, !1, "", Ld);
    return e._reactRootContainer = N, e[_n] = N.current, Ls(e.nodeType === 8 ? e.parentNode : e), wi(function() {
      pa(t, N, n, r);
    }), N;
  }
  function ga(e, t, n, r, l) {
    var c = n._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof l == "function") {
        var g = l;
        l = function() {
          var N = va(m);
          g.call(N);
        };
      }
      pa(t, m, e, l);
    } else m = dp(n, t, e, l, r);
    return va(m);
  }
  hu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ys(t.pendingLanes);
          n !== 0 && (Va(t, n | 1), Jt(t, ht()), (Xe & 6) === 0 && (es = ht() + 500, Xn()));
        }
        break;
      case 13:
        wi(function() {
          var r = Ln(e, 1);
          if (r !== null) {
            var l = Kt();
            yn(r, e, 1, l);
          }
        }), kl(e, 1);
    }
  }, Ka = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Kt();
        yn(t, e, 134217728, n);
      }
      kl(e, 134217728);
    }
  }, mu = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var r = Kt();
        yn(n, e, t, r);
      }
      kl(e, t);
    }
  }, pu = function() {
    return nt;
  }, vu = function(e, t) {
    var n = nt;
    try {
      return nt = e, t();
    } finally {
      nt = n;
    }
  }, tt = function(e, t, n) {
    switch (t) {
      case "input":
        if (ge(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Or(r);
              if (!l) throw Error(o(90));
              oe(r), ge(r, l);
            }
          }
        }
        break;
      case "textarea":
        at(e, n);
        break;
      case "select":
        t = n.value, t != null && Ge(e, !!n.multiple, t, !1);
    }
  }, dr = cl, ms = wi;
  var fp = { usingClientEntryPoint: !1, Events: [Os, Bi, Or, fi, hs, cl] }, Js = { findFiberByHostInstance: pi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hp = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = mr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xa.isDisabled && xa.supportsFiber) try {
      mt = xa.inject(hp), Bt = xa;
    } catch {
    }
  }
  return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp, Xt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gl(t)) throw Error(o(200));
    return up(e, t, null, n);
  }, Xt.createRoot = function(e, t) {
    if (!gl(e)) throw Error(o(299));
    var n = !1, r = "", l = Ad;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = vl(e, 1, !1, null, null, n, !1, r, l), e[_n] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new yl(t);
  }, Xt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = mr(t), e = e === null ? null : e.stateNode, e;
  }, Xt.flushSync = function(e) {
    return wi(e);
  }, Xt.hydrate = function(e, t, n) {
    if (!ya(t)) throw Error(o(200));
    return ga(null, e, t, !0, n);
  }, Xt.hydrateRoot = function(e, t, n) {
    if (!gl(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, l = !1, c = "", m = Ad;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), t = bd(t, null, e, 1, n ?? null, l, !1, c, m), e[_n] = t.current, Ls(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ka(t);
  }, Xt.render = function(e, t, n) {
    if (!ya(t)) throw Error(o(200));
    return ga(null, e, t, !1, n);
  }, Xt.unmountComponentAtNode = function(e) {
    if (!ya(e)) throw Error(o(40));
    return e._reactRootContainer ? (wi(function() {
      ga(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Xt.unstable_batchedUpdates = cl, Xt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ya(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ga(e, t, n, !1, r);
  }, Xt.version = "18.3.1-next-f1338f8080-20240426", Xt;
}
var Bd;
function Sp() {
  if (Bd) return Sl.exports;
  Bd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), Sl.exports = jp(), Sl.exports;
}
var Vd;
function wp() {
  if (Vd) return ja;
  Vd = 1;
  var s = Sp();
  return ja.createRoot = s.createRoot, ja.hydrateRoot = s.hydrateRoot, ja;
}
var Ep = wp();
const Np = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, h = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], k = ["e", "B", "G", "D", "A", "E"], j = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], y = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], x = {
    mp: {
      name: "mollipentatoninen",
      base: v,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: v,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: v,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: v,
      add: [[2, "2"], [8, "♭6"]],
      hint: "Aiolinen on luonnollinen molli."
    },
    locrian: {
      name: "lokrinen",
      base: [[0, "1"], [3, "♭3"], [5, "4"], [10, "♭7"]],
      add: [[1, "♭2"], [6, "♭5"], [8, "♭6"]],
      hint: "Mollipentatoninen boksi toimii vertailukohtana. Lokrinen käyttää puhtaan kvintin tilalla alennettua kvinttiä."
    },
    majp: {
      name: "duuripentatoninen",
      base: y,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: y,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: y,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: y,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, C = {
    rail: 46,
    wood: "#21343e",
    wire: "#8ca9b0",
    string: "#c4d2d3",
    nut: "#e2d1ad",
    markers: [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]
  }, b = 0, w = C.rail, E = 42, D = 54, P = 34, B = 11, z = (b + w) / 2, V = E + (u.length - 1) * P + 30, Z = (ie) => w + ie * D, F = (ie) => ie === 0 ? z : Z(ie) - D / 2, L = (ie) => E + ie * P;
  let K = 0;
  function X({ count: ie, cell: de, row: oe, firstY: ye, dimmed: _e = [] }) {
    const ae = C.rail, ve = ae + ie * de, ge = ye - oe * 0.46, Me = ye + oe * 5.46, Le = (Ie) => ae + (Ie - 0.5) * de, Oe = "neck-" + ++K;
    let Ge = `<defs><linearGradient id="${Oe}-wood" x2="0" y2="1"><stop stop-color="#2b3f48"/><stop offset=".52" stop-color="${C.wood}"/><stop offset="1" stop-color="#142731"/></linearGradient>
      <linearGradient id="${Oe}-nut"><stop stop-color="#938771"/><stop offset=".35" stop-color="#eee1c4"/><stop offset=".7" stop-color="${C.nut}"/><stop offset="1" stop-color="#998d76"/></linearGradient></defs>
      <rect x="${ae}" y="${ge}" width="${ie * de}" height="${Me - ge}" rx="3" fill="url(#${Oe}-wood)" stroke="#728895" stroke-opacity=".42"/>`;
    for (let Ie = 1; Ie <= ie; Ie++) {
      const Qe = ae + Ie * de, at = Ie % 12 === 0;
      Ge += `<text x="${Le(Ie)}" y="${ge - 10}" fill="${at ? "#e7c78e" : "#afc1c9"}" font-size="${at ? 13 : 12}" font-weight="${at ? 750 : 550}" text-anchor="middle">${Ie}</text>
        <line x1="${Qe}" y1="${ge}" x2="${Qe}" y2="${Me}" stroke="${C.wire}" stroke-width="2" opacity=".57"/>`;
    }
    Ge += `<rect x="${ae}" y="${ge}" width="4" height="${Me - ge}" rx="1.5" fill="url(#${Oe}-nut)"/>`;
    for (const Ie of C.markers.filter((Qe) => Qe <= ie))
      for (const Qe of Ie % 12 ? [2.5] : [1.5, 3.5])
        Ge += `<circle cx="${Le(Ie)}" cy="${ye + Qe * oe}" r="6" fill="#a5bdc6" opacity=".28"/>`;
    return k.forEach((Ie, Qe) => {
      const at = ye + Qe * oe;
      Ge += `<line x1="${ae}" x2="${ve}" y1="${at}" y2="${at}" stroke="${C.string}" stroke-width="${1 + Qe * 0.32}" opacity="${_e[Qe] ? ".35" : 0.49 + Qe * 0.06}"/>`;
    }), Ge;
  }
  function re(ie, de, oe) {
    const ye = i.indexOf(s[ie][0]) + Number(oe.slice(-1)) - 1, _e = ye % i.length, ae = o[_e] + 12 * Math.floor(ye / i.length), ve = ie + de - ae;
    return i[_e] + (ve < 0 ? "♭" : "♯").repeat(Math.abs(ve));
  }
  function we(ie) {
    return [...ie.base, ...ie.add].sort((de, oe) => de[0] - oe[0]);
  }
  function W(ie, de, oe) {
    const ye = de + (oe ? 1 : 0), _e = h[ye % h.length], ae = Math.min(..._e.map(([Oe]) => Oe)), ve = Math.max(..._e.map(([, Oe]) => Oe));
    let Le = (ie - d % 12 + 12) % 12 - (oe ? 8 : 5) + 12 * Math.floor(ye / h.length);
    return ae + Le < 0 && (Le += 12), ve + Le > f.pentatonic && (Le -= 12), {
      strings: _e.map((Oe) => Oe.map((Ge) => Ge + Le)),
      start: ae + Le,
      end: ve + Le
    };
  }
  function le(ie, de, oe) {
    const ye = oe[de], _e = (ie + ye - d % 12 + 12) % 12, ae = d + _e - ye, ve = u.map((ge, Me) => {
      const Le = de + (u.length - 1 - Me) * 3;
      return [Le, Le + 1, Le + 2].map((Oe) => {
        const Ge = Math.floor(Oe / oe.length), Ie = oe[Oe % oe.length];
        return ae + Ie + 12 * Ge - ge;
      });
    });
    return {
      strings: ve,
      start: Math.min(...ve.map((ge) => ge[0])),
      end: Math.max(...ve.map((ge) => ge.at(-1)))
    };
  }
  function U(ie, de) {
    const oe = [], ye = Math.ceil(-ie.end / 12) * 12;
    for (let ae = ye; ie.start + ae <= de; ae += 12) {
      const ve = ie.strings.map((Me) => Me.map((Le) => Le + ae).filter((Le) => Le >= 0 && Le <= de)), ge = ve.flat();
      oe.push({
        strings: ve,
        start: Math.min(...ge),
        end: Math.max(...ge),
        partial: ie.start + ae < 0 || ie.end + ae > de
      });
    }
    const _e = oe.filter((ae) => !ae.partial);
    return _e.length ? _e : oe;
  }
  function ue(ie) {
    return we(ie).length === p;
  }
  function fe(ie, de, oe) {
    const ye = ue(de);
    ie.querySelector('[value="3nps"]').disabled = !ye, ie.value = ye ? oe ?? "3nps" : "pentatonic";
  }
  function Q(ie, de, oe, ye, _e) {
    const ae = we(de).map(([ve]) => ve);
    return ye.map((ve) => {
      const ge = ve - 1, Me = oe === "3nps" ? le(ie, ge, ae) : W(ie, ge, de.base === y), Le = _e === void 0 ? [Me] : U(Me, _e);
      return { number: ve, positions: Le };
    });
  }
  function ce(ie, de) {
    const oe = ie.getBoundingClientRect(), ye = ie.querySelectorAll(de);
    let _e = 1 / 0;
    ye.forEach((ae) => {
      const ve = ae.getBoundingClientRect();
      let ge = 0;
      ve.left < oe.left ? ge = ve.left - oe.left - 8 : ve.right > oe.right && (ge = ve.right - oe.right + 8), Math.abs(ge) < Math.abs(_e) && (_e = ge);
    }), Number.isFinite(_e) && (ie.scrollLeft += _e);
  }
  function ee(ie, de = !1) {
    const oe = ie === "3nps" ? p : h.length;
    return Array.from({ length: oe }, (ye, _e) => {
      const ae = _e + 1;
      return '<label class="box-toggle" data-box="' + ae + '"><input type="checkbox" value="' + ae + '"' + (de && _e === 0 ? " checked" : "") + "> Boksi " + ae + "</label>";
    }).join("");
  }
  function T(ie, de) {
    const oe = we(de), ye = new Map(oe.map(([ae, ve]) => [ae, re(ie, ae, ve)])), _e = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return oe.flatMap(([ae, ve]) => _e.flatMap(({ suffix: ge, base: Me }) => {
      const Le = Me.map(([Oe]) => ye.get((ae + Oe) % 12));
      return Le.every(Boolean) ? {
        root: (ie + ae) % 12,
        degree: Number(String(ve).replace(/\D/g, "")),
        name: Le[0] + ge,
        notes: Le,
        base: Me,
        add: []
      } : [];
    }));
  }
  function S(ie, de) {
    const oe = ie.base.map(([ae]) => (ie.root + ae) % 12), ye = u.map((ae) => {
      const ve = [];
      for (let ge = 0; ge <= de; ge++) {
        const Me = (ae + ge) % 12;
        oe.includes(Me) && ve.push({ fret: ge, pitch: Me });
      }
      return ve;
    }), _e = [];
    for (let ae = 0; ae <= ye.length - 3; ae++)
      for (const ve of ye[ae])
        for (const ge of ye[ae + 1])
          if (ve.pitch !== ge.pitch)
            for (const Me of ye[ae + 2]) {
              if (Me.pitch === ve.pitch || Me.pitch === ge.pitch) continue;
              const Le = [ve.fret, ge.fret, Me.fret], Oe = Math.min(...Le), Ge = Math.max(...Le);
              if (Ge - Oe > 3) continue;
              const Ie = Array(u.length).fill(null);
              Ie.splice(ae, 3, ...Le), _e.push({ strings: Ie, low: Oe, high: Ge });
            }
    return _e.sort((ae, ve) => ae.high - ve.high || ae.low - ve.low);
  }
  const te = {
    "0:": [null, 3, 2, 0, 1, 0],
    "2:": [null, null, 0, 2, 3, 2],
    "4:": [0, 2, 2, 1, 0, 0],
    "7:": [3, 2, 0, 0, 0, 3],
    "9:": [null, 0, 2, 2, 2, 0],
    "2:m": [null, null, 0, 2, 3, 1],
    "4:m": [0, 2, 2, 0, 0, 0],
    "9:m": [null, 0, 2, 2, 1, 0],
    "0:7": [null, 3, 2, 3, 1, 0],
    "2:7": [null, null, 0, 2, 1, 2],
    "4:7": [0, 2, 0, 1, 0, 0],
    "7:7": [3, 2, 0, 0, 0, 1],
    "9:7": [null, 0, 2, 0, 2, 0],
    "11:7": [null, 2, 1, 2, 0, 2],
    "2:m7": [null, null, 0, 2, 1, 1],
    "4:m7": [0, 2, 0, 0, 0, 0],
    "9:m7": [null, 0, 2, 0, 1, 0],
    "0:maj7": [null, 3, 2, 0, 0, 0],
    "2:maj7": [null, null, 0, 2, 2, 2],
    "4:maj7": [0, 2, 1, 1, 0, 0],
    "5:maj7": [null, null, 3, 2, 1, 0],
    "7:maj7": [3, 2, 0, 0, 0, 2],
    "9:maj7": [null, 0, 2, 1, 2, 0],
    "2:5": [null, null, 0, 2, 3, null]
  }, he = [
    { string: 0, openPC: 4, shapes: {
      "": [0, 2, 2, 1, 0, 0],
      m: [0, 2, 2, 0, 0, 0],
      7: [0, 2, 0, 1, 0, 0],
      m7: [0, 2, 0, 0, 0, 0],
      maj7: [0, null, 1, 1, 0, null],
      9: [0, 2, 0, 1, 0, 2],
      "m7♭5": [0, null, 0, 0, -1, null],
      "°": [0, 1, 2, 0, null, null],
      5: [0, 2, 2, null, null, null],
      "5♭5": [0, 1, 2, null, null, null]
    } },
    { string: 1, openPC: 9, shapes: {
      "": [null, 0, 2, 2, 2, 0],
      m: [null, 0, 2, 2, 1, 0],
      7: [null, 0, 2, 0, 2, 0],
      m7: [null, 0, 2, 0, 1, 0],
      maj7: [null, 0, 2, 1, 2, 0],
      9: [null, 0, -1, 0, 0, 0],
      "m7♭5": [null, 0, 1, 0, 1, null],
      "°": [null, 0, 1, 2, 1, null],
      5: [null, 0, 2, 2, null, null],
      "5♭5": [null, 0, 1, 2, null, null]
    } }
  ];
  function Ce(ie, de) {
    const oe = te[ie + ":" + de];
    if (oe) return { frets: oe, barre: null };
    let ye = null;
    return he.forEach(({ string: _e, openPC: ae, shapes: ve }) => {
      const ge = ve[de];
      if (!ge) return;
      let Me = (ie - ae + 12) % 12;
      if (Me + Math.min(...ge.filter((Ge) => Ge !== null)) < 0 && (Me += 12), ye && ye.fret <= Me) return;
      const Le = ge.map((Ge) => Ge === null ? null : Me + Ge), Oe = Me > 0 && ge.at(-1) === 0 ? { fret: Me, from: _e, to: ge.length - 1 } : null;
      ye = { fret: Me, frets: Le, barre: Oe };
    }), ye && { frets: ye.frets, barre: ye.barre };
  }
  function G(ie, { frets: de, barre: oe }, ye) {
    const Le = [...u].reverse(), Oe = de.filter((Be) => Be > 0), Ie = !Oe.length || Math.max(...Oe) <= 4 && (de.includes(0) || Math.min(...Oe) === 1) ? 1 : Math.min(...Oe), Qe = (Be) => 24 + Be * 14, at = (Be) => 30 + (Be - Ie) * 18 + 18 / 2, $t = 102;
    let it = '<svg class="chord-svg" viewBox="0 0 108 ' + ($t + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ye + "-ote paksusta kielestä ohueen: " + de.map((Be) => Be ?? "x").join(" ") + '">';
    for (let Be = 0; Be <= 4; Be++)
      it += '<line class="' + (Be === 0 && Ie === 1 ? "nut" : "fret") + '" x1="' + Qe(0) + '" y1="' + (30 + Be * 18) + '" x2="' + Qe(5) + '" y2="' + (30 + Be * 18) + '"/>';
    return de.forEach((Be, st) => {
      it += '<line class="string" x1="' + Qe(st) + '" y1="30" x2="' + Qe(st) + '" y2="' + $t + '"/>';
    }), Ie > 1 && (it += '<text class="fret-label" x="15" y="' + (at(Ie) + 4) + '">' + Ie + "</text>"), oe && (it += '<rect class="barre" x="' + (Qe(oe.from) - 6.5) + '" y="' + (at(oe.fret) - 6.5) + '" width="' + ((oe.to - oe.from) * 14 + 13) + '" height="13" rx="6.5"/>'), de.forEach((Be, st) => {
      if (Be === null) {
        it += '<text class="marker" x="' + Qe(st) + '" y="22">×</text>';
        return;
      }
      const Mt = (Le[st] + Be) % 12 === ie;
      if (Be === 0) {
        it += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + Qe(st) + '" cy="18" r="4.5"/>';
        return;
      }
      oe && Be === oe.fret && st >= oe.from && st <= oe.to && !Mt || (it += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + Qe(st) + '" cy="' + at(Be) + '" r="6.5"/>');
    }), it + "</svg>";
  }
  function me(ie, de) {
    const oe = new URLSearchParams(location.search), ye = s.indexOf(oe.get("toonikka")), _e = oe.get("asteikko");
    return {
      rootPC: ye === -1 ? ie : ye,
      scaleId: Object.hasOwn(x, _e) ? _e : de
    };
  }
  function Te(ie, de, oe) {
    return ie + "?" + new URLSearchParams({ toonikka: s[de], asteikko: oe });
  }
  function De(ie, de, oe, {
    boxes: ye = [],
    onlyBoxNotes: _e = !1,
    automatic: ae = !0,
    focusDegree: ve = "",
    grip: ge = null,
    barre: Me = null,
    label: Le = s[ie] + " " + de.name,
    notes: Oe = null,
    targets: Ge = !1,
    muteFret: Ie = null
  } = {}) {
    const at = Z(oe) + 2, $t = ae ? 680 : Math.ceil(at * 0.64), it = ye.flatMap((Ye) => Ye.positions), Be = {};
    de.base.forEach(([Ye, A]) => Be[(ie + Ye) % 12] = { deg: A, added: !1 }), de.add.forEach(([Ye, A]) => Be[(ie + Ye) % 12] = { deg: A, added: !0 });
    const st = u.map((Ye, A) => !!ge && ge[A] === null), Mt = !!ge && Ie !== null, zt = j.filter((Ye, A) => st[A]).reverse(), _t = Le + ". " + oe + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (zt.length ? " Soittamatta jäävät kielet: " + zt.join(", ") + "." : "");
    let Ve = '<svg viewBox="0 0 ' + at + " " + V + '" style="min-width:' + $t + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ge ? "group" : "img") + '" aria-label="' + _t + '">';
    if (Ve += X({
      count: oe,
      cell: D,
      row: P,
      firstY: E,
      dimmed: st.map((Ye) => Ye && !Mt)
    }), ye.forEach(({ number: Ye, positions: A }) => {
      A.forEach((H) => {
        const se = H.partial ? "box-highlight box-partial" : "box-highlight";
        Ve += '<g class="' + se + '" data-box="' + Ye + '" aria-hidden="true">';
        const be = H.strings.find((We) => We.length), Re = (F(be[0]) + F(be.at(-1))) / 2;
        Ve += '<text class="box-number" x="' + Re + '" y="' + (V - 2) + '">' + Ye + "</text>", H.strings.forEach((We, tt) => {
          if (!We.length) return;
          const xt = F(We[0]) - 16, ft = F(We.at(-1)) - F(We[0]) + 32;
          Ve += '<rect class="box-band" x="' + xt + '" y="' + (L(tt) - 14) + '" width="' + ft + '" height="28" rx="14"/>';
        }), Ve += "</g>";
      });
    }), u.forEach((Ye, A) => {
      const H = L(A);
      st[A] && !Mt ? Ve += '<text class="muted-mark" x="' + z + '" y="' + (H + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : st[A] && Ie === 0 || (Ve += '<line x1="' + (b + 4) + '" y1="' + H + '" x2="' + (w - 4) + '" y2="' + H + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ve += '<text x="7" y="' + (H + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + k[A] + "</text>";
    }), ge && Me && Me.fret >= 1 && Me.fret <= oe) {
      const Ye = L(Me.from), A = L(Me.to), H = Math.min(Ye, A) - 6, se = Math.max(Ye, A) + 6;
      Ve += '<rect class="barre-indicator" x="' + (F(Me.fret) - 7) + '" y="' + H + '" width="14" height="' + (se - H) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Ge && (Ve += '<g class="fret-targets">', u.forEach((Ye, A) => {
      for (let H = 0; H <= oe; H++) {
        const se = H ? j[A] + "-kieli, " + H + ". nauha" : "vapaa " + j[A] + "-kieli", be = H ? D : w;
        Ve += '<rect class="fret-target" role="button" tabindex="0" data-string="' + A + '" data-fret="' + H + '" data-midi="' + (Ye + H) + '" aria-label="' + se + '" x="' + (F(H) - be / 2) + '" y="' + (L(A) - P / 2) + '" width="' + be + '" height="' + P + '" fill="transparent"/>';
      }
    }), Ve += "</g>"), (Oe ?? []).forEach(({ string: Ye, fret: A, label: H, kind: se }) => {
      Ve += '<g class="octave-note octave-' + se + '">', Ve += '<circle cx="' + F(A) + '" cy="' + L(Ye) + '" r="' + B + '"/>', Ve += '<text x="' + F(A) + '" y="' + (L(Ye) + 3.5) + '" font-size="' + (H.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + H + "</text>", Ve += "</g>";
    }), ge && (Ve += '<g class="grip-notes">'), (Oe ? [] : u).forEach((Ye, A) => {
      for (let H = 0; H <= oe; H++) {
        const se = (Ye + H) % 12;
        if (!(se in Be) || ge && ge[A] !== H || _e && !it.some(({ strings: ft }) => {
          const Tn = ft[A];
          return Tn.length > 0 && H >= Tn[0] && H <= Tn.at(-1);
        })) continue;
        const be = Be[se], Re = be.deg === "1", We = be.added ? "#f0a13c" : Re ? "#4b2fd6" : "#6d4aff", tt = be.added ? "#1a1430" : "#fff";
        be.deg === ve && (Ve += '<circle class="focus-note" cx="' + F(H) + '" cy="' + L(A) + '" r="14.5"/>');
        const xt = ge ? ' data-string="' + (A + 1) + '" data-fret="' + H + '" data-degree="' + be.deg + '"' : "";
        Ve += "<circle" + xt + ' cx="' + F(H) + '" cy="' + L(A) + '" r="' + B + '" fill="' + We + '" stroke="' + (Re ? "#fff" : "#1a1430") + '" stroke-width="' + (Re ? 2.5 : 1) + '"/>', Ve += '<text x="' + F(H) + '" y="' + (L(A) + 3.5) + '" font-size="' + (be.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + tt + '" text-anchor="middle">' + be.deg + "</text>";
      }
    }), ge && (Ve += "</g>"), Mt && st.forEach((Ye, A) => {
      if (!Ye) return;
      const H = F(Ie), se = L(A);
      Ve += '<g class="muted-mark grip-mute" data-string="' + (A + 1) + '" data-fret="' + Ie + '">', Ve += '<circle cx="' + H + '" cy="' + se + '" r="9" fill="' + (Ie === 0 ? "#2a2338" : "#231a12") + '"/>', Ve += '<text x="' + H + '" y="' + (se + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ve += "</g>";
    }), Ve += "</svg>", Ve;
  }
  return {
    neckStyle: C,
    neckSurface: X,
    STRING_NAMES: k,
    CHROM: s,
    OPEN_PITCHES: u,
    PENT_MAJ: y,
    SCALES: x,
    noteName: re,
    scaleNotes: we,
    scaleTriads: T,
    triadGrips: S,
    chordGrip: Ce,
    renderChordDiagram: G,
    selectionFromURL: me,
    selectionHref: Te,
    renderBoard: De,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: ue,
    syncBoxSystem: fe,
    fingeringBoxes: Q,
    boxOptions: ee,
    revealPositions: ce
  };
})();
globalThis.MusicMapFretboard = Np;
function Nl(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Cp(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Tp(s) {
  const i = Cp(s), o = Math.round(i), u = (i - o) * 100;
  return { midi: o, cents: u };
}
const ze = globalThis.MusicMapFretboard, Ze = (s) => (s % 12 + 12) % 12, Mp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], _p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (s, i = !1, o = !1) => (i ? _p : Mp)[Ze(s)] + (o ? Math.floor(s / 12) - 1 : ""), ui = (s) => ze.CHROM[Ze(s)], ir = (s, i, o) => ze.noteName(Ze(s), i, o);
function bp(s, i) {
  const o = Math.floor(s / 12) - 1;
  return i[0] === "B" && Ze(s) < 2 ? o - 1 : i[0] === "C" && Ze(s) > 9 ? o + 1 : o;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], su = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Bf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Pp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], _i = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, He = (s, i) => ({ string: s, fret: i, midi: ze.OPEN_PITCHES[s] + i });
function ds(s, i, o) {
  return [...s].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, o - i + 1) }, (d, f) => He(u, i + f)));
}
const et = (s) => `${s.string}:${s.fret}`, Mi = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Vf = (s, i) => i === "maj" ? `${ui(s)}-duurisointu` : i === "min" ? `${ui(s)}-mollisointu` : `${ui(s)}7-sointu`, sr = [
  "priimi",
  "pieni sekunti",
  "suuri sekunti",
  "pieni terssi",
  "suuri terssi",
  "puhdas kvartti",
  "tritonus",
  "puhdas kvintti",
  "pieni seksti",
  "suuri seksti",
  "pieni septimi",
  "suuri septimi",
  "oktaavi"
], Kd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Kf(s, i) {
  const o = Kd[i] ?? Kd.E, u = Ze(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [He(f, d + u)]);
}
const Na = {
  mode: "notes",
  strings: [0, 1, 2, 3, 4, 5],
  min: 0,
  max: 5,
  accidentals: !1,
  flats: !1,
  check: "class",
  input: "board",
  rounds: 10,
  weak: !0,
  root: 9,
  scale: "mp",
  box: 0,
  order: "random",
  chord: "maj",
  chordTone: "build",
  shape: "E",
  intervals: [3, 4, 7],
  direction: "both",
  hints: "off",
  activity: "play",
  advance: !0,
  reference: !0,
  minRms: 0.01,
  clarity: 0.94,
  stability: 240,
  cents: 35,
  device: ""
}, Oa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, oi = (s, i, o, u) => typeof s == "number" && Number.isFinite(s) ? Math.max(i, Math.min(o, s)) : u, Nn = (s, i, o) => i.includes(s) ? s : o;
function Aa(s) {
  const i = { ...Na };
  i.mode = Nn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, u) => o - u) : i.strings, i.strings.length || (i.strings = [...Na.strings]), i.min = Math.round(oi(s.min, 0, 24, i.min)), i.max = Math.round(oi(s.max, i.min, 24, Math.max(i.min, i.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (i[o] = s[o]);
  return i.check = Nn(s.check, ["class", "pitch"], i.check), i.input = Nn(s.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : i.rounds, i.root = Math.round(oi(s.root, 0, 11, i.root)), i.scale = typeof s.scale == "string" && Object.hasOwn(ze.SCALES, s.scale) ? s.scale : i.scale, i.box = Math.round(oi(s.box, 0, 5, i.box)), i.order = Nn(s.order, ["random", "up", "down"], i.order), i.chord = Nn(s.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Nn(s.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Nn(s.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, u) => o - u) : i.intervals, i.intervals.length || (i.intervals = [...Na.intervals]), i.direction = Nn(s.direction, ["up", "down", "both"], i.direction), i.hints = Nn(s.hints, ["off", "always", "fade"], i.hints), i.activity = Nn(s.activity, ["play", "degree"], i.activity), i.minRms = oi(s.minRms, 1e-3, 0.15, i.minRms), i.clarity = oi(s.clarity, 0.85, 0.99, i.clarity), i.stability = oi(s.stability, 120, 800, i.stability), i.cents = oi(s.cents, 10, 45, i.cents), i.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", i;
}
function Ap(s, i) {
  const o = new URLSearchParams(s), u = { ...i };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(u, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (u[f] = Number(o.get(d)));
  o.has("kielet") && (u.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (u.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (u[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], h = Math.max(ze.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    h >= 0 && (u.root = h);
  }
  return Aa(u);
}
function Lp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: ze.CHROM[s.root],
    asteikko: s.scale,
    alku: String(s.min),
    loppu: String(s.max),
    boksi: String(s.box),
    kierros: String(s.rounds),
    tarkistus: s.check,
    muoto: s.shape,
    sointu: s.chord,
    jarjestys: s.order,
    vastaus: s.input,
    vihjeet: s.hints,
    tehtava: s.activity,
    sointuaste: s.chordTone,
    suunta: s.direction,
    kielet: s.strings.map((i) => i + 1).join(","),
    intervallit: s.intervals.join(","),
    kromaattinen: s.accidentals ? "1" : "0",
    alennukset: s.flats ? "1" : "0",
    kertaus: s.weak ? "1" : "0",
    vertailu: s.reference ? "1" : "0"
  });
}
const bi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, Fn = (s) => s.mode === "scale" && s.order !== "random", Uf = (s) => ["note", "degree"].includes(bi(s)) ? "class" : Fn(s) ? "pitch" : s.check, Sa = (s) => bi(s) === "mic", Ud = "musiikin-kartta:harjoittelu", Hf = 3, zl = () => ({ version: Hf, settings: { ...Na }, stats: {}, recent: [], sessions: [] }), Gf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, gn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function Rp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => gn(s[i])) && s.correct <= s.attempts && (s.errors === void 0 || gn(s.errors)) && (s.ema === void 0 || gn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || gn(s.emaMs));
}
function $p(s) {
  return !!s && typeof s.id == "string" && gn(s.count) && gn(s.first) && s.first <= s.count && gn(s.ms) && gn(s.at) && (s.solo === void 0 || gn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || gn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Hd(s) {
  if (!s) return zl();
  const i = JSON.parse(s);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !Rp(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !gn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !$p(p)))) throw new Error("Virheellisiä kierroksia");
  const o = i.version < 3, u = Aa(i.settings ?? {}), d = o && i.settings?.hints !== "always" && i.settings?.hints !== "off";
  d && (u.hints = "off");
  const f = {
    version: Hf,
    settings: u,
    stats: Object.fromEntries(Object.entries(i.stats).map(([p, h]) => [p, { ...h, errors: h.errors ?? 0 }])),
    recent: (i.recent ?? []).slice(-500),
    sessions: (i.sessions ?? []).slice(-200)
  };
  return (d || i.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Gd = 2500, Op = 8e3, Wd = 0.3, rr = (s) => s.ema ?? s.correct / s.attempts, ar = (s) => s.emaMs ?? s.totalMs / s.attempts;
function ru(s) {
  if (!s?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (ar(s) - Gd) / (Op - Gd)));
  return rr(s) * 0.65 + i * 0.35;
}
function Ip(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - ru(s)) * 3;
}
class Qd {
  constructor(i) {
    this.storage = i;
    try {
      this.data = Hd(i?.getItem(Ud) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = zl();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Ud, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(i) {
    this.data.settings = i, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(i) {
    if (this.data.recent.some((p) => p.id === i.id)) return;
    const o = Gf(i), u = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(i.first), f = {
      attempts: u.attempts + 1,
      correct: u.correct + d,
      errors: u.errors + i.errors,
      totalMs: u.totalMs + i.ms,
      lastSeen: i.at,
      ema: u.attempts ? rr(u) + Wd * (d - rr(u)) : d,
      emaMs: u.attempts ? ar(u) + Wd * (i.ms - ar(u)) : i.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, i].slice(-500), this.save();
  }
  session(i) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== i.id), i].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(i) {
    if (!i.trim()) throw new Error("Tyhjä tiedosto");
    const o = Hd(i);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...zl(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Fp = 4e3, Yd = 12, Dp = 1500;
function zp(s, i) {
  const o = s.left + s.stickyLeft, u = s.right;
  let d = 0;
  if (i.left < o ? d = i.left - o - Yd : i.right > u && (d = i.right - u + Yd), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function Bp(s, i) {
  return i.right <= s.left + s.stickyLeft || i.left >= s.right;
}
function Wf(s, i, o, { stickySelector: u, enabled: d = !0, playback: f } = {}) {
  const p = _.useRef(0), h = _.useRef(!1), k = _.useRef(""), j = _.useRef(0), v = _.useRef(f);
  _.useEffect(() => {
    const y = s.current;
    if (!y || !d) return;
    const x = () => {
      p.current = Date.now() + Fp;
    }, C = () => {
      h.current = !0, x();
    }, b = () => {
      h.current && (h.current = !1, x());
    }, w = (E) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(E.key) && x();
    };
    return y.addEventListener("pointerdown", C, { passive: !0 }), y.addEventListener("touchstart", C, { passive: !0 }), y.addEventListener("wheel", x, { passive: !0 }), y.addEventListener("keydown", w), window.addEventListener("pointerup", b, { passive: !0 }), window.addEventListener("pointercancel", b, { passive: !0 }), window.addEventListener("touchend", b, { passive: !0 }), window.addEventListener("touchcancel", b, { passive: !0 }), () => {
      y.removeEventListener("pointerdown", C), y.removeEventListener("touchstart", C), y.removeEventListener("wheel", x), y.removeEventListener("keydown", w), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), window.removeEventListener("touchend", b), window.removeEventListener("touchcancel", b);
    };
  }, [s, d]), _.useLayoutEffect(() => {
    const y = f !== void 0 && !!f && f !== v.current;
    v.current = f, y && !h.current && (p.current = 0);
  }, [f]), _.useLayoutEffect(() => {
    f === void 0 && k.current === "" && o !== "" && Date.now() - j.current > Dp && !h.current && (p.current = 0), k.current !== "" && o === "" && (j.current = Date.now()), k.current = o;
    const y = s.current;
    if (!y || !d || !o || h.current || Date.now() < p.current) return;
    const x = y.querySelector(i);
    if (!x || u && x.closest(u)) return;
    const C = y.getBoundingClientRect(), b = x.getBoundingClientRect(), w = u ? y.querySelector(u) : null, E = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, D = {
      left: C.left,
      right: C.left + y.clientWidth,
      scrollLeft: y.scrollLeft,
      maxScroll: y.scrollWidth - y.clientWidth,
      stickyLeft: E
    }, P = zp(D, b);
    if (P === null) return;
    const z = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Bp(D, b);
    typeof y.scrollTo == "function" ? y.scrollTo({ left: P, behavior: z ? "auto" : "smooth" }) : y.scrollLeft = P;
  }, [s, i, o, u, d, f]);
}
const Vp = new Set(ze.neckStyle.markers), Kp = ze.STRING_NAMES;
function Bl({ string: s }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Kp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Qf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), Up = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Yf({ min: s, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - s + 1 }, (o, u) => {
      const d = s + u;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Vp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ci({ area: s, marks: i = [], mutedStrings: o = [], disabled: u = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: h }) {
  const { strings: k, min: j, max: v } = s, y = Math.max(1, j), x = Math.max(0, v - y + 1), C = _.useMemo(() => {
    if (!x) return "";
    const L = 46, K = ze.neckStyle.rail + (y - 1) * L, X = ze.neckSurface({ count: v, cell: L, row: L, firstY: L / 2 }), re = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${K} 0 ${x * L} ${6 * L}" preserveAspectRatio="none">${X}</svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(re)}")`;
  }, [y, x, v]), b = { "--cols": x, "--neck-surface": C }, [w, E] = _.useState({ string: Math.min(...k), fret: j }), D = _.useRef(null), P = new Map(i.map((L) => [et(L), L])), B = i.map((L) => `${et(L)}${L.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const L = D.current, K = L?.querySelector(".target, .anchor");
    L && K && !K.matches("th.open-fret") && (L.scrollLeft += K.getBoundingClientRect().left - L.getBoundingClientRect().left - L.clientWidth / 2 + K.clientWidth / 2);
  }, [B, p]), _.useEffect(() => {
    p === "playing" && D.current && (D.current.scrollLeft = 0);
  }, [p, j, v]);
  const z = i.find((L) => L.kind === "playing");
  Wf(D, ".playing", z ? et(z) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: h });
  const [V, Z] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const L = D.current;
    if (!L) return;
    const K = () => {
      const re = L.scrollLeft > 2, we = L.scrollLeft + L.clientWidth < L.scrollWidth - 2;
      Z((W) => W.left === re && W.right === we ? W : { left: re, right: we });
    };
    K(), L.addEventListener("scroll", K, { passive: !0 });
    const X = typeof ResizeObserver > "u" ? null : new ResizeObserver(K);
    return X?.observe(L), () => {
      L.removeEventListener("scroll", K), X?.disconnect();
    };
  }, [B, j, v]);
  const F = k.includes(w.string) && w.fret >= j && w.fret <= v ? w : { string: Math.min(...k), fret: j };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (V.left ? " more-left" : "") + (V.right ? " more-right" : ""), children: [
    (V.left || V.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      V.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      V.left && V.right ? "molemmilla puolilla" : V.right ? "oikealla" : "vasemmalla",
      V.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: D, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board note-board", style: b, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(Yf, { min: y, max: v }),
      /* @__PURE__ */ a.jsx("tbody", { children: ze.OPEN_PITCHES.map((L, K) => /* @__PURE__ */ a.jsxs("tr", { className: k.includes(K) ? "" : "unused", style: Qf(K), children: [
        j > 0 && /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${K + 1}. kieli: ${rn[K]}${o.includes(K) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(Bl, { string: K }),
          o.includes(K) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ds([K], j, v).map((X) => {
          const re = P.get(et(X)), we = `${rn[K]}-kieli, ${_i(X.fret)}`, W = X.fret === 0 ? "th" : "td";
          return /* @__PURE__ */ a.jsx(W, { scope: X.fret === 0 ? "row" : void 0, className: `${X.fret === 0 ? "open-fret " : ""}${re ? re.kind === "answer" ? "target" : re.kind : ""}`, children: /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              "data-string": K,
              "data-fret": X.fret,
              tabIndex: F.string === K && F.fret === X.fret ? 0 : -1,
              onFocus: () => E(X),
              onKeyDown: (le) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(le.key)) return;
                le.preventDefault();
                const U = [...k].sort((ce, ee) => ce - ee), ue = U.indexOf(K), fe = le.key === "ArrowUp" ? U[Math.max(0, ue - 1)] : le.key === "ArrowDown" ? U[Math.min(U.length - 1, ue + 1)] : K, Q = le.key === "Home" ? j : le.key === "End" ? v : Math.max(j, Math.min(v, X.fret + (le.key === "ArrowRight" ? 1 : le.key === "ArrowLeft" ? -1 : 0)));
                le.currentTarget.closest("table")?.querySelector(`button[data-string="${fe}"][data-fret="${Q}"]`)?.focus();
              },
              disabled: u || !k.includes(K),
              "aria-label": we + (re ? `, ${Up[re.kind]}${re.label ? " " + re.label : ""}` : ""),
              onClick: () => d?.(X),
              children: [
                X.fret === 0 && /* @__PURE__ */ a.jsxs("span", { className: "open-string-name", children: [
                  /* @__PURE__ */ a.jsx(Bl, { string: K }),
                  o.includes(K) && " ×"
                ] }),
                re ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: re.label || "●" }) : null
              ]
            }
          ) }, X.fret);
        })
      ] }, K)) })
    ] }) })
  ] });
}
function Hp({ area: s, stats: i, input: o, check: u, flats: d }) {
  const { strings: f, min: p, max: h } = s, k = `${o}:${u}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": h - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Yf, { min: p, max: h }),
    /* @__PURE__ */ a.jsx("tbody", { children: ze.OPEN_PITCHES.map((j, v) => /* @__PURE__ */ a.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Qf(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${rn[v]}`, children: /* @__PURE__ */ a.jsx(Bl, { string: v }) }),
      ds([v], p, h).map((y) => {
        const x = Object.hasOwn(i, k + et(y)) ? i[k + et(y)] : void 0, C = ru(x), b = C === null ? "unseen" : x.attempts < 3 ? "few" : C >= 0.8 ? "strong" : C >= 0.5 ? "growing" : "weak", w = `${rn[v]}-kieli, ${_i(y.fret)}, ${Fe(y.midi, d)}`, E = x ? `${Math.round(C * 100)} %, ${x.correct}/${x.attempts} heti oikein, viime aikoina ${Math.round(rr(x) * 100)} % ja ${(ar(x) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${y.fret === 0 ? "open-fret " : ""}${b}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: C === null ? "·" : x.attempts < 3 ? "?" : Math.round(C * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, y.fret);
      })
    ] }, v)) })
  ] }) });
}
const Gp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Ia = (s) => s.mode === "scale" ? ze.scaleNotes(ze.SCALES[s.scale]) : Mi[s.mode === "caged" ? "maj" : s.chord].tones, Jf = (s) => ze.fingeringBoxes(s.root, ze.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Pi(s) {
  if (s.mode === "caged") {
    const i = Kf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...i), max: Math.max(...i), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const i = Jf(s);
    return { strings: s.strings, min: i.start, max: i.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function Wp(s) {
  const i = Pi(s);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function lr(s) {
  const i = Pi(s), o = ds(i.strings, i.min, i.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ze(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(Kf(s.root, s.shape).map(et));
    return o.filter((p) => f.has(et(p)));
  }
  if (s.mode === "interval") return o;
  const u = o.filter((f) => Ia(s).some(([p]) => Ze(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return u;
  const d = Jf(s);
  return u.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function Xf(s, i) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((u) => s.intervals.map((d) => ({
    iv: d,
    direction: u,
    pairs: i.flatMap((f) => i.filter((p) => p.midi === f.midi + (u === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((u) => u.pairs.length);
}
function Qp(s) {
  const i = Ia(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? i : i.filter(([, o]) => o.endsWith(s.chordTone));
}
function Vl(s) {
  const i = lr(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const u = Qp(s).filter(([d]) => !i.some((f) => Ze(f.midi - s.root) === d));
  return u.length ? `Valitulta alueelta puuttuu soinnun ${u.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Xf(s, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(s) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Yp(s, i) {
  const o = [...new Map([...i].sort((u, d) => u.midi - d.midi || u.string - d.string).map((u) => [u.midi, u])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Zf(s) {
  return Fn(s) ? new Set(lr(s).map((i) => i.midi)).size : s.rounds;
}
function Jp(s, i) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? i <= 3 ? 2 : i <= 6 ? 1 : 0 : 0;
}
function ns(s, i, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const u = i.reduce((p, h) => p + h, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(u > 0)) return s[Math.floor(d * s.length)];
  let f = d * u;
  for (let p = 0; p < s.length; p++)
    if (f -= i[p], f < 0) return s[p];
  return s.at(-1);
}
const Jd = (s, i) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${i}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${i}:${s.activity}` : `scale:${s.root}:${s.scale}:${i}:${s.activity}`;
function Ti(s, i) {
  const o = s.filter((u) => !i(u));
  return o.length ? o : s;
}
function Xp(s, i, o = {}, u, d = Math.random) {
  const f = Vl(s);
  if (f) throw new Error(f);
  const p = Uf(s), h = bi(s), k = p === "pitch", j = (F) => s.weak ? Ip(o[Gf({ input: h, check: p, hint: !1, item: F })]) : 1, v = (F) => ns(F, F.map(() => 1), d), y = lr(s), x = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const F = Ti(y, (X) => !!u && et(X) === et(u.position)), L = ns(F, F.map((X) => j(`notes:${et(X)}`)), d), K = Fe(L.midi, s.flats, k);
    return {
      ...x,
      position: L,
      midi: L.midi,
      name: K,
      item: `notes:${et(L)}`,
      prompt: `Etsi ${K} ${su[L.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const F = (re) => `ear-note:${Ze(re.midi)}${s.reference ? ":ref" : ""}`, L = Ti(y, (re) => !!u && Ze(re.midi) === Ze(u.midi)), K = ns(L, L.map((re) => j(F(re))), d), X = s.reference ? 57 + 12 * Math.round((K.midi - 57) / 12) : void 0;
    return {
      ...x,
      position: K,
      midi: K.midi,
      name: Fe(K.midi, s.flats),
      item: F(K),
      choices: "note",
      reference: X,
      sound: X === void 0 ? [K.midi] : [X, K.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const F = Ti(y, (K) => !!u && K.midi === u.midi), L = ns(F, F.map((K) => j(`repeat:${K.midi}`)), d);
    return {
      ...x,
      position: L,
      midi: L.midi,
      name: Fe(L.midi, s.flats, !0),
      item: `repeat:${L.midi}`,
      sound: [L.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const F = Ti(Xf(s, y), (X) => u?.interval === X.iv && u?.direction === X.direction), L = ns(F, F.map((X) => j(`interval:${X.iv}:${X.direction}`)), d), K = v(Ti(L.pairs, (X) => u?.reference === X.reference.midi));
    return {
      ...x,
      position: K.target,
      midi: K.target.midi,
      name: Fe(K.target.midi, s.flats, !0),
      item: `interval:${L.iv}:${L.direction}`,
      interval: L.iv,
      direction: L.direction,
      reference: K.reference.midi,
      sound: [K.reference.midi, K.target.midi],
      prompt: `Kuulet ${L.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(K.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const C = Ia(s);
  let b, w = 0;
  if (Fn(s)) {
    const F = Yp(s, y);
    w = F.length, b = F[i % F.length];
  } else {
    const F = C.filter(([X]) => y.some((re) => Ze(re.midi - s.root) === X)), L = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [C[i % C.length]] : C.filter(([, X]) => X.endsWith(s.chordTone)) : Ti(F, ([X]) => u?.interval === X), [K] = ns(L, L.map(([X]) => j(Jd(s, X))), d);
    b = v(Ti(y.filter((X) => Ze(X.midi - s.root) === K), (X) => !!u && et(X) === et(u.position)));
  }
  const E = Ze(b.midi - s.root), D = C.find(([F]) => F === E)[1], P = ir(s.root, E, D), B = k ? P + bp(b.midi, P) : P, z = s.mode === "scale" ? `${ui(s.root)}-${ze.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${ui(s.root)}-duurisointu, ${s.shape}-muoto` : Vf(s.root, s.chord), V = s.mode !== "caged" && s.activity === "degree", Z = V ? `${z}: mikä aste on ${P}?` : w ? `${z} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % w + 1}/${w}: ${D}. aste (${B}).` : `${z}: etsi ${D}. aste${k ? ` (${B})` : ""}.`;
  return {
    ...x,
    position: b,
    midi: b.midi,
    name: B,
    item: Jd(s, E),
    prompt: Z,
    degree: D,
    interval: E,
    choices: V ? "degree" : "position"
  };
}
function Kl(s, i, o) {
  return Number.isInteger(i) && (o === "class" ? Ze(s) === Ze(i) : s === i);
}
function qf(s, i, o) {
  return Kl(i.midi, o.midi, i.check) ? s.mode === "notes" ? o.string === i.position.string : Gp(s) ? lr(s).some((u) => et(u) === et(o)) : !0 : !1;
}
function Zp(s, i) {
  const o = Pi(s);
  return ds(o.strings, o.min, o.max).filter((u) => qf(s, i, u));
}
const Rt = (s, i, o) => ({ ...s, label: i, kind: o }), qp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function ev(s, i, o) {
  if (o <= 0) return { marks: [], text: "" };
  const u = o >= 2, d = Pi(s), f = ds(d.strings, d.min, d.max), p = Zp(s, i);
  if (s.mode === "notes") {
    if (u) return { marks: p.map((D) => Rt(D, i.name, "answer")), text: `${i.name} on ${Bf[i.position.string]}: ${_i(i.position.fret)}.` };
    const w = f.find((D) => D.string === i.position.string), E = Fe(w.midi, s.flats);
    return {
      marks: [Rt(w, E, "anchor")],
      text: `Apupiste: ${Pp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return u ? { marks: [Rt(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [Rt(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[i.position.string]}-kieli, ${_i(i.position.fret)}.` };
  if (s.mode === "repeat")
    return u ? { marks: p.map((w) => Rt(w, Fe(w.midi, s.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${su[i.position.string]}.` };
  if (s.mode === "interval") {
    const w = Fe(i.reference, s.flats, !0), E = f.filter((D) => D.midi === i.reference).map((D) => Rt(D, w, "anchor"));
    return u ? {
      marks: [...E, ...p.map((D) => Rt(D, Fe(D.midi, s.flats, !0), "answer"))],
      text: `${qp(sr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${i.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const h = lr(s), k = Ia(s), j = (w) => k.find(([E]) => E === Ze(w.midi - s.root))?.[1] ?? "", v = ir(s.root, i.interval, i.degree), y = h.filter((w) => Ze(w.midi - s.root) === 0), x = (w) => p.some((E) => et(E) === et(w)), C = `${i.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return u ? { marks: h.map((w) => Rt(w, j(w), x(w) ? "answer" : "shape")), text: C } : { marks: h.map((w) => Rt(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const b = s.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const w = h.filter((E) => Ze(E.midi) === Ze(i.midi));
    return u ? { marks: [...(i.interval === 0 ? [] : y).map((E) => Rt(E, "1", "anchor")), ...w.map((E) => Rt(E, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: w.map((E) => Rt(E, v, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...y.map((E) => Rt(E, "1", "anchor")), ...w.map((E) => Rt(E, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return u ? { marks: [...y.filter((w) => !x(w)).map((w) => Rt(w, "1", "anchor")), ...p.map((w) => Rt(w, i.degree, "answer"))], text: C } : i.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${ui(s.root)}.` } : { marks: y.map((w) => Rt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class tv {
  constructor(i, o, u, d = () => performance.now(), f = Math.random) {
    this.settings = i, this.stats = o, this.record = u, this.now = d, this.random = f, this.total = Zf(i);
  }
  settings;
  stats;
  record;
  now;
  random;
  phase = "idle";
  question;
  index = 0;
  results = [];
  errors = 0;
  started = 0;
  /** 0 = ei vihjettä, 1 = apupiste, 2 = vastaus. Arvo ei laske kysymyksen aikana. */
  hintLevel = 0;
  /** Mikrofonin vakaat, tehtävästä eriävät havainnot tässä kysymyksessä. */
  mismatches = 0;
  /** Kierroksen pituus; 0 = vapaa harjoittelu. */
  total;
  pendingMismatch = !1;
  pausedAt = 0;
  prior = "active";
  id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  get isLast() {
    return this.total > 0 && this.index >= this.total;
  }
  /** Onko nykyiseen kysymykseen jo vastattu oikein (myös tauolla palautteen aikana). */
  get answered() {
    return this.index > 0 && this.results.at(-1)?.id === `${this.id}:${this.index}`;
  }
  start() {
    this.phase === "idle" && this.next();
  }
  next() {
    if (["idle", "feedback"].includes(this.phase)) {
      if (this.isLast) {
        this.phase = "done";
        return;
      }
      this.question = Xp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Jp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(i) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(i))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(i, o, u, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(o === "degree" ? i === f.interval : o === "note" ? Kl(f.midi, i, "class") : o === "board" ? !!u && qf(this.settings, f, u) : Kl(f.midi, i, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const h = o === "board" ? u : void 0, k = {
      id: `${this.id}:${this.index}`,
      item: h && this.settings.mode === "notes" ? `notes:${et(h)}` : f.item,
      mode: this.settings.mode,
      input: o,
      check: f.check,
      expected: f.midi,
      played: i,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return h ? k.position = et(h) : this.settings.mode === "notes" && (k.position = et(f.position)), this.results.push(k), this.record(k), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ul(s) {
  const i = s.filter((o) => !o.hint);
  return {
    count: s.length,
    first: s.filter((o) => o.first).length,
    solo: i.length,
    soloFirst: i.filter((o) => o.first).length,
    guided: s.length - i.length,
    ms: s.reduce((o, u) => o + u.ms, 0)
  };
}
const Hl = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], rs = (s) => Hl.find(([i]) => i === s)?.[1] ?? s;
function Ut({ label: s, children: i }) {
  const o = _.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: o, children: s }),
    _.cloneElement(i, { id: o })
  ] });
}
function Xd({ legend: s, name: i, value: o, options: u, onChange: d, disabled: f }) {
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ a.jsx("legend", { children: s }),
    /* @__PURE__ */ a.jsx("div", { className: "choice-row", children: u.map((p) => /* @__PURE__ */ a.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ a.jsx("input", { type: "radio", name: i, value: p.value, checked: p.value === o, onChange: () => d(p.value) }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: p.title }),
        /* @__PURE__ */ a.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Zd(s) {
  const i = Pi(s), o = Zf(s), u = bi(s), d = u === "mic" ? "soita kitaralla" : u === "board" ? "vastaa otelaudalta" : u === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = i.fixed === "shape" ? `${s.shape}-muoto, nauhat ${i.min}–${i.max}` : i.fixed === "box" ? `boksi ${s.box}, nauhat ${i.min}–${i.max}` : `nauhat ${i.min}–${i.max}`, p = i.strings.length === 6 ? "" : ` · kielet ${i.strings.map((h) => h + 1).join(", ")}`;
  return `${Oa[s.hints].title} · ${d} · ${Fn(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function qd({ s, change: i, locked: o, problem: u }) {
  const d = _.useId(), f = (v, y) => i({ ...s, [v]: y }), p = Pi(s), h = bi(s) === "note" || bi(s) === "degree", k = ["scale", "chord", "caged"].includes(s.mode), j = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Ut, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Hl.map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: Hl.find(([v]) => v === s.mode)[2] })
    ] }),
    k && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Ut, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: ze.CHROM.map((v, y) => /* @__PURE__ */ a.jsx("option", { value: y, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Ut, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(ze.SCALES).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Ut, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(Ut, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Ut, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Mi).map(([v, y]) => /* @__PURE__ */ a.jsx("option", { value: v, children: y.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Ut, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ a.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            s.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ a.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ a.jsxs("option", { value: "3", children: [
            "Terssi · ",
            s.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "5", children: "Kvintti · 5" }),
          s.chord === "dom7" && /* @__PURE__ */ a.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      s.mode === "caged" ? /* @__PURE__ */ a.jsx(Ut, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(Ut, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (y) => f("intervals", y.target.checked ? [...s.intervals, v] : s.intervals.filter((x) => x !== v)) }),
        sr[v]
      ] }, v)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Ut, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Xd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Oa[v] }))
      }
    ),
    h ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Xd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Ut, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: s.rounds, disabled: Fn(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !h && /* @__PURE__ */ a.jsx(Ut, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: Fn(s) ? "pitch" : s.check, disabled: Fn(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Ut, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ a.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ a.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Fn(s) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ a.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${s.shape}-muoto` : `Boksi ${s.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ a.jsxs("button", { type: "button", "aria-pressed": s.min === 0 && s.max === v, onClick: () => i({ ...s, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsx(Ut, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Ut, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: rn.map((v, y) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.strings.includes(y), onChange: (x) => f("strings", x.target.checked ? [...s.strings, y] : s.strings.filter((C) => C !== y)) }),
          y + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "check-row", children: [
        j && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        s.mode === "ear-note" && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    u && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: u })
  ] });
}
const ef = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function nv(s) {
  return s && Object.hasOwn(ef, s) ? ef[s] : null;
}
const iv = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function sv({ onSelect: s }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: iv.map((i) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(i.id), children: [
      /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: i.number }),
      /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ a.jsx("strong", { children: i.title }),
        /* @__PURE__ */ a.jsx("span", { children: i.description }),
        /* @__PURE__ */ a.jsx("small", { children: i.example })
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, i.id)) })
  ] });
}
function rv({ onBack: s, onNotes: i }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home ear-exercise-menu", "aria-labelledby": "ear-exercise-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("h2", { id: "ear-exercise-title", children: "Sävelkorva ja otelauta" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse harjoitus. Voit aloittaa sävelten paikoista tai opetella kuuntelemalla." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: i, children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Sävelten etsintä" }),
          /* @__PURE__ */ a.jsx("span", { children: "Etsi seitsemän eri sävelen sijainnit kitaran otelaudalta. Aloita C-sävelestä." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa harjoitus" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("a", { className: "learning-card", href: "riffikaiku.html", children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Riffikaiku (beta)" }),
          /* @__PURE__ */ a.jsx("span", { children: "Kuuntele lyhyt kitarariffi ja toista se virtuaalikitaralla tai oikealla kitaralla." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("a", { className: "learning-card", href: "pelit/ensikeikka/", children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Ensikeikka (beta)" }),
          /* @__PURE__ */ a.jsx("span", { children: "Kuuntele kappaleita ja löydä melodian kotisävel viiden kappaleen ensikeikassa." }),
          /* @__PURE__ */ a.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const av = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Gl = 100, eh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function au(s) {
  if (s === null || s.trim() === "") return Gl;
  const i = Number(s);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Gl;
}
function ov() {
  try {
    return au(localStorage.getItem(eh));
  } catch {
    return Gl;
  }
}
function lv(s) {
  try {
    localStorage.setItem(eh, String(au(String(s))));
  } catch {
  }
}
function Cl(s, i, o = !0) {
  return o ? av[s] * au(String(i)) / 100 : 0;
}
function th(s = () => new Audio()) {
  try {
    const i = s();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const nh = 0.12, uv = 2e3, ih = 3, tf = 1e-3, cv = nh, nf = 1500, dv = 4e3;
function sh(s) {
  return s.readyState >= ih && !s.seeking;
}
function rh(s) {
  return s.every(sh);
}
function fv(s) {
  let i = 0;
  for (const o of s)
    if (!sh(o))
      try {
        const u = o.play();
        o.pause(), u && typeof u.catch == "function" && u.catch(() => {
        }), i++;
      } catch {
      }
  return i;
}
function hv(s, i, o, u = {
  set: (d, f) => setTimeout(d, f),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const f = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, h = null;
    const k = u.set(() => j("aikakatkaisu"), i);
    function j(x) {
      if (!p) {
        p = !0, u.clear(k), h !== null && u.clear(h);
        for (const C of s) for (const b of f) C.removeEventListener(b, v);
        d(x);
      }
    }
    function v() {
      o() ? j("ohitettu") : s.some((x) => x.error) ? j("virhe") : rh(s) && j("valmis");
    }
    const y = () => {
      v(), p || (h = u.set(y, 50));
    };
    for (const x of s) for (const C of f) x.addEventListener(C, v);
    v(), p || (h = u.set(y, 50));
  });
}
function mv(s, i = !1) {
  return i ? !0 : s.atLoopBoundary || s.drift <= nh || s.seeking || s.readyState < ih ? !1 : s.msSinceLastFix >= uv;
}
const pv = 1.5, vv = 0.4, kv = 0.5;
let Wl = null, yv = null;
function gv(s) {
  return Wl !== null ? Wl : (yv ??= th()) ? 0 : vv;
}
class ah {
  constructor(i = gv()) {
    this.latency = i;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  holdUntil = -1 / 0;
  /**
   * Pidättää korjauskelaukset hetkeen until (performance.now) asti, esimerkiksi toiston alun
   * vakiintumisen ajaksi. Pakotettu tahdistus (käyttäjän kelaus, raidan päälle kytkentä) tehdään silti.
   */
  hold(i) {
    this.holdUntil = i;
  }
  /**
   * Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä.
   * tolerance = ero (s), jota pienempää ei kelata (toiston alussa START_ALIGN_TOLERANCE_SECONDS).
   */
  align(i, o, u = !1, d = performance.now(), f = tf) {
    if (o.readyState < 1 || i.readyState < 1 || !u && (o.paused || i.paused) || !u && d < this.holdUntil) return !1;
    const p = o.currentTime - i.currentTime, h = Math.abs(p), k = i.loop && Number.isFinite(i.duration) && Math.abs(h - i.duration) < 0.35, j = this.lastFix.get(o);
    if (!mv({
      drift: h,
      atLoopBoundary: k,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: j === void 0 ? 1 / 0 : d - j
    }, u)) return !1;
    const v = !i.paused;
    !u && v && j !== void 0 && (this.latency = Math.min(pv, Math.max(0, this.latency - kv * p)), Wl = this.latency);
    let y = i.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (y = Math.min(y, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - y) < Math.max(f, tf)) return !1;
    try {
      o.currentTime = y;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function xv(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function jv(s = xv(), i = () => th()) {
  return s ? "webaudio" : i() ? "element" : "webaudio";
}
function Sv(s = globalThis.navigator) {
  const i = s?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
}
const wv = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Ev {
  constructor(i = wv, o = globalThis.navigator) {
    this.create = i, this.nav = o;
  }
  create;
  nav;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  /** Viimeisin virhe käyttäjälle ja diagnostiikalle: virheitä ei niellä hiljaa. */
  lastError = "";
  /** Web Audion tila ('running', 'suspended', 'interrupted' iOS:llä, 'closed') tai 'none'. */
  get state() {
    return this.context?.state ?? "none";
  }
  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock() {
    try {
      try {
        Sv(this.nav);
      } catch (i) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(i);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch((i) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(i);
      }), !0;
    } catch (i) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(i), !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(i) {
    if (this.gains.has(i)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(i), u = this.context.createGain();
      return o.connect(u), u.connect(this.context.destination), this.gains.set(i, u), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(i) {
    return !!i && this.gains.has(i);
  }
  setLevel(i, o) {
    const u = this.gains.get(i);
    u && (u.gain.value = o);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(i) {
    const o = i ? this.gains.get(i) : void 0;
    return o ? o.gain.value : null;
  }
  close() {
    const i = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), i?.close().catch(() => {
    });
  }
}
const Nv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Cv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function sf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function oh() {
  const s = _.useRef(null), i = _.useRef(null), [o, u] = _.useState(!1), [d, f] = _.useState(!1), [p, h] = _.useState(!1), [k, j] = _.useState(0), [v, y] = _.useState(0), [x, C] = _.useState(""), b = _.useRef(new ah());
  function w(z = !1) {
    const V = s.current, Z = i.current;
    !V || !Z || !Number.isFinite(V.currentTime) || b.current.align(V, Z, z);
  }
  function E() {
    s.current?.pause(), i.current?.pause(), u(!1);
  }
  async function D() {
    const z = s.current, V = i.current;
    if (!(!z || !V)) {
      if (o) {
        E();
        return;
      }
      C(""), V.muted = !d, V.volume = 0.55, z.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [z.play(), V.play()] : [z.play()]), w(), u(!0);
      } catch {
        E(), C("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function P(z) {
    const V = s.current, Z = i.current;
    if (!(!V || !Z || !Number.isFinite(z))) {
      V.currentTime = z;
      try {
        Z.currentTime = z;
      } catch {
      }
      j(z);
    }
  }
  function B(z) {
    const V = s.current, Z = i.current;
    if (f(z), !!Z) {
      if (Z.muted = !z, !z) {
        Z.pause();
        return;
      }
      !V || !o || (w(!0), Z.play().catch(() => C("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return _.useEffect(() => {
    const z = () => {
      document.hidden && (s.current?.pause(), i.current?.pause(), u(!1));
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), s.current?.pause(), i.current?.pause();
    };
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ a.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: d,
              onChange: (z) => B(z.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (z) => h(z.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        D();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(k, v > 0 ? v : 1),
          disabled: !v,
          onChange: (z) => P(Number(z.target.value))
        }
      ),
      /* @__PURE__ */ a.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        sf(k),
        " / ",
        sf(v)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Nv,
        loop: p,
        onLoadedMetadata: (z) => y(z.currentTarget.duration),
        onTimeUpdate: (z) => {
          j(z.currentTarget.currentTime), z.currentTarget.paused || w();
        },
        onEnded: () => {
          s.current?.loop || (i.current?.pause(), u(!1), j(v));
        },
        onPause: () => {
          i.current?.pause(), u(!1);
        },
        onError: () => C("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Cv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const z = s.current, V = i.current;
          z?.duration && V?.duration && Math.abs(z.duration - V.duration) > 0.15 && C("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => C("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    x && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: x }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Tv = 4e3;
class rf extends Error {
  name = "MicSetupError";
}
async function Mv(s, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new rf("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: s ? { exact: s } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, u = await navigator.mediaDevices.getUserMedia(o);
  let d;
  try {
    if (d = i ? i() : new AudioContext(), d.state !== "running") {
      let j;
      await Promise.race([
        d.resume(),
        new Promise((v, y) => {
          j = setTimeout(() => y(new rf("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Tv);
        })
      ]).finally(() => clearTimeout(j));
    }
    const f = d.createMediaStreamSource(u), p = d, h = u.getAudioTracks?.()[0] ?? u.getTracks()[0], k = h?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: u,
      label: h?.label ?? "",
      deviceId: k.deviceId ?? "",
      channelCount: k.channelCount ?? 1,
      stop: () => {
        u.getTracks().forEach((j) => j.stop()), f.disconnect(), i || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw u.getTracks().forEach((p) => p.stop()), i || await d?.close().catch(() => {
    }), f;
  }
}
async function _v() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var Tl, af;
function bv() {
  if (af) return Tl;
  af = 1;
  function s(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var o = new Array(this.size * 2), u = 0; u < o.length; u += 2) {
      const j = Math.PI * u / this.size;
      o[u] = Math.cos(j), o[u + 1] = -Math.sin(j);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var h = 0; h < this._width; h += 2) {
        var k = this._width - h - 2;
        this._bitrev[p] |= (p >>> h & 3) << k;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return Tl = s, s.prototype.fromComplexArray = function(o, u) {
    for (var d = u || new Array(o.length >>> 1), f = 0; f < o.length; f += 2)
      d[f >>> 1] = o[f];
    return d;
  }, s.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var u = 0; u < o.length; u++)
      o[u] = 0;
    return o;
  }, s.prototype.toComplexArray = function(o, u) {
    for (var d = u || this.createComplexArray(), f = 0; f < d.length; f += 2)
      d[f] = o[f >>> 1], d[f + 1] = 0;
    return d;
  }, s.prototype.completeSpectrum = function(o) {
    for (var u = this._csize, d = u >>> 1, f = 2; f < d; f += 2)
      o[u - f] = o[f], o[u - f + 1] = -o[f + 1];
  }, s.prototype.transform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, s.prototype.realTransform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, s.prototype.inverseTransform = function(o, u) {
    if (o === u)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = u, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, s.prototype._transform4 = function() {
    var o = this._out, u = this._csize, d = this._width, f = 1 << d, p = u / f << 1, h, k, j = this._bitrev;
    if (p === 4)
      for (h = 0, k = 0; h < u; h += p, k++) {
        const E = j[k];
        this._singleTransform2(h, E, f);
      }
    else
      for (h = 0, k = 0; h < u; h += p, k++) {
        const E = j[k];
        this._singleTransform4(h, E, f);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = u / f << 1;
      var x = p >>> 2;
      for (h = 0; h < u; h += p)
        for (var C = h + x, b = h, w = 0; b < C; b += 2, w += f) {
          const E = b, D = E + x, P = D + x, B = P + x, z = o[E], V = o[E + 1], Z = o[D], F = o[D + 1], L = o[P], K = o[P + 1], X = o[B], re = o[B + 1], we = z, W = V, le = y[w], U = v * y[w + 1], ue = Z * le - F * U, fe = Z * U + F * le, Q = y[2 * w], ce = v * y[2 * w + 1], ee = L * Q - K * ce, T = L * ce + K * Q, S = y[3 * w], te = v * y[3 * w + 1], he = X * S - re * te, Ce = X * te + re * S, G = we + ee, me = W + T, Te = we - ee, De = W - T, ie = ue + he, de = fe + Ce, oe = v * (ue - he), ye = v * (fe - Ce), _e = G + ie, ae = me + de, ve = G - ie, ge = me - de, Me = Te + ye, Le = De - oe, Oe = Te - ye, Ge = De + oe;
          o[E] = _e, o[E + 1] = ae, o[D] = Me, o[D + 1] = Le, o[P] = ve, o[P + 1] = ge, o[B] = Oe, o[B + 1] = Ge;
        }
    }
  }, s.prototype._singleTransform2 = function(o, u, d) {
    const f = this._out, p = this._data, h = p[u], k = p[u + 1], j = p[u + d], v = p[u + d + 1], y = h + j, x = k + v, C = h - j, b = k - v;
    f[o] = y, f[o + 1] = x, f[o + 2] = C, f[o + 3] = b;
  }, s.prototype._singleTransform4 = function(o, u, d) {
    const f = this._out, p = this._data, h = this._inv ? -1 : 1, k = d * 2, j = d * 3, v = p[u], y = p[u + 1], x = p[u + d], C = p[u + d + 1], b = p[u + k], w = p[u + k + 1], E = p[u + j], D = p[u + j + 1], P = v + b, B = y + w, z = v - b, V = y - w, Z = x + E, F = C + D, L = h * (x - E), K = h * (C - D), X = P + Z, re = B + F, we = z + K, W = V - L, le = P - Z, U = B - F, ue = z - K, fe = V + L;
    f[o] = X, f[o + 1] = re, f[o + 2] = we, f[o + 3] = W, f[o + 4] = le, f[o + 5] = U, f[o + 6] = ue, f[o + 7] = fe;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, u = this._csize, d = this._width, f = 1 << d, p = u / f << 1, h, k, j = this._bitrev;
    if (p === 4)
      for (h = 0, k = 0; h < u; h += p, k++) {
        const H = j[k];
        this._singleRealTransform2(h, H >>> 1, f >>> 1);
      }
    else
      for (h = 0, k = 0; h < u; h += p, k++) {
        const H = j[k];
        this._singleRealTransform4(h, H >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, y = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = u / f << 1;
      var x = p >>> 1, C = x >>> 1, b = C >>> 1;
      for (h = 0; h < u; h += p)
        for (var w = 0, E = 0; w <= b; w += 2, E += f) {
          var D = h + w, P = D + C, B = P + C, z = B + C, V = o[D], Z = o[D + 1], F = o[P], L = o[P + 1], K = o[B], X = o[B + 1], re = o[z], we = o[z + 1], W = V, le = Z, U = y[E], ue = v * y[E + 1], fe = F * U - L * ue, Q = F * ue + L * U, ce = y[2 * E], ee = v * y[2 * E + 1], T = K * ce - X * ee, S = K * ee + X * ce, te = y[3 * E], he = v * y[3 * E + 1], Ce = re * te - we * he, G = re * he + we * te, me = W + T, Te = le + S, De = W - T, ie = le - S, de = fe + Ce, oe = Q + G, ye = v * (fe - Ce), _e = v * (Q - G), ae = me + de, ve = Te + oe, ge = De + _e, Me = ie - ye;
          if (o[D] = ae, o[D + 1] = ve, o[P] = ge, o[P + 1] = Me, w === 0) {
            var Le = me - de, Oe = Te - oe;
            o[B] = Le, o[B + 1] = Oe;
            continue;
          }
          if (w !== b) {
            var Ge = De, Ie = -ie, Qe = me, at = -Te, $t = -v * _e, it = -v * ye, Be = -v * oe, st = -v * de, Mt = Ge + $t, zt = Ie + it, _t = Qe + st, Ve = at - Be, Ye = h + C - w, A = h + x - w;
            o[Ye] = Mt, o[Ye + 1] = zt, o[A] = _t, o[A + 1] = Ve;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, u, d) {
    const f = this._out, p = this._data, h = p[u], k = p[u + d], j = h + k, v = h - k;
    f[o] = j, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, u, d) {
    const f = this._out, p = this._data, h = this._inv ? -1 : 1, k = d * 2, j = d * 3, v = p[u], y = p[u + d], x = p[u + k], C = p[u + j], b = v + x, w = v - x, E = y + C, D = h * (y - C), P = b + E, B = w, z = -D, V = b - E, Z = w, F = D;
    f[o] = P, f[o + 1] = 0, f[o + 2] = B, f[o + 3] = z, f[o + 4] = V, f[o + 5] = 0, f[o + 6] = Z, f[o + 7] = F;
  }, Tl;
}
var Pv = bv();
const Av = /* @__PURE__ */ pp(Pv);
class qs {
  /** @private @readonly @type {number} */
  _inputLength;
  /** @private @type {FFT} */
  _fft;
  /** @private @type {(size: number) => T} */
  _bufferSupplier;
  /** @private @type {T} */
  _paddedInputBuffer;
  /** @private @type {T} */
  _transformBuffer;
  /** @private @type {T} */
  _inverseBuffer;
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float32Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float32Array>}
   */
  static forFloat32Array(i) {
    return new qs(
      i,
      (o) => new Float32Array(o)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(i) {
    return new qs(
      i,
      (o) => new Float64Array(o)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(i) {
    return new qs(i, (o) => Array(o));
  }
  /**
   * Constructs a new {@link Autocorrelator} able to handle input arrays of the
   * given length.
   *
   * @param inputLength {number} the input array length to support. This
   * `Autocorrelator` will only support operation on arrays of this length.
   * @param bufferSupplier {(length: number) => T} the function to use for
   * creating buffers, accepting the length of the buffer to create and
   * returning a new buffer of that length. The values of the returned buffer
   * need not be initialized in any particular way.
   */
  constructor(i, o) {
    if (i < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = i, this._fft = new Av($v(2 * i)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
  }
  /**
   * Returns the supported input length.
   *
   * @returns {number} the supported input length
   */
  get inputLength() {
    return this._inputLength;
  }
  /**
   * Autocorrelates the given input data.
   *
   * @param input {ArrayLike<number>} the input data to autocorrelate
   * @param output {T} the output buffer into which to write the autocorrelated
   * data. If not provided, a new buffer will be created.
   * @returns {T} `output`
   */
  autocorrelate(i, o = this._bufferSupplier(i.length)) {
    if (i.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${i.length}`
      );
    for (let d = 0; d < i.length; d++)
      this._paddedInputBuffer[d] = i[d];
    for (let d = i.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const u = this._transformBuffer;
    for (let d = 0; d < u.length; d += 2)
      u[d] = u[d] * u[d] + u[d + 1] * u[d + 1], u[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < i.length; d++)
      o[d] = this._inverseBuffer[2 * d];
    return o;
  }
}
function Lv(s) {
  const i = [];
  let o = !1, u = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, u = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && i.push(d)) : o && s[f] > u && (u = s[f], d = f);
  return i;
}
function Rv(s, i) {
  const [o, u, d] = [s - 1, s, s + 1], [f, p, h] = [i[o], i[u], i[d]], k = f / 2 - p + h / 2, j = -(f / 2) * (u + d) + p * (o + d) - h / 2 * (o + u), v = f * u * d / 2 - p * o * d + h * o * u / 2, y = -j / (2 * k), x = k * y * y + j * y + v;
  return [y, x];
}
class er {
  /** @private @type {Autocorrelator<T>} */
  _autocorrelator;
  /** @private @type {T} */
  _nsdfBuffer;
  /** @private @type {number} */
  _clarityThreshold = 0.9;
  /** @private @type {number} */
  _minVolumeAbsolute = 0;
  /** @private @type {number} */
  _maxInputAmplitude = 1;
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float32Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float32Array>}
   */
  static forFloat32Array(i) {
    return new er(i, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new er(i, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new er(i, (o) => Array(o));
  }
  /**
   * Constructs a new {@link PitchDetector} able to handle input arrays of the
   * given length.
   *
   * @param inputLength {number} the input array length to support. This
   * `PitchDetector` will only support operation on arrays of this length.
   * @param bufferSupplier {(inputLength: number) => T} the function to use for
   * creating buffers, accepting the length of the buffer to create and
   * returning a new buffer of that length. The values of the returned buffer
   * need not be initialized in any particular way.
   */
  constructor(i, o) {
    this._autocorrelator = new qs(i, o), this._nsdfBuffer = o(i);
  }
  /**
   * Returns the supported input length.
   *
   * @returns {number} the supported input length
   */
  get inputLength() {
    return this._autocorrelator.inputLength;
  }
  /**
   * Sets the clarity threshold used when identifying the correct pitch (the constant
   * `k` from the MPM paper). The value must be between 0 (exclusive) and 1
   * (inclusive), with the most suitable range being between 0.8 and 1.
   *
   * @param threshold {number} the clarity threshold
   */
  set clarityThreshold(i) {
    if (!Number.isFinite(i) || i <= 0 || i > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = i;
  }
  /**
   * Sets the minimum detectable volume, as an absolute number between 0 and
   * `maxInputAmplitude`, inclusive, to consider in a sample when detecting the
   * pitch. If a sample fails to meet this minimum volume, `findPitch` will
   * return a clarity of 0.
   *
   * Volume is calculated as the RMS (root mean square) of the input samples.
   *
   * @param volume {number} the minimum volume as an absolute amplitude value
   */
  set minVolumeAbsolute(i) {
    if (!Number.isFinite(i) || i < 0 || i > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = i;
  }
  /**
   * Sets the minimum volume using a decibel measurement. Must be less than or
   * equal to 0: 0 indicates the loudest possible sound (see
   * `maxInputAmplitude`), -10 is a sound with a tenth of the volume of the
   * loudest possible sound, etc.
   *
   * Volume is calculated as the RMS (root mean square) of the input samples.
   *
   * @param db {number} the minimum volume in decibels, with 0 being the loudest
   * sound
   */
  set minVolumeDecibels(i) {
    if (!Number.isFinite(i) || i > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (i / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(i) {
    if (!Number.isFinite(i) || i <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = i;
  }
  /**
   * Returns the pitch detected using McLeod Pitch Method (MPM) along with a
   * measure of its clarity.
   *
   * The clarity is a value between 0 and 1 (potentially inclusive) that
   * represents how "clear" the pitch was. A clarity value of 1 indicates that
   * the pitch was very distinct, while lower clarity values indicate less
   * definite pitches.
   *
   * @param input {ArrayLike<number>} the time-domain input data
   * @param sampleRate {number} the sample rate at which the input data was
   * collected
   * @returns {[number, number]} the detected pitch, in Hz, followed by the
   * clarity. If a pitch cannot be determined from the input, such as if the
   * volume is too low (see `minVolumeAbsolute` and `minVolumeDecibels`), this
   * will be `[0, 0]`.
   */
  findPitch(i, o) {
    if (this._belowMinimumVolume(i)) return [0, 0];
    this._nsdf(i);
    const u = Lv(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((k) => this._nsdfBuffer[k])), f = u.find(
      (k) => this._nsdfBuffer[k] >= this._clarityThreshold * d
    ), [p, h] = Rv(
      // @ts-expect-error resultIndex is guaranteed to be defined
      f,
      this._nsdfBuffer
    );
    return [o / p, Math.min(h, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(i) {
    if (this._minVolumeAbsolute === 0) return !1;
    let o = 0;
    for (let u = 0; u < i.length; u++)
      o += i[u] ** 2;
    return Math.sqrt(o / i.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(i) {
    this._autocorrelator.autocorrelate(i, this._nsdfBuffer);
    let o = 2 * this._nsdfBuffer[0], u;
    for (u = 0; u < this._nsdfBuffer.length && o > 0; u++)
      this._nsdfBuffer[u] = 2 * this._nsdfBuffer[u] / o, o -= i[u] ** 2 + i[i.length - u - 1] ** 2;
    for (; u < this._nsdfBuffer.length; u++)
      this._nsdfBuffer[u] = 0;
  }
}
function $v(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function Ov(s) {
  const i = s * 0.17;
  let o = 2048;
  for (; o < i && o < 32768; ) o *= 2;
  return o;
}
const Iv = 0.05, Fv = 1.5;
class Dv {
  constructor(i, o = {}) {
    this.mic = i, this.opts = o;
    const u = i.context, d = Ov(u.sampleRate), f = Math.max(1, Math.min(2, i.channelCount ?? 1));
    f > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(f), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const h = u.createAnalyser();
      h.fftSize = d, h.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(h, p) : i.source.connect(h), this.analysers.push(h), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Iv))), this.detector = er.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
  }
  mic;
  opts;
  analysers = [];
  splitter = null;
  detector;
  buffers = [];
  shortLength;
  rafId = null;
  running = !1;
  paused = !1;
  channel = 0;
  gate = new zv();
  onset = new Bv();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(i) {
    Object.assign(this.opts, i);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const i = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(i));
    };
    this.rafId = requestAnimationFrame(i);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const i of this.analysers) i.disconnect();
    this.splitter?.disconnect();
  }
  /** Stop processing frames without tearing down the audio graph (esimerkkiäänen ajaksi). */
  pause() {
    this.paused = !0, this.gate.reset(), this.onset.reset();
  }
  resume() {
    this.paused = !1, this.gate.reset(), this.onset.reset();
  }
  /** Uusi kysymys: edellisestä vastauksesta soimaan jäänyt sävel ei saa vastata siihen. */
  rearm() {
    this.gate.reset();
  }
  processFrame(i) {
    const {
      minClarity: o = 0.9,
      minRms: u = 0.01,
      stabilityMs: d = 240,
      centsTolerance: f = 35,
      minFreq: p = 70,
      maxFreq: h = 1450,
      onFrame: k,
      onStableNote: j
    } = this.opts, v = this.analysers.map((F, L) => (F.getFloatTimeDomainData(this.buffers[L]), of(this.buffers[L], this.buffers[L].length - this.shortLength))), y = v.indexOf(Math.max(...v));
    y !== this.channel && v[y] > (v[this.channel] ?? 0) * Fv && (this.channel = y);
    const x = this.buffers[this.channel], C = v[this.channel], b = Vv(x, x.length - this.shortLength), w = { rms: C, peak: b, channel: this.channel, levels: v }, E = C < u, D = this.onset.feed(C, i, u);
    if (E && of(x, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), k?.({ ...w, status: "silent" });
      return;
    }
    const [P, B] = this.detector.findPitch(x, this.mic.context.sampleRate);
    if (!isFinite(P) || B < o) {
      this.gate.feed(null, i, d, E, D), k?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(B) ? B : 0 });
      return;
    }
    if (P < p || P > h) {
      this.gate.feed(null, i, d, E, D), k?.({ ...w, status: "out-of-range", frequency: P, clarity: B });
      return;
    }
    const { midi: z, cents: V } = Tp(P);
    if (Math.abs(V) > f) {
      this.gate.feed(null, i, d, E, D), k?.({ ...w, status: "off-pitch", frequency: P, clarity: B, midi: z, cents: V });
      return;
    }
    k?.({ ...w, status: "pitch", frequency: P, clarity: B, midi: z, cents: V });
    const Z = this.gate.feed(z, i, d, E, D);
    Z !== null && j?.({ midi: z, frequency: P, cents: V, clarity: B, timestamp: i, heldMs: Z.heldMs });
  }
}
class zv {
  constructor(i = 120, o = 80) {
    this.releaseMs = i, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(i, o, u, d, f) {
    if (d ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), i === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== i) && (this.current = { midi: i, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < u ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: p });
  }
}
class Bv {
  constructor(i = 2, o = 300, u = 150) {
    this.ratio = i, this.windowMs = o, this.refractoryMs = u;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(i, o, u) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: i }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : i;
    return this.history.push({ time: o, rms: i }), i < u * 1.5 || i < d * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: i }], !0);
  }
}
function of(s, i = 0) {
  const o = Math.max(0, i);
  let u = 0;
  for (let d = o; d < s.length; d++) u += s[d] * s[d];
  return Math.sqrt(u / Math.max(1, s.length - o));
}
function Vv(s, i = 0) {
  let o = 0;
  for (let u = Math.max(0, i); u < s.length; u++) {
    const d = Math.abs(s[u]);
    d > o && (o = d);
  }
  return o;
}
const cs = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let is;
function lh() {
  return (!is || is.state === "closed") && (is = new AudioContext()), is;
}
function Kv() {
  const s = is;
  is = void 0, s?.close().catch(() => {
  });
}
const uh = (s) => s instanceof Error ? s.name : "";
function Uv(s) {
  const i = uh(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Hv {
  constructor(i = (o) => Mv(o, lh)) {
    this.opener = i;
  }
  opener;
  generation = 0;
  mic;
  loop;
  listeners;
  get active() {
    return !!this.mic;
  }
  /** Palauttaa null, jos kuuntelu peruttiin ennen kuin laite ehti avautua. */
  async start(i, o, u) {
    this.stop();
    const d = this.generation;
    let f, p = !1;
    try {
      f = await this.opener(i || void 0);
    } catch (h) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(uh(h))) throw h;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new Dv(f, { ...o });
      const h = () => {
        this.mic === f && (this.stop(), u());
      }, k = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((j) => j.addEventListener("ended", h, { once: !0, signal: k.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && h();
      }, { signal: k.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
    } catch (h) {
      throw this.stop(), h;
    }
  }
  setOptions(i) {
    this.loop?.setOptions(i);
  }
  /** Esimerkkiäänen ajaksi: kaiuttimen ääni ei saa vastata tehtävään. */
  pause() {
    this.loop?.pause();
  }
  resume() {
    this.loop?.resume();
  }
  /** Uusi kysymys vaatii uuden näppäyksen tai vaimennuksen. */
  rearm() {
    this.loop?.rearm();
  }
  /** Vapauttaa mikrofonin: äänivirta pysäytetään ja analyysisolmut irrotetaan. */
  stop() {
    this.generation++, this.listeners?.abort(), this.listeners = void 0, this.loop?.stop(), this.loop = void 0, this.mic?.stop(), this.mic = void 0;
  }
}
function ch(s, i) {
  return s !== "on" ? s : !i || i.status === "silent" ? "silent" : i.status === "pitch" ? "pitch" : i.status === "off-pitch" ? "untuned" : "noise";
}
const lf = (s) => Math.max(0, Math.min(1, (cs(s) + 60) / 60));
function Gv(s) {
  const i = [...s].sort((u, d) => u - d), o = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function Ml(s) {
  const i = () => s.state === "running";
  if (i()) return;
  let o;
  try {
    await Promise.race([
      s.resume(),
      new Promise((u, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function Fa(s) {
  const i = s instanceof Error ? s.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class ur {
  constructor(i = lh) {
    this.provide = i;
  }
  provide;
  master;
  token = 0;
  timer;
  noteTimers = [];
  loopTick;
  adjustLoopTempo;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), this.noteTimers.forEach(clearTimeout), this.noteTimers = [], clearInterval(this.loopTick), this.loopTick = void 0, this.adjustLoopTempo = void 0, this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(i, o) {
    this.stop();
    const u = this.token, d = this.provide();
    if (await Ml(d), u !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (j, v) => 1 / (v + 1) ** 1.3), h = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((j, v) => {
      const y = d.createOscillator(), x = d.createGain(), C = d.currentTime + 0.05 + v * 0.8;
      h ? y.setPeriodicWave(h) : y.type = "triangle", y.frequency.value = Nl(j), x.gain.setValueAtTime(0, C), x.gain.linearRampToValueAtTime(0.22, C + 0.012), x.gain.exponentialRampToValueAtTime(1e-3, C + 0.7), y.connect(x), x.connect(f), y.start(C), y.stop(C + 0.72), o && this.noteTimers.push(setTimeout(() => {
        u === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), i.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(i, o, u, d) {
    if (this.stop(), !i.length) return !1;
    const f = this.token, p = this.provide();
    if (await Ml(p), f !== this.token) return !1;
    const h = 60 / Math.max(40, Math.min(140, o)), k = p.createGain();
    k.connect(p.destination), this.master = k;
    const j = Array.from({ length: 12 }, (b, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...j.map(() => 0)]),
      new Float32Array([0, ...j])
    ), y = p.currentTime + 0.05;
    let x = 0;
    return i.forEach((b, w) => {
      if (!Number.isFinite(b.beat) || b.beat < 0 || !Number.isFinite(b.duration) || b.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const E = y + b.beat * h, D = b.duration * h, P = E + Math.max(0.08, D * 0.94), B = p.createOscillator(), z = p.createGain();
      v ? B.setPeriodicWave(v) : B.type = "triangle", B.frequency.value = Nl(b.midi), z.gain.setValueAtTime(0, E), z.gain.linearRampToValueAtTime(0.22, E + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, P - 0.01), B.connect(z), z.connect(k), B.start(E), B.stop(P), u && this.noteTimers.push(setTimeout(() => {
        f === this.token && u(w);
      }, 50 + b.beat * h * 1e3));
      const V = i[w + 1]?.beat ?? 1 / 0;
      d && V > b.beat + b.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + b.beat * h * 1e3 + D * 1e3)), x = Math.max(x, b.beat + b.duration);
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), 50 + x * h * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], k.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(i) {
    this.adjustLoopTempo?.(i);
  }
  async loop(i, o, u = 75) {
    if (this.stop(), !i.length) return !1;
    const d = this.token, f = this.provide();
    if (await Ml(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const h = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), k = f.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    let j = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (j = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let y = f.currentTime + 0.05, x = 0;
    const C = [], b = () => {
      if (d === this.token) {
        if (y < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - y) / j);
          y += w * j, x = (x + w) % i.length, C.length = 0;
        }
        for (; y < f.currentTime + v; ) {
          const w = i[x], E = x, D = y, P = f.createOscillator(), B = f.createGain();
          k ? P.setPeriodicWave(k) : P.type = "triangle", P.frequency.value = Nl(w), B.gain.setValueAtTime(0, D), B.gain.linearRampToValueAtTime(0.22, D + 0.012), B.gain.exponentialRampToValueAtTime(1e-3, D + j * 0.975), P.connect(B), B.connect(p), P.start(D), P.stop(D + j * 0.985), C.push({ at: D, index: E }), y += j, x = (x + 1) % i.length;
        }
        for (; C.length && C[0].at <= f.currentTime + 0.01; ) {
          const w = C.shift();
          o?.(w.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function di(s, i) {
  let o = 0;
  const u = i.map(([d, f, p]) => {
    const k = { position: d === null || f === null ? null : He(d, f), beat: o, duration: p };
    return o += p, k;
  });
  return { label: s, events: u, beats: o };
}
function _l(s, ...i) {
  let o = 0;
  const u = i.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: s, events: u, beats: o };
}
const uf = di("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), cf = di("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Wv = di("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), df = di("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), ff = di("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Qv = di("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), hf = di("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), mf = di("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Yv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [uf, cf],
    whole: _l("Melodia · A + B + C", uf, cf, Wv),
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta."
  },
  nooa: {
    id: "nooa",
    title: "Ukko Nooa",
    qualifier: "Perinteinen melodia · C-jooninen",
    tempo: 84,
    tonic: 0,
    permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [df, ff],
    whole: _l("Ukko Nooa · A + B", df, ff),
    bonus: Qv,
    source: "https://aoe.fi/api/v1/download/file/opisavellajitjaasteikothankkeentehtavapaketti1-1701684466136.pdf",
    note: "Lähde: Opi sävellajit ja asteikot (2023), s. 56, Ukko Nooan alku C-duurissa. Tässä soitetaan oktaavia alempaa samalla säveljonolla ja rytmillä. Erillinen B → C -täydennys on itse sävelletty."
  },
  "pentatonic-bridge": {
    id: "pentatonic-bridge",
    title: "Siirtymä kahden position välillä",
    qualifier: "Oma sävellys · A-mollipentatoninen",
    tempo: 75,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [hf, mf],
    whole: _l("Siirtymämelodia · A + B", hf, mf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Jv(s) {
  return s.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const pf = ["e", "B", "G", "D", "A", "E"];
function ou({ pieceId: s, stage: i, onBeforePlay: o, stopHandleRef: u }) {
  const d = Yv[s], [f, p] = _.useState(i === "fingering" ? "a" : "whole"), [h, k] = _.useState(d.tempo), [j, v] = _.useState(!1), [y, x] = _.useState(!1), [C, b] = _.useState(i !== "memory"), [w, E] = _.useState(!1), [D, P] = _.useState(null), [B, z] = _.useState(""), V = _.useRef(new ur()), Z = _.useRef(0);
  function F() {
    Z.current++, V.current.stop(), E(!1), P(null);
  }
  _.useEffect(() => {
    u && (u.current = F);
    const S = () => {
      document.hidden && F();
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), Z.current++, V.current.stop(), u && (u.current = null);
    };
  }, [u]);
  const L = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], K = L.find((S) => S.id === f) ?? L[0], X = K.clip, re = Jv(X), we = D === null ? null : re[D]?.beat ?? null, W = we === null ? null : X.events.find((S) => S.beat === we)?.position ?? null, le = _.useRef(null);
  Wf(le, ".melody-playing", w && we !== null ? String(we) : "", { enabled: j && y, playback: w });
  const U = X.beats / 4, ue = [...new Map(X.events.filter((S) => S.position).map((S) => [et(S.position), S.position])).values()], fe = ue.map((S) => S.fret), Q = ue.filter((S) => C || W?.string === S.string && W.fret === S.fret).map((S) => ({
    ...S,
    label: Fe(S.midi),
    kind: W?.string === S.string && W.fret === S.fret ? "playing" : Ze(S.midi) === d.tonic ? "answer" : "shape"
  })), ce = {
    strings: [...new Set(ue.map((S) => S.string))],
    min: Math.min(...fe),
    max: Math.max(...fe),
    fixed: "box"
  };
  async function ee() {
    if (w) {
      F();
      return;
    }
    o?.();
    const S = ++Z.current;
    V.current.stop(), E(!0), P(null), z("");
    try {
      await V.current.playTimed(re, h, (te) => {
        S === Z.current && P(te);
      }, () => {
        S === Z.current && P(null);
      });
    } catch (te) {
      S === Z.current && z(Fa(te));
    } finally {
      S === Z.current && (E(!1), P(null));
    }
  }
  function T(S) {
    F(), z(""), p(S);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (S) => {
    const te = S.currentTarget.open;
    v(te), te || F();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    j && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: i === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ a.jsx("h4", { children: d.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        U.toString().replace(".", ","),
        " tahtia ",
        i === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-instruction", children: i === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      i === "fingering" && d.bonus && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ a.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        d.title,
        " -sävelmää."
      ] }),
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: L.map((S) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": K.id === S.id,
          onClick: () => T(S.id),
          children: S.name
        },
        S.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          ee();
        }, children: w ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: h, onChange: (S) => {
            F(), k(Number(S.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((S, te) => S - te).filter((S, te, he) => he.indexOf(S) === te).map((S) => /* @__PURE__ */ a.jsxs("option", { value: S, children: [
            S,
            " BPM"
          ] }, S)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": y, onClick: () => x((S) => !S), children: y ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      B && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: B }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && D !== null ? `Nyt soi ${Fe(re[D].midi)} · ${pf[W.string]}-kieli, ${W.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(ci, { area: ce, marks: Q, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${K.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C,
              onClick: () => b((S) => !S),
              children: C ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      y && /* @__PURE__ */ a.jsxs("div", { ref: le, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${K.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kieli" }),
            X.events.map((S, te) => /* @__PURE__ */ a.jsxs("th", { scope: "col", className: S.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ a.jsx("span", { className: "melody-bar", children: S.beat % 4 === 0 ? `T${Math.floor(S.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ a.jsx("span", { className: "melody-duration", children: S.duration === 1 ? "♩" : `${S.duration} iskua` })
            ] }, te))
          ] }) }),
          /* @__PURE__ */ a.jsx("tbody", { children: pf.map((S, te) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: S }),
            X.events.map((he, Ce) => {
              const G = he.position?.string === te, me = G && we === he.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${he.beat % 4 === 0 ? "bar-start " : ""}${me ? "melody-playing " : ""}${G && Ze(he.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${S}-kieli, ${he.position.fret}. nauha, ${Fe(he.position.midi)}` : void 0,
                  children: G ? he.position.fret : "—"
                },
                Ce
              );
            })
          ] }, te)) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ a.jsx("p", { className: "melody-source", children: /* @__PURE__ */ a.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Ql = ze.fingeringBoxes(9, ze.SCALES.mp, "pentatonic", [1, 2]), dh = [...new Map(Ql.flatMap((s) => s.positions[0].strings.flatMap((i, o) => i.map((u) => {
  const d = He(o, u);
  return [et(d), d];
})))).values()].sort((s, i) => s.midi - i.midi || i.string - s.string), La = [5, 4, 3, 2, 1, 0].flatMap((s) => dh.filter((i) => i.string === s).sort((i, o) => i.fret - o.fret)), Yl = [
  ...La,
  ...La.slice(1, -1).reverse()
], Xv = [...Yl, La[0]], vf = new Set(
  Ql[0].positions[0].strings.flatMap((s, i) => s.map((o) => {
    const u = He(i, o);
    return et(u);
  })).filter((s) => Ql[1].positions[0].strings.flatMap((i, o) => i.map((u) => et(He(o, u)))).includes(s))
), Zv = [
  He(5, 5),
  He(5, 8),
  He(5, 10),
  He(4, 7),
  He(4, 10),
  He(3, 7),
  He(3, 10),
  He(3, 7),
  He(4, 10),
  He(4, 7),
  He(5, 10),
  He(5, 8),
  He(5, 5)
], fh = "musiikin-kartta:skaalapolku:bridge-1-2:v1", hh = "musiikin-kartta:skaalapolku:bridge-tempo:v1", bl = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], kf = (s) => Ze(s) === 9;
function yf() {
  try {
    const s = Number(localStorage.getItem(fh));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function qv() {
  try {
    const s = Number(localStorage.getItem(hh));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function ek({ onBack: s, onPosition: i }) {
  const [o, u] = _.useState(yf), [d, f] = _.useState(yf), [p, h] = _.useState(!1), [k, j] = _.useState("roots"), [v, y] = _.useState(qv), [x, C] = _.useState(null), [b, w] = _.useState(null), [E, D] = _.useState(""), P = _.useRef(new ur()), B = _.useRef(0), z = _.useRef(null), V = b === null ? null : Yl[b];
  function Z() {
    z.current?.(), B.current++, P.current.stop(), C(null), w(null);
  }
  _.useEffect(() => {
    const W = () => {
      document.hidden && (B.current++, P.current.stop(), C(null), w(null));
    };
    return document.addEventListener("visibilitychange", W), () => {
      document.removeEventListener("visibilitychange", W), B.current++, P.current.stop();
    };
  }, []);
  async function F(W) {
    z.current?.();
    const le = ++B.current;
    P.current.stop(), w(null), D(""), C(W);
    try {
      W === "transition" ? await P.current.play(Zv.map((U) => U.midi)) : W === "once" ? await P.current.play(Xv.map((U) => U.midi)) : await P.current.loop(Yl.map((U) => U.midi), (U) => {
        le === B.current && w(U);
      }, v);
    } catch (U) {
      le === B.current && D(Fa(U));
    } finally {
      le === B.current && (C(null), w(null));
    }
  }
  function L(W) {
    const le = Math.max(40, Math.min(140, W));
    y(le), P.current.setLoopTempo(le);
    try {
      localStorage.setItem(hh, String(le));
    } catch {
    }
  }
  function K(W) {
    W > o || (Z(), f(W), h(!1), j("roots"));
  }
  function X() {
    Z();
    const W = Math.min(4, d + 1);
    if (f(W), h(!1), j("roots"), W > o) {
      u(W);
      try {
        localStorage.setItem(fh, String(W));
      } catch {
      }
    }
  }
  const re = (W, le) => d < 2 || d === 2 && p && vf.has(le) || d === 3 && (k === "all" || k === "roots" && kf(W)), we = dh.filter((W) => re(W.midi, et(W))).map((W) => ({
    ...W,
    label: d < 2 || d === 2 && p || d === 3 && k === "all" ? Fe(W.midi) : "A",
    kind: d < 2 && V?.string === W.string && V?.fret === W.fret ? "playing" : kf(W.midi) ? "answer" : vf.has(et(W)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Z(), s();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        Z(), i(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        Z(), i(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => K(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: bl.map((W, le) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: le === d ? "journey-step current" : "journey-step",
        "aria-current": le === d ? "step" : void 0,
        disabled: le > o,
        onClick: () => K(le),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: le > o ? "🔒" : le < o ? "✓" : le + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: W.title })
        ]
      },
      W.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: bl[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: bl[d].detail }),
      d < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        d === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            /* @__PURE__ */ a.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ a.jsxs("strong", { children: [
              La.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ a.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ a.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        d === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ a.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => L(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => L(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "whole",
              onClick: () => x === "whole" ? Z() : void F("whole"),
              children: x === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "once",
              onClick: () => x === "once" ? Z() : void F("once"),
              children: x === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "transition",
              onClick: () => x === "transition" ? Z() : void F("transition"),
              children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": p, onClick: () => h((W) => !W), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => K(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((W) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: W.value,
                  checked: k === W.value,
                  onChange: () => j(W.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: W.name })
            ] }, W.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "once" ? Z() : void F("once"), children: x === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x === "transition" ? Z() : void F("transition"), children: x === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "whole" ? V && d < 2 ? `Nyt soi ${Fe(V.midi, !1, !0)} · ${rn[V.string]}-kieli, nauha ${V.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : x === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : x === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          ci,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: x,
            marks: we,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? k === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : k === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ a.jsx(
          ou,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: Z,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(oh, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: X, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => K(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => i(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const tr = "musiikin-kartta:skaalapolku:v1", Ca = "musiikin-kartta:skaalapolku:position-2:v1", Pl = "musiikin-kartta:skaalapolku:position-3:v1", Ta = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ra = "musiikin-kartta:skaalapolku:active-position:v1", mh = "musiikin-kartta:skaalapolku:tempo:v1", as = 75, Jl = 40, Xl = 140;
function tk() {
  try {
    const s = localStorage.getItem(mh);
    if (s === null) return as;
    const i = Number(s);
    return Number.isInteger(i) && i >= Jl && i <= Xl && i % 5 === 0 ? i : as;
  } catch {
    return as;
  }
}
const Al = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], gf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Cn(s = tr) {
  try {
    const i = Number(localStorage.getItem(s));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Ll() {
  try {
    const s = localStorage.getItem(Ra);
    return s === "3" && Cn(Ta) === 4 ? 3 : Cn(tr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function nk() {
  try {
    return Cn(Ca) === 4 && localStorage.getItem(Ra) === "bridge";
  } catch {
    return !1;
  }
}
function ik({ onBack: s }) {
  const [i, o] = _.useState(Ll), [u, d] = _.useState(nk), [f, p] = _.useState(() => ({
    1: Cn(tr),
    2: Cn(Ca),
    3: Cn(Pl)
  })), [h, k] = _.useState(() => Cn(Ll() === 3 ? Pl : Ll() === 2 ? Ca : tr)), j = f[i], [v, y] = _.useState(!1), [x, C] = _.useState("roots"), [b, w] = _.useState(tk), [E, D] = _.useState(null), [P, B] = _.useState(null), [z, V] = _.useState(""), Z = _.useRef(new ur()), F = _.useRef(0), L = _.useRef(null);
  function K(G) {
    const me = Math.max(Jl, Math.min(Xl, G));
    w(me), Z.current.setLoopTempo(me);
    try {
      localStorage.setItem(mh, String(me));
    } catch {
    }
  }
  function X() {
    L.current?.(), F.current++, Z.current.stop(), D(null), B(null);
  }
  _.useEffect(() => {
    const G = () => {
      document.hidden && (F.current++, Z.current.stop(), D(null), B(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), F.current++, Z.current.stop();
    };
  }, []);
  const re = ze.fingeringBoxes(9, ze.SCALES.mp, "pentatonic", [i])[0].positions[0], we = re.strings.flatMap((G, me) => G.map((Te) => He(me, Te))).sort((G, me) => G.midi - me.midi || me.string - G.string), W = [...we, ...we.slice(1, -1).reverse()], le = P === null ? null : W[P], U = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ue = re.start, fe = re.end, Q = (G) => Ze(G) === 9, ce = (G) => h < 2 ? !0 : h === 2 ? v && Q(G) : x === "scale" || x === "roots" && Q(G), ee = we.filter((G) => ce(G.midi)).map((G) => ({
    ...G,
    label: h < 2 || h === 3 && x === "scale" ? Fe(G.midi) : "A",
    kind: h < 2 && le?.string === G.string && le.fret === G.fret ? "playing" : Q(G.midi) ? "answer" : "shape"
  }));
  async function T(G) {
    L.current?.();
    const me = ++F.current;
    Z.current.stop(), B(null), V(""), D(G);
    try {
      G === "phrase" ? await Z.current.play(U) : await Z.current.loop(W.map((Te) => Te.midi), (Te) => {
        me === F.current && B(Te);
      }, h === 2 ? b : as);
    } catch (Te) {
      me === F.current && V(Fa(Te));
    } finally {
      me === F.current && (D(null), B(null));
    }
  }
  function S() {
    X();
    const G = Math.min(4, h + 1);
    if (k(G), y(!1), C("roots"), G > j) {
      p((Te) => ({ ...Te, [i]: G }));
      const me = i === 1 ? tr : i === 2 ? Ca : Pl;
      try {
        localStorage.setItem(me, String(G));
      } catch {
      }
    }
  }
  function te(G) {
    G > j || (X(), k(G), y(!1), C("roots"));
  }
  function he(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && Cn(Ta) < 4)) {
      X(), d(!1), o(G), k(f[G]), y(!1), C("roots"), V("");
      try {
        localStorage.setItem(Ra, String(G));
      } catch {
      }
    }
  }
  function Ce() {
    if (!(f[2] < 4)) {
      X(), d(!0), y(!1), V("");
      try {
        localStorage.setItem(Ra, "bridge");
      } catch {
      }
    }
  }
  return u ? /* @__PURE__ */ a.jsx(ek, { onBack: s, onPosition: he }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      X(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      i
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      i
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      ue,
      "–",
      fe,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === 1, onClick: () => he(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 2,
          disabled: f[1] < 4,
          onClick: () => he(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Ce,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 3,
          disabled: Cn(Ta) < 4,
          onClick: () => he(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: Al.map((G, me) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: me === h ? "journey-step current" : "journey-step",
        "aria-current": me === h ? "step" : void 0,
        disabled: me > j,
        onClick: () => te(me),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: me > j ? "🔒" : me < j ? "✓" : me + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: me === 4 ? `Positio ${i} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: h === 4 ? `Positio ${i} harjoiteltu` : Al[h].title }),
        /* @__PURE__ */ a.jsx("span", { children: h === 4 ? "Valmis" : `Harjoitus ${h + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Al[h].detail }),
      h < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        h === 0 && /* @__PURE__ */ a.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          i === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        h === 0 && i === 2 && /* @__PURE__ */ a.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        h === 0 && i === 3 && /* @__PURE__ */ a.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        h === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        h === 3 && /* @__PURE__ */ a.jsxs("p", { children: [
          i === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        h === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: b <= Jl,
              onClick: () => K(b - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            b,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: b >= Xl,
              onClick: () => K(b + 5),
              children: "+ 5"
            }
          ),
          b !== as && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => K(as),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        h !== 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "loop",
              onClick: () => E === "loop" ? X() : void T("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? X() : void T("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        h !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? le && h < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(le.midi, !1, !0)} · ${rn[le.string]}-kieli, nauha ${le.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: z }),
        h >= 1 && h <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          h === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => y((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          h === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              gf.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: x === G.value,
                    onChange: () => C(G.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            i !== 1 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              T("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: fe, fixed: "box" }, marks: ee, disabled: !0, follow: "playing", playback: E, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            h < 2 ? "Vihreällä merkitty A on pohjasävel." : h === 3 ? gf.find((G) => G.value === x).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        h === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: fe, fixed: "box" }, marks: ee, disabled: !0, follow: "playing", playback: E, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
          ou,
          {
            pieceId: "wayfaring",
            stage: h === 1 ? "fingering" : "memory",
            onBeforePlay: X,
            stopHandleRef: L
          },
          `wayfaring:${h}`
        ),
        h === 3 && /* @__PURE__ */ a.jsx(oh, {}, i),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: h === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : h === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : h === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: S, children: h === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: i === 1 ? "Valmis seuraavaan positioon" : i === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ a.jsx("p", { children: i === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : i === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" }),
        i === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => he(2), children: "Siirry positioon 2 →" }) : i === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Ce, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => he(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Cn(Ta) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const sk = ["ionian", "aeolian"], ss = {
  ionian: {
    id: "ionian",
    title: "C-jooninen",
    alias: "Ionian · tavallinen duuri",
    tonic: 0,
    scaleKey: "ionian",
    tonicName: "C",
    chord: "C-duuri",
    noteNames: "C · D · E · F · G · A · B",
    explanation: "Seitsemän säveltä ja C kotisävelenä. Kuuntele, miten B pyrkii C:hen.",
    contrast: "A-aiolisessa ovat samat seitsemän säveltä, mutta A on kotisävel.",
    // A-kieli 3.–5., D-kieli 2.–5. ja G-kieli 2.–5. nauha.
    positions: [
      He(4, 3),
      He(4, 5),
      He(3, 2),
      He(3, 3),
      He(3, 5),
      He(2, 2),
      He(2, 4),
      He(2, 5)
    ],
    phrase: [48, 52, 55, 59, 60, 59, 55, 52, 48],
    accompaniment: [48, 52, 55, 52]
  },
  aeolian: {
    id: "aeolian",
    title: "A-aiolinen",
    alias: "Aeolian · luonnollinen molli",
    tonic: 9,
    scaleKey: "aeolian",
    tonicName: "A",
    chord: "A-molli",
    noteNames: "A · B · C · D · E · F · G",
    explanation: "A tuntuu nyt kotisäveleltä, vaikka sävelnimet ovat samat kuin C-duurissa.",
    contrast: "C-joonisessa C on kotisävel. Opettele kuulemaan A:n ja C:n eri vetovoima.",
    // Paksu E 5.–8., A-kieli 5.–8. ja D-kieli 5.–7. nauha.
    positions: [
      He(5, 5),
      He(5, 7),
      He(5, 8),
      He(4, 5),
      He(4, 7),
      He(4, 8),
      He(3, 5),
      He(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, ph = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", vh = "musiikin-kartta:moodipolku:active:v1", rk = (s) => {
  const i = ss[s].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, ak = (s) => [...rk(s), ss[s].positions[0]], xf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Ma(s) {
  try {
    const i = Number(localStorage.getItem(ph(s)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function jf() {
  try {
    return localStorage.getItem(vh) === "aeolian" && Ma("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function ok({ onBack: s }) {
  const [i, o] = _.useState(jf), [u, d] = _.useState(() => ({
    ionian: Ma("ionian"),
    aeolian: Ma("aeolian")
  })), [f, p] = _.useState(() => Ma(jf())), [h, k] = _.useState(null), [j, v] = _.useState(null), [y, x] = _.useState(!1), [C, b] = _.useState("roots"), [w, E] = _.useState(""), [D, P] = _.useState(null), [B, z] = _.useState(null), V = _.useRef(new ur()), Z = _.useRef(0), F = _.useRef(null), L = ss[i], K = ak(i), X = h === "scale" && j !== null ? K[j] : null;
  function re() {
    F.current?.(), Z.current++, V.current.stop(), k(null), v(null);
  }
  _.useEffect(() => {
    const S = () => {
      document.hidden && (Z.current++, V.current.stop(), k(null), v(null));
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), Z.current++, V.current.stop();
    };
  }, []);
  async function we(S, te, he = !1) {
    F.current?.();
    const Ce = ++Z.current;
    V.current.stop(), v(null), E(""), k(S);
    try {
      const G = he ? await V.current.loop(te, void 0, 75) : await V.current.play(te, (me) => {
        Ce === Z.current && S === "scale" && v(me);
      });
      return Ce === Z.current && G;
    } catch (G) {
      return Ce === Z.current && E(Fa(G)), !1;
    } finally {
      Ce === Z.current && (k(null), v(null));
    }
  }
  function W(S) {
    S > u[i] || (re(), p(S), P(null), z(null), x(!1), b("roots"), E(""));
  }
  function le() {
    re();
    const S = Math.min(5, f + 1);
    if (p(S), P(null), z(null), x(!1), b("roots"), S > u[i]) {
      d((te) => ({ ...te, [i]: S }));
      try {
        localStorage.setItem(ph(i), String(S));
      } catch {
      }
    }
  }
  function U(S) {
    if (!(S === "aeolian" && u.ionian < 5)) {
      re(), o(S), p(u[S]), P(null), z(null), x(!1), b("roots"), E("");
      try {
        localStorage.setItem(vh, S);
      } catch {
      }
    }
  }
  async function ue() {
    re(), z(null), P(null);
    const S = Math.random() < 0.5 ? "ionian" : "aeolian";
    await we("comparison", ss[S].phrase) && P(S);
  }
  const fe = (S) => Ze(S) === L.tonic, Q = L.positions.filter((S) => f < 2 ? !0 : f === 2 ? y && fe(S.midi) : f === 4 ? C === "all" || C === "roots" && fe(S.midi) : !1).map((S) => ({
    ...S,
    label: f === 2 || f === 4 && C === "roots" ? L.tonicName : Fe(S.midi),
    kind: X?.string === S.string && X.fret === S.fret ? "playing" : fe(S.midi) ? "answer" : "shape"
  })), ce = [...new Set(L.positions.map((S) => S.string))], ee = Math.min(...L.positions.map((S) => S.fret)), T = Math.max(...L.positions.map((S) => S.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      re(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      sk.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      L.title,
      " · ",
      L.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: L.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: L.noteNames }),
      " · Pohjasävel ",
      L.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === "ionian", onClick: () => U("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": i === "aeolian",
          disabled: u.ionian < 5,
          onClick: () => U("aeolian"),
          children: [
            "2. A-aiolinen ",
            u.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ a.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      xf.map((S, te) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: f === te ? "journey-step current" : "journey-step",
          "aria-current": f === te ? "step" : void 0,
          disabled: te > u[i],
          onClick: () => W(te),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: te > u[i] ? "🔒" : te < u[i] ? "✓" : te + 1 }),
            /* @__PURE__ */ a.jsx("span", { children: S })
          ]
        },
        S
      )),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: u[i] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => W(5),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: u[i] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ a.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : xf[f] }),
        /* @__PURE__ */ a.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          L.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          L.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        L.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      f === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ a.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              disabled: h !== null,
              onClick: () => {
                ue();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          D !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            we("comparison", ss[D].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        D !== null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: B !== null || h !== null,
                onClick: () => z("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: B !== null || h !== null,
                onClick: () => z("aeolian"),
                children: "A"
              }
            )
          ] }),
          B !== null && /* @__PURE__ */ a.jsxs("p", { role: "status", children: [
            B === D ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            ss[D].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Soita ",
          L.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          L.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          L.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([S, te]) => /* @__PURE__ */ a.jsxs("label", { children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: S,
                checked: C === S,
                onChange: () => b(S)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: te })
          ] }, S))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => x((S) => !S), children: y ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": h === "scale",
          onClick: () => h === "scale" ? re() : void we("scale", K.map((S) => S.midi)),
          children: h === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": h === "accompaniment",
          onClick: () => h === "accompaniment" ? re() : void we("accompaniment", L.accompaniment, !0),
          children: h === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && h === "scale" && X && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Fe(X.midi, !1, !0),
        " · ",
        rn[X.string],
        "-kieli, nauha ",
        X.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ a.jsx(
        ci,
        {
          area: { strings: ce, min: ee, max: T, fixed: "box" },
          marks: Q,
          follow: "playing",
          playback: h,
          disabled: !0,
          caption: L.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ a.jsx(
        ou,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: re,
          stopHandleRef: F
        },
        `nooa:${f}`
      ),
      w && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: w }),
      f < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: le, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          L.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => W(2), children: "Kertaa muistiharjoitus" }),
        i === "ionian" && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => U("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        i === "aeolian" && /* @__PURE__ */ a.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function lk({ onBack: s }) {
  const [i, o] = _.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(ik, { onBack: () => o(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(ok, { onBack: () => o(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ a.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ a.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ a.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ a.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const Zs = [0, 2, 4, 5, 7, 9, 11], wa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function uk({ onBack: s }) {
  const [i, o] = _.useState(0), [u, d] = _.useState([]), [f, p] = _.useState(!1), [h, k] = _.useState(""), [j, v] = _.useState(0), y = i >= Zs.length, x = Zs[Math.min(i, Zs.length - 1)], C = ds(wa.strings, wa.min, wa.max).filter((V) => Ze(V.midi) === x), b = C.filter((V) => !u.includes(et(V))), w = b.length === 0 && !y, E = !w && f ? b[0] : void 0, D = [
    ...C.filter((V) => u.includes(et(V))).map((V) => ({ ...V, kind: "answer", label: Fe(V.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function P(V) {
    if (y || w) return;
    const Z = et(V);
    if (Ze(V.midi) !== x) {
      v((K) => K + 1), k(`Valitsit sävelen ${Fe(V.midi)}. Etsi ${Fe(x)}.`);
      return;
    }
    if (u.includes(Z)) {
      k("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const F = [...u, Z];
    d(F), p(!1);
    const L = C.length - F.length;
    k(L ? `Oikein! ${Fe(x)} löytyi ${rn[V.string]}-kieleltä (${_i(V.fret)}). Vielä ${L}.` : `Löysit kaikki ${C.length} ${Fe(x)}-säveltä tällä alueella.`);
  }
  function B() {
    w && (o((V) => V + 1), d([]), p(!1), k(""));
  }
  function z() {
    o(0), d([]), p(!1), k(""), v(0);
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: y ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        j ? `Vääriä valintoja yhteensä ${j}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: z, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          "Etsi kaikki ",
          Fe(x),
          "-sävelet"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sävel ",
          i + 1,
          " / ",
          Zs.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Fe(x),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        u.length,
        " / ",
        C.length
      ] }),
      /* @__PURE__ */ a.jsx(
        ci,
        {
          area: wa,
          marks: D,
          onAnswer: P,
          disabled: w,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: w ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: h
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !w && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((V) => !V),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: B, children: i === Zs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const ck = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Rl = ["C", "G", "D", "Em"], Sf = ["C", "G", "D", "Em", "Am", "E", "A"], dk = { min: 0, max: 3, fixed: "" };
function wf(s) {
  const i = [...s];
  for (let o = i.length - 1; o > 0; o--) {
    const u = Math.floor(Math.random() * (o + 1));
    [i[o], i[u]] = [i[u], i[o]];
  }
  return i;
}
function fk({ onBack: s }) {
  const [i, o] = _.useState(4), [u, d] = _.useState(() => wf(Rl)), [f, p] = _.useState(0), [h, k] = _.useState(null), [j, v] = _.useState([]), [y, x] = _.useState(0), C = f >= u.length, b = ck[u[Math.min(f, u.length - 1)]], w = i === 4 ? Rl : Sf, E = b.frets.flatMap((F, L) => F === null ? [] : [L]), D = b.frets.flatMap((F, L) => F === null ? [L] : []), P = { ...dk, strings: E }, B = b.frets.flatMap((F, L) => F === null ? [] : [{
    ...He(L, F),
    kind: F === 0 ? "anchor" : "shape",
    label: F === 0 ? "○" : "●"
  }]);
  function z(F = i) {
    o(F), d(wf(F === 4 ? Rl : Sf)), p(0), k(null), v([]), x(0);
  }
  function V(F) {
    h || C || j.includes(F) || (F === b.name ? k(F) : (v((L) => [...L, F]), x((L) => L + 1)));
  }
  function Z() {
    h && (p((F) => F + 1), k(null), v([]));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ a.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: i === 4,
            onChange: () => z(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: i === 7,
            onChange: () => z(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: C ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Tunnistit kaikki ",
        i,
        " sointua. ",
        y ? `Vääriä valintoja yhteensä ${y}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => z(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ a.jsx(
        ci,
        {
          area: P,
          marks: B,
          mutedStrings: D,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((F) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: h === F ? "right" : j.includes(F) ? "wrong" : "",
          disabled: !!h || j.includes(F),
          "aria-pressed": h === F,
          onClick: () => V(F),
          children: F
        },
        F
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: h ? "feedback good" : j.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: h ? `Oikein! Tämä on ${b.name}-sointu.` : j.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      h && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Z, children: f === u.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const Se = (s, i) => ({ first: s, ...i ? { second: i } : {} }), os = () => [
  Se("Gm", "F"),
  Se("Gm"),
  Se("B♭", "F"),
  Se("Gm"),
  Se("Gm", "F"),
  Se("Gm"),
  Se("E♭", "F"),
  Se("Gm")
], ls = () => [
  Se("B♭", "F"),
  Se("Gm", "Dm"),
  Se("E♭", "F"),
  Se("Gm", "Dm")
], us = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], kh = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], hk = [
  { id: "intro", title: "Intro", start: 0, bars: [Se("Gm", "F"), Se("Gm"), Se("B♭", "F"), Se("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: os(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ls(), Se("E♭"), { ...Se("E♭"), passingBass: "F" }],
    lyrics: us,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [Se("Gm", "F"), Se("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: os(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ls(), Se("E♭"), Se("F")],
    lyrics: us
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [Se("Gm"), Se("Dm"), Se("F"), Se("C"), Se("Gm"), Se("Dm"), Se("E♭"), Se("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: os(),
    lyrics: kh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ls(), Se("E♭", "F"), Se("Gm")],
    lyrics: us
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      Se("E♭", "F"),
      { ...Se("Gm"), possibleChord: "Dm" },
      Se("E♭", "F"),
      Se("Gm", "F"),
      { ...Se("Gm"), possibleChord: "Dm" },
      Se("Gm", "F"),
      Se("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], mk = [
  { id: "intro", title: "Intro", start: 0, bars: [Se("Gm", "F"), Se("Gm"), Se("B♭", "F"), Se("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: os(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ls(), Se("E♭"), Se("E♭")],
    lyrics: us
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: os(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ls(), Se("E♭"), Se("F")],
    lyrics: us
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [Se("Gm"), Se("Dm"), Se("F"), Se("C"), Se("Gm"), Se("Dm"), Se("E♭"), Se("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: os(),
    lyrics: kh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ls(), Se("B♭", "F"), Se("Gm"), Se("E♭", "F"), Se("Gm")],
    lyrics: us
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [Se("E♭", "F"), Se("Gm", "F"), Se("E♭", "F"), Se("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], fs = {
  acoustic: hk,
  normal: mk
}, pk = "normal", Zl = "yksi-sointu-kaksi-askelta", lu = {
  acoustic: Zl + "-akustinen",
  normal: Zl + "-normaali"
}, yh = (s) => s === Zl || Object.values(lu).includes(s ?? "");
function vk(s) {
  const i = Object.entries(lu).find(([, o]) => o === s);
  return i ? i[0] : null;
}
const kk = (s) => lu[s], Ef = (s) => {
  const i = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
};
function uu(s, i = "acoustic") {
  const o = fs[i], u = o[s], d = o[s + 1];
  return d ? (d.start - u.start) / u.bars.length : 240 / 69;
}
function cu(s, i = "acoustic") {
  const o = fs[i], u = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let y = 1; y < o.length && !(u < o[y].start); y++)
    d = y;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && u >= or(d, p + 1, i); )
    p++;
  const h = or(d, p, i), k = uu(d, i) / 4;
  let j = 1;
  for (; j < 4 && u >= h + j * k; ) j++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: j,
    chord: v.second && j >= 3 ? v.second : v.first
  };
}
function or(s, i, o = "acoustic") {
  return fs[o][s].start + uu(s, o) * i;
}
function yk(s) {
  return fs[s].flatMap((i, o) => i.bars.flatMap((u, d) => {
    const f = or(o, d, s), p = { section: i, sectionIndex: o, barIndex: d, part: "first", chord: u.first, time: f };
    if (!u.second) return [p];
    const h = uu(o, s) / 2;
    return [p, { ...p, part: "second", chord: u.second, time: f + h }];
  }));
}
function gk(s, i = "acoustic", o = !1) {
  const u = fs[i], d = cu(s, i), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", h = yk(i), k = h.findIndex((C) => C.sectionIndex === d.sectionIndex && C.barIndex === d.barIndex && C.part === p), v = [
    ...h.slice(k + 1).map((C) => ({ ...C, wrapped: !1 })),
    ...o ? h.slice(0, k + 1).map((C) => ({ ...C, wrapped: !0 })) : []
  ].find((C) => C.chord !== d.chord) ?? null;
  let y = null;
  const x = d.sectionIndex === u.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!x || o)) {
    const C = x ? 0 : d.sectionIndex + 1, b = u[C], w = b.bars[0].first;
    y = {
      section: b,
      sectionIndex: C,
      firstChord: w,
      wrapped: x,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: y };
}
function xk(s) {
  const i = s.filter((h) => h.lyrics?.length), o = (h) => 1 + (h.lyrics?.length ?? 0), u = i.reduce((h, k) => h + o(k), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let h = 0; h <= i.length; h++) {
    const k = Math.abs(u - 2 * p);
    (k < f || k === f && p >= u - p) && (d = h, f = k), h < i.length && (p += o(i[h]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const ql = ["Gm", "F", "B♭", "E♭", "Dm", "C"], gh = "musiikin-kartta:kappale-sointuvihjeet:v1", _a = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Nf = {
  showChords: !0,
  level: 0,
  fadeOrder: _a
};
function Ea(s, i) {
  return !i.showChords || i.level >= i.fadeOrder[s];
}
function Cf(s) {
  if (!s) return { ...Nf, fadeOrder: { ..._a } };
  try {
    const i = JSON.parse(s);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const o = i, u = o.level, d = { ..._a }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const h of ql)
        [1, 2, 3, 4].includes(p[h]) && (d[h] = p[h]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof u == "number" && [0, 1, 2, 3, 4].includes(u) ? u : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Nf, fadeOrder: { ..._a } };
  }
}
function jk() {
  try {
    return Cf(localStorage.getItem(gh));
  } catch {
    return Cf(null);
  }
}
const Sk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function wk(s) {
  const i = Sk.exec(s.trim());
  if (!i) return s;
  const [, o, , u = "", d = ""] = i;
  return o + "5" + u + d;
}
const Ek = (s, i) => i === "power" ? wk(s) : s, Nk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Ck = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Tk({ version: s, position: i, loop: o = !1, onSeek: u }) {
  const [d, f] = _.useState(jk), [p, h] = _.useState(null), [k, j] = _.useState(!1), [v, y] = _.useState("full"), x = (U) => Ek(U, v), C = fs[s], b = cu(i, s), { section: w, sectionIndex: E, barIndex: D, beat: P, chord: B } = b, z = P >= 3 && w.bars[D].second ? "second" : "first", V = (U, ue, fe) => `${s}:${U}:${ue}:${fe}`, Z = (U, ue) => V(w.id, U, ue), F = Z(D, z), L = Ea(B, d), K = L && p === F, X = (U, ue, fe) => !Ea(U, d) || p === Z(ue, fe), re = d.showChords && d.level === 0, we = ql.filter((U) => Ea(U, d)).length, { nextSection: W } = gk(i, s, o), le = !!W && Ea(W.firstChord, d);
  return _.useEffect(() => {
    h(null);
  }, [F]), _.useEffect(() => {
    try {
      localStorage.setItem(gh, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ a.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (U) => {
              f((ue) => ({ ...ue, showChords: U.target.checked })), h(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: k,
            onChange: (U) => j(U.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([U, ue]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: U,
              checked: v === U,
              onChange: () => y(U)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: ue })
        ] }, U))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (U) => {
              const ue = Number(U.target.value);
              f((fe) => ({ ...fe, level: ue })), h(null);
            },
            children: Nk.map((U) => /* @__PURE__ */ a.jsx("option", { value: U.value, children: U.label }, U.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: we === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${we}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: ql.map((U) => /* @__PURE__ */ a.jsxs("label", { children: [
        U,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": U + ": piilotusvaihe",
            value: d.fadeOrder[U],
            onChange: (ue) => {
              const fe = Number(ue.target.value);
              f((Q) => ({ ...Q, fadeOrder: { ...Q.fadeOrder, [U]: fe } })), h(null);
            },
            children: Ck.map((ue) => /* @__PURE__ */ a.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, U)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (U) => {
              const ue = C.find((fe) => fe.id === U.target.value);
              ue && u(ue.start);
            },
            children: C.map((U) => /* @__PURE__ */ a.jsxs("option", { value: U.id, children: [
              Ef(U.start),
              " · ",
              U.title
            ] }, U.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          L && !K ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: L && !K ? "?" : x(B) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            w.title,
            ", tahti ",
            D + 1,
            ", isku ",
            P,
            "/4"
          ] }),
          L && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => h(K ? null : F),
              children: K ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        W && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: le ? "?" : x(W.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((U, ue) => {
      const fe = ue === D, Q = fe && (P < 3 || !U.second), ce = fe && P >= 3 && !!U.second, ee = X(U.first, ue, "first"), T = U.second ? X(U.second, ue, "second") : !1, S = (ee ? x(U.first) : "sointu piilossa") + (U.second ? " " + (T ? x(U.second) : "sointu piilossa") : "") + (re && U.passingBass ? " (basson kulku " + U.passingBass + ")" : "") + (re && U.possibleChord ? " (" + x(U.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (fe ? " active" : ""),
          "aria-pressed": fe,
          "aria-label": "Tahti " + (ue + 1) + ": " + S + ". Siirry kohtaan " + Ef(or(E, ue, s)),
          onClick: () => u(or(E, ue, s)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: Q && ee ? "now" : "", children: ee ? x(U.first) : "?" }),
              U.second && /* @__PURE__ */ a.jsx("strong", { className: ce && T ? "now" : "", children: T ? x(U.second) : "?" })
            ] }),
            re && U.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              U.passingBass,
              "), isku 4"
            ] }),
            re && U.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              x(U.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    k ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: xk(C).map((U, ue) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: U.map((fe) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: fe.title }),
        fe.lyrics?.map((Q, ce) => /* @__PURE__ */ a.jsx("p", { children: Q }, ce))
      ] }, fe.id)) }, ue)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((U, ue) => /* @__PURE__ */ a.jsx("p", { children: U }, ue))
    ] }),
    re && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const $a = 7, Mk = { name: "bluesasteikko", base: ze.SCALES.mp.base, add: [[6, "♭5"]] }, $l = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: ze.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Mk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: ze.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function _k(s) {
  return ze.scaleNotes(s).map(([i, o]) => ze.noteName($a, i, o));
}
const xh = (s) => s === "pentatonic" ? 5 : 7;
function bk(s, i, o) {
  const u = i.filter((h) => h >= 1 && h <= xh(s.system)), d = ze.fingeringBoxes($a, s.scale, s.system, u, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([h]) => ($a + h) % 12), p = (h, k) => k >= 0 && k <= o && f.includes((ze.OPEN_PITCHES[h] + k) % 12);
  return d.map((h) => ({ ...h, positions: h.positions.map((k) => {
    const j = k.strings.map((y, x) => {
      if (!y.length) return y;
      const C = y[y.length - 1];
      return p(x, C + 1) ? [...y.slice(0, -1), C + 1] : y;
    }), v = j.flat();
    return { ...k, strings: j, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Tf = 17;
function Pk({ open: s }) {
  const [i, o] = _.useState("mp"), [u, d] = _.useState({ pentatonic: [], "3nps": [] }), [f, p] = _.useState(!1), [h, k] = _.useState(!1), j = _.useRef(null), v = $l.find((E) => E.id === i) ?? $l[0], y = u[v.system], x = bk(v, y, Tf), C = x.some((E) => E.positions.length > 0), b = ze.renderBoard($a, v.scale, Tf, {
    automatic: !0,
    boxes: x,
    onlyBoxNotes: C && f,
    label: v.title + (y.length ? ", " + y.map((E) => "boksi " + E).join(", ") : "")
  });
  _.useEffect(() => {
    const E = j.current;
    !E || !s || x.length === 1 && ze.revealPositions(E, ".box-highlight");
  }, [b, s]);
  function w(E, D) {
    d((P) => ({ ...P, [v.system]: D ? [...P[v.system], E].sort((B, z) => B - z) : P[v.system].filter((B) => B !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (E) => o(E.target.value), children: $l.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: _k(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: j,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: b }
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-box-settings", open: h, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (E) => {
        E.preventDefault(), k((D) => !D);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: xh(v.system) }, (E, D) => D + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: y.includes(E),
            onChange: (D) => w(E, D.target.checked)
          }
        ),
        " Boksi ",
        E
      ] }, v.system + E)) }),
      /* @__PURE__ */ a.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: C && f,
            disabled: !C,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: C ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const Et = ["backing", "guitar", "vocals"], Ak = 0.05, Lk = 5e-3;
function Rk(s) {
  const i = globalThis.navigator?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
  const o = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!o) throw new Error("Web Audio API puuttuu");
  if (s)
    try {
      return new o(s);
    } catch {
    }
  return new o();
}
const li = 1152, $k = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], Ok = [44100, 48e3, 32e3];
function ba(s) {
  let i = 0;
  for (s.length >= 10 && s[0] === 73 && s[1] === 68 && s[2] === 51 && (i = 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0)); i + 4 <= s.length && !(s[i] === 255 && (s[i + 1] & 224) === 224); ) i++;
  const o = [];
  let u = 0, d = 0, f = i;
  for (; f + 4 <= s.length && s[f] === 255 && (s[f + 1] & 224) === 224; ) {
    const C = s[f + 1], b = s[f + 2], w = s[f + 3];
    if ((C >> 3 & 3) !== 3 || (C >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const E = $k[b >> 4 & 15] * 1e3, D = Ok[b >> 2 & 3];
    if (!E || !D) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${f}`);
    const P = Math.floor(144 * E / D) + (b >> 1 & 1);
    if (f + P > s.length) break;
    if (!u)
      u = D, d = (w >> 6 & 3) === 3 ? 1 : 2;
    else if (D !== u) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    o.push(f), f += P;
  }
  if (!o.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, h = 0, k = 0;
  const j = o[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...s.subarray(j, j + 4));
  if (v === "Xing" || v === "Info") {
    k = 1;
    const C = s[j + 7], b = j + 8 + (C & 1 ? 4 : 0) + (C & 2 ? 4 : 0) + (C & 4 ? 100 : 0) + (C & 8 ? 4 : 0), w = s.subarray(b, b + 4);
    if (b + 24 <= o[1] && w.length === 4 && [...w].every((E) => E >= 32 && E < 127)) {
      const E = b + 21;
      p = s[E] << 4 | s[E + 1] >> 4, h = (s[E + 1] & 15) << 8 | s[E + 2];
    }
  }
  const y = Uint32Array.from(o.slice(k)), x = Math.max(0, y.length * li - p - h);
  return { sampleRate: u, channels: d, frameOffsets: y, dataEnd: f, delay: p, padding: h, length: x };
}
const jh = 2, Ik = 1;
function Ol(s, i, o, u = 0) {
  const d = i + s.delay, f = d + o, p = s.frameOffsets.length, h = Math.max(0, Math.floor(d / li) - jh), k = Math.min(p, Math.ceil(f / li) + Ik + Math.ceil(u / li));
  return { firstFrame: h, endFrame: k, skip: d - h * li + u };
}
const Fk = [[100, 160], [1e3, 1060], [3e3, 3060]], nr = 2048, In = (jh + 1) * li;
function Sh(s) {
  if (s.length < In + nr) return !1;
  let i = 0;
  for (let o = In; o < In + nr; o++) i += s[o] * s[o];
  return i >= 1e-6;
}
function Dk(s, i, o, u, d = 1700) {
  if (!Sh(i)) return null;
  const f = u * li - o.delay;
  let p = null, h = 1 / 0;
  for (let j = 0; j <= d; j++) {
    const v = f - j;
    if (v + In < 0 || v + In + nr > s.length) continue;
    let y = 0;
    for (let x = In; x < In + nr && y < h; x += 8) y = Math.max(y, Math.abs(i[x] - s[v + x]));
    y < h && (h = y, p = j);
  }
  if (p === null) return null;
  let k = 0;
  for (let j = In; j < In + nr; j++) k = Math.max(k, Math.abs(i[j] - s[f - p + j]));
  return k <= 1e-4 ? p : null;
}
function Il(s, i, o) {
  const u = o.endFrame < i.frameOffsets.length ? i.frameOffsets[o.endFrame] : i.dataEnd;
  return s.slice(i.frameOffsets[o.firstFrame], u);
}
function zk(s, i) {
  let o;
  try {
    o = ba(s);
  } catch {
    return null;
  }
  const u = o.frameOffsets;
  if (u.length < 3) return null;
  const d = u[0], f = u[1] - d;
  for (let k = 2; k < u.length; k++) if (u[k] - u[k - 1] !== f) return null;
  const p = Math.floor((i - d) / f);
  if (p < u.length || d + p * f !== i) return null;
  const h = new Uint32Array(p);
  for (let k = 0; k < p; k++) h[k] = d + k * f;
  return { ...o, frameOffsets: h, dataEnd: i, length: Math.max(0, p * li - o.delay - o.padding) };
}
function Bk(s) {
  return s.length < 10 ? null : (s[0] === 73 && s[1] === 68 && s[2] === 51 ? 10 + ((s[6] & 127) << 21 | (s[7] & 127) << 14 | (s[8] & 127) << 7 | s[9] & 127) + (s[5] & 16 ? 10 : 0) : 0) + 5 * 1441;
}
class Vk {
  constructor(i, o) {
    this.total = i, this.now = o, this.bytes = new Uint8Array(i);
  }
  total;
  now;
  bytes;
  received = 0;
  done = !1;
  error = null;
  layout = null;
  firstByteAt = null;
  doneAt = null;
  verified = 0;
  headerKey = -1;
  waiters = [];
  /** Lukee virran loppuun. Virheet (myös keskeytys) merkitään ja välitetään odottajille. */
  async run(i) {
    const o = i.getReader();
    try {
      for (; ; ) {
        const { value: u, done: d } = await o.read();
        if (d) break;
        if (u?.length) {
          if (this.received + u.length > this.total) throw new Error("MP3-virta on pidempi kuin Content-Length");
          this.bytes.set(u, this.received), this.received += u.length, this.firstByteAt ??= this.now(), this.verify(), this.notify();
        }
      }
      if (this.received !== this.total) throw new Error(`MP3-virta katkesi (${this.received}/${this.total} tavua)`);
      this.done = !0, this.doneAt = this.now(), this.notify();
    } catch (u) {
      this.fail(u instanceof Error ? u : new Error(String(u)));
      try {
        o.releaseLock();
      } catch {
      }
    }
  }
  /** Ennustettu rakenne käyttöön: tarkistetaan jo saapuneet ja jatkossa saapuvat kehysotsakkeet. */
  useLayout(i) {
    this.layout = i;
    const o = i.frameOffsets[0];
    this.headerKey = this.bytes[o + 1] << 8 | this.bytes[o + 2] & 254, this.verify();
  }
  verify() {
    const i = this.layout;
    if (!i || this.error) return;
    const o = i.frameOffsets;
    for (; this.verified < o.length && o[this.verified] + 4 <= this.received; ) {
      const u = o[this.verified], d = this.bytes[u + 1] << 8 | this.bytes[u + 2] & 254;
      if (this.bytes[u] !== 255 || d !== this.headerKey) {
        this.fail(new Error(`MP3-kehys ${this.verified} ei vastaa ennustettua rakennetta`));
        return;
      }
      this.verified++;
    }
  }
  fail(i) {
    if (!(this.error || this.done)) {
      this.error = i;
      for (const o of this.waiters.splice(0)) o.reject(i);
    }
  }
  notify() {
    const i = this.waiters.filter((o) => this.done || this.received >= o.need);
    this.waiters = this.waiters.filter((o) => !i.includes(o));
    for (const o of i) o.resolve();
  }
  /** Valmis, kun tavut [0, end) ovat saapuneet (ja ennustetun rakenteen kehysotsakkeet tarkistettu niiltä osin). */
  waitForBytes(i) {
    return this.error ? Promise.reject(this.error) : this.done || this.received >= i ? Promise.resolve() : new Promise((o, u) => this.waiters.push({ need: i, resolve: o, reject: u }));
  }
  has(i) {
    return this.done || this.received >= i;
  }
  /** Vastaanottonopeus (tavua/s) ensimmäisestä tavusta lähtien, tai null ennen luotettavaa arviota. */
  rate() {
    if (this.firstByteAt === null) return null;
    const i = (this.now() - this.firstByteAt) / 1e3;
    return i >= 0.4 ? this.received / i : null;
  }
}
const Mf = 16, Kk = 0.8;
function Uk(s, i) {
  if (s.done) return !0;
  const o = s.layout;
  if (!o || i <= 0) return !1;
  const u = o.frameOffsets[0], d = (s.total - u) / i, f = u + d * Mf + 4 * (o.frameOffsets[1] - u);
  if (s.received < f) return !1;
  const p = s.rate();
  if (p === null) return !1;
  const h = s.total - Kk * p * Math.max(0, i - Mf);
  return s.received >= h;
}
const Hk = 10, _f = 4, Gk = 6, Wk = 400, Qk = 256, Yk = 480;
class bf extends Error {
}
class Pf extends Error {
}
const wh = (s, i) => i ? wh(i, s % i) : s, Af = (s, i) => i < s.frameOffsets.length ? s.frameOffsets[i] : s.dataEnd;
class Fl {
  constructor(i, o = {}) {
    this.context = i, this.fetchImpl = o.fetch ?? ((f, p) => fetch(f, p)), this.now = o.now ?? (() => performance.now()), this.setIntervalImpl = o.setInterval ?? ((f, p) => setInterval(f, p)), this.clearIntervalImpl = o.clearInterval ?? ((f) => clearInterval(f)), this.decoderFor = o.decoderFor, this.progressive = o.progressive ?? !1, this.sleep = o.sleep ?? ((f) => new Promise((p) => setTimeout(p, f)));
    const u = {}, d = {};
    for (const f of Et)
      u[f] = i.createGain(), d[f] = i.createGain(), u[f].connect(d[f]), d[f].connect(i.destination);
    this.inputs = u, this.levels = d;
  }
  context;
  state = "tyhja";
  error = "";
  /** Viimeisimmän virheen laji: kalibrointi ja näytetaajuus eivät korjaannu uudella yrityksellä. */
  errorKind = null;
  events = [];
  onEnded;
  onStateChange;
  /** Toisto keskeytyi purkuvirheeseen (soitin on tilassa 'virhe'). */
  onError;
  /** Virtalataus: toisto odottaa, että seuraavan palan tavut saapuvat (true) tai jatkuu (false). */
  onWaitingChange;
  waiting = !1;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  inputs;
  levels;
  data = null;
  length = 0;
  rate = 0;
  channels = 2;
  /** Selaimen MP3-dekooderin viive raakakehysten purussa (kalibroidaan kerran: Apple 0, FFmpeg 529). */
  decoderDelay = null;
  slots = [];
  pending = [];
  gen = 0;
  useCounter = 0;
  session = null;
  sessionId = 0;
  offset = 0;
  looping = !1;
  loadToken = 0;
  controller = null;
  /** Virtalatauksen keskeytys (jatkuu taustalla 'valmis'-tilan jälkeen; versionvaihto ja poistuminen keskeyttävät). */
  streamController = null;
  streams = [];
  progressive;
  sleep;
  pumping = !1;
  pumpQueued = !1;
  timer = null;
  fetchImpl;
  now;
  setIntervalImpl;
  clearIntervalImpl;
  decoderFor;
  record(i, o = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...o }), this.events.length > 500 && this.events.shift();
  }
  setState(i) {
    this.state !== i && (this.state = i, this.onStateChange?.(i));
  }
  /** Raitojen yhteinen kelvollinen pituus sekunteina. 0, jos kappaletta ei ole ladattu. */
  get duration() {
    return this.rate > 0 ? this.length / this.rate : 0;
  }
  get playing() {
    return this.session !== null;
  }
  /** Puretun äänen allas tavuina (paikat × raidat × näytteet × kanavat × 4). */
  get bufferBytes() {
    return this.slots.reduce((i, o) => i + Et.reduce((u, d) => {
      const f = o.buffers[d];
      return u + f.length * f.numberOfChannels * 4;
    }, 0), 0);
  }
  /** Ladatut pakatut MP3-tavut. */
  get compressedBytes() {
    return this.data ? Et.reduce((i, o) => i + this.data[o].bytes.byteLength, 0) : 0;
  }
  /** Lataa yhden version kolme MP3:a ja purkaa ensimmäisen palan valmiiksi. Edellinen versio vapautetaan ensin. */
  async load(i) {
    this.release();
    const o = ++this.loadToken, u = new AbortController();
    this.controller = u;
    const d = () => o === this.loadToken;
    this.error = "", this.errorKind = null, this.setState("ladataan");
    const f = this.now();
    this.record("lataus-alku");
    try {
      const p = {};
      if (this.progressive) {
        const x = await this.loadProgressive(i, u, f);
        if (!d()) return "peruttu";
        Object.assign(p, x);
      } else {
        const x = await Promise.all(Et.map(async (C) => {
          const b = await this.fetchImpl(i[C], { signal: u.signal });
          if (!b.ok) throw new Error(`${C}: HTTP ${b.status}`);
          const w = new Uint8Array(await b.arrayBuffer());
          return this.record("ladattu", { track: C, bytes: w.byteLength, kesto: Math.round(this.now() - f) }), w;
        }));
        if (!d()) return "peruttu";
        Et.forEach((C, b) => {
          p[C] = { bytes: x[b], layout: ba(x[b]) };
        }), this.setState("puretaan");
      }
      if (new Set(Et.map((x) => p[x].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const k = p.backing.layout.sampleRate, j = Math.max(...Et.map((x) => p[x].layout.channels));
      (k !== this.rate || j !== this.channels) && (this.slots = []), this.rate = k, this.channels = j;
      const v = this.grid;
      if (v > Yk) throw new Pf(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${k} Hz:n raitojen näytetarkkaan paloitukseen`);
      if (this.length = Math.floor(Math.min(...Et.map((x) => p[x].layout.length)) / v) * v, this.data = p, this.gen++, k !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: k, konteksti: this.context.sampleRate, ruudukko: v }), this.decoderDelay === null && await this.calibrate(p, d), !d()) return "peruttu";
      const y = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!y) throw new Error("Puskurialtaassa ei ole tilaa");
      if (this.streams.length) {
        for (; !this.streams.every((x) => Uk(x, this.duration)); ) {
          const x = this.streams.find((C) => C.error);
          if (x) throw x.error;
          if (await this.sleep(100), !d()) return "peruttu";
        }
        this.record("alku-valmis", { tavut: this.streams.map((x) => x.received), kesto: Math.round(this.now() - f) });
      }
      return this.controller = null, this.record("valmis", {
        kesto: Math.round(this.now() - f),
        bytes: this.bufferBytes,
        compressed: this.compressedBytes,
        duration: this.duration,
        sampleRate: k
      }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.abortStreams(), this.data = null, this.length = 0, this.error = p instanceof Error ? p.message : String(p), this.errorKind = p instanceof bf ? "kalibrointi" : p instanceof Pf ? "naytetaajuus" : "lataus", this.record("virhe", { message: this.error, laji: this.errorKind }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai ensimmäisen palan purun. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja unohtaa version (versionvaihto). Allas säilyy uudelleenkäyttöä varten. */
  release() {
    this.cancel(), this.stopSession(), this.abortStreams(), this.setWaiting(!1);
    const i = this.data !== null;
    this.data = null, this.length = 0, this.offset = 0, this.gen++;
    for (const o of this.slots)
      o.ready = !1, o.gen = -1;
    i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös altaan ja raitojen tasosolmut. AudioContextin sulkee omistaja. */
  dispose() {
    this.release(), this.slots = [];
    for (const i of Et)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at. Jos kohdan pala on valmiina, ääni alkaa START_LEAD_SECONDS:n päästä,
   * muuten heti kun pala on purettu. Palauttaa false, jos kappaletta ei ole ladattu.
   */
  play(i = this.offset) {
    if (this.state !== "valmis" || this.length <= 0) return !1;
    this.stopSession();
    const o = this.grid, u = Math.max(0, Math.min(Math.round(i * this.rate / o) * o, this.length - o));
    return this.session = { id: ++this.sessionId, items: [], nextFrame: null, nextTimeline: u, ending: !1 }, this.offset = u / this.rate, this.timer = this.setIntervalImpl(() => {
      this.pump();
    }, Wk), this.pump(), !0;
  }
  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause() {
    const i = this.position();
    return this.session && this.record("tauko", { at: i }), this.stopSession(), this.offset = i, i;
  }
  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(i) {
    this.session ? this.play(i) : this.offset = Math.max(0, Math.min(i, Math.max(0, this.duration - 1 / Math.max(1, this.rate)))), this.record("kelaus", { at: i });
  }
  /** Loop koko kappaleelle: lopun jälkeen seuraava pala alkaa kohdasta 0 samaan näytekehykseen. */
  setLoop(i) {
    if (this.looping === i) return;
    this.looping = i;
    const o = this.session;
    if (!o) return;
    if (i) {
      o.ending = !1, this.pump();
      return;
    }
    const u = this.context.currentTime * this.context.sampleRate, d = o.items.findIndex((f, p) => p > 0 && f.timelineStart === 0 && f.frame > u);
    if (d > 0) {
      const f = o.items.splice(d);
      for (const p of f) this.stopItem(p);
      o.nextFrame = f[0].frame, o.nextTimeline = this.length;
    }
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, o) {
    const u = this.levels[i].gain;
    typeof u.setTargetAtTime == "function" ? u.setTargetAtTime(o, this.context.currentTime, Lk) : u.value = o;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä contextTime: se pala, jonka ajastettu alku on viimeksi ohitettu. */
  position(i = this.context.currentTime) {
    const o = this.session;
    if (!o || !o.items.length) return this.offset;
    const u = i * this.context.sampleRate;
    let d = o.items[0];
    for (const p of o.items)
      if (p.frame <= u) d = p;
      else break;
    if (u <= d.frame) return d.timelineStart / this.rate;
    const f = Math.min((u - d.frame) * this.rate / this.context.sampleRate, d.length);
    return Math.min(d.timelineStart + f, this.length) / this.rate;
  }
  /** Kuuluva kohta nyt (kuten D1): getOutputTimestamp, tai kontekstin kello miinus ilmoitetut viiveet. */
  audiblePosition(i = this.now()) {
    const o = this.context.getOutputTimestamp?.();
    let u;
    return o && typeof o.contextTime == "number" && typeof o.performanceTime == "number" && o.contextTime > 0 ? u = o.contextTime + (i - o.performanceTime) / 1e3 : u = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(u, this.context.currentTime));
  }
  /** Purkaa aikajanan näytteet [start, start + length) uusiin taulukoihin (testejä ja tarkistuksia varten, ei altaaseen). */
  async readRange(i, o, u) {
    const d = this.data?.[i];
    if (!d) throw new Error("Kappaletta ei ole ladattu");
    const f = Ol(d.layout, o, u, this.decoderDelay ?? 0);
    await d.ready?.(Af(d.layout, f.endFrame));
    const p = await this.decoder().decodeAudioData(Il(d.bytes, d.layout, f).buffer);
    return Array.from({ length: p.numberOfChannels }, (h, k) => p.getChannelData(k).slice(f.skip, f.skip + u));
  }
  /**
   * KOKEILU (ensilataus): käynnistää raitojen virtalatauksen ja palauttaa rakenteen heti, kun alkutavut riittävät
   * ennustukseen. Jos ennustus ei ole varma (tai virtaa ei ole), raita ladataan kokonaan ennen jäsennystä.
   */
  async loadProgressive(i, o, u) {
    const d = new AbortController();
    this.streamController = d, o.signal.addEventListener("abort", () => d.abort(), { once: !0 });
    const f = [];
    this.streams = f;
    const p = await Promise.all(Et.map(async (h) => {
      const k = await this.fetchImpl(i[h], { signal: d.signal });
      if (!k.ok) throw new Error(`${h}: HTTP ${k.status}`);
      const j = Number(k.headers.get("Content-Length"));
      if (!k.body || !Number.isSafeInteger(j) || j <= 0) {
        const C = new Uint8Array(await k.arrayBuffer());
        return this.record("ladattu", { track: h, bytes: C.byteLength, kesto: Math.round(this.now() - u), virta: !1 }), [h, { bytes: C, layout: ba(C) }];
      }
      const v = new Vk(j, this.now);
      f.push(v), v.run(k.body).then(() => {
        v.done && this.record("ladattu", { track: h, bytes: j, kesto: Math.round((v.doneAt ?? this.now()) - u), virta: !0 });
      }), await v.waitForBytes(10);
      const y = Math.min(j, Bk(v.bytes.subarray(0, v.received)) ?? j);
      await v.waitForBytes(y), this.record("ensitavut", { track: h, kesto: Math.round((v.firstByteAt ?? this.now()) - u) });
      let x = zk(v.bytes.subarray(0, Math.max(y, v.received)), j);
      if (x || (this.record("virta-ei-ennustetta", { track: h }), await v.waitForBytes(j), x = ba(v.bytes)), v.useLayout(x), v.error) throw v.error;
      return [h, { bytes: v.bytes, layout: x, ready: (C) => v.waitForBytes(C), has: (C) => v.has(C) }];
    }));
    return Object.fromEntries(p);
  }
  abortStreams() {
    this.streamController?.abort(), this.streamController = null, this.streams = [];
  }
  setWaiting(i) {
    this.waiting !== i && (this.waiting = i, this.record(i ? "odottaa-latausta" : "lataus-ehti"), this.onWaitingChange?.(i));
  }
  /**
   * Käyttöliittymälle (vain luku, ei vaikuta lataukseen tai soittoon): taustalatauksen saapuneet ja kokonaistavut.
   * total = null, jos kaikkien raitojen kokoa ei tunneta; ilman virtaa ja ilman dataa { 0, null, false }.
   */
  get downloadStatus() {
    if (!this.streams.length)
      return this.data ? { received: this.compressedBytes, total: this.compressedBytes, complete: !0 } : { received: 0, total: null, complete: !1 };
    const i = this.streams.length === Et.length;
    return {
      received: this.streams.reduce((o, u) => o + u.received, 0),
      total: i ? this.streams.reduce((o, u) => o + u.total, 0) : null,
      complete: this.streams.every((o) => o.done) && (i || this.data !== null)
    };
  }
  /** Ladattu osuus (0…1) virtalatauksessa; 1, kun kaikki on ladattu tai virtaa ei käytetä. */
  get downloadProgress() {
    if (!this.streams.length) return this.data ? 1 : 0;
    const i = this.streams.reduce((o, u) => o + u.total, 0);
    return this.streams.reduce((o, u) => o + u.received, 0) / i;
  }
  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan (Apple 0, Chromiumin FFmpeg 529
   * näytettä). Kokeillaan ikkunoita ja raitoja, kunnes löytyy ääntä ja bittitarkka vastaavuus. Jos ei löydy, lataus
   * päättyy hallittuun virheeseen eikä viivettä arvata (väärä arvo siirtäisi koko kappaleen).
   */
  async calibrate(i, o) {
    const u = this.decoder(), d = [], f = [];
    for (const p of Et) {
      const h = i[p].layout.frameOffsets.length, k = Fk.filter(([, j]) => h > j + 2);
      if (!k.length && h >= 16) {
        const j = Math.max(4, Math.floor(h / 3));
        k.push([j, Math.min(h - 2, j + 60)]);
      }
      for (const [j, v] of k) f.push([p, j, v]);
    }
    f.sort((p, h) => p[2] - h[2]);
    for (const [p, h, k] of f) {
      const { bytes: j, layout: v } = i[p];
      if (await i[p].ready?.(v.frameOffsets[k]), !o()) return;
      const y = await u.decodeAudioData(Il(j, v, { firstFrame: h, endFrame: k }).buffer);
      if (!o()) return;
      if (!Sh(y.getChannelData(0))) {
        d.push(`${p}@${h}: hiljainen`);
        continue;
      }
      const x = await u.decodeAudioData(j.slice(0, v.frameOffsets[k]).buffer);
      if (!o()) return;
      const C = Dk(x.getChannelData(0), y.getChannelData(0), v, h);
      if (C !== null) {
        this.decoderDelay = C, this.record("kalibroitu", { track: p, kehys: h, dekooderiviive: C });
        return;
      }
      d.push(`${p}@${h}: ei bittitarkkaa vastaavuutta`);
    }
    throw this.record("kalibrointi-epaonnistui", { yritykset: d }), new bf("Selaimen MP3-purkua ei voitu kohdistaa aikajanaan");
  }
  decoder() {
    return this.rate === this.context.sampleRate ? this.context : this.decoderFor ? this.decoderFor(this.rate) : new OfflineAudioContext(1, 1, this.rate);
  }
  /** Kohdistusruudukko MP3-näytteinä: 1, kun taajuudet ovat samat; muuten pienin pituus, joka on kokonainen kontekstin kehysmäärä. */
  get grid() {
    const i = Math.round(this.context.sampleRate);
    return this.rate && i !== this.rate ? this.rate / wh(this.rate, i) : 1;
  }
  get segmentLength() {
    const i = this.grid;
    return Math.floor(Math.round(Hk * this.rate) / i) * i;
  }
  /** Vapaa allaspaikka: varaamaton tai vanhentunut ensin, sitten pisimpään käyttämätön; uusi vain tarvittaessa. */
  freeSlot() {
    const i = this.slots.filter((u) => u.users === 0 && !u.filling), o = i.find((u) => !u.ready || u.gen !== this.gen);
    if (o) return o;
    if (i.length && this.slots.length >= _f) return i.reduce((u, d) => u.used <= d.used ? u : d);
    if (this.slots.length < _f) {
      const u = {};
      for (const f of Et) u[f] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
      const d = { buffers: u, gen: -1, start: 0, length: 0, ready: !1, filling: !1, users: 0, used: 0 };
      return this.slots.push(d), this.record("allas", { paikat: this.slots.length, bytes: this.bufferBytes }), d;
    }
    return i.length ? i.reduce((u, d) => u.used <= d.used ? u : d) : null;
  }
  /**
   * Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta, kesken oleva purku samalle kohdalle
   * (ei kahta purkua samasta palasta) tai uusi purku alkaen kohdasta start.
   */
  obtain(i) {
    const o = this.gen, u = this.slots.find((j) => j.ready && j.gen === o && i >= j.start && i < j.start + j.length);
    if (u)
      return u.used = ++this.useCounter, Promise.resolve(u);
    const d = this.pending.find((j) => j.gen === o && i >= j.start && i < j.start + j.length);
    if (d) return d.promise;
    const f = this.data, p = this.freeSlot();
    if (!p || !f) return Promise.resolve(null);
    const h = Math.min(this.segmentLength, this.length - i), k = { gen: o, start: i, length: h, promise: Promise.resolve(null) };
    return k.promise = this.fill(p, f, o, i, h).finally(() => {
      this.pending = this.pending.filter((j) => j !== k);
    }), this.pending.push(k), k.promise;
  }
  async fill(i, o, u, d, f) {
    Object.assign(i, { gen: u, start: d, length: f, ready: !1, filling: !0 });
    const p = this.now();
    try {
      const h = this.decoder(), j = Et.map((y) => Ol(o[y].layout, d, f, this.decoderDelay ?? 0)).map((y, x) => Af(o[Et[x]].layout, y.endFrame));
      if (Et.some((y, x) => o[y].has && !o[y].has(j[x]))) {
        this.session && this.setWaiting(!0);
        try {
          await Promise.all(Et.map((y, x) => o[y].ready?.(j[x])));
        } catch (y) {
          if (u !== this.gen)
            return i.filling = !1, i.gen = -1, null;
          throw y;
        }
        this.session && this.setWaiting(!1);
      }
      const v = await Promise.all(Et.map(async (y) => {
        const { bytes: x, layout: C } = o[y], b = Ol(C, d, f, this.decoderDelay ?? 0), w = await h.decodeAudioData(Il(x, C, b).buffer);
        return { track: y, buffer: w, plan: b };
      }));
      if (i.filling = !1, u !== this.gen)
        return i.gen = -1, null;
      for (const { track: y, buffer: x, plan: C } of v) {
        const b = i.buffers[y];
        for (let w = 0; w < b.numberOfChannels; w++) {
          const E = x.getChannelData(Math.min(w, x.numberOfChannels - 1)).subarray(C.skip, C.skip + f);
          b.copyToChannel(E, w, 0), E.length < f && (b.copyToChannel(new Float32Array(f - E.length), w, E.length), this.record("pala-lyhyt", { track: y, start: d, puuttuu: f - E.length }));
        }
      }
      return i.ready = !0, i.used = ++this.useCounter, this.record("pala", { start: d / this.rate, length: f / this.rate, kesto: Math.round(this.now() - p) }), i;
    } catch (h) {
      throw i.filling = !1, i.gen = -1, h;
    }
  }
  /** Ajastaa paloja, kunnes ääntä on LOOKAHEAD_SECONDS valmiina. Vain yksi kierros kerrallaan. */
  async pump() {
    if (this.pumping) {
      this.pumpQueued = !0;
      return;
    }
    this.pumping = !0;
    try {
      for (; ; ) {
        const i = this.session;
        if (!i || i.ending || i.nextFrame !== null && i.nextFrame / this.context.sampleRate - this.context.currentTime >= Gk) return;
        let o = i.nextTimeline;
        if (o >= this.length) {
          if (!this.looping) {
            i.ending = !0, this.obtain(0).catch(() => this.record("alku-esipurku-virhe"));
            return;
          }
          o = 0;
        }
        const u = await this.obtain(o);
        if (this.session !== i) return;
        if (!u) {
          this.record("allas-taynna");
          return;
        }
        if (o === 0 && i.nextTimeline >= this.length && !this.looping) {
          i.ending = !0;
          return;
        }
        this.schedule(i, u, o);
      }
    } catch (i) {
      this.fail(i);
    } finally {
      this.pumping = !1, this.pumpQueued && (this.pumpQueued = !1, this.pump());
    }
  }
  schedule(i, o, u) {
    const d = this.context.sampleRate, f = u - o.start, p = o.length - f, h = Math.ceil((this.context.currentTime + Ak) * d);
    let k = i.nextFrame ?? h;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Qk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), k = h);
    const j = k / d, v = Math.round(p * d / this.rate), y = Et.map((C) => {
      const b = this.context.createBufferSource();
      return b.buffer = o.buffers[C], b.connect(this.inputs[C]), b.start(j, f / this.rate), b.stop((k + v) / d), b;
    }), x = { slot: o, frame: k, timelineStart: u, length: p, sources: y, done: !1 };
    o.users++, y[0].onended = () => this.finished(i, x), i.items.push(x), i.items.length === 1 ? this.record("soitto", { when: j, offset: u / this.rate, contextTime: this.context.currentTime }) : this.record("pala-ajastettu", { when: j, offset: u / this.rate, pituus: p / this.rate }), i.nextFrame = k + v, i.nextTimeline = u + p;
  }
  stopItem(i) {
    if (!i.done) {
      i.done = !0, i.slot.users = Math.max(0, i.slot.users - 1);
      for (const o of i.sources) {
        o.onended = null;
        try {
          o.stop();
        } catch {
        }
        o.disconnect();
      }
    }
  }
  finished(i, o) {
    if (o.done) return;
    o.done = !0, o.slot.users = Math.max(0, o.slot.users - 1);
    for (const d of o.sources)
      d.onended = null, d.disconnect();
    if (this.session !== i) return;
    const u = i.items.indexOf(o);
    if (u > 0 && i.items.splice(0, u), i.ending && i.items[i.items.length - 1] === o) {
      this.stopSession(), this.offset = this.duration, this.record("loppu"), this.onEnded?.();
      return;
    }
    this.pump();
  }
  stopSession() {
    const i = this.session;
    this.session = null, this.setWaiting(!1), this.timer !== null && (this.clearIntervalImpl(this.timer), this.timer = null);
    for (const o of i?.items ?? []) this.stopItem(o);
  }
  fail(i) {
    this.stopSession(), this.error = i instanceof Error ? i.message : String(i), this.record("virhe", { message: this.error }), this.setState("virhe"), this.onError?.(this.error);
  }
}
const Jk = 250, Xk = 1e3, Eh = 0.5, Zk = 2e3;
class qk {
  samples = [];
  /** contextSeconds = AudioContext.currentTime, wallMs = performance.now(). */
  sample(i, o) {
    const u = this.samples[this.samples.length - 1];
    u && o <= u.wall || (this.samples.push({ context: i, wall: o }), this.samples.length > 32 && this.samples.shift());
  }
  /** Nollaa näytteet (sivu piiloon tai näkyviin, uusi konteksti, palautus): piilossa kello saa pysähtyä. */
  reset() {
    this.samples = [];
  }
  /**
   * Uusinta näytettä verrataan uusimpaan vähintään minWindowMs vanhempaan näytteeseen.
   * 'unknown', jos vertailukohtaa ei ole.
   */
  status(i = Jk) {
    const o = this.samples[this.samples.length - 1];
    if (!o) return "unknown";
    for (let u = this.samples.length - 2; u >= 0; u--) {
      const d = this.samples[u], f = o.wall - d.wall;
      if (f < i) continue;
      return (o.context - d.context) * 1e3 < Eh * f ? "stalled" : "ok";
    }
    return "unknown";
  }
}
function Lf(s, i, o) {
  return new Promise((u, d) => {
    const f = setTimeout(() => d(new Error(`${o}: aikaraja ${i} ms`)), i);
    s.then((p) => {
      clearTimeout(f), u(p);
    }, (p) => {
      clearTimeout(f), d(p);
    });
  });
}
async function ey(s, i = Zk) {
  try {
    return s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (typeof s.suspend == "function" && s.state === "running" && await Lf(s.suspend(), i, "suspend"), s.state === "closed" ? { ok: !1, reason: "konteksti suljettu" } : (await Lf(s.resume(), i, "resume"), s.state !== "running" ? { ok: !1, reason: `tila ${s.state}` } : { ok: !0 }));
  } catch (o) {
    const u = o instanceof DOMException || o instanceof Error ? o.name : "", d = o instanceof Error ? o.message : String(o);
    return { ok: !1, reason: u && u !== "Error" ? `${u}: ${d}` : d };
  }
}
async function ty(s, {
  ms: i = 300,
  now: o = () => performance.now(),
  wait: u = (d) => new Promise((f) => setTimeout(f, d))
} = {}) {
  const d = s(), f = o();
  await u(i);
  const p = (s() - d) * 1e3, h = o() - f;
  return p >= Eh * Math.max(i, h);
}
const ny = 2e3, Dl = { visible: !1, text: "", percent: null, announce: "" };
function iy(s) {
  return s.complete ? 100 : s.total ? Math.min(99, Math.floor(s.received / s.total * 100)) : null;
}
class sy {
  sawIncomplete = !1;
  doneUntil = 0;
  announcedStart = !1;
  update(i, o, u) {
    if (!i || o === "tyhja" || o === "virhe")
      return this.reset(), Dl;
    if (!i.complete) {
      this.doneUntil = 0;
      const d = iy(i);
      if (d === null && o === "ladataan") return Dl;
      this.sawIncomplete = !0;
      const f = this.announcedStart ? "" : "Kappaleen lataus jatkuu taustalla.";
      return this.announcedStart = !0, d === null ? { visible: !0, text: "Ladataan kappaletta…", percent: null, announce: f } : { visible: !0, text: `Ladattu ${d} %`, percent: d, announce: f };
    }
    return this.sawIncomplete ? (this.sawIncomplete = !1, this.doneUntil = u + ny, { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "Kappale ladattu." }) : u < this.doneUntil ? { visible: !0, text: "Ladattu 100 %", percent: 100, announce: "" } : Dl;
  }
  reset() {
    this.sawIncomplete = !1, this.doneUntil = 0, this.announcedStart = !1;
  }
}
const ry = { visible: !1, text: "", percent: null, announce: "" }, ay = 1e3;
function oy({ read: s, state: i }) {
  const o = _.useRef(new sy()), [u, d] = _.useState(ry), f = _.useRef(s);
  f.current = s, _.useEffect(() => {
    const h = setInterval(() => {
      const k = f.current(), j = o.current.update(k?.status ?? null, k?.state ?? "tyhja", performance.now());
      d((v) => v.visible === j.visible && v.text === j.text && v.percent === j.percent && (j.announce === "" || v.announce === j.announce) && (j.visible || v.announce === "") ? v : { ...j, announce: j.visible ? j.announce || v.announce : "" });
    }, ay);
    return () => clearInterval(h);
  }, []);
  const p = i === "ladataan" || i === "puretaan";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    p && !(u.visible && u.percent !== null) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: i === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
    u.visible && /* @__PURE__ */ a.jsxs("div", { className: "song-load", children: [
      /* @__PURE__ */ a.jsx("span", { id: "song-load-label", children: u.text }),
      u.percent !== null && /* @__PURE__ */ a.jsx("progress", { max: 100, value: u.percent, "aria-labelledby": "song-load-label" })
    ] }),
    /* @__PURE__ */ a.jsx("span", { className: "sr-only", role: "status", children: u.announce })
  ] });
}
const ly = _.memo(oy, (s, i) => s.state === i.state), cr = typeof location < "u" ? new URLSearchParams(location.search) : new URLSearchParams(), uy = cr.get("soitin") === "vanha", sn = !uy, cy = sn && (cr.has("valjas") || typeof navigator < "u" && navigator.webdriver === !0), dy = Number(cr.get("naytetaajuus")) || 48e3, fy = sn && cr.get("lataus") !== "koko", Rf = sn && cr.get("diag") === "1";
function hy() {
  const s = new URL(location.href);
  return s.searchParams.set("soitin", "vanha"), s.pathname + s.search + s.hash;
}
const Nh = () => typeof navigator < "u" ? navigator.audioSession : void 0;
function my(s, i, o) {
  const u = Nh(), d = [`konteksti ${i.state}, kello ${i.currentTime.toFixed(2)} s, outputLatency ${((i.outputLatency ?? 0) * 1e3).toFixed(0)} ms, äänisessio ${u ? `${u.type ?? "?"}/${u.state ?? "?"}` : "ei tukea"}`, ...o.slice(-10)], f = s.events, p = f.find((v) => v.kind === "lataus-alku")?.ms;
  if (p === void 0) return [...d, "Ei latausta vielä."].join(`
`);
  d.push(`ladattu ${Math.round(s.downloadProgress * 100)} %${s.waiting ? ", odottaa latausta" : ""}`);
  const h = f.find((v) => v.kind === "pala"), k = f.find((v) => v.kind === "soitto");
  for (const v of f)
    !["ensitavut", "kalibroitu", "alku-valmis", "valmis", "ladattu", "virhe", "odottaa-latausta", "alivuoto"].includes(v.kind) && v !== h && v !== k || d.push(`${String(v.ms - p).padStart(6)} ms ${v.kind}${v.track ? " " + v.track : ""}${typeof v.kesto == "number" && v.kind === "pala" ? ` (purku ${v.kesto} ms)` : ""}`);
  const j = typeof performance < "u" && performance.getEntriesByType ? performance.getEntriesByType("resource") : [];
  for (const v of j.filter((y) => /\.mp3(\?|$)/.test(y.name)).slice(-6))
    d.push(`${v.name.split("/").pop()}: ${v.nextHopProtocol || "?"} ${Math.round(v.transferSize / 1024)} kt, vastaus ${Math.round(v.responseStart - v.startTime)} ms, kesto ${Math.round(v.duration)} ms`);
  return d.join(`
`);
}
let Ch = null;
function py() {
  return vk(new URLSearchParams(location.search).get("kappale")) ?? Ch ?? pk;
}
function vy(s) {
  Ch = s;
  const i = new URL(location.href);
  yh(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", kk(s)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const ky = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3",
    downloadSize: "5,3 Mt"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3",
    downloadSize: "4,9 Mt"
  }
}, $f = 1e-3;
function Of(s, i) {
  try {
    s.currentTime = i;
  } catch {
  }
}
function If(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const i = Math.floor(s);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function yy({ onBack: s }) {
  const i = _.useRef(null), o = _.useRef(null), u = _.useRef(null), d = _.useRef(0), f = _.useRef(new ah()), p = _.useRef(null), h = _.useRef(null), k = _.useRef(0), j = _.useRef(new qk()), v = _.useRef(!1), y = _.useRef(!1), x = _.useRef(!1), C = _.useRef([]), b = (A) => {
    C.current.push(`${(/* @__PURE__ */ new Date()).toLocaleTimeString("fi-FI")} ${A}`), C.current.length > 40 && C.current.shift();
  }, [w, E] = _.useState(""), [D, P] = _.useState(!1), [B, z] = _.useState("tyhja"), [V, Z] = _.useState(!1), [F, L] = _.useState("");
  _.useEffect(() => {
    if (!Rf) return;
    const A = setInterval(() => {
      const H = h.current;
      L(H ? my(H.player, H.context, C.current) : C.current.join(`
`));
    }, 500);
    return () => clearInterval(A);
  }, []);
  const [K, X] = _.useState(py), re = ky[K], [we, W] = _.useState(!1), [le, U] = _.useState(!0), [ue, fe] = _.useState(!0), [Q, ce] = _.useState(!1), [ee, T] = _.useState(!1), [S, te] = _.useState(!1), [he, Ce] = _.useState(ov), [G] = _.useState(() => jv()), me = _.useRef(null), [Te, De] = _.useState(""), [ie, de] = _.useState(0), [oe, ye] = _.useState(0), [_e, ae] = _.useState("");
  function ve(A = !1, H, se) {
    const be = i.current;
    if (be)
      for (const Re of [o.current, u.current])
        Re && (!H || Re === H) && f.current.align(be, Re, A, void 0, se);
  }
  function ge() {
    return [
      ["backing", i.current, !0],
      ["guitar", o.current, le],
      ["vocals", u.current, ue]
    ];
  }
  function Me(A = he, H) {
    if (sn) {
      const se = h.current?.player;
      if (se) for (const [be, , Re] of ge()) se.setLevel(be, Cl(be, A, H?.[be] ?? Re));
      return;
    }
    for (const [se, be, Re] of ge()) {
      if (!be) continue;
      const We = Cl(se, A, H?.[se] ?? Re);
      if (G === "webaudio" && me.current?.routed(be))
        me.current.setLevel(be, We);
      else
        try {
          be.volume = Cl(se, A);
        } catch {
        }
    }
  }
  function Le(A) {
    Ce(A), lv(A), Me(A);
  }
  function Oe() {
    if (sn) {
      const A = h.current?.player;
      A?.playing && de(A.pause());
    }
    d.current++, i.current?.pause(), o.current?.pause(), u.current?.pause(), W(!1);
  }
  function Ge(A) {
    if (A !== K) {
      sn && (k.current++, h.current?.player.release()), p.current = null, Oe();
      for (const H of [i.current, o.current, u.current])
        if (H)
          try {
            H.currentTime = 0;
          } catch {
          }
      de(0), ye(0), ae(""), X(A), vy(A);
    }
  }
  function Ie(A) {
    if (sn) {
      const be = h.current?.player, Re = Math.max(0, Math.min(A, oe > 0 ? oe : A));
      de(Re), be?.state === "valmis" ? be.seek(Re) : p.current = Re;
      return;
    }
    const H = i.current;
    if (!H || !Number.isFinite(A)) return;
    const se = Math.max(0, Math.min(A, Number.isFinite(H.duration) ? H.duration : A));
    p.current = se, de(se), Of(H, se);
  }
  function Qe(A) {
    const H = p.current;
    if (H === null || A !== i.current || A.seeking) return;
    const se = Number.isFinite(A.duration) ? Math.min(H, A.duration) : H;
    if (se !== H && (p.current = se, de(se)), Math.abs(A.currentTime - se) < $f) return;
    const be = A.seekable;
    for (let Re = 0; Re < be.length; Re++)
      if (be.start(Re) <= se && se <= be.end(Re)) {
        Of(A, se);
        return;
      }
  }
  function at(A) {
    if (A !== i.current) return;
    const H = p.current;
    if (H === null)
      de(A.currentTime);
    else if (A.readyState >= 1 && !A.seeking && Math.abs(A.currentTime - H) < $f) {
      p.current = null, ve(!0);
      return;
    }
    A.paused || ve();
  }
  function $t() {
    if (h.current) return h.current;
    try {
      const A = Rk({ sampleRate: dy }), H = new Fl(A, { progressive: fy });
      return H.onStateChange = z, H.onWaitingChange = Z, H.onError = (se) => {
        W(!1), de(H.position()), ae(`Toisto keskeytyi (${se}). Paina Soita uudelleen.`);
      }, H.onEnded = () => {
        W(!1), de(H.duration);
      }, A.onstatechange = () => {
        b(`konteksti ${A.state}`), A.state === "interrupted" && (x.current = !0), A.state !== "running" && H.playing && (de(H.pause()), W(!1));
      }, j.current.reset(), v.current = !1, h.current = { context: A, player: H }, x.current = !1, b(`uusi konteksti ${A.sampleRate} Hz`), cy && (window.__kappaleD1 = { context: A, player: H, lifecycle: C.current }), h.current;
    } catch (A) {
      return ae("Web Audio ei ole käytettävissä tässä selaimessa. " + (A instanceof Error ? A.message : "")), P(!0), null;
    }
  }
  function it() {
    k.current++, h.current?.player.dispose(), h.current?.context.close().catch(() => {
    }), h.current = null, j.current.reset(), v.current = !1, delete window.__kappaleD1;
  }
  async function Be(A, H) {
    y.current = !0, E("Palautetaan ääntä…");
    try {
      const se = await ey(A), be = se.ok && await ty(() => A.currentTime);
      if (H !== k.current) return !1;
      if (j.current.reset(), be)
        return v.current = !1, !0;
      if (se.reason?.startsWith("NotAllowedError"))
        return ae("Ääni ei käynnistynyt. Paina Soita uudelleen."), !1;
      const Re = h.current?.player.position() ?? 0;
      return it(), p.current = Re, de(Re), z("tyhja"), ae("Ääntä ei saatu palautettua. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta."), !1;
    } finally {
      y.current = !1, E("");
    }
  }
  function st() {
    const A = h.current?.player, H = p.current ?? (A?.state === "valmis" ? A.position() : ie);
    b(`konteksti uusitaan kohdassa ${H.toFixed(1)} s`), it(), p.current = H > 0 ? H : null, de(H), z("tyhja");
  }
  async function Mt() {
    if (y.current) return;
    E(""), x.current && h.current && !we && st();
    const A = $t();
    if (!A) return;
    const { context: H, player: se } = A;
    if (we) {
      de(se.pause()), W(!1);
      return;
    }
    if (se.state === "ladataan" || se.state === "puretaan") {
      k.current++, se.cancel();
      return;
    }
    const be = H.state === "running" ? Promise.resolve() : H.resume();
    ae(""), P(!1);
    const Re = ++k.current;
    if (se.state !== "valmis") {
      const tt = await se.load({ backing: re.backing, guitar: re.guitar, vocals: re.vocals });
      if (Re !== k.current) return;
      if (tt === "virhe") {
        const xt = se instanceof Fl ? se.errorKind : "lataus", ft = xt === "kalibrointi" || xt === "naytetaajuus";
        ae(ft ? `Soitin ei voi purkaa kappaleen ääntä tässä selaimessa (${se.error}).` : "Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen."), P(ft);
        return;
      }
      if (tt !== "valmis") return;
      ye(se.duration);
    }
    try {
      await be;
    } catch {
    }
    if (Re !== k.current) return;
    if (x.current) {
      b("lataus valmis taustakäynnin jälkeen, odotetaan Soita"), E("Soitin oli taustalla latauksen aikana. Paina Soita aloittaaksesi.");
      return;
    }
    if (H.state !== "running") {
      ae(`Ääni ei käynnistynyt (Web Audio: ${H.state}). Paina Soita uudelleen.`);
      return;
    }
    if ((v.current || j.current.status() === "stalled") && (!await Be(H, Re) || Re !== k.current))
      return;
    Me(), se.setLoop(Q), p.current !== null && (se.seek(p.current), p.current = null);
    let We = se.position();
    if (We >= se.duration - 0.05 && (We = 0), !se.play(We)) {
      ae("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    de(We), W(!0);
  }
  async function zt() {
    if (sn) {
      await Mt();
      return;
    }
    const A = i.current, H = o.current, se = u.current;
    if (!A || !H || !se) return;
    if (we) {
      Oe();
      return;
    }
    ae("");
    const be = p.current ?? A.currentTime;
    if (Number.isFinite(A.duration) && be >= A.duration - 0.05 && Ie(0), Qe(A), G === "webaudio") {
      const tt = me.current ??= new Ev(), xt = tt.unlock() && [A, H, se].map((ft) => tt.route(ft)).every(Boolean);
      De(xt ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + tt.lastError);
    }
    Me(), H.muted = !le, se.muted = !ue, ve(!0, void 0, cv);
    const Re = ++d.current;
    le || H.pause(), ue || se.pause();
    const We = [A, ...le ? [H] : [], ...ue ? [se] : []];
    if (!rh(We)) {
      fv(We);
      const tt = await hv(We, dv, () => Re !== d.current);
      if (tt === "ohitettu" || Re !== d.current) return;
      if (tt === "virhe") {
        Oe(), ae("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (f.current.hold(performance.now() + nf), await Promise.all(We.map((tt) => tt.play())), Re !== d.current) return;
      if (f.current.hold(performance.now() + nf), ve(), W(!0), G === "webaudio" && me.current?.routed(A)) {
        const tt = me.current;
        setTimeout(() => {
          Re === d.current && tt.state !== "running" && ae(`Ääni ei käynnistynyt (Web Audio: ${tt.state}). Pysäytä ja soita uudelleen.${tt.lastError ? " " + tt.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Re !== d.current) return;
      Oe(), ae("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function _t(A, H, se) {
    if (!A) return;
    if (A.muted = !H, !H) {
      A.pause();
      return;
    }
    !i.current || !we || (ve(!0, A), A.play().catch(() => ae(se + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Ve(A) {
    U(A), Me(he, { guitar: A }), _t(o.current, A, "Kitararaita");
  }
  function Ye(A) {
    fe(A), Me(he, { vocals: A }), _t(u.current, A, "Lauluraita");
  }
  return _.useEffect(() => {
    const A = () => {
      document.hidden && Oe();
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A), d.current++, i.current?.pause(), o.current?.pause(), u.current?.pause(), me.current?.close(), it();
    };
  }, []), _.useEffect(() => {
    if (!sn) return;
    const A = j.current, H = () => {
      A.reset(), b(document.hidden ? "sivu piiloon" : "sivu näkyviin"), document.hidden && h.current && (x.current = !0);
    };
    document.addEventListener("visibilitychange", H);
    const se = Nh(), be = () => {
      b(`äänisessio ${se?.state ?? "?"}`), se?.state === "interrupted" && h.current && (x.current = !0);
    };
    se?.addEventListener?.("statechange", be);
    const Re = setInterval(() => {
      const We = h.current;
      if (!We || document.hidden || We.context.state !== "running" || y.current) {
        A.reset();
        return;
      }
      A.sample(We.context.currentTime, performance.now()), !(!We.player.playing || A.status(Xk) !== "stalled") && (v.current = !0, de(We.player.pause()), W(!1), ae("Ääni pysähtyi (esimerkiksi näytön lukituksen jälkeen). Paina Soita jatkaaksesi samasta kohdasta."));
    }, 250);
    return () => {
      clearInterval(Re), document.removeEventListener("visibilitychange", H), se?.removeEventListener?.("statechange", be);
    };
  }, []), _.useEffect(() => {
    Me();
  }, [K]), _.useEffect(() => {
    h.current?.player.setLoop(Q);
  }, [Q]), _.useEffect(() => {
    if (!sn || !we) return;
    let A = 0, H = "", se = 0;
    const be = () => {
      const Re = h.current?.player;
      if (Re?.playing) {
        const We = Re.audiblePosition(), tt = cu(We, K), xt = `${tt.sectionIndex}:${tt.barIndex}:${tt.beat}`, ft = performance.now();
        (xt !== H || ft - se > 250) && (H = xt, se = ft, de(We));
      }
      A = requestAnimationFrame(be);
    };
    return A = requestAnimationFrame(be), () => cancelAnimationFrame(A);
  }, [we, K]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ a.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ a.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "song-version-select",
          value: K,
          onChange: (A) => Ge(A.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ a.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          re.label,
          " · ",
          re.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          zt();
        }, children: we ? "■ Tauko" : B === "ladataan" || B === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: oe > 0 ? oe : 1,
            step: 0.1,
            value: Math.min(ie, oe > 0 ? oe : 1),
            disabled: oe <= 0,
            onChange: (A) => Ie(Number(A.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          If(ie),
          " / ",
          If(oe)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: le,
              onChange: (A) => Ve(A.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: ue,
              onChange: (A) => Ye(A.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: Q,
              onChange: (A) => ce(A.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": G, children: [
          /* @__PURE__ */ a.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            he > 0 && /* @__PURE__ */ a.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            he > 50 && /* @__PURE__ */ a.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: he,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": he + " %",
              onChange: (A) => Le(Number(A.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            he,
            " %"
          ] })
        ] })
      ] }),
      Te && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: Te }),
      /* @__PURE__ */ a.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ a.jsxs("a", { href: re.download, download: re.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          re.label,
          ", koko kappale · ",
          re.downloadSize
        ] })
      ] }),
      _e && /* @__PURE__ */ a.jsxs("p", { className: "backing-error", role: "alert", children: [
        _e,
        D && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          " ",
          /* @__PURE__ */ a.jsx("a", { href: hy(), children: "Käytä vanhaa soitinta" }),
          "."
        ] })
      ] }),
      w && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: w }),
      sn && V && /* @__PURE__ */ a.jsx("p", { className: "tools-note song-load-wait", role: "status", children: "Ladataan valittua kohtaa…" }),
      sn && /* @__PURE__ */ a.jsx(ly, { state: B, read: () => {
        const A = h.current?.player;
        return A instanceof Fl ? { status: A.downloadStatus, state: A.state } : null;
      } }),
      Rf && /* @__PURE__ */ a.jsx("pre", { className: "tools-note", style: { whiteSpace: "pre-wrap", fontSize: "0.75rem" }, children: F }),
      !sn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: re.backing,
            preload: "metadata",
            loop: Q,
            onLoadedMetadata: (A) => {
              A.currentTarget === i.current && (ye(A.currentTarget.duration), Qe(A.currentTarget));
            },
            onProgress: (A) => Qe(A.currentTarget),
            onCanPlay: (A) => Qe(A.currentTarget),
            onTimeUpdate: (A) => at(A.currentTarget),
            onEnded: (A) => {
              A.currentTarget !== i.current || A.currentTarget.loop || (p.current = null, o.current?.pause(), u.current?.pause(), W(!1), de(A.currentTarget.duration));
            },
            onPause: (A) => {
              A.currentTarget === i.current && W(!1);
            },
            onError: () => ae(re.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          K + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: o,
            src: re.guitar,
            preload: "metadata",
            muted: !le,
            loop: Q,
            onLoadedMetadata: () => {
              i.current?.paused && ve(!0);
            },
            onError: () => ae(re.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          K + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: u,
            src: re.vocals,
            preload: "metadata",
            muted: !ue,
            loop: Q,
            onLoadedMetadata: () => {
              i.current?.paused && ve(!0);
            },
            onError: () => ae(re.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          K + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: ee, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (A) => {
        A.preventDefault(), T((H) => !H);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(Tk, { version: K, position: ie, loop: Q, onSeek: Ie })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: S, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (A) => {
        A.preventDefault(), te((H) => !H);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(Pk, { open: S })
    ] })
  ] });
}
const eu = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Pa = (s, i = 1) => s.toFixed(i).replace(".", ",").replace("-", "−"), Th = (s) => {
  const i = Math.round(s);
  return (i > 0 ? "+" : i < 0 ? "−" : "±") + Math.abs(i);
}, tu = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function gy(s, i, o, u) {
  if (u) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${tu(o)}. Vaihda laite Mikrofonin asetuksista.`,
        "Äänikortti: kytke kitara soitintuloon (INST), käännä gain-säädintä ylemmäs ja avaa kitaran volume.",
        "Jos mittari liikkuu mutta jää kynnysviivan alle, mittaa taustakohina tai laske äänikynnystä."
      ];
    case "noise":
      return [
        "Soita vain yhtä kieltä ja vaimenna muut kädellä.",
        "Sammuta taustamusiikki ja muut äänet. Kaiuttimista kuuluva ääni sekoittaa tunnistusta.",
        "Soita hieman voimakkaammin ja anna sävelen soida hetki."
      ];
    case "untuned":
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${i.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${i.stability} ms.`];
    default:
      return [];
  }
}
function Mh({ frame: s, threshold: i }) {
  const o = s?.rms ?? 0, u = cs(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= i ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, u)),
      "aria-valuetext": `${Pa(Math.max(-60, u), 0)} desibeliä${o >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${lf(o) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${lf(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function xy({ mic: s, frame: i, heard: o, s: u, now: d }) {
  const f = ch(s.phase, i), p = o && d - o.at < 1500 ? o : null, h = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Fe(p.midi, u.flats, !0)} · ${Th(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : eu[f];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: h }),
    s.phase === "on" && /* @__PURE__ */ a.jsx(Mh, { frame: i, threshold: u.minRms })
  ] });
}
function jy({ mic: s, frame: i, heard: o, accepted: u, now: d, s: f, change: p, devices: h, locked: k, calibrating: j, calibration: v, onTest: y, onStop: x, onCalibrate: C }) {
  const b = _.useId(), w = ch(s.phase, i), E = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", D = s.phase === "on", P = o && d - o.at < 1500 ? o : null, B = P && (w === "pitch" || w === "untuned"), z = D && (i?.peak ?? 0) >= 0.98, V = s.phase === "error" ? [] : gy(w, f, s.info, z), Z = !f.device || h.some((L) => L.deviceId === f.device), F = (L, K) => p({ ...f, [L]: K });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : eu[w],
      w === "pitch" && P ? ` ${Fe(P.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${tu(s.info)}.` : s.phase === "error" ? s.error : eu[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    D && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          tu(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(i?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx(Mh, { frame: i, threshold: f.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Pa(Math.max(-60, cs(i?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: B ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: P ? Fe(P.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: B ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: P ? `${Pa(P.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: B ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: P ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Th(P.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${P.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, P.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: B ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: P ? `${Math.round(P.clarity * 100)} %` : i?.clarity !== void 0 && w === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    D && u && d - u.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Fe(u.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    V.length > 0 && D && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: V.map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) }),
    s.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: x, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: k, onClick: y, children: "Testaa mikrofoni" }),
      E && D && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: j, onClick: C, children: j ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    k && s.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: k, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${b}-device`, value: f.device, onChange: (L) => F("device", L.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !Z && /* @__PURE__ */ a.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              h.map((L, K) => /* @__PURE__ */ a.jsx("option", { value: L.deviceId, children: L.label || `Äänitulo ${K + 1}` }, L.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              Pa(cs(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (L) => F("minRms", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (L) => F("clarity", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (L) => F("stability", Number(L.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (L) => F("cents", Number(L.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          h.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Sy = (s) => s.mode === "scale" ? ze.scaleNotes(ze.SCALES[s.scale]) : Mi[s.mode === "caged" ? "maj" : s.chord].tones, Ff = (s, i) => Sy(s).find(([o]) => o === i)?.[1], _h = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", wy = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function Ey(s, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Ny(s, i, o, u, d) {
  return i.choices === "degree" ? `Oikein! ${ir(s.root, i.interval, i.degree)} on ${i.degree}. aste.` : _h(s) ? `Oikein! ${i.degree}. aste on ${ir(s.root, i.interval, i.degree)}.` : s.mode === "interval" ? `Oikein! ${Fe(i.reference, s.flats, !0)} → ${i.name} on ${sr[i.interval]} ${wy(i)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Fe(d.midi, s.flats)} on ${Bf[d.string]}: ${_i(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(u, s.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function Cy(s, i, o, u, d) {
  if (o === "note") return `Ei ${Fe(u, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${Ff(s, u) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ze(d.midi) === Ze(i.midi);
  if (s.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${su[i.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${Fe(d.midi, s.flats)}. Etsi ${i.name}.`;
  if (_h(s)) {
    const p = Ze(d.midi - s.root), h = Ff(s, p), k = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return h ? f && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${ir(s.root, p, h)} eli ${h}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${Fe(d.midi, s.flats)}, joka ei kuulu ${k}. Etsi ${i.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Ty(s, i, o) {
  const u = Fe(o, s.flats, !0);
  return Ze(o) === Ze(i.midi) ? `Kuulin sävelen ${u}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${u}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function bh(s, i = !1) {
  const o = s.split(":"), u = (p) => Number(o[p]), d = (...p) => p.every((h) => Number.isInteger(u(h))), f = (p, h) => rn[p] ? `${rn[p]}-kieli, ${_i(h)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(u(1), u(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(u(1), i)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Fe(u(1), i, !0)}` : d(1, 2) && f(u(1), u(2)) ? `Kuule ja toista: ${f(u(1), u(2))}` : null;
    case "interval":
      return d(1) && sr[u(1)] ? `${sr[u(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Mi[p]) return null;
      const h = Mi[p].tones.find(([k]) => k === u(3))?.[1];
      return h ? `${Vf(u(1), p)}: ${h}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = ze.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const h = `${ui(u(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const k = ze.scaleNotes(p).find(([j]) => j === u(3))?.[1];
        return k ? `${h}: ${k}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(u(3), u(4)) ? `${h}: ${f(u(3), u(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${ui(u(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const h = Mi.maj.tones.find(([k]) => k === u(3))?.[1];
        return h ? `${p}: ${h}. aste` : null;
      }
      return d(3, 4) && f(u(3), u(4)) ? `${p}: ${f(u(3), u(4))}` : null;
    }
    default:
      return null;
  }
}
function Df(s) {
  return Object.entries(s).flatMap(([i, o]) => {
    const [u, d, f, ...p] = i.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: i, input: u, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const nu = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", My = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function _y(s) {
  const i = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${rs(s.mode)}${s.hints ? ` · ${Oa[s.hints].title}` : ""} · ${i} · keskimäärin ${nu(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function by({ store: s, s: i, locked: o, changed: u }) {
  const [d, f] = _.useState(""), p = _.useRef(null), { recent: h, sessions: k, stats: j } = s.data, v = bi(i), y = Uf(i), x = [...new Set(h.map((P) => P.mode))].map((P) => {
    const B = h.filter((z) => z.mode === P);
    return { mode: P, ...Ul(B), last: Math.max(...B.map((z) => z.at)) };
  }).sort((P, B) => B.last - P.last), C = Df(j).filter((P) => !P.guided && P.mode === i.mode && P.input === v && P.check === y && P.stat.attempts >= 3).map((P) => ({ ...P, score: ru(P.stat), text: bh(P.item, i.flats) })).filter((P) => P.text && P.score < 0.8).sort((P, B) => P.score - B.score).slice(0, 5), b = Df(j).reduce((P, B) => P + B.stat.attempts, 0);
  function w() {
    const P = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), B = URL.createObjectURL(P), z = document.createElement("a");
    z.href = B, z.download = "musiikin-kartta-harjoittelu.json", z.click(), setTimeout(() => URL.revokeObjectURL(B), 1e3);
  }
  async function E(P) {
    if (P)
      try {
        const B = await P.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(B), f("Varmuuskopio palautettu."), u();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function D() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), u());
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    b === 0 ? /* @__PURE__ */ a.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        b,
        " vastattua kysymystä · ",
        k.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ a.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ a.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ a.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ a.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: x.map((P) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: rs(P.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: P.count }),
          /* @__PURE__ */ a.jsx("td", { children: P.solo ? `${P.soloFirst}/${P.solo} · ${Math.round(P.soloFirst / P.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: P.guided }),
          /* @__PURE__ */ a.jsx("td", { children: nu(P.ms / P.count) })
        ] }, P.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    C.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        rs(i.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: C.map((P) => /* @__PURE__ */ a.jsxs("li", { children: [
        P.text,
        " · viime aikoina ",
        Math.round(rr(P.stat) * 100),
        " % heti oikein · ",
        nu(ar(P.stat))
      ] }, P.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: b ? `Harjoituksessa ${rs(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        My[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Hp, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: j, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      k.length ? /* @__PURE__ */ a.jsx("ul", { children: k.slice(-10).reverse().map((P) => /* @__PURE__ */ a.jsx("li", { children: _y(P) }, P.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (P) => {
          E(P.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: o || !b, onClick: D, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function Py() {
  try {
    return new Qd(localStorage);
  } catch {
    return new Qd();
  }
}
const zf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), Ay = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Ly = [0, 2, 4, 5, 7, 9, 11];
function Ry(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function $y() {
  const [s] = _.useState(Py), [i, o] = _.useState(() => Ap(location.search, s.data.settings)), [, u] = _.useReducer(($) => $ + 1, 0), d = _.useRef(null), f = _.useRef(new Hv()), p = _.useRef(new ur()), h = _.useRef(0), k = _.useRef(), j = _.useRef(), v = _.useRef(null), y = _.useRef(0), x = _.useRef(null), C = _.useRef(i);
  C.current = i;
  const [b, w] = _.useState({ phase: "off", purpose: "none" }), E = _.useRef(b), D = ($) => {
    E.current = $, w($);
  }, [P, B] = _.useState(null), [z, V] = _.useState(null), [Z, F] = _.useState(null), [L, K] = _.useState(0), [X, re] = _.useState([]), [we, W] = _.useState(!1), [le, U] = _.useState(!1), [ue, fe] = _.useState(""), [Q, ce] = _.useState("info"), [ee, T] = _.useState(""), [S, te] = _.useState(0), [he, Ce] = _.useState([]), [G, me] = _.useState([]), [Te, De] = _.useState(null), [ie, de] = _.useState(!1), [oe, ye] = _.useState(""), [_e, ae] = _.useState(""), [ve, ge] = _.useState(() => {
    const $ = new URLSearchParams(location.search);
    return $.has("tila") || $.has("vanha") ? "legacy" : yh($.get("kappale")) ? "songs" : nv($.get("polku"));
  }), [Me, Le] = _.useState(() => {
    const $ = new URLSearchParams(location.search);
    return $.get("polku") === "otelauta" && $.get("harjoitus") === "savelten-etsinta";
  });
  function Oe() {
    const $ = new URL(location.href);
    $.searchParams.set("polku", "otelauta"), $.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", $.pathname + $.search + $.hash), Le(!0);
  }
  function Ge() {
    const $ = new URL(location.href);
    $.searchParams.set("polku", "otelauta"), $.searchParams.delete("harjoitus"), history.replaceState(history.state, "", $.pathname + $.search + $.hash), Le(!1);
  }
  function Ie() {
    ge(null), Le(!1);
    const $ = new URL(location.href);
    $.searchParams.delete("polku"), $.searchParams.delete("harjoitus"), history.replaceState(history.state, "", $.pathname + $.search + $.hash);
  }
  const Qe = () => {
    _v().then(re).catch(() => {
    });
  };
  function at() {
    clearTimeout(j.current), v.current = null, de(!1);
  }
  function $t() {
    B(null), V(null), F(null);
  }
  function it() {
    f.current.stop(), at(), D({ phase: "off", purpose: "none" }), $t();
  }
  async function Be($) {
    if (f.current.active && E.current.phase === "on")
      return at(), D({ ...E.current, purpose: $ }), f.current.rearm(), !0;
    D({ phase: "requesting", purpose: $ }), $t();
    try {
      const ke = await f.current.start(C.current.device, {
        ...zf(C.current),
        onFrame: (Je) => _t.current.frame(Je),
        onStableNote: (Je) => _t.current.stable(Je)
      }, () => _t.current.lost());
      return ke ? (D({ phase: "on", purpose: $, info: ke }), Qe(), !0) : !1;
    } catch (ke) {
      return D({ phase: "error", purpose: "none", error: Uv(ke) }), !1;
    }
  }
  function st($) {
    v.current?.push($.rms);
    const ke = performance.now();
    ke - y.current < 66 || (y.current = ke, B($), K(ke), $.midi !== void 0 && $.frequency !== void 0 && V({ midi: $.midi, frequency: $.frequency, cents: $.cents ?? 0, clarity: $.clarity ?? 0, tuned: $.status === "pitch", at: ke }));
  }
  function Mt($) {
    E.current.purpose === "test" ? F($) : E.current.purpose === "round" && ft($.midi, "mic", void 0, $.heldMs);
  }
  function zt() {
    const $ = E.current.purpose === "round";
    at(), $t(), D({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ke = d.current;
    $ && ke && ["active", "feedback", "paused"].includes(ke.phase) && (se(), U(!1), ke.pause(), T("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), u());
  }
  const _t = _.useRef({ frame: st, stable: Mt, lost: zt });
  _t.current = { frame: st, stable: Mt, lost: zt };
  function Ve($) {
    const ke = Aa($), Je = ke.device !== C.current.device;
    C.current = ke, o(ke), s.settings(ke), T(""), f.current.active && (Je && E.current.purpose === "test" ? (it(), Be("test")) : f.current.setOptions(zf(ke)));
  }
  function Ye($) {
    ae(""), d.current = null, Le(!1), ge($);
  }
  function A() {
    ye(""), Be("test");
  }
  function H() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (at(), v.current = [], de(!0), ye("Mitataan taustakohinaa kolme sekuntia. Älä soita."), j.current = setTimeout(() => {
      const $ = v.current ?? [];
      if (at(), $.length < 10) {
        ye("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ke, noise: Je, loud: Zt } = Gv($);
      Ve({ ...C.current, minRms: ke }), ye(`Taustakohina on ${Math.round(cs(Je))} dB ja äänikynnys nyt ${Math.round(cs(ke))} dB. ${Zt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function se() {
    h.current++, clearTimeout(k.current), p.current.stop();
  }
  function be($, ke) {
    if (!$.results.length) return;
    const Je = Ul($.results);
    s.session({
      id: $.id,
      mode: $.settings.mode,
      count: Je.count,
      first: Je.first,
      ms: Je.ms,
      solo: Je.solo,
      soloFirst: Je.soloFirst,
      hints: $.settings.hints,
      at: Date.now(),
      complete: ke
    });
  }
  async function Re($) {
    if (!$.question?.sound.length || $.phase !== "active") return;
    se();
    const ke = h.current;
    $.pause(), f.current.pause(), U(!0), ce("info"), fe("Kuuntele…"), u();
    try {
      await p.current.play($.question.sound);
    } catch {
      ke === h.current && T("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ke !== h.current || d.current !== $ || ($.resume(), f.current.resume(), U(!1), fe(""), u());
  }
  async function We($) {
    Ce([]), me([]), De(null), T(""), te($.hintLevel), f.current.rearm(), ce("info"), fe(""), u(), $.question?.sound.length && await Re($);
  }
  async function tt() {
    const $ = C.current, ke = Vl($);
    if (ke) {
      T(ke);
      return;
    }
    se();
    const Je = h.current;
    if (T(""), ye(""), ae(""), Sa($)) {
      W(!0);
      const mt = await Be("round");
      if (Je !== h.current) return;
      if (W(!1), !mt) {
        T("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && it();
    const Zt = new tv($, () => s.data.stats, (mt) => s.record(mt));
    try {
      Zt.start();
    } catch (mt) {
      E.current.purpose === "round" && it(), T(mt instanceof Error ? mt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Zt, requestAnimationFrame(() => x.current?.scrollIntoView({ block: "start", behavior: "auto" })), await We(Zt);
  }
  function xt() {
    se(), W(!1), it();
  }
  function ft($, ke, Je, Zt = 0) {
    const mt = d.current, Bt = mt?.question;
    if (!mt || !Bt || mt.phase !== "active") return;
    const ks = mt.answer($, ke, Je, Zt);
    if (ks !== "ignored") {
      if (ks === "candidate")
        De($), ce("bad"), fe(Ty(mt.settings, Bt, $));
      else if (ks === "wrong")
        Je ? Ce((Pt) => [...Pt, Je]) : me((Pt) => [...Pt, $]), ce("bad"), fe(Cy(mt.settings, Bt, ke, $, Je));
      else if (De(null), ce("good"), fe(Ny(mt.settings, Bt, ke, $, Je)), be(mt, !1), mt.settings.advance) {
        const Pt = h.current;
        k.current = setTimeout(() => {
          Pt === h.current && Tn();
        }, ke === "mic" ? 1800 : 1400);
      }
      u();
    }
  }
  async function Tn() {
    const $ = d.current;
    if (!(!$ || $.phase !== "feedback")) {
      se();
      try {
        $.next();
      } catch (ke) {
        fi(!1), T(ke instanceof Error ? ke.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if ($.phase === "done") {
        fi(!0);
        return;
      }
      await We($);
    }
  }
  function fi($ = !1) {
    se(), U(!1), W(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && it();
    const ke = d.current;
    ke && (ke.stop(), be(ke, $)), De(null), te(0), Ce([]), me([]), T(""), ae($ ? "complete" : "stopped"), ce("info"), fe(""), u();
  }
  function hs() {
    const $ = d.current;
    if (!$ || !["active", "feedback", "paused"].includes($.phase)) return;
    se(), U(!1), $.pause();
    const ke = E.current.purpose === "round";
    ke && it(), ce("info"), fe(`Harjoitus on tauolla.${ke ? " Mikrofoni on suljettu." : ""}`), u();
  }
  async function dr() {
    const $ = d.current;
    if (!$ || $.phase !== "paused" || le) return;
    se();
    const ke = h.current;
    if (T(""), Sa($.settings)) {
      W(!0);
      const Je = await Be("round");
      if (ke !== h.current) return;
      if (W(!1), !Je) {
        T("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    $.resume(), ce("info"), fe(""), u(), $.phase === "active" && (f.current.rearm(), $.question?.sound.length && await Re($));
  }
  function ms($) {
    const ke = d.current;
    !ke || ke.phase !== "active" || (ke.useHint($), te($), u());
  }
  const hi = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hi.current = {
    hidden: () => {
      const $ = d.current;
      $ && ["active", "feedback"].includes($.phase) || le ? hs() : E.current.phase !== "off" && E.current.phase !== "error" && (se(), W(!1), it());
    },
    restored: () => {
      W(!1), U(!1), D({ phase: "off", purpose: "none" }), $t(), u();
    }
  }, _.useEffect(() => {
    Qe();
    const $ = () => Qe();
    navigator.mediaDevices?.addEventListener?.("devicechange", $);
    const ke = () => {
      h.current++, clearTimeout(k.current), clearTimeout(j.current), f.current.stop(), p.current.stop(), Kv(), d.current?.pause();
    }, Je = () => {
      document.hidden && hi.current.hidden();
    }, Zt = (mt) => {
      mt.persisted && hi.current.restored();
    };
    return document.addEventListener("visibilitychange", Je), window.addEventListener("pagehide", ke), window.addEventListener("pageshow", Zt), () => {
      ke(), navigator.mediaDevices?.removeEventListener?.("devicechange", $), document.removeEventListener("visibilitychange", Je), window.removeEventListener("pagehide", ke), window.removeEventListener("pageshow", Zt);
    };
  }, []);
  const Ai = _.useRef(null), mi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${le}`;
  _.useEffect(() => {
    const $ = d.current, ke = x.current, Je = document.activeElement;
    !$ || !ke || !(Je === document.body || ke.contains(Je)) || ($.phase === "feedback" ? Ai.current?.focus({ preventScroll: !0 }) : $.phase === "active" && !le && (Je === document.body || Je === Ai.current) && ke.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [mi]);
  const Ue = d.current, rt = !!Ue && ["active", "paused", "feedback"].includes(Ue.phase), lt = rt ? Ue.settings : i, yt = rt ? Ue.question : void 0, Ht = !!yt && !!Ue?.answered, fn = rt && Ue.phase === "paused" && !le && !Ht, Dn = rt && Ue.phase === "active" && !le, ps = rt ? null : Vl(i), vs = rt || we, fr = Pi(lt), Mn = Wp(lt), zn = yt && !Ht ? S : 0, Li = yt ? ev(lt, yt, Ht ? 2 : zn) : { marks: [], text: "" }, hr = [...new Map([...Li.marks, ...Ht ? [] : he.map(($) => ({ ...$, label: Fe($.midi, lt.flats), kind: "wrong" }))].map(($) => [et($), $])).values()], mr = rt && Sa(lt), pr = !!yt && !fn && (yt.choices === "position" || hr.length > 0), bt = Ue ? Ul(Ue.results) : null, vr = !Ue || lt.hints !== "fade" ? "" : Ue.index <= 3 ? " · vastaus näkyy" : Ue.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", kr = Ue && !rt ? Ue.results.filter(($) => $.errors > 0 || $.hint) : [], [Da, ht] = Ry(lt), Bn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), xn = s.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ a.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ a.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ a.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
      s.dismissNotice(), u();
    }, children: "Selvä" })
  ] });
  return !rt && ve === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(sv, { onSelect: Ye })
  ] }) : !rt && ve === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(lk, { onBack: Ie })
  ] }) : !rt && ve === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    Me ? /* @__PURE__ */ a.jsx(uk, { onBack: Ge }) : /* @__PURE__ */ a.jsx(rv, { onBack: Ie, onNotes: Oe })
  ] }) : !rt && ve === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(fk, { onBack: Ie })
  ] }) : !rt && ve === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(yy, { onBack: Ie })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: Da, children: [
      "Lue tämän harjoituksen teoria: ",
      ht,
      " →"
    ] }) }),
    ve !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        rt && fi(), Ie();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: ve === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: ve === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    rt ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: rs(lt.mode) }),
      " · ",
      Zd(lt)
    ] }) : ve === "legacy" ? /* @__PURE__ */ a.jsx(qd, { s: i, change: Ve, locked: vs, problem: ps }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(qd, { s: i, change: Ve, locked: vs, problem: ps })
    ] }),
    !rt && (ve === "legacy" || Sa(i)) && /* @__PURE__ */ a.jsx(
      jy,
      {
        mic: b,
        frame: P,
        heard: z,
        accepted: Z,
        now: L,
        s: i,
        change: Ve,
        devices: X,
        locked: we,
        calibrating: ie,
        calibration: oe,
        onTest: A,
        onStop: it,
        onCalibrate: H
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: x, onClickCapture: ($) => {
      $.detail > 1 && $.target.closest(".practice-board button, .answer-choices button") && $.stopPropagation();
    }, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: rs(lt.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: rt ? `Kysymys ${Ue.index}${Ue.total ? " / " + Ue.total : " · vapaa harjoittelu"} · ${Oa[lt.hints].title}${vr}${Ue.phase === "paused" && !le ? " · tauolla" : ""}` : _e === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !rt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        Ue && Ue.results.length > 0 && bt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: _e === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: bt.solo ? `${bt.soloFirst} / ${bt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: bt.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: Ay(bt.ms / bt.count) })
            ] })
          ] }),
          bt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          kr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(kr.map(($) => bh($.item, i.flats)).filter(Boolean))].slice(0, 6).map(($) => /* @__PURE__ */ a.jsx("li", { children: $ }, $)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Zd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: we ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: xt, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ps, onClick: () => {
          tt();
        }, children: Ue?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ue && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      rt && yt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: fn ? "Harjoitus on tauolla." : yt.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: fn ? "Kysymys palaa näkyviin, kun jatkat." : le ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Ey(lt, yt) }),
        Ue.hintLevel > 0 && !Ht && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: lt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        mr && /* @__PURE__ */ a.jsx(xy, { mic: b, frame: P, heard: z, s: lt, now: L }),
        yt.choices === "note" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (lt.accidentals ? Array.from({ length: 12 }, ($, ke) => ke) : Ly).map(($) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes($) ? "wrong" : Ht && $ === yt.midi % 12 ? "right" : "", disabled: !Dn || G.includes($), onClick: () => ft($, "note"), children: Fe($, lt.flats) }, $)) }),
        yt.choices === "degree" && !fn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (lt.mode === "scale" ? ze.scaleNotes(ze.SCALES[lt.scale]) : Mi[lt.chord].tones).map(([$, ke]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: G.includes($) ? "wrong" : Ht && $ === yt.interval ? "right" : "", disabled: !Dn || G.includes($), onClick: () => ft($, "degree"), children: ke }, $)) }),
        pr && /* @__PURE__ */ a.jsx(
          ci,
          {
            area: Mn,
            marks: hr,
            disabled: !Dn || yt.choices !== "position" || lt.input === "mic",
            onAnswer: ($) => ft($.midi, "board", $),
            caption: fr.fixed === "shape" ? `${lt.shape}-muodon alue` : fr.fixed === "box" ? `Boksin ${lt.box} alue` : "Otelauta"
          }
        ),
        !Ht && !fn && zn > 0 && Li.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Li.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${Q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        Te !== null && Ue.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ue.confirmWrong(), De(null), fe("Kirjattu virheeksi. Etsi sävel uudelleen."), u();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ee && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: ee }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          Ue.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Ai, onClick: () => {
            Tn();
          }, children: Ue.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ue.phase === "active" && !Ht && !le && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            zn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(Math.max(1, Ue.hintLevel)), children: Ue.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            zn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(2), children: "Näytä vastaus" }),
            zn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => te(0), children: "Piilota vihje" })
          ] }),
          yt.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Dn, onClick: () => {
            Re(Ue);
          }, children: "Kuuntele uudelleen" }),
          Ue.phase === "paused" && !le ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: we, onClick: () => {
            dr();
          }, children: we ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: hs, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => fi(), children: "Lopeta harjoitus" })
        ] }),
        Ue.phase === "feedback" && lt.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: bt?.count ? `Vastattu ${bt.count} · itsenäisesti heti oikein ${bt.soloFirst}/${bt.solo}${bt.guided ? ` · vihjeen kanssa ${bt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !rt && ee && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: ee })
    ] }),
    !rt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        i.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(ze.CHROM[i.root])}&asteikko=${i.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Lp(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(by, { store: s, s: i, locked: vs, changed: () => {
        const $ = Aa(s.data.settings);
        C.current = $, o($), u();
      } }),
      /* @__PURE__ */ a.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ a.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ a.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ a.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ a.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ a.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ a.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ a.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
Ep.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx($y, {}));
//# sourceMappingURL=app.js.map
