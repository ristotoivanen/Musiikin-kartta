function zm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var fo = { exports: {} }, Qr = {}, ho = { exports: {} }, Re = {};
var gd;
function Bm() {
  if (gd) return Re;
  gd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), N = Symbol.iterator;
  function T(j) {
    return j === null || typeof j != "object" ? null : (j = N && j[N] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, E = {};
  function x(j, y, te) {
    this.props = j, this.context = y, this.refs = E, this.updater = te || L;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, y) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, y, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function I() {
  }
  I.prototype = x.prototype;
  function A(j, y, te) {
    this.props = j, this.context = y, this.refs = E, this.updater = te || L;
  }
  var K = A.prototype = new I();
  K.constructor = A, O(K, x.prototype), K.isPureReactComponent = !0;
  var $ = Array.isArray, H = Object.prototype.hasOwnProperty, B = { current: null }, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(j, y, te) {
    var he, Se = {}, G = null, V = null;
    if (y != null) for (he in y.ref !== void 0 && (V = y.ref), y.key !== void 0 && (G = "" + y.key), y) H.call(y, he) && !_.hasOwnProperty(he) && (Se[he] = y[he]);
    var ne = arguments.length - 2;
    if (ne === 1) Se.children = te;
    else if (1 < ne) {
      for (var C = Array(ne), Z = 0; Z < ne; Z++) C[Z] = arguments[Z + 2];
      Se.children = C;
    }
    if (j && j.defaultProps) for (he in ne = j.defaultProps, ne) Se[he] === void 0 && (Se[he] = ne[he]);
    return { $$typeof: s, type: j, key: G, ref: V, props: Se, _owner: B.current };
  }
  function J(j, y) {
    return { $$typeof: s, type: j.type, key: y, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function ie(j) {
    return typeof j == "object" && j !== null && j.$$typeof === s;
  }
  function ke(j) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(te) {
      return y[te];
    });
  }
  var we = /\/+/g;
  function X(j, y) {
    return typeof j == "object" && j !== null && j.key != null ? ke("" + j.key) : y.toString(36);
  }
  function fe(j, y, te, he, Se) {
    var G = typeof j;
    (G === "undefined" || G === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else switch (G) {
      case "string":
      case "number":
        V = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case s:
          case a:
            V = !0;
        }
    }
    if (V) return V = j, Se = Se(V), j = he === "" ? "." + X(V, 0) : he, $(Se) ? (te = "", j != null && (te = j.replace(we, "$&/") + "/"), fe(Se, y, te, "", function(Z) {
      return Z;
    })) : Se != null && (ie(Se) && (Se = J(Se, te + (!Se.key || V && V.key === Se.key ? "" : ("" + Se.key).replace(we, "$&/") + "/") + j)), y.push(Se)), 1;
    if (V = 0, he = he === "" ? "." : he + ":", $(j)) for (var ne = 0; ne < j.length; ne++) {
      G = j[ne];
      var C = he + X(G, ne);
      V += fe(G, y, te, C, Se);
    }
    else if (C = T(j), typeof C == "function") for (j = C.call(j), ne = 0; !(G = j.next()).done; ) G = G.value, C = he + X(G, ne++), V += fe(G, y, te, C, Se);
    else if (G === "object") throw y = String(j), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function U(j, y, te) {
    if (j == null) return j;
    var he = [], Se = 0;
    return fe(j, he, "", "", function(G) {
      return y.call(te, G, Se++);
    }), he;
  }
  function ae(j) {
    if (j._status === -1) {
      var y = j._result;
      y = y(), y.then(function(te) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = te);
      }, function(te) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = te);
      }), j._status === -1 && (j._status = 0, j._result = y);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ue = { current: null }, W = { transition: null }, le = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: W, ReactCurrentOwner: B };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Re.Children = { map: U, forEach: function(j, y, te) {
    U(j, function() {
      y.apply(this, arguments);
    }, te);
  }, count: function(j) {
    var y = 0;
    return U(j, function() {
      y++;
    }), y;
  }, toArray: function(j) {
    return U(j, function(y) {
      return y;
    }) || [];
  }, only: function(j) {
    if (!ie(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Re.Component = x, Re.Fragment = o, Re.Profiler = d, Re.PureComponent = A, Re.StrictMode = c, Re.Suspense = S, Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, Re.act = ee, Re.cloneElement = function(j, y, te) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var he = O({}, j.props), Se = j.key, G = j.ref, V = j._owner;
    if (y != null) {
      if (y.ref !== void 0 && (G = y.ref, V = B.current), y.key !== void 0 && (Se = "" + y.key), j.type && j.type.defaultProps) var ne = j.type.defaultProps;
      for (C in y) H.call(y, C) && !_.hasOwnProperty(C) && (he[C] = y[C] === void 0 && ne !== void 0 ? ne[C] : y[C]);
    }
    var C = arguments.length - 2;
    if (C === 1) he.children = te;
    else if (1 < C) {
      ne = Array(C);
      for (var Z = 0; Z < C; Z++) ne[Z] = arguments[Z + 2];
      he.children = ne;
    }
    return { $$typeof: s, type: j.type, key: Se, ref: G, props: he, _owner: V };
  }, Re.createContext = function(j) {
    return j = { $$typeof: p, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: f, _context: j }, j.Consumer = j;
  }, Re.createElement = z, Re.createFactory = function(j) {
    var y = z.bind(null, j);
    return y.type = j, y;
  }, Re.createRef = function() {
    return { current: null };
  }, Re.forwardRef = function(j) {
    return { $$typeof: m, render: j };
  }, Re.isValidElement = ie, Re.lazy = function(j) {
    return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: ae };
  }, Re.memo = function(j, y) {
    return { $$typeof: M, type: j, compare: y === void 0 ? null : y };
  }, Re.startTransition = function(j) {
    var y = W.transition;
    W.transition = {};
    try {
      j();
    } finally {
      W.transition = y;
    }
  }, Re.unstable_act = ee, Re.useCallback = function(j, y) {
    return ue.current.useCallback(j, y);
  }, Re.useContext = function(j) {
    return ue.current.useContext(j);
  }, Re.useDebugValue = function() {
  }, Re.useDeferredValue = function(j) {
    return ue.current.useDeferredValue(j);
  }, Re.useEffect = function(j, y) {
    return ue.current.useEffect(j, y);
  }, Re.useId = function() {
    return ue.current.useId();
  }, Re.useImperativeHandle = function(j, y, te) {
    return ue.current.useImperativeHandle(j, y, te);
  }, Re.useInsertionEffect = function(j, y) {
    return ue.current.useInsertionEffect(j, y);
  }, Re.useLayoutEffect = function(j, y) {
    return ue.current.useLayoutEffect(j, y);
  }, Re.useMemo = function(j, y) {
    return ue.current.useMemo(j, y);
  }, Re.useReducer = function(j, y, te) {
    return ue.current.useReducer(j, y, te);
  }, Re.useRef = function(j) {
    return ue.current.useRef(j);
  }, Re.useState = function(j) {
    return ue.current.useState(j);
  }, Re.useSyncExternalStore = function(j, y, te) {
    return ue.current.useSyncExternalStore(j, y, te);
  }, Re.useTransition = function() {
    return ue.current.useTransition();
  }, Re.version = "18.3.1", Re;
}
var jd;
function Ko() {
  return jd || (jd = 1, ho.exports = Bm()), ho.exports;
}
var xd;
function Vm() {
  if (xd) return Qr;
  xd = 1;
  var s = Ko(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, S, M) {
    var v, N = {}, T = null, L = null;
    M !== void 0 && (T = "" + M), S.key !== void 0 && (T = "" + S.key), S.ref !== void 0 && (L = S.ref);
    for (v in S) c.call(S, v) && !f.hasOwnProperty(v) && (N[v] = S[v]);
    if (m && m.defaultProps) for (v in S = m.defaultProps, S) N[v] === void 0 && (N[v] = S[v]);
    return { $$typeof: a, type: m, key: T, ref: L, props: N, _owner: d.current };
  }
  return Qr.Fragment = o, Qr.jsx = p, Qr.jsxs = p, Qr;
}
var Sd;
function Km() {
  return Sd || (Sd = 1, fo.exports = Vm()), fo.exports;
}
var r = Km(), P = Ko(), ma = {}, mo = { exports: {} }, zt = {}, po = { exports: {} }, vo = {};
var wd;
function Um() {
  return wd || (wd = 1, (function(s) {
    function a(W, le) {
      var ee = W.length;
      W.push(le);
      e: for (; 0 < ee; ) {
        var j = ee - 1 >>> 1, y = W[j];
        if (0 < d(y, le)) W[j] = le, W[ee] = y, ee = j;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var le = W[0], ee = W.pop();
      if (ee !== le) {
        W[0] = ee;
        e: for (var j = 0, y = W.length, te = y >>> 1; j < te; ) {
          var he = 2 * (j + 1) - 1, Se = W[he], G = he + 1, V = W[G];
          if (0 > d(Se, ee)) G < y && 0 > d(V, Se) ? (W[j] = V, W[G] = ee, j = G) : (W[j] = Se, W[he] = ee, j = he);
          else if (G < y && 0 > d(V, ee)) W[j] = V, W[G] = ee, j = G;
          else break e;
        }
      }
      return le;
    }
    function d(W, le) {
      var ee = W.sortIndex - le.sortIndex;
      return ee !== 0 ? ee : W.id - le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      s.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      s.unstable_now = function() {
        return p.now() - m;
      };
    }
    var S = [], M = [], v = 1, N = null, T = 3, L = !1, O = !1, E = !1, x = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(W) {
      for (var le = o(M); le !== null; ) {
        if (le.callback === null) c(M);
        else if (le.startTime <= W) c(M), le.sortIndex = le.expirationTime, a(S, le);
        else break;
        le = o(M);
      }
    }
    function $(W) {
      if (E = !1, K(W), !O) if (o(S) !== null) O = !0, ae(H);
      else {
        var le = o(M);
        le !== null && ue($, le.startTime - W);
      }
    }
    function H(W, le) {
      O = !1, E && (E = !1, I(z), z = -1), L = !0;
      var ee = T;
      try {
        for (K(le), N = o(S); N !== null && (!(N.expirationTime > le) || W && !ke()); ) {
          var j = N.callback;
          if (typeof j == "function") {
            N.callback = null, T = N.priorityLevel;
            var y = j(N.expirationTime <= le);
            le = s.unstable_now(), typeof y == "function" ? N.callback = y : N === o(S) && c(S), K(le);
          } else c(S);
          N = o(S);
        }
        if (N !== null) var te = !0;
        else {
          var he = o(M);
          he !== null && ue($, he.startTime - le), te = !1;
        }
        return te;
      } finally {
        N = null, T = ee, L = !1;
      }
    }
    var B = !1, _ = null, z = -1, J = 5, ie = -1;
    function ke() {
      return !(s.unstable_now() - ie < J);
    }
    function we() {
      if (_ !== null) {
        var W = s.unstable_now();
        ie = W;
        var le = !0;
        try {
          le = _(!0, W);
        } finally {
          le ? X() : (B = !1, _ = null);
        }
      } else B = !1;
    }
    var X;
    if (typeof A == "function") X = function() {
      A(we);
    };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), U = fe.port2;
      fe.port1.onmessage = we, X = function() {
        U.postMessage(null);
      };
    } else X = function() {
      x(we, 0);
    };
    function ae(W) {
      _ = W, B || (B = !0, X());
    }
    function ue(W, le) {
      z = x(function() {
        W(s.unstable_now());
      }, le);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      O || L || (O = !0, ae(H));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(S);
    }, s.unstable_next = function(W) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = T;
      }
      var ee = T;
      T = le;
      try {
        return W();
      } finally {
        T = ee;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(W, le) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var ee = T;
      T = W;
      try {
        return le();
      } finally {
        T = ee;
      }
    }, s.unstable_scheduleCallback = function(W, le, ee) {
      var j = s.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? j + ee : j) : ee = j, W) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = ee + y, W = { id: v++, callback: le, priorityLevel: W, startTime: ee, expirationTime: y, sortIndex: -1 }, ee > j ? (W.sortIndex = ee, a(M, W), o(S) === null && W === o(M) && (E ? (I(z), z = -1) : E = !0, ue($, ee - j))) : (W.sortIndex = y, a(S, W), O || L || (O = !0, ae(H))), W;
    }, s.unstable_shouldYield = ke, s.unstable_wrapCallback = function(W) {
      var le = T;
      return function() {
        var ee = T;
        T = le;
        try {
          return W.apply(this, arguments);
        } finally {
          T = ee;
        }
      };
    };
  })(vo)), vo;
}
var Nd;
function Hm() {
  return Nd || (Nd = 1, po.exports = Um()), po.exports;
}
var Ed;
function Gm() {
  if (Ed) return zt;
  Ed = 1;
  var s = Ko(), a = Hm();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, N = {};
  function T(e) {
    return S.call(N, e) ? !0 : S.call(v, e) ? !1 : M.test(e) ? N[e] = !0 : (v[e] = !0, !1);
  }
  function L(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, n, i) {
    if (t === null || typeof t > "u" || L(e, t, n, i)) return !0;
    if (i) return !1;
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
  function E(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new E(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    x[t] = new E(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new E(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new E(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new E(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new E(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      A
    );
    x[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, A);
    x[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, A);
    x[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function K(e, t, n, i) {
    var l = x.hasOwnProperty(t) ? x[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, l, i) && (n = null), i || l === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var $ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = /* @__PURE__ */ Symbol.for("react.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), z = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), ie = /* @__PURE__ */ Symbol.for("react.provider"), ke = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, j;
  function y(e) {
    if (j === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      j = t && t[1] || "";
    }
    return `
` + j + e;
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
        } catch (F) {
          var i = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          i = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          i = F;
        }
        e();
      }
    } catch (F) {
      if (F && i && typeof F.stack == "string") {
        for (var l = F.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var g = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
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
      case _:
        return "Fragment";
      case B:
        return "Portal";
      case J:
        return "Profiler";
      case z:
        return "StrictMode";
      case X:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ke:
        return (e.displayName || "Context") + ".Consumer";
      case ie:
        return (e._context.displayName || "Context") + ".Provider";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case U:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function V(e) {
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
        return t === z ? "StrictMode" : "Mode";
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
  function ne(e) {
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
  function C(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z(e) {
    var t = C(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(h) {
        i = "" + h, u.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(h) {
        i = "" + h;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function oe(e) {
    e._valueTracker || (e._valueTracker = Z(e));
  }
  function ce(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = C(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function me(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ye(e, t) {
    var n = t.checked;
    return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Me(e, t) {
    t = t.checked, t != null && K(e, "checked", t, !1);
  }
  function Ie(e, t) {
    Me(e, t);
    var n = ne(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ye(e, t, n) {
    (t !== "number" || me(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function Xe(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ne(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Ge(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ne(n) };
  }
  function Ve(e, t) {
    var n = ne(t.value), i = ne(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Yt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nt, ln = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Nt = Nt || document.createElement("div"), Nt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Nt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Jt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xt = {
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
  }, _t = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xt).forEach(function(e) {
    _t.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xt[t] = Xt[e];
    });
  });
  function Ne(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xt.hasOwnProperty(e) && Xt[e] ? ("" + t).trim() : t + "px";
  }
  function Vt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ne(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Te = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pe(e, t) {
    if (t) {
      if (Te[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Le(e, t) {
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
  var He = null;
  function st(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Lt = null, vt = null, Zt = null;
  function En(e) {
    if (e = Lr(e)) {
      if (typeof Lt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = _s(t), Lt(e.stateNode, e.type, t));
    }
  }
  function vn(e) {
    vt ? Zt ? Zt.push(e) : Zt = [e] : vt = e;
  }
  function kn() {
    if (vt) {
      var e = vt, t = Zt;
      if (Zt = vt = null, En(e), t) for (e = 0; e < t.length; e++) En(t[e]);
    }
  }
  function ss(e, t) {
    return e(t);
  }
  function $e() {
  }
  var et = !1;
  function Ze(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return ss(e, t, n);
    } finally {
      et = !1, (vt !== null || Zt !== null) && ($e(), kn());
    }
  }
  function ct(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = _s(n);
    if (i === null) return null;
    n = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Kt = !1;
  if (m) try {
    var qt = {};
    Object.defineProperty(qt, "passive", { get: function() {
      Kt = !0;
    } }), window.addEventListener("test", qt, qt), window.removeEventListener("test", qt, qt);
  } catch {
    Kt = !1;
  }
  function Ai(e, t, n, i, l, u, h, k, g) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Cn = !1, Dn = null, di = !1, dr = null, fi = { onError: function(e) {
    Cn = !0, Dn = e;
  } };
  function fr(e, t, n, i, l, u, h, k, g) {
    Cn = !1, Dn = null, Ai.apply(fi, arguments);
  }
  function as(e, t, n, i, l, u, h, k, g) {
    if (fr.apply(this, arguments), Cn) {
      if (Cn) {
        var F = Dn;
        Cn = !1, Dn = null;
      } else throw Error(o(198));
      di || (di = !0, dr = F);
    }
  }
  function Tn(e) {
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
  function ls(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function jt(e) {
    if (Tn(e) !== e) throw Error(o(188));
  }
  function Pa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (i = l.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return jt(l), e;
          if (u === i) return jt(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) n = l, i = u;
      else {
        for (var h = !1, k = l.child; k; ) {
          if (k === n) {
            h = !0, n = l, i = u;
            break;
          }
          if (k === i) {
            h = !0, i = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!h) {
          for (k = u.child; k; ) {
            if (k === n) {
              h = !0, n = u, i = l;
              break;
            }
            if (k === i) {
              h = !0, i = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function hr(e) {
    return e = Pa(e), e !== null ? os(e) : null;
  }
  function os(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = os(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var us = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, zn = a.unstable_shouldYield, D = a.unstable_requestPaint, se = a.unstable_now, De = a.unstable_getCurrentPriorityLevel, Rt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, _n = a.unstable_NormalPriority, mr = a.unstable_LowPriority, Bn = a.unstable_IdlePriority, cs = null, yn = null;
  function th(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var on = Math.clz32 ? Math.clz32 : rh, nh = Math.log, ih = Math.LN2;
  function rh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nh(e) / ih | 0) | 0;
  }
  var ds = 64, fs = 4194304;
  function pr(e) {
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
  function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = pr(k) : (u &= h, u !== 0 && (i = pr(u)));
    } else h = n & ~l, h !== 0 ? i = pr(h) : u !== 0 && (i = pr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - on(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function sh(e, t) {
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
  function ah(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - on(u), k = 1 << h, g = l[h];
      g === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = sh(k, t)) : g <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function ba(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = ds;
    return ds <<= 1, (ds & 4194240) === 0 && (ds = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
  }
  function lh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - on(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Ra(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - on(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var We = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, Oa, qo, eu, tu, $a = !1, ms = [], Vn = null, Kn = null, Un = null, kr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Hn = [], oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nu(e, t) {
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
        kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yr.delete(t.pointerId);
    }
  }
  function gr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && Oa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function uh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Vn = gr(Vn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = gr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Un = gr(Un, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return kr.set(u, gr(kr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, yr.set(u, gr(yr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function iu(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ls(n), t !== null) {
            e.blockedOn = t, tu(e.priority, function() {
              qo(n);
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
  function ps(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        He = i, n.target.dispatchEvent(i), He = null;
      } else return t = Lr(n), t !== null && Oa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    ps(e) && n.delete(t);
  }
  function ch() {
    $a = !1, Vn !== null && ps(Vn) && (Vn = null), Kn !== null && ps(Kn) && (Kn = null), Un !== null && ps(Un) && (Un = null), kr.forEach(ru), yr.forEach(ru);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $a || ($a = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, ch)));
  }
  function xr(e) {
    function t(l) {
      return jr(l, e);
    }
    if (0 < ms.length) {
      jr(ms[0], e);
      for (var n = 1; n < ms.length; n++) {
        var i = ms[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Vn !== null && jr(Vn, e), Kn !== null && jr(Kn, e), Un !== null && jr(Un, e), kr.forEach(t), yr.forEach(t), n = 0; n < Hn.length; n++) i = Hn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) iu(n), n.blockedOn === null && Hn.shift();
  }
  var Pi = $.ReactCurrentBatchConfig, vs = !0;
  function dh(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 1, Fa(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function fh(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 4, Fa(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function Fa(e, t, n, i) {
    if (vs) {
      var l = Ia(e, t, n, i);
      if (l === null) tl(e, t, i, ks, n), nu(e, i);
      else if (uh(l, e, t, n, i)) i.stopPropagation();
      else if (nu(e, i), t & 4 && -1 < oh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Lr(l);
          if (u !== null && Zo(u), u = Ia(e, t, n, i), u === null && tl(e, t, i, ks, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else tl(e, t, i, null, n);
    }
  }
  var ks = null;
  function Ia(e, t, n, i) {
    if (ks = null, e = st(i), e = hi(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ls(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ks = e, null;
  }
  function su(e) {
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
        switch (De()) {
          case Rt:
            return 1;
          case dt:
            return 4;
          case _n:
          case mr:
            return 16;
          case Bn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Da = null, ys = null;
  function au() {
    if (ys) return ys;
    var e, t = Da, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return ys = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function gs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function js() {
    return !0;
  }
  function lu() {
    return !1;
  }
  function Ut(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? js : lu, this.isPropagationStopped = lu, this;
    }
    return ee(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = js);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = js);
    }, persist: function() {
    }, isPersistent: js }), t;
  }
  var bi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, za = Ut(bi), Sr = ee({}, bi, { view: 0, detail: 0 }), hh = Ut(Sr), Ba, Va, wr, xs = ee({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ua, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Ba = e.screenX - wr.screenX, Va = e.screenY - wr.screenY) : Va = Ba = 0, wr = e), Ba);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Va;
  } }), ou = Ut(xs), mh = ee({}, xs, { dataTransfer: 0 }), ph = Ut(mh), vh = ee({}, Sr, { relatedTarget: 0 }), Ka = Ut(vh), kh = ee({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yh = Ut(kh), gh = ee({}, bi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), jh = Ut(gh), xh = ee({}, bi, { data: 0 }), uu = Ut(xh), Sh = {
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
  }, wh = {
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
  }, Nh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nh[e]) ? !!t[e] : !1;
  }
  function Ua() {
    return Eh;
  }
  var Ch = ee({}, Sr, { key: function(e) {
    if (e.key) {
      var t = Sh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ua, charCode: function(e) {
    return e.type === "keypress" ? gs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Th = Ut(Ch), Mh = ee({}, xs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Ut(Mh), _h = ee({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ua }), Ah = Ut(_h), Ph = ee({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bh = Ut(Ph), Lh = ee({}, xs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rh = Ut(Lh), Oh = [9, 13, 27, 32], Ha = m && "CompositionEvent" in window, Nr = null;
  m && "documentMode" in document && (Nr = document.documentMode);
  var $h = m && "TextEvent" in window && !Nr, du = m && (!Ha || Nr && 8 < Nr && 11 >= Nr), fu = " ", hu = !1;
  function mu(e, t) {
    switch (e) {
      case "keyup":
        return Oh.indexOf(t.keyCode) !== -1;
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
  function pu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Li = !1;
  function Fh(e, t) {
    switch (e) {
      case "compositionend":
        return pu(t);
      case "keypress":
        return t.which !== 32 ? null : (hu = !0, fu);
      case "textInput":
        return e = t.data, e === fu && hu ? null : e;
      default:
        return null;
    }
  }
  function Ih(e, t) {
    if (Li) return e === "compositionend" || !Ha && mu(e, t) ? (e = au(), ys = Da = Gn = null, Li = !1, e) : null;
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
        return du && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dh[e.type] : t === "textarea";
  }
  function ku(e, t, n, i) {
    vn(i), t = Cs(t, "onChange"), 0 < t.length && (n = new za("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Er = null, Cr = null;
  function zh(e) {
    Ou(e, 0);
  }
  function Ss(e) {
    var t = Ii(e);
    if (ce(t)) return e;
  }
  function Bh(e, t) {
    if (e === "change") return t;
  }
  var yu = !1;
  if (m) {
    var Ga;
    if (m) {
      var Wa = "oninput" in document;
      if (!Wa) {
        var gu = document.createElement("div");
        gu.setAttribute("oninput", "return;"), Wa = typeof gu.oninput == "function";
      }
      Ga = Wa;
    } else Ga = !1;
    yu = Ga && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    Er && (Er.detachEvent("onpropertychange", xu), Cr = Er = null);
  }
  function xu(e) {
    if (e.propertyName === "value" && Ss(Cr)) {
      var t = [];
      ku(t, Cr, e, st(e)), Ze(zh, t);
    }
  }
  function Vh(e, t, n) {
    e === "focusin" ? (ju(), Er = t, Cr = n, Er.attachEvent("onpropertychange", xu)) : e === "focusout" && ju();
  }
  function Kh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ss(Cr);
  }
  function Uh(e, t) {
    if (e === "click") return Ss(t);
  }
  function Hh(e, t) {
    if (e === "input" || e === "change") return Ss(t);
  }
  function Gh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : Gh;
  function Tr(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!S.call(t, l) || !un(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Su(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wu(e, t) {
    var n = Su(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t) return { node: n, offset: t - e };
        e = i;
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
      n = Su(n);
    }
  }
  function Nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Eu() {
    for (var e = window, t = me(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = me(e.document);
    }
    return t;
  }
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Wh(e) {
    var t = Eu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Qa(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = wu(n, u);
          var h = wu(
            n,
            i
          );
          l && h && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > i ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Qh = m && "documentMode" in document && 11 >= document.documentMode, Ri = null, Ya = null, Mr = null, Ja = !1;
  function Cu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ja || Ri == null || Ri !== me(i) || (i = Ri, "selectionStart" in i && Qa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Mr && Tr(Mr, i) || (Mr = i, i = Cs(Ya, "onSelect"), 0 < i.length && (t = new za("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Ri)));
  }
  function ws(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, Xa = {}, Tu = {};
  m && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Ns(e) {
    if (Xa[e]) return Xa[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return Xa[e] = t[n];
    return e;
  }
  var Mu = Ns("animationend"), _u = Ns("animationiteration"), Au = Ns("animationstart"), Pu = Ns("transitionend"), bu = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    bu.set(e, t), f(t, [e]);
  }
  for (var Za = 0; Za < Lu.length; Za++) {
    var qa = Lu[Za], Yh = qa.toLowerCase(), Jh = qa[0].toUpperCase() + qa.slice(1);
    Wn(Yh, "on" + Jh);
  }
  Wn(Mu, "onAnimationEnd"), Wn(_u, "onAnimationIteration"), Wn(Au, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Pu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
  function Ru(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, as(i, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], g = k.instance, F = k.currentTarget;
          if (k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ru(l, k, F), u = g;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], g = k.instance, F = k.currentTarget, k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ru(l, k, F), u = g;
        }
      }
    }
    if (di) throw e = dr, di = !1, dr = null, e;
  }
  function tt(e, t) {
    var n = t[ll];
    n === void 0 && (n = t[ll] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || ($u(t, e, 2, !1), n.add(i));
  }
  function el(e, t, n) {
    var i = 0;
    t && (i |= 4), $u(n, e, i, t);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[Es]) {
      e[Es] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Xh.has(n) || el(n, !1, e), el(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Es] || (t[Es] = !0, el("selectionchange", !1, t));
    }
  }
  function $u(e, t, n, i) {
    switch (su(t)) {
      case 1:
        var l = dh;
        break;
      case 4:
        l = fh;
        break;
      default:
        l = Fa;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function tl(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var g = h.tag;
          if ((g === 3 || g === 4) && (g = h.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = hi(k), h === null) return;
          if (g = h.tag, g === 5 || g === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Ze(function() {
      var F = u, Y = st(n), q = [];
      e: {
        var Q = bu.get(e);
        if (Q !== void 0) {
          var de = za, ve = e;
          switch (e) {
            case "keypress":
              if (gs(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Th;
              break;
            case "focusin":
              ve = "focus", de = Ka;
              break;
            case "focusout":
              ve = "blur", de = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ka;
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
              de = ou;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = ph;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Ah;
              break;
            case Mu:
            case _u:
            case Au:
              de = yh;
              break;
            case Pu:
              de = bh;
              break;
            case "scroll":
              de = hh;
              break;
            case "wheel":
              de = Rh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = jh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = cu;
          }
          var je = (t & 4) !== 0, ft = !je && e === "scroll", b = je ? Q !== null ? Q + "Capture" : null : Q;
          je = [];
          for (var w = F, R; w !== null; ) {
            R = w;
            var re = R.stateNode;
            if (R.tag === 5 && re !== null && (R = re, b !== null && (re = ct(w, b), re != null && je.push(Pr(w, re, R)))), ft) break;
            w = w.return;
          }
          0 < je.length && (Q = new de(Q, ve, null, n, Y), q.push({ event: Q, listeners: je }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== He && (ve = n.relatedTarget || n.fromElement) && (hi(ve) || ve[An])) break e;
          if ((de || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (ve = n.relatedTarget || n.toElement, de = F, ve = ve ? hi(ve) : null, ve !== null && (ft = Tn(ve), ve !== ft || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (de = null, ve = F), de !== ve)) {
            if (je = ou, re = "onMouseLeave", b = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (je = cu, re = "onPointerLeave", b = "onPointerEnter", w = "pointer"), ft = de == null ? Q : Ii(de), R = ve == null ? Q : Ii(ve), Q = new je(re, w + "leave", de, n, Y), Q.target = ft, Q.relatedTarget = R, re = null, hi(Y) === F && (je = new je(b, w + "enter", ve, n, Y), je.target = R, je.relatedTarget = ft, re = je), ft = re, de && ve) t: {
              for (je = de, b = ve, w = 0, R = je; R; R = $i(R)) w++;
              for (R = 0, re = b; re; re = $i(re)) R++;
              for (; 0 < w - R; ) je = $i(je), w--;
              for (; 0 < R - w; ) b = $i(b), R--;
              for (; w--; ) {
                if (je === b || b !== null && je === b.alternate) break t;
                je = $i(je), b = $i(b);
              }
              je = null;
            }
            else je = null;
            de !== null && Fu(q, Q, de, je, !1), ve !== null && ft !== null && Fu(q, ft, ve, je, !0);
          }
        }
        e: {
          if (Q = F ? Ii(F) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var xe = Bh;
          else if (vu(Q)) if (yu) xe = Hh;
          else {
            xe = Kh;
            var Ee = Vh;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (xe = Uh);
          if (xe && (xe = xe(e, F))) {
            ku(q, xe, n, Y);
            break e;
          }
          Ee && Ee(e, Q, F), e === "focusout" && (Ee = Q._wrapperState) && Ee.controlled && Q.type === "number" && Ye(Q, "number", Q.value);
        }
        switch (Ee = F ? Ii(F) : window, e) {
          case "focusin":
            (vu(Ee) || Ee.contentEditable === "true") && (Ri = Ee, Ya = F, Mr = null);
            break;
          case "focusout":
            Mr = Ya = Ri = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ja = !1, Cu(q, n, Y);
            break;
          case "selectionchange":
            if (Qh) break;
          case "keydown":
          case "keyup":
            Cu(q, n, Y);
        }
        var Ce;
        if (Ha) e: {
          switch (e) {
            case "compositionstart":
              var _e = "onCompositionStart";
              break e;
            case "compositionend":
              _e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _e = "onCompositionUpdate";
              break e;
          }
          _e = void 0;
        }
        else Li ? mu(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (du && n.locale !== "ko" && (Li || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Li && (Ce = au()) : (Gn = Y, Da = "value" in Gn ? Gn.value : Gn.textContent, Li = !0)), Ee = Cs(F, _e), 0 < Ee.length && (_e = new uu(_e, e, null, n, Y), q.push({ event: _e, listeners: Ee }), Ce ? _e.data = Ce : (Ce = pu(n), Ce !== null && (_e.data = Ce)))), (Ce = $h ? Fh(e, n) : Ih(e, n)) && (F = Cs(F, "onBeforeInput"), 0 < F.length && (Y = new uu("onBeforeInput", "beforeinput", null, n, Y), q.push({ event: Y, listeners: F }), Y.data = Ce));
      }
      Ou(q, t);
    });
  }
  function Pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Cs(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && i.unshift(Pr(e, u, l)), u = ct(e, t), u != null && i.push(Pr(e, u, l))), e = e.return;
    }
    return i;
  }
  function $i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, g = k.alternate, F = k.stateNode;
      if (g !== null && g === i) break;
      k.tag === 5 && F !== null && (k = F, l ? (g = ct(n, u), g != null && h.unshift(Pr(n, g, k))) : l || (g = ct(n, u), g != null && h.push(Pr(n, g, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Zh = /\r\n?/g, qh = /\u0000|\uFFFD/g;
  function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zh, `
`).replace(qh, "");
  }
  function Ts(e, t, n) {
    if (t = Iu(t), Iu(e) !== t && n) throw Error(o(425));
  }
  function Ms() {
  }
  var nl = null, il = null;
  function rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sl = typeof setTimeout == "function" ? setTimeout : void 0, em = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
    return Du.resolve(null).then(e).catch(nm);
  } : sl;
  function nm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function al(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), xr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    xr(t);
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
  function zu(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, br = "__reactProps$" + Fi, An = "__reactContainer$" + Fi, ll = "__reactEvents$" + Fi, im = "__reactListeners$" + Fi, rm = "__reactHandles$" + Fi;
  function hi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[An] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zu(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = zu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Lr(e) {
    return e = e[gn] || e[An], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _s(e) {
    return e[br] || null;
  }
  var ol = [], Di = -1;
  function Yn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = ol[Di], ol[Di] = null, Di--);
  }
  function qe(e, t) {
    Di++, ol[Di] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), Ot = Yn(!1), mi = Jn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $t(e) {
    return e = e.childContextTypes, e != null;
  }
  function As() {
    nt(Ot), nt(Et);
  }
  function Bu(e, t, n) {
    if (Et.current !== Jn) throw Error(o(168));
    qe(Et, t), qe(Ot, n);
  }
  function Vu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, V(e) || "Unknown", l));
    return ee({}, n, i);
  }
  function Ps(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, mi = Et.current, qe(Et, e), qe(Ot, Ot.current), !0;
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Vu(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, nt(Ot), nt(Et), qe(Et, e)) : nt(Ot), qe(Ot, n);
  }
  var Pn = null, bs = !1, ul = !1;
  function Uu(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function sm(e) {
    bs = !0, Uu(e);
  }
  function Xn() {
    if (!ul && Pn !== null) {
      ul = !0;
      var e = 0, t = We;
      try {
        var n = Pn;
        for (We = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        Pn = null, bs = !1;
      } catch (l) {
        throw Pn !== null && (Pn = Pn.slice(e + 1)), us(Rt, Xn), l;
      } finally {
        We = t, ul = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Ls = null, Rs = 0, en = [], tn = 0, pi = null, bn = 1, Ln = "";
  function vi(e, t) {
    Bi[Vi++] = Rs, Bi[Vi++] = Ls, Ls = e, Rs = t;
  }
  function Hu(e, t, n) {
    en[tn++] = bn, en[tn++] = Ln, en[tn++] = pi, pi = e;
    var i = bn;
    e = Ln;
    var l = 32 - on(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - on(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, bn = 1 << 32 - on(t) + l | n << l | i, Ln = u + e;
    } else bn = 1 << u | n << l | i, Ln = e;
  }
  function cl(e) {
    e.return !== null && (vi(e, 1), Hu(e, 1, 0));
  }
  function dl(e) {
    for (; e === Ls; ) Ls = Bi[--Vi], Bi[Vi] = null, Rs = Bi[--Vi], Bi[Vi] = null;
    for (; e === pi; ) pi = en[--tn], en[tn] = null, Ln = en[--tn], en[tn] = null, bn = en[--tn], en[tn] = null;
  }
  var Ht = null, Gt = null, rt = !1, cn = null;
  function Gu(e, t) {
    var n = an(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: bn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ht = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function hl(e) {
    if (rt) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Wu(e, t)) {
          if (fl(e)) throw Error(o(418));
          t = Qn(n.nextSibling);
          var i = Ht;
          t && Wu(e, t) ? Gu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Ht = e);
        }
      } else {
        if (fl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Ht = e;
      }
    }
  }
  function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ht = e;
  }
  function Os(e) {
    if (e !== Ht) return !1;
    if (!rt) return Qu(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (fl(e)) throw Yu(), Error(o(418));
      for (; t; ) Gu(e, t), t = Qn(t.nextSibling);
    }
    if (Qu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Gt = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Ht ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yu() {
    for (var e = Gt; e; ) e = Qn(e.nextSibling);
  }
  function Ki() {
    Gt = Ht = null, rt = !1;
  }
  function ml(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var am = $.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(o(147, e));
        var l = i, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var k = l.refs;
          h === null ? delete k[u] : k[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function $s(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xu(e) {
    function t(b, w) {
      if (e) {
        var R = b.deletions;
        R === null ? (b.deletions = [w], b.flags |= 16) : R.push(w);
      }
    }
    function n(b, w) {
      if (!e) return null;
      for (; w !== null; ) t(b, w), w = w.sibling;
      return null;
    }
    function i(b, w) {
      for (b = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? b.set(w.key, w) : b.set(w.index, w), w = w.sibling;
      return b;
    }
    function l(b, w) {
      return b = si(b, w), b.index = 0, b.sibling = null, b;
    }
    function u(b, w, R) {
      return b.index = R, e ? (R = b.alternate, R !== null ? (R = R.index, R < w ? (b.flags |= 2, w) : R) : (b.flags |= 2, w)) : (b.flags |= 1048576, w);
    }
    function h(b) {
      return e && b.alternate === null && (b.flags |= 2), b;
    }
    function k(b, w, R, re) {
      return w === null || w.tag !== 6 ? (w = so(R, b.mode, re), w.return = b, w) : (w = l(w, R), w.return = b, w);
    }
    function g(b, w, R, re) {
      var xe = R.type;
      return xe === _ ? Y(b, w, R.props.children, re, R.key) : w !== null && (w.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Ju(xe) === w.type) ? (re = l(w, R.props), re.ref = Rr(b, w, R), re.return = b, re) : (re = aa(R.type, R.key, R.props, null, b.mode, re), re.ref = Rr(b, w, R), re.return = b, re);
    }
    function F(b, w, R, re) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== R.containerInfo || w.stateNode.implementation !== R.implementation ? (w = ao(R, b.mode, re), w.return = b, w) : (w = l(w, R.children || []), w.return = b, w);
    }
    function Y(b, w, R, re, xe) {
      return w === null || w.tag !== 7 ? (w = Ni(R, b.mode, re, xe), w.return = b, w) : (w = l(w, R), w.return = b, w);
    }
    function q(b, w, R) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = so("" + w, b.mode, R), w.return = b, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case H:
            return R = aa(w.type, w.key, w.props, null, b.mode, R), R.ref = Rr(b, null, w), R.return = b, R;
          case B:
            return w = ao(w, b.mode, R), w.return = b, w;
          case ae:
            var re = w._init;
            return q(b, re(w._payload), R);
        }
        if (Ge(w) || le(w)) return w = Ni(w, b.mode, R, null), w.return = b, w;
        $s(b, w);
      }
      return null;
    }
    function Q(b, w, R, re) {
      var xe = w !== null ? w.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return xe !== null ? null : k(b, w, "" + R, re);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return R.key === xe ? g(b, w, R, re) : null;
          case B:
            return R.key === xe ? F(b, w, R, re) : null;
          case ae:
            return xe = R._init, Q(
              b,
              w,
              xe(R._payload),
              re
            );
        }
        if (Ge(R) || le(R)) return xe !== null ? null : Y(b, w, R, re, null);
        $s(b, R);
      }
      return null;
    }
    function de(b, w, R, re, xe) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return b = b.get(R) || null, k(w, b, "" + re, xe);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case H:
            return b = b.get(re.key === null ? R : re.key) || null, g(w, b, re, xe);
          case B:
            return b = b.get(re.key === null ? R : re.key) || null, F(w, b, re, xe);
          case ae:
            var Ee = re._init;
            return de(b, w, R, Ee(re._payload), xe);
        }
        if (Ge(re) || le(re)) return b = b.get(R) || null, Y(w, b, re, xe, null);
        $s(w, re);
      }
      return null;
    }
    function ve(b, w, R, re) {
      for (var xe = null, Ee = null, Ce = w, _e = w = 0, gt = null; Ce !== null && _e < R.length; _e++) {
        Ce.index > _e ? (gt = Ce, Ce = null) : gt = Ce.sibling;
        var Ke = Q(b, Ce, R[_e], re);
        if (Ke === null) {
          Ce === null && (Ce = gt);
          break;
        }
        e && Ce && Ke.alternate === null && t(b, Ce), w = u(Ke, w, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke, Ce = gt;
      }
      if (_e === R.length) return n(b, Ce), rt && vi(b, _e), xe;
      if (Ce === null) {
        for (; _e < R.length; _e++) Ce = q(b, R[_e], re), Ce !== null && (w = u(Ce, w, _e), Ee === null ? xe = Ce : Ee.sibling = Ce, Ee = Ce);
        return rt && vi(b, _e), xe;
      }
      for (Ce = i(b, Ce); _e < R.length; _e++) gt = de(Ce, b, _e, R[_e], re), gt !== null && (e && gt.alternate !== null && Ce.delete(gt.key === null ? _e : gt.key), w = u(gt, w, _e), Ee === null ? xe = gt : Ee.sibling = gt, Ee = gt);
      return e && Ce.forEach(function(ai) {
        return t(b, ai);
      }), rt && vi(b, _e), xe;
    }
    function je(b, w, R, re) {
      var xe = le(R);
      if (typeof xe != "function") throw Error(o(150));
      if (R = xe.call(R), R == null) throw Error(o(151));
      for (var Ee = xe = null, Ce = w, _e = w = 0, gt = null, Ke = R.next(); Ce !== null && !Ke.done; _e++, Ke = R.next()) {
        Ce.index > _e ? (gt = Ce, Ce = null) : gt = Ce.sibling;
        var ai = Q(b, Ce, Ke.value, re);
        if (ai === null) {
          Ce === null && (Ce = gt);
          break;
        }
        e && Ce && ai.alternate === null && t(b, Ce), w = u(ai, w, _e), Ee === null ? xe = ai : Ee.sibling = ai, Ee = ai, Ce = gt;
      }
      if (Ke.done) return n(
        b,
        Ce
      ), rt && vi(b, _e), xe;
      if (Ce === null) {
        for (; !Ke.done; _e++, Ke = R.next()) Ke = q(b, Ke.value, re), Ke !== null && (w = u(Ke, w, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke);
        return rt && vi(b, _e), xe;
      }
      for (Ce = i(b, Ce); !Ke.done; _e++, Ke = R.next()) Ke = de(Ce, b, _e, Ke.value, re), Ke !== null && (e && Ke.alternate !== null && Ce.delete(Ke.key === null ? _e : Ke.key), w = u(Ke, w, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke);
      return e && Ce.forEach(function(Dm) {
        return t(b, Dm);
      }), rt && vi(b, _e), xe;
    }
    function ft(b, w, R, re) {
      if (typeof R == "object" && R !== null && R.type === _ && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            e: {
              for (var xe = R.key, Ee = w; Ee !== null; ) {
                if (Ee.key === xe) {
                  if (xe = R.type, xe === _) {
                    if (Ee.tag === 7) {
                      n(b, Ee.sibling), w = l(Ee, R.props.children), w.return = b, b = w;
                      break e;
                    }
                  } else if (Ee.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Ju(xe) === Ee.type) {
                    n(b, Ee.sibling), w = l(Ee, R.props), w.ref = Rr(b, Ee, R), w.return = b, b = w;
                    break e;
                  }
                  n(b, Ee);
                  break;
                } else t(b, Ee);
                Ee = Ee.sibling;
              }
              R.type === _ ? (w = Ni(R.props.children, b.mode, re, R.key), w.return = b, b = w) : (re = aa(R.type, R.key, R.props, null, b.mode, re), re.ref = Rr(b, w, R), re.return = b, b = re);
            }
            return h(b);
          case B:
            e: {
              for (Ee = R.key; w !== null; ) {
                if (w.key === Ee) if (w.tag === 4 && w.stateNode.containerInfo === R.containerInfo && w.stateNode.implementation === R.implementation) {
                  n(b, w.sibling), w = l(w, R.children || []), w.return = b, b = w;
                  break e;
                } else {
                  n(b, w);
                  break;
                }
                else t(b, w);
                w = w.sibling;
              }
              w = ao(R, b.mode, re), w.return = b, b = w;
            }
            return h(b);
          case ae:
            return Ee = R._init, ft(b, w, Ee(R._payload), re);
        }
        if (Ge(R)) return ve(b, w, R, re);
        if (le(R)) return je(b, w, R, re);
        $s(b, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, w !== null && w.tag === 6 ? (n(b, w.sibling), w = l(w, R), w.return = b, b = w) : (n(b, w), w = so(R, b.mode, re), w.return = b, b = w), h(b)) : n(b, w);
    }
    return ft;
  }
  var Ui = Xu(!0), Zu = Xu(!1), Fs = Yn(null), Is = null, Hi = null, pl = null;
  function vl() {
    pl = Hi = Is = null;
  }
  function kl(e) {
    var t = Fs.current;
    nt(Fs), e._currentValue = t;
  }
  function yl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Is = e, pl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function nn(e) {
    var t = e._currentValue;
    if (pl !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Is === null) throw Error(o(308));
      Hi = e, Is.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var ki = null;
  function gl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Rn(e, i);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Rn(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, gl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Rn(e, n);
  }
  function Ds(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ra(e, n);
    }
  }
  function tc(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function zs(e, t, n, i) {
    var l = e.updateQueue;
    Zn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var g = k, F = g.next;
      g.next = null, h === null ? u = F : h.next = F, h = g;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, k = Y.lastBaseUpdate, k !== h && (k === null ? Y.firstBaseUpdate = F : k.next = F, Y.lastBaseUpdate = g));
    }
    if (u !== null) {
      var q = l.baseState;
      h = 0, Y = F = g = null, k = u;
      do {
        var Q = k.lane, de = k.eventTime;
        if ((i & Q) === Q) {
          Y !== null && (Y = Y.next = {
            eventTime: de,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, je = k;
            switch (Q = t, de = n, je.tag) {
              case 1:
                if (ve = je.payload, typeof ve == "function") {
                  q = ve.call(de, q, Q);
                  break e;
                }
                q = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = je.payload, Q = typeof ve == "function" ? ve.call(de, q, Q) : ve, Q == null) break e;
                q = ee({}, q, Q);
                break e;
              case 2:
                Zn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else de = { eventTime: de, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Y === null ? (F = Y = de, g = q) : Y = Y.next = de, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (g = q), l.baseState = g, l.firstBaseUpdate = F, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ji |= h, e.lanes = h, e.memoizedState = q;
    }
  }
  function nc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(o(191, l));
        l.call(i);
      }
    }
  }
  var Or = {}, jn = Yn(Or), $r = Yn(Or), Fr = Yn(Or);
  function yi(e) {
    if (e === Or) throw Error(o(174));
    return e;
  }
  function xl(e, t) {
    switch (qe(Fr, t), qe($r, e), qe(jn, Or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yt(t, e);
    }
    nt(jn), qe(jn, t);
  }
  function Wi() {
    nt(jn), nt($r), nt(Fr);
  }
  function ic(e) {
    yi(Fr.current);
    var t = yi(jn.current), n = Yt(t, e.type);
    t !== n && (qe($r, e), qe(jn, n));
  }
  function Sl(e) {
    $r.current === e && (nt(jn), nt($r));
  }
  var at = Yn(0);
  function Bs(e) {
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
  var wl = [];
  function Nl() {
    for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
    wl.length = 0;
  }
  var Vs = $.ReactCurrentDispatcher, El = $.ReactCurrentBatchConfig, gi = 0, lt = null, mt = null, kt = null, Ks = !1, Ir = !1, Dr = 0, lm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  function Tl(e, t, n, i, l, u) {
    if (gi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vs.current = e === null || e.memoizedState === null ? dm : fm, e = n(i, l), Ir) {
      u = 0;
      do {
        if (Ir = !1, Dr = 0, 25 <= u) throw Error(o(301));
        u += 1, kt = mt = null, t.updateQueue = null, Vs.current = hm, e = n(i, l);
      } while (Ir);
    }
    if (Vs.current = Gs, t = mt !== null && mt.next !== null, gi = 0, kt = mt = lt = null, Ks = !1, t) throw Error(o(300));
    return e;
  }
  function Ml() {
    var e = Dr !== 0;
    return Dr = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? lt.memoizedState = kt = e : kt = kt.next = e, kt;
  }
  function rn() {
    if (mt === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = mt.next;
    var t = kt === null ? lt.memoizedState : kt.next;
    if (t !== null) kt = t, mt = e;
    else {
      if (e === null) throw Error(o(310));
      mt = e, e = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, kt === null ? lt.memoizedState = kt = e : kt = kt.next = e;
    }
    return kt;
  }
  function zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _l(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = mt, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, g = null, F = u;
      do {
        var Y = F.lane;
        if ((gi & Y) === Y) g !== null && (g = g.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), i = F.hasEagerState ? F.eagerState : e(i, F.action);
        else {
          var q = {
            lane: Y,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          g === null ? (k = g = q, h = i) : g = g.next = q, lt.lanes |= Y, ji |= Y;
        }
        F = F.next;
      } while (F !== null && F !== u);
      g === null ? h = i : g.next = k, un(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = g, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, ji |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      un(u, t.memoizedState) || (Ft = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function rc() {
  }
  function sc(e, t) {
    var n = lt, i = rn(), l = t(), u = !un(i.memoizedState, l);
    if (u && (i.memoizedState = l, Ft = !0), i = i.queue, Pl(oc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Br(9, lc.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || ac(n, t, l);
    }
    return l;
  }
  function ac(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function lc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, uc(t) && cc(e);
  }
  function oc(e, t, n) {
    return n(function() {
      uc(t) && cc(e);
    });
  }
  function uc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !un(e, n);
    } catch {
      return !0;
    }
  }
  function cc(e) {
    var t = Rn(e, 1);
    t !== null && mn(t, e, 1, -1);
  }
  function dc(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cm.bind(null, lt, e), [t.memoizedState, e];
  }
  function Br(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function fc() {
    return rn().memoizedState;
  }
  function Us(e, t, n, i) {
    var l = xn();
    lt.flags |= e, l.memoizedState = Br(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Hs(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (mt !== null) {
      var h = mt.memoizedState;
      if (u = h.destroy, i !== null && Cl(i, h.deps)) {
        l.memoizedState = Br(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Br(1 | t, n, u, i);
  }
  function hc(e, t) {
    return Us(8390656, 8, e, t);
  }
  function Pl(e, t) {
    return Hs(2048, 8, e, t);
  }
  function mc(e, t) {
    return Hs(4, 2, e, t);
  }
  function pc(e, t) {
    return Hs(4, 4, e, t);
  }
  function vc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function kc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(4, 4, vc.bind(null, t, e), n);
  }
  function bl() {
  }
  function yc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function jc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (un(n, t) || (n = Jo(), lt.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function om(e, t) {
    var n = We;
    We = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = El.transition;
    El.transition = {};
    try {
      e(!1), t();
    } finally {
      We = n, El.transition = i;
    }
  }
  function xc() {
    return rn().memoizedState;
  }
  function um(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) wc(t, n);
    else if (n = qu(e, t, n, i), n !== null) {
      var l = Pt();
      mn(n, e, i, l), Nc(n, t, i);
    }
  }
  function cm(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Sc(e)) wc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, un(k, h)) {
          var g = t.interleaved;
          g === null ? (l.next = l, gl(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = qu(e, t, l, i), n !== null && (l = Pt(), mn(n, e, i, l), Nc(n, t, i));
    }
  }
  function Sc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function wc(e, t) {
    Ir = Ks = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ra(e, n);
    }
  }
  var Gs = { readContext: nn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, dm = { readContext: nn, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nn, useEffect: hc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Us(
      4194308,
      4,
      vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Us(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Us(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = xn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = um.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: dc, useDebugValue: bl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = dc(!1), t = e[0];
    return e = om.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = lt, l = xn();
    if (rt) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || ac(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, hc(oc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, Br(9, lc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = yt.identifierPrefix;
    if (rt) {
      var n = Ln, i = bn;
      n = (i & ~(1 << 32 - on(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fm = {
    readContext: nn,
    useCallback: yc,
    useContext: nn,
    useEffect: Pl,
    useImperativeHandle: kc,
    useInsertionEffect: mc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: _l,
    useRef: fc,
    useState: function() {
      return _l(zr);
    },
    useDebugValue: bl,
    useDeferredValue: function(e) {
      var t = rn();
      return jc(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = _l(zr)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1
  }, hm = { readContext: nn, useCallback: yc, useContext: nn, useEffect: Pl, useImperativeHandle: kc, useInsertionEffect: mc, useLayoutEffect: pc, useMemo: gc, useReducer: Al, useRef: fc, useState: function() {
    return Al(zr);
  }, useDebugValue: bl, useDeferredValue: function(e) {
    var t = rn();
    return mt === null ? t.memoizedState = e : jc(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(zr)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: sc, useId: xc, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ll(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ws = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Pt(), l = ii(e), u = On(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Pt(), l = ii(e), u = On(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (mn(t, e, i, n), Ds(t, e, i));
  } };
  function Ec(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, i) || !Tr(l, u) : !0;
  }
  function Cc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nn(u) : (l = $t(t) ? mi : Et.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Tc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
  }
  function Rl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, jl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nn(u) : (u = $t(t) ? mi : Et.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ll(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ws.enqueueReplaceState(l, l.state, null), zs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += Se(i), i = i.return;
      while (i);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ol(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function $l(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var mm = typeof WeakMap == "function" ? WeakMap : Map;
  function Mc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ea || (ea = !0, Xl = i), $l(e, t);
    }, n;
  }
  function _c(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        $l(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      $l(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Ac(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new mm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Mm.bind(null, e, t, n), t.then(e, e));
  }
  function Pc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function bc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var pm = $.ReactCurrentOwner, Ft = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Zu(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Lc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Tl(e, t, n, i, u, l), n = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && n && cl(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Rc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ro(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oc(e, t, u, i, l)) : (e = aa(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Tr, n(h, i) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = si(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Tr(u, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Fl(e, t, n, i, l);
  }
  function $c(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Ji, Wt), Wt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Wt), Wt |= i;
    return At(e, t, l, n), t.child;
  }
  function Fc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fl(e, t, n, i, l) {
    var u = $t(n) ? mi : Et.current;
    return u = zi(t, u), Gi(t, l), n = Tl(e, t, n, i, u, l), i = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && i && cl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Ic(e, t, n, i, l) {
    if ($t(n)) {
      var u = !0;
      Ps(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Ys(e, t), Cc(t, n, i), Rl(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var g = h.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = nn(F) : (F = $t(n) ? mi : Et.current, F = zi(t, F));
      var Y = n.getDerivedStateFromProps, q = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || g !== F) && Tc(t, h, i, F), Zn = !1;
      var Q = t.memoizedState;
      h.state = Q, zs(t, i, h, l), g = t.memoizedState, k !== i || Q !== g || Ot.current || Zn ? (typeof Y == "function" && (Ll(t, n, Y, i), g = t.memoizedState), (k = Zn || Ec(t, n, k, i, Q, g, F)) ? (q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = g), h.props = i, h.state = g, h.context = F, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ec(e, t), k = t.memoizedProps, F = t.type === t.elementType ? k : dn(t.type, k), h.props = F, q = t.pendingProps, Q = h.context, g = n.contextType, typeof g == "object" && g !== null ? g = nn(g) : (g = $t(n) ? mi : Et.current, g = zi(t, g));
      var de = n.getDerivedStateFromProps;
      (Y = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== q || Q !== g) && Tc(t, h, i, g), Zn = !1, Q = t.memoizedState, h.state = Q, zs(t, i, h, l);
      var ve = t.memoizedState;
      k !== q || Q !== ve || Ot.current || Zn ? (typeof de == "function" && (Ll(t, n, de, i), ve = t.memoizedState), (F = Zn || Ec(t, n, F, i, Q, ve, g) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ve, g), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ve, g)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), h.props = i, h.state = ve, h.context = g, i = F) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Il(e, t, n, i, u, l);
  }
  function Il(e, t, n, i, l, u) {
    Fc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Ku(t, n, !1), $n(e, t, u);
    i = t.stateNode, pm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : At(e, t, k, u), t.memoizedState = i.state, l && Ku(t, n, !0), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? Bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bu(e, t.context, !1), xl(e, t.containerInfo);
  }
  function zc(e, t, n, i, l) {
    return Ki(), ml(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return hl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = la(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = zl(n), t.memoizedState = Dl, e) : Bl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return vm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var g = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = g, t.deletions = null) : (i = si(l, g), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = si(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? zl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Dl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Bl(e, t) {
    return t = la({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Qs(e, t, n, i) {
    return i !== null && ml(i), Ui(t, e.child, null, n), e = Bl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ol(Error(o(422))), Qs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = la({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = zl(h), t.memoizedState = Dl, u);
    if ((t.mode & 1) === 0) return Qs(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = Ol(u, i, void 0), Qs(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Ft || k) {
      if (i = yt, i !== null) {
        switch (h & -h) {
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Rn(e, l), mn(i, e, l, -1));
      }
      return io(), i = Ol(Error(o(421))), Qs(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _m.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Gt = Qn(l.nextSibling), Ht = t, rt = !0, cn = null, e !== null && (en[tn++] = bn, en[tn++] = Ln, en[tn++] = pi, bn = e.id, Ln = e.overflow, pi = t), t = Bl(t, i.children), t.flags |= 4096, t);
  }
  function Vc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), yl(e.return, t, n);
  }
  function Vl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (At(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vc(e, n, t);
        else if (e.tag === 19) Vc(e, n, t);
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
      i &= 1;
    }
    if (qe(at, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Bs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Vl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Bs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Vl(t, !0, n, null, u);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ys(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ji |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function km(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), Ki();
        break;
      case 5:
        ic(t);
        break;
      case 1:
        $t(t.type) && Ps(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        qe(Fs, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Bc(e, t, n) : (qe(at, at.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        qe(at, at.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Kc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), qe(at, at.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, $c(e, t, n);
    }
    return $n(e, t, n);
  }
  var Uc, Kl, Hc, Gc;
  Uc = function(e, t) {
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
  }, Kl = function() {
  }, Hc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ye(e, l), i = ye(e, i), u = [];
          break;
        case "select":
          l = ee({}, l, { value: void 0 }), i = ee({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), i = ut(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ms);
      }
      Pe(n, i);
      var h;
      n = null;
      for (F in l) if (!i.hasOwnProperty(F) && l.hasOwnProperty(F) && l[F] != null) if (F === "style") {
        var k = l[F];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (d.hasOwnProperty(F) ? u || (u = []) : (u = u || []).push(F, null));
      for (F in i) {
        var g = i[F];
        if (k = l?.[F], i.hasOwnProperty(F) && g !== k && (g != null || k != null)) if (F === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || g && g.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in g) g.hasOwnProperty(h) && k[h] !== g[h] && (n || (n = {}), n[h] = g[h]);
        } else n || (u || (u = []), u.push(
          F,
          n
        )), n = g;
        else F === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, k = k ? k.__html : void 0, g != null && k !== g && (u = u || []).push(F, g)) : F === "children" ? typeof g != "string" && typeof g != "number" || (u = u || []).push(F, "" + g) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (d.hasOwnProperty(F) ? (g != null && F === "onScroll" && tt("scroll", e), u || k === g || (u = [])) : (u = u || []).push(F, g));
      }
      n && (u = u || []).push("style", n);
      var F = u;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, Gc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Vr(e, t) {
    if (!rt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function Tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function ym(e, t, n) {
    var i = t.pendingProps;
    switch (dl(t), t.tag) {
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
        return Tt(t), null;
      case 1:
        return $t(t.type) && As(), Tt(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt(Ot), nt(Et), Nl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Os(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (eo(cn), cn = null))), Kl(e, t), Tt(t), null;
      case 5:
        Sl(t);
        var l = yi(Fr.current);
        if (n = t.type, e !== null && t.stateNode != null) Hc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = yi(jn.current), Os(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[gn] = t, i[br] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                tt("cancel", i), tt("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _r.length; l++) tt(_r[l], i);
                break;
              case "source":
                tt("error", i);
                break;
              case "img":
              case "image":
              case "link":
                tt(
                  "error",
                  i
                ), tt("load", i);
                break;
              case "details":
                tt("toggle", i);
                break;
              case "input":
                Ae(i, u), tt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", i);
                break;
              case "textarea":
                Je(i, u), tt("invalid", i);
            }
            Pe(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Ts(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Ts(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                oe(i), Qe(i, u, !0);
                break;
              case "textarea":
                oe(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = Ms);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[gn] = t, e[br] = i, Uc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Le(n, i), n) {
                case "dialog":
                  tt("cancel", e), tt("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < _r.length; l++) tt(_r[l], e);
                  l = i;
                  break;
                case "source":
                  tt("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  tt(
                    "error",
                    e
                  ), tt("load", e), l = i;
                  break;
                case "details":
                  tt("toggle", e), l = i;
                  break;
                case "input":
                  Ae(e, i), l = ye(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = ee({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, i), l = ut(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Pe(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var g = k[u];
                u === "style" ? Vt(e, g) : u === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && ln(e, g)) : u === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && Jt(e, g) : typeof g == "number" && Jt(e, "" + g) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? g != null && u === "onScroll" && tt("scroll", e) : g != null && K(e, u, g, h));
              }
              switch (n) {
                case "input":
                  oe(e), Qe(e, i, !1);
                  break;
                case "textarea":
                  oe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ne(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? Xe(e, !!i.multiple, u, !1) : i.defaultValue != null && Xe(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ms);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Tt(t), null;
      case 6:
        if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = yi(Fr.current), yi(jn.current), Os(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (u = i.nodeValue !== n) && (e = Ht, e !== null)) switch (e.tag) {
              case 3:
                Ts(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ts(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return Tt(t), null;
      case 13:
        if (nt(at), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Yu(), Ki(), t.flags |= 98560, u = !1;
          else if (u = Os(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[gn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tt(t), u = !1;
          } else cn !== null && (eo(cn), cn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? pt === 0 && (pt = 3) : io())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Wi(), Kl(e, t), e === null && Ar(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return kl(t.type._context), Tt(t), null;
      case 17:
        return $t(t.type) && As(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Vr(u, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Bs(e), h !== null) {
              for (t.flags |= 128, Vr(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && se() > Xi && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Bs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !rt) return Tt(t), null;
          } else 2 * se() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = se(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return no(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function gm(e, t) {
    switch (dl(t), t.tag) {
      case 1:
        return $t(t.type) && As(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt(Ot), nt(Et), Nl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Sl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Wi(), null;
      case 10:
        return kl(t.type._context), null;
      case 22:
      case 23:
        return no(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Js = !1, Mt = !1, jm = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ot(e, t, i);
    }
    else n.current = null;
  }
  function Ul(e, t, n) {
    try {
      n();
    } catch (i) {
      ot(e, t, i);
    }
  }
  var Wc = !1;
  function xm(e, t) {
    if (nl = vs, e = Eu(), Qa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset, u = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var h = 0, k = -1, g = -1, F = 0, Y = 0, q = e, Q = null;
          t: for (; ; ) {
            for (var de; q !== n || l !== 0 && q.nodeType !== 3 || (k = h + l), q !== u || i !== 0 && q.nodeType !== 3 || (g = h + i), q.nodeType === 3 && (h += q.nodeValue.length), (de = q.firstChild) !== null; )
              Q = q, q = de;
            for (; ; ) {
              if (q === e) break t;
              if (Q === n && ++F === l && (k = h), Q === u && ++Y === i && (g = h), (de = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = de;
          }
          n = k === -1 || g === -1 ? null : { start: k, end: g };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (il = { focusedElem: e, selectionRange: n }, vs = !1, pe = t; pe !== null; ) if (t = pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pe = e;
    else for (; pe !== null; ) {
      t = pe;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var je = ve.memoizedProps, ft = ve.memoizedState, b = t.stateNode, w = b.getSnapshotBeforeUpdate(t.elementType === t.type ? je : dn(t.type, je), ft);
              b.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (re) {
        ot(t, t.return, re);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return ve = Wc, Wc = !1, ve;
  }
  function Kr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Ul(t, n, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Xs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Hl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[br], delete t[ll], delete t[im], delete t[rm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Yc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ms));
    else if (i !== 4 && (e = e.child, e !== null)) for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), e = e.sibling;
  }
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  var xt = null, fn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Xc(e, t, n), n = n.sibling;
  }
  function Xc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(cs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Mt || Yi(n, t);
      case 6:
        var i = xt, l = fn;
        xt = null, ei(e, t, n), xt = i, fn = l, xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? al(e.parentNode, n) : e.nodeType === 1 && al(e, n), xr(e)) : al(xt, n.stateNode));
        break;
      case 4:
        i = xt, l = fn, xt = n.stateNode.containerInfo, fn = !0, ei(e, t, n), xt = i, fn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ul(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Mt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ot(n, t, k);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Mt = (i = Mt) || n.memoizedState !== null, ei(e, t, n), Mt = i) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function Zc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new jm()), t.forEach(function(i) {
        var l = Am.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function hn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              xt = k.stateNode, fn = !1;
              break e;
            case 3:
              xt = k.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              xt = k.stateNode.containerInfo, fn = !0;
              break e;
          }
          k = k.return;
        }
        if (xt === null) throw Error(o(160));
        Xc(u, h, l), xt = null, fn = !1;
        var g = l.alternate;
        g !== null && (g.return = null), l.return = null;
      } catch (F) {
        ot(l, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qc(t, e), t = t.sibling;
  }
  function qc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hn(t, e), Sn(e), i & 4) {
          try {
            Kr(3, e, e.return), Xs(3, e);
          } catch (je) {
            ot(e, e.return, je);
          }
          try {
            Kr(5, e, e.return);
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 1:
        hn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (hn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jt(l, "");
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Me(l, u), Le(k, h);
            var F = Le(k, u);
            for (h = 0; h < g.length; h += 2) {
              var Y = g[h], q = g[h + 1];
              Y === "style" ? Vt(l, q) : Y === "dangerouslySetInnerHTML" ? ln(l, q) : Y === "children" ? Jt(l, q) : K(l, Y, q, F);
            }
            switch (k) {
              case "input":
                Ie(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? Xe(l, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[br] = u;
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 6:
        if (hn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (je) {
            ot(e, e.return, je);
          }
        }
        break;
      case 3:
        if (hn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xr(t.containerInfo);
        } catch (je) {
          ot(e, e.return, je);
        }
        break;
      case 4:
        hn(t, e), Sn(e);
        break;
      case 13:
        hn(t, e), Sn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Jl = se())), i & 4 && Zc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = (F = Mt) || Y, hn(t, e), Mt = F) : hn(t, e), Sn(e), i & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !Y && (e.mode & 1) !== 0) for (pe = e, Y = e.child; Y !== null; ) {
            for (q = pe = Y; pe !== null; ) {
              switch (Q = pe, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, Q, Q.return);
                  break;
                case 1:
                  Yi(Q, Q.return);
                  var ve = Q.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (je) {
                      ot(i, n, je);
                    }
                  }
                  break;
                case 5:
                  Yi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    nd(q);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, pe = de) : nd(q);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, q = e; ; ) {
            if (q.tag === 5) {
              if (Y === null) {
                Y = q;
                try {
                  l = q.stateNode, F ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = q.stateNode, g = q.memoizedProps.style, h = g != null && g.hasOwnProperty("display") ? g.display : null, k.style.display = Ne("display", h));
                } catch (je) {
                  ot(e, e.return, je);
                }
              }
            } else if (q.tag === 6) {
              if (Y === null) try {
                q.stateNode.nodeValue = F ? "" : q.memoizedProps;
              } catch (je) {
                ot(e, e.return, je);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              Y === q && (Y = null), q = q.return;
            }
            Y === q && (Y = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        hn(t, e), Sn(e), i & 4 && Zc(e);
        break;
      case 21:
        break;
      default:
        hn(
          t,
          e
        ), Sn(e);
    }
  }
  function Sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Yc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Jt(l, ""), i.flags &= -33);
            var u = Jc(e);
            Wl(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Jc(e);
            Gl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        ot(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sm(e, t, n) {
    pe = e, ed(e);
  }
  function ed(e, t, n) {
    for (var i = (e.mode & 1) !== 0; pe !== null; ) {
      var l = pe, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Js;
        if (!h) {
          var k = l.alternate, g = k !== null && k.memoizedState !== null || Mt;
          k = Js;
          var F = Mt;
          if (Js = h, (Mt = g) && !F) for (pe = l; pe !== null; ) h = pe, g = h.child, h.tag === 22 && h.memoizedState !== null ? id(l) : g !== null ? (g.return = h, pe = g) : id(l);
          for (; u !== null; ) pe = u, ed(u), u = u.sibling;
          pe = l, Js = k, Mt = F;
        }
        td(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, pe = u) : td(e);
    }
  }
  function td(e) {
    for (; pe !== null; ) {
      var t = pe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || Xs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Mt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && nc(t, u, i);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                nc(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var g = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    g.autoFocus && n.focus();
                    break;
                  case "img":
                    g.src && (n.src = g.src);
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
                var F = t.alternate;
                if (F !== null) {
                  var Y = F.memoizedState;
                  if (Y !== null) {
                    var q = Y.dehydrated;
                    q !== null && xr(q);
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
          Mt || t.flags & 512 && Hl(t);
        } catch (Q) {
          ot(t, t.return, Q);
        }
      }
      if (t === e) {
        pe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function nd(e) {
    for (; pe !== null; ) {
      var t = pe;
      if (t === e) {
        pe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function id(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xs(4, t);
            } catch (g) {
              ot(t, n, g);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (g) {
                ot(t, l, g);
              }
            }
            var u = t.return;
            try {
              Hl(t);
            } catch (g) {
              ot(t, u, g);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Hl(t);
            } catch (g) {
              ot(t, h, g);
            }
        }
      } catch (g) {
        ot(t, t.return, g);
      }
      if (t === e) {
        pe = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, pe = k;
        break;
      }
      pe = t.return;
    }
  }
  var wm = Math.ceil, Zs = $.ReactCurrentDispatcher, Ql = $.ReactCurrentOwner, sn = $.ReactCurrentBatchConfig, ze = 0, yt = null, ht = null, St = 0, Wt = 0, Ji = Yn(0), pt = 0, Ur = null, ji = 0, qs = 0, Yl = 0, Hr = null, It = null, Jl = 0, Xi = 1 / 0, Fn = null, ea = !1, Xl = null, ti = null, ta = !1, ni = null, na = 0, Gr = 0, Zl = null, ia = -1, ra = 0;
  function Pt() {
    return (ze & 6) !== 0 ? se() : ia !== -1 ? ia : ia = se();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && St !== 0 ? St & -St : am.transition !== null ? (ra === 0 && (ra = Jo()), ra) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : su(e.type)), e);
  }
  function mn(e, t, n, i) {
    if (50 < Gr) throw Gr = 0, Zl = null, Error(o(185));
    vr(e, n, i), ((ze & 2) === 0 || e !== yt) && (e === yt && ((ze & 2) === 0 && (qs |= n), pt === 4 && ri(e, St)), Dt(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = se() + 500, bs && Xn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    ah(e, t);
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? sm(sd.bind(null, e)) : Uu(sd.bind(null, e)), tm(function() {
        (ze & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Xo(i)) {
          case 1:
            n = Rt;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = _n;
            break;
          case 536870912:
            n = Bn;
            break;
          default:
            n = _n;
        }
        n = hd(n, rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rd(e, t) {
    if (ia = -1, ra = 0, (ze & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = sa(e, i);
    else {
      t = i;
      var l = ze;
      ze |= 2;
      var u = ld();
      (yt !== e || St !== t) && (Fn = null, Xi = se() + 500, Si(e, t));
      do
        try {
          Cm();
          break;
        } catch (k) {
          ad(e, k);
        }
      while (!0);
      vl(), Zs.current = u, ze = l, ht !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = ba(e), l !== 0 && (i = l, t = ql(e, l))), t === 1) throw n = Ur, Si(e, 0), ri(e, i), Dt(e, se()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Nm(l) && (t = sa(e, i), t === 2 && (u = ba(e), u !== 0 && (i = u, t = ql(e, u))), t === 1)) throw n = Ur, Si(e, 0), ri(e, i), Dt(e, se()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, It, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Jl + 500 - se(), 10 < t)) {
              if (hs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Pt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = sl(wi.bind(null, e, It, Fn), t);
              break;
            }
            wi(e, It, Fn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - on(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = se() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * wm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = sl(wi.bind(null, e, It, Fn), i);
              break;
            }
            wi(e, It, Fn);
            break;
          case 5:
            wi(e, It, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Dt(e, se()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function ql(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = sa(e, t), e !== 2 && (t = It, It = n, t !== null && eo(t)), e;
  }
  function eo(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function Nm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!un(u(), l)) return !1;
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
  function ri(e, t) {
    for (t &= ~Yl, t &= ~qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - on(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function sd(e) {
    if ((ze & 6) !== 0) throw Error(o(327));
    Zi();
    var t = hs(e, 0);
    if ((t & 1) === 0) return Dt(e, se()), null;
    var n = sa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = ba(e);
      i !== 0 && (t = i, n = ql(e, i));
    }
    if (n === 1) throw n = Ur, Si(e, 0), ri(e, t), Dt(e, se()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, It, Fn), Dt(e, se()), null;
  }
  function to(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = se() + 500, bs && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = sn.transition, i = We;
    try {
      if (sn.transition = null, We = 1, e) return e();
    } finally {
      We = i, sn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function no() {
    Wt = Ji.current, nt(Ji);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, em(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (dl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && As();
          break;
        case 3:
          Wi(), nt(Ot), nt(Et), Nl();
          break;
        case 5:
          Sl(i);
          break;
        case 4:
          Wi();
          break;
        case 13:
          nt(at);
          break;
        case 19:
          nt(at);
          break;
        case 10:
          kl(i.type._context);
          break;
        case 22:
        case 23:
          no();
      }
      n = n.return;
    }
    if (yt = e, ht = e = si(e.current, null), St = Wt = t, pt = 0, Ur = null, Yl = qs = ji = 0, It = Hr = null, ki !== null) {
      for (t = 0; t < ki.length; t++) if (n = ki[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, i.next = h;
        }
        n.pending = i;
      }
      ki = null;
    }
    return e;
  }
  function ad(e, t) {
    do {
      var n = ht;
      try {
        if (vl(), Vs.current = Gs, Ks) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ks = !1;
        }
        if (gi = 0, kt = mt = lt = null, Ir = !1, Dr = 0, Ql.current = null, n === null || n.return === null) {
          pt = 1, Ur = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, g = t;
          if (t = St, k.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var F = g, Y = k, q = Y.tag;
            if ((Y.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var de = Pc(h);
            if (de !== null) {
              de.flags &= -257, bc(de, h, k, u, t), de.mode & 1 && Ac(u, F, t), t = de, g = F;
              var ve = t.updateQueue;
              if (ve === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(g), t.updateQueue = je;
              } else ve.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ac(u, F, t), io();
                break e;
              }
              g = Error(o(426));
            }
          } else if (rt && k.mode & 1) {
            var ft = Pc(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), bc(ft, h, k, u, t), ml(Qi(g, k));
              break e;
            }
          }
          u = g = Qi(g, k), pt !== 4 && (pt = 2), Hr === null ? Hr = [u] : Hr.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var b = Mc(u, g, t);
                tc(u, b);
                break e;
              case 1:
                k = g;
                var w = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ti === null || !ti.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var re = _c(u, k, t);
                  tc(u, re);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ud(n);
      } catch (xe) {
        t = xe, ht === n && n !== null && (ht = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ld() {
    var e = Zs.current;
    return Zs.current = Gs, e === null ? Gs : e;
  }
  function io() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (ji & 268435455) === 0 && (qs & 268435455) === 0 || ri(yt, St);
  }
  function sa(e, t) {
    var n = ze;
    ze |= 2;
    var i = ld();
    (yt !== e || St !== t) && (Fn = null, Si(e, t));
    do
      try {
        Em();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    if (vl(), ze = n, Zs.current = i, ht !== null) throw Error(o(261));
    return yt = null, St = 0, pt;
  }
  function Em() {
    for (; ht !== null; ) od(ht);
  }
  function Cm() {
    for (; ht !== null && !zn(); ) od(ht);
  }
  function od(e) {
    var t = fd(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? ud(e) : ht = t, Ql.current = null;
  }
  function ud(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ym(n, t, Wt), n !== null) {
          ht = n;
          return;
        }
      } else {
        if (n = gm(n, t), n !== null) {
          n.flags &= 32767, ht = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pt = 6, ht = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ht = t;
        return;
      }
      ht = t = e;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function wi(e, t, n) {
    var i = We, l = sn.transition;
    try {
      sn.transition = null, We = 1, Tm(e, t, n, i);
    } finally {
      sn.transition = l, We = i;
    }
    return null;
  }
  function Tm(e, t, n, i) {
    do
      Zi();
    while (ni !== null);
    if ((ze & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (lh(e, u), e === yt && (ht = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ta || (ta = !0, hd(_n, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = sn.transition, sn.transition = null;
      var h = We;
      We = 1;
      var k = ze;
      ze |= 4, Ql.current = null, xm(e, n), qc(n, e), Wh(il), vs = !!nl, il = nl = null, e.current = n, Sm(n), D(), ze = k, We = h, sn.transition = u;
    } else e.current = n;
    if (ta && (ta = !1, ni = e, na = l), u = e.pendingLanes, u === 0 && (ti = null), th(n.stateNode), Dt(e, se()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ea) throw ea = !1, e = Xl, Xl = null, e;
    return (na & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === Zl ? Gr++ : (Gr = 0, Zl = e) : Gr = 0, Xn(), null;
  }
  function Zi() {
    if (ni !== null) {
      var e = Xo(na), t = sn.transition, n = We;
      try {
        if (sn.transition = null, We = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, na = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, pe = e.current; pe !== null; ) {
            var u = pe, h = u.child;
            if ((pe.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var g = 0; g < k.length; g++) {
                  var F = k[g];
                  for (pe = F; pe !== null; ) {
                    var Y = pe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kr(8, Y, u);
                    }
                    var q = Y.child;
                    if (q !== null) q.return = Y, pe = q;
                    else for (; pe !== null; ) {
                      Y = pe;
                      var Q = Y.sibling, de = Y.return;
                      if (Qc(Y), Y === F) {
                        pe = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = de, pe = Q;
                        break;
                      }
                      pe = de;
                    }
                  }
                }
                var ve = u.alternate;
                if (ve !== null) {
                  var je = ve.child;
                  if (je !== null) {
                    ve.child = null;
                    do {
                      var ft = je.sibling;
                      je.sibling = null, je = ft;
                    } while (je !== null);
                  }
                }
                pe = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, pe = h;
            else e: for (; pe !== null; ) {
              if (u = pe, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Kr(9, u, u.return);
              }
              var b = u.sibling;
              if (b !== null) {
                b.return = u.return, pe = b;
                break e;
              }
              pe = u.return;
            }
          }
          var w = e.current;
          for (pe = w; pe !== null; ) {
            h = pe;
            var R = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && R !== null) R.return = h, pe = R;
            else e: for (h = w; pe !== null; ) {
              if (k = pe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xs(9, k);
                }
              } catch (xe) {
                ot(k, k.return, xe);
              }
              if (k === h) {
                pe = null;
                break e;
              }
              var re = k.sibling;
              if (re !== null) {
                re.return = k.return, pe = re;
                break e;
              }
              pe = k.return;
            }
          }
          if (ze = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(cs, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        We = n, sn.transition = t;
      }
    }
    return !1;
  }
  function cd(e, t, n) {
    t = Qi(n, t), t = Mc(e, t, 1), e = qn(e, t, 1), t = Pt(), e !== null && (vr(e, 1, t), Dt(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) cd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Qi(n, e), e = _c(t, e, 1), t = qn(t, e, 1), e = Pt(), t !== null && (vr(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > se() - Jl ? Si(e, 0) : Yl |= n), Dt(e, t);
  }
  function dd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = fs, fs <<= 1, (fs & 130023424) === 0 && (fs = 4194304)));
    var n = Pt();
    e = Rn(e, t), e !== null && (vr(e, t, n), Dt(e, n));
  }
  function _m(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), dd(e, n);
  }
  function Am(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), dd(e, n);
  }
  var fd;
  fd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ot.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, km(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Hu(t, Rs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Ys(e, t), e = t.pendingProps;
        var l = zi(t, Et.current);
        Gi(t, n), l = Tl(null, t, i, e, l, n);
        var u = Ml();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(i) ? (u = !0, Ps(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jl(t), l.updater = Ws, t.stateNode = l, l._reactInternals = t, Rl(t, i, e, n), t = Il(null, t, i, !0, u, n)) : (t.tag = 0, rt && u && cl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Ys(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = bm(i), e = dn(i, e), l) {
            case 0:
              t = Fl(null, t, i, e, n);
              break e;
            case 1:
              t = Ic(null, t, i, e, n);
              break e;
            case 11:
              t = Lc(null, t, i, e, n);
              break e;
            case 14:
              t = Rc(null, t, i, dn(i.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Fl(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ic(e, t, i, l, n);
      case 3:
        e: {
          if (Dc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, ec(e, t), zs(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = zc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = zc(e, t, i, n, l);
            break e;
          } else for (Gt = Qn(t.stateNode.containerInfo.firstChild), Ht = t, rt = !0, cn = null, n = Zu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = $n(e, t, n);
              break e;
            }
            At(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ic(t), e === null && hl(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, rl(i, l) ? h = null : u !== null && rl(i, u) && (t.flags |= 32), Fc(e, t), At(e, t, h, n), t.child;
      case 6:
        return e === null && hl(t), null;
      case 13:
        return Bc(e, t, n);
      case 4:
        return xl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Lc(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe(Fs, i._currentValue), i._currentValue = h, u !== null) if (un(u.value, h)) {
            if (u.children === l.children && !Ot.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var g = k.firstContext; g !== null; ) {
                if (g.context === i) {
                  if (u.tag === 1) {
                    g = On(-1, n & -n), g.tag = 2;
                    var F = u.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var Y = F.pending;
                      Y === null ? g.next = g : (g.next = Y.next, Y.next = g), F.pending = g;
                    }
                  }
                  u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), yl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                g = g.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), yl(h, n, t), h = u.sibling;
            } else h = u.child;
            if (h !== null) h.return = u;
            else for (h = u; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (u = h.sibling, u !== null) {
                u.return = h.return, h = u;
                break;
              }
              h = h.return;
            }
            u = h;
          }
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = nn(l), i = i(l), t.flags |= 1, At(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = dn(i, t.pendingProps), l = dn(i.type, l), Rc(e, t, i, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ys(e, t), t.tag = 1, $t(i) ? (e = !0, Ps(t)) : e = !1, Gi(t, n), Cc(t, i, l), Rl(t, i, l, n), Il(null, t, i, !0, e, n);
      case 19:
        return Kc(e, t, n);
      case 22:
        return $c(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function hd(e, t) {
    return us(e, t);
  }
  function Pm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, n, i) {
    return new Pm(e, t, n, i);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function bm(e) {
    if (typeof e == "function") return ro(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === we) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function aa(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") ro(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case _:
        return Ni(n.children, l, u, t);
      case z:
        h = 8, l |= 8;
        break;
      case J:
        return e = an(12, n, t, l | 2), e.elementType = J, e.lanes = u, e;
      case X:
        return e = an(13, n, t, l), e.elementType = X, e.lanes = u, e;
      case fe:
        return e = an(19, n, t, l), e.elementType = fe, e.lanes = u, e;
      case ue:
        return la(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            h = 10;
            break e;
          case ke:
            h = 9;
            break e;
          case we:
            h = 11;
            break e;
          case U:
            h = 14;
            break e;
          case ae:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = an(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ni(e, t, n, i) {
    return e = an(7, e, i, t), e.lanes = n, e;
  }
  function la(e, t, n, i) {
    return e = an(22, e, i, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function so(e, t, n) {
    return e = an(6, e, null, t), e.lanes = n, e;
  }
  function ao(e, t, n) {
    return t = an(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Lm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function lo(e, t, n, i, l, u, h, k, g) {
    return e = new Lm(e, t, n, k, g), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = an(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(u), e;
  }
  function Rm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: B, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function md(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($t(t.type)) {
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
      if ($t(n)) return Vu(e, n, t);
    }
    return t;
  }
  function pd(e, t, n, i, l, u, h, k, g) {
    return e = lo(n, i, !0, e, l, u, h, k, g), e.context = md(null), n = e.current, i = Pt(), l = ii(n), u = On(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, vr(e, l, i), Dt(e, i), e;
  }
  function oa(e, t, n, i) {
    var l = t.current, u = Pt(), h = ii(l);
    return n = md(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, h), e !== null && (mn(e, l, h, u), Ds(e, l, h)), h;
  }
  function ua(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function vd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oo(e, t) {
    vd(e, t), (e = e.alternate) && vd(e, t);
  }
  function Om() {
    return null;
  }
  var kd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function uo(e) {
    this._internalRoot = e;
  }
  ca.prototype.render = uo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    oa(e, t, null, null);
  }, ca.prototype.unmount = uo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        oa(null, e, null, null);
      }), t[An] = null;
    }
  };
  function ca(e) {
    this._internalRoot = e;
  }
  ca.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && iu(e);
    }
  };
  function co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function da(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function yd() {
  }
  function $m(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var F = ua(h);
          u.call(F);
        };
      }
      var h = pd(t, i, e, 0, null, !1, !1, "", yd);
      return e._reactRootContainer = h, e[An] = h.current, Ar(e.nodeType === 8 ? e.parentNode : e), xi(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var F = ua(g);
        k.call(F);
      };
    }
    var g = lo(e, 0, !1, null, null, !1, !1, "", yd);
    return e._reactRootContainer = g, e[An] = g.current, Ar(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      oa(t, g, n, i);
    }), g;
  }
  function fa(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var g = ua(h);
          k.call(g);
        };
      }
      oa(t, h, e, l);
    } else h = $m(n, t, e, l, i);
    return ua(h);
  }
  Zo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 && (Ra(t, n | 1), Dt(t, se()), (ze & 6) === 0 && (Xi = se() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Rn(e, 1);
          if (i !== null) {
            var l = Pt();
            mn(i, e, 1, l);
          }
        }), oo(e, 1);
    }
  }, Oa = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = Pt();
        mn(t, e, 134217728, n);
      }
      oo(e, 134217728);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Rn(e, t);
      if (n !== null) {
        var i = Pt();
        mn(n, e, t, i);
      }
      oo(e, t);
    }
  }, eu = function() {
    return We;
  }, tu = function(e, t) {
    var n = We;
    try {
      return We = e, t();
    } finally {
      We = n;
    }
  }, Lt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ie(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = _s(i);
              if (!l) throw Error(o(90));
              ce(i), Ie(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ve(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, ss = to, $e = xi;
  var Fm = { usingClientEntryPoint: !1, Events: [Lr, Ii, _s, vn, kn, to] }, Wr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Im = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Wr.findFiberByHostInstance || Om, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ha.isDisabled && ha.supportsFiber) try {
      cs = ha.inject(Im), yn = ha;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!co(t)) throw Error(o(200));
    return Rm(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!co(e)) throw Error(o(299));
    var n = !1, i = "", l = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = lo(e, 1, !1, null, null, n, !1, i, l), e[An] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new uo(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = hr(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return xi(e);
  }, zt.hydrate = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!co(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = kd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, l, !1, u, h), e[An] = t.current, Ar(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ca(t);
  }, zt.render = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!da(e)) throw Error(o(40));
    return e._reactRootContainer ? (xi(function() {
      fa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[An] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = to, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!da(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return fa(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Cd;
function Wm() {
  if (Cd) return mo.exports;
  Cd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), mo.exports = Gm(), mo.exports;
}
var Td;
function Qm() {
  if (Td) return ma;
  Td = 1;
  var s = Wm();
  return ma.createRoot = s.createRoot, ma.hydrateRoot = s.hydrateRoot, ma;
}
var Ym = Qm();
const Jm = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], M = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], N = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], T = {
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
      base: N,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: N,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: N,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: N,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, L = 26, O = 72, E = 30, x = 54, I = 34, A = 11, K = (L + O) / 2, $ = E + (c.length - 1) * I + 30, H = (V) => O + V * x, B = (V) => V === 0 ? K : H(V) - x / 2, _ = (V) => E + V * I;
  function z(V, ne, C) {
    const Z = a.indexOf(s[V][0]) + Number(C.slice(-1)) - 1, oe = Z % a.length, ce = o[oe] + 12 * Math.floor(Z / a.length), me = V + ne - ce;
    return a[oe] + (me < 0 ? "♭" : "♯").repeat(Math.abs(me));
  }
  function J(V) {
    return [...V.base, ...V.add].sort((ne, C) => ne[0] - C[0]);
  }
  function ie(V, ne, C) {
    const Z = ne + (C ? 1 : 0), oe = m[Z % m.length], ce = Math.min(...oe.map(([Ie]) => Ie)), me = Math.max(...oe.map(([, Ie]) => Ie));
    let Me = (V - d % 12 + 12) % 12 - (C ? 8 : 5) + 12 * Math.floor(Z / m.length);
    return ce + Me < 0 && (Me += 12), me + Me > f.pentatonic && (Me -= 12), {
      strings: oe.map((Ie) => Ie.map((Qe) => Qe + Me)),
      start: ce + Me,
      end: me + Me
    };
  }
  function ke(V, ne, C) {
    const Z = C[ne], oe = (V + Z - d % 12 + 12) % 12, ce = d + oe - Z, me = c.map((ye, Ae) => {
      const Me = ne + (c.length - 1 - Ae) * 3;
      return [Me, Me + 1, Me + 2].map((Ie) => {
        const Qe = Math.floor(Ie / C.length), Ye = C[Ie % C.length];
        return ce + Ye + 12 * Qe - ye;
      });
    });
    return {
      strings: me,
      start: Math.min(...me.map((ye) => ye[0])),
      end: Math.max(...me.map((ye) => ye.at(-1)))
    };
  }
  function we(V, ne) {
    const C = [], Z = Math.ceil(-V.end / 12) * 12;
    for (let ce = Z; V.start + ce <= ne; ce += 12) {
      const me = V.strings.map((Ae) => Ae.map((Me) => Me + ce).filter((Me) => Me >= 0 && Me <= ne)), ye = me.flat();
      C.push({
        strings: me,
        start: Math.min(...ye),
        end: Math.max(...ye),
        partial: V.start + ce < 0 || V.end + ce > ne
      });
    }
    const oe = C.filter((ce) => !ce.partial);
    return oe.length ? oe : C;
  }
  function X(V) {
    return J(V).length === p;
  }
  function fe(V, ne, C) {
    const Z = X(ne);
    V.querySelector('[value="3nps"]').disabled = !Z, V.value = Z ? C ?? "3nps" : "pentatonic";
  }
  function U(V, ne, C, Z, oe) {
    const ce = J(ne).map(([me]) => me);
    return Z.map((me) => {
      const ye = me - 1, Ae = C === "3nps" ? ke(V, ye, ce) : ie(V, ye, ne.base === N), Me = oe === void 0 ? [Ae] : we(Ae, oe);
      return { number: me, positions: Me };
    });
  }
  function ae(V, ne) {
    const C = V.getBoundingClientRect(), Z = V.querySelectorAll(ne);
    let oe = 1 / 0;
    Z.forEach((ce) => {
      const me = ce.getBoundingClientRect();
      let ye = 0;
      me.left < C.left ? ye = me.left - C.left - 8 : me.right > C.right && (ye = me.right - C.right + 8), Math.abs(ye) < Math.abs(oe) && (oe = ye);
    }), Number.isFinite(oe) && (V.scrollLeft += oe);
  }
  function ue(V, ne = !1) {
    const C = V === "3nps" ? p : m.length;
    return Array.from({ length: C }, (Z, oe) => {
      const ce = oe + 1;
      return '<label class="box-toggle" data-box="' + ce + '"><input type="checkbox" value="' + ce + '"' + (ne && oe === 0 ? " checked" : "") + "> Boksi " + ce + "</label>";
    }).join("");
  }
  function W(V, ne) {
    const C = J(ne), Z = new Map(C.map(([ce, me]) => [ce, z(V, ce, me)])), oe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return C.flatMap(([ce, me]) => oe.flatMap(({ suffix: ye, base: Ae }) => {
      const Me = Ae.map(([Ie]) => Z.get((ce + Ie) % 12));
      return Me.every(Boolean) ? {
        root: (V + ce) % 12,
        degree: Number(String(me).replace(/\D/g, "")),
        name: Me[0] + ye,
        notes: Me,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function le(V, ne) {
    const C = V.base.map(([ce]) => (V.root + ce) % 12), Z = c.map((ce) => {
      const me = [];
      for (let ye = 0; ye <= ne; ye++) {
        const Ae = (ce + ye) % 12;
        C.includes(Ae) && me.push({ fret: ye, pitch: Ae });
      }
      return me;
    }), oe = [];
    for (let ce = 0; ce <= Z.length - 3; ce++)
      for (const me of Z[ce])
        for (const ye of Z[ce + 1])
          if (me.pitch !== ye.pitch)
            for (const Ae of Z[ce + 2]) {
              if (Ae.pitch === me.pitch || Ae.pitch === ye.pitch) continue;
              const Me = [me.fret, ye.fret, Ae.fret], Ie = Math.min(...Me), Qe = Math.max(...Me);
              if (Qe - Ie > 3) continue;
              const Ye = Array(c.length).fill(null);
              Ye.splice(ce, 3, ...Me), oe.push({ strings: Ye, low: Ie, high: Qe });
            }
    return oe.sort((ce, me) => ce.high - me.high || ce.low - me.low);
  }
  const ee = {
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
  }, j = [
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
  function y(V, ne) {
    const C = ee[V + ":" + ne];
    if (C) return { frets: C, barre: null };
    let Z = null;
    return j.forEach(({ string: oe, openPC: ce, shapes: me }) => {
      const ye = me[ne];
      if (!ye) return;
      let Ae = (V - ce + 12) % 12;
      if (Ae + Math.min(...ye.filter((Qe) => Qe !== null)) < 0 && (Ae += 12), Z && Z.fret <= Ae) return;
      const Me = ye.map((Qe) => Qe === null ? null : Ae + Qe), Ie = Ae > 0 && ye.at(-1) === 0 ? { fret: Ae, from: oe, to: ye.length - 1 } : null;
      Z = { fret: Ae, frets: Me, barre: Ie };
    }), Z && { frets: Z.frets, barre: Z.barre };
  }
  function te(V, { frets: ne, barre: C }, Z) {
    const Me = [...c].reverse(), Ie = ne.filter((Ve) => Ve > 0), Ye = !Ie.length || Math.max(...Ie) <= 4 && (ne.includes(0) || Math.min(...Ie) === 1) ? 1 : Math.min(...Ie), Ge = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Z + "-ote paksusta kielestä ohueen: " + ne.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return ne.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + Ge(it) + '" y1="30" x2="' + Ge(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), C && (Je += '<rect class="barre" x="' + (Ge(C.from) - 6.5) + '" y="' + (Xe(C.fret) - 6.5) + '" width="' + ((C.to - C.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ne.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + Ge(it) + '" y="22">×</text>';
        return;
      }
      const Bt = (Me[it] + Ve) % 12 === V;
      if (Ve === 0) {
        Je += '<circle class="open' + (Bt ? " root-open" : "") + '" cx="' + Ge(it) + '" cy="18" r="4.5"/>';
        return;
      }
      C && Ve === C.fret && it >= C.from && it <= C.to && !Bt || (Je += '<circle class="' + (Bt ? "root" : "tone") + '" cx="' + Ge(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function he(V, ne) {
    const C = new URLSearchParams(location.search), Z = s.indexOf(C.get("toonikka")), oe = C.get("asteikko");
    return {
      rootPC: Z === -1 ? V : Z,
      scaleId: Object.hasOwn(T, oe) ? oe : ne
    };
  }
  function Se(V, ne, C) {
    return V + "?" + new URLSearchParams({ toonikka: s[ne], asteikko: C });
  }
  function G(V, ne, C, {
    boxes: Z = [],
    onlyBoxNotes: oe = !1,
    automatic: ce = !0,
    focusDegree: me = "",
    grip: ye = null,
    barre: Ae = null,
    label: Me = s[V] + " " + ne.name,
    notes: Ie = null,
    targets: Qe = !1,
    muteFret: Ye = null
  } = {}) {
    const Ge = H(C), Xe = Ge + 48, ut = Xe + 28, Je = E - 14, Ve = _(c.length - 1) + 14, it = Ve - Je, Bt = ce ? 680 : Math.ceil(ut * 0.64), Yt = Z.flatMap((Te) => Te.positions), Nt = {};
    ne.base.forEach(([Te, Pe]) => Nt[(V + Te) % 12] = { deg: Pe, added: !1 }), ne.add.forEach(([Te, Pe]) => Nt[(V + Te) % 12] = { deg: Pe, added: !0 });
    const ln = c.map((Te, Pe) => !!ye && ye[Pe] === null), Jt = !!ye && Ye !== null, Xt = M.filter((Te, Pe) => ln[Pe]).reverse(), _t = Me + ". " + C + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Xt.length ? " Soittamatta jäävät kielet: " + Xt.join(", ") + "." : "");
    let Ne = '<svg viewBox="0 0 ' + ut + " " + $ + '" style="min-width:' + Bt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + _t + '">';
    Ne += '<rect x="' + L + '" y="' + Je + '" width="' + (O - L) + '" height="' + it + '" rx="6" fill="#2a2338"/>', Ne += '<rect x="' + O + '" y="' + Je + '" width="' + (Ge - O) + '" height="' + it + '" fill="#231a12"/>', Ne += '<rect x="' + Ge + '" y="' + Je + '" width="' + (ut - Ge - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Te = 1; Te <= C; Te++)
      Ne += '<line x1="' + H(Te) + '" y1="' + Je + '" x2="' + H(Te) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    Ne += '<rect x="' + (O - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', Ne += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ne += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Vt = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Te) => Te <= C).forEach((Te) => Ne += '<circle cx="' + B(Te) + '" cy="' + Vt + '" r="5.5" fill="#7a6550"/>');
    for (let Te = 12; Te <= C; Te += 12)
      Ne += '<circle cx="' + B(Te) + '" cy="' + (Vt - I) + '" r="5.5" fill="#7a6550"/>', Ne += '<circle cx="' + B(Te) + '" cy="' + (Vt + I) + '" r="5.5" fill="#7a6550"/>';
    Ne += '<text x="' + K + '" y="' + ($ - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ne += '<text x="' + O + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ne += '<text x="' + Xe + '" y="' + ($ - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Te = 1; Te <= C; Te++)
      Ne += '<text x="' + B(Te) + '" y="' + ($ - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Te + "</text>";
    if (Z.forEach(({ number: Te, positions: Pe }) => {
      Pe.forEach((Le) => {
        const He = Le.partial ? "box-highlight box-partial" : "box-highlight";
        Ne += '<g class="' + He + '" data-box="' + Te + '" aria-hidden="true">';
        const st = Le.strings.find((vt) => vt.length), Lt = (B(st[0]) + B(st.at(-1))) / 2;
        Ne += '<text class="box-number" x="' + Lt + '" y="12">' + Te + "</text>", Le.strings.forEach((vt, Zt) => {
          if (!vt.length) return;
          const En = B(vt[0]) - 16, vn = B(vt.at(-1)) - B(vt[0]) + 32;
          Ne += '<rect class="box-band" x="' + En + '" y="' + (_(Zt) - 14) + '" width="' + vn + '" height="28" rx="14"/>';
        }), Ne += "</g>";
      });
    }), c.forEach((Te, Pe) => {
      const Le = 1 + Pe * 0.45, He = _(Pe), st = ln[Pe] && !Jt;
      st ? Ne += '<text class="muted-mark" x="' + K + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ln[Pe] && Ye === 0 || (Ne += '<line x1="' + (L + 4) + '" y1="' + He + '" x2="' + (O - 4) + '" y2="' + He + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ne += "<g" + (st ? ' opacity=".35"' : "") + ">", Ne += '<line x1="' + O + '" y1="' + He + '" x2="' + (Xe + 5) + '" y2="' + He + '" stroke="#b9b9c4" stroke-width="' + Le.toFixed(2) + '"/>', Ne += '<circle cx="' + (Xe + 5) + '" cy="' + He + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ne += "</g>", Ne += '<text x="13" y="' + (He + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Pe] + "</text>";
    }), ye && Ae && Ae.fret >= 1 && Ae.fret <= C) {
      const Te = _(Ae.from), Pe = _(Ae.to), Le = Math.min(Te, Pe) - 6, He = Math.max(Te, Pe) + 6;
      Ne += '<rect class="barre-indicator" x="' + (B(Ae.fret) - 7) + '" y="' + Le + '" width="14" height="' + (He - Le) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (Ne += '<g class="fret-targets">', c.forEach((Te, Pe) => {
      for (let Le = 0; Le <= C; Le++) {
        const He = Le ? M[Pe] + "-kieli, " + Le + ". nauha" : "vapaa " + M[Pe] + "-kieli", st = Le ? x : O - L - 6;
        Ne += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Pe + '" data-fret="' + Le + '" data-midi="' + (Te + Le) + '" aria-label="' + He + '" x="' + (B(Le) - st / 2) + '" y="' + (_(Pe) - I / 2) + '" width="' + st + '" height="' + I + '" fill="transparent"/>';
      }
    }), Ne += "</g>"), (Ie ?? []).forEach(({ string: Te, fret: Pe, label: Le, kind: He }) => {
      Ne += '<g class="octave-note octave-' + He + '">', Ne += '<circle cx="' + B(Pe) + '" cy="' + _(Te) + '" r="' + A + '"/>', Ne += '<text x="' + B(Pe) + '" y="' + (_(Te) + 3.5) + '" font-size="' + (Le.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Le + "</text>", Ne += "</g>";
    }), ye && (Ne += '<g class="grip-notes">'), (Ie ? [] : c).forEach((Te, Pe) => {
      for (let Le = 0; Le <= C; Le++) {
        const He = (Te + Le) % 12;
        if (!(He in Nt) || ye && ye[Pe] !== Le || oe && !Yt.some(({ strings: vn }) => {
          const kn = vn[Pe];
          return kn.length > 0 && Le >= kn[0] && Le <= kn.at(-1);
        })) continue;
        const st = Nt[He], Lt = st.deg === "1", vt = st.added ? "#f0a13c" : Lt ? "#4b2fd6" : "#6d4aff", Zt = st.added ? "#1a1430" : "#fff";
        st.deg === me && (Ne += '<circle class="focus-note" cx="' + B(Le) + '" cy="' + _(Pe) + '" r="14.5"/>');
        const En = ye ? ' data-string="' + (Pe + 1) + '" data-fret="' + Le + '" data-degree="' + st.deg + '"' : "";
        Ne += "<circle" + En + ' cx="' + B(Le) + '" cy="' + _(Pe) + '" r="' + A + '" fill="' + vt + '" stroke="' + (Lt ? "#fff" : "#1a1430") + '" stroke-width="' + (Lt ? 2.5 : 1) + '"/>', Ne += '<text x="' + B(Le) + '" y="' + (_(Pe) + 3.5) + '" font-size="' + (st.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Zt + '" text-anchor="middle">' + st.deg + "</text>";
      }
    }), ye && (Ne += "</g>"), Jt && ln.forEach((Te, Pe) => {
      if (!Te) return;
      const Le = B(Ye), He = _(Pe);
      Ne += '<g class="muted-mark grip-mute" data-string="' + (Pe + 1) + '" data-fret="' + Ye + '">', Ne += '<circle cx="' + Le + '" cy="' + He + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', Ne += '<text x="' + Le + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ne += "</g>";
    }), Ne += "</svg>", Ne;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: N,
    SCALES: T,
    noteName: z,
    scaleNotes: J,
    scaleTriads: W,
    triadGrips: le,
    chordGrip: y,
    renderChordDiagram: te,
    selectionFromURL: he,
    selectionHref: Se,
    renderBoard: G,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: X,
    syncBoxSystem: fe,
    fingeringBoxes: U,
    boxOptions: ue,
    revealPositions: ae
  };
})();
globalThis.MusicMapFretboard = Jm;
function ko(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Xm(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Zm(s) {
  const a = Xm(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Fe = globalThis.MusicMapFretboard, Be = (s) => (s % 12 + 12) % 12, qm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], ep = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], be = (s, a = !1, o = !1) => (a ? ep : qm)[Be(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => Fe.CHROM[Be(s)], Zr = (s, a, o) => Fe.noteName(Be(s), a, o);
function tp(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Be(s) < 2 ? o - 1 : a[0] === "C" && Be(s) > 9 ? o + 1 : o;
}
const Qt = ["ohut E", "B", "G", "D", "A", "paksu E"], Uo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], yf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], np = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ti = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Oe = (s, a) => ({ string: s, fret: a, midi: Fe.OPEN_PITCHES[s] + a });
function ur(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Oe(c, a + f)));
}
const Ue = (s) => `${s.string}:${s.fret}`, Ci = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, gf = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, qr = [
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
], Md = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function jf(s, a) {
  const o = Md[a] ?? Md.E, c = Be(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Oe(f, d + c)]);
}
const ya = {
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
}, Ma = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, wn = (s, a, o) => a.includes(s) ? s : o;
function Na(s) {
  const a = { ...ya };
  a.mode = wn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ya.strings]), a.min = Math.round(li(s.min, 0, 24, a.min)), a.max = Math.round(li(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = wn(s.check, ["class", "pitch"], a.check), a.input = wn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(li(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(Fe.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(li(s.box, 0, 5, a.box)), a.order = wn(s.order, ["random", "up", "down"], a.order), a.chord = wn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ya.intervals]), a.direction = wn(s.direction, ["up", "down", "both"], a.direction), a.hints = wn(s.hints, ["off", "always", "fade"], a.hints), a.activity = wn(s.activity, ["play", "degree"], a.activity), a.minRms = li(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(s.clarity, 0.85, 0.99, a.clarity), a.stability = li(s.stability, 120, 800, a.stability), a.cents = li(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function ip(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Fe.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Na(c);
}
function rp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Fe.CHROM[s.root],
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
    kielet: s.strings.map((a) => a + 1).join(","),
    intervallit: s.intervals.join(","),
    kromaattinen: s.accidentals ? "1" : "0",
    alennukset: s.flats ? "1" : "0",
    kertaus: s.weak ? "1" : "0",
    vertailu: s.reference ? "1" : "0"
  });
}
const Mi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", xf = (s) => ["note", "degree"].includes(Mi(s)) ? "class" : In(s) ? "pitch" : s.check, pa = (s) => Mi(s) === "mic", _d = "musiikin-kartta:harjoittelu", Sf = 3, To = () => ({ version: Sf, settings: { ...ya }, stats: {}, recent: [], sessions: [] }), wf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, pn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function sp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => pn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || pn(s.errors)) && (s.ema === void 0 || pn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || pn(s.emaMs));
}
function ap(s) {
  return !!s && typeof s.id == "string" && pn(s.count) && pn(s.first) && s.first <= s.count && pn(s.ms) && pn(s.at) && (s.solo === void 0 || pn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || pn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Ad(s) {
  if (!s) return To();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !sp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !pn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !ap(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Na(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: Sf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Pd = 2500, lp = 8e3, bd = 0.3, es = (s) => s.ema ?? s.correct / s.attempts, ts = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Ho(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(s) - Pd) / (lp - Pd)));
  return es(s) * 0.65 + a * 0.35;
}
function op(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Ho(s)) * 3;
}
class Ld {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Ad(a?.getItem(_d) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = To();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(_d, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(a) {
    this.data.settings = a, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(a) {
    if (this.data.recent.some((p) => p.id === a.id)) return;
    const o = wf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + bd * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + bd * (a.ms - ts(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Ad(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...To(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const up = 4e3, Rd = 12, cp = 1500;
function dp(s, a) {
  const o = s.left + s.stickyLeft, c = s.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Rd : a.right > c && (d = a.right - c + Rd), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function Nf(s, a, o, { stickySelector: c, enabled: d = !0 } = {}) {
  const f = P.useRef(0), p = P.useRef(!1), m = P.useRef(""), S = P.useRef(0);
  P.useEffect(() => {
    const M = s.current;
    if (!M || !d) return;
    const v = () => {
      f.current = Date.now() + up;
    }, N = () => {
      p.current = !0, v();
    }, T = () => {
      p.current && (p.current = !1, v());
    }, L = (O) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(O.key) && v();
    };
    return M.addEventListener("pointerdown", N, { passive: !0 }), M.addEventListener("touchstart", N, { passive: !0 }), M.addEventListener("wheel", v, { passive: !0 }), M.addEventListener("keydown", L), window.addEventListener("pointerup", T, { passive: !0 }), window.addEventListener("pointercancel", T, { passive: !0 }), window.addEventListener("touchend", T, { passive: !0 }), window.addEventListener("touchcancel", T, { passive: !0 }), () => {
      M.removeEventListener("pointerdown", N), M.removeEventListener("touchstart", N), M.removeEventListener("wheel", v), M.removeEventListener("keydown", L), window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), window.removeEventListener("touchend", T), window.removeEventListener("touchcancel", T);
    };
  }, [s, d]), P.useLayoutEffect(() => {
    const M = m.current === "" && o !== "" && Date.now() - S.current > cp;
    m.current !== "" && o === "" && (S.current = Date.now()), m.current = o;
    const v = s.current;
    if (!v || !d || !o || (M && !p.current && (f.current = 0), p.current || Date.now() < f.current)) return;
    const N = v.querySelector(a);
    if (!N) return;
    const T = v.getBoundingClientRect(), L = N.getBoundingClientRect(), O = c ? v.querySelector(c) : null, E = O && getComputedStyle(O).position === "sticky" ? O.getBoundingClientRect().width : 0, x = dp({
      left: T.left,
      right: T.left + v.clientWidth,
      scrollLeft: v.scrollLeft,
      maxScroll: v.scrollWidth - v.clientWidth,
      stickyLeft: E
    }, L);
    if (x === null) return;
    const I = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    typeof v.scrollTo == "function" ? v.scrollTo({ left: x, behavior: I ? "auto" : "smooth" }) : v.scrollLeft = x;
  }, [s, a, o, c, d]);
}
const fp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), hp = ["e", "B", "G", "D", "A", "E"];
function Ef({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: hp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Cf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), mp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Tf({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : fp.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ui({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints" }) {
  const m = { "--cols": s.max - s.min + 1 }, { strings: S, min: M, max: v } = s, [N, T] = P.useState({ string: Math.min(...S), fret: M }), L = P.useRef(null), O = new Map(a.map(($) => [Ue($), $])), E = a.map(($) => `${Ue($)}${$.kind}`).join(",");
  P.useEffect(() => {
    if (p !== "hints") return;
    const $ = L.current, H = $?.querySelector(".target, .anchor");
    $ && H && ($.scrollLeft += H.getBoundingClientRect().left - $.getBoundingClientRect().left - $.clientWidth / 2 + H.clientWidth / 2);
  }, [E, p]), P.useEffect(() => {
    p === "playing" && L.current && (L.current.scrollLeft = 0);
  }, [p, M, v]);
  const x = a.find(($) => $.kind === "playing");
  Nf(L, ".playing", x ? Ue(x) : "", { stickySelector: "tbody th", enabled: p === "playing" });
  const [I, A] = P.useState({ left: !1, right: !1 });
  P.useEffect(() => {
    const $ = L.current;
    if (!$) return;
    const H = () => {
      const _ = $.scrollLeft > 2, z = $.scrollLeft + $.clientWidth < $.scrollWidth - 2;
      A((J) => J.left === _ && J.right === z ? J : { left: _, right: z });
    };
    H(), $.addEventListener("scroll", H, { passive: !0 });
    const B = typeof ResizeObserver > "u" ? null : new ResizeObserver(H);
    return B?.observe($), () => {
      $.removeEventListener("scroll", H), B?.disconnect();
    };
  }, [E, M, v]);
  const K = S.includes(N.string) && N.fret >= M && N.fret <= v ? N : { string: Math.min(...S), fret: M };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (I.left ? " more-left" : "") + (I.right ? " more-right" : ""), children: [
    (I.left || I.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      I.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      I.left && I.right ? "molemmilla puolilla" : I.right ? "oikealla" : "vasemmalla",
      I.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: L, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: m, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Tf, { min: M, max: v }),
      /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map(($, H) => /* @__PURE__ */ r.jsxs("tr", { className: S.includes(H) ? "" : "unused", style: Cf(H), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${H + 1}. kieli: ${Qt[H]}${o.includes(H) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Ef, { string: H }),
          o.includes(H) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ur([H], M, v).map((B) => {
          const _ = O.get(Ue(B)), z = `${Qt[H]}-kieli, ${Ti(B.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${B.fret === 0 ? "open-fret " : ""}${_ ? _.kind === "answer" ? "target" : _.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": H,
              "data-fret": B.fret,
              tabIndex: K.string === H && K.fret === B.fret ? 0 : -1,
              onFocus: () => T(B),
              onKeyDown: (J) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(J.key)) return;
                J.preventDefault();
                const ie = [...S].sort((fe, U) => fe - U), ke = ie.indexOf(H), we = J.key === "ArrowUp" ? ie[Math.max(0, ke - 1)] : J.key === "ArrowDown" ? ie[Math.min(ie.length - 1, ke + 1)] : H, X = J.key === "Home" ? M : J.key === "End" ? v : Math.max(M, Math.min(v, B.fret + (J.key === "ArrowRight" ? 1 : J.key === "ArrowLeft" ? -1 : 0)));
                J.currentTarget.closest("table")?.querySelector(`button[data-string="${we}"][data-fret="${X}"]`)?.focus();
              },
              disabled: c || !S.includes(H),
              "aria-label": z + (_ ? `, ${mp[_.kind]}${_.label ? " " + _.label : ""}` : ""),
              onClick: () => d?.(B),
              children: _ ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: _.label || "●" }) : null
            }
          ) }, B.fret);
        })
      ] }, H)) })
    ] }) })
  ] });
}
function pp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, S = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Tf, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map((M, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Cf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Qt[v]}`, children: /* @__PURE__ */ r.jsx(Ef, { string: v }) }),
      ur([v], p, m).map((N) => {
        const T = Object.hasOwn(a, S + Ue(N)) ? a[S + Ue(N)] : void 0, L = Ho(T), O = L === null ? "unseen" : T.attempts < 3 ? "few" : L >= 0.8 ? "strong" : L >= 0.5 ? "growing" : "weak", E = `${Qt[v]}-kieli, ${Ti(N.fret)}, ${be(N.midi, d)}`, x = T ? `${Math.round(L * 100)} %, ${T.correct}/${T.attempts} heti oikein, viime aikoina ${Math.round(es(T) * 100)} % ja ${(ts(T) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${N.fret === 0 ? "open-fret " : ""}${O}`, title: `${E}: ${x}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: L === null ? "·" : T.attempts < 3 ? "?" : Math.round(L * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            E,
            ": ",
            x
          ] })
        ] }, N.fret);
      })
    ] }, v)) })
  ] }) });
}
const vp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", _a = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, Mf = (s) => Fe.fingeringBoxes(s.root, Fe.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function _i(s) {
  if (s.mode === "caged") {
    const a = jf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Mf(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function kp(s) {
  const a = _i(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(s) {
  const a = _i(s), o = ur(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Be(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(jf(s.root, s.shape).map(Ue));
    return o.filter((p) => f.has(Ue(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => _a(s).some(([p]) => Be(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Mf(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function _f(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function yp(s) {
  const a = _a(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Mo(s) {
  const a = is(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = yp(s).filter(([d]) => !a.some((f) => Be(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !_f(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function gp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Af(s) {
  return In(s) ? new Set(is(s).map((a) => a.midi)).size : s.rounds;
}
function jp(s, a) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function qi(s, a, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(c > 0)) return s[Math.floor(d * s.length)];
  let f = d * c;
  for (let p = 0; p < s.length; p++)
    if (f -= a[p], f < 0) return s[p];
  return s.at(-1);
}
const Od = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function xp(s, a, o = {}, c, d = Math.random) {
  const f = Mo(s);
  if (f) throw new Error(f);
  const p = xf(s), m = Mi(s), S = p === "pitch", M = (_) => s.weak ? op(o[wf({ input: m, check: p, hint: !1, item: _ })]) : 1, v = (_) => qi(_, _.map(() => 1), d), N = is(s), T = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const _ = Ei(N, (ie) => !!c && Ue(ie) === Ue(c.position)), z = qi(_, _.map((ie) => M(`notes:${Ue(ie)}`)), d), J = be(z.midi, s.flats, S);
    return {
      ...T,
      position: z,
      midi: z.midi,
      name: J,
      item: `notes:${Ue(z)}`,
      prompt: `Etsi ${J} ${Uo[z.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const _ = (ke) => `ear-note:${Be(ke.midi)}${s.reference ? ":ref" : ""}`, z = Ei(N, (ke) => !!c && Be(ke.midi) === Be(c.midi)), J = qi(z, z.map((ke) => M(_(ke))), d), ie = s.reference ? 57 + 12 * Math.round((J.midi - 57) / 12) : void 0;
    return {
      ...T,
      position: J,
      midi: J.midi,
      name: be(J.midi, s.flats),
      item: _(J),
      choices: "note",
      reference: ie,
      sound: ie === void 0 ? [J.midi] : [ie, J.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const _ = Ei(N, (J) => !!c && J.midi === c.midi), z = qi(_, _.map((J) => M(`repeat:${J.midi}`)), d);
    return {
      ...T,
      position: z,
      midi: z.midi,
      name: be(z.midi, s.flats, !0),
      item: `repeat:${z.midi}`,
      sound: [z.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const _ = Ei(_f(s, N), (ie) => c?.interval === ie.iv && c?.direction === ie.direction), z = qi(_, _.map((ie) => M(`interval:${ie.iv}:${ie.direction}`)), d), J = v(Ei(z.pairs, (ie) => c?.reference === ie.reference.midi));
    return {
      ...T,
      position: J.target,
      midi: J.target.midi,
      name: be(J.target.midi, s.flats, !0),
      item: `interval:${z.iv}:${z.direction}`,
      interval: z.iv,
      direction: z.direction,
      reference: J.reference.midi,
      sound: [J.reference.midi, J.target.midi],
      prompt: `Kuulet ${z.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${be(J.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const L = _a(s);
  let O, E = 0;
  if (In(s)) {
    const _ = gp(s, N);
    E = _.length, O = _[a % _.length];
  } else {
    const _ = L.filter(([ie]) => N.some((ke) => Be(ke.midi - s.root) === ie)), z = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [L[a % L.length]] : L.filter(([, ie]) => ie.endsWith(s.chordTone)) : Ei(_, ([ie]) => c?.interval === ie), [J] = qi(z, z.map(([ie]) => M(Od(s, ie))), d);
    O = v(Ei(N.filter((ie) => Be(ie.midi - s.root) === J), (ie) => !!c && Ue(ie) === Ue(c.position)));
  }
  const x = Be(O.midi - s.root), I = L.find(([_]) => _ === x)[1], A = Zr(s.root, x, I), K = S ? A + tp(O.midi, A) : A, $ = s.mode === "scale" ? `${oi(s.root)}-${Fe.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : gf(s.root, s.chord), H = s.mode !== "caged" && s.activity === "degree", B = H ? `${$}: mikä aste on ${A}?` : E ? `${$} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % E + 1}/${E}: ${I}. aste (${K}).` : `${$}: etsi ${I}. aste${S ? ` (${K})` : ""}.`;
  return {
    ...T,
    position: O,
    midi: O.midi,
    name: K,
    item: Od(s, x),
    prompt: B,
    degree: I,
    interval: x,
    choices: H ? "degree" : "position"
  };
}
function _o(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Be(s) === Be(a) : s === a);
}
function Pf(s, a, o) {
  return _o(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : vp(s) ? is(s).some((c) => Ue(c) === Ue(o)) : !0 : !1;
}
function Sp(s, a) {
  const o = _i(s);
  return ur(o.strings, o.min, o.max).filter((c) => Pf(s, a, c));
}
const wt = (s, a, o) => ({ ...s, label: a, kind: o }), wp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function Np(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = _i(s), f = ur(d.strings, d.min, d.max), p = Sp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((I) => wt(I, a.name, "answer")), text: `${a.name} on ${yf[a.position.string]}: ${Ti(a.position.fret)}.` };
    const E = f.find((I) => I.string === a.position.string), x = be(E.midi, s.flats);
    return {
      marks: [wt(E, x, "anchor")],
      text: `Apupiste: ${np[E.string]} ${E.fret === 0 ? "vapaa sävel" : E.fret + ". nauhan sävel"} on ${x}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Qt[a.position.string]}-kieli, ${Ti(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((E) => wt(E, be(E.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Uo[a.position.string]}.` };
  if (s.mode === "interval") {
    const E = be(a.reference, s.flats, !0), x = f.filter((I) => I.midi === a.reference).map((I) => wt(I, E, "anchor"));
    return c ? {
      marks: [...x, ...p.map((I) => wt(I, be(I.midi, s.flats, !0), "answer"))],
      text: `${wp(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${E} → ${a.name}.`
    } : { marks: x, text: `Alkusävel ${E} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(s), S = _a(s), M = (E) => S.find(([x]) => x === Be(E.midi - s.root))?.[1] ?? "", v = Zr(s.root, a.interval, a.degree), N = m.filter((E) => Be(E.midi - s.root) === 0), T = (E) => p.some((x) => Ue(x) === Ue(E)), L = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((E) => wt(E, M(E), T(E) ? "answer" : "shape")), text: L } : { marks: m.map((E) => wt(E, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const O = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const E = m.filter((x) => Be(x.midi) === Be(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : N).map((x) => wt(x, "1", "anchor")), ...E.map((x) => wt(x, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: E.map((x) => wt(x, v, "shape")), text: `Katso ${O} nimeä: mikä on sen perussävel?` } : {
      marks: [...N.map((x) => wt(x, "1", "anchor")), ...E.map((x) => wt(x, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...N.filter((E) => !T(E)).map((E) => wt(E, "1", "anchor")), ...p.map((E) => wt(E, a.degree, "answer"))], text: L } : a.interval === 0 ? { marks: [], text: `1. aste on ${O} perussävel ${oi(s.root)}.` } : { marks: N.map((E) => wt(E, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Ep {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Af(a);
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
      this.question = xp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = jp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(a) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(a))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(a, o, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(o === "degree" ? a === f.interval : o === "note" ? _o(f.midi, a, "class") : o === "board" ? !!c && Pf(this.settings, f, c) : _o(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, S = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ue(m)}` : f.item,
      mode: this.settings.mode,
      input: o,
      check: f.check,
      expected: f.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? S.position = Ue(m) : this.settings.mode === "notes" && (S.position = Ue(f.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ao(s) {
  const a = s.filter((o) => !o.hint);
  return {
    count: s.length,
    first: s.filter((o) => o.first).length,
    solo: a.length,
    soloFirst: a.filter((o) => o.first).length,
    guided: s.length - a.length,
    ms: s.reduce((o, c) => o + c.ms, 0)
  };
}
const Po = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ir = (s) => Po.find(([a]) => a === s)?.[1] ?? s;
function bt({ label: s, children: a }) {
  const o = P.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    P.cloneElement(a, { id: o })
  ] });
}
function $d({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ r.jsx("legend", { children: s }),
    /* @__PURE__ */ r.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ r.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ r.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => d(p.value) }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("strong", { children: p.title }),
        /* @__PURE__ */ r.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Fd(s) {
  const a = _i(s), o = Af(s), c = Mi(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Ma[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Id({ s, change: a, locked: o, problem: c }) {
  const d = P.useId(), f = (v, N) => a({ ...s, [v]: N }), p = _i(s), m = Mi(s) === "note" || Mi(s) === "degree", S = ["scale", "chord", "caged"].includes(s.mode), M = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Po.map(([v, N]) => /* @__PURE__ */ r.jsx("option", { value: v, children: N }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Po.find(([v]) => v === s.mode)[2] })
    ] }),
    S && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: Fe.CHROM.map((v, N) => /* @__PURE__ */ r.jsx("option", { value: N, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Fe.SCALES).map(([v, N]) => /* @__PURE__ */ r.jsx("option", { value: v, children: N.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ci).map(([v, N]) => /* @__PURE__ */ r.jsx("option", { value: v, children: N.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ r.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            s.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ r.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ r.jsxs("option", { value: "3", children: [
            "Terssi · ",
            s.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ r.jsx("option", { value: "5", children: "Kvintti · 5" }),
          s.chord === "dom7" && /* @__PURE__ */ r.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(bt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx(bt, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (N) => f("intervals", N.target.checked ? [...s.intervals, v] : s.intervals.filter((T) => T !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(bt, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      $d,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Ma[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx($d, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(bt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ r.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ r.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(s) && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ r.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${s.shape}-muoto` : `Boksi ${s.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ r.jsxs("button", { type: "button", "aria-pressed": s.min === 0 && s.max === v, onClick: () => a({ ...s, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsx(bt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx(bt, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: Qt.map((v, N) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(N), onChange: (T) => f("strings", T.target.checked ? [...s.strings, N] : s.strings.filter((L) => L !== N)) }),
          N + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        M && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        s.mode === "ear-note" && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Dd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Cp(s) {
  return s && Object.hasOwn(Dd, s) ? Dd[s] : null;
}
const Tp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Mp({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: Tp.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
      /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ r.jsx("strong", { children: a.title }),
        /* @__PURE__ */ r.jsx("span", { children: a.description }),
        /* @__PURE__ */ r.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const _p = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, bo = 100, bf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Go(s) {
  if (s === null || s.trim() === "") return bo;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : bo;
}
function Ap() {
  try {
    return Go(localStorage.getItem(bf));
  } catch {
    return bo;
  }
}
function Pp(s) {
  try {
    localStorage.setItem(bf, String(Go(String(s))));
  } catch {
  }
}
function zd(s, a, o = !0) {
  return o ? _p[s] * Go(String(a)) / 100 : 0;
}
function Lf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const bp = 0.12, Lp = 2e3, Rp = 3;
function Op(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= bp || s.seeking || s.readyState < Rp ? !1 : s.msSinceLastFix >= Lp;
}
const $p = 1.5, Fp = 0.4, Ip = 0.5;
let Lo = null, Dp = null;
function zp(s) {
  return Lo !== null ? Lo : (Dp ??= Lf()) ? 0 : Fp;
}
class Rf {
  constructor(a = zp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, c = !1, d = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, S = this.lastFix.get(o);
    if (!Op({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, c)) return !1;
    const M = !a.paused;
    !c && M && S !== void 0 && (this.latency = Math.min($p, Math.max(0, this.latency - Ip * f)), Lo = this.latency);
    let v = a.currentTime + (M ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return M ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
const Bp = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Vp {
  constructor(a = Bp) {
    this.create = a;
  }
  create;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock() {
    try {
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch(() => {
      }), !0;
    } catch {
      return !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(a), c = this.context.createGain();
      return o.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch {
      return !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const c = this.gains.get(a);
    c && (c.gain.value = o);
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const Kp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Up = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Bd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Of() {
  const s = P.useRef(null), a = P.useRef(null), [o, c] = P.useState(!1), [d, f] = P.useState(!1), [p, m] = P.useState(!1), [S, M] = P.useState(0), [v, N] = P.useState(0), [T, L] = P.useState(""), O = P.useRef(new Rf());
  function E($ = !1) {
    const H = s.current, B = a.current;
    !H || !B || !Number.isFinite(H.currentTime) || O.current.align(H, B, $);
  }
  function x() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function I() {
    const $ = s.current, H = a.current;
    if (!(!$ || !H)) {
      if (o) {
        x();
        return;
      }
      L(""), H.muted = !d, H.volume = 0.55, $.volume = 0.75, E(!0);
      try {
        await Promise.all(d ? [$.play(), H.play()] : [$.play()]), E(), c(!0);
      } catch {
        x(), L("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function A($) {
    const H = s.current, B = a.current;
    if (!(!H || !B || !Number.isFinite($))) {
      H.currentTime = $;
      try {
        B.currentTime = $;
      } catch {
      }
      M($);
    }
  }
  function K($) {
    const H = s.current, B = a.current;
    if (f($), !!B) {
      if (B.muted = !$, !$) {
        B.pause();
        return;
      }
      !H || !o || (E(!0), B.play().catch(() => L("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return P.useEffect(() => {
    const $ = () => {
      document.hidden && (s.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $), s.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ r.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ r.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: d,
              onChange: ($) => K($.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: ($) => m($.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        I();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(S, v > 0 ? v : 1),
          disabled: !v,
          onChange: ($) => A(Number($.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Bd(S),
        " / ",
        Bd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Kp,
        loop: p,
        onLoadedMetadata: ($) => N($.currentTarget.duration),
        onTimeUpdate: ($) => {
          M($.currentTarget.currentTime), $.currentTarget.paused || E();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), M(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => L("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Up,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const $ = s.current, H = a.current;
          $?.duration && H?.duration && Math.abs($.duration - H.duration) > 0.15 && L("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => L("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    T && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: T }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Hp = 4e3;
class Vd extends Error {
  name = "MicSetupError";
}
async function Gp(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Vd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
  }, c = await navigator.mediaDevices.getUserMedia(o);
  let d;
  try {
    if (d = a ? a() : new AudioContext(), d.state !== "running") {
      let M;
      await Promise.race([
        d.resume(),
        new Promise((v, N) => {
          M = setTimeout(() => N(new Vd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Hp);
        })
      ]).finally(() => clearTimeout(M));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((M) => M.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function Wp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var yo, Kd;
function Qp() {
  if (Kd) return yo;
  Kd = 1;
  function s(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const M = Math.PI * c / this.size;
      o[c] = Math.cos(M), o[c + 1] = -Math.sin(M);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var S = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << S;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return yo = s, s.prototype.fromComplexArray = function(o, c) {
    for (var d = c || new Array(o.length >>> 1), f = 0; f < o.length; f += 2)
      d[f >>> 1] = o[f];
    return d;
  }, s.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var c = 0; c < o.length; c++)
      o[c] = 0;
    return o;
  }, s.prototype.toComplexArray = function(o, c) {
    for (var d = c || this.createComplexArray(), f = 0; f < d.length; f += 2)
      d[f] = o[f >>> 1], d[f + 1] = 0;
    return d;
  }, s.prototype.completeSpectrum = function(o) {
    for (var c = this._csize, d = c >>> 1, f = 2; f < d; f += 2)
      o[c - f] = o[f], o[c - f + 1] = -o[f + 1];
  }, s.prototype.transform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, s.prototype.realTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, s.prototype.inverseTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, s.prototype._transform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, S, M = this._bitrev;
    if (p === 4)
      for (m = 0, S = 0; m < c; m += p, S++) {
        const x = M[S];
        this._singleTransform2(m, x, f);
      }
    else
      for (m = 0, S = 0; m < c; m += p, S++) {
        const x = M[S];
        this._singleTransform4(m, x, f);
      }
    var v = this._inv ? -1 : 1, N = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var T = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var L = m + T, O = m, E = 0; O < L; O += 2, E += f) {
          const x = O, I = x + T, A = I + T, K = A + T, $ = o[x], H = o[x + 1], B = o[I], _ = o[I + 1], z = o[A], J = o[A + 1], ie = o[K], ke = o[K + 1], we = $, X = H, fe = N[E], U = v * N[E + 1], ae = B * fe - _ * U, ue = B * U + _ * fe, W = N[2 * E], le = v * N[2 * E + 1], ee = z * W - J * le, j = z * le + J * W, y = N[3 * E], te = v * N[3 * E + 1], he = ie * y - ke * te, Se = ie * te + ke * y, G = we + ee, V = X + j, ne = we - ee, C = X - j, Z = ae + he, oe = ue + Se, ce = v * (ae - he), me = v * (ue - Se), ye = G + Z, Ae = V + oe, Me = G - Z, Ie = V - oe, Qe = ne + me, Ye = C - ce, Ge = ne - me, Xe = C + ce;
          o[x] = ye, o[x + 1] = Ae, o[I] = Qe, o[I + 1] = Ye, o[A] = Me, o[A + 1] = Ie, o[K] = Ge, o[K + 1] = Xe;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], S = p[c + 1], M = p[c + d], v = p[c + d + 1], N = m + M, T = S + v, L = m - M, O = S - v;
    f[o] = N, f[o + 1] = T, f[o + 2] = L, f[o + 3] = O;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, S = d * 2, M = d * 3, v = p[c], N = p[c + 1], T = p[c + d], L = p[c + d + 1], O = p[c + S], E = p[c + S + 1], x = p[c + M], I = p[c + M + 1], A = v + O, K = N + E, $ = v - O, H = N - E, B = T + x, _ = L + I, z = m * (T - x), J = m * (L - I), ie = A + B, ke = K + _, we = $ + J, X = H - z, fe = A - B, U = K - _, ae = $ - J, ue = H + z;
    f[o] = ie, f[o + 1] = ke, f[o + 2] = we, f[o + 3] = X, f[o + 4] = fe, f[o + 5] = U, f[o + 6] = ae, f[o + 7] = ue;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, S, M = this._bitrev;
    if (p === 4)
      for (m = 0, S = 0; m < c; m += p, S++) {
        const Te = M[S];
        this._singleRealTransform2(m, Te >>> 1, f >>> 1);
      }
    else
      for (m = 0, S = 0; m < c; m += p, S++) {
        const Te = M[S];
        this._singleRealTransform4(m, Te >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, N = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var T = p >>> 1, L = T >>> 1, O = L >>> 1;
      for (m = 0; m < c; m += p)
        for (var E = 0, x = 0; E <= O; E += 2, x += f) {
          var I = m + E, A = I + L, K = A + L, $ = K + L, H = o[I], B = o[I + 1], _ = o[A], z = o[A + 1], J = o[K], ie = o[K + 1], ke = o[$], we = o[$ + 1], X = H, fe = B, U = N[x], ae = v * N[x + 1], ue = _ * U - z * ae, W = _ * ae + z * U, le = N[2 * x], ee = v * N[2 * x + 1], j = J * le - ie * ee, y = J * ee + ie * le, te = N[3 * x], he = v * N[3 * x + 1], Se = ke * te - we * he, G = ke * he + we * te, V = X + j, ne = fe + y, C = X - j, Z = fe - y, oe = ue + Se, ce = W + G, me = v * (ue - Se), ye = v * (W - G), Ae = V + oe, Me = ne + ce, Ie = C + ye, Qe = Z - me;
          if (o[I] = Ae, o[I + 1] = Me, o[A] = Ie, o[A + 1] = Qe, E === 0) {
            var Ye = V - oe, Ge = ne - ce;
            o[K] = Ye, o[K + 1] = Ge;
            continue;
          }
          if (E !== O) {
            var Xe = C, ut = -Z, Je = V, Ve = -ne, it = -v * ye, Bt = -v * me, Yt = -v * ce, Nt = -v * oe, ln = Xe + it, Jt = ut + Bt, Xt = Je + Nt, _t = Ve - Yt, Ne = m + L - E, Vt = m + T - E;
            o[Ne] = ln, o[Ne + 1] = Jt, o[Vt] = Xt, o[Vt + 1] = _t;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], S = p[c + d], M = m + S, v = m - S;
    f[o] = M, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, S = d * 2, M = d * 3, v = p[c], N = p[c + d], T = p[c + S], L = p[c + M], O = v + T, E = v - T, x = N + L, I = m * (N - L), A = O + x, K = E, $ = -I, H = O - x, B = E, _ = I;
    f[o] = A, f[o + 1] = 0, f[o + 2] = K, f[o + 3] = $, f[o + 4] = H, f[o + 5] = 0, f[o + 6] = B, f[o + 7] = _;
  }, yo;
}
var Yp = Qp();
const Jp = /* @__PURE__ */ zm(Yp);
class Yr {
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
  static forFloat32Array(a) {
    return new Yr(
      a,
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
  static forFloat64Array(a) {
    return new Yr(
      a,
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
  static forNumberArray(a) {
    return new Yr(a, (o) => Array(o));
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
  constructor(a, o) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new Jp(qp(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(a, o = this._bufferSupplier(a.length)) {
    if (a.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${a.length}`
      );
    for (let d = 0; d < a.length; d++)
      this._paddedInputBuffer[d] = a[d];
    for (let d = a.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let d = 0; d < c.length; d += 2)
      c[d] = c[d] * c[d] + c[d + 1] * c[d + 1], c[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < a.length; d++)
      o[d] = this._inverseBuffer[2 * d];
    return o;
  }
}
function Xp(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function Zp(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], S = f / 2 - p + m / 2, M = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, N = -M / (2 * S), T = S * N * N + M * N + v;
  return [N, T];
}
class Jr {
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
  static forFloat32Array(a) {
    return new Jr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Jr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Jr(a, (o) => Array(o));
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
  constructor(a, o) {
    this._autocorrelator = new Yr(a, o), this._nsdfBuffer = o(a);
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
  set clarityThreshold(a) {
    if (!Number.isFinite(a) || a <= 0 || a > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = a;
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
  set minVolumeAbsolute(a) {
    if (!Number.isFinite(a) || a < 0 || a > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = a;
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
  set minVolumeDecibels(a) {
    if (!Number.isFinite(a) || a > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (a / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(a) {
    if (!Number.isFinite(a) || a <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = a;
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
  findPitch(a, o) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const c = Xp(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((S) => this._nsdfBuffer[S])), f = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * d
    ), [p, m] = Zp(
      // @ts-expect-error resultIndex is guaranteed to be defined
      f,
      this._nsdfBuffer
    );
    return [o / p, Math.min(m, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(a) {
    if (this._minVolumeAbsolute === 0) return !1;
    let o = 0;
    for (let c = 0; c < a.length; c++)
      o += a[c] ** 2;
    return Math.sqrt(o / a.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(a) {
    this._autocorrelator.autocorrelate(a, this._nsdfBuffer);
    let o = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && o > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / o, o -= a[c] ** 2 + a[a.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function qp(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function ev(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const tv = 0.05, nv = 1.5;
class iv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = ev(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * tv))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new rv();
  onset = new sv();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(a) {
    Object.assign(this.opts, a);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const a = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(a));
    };
    this.rafId = requestAnimationFrame(a);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const a of this.analysers) a.disconnect();
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
  processFrame(a) {
    const {
      minClarity: o = 0.9,
      minRms: c = 0.01,
      stabilityMs: d = 240,
      centsTolerance: f = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: S,
      onStableNote: M
    } = this.opts, v = this.analysers.map((_, z) => (_.getFloatTimeDomainData(this.buffers[z]), Ud(this.buffers[z], this.buffers[z].length - this.shortLength))), N = v.indexOf(Math.max(...v));
    N !== this.channel && v[N] > (v[this.channel] ?? 0) * nv && (this.channel = N);
    const T = this.buffers[this.channel], L = v[this.channel], O = av(T, T.length - this.shortLength), E = { rms: L, peak: O, channel: this.channel, levels: v }, x = L < c, I = this.onset.feed(L, a, c);
    if (x && Ud(T, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), S?.({ ...E, status: "silent" });
      return;
    }
    const [A, K] = this.detector.findPitch(T, this.mic.context.sampleRate);
    if (!isFinite(A) || K < o) {
      this.gate.feed(null, a, d, x, I), S?.({ ...E, status: x ? "silent" : "unclear", clarity: isFinite(K) ? K : 0 });
      return;
    }
    if (A < p || A > m) {
      this.gate.feed(null, a, d, x, I), S?.({ ...E, status: "out-of-range", frequency: A, clarity: K });
      return;
    }
    const { midi: $, cents: H } = Zm(A);
    if (Math.abs(H) > f) {
      this.gate.feed(null, a, d, x, I), S?.({ ...E, status: "off-pitch", frequency: A, clarity: K, midi: $, cents: H });
      return;
    }
    S?.({ ...E, status: "pitch", frequency: A, clarity: K, midi: $, cents: H });
    const B = this.gate.feed($, a, d, x, I);
    B !== null && M?.({ midi: $, frequency: A, cents: H, clarity: K, timestamp: a, heldMs: B.heldMs });
  }
}
class rv {
  constructor(a = 120, o = 80) {
    this.releaseMs = a, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, o, c, d, f) {
    if (d ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), a === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class sv {
  constructor(a = 2, o = 300, c = 150) {
    this.ratio = a, this.windowMs = o, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, o, c) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: a }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : a;
    return this.history.push({ time: o, rms: a }), a < c * 1.5 || a < d * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: a }], !0);
  }
}
function Ud(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function av(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const or = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let tr;
function $f() {
  return (!tr || tr.state === "closed") && (tr = new AudioContext()), tr;
}
function lv() {
  const s = tr;
  tr = void 0, s?.close().catch(() => {
  });
}
const Ff = (s) => s instanceof Error ? s.name : "";
function ov(s) {
  const a = Ff(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class uv {
  constructor(a = (o) => Gp(o, $f)) {
    this.opener = a;
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
  async start(a, o, c) {
    this.stop();
    const d = this.generation;
    let f, p = !1;
    try {
      f = await this.opener(a || void 0);
    } catch (m) {
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Ff(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new iv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((M) => M.addEventListener("ended", m, { once: !0, signal: S.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: S.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
    } catch (m) {
      throw this.stop(), m;
    }
  }
  setOptions(a) {
    this.loop?.setOptions(a);
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
function If(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Hd = (s) => Math.max(0, Math.min(1, (or(s) + 60) / 60));
function cv(s) {
  const a = [...s].sort((c, d) => c - d), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function go(s) {
  const a = () => s.state === "running";
  if (a()) return;
  let o;
  try {
    await Promise.race([
      s.resume(),
      new Promise((c, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function Aa(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rs {
  constructor(a = $f) {
    this.provide = a;
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
  async play(a, o) {
    this.stop();
    const c = this.token, d = this.provide();
    if (await go(d), c !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (M, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((M, v) => {
      const N = d.createOscillator(), T = d.createGain(), L = d.currentTime + 0.05 + v * 0.8;
      m ? N.setPeriodicWave(m) : N.type = "triangle", N.frequency.value = ko(M), T.gain.setValueAtTime(0, L), T.gain.linearRampToValueAtTime(0.22, L + 0.012), T.gain.exponentialRampToValueAtTime(1e-3, L + 0.7), N.connect(T), T.connect(f), N.start(L), N.stop(L + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((M) => {
      this.settle = M, this.timer = setTimeout(() => M(!0), a.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, c, d) {
    if (this.stop(), !a.length) return !1;
    const f = this.token, p = this.provide();
    if (await go(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), S = p.createGain();
    S.connect(p.destination), this.master = S;
    const M = Array.from({ length: 12 }, (O, E) => 1 / (E + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...M.map(() => 0)]),
      new Float32Array([0, ...M])
    ), N = p.currentTime + 0.05;
    let T = 0;
    return a.forEach((O, E) => {
      if (!Number.isFinite(O.beat) || O.beat < 0 || !Number.isFinite(O.duration) || O.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const x = N + O.beat * m, I = O.duration * m, A = x + Math.max(0.08, I * 0.94), K = p.createOscillator(), $ = p.createGain();
      v ? K.setPeriodicWave(v) : K.type = "triangle", K.frequency.value = ko(O.midi), $.gain.setValueAtTime(0, x), $.gain.linearRampToValueAtTime(0.22, x + 0.012), $.gain.exponentialRampToValueAtTime(1e-3, A - 0.01), K.connect($), $.connect(S), K.start(x), K.stop(A), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(E);
      }, 50 + O.beat * m * 1e3));
      const H = a[E + 1]?.beat ?? 1 / 0;
      d && H > O.beat + O.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + O.beat * m * 1e3 + I * 1e3)), T = Math.max(T, O.beat + O.duration);
    }), !await new Promise((O) => {
      this.settle = O, this.timer = setTimeout(() => O(!0), 50 + T * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], S.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(a) {
    this.adjustLoopTempo?.(a);
  }
  async loop(a, o, c = 75) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, f = this.provide();
    if (await go(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (E, x) => 1 / (x + 1) ** 1.3), S = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let M = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (E) => {
      d === this.token && Number.isFinite(E) && (M = 60 / Math.max(40, Math.min(140, E)));
    };
    const v = 1.6;
    let N = f.currentTime + 0.05, T = 0;
    const L = [], O = () => {
      if (d === this.token) {
        if (N < f.currentTime - 0.02) {
          const E = Math.ceil((f.currentTime - N) / M);
          N += E * M, T = (T + E) % a.length, L.length = 0;
        }
        for (; N < f.currentTime + v; ) {
          const E = a[T], x = T, I = N, A = f.createOscillator(), K = f.createGain();
          S ? A.setPeriodicWave(S) : A.type = "triangle", A.frequency.value = ko(E), K.gain.setValueAtTime(0, I), K.gain.linearRampToValueAtTime(0.22, I + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, I + M * 0.975), A.connect(K), K.connect(p), A.start(I), A.stop(I + M * 0.985), L.push({ at: I, index: x }), N += M, T = (T + 1) % a.length;
        }
        for (; L.length && L[0].at <= f.currentTime + 0.01; ) {
          const E = L.shift();
          o?.(E.index);
        }
      }
    };
    return O(), this.loopTick = setInterval(O, 25), new Promise((E) => {
      this.settle = E;
    });
  }
}
function ci(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const S = { position: d === null || f === null ? null : Oe(d, f), beat: o, duration: p };
    return o += p, S;
  });
  return { label: s, events: c, beats: o };
}
function jo(s, ...a) {
  let o = 0;
  const c = a.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: s, events: c, beats: o };
}
const Gd = ci("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Wd = ci("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), dv = ci("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Qd = ci("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Yd = ci("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), fv = ci("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Jd = ci("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Xd = ci("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), hv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Gd, Wd],
    whole: jo("Melodia · A + B + C", Gd, Wd, dv),
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
    fragments: [Qd, Yd],
    whole: jo("Ukko Nooa · A + B", Qd, Yd),
    bonus: fv,
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
    fragments: [Jd, Xd],
    whole: jo("Siirtymämelodia · A + B", Jd, Xd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function mv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const Zd = ["e", "B", "G", "D", "A", "E"];
function Wo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = hv[s], [f, p] = P.useState(a === "fingering" ? "a" : "whole"), [m, S] = P.useState(d.tempo), [M, v] = P.useState(!1), [N, T] = P.useState(!1), [L, O] = P.useState(a !== "memory"), [E, x] = P.useState(!1), [I, A] = P.useState(null), [K, $] = P.useState(""), H = P.useRef(new rs()), B = P.useRef(0);
  function _() {
    B.current++, H.current.stop(), x(!1), A(null);
  }
  P.useEffect(() => {
    c && (c.current = _);
    const y = () => {
      document.hidden && _();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), B.current++, H.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const z = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], J = z.find((y) => y.id === f) ?? z[0], ie = J.clip, ke = mv(ie), we = I === null ? null : ke[I]?.beat ?? null, X = we === null ? null : ie.events.find((y) => y.beat === we)?.position ?? null, fe = P.useRef(null);
  Nf(fe, ".melody-playing", E && we !== null ? String(we) : "", { enabled: M && N });
  const U = ie.beats / 4, ae = [...new Map(ie.events.filter((y) => y.position).map((y) => [Ue(y.position), y.position])).values()], ue = ae.map((y) => y.fret), W = ae.filter((y) => L || X?.string === y.string && X.fret === y.fret).map((y) => ({
    ...y,
    label: be(y.midi),
    kind: X?.string === y.string && X.fret === y.fret ? "playing" : Be(y.midi) === d.tonic ? "answer" : "shape"
  })), le = {
    strings: [...new Set(ae.map((y) => y.string))],
    min: Math.min(...ue),
    max: Math.max(...ue),
    fixed: "box"
  };
  async function ee() {
    if (E) {
      _();
      return;
    }
    o?.();
    const y = ++B.current;
    H.current.stop(), x(!0), A(null), $("");
    try {
      await H.current.playTimed(ke, m, (te) => {
        y === B.current && A(te);
      }, () => {
        y === B.current && A(null);
      });
    } catch (te) {
      y === B.current && $(Aa(te));
    } finally {
      y === B.current && (x(!1), A(null));
    }
  }
  function j(y) {
    _(), $(""), p(y);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (y) => {
    const te = y.currentTarget.open;
    v(te), te || _();
  }, children: [
    /* @__PURE__ */ r.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    M && /* @__PURE__ */ r.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ r.jsx("h4", { children: d.title }),
      /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        U.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-instruction", children: a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      a === "fingering" && d.bonus && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ r.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        d.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: z.map((y) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": J.id === y.id,
          onClick: () => j(y.id),
          children: y.name
        },
        y.id
      )) }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": E, onClick: () => {
          ee();
        }, children: E ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ r.jsx("select", { value: m, onChange: (y) => {
            _(), S(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, te) => y - te).filter((y, te, he) => he.indexOf(y) === te).map((y) => /* @__PURE__ */ r.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": N, onClick: () => T((y) => !y), children: N ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      K && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: K }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: E && I !== null ? `Nyt soi ${be(ke[I].midi)} · ${Zd[X.string]}-kieli, ${X.fret}. nauha` : E ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(ui, { area: le, marks: W, disabled: !0, follow: "playing", caption: `${d.title}, ${J.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": L,
              onClick: () => O((y) => !y),
              children: L ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      N && /* @__PURE__ */ r.jsxs("div", { ref: fe, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${J.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            ie.events.map((y, te) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, te))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: Zd.map((y, te) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: y }),
            ie.events.map((he, Se) => {
              const G = he.position?.string === te, V = G && we === he.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${he.beat % 4 === 0 ? "bar-start " : ""}${V ? "melody-playing " : ""}${G && Be(he.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${y}-kieli, ${he.position.fret}. nauha, ${be(he.position.midi)}` : void 0,
                  children: G ? he.position.fret : "—"
                },
                Se
              );
            })
          ] }, te)) })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Ro = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [1, 2]), Df = [...new Map(Ro.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Oe(o, c);
  return [Ue(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ea = [5, 4, 3, 2, 1, 0].flatMap((s) => Df.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), Oo = [
  ...Ea,
  ...Ea.slice(1, -1).reverse()
], pv = [...Oo, Ea[0]], qd = new Set(
  Ro[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Oe(a, o);
    return Ue(c);
  })).filter((s) => Ro[1].positions[0].strings.flatMap((a, o) => a.map((c) => Ue(Oe(o, c)))).includes(s))
), vv = [
  Oe(5, 5),
  Oe(5, 8),
  Oe(5, 10),
  Oe(4, 7),
  Oe(4, 10),
  Oe(3, 7),
  Oe(3, 10),
  Oe(3, 7),
  Oe(4, 10),
  Oe(4, 7),
  Oe(5, 10),
  Oe(5, 8),
  Oe(5, 5)
], zf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Bf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", xo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ef = (s) => Be(s) === 9;
function tf() {
  try {
    const s = Number(localStorage.getItem(zf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function kv() {
  try {
    const s = Number(localStorage.getItem(Bf));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function yv({ onBack: s, onPosition: a }) {
  const [o, c] = P.useState(tf), [d, f] = P.useState(tf), [p, m] = P.useState(!1), [S, M] = P.useState("roots"), [v, N] = P.useState(kv), [T, L] = P.useState(null), [O, E] = P.useState(null), [x, I] = P.useState(""), A = P.useRef(new rs()), K = P.useRef(0), $ = P.useRef(null), H = O === null ? null : Oo[O];
  function B() {
    $.current?.(), K.current++, A.current.stop(), L(null), E(null);
  }
  P.useEffect(() => {
    const X = () => {
      document.hidden && (K.current++, A.current.stop(), L(null), E(null));
    };
    return document.addEventListener("visibilitychange", X), () => {
      document.removeEventListener("visibilitychange", X), K.current++, A.current.stop();
    };
  }, []);
  async function _(X) {
    $.current?.();
    const fe = ++K.current;
    A.current.stop(), E(null), I(""), L(X);
    try {
      X === "transition" ? await A.current.play(vv.map((U) => U.midi)) : X === "once" ? await A.current.play(pv.map((U) => U.midi)) : await A.current.loop(Oo.map((U) => U.midi), (U) => {
        fe === K.current && E(U);
      }, v);
    } catch (U) {
      fe === K.current && I(Aa(U));
    } finally {
      fe === K.current && (L(null), E(null));
    }
  }
  function z(X) {
    const fe = Math.max(40, Math.min(140, X));
    N(fe), A.current.setLoopTempo(fe);
    try {
      localStorage.setItem(Bf, String(fe));
    } catch {
    }
  }
  function J(X) {
    X > o || (B(), f(X), m(!1), M("roots"));
  }
  function ie() {
    B();
    const X = Math.min(4, d + 1);
    if (f(X), m(!1), M("roots"), X > o) {
      c(X);
      try {
        localStorage.setItem(zf, String(X));
      } catch {
      }
    }
  }
  const ke = (X, fe) => d < 2 || d === 2 && p && qd.has(fe) || d === 3 && (S === "all" || S === "roots" && ef(X)), we = Df.filter((X) => ke(X.midi, Ue(X))).map((X) => ({
    ...X,
    label: d < 2 || d === 2 && p || d === 3 && S === "all" ? be(X.midi) : "A",
    kind: d < 2 && H?.string === X.string && H?.fret === X.fret ? "playing" : ef(X.midi) ? "answer" : qd.has(Ue(X)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      B(), s();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ r.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        B(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        B(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => J(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: xo.map((X, fe) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: fe === d ? "journey-step current" : "journey-step",
        "aria-current": fe === d ? "step" : void 0,
        disabled: fe > o,
        onClick: () => J(fe),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: fe > o ? "🔒" : fe < o ? "✓" : fe + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: X.title })
        ]
      },
      X.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: xo[d].title }),
        /* @__PURE__ */ r.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: xo[d].detail }),
      d < 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        d === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ r.jsxs("strong", { children: [
              Ea.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ r.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ r.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        d === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ r.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => z(v - 5), children: "− 5" }),
          /* @__PURE__ */ r.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => z(v + 5), children: "+ 5" }),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "whole",
              onClick: () => T === "whole" ? B() : void _("whole"),
              children: T === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "once",
              onClick: () => T === "once" ? B() : void _("once"),
              children: T === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "transition",
              onClick: () => T === "transition" ? B() : void _("transition"),
              children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((X) => !X), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => J(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((X) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: X.value,
                  checked: S === X.value,
                  onChange: () => M(X.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: X.name })
            ] }, X.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => T === "once" ? B() : void _("once"), children: T === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => T === "transition" ? B() : void _("transition"), children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: T === "whole" ? H && d < 2 ? `Nyt soi ${be(H.midi, !1, !0)} · ${Qt[H.string]}-kieli, nauha ${H.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : T === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : T === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        x && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: x }),
        /* @__PURE__ */ r.jsx(
          ui,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            marks: we,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? S === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : S === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: B,
            stopHandleRef: $
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx(Of, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: ie, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ r.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => J(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Xr = "musiikin-kartta:skaalapolku:v1", ga = "musiikin-kartta:skaalapolku:position-2:v1", So = "musiikin-kartta:skaalapolku:position-3:v1", ja = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ca = "musiikin-kartta:skaalapolku:active-position:v1", Vf = "musiikin-kartta:skaalapolku:tempo:v1", rr = 75, $o = 40, Fo = 140;
function gv() {
  try {
    const s = localStorage.getItem(Vf);
    if (s === null) return rr;
    const a = Number(s);
    return Number.isInteger(a) && a >= $o && a <= Fo && a % 5 === 0 ? a : rr;
  } catch {
    return rr;
  }
}
const wo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], nf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nn(s = Xr) {
  try {
    const a = Number(localStorage.getItem(s));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function No() {
  try {
    const s = localStorage.getItem(Ca);
    return s === "3" && Nn(ja) === 4 ? 3 : Nn(Xr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function jv() {
  try {
    return Nn(ga) === 4 && localStorage.getItem(Ca) === "bridge";
  } catch {
    return !1;
  }
}
function xv({ onBack: s }) {
  const [a, o] = P.useState(No), [c, d] = P.useState(jv), [f, p] = P.useState(() => ({
    1: Nn(Xr),
    2: Nn(ga),
    3: Nn(So)
  })), [m, S] = P.useState(() => Nn(No() === 3 ? So : No() === 2 ? ga : Xr)), M = f[a], [v, N] = P.useState(!1), [T, L] = P.useState("roots"), [O, E] = P.useState(gv), [x, I] = P.useState(null), [A, K] = P.useState(null), [$, H] = P.useState(""), B = P.useRef(new rs()), _ = P.useRef(0), z = P.useRef(null);
  function J(G) {
    const V = Math.max($o, Math.min(Fo, G));
    E(V), B.current.setLoopTempo(V);
    try {
      localStorage.setItem(Vf, String(V));
    } catch {
    }
  }
  function ie() {
    z.current?.(), _.current++, B.current.stop(), I(null), K(null);
  }
  P.useEffect(() => {
    const G = () => {
      document.hidden && (_.current++, B.current.stop(), I(null), K(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), _.current++, B.current.stop();
    };
  }, []);
  const ke = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [a])[0].positions[0], we = ke.strings.flatMap((G, V) => G.map((ne) => Oe(V, ne))).sort((G, V) => G.midi - V.midi || V.string - G.string), X = [...we, ...we.slice(1, -1).reverse()], fe = A === null ? null : X[A], U = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ae = ke.start, ue = ke.end, W = (G) => Be(G) === 9, le = (G) => m < 2 ? !0 : m === 2 ? v && W(G) : T === "scale" || T === "roots" && W(G), ee = we.filter((G) => le(G.midi)).map((G) => ({
    ...G,
    label: m < 2 || m === 3 && T === "scale" ? be(G.midi) : "A",
    kind: m < 2 && fe?.string === G.string && fe.fret === G.fret ? "playing" : W(G.midi) ? "answer" : "shape"
  }));
  async function j(G) {
    z.current?.();
    const V = ++_.current;
    B.current.stop(), K(null), H(""), I(G);
    try {
      G === "phrase" ? await B.current.play(U) : await B.current.loop(X.map((ne) => ne.midi), (ne) => {
        V === _.current && K(ne);
      }, m === 2 ? O : rr);
    } catch (ne) {
      V === _.current && H(Aa(ne));
    } finally {
      V === _.current && (I(null), K(null));
    }
  }
  function y() {
    ie();
    const G = Math.min(4, m + 1);
    if (S(G), N(!1), L("roots"), G > M) {
      p((ne) => ({ ...ne, [a]: G }));
      const V = a === 1 ? Xr : a === 2 ? ga : So;
      try {
        localStorage.setItem(V, String(G));
      } catch {
      }
    }
  }
  function te(G) {
    G > M || (ie(), S(G), N(!1), L("roots"));
  }
  function he(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && Nn(ja) < 4)) {
      ie(), d(!1), o(G), S(f[G]), N(!1), L("roots"), H("");
      try {
        localStorage.setItem(Ca, String(G));
      } catch {
      }
    }
  }
  function Se() {
    if (!(f[2] < 4)) {
      ie(), d(!0), N(!1), H("");
      try {
        localStorage.setItem(Ca, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(yv, { onBack: s, onPosition: he }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ie(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      ae,
      "–",
      ue,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => he(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => he(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Se,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Nn(ja) < 4,
          onClick: () => he(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: wo.map((G, V) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: V === m ? "journey-step current" : "journey-step",
        "aria-current": V === m ? "step" : void 0,
        disabled: V > M,
        onClick: () => te(V),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: V > M ? "🔒" : V < M ? "✓" : V + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: V === 4 ? `Positio ${a} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : wo[m].title }),
        /* @__PURE__ */ r.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: wo[m].detail }),
      m < 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        m === 0 && /* @__PURE__ */ r.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ r.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ r.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ r.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: O <= $o,
              onClick: () => J(O - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            O,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: O >= Fo,
              onClick: () => J(O + 5),
              children: "+ 5"
            }
          ),
          O !== rr && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => J(rr),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "loop",
              onClick: () => x === "loop" ? ie() : void j("loop"),
              children: x === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => x === "phrase" ? ie() : void j("phrase"), children: x === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "loop" ? fe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${be(fe.midi, !1, !0)} · ${Qt[fe.string]}-kieli, nauha ${fe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        $ && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: $ }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => N((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              nf.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: T === G.value,
                    onChange: () => L(G.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              j("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: ae, max: ue, fixed: "box" }, marks: ee, disabled: !0, follow: "playing", caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? nf.find((G) => G.value === T).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: ae, max: ue, fixed: "box" }, marks: ee, disabled: !0, follow: "playing", caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: ie,
            stopHandleRef: z
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(Of, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: y, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => he(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => he(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Nn(ja) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Sv = ["ionian", "aeolian"], nr = {
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
      Oe(4, 3),
      Oe(4, 5),
      Oe(3, 2),
      Oe(3, 3),
      Oe(3, 5),
      Oe(2, 2),
      Oe(2, 4),
      Oe(2, 5)
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
      Oe(5, 5),
      Oe(5, 7),
      Oe(5, 8),
      Oe(4, 5),
      Oe(4, 7),
      Oe(4, 8),
      Oe(3, 5),
      Oe(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, Kf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", Uf = "musiikin-kartta:moodipolku:active:v1", wv = (s) => {
  const a = nr[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Nv = (s) => [...wv(s), nr[s].positions[0]], rf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function xa(s) {
  try {
    const a = Number(localStorage.getItem(Kf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function sf() {
  try {
    return localStorage.getItem(Uf) === "aeolian" && xa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Ev({ onBack: s }) {
  const [a, o] = P.useState(sf), [c, d] = P.useState(() => ({
    ionian: xa("ionian"),
    aeolian: xa("aeolian")
  })), [f, p] = P.useState(() => xa(sf())), [m, S] = P.useState(null), [M, v] = P.useState(null), [N, T] = P.useState(!1), [L, O] = P.useState("roots"), [E, x] = P.useState(""), [I, A] = P.useState(null), [K, $] = P.useState(null), H = P.useRef(new rs()), B = P.useRef(0), _ = P.useRef(null), z = nr[a], J = Nv(a), ie = m === "scale" && M !== null ? J[M] : null;
  function ke() {
    _.current?.(), B.current++, H.current.stop(), S(null), v(null);
  }
  P.useEffect(() => {
    const y = () => {
      document.hidden && (B.current++, H.current.stop(), S(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), B.current++, H.current.stop();
    };
  }, []);
  async function we(y, te, he = !1) {
    _.current?.();
    const Se = ++B.current;
    H.current.stop(), v(null), x(""), S(y);
    try {
      const G = he ? await H.current.loop(te, void 0, 75) : await H.current.play(te, (V) => {
        Se === B.current && y === "scale" && v(V);
      });
      return Se === B.current && G;
    } catch (G) {
      return Se === B.current && x(Aa(G)), !1;
    } finally {
      Se === B.current && (S(null), v(null));
    }
  }
  function X(y) {
    y > c[a] || (ke(), p(y), A(null), $(null), T(!1), O("roots"), x(""));
  }
  function fe() {
    ke();
    const y = Math.min(5, f + 1);
    if (p(y), A(null), $(null), T(!1), O("roots"), y > c[a]) {
      d((te) => ({ ...te, [a]: y }));
      try {
        localStorage.setItem(Kf(a), String(y));
      } catch {
      }
    }
  }
  function U(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      ke(), o(y), p(c[y]), A(null), $(null), T(!1), O("roots"), x("");
      try {
        localStorage.setItem(Uf, y);
      } catch {
      }
    }
  }
  async function ae() {
    ke(), $(null), A(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await we("comparison", nr[y].phrase) && A(y);
  }
  const ue = (y) => Be(y) === z.tonic, W = z.positions.filter((y) => f < 2 ? !0 : f === 2 ? N && ue(y.midi) : f === 4 ? L === "all" || L === "roots" && ue(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && L === "roots" ? z.tonicName : be(y.midi),
    kind: ie?.string === y.string && ie.fret === y.fret ? "playing" : ue(y.midi) ? "answer" : "shape"
  })), le = [...new Set(z.positions.map((y) => y.string))], ee = Math.min(...z.positions.map((y) => y.fret)), j = Math.max(...z.positions.map((y) => y.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ke(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Sv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "mode-path-title", children: [
      z.title,
      " · ",
      z.alias
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: z.explanation }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: z.noteNames }),
      " · Pohjasävel ",
      z.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => U("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => U("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      rf.map((y, te) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === te ? "journey-step current" : "journey-step",
          "aria-current": f === te ? "step" : void 0,
          disabled: te > c[a],
          onClick: () => X(te),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: te > c[a] ? "🔒" : te < c[a] ? "✓" : te + 1 }),
            /* @__PURE__ */ r.jsx("span", { children: y })
          ]
        },
        y
      )),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => X(5),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ r.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : rf[f] }),
        /* @__PURE__ */ r.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          z.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          z.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ r.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        z.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      f === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ r.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              disabled: m !== null,
              onClick: () => {
                ae();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          I !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            we("comparison", nr[I].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        I !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || m !== null,
                onClick: () => $("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || m !== null,
                onClick: () => $("aeolian"),
                children: "A"
              }
            )
          ] }),
          K !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            K === I ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            nr[I].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Soita ",
          z.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          z.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          z.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([y, te]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: y,
                checked: L === y,
                onChange: () => O(y)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: te })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => T((y) => !y), children: N ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ke() : void we("scale", J.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ke() : void we("accompaniment", z.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && ie && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        be(ie.midi, !1, !0),
        " · ",
        Qt[ie.string],
        "-kieli, nauha ",
        ie.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        ui,
        {
          area: { strings: le, min: ee, max: j, fixed: "box" },
          marks: W,
          follow: "playing",
          disabled: !0,
          caption: z.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ r.jsx(
        Wo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: ke,
          stopHandleRef: _
        },
        `nooa:${f}`
      ),
      E && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: E }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: fe, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          z.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => X(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => U("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Cv({ onBack: s }) {
  const [a, o] = P.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(xv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(Ev, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ r.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ r.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ r.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ r.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ r.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const er = [0, 2, 4, 5, 7, 9, 11], Tv = 1200, va = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Mv({ onBack: s }) {
  const [a, o] = P.useState(0), [c, d] = P.useState([]), [f, p] = P.useState(!1), [m, S] = P.useState(""), [M, v] = P.useState(0), [N, T] = P.useState(!1), L = a >= er.length, O = er[Math.min(a, er.length - 1)], E = ur(va.strings, va.min, va.max).filter((_) => Be(_.midi) === O), x = E.filter((_) => !c.includes(Ue(_))), I = x.length === 0 && !L, A = !I && f ? x[0] : void 0;
  P.useEffect(() => {
    if (!N || !I) return;
    const _ = window.setTimeout(() => {
      o((z) => z + 1), d([]), p(!1), S("");
    }, Tv);
    return () => window.clearTimeout(_);
  }, [N, I]);
  const K = [
    ...E.filter((_) => c.includes(Ue(_))).map((_) => ({ ..._, kind: "answer", label: be(_.midi) })),
    ...A ? [{ ...A, kind: "anchor", label: "?" }] : []
  ];
  function $(_) {
    if (L || I) return;
    const z = Ue(_);
    if (Be(_.midi) !== O) {
      v((ke) => ke + 1), S(`Valitsit sävelen ${be(_.midi)}. Etsi ${be(O)}.`);
      return;
    }
    if (c.includes(z)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const J = [...c, z];
    d(J), p(!1);
    const ie = E.length - J.length;
    S(ie ? `Oikein! ${be(O)} löytyi ${Qt[_.string]}-kieleltä (${Ti(_.fret)}). Vielä ${ie}.` : `Löysit kaikki ${E.length} ${be(O)}-säveltä tällä alueella.`);
  }
  function H() {
    I && (o((_) => _ + 1), d([]), p(!1), S(""));
  }
  function B() {
    o(0), d([]), p(!1), S(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !L && /* @__PURE__ */ r.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          checked: N,
          onChange: (_) => T(_.target.checked)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: L ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        M ? `Vääriä valintoja yhteensä ${M}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: B, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          be(O),
          "-sävelet"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          er.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        be(O),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        E.length
      ] }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: va,
          marks: K,
          onAnswer: $,
          disabled: I,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: I ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !I && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((_) => !_),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        I && (N ? /* @__PURE__ */ r.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === er.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: H, children: a === er.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const _v = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Eo = ["C", "G", "D", "Em"], af = ["C", "G", "D", "Em", "Am", "E", "A"], Av = { min: 0, max: 3, fixed: "" };
function lf(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Pv({ onBack: s }) {
  const [a, o] = P.useState(4), [c, d] = P.useState(() => lf(Eo)), [f, p] = P.useState(0), [m, S] = P.useState(null), [M, v] = P.useState([]), [N, T] = P.useState(0), L = f >= c.length, O = _v[c[Math.min(f, c.length - 1)]], E = a === 4 ? Eo : af, x = O.frets.flatMap((_, z) => _ === null ? [] : [z]), I = O.frets.flatMap((_, z) => _ === null ? [z] : []), A = { ...Av, strings: x }, K = O.frets.flatMap((_, z) => _ === null ? [] : [{
    ...Oe(z, _),
    kind: _ === 0 ? "anchor" : "shape",
    label: _ === 0 ? "○" : "●"
  }]);
  function $(_ = a) {
    o(_), d(lf(_ === 4 ? Eo : af)), p(0), S(null), v([]), T(0);
  }
  function H(_) {
    m || L || M.includes(_) || (_ === O.name ? S(_) : (v((z) => [...z, _]), T((z) => z + 1)));
  }
  function B() {
    m && (p((_) => _ + 1), S(null), v([]));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ r.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 4,
            onChange: () => $(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 7,
            onChange: () => $(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: L ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        N ? `Vääriä valintoja yhteensä ${N}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => $(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: A,
          marks: K,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: E.map((_) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === _ ? "right" : M.includes(_) ? "wrong" : "",
          disabled: !!m || M.includes(_),
          "aria-pressed": m === _,
          onClick: () => H(_),
          children: _
        },
        _
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : M.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${O.name}-sointu.` : M.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: B, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ge = (s, a) => ({ first: s, ...a ? { second: a } : {} }), sr = () => [
  ge("Gm", "F"),
  ge("Gm"),
  ge("B♭", "F"),
  ge("Gm"),
  ge("Gm", "F"),
  ge("Gm"),
  ge("E♭", "F"),
  ge("Gm")
], ar = () => [
  ge("B♭", "F"),
  ge("Gm", "Dm"),
  ge("E♭", "F"),
  ge("Gm", "Dm")
], lr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Hf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], bv = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: sr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ar(), ge("E♭"), { ...ge("E♭"), passingBass: "F" }],
    lyrics: lr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ge("Gm", "F"), ge("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: sr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ar(), ge("E♭"), ge("F")],
    lyrics: lr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: sr(),
    lyrics: Hf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ar(), ge("E♭", "F"), ge("Gm")],
    lyrics: lr
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ge("E♭", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("E♭", "F"),
      ge("Gm", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("Gm", "F"),
      ge("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Lv = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: sr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ar(), ge("E♭"), ge("E♭")],
    lyrics: lr
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: sr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ar(), ge("E♭"), ge("F")],
    lyrics: lr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: sr(),
    lyrics: Hf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ar(), ge("B♭", "F"), ge("Gm"), ge("E♭", "F"), ge("Gm")],
    lyrics: lr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ge("E♭", "F"), ge("Gm", "F"), ge("E♭", "F"), ge("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], cr = {
  acoustic: bv,
  normal: Lv
}, Rv = "normal", Io = "yksi-sointu-kaksi-askelta", Qo = {
  acoustic: Io + "-akustinen",
  normal: Io + "-normaali"
}, Gf = (s) => s === Io || Object.values(Qo).includes(s ?? "");
function Ov(s) {
  const a = Object.entries(Qo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const $v = (s) => Qo[s], of = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Yo(s, a = "acoustic") {
  const o = cr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Wf(s, a = "acoustic") {
  const o = cr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let N = 1; N < o.length && !(c < o[N].start); N++)
    d = N;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), S = Yo(d, a) / 4;
  let M = 1;
  for (; M < 4 && c >= m + M * S; ) M++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: M,
    chord: v.second && M >= 3 ? v.second : v.first
  };
}
function ns(s, a, o = "acoustic") {
  return cr[o][s].start + Yo(s, o) * a;
}
function Fv(s) {
  return cr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Yo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Iv(s, a = "acoustic", o = !1) {
  const c = cr[a], d = Wf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = Fv(a), S = m.findIndex((L) => L.sectionIndex === d.sectionIndex && L.barIndex === d.barIndex && L.part === p), v = [
    ...m.slice(S + 1).map((L) => ({ ...L, wrapped: !1 })),
    ...o ? m.slice(0, S + 1).map((L) => ({ ...L, wrapped: !0 })) : []
  ].find((L) => L.chord !== d.chord) ?? null;
  let N = null;
  const T = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!T || o)) {
    const L = T ? 0 : d.sectionIndex + 1, O = c[L], E = O.bars[0].first;
    N = {
      section: O,
      sectionIndex: L,
      firstChord: E,
      wrapped: T,
      continues: E === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: N };
}
function Dv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, S) => m + o(S), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const S = Math.abs(c - 2 * p);
    (S < f || S === f && p >= c - p) && (d = m, f = S), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Do = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Qf = "musiikin-kartta:kappale-sointuvihjeet:v1", Sa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, uf = {
  showChords: !0,
  level: 0,
  fadeOrder: Sa
};
function ka(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function cf(s) {
  if (!s) return { ...uf, fadeOrder: { ...Sa } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...Sa }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Do)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...uf, fadeOrder: { ...Sa } };
  }
}
function zv() {
  try {
    return cf(localStorage.getItem(Qf));
  } catch {
    return cf(null);
  }
}
const Bv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Vv(s) {
  const a = Bv.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const Kv = (s, a) => a === "power" ? Vv(s) : s, Uv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Hv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Gv({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = P.useState(zv), [p, m] = P.useState(null), [S, M] = P.useState(!1), [v, N] = P.useState("full"), T = (U) => Kv(U, v), L = cr[s], O = Wf(a, s), { section: E, sectionIndex: x, barIndex: I, beat: A, chord: K } = O, $ = A >= 3 && E.bars[I].second ? "second" : "first", H = (U, ae, ue) => `${s}:${U}:${ae}:${ue}`, B = (U, ae) => H(E.id, U, ae), _ = B(I, $), z = ka(K, d), J = z && p === _, ie = (U, ae, ue) => !ka(U, d) || p === B(ae, ue), ke = d.showChords && d.level === 0, we = Do.filter((U) => ka(U, d)).length, { nextSection: X } = Iv(a, s, o), fe = !!X && ka(X.firstChord, d);
  return P.useEffect(() => {
    m(null);
  }, [_]), P.useEffect(() => {
    try {
      localStorage.setItem(Qf, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ r.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ r.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (U) => {
              f((ae) => ({ ...ae, showChords: U.target.checked })), m(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: S,
            onChange: (U) => M(U.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([U, ae]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: U,
              checked: v === U,
              onChange: () => N(U)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: ae })
        ] }, U))
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (U) => {
              const ae = Number(U.target.value);
              f((ue) => ({ ...ue, level: ae })), m(null);
            },
            children: Uv.map((U) => /* @__PURE__ */ r.jsx("option", { value: U.value, children: U.label }, U.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: we === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${we}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Do.map((U) => /* @__PURE__ */ r.jsxs("label", { children: [
        U,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": U + ": piilotusvaihe",
            value: d.fadeOrder[U],
            onChange: (ae) => {
              const ue = Number(ae.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [U]: ue } })), m(null);
            },
            children: Hv.map((ae) => /* @__PURE__ */ r.jsx("option", { value: ae.value, children: ae.label }, ae.value))
          }
        )
      ] }, U)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: E.id,
            onChange: (U) => {
              const ae = L.find((ue) => ue.id === U.target.value);
              ae && c(ae.start);
            },
            children: L.map((U) => /* @__PURE__ */ r.jsxs("option", { value: U.id, children: [
              of(U.start),
              " · ",
              U.title
            ] }, U.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          z && !J ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: z && !J ? "?" : T(K) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            E.title,
            ", tahti ",
            I + 1,
            ", isku ",
            A,
            "/4"
          ] }),
          z && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(J ? null : _),
              children: J ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        X && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: fe ? "?" : T(X.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": E.title + ": tahdit", children: E.bars.map((U, ae) => {
      const ue = ae === I, W = ue && (A < 3 || !U.second), le = ue && A >= 3 && !!U.second, ee = ie(U.first, ae, "first"), j = U.second ? ie(U.second, ae, "second") : !1, y = (ee ? T(U.first) : "sointu piilossa") + (U.second ? " " + (j ? T(U.second) : "sointu piilossa") : "") + (ke && U.passingBass ? " (basson kulku " + U.passingBass + ")" : "") + (ke && U.possibleChord ? " (" + T(U.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ue ? " active" : ""),
          "aria-pressed": ue,
          "aria-label": "Tahti " + (ae + 1) + ": " + y + ". Siirry kohtaan " + of(ns(x, ae, s)),
          onClick: () => c(ns(x, ae, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ae + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && ee ? "now" : "", children: ee ? T(U.first) : "?" }),
              U.second && /* @__PURE__ */ r.jsx("strong", { className: le && j ? "now" : "", children: j ? T(U.second) : "?" })
            ] }),
            ke && U.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              U.passingBass,
              "), isku 4"
            ] }),
            ke && U.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              T(U.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ae
      );
    }) }),
    S ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: Dv(L).map((U, ae) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: U.map((ue) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: ue.title }),
        ue.lyrics?.map((W, le) => /* @__PURE__ */ r.jsx("p", { children: W }, le))
      ] }, ue.id)) }, ae)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : E.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        E.title,
        ": sanat"
      ] }),
      E.lyrics.map((U, ae) => /* @__PURE__ */ r.jsx("p", { children: U }, ae))
    ] }),
    ke && E.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: E.note })
  ] });
}
const Ta = 7, Wv = { name: "bluesasteikko", base: Fe.SCALES.mp.base, add: [[6, "♭5"]] }, Co = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Fe.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Wv,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Fe.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Qv(s) {
  return Fe.scaleNotes(s).map(([a, o]) => Fe.noteName(Ta, a, o));
}
const Yf = (s) => s === "pentatonic" ? 5 : 7;
function Yv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Yf(s.system)), d = Fe.fingeringBoxes(Ta, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (Ta + m) % 12), p = (m, S) => S >= 0 && S <= o && f.includes((Fe.OPEN_PITCHES[m] + S) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((S) => {
    const M = S.strings.map((N, T) => {
      if (!N.length) return N;
      const L = N[N.length - 1];
      return p(T, L + 1) ? [...N.slice(0, -1), L + 1] : N;
    }), v = M.flat();
    return { ...S, strings: M, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const df = 17;
function Jv({ open: s }) {
  const [a, o] = P.useState("mp"), [c, d] = P.useState({ pentatonic: [], "3nps": [] }), [f, p] = P.useState(!1), [m, S] = P.useState(!1), M = P.useRef(null), v = Co.find((x) => x.id === a) ?? Co[0], N = c[v.system], T = Yv(v, N, df), L = T.some((x) => x.positions.length > 0), O = Fe.renderBoard(Ta, v.scale, df, {
    automatic: !0,
    boxes: T,
    onlyBoxNotes: L && f,
    label: v.title + (N.length ? ", " + N.map((x) => "boksi " + x).join(", ") : "")
  });
  P.useEffect(() => {
    const x = M.current;
    !x || !s || T.length === 1 && Fe.revealPositions(x, ".box-highlight");
  }, [O, s]);
  function E(x, I) {
    d((A) => ({ ...A, [v.system]: I ? [...A[v.system], x].sort((K, $) => K - $) : A[v.system].filter((K) => K !== x) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (x) => o(x.target.value), children: Co.map((x) => /* @__PURE__ */ r.jsx("option", { value: x.id, children: x.title }, x.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: v.title }),
      /* @__PURE__ */ r.jsx("span", { children: Qv(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: M,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: O }
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (x) => {
        x.preventDefault(), S((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Yf(v.system) }, (x, I) => I + 1).map((x) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": x, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: x,
            checked: N.includes(x),
            onChange: (I) => E(x, I.target.checked)
          }
        ),
        " Boksi ",
        x
      ] }, v.system + x)) }),
      /* @__PURE__ */ r.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: L && f,
            disabled: !L,
            onChange: (x) => p(x.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: L ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Jf = null;
function Xv() {
  return Ov(new URLSearchParams(location.search).get("kappale")) ?? Jf ?? Rv;
}
function Zv(s) {
  Jf = s;
  const a = new URL(location.href);
  Gf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", $v(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const qv = {
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
}, ff = 1e-3;
function hf(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function mf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function ek({ onBack: s }) {
  const a = P.useRef(null), o = P.useRef(null), c = P.useRef(null), d = P.useRef(0), f = P.useRef(new Rf()), p = P.useRef(null), [m, S] = P.useState(Xv), M = qv[m], [v, N] = P.useState(!1), [T, L] = P.useState(!0), [O, E] = P.useState(!0), [x, I] = P.useState(!1), [A, K] = P.useState(!1), [$, H] = P.useState(!1), [B, _] = P.useState(Ap), [z] = P.useState(() => Lf() ? "element" : "webaudio"), J = P.useRef(null), [ie, ke] = P.useState(0), [we, X] = P.useState(0), [fe, U] = P.useState("");
  function ae(C = !1, Z) {
    const oe = a.current;
    if (oe)
      for (const ce of [o.current, c.current])
        ce && (!Z || ce === Z) && f.current.align(oe, ce, C);
  }
  function ue() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, T],
      ["vocals", c.current, O]
    ];
  }
  function W(C = B, Z) {
    for (const [oe, ce, me] of ue()) {
      if (!ce) continue;
      const ye = zd(oe, C, Z?.[oe] ?? me);
      if (z === "webaudio" && J.current?.routed(ce))
        J.current.setLevel(ce, ye);
      else
        try {
          ce.volume = zd(oe, C);
        } catch {
        }
    }
  }
  function le(C) {
    _(C), Pp(C), W(C);
  }
  function ee() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), N(!1);
  }
  function j(C) {
    if (C !== m) {
      p.current = null, ee();
      for (const Z of [a.current, o.current, c.current])
        if (Z)
          try {
            Z.currentTime = 0;
          } catch {
          }
      ke(0), X(0), U(""), S(C), Zv(C);
    }
  }
  function y(C) {
    const Z = a.current;
    if (!Z || !Number.isFinite(C)) return;
    const oe = Math.max(0, Math.min(C, Number.isFinite(Z.duration) ? Z.duration : C));
    p.current = oe, ke(oe), hf(Z, oe);
  }
  function te(C) {
    const Z = p.current;
    if (Z === null || C !== a.current || C.seeking) return;
    const oe = Number.isFinite(C.duration) ? Math.min(Z, C.duration) : Z;
    if (oe !== Z && (p.current = oe, ke(oe)), Math.abs(C.currentTime - oe) < ff) return;
    const ce = C.seekable;
    for (let me = 0; me < ce.length; me++)
      if (ce.start(me) <= oe && oe <= ce.end(me)) {
        hf(C, oe);
        return;
      }
  }
  function he(C) {
    if (C !== a.current) return;
    const Z = p.current;
    if (Z === null)
      ke(C.currentTime);
    else if (C.readyState >= 1 && !C.seeking && Math.abs(C.currentTime - Z) < ff) {
      p.current = null, ae(!0);
      return;
    }
    C.paused || ae();
  }
  async function Se() {
    const C = a.current, Z = o.current, oe = c.current;
    if (!C || !Z || !oe) return;
    if (v) {
      ee();
      return;
    }
    U("");
    const ce = p.current ?? C.currentTime;
    if (Number.isFinite(C.duration) && ce >= C.duration - 0.05 && y(0), te(C), z === "webaudio" && (J.current ??= new Vp(), J.current.unlock()))
      for (const ye of [C, Z, oe]) J.current.route(ye);
    W(), Z.muted = !T, oe.muted = !O, ae(!0);
    const me = ++d.current;
    try {
      T || Z.pause(), O || oe.pause();
      const ye = [C.play(), ...T ? [Z.play()] : [], ...O ? [oe.play()] : []];
      if (await Promise.all(ye), me !== d.current) return;
      ae(), N(!0);
    } catch {
      if (me !== d.current) return;
      ee(), U("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function G(C, Z, oe) {
    if (!C) return;
    if (C.muted = !Z, !Z) {
      C.pause();
      return;
    }
    !a.current || !v || (ae(!0, C), C.play().catch(() => U(oe + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function V(C) {
    L(C), W(B, { guitar: C }), G(o.current, C, "Kitararaita");
  }
  function ne(C) {
    E(C), W(B, { vocals: C }), G(c.current, C, "Lauluraita");
  }
  return P.useEffect(() => {
    const C = () => {
      document.hidden && ee();
    };
    return document.addEventListener("visibilitychange", C), () => {
      document.removeEventListener("visibilitychange", C), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), J.current?.close();
    };
  }, []), P.useEffect(() => {
    W();
  }, [m]), /* @__PURE__ */ r.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ r.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ r.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ r.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ r.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (C) => j(C.target.value),
          children: [
            /* @__PURE__ */ r.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ r.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          M.label,
          " · ",
          M.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          Se();
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: we > 0 ? we : 1,
            step: 0.1,
            value: Math.min(ie, we > 0 ? we : 1),
            disabled: we <= 0,
            onChange: (C) => y(Number(C.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          mf(ie),
          " / ",
          mf(we)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: T,
              onChange: (C) => V(C.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: O,
              onChange: (C) => ne(C.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: x,
              onChange: (C) => I(C.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": z, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            B > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            B > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: B,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": B + " %",
              onChange: (C) => le(Number(C.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            B,
            " %"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ r.jsxs("a", { href: M.download, download: M.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ r.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ r.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          M.label,
          ", koko kappale · ",
          M.downloadSize
        ] })
      ] }),
      fe && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: fe }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: M.backing,
          preload: "metadata",
          loop: x,
          onLoadedMetadata: (C) => {
            C.currentTarget === a.current && (X(C.currentTarget.duration), te(C.currentTarget));
          },
          onProgress: (C) => te(C.currentTarget),
          onCanPlay: (C) => te(C.currentTarget),
          onTimeUpdate: (C) => he(C.currentTarget),
          onEnded: (C) => {
            C.currentTarget !== a.current || C.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), N(!1), ke(C.currentTarget.duration));
          },
          onPause: (C) => {
            C.currentTarget === a.current && N(!1);
          },
          onError: () => U(M.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: M.guitar,
          preload: "metadata",
          muted: !T,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && ae(!0);
          },
          onError: () => U(M.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: M.vocals,
          preload: "metadata",
          muted: !O,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && ae(!0);
          },
          onError: () => U(M.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: A, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (C) => {
        C.preventDefault(), K((Z) => !Z);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Gv, { version: m, position: ie, loop: x, onSeek: y })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: $, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (C) => {
        C.preventDefault(), H((Z) => !Z);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(Jv, { open: $ })
    ] })
  ] });
}
const zo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, wa = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), Xf = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Bo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function tk(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Bo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${a.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${a.stability} ms.`];
    default:
      return [];
  }
}
function Zf({ frame: s, threshold: a }) {
  const o = s?.rms ?? 0, c = or(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${wa(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${Hd(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${Hd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function nk({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = If(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${be(p.midi, c.flats, !0)} · ${Xf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : zo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(Zf, { frame: a, threshold: c.minRms })
  ] });
}
function ik({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: S, calibrating: M, calibration: v, onTest: N, onStop: T, onCalibrate: L }) {
  const O = P.useId(), E = If(s.phase, a), x = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", I = s.phase === "on", A = o && d - o.at < 1500 ? o : null, K = A && (E === "pitch" || E === "untuned"), $ = I && (a?.peak ?? 0) >= 0.98, H = s.phase === "error" ? [] : tk(E, f, s.info, $), B = !f.device || m.some((z) => z.deviceId === f.device), _ = (z, J) => p({ ...f, [z]: J });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${O}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${O}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${E}`, "data-testid": "mic-state", "data-reading": E, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : zo[E],
      E === "pitch" && A ? ` ${be(A.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Bo(s.info)}.` : s.phase === "error" ? s.error : zo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Bo(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(Zf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            wa(Math.max(-60, or(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: A ? be(A.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: A ? `${wa(A.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: A ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Xf(A.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${A.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, A.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: A ? `${Math.round(A.clarity * 100)} %` : a?.clarity !== void 0 && E === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      be(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    H.length > 0 && I && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: H.map((z) => /* @__PURE__ */ r.jsx("li", { children: z }, z)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      x ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: T, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: S, onClick: N, children: "Testaa mikrofoni" }),
      x && I && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: M, onClick: L, children: M ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: S, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${O}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${O}-device`, value: f.device, onChange: (z) => _("device", z.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !B && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((z, J) => /* @__PURE__ */ r.jsx("option", { value: z.deviceId, children: z.label || `Äänitulo ${J + 1}` }, z.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${O}-rms`, children: [
              "Äänikynnys · ",
              wa(or(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${O}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (z) => _("minRms", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${O}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${O}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (z) => _("clarity", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${O}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${O}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (z) => _("stability", Number(z.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${O}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${O}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (z) => _("cents", Number(z.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const rk = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, pf = (s, a) => rk(s).find(([o]) => o === a)?.[1], qf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", sk = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function ak(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function lk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : qf(s) ? `Oikein! ${a.degree}. aste on ${Zr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${be(a.reference, s.flats, !0)} → ${a.name} on ${qr[a.interval]} ${sk(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${be(d.midi, s.flats)} on ${yf[d.string]}: ${Ti(d.fret)}.` : `Oikein! Soitit sävelen ${be(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function ok(s, a, o, c, d) {
  if (o === "note") return `Ei ${be(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${pf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Be(d.midi) === Be(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${Qt[d.string]}-kieli. Etsi sävel ${Uo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${be(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (qf(s)) {
    const p = Be(d.midi - s.root), m = pf(s, p), S = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${be(d.midi, s.flats)}, joka ei kuulu ${S}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${be(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function uk(s, a, o) {
  const c = be(o, s.flats, !0);
  return Be(o) === Be(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function eh(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => Qt[p] ? `${Qt[p]}-kieli, ${Ti(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${be(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${be(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ci[p]) return null;
      const m = Ci[p].tones.find(([S]) => S === c(3))?.[1];
      return m ? `${gf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Fe.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const S = Fe.scaleNotes(p).find(([M]) => M === c(3))?.[1];
        return S ? `${m}: ${S}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ci.maj.tones.find(([S]) => S === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function vf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Vo = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", ck = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function dk(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ir(s.mode)}${s.hints ? ` · ${Ma[s.hints].title}` : ""} · ${a} · keskimäärin ${Vo(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function fk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = P.useState(""), p = P.useRef(null), { recent: m, sessions: S, stats: M } = s.data, v = Mi(a), N = xf(a), T = [...new Set(m.map((A) => A.mode))].map((A) => {
    const K = m.filter(($) => $.mode === A);
    return { mode: A, ...Ao(K), last: Math.max(...K.map(($) => $.at)) };
  }).sort((A, K) => K.last - A.last), L = vf(M).filter((A) => !A.guided && A.mode === a.mode && A.input === v && A.check === N && A.stat.attempts >= 3).map((A) => ({ ...A, score: Ho(A.stat), text: eh(A.item, a.flats) })).filter((A) => A.text && A.score < 0.8).sort((A, K) => A.score - K.score).slice(0, 5), O = vf(M).reduce((A, K) => A + K.stat.attempts, 0);
  function E() {
    const A = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), K = URL.createObjectURL(A), $ = document.createElement("a");
    $.href = K, $.download = "musiikin-kartta-harjoittelu.json", $.click(), setTimeout(() => URL.revokeObjectURL(K), 1e3);
  }
  async function x(A) {
    if (A)
      try {
        const K = await A.text();
        if (O && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(K), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function I() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    O === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        O,
        " vastattua kysymystä · ",
        S.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ r.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ r.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ r.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ r.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ r.jsx("tbody", { children: T.map((A) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: ir(A.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: A.count }),
          /* @__PURE__ */ r.jsx("td", { children: A.solo ? `${A.soloFirst}/${A.solo} · ${Math.round(A.soloFirst / A.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: A.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Vo(A.ms / A.count) })
        ] }, A.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    L.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ir(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: L.map((A) => /* @__PURE__ */ r.jsxs("li", { children: [
        A.text,
        " · viime aikoina ",
        Math.round(es(A.stat) * 100),
        " % heti oikein · ",
        Vo(ts(A.stat))
      ] }, A.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: O ? `Harjoituksessa ${ir(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        ck[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(pp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: M, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ r.jsx("ul", { children: S.slice(-10).reverse().map((A) => /* @__PURE__ */ r.jsx("li", { children: dk(A) }, A.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: E, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (A) => {
          x(A.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !O, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function hk() {
  try {
    return new Ld(localStorage);
  } catch {
    return new Ld();
  }
}
const kf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), mk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", pk = [0, 2, 4, 5, 7, 9, 11];
function vk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function kk() {
  const [s] = P.useState(hk), [a, o] = P.useState(() => ip(location.search, s.data.settings)), [, c] = P.useReducer((D) => D + 1, 0), d = P.useRef(null), f = P.useRef(new uv()), p = P.useRef(new rs()), m = P.useRef(0), S = P.useRef(), M = P.useRef(), v = P.useRef(null), N = P.useRef(0), T = P.useRef(null), L = P.useRef(a);
  L.current = a;
  const [O, E] = P.useState({ phase: "off", purpose: "none" }), x = P.useRef(O), I = (D) => {
    x.current = D, E(D);
  }, [A, K] = P.useState(null), [$, H] = P.useState(null), [B, _] = P.useState(null), [z, J] = P.useState(0), [ie, ke] = P.useState([]), [we, X] = P.useState(!1), [fe, U] = P.useState(!1), [ae, ue] = P.useState(""), [W, le] = P.useState("info"), [ee, j] = P.useState(""), [y, te] = P.useState(0), [he, Se] = P.useState([]), [G, V] = P.useState([]), [ne, C] = P.useState(null), [Z, oe] = P.useState(!1), [ce, me] = P.useState(""), [ye, Ae] = P.useState(""), [Me, Ie] = P.useState(() => {
    const D = new URLSearchParams(location.search);
    return D.has("tila") || D.has("vanha") ? "legacy" : Gf(D.get("kappale")) ? "songs" : Cp(D.get("polku"));
  });
  function Qe() {
    Ie(null);
    const D = new URL(location.href);
    D.searchParams.has("polku") && (D.searchParams.delete("polku"), history.replaceState(history.state, "", D.pathname + D.search + D.hash));
  }
  const Ye = () => {
    Wp().then(ke).catch(() => {
    });
  };
  function Ge() {
    clearTimeout(M.current), v.current = null, oe(!1);
  }
  function Xe() {
    K(null), H(null), _(null);
  }
  function ut() {
    f.current.stop(), Ge(), I({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(D) {
    if (f.current.active && x.current.phase === "on")
      return Ge(), I({ ...x.current, purpose: D }), f.current.rearm(), !0;
    I({ phase: "requesting", purpose: D }), Xe();
    try {
      const se = await f.current.start(L.current.device, {
        ...kf(L.current),
        onFrame: (De) => Yt.current.frame(De),
        onStableNote: (De) => Yt.current.stable(De)
      }, () => Yt.current.lost());
      return se ? (I({ phase: "on", purpose: D, info: se }), Ye(), !0) : !1;
    } catch (se) {
      return I({ phase: "error", purpose: "none", error: ov(se) }), !1;
    }
  }
  function Ve(D) {
    v.current?.push(D.rms);
    const se = performance.now();
    se - N.current < 66 || (N.current = se, K(D), J(se), D.midi !== void 0 && D.frequency !== void 0 && H({ midi: D.midi, frequency: D.frequency, cents: D.cents ?? 0, clarity: D.clarity ?? 0, tuned: D.status === "pitch", at: se }));
  }
  function it(D) {
    x.current.purpose === "test" ? _(D) : x.current.purpose === "round" && He(D.midi, "mic", void 0, D.heldMs);
  }
  function Bt() {
    const D = x.current.purpose === "round";
    Ge(), Xe(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const se = d.current;
    D && se && ["active", "feedback", "paused"].includes(se.phase) && (_t(), U(!1), se.pause(), j("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Yt = P.useRef({ frame: Ve, stable: it, lost: Bt });
  Yt.current = { frame: Ve, stable: it, lost: Bt };
  function Nt(D) {
    const se = Na(D), De = se.device !== L.current.device;
    L.current = se, o(se), s.settings(se), j(""), f.current.active && (De && x.current.purpose === "test" ? (ut(), Je("test")) : f.current.setOptions(kf(se)));
  }
  function ln(D) {
    Ae(""), d.current = null, Ie(D);
  }
  function Jt() {
    me(""), Je("test");
  }
  function Xt() {
    x.current.phase !== "on" || x.current.purpose !== "test" || (Ge(), v.current = [], oe(!0), me("Mitataan taustakohinaa kolme sekuntia. Älä soita."), M.current = setTimeout(() => {
      const D = v.current ?? [];
      if (Ge(), D.length < 10) {
        me("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: se, noise: De, loud: Rt } = cv(D);
      Nt({ ...L.current, minRms: se }), me(`Taustakohina on ${Math.round(or(De))} dB ja äänikynnys nyt ${Math.round(or(se))} dB. ${Rt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(S.current), p.current.stop();
  }
  function Ne(D, se) {
    if (!D.results.length) return;
    const De = Ao(D.results);
    s.session({
      id: D.id,
      mode: D.settings.mode,
      count: De.count,
      first: De.first,
      ms: De.ms,
      solo: De.solo,
      soloFirst: De.soloFirst,
      hints: D.settings.hints,
      at: Date.now(),
      complete: se
    });
  }
  async function Vt(D) {
    if (!D.question?.sound.length || D.phase !== "active") return;
    _t();
    const se = m.current;
    D.pause(), f.current.pause(), U(!0), le("info"), ue("Kuuntele…"), c();
    try {
      await p.current.play(D.question.sound);
    } catch {
      se === m.current && j("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    se !== m.current || d.current !== D || (D.resume(), f.current.resume(), U(!1), ue(""), c());
  }
  async function Te(D) {
    Se([]), V([]), C(null), j(""), te(D.hintLevel), f.current.rearm(), le("info"), ue(""), c(), D.question?.sound.length && await Vt(D);
  }
  async function Pe() {
    const D = L.current, se = Mo(D);
    if (se) {
      j(se);
      return;
    }
    _t();
    const De = m.current;
    if (j(""), me(""), Ae(""), pa(D)) {
      X(!0);
      const dt = await Je("round");
      if (De !== m.current) return;
      if (X(!1), !dt) {
        j("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else x.current.phase !== "off" && ut();
    const Rt = new Ep(D, () => s.data.stats, (dt) => s.record(dt));
    try {
      Rt.start();
    } catch (dt) {
      x.current.purpose === "round" && ut(), j(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Rt, requestAnimationFrame(() => T.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Te(Rt);
  }
  function Le() {
    _t(), X(!1), ut();
  }
  function He(D, se, De, Rt = 0) {
    const dt = d.current, _n = dt?.question;
    if (!dt || !_n || dt.phase !== "active") return;
    const mr = dt.answer(D, se, De, Rt);
    if (mr !== "ignored") {
      if (mr === "candidate")
        C(D), le("bad"), ue(uk(dt.settings, _n, D));
      else if (mr === "wrong")
        De ? Se((Bn) => [...Bn, De]) : V((Bn) => [...Bn, D]), le("bad"), ue(ok(dt.settings, _n, se, D, De));
      else if (C(null), le("good"), ue(lk(dt.settings, _n, se, D, De)), Ne(dt, !1), dt.settings.advance) {
        const Bn = m.current;
        S.current = setTimeout(() => {
          Bn === m.current && st();
        }, se === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function st() {
    const D = d.current;
    if (!(!D || D.phase !== "feedback")) {
      _t();
      try {
        D.next();
      } catch (se) {
        Lt(!1), j(se instanceof Error ? se.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (D.phase === "done") {
        Lt(!0);
        return;
      }
      await Te(D);
    }
  }
  function Lt(D = !1) {
    _t(), U(!1), X(!1), (x.current.purpose === "round" || x.current.phase === "requesting") && ut();
    const se = d.current;
    se && (se.stop(), Ne(se, D)), C(null), te(0), Se([]), V([]), j(""), Ae(D ? "complete" : "stopped"), le("info"), ue(""), c();
  }
  function vt() {
    const D = d.current;
    if (!D || !["active", "feedback", "paused"].includes(D.phase)) return;
    _t(), U(!1), D.pause();
    const se = x.current.purpose === "round";
    se && ut(), le("info"), ue(`Harjoitus on tauolla.${se ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Zt() {
    const D = d.current;
    if (!D || D.phase !== "paused" || fe) return;
    _t();
    const se = m.current;
    if (j(""), pa(D.settings)) {
      X(!0);
      const De = await Je("round");
      if (se !== m.current) return;
      if (X(!1), !De) {
        j("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    D.resume(), le("info"), ue(""), c(), D.phase === "active" && (f.current.rearm(), D.question?.sound.length && await Vt(D));
  }
  function En(D) {
    const se = d.current;
    !se || se.phase !== "active" || (se.useHint(D), te(D), c());
  }
  const vn = P.useRef({ hidden: () => {
  }, restored: () => {
  } });
  vn.current = {
    hidden: () => {
      const D = d.current;
      D && ["active", "feedback"].includes(D.phase) || fe ? vt() : x.current.phase !== "off" && x.current.phase !== "error" && (_t(), X(!1), ut());
    },
    restored: () => {
      X(!1), U(!1), I({ phase: "off", purpose: "none" }), Xe(), c();
    }
  }, P.useEffect(() => {
    Ye();
    const D = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", D);
    const se = () => {
      m.current++, clearTimeout(S.current), clearTimeout(M.current), f.current.stop(), p.current.stop(), lv(), d.current?.pause();
    }, De = () => {
      document.hidden && vn.current.hidden();
    }, Rt = (dt) => {
      dt.persisted && vn.current.restored();
    };
    return document.addEventListener("visibilitychange", De), window.addEventListener("pagehide", se), window.addEventListener("pageshow", Rt), () => {
      se(), navigator.mediaDevices?.removeEventListener?.("devicechange", D), document.removeEventListener("visibilitychange", De), window.removeEventListener("pagehide", se), window.removeEventListener("pageshow", Rt);
    };
  }, []);
  const kn = P.useRef(null), ss = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${fe}`;
  P.useEffect(() => {
    const D = d.current, se = T.current, De = document.activeElement;
    !D || !se || !(De === document.body || se.contains(De)) || (D.phase === "feedback" ? kn.current?.focus({ preventScroll: !0 }) : D.phase === "active" && !fe && (De === document.body || De === kn.current) && se.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ss]);
  const $e = d.current, et = !!$e && ["active", "paused", "feedback"].includes($e.phase), Ze = et ? $e.settings : a, ct = et ? $e.question : void 0, Kt = !!ct && !!$e?.answered, qt = et && $e.phase === "paused" && !fe && !Kt, Ai = et && $e.phase === "active" && !fe, Cn = et ? null : Mo(a), Dn = et || we, di = _i(Ze), dr = kp(Ze), fi = ct && !Kt ? y : 0, fr = ct ? Np(Ze, ct, Kt ? 2 : fi) : { marks: [], text: "" }, as = [...new Map([...fr.marks, ...Kt ? [] : he.map((D) => ({ ...D, label: be(D.midi, Ze.flats), kind: "wrong" }))].map((D) => [Ue(D), D])).values()], Tn = et && pa(Ze), ls = !!ct && !qt && (ct.choices === "position" || as.length > 0), jt = $e ? Ao($e.results) : null, Pa = !$e || Ze.hints !== "fade" ? "" : $e.index <= 3 ? " · vastaus näkyy" : $e.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hr = $e && !et ? $e.results.filter((D) => D.errors > 0 || D.hint) : [], [os, us] = vk(Ze), Mn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ r.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ r.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), zn = s.data.notice === "hints-default" && /* @__PURE__ */ r.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ r.jsxs("p", { children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ r.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ r.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ r.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
      s.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !et && Me === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Mp, { onSelect: ln })
  ] }) : !et && Me === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Cv, { onBack: Qe })
  ] }) : !et && Me === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Mv, { onBack: Qe })
  ] }) : !et && Me === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Pv, { onBack: Qe })
  ] }) : !et && Me === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(ek, { onBack: Qe })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: os, children: [
      "Lue tämän harjoituksen teoria: ",
      us,
      " →"
    ] }) }),
    Me !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Lt(), Qe();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: Me === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: Me === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: ir(Ze.mode) }),
      " · ",
      Fd(Ze)
    ] }) : Me === "legacy" ? /* @__PURE__ */ r.jsx(Id, { s: a, change: Nt, locked: Dn, problem: Cn }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Id, { s: a, change: Nt, locked: Dn, problem: Cn })
    ] }),
    !et && (Me === "legacy" || pa(a)) && /* @__PURE__ */ r.jsx(
      ik,
      {
        mic: O,
        frame: A,
        heard: $,
        accepted: B,
        now: z,
        s: a,
        change: Nt,
        devices: ie,
        locked: we,
        calibrating: Z,
        calibration: ce,
        onTest: Jt,
        onStop: ut,
        onCalibrate: Xt
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: T, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: ir(Ze.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${$e.index}${$e.total ? " / " + $e.total : " · vapaa harjoittelu"} · ${Ma[Ze.hints].title}${Pa}${$e.phase === "paused" && !fe ? " · tauolla" : ""}` : ye === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        $e && $e.results.length > 0 && jt ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: ye === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ r.jsxs("dl", { children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ r.jsx("dd", { children: mk(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hr.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hr.map((D) => eh(D.item, a.flats)).filter(Boolean))].slice(0, 6).map((D) => /* @__PURE__ */ r.jsx("li", { children: D }, D)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: Fd(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: we ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Le, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!Cn, onClick: () => {
          Pe();
        }, children: $e?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !$e && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: qt ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: qt ? "Kysymys palaa näkyviin, kun jatkat." : fe ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : ak(Ze, ct) }),
        $e.hintLevel > 0 && !Kt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Tn && /* @__PURE__ */ r.jsx(nk, { mic: O, frame: A, heard: $, s: Ze, now: z }),
        ct.choices === "note" && !qt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (D, se) => se) : pk).map((D) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(D) ? "wrong" : Kt && D === ct.midi % 12 ? "right" : "", disabled: !Ai || G.includes(D), onClick: () => He(D, "note"), children: be(D, Ze.flats) }, D)) }),
        ct.choices === "degree" && !qt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[Ze.scale]) : Ci[Ze.chord].tones).map(([D, se]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(D) ? "wrong" : Kt && D === ct.interval ? "right" : "", disabled: !Ai || G.includes(D), onClick: () => He(D, "degree"), children: se }, D)) }),
        ls && /* @__PURE__ */ r.jsx(
          ui,
          {
            area: dr,
            marks: as,
            disabled: !Ai || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (D) => He(D.midi, "board", D),
            caption: di.fixed === "shape" ? `${Ze.shape}-muodon alue` : di.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Kt && !qt && fi > 0 && fr.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: fr.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ae }),
        ne !== null && $e.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            $e.confirmWrong(), C(null), ue("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          $e.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: kn, onClick: () => {
            st();
          }, children: $e.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          $e.phase === "active" && !Kt && !fe && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            fi === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(Math.max(1, $e.hintLevel)), children: $e.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            fi === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(2), children: "Näytä vastaus" }),
            fi > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !Ai, onClick: () => {
            Vt($e);
          }, children: "Kuuntele uudelleen" }),
          $e.phase === "paused" && !fe ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: we, onClick: () => {
            Zt();
          }, children: we ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Lt(), children: "Lopeta harjoitus" })
        ] }),
        $e.phase === "feedback" && Ze.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Fe.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: rp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(fk, { store: s, s: a, locked: Dn, changed: () => {
        const D = Na(s.data.settings);
        L.current = D, o(D), c();
      } }),
      /* @__PURE__ */ r.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ r.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ r.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ r.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ r.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ r.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ r.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ r.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
Ym.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(kk, {}));
//# sourceMappingURL=app.js.map
