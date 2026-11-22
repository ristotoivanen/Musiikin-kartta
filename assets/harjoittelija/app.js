function Zm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ho = { exports: {} }, Wr = {}, mo = { exports: {} }, ze = {};
var xd;
function qm() {
  if (xd) return ze;
  xd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function E(S) {
    return S === null || typeof S != "object" ? null : (S = g && S[g] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, j = {};
  function w(S, y, q) {
    this.props = S, this.context = y, this.refs = j, this.updater = q || b;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(S, y) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, y, "setState");
  }, w.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function I() {
  }
  I.prototype = w.prototype;
  function T(S, y, q) {
    this.props = S, this.context = y, this.refs = j, this.updater = q || b;
  }
  var K = T.prototype = new I();
  K.constructor = T, _(K, w.prototype), K.isPureReactComponent = !0;
  var V = Array.isArray, z = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(S, y, q) {
    var de, Ne = {}, H = null, B = null;
    if (y != null) for (de in y.ref !== void 0 && (B = y.ref), y.key !== void 0 && (H = "" + y.key), y) z.call(y, de) && !O.hasOwnProperty(de) && (Ne[de] = y[de]);
    var te = arguments.length - 2;
    if (te === 1) Ne.children = q;
    else if (1 < te) {
      for (var Y = Array(te), pe = 0; pe < te; pe++) Y[pe] = arguments[pe + 2];
      Ne.children = Y;
    }
    if (S && S.defaultProps) for (de in te = S.defaultProps, te) Ne[de] === void 0 && (Ne[de] = te[de]);
    return { $$typeof: r, type: S, key: H, ref: B, props: Ne, _owner: D.current };
  }
  function re(S, y) {
    return { $$typeof: r, type: S.type, key: y, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function ee(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Se(S) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(q) {
      return y[q];
    });
  }
  var _e = /\/+/g;
  function X(S, y) {
    return typeof S == "object" && S !== null && S.key != null ? Se("" + S.key) : y.toString(36);
  }
  function le(S, y, q, de, Ne) {
    var H = typeof S;
    (H === "undefined" || H === "boolean") && (S = null);
    var B = !1;
    if (S === null) B = !0;
    else switch (H) {
      case "string":
      case "number":
        B = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case a:
            B = !0;
        }
    }
    if (B) return B = S, Ne = Ne(B), S = de === "" ? "." + X(B, 0) : de, V(Ne) ? (q = "", S != null && (q = S.replace(_e, "$&/") + "/"), le(Ne, y, q, "", function(pe) {
      return pe;
    })) : Ne != null && (ee(Ne) && (Ne = re(Ne, q + (!Ne.key || B && B.key === Ne.key ? "" : ("" + Ne.key).replace(_e, "$&/") + "/") + S)), y.push(Ne)), 1;
    if (B = 0, de = de === "" ? "." : de + ":", V(S)) for (var te = 0; te < S.length; te++) {
      H = S[te];
      var Y = de + X(H, te);
      B += le(H, y, q, Y, Ne);
    }
    else if (Y = E(S), typeof Y == "function") for (S = Y.call(S), te = 0; !(H = S.next()).done; ) H = H.value, Y = de + X(H, te++), B += le(H, y, q, Y, Ne);
    else if (H === "object") throw y = String(S), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function G(S, y, q) {
    if (S == null) return S;
    var de = [], Ne = 0;
    return le(S, de, "", "", function(H) {
      return y.call(q, H, Ne++);
    }), de;
  }
  function oe(S) {
    if (S._status === -1) {
      var y = S._result;
      y = y(), y.then(function(q) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = q);
      }, function(q) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = q);
      }), S._status === -1 && (S._status = 0, S._result = y);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var se = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ze.Children = { map: G, forEach: function(S, y, q) {
    G(S, function() {
      y.apply(this, arguments);
    }, q);
  }, count: function(S) {
    var y = 0;
    return G(S, function() {
      y++;
    }), y;
  }, toArray: function(S) {
    return G(S, function(y) {
      return y;
    }) || [];
  }, only: function(S) {
    if (!ee(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, ze.Component = w, ze.Fragment = o, ze.Profiler = d, ze.PureComponent = T, ze.StrictMode = c, ze.Suspense = N, ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, ze.act = ne, ze.cloneElement = function(S, y, q) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var de = _({}, S.props), Ne = S.key, H = S.ref, B = S._owner;
    if (y != null) {
      if (y.ref !== void 0 && (H = y.ref, B = D.current), y.key !== void 0 && (Ne = "" + y.key), S.type && S.type.defaultProps) var te = S.type.defaultProps;
      for (Y in y) z.call(y, Y) && !O.hasOwnProperty(Y) && (de[Y] = y[Y] === void 0 && te !== void 0 ? te[Y] : y[Y]);
    }
    var Y = arguments.length - 2;
    if (Y === 1) de.children = q;
    else if (1 < Y) {
      te = Array(Y);
      for (var pe = 0; pe < Y; pe++) te[pe] = arguments[pe + 2];
      de.children = te;
    }
    return { $$typeof: r, type: S.type, key: Ne, ref: H, props: de, _owner: B };
  }, ze.createContext = function(S) {
    return S = { $$typeof: p, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: f, _context: S }, S.Consumer = S;
  }, ze.createElement = $, ze.createFactory = function(S) {
    var y = $.bind(null, S);
    return y.type = S, y;
  }, ze.createRef = function() {
    return { current: null };
  }, ze.forwardRef = function(S) {
    return { $$typeof: m, render: S };
  }, ze.isValidElement = ee, ze.lazy = function(S) {
    return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: oe };
  }, ze.memo = function(S, y) {
    return { $$typeof: A, type: S, compare: y === void 0 ? null : y };
  }, ze.startTransition = function(S) {
    var y = W.transition;
    W.transition = {};
    try {
      S();
    } finally {
      W.transition = y;
    }
  }, ze.unstable_act = ne, ze.useCallback = function(S, y) {
    return se.current.useCallback(S, y);
  }, ze.useContext = function(S) {
    return se.current.useContext(S);
  }, ze.useDebugValue = function() {
  }, ze.useDeferredValue = function(S) {
    return se.current.useDeferredValue(S);
  }, ze.useEffect = function(S, y) {
    return se.current.useEffect(S, y);
  }, ze.useId = function() {
    return se.current.useId();
  }, ze.useImperativeHandle = function(S, y, q) {
    return se.current.useImperativeHandle(S, y, q);
  }, ze.useInsertionEffect = function(S, y) {
    return se.current.useInsertionEffect(S, y);
  }, ze.useLayoutEffect = function(S, y) {
    return se.current.useLayoutEffect(S, y);
  }, ze.useMemo = function(S, y) {
    return se.current.useMemo(S, y);
  }, ze.useReducer = function(S, y, q) {
    return se.current.useReducer(S, y, q);
  }, ze.useRef = function(S) {
    return se.current.useRef(S);
  }, ze.useState = function(S) {
    return se.current.useState(S);
  }, ze.useSyncExternalStore = function(S, y, q) {
    return se.current.useSyncExternalStore(S, y, q);
  }, ze.useTransition = function() {
    return se.current.useTransition();
  }, ze.version = "18.3.1", ze;
}
var Sd;
function Ho() {
  return Sd || (Sd = 1, mo.exports = qm()), mo.exports;
}
var wd;
function ep() {
  if (wd) return Wr;
  wd = 1;
  var r = Ho(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, N, A) {
    var v, g = {}, E = null, b = null;
    A !== void 0 && (E = "" + A), N.key !== void 0 && (E = "" + N.key), N.ref !== void 0 && (b = N.ref);
    for (v in N) c.call(N, v) && !f.hasOwnProperty(v) && (g[v] = N[v]);
    if (m && m.defaultProps) for (v in N = m.defaultProps, N) g[v] === void 0 && (g[v] = N[v]);
    return { $$typeof: a, type: m, key: E, ref: b, props: g, _owner: d.current };
  }
  return Wr.Fragment = o, Wr.jsx = p, Wr.jsxs = p, Wr;
}
var Nd;
function tp() {
  return Nd || (Nd = 1, ho.exports = ep()), ho.exports;
}
var s = tp(), M = Ho(), pa = {}, po = { exports: {} }, Yt = {}, vo = { exports: {} }, ko = {};
var Ed;
function np() {
  return Ed || (Ed = 1, (function(r) {
    function a(W, ae) {
      var ne = W.length;
      W.push(ae);
      e: for (; 0 < ne; ) {
        var S = ne - 1 >>> 1, y = W[S];
        if (0 < d(y, ae)) W[S] = ae, W[ne] = y, ne = S;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ae = W[0], ne = W.pop();
      if (ne !== ae) {
        W[0] = ne;
        e: for (var S = 0, y = W.length, q = y >>> 1; S < q; ) {
          var de = 2 * (S + 1) - 1, Ne = W[de], H = de + 1, B = W[H];
          if (0 > d(Ne, ne)) H < y && 0 > d(B, Ne) ? (W[S] = B, W[H] = ne, S = H) : (W[S] = Ne, W[de] = ne, S = de);
          else if (H < y && 0 > d(B, ne)) W[S] = B, W[H] = ne, S = H;
          else break e;
        }
      }
      return ae;
    }
    function d(W, ae) {
      var ne = W.sortIndex - ae.sortIndex;
      return ne !== 0 ? ne : W.id - ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var N = [], A = [], v = 1, g = null, E = 3, b = !1, _ = !1, j = !1, w = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(W) {
      for (var ae = o(A); ae !== null; ) {
        if (ae.callback === null) c(A);
        else if (ae.startTime <= W) c(A), ae.sortIndex = ae.expirationTime, a(N, ae);
        else break;
        ae = o(A);
      }
    }
    function V(W) {
      if (j = !1, K(W), !_) if (o(N) !== null) _ = !0, oe(z);
      else {
        var ae = o(A);
        ae !== null && se(V, ae.startTime - W);
      }
    }
    function z(W, ae) {
      _ = !1, j && (j = !1, I($), $ = -1), b = !0;
      var ne = E;
      try {
        for (K(ae), g = o(N); g !== null && (!(g.expirationTime > ae) || W && !Se()); ) {
          var S = g.callback;
          if (typeof S == "function") {
            g.callback = null, E = g.priorityLevel;
            var y = S(g.expirationTime <= ae);
            ae = r.unstable_now(), typeof y == "function" ? g.callback = y : g === o(N) && c(N), K(ae);
          } else c(N);
          g = o(N);
        }
        if (g !== null) var q = !0;
        else {
          var de = o(A);
          de !== null && se(V, de.startTime - ae), q = !1;
        }
        return q;
      } finally {
        g = null, E = ne, b = !1;
      }
    }
    var D = !1, O = null, $ = -1, re = 5, ee = -1;
    function Se() {
      return !(r.unstable_now() - ee < re);
    }
    function _e() {
      if (O !== null) {
        var W = r.unstable_now();
        ee = W;
        var ae = !0;
        try {
          ae = O(!0, W);
        } finally {
          ae ? X() : (D = !1, O = null);
        }
      } else D = !1;
    }
    var X;
    if (typeof T == "function") X = function() {
      T(_e);
    };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), G = le.port2;
      le.port1.onmessage = _e, X = function() {
        G.postMessage(null);
      };
    } else X = function() {
      w(_e, 0);
    };
    function oe(W) {
      O = W, D || (D = !0, X());
    }
    function se(W, ae) {
      $ = w(function() {
        W(r.unstable_now());
      }, ae);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, r.unstable_continueExecution = function() {
      _ || b || (_ = !0, oe(z));
    }, r.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < W ? Math.floor(1e3 / W) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(N);
    }, r.unstable_next = function(W) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = E;
      }
      var ne = E;
      E = ae;
      try {
        return W();
      } finally {
        E = ne;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(W, ae) {
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
      var ne = E;
      E = W;
      try {
        return ae();
      } finally {
        E = ne;
      }
    }, r.unstable_scheduleCallback = function(W, ae, ne) {
      var S = r.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? S + ne : S) : ne = S, W) {
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
      return y = ne + y, W = { id: v++, callback: ae, priorityLevel: W, startTime: ne, expirationTime: y, sortIndex: -1 }, ne > S ? (W.sortIndex = ne, a(A, W), o(N) === null && W === o(A) && (j ? (I($), $ = -1) : j = !0, se(V, ne - S))) : (W.sortIndex = y, a(N, W), _ || b || (_ = !0, oe(z))), W;
    }, r.unstable_shouldYield = Se, r.unstable_wrapCallback = function(W) {
      var ae = E;
      return function() {
        var ne = E;
        E = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          E = ne;
        }
      };
    };
  })(ko)), ko;
}
var Cd;
function ip() {
  return Cd || (Cd = 1, vo.exports = np()), vo.exports;
}
var Td;
function rp() {
  if (Td) return Yt;
  Td = 1;
  var r = Ho(), a = ip();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function E(e) {
    return N.call(g, e) ? !0 : N.call(v, e) ? !1 : A.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function b(e, t, n, i) {
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
  function _(e, t, n, i) {
    if (t === null || typeof t > "u" || b(e, t, n, i)) return !0;
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
  function j(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      T
    );
    w[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, T);
    w[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, T);
    w[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function K(e, t, n, i) {
    var l = w.hasOwnProperty(t) ? w[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, n, l, i) && (n = null), i || l === null ? E(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, z = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.provider"), Se = /* @__PURE__ */ Symbol.for("react.context"), _e = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = Object.assign, S;
  function y(e) {
    if (S === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      S = t && t[1] || "";
    }
    return `
` + S + e;
  }
  var q = !1;
  function de(e, t) {
    if (!e || q) return "";
    q = !0;
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
                var x = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      q = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Ne(e) {
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
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Portal";
      case re:
        return "Profiler";
      case $:
        return "StrictMode";
      case X:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Se:
        return (e.displayName || "Context") + ".Consumer";
      case ee:
        return (e._context.displayName || "Context") + ".Provider";
      case _e:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return H(e(t));
        } catch {
        }
    }
    return null;
  }
  function B(e) {
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
        return H(t);
      case 8:
        return t === $ ? "StrictMode" : "Mode";
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
  function te(e) {
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
  function Y(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pe(e) {
    var t = Y(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function Te(e) {
    e._valueTracker || (e._valueTracker = pe(e));
  }
  function me(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Y(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function je(e, t) {
    var n = t.checked;
    return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ee(e, t) {
    t = t.checked, t != null && K(e, "checked", t, !1);
  }
  function Be(e, t) {
    Ee(e, t);
    var n = te(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Qe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qe(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function it(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Qe(e, t, n) {
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Xe = Array.isArray;
  function st(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ze(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Xe(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Ie(e, t) {
    var n = te(t.value), i = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function tt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function vt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function U(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var we, Re = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (we = we || document.createElement("div"), we.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = we.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Fe(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var De = {
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
  }, kt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function(e) {
    kt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), De[t] = De[e];
    });
  });
  function Ce(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || De.hasOwnProperty(e) && De[e] ? ("" + t).trim() : t + "px";
  }
  function Nt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ce(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var ue = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Me(e, t) {
    if (t) {
      if (ue[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var qe = null;
  function ct(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var un = null, Mt = null, It = null;
  function Cn(e) {
    if (e = Ar(e)) {
      if (typeof un != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = bs(t), un(e.stateNode, e.type, t));
    }
  }
  function cn(e) {
    Mt ? It ? It.push(e) : It = [e] : Mt = e;
  }
  function Tn() {
    if (Mt) {
      var e = Mt, t = It;
      if (It = Mt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
    }
  }
  function ss(e, t) {
    return e(t);
  }
  function cr() {
  }
  var ci = !1;
  function _i(e, t, n) {
    if (ci) return e(t, n);
    ci = !0;
    try {
      return ss(e, t, n);
    } finally {
      ci = !1, (Mt !== null || It !== null) && (cr(), Tn());
    }
  }
  function di(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = bs(n);
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
  var Ve = !1;
  if (m) try {
    var nt = {};
    Object.defineProperty(nt, "passive", { get: function() {
      Ve = !0;
    } }), window.addEventListener("test", nt, nt), window.removeEventListener("test", nt, nt);
  } catch {
    Ve = !1;
  }
  function at(e, t, n, i, l, u, h, k, x) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (J) {
      this.onError(J);
    }
  }
  var yt = !1, Kt = null, dn = !1, In = null, dr = { onError: function(e) {
    yt = !0, Kt = e;
  } };
  function fr(e, t, n, i, l, u, h, k, x) {
    yt = !1, Kt = null, at.apply(dr, arguments);
  }
  function as(e, t, n, i, l, u, h, k, x) {
    if (fr.apply(this, arguments), yt) {
      if (yt) {
        var F = Kt;
        yt = !1, Kt = null;
      } else throw Error(o(198));
      dn || (dn = !0, In = F);
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
  function Dn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function bi(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function ls(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mn(e), t === null) throw Error(o(188));
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
          if (u === n) return bi(l), e;
          if (u === i) return bi(l), t;
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
  function os(e) {
    return e = ls(e), e !== null ? us(e) : null;
  }
  function us(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = us(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _t = a.unstable_scheduleCallback, cs = a.unstable_cancelCallback, ds = a.unstable_shouldYield, Aa = a.unstable_requestPaint, dt = a.unstable_now, zn = a.unstable_getCurrentPriorityLevel, gn = a.unstable_ImmediatePriority, R = a.unstable_UserBlockingPriority, fe = a.unstable_NormalPriority, He = a.unstable_LowPriority, Jt = a.unstable_IdlePriority, ft = null, Dt = null;
  function hr(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
      Dt.onCommitFiberRoot(ft, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var bt = Math.clz32 ? Math.clz32 : vh, mh = Math.log, ph = Math.LN2;
  function vh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mh(e) / ph | 0) | 0;
  }
  var fs = 64, hs = 4194304;
  function mr(e) {
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
  function ms(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = mr(k) : (u &= h, u !== 0 && (i = mr(u)));
    } else h = n & ~l, h !== 0 ? i = mr(h) : u !== 0 && (i = mr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - bt(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function kh(e, t) {
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
  function yh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - bt(u), k = 1 << h, x = l[h];
      x === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = kh(k, t)) : x <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Ra(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Zo() {
    var e = fs;
    return fs <<= 1, (fs & 4194240) === 0 && (fs = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - bt(t), e[t] = n;
  }
  function gh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - bt(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Oa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - bt(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var et = 0;
  function qo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var eu, $a, tu, nu, iu, Fa = !1, ps = [], Bn = null, Vn = null, Kn = null, vr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Un = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        vr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kr.delete(t.pointerId);
    }
  }
  function yr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Ar(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function xh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = yr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Vn = yr(Vn, e, t, n, i, l), !0;
      case "mouseover":
        return Kn = yr(Kn, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return vr.set(u, yr(vr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, kr.set(u, yr(kr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function su(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Dn(n), t !== null) {
            e.blockedOn = t, iu(e.priority, function() {
              tu(n);
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
  function vs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        qe = i, n.target.dispatchEvent(i), qe = null;
      } else return t = Ar(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function au(e, t, n) {
    vs(e) && n.delete(t);
  }
  function Sh() {
    Fa = !1, Bn !== null && vs(Bn) && (Bn = null), Vn !== null && vs(Vn) && (Vn = null), Kn !== null && vs(Kn) && (Kn = null), vr.forEach(au), kr.forEach(au);
  }
  function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fa || (Fa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Sh)));
  }
  function jr(e) {
    function t(l) {
      return gr(l, e);
    }
    if (0 < ps.length) {
      gr(ps[0], e);
      for (var n = 1; n < ps.length; n++) {
        var i = ps[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && gr(Bn, e), Vn !== null && gr(Vn, e), Kn !== null && gr(Kn, e), vr.forEach(t), kr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) su(n), n.blockedOn === null && Un.shift();
  }
  var Pi = V.ReactCurrentBatchConfig, ks = !0;
  function wh(e, t, n, i) {
    var l = et, u = Pi.transition;
    Pi.transition = null;
    try {
      et = 1, Ia(e, t, n, i);
    } finally {
      et = l, Pi.transition = u;
    }
  }
  function Nh(e, t, n, i) {
    var l = et, u = Pi.transition;
    Pi.transition = null;
    try {
      et = 4, Ia(e, t, n, i);
    } finally {
      et = l, Pi.transition = u;
    }
  }
  function Ia(e, t, n, i) {
    if (ks) {
      var l = Da(e, t, n, i);
      if (l === null) nl(e, t, i, ys, n), ru(e, i);
      else if (xh(l, e, t, n, i)) i.stopPropagation();
      else if (ru(e, i), t & 4 && -1 < jh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Ar(l);
          if (u !== null && eu(u), u = Da(e, t, n, i), u === null && nl(e, t, i, ys, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else nl(e, t, i, null, n);
    }
  }
  var ys = null;
  function Da(e, t, n, i) {
    if (ys = null, e = ct(i), e = fi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Dn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ys = e, null;
  }
  function lu(e) {
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
        switch (zn()) {
          case gn:
            return 1;
          case R:
            return 4;
          case fe:
          case He:
            return 16;
          case Jt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, za = null, gs = null;
  function ou() {
    if (gs) return gs;
    var e, t = za, n = t.length, i, l = "value" in Hn ? Hn.value : Hn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return gs = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xs() {
    return !0;
  }
  function uu() {
    return !1;
  }
  function Xt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? xs : uu, this.isPropagationStopped = uu, this;
    }
    return ne(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xs);
    }, persist: function() {
    }, isPersistent: xs }), t;
  }
  var Ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ba = Xt(Ai), xr = ne({}, Ai, { view: 0, detail: 0 }), Eh = Xt(xr), Va, Ka, Sr, Ss = ne({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Va = e.screenX - Sr.screenX, Ka = e.screenY - Sr.screenY) : Ka = Va = 0, Sr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ka;
  } }), cu = Xt(Ss), Ch = ne({}, Ss, { dataTransfer: 0 }), Th = Xt(Ch), Mh = ne({}, xr, { relatedTarget: 0 }), Ua = Xt(Mh), _h = ne({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bh = Xt(_h), Ph = ne({}, Ai, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ah = Xt(Ph), Rh = ne({}, Ai, { data: 0 }), du = Xt(Rh), Lh = {
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
  }, Oh = {
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
  }, $h = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Fh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $h[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return Fh;
  }
  var Ih = ne({}, xr, { key: function(e) {
    if (e.key) {
      var t = Lh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Oh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Dh = Xt(Ih), zh = ne({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fu = Xt(zh), Bh = ne({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), Vh = Xt(Bh), Kh = ne({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Uh = Xt(Kh), Hh = ne({}, Ss, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gh = Xt(Hh), Wh = [9, 13, 27, 32], Ga = m && "CompositionEvent" in window, wr = null;
  m && "documentMode" in document && (wr = document.documentMode);
  var Qh = m && "TextEvent" in window && !wr, hu = m && (!Ga || wr && 8 < wr && 11 >= wr), mu = " ", pu = !1;
  function vu(e, t) {
    switch (e) {
      case "keyup":
        return Wh.indexOf(t.keyCode) !== -1;
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
  function ku(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ri = !1;
  function Yh(e, t) {
    switch (e) {
      case "compositionend":
        return ku(t);
      case "keypress":
        return t.which !== 32 ? null : (pu = !0, mu);
      case "textInput":
        return e = t.data, e === mu && pu ? null : e;
      default:
        return null;
    }
  }
  function Jh(e, t) {
    if (Ri) return e === "compositionend" || !Ga && vu(e, t) ? (e = ou(), gs = za = Hn = null, Ri = !1, e) : null;
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
        return hu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xh[e.type] : t === "textarea";
  }
  function gu(e, t, n, i) {
    cn(i), t = Ts(t, "onChange"), 0 < t.length && (n = new Ba("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Er = null;
  function Zh(e) {
    Fu(e, 0);
  }
  function ws(e) {
    var t = Ii(e);
    if (me(t)) return e;
  }
  function qh(e, t) {
    if (e === "change") return t;
  }
  var ju = !1;
  if (m) {
    var Wa;
    if (m) {
      var Qa = "oninput" in document;
      if (!Qa) {
        var xu = document.createElement("div");
        xu.setAttribute("oninput", "return;"), Qa = typeof xu.oninput == "function";
      }
      Wa = Qa;
    } else Wa = !1;
    ju = Wa && (!document.documentMode || 9 < document.documentMode);
  }
  function Su() {
    Nr && (Nr.detachEvent("onpropertychange", wu), Er = Nr = null);
  }
  function wu(e) {
    if (e.propertyName === "value" && ws(Er)) {
      var t = [];
      gu(t, Er, e, ct(e)), _i(Zh, t);
    }
  }
  function em(e, t, n) {
    e === "focusin" ? (Su(), Nr = t, Er = n, Nr.attachEvent("onpropertychange", wu)) : e === "focusout" && Su();
  }
  function tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ws(Er);
  }
  function nm(e, t) {
    if (e === "click") return ws(t);
  }
  function im(e, t) {
    if (e === "input" || e === "change") return ws(t);
  }
  function rm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var fn = typeof Object.is == "function" ? Object.is : rm;
  function Cr(e, t) {
    if (fn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!N.call(t, l) || !fn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Nu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Eu(e, t) {
    var n = Nu(e);
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
      n = Nu(n);
    }
  }
  function Cu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Tu() {
    for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ge(e.document);
    }
    return t;
  }
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function sm(e) {
    var t = Tu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Cu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ya(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = Eu(n, u);
          var h = Eu(
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
  var am = m && "documentMode" in document && 11 >= document.documentMode, Li = null, Ja = null, Tr = null, Xa = !1;
  function Mu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa || Li == null || Li !== ge(i) || (i = Li, "selectionStart" in i && Ya(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Tr && Cr(Tr, i) || (Tr = i, i = Ts(Ja, "onSelect"), 0 < i.length && (t = new Ba("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function Ns(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, Za = {}, _u = {};
  m && (_u = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Es(e) {
    if (Za[e]) return Za[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in _u) return Za[e] = t[n];
    return e;
  }
  var bu = Es("animationend"), Pu = Es("animationiteration"), Au = Es("animationstart"), Ru = Es("transitionend"), Lu = /* @__PURE__ */ new Map(), Ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gn(e, t) {
    Lu.set(e, t), f(t, [e]);
  }
  for (var qa = 0; qa < Ou.length; qa++) {
    var el = Ou[qa], lm = el.toLowerCase(), om = el[0].toUpperCase() + el.slice(1);
    Gn(lm, "on" + om);
  }
  Gn(bu, "onAnimationEnd"), Gn(Pu, "onAnimationIteration"), Gn(Au, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(Ru, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), um = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
  function $u(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, as(i, t, void 0, e), e.currentTarget = null;
  }
  function Fu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], x = k.instance, F = k.currentTarget;
          if (k = k.listener, x !== u && l.isPropagationStopped()) break e;
          $u(l, k, F), u = x;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], x = k.instance, F = k.currentTarget, k = k.listener, x !== u && l.isPropagationStopped()) break e;
          $u(l, k, F), u = x;
        }
      }
    }
    if (dn) throw e = In, dn = !1, In = null, e;
  }
  function lt(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Iu(t, e, 2, !1), n.add(i));
  }
  function tl(e, t, n) {
    var i = 0;
    t && (i |= 4), Iu(n, e, i, t);
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[Cs]) {
      e[Cs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (um.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cs] || (t[Cs] = !0, tl("selectionchange", !1, t));
    }
  }
  function Iu(e, t, n, i) {
    switch (lu(t)) {
      case 1:
        var l = wh;
        break;
      case 4:
        l = Nh;
        break;
      default:
        l = Ia;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ve || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function nl(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var x = h.tag;
          if ((x === 3 || x === 4) && (x = h.stateNode.containerInfo, x === l || x.nodeType === 8 && x.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = fi(k), h === null) return;
          if (x = h.tag, x === 5 || x === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    _i(function() {
      var F = u, J = ct(n), Z = [];
      e: {
        var Q = Lu.get(e);
        if (Q !== void 0) {
          var ce = Ba, ve = e;
          switch (e) {
            case "keypress":
              if (js(n) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Dh;
              break;
            case "focusin":
              ve = "focus", ce = Ua;
              break;
            case "focusout":
              ve = "blur", ce = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Ua;
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
              ce = cu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Th;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Vh;
              break;
            case bu:
            case Pu:
            case Au:
              ce = bh;
              break;
            case Ru:
              ce = Uh;
              break;
            case "scroll":
              ce = Eh;
              break;
            case "wheel":
              ce = Gh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Ah;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = fu;
          }
          var ye = (t & 4) !== 0, gt = !ye && e === "scroll", P = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var C = F, L; C !== null; ) {
            L = C;
            var ie = L.stateNode;
            if (L.tag === 5 && ie !== null && (L = ie, P !== null && (ie = di(C, P), ie != null && ye.push(br(C, ie, L)))), gt) break;
            C = C.return;
          }
          0 < ye.length && (Q = new ce(Q, ve, null, n, J), Z.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", Q && n !== qe && (ve = n.relatedTarget || n.fromElement) && (fi(ve) || ve[_n])) break e;
          if ((ce || Q) && (Q = J.window === J ? J : (Q = J.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ce ? (ve = n.relatedTarget || n.toElement, ce = F, ve = ve ? fi(ve) : null, ve !== null && (gt = Mn(ve), ve !== gt || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (ce = null, ve = F), ce !== ve)) {
            if (ye = cu, ie = "onMouseLeave", P = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (ye = fu, ie = "onPointerLeave", P = "onPointerEnter", C = "pointer"), gt = ce == null ? Q : Ii(ce), L = ve == null ? Q : Ii(ve), Q = new ye(ie, C + "leave", ce, n, J), Q.target = gt, Q.relatedTarget = L, ie = null, fi(J) === F && (ye = new ye(P, C + "enter", ve, n, J), ye.target = L, ye.relatedTarget = gt, ie = ye), gt = ie, ce && ve) t: {
              for (ye = ce, P = ve, C = 0, L = ye; L; L = $i(L)) C++;
              for (L = 0, ie = P; ie; ie = $i(ie)) L++;
              for (; 0 < C - L; ) ye = $i(ye), C--;
              for (; 0 < L - C; ) P = $i(P), L--;
              for (; C--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = $i(ye), P = $i(P);
              }
              ye = null;
            }
            else ye = null;
            ce !== null && Du(Z, Q, ce, ye, !1), ve !== null && gt !== null && Du(Z, gt, ve, ye, !0);
          }
        }
        e: {
          if (Q = F ? Ii(F) : window, ce = Q.nodeName && Q.nodeName.toLowerCase(), ce === "select" || ce === "input" && Q.type === "file") var xe = qh;
          else if (yu(Q)) if (ju) xe = im;
          else {
            xe = tm;
            var be = em;
          }
          else (ce = Q.nodeName) && ce.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (xe = nm);
          if (xe && (xe = xe(e, F))) {
            gu(Z, xe, n, J);
            break e;
          }
          be && be(e, Q, F), e === "focusout" && (be = Q._wrapperState) && be.controlled && Q.type === "number" && Qe(Q, "number", Q.value);
        }
        switch (be = F ? Ii(F) : window, e) {
          case "focusin":
            (yu(be) || be.contentEditable === "true") && (Li = be, Ja = F, Tr = null);
            break;
          case "focusout":
            Tr = Ja = Li = null;
            break;
          case "mousedown":
            Xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xa = !1, Mu(Z, n, J);
            break;
          case "selectionchange":
            if (am) break;
          case "keydown":
          case "keyup":
            Mu(Z, n, J);
        }
        var Pe;
        if (Ga) e: {
          switch (e) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else Ri ? vu(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (hu && n.locale !== "ko" && (Ri || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Ri && (Pe = ou()) : (Hn = J, za = "value" in Hn ? Hn.value : Hn.textContent, Ri = !0)), be = Ts(F, Oe), 0 < be.length && (Oe = new du(Oe, e, null, n, J), Z.push({ event: Oe, listeners: be }), Pe ? Oe.data = Pe : (Pe = ku(n), Pe !== null && (Oe.data = Pe)))), (Pe = Qh ? Yh(e, n) : Jh(e, n)) && (F = Ts(F, "onBeforeInput"), 0 < F.length && (J = new du("onBeforeInput", "beforeinput", null, n, J), Z.push({ event: J, listeners: F }), J.data = Pe));
      }
      Fu(Z, t);
    });
  }
  function br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ts(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = di(e, n), u != null && i.unshift(br(e, u, l)), u = di(e, t), u != null && i.push(br(e, u, l))), e = e.return;
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
  function Du(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, x = k.alternate, F = k.stateNode;
      if (x !== null && x === i) break;
      k.tag === 5 && F !== null && (k = F, l ? (x = di(n, u), x != null && h.unshift(br(n, x, k))) : l || (x = di(n, u), x != null && h.push(br(n, x, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var cm = /\r\n?/g, dm = /\u0000|\uFFFD/g;
  function zu(e) {
    return (typeof e == "string" ? e : "" + e).replace(cm, `
`).replace(dm, "");
  }
  function Ms(e, t, n) {
    if (t = zu(t), zu(e) !== t && n) throw Error(o(425));
  }
  function _s() {
  }
  var il = null, rl = null;
  function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, fm = typeof clearTimeout == "function" ? clearTimeout : void 0, Bu = typeof Promise == "function" ? Promise : void 0, hm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bu < "u" ? function(e) {
    return Bu.resolve(null).then(e).catch(mm);
  } : al;
  function mm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ll(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), jr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    jr(t);
  }
  function Wn(e) {
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
  function Vu(e) {
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
  var Fi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Fi, Pr = "__reactProps$" + Fi, _n = "__reactContainer$" + Fi, ol = "__reactEvents$" + Fi, pm = "__reactListeners$" + Fi, vm = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Vu(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = Vu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ar(e) {
    return e = e[jn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function bs(e) {
    return e[Pr] || null;
  }
  var ul = [], Di = -1;
  function Qn(e) {
    return { current: e };
  }
  function ot(e) {
    0 > Di || (e.current = ul[Di], ul[Di] = null, Di--);
  }
  function rt(e, t) {
    Di++, ul[Di] = e.current, e.current = t;
  }
  var Yn = {}, Lt = Qn(Yn), Ut = Qn(!1), hi = Yn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ht(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ps() {
    ot(Ut), ot(Lt);
  }
  function Ku(e, t, n) {
    if (Lt.current !== Yn) throw Error(o(168));
    rt(Lt, t), rt(Ut, n);
  }
  function Uu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, B(e) || "Unknown", l));
    return ne({}, n, i);
  }
  function As(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yn, hi = Lt.current, rt(Lt, e), rt(Ut, Ut.current), !0;
  }
  function Hu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Uu(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, ot(Ut), ot(Lt), rt(Lt, e)) : ot(Ut), rt(Ut, n);
  }
  var bn = null, Rs = !1, cl = !1;
  function Gu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function km(e) {
    Rs = !0, Gu(e);
  }
  function Jn() {
    if (!cl && bn !== null) {
      cl = !0;
      var e = 0, t = et;
      try {
        var n = bn;
        for (et = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        bn = null, Rs = !1;
      } catch (l) {
        throw bn !== null && (bn = bn.slice(e + 1)), _t(gn, Jn), l;
      } finally {
        et = t, cl = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Ls = null, Os = 0, nn = [], rn = 0, mi = null, Pn = 1, An = "";
  function pi(e, t) {
    Bi[Vi++] = Os, Bi[Vi++] = Ls, Ls = e, Os = t;
  }
  function Wu(e, t, n) {
    nn[rn++] = Pn, nn[rn++] = An, nn[rn++] = mi, mi = e;
    var i = Pn;
    e = An;
    var l = 32 - bt(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - bt(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Pn = 1 << 32 - bt(t) + l | n << l | i, An = u + e;
    } else Pn = 1 << u | n << l | i, An = e;
  }
  function dl(e) {
    e.return !== null && (pi(e, 1), Wu(e, 1, 0));
  }
  function fl(e) {
    for (; e === Ls; ) Ls = Bi[--Vi], Bi[Vi] = null, Os = Bi[--Vi], Bi[Vi] = null;
    for (; e === mi; ) mi = nn[--rn], nn[rn] = null, An = nn[--rn], nn[rn] = null, Pn = nn[--rn], nn[rn] = null;
  }
  var Zt = null, qt = null, ut = !1, hn = null;
  function Qu(e, t) {
    var n = on(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Yu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Zt = e, qt = Wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Zt = e, qt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = on(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Zt = e, qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (ut) {
      var t = qt;
      if (t) {
        var n = t;
        if (!Yu(e, t)) {
          if (hl(e)) throw Error(o(418));
          t = Wn(n.nextSibling);
          var i = Zt;
          t && Yu(e, t) ? Qu(i, n) : (e.flags = e.flags & -4097 | 2, ut = !1, Zt = e);
        }
      } else {
        if (hl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, ut = !1, Zt = e;
      }
    }
  }
  function Ju(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Zt = e;
  }
  function $s(e) {
    if (e !== Zt) return !1;
    if (!ut) return Ju(e), ut = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = qt)) {
      if (hl(e)) throw Xu(), Error(o(418));
      for (; t; ) Qu(e, t), t = Wn(t.nextSibling);
    }
    if (Ju(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qt = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        qt = null;
      }
    } else qt = Zt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xu() {
    for (var e = qt; e; ) e = Wn(e.nextSibling);
  }
  function Ki() {
    qt = Zt = null, ut = !1;
  }
  function pl(e) {
    hn === null ? hn = [e] : hn.push(e);
  }
  var ym = V.ReactCurrentBatchConfig;
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
  function Fs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qu(e) {
    function t(P, C) {
      if (e) {
        var L = P.deletions;
        L === null ? (P.deletions = [C], P.flags |= 16) : L.push(C);
      }
    }
    function n(P, C) {
      if (!e) return null;
      for (; C !== null; ) t(P, C), C = C.sibling;
      return null;
    }
    function i(P, C) {
      for (P = /* @__PURE__ */ new Map(); C !== null; ) C.key !== null ? P.set(C.key, C) : P.set(C.index, C), C = C.sibling;
      return P;
    }
    function l(P, C) {
      return P = ri(P, C), P.index = 0, P.sibling = null, P;
    }
    function u(P, C, L) {
      return P.index = L, e ? (L = P.alternate, L !== null ? (L = L.index, L < C ? (P.flags |= 2, C) : L) : (P.flags |= 2, C)) : (P.flags |= 1048576, C);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, C, L, ie) {
      return C === null || C.tag !== 6 ? (C = ao(L, P.mode, ie), C.return = P, C) : (C = l(C, L), C.return = P, C);
    }
    function x(P, C, L, ie) {
      var xe = L.type;
      return xe === O ? J(P, C, L.props.children, ie, L.key) : C !== null && (C.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === oe && Zu(xe) === C.type) ? (ie = l(C, L.props), ie.ref = Rr(P, C, L), ie.return = P, ie) : (ie = la(L.type, L.key, L.props, null, P.mode, ie), ie.ref = Rr(P, C, L), ie.return = P, ie);
    }
    function F(P, C, L, ie) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== L.containerInfo || C.stateNode.implementation !== L.implementation ? (C = lo(L, P.mode, ie), C.return = P, C) : (C = l(C, L.children || []), C.return = P, C);
    }
    function J(P, C, L, ie, xe) {
      return C === null || C.tag !== 7 ? (C = wi(L, P.mode, ie, xe), C.return = P, C) : (C = l(C, L), C.return = P, C);
    }
    function Z(P, C, L) {
      if (typeof C == "string" && C !== "" || typeof C == "number") return C = ao("" + C, P.mode, L), C.return = P, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case z:
            return L = la(C.type, C.key, C.props, null, P.mode, L), L.ref = Rr(P, null, C), L.return = P, L;
          case D:
            return C = lo(C, P.mode, L), C.return = P, C;
          case oe:
            var ie = C._init;
            return Z(P, ie(C._payload), L);
        }
        if (Xe(C) || ae(C)) return C = wi(C, P.mode, L, null), C.return = P, C;
        Fs(P, C);
      }
      return null;
    }
    function Q(P, C, L, ie) {
      var xe = C !== null ? C.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return xe !== null ? null : k(P, C, "" + L, ie);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            return L.key === xe ? x(P, C, L, ie) : null;
          case D:
            return L.key === xe ? F(P, C, L, ie) : null;
          case oe:
            return xe = L._init, Q(
              P,
              C,
              xe(L._payload),
              ie
            );
        }
        if (Xe(L) || ae(L)) return xe !== null ? null : J(P, C, L, ie, null);
        Fs(P, L);
      }
      return null;
    }
    function ce(P, C, L, ie, xe) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(L) || null, k(C, P, "" + ie, xe);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case z:
            return P = P.get(ie.key === null ? L : ie.key) || null, x(C, P, ie, xe);
          case D:
            return P = P.get(ie.key === null ? L : ie.key) || null, F(C, P, ie, xe);
          case oe:
            var be = ie._init;
            return ce(P, C, L, be(ie._payload), xe);
        }
        if (Xe(ie) || ae(ie)) return P = P.get(L) || null, J(C, P, ie, xe, null);
        Fs(C, ie);
      }
      return null;
    }
    function ve(P, C, L, ie) {
      for (var xe = null, be = null, Pe = C, Oe = C = 0, Tt = null; Pe !== null && Oe < L.length; Oe++) {
        Pe.index > Oe ? (Tt = Pe, Pe = null) : Tt = Pe.sibling;
        var Ye = Q(P, Pe, L[Oe], ie);
        if (Ye === null) {
          Pe === null && (Pe = Tt);
          break;
        }
        e && Pe && Ye.alternate === null && t(P, Pe), C = u(Ye, C, Oe), be === null ? xe = Ye : be.sibling = Ye, be = Ye, Pe = Tt;
      }
      if (Oe === L.length) return n(P, Pe), ut && pi(P, Oe), xe;
      if (Pe === null) {
        for (; Oe < L.length; Oe++) Pe = Z(P, L[Oe], ie), Pe !== null && (C = u(Pe, C, Oe), be === null ? xe = Pe : be.sibling = Pe, be = Pe);
        return ut && pi(P, Oe), xe;
      }
      for (Pe = i(P, Pe); Oe < L.length; Oe++) Tt = ce(Pe, P, Oe, L[Oe], ie), Tt !== null && (e && Tt.alternate !== null && Pe.delete(Tt.key === null ? Oe : Tt.key), C = u(Tt, C, Oe), be === null ? xe = Tt : be.sibling = Tt, be = Tt);
      return e && Pe.forEach(function(si) {
        return t(P, si);
      }), ut && pi(P, Oe), xe;
    }
    function ye(P, C, L, ie) {
      var xe = ae(L);
      if (typeof xe != "function") throw Error(o(150));
      if (L = xe.call(L), L == null) throw Error(o(151));
      for (var be = xe = null, Pe = C, Oe = C = 0, Tt = null, Ye = L.next(); Pe !== null && !Ye.done; Oe++, Ye = L.next()) {
        Pe.index > Oe ? (Tt = Pe, Pe = null) : Tt = Pe.sibling;
        var si = Q(P, Pe, Ye.value, ie);
        if (si === null) {
          Pe === null && (Pe = Tt);
          break;
        }
        e && Pe && si.alternate === null && t(P, Pe), C = u(si, C, Oe), be === null ? xe = si : be.sibling = si, be = si, Pe = Tt;
      }
      if (Ye.done) return n(
        P,
        Pe
      ), ut && pi(P, Oe), xe;
      if (Pe === null) {
        for (; !Ye.done; Oe++, Ye = L.next()) Ye = Z(P, Ye.value, ie), Ye !== null && (C = u(Ye, C, Oe), be === null ? xe = Ye : be.sibling = Ye, be = Ye);
        return ut && pi(P, Oe), xe;
      }
      for (Pe = i(P, Pe); !Ye.done; Oe++, Ye = L.next()) Ye = ce(Pe, P, Oe, Ye.value, ie), Ye !== null && (e && Ye.alternate !== null && Pe.delete(Ye.key === null ? Oe : Ye.key), C = u(Ye, C, Oe), be === null ? xe = Ye : be.sibling = Ye, be = Ye);
      return e && Pe.forEach(function(Xm) {
        return t(P, Xm);
      }), ut && pi(P, Oe), xe;
    }
    function gt(P, C, L, ie) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            e: {
              for (var xe = L.key, be = C; be !== null; ) {
                if (be.key === xe) {
                  if (xe = L.type, xe === O) {
                    if (be.tag === 7) {
                      n(P, be.sibling), C = l(be, L.props.children), C.return = P, P = C;
                      break e;
                    }
                  } else if (be.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === oe && Zu(xe) === be.type) {
                    n(P, be.sibling), C = l(be, L.props), C.ref = Rr(P, be, L), C.return = P, P = C;
                    break e;
                  }
                  n(P, be);
                  break;
                } else t(P, be);
                be = be.sibling;
              }
              L.type === O ? (C = wi(L.props.children, P.mode, ie, L.key), C.return = P, P = C) : (ie = la(L.type, L.key, L.props, null, P.mode, ie), ie.ref = Rr(P, C, L), ie.return = P, P = ie);
            }
            return h(P);
          case D:
            e: {
              for (be = L.key; C !== null; ) {
                if (C.key === be) if (C.tag === 4 && C.stateNode.containerInfo === L.containerInfo && C.stateNode.implementation === L.implementation) {
                  n(P, C.sibling), C = l(C, L.children || []), C.return = P, P = C;
                  break e;
                } else {
                  n(P, C);
                  break;
                }
                else t(P, C);
                C = C.sibling;
              }
              C = lo(L, P.mode, ie), C.return = P, P = C;
            }
            return h(P);
          case oe:
            return be = L._init, gt(P, C, be(L._payload), ie);
        }
        if (Xe(L)) return ve(P, C, L, ie);
        if (ae(L)) return ye(P, C, L, ie);
        Fs(P, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, C !== null && C.tag === 6 ? (n(P, C.sibling), C = l(C, L), C.return = P, P = C) : (n(P, C), C = ao(L, P.mode, ie), C.return = P, P = C), h(P)) : n(P, C);
    }
    return gt;
  }
  var Ui = qu(!0), ec = qu(!1), Is = Qn(null), Ds = null, Hi = null, vl = null;
  function kl() {
    vl = Hi = Ds = null;
  }
  function yl(e) {
    var t = Is.current;
    ot(Is), e._currentValue = t;
  }
  function gl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Ds = e, vl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Gt = !0), e.firstContext = null);
  }
  function sn(e) {
    var t = e._currentValue;
    if (vl !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Ds === null) throw Error(o(308));
      Hi = e, Ds.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var vi = null;
  function jl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function tc(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, jl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Rn(e, i);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Xn = !1;
  function xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ln(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ge & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Rn(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, jl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Rn(e, n);
  }
  function zs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
    }
  }
  function ic(e, t) {
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
  function Bs(e, t, n, i) {
    var l = e.updateQueue;
    Xn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var x = k, F = x.next;
      x.next = null, h === null ? u = F : h.next = F, h = x;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, k = J.lastBaseUpdate, k !== h && (k === null ? J.firstBaseUpdate = F : k.next = F, J.lastBaseUpdate = x));
    }
    if (u !== null) {
      var Z = l.baseState;
      h = 0, J = F = x = null, k = u;
      do {
        var Q = k.lane, ce = k.eventTime;
        if ((i & Q) === Q) {
          J !== null && (J = J.next = {
            eventTime: ce,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, ye = k;
            switch (Q = t, ce = n, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  Z = ve.call(ce, Z, Q);
                  break e;
                }
                Z = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, Q = typeof ve == "function" ? ve.call(ce, Z, Q) : ve, Q == null) break e;
                Z = ne({}, Z, Q);
                break e;
              case 2:
                Xn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else ce = { eventTime: ce, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, J === null ? (F = J = ce, x = Z) : J = J.next = ce, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (J === null && (x = Z), l.baseState = x, l.firstBaseUpdate = F, l.lastBaseUpdate = J, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      gi |= h, e.lanes = h, e.memoizedState = Z;
    }
  }
  function rc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(o(191, l));
        l.call(i);
      }
    }
  }
  var Lr = {}, xn = Qn(Lr), Or = Qn(Lr), $r = Qn(Lr);
  function ki(e) {
    if (e === Lr) throw Error(o(174));
    return e;
  }
  function Sl(e, t) {
    switch (rt($r, t), rt(Or, e), rt(xn, Lr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : U(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = U(t, e);
    }
    ot(xn), rt(xn, t);
  }
  function Wi() {
    ot(xn), ot(Or), ot($r);
  }
  function sc(e) {
    ki($r.current);
    var t = ki(xn.current), n = U(t, e.type);
    t !== n && (rt(Or, e), rt(xn, n));
  }
  function wl(e) {
    Or.current === e && (ot(xn), ot(Or));
  }
  var ht = Qn(0);
  function Vs(e) {
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
  var Nl = [];
  function El() {
    for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var Ks = V.ReactCurrentDispatcher, Cl = V.ReactCurrentBatchConfig, yi = 0, mt = null, St = null, Et = null, Us = !1, Fr = !1, Ir = 0, gm = 0;
  function Ot() {
    throw Error(o(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!fn(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, i, l, u) {
    if (yi = u, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ks.current = e === null || e.memoizedState === null ? wm : Nm, e = n(i, l), Fr) {
      u = 0;
      do {
        if (Fr = !1, Ir = 0, 25 <= u) throw Error(o(301));
        u += 1, Et = St = null, t.updateQueue = null, Ks.current = Em, e = n(i, l);
      } while (Fr);
    }
    if (Ks.current = Ws, t = St !== null && St.next !== null, yi = 0, Et = St = mt = null, Us = !1, t) throw Error(o(300));
    return e;
  }
  function _l() {
    var e = Ir !== 0;
    return Ir = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? mt.memoizedState = Et = e : Et = Et.next = e, Et;
  }
  function an() {
    if (St === null) {
      var e = mt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = St.next;
    var t = Et === null ? mt.memoizedState : Et.next;
    if (t !== null) Et = t, St = e;
    else {
      if (e === null) throw Error(o(310));
      St = e, e = { memoizedState: St.memoizedState, baseState: St.baseState, baseQueue: St.baseQueue, queue: St.queue, next: null }, Et === null ? mt.memoizedState = Et = e : Et = Et.next = e;
    }
    return Et;
  }
  function Dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = St, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, x = null, F = u;
      do {
        var J = F.lane;
        if ((yi & J) === J) x !== null && (x = x.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), i = F.hasEagerState ? F.eagerState : e(i, F.action);
        else {
          var Z = {
            lane: J,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          x === null ? (k = x = Z, h = i) : x = x.next = Z, mt.lanes |= J, gi |= J;
        }
        F = F.next;
      } while (F !== null && F !== u);
      x === null ? h = i : x.next = k, fn(i, t.memoizedState) || (Gt = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = x, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, mt.lanes |= u, gi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      fn(u, t.memoizedState) || (Gt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function ac() {
  }
  function lc(e, t) {
    var n = mt, i = an(), l = t(), u = !fn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Gt = !0), i = i.queue, Al(cc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || Et !== null && Et.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, uc.bind(null, n, i, l, t), void 0, null), Ct === null) throw Error(o(349));
      (yi & 30) !== 0 || oc(n, t, l);
    }
    return l;
  }
  function oc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function uc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, dc(t) && fc(e);
  }
  function cc(e, t, n) {
    return n(function() {
      dc(t) && fc(e);
    });
  }
  function dc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !fn(e, n);
    } catch {
      return !0;
    }
  }
  function fc(e) {
    var t = Rn(e, 1);
    t !== null && kn(t, e, 1, -1);
  }
  function hc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sm.bind(null, mt, e), [t.memoizedState, e];
  }
  function zr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function mc() {
    return an().memoizedState;
  }
  function Hs(e, t, n, i) {
    var l = Sn();
    mt.flags |= e, l.memoizedState = zr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Gs(e, t, n, i) {
    var l = an();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (St !== null) {
      var h = St.memoizedState;
      if (u = h.destroy, i !== null && Tl(i, h.deps)) {
        l.memoizedState = zr(t, n, u, i);
        return;
      }
    }
    mt.flags |= e, l.memoizedState = zr(1 | t, n, u, i);
  }
  function pc(e, t) {
    return Hs(8390656, 8, e, t);
  }
  function Al(e, t) {
    return Gs(2048, 8, e, t);
  }
  function vc(e, t) {
    return Gs(4, 2, e, t);
  }
  function kc(e, t) {
    return Gs(4, 4, e, t);
  }
  function yc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function gc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gs(4, 4, yc.bind(null, t, e), n);
  }
  function Rl() {
  }
  function jc(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function xc(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Sc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Gt = !0), e.memoizedState = n) : (fn(n, t) || (n = Zo(), mt.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function jm(e, t) {
    var n = et;
    et = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Cl.transition;
    Cl.transition = {};
    try {
      e(!1), t();
    } finally {
      et = n, Cl.transition = i;
    }
  }
  function wc() {
    return an().memoizedState;
  }
  function xm(e, t, n) {
    var i = ni(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Ec(t, n);
    else if (n = tc(e, t, n, i), n !== null) {
      var l = Bt();
      kn(n, e, i, l), Cc(n, t, i);
    }
  }
  function Sm(e, t, n) {
    var i = ni(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Nc(e)) Ec(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, fn(k, h)) {
          var x = t.interleaved;
          x === null ? (l.next = l, jl(t)) : (l.next = x.next, x.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = tc(e, t, l, i), n !== null && (l = Bt(), kn(n, e, i, l), Cc(n, t, i));
    }
  }
  function Nc(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function Ec(e, t) {
    Fr = Us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Cc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
    }
  }
  var Ws = { readContext: sn, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, wm = { readContext: sn, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: sn, useEffect: pc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(
      4194308,
      4,
      yc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Hs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Hs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Sn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Sn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = xm.bind(null, mt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: hc, useDebugValue: Rl, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = hc(!1), t = e[0];
    return e = jm.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = mt, l = Sn();
    if (ut) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), Ct === null) throw Error(o(349));
      (yi & 30) !== 0 || oc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, pc(cc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, zr(9, uc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = Ct.identifierPrefix;
    if (ut) {
      var n = An, i = Pn;
      n = (i & ~(1 << 32 - bt(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = gm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Nm = {
    readContext: sn,
    useCallback: jc,
    useContext: sn,
    useEffect: Al,
    useImperativeHandle: gc,
    useInsertionEffect: vc,
    useLayoutEffect: kc,
    useMemo: xc,
    useReducer: bl,
    useRef: mc,
    useState: function() {
      return bl(Dr);
    },
    useDebugValue: Rl,
    useDeferredValue: function(e) {
      var t = an();
      return Sc(t, St.memoizedState, e);
    },
    useTransition: function() {
      var e = bl(Dr)[0], t = an().memoizedState;
      return [e, t];
    },
    useMutableSource: ac,
    useSyncExternalStore: lc,
    useId: wc,
    unstable_isNewReconciler: !1
  }, Em = { readContext: sn, useCallback: jc, useContext: sn, useEffect: Al, useImperativeHandle: gc, useInsertionEffect: vc, useLayoutEffect: kc, useMemo: xc, useReducer: Pl, useRef: mc, useState: function() {
    return Pl(Dr);
  }, useDebugValue: Rl, useDeferredValue: function(e) {
    var t = an();
    return St === null ? t.memoizedState = e : Sc(t, St.memoizedState, e);
  }, useTransition: function() {
    var e = Pl(Dr)[0], t = an().memoizedState;
    return [e, t];
  }, useMutableSource: ac, useSyncExternalStore: lc, useId: wc, unstable_isNewReconciler: !1 };
  function mn(e, t) {
    if (e && e.defaultProps) {
      t = ne({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ll(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Bt(), l = ni(e), u = Ln(i, l);
    u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (kn(t, e, l, i), zs(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Bt(), l = ni(e), u = Ln(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (kn(t, e, l, i), zs(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Bt(), i = ni(e), l = Ln(n, i);
    l.tag = 2, t != null && (l.callback = t), t = Zn(e, l, i), t !== null && (kn(t, e, i, n), zs(t, e, i));
  } };
  function Tc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, i) || !Cr(l, u) : !0;
  }
  function Mc(e, t, n) {
    var i = !1, l = Yn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = sn(u) : (l = Ht(t) ? hi : Lt.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Yn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function _c(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function Ol(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = sn(u) : (u = Ht(t) ? hi : Lt.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ll(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Qs.enqueueReplaceState(l, l.state, null), Bs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += Ne(i), i = i.return;
      while (i);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function $l(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Fl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Cm = typeof WeakMap == "function" ? WeakMap : Map;
  function bc(e, t, n) {
    n = Ln(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ta || (ta = !0, Zl = i), Fl(e, t);
    }, n;
  }
  function Pc(e, t, n) {
    n = Ln(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        Fl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Fl(e, t), typeof i != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Ac(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Cm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = zm.bind(null, e, t, n), t.then(e, e));
  }
  function Rc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1), t.tag = 2, Zn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Tm = V.ReactCurrentOwner, Gt = !1;
  function zt(e, t, n, i) {
    t.child = e === null ? ec(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Oc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Ml(e, t, n, i, u, l), n = _l(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (ut && n && dl(t), t.flags |= 1, zt(e, t, i, l), t.child);
  }
  function $c(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !so(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Fc(e, t, u, i, l)) : (e = la(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = ri(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Fc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, i) && e.ref === t.ref) if (Gt = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Gt = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return Il(e, t, n, i, l);
  }
  function Ic(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rt(Ji, en), en |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, rt(Ji, en), en |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, rt(Ji, en), en |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, rt(Ji, en), en |= i;
    return zt(e, t, l, n), t.child;
  }
  function Dc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, i, l) {
    var u = Ht(n) ? hi : Lt.current;
    return u = zi(t, u), Gi(t, l), n = Ml(e, t, n, i, u, l), i = _l(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (ut && i && dl(t), t.flags |= 1, zt(e, t, n, l), t.child);
  }
  function zc(e, t, n, i, l) {
    if (Ht(n)) {
      var u = !0;
      As(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Js(e, t), Mc(t, n, i), Ol(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var x = h.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = sn(F) : (F = Ht(n) ? hi : Lt.current, F = zi(t, F));
      var J = n.getDerivedStateFromProps, Z = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || x !== F) && _c(t, h, i, F), Xn = !1;
      var Q = t.memoizedState;
      h.state = Q, Bs(t, i, h, l), x = t.memoizedState, k !== i || Q !== x || Ut.current || Xn ? (typeof J == "function" && (Ll(t, n, J, i), x = t.memoizedState), (k = Xn || Tc(t, n, k, i, Q, x, F)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = x), h.props = i, h.state = x, h.context = F, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, nc(e, t), k = t.memoizedProps, F = t.type === t.elementType ? k : mn(t.type, k), h.props = F, Z = t.pendingProps, Q = h.context, x = n.contextType, typeof x == "object" && x !== null ? x = sn(x) : (x = Ht(n) ? hi : Lt.current, x = zi(t, x));
      var ce = n.getDerivedStateFromProps;
      (J = typeof ce == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== Z || Q !== x) && _c(t, h, i, x), Xn = !1, Q = t.memoizedState, h.state = Q, Bs(t, i, h, l);
      var ve = t.memoizedState;
      k !== Z || Q !== ve || Ut.current || Xn ? (typeof ce == "function" && (Ll(t, n, ce, i), ve = t.memoizedState), (F = Xn || Tc(t, n, F, i, Q, ve, x) || !1) ? (J || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ve, x), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ve, x)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), h.props = i, h.state = ve, h.context = x, i = F) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Dl(e, t, n, i, u, l);
  }
  function Dl(e, t, n, i, l, u) {
    Dc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Hu(t, n, !1), On(e, t, u);
    i = t.stateNode, Tm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : zt(e, t, k, u), t.memoizedState = i.state, l && Hu(t, n, !0), t.child;
  }
  function Bc(e) {
    var t = e.stateNode;
    t.pendingContext ? Ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ku(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function Vc(e, t, n, i, l) {
    return Ki(), pl(l), t.flags |= 256, zt(e, t, n, i), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = ht.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), rt(ht, l & 1), e === null)
      return ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = oa(h, i, 0, null), e = wi(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Bl(n), t.memoizedState = zl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Mm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var x = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = x, t.deletions = null) : (i = ri(l, x), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = ri(k, u) : (u = wi(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Bl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = zl, i;
    }
    return u = e.child, e = u.sibling, i = ri(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ys(e, t, n, i) {
    return i !== null && pl(i), Ui(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Mm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = $l(Error(o(422))), Ys(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = oa({ mode: "visible", children: i.children }, l, 0, null), u = wi(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = Bl(h), t.memoizedState = zl, u);
    if ((t.mode & 1) === 0) return Ys(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = $l(u, i, void 0), Ys(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Gt || k) {
      if (i = Ct, i !== null) {
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Rn(e, l), kn(i, e, l, -1));
      }
      return ro(), i = $l(Error(o(421))), Ys(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, qt = Wn(l.nextSibling), Zt = t, ut = !0, hn = null, e !== null && (nn[rn++] = Pn, nn[rn++] = An, nn[rn++] = mi, Pn = e.id, An = e.overflow, mi = t), t = Vl(t, i.children), t.flags |= 4096, t);
  }
  function Uc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), gl(e.return, t, n);
  }
  function Kl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Hc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (zt(e, t, i.children, n), i = ht.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uc(e, n, t);
        else if (e.tag === 19) Uc(e, n, t);
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
    if (rt(ht, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Vs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Kl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Vs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Kl(t, !0, n, null, u);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Js(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function _m(e, t, n) {
    switch (t.tag) {
      case 3:
        Bc(t), Ki();
        break;
      case 5:
        sc(t);
        break;
      case 1:
        Ht(t.type) && As(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        rt(Is, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (rt(ht, ht.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Kc(e, t, n) : (rt(ht, ht.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        rt(ht, ht.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Hc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), rt(ht, ht.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ic(e, t, n);
    }
    return On(e, t, n);
  }
  var Gc, Ul, Wc, Qc;
  Gc = function(e, t) {
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
  }, Ul = function() {
  }, Wc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(xn.current);
      var u = null;
      switch (n) {
        case "input":
          l = je(e, l), i = je(e, i), u = [];
          break;
        case "select":
          l = ne({}, l, { value: void 0 }), i = ne({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = jt(e, l), i = jt(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = _s);
      }
      Me(n, i);
      var h;
      n = null;
      for (F in l) if (!i.hasOwnProperty(F) && l.hasOwnProperty(F) && l[F] != null) if (F === "style") {
        var k = l[F];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (d.hasOwnProperty(F) ? u || (u = []) : (u = u || []).push(F, null));
      for (F in i) {
        var x = i[F];
        if (k = l?.[F], i.hasOwnProperty(F) && x !== k && (x != null || k != null)) if (F === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || x && x.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in x) x.hasOwnProperty(h) && k[h] !== x[h] && (n || (n = {}), n[h] = x[h]);
        } else n || (u || (u = []), u.push(
          F,
          n
        )), n = x;
        else F === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, k = k ? k.__html : void 0, x != null && k !== x && (u = u || []).push(F, x)) : F === "children" ? typeof x != "string" && typeof x != "number" || (u = u || []).push(F, "" + x) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (d.hasOwnProperty(F) ? (x != null && F === "onScroll" && lt("scroll", e), u || k === x || (u = [])) : (u = u || []).push(F, x));
      }
      n && (u = u || []).push("style", n);
      var F = u;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, Qc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Br(e, t) {
    if (!ut) switch (e.tailMode) {
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
  function $t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function bm(e, t, n) {
    var i = t.pendingProps;
    switch (fl(t), t.tag) {
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
        return $t(t), null;
      case 1:
        return Ht(t.type) && Ps(), $t(t), null;
      case 3:
        return i = t.stateNode, Wi(), ot(Ut), ot(Lt), El(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && ($s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hn !== null && (to(hn), hn = null))), Ul(e, t), $t(t), null;
      case 5:
        wl(t);
        var l = ki($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Wc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return $t(t), null;
          }
          if (e = ki(xn.current), $s(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[jn] = t, i[Pr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                lt("cancel", i), lt("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                lt("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mr.length; l++) lt(Mr[l], i);
                break;
              case "source":
                lt("error", i);
                break;
              case "img":
              case "image":
              case "link":
                lt(
                  "error",
                  i
                ), lt("load", i);
                break;
              case "details":
                lt("toggle", i);
                break;
              case "input":
                Ae(i, u), lt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, lt("invalid", i);
                break;
              case "textarea":
                Ze(i, u), lt("invalid", i);
            }
            Me(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Ms(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Ms(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && lt("scroll", i);
            }
            switch (n) {
              case "input":
                Te(i), it(i, u, !0);
                break;
              case "textarea":
                Te(i), tt(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = _s);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[jn] = t, e[Pr] = i, Gc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Le(n, i), n) {
                case "dialog":
                  lt("cancel", e), lt("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  lt("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Mr.length; l++) lt(Mr[l], e);
                  l = i;
                  break;
                case "source":
                  lt("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  lt(
                    "error",
                    e
                  ), lt("load", e), l = i;
                  break;
                case "details":
                  lt("toggle", e), l = i;
                  break;
                case "input":
                  Ae(e, i), l = je(e, i), lt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = ne({}, i, { value: void 0 }), lt("invalid", e);
                  break;
                case "textarea":
                  Ze(e, i), l = jt(e, i), lt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Me(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var x = k[u];
                u === "style" ? Nt(e, x) : u === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Re(e, x)) : u === "children" ? typeof x == "string" ? (n !== "textarea" || x !== "") && Fe(e, x) : typeof x == "number" && Fe(e, "" + x) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? x != null && u === "onScroll" && lt("scroll", e) : x != null && K(e, u, x, h));
              }
              switch (n) {
                case "input":
                  Te(e), it(e, i, !1);
                  break;
                case "textarea":
                  Te(e), tt(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + te(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? st(e, !!i.multiple, u, !1) : i.defaultValue != null && st(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = _s);
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
        return $t(t), null;
      case 6:
        if (e && t.stateNode != null) Qc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = ki($r.current), ki(xn.current), $s(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[jn] = t, (u = i.nodeValue !== n) && (e = Zt, e !== null)) switch (e.tag) {
              case 3:
                Ms(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ms(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[jn] = t, t.stateNode = i;
        }
        return $t(t), null;
      case 13:
        if (ot(ht), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ut && qt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Xu(), Ki(), t.flags |= 98560, u = !1;
          else if (u = $s(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[jn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $t(t), u = !1;
          } else hn !== null && (to(hn), hn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ht.current & 1) !== 0 ? wt === 0 && (wt = 3) : ro())), t.updateQueue !== null && (t.flags |= 4), $t(t), null);
      case 4:
        return Wi(), Ul(e, t), e === null && _r(t.stateNode.containerInfo), $t(t), null;
      case 10:
        return yl(t.type._context), $t(t), null;
      case 17:
        return Ht(t.type) && Ps(), $t(t), null;
      case 19:
        if (ot(ht), u = t.memoizedState, u === null) return $t(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Br(u, !1);
        else {
          if (wt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Vs(e), h !== null) {
              for (t.flags |= 128, Br(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return rt(ht, ht.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && dt() > Xi && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !ut) return $t(t), null;
          } else 2 * dt() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = dt(), t.sibling = null, n = ht.current, rt(ht, i ? n & 1 | 2 : n & 1), t) : ($t(t), null);
      case 22:
      case 23:
        return io(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (en & 1073741824) !== 0 && ($t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Pm(e, t) {
    switch (fl(t), t.tag) {
      case 1:
        return Ht(t.type) && Ps(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), ot(Ut), ot(Lt), El(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wl(t), null;
      case 13:
        if (ot(ht), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ot(ht), null;
      case 4:
        return Wi(), null;
      case 10:
        return yl(t.type._context), null;
      case 22:
      case 23:
        return io(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xs = !1, Ft = !1, Am = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      pt(e, t, i);
    }
    else n.current = null;
  }
  function Hl(e, t, n) {
    try {
      n();
    } catch (i) {
      pt(e, t, i);
    }
  }
  var Yc = !1;
  function Rm(e, t) {
    if (il = ks, e = Tu(), Ya(e)) {
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
          var h = 0, k = -1, x = -1, F = 0, J = 0, Z = e, Q = null;
          t: for (; ; ) {
            for (var ce; Z !== n || l !== 0 && Z.nodeType !== 3 || (k = h + l), Z !== u || i !== 0 && Z.nodeType !== 3 || (x = h + i), Z.nodeType === 3 && (h += Z.nodeValue.length), (ce = Z.firstChild) !== null; )
              Q = Z, Z = ce;
            for (; ; ) {
              if (Z === e) break t;
              if (Q === n && ++F === l && (k = h), Q === u && ++J === i && (x = h), (ce = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = ce;
          }
          n = k === -1 || x === -1 ? null : { start: k, end: x };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (rl = { focusedElem: e, selectionRange: n }, ks = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
    else for (; he !== null; ) {
      t = he;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, gt = ve.memoizedState, P = t.stateNode, C = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : mn(t.type, ye), gt);
              P.__reactInternalSnapshotBeforeUpdate = C;
            }
            break;
          case 3:
            var L = t.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (ie) {
        pt(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return ve = Yc, Yc = !1, ve;
  }
  function Vr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Hl(t, n, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Zs(e, t) {
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
  function Gl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Jc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Pr], delete t[ol], delete t[pm], delete t[vm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Xc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Zc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _s));
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  function Ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
  }
  var Pt = null, pn = !1;
  function qn(e, t, n) {
    for (n = n.child; n !== null; ) qc(e, t, n), n = n.sibling;
  }
  function qc(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
      Dt.onCommitFiberUnmount(ft, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ft || Yi(n, t);
      case 6:
        var i = Pt, l = pn;
        Pt = null, qn(e, t, n), Pt = i, pn = l, Pt !== null && (pn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pt.removeChild(n.stateNode));
        break;
      case 18:
        Pt !== null && (pn ? (e = Pt, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), jr(e)) : ll(Pt, n.stateNode));
        break;
      case 4:
        i = Pt, l = pn, Pt = n.stateNode.containerInfo, pn = !0, qn(e, t, n), Pt = i, pn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ft && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        qn(e, t, n);
        break;
      case 1:
        if (!Ft && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          pt(n, t, k);
        }
        qn(e, t, n);
        break;
      case 21:
        qn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ft = (i = Ft) || n.memoizedState !== null, qn(e, t, n), Ft = i) : qn(e, t, n);
        break;
      default:
        qn(e, t, n);
    }
  }
  function ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Am()), t.forEach(function(i) {
        var l = Vm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function vn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Pt = k.stateNode, pn = !1;
              break e;
            case 3:
              Pt = k.stateNode.containerInfo, pn = !0;
              break e;
            case 4:
              Pt = k.stateNode.containerInfo, pn = !0;
              break e;
          }
          k = k.return;
        }
        if (Pt === null) throw Error(o(160));
        qc(u, h, l), Pt = null, pn = !1;
        var x = l.alternate;
        x !== null && (x.return = null), l.return = null;
      } catch (F) {
        pt(l, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) td(t, e), t = t.sibling;
  }
  function td(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(t, e), wn(e), i & 4) {
          try {
            Vr(3, e, e.return), Zs(3, e);
          } catch (ye) {
            pt(e, e.return, ye);
          }
          try {
            Vr(5, e, e.return);
          } catch (ye) {
            pt(e, e.return, ye);
          }
        }
        break;
      case 1:
        vn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (vn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Fe(l, "");
          } catch (ye) {
            pt(e, e.return, ye);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, x = e.updateQueue;
          if (e.updateQueue = null, x !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Ee(l, u), Le(k, h);
            var F = Le(k, u);
            for (h = 0; h < x.length; h += 2) {
              var J = x[h], Z = x[h + 1];
              J === "style" ? Nt(l, Z) : J === "dangerouslySetInnerHTML" ? Re(l, Z) : J === "children" ? Fe(l, Z) : K(l, J, Z, F);
            }
            switch (k) {
              case "input":
                Be(l, u);
                break;
              case "textarea":
                Ie(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ce = u.value;
                ce != null ? st(l, !!u.multiple, ce, !1) : Q !== !!u.multiple && (u.defaultValue != null ? st(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : st(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Pr] = u;
          } catch (ye) {
            pt(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (vn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ye) {
            pt(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (vn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (ye) {
          pt(e, e.return, ye);
        }
        break;
      case 4:
        vn(t, e), wn(e);
        break;
      case 13:
        vn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xl = dt())), i & 4 && ed(e);
        break;
      case 22:
        if (J = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ft = (F = Ft) || J, vn(t, e), Ft = F) : vn(t, e), wn(e), i & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !J && (e.mode & 1) !== 0) for (he = e, J = e.child; J !== null; ) {
            for (Z = he = J; he !== null; ) {
              switch (Q = he, ce = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, Q, Q.return);
                  break;
                case 1:
                  Yi(Q, Q.return);
                  var ve = Q.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      pt(i, n, ye);
                    }
                  }
                  break;
                case 5:
                  Yi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    rd(Z);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Q, he = ce) : rd(Z);
            }
            J = J.sibling;
          }
          e: for (J = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (J === null) {
                J = Z;
                try {
                  l = Z.stateNode, F ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = Z.stateNode, x = Z.memoizedProps.style, h = x != null && x.hasOwnProperty("display") ? x.display : null, k.style.display = Ce("display", h));
                } catch (ye) {
                  pt(e, e.return, ye);
                }
              }
            } else if (Z.tag === 6) {
              if (J === null) try {
                Z.stateNode.nodeValue = F ? "" : Z.memoizedProps;
              } catch (ye) {
                pt(e, e.return, ye);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              J === Z && (J = null), Z = Z.return;
            }
            J === Z && (J = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        vn(t, e), wn(e), i & 4 && ed(e);
        break;
      case 21:
        break;
      default:
        vn(
          t,
          e
        ), wn(e);
    }
  }
  function wn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Xc(n)) {
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
            i.flags & 32 && (Fe(l, ""), i.flags &= -33);
            var u = Zc(e);
            Ql(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Zc(e);
            Wl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (x) {
        pt(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lm(e, t, n) {
    he = e, nd(e);
  }
  function nd(e, t, n) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var l = he, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Xs;
        if (!h) {
          var k = l.alternate, x = k !== null && k.memoizedState !== null || Ft;
          k = Xs;
          var F = Ft;
          if (Xs = h, (Ft = x) && !F) for (he = l; he !== null; ) h = he, x = h.child, h.tag === 22 && h.memoizedState !== null ? sd(l) : x !== null ? (x.return = h, he = x) : sd(l);
          for (; u !== null; ) he = u, nd(u), u = u.sibling;
          he = l, Xs = k, Ft = F;
        }
        id(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, he = u) : id(e);
    }
  }
  function id(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ft || Zs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Ft) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && rc(t, u, i);
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
                rc(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var x = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && n.focus();
                    break;
                  case "img":
                    x.src && (n.src = x.src);
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
                  var J = F.memoizedState;
                  if (J !== null) {
                    var Z = J.dehydrated;
                    Z !== null && jr(Z);
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
          Ft || t.flags & 512 && Gl(t);
        } catch (Q) {
          pt(t, t.return, Q);
        }
      }
      if (t === e) {
        he = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function rd(e) {
    for (; he !== null; ) {
      var t = he;
      if (t === e) {
        he = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function sd(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zs(4, t);
            } catch (x) {
              pt(t, n, x);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (x) {
                pt(t, l, x);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (x) {
              pt(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Gl(t);
            } catch (x) {
              pt(t, h, x);
            }
        }
      } catch (x) {
        pt(t, t.return, x);
      }
      if (t === e) {
        he = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, he = k;
        break;
      }
      he = t.return;
    }
  }
  var Om = Math.ceil, qs = V.ReactCurrentDispatcher, Yl = V.ReactCurrentOwner, ln = V.ReactCurrentBatchConfig, Ge = 0, Ct = null, xt = null, At = 0, en = 0, Ji = Qn(0), wt = 0, Kr = null, gi = 0, ea = 0, Jl = 0, Ur = null, Wt = null, Xl = 0, Xi = 1 / 0, $n = null, ta = !1, Zl = null, ei = null, na = !1, ti = null, ia = 0, Hr = 0, ql = null, ra = -1, sa = 0;
  function Bt() {
    return (Ge & 6) !== 0 ? dt() : ra !== -1 ? ra : ra = dt();
  }
  function ni(e) {
    return (e.mode & 1) === 0 ? 1 : (Ge & 2) !== 0 && At !== 0 ? At & -At : ym.transition !== null ? (sa === 0 && (sa = Zo()), sa) : (e = et, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lu(e.type)), e);
  }
  function kn(e, t, n, i) {
    if (50 < Hr) throw Hr = 0, ql = null, Error(o(185));
    pr(e, n, i), ((Ge & 2) === 0 || e !== Ct) && (e === Ct && ((Ge & 2) === 0 && (ea |= n), wt === 4 && ii(e, At)), Qt(e, i), n === 1 && Ge === 0 && (t.mode & 1) === 0 && (Xi = dt() + 500, Rs && Jn()));
  }
  function Qt(e, t) {
    var n = e.callbackNode;
    yh(e, t);
    var i = ms(e, e === Ct ? At : 0);
    if (i === 0) n !== null && cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && cs(n), t === 1) e.tag === 0 ? km(ld.bind(null, e)) : Gu(ld.bind(null, e)), hm(function() {
        (Ge & 6) === 0 && Jn();
      }), n = null;
      else {
        switch (qo(i)) {
          case 1:
            n = gn;
            break;
          case 4:
            n = R;
            break;
          case 16:
            n = fe;
            break;
          case 536870912:
            n = Jt;
            break;
          default:
            n = fe;
        }
        n = pd(n, ad.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ad(e, t) {
    if (ra = -1, sa = 0, (Ge & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = ms(e, e === Ct ? At : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = aa(e, i);
    else {
      t = i;
      var l = Ge;
      Ge |= 2;
      var u = ud();
      (Ct !== e || At !== t) && ($n = null, Xi = dt() + 500, xi(e, t));
      do
        try {
          Im();
          break;
        } catch (k) {
          od(e, k);
        }
      while (!0);
      kl(), qs.current = u, Ge = l, xt !== null ? t = 0 : (Ct = null, At = 0, t = wt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ra(e), l !== 0 && (i = l, t = eo(e, l))), t === 1) throw n = Kr, xi(e, 0), ii(e, i), Qt(e, dt()), n;
      if (t === 6) ii(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !$m(l) && (t = aa(e, i), t === 2 && (u = Ra(e), u !== 0 && (i = u, t = eo(e, u))), t === 1)) throw n = Kr, xi(e, 0), ii(e, i), Qt(e, dt()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Si(e, Wt, $n);
            break;
          case 3:
            if (ii(e, i), (i & 130023424) === i && (t = Xl + 500 - dt(), 10 < t)) {
              if (ms(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Bt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = al(Si.bind(null, e, Wt, $n), t);
              break;
            }
            Si(e, Wt, $n);
            break;
          case 4:
            if (ii(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - bt(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = dt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Om(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = al(Si.bind(null, e, Wt, $n), i);
              break;
            }
            Si(e, Wt, $n);
            break;
          case 5:
            Si(e, Wt, $n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Qt(e, dt()), e.callbackNode === n ? ad.bind(null, e) : null;
  }
  function eo(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = Wt, Wt = n, t !== null && to(t)), e;
  }
  function to(e) {
    Wt === null ? Wt = e : Wt.push.apply(Wt, e);
  }
  function $m(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!fn(u(), l)) return !1;
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
  function ii(e, t) {
    for (t &= ~Jl, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - bt(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function ld(e) {
    if ((Ge & 6) !== 0) throw Error(o(327));
    Zi();
    var t = ms(e, 0);
    if ((t & 1) === 0) return Qt(e, dt()), null;
    var n = aa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ra(e);
      i !== 0 && (t = i, n = eo(e, i));
    }
    if (n === 1) throw n = Kr, xi(e, 0), ii(e, t), Qt(e, dt()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, Wt, $n), Qt(e, dt()), null;
  }
  function no(e, t) {
    var n = Ge;
    Ge |= 1;
    try {
      return e(t);
    } finally {
      Ge = n, Ge === 0 && (Xi = dt() + 500, Rs && Jn());
    }
  }
  function ji(e) {
    ti !== null && ti.tag === 0 && (Ge & 6) === 0 && Zi();
    var t = Ge;
    Ge |= 1;
    var n = ln.transition, i = et;
    try {
      if (ln.transition = null, et = 1, e) return e();
    } finally {
      et = i, ln.transition = n, Ge = t, (Ge & 6) === 0 && Jn();
    }
  }
  function io() {
    en = Ji.current, ot(Ji);
  }
  function xi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fm(n)), xt !== null) for (n = xt.return; n !== null; ) {
      var i = n;
      switch (fl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ps();
          break;
        case 3:
          Wi(), ot(Ut), ot(Lt), El();
          break;
        case 5:
          wl(i);
          break;
        case 4:
          Wi();
          break;
        case 13:
          ot(ht);
          break;
        case 19:
          ot(ht);
          break;
        case 10:
          yl(i.type._context);
          break;
        case 22:
        case 23:
          io();
      }
      n = n.return;
    }
    if (Ct = e, xt = e = ri(e.current, null), At = en = t, wt = 0, Kr = null, Jl = ea = gi = 0, Wt = Ur = null, vi !== null) {
      for (t = 0; t < vi.length; t++) if (n = vi[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, i.next = h;
        }
        n.pending = i;
      }
      vi = null;
    }
    return e;
  }
  function od(e, t) {
    do {
      var n = xt;
      try {
        if (kl(), Ks.current = Ws, Us) {
          for (var i = mt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Us = !1;
        }
        if (yi = 0, Et = St = mt = null, Fr = !1, Ir = 0, Yl.current = null, n === null || n.return === null) {
          wt = 1, Kr = t, xt = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, x = t;
          if (t = At, k.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var F = x, J = k, Z = J.tag;
            if ((J.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = J.alternate;
              Q ? (J.updateQueue = Q.updateQueue, J.memoizedState = Q.memoizedState, J.lanes = Q.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var ce = Rc(h);
            if (ce !== null) {
              ce.flags &= -257, Lc(ce, h, k, u, t), ce.mode & 1 && Ac(u, F, t), t = ce, x = F;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(x), t.updateQueue = ye;
              } else ve.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ac(u, F, t), ro();
                break e;
              }
              x = Error(o(426));
            }
          } else if (ut && k.mode & 1) {
            var gt = Rc(h);
            if (gt !== null) {
              (gt.flags & 65536) === 0 && (gt.flags |= 256), Lc(gt, h, k, u, t), pl(Qi(x, k));
              break e;
            }
          }
          u = x = Qi(x, k), wt !== 4 && (wt = 2), Ur === null ? Ur = [u] : Ur.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = bc(u, x, t);
                ic(u, P);
                break e;
              case 1:
                k = x;
                var C = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof C.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ei === null || !ei.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var ie = Pc(u, k, t);
                  ic(u, ie);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        dd(n);
      } catch (xe) {
        t = xe, xt === n && n !== null && (xt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ud() {
    var e = qs.current;
    return qs.current = Ws, e === null ? Ws : e;
  }
  function ro() {
    (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Ct === null || (gi & 268435455) === 0 && (ea & 268435455) === 0 || ii(Ct, At);
  }
  function aa(e, t) {
    var n = Ge;
    Ge |= 2;
    var i = ud();
    (Ct !== e || At !== t) && ($n = null, xi(e, t));
    do
      try {
        Fm();
        break;
      } catch (l) {
        od(e, l);
      }
    while (!0);
    if (kl(), Ge = n, qs.current = i, xt !== null) throw Error(o(261));
    return Ct = null, At = 0, wt;
  }
  function Fm() {
    for (; xt !== null; ) cd(xt);
  }
  function Im() {
    for (; xt !== null && !ds(); ) cd(xt);
  }
  function cd(e) {
    var t = md(e.alternate, e, en);
    e.memoizedProps = e.pendingProps, t === null ? dd(e) : xt = t, Yl.current = null;
  }
  function dd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = bm(n, t, en), n !== null) {
          xt = n;
          return;
        }
      } else {
        if (n = Pm(n, t), n !== null) {
          n.flags &= 32767, xt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          wt = 6, xt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        xt = t;
        return;
      }
      xt = t = e;
    } while (t !== null);
    wt === 0 && (wt = 5);
  }
  function Si(e, t, n) {
    var i = et, l = ln.transition;
    try {
      ln.transition = null, et = 1, Dm(e, t, n, i);
    } finally {
      ln.transition = l, et = i;
    }
    return null;
  }
  function Dm(e, t, n, i) {
    do
      Zi();
    while (ti !== null);
    if ((Ge & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (gh(e, u), e === Ct && (xt = Ct = null, At = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || na || (na = !0, pd(fe, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = ln.transition, ln.transition = null;
      var h = et;
      et = 1;
      var k = Ge;
      Ge |= 4, Yl.current = null, Rm(e, n), td(n, e), sm(rl), ks = !!il, rl = il = null, e.current = n, Lm(n), Aa(), Ge = k, et = h, ln.transition = u;
    } else e.current = n;
    if (na && (na = !1, ti = e, ia = l), u = e.pendingLanes, u === 0 && (ei = null), hr(n.stateNode), Qt(e, dt()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ta) throw ta = !1, e = Zl, Zl = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === ql ? Hr++ : (Hr = 0, ql = e) : Hr = 0, Jn(), null;
  }
  function Zi() {
    if (ti !== null) {
      var e = qo(ia), t = ln.transition, n = et;
      try {
        if (ln.transition = null, et = 16 > e ? 16 : e, ti === null) var i = !1;
        else {
          if (e = ti, ti = null, ia = 0, (Ge & 6) !== 0) throw Error(o(331));
          var l = Ge;
          for (Ge |= 4, he = e.current; he !== null; ) {
            var u = he, h = u.child;
            if ((he.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var x = 0; x < k.length; x++) {
                  var F = k[x];
                  for (he = F; he !== null; ) {
                    var J = he;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vr(8, J, u);
                    }
                    var Z = J.child;
                    if (Z !== null) Z.return = J, he = Z;
                    else for (; he !== null; ) {
                      J = he;
                      var Q = J.sibling, ce = J.return;
                      if (Jc(J), J === F) {
                        he = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = ce, he = Q;
                        break;
                      }
                      he = ce;
                    }
                  }
                }
                var ve = u.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var gt = ye.sibling;
                      ye.sibling = null, ye = gt;
                    } while (ye !== null);
                  }
                }
                he = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, he = h;
            else e: for (; he !== null; ) {
              if (u = he, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Vr(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, he = P;
                break e;
              }
              he = u.return;
            }
          }
          var C = e.current;
          for (he = C; he !== null; ) {
            h = he;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, he = L;
            else e: for (h = C; he !== null; ) {
              if (k = he, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zs(9, k);
                }
              } catch (xe) {
                pt(k, k.return, xe);
              }
              if (k === h) {
                he = null;
                break e;
              }
              var ie = k.sibling;
              if (ie !== null) {
                ie.return = k.return, he = ie;
                break e;
              }
              he = k.return;
            }
          }
          if (Ge = l, Jn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
            Dt.onPostCommitFiberRoot(ft, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        et = n, ln.transition = t;
      }
    }
    return !1;
  }
  function fd(e, t, n) {
    t = Qi(n, t), t = bc(e, t, 1), e = Zn(e, t, 1), t = Bt(), e !== null && (pr(e, 1, t), Qt(e, t));
  }
  function pt(e, t, n) {
    if (e.tag === 3) fd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        fd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ei === null || !ei.has(i))) {
          e = Qi(n, e), e = Pc(t, e, 1), t = Zn(t, e, 1), e = Bt(), t !== null && (pr(t, 1, e), Qt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Bt(), e.pingedLanes |= e.suspendedLanes & n, Ct === e && (At & n) === n && (wt === 4 || wt === 3 && (At & 130023424) === At && 500 > dt() - Xl ? xi(e, 0) : Jl |= n), Qt(e, t);
  }
  function hd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = hs, hs <<= 1, (hs & 130023424) === 0 && (hs = 4194304)));
    var n = Bt();
    e = Rn(e, t), e !== null && (pr(e, t, n), Qt(e, n));
  }
  function Bm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), hd(e, n);
  }
  function Vm(e, t) {
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
    i !== null && i.delete(t), hd(e, n);
  }
  var md;
  md = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ut.current) Gt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Gt = !1, _m(e, t, n);
      Gt = (e.flags & 131072) !== 0;
    }
    else Gt = !1, ut && (t.flags & 1048576) !== 0 && Wu(t, Os, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Js(e, t), e = t.pendingProps;
        var l = zi(t, Lt.current);
        Gi(t, n), l = Ml(null, t, i, e, l, n);
        var u = _l();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ht(i) ? (u = !0, As(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xl(t), l.updater = Qs, t.stateNode = l, l._reactInternals = t, Ol(t, i, e, n), t = Dl(null, t, i, !0, u, n)) : (t.tag = 0, ut && u && dl(t), zt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Js(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Um(i), e = mn(i, e), l) {
            case 0:
              t = Il(null, t, i, e, n);
              break e;
            case 1:
              t = zc(null, t, i, e, n);
              break e;
            case 11:
              t = Oc(null, t, i, e, n);
              break e;
            case 14:
              t = $c(null, t, i, mn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), Il(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), zc(e, t, i, l, n);
      case 3:
        e: {
          if (Bc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, nc(e, t), Bs(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = Vc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = Vc(e, t, i, n, l);
            break e;
          } else for (qt = Wn(t.stateNode.containerInfo.firstChild), Zt = t, ut = !0, hn = null, n = ec(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = On(e, t, n);
              break e;
            }
            zt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return sc(t), e === null && ml(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, sl(i, l) ? h = null : u !== null && sl(i, u) && (t.flags |= 32), Dc(e, t), zt(e, t, h, n), t.child;
      case 6:
        return e === null && ml(t), null;
      case 13:
        return Kc(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : zt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), Oc(e, t, i, l, n);
      case 7:
        return zt(e, t, t.pendingProps, n), t.child;
      case 8:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, rt(Is, i._currentValue), i._currentValue = h, u !== null) if (fn(u.value, h)) {
            if (u.children === l.children && !Ut.current) {
              t = On(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var x = k.firstContext; x !== null; ) {
                if (x.context === i) {
                  if (u.tag === 1) {
                    x = Ln(-1, n & -n), x.tag = 2;
                    var F = u.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var J = F.pending;
                      J === null ? x.next = x : (x.next = J.next, J.next = x), F.pending = x;
                    }
                  }
                  u.lanes |= n, x = u.alternate, x !== null && (x.lanes |= n), gl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                x = x.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), gl(h, n, t), h = u.sibling;
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
          zt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = sn(l), i = i(l), t.flags |= 1, zt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = mn(i, t.pendingProps), l = mn(i.type, l), $c(e, t, i, l, n);
      case 15:
        return Fc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), Js(e, t), t.tag = 1, Ht(i) ? (e = !0, As(t)) : e = !1, Gi(t, n), Mc(t, i, l), Ol(t, i, l, n), Dl(null, t, i, !0, e, n);
      case 19:
        return Hc(e, t, n);
      case 22:
        return Ic(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function pd(e, t) {
    return _t(e, t);
  }
  function Km(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, t, n, i) {
    return new Km(e, t, n, i);
  }
  function so(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Um(e) {
    if (typeof e == "function") return so(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === _e) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = on(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function la(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") so(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case O:
        return wi(n.children, l, u, t);
      case $:
        h = 8, l |= 8;
        break;
      case re:
        return e = on(12, n, t, l | 2), e.elementType = re, e.lanes = u, e;
      case X:
        return e = on(13, n, t, l), e.elementType = X, e.lanes = u, e;
      case le:
        return e = on(19, n, t, l), e.elementType = le, e.lanes = u, e;
      case se:
        return oa(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ee:
            h = 10;
            break e;
          case Se:
            h = 9;
            break e;
          case _e:
            h = 11;
            break e;
          case G:
            h = 14;
            break e;
          case oe:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = on(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function wi(e, t, n, i) {
    return e = on(7, e, i, t), e.lanes = n, e;
  }
  function oa(e, t, n, i) {
    return e = on(22, e, i, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ao(e, t, n) {
    return e = on(6, e, null, t), e.lanes = n, e;
  }
  function lo(e, t, n) {
    return t = on(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Hm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function oo(e, t, n, i, l, u, h, k, x) {
    return e = new Hm(e, t, n, k, x), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = on(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xl(u), e;
  }
  function Gm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function vd(e) {
    if (!e) return Yn;
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
            if (Ht(t.type)) {
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
      if (Ht(n)) return Uu(e, n, t);
    }
    return t;
  }
  function kd(e, t, n, i, l, u, h, k, x) {
    return e = oo(n, i, !0, e, l, u, h, k, x), e.context = vd(null), n = e.current, i = Bt(), l = ni(n), u = Ln(i, l), u.callback = t ?? null, Zn(n, u, l), e.current.lanes = l, pr(e, l, i), Qt(e, i), e;
  }
  function ua(e, t, n, i) {
    var l = t.current, u = Bt(), h = ni(l);
    return n = vd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ln(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Zn(l, t, h), e !== null && (kn(e, l, h, u), zs(e, l, h)), h;
  }
  function ca(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function yd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function uo(e, t) {
    yd(e, t), (e = e.alternate) && yd(e, t);
  }
  function Wm() {
    return null;
  }
  var gd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function co(e) {
    this._internalRoot = e;
  }
  da.prototype.render = co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    ua(e, t, null, null);
  }, da.prototype.unmount = co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ji(function() {
        ua(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function da(e) {
    this._internalRoot = e;
  }
  da.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = nu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && su(e);
    }
  };
  function fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function jd() {
  }
  function Qm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var F = ca(h);
          u.call(F);
        };
      }
      var h = kd(t, i, e, 0, null, !1, !1, "", jd);
      return e._reactRootContainer = h, e[_n] = h.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var F = ca(x);
        k.call(F);
      };
    }
    var x = oo(e, 0, !1, null, null, !1, !1, "", jd);
    return e._reactRootContainer = x, e[_n] = x.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(function() {
      ua(t, x, n, i);
    }), x;
  }
  function ha(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var x = ca(h);
          k.call(x);
        };
      }
      ua(t, h, e, l);
    } else h = Qm(n, t, e, l, i);
    return ca(h);
  }
  eu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (Oa(t, n | 1), Qt(t, dt()), (Ge & 6) === 0 && (Xi = dt() + 500, Jn()));
        }
        break;
      case 13:
        ji(function() {
          var i = Rn(e, 1);
          if (i !== null) {
            var l = Bt();
            kn(i, e, 1, l);
          }
        }), uo(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = Bt();
        kn(t, e, 134217728, n);
      }
      uo(e, 134217728);
    }
  }, tu = function(e) {
    if (e.tag === 13) {
      var t = ni(e), n = Rn(e, t);
      if (n !== null) {
        var i = Bt();
        kn(n, e, t, i);
      }
      uo(e, t);
    }
  }, nu = function() {
    return et;
  }, iu = function(e, t) {
    var n = et;
    try {
      return et = e, t();
    } finally {
      et = n;
    }
  }, un = function(e, t, n) {
    switch (t) {
      case "input":
        if (Be(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = bs(i);
              if (!l) throw Error(o(90));
              me(i), Be(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ie(e, n);
        break;
      case "select":
        t = n.value, t != null && st(e, !!n.multiple, t, !1);
    }
  }, ss = no, cr = ji;
  var Ym = { usingClientEntryPoint: !1, Events: [Ar, Ii, bs, cn, Tn, no] }, Gr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jm = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = os(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Gr.findFiberByHostInstance || Wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber) try {
      ft = ma.inject(Jm), Dt = ma;
    } catch {
    }
  }
  return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym, Yt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fo(t)) throw Error(o(200));
    return Gm(e, t, null, n);
  }, Yt.createRoot = function(e, t) {
    if (!fo(e)) throw Error(o(299));
    var n = !1, i = "", l = gd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oo(e, 1, !1, null, null, n, !1, i, l), e[_n] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new co(t);
  }, Yt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = os(t), e = e === null ? null : e.stateNode, e;
  }, Yt.flushSync = function(e) {
    return ji(e);
  }, Yt.hydrate = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !0, n);
  }, Yt.hydrateRoot = function(e, t, n) {
    if (!fo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = gd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = kd(t, null, e, 1, n ?? null, l, !1, u, h), e[_n] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new da(t);
  }, Yt.render = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !1, n);
  }, Yt.unmountComponentAtNode = function(e) {
    if (!fa(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      ha(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Yt.unstable_batchedUpdates = no, Yt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!fa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ha(e, t, n, !1, i);
  }, Yt.version = "18.3.1-next-f1338f8080-20240426", Yt;
}
var Md;
function sp() {
  if (Md) return po.exports;
  Md = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), po.exports = rp(), po.exports;
}
var _d;
function ap() {
  if (_d) return pa;
  _d = 1;
  var r = sp();
  return pa.createRoot = r.createRoot, pa.hydrateRoot = r.hydrateRoot, pa;
}
var lp = ap();
const op = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], N = ["e", "B", "G", "D", "A", "E"], A = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], E = {
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
      base: g,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: g,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: g,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: g,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, b = 26, _ = 72, j = 30, w = 54, I = 34, T = 11, K = (b + _) / 2, V = j + (c.length - 1) * I + 30, z = (B) => _ + B * w, D = (B) => B === 0 ? K : z(B) - w / 2, O = (B) => j + B * I;
  function $(B, te, Y) {
    const pe = a.indexOf(r[B][0]) + Number(Y.slice(-1)) - 1, Te = pe % a.length, me = o[Te] + 12 * Math.floor(pe / a.length), ge = B + te - me;
    return a[Te] + (ge < 0 ? "♭" : "♯").repeat(Math.abs(ge));
  }
  function re(B) {
    return [...B.base, ...B.add].sort((te, Y) => te[0] - Y[0]);
  }
  function ee(B, te, Y) {
    const pe = te + (Y ? 1 : 0), Te = m[pe % m.length], me = Math.min(...Te.map(([Be]) => Be)), ge = Math.max(...Te.map(([, Be]) => Be));
    let Ee = (B - d % 12 + 12) % 12 - (Y ? 8 : 5) + 12 * Math.floor(pe / m.length);
    return me + Ee < 0 && (Ee += 12), ge + Ee > f.pentatonic && (Ee -= 12), {
      strings: Te.map((Be) => Be.map((it) => it + Ee)),
      start: me + Ee,
      end: ge + Ee
    };
  }
  function Se(B, te, Y) {
    const pe = Y[te], Te = (B + pe - d % 12 + 12) % 12, me = d + Te - pe, ge = c.map((je, Ae) => {
      const Ee = te + (c.length - 1 - Ae) * 3;
      return [Ee, Ee + 1, Ee + 2].map((Be) => {
        const it = Math.floor(Be / Y.length), Qe = Y[Be % Y.length];
        return me + Qe + 12 * it - je;
      });
    });
    return {
      strings: ge,
      start: Math.min(...ge.map((je) => je[0])),
      end: Math.max(...ge.map((je) => je.at(-1)))
    };
  }
  function _e(B, te) {
    const Y = [], pe = Math.ceil(-B.end / 12) * 12;
    for (let me = pe; B.start + me <= te; me += 12) {
      const ge = B.strings.map((Ae) => Ae.map((Ee) => Ee + me).filter((Ee) => Ee >= 0 && Ee <= te)), je = ge.flat();
      Y.push({
        strings: ge,
        start: Math.min(...je),
        end: Math.max(...je),
        partial: B.start + me < 0 || B.end + me > te
      });
    }
    const Te = Y.filter((me) => !me.partial);
    return Te.length ? Te : Y;
  }
  function X(B) {
    return re(B).length === p;
  }
  function le(B, te, Y) {
    const pe = X(te);
    B.querySelector('[value="3nps"]').disabled = !pe, B.value = pe ? Y ?? "3nps" : "pentatonic";
  }
  function G(B, te, Y, pe, Te) {
    const me = re(te).map(([ge]) => ge);
    return pe.map((ge) => {
      const je = ge - 1, Ae = Y === "3nps" ? Se(B, je, me) : ee(B, je, te.base === g), Ee = Te === void 0 ? [Ae] : _e(Ae, Te);
      return { number: ge, positions: Ee };
    });
  }
  function oe(B, te) {
    const Y = B.getBoundingClientRect(), pe = B.querySelectorAll(te);
    let Te = 1 / 0;
    pe.forEach((me) => {
      const ge = me.getBoundingClientRect();
      let je = 0;
      ge.left < Y.left ? je = ge.left - Y.left - 8 : ge.right > Y.right && (je = ge.right - Y.right + 8), Math.abs(je) < Math.abs(Te) && (Te = je);
    }), Number.isFinite(Te) && (B.scrollLeft += Te);
  }
  function se(B, te = !1) {
    const Y = B === "3nps" ? p : m.length;
    return Array.from({ length: Y }, (pe, Te) => {
      const me = Te + 1;
      return '<label class="box-toggle" data-box="' + me + '"><input type="checkbox" value="' + me + '"' + (te && Te === 0 ? " checked" : "") + "> Boksi " + me + "</label>";
    }).join("");
  }
  function W(B, te) {
    const Y = re(te), pe = new Map(Y.map(([me, ge]) => [me, $(B, me, ge)])), Te = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return Y.flatMap(([me, ge]) => Te.flatMap(({ suffix: je, base: Ae }) => {
      const Ee = Ae.map(([Be]) => pe.get((me + Be) % 12));
      return Ee.every(Boolean) ? {
        root: (B + me) % 12,
        degree: Number(String(ge).replace(/\D/g, "")),
        name: Ee[0] + je,
        notes: Ee,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function ae(B, te) {
    const Y = B.base.map(([me]) => (B.root + me) % 12), pe = c.map((me) => {
      const ge = [];
      for (let je = 0; je <= te; je++) {
        const Ae = (me + je) % 12;
        Y.includes(Ae) && ge.push({ fret: je, pitch: Ae });
      }
      return ge;
    }), Te = [];
    for (let me = 0; me <= pe.length - 3; me++)
      for (const ge of pe[me])
        for (const je of pe[me + 1])
          if (ge.pitch !== je.pitch)
            for (const Ae of pe[me + 2]) {
              if (Ae.pitch === ge.pitch || Ae.pitch === je.pitch) continue;
              const Ee = [ge.fret, je.fret, Ae.fret], Be = Math.min(...Ee), it = Math.max(...Ee);
              if (it - Be > 3) continue;
              const Qe = Array(c.length).fill(null);
              Qe.splice(me, 3, ...Ee), Te.push({ strings: Qe, low: Be, high: it });
            }
    return Te.sort((me, ge) => me.high - ge.high || me.low - ge.low);
  }
  const ne = {
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
  }, S = [
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
  function y(B, te) {
    const Y = ne[B + ":" + te];
    if (Y) return { frets: Y, barre: null };
    let pe = null;
    return S.forEach(({ string: Te, openPC: me, shapes: ge }) => {
      const je = ge[te];
      if (!je) return;
      let Ae = (B - me + 12) % 12;
      if (Ae + Math.min(...je.filter((it) => it !== null)) < 0 && (Ae += 12), pe && pe.fret <= Ae) return;
      const Ee = je.map((it) => it === null ? null : Ae + it), Be = Ae > 0 && je.at(-1) === 0 ? { fret: Ae, from: Te, to: je.length - 1 } : null;
      pe = { fret: Ae, frets: Ee, barre: Be };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function q(B, { frets: te, barre: Y }, pe) {
    const Ee = [...c].reverse(), Be = te.filter((Ie) => Ie > 0), Qe = !Be.length || Math.max(...Be) <= 4 && (te.includes(0) || Math.min(...Be) === 1) ? 1 : Math.min(...Be), Xe = (Ie) => 24 + Ie * 14, st = (Ie) => 30 + (Ie - Qe) * 18 + 18 / 2, jt = 102;
    let Ze = '<svg class="chord-svg" viewBox="0 0 108 ' + (jt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + te.map((Ie) => Ie ?? "x").join(" ") + '">';
    for (let Ie = 0; Ie <= 4; Ie++)
      Ze += '<line class="' + (Ie === 0 && Qe === 1 ? "nut" : "fret") + '" x1="' + Xe(0) + '" y1="' + (30 + Ie * 18) + '" x2="' + Xe(5) + '" y2="' + (30 + Ie * 18) + '"/>';
    return te.forEach((Ie, tt) => {
      Ze += '<line class="string" x1="' + Xe(tt) + '" y1="30" x2="' + Xe(tt) + '" y2="' + jt + '"/>';
    }), Qe > 1 && (Ze += '<text class="fret-label" x="15" y="' + (st(Qe) + 4) + '">' + Qe + "</text>"), Y && (Ze += '<rect class="barre" x="' + (Xe(Y.from) - 6.5) + '" y="' + (st(Y.fret) - 6.5) + '" width="' + ((Y.to - Y.from) * 14 + 13) + '" height="13" rx="6.5"/>'), te.forEach((Ie, tt) => {
      if (Ie === null) {
        Ze += '<text class="marker" x="' + Xe(tt) + '" y="22">×</text>';
        return;
      }
      const vt = (Ee[tt] + Ie) % 12 === B;
      if (Ie === 0) {
        Ze += '<circle class="open' + (vt ? " root-open" : "") + '" cx="' + Xe(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      Y && Ie === Y.fret && tt >= Y.from && tt <= Y.to && !vt || (Ze += '<circle class="' + (vt ? "root" : "tone") + '" cx="' + Xe(tt) + '" cy="' + st(Ie) + '" r="6.5"/>');
    }), Ze + "</svg>";
  }
  function de(B, te) {
    const Y = new URLSearchParams(location.search), pe = r.indexOf(Y.get("toonikka")), Te = Y.get("asteikko");
    return {
      rootPC: pe === -1 ? B : pe,
      scaleId: Object.hasOwn(E, Te) ? Te : te
    };
  }
  function Ne(B, te, Y) {
    return B + "?" + new URLSearchParams({ toonikka: r[te], asteikko: Y });
  }
  function H(B, te, Y, {
    boxes: pe = [],
    onlyBoxNotes: Te = !1,
    automatic: me = !0,
    focusDegree: ge = "",
    grip: je = null,
    barre: Ae = null,
    label: Ee = r[B] + " " + te.name,
    notes: Be = null,
    targets: it = !1,
    muteFret: Qe = null
  } = {}) {
    const Xe = z(Y), st = Xe + 48, jt = st + 28, Ze = j - 14, Ie = O(c.length - 1) + 14, tt = Ie - Ze, vt = me ? 680 : Math.ceil(jt * 0.64), U = pe.flatMap((ue) => ue.positions), we = {};
    te.base.forEach(([ue, Me]) => we[(B + ue) % 12] = { deg: Me, added: !1 }), te.add.forEach(([ue, Me]) => we[(B + ue) % 12] = { deg: Me, added: !0 });
    const Re = c.map((ue, Me) => !!je && je[Me] === null), Fe = !!je && Qe !== null, De = A.filter((ue, Me) => Re[Me]).reverse(), kt = Ee + ". " + Y + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (De.length ? " Soittamatta jäävät kielet: " + De.join(", ") + "." : "");
    let Ce = '<svg viewBox="0 0 ' + jt + " " + V + '" style="min-width:' + vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (it ? "group" : "img") + '" aria-label="' + kt + '">';
    Ce += '<rect x="' + b + '" y="' + Ze + '" width="' + (_ - b) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', Ce += '<rect x="' + _ + '" y="' + Ze + '" width="' + (Xe - _) + '" height="' + tt + '" fill="#231a12"/>', Ce += '<rect x="' + Xe + '" y="' + Ze + '" width="' + (jt - Xe - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let ue = 1; ue <= Y; ue++)
      Ce += '<line x1="' + z(ue) + '" y1="' + Ze + '" x2="' + z(ue) + '" y2="' + Ie + '" stroke="#6f5b47" stroke-width="2"/>';
    Ce += '<rect x="' + (_ - 3) + '" y="' + Ze + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', Ce += '<rect x="' + (st - 11) + '" y="' + (Ze + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ce += '<rect x="' + (st - 4) + '" y="' + (Ze + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Nt = (Ze + Ie) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((ue) => ue <= Y).forEach((ue) => Ce += '<circle cx="' + D(ue) + '" cy="' + Nt + '" r="5.5" fill="#7a6550"/>');
    for (let ue = 12; ue <= Y; ue += 12)
      Ce += '<circle cx="' + D(ue) + '" cy="' + (Nt - I) + '" r="5.5" fill="#7a6550"/>', Ce += '<circle cx="' + D(ue) + '" cy="' + (Nt + I) + '" r="5.5" fill="#7a6550"/>';
    Ce += '<text x="' + K + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ce += '<text x="' + _ + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ce += '<text x="' + st + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let ue = 1; ue <= Y; ue++)
      Ce += '<text x="' + D(ue) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + ue + "</text>";
    if (pe.forEach(({ number: ue, positions: Me }) => {
      Me.forEach((Le) => {
        const qe = Le.partial ? "box-highlight box-partial" : "box-highlight";
        Ce += '<g class="' + qe + '" data-box="' + ue + '" aria-hidden="true">';
        const ct = Le.strings.find((Mt) => Mt.length), un = (D(ct[0]) + D(ct.at(-1))) / 2;
        Ce += '<text class="box-number" x="' + un + '" y="12">' + ue + "</text>", Le.strings.forEach((Mt, It) => {
          if (!Mt.length) return;
          const Cn = D(Mt[0]) - 16, cn = D(Mt.at(-1)) - D(Mt[0]) + 32;
          Ce += '<rect class="box-band" x="' + Cn + '" y="' + (O(It) - 14) + '" width="' + cn + '" height="28" rx="14"/>';
        }), Ce += "</g>";
      });
    }), c.forEach((ue, Me) => {
      const Le = 1 + Me * 0.45, qe = O(Me), ct = Re[Me] && !Fe;
      ct ? Ce += '<text class="muted-mark" x="' + K + '" y="' + (qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Re[Me] && Qe === 0 || (Ce += '<line x1="' + (b + 4) + '" y1="' + qe + '" x2="' + (_ - 4) + '" y2="' + qe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ce += "<g" + (ct ? ' opacity=".35"' : "") + ">", Ce += '<line x1="' + _ + '" y1="' + qe + '" x2="' + (st + 5) + '" y2="' + qe + '" stroke="#b9b9c4" stroke-width="' + Le.toFixed(2) + '"/>', Ce += '<circle cx="' + (st + 5) + '" cy="' + qe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ce += "</g>", Ce += '<text x="13" y="' + (qe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + N[Me] + "</text>";
    }), je && Ae && Ae.fret >= 1 && Ae.fret <= Y) {
      const ue = O(Ae.from), Me = O(Ae.to), Le = Math.min(ue, Me) - 6, qe = Math.max(ue, Me) + 6;
      Ce += '<rect class="barre-indicator" x="' + (D(Ae.fret) - 7) + '" y="' + Le + '" width="14" height="' + (qe - Le) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return it && (Ce += '<g class="fret-targets">', c.forEach((ue, Me) => {
      for (let Le = 0; Le <= Y; Le++) {
        const qe = Le ? A[Me] + "-kieli, " + Le + ". nauha" : "vapaa " + A[Me] + "-kieli", ct = Le ? w : _ - b - 6;
        Ce += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Me + '" data-fret="' + Le + '" data-midi="' + (ue + Le) + '" aria-label="' + qe + '" x="' + (D(Le) - ct / 2) + '" y="' + (O(Me) - I / 2) + '" width="' + ct + '" height="' + I + '" fill="transparent"/>';
      }
    }), Ce += "</g>"), (Be ?? []).forEach(({ string: ue, fret: Me, label: Le, kind: qe }) => {
      Ce += '<g class="octave-note octave-' + qe + '">', Ce += '<circle cx="' + D(Me) + '" cy="' + O(ue) + '" r="' + T + '"/>', Ce += '<text x="' + D(Me) + '" y="' + (O(ue) + 3.5) + '" font-size="' + (Le.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Le + "</text>", Ce += "</g>";
    }), je && (Ce += '<g class="grip-notes">'), (Be ? [] : c).forEach((ue, Me) => {
      for (let Le = 0; Le <= Y; Le++) {
        const qe = (ue + Le) % 12;
        if (!(qe in we) || je && je[Me] !== Le || Te && !U.some(({ strings: cn }) => {
          const Tn = cn[Me];
          return Tn.length > 0 && Le >= Tn[0] && Le <= Tn.at(-1);
        })) continue;
        const ct = we[qe], un = ct.deg === "1", Mt = ct.added ? "#f0a13c" : un ? "#4b2fd6" : "#6d4aff", It = ct.added ? "#1a1430" : "#fff";
        ct.deg === ge && (Ce += '<circle class="focus-note" cx="' + D(Le) + '" cy="' + O(Me) + '" r="14.5"/>');
        const Cn = je ? ' data-string="' + (Me + 1) + '" data-fret="' + Le + '" data-degree="' + ct.deg + '"' : "";
        Ce += "<circle" + Cn + ' cx="' + D(Le) + '" cy="' + O(Me) + '" r="' + T + '" fill="' + Mt + '" stroke="' + (un ? "#fff" : "#1a1430") + '" stroke-width="' + (un ? 2.5 : 1) + '"/>', Ce += '<text x="' + D(Le) + '" y="' + (O(Me) + 3.5) + '" font-size="' + (ct.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + It + '" text-anchor="middle">' + ct.deg + "</text>";
      }
    }), je && (Ce += "</g>"), Fe && Re.forEach((ue, Me) => {
      if (!ue) return;
      const Le = D(Qe), qe = O(Me);
      Ce += '<g class="muted-mark grip-mute" data-string="' + (Me + 1) + '" data-fret="' + Qe + '">', Ce += '<circle cx="' + Le + '" cy="' + qe + '" r="9" fill="' + (Qe === 0 ? "#2a2338" : "#231a12") + '"/>', Ce += '<text x="' + Le + '" y="' + (qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ce += "</g>";
    }), Ce += "</svg>", Ce;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: g,
    SCALES: E,
    noteName: $,
    scaleNotes: re,
    scaleTriads: W,
    triadGrips: ae,
    chordGrip: y,
    renderChordDiagram: q,
    selectionFromURL: de,
    selectionHref: Ne,
    renderBoard: H,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: X,
    syncBoxSystem: le,
    fingeringBoxes: G,
    boxOptions: se,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = op;
function yo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function up(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function cp(r) {
  const a = up(r), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Ue = globalThis.MusicMapFretboard, We = (r) => (r % 12 + 12) % 12, dp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], fp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], $e = (r, a = !1, o = !1) => (a ? fp : dp)[We(r)] + (o ? Math.floor(r / 12) - 1 : ""), li = (r) => Ue.CHROM[We(r)], Zr = (r, a, o) => Ue.noteName(We(r), a, o);
function hp(r, a) {
  const o = Math.floor(r / 12) - 1;
  return a[0] === "B" && We(r) < 2 ? o - 1 : a[0] === "C" && We(r) > 9 ? o + 1 : o;
}
const tn = ["ohut E", "B", "G", "D", "A", "paksu E"], Go = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Nf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], mp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ke = (r, a) => ({ string: r, fret: a, midi: Ue.OPEN_PITCHES[r] + a });
function or(r, a, o) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Ke(c, a + f)));
}
const Je = (r) => `${r.string}:${r.fret}`, Ei = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Ef = (r, a) => a === "maj" ? `${li(r)}-duurisointu` : a === "min" ? `${li(r)}-mollisointu` : `${li(r)}7-sointu`, qr = [
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
], bd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Cf(r, a) {
  const o = bd[a] ?? bd.E, c = We(r - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Ke(f, d + c)]);
}
const ga = {
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
}, _a = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ai = (r, a, o, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(o, r)) : c, Nn = (r, a, o) => a.includes(r) ? r : o;
function Ea(r) {
  const a = { ...ga };
  a.mode = Nn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ga.strings]), a.min = Math.round(ai(r.min, 0, 24, a.min)), a.max = Math.round(ai(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[o] == "boolean" && (a[o] = r[o]);
  return a.check = Nn(r.check, ["class", "pitch"], a.check), a.input = Nn(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(ai(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ue.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(ai(r.box, 0, 5, a.box)), a.order = Nn(r.order, ["random", "up", "down"], a.order), a.chord = Nn(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ga.intervals]), a.direction = Nn(r.direction, ["up", "down", "both"], a.direction), a.hints = Nn(r.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(r.activity, ["play", "degree"], a.activity), a.minRms = ai(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = ai(r.clarity, 0.85, 0.99, a.clarity), a.stability = ai(r.stability, 120, 800, a.stability), a.cents = ai(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function pp(r, a) {
  const o = new URLSearchParams(r), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ue.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Ea(c);
}
function vp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Ue.CHROM[r.root],
    asteikko: r.scale,
    alku: String(r.min),
    loppu: String(r.max),
    boksi: String(r.box),
    kierros: String(r.rounds),
    tarkistus: r.check,
    muoto: r.shape,
    sointu: r.chord,
    jarjestys: r.order,
    vastaus: r.input,
    vihjeet: r.hints,
    tehtava: r.activity,
    sointuaste: r.chordTone,
    suunta: r.direction,
    kielet: r.strings.map((a) => a + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const Ti = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Fn = (r) => r.mode === "scale" && r.order !== "random", Tf = (r) => ["note", "degree"].includes(Ti(r)) ? "class" : Fn(r) ? "pitch" : r.check, va = (r) => Ti(r) === "mic", Pd = "musiikin-kartta:harjoittelu", Mf = 3, Mo = () => ({ version: Mf, settings: { ...ga }, stats: {}, recent: [], sessions: [] }), _f = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, yn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function kp(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => yn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || yn(r.errors)) && (r.ema === void 0 || yn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || yn(r.emaMs));
}
function yp(r) {
  return !!r && typeof r.id == "string" && yn(r.count) && yn(r.first) && r.first <= r.count && yn(r.ms) && yn(r.at) && (r.solo === void 0 || yn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || yn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Ad(r) {
  if (!r) return Mo();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !kp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !yn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !yp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Ea(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: Mf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Rd = 2500, gp = 8e3, Ld = 0.3, es = (r) => r.ema ?? r.correct / r.attempts, ts = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Wo(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(r) - Rd) / (gp - Rd)));
  return es(r) * 0.65 + a * 0.35;
}
function jp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Wo(r)) * 3;
}
class Od {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Ad(a?.getItem(Pd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Mo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Pd, JSON.stringify(this.data)), this.warning = "";
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
    const o = _f(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + Ld * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + Ld * (a.ms - ts(c)) : a.ms
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
    this.data = { ...Mo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const xp = 4e3, $d = 12, Sp = 1500;
function wp(r, a) {
  const o = r.left + r.stickyLeft, c = r.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - $d : a.right > c && (d = a.right - c + $d), d === 0) return null;
  const f = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + d));
  return Math.abs(f - r.scrollLeft) < 1 ? null : f;
}
function Np(r, a) {
  return a.right <= r.left + r.stickyLeft || a.left >= r.right;
}
function bf(r, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = M.useRef(0), m = M.useRef(!1), N = M.useRef(""), A = M.useRef(0), v = M.useRef(f);
  M.useEffect(() => {
    const g = r.current;
    if (!g || !d) return;
    const E = () => {
      p.current = Date.now() + xp;
    }, b = () => {
      m.current = !0, E();
    }, _ = () => {
      m.current && (m.current = !1, E());
    }, j = (w) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(w.key) && E();
    };
    return g.addEventListener("pointerdown", b, { passive: !0 }), g.addEventListener("touchstart", b, { passive: !0 }), g.addEventListener("wheel", E, { passive: !0 }), g.addEventListener("keydown", j), window.addEventListener("pointerup", _, { passive: !0 }), window.addEventListener("pointercancel", _, { passive: !0 }), window.addEventListener("touchend", _, { passive: !0 }), window.addEventListener("touchcancel", _, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", b), g.removeEventListener("touchstart", b), g.removeEventListener("wheel", E), g.removeEventListener("keydown", j), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), window.removeEventListener("touchend", _), window.removeEventListener("touchcancel", _);
    };
  }, [r, d]), M.useLayoutEffect(() => {
    const g = f !== void 0 && !!f && f !== v.current;
    v.current = f, g && !m.current && (p.current = 0);
  }, [f]), M.useLayoutEffect(() => {
    f === void 0 && N.current === "" && o !== "" && Date.now() - A.current > Sp && !m.current && (p.current = 0), N.current !== "" && o === "" && (A.current = Date.now()), N.current = o;
    const g = r.current;
    if (!g || !d || !o || m.current || Date.now() < p.current) return;
    const E = g.querySelector(a);
    if (!E) return;
    const b = g.getBoundingClientRect(), _ = E.getBoundingClientRect(), j = c ? g.querySelector(c) : null, w = j && getComputedStyle(j).position === "sticky" ? j.getBoundingClientRect().width : 0, I = {
      left: b.left,
      right: b.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: w
    }, T = wp(I, _);
    if (T === null) return;
    const V = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Np(I, _);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: T, behavior: V ? "auto" : "smooth" }) : g.scrollLeft = T;
  }, [r, a, o, c, d, f]);
}
const Ep = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Cp = ["e", "B", "G", "D", "A", "E"];
function Pf({ string: r }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ s.jsx("strong", { children: Cp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Af = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Tp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Rf({ min: r, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - r + 1 }, (o, c) => {
      const d = r + c;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Ep.has(d) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function oi({ area: r, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const N = { "--cols": r.max - r.min + 1 }, { strings: A, min: v, max: g } = r, [E, b] = M.useState({ string: Math.min(...A), fret: v }), _ = M.useRef(null), j = new Map(a.map((z) => [Je(z), z])), w = a.map((z) => `${Je(z)}${z.kind}`).join(",");
  M.useEffect(() => {
    if (p !== "hints") return;
    const z = _.current, D = z?.querySelector(".target, .anchor");
    z && D && (z.scrollLeft += D.getBoundingClientRect().left - z.getBoundingClientRect().left - z.clientWidth / 2 + D.clientWidth / 2);
  }, [w, p]), M.useEffect(() => {
    p === "playing" && _.current && (_.current.scrollLeft = 0);
  }, [p, v, g]);
  const I = a.find((z) => z.kind === "playing");
  bf(_, ".playing", I ? Je(I) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [T, K] = M.useState({ left: !1, right: !1 });
  M.useEffect(() => {
    const z = _.current;
    if (!z) return;
    const D = () => {
      const $ = z.scrollLeft > 2, re = z.scrollLeft + z.clientWidth < z.scrollWidth - 2;
      K((ee) => ee.left === $ && ee.right === re ? ee : { left: $, right: re });
    };
    D(), z.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(z), () => {
      z.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [w, v, g]);
  const V = A.includes(E.string) && E.fret >= v && E.fret <= g ? E : { string: Math.min(...A), fret: v };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (T.left ? " more-left" : "") + (T.right ? " more-right" : ""), children: [
    (T.left || T.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      T.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      T.left && T.right ? "molemmilla puolilla" : T.right ? "oikealla" : "vasemmalla",
      T.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: _, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board", style: N, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(Rf, { min: v, max: g }),
      /* @__PURE__ */ s.jsx("tbody", { children: Ue.OPEN_PITCHES.map((z, D) => /* @__PURE__ */ s.jsxs("tr", { className: A.includes(D) ? "" : "unused", style: Af(D), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${tn[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(Pf, { string: D }),
          o.includes(D) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([D], v, g).map((O) => {
          const $ = j.get(Je(O)), re = `${tn[D]}-kieli, ${Ci(O.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${$ ? $.kind === "answer" ? "target" : $.kind : ""}`, children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: V.string === D && V.fret === O.fret ? 0 : -1,
              onFocus: () => b(O),
              onKeyDown: (ee) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) return;
                ee.preventDefault();
                const Se = [...A].sort((G, oe) => G - oe), _e = Se.indexOf(D), X = ee.key === "ArrowUp" ? Se[Math.max(0, _e - 1)] : ee.key === "ArrowDown" ? Se[Math.min(Se.length - 1, _e + 1)] : D, le = ee.key === "Home" ? v : ee.key === "End" ? g : Math.max(v, Math.min(g, O.fret + (ee.key === "ArrowRight" ? 1 : ee.key === "ArrowLeft" ? -1 : 0)));
                ee.currentTarget.closest("table")?.querySelector(`button[data-string="${X}"][data-fret="${le}"]`)?.focus();
              },
              disabled: c || !A.includes(D),
              "aria-label": re + ($ ? `, ${Tp[$.kind]}${$.label ? " " + $.label : ""}` : ""),
              onClick: () => d?.(O),
              children: $ ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: $.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Mp({ area: r, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = r, N = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(Rf, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: Ue.OPEN_PITCHES.map((A, v) => /* @__PURE__ */ s.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Af(v), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${tn[v]}`, children: /* @__PURE__ */ s.jsx(Pf, { string: v }) }),
      or([v], p, m).map((g) => {
        const E = Object.hasOwn(a, N + Je(g)) ? a[N + Je(g)] : void 0, b = Wo(E), _ = b === null ? "unseen" : E.attempts < 3 ? "few" : b >= 0.8 ? "strong" : b >= 0.5 ? "growing" : "weak", j = `${tn[v]}-kieli, ${Ci(g.fret)}, ${$e(g.midi, d)}`, w = E ? `${Math.round(b * 100)} %, ${E.correct}/${E.attempts} heti oikein, viime aikoina ${Math.round(es(E) * 100)} % ja ${(ts(E) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${_}`, title: `${j}: ${w}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: b === null ? "·" : E.attempts < 3 ? "?" : Math.round(b * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            j,
            ": ",
            w
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const _p = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", ba = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, Lf = (r) => Ue.fingeringBoxes(r.root, Ue.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Mi(r) {
  if (r.mode === "caged") {
    const a = Cf(r.root, r.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = Lf(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function bp(r) {
  const a = Mi(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(r) {
  const a = Mi(r), o = or(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return o.filter((f) => r.accidentals || ![1, 3, 6, 8, 10].includes(We(f.midi)));
  if (r.mode === "caged") {
    const f = new Set(Cf(r.root, r.shape).map(Je));
    return o.filter((p) => f.has(Je(p)));
  }
  if (r.mode === "interval") return o;
  const c = o.filter((f) => ba(r).some(([p]) => We(f.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = Lf(r);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function Of(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Pp(r) {
  const a = ba(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(r.chordTone));
}
function _o(r) {
  const a = is(r), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = Pp(r).filter(([d]) => !a.some((f) => We(f.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : r.mode === "interval" && !Of(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(r) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Ap(r, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? o.reverse() : o;
}
function $f(r) {
  return Fn(r) ? new Set(is(r).map((a) => a.midi)).size : r.rounds;
}
function Rp(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function qi(r, a, o = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let f = d * c;
  for (let p = 0; p < r.length; p++)
    if (f -= a[p], f < 0) return r[p];
  return r.at(-1);
}
const Fd = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ni(r, a) {
  const o = r.filter((c) => !a(c));
  return o.length ? o : r;
}
function Lp(r, a, o = {}, c, d = Math.random) {
  const f = _o(r);
  if (f) throw new Error(f);
  const p = Tf(r), m = Ti(r), N = p === "pitch", A = (O) => r.weak ? jp(o[_f({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => qi(O, O.map(() => 1), d), g = is(r), E = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const O = Ni(g, (ee) => !!c && Je(ee) === Je(c.position)), $ = qi(O, O.map((ee) => A(`notes:${Je(ee)}`)), d), re = $e($.midi, r.flats, N);
    return {
      ...E,
      position: $,
      midi: $.midi,
      name: re,
      item: `notes:${Je($)}`,
      prompt: `Etsi ${re} ${Go[$.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const O = (Se) => `ear-note:${We(Se.midi)}${r.reference ? ":ref" : ""}`, $ = Ni(g, (Se) => !!c && We(Se.midi) === We(c.midi)), re = qi($, $.map((Se) => A(O(Se))), d), ee = r.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...E,
      position: re,
      midi: re.midi,
      name: $e(re.midi, r.flats),
      item: O(re),
      choices: "note",
      reference: ee,
      sound: ee === void 0 ? [re.midi] : [ee, re.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const O = Ni(g, (re) => !!c && re.midi === c.midi), $ = qi(O, O.map((re) => A(`repeat:${re.midi}`)), d);
    return {
      ...E,
      position: $,
      midi: $.midi,
      name: $e($.midi, r.flats, !0),
      item: `repeat:${$.midi}`,
      sound: [$.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const O = Ni(Of(r, g), (ee) => c?.interval === ee.iv && c?.direction === ee.direction), $ = qi(O, O.map((ee) => A(`interval:${ee.iv}:${ee.direction}`)), d), re = v(Ni($.pairs, (ee) => c?.reference === ee.reference.midi));
    return {
      ...E,
      position: re.target,
      midi: re.target.midi,
      name: $e(re.target.midi, r.flats, !0),
      item: `interval:${$.iv}:${$.direction}`,
      interval: $.iv,
      direction: $.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${$.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${$e(re.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const b = ba(r);
  let _, j = 0;
  if (Fn(r)) {
    const O = Ap(r, g);
    j = O.length, _ = O[a % O.length];
  } else {
    const O = b.filter(([ee]) => g.some((Se) => We(Se.midi - r.root) === ee)), $ = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [b[a % b.length]] : b.filter(([, ee]) => ee.endsWith(r.chordTone)) : Ni(O, ([ee]) => c?.interval === ee), [re] = qi($, $.map(([ee]) => A(Fd(r, ee))), d);
    _ = v(Ni(g.filter((ee) => We(ee.midi - r.root) === re), (ee) => !!c && Je(ee) === Je(c.position)));
  }
  const w = We(_.midi - r.root), I = b.find(([O]) => O === w)[1], T = Zr(r.root, w, I), K = N ? T + hp(_.midi, T) : T, V = r.mode === "scale" ? `${li(r.root)}-${Ue.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${li(r.root)}-duurisointu, ${r.shape}-muoto` : Ef(r.root, r.chord), z = r.mode !== "caged" && r.activity === "degree", D = z ? `${V}: mikä aste on ${T}?` : j ? `${V} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % j + 1}/${j}: ${I}. aste (${K}).` : `${V}: etsi ${I}. aste${N ? ` (${K})` : ""}.`;
  return {
    ...E,
    position: _,
    midi: _.midi,
    name: K,
    item: Fd(r, w),
    prompt: D,
    degree: I,
    interval: w,
    choices: z ? "degree" : "position"
  };
}
function bo(r, a, o) {
  return Number.isInteger(a) && (o === "class" ? We(r) === We(a) : r === a);
}
function Ff(r, a, o) {
  return bo(a.midi, o.midi, a.check) ? r.mode === "notes" ? o.string === a.position.string : _p(r) ? is(r).some((c) => Je(c) === Je(o)) : !0 : !1;
}
function Op(r, a) {
  const o = Mi(r);
  return or(o.strings, o.min, o.max).filter((c) => Ff(r, a, c));
}
const Rt = (r, a, o) => ({ ...r, label: a, kind: o }), $p = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Fp(r, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = Mi(r), f = or(d.strings, d.min, d.max), p = Op(r, a);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((I) => Rt(I, a.name, "answer")), text: `${a.name} on ${Nf[a.position.string]}: ${Ci(a.position.fret)}.` };
    const j = f.find((I) => I.string === a.position.string), w = $e(j.midi, r.flats);
    return {
      marks: [Rt(j, w, "anchor")],
      text: `Apupiste: ${mp[j.string]} ${j.fret === 0 ? "vapaa sävel" : j.fret + ". nauhan sävel"} on ${w}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Rt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Rt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${tn[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((j) => Rt(j, $e(j.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Go[a.position.string]}.` };
  if (r.mode === "interval") {
    const j = $e(a.reference, r.flats, !0), w = f.filter((I) => I.midi === a.reference).map((I) => Rt(I, j, "anchor"));
    return c ? {
      marks: [...w, ...p.map((I) => Rt(I, $e(I.midi, r.flats, !0), "answer"))],
      text: `${$p(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${j} → ${a.name}.`
    } : { marks: w, text: `Alkusävel ${j} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(r), N = ba(r), A = (j) => N.find(([w]) => w === We(j.midi - r.root))?.[1] ?? "", v = Zr(r.root, a.interval, a.degree), g = m.filter((j) => We(j.midi - r.root) === 0), E = (j) => p.some((w) => Je(w) === Je(j)), b = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((j) => Rt(j, A(j), E(j) ? "answer" : "shape")), text: b } : { marks: m.map((j) => Rt(j, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const _ = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const j = m.filter((w) => We(w.midi) === We(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : g).map((w) => Rt(w, "1", "anchor")), ...j.map((w) => Rt(w, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: j.map((w) => Rt(w, v, "shape")), text: `Katso ${_} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((w) => Rt(w, "1", "anchor")), ...j.map((w) => Rt(w, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...g.filter((j) => !E(j)).map((j) => Rt(j, "1", "anchor")), ...p.map((j) => Rt(j, a.degree, "answer"))], text: b } : a.interval === 0 ? { marks: [], text: `1. aste on ${_} perussävel ${li(r.root)}.` } : { marks: g.map((j) => Rt(j, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Ip {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = $f(a);
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
      this.question = Lp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Rp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? bo(f.midi, a, "class") : o === "board" ? !!c && Ff(this.settings, f, c) : bo(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, N = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Je(m)}` : f.item,
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
    return m ? N.position = Je(m) : this.settings.mode === "notes" && (N.position = Je(f.position)), this.results.push(N), this.record(N), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Po(r) {
  const a = r.filter((o) => !o.hint);
  return {
    count: r.length,
    first: r.filter((o) => o.first).length,
    solo: a.length,
    soloFirst: a.filter((o) => o.first).length,
    guided: r.length - a.length,
    ms: r.reduce((o, c) => o + c.ms, 0)
  };
}
const Ao = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], nr = (r) => Ao.find(([a]) => a === r)?.[1] ?? r;
function Vt({ label: r, children: a }) {
  const o = M.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: o, children: r }),
    M.cloneElement(a, { id: o })
  ] });
}
function Id({ legend: r, name: a, value: o, options: c, onChange: d, disabled: f }) {
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ s.jsx("legend", { children: r }),
    /* @__PURE__ */ s.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ s.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ s.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => d(p.value) }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("strong", { children: p.title }),
        /* @__PURE__ */ s.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Dd(r) {
  const a = Mi(r), o = $f(r), c = Ti(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${_a[r.hints].title} · ${d} · ${Fn(r) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function zd({ s: r, change: a, locked: o, problem: c }) {
  const d = M.useId(), f = (v, g) => a({ ...r, [v]: g }), p = Mi(r), m = Ti(r) === "note" || Ti(r) === "degree", N = ["scale", "chord", "caged"].includes(r.mode), A = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Vt, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: r.mode, onChange: (v) => f("mode", v.target.value), children: Ao.map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: Ao.find(([v]) => v === r.mode)[2] })
    ] }),
    N && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Vt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: r.root, onChange: (v) => f("root", Number(v.target.value)), children: Ue.CHROM.map((v, g) => /* @__PURE__ */ s.jsx("option", { value: g, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Vt, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: r.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Ue.SCALES).map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(Vt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ s.jsxs("select", { value: r.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ s.jsx(Vt, { label: "Sävelten järjestys", children: /* @__PURE__ */ s.jsxs("select", { value: r.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ s.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ s.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Vt, { label: "Sointutyyppi", children: /* @__PURE__ */ s.jsx("select", { value: r.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ei).map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(Vt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ s.jsxs("select", { value: r.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ s.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            r.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ s.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ s.jsxs("option", { value: "3", children: [
            "Terssi · ",
            r.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "5", children: "Kvintti · 5" }),
          r.chord === "dom7" && /* @__PURE__ */ s.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      r.mode === "caged" ? /* @__PURE__ */ s.jsx(Vt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ s.jsx("select", { value: r.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ s.jsx(Vt, { label: "Tehtävä", children: /* @__PURE__ */ s.jsxs("select", { value: r.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ s.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ s.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (g) => f("intervals", g.target.checked ? [...r.intervals, v] : r.intervals.filter((E) => E !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx(Vt, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: r.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      Id,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ..._a[v] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(Id, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ s.jsx(Vt, { label: "Kierroksen pituus", children: /* @__PURE__ */ s.jsxs("select", { value: r.rounds, disabled: Fn(r), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ s.jsx(Vt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ s.jsxs("select", { value: Fn(r) ? "pitch" : r.check, disabled: Fn(r), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ s.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ s.jsx(Vt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ s.jsxs("select", { value: String(r.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ s.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ s.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Fn(r) && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ s.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ s.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === v, onClick: () => a({ ...r, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsx(Vt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ s.jsx(Vt, { label: "Viimeinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: tn.map((v, g) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.strings.includes(g), onChange: (E) => f("strings", E.target.checked ? [...r.strings, g] : r.strings.filter((b) => b !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        A && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Bd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Dp(r) {
  return r && Object.hasOwn(Bd, r) ? Bd[r] : null;
}
const zp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Bp({ onSelect: r }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: zp.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
      /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ s.jsx("strong", { children: a.title }),
        /* @__PURE__ */ s.jsx("span", { children: a.description }),
        /* @__PURE__ */ s.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
function Vp({ onBack: r, onNotes: a }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home ear-exercise-menu", "aria-labelledby": "ear-exercise-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("h2", { id: "ear-exercise-title", children: "Sävelkorva ja otelauta" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse harjoitus. Voit aloittaa sävelten paikoista tai opetella kuuntelemalla." }),
    /* @__PURE__ */ s.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: a, children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Sävelten etsintä" }),
          /* @__PURE__ */ s.jsx("span", { children: "Etsi seitsemän eri sävelen sijainnit kitaran otelaudalta. Aloita C-sävelestä." }),
          /* @__PURE__ */ s.jsx("small", { children: "Avaa harjoitus" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ s.jsxs("a", { className: "learning-card", href: "riffikaiku.html", children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Riffikaiku (beta)" }),
          /* @__PURE__ */ s.jsx("span", { children: "Kuuntele lyhyt kitarariffi ja toista se virtuaalikitaralla tai oikealla kitaralla." }),
          /* @__PURE__ */ s.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ s.jsxs("a", { className: "learning-card", href: "pelit/ensikeikka/", children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Ensikeikka (beta)" }),
          /* @__PURE__ */ s.jsx("span", { children: "Kuuntele kappaleita ja löydä melodian kotisävel viiden kappaleen ensikeikassa." }),
          /* @__PURE__ */ s.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const Kp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ro = 100, If = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Qo(r) {
  if (r === null || r.trim() === "") return Ro;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Ro;
}
function Up() {
  try {
    return Qo(localStorage.getItem(If));
  } catch {
    return Ro;
  }
}
function Hp(r) {
  try {
    localStorage.setItem(If, String(Qo(String(r))));
  } catch {
  }
}
function Vd(r, a, o = !0) {
  return o ? Kp[r] * Qo(String(a)) / 100 : 0;
}
function Df(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const zf = 0.12, Gp = 2e3, Bf = 3, Lo = 1e-3, Wp = zf, Kd = 1500, Ud = 4e3;
function Vf(r) {
  return r.readyState >= Bf && !r.seeking;
}
function Kf(r) {
  return r.every(Vf);
}
function Hd(r) {
  let a = 0;
  for (const o of r)
    if (!Vf(o))
      try {
        const c = o.play();
        o.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), a++;
      } catch {
      }
  return a;
}
function Uf(r, a, o, c = Hf) {
  return Gf(
    r,
    Kf,
    ["loadeddata", "canplay", "canplaythrough", "seeked", "error"],
    a,
    o,
    c
  );
}
const Hf = { set: (r, a) => setTimeout(r, a), clear: (r) => clearTimeout(r) }, Qp = 100, Gd = 250;
async function Yp(r, a, o) {
  const { timeoutMs: c, cancelled: d, stale: f, playedAt: p, onLoad: m, now: N = () => performance.now(), timers: A = Hf } = o, v = N(), g = () => Math.max(0, c - (N() - v));
  for (const _ of r) _.paused || _.pause();
  const E = r.filter(f);
  if (E.length) {
    const j = Math.max(-1 / 0, ...E.map((w) => p?.(w) ?? -1 / 0)) + Qp - N();
    if (j > 0 && await new Promise((w) => {
      A.set(w, j);
    }), d()) return "ohitettu";
    for (const w of E)
      w.load(), m?.(w);
  }
  const b = await Gf(
    r,
    (_) => _.every((j) => j.readyState >= 1),
    ["loadedmetadata", "loadeddata", "canplay", "error"],
    g(),
    d,
    A
  );
  if (b !== "valmis") return b;
  for (const _ of r) {
    const j = Number.isFinite(_.duration) ? Math.min(a, Math.max(0, _.duration - 0.05)) : a;
    if (!(Math.abs(_.currentTime - j) < Lo))
      try {
        _.currentTime = j;
      } catch {
        return "virhe";
      }
  }
  return Uf(r, g(), d, A);
}
function Gf(r, a, o, c, d, f) {
  return new Promise((p) => {
    let m = !1, N = null;
    const A = f.set(() => v("aikakatkaisu"), c);
    function v(b) {
      if (!m) {
        m = !0, f.clear(A), N !== null && f.clear(N);
        for (const _ of r) for (const j of o) _.removeEventListener(j, g);
        p(b);
      }
    }
    function g() {
      d() ? v("ohitettu") : r.some((b) => b.error) ? v("virhe") : a(r) && v("valmis");
    }
    const E = () => {
      g(), m || (N = f.set(E, 50));
    };
    for (const b of r) for (const _ of o) b.addEventListener(_, g);
    g(), m || (N = f.set(E, 50));
  });
}
function Jp(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= zf || r.seeking || r.readyState < Bf ? !1 : r.msSinceLastFix >= Gp;
}
const Xp = 1.5, Zp = 0.4, qp = 0.5;
let Oo = null, ev = null;
function tv(r) {
  return Oo !== null ? Oo : (ev ??= Df()) ? 0 : Zp;
}
class Wf {
  constructor(a = tv()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  holdUntil = -1 / 0;
  /**
   * Pidättää korjauskelaukset hetkeen until (performance.now) asti, esimerkiksi toiston alun
   * vakiintumisen ajaksi. Pakotettu tahdistus (käyttäjän kelaus, raidan päälle kytkentä) tehdään silti.
   */
  hold(a) {
    this.holdUntil = a;
  }
  /**
   * Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä.
   * tolerance = ero (s), jota pienempää ei kelata (toiston alussa START_ALIGN_TOLERANCE_SECONDS).
   */
  align(a, o, c = !1, d = performance.now(), f = Lo) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused) || !c && d < this.holdUntil) return !1;
    const p = o.currentTime - a.currentTime, m = Math.abs(p), N = a.loop && Number.isFinite(a.duration) && Math.abs(m - a.duration) < 0.35, A = this.lastFix.get(o);
    if (!Jp({
      drift: m,
      atLoopBoundary: N,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: A === void 0 ? 1 / 0 : d - A
    }, c)) return !1;
    const v = !a.paused;
    !c && v && A !== void 0 && (this.latency = Math.min(Xp, Math.max(0, this.latency - qp * p)), Oo = this.latency);
    let g = a.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (g = Math.min(g, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - g) < Math.max(f, Lo)) return !1;
    try {
      o.currentTime = g;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function nv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function iv(r = nv(), a = () => Df()) {
  return r ? "webaudio" : a() ? "element" : "webaudio";
}
function rv(r = globalThis.navigator) {
  const a = r?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const sv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class av {
  constructor(a = sv, o = globalThis.navigator) {
    this.create = a, this.nav = o;
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
        rv(this.nav);
      } catch (a) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(a);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch((a) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(a);
      }), !0;
    } catch (a) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(a), !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(a), c = this.context.createGain();
      return o.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const c = this.gains.get(a);
    c && (c.gain.value = o);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(a) {
    const o = a ? this.gains.get(a) : void 0;
    return o ? o.gain.value : null;
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const lv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", ov = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Wd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Qf() {
  const r = M.useRef(null), a = M.useRef(null), [o, c] = M.useState(!1), [d, f] = M.useState(!1), [p, m] = M.useState(!1), [N, A] = M.useState(0), [v, g] = M.useState(0), [E, b] = M.useState(""), _ = M.useRef(new Wf());
  function j(V = !1) {
    const z = r.current, D = a.current;
    !z || !D || !Number.isFinite(z.currentTime) || _.current.align(z, D, V);
  }
  function w() {
    r.current?.pause(), a.current?.pause(), c(!1);
  }
  async function I() {
    const V = r.current, z = a.current;
    if (!(!V || !z)) {
      if (o) {
        w();
        return;
      }
      b(""), z.muted = !d, z.volume = 0.55, V.volume = 0.75, j(!0);
      try {
        await Promise.all(d ? [V.play(), z.play()] : [V.play()]), j(), c(!0);
      } catch {
        w(), b("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function T(V) {
    const z = r.current, D = a.current;
    if (!(!z || !D || !Number.isFinite(V))) {
      z.currentTime = V;
      try {
        D.currentTime = V;
      } catch {
      }
      A(V);
    }
  }
  function K(V) {
    const z = r.current, D = a.current;
    if (f(V), !!D) {
      if (D.muted = !V, !V) {
        D.pause();
        return;
      }
      !z || !o || (j(!0), D.play().catch(() => b("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return M.useEffect(() => {
    const V = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), r.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ s.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ s.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ s.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: d,
              onChange: (V) => K(V.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (V) => m(V.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        I();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(N, v > 0 ? v : 1),
          disabled: !v,
          onChange: (V) => T(Number(V.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Wd(N),
        " / ",
        Wd(v)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: lv,
        loop: p,
        onLoadedMetadata: (V) => g(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          A(V.currentTarget.currentTime), V.currentTarget.paused || j();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), c(!1), A(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => b("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: ov,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const V = r.current, z = a.current;
          V?.duration && z?.duration && Math.abs(V.duration - z.duration) > 0.15 && b("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => b("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    E && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: E }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const uv = 4e3;
class Qd extends Error {
  name = "MicSetupError";
}
async function cv(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Qd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: r ? { exact: r } : void 0,
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
      let A;
      await Promise.race([
        d.resume(),
        new Promise((v, g) => {
          A = setTimeout(() => g(new Qd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), uv);
        })
      ]).finally(() => clearTimeout(A));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], N = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: N.deviceId ?? "",
      channelCount: N.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((A) => A.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function dv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var go, Yd;
function fv() {
  if (Yd) return go;
  Yd = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const A = Math.PI * c / this.size;
      o[c] = Math.cos(A), o[c + 1] = -Math.sin(A);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var N = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << N;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return go = r, r.prototype.fromComplexArray = function(o, c) {
    for (var d = c || new Array(o.length >>> 1), f = 0; f < o.length; f += 2)
      d[f >>> 1] = o[f];
    return d;
  }, r.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var c = 0; c < o.length; c++)
      o[c] = 0;
    return o;
  }, r.prototype.toComplexArray = function(o, c) {
    for (var d = c || this.createComplexArray(), f = 0; f < d.length; f += 2)
      d[f] = o[f >>> 1], d[f + 1] = 0;
    return d;
  }, r.prototype.completeSpectrum = function(o) {
    for (var c = this._csize, d = c >>> 1, f = 2; f < d; f += 2)
      o[c - f] = o[f], o[c - f + 1] = -o[f + 1];
  }, r.prototype.transform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, N, A = this._bitrev;
    if (p === 4)
      for (m = 0, N = 0; m < c; m += p, N++) {
        const w = A[N];
        this._singleTransform2(m, w, f);
      }
    else
      for (m = 0, N = 0; m < c; m += p, N++) {
        const w = A[N];
        this._singleTransform4(m, w, f);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var E = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var b = m + E, _ = m, j = 0; _ < b; _ += 2, j += f) {
          const w = _, I = w + E, T = I + E, K = T + E, V = o[w], z = o[w + 1], D = o[I], O = o[I + 1], $ = o[T], re = o[T + 1], ee = o[K], Se = o[K + 1], _e = V, X = z, le = g[j], G = v * g[j + 1], oe = D * le - O * G, se = D * G + O * le, W = g[2 * j], ae = v * g[2 * j + 1], ne = $ * W - re * ae, S = $ * ae + re * W, y = g[3 * j], q = v * g[3 * j + 1], de = ee * y - Se * q, Ne = ee * q + Se * y, H = _e + ne, B = X + S, te = _e - ne, Y = X - S, pe = oe + de, Te = se + Ne, me = v * (oe - de), ge = v * (se - Ne), je = H + pe, Ae = B + Te, Ee = H - pe, Be = B - Te, it = te + ge, Qe = Y - me, Xe = te - ge, st = Y + me;
          o[w] = je, o[w + 1] = Ae, o[I] = it, o[I + 1] = Qe, o[T] = Ee, o[T + 1] = Be, o[K] = Xe, o[K + 1] = st;
        }
    }
  }, r.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], N = p[c + 1], A = p[c + d], v = p[c + d + 1], g = m + A, E = N + v, b = m - A, _ = N - v;
    f[o] = g, f[o + 1] = E, f[o + 2] = b, f[o + 3] = _;
  }, r.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, N = d * 2, A = d * 3, v = p[c], g = p[c + 1], E = p[c + d], b = p[c + d + 1], _ = p[c + N], j = p[c + N + 1], w = p[c + A], I = p[c + A + 1], T = v + _, K = g + j, V = v - _, z = g - j, D = E + w, O = b + I, $ = m * (E - w), re = m * (b - I), ee = T + D, Se = K + O, _e = V + re, X = z - $, le = T - D, G = K - O, oe = V - re, se = z + $;
    f[o] = ee, f[o + 1] = Se, f[o + 2] = _e, f[o + 3] = X, f[o + 4] = le, f[o + 5] = G, f[o + 6] = oe, f[o + 7] = se;
  }, r.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, N, A = this._bitrev;
    if (p === 4)
      for (m = 0, N = 0; m < c; m += p, N++) {
        const ue = A[N];
        this._singleRealTransform2(m, ue >>> 1, f >>> 1);
      }
    else
      for (m = 0, N = 0; m < c; m += p, N++) {
        const ue = A[N];
        this._singleRealTransform4(m, ue >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var E = p >>> 1, b = E >>> 1, _ = b >>> 1;
      for (m = 0; m < c; m += p)
        for (var j = 0, w = 0; j <= _; j += 2, w += f) {
          var I = m + j, T = I + b, K = T + b, V = K + b, z = o[I], D = o[I + 1], O = o[T], $ = o[T + 1], re = o[K], ee = o[K + 1], Se = o[V], _e = o[V + 1], X = z, le = D, G = g[w], oe = v * g[w + 1], se = O * G - $ * oe, W = O * oe + $ * G, ae = g[2 * w], ne = v * g[2 * w + 1], S = re * ae - ee * ne, y = re * ne + ee * ae, q = g[3 * w], de = v * g[3 * w + 1], Ne = Se * q - _e * de, H = Se * de + _e * q, B = X + S, te = le + y, Y = X - S, pe = le - y, Te = se + Ne, me = W + H, ge = v * (se - Ne), je = v * (W - H), Ae = B + Te, Ee = te + me, Be = Y + je, it = pe - ge;
          if (o[I] = Ae, o[I + 1] = Ee, o[T] = Be, o[T + 1] = it, j === 0) {
            var Qe = B - Te, Xe = te - me;
            o[K] = Qe, o[K + 1] = Xe;
            continue;
          }
          if (j !== _) {
            var st = Y, jt = -pe, Ze = B, Ie = -te, tt = -v * je, vt = -v * ge, U = -v * me, we = -v * Te, Re = st + tt, Fe = jt + vt, De = Ze + we, kt = Ie - U, Ce = m + b - j, Nt = m + E - j;
            o[Ce] = Re, o[Ce + 1] = Fe, o[Nt] = De, o[Nt + 1] = kt;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], N = p[c + d], A = m + N, v = m - N;
    f[o] = A, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, N = d * 2, A = d * 3, v = p[c], g = p[c + d], E = p[c + N], b = p[c + A], _ = v + E, j = v - E, w = g + b, I = m * (g - b), T = _ + w, K = j, V = -I, z = _ - w, D = j, O = I;
    f[o] = T, f[o + 1] = 0, f[o + 2] = K, f[o + 3] = V, f[o + 4] = z, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = O;
  }, go;
}
var hv = fv();
const mv = /* @__PURE__ */ Zm(hv);
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
    this._inputLength = a, this._fft = new mv(kv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function pv(r) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < r.length - 1; f++)
    r[f - 1] <= 0 && r[f] > 0 ? (o = !0, d = f, c = r[f]) : r[f - 1] > 0 && r[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && r[f] > c && (c = r[f], d = f);
  return a;
}
function vv(r, a) {
  const [o, c, d] = [r - 1, r, r + 1], [f, p, m] = [a[o], a[c], a[d]], N = f / 2 - p + m / 2, A = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, g = -A / (2 * N), E = N * g * g + A * g + v;
  return [g, E];
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
    const c = pv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((N) => this._nsdfBuffer[N])), f = c.find(
      (N) => this._nsdfBuffer[N] >= this._clarityThreshold * d
    ), [p, m] = vv(
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
function kv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function yv(r) {
  const a = r * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const gv = 0.05, jv = 1.5;
class xv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = yv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * gv))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Sv();
  onset = new wv();
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
      onFrame: N,
      onStableNote: A
    } = this.opts, v = this.analysers.map((O, $) => (O.getFloatTimeDomainData(this.buffers[$]), Jd(this.buffers[$], this.buffers[$].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * jv && (this.channel = g);
    const E = this.buffers[this.channel], b = v[this.channel], _ = Nv(E, E.length - this.shortLength), j = { rms: b, peak: _, channel: this.channel, levels: v }, w = b < c, I = this.onset.feed(b, a, c);
    if (w && Jd(E, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), N?.({ ...j, status: "silent" });
      return;
    }
    const [T, K] = this.detector.findPitch(E, this.mic.context.sampleRate);
    if (!isFinite(T) || K < o) {
      this.gate.feed(null, a, d, w, I), N?.({ ...j, status: w ? "silent" : "unclear", clarity: isFinite(K) ? K : 0 });
      return;
    }
    if (T < p || T > m) {
      this.gate.feed(null, a, d, w, I), N?.({ ...j, status: "out-of-range", frequency: T, clarity: K });
      return;
    }
    const { midi: V, cents: z } = cp(T);
    if (Math.abs(z) > f) {
      this.gate.feed(null, a, d, w, I), N?.({ ...j, status: "off-pitch", frequency: T, clarity: K, midi: V, cents: z });
      return;
    }
    N?.({ ...j, status: "pitch", frequency: T, clarity: K, midi: V, cents: z });
    const D = this.gate.feed(V, a, d, w, I);
    D !== null && A?.({ midi: V, frequency: T, cents: z, clarity: K, timestamp: a, heldMs: D.heldMs });
  }
}
class Sv {
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
class wv {
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
function Jd(r, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - o));
}
function Nv(r, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > o && (o = d);
  }
  return o;
}
const lr = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let er;
function Yf() {
  return (!er || er.state === "closed") && (er = new AudioContext()), er;
}
function Ev() {
  const r = er;
  er = void 0, r?.close().catch(() => {
  });
}
const Jf = (r) => r instanceof Error ? r.name : "";
function Cv(r) {
  const a = Jf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Tv {
  constructor(a = (o) => cv(o, Yf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Jf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new xv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, N = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((A) => A.addEventListener("ended", m, { once: !0, signal: N.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: N.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
function Xf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Xd = (r) => Math.max(0, Math.min(1, (lr(r) + 60) / 60));
function Mv(r) {
  const a = [...r].sort((c, d) => c - d), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function jo(r) {
  const a = () => r.state === "running";
  if (a()) return;
  let o;
  try {
    await Promise.race([
      r.resume(),
      new Promise((c, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function Pa(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rs {
  constructor(a = Yf) {
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
    if (await jo(d), c !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (A, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((A, v) => {
      const g = d.createOscillator(), E = d.createGain(), b = d.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = yo(A), E.gain.setValueAtTime(0, b), E.gain.linearRampToValueAtTime(0.22, b + 0.012), E.gain.exponentialRampToValueAtTime(1e-3, b + 0.7), g.connect(E), E.connect(f), g.start(b), g.stop(b + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((A) => {
      this.settle = A, this.timer = setTimeout(() => A(!0), a.length * 800 + 350);
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
    if (await jo(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), N = p.createGain();
    N.connect(p.destination), this.master = N;
    const A = Array.from({ length: 12 }, (_, j) => 1 / (j + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...A.map(() => 0)]),
      new Float32Array([0, ...A])
    ), g = p.currentTime + 0.05;
    let E = 0;
    return a.forEach((_, j) => {
      if (!Number.isFinite(_.beat) || _.beat < 0 || !Number.isFinite(_.duration) || _.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const w = g + _.beat * m, I = _.duration * m, T = w + Math.max(0.08, I * 0.94), K = p.createOscillator(), V = p.createGain();
      v ? K.setPeriodicWave(v) : K.type = "triangle", K.frequency.value = yo(_.midi), V.gain.setValueAtTime(0, w), V.gain.linearRampToValueAtTime(0.22, w + 0.012), V.gain.exponentialRampToValueAtTime(1e-3, T - 0.01), K.connect(V), V.connect(N), K.start(w), K.stop(T), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(j);
      }, 50 + _.beat * m * 1e3));
      const z = a[j + 1]?.beat ?? 1 / 0;
      d && z > _.beat + _.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + _.beat * m * 1e3 + I * 1e3)), E = Math.max(E, _.beat + _.duration);
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), 50 + E * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], N.disconnect(), this.master = void 0, !0);
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
    if (await jo(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (j, w) => 1 / (w + 1) ** 1.3), N = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let A = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (j) => {
      d === this.token && Number.isFinite(j) && (A = 60 / Math.max(40, Math.min(140, j)));
    };
    const v = 1.6;
    let g = f.currentTime + 0.05, E = 0;
    const b = [], _ = () => {
      if (d === this.token) {
        if (g < f.currentTime - 0.02) {
          const j = Math.ceil((f.currentTime - g) / A);
          g += j * A, E = (E + j) % a.length, b.length = 0;
        }
        for (; g < f.currentTime + v; ) {
          const j = a[E], w = E, I = g, T = f.createOscillator(), K = f.createGain();
          N ? T.setPeriodicWave(N) : T.type = "triangle", T.frequency.value = yo(j), K.gain.setValueAtTime(0, I), K.gain.linearRampToValueAtTime(0.22, I + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, I + A * 0.975), T.connect(K), K.connect(p), T.start(I), T.stop(I + A * 0.985), b.push({ at: I, index: w }), g += A, E = (E + 1) % a.length;
        }
        for (; b.length && b[0].at <= f.currentTime + 0.01; ) {
          const j = b.shift();
          o?.(j.index);
        }
      }
    };
    return _(), this.loopTick = setInterval(_, 25), new Promise((j) => {
      this.settle = j;
    });
  }
}
function ui(r, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const N = { position: d === null || f === null ? null : Ke(d, f), beat: o, duration: p };
    return o += p, N;
  });
  return { label: r, events: c, beats: o };
}
function xo(r, ...a) {
  let o = 0;
  const c = a.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: r, events: c, beats: o };
}
const Zd = ui("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), qd = ui("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), _v = ui("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), ef = ui("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), tf = ui("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), bv = ui("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), nf = ui("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), rf = ui("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Pv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Zd, qd],
    whole: xo("Melodia · A + B + C", Zd, qd, _v),
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
    fragments: [ef, tf],
    whole: xo("Ukko Nooa · A + B", ef, tf),
    bonus: bv,
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
    fragments: [nf, rf],
    whole: xo("Siirtymämelodia · A + B", nf, rf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Av(r) {
  return r.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const sf = ["e", "B", "G", "D", "A", "E"];
function Yo({ pieceId: r, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = Pv[r], [f, p] = M.useState(a === "fingering" ? "a" : "whole"), [m, N] = M.useState(d.tempo), [A, v] = M.useState(!1), [g, E] = M.useState(!1), [b, _] = M.useState(a !== "memory"), [j, w] = M.useState(!1), [I, T] = M.useState(null), [K, V] = M.useState(""), z = M.useRef(new rs()), D = M.useRef(0);
  function O() {
    D.current++, z.current.stop(), w(!1), T(null);
  }
  M.useEffect(() => {
    c && (c.current = O);
    const y = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, z.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const $ = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], re = $.find((y) => y.id === f) ?? $[0], ee = re.clip, Se = Av(ee), _e = I === null ? null : Se[I]?.beat ?? null, X = _e === null ? null : ee.events.find((y) => y.beat === _e)?.position ?? null, le = M.useRef(null);
  bf(le, ".melody-playing", j && _e !== null ? String(_e) : "", { enabled: A && g, playback: j });
  const G = ee.beats / 4, oe = [...new Map(ee.events.filter((y) => y.position).map((y) => [Je(y.position), y.position])).values()], se = oe.map((y) => y.fret), W = oe.filter((y) => b || X?.string === y.string && X.fret === y.fret).map((y) => ({
    ...y,
    label: $e(y.midi),
    kind: X?.string === y.string && X.fret === y.fret ? "playing" : We(y.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(oe.map((y) => y.string))],
    min: Math.min(...se),
    max: Math.max(...se),
    fixed: "box"
  };
  async function ne() {
    if (j) {
      O();
      return;
    }
    o?.();
    const y = ++D.current;
    z.current.stop(), w(!0), T(null), V("");
    try {
      await z.current.playTimed(Se, m, (q) => {
        y === D.current && T(q);
      }, () => {
        y === D.current && T(null);
      });
    } catch (q) {
      y === D.current && V(Pa(q));
    } finally {
      y === D.current && (w(!1), T(null));
    }
  }
  function S(y) {
    O(), V(""), p(y);
  }
  return /* @__PURE__ */ s.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ s.jsxs("details", { onToggle: (y) => {
    const q = y.currentTarget.open;
    v(q), q || O();
  }, children: [
    /* @__PURE__ */ s.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    A && /* @__PURE__ */ s.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ s.jsx("h4", { children: d.title }),
      /* @__PURE__ */ s.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        G.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "melody-instruction", children: a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      a === "fingering" && d.bonus && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ s.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        d.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ s.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: $.map((y) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": re.id === y.id,
          onClick: () => S(y.id),
          children: y.name
        },
        y.id
      )) }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": j, onClick: () => {
          ne();
        }, children: j ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ s.jsx("select", { value: m, onChange: (y) => {
            O(), N(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, q) => y - q).filter((y, q, de) => de.indexOf(y) === q).map((y) => /* @__PURE__ */ s.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": g, onClick: () => E((y) => !y), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      K && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: K }),
      /* @__PURE__ */ s.jsx("p", { className: "melody-now", "aria-live": "polite", children: j && I !== null ? `Nyt soi ${$e(Se[I].midi)} · ${sf[X.string]}-kieli, ${X.fret}. nauha` : j ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ s.jsx(oi, { area: ae, marks: W, disabled: !0, follow: "playing", playback: j, caption: `${d.title}, ${re.name}` }),
        /* @__PURE__ */ s.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": b,
              onClick: () => _((y) => !y),
              children: b ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ s.jsxs("div", { ref: le, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ s.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${re.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kieli" }),
            ee.events.map((y, q) => /* @__PURE__ */ s.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ s.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ s.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, q))
          ] }) }),
          /* @__PURE__ */ s.jsx("tbody", { children: sf.map((y, q) => /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "row", children: y }),
            ee.events.map((de, Ne) => {
              const H = de.position?.string === q, B = H && _e === de.beat;
              return /* @__PURE__ */ s.jsx(
                "td",
                {
                  className: `${de.beat % 4 === 0 ? "bar-start " : ""}${B ? "melody-playing " : ""}${H && We(de.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${y}-kieli, ${de.position.fret}. nauha, ${$e(de.position.midi)}` : void 0,
                  children: H ? de.position.fret : "—"
                },
                Ne
              );
            })
          ] }, q)) })
        ] }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ s.jsx("p", { className: "melody-source", children: /* @__PURE__ */ s.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const $o = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [1, 2]), Zf = [...new Map($o.flatMap((r) => r.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Ke(o, c);
  return [Je(d), d];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Ca = [5, 4, 3, 2, 1, 0].flatMap((r) => Zf.filter((a) => a.string === r).sort((a, o) => a.fret - o.fret)), Fo = [
  ...Ca,
  ...Ca.slice(1, -1).reverse()
], Rv = [...Fo, Ca[0]], af = new Set(
  $o[0].positions[0].strings.flatMap((r, a) => r.map((o) => {
    const c = Ke(a, o);
    return Je(c);
  })).filter((r) => $o[1].positions[0].strings.flatMap((a, o) => a.map((c) => Je(Ke(o, c)))).includes(r))
), Lv = [
  Ke(5, 5),
  Ke(5, 8),
  Ke(5, 10),
  Ke(4, 7),
  Ke(4, 10),
  Ke(3, 7),
  Ke(3, 10),
  Ke(3, 7),
  Ke(4, 10),
  Ke(4, 7),
  Ke(5, 10),
  Ke(5, 8),
  Ke(5, 5)
], qf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", eh = "musiikin-kartta:skaalapolku:bridge-tempo:v1", So = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], lf = (r) => We(r) === 9;
function of() {
  try {
    const r = Number(localStorage.getItem(qf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Ov() {
  try {
    const r = Number(localStorage.getItem(eh));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function $v({ onBack: r, onPosition: a }) {
  const [o, c] = M.useState(of), [d, f] = M.useState(of), [p, m] = M.useState(!1), [N, A] = M.useState("roots"), [v, g] = M.useState(Ov), [E, b] = M.useState(null), [_, j] = M.useState(null), [w, I] = M.useState(""), T = M.useRef(new rs()), K = M.useRef(0), V = M.useRef(null), z = _ === null ? null : Fo[_];
  function D() {
    V.current?.(), K.current++, T.current.stop(), b(null), j(null);
  }
  M.useEffect(() => {
    const X = () => {
      document.hidden && (K.current++, T.current.stop(), b(null), j(null));
    };
    return document.addEventListener("visibilitychange", X), () => {
      document.removeEventListener("visibilitychange", X), K.current++, T.current.stop();
    };
  }, []);
  async function O(X) {
    V.current?.();
    const le = ++K.current;
    T.current.stop(), j(null), I(""), b(X);
    try {
      X === "transition" ? await T.current.play(Lv.map((G) => G.midi)) : X === "once" ? await T.current.play(Rv.map((G) => G.midi)) : await T.current.loop(Fo.map((G) => G.midi), (G) => {
        le === K.current && j(G);
      }, v);
    } catch (G) {
      le === K.current && I(Pa(G));
    } finally {
      le === K.current && (b(null), j(null));
    }
  }
  function $(X) {
    const le = Math.max(40, Math.min(140, X));
    g(le), T.current.setLoopTempo(le);
    try {
      localStorage.setItem(eh, String(le));
    } catch {
    }
  }
  function re(X) {
    X > o || (D(), f(X), m(!1), A("roots"));
  }
  function ee() {
    D();
    const X = Math.min(4, d + 1);
    if (f(X), m(!1), A("roots"), X > o) {
      c(X);
      try {
        localStorage.setItem(qf, String(X));
      } catch {
      }
    }
  }
  const Se = (X, le) => d < 2 || d === 2 && p && af.has(le) || d === 3 && (N === "all" || N === "roots" && lf(X)), _e = Zf.filter((X) => Se(X.midi, Je(X))).map((X) => ({
    ...X,
    label: d < 2 || d === 2 && p || d === 3 && N === "all" ? $e(X.midi) : "A",
    kind: d < 2 && z?.string === X.string && z?.fret === X.fret ? "playing" : lf(X.midi) ? "answer" : af.has(Je(X)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), r();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ s.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        D(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        D(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => re(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: So.map((X, le) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: le === d ? "journey-step current" : "journey-step",
        "aria-current": le === d ? "step" : void 0,
        disabled: le > o,
        onClick: () => re(le),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: le > o ? "🔒" : le < o ? "✓" : le + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: X.title })
        ]
      },
      X.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: So[d].title }),
        /* @__PURE__ */ s.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: So[d].detail }),
      d < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        d === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            /* @__PURE__ */ s.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ s.jsxs("strong", { children: [
              Ca.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ s.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ s.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        d === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ s.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => $(v - 5), children: "− 5" }),
          /* @__PURE__ */ s.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => $(v + 5), children: "+ 5" }),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "whole",
              onClick: () => E === "whole" ? D() : void O("whole"),
              children: E === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "once",
              onClick: () => E === "once" ? D() : void O("once"),
              children: E === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "transition",
              onClick: () => E === "transition" ? D() : void O("transition"),
              children: E === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((X) => !X), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => re(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((X) => /* @__PURE__ */ s.jsxs("label", { children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: X.value,
                  checked: N === X.value,
                  onChange: () => A(X.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: X.name })
            ] }, X.value))
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => E === "once" ? D() : void O("once"), children: E === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => E === "transition" ? D() : void O("transition"), children: E === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "whole" ? z && d < 2 ? `Nyt soi ${$e(z.midi, !1, !0)} · ${tn[z.string]}-kieli, nauha ${z.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : E === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : E === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        w && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: w }),
        /* @__PURE__ */ s.jsx(
          oi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: E,
            marks: _e,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? N === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : N === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ s.jsx(
          Yo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: V
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ s.jsx(Qf, {}),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ee, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ s.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => re(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Xr = "musiikin-kartta:skaalapolku:v1", ja = "musiikin-kartta:skaalapolku:position-2:v1", wo = "musiikin-kartta:skaalapolku:position-3:v1", xa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ta = "musiikin-kartta:skaalapolku:active-position:v1", th = "musiikin-kartta:skaalapolku:tempo:v1", ir = 75, Io = 40, Do = 140;
function Fv() {
  try {
    const r = localStorage.getItem(th);
    if (r === null) return ir;
    const a = Number(r);
    return Number.isInteger(a) && a >= Io && a <= Do && a % 5 === 0 ? a : ir;
  } catch {
    return ir;
  }
}
const No = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], uf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(r = Xr) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function Eo() {
  try {
    const r = localStorage.getItem(Ta);
    return r === "3" && En(xa) === 4 ? 3 : En(Xr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Iv() {
  try {
    return En(ja) === 4 && localStorage.getItem(Ta) === "bridge";
  } catch {
    return !1;
  }
}
function Dv({ onBack: r }) {
  const [a, o] = M.useState(Eo), [c, d] = M.useState(Iv), [f, p] = M.useState(() => ({
    1: En(Xr),
    2: En(ja),
    3: En(wo)
  })), [m, N] = M.useState(() => En(Eo() === 3 ? wo : Eo() === 2 ? ja : Xr)), A = f[a], [v, g] = M.useState(!1), [E, b] = M.useState("roots"), [_, j] = M.useState(Fv), [w, I] = M.useState(null), [T, K] = M.useState(null), [V, z] = M.useState(""), D = M.useRef(new rs()), O = M.useRef(0), $ = M.useRef(null);
  function re(H) {
    const B = Math.max(Io, Math.min(Do, H));
    j(B), D.current.setLoopTempo(B);
    try {
      localStorage.setItem(th, String(B));
    } catch {
    }
  }
  function ee() {
    $.current?.(), O.current++, D.current.stop(), I(null), K(null);
  }
  M.useEffect(() => {
    const H = () => {
      document.hidden && (O.current++, D.current.stop(), I(null), K(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), O.current++, D.current.stop();
    };
  }, []);
  const Se = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [a])[0].positions[0], _e = Se.strings.flatMap((H, B) => H.map((te) => Ke(B, te))).sort((H, B) => H.midi - B.midi || B.string - H.string), X = [..._e, ..._e.slice(1, -1).reverse()], le = T === null ? null : X[T], G = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], oe = Se.start, se = Se.end, W = (H) => We(H) === 9, ae = (H) => m < 2 ? !0 : m === 2 ? v && W(H) : E === "scale" || E === "roots" && W(H), ne = _e.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: m < 2 || m === 3 && E === "scale" ? $e(H.midi) : "A",
    kind: m < 2 && le?.string === H.string && le.fret === H.fret ? "playing" : W(H.midi) ? "answer" : "shape"
  }));
  async function S(H) {
    $.current?.();
    const B = ++O.current;
    D.current.stop(), K(null), z(""), I(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(X.map((te) => te.midi), (te) => {
        B === O.current && K(te);
      }, m === 2 ? _ : ir);
    } catch (te) {
      B === O.current && z(Pa(te));
    } finally {
      B === O.current && (I(null), K(null));
    }
  }
  function y() {
    ee();
    const H = Math.min(4, m + 1);
    if (N(H), g(!1), b("roots"), H > A) {
      p((te) => ({ ...te, [a]: H }));
      const B = a === 1 ? Xr : a === 2 ? ja : wo;
      try {
        localStorage.setItem(B, String(H));
      } catch {
      }
    }
  }
  function q(H) {
    H > A || (ee(), N(H), g(!1), b("roots"));
  }
  function de(H) {
    if (!(H === 2 && f[1] < 4) && !(H === 3 && En(xa) < 4)) {
      ee(), d(!1), o(H), N(f[H]), g(!1), b("roots"), z("");
      try {
        localStorage.setItem(Ta, String(H));
      } catch {
      }
    }
  }
  function Ne() {
    if (!(f[2] < 4)) {
      ee(), d(!0), g(!1), z("");
      try {
        localStorage.setItem(Ta, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ s.jsx($v, { onBack: r, onPosition: de }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      oe,
      "–",
      se,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => de(1), children: "Positio 1" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => de(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Ne,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(xa) < 4,
          onClick: () => de(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: No.map((H, B) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: B === m ? "journey-step current" : "journey-step",
        "aria-current": B === m ? "step" : void 0,
        disabled: B > A,
        onClick: () => q(B),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: B > A ? "🔒" : B < A ? "✓" : B + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: B === 4 ? `Positio ${a} harjoiteltu` : H.title })
        ]
      },
      H.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : No[m].title }),
        /* @__PURE__ */ s.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: No[m].detail }),
      m < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        m === 0 && /* @__PURE__ */ s.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ s.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ s.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ s.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: _ <= Io,
              onClick: () => re(_ - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            _,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: _ >= Do,
              onClick: () => re(_ + 5),
              children: "+ 5"
            }
          ),
          _ !== ir && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => re(ir),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": w === "loop",
              onClick: () => w === "loop" ? ee() : void S("loop"),
              children: w === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => w === "phrase" ? ee() : void S("phrase"), children: w === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: w === "loop" ? le && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${$e(le.midi, !1, !0)} · ${tn[le.string]}-kieli, nauha ${le.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: V }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => q(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              uf.map((H) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: H.value,
                    checked: E === H.value,
                    onChange: () => b(H.value)
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: H.label })
              ] }, H.value))
            ] }),
            a !== 1 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
              S("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ s.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: ne, disabled: !0, follow: "playing", playback: w, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? uf.find((H) => H.value === E).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: ne, disabled: !0, follow: "playing", playback: w, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ s.jsx(
          Yo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: ee,
            stopHandleRef: $
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ s.jsx(Qf, {}, a),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: y, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ s.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => q(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => de(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: Ne, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => de(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(xa) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const zv = ["ionian", "aeolian"], tr = {
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
      Ke(4, 3),
      Ke(4, 5),
      Ke(3, 2),
      Ke(3, 3),
      Ke(3, 5),
      Ke(2, 2),
      Ke(2, 4),
      Ke(2, 5)
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
      Ke(5, 5),
      Ke(5, 7),
      Ke(5, 8),
      Ke(4, 5),
      Ke(4, 7),
      Ke(4, 8),
      Ke(3, 5),
      Ke(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, nh = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", ih = "musiikin-kartta:moodipolku:active:v1", Bv = (r) => {
  const a = tr[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Vv = (r) => [...Bv(r), tr[r].positions[0]], cf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Sa(r) {
  try {
    const a = Number(localStorage.getItem(nh(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function df() {
  try {
    return localStorage.getItem(ih) === "aeolian" && Sa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Kv({ onBack: r }) {
  const [a, o] = M.useState(df), [c, d] = M.useState(() => ({
    ionian: Sa("ionian"),
    aeolian: Sa("aeolian")
  })), [f, p] = M.useState(() => Sa(df())), [m, N] = M.useState(null), [A, v] = M.useState(null), [g, E] = M.useState(!1), [b, _] = M.useState("roots"), [j, w] = M.useState(""), [I, T] = M.useState(null), [K, V] = M.useState(null), z = M.useRef(new rs()), D = M.useRef(0), O = M.useRef(null), $ = tr[a], re = Vv(a), ee = m === "scale" && A !== null ? re[A] : null;
  function Se() {
    O.current?.(), D.current++, z.current.stop(), N(null), v(null);
  }
  M.useEffect(() => {
    const y = () => {
      document.hidden && (D.current++, z.current.stop(), N(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, z.current.stop();
    };
  }, []);
  async function _e(y, q, de = !1) {
    O.current?.();
    const Ne = ++D.current;
    z.current.stop(), v(null), w(""), N(y);
    try {
      const H = de ? await z.current.loop(q, void 0, 75) : await z.current.play(q, (B) => {
        Ne === D.current && y === "scale" && v(B);
      });
      return Ne === D.current && H;
    } catch (H) {
      return Ne === D.current && w(Pa(H)), !1;
    } finally {
      Ne === D.current && (N(null), v(null));
    }
  }
  function X(y) {
    y > c[a] || (Se(), p(y), T(null), V(null), E(!1), _("roots"), w(""));
  }
  function le() {
    Se();
    const y = Math.min(5, f + 1);
    if (p(y), T(null), V(null), E(!1), _("roots"), y > c[a]) {
      d((q) => ({ ...q, [a]: y }));
      try {
        localStorage.setItem(nh(a), String(y));
      } catch {
      }
    }
  }
  function G(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      Se(), o(y), p(c[y]), T(null), V(null), E(!1), _("roots"), w("");
      try {
        localStorage.setItem(ih, y);
      } catch {
      }
    }
  }
  async function oe() {
    Se(), V(null), T(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await _e("comparison", tr[y].phrase) && T(y);
  }
  const se = (y) => We(y) === $.tonic, W = $.positions.filter((y) => f < 2 ? !0 : f === 2 ? g && se(y.midi) : f === 4 ? b === "all" || b === "roots" && se(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && b === "roots" ? $.tonicName : $e(y.midi),
    kind: ee?.string === y.string && ee.fret === y.fret ? "playing" : se(y.midi) ? "answer" : "shape"
  })), ae = [...new Set($.positions.map((y) => y.string))], ne = Math.min(...$.positions.map((y) => y.fret)), S = Math.max(...$.positions.map((y) => y.fret));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Se(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      zv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "mode-path-title", children: [
      $.title,
      " · ",
      $.alias
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: $.explanation }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: $.noteNames }),
      " · Pohjasävel ",
      $.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => G("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => G("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ s.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      cf.map((y, q) => /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: f === q ? "journey-step current" : "journey-step",
          "aria-current": f === q ? "step" : void 0,
          disabled: q > c[a],
          onClick: () => X(q),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: q > c[a] ? "🔒" : q < c[a] ? "✓" : q + 1 }),
            /* @__PURE__ */ s.jsx("span", { children: y })
          ]
        },
        y
      )),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => X(5),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ s.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : cf[f] }),
        /* @__PURE__ */ s.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          $.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          $.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ s.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        $.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      f === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ s.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              disabled: m !== null,
              onClick: () => {
                oe();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          I !== null && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            _e("comparison", tr[I].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        I !== null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || m !== null,
                onClick: () => V("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: K !== null || m !== null,
                onClick: () => V("aeolian"),
                children: "A"
              }
            )
          ] }),
          K !== null && /* @__PURE__ */ s.jsxs("p", { role: "status", children: [
            K === I ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            tr[I].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Soita ",
          $.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          $.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          $.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([y, q]) => /* @__PURE__ */ s.jsxs("label", { children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: y,
                checked: b === y,
                onChange: () => _(y)
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: q })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => E((y) => !y), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? Se() : void _e("scale", re.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? Se() : void _e("accompaniment", $.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && ee && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        $e(ee.midi, !1, !0),
        " · ",
        tn[ee.string],
        "-kieli, nauha ",
        ee.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ s.jsx(
        oi,
        {
          area: { strings: ae, min: ne, max: S, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: $.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ s.jsx(
        Yo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: Se,
          stopHandleRef: O
        },
        `nooa:${f}`
      ),
      j && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: j }),
      f < 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ s.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: le, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          $.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ s.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => X(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => G("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ s.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Uv({ onBack: r }) {
  const [a, o] = M.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ s.jsx(Dv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ s.jsx(Kv, { onBack: () => o(null) }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ s.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ s.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ s.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ s.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ s.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const Qr = [0, 2, 4, 5, 7, 9, 11], ka = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Hv({ onBack: r }) {
  const [a, o] = M.useState(0), [c, d] = M.useState([]), [f, p] = M.useState(!1), [m, N] = M.useState(""), [A, v] = M.useState(0), g = a >= Qr.length, E = Qr[Math.min(a, Qr.length - 1)], b = or(ka.strings, ka.min, ka.max).filter((z) => We(z.midi) === E), _ = b.filter((z) => !c.includes(Je(z))), j = _.length === 0 && !g, w = !j && f ? _[0] : void 0, I = [
    ...b.filter((z) => c.includes(Je(z))).map((z) => ({ ...z, kind: "answer", label: $e(z.midi) })),
    ...w ? [{ ...w, kind: "anchor", label: "?" }] : []
  ];
  function T(z) {
    if (g || j) return;
    const D = Je(z);
    if (We(z.midi) !== E) {
      v((re) => re + 1), N(`Valitsit sävelen ${$e(z.midi)}. Etsi ${$e(E)}.`);
      return;
    }
    if (c.includes(D)) {
      N("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, D];
    d(O), p(!1);
    const $ = b.length - O.length;
    N($ ? `Oikein! ${$e(E)} löytyi ${tn[z.string]}-kieleltä (${Ci(z.fret)}). Vielä ${$}.` : `Löysit kaikki ${b.length} ${$e(E)}-säveltä tällä alueella.`);
  }
  function K() {
    j && (o((z) => z + 1), d([]), p(!1), N(""));
  }
  function V() {
    o(0), d([]), p(!1), N(""), v(0);
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: g ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        A ? `Vääriä valintoja yhteensä ${A}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: V, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          "Etsi kaikki ",
          $e(E),
          "-sävelet"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Qr.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        $e(E),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        b.length
      ] }),
      /* @__PURE__ */ s.jsx(
        oi,
        {
          area: ka,
          marks: I,
          onAnswer: T,
          disabled: j,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: j ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        !j && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((z) => !z),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        j && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: K, children: a === Qr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const Gv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Co = ["C", "G", "D", "Em"], ff = ["C", "G", "D", "Em", "Am", "E", "A"], Wv = { min: 0, max: 3, fixed: "" };
function hf(r) {
  const a = [...r];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Qv({ onBack: r }) {
  const [a, o] = M.useState(4), [c, d] = M.useState(() => hf(Co)), [f, p] = M.useState(0), [m, N] = M.useState(null), [A, v] = M.useState([]), [g, E] = M.useState(0), b = f >= c.length, _ = Gv[c[Math.min(f, c.length - 1)]], j = a === 4 ? Co : ff, w = _.frets.flatMap((O, $) => O === null ? [] : [$]), I = _.frets.flatMap((O, $) => O === null ? [$] : []), T = { ...Wv, strings: w }, K = _.frets.flatMap((O, $) => O === null ? [] : [{
    ...Ke($, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function V(O = a) {
    o(O), d(hf(O === 4 ? Co : ff)), p(0), N(null), v([]), E(0);
  }
  function z(O) {
    m || b || A.includes(O) || (O === _.name ? N(O) : (v(($) => [...$, O]), E(($) => $ + 1)));
  }
  function D() {
    m && (p((O) => O + 1), N(null), v([]));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ s.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 4,
            onChange: () => V(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 7,
            onChange: () => V(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: b ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => V(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ s.jsx(
        oi,
        {
          area: T,
          marks: K,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ s.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: j.map((O) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : A.includes(O) ? "wrong" : "",
          disabled: !!m || A.includes(O),
          "aria-pressed": m === O,
          onClick: () => z(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: m ? "feedback good" : A.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${_.name}-sointu.` : A.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: D, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (r, a) => ({ first: r, ...a ? { second: a } : {} }), rr = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], sr = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], ar = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], rh = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Yv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...sr(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: ar,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: rr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...sr(), ke("E♭"), ke("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ke("Gm"), ke("Dm"), ke("F"), ke("C"), ke("Gm"), ke("Dm"), ke("E♭"), ke("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: rr(),
    lyrics: rh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...sr(), ke("E♭", "F"), ke("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ke("E♭", "F"),
      { ...ke("Gm"), possibleChord: "Dm" },
      ke("E♭", "F"),
      ke("Gm", "F"),
      { ...ke("Gm"), possibleChord: "Dm" },
      ke("Gm", "F"),
      ke("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Jv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...sr(), ke("E♭"), ke("E♭")],
    lyrics: ar
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: rr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...sr(), ke("E♭"), ke("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ke("Gm"), ke("Dm"), ke("F"), ke("C"), ke("Gm"), ke("Dm"), ke("E♭"), ke("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: rr(),
    lyrics: rh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...sr(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ur = {
  acoustic: Yv,
  normal: Jv
}, Xv = "normal", zo = "yksi-sointu-kaksi-askelta", Jo = {
  acoustic: zo + "-akustinen",
  normal: zo + "-normaali"
}, sh = (r) => r === zo || Object.values(Jo).includes(r ?? "");
function Zv(r) {
  const a = Object.entries(Jo).find(([, o]) => o === r);
  return a ? a[0] : null;
}
const qv = (r) => Jo[r], mf = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Xo(r, a = "acoustic") {
  const o = ur[a], c = o[r], d = o[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function ah(r, a = "acoustic") {
  const o = ur[a], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let g = 1; g < o.length && !(c < o[g].start); g++)
    d = g;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), N = Xo(d, a) / 4;
  let A = 1;
  for (; A < 4 && c >= m + A * N; ) A++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: A,
    chord: v.second && A >= 3 ? v.second : v.first
  };
}
function ns(r, a, o = "acoustic") {
  return ur[o][r].start + Xo(r, o) * a;
}
function ek(r) {
  return ur[r].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, r), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Xo(o, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function tk(r, a = "acoustic", o = !1) {
  const c = ur[a], d = ah(r, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = ek(a), N = m.findIndex((b) => b.sectionIndex === d.sectionIndex && b.barIndex === d.barIndex && b.part === p), v = [
    ...m.slice(N + 1).map((b) => ({ ...b, wrapped: !1 })),
    ...o ? m.slice(0, N + 1).map((b) => ({ ...b, wrapped: !0 })) : []
  ].find((b) => b.chord !== d.chord) ?? null;
  let g = null;
  const E = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!E || o)) {
    const b = E ? 0 : d.sectionIndex + 1, _ = c[b], j = _.bars[0].first;
    g = {
      section: _,
      sectionIndex: b,
      firstChord: j,
      wrapped: E,
      continues: j === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function nk(r) {
  const a = r.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, N) => m + o(N), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const N = Math.abs(c - 2 * p);
    (N < f || N === f && p >= c - p) && (d = m, f = N), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Bo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], lh = "musiikin-kartta:kappale-sointuvihjeet:v1", wa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, pf = {
  showChords: !0,
  level: 0,
  fadeOrder: wa
};
function ya(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function vf(r) {
  if (!r) return { ...pf, fadeOrder: { ...wa } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...wa }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Bo)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...pf, fadeOrder: { ...wa } };
  }
}
function ik() {
  try {
    return vf(localStorage.getItem(lh));
  } catch {
    return vf(null);
  }
}
const rk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function sk(r) {
  const a = rk.exec(r.trim());
  if (!a) return r;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const ak = (r, a) => a === "power" ? sk(r) : r, lk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], ok = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function uk({ version: r, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = M.useState(ik), [p, m] = M.useState(null), [N, A] = M.useState(!1), [v, g] = M.useState("full"), E = (G) => ak(G, v), b = ur[r], _ = ah(a, r), { section: j, sectionIndex: w, barIndex: I, beat: T, chord: K } = _, V = T >= 3 && j.bars[I].second ? "second" : "first", z = (G, oe, se) => `${r}:${G}:${oe}:${se}`, D = (G, oe) => z(j.id, G, oe), O = D(I, V), $ = ya(K, d), re = $ && p === O, ee = (G, oe, se) => !ya(G, d) || p === D(oe, se), Se = d.showChords && d.level === 0, _e = Bo.filter((G) => ya(G, d)).length, { nextSection: X } = tk(a, r, o), le = !!X && ya(X.firstChord, d);
  return M.useEffect(() => {
    m(null);
  }, [O]), M.useEffect(() => {
    try {
      localStorage.setItem(lh, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ s.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ s.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (G) => {
              f((oe) => ({ ...oe, showChords: G.target.checked })), m(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ s.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: N,
            onChange: (G) => A(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, oe]) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: G,
              checked: v === G,
              onChange: () => g(G)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: oe })
        ] }, G))
      ] }),
      /* @__PURE__ */ s.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (G) => {
              const oe = Number(G.target.value);
              f((se) => ({ ...se, level: oe })), m(null);
            },
            children: lk.map((G) => /* @__PURE__ */ s.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: _e === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${_e}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: Bo.map((G) => /* @__PURE__ */ s.jsxs("label", { children: [
        G,
        /* @__PURE__ */ s.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (oe) => {
              const se = Number(oe.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [G]: se } })), m(null);
            },
            children: ok.map((oe) => /* @__PURE__ */ s.jsx("option", { value: oe.value, children: oe.label }, oe.value))
          }
        )
      ] }, G)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ s.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-section-jump",
            value: j.id,
            onChange: (G) => {
              const oe = b.find((se) => se.id === G.target.value);
              oe && c(oe.start);
            },
            children: b.map((G) => /* @__PURE__ */ s.jsxs("option", { value: G.id, children: [
              mf(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          $ && !re ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: $ && !re ? "?" : E(K) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            j.title,
            ", tahti ",
            I + 1,
            ", isku ",
            T,
            "/4"
          ] }),
          $ && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(re ? null : O),
              children: re ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        X && /* @__PURE__ */ s.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ s.jsx("strong", { children: le ? "?" : E(X.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": j.title + ": tahdit", children: j.bars.map((G, oe) => {
      const se = oe === I, W = se && (T < 3 || !G.second), ae = se && T >= 3 && !!G.second, ne = ee(G.first, oe, "first"), S = G.second ? ee(G.second, oe, "second") : !1, y = (ne ? E(G.first) : "sointu piilossa") + (G.second ? " " + (S ? E(G.second) : "sointu piilossa") : "") + (Se && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (Se && G.possibleChord ? " (" + E(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (se ? " active" : ""),
          "aria-pressed": se,
          "aria-label": "Tahti " + (oe + 1) + ": " + y + ". Siirry kohtaan " + mf(ns(w, oe, r)),
          onClick: () => c(ns(w, oe, r)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: W && ne ? "now" : "", children: ne ? E(G.first) : "?" }),
              G.second && /* @__PURE__ */ s.jsx("strong", { className: ae && S ? "now" : "", children: S ? E(G.second) : "?" })
            ] }),
            Se && G.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            Se && G.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              E(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    N ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: nk(b).map((G, oe) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: G.map((se) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: se.title }),
        se.lyrics?.map((W, ae) => /* @__PURE__ */ s.jsx("p", { children: W }, ae))
      ] }, se.id)) }, oe)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : j.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        j.title,
        ": sanat"
      ] }),
      j.lyrics.map((G, oe) => /* @__PURE__ */ s.jsx("p", { children: G }, oe))
    ] }),
    Se && j.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: j.note })
  ] });
}
const Ma = 7, ck = { name: "bluesasteikko", base: Ue.SCALES.mp.base, add: [[6, "♭5"]] }, To = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ue.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: ck,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ue.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function dk(r) {
  return Ue.scaleNotes(r).map(([a, o]) => Ue.noteName(Ma, a, o));
}
const oh = (r) => r === "pentatonic" ? 5 : 7;
function fk(r, a, o) {
  const c = a.filter((m) => m >= 1 && m <= oh(r.system)), d = Ue.fingeringBoxes(Ma, r.scale, r.system, c, o);
  if (r.id !== "blues") return d;
  const f = r.scale.add.map(([m]) => (Ma + m) % 12), p = (m, N) => N >= 0 && N <= o && f.includes((Ue.OPEN_PITCHES[m] + N) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((N) => {
    const A = N.strings.map((g, E) => {
      if (!g.length) return g;
      const b = g[g.length - 1];
      return p(E, b + 1) ? [...g.slice(0, -1), b + 1] : g;
    }), v = A.flat();
    return { ...N, strings: A, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const kf = 17;
function hk({ open: r }) {
  const [a, o] = M.useState("mp"), [c, d] = M.useState({ pentatonic: [], "3nps": [] }), [f, p] = M.useState(!1), [m, N] = M.useState(!1), A = M.useRef(null), v = To.find((w) => w.id === a) ?? To[0], g = c[v.system], E = fk(v, g, kf), b = E.some((w) => w.positions.length > 0), _ = Ue.renderBoard(Ma, v.scale, kf, {
    automatic: !0,
    boxes: E,
    onlyBoxNotes: b && f,
    label: v.title + (g.length ? ", " + g.map((w) => "boksi " + w).join(", ") : "")
  });
  M.useEffect(() => {
    const w = A.current;
    !w || !r || E.length === 1 && Ue.revealPositions(w, ".box-highlight");
  }, [_, r]);
  function j(w, I) {
    d((T) => ({ ...T, [v.system]: I ? [...T[v.system], w].sort((K, V) => K - V) : T[v.system].filter((K) => K !== w) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (w) => o(w.target.value), children: To.map((w) => /* @__PURE__ */ s.jsx("option", { value: w.id, children: w.title }, w.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: v.title }),
      /* @__PURE__ */ s.jsx("span", { children: dk(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: A,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: _ }
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (w) => {
        w.preventDefault(), N((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: oh(v.system) }, (w, I) => I + 1).map((w) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": w, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            value: w,
            checked: g.includes(w),
            onChange: (I) => j(w, I.target.checked)
          }
        ),
        " Boksi ",
        w
      ] }, v.system + w)) }),
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: b && f,
            disabled: !b,
            onChange: (w) => p(w.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: b ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let uh = null;
function mk() {
  return Zv(new URLSearchParams(location.search).get("kappale")) ?? uh ?? Xv;
}
function pk(r) {
  uh = r;
  const a = new URL(location.href);
  sh(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", qv(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const vk = {
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
}, yf = 1e-3;
function gf(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function jf(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function kk({ onBack: r }) {
  const a = M.useRef(null), o = M.useRef(null), c = M.useRef(null), d = M.useRef(0), f = M.useRef(new Wf()), p = M.useRef(null), m = M.useRef(/* @__PURE__ */ new WeakMap()), N = M.useRef(/* @__PURE__ */ new WeakSet()), A = M.useRef(null), v = M.useRef(0), g = M.useRef(0), E = M.useRef(null), b = M.useRef(!1), _ = M.useRef({ guitar: !0, vocals: !0 }), [j, w] = M.useState(mk), I = vk[j], [T, K] = M.useState(!1), [V, z] = M.useState(!0), [D, O] = M.useState(!0), [$, re] = M.useState(!1), [ee, Se] = M.useState(!1), [_e, X] = M.useState(!1), [le, G] = M.useState(Up), oe = M.useRef(le), [se] = M.useState(() => iv()), W = M.useRef(null), [ae, ne] = M.useState(""), [S, y] = M.useState(0), [q, de] = M.useState(0), [Ne, H] = M.useState("");
  function B(U = !1, we, Re) {
    const Fe = a.current;
    if (Fe)
      for (const De of [o.current, c.current])
        De && (!we || De === we) && f.current.align(Fe, De, U, void 0, Re);
  }
  function te() {
    const U = _.current;
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, U.guitar],
      ["vocals", c.current, U.vocals]
    ];
  }
  function Y(U = oe.current, we) {
    for (const [Re, Fe, De] of te()) {
      if (!Fe) continue;
      const kt = Vd(Re, U, we?.[Re] ?? De);
      if (se === "webaudio" && W.current?.routed(Fe))
        W.current.setLevel(Fe, kt);
      else
        try {
          Fe.volume = Vd(Re, U);
        } catch {
        }
    }
  }
  function pe(U) {
    oe.current = U, G(U), Hp(U), Y(U);
  }
  function Te(U = _.current) {
    const we = a.current, Re = o.current, Fe = c.current;
    return !we || !Re || !Fe ? [] : [we, ...U.guitar ? [Re] : [], ...U.vocals ? [Fe] : []];
  }
  const me = () => se === "webaudio", ge = (U) => m.current.has(U);
  function je(U, we) {
    const Re = ++v.current;
    g.current++;
    const Fe = Yp(we, U, {
      timeoutMs: Ud,
      cancelled: () => Re !== v.current,
      stale: (De) => m.current.has(De),
      playedAt: (De) => m.current.get(De),
      onLoad: (De) => {
        m.current.delete(De);
      }
    }).finally(() => {
      g.current--;
    });
    return A.current = { at: U, elements: we, done: Fe }, Fe;
  }
  function Ae() {
    v.current++, A.current = null, E.current !== null && (clearTimeout(E.current), E.current = null);
  }
  function Ee(U = !0) {
    d.current++, Ae(), b.current = !1, a.current?.pause(), o.current?.pause(), c.current?.pause(), K(!1);
    const we = a.current, Re = Te();
    U && me() && we && Re.some(ge) && je(p.current ?? we.currentTime, Re);
  }
  function Be(U, we) {
    d.current++, Ae(), b.current = !0, a.current?.pause(), o.current?.pause(), c.current?.pause(), p.current = U, y(U), E.current = setTimeout(() => {
      E.current = null, Ze();
    }, we);
  }
  function it(U) {
    if (U !== j) {
      p.current = null, Ee(!1);
      for (const we of [a.current, o.current, c.current])
        if (we)
          try {
            we.currentTime = 0;
          } catch {
          }
      y(0), de(0), H(""), w(U), pk(U);
    }
  }
  function Qe(U) {
    const we = a.current;
    if (!we || !Number.isFinite(U)) return;
    const Re = Math.max(0, Math.min(U, Number.isFinite(we.duration) ? we.duration : U));
    if (me() && (T || b.current)) {
      Be(Re, Gd);
      return;
    }
    if (p.current = Re, y(Re), me() && (Te().some(ge) || A.current)) {
      Ae(), E.current = setTimeout(() => {
        E.current = null, je(Re, Te());
      }, Gd);
      return;
    }
    gf(we, Re);
  }
  function Xe(U) {
    if (g.current > 0) return;
    const we = p.current;
    if (we === null || U !== a.current || U.seeking) return;
    const Re = Number.isFinite(U.duration) ? Math.min(we, U.duration) : we;
    if (Re !== we && (p.current = Re, y(Re)), Math.abs(U.currentTime - Re) < yf) return;
    const Fe = U.seekable;
    for (let De = 0; De < Fe.length; De++)
      if (Fe.start(De) <= Re && Re <= Fe.end(De)) {
        gf(U, Re);
        return;
      }
  }
  function st(U) {
    if (U !== a.current || g.current > 0) return;
    const we = p.current;
    if (we === null)
      y(U.currentTime);
    else if (U.readyState >= 1 && !U.seeking && Math.abs(U.currentTime - we) < yf) {
      p.current = null, B(!0);
      return;
    }
    U.paused || B();
  }
  async function jt() {
    if (!(!a.current || !o.current || !c.current)) {
      if (T || b.current) {
        Ee();
        return;
      }
      await Ze();
    }
  }
  async function Ze() {
    const U = a.current, we = o.current, Re = c.current;
    if (!U || !we || !Re) return;
    E.current !== null && (clearTimeout(E.current), E.current = null);
    const Fe = _.current;
    H("");
    let De = p.current ?? A.current?.at ?? U.currentTime;
    Number.isFinite(U.duration) && De >= U.duration - 0.05 && (De = 0, p.current = 0, y(0));
    const kt = Te(Fe), Ce = me() && kt.some((ue) => N.current.has(ue));
    if (Ce || Xe(U), se === "webaudio") {
      const ue = W.current ??= new av(), Me = ue.unlock() && [U, we, Re].map((Le) => ue.route(Le)).every(Boolean);
      ne(Me ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + ue.lastError);
    }
    Y(), we.muted = !Fe.guitar, Re.muted = !Fe.vocals, Ce || B(!0, void 0, Wp);
    const Nt = ++d.current;
    if (Fe.guitar || we.pause(), Fe.vocals || Re.pause(), Ce) {
      Hd(kt.filter((Le) => !N.current.has(Le)));
      const ue = A.current, Me = await (ue && ue.at === De && kt.every((Le) => ue.elements.includes(Le)) ? ue.done : je(De, kt));
      if (Nt !== d.current) return;
      if (Me === "ohitettu") {
        b.current = !1, K(!1);
        return;
      }
      if (Me === "virhe") {
        Ee(!1), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
      A.current = null, p.current = null, y(De);
    }
    if (!Kf(kt)) {
      Hd(kt);
      const ue = await Uf(kt, Ud, () => Nt !== d.current);
      if (ue === "ohitettu" || Nt !== d.current) return;
      if (ue === "virhe") {
        Ee(!1), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (f.current.hold(performance.now() + Kd), await Promise.all(kt.map((ue) => ue.play().then(() => {
        m.current.set(ue, performance.now()), N.current.add(ue);
      }))), Nt !== d.current) return;
      if (b.current = !1, f.current.hold(performance.now() + Kd), B(), K(!0), se === "webaudio" && W.current?.routed(U)) {
        const ue = W.current;
        setTimeout(() => {
          Nt === d.current && ue.state !== "running" && H(`Ääni ei käynnistynyt (Web Audio: ${ue.state}). Pysäytä ja soita uudelleen.${ue.lastError ? " " + ue.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Nt !== d.current) return;
      Ee(!1), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Ie(U, we, Re) {
    if (!U) return;
    if (U.muted = !we, !we) {
      U.pause();
      return;
    }
    const Fe = a.current;
    if (!(!Fe || !(T || b.current))) {
      if (me()) {
        Be(p.current ?? Fe.currentTime, 0);
        return;
      }
      B(!0, U), U.play().catch(() => H(Re + " ei käynnistynyt. Pysäytä ja soita uudelleen."));
    }
  }
  function tt(U) {
    _.current = { ..._.current, guitar: U }, z(U), Y(le, { guitar: U }), Ie(o.current, U, "Kitararaita");
  }
  function vt(U) {
    _.current = { ..._.current, vocals: U }, O(U), Y(le, { vocals: U }), Ie(c.current, U, "Lauluraita");
  }
  return M.useEffect(() => {
    const U = () => {
      document.hidden && Ee(!1);
    };
    return document.addEventListener("visibilitychange", U), () => {
      document.removeEventListener("visibilitychange", U), d.current++, v.current++, E.current !== null && clearTimeout(E.current), a.current?.pause(), o.current?.pause(), c.current?.pause(), W.current?.close();
    };
  }, []), M.useEffect(() => {
    Y();
  }, [j]), /* @__PURE__ */ s.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ s.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ s.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ s.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ s.jsxs(
        "select",
        {
          id: "song-version-select",
          value: j,
          onChange: (U) => it(U.target.value),
          children: [
            /* @__PURE__ */ s.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ s.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          I.label,
          " · ",
          I.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          jt();
        }, children: T ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: q > 0 ? q : 1,
            step: 0.1,
            value: Math.min(S, q > 0 ? q : 1),
            disabled: q <= 0,
            onChange: (U) => Qe(Number(U.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          jf(S),
          " / ",
          jf(q)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: V,
              onChange: (U) => tt(U.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (U) => vt(U.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: $,
              onChange: (U) => re(U.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": se, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            le > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            le > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: le,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": le + " %",
              onChange: (U) => pe(Number(U.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            le,
            " %"
          ] })
        ] })
      ] }),
      ae && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: ae }),
      /* @__PURE__ */ s.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ s.jsxs("a", { href: I.download, download: I.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ s.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ s.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          I.label,
          ", koko kappale · ",
          I.downloadSize
        ] })
      ] }),
      Ne && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: Ne }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: I.backing,
          preload: "metadata",
          loop: $,
          onLoadedMetadata: (U) => {
            U.currentTarget === a.current && (de(U.currentTarget.duration), Xe(U.currentTarget));
          },
          onProgress: (U) => Xe(U.currentTarget),
          onCanPlay: (U) => Xe(U.currentTarget),
          onTimeUpdate: (U) => st(U.currentTarget),
          onEnded: (U) => {
            U.currentTarget !== a.current || U.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), K(!1), y(U.currentTarget.duration));
          },
          onPause: (U) => {
            U.currentTarget === a.current && !b.current && K(!1);
          },
          onError: () => H(I.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        j + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: o,
          src: I.guitar,
          preload: "metadata",
          muted: !V,
          loop: $,
          onLoadedMetadata: () => {
            a.current?.paused && g.current === 0 && B(!0);
          },
          onError: () => H(I.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        j + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: c,
          src: I.vocals,
          preload: "metadata",
          muted: !D,
          loop: $,
          onLoadedMetadata: () => {
            a.current?.paused && g.current === 0 && B(!0);
          },
          onError: () => H(I.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        j + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: ee, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (U) => {
        U.preventDefault(), Se((we) => !we);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(uk, { version: j, position: S, loop: $, onSeek: Qe })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: _e, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (U) => {
        U.preventDefault(), X((we) => !we);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(hk, { open: _e })
    ] })
  ] });
}
const Vo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Na = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), ch = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Ko = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function yk(r, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Ko(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function dh({ frame: r, threshold: a }) {
  const o = r?.rms ?? 0, c = lr(o), d = (r?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${Na(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${Xd(o) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${Xd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function gk({ mic: r, frame: a, heard: o, s: c, now: d }) {
  const f = Xf(r.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${$e(p.midi, c.flats, !0)} · ${ch(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Vo[f];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ s.jsx(dh, { frame: a, threshold: c.minRms })
  ] });
}
function jk({ mic: r, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: N, calibrating: A, calibration: v, onTest: g, onStop: E, onCalibrate: b }) {
  const _ = M.useId(), j = Xf(r.phase, a), w = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", I = r.phase === "on", T = o && d - o.at < 1500 ? o : null, K = T && (j === "pitch" || j === "untuned"), V = I && (a?.peak ?? 0) >= 0.98, z = r.phase === "error" ? [] : yk(j, f, r.info, V), D = !f.device || m.some(($) => $.deviceId === f.device), O = ($, re) => p({ ...f, [$]: re });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${_}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${_}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${j}`, "data-testid": "mic-state", "data-reading": j, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Vo[j],
      j === "pitch" && T ? ` ${$e(T.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Ko(r.info)}.` : r.phase === "error" ? r.error : Vo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Ko(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(dh, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Na(Math.max(-60, lr(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? $e(T.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${Na(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          ch(T.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${T.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, T.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: K ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: T ? `${Math.round(T.clarity * 100)} %` : a?.clarity !== void 0 && j === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && c && d - c.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      $e(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    z.length > 0 && I && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: z.map(($) => /* @__PURE__ */ s.jsx("li", { children: $ }, $)) }),
    r.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      w ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: E, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: f.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: N, onClick: g, children: "Testaa mikrofoni" }),
      w && I && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: A, onClick: b, children: A ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    N && r.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: N, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: `${_}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ s.jsxs("select", { id: `${_}-device`, value: f.device, onChange: ($) => O("device", $.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ s.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map(($, re) => /* @__PURE__ */ s.jsx("option", { value: $.deviceId, children: $.label || `Äänitulo ${re + 1}` }, $.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${_}-rms`, children: [
              "Äänikynnys · ",
              Na(lr(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${_}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: ($) => O("minRms", Number($.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${_}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${_}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: ($) => O("clarity", Number($.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${_}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${_}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: ($) => O("stability", Number($.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${_}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${_}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: ($) => O("cents", Number($.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const xk = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, xf = (r, a) => xk(r).find(([o]) => o === a)?.[1], fh = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Sk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function wk(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Nk(r, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : fh(r) ? `Oikein! ${a.degree}. aste on ${Zr(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${$e(a.reference, r.flats, !0)} → ${a.name} on ${qr[a.interval]} ${Sk(a)}.` : r.mode === "notes" ? o === "board" && d ? `Oikein! ${$e(d.midi, r.flats)} on ${Nf[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${$e(c, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Ek(r, a, o, c, d) {
  if (o === "note") return `Ei ${$e(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${xf(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = We(d.midi) === We(a.midi);
  if (r.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${tn[d.string]}-kieli. Etsi sävel ${Go[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${$e(d.midi, r.flats)}. Etsi ${a.name}.`;
  if (fh(r)) {
    const p = We(d.midi - r.root), m = xf(r, p), N = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${$e(d.midi, r.flats)}, joka ei kuulu ${N}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${$e(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Ck(r, a, o) {
  const c = $e(o, r.flats, !0);
  return We(o) === We(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function hh(r, a = !1) {
  const o = r.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => tn[p] ? `${tn[p]}-kieli, ${Ci(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${$e(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${$e(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ei[p]) return null;
      const m = Ei[p].tones.find(([N]) => N === c(3))?.[1];
      return m ? `${Ef(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ue.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${li(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const N = Ue.scaleNotes(p).find(([A]) => A === c(3))?.[1];
        return N ? `${m}: ${N}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${li(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ei.maj.tones.find(([N]) => N === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Sf(r) {
  return Object.entries(r).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Uo = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Tk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Mk(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${nr(r.mode)}${r.hints ? ` · ${_a[r.hints].title}` : ""} · ${a} · keskimäärin ${Uo(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function _k({ store: r, s: a, locked: o, changed: c }) {
  const [d, f] = M.useState(""), p = M.useRef(null), { recent: m, sessions: N, stats: A } = r.data, v = Ti(a), g = Tf(a), E = [...new Set(m.map((T) => T.mode))].map((T) => {
    const K = m.filter((V) => V.mode === T);
    return { mode: T, ...Po(K), last: Math.max(...K.map((V) => V.at)) };
  }).sort((T, K) => K.last - T.last), b = Sf(A).filter((T) => !T.guided && T.mode === a.mode && T.input === v && T.check === g && T.stat.attempts >= 3).map((T) => ({ ...T, score: Wo(T.stat), text: hh(T.item, a.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, K) => T.score - K.score).slice(0, 5), _ = Sf(A).reduce((T, K) => T + K.stat.attempts, 0);
  function j() {
    const T = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), K = URL.createObjectURL(T), V = document.createElement("a");
    V.href = K, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL(K), 1e3);
  }
  async function w(T) {
    if (T)
      try {
        const K = await T.text();
        if (_ && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(K), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function I() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    _ === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        _,
        " vastattua kysymystä · ",
        N.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ s.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ s.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ s.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ s.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ s.jsx("tbody", { children: E.map((T) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: nr(T.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: T.count }),
          /* @__PURE__ */ s.jsx("td", { children: T.solo ? `${T.soloFirst}/${T.solo} · ${Math.round(T.soloFirst / T.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: T.guided }),
          /* @__PURE__ */ s.jsx("td", { children: Uo(T.ms / T.count) })
        ] }, T.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    b.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        nr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: b.map((T) => /* @__PURE__ */ s.jsxs("li", { children: [
        T.text,
        " · viime aikoina ",
        Math.round(es(T.stat) * 100),
        " % heti oikein · ",
        Uo(ts(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: _ ? `Harjoituksessa ${nr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Tk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(Mp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: A, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      N.length ? /* @__PURE__ */ s.jsx("ul", { children: N.slice(-10).reverse().map((T) => /* @__PURE__ */ s.jsx("li", { children: Mk(T) }, T.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: j, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (T) => {
          w(T.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o || !_, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ s.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function bk() {
  try {
    return new Od(localStorage);
  } catch {
    return new Od();
  }
}
const wf = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Pk = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Ak = [0, 2, 4, 5, 7, 9, 11];
function Rk(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Lk() {
  const [r] = M.useState(bk), [a, o] = M.useState(() => pp(location.search, r.data.settings)), [, c] = M.useReducer((R) => R + 1, 0), d = M.useRef(null), f = M.useRef(new Tv()), p = M.useRef(new rs()), m = M.useRef(0), N = M.useRef(), A = M.useRef(), v = M.useRef(null), g = M.useRef(0), E = M.useRef(null), b = M.useRef(a);
  b.current = a;
  const [_, j] = M.useState({ phase: "off", purpose: "none" }), w = M.useRef(_), I = (R) => {
    w.current = R, j(R);
  }, [T, K] = M.useState(null), [V, z] = M.useState(null), [D, O] = M.useState(null), [$, re] = M.useState(0), [ee, Se] = M.useState([]), [_e, X] = M.useState(!1), [le, G] = M.useState(!1), [oe, se] = M.useState(""), [W, ae] = M.useState("info"), [ne, S] = M.useState(""), [y, q] = M.useState(0), [de, Ne] = M.useState([]), [H, B] = M.useState([]), [te, Y] = M.useState(null), [pe, Te] = M.useState(!1), [me, ge] = M.useState(""), [je, Ae] = M.useState(""), [Ee, Be] = M.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.has("tila") || R.has("vanha") ? "legacy" : sh(R.get("kappale")) ? "songs" : Dp(R.get("polku"));
  }), [it, Qe] = M.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.get("polku") === "otelauta" && R.get("harjoitus") === "savelten-etsinta";
  });
  function Xe() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), Qe(!0);
  }
  function st() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), Qe(!1);
  }
  function jt() {
    Be(null), Qe(!1);
    const R = new URL(location.href);
    R.searchParams.delete("polku"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash);
  }
  const Ze = () => {
    dv().then(Se).catch(() => {
    });
  };
  function Ie() {
    clearTimeout(A.current), v.current = null, Te(!1);
  }
  function tt() {
    K(null), z(null), O(null);
  }
  function vt() {
    f.current.stop(), Ie(), I({ phase: "off", purpose: "none" }), tt();
  }
  async function U(R) {
    if (f.current.active && w.current.phase === "on")
      return Ie(), I({ ...w.current, purpose: R }), f.current.rearm(), !0;
    I({ phase: "requesting", purpose: R }), tt();
    try {
      const fe = await f.current.start(b.current.device, {
        ...wf(b.current),
        onFrame: (He) => De.current.frame(He),
        onStableNote: (He) => De.current.stable(He)
      }, () => De.current.lost());
      return fe ? (I({ phase: "on", purpose: R, info: fe }), Ze(), !0) : !1;
    } catch (fe) {
      return I({ phase: "error", purpose: "none", error: Cv(fe) }), !1;
    }
  }
  function we(R) {
    v.current?.push(R.rms);
    const fe = performance.now();
    fe - g.current < 66 || (g.current = fe, K(R), re(fe), R.midi !== void 0 && R.frequency !== void 0 && z({ midi: R.midi, frequency: R.frequency, cents: R.cents ?? 0, clarity: R.clarity ?? 0, tuned: R.status === "pitch", at: fe }));
  }
  function Re(R) {
    w.current.purpose === "test" ? O(R) : w.current.purpose === "round" && It(R.midi, "mic", void 0, R.heldMs);
  }
  function Fe() {
    const R = w.current.purpose === "round";
    Ie(), tt(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    R && fe && ["active", "feedback", "paused"].includes(fe.phase) && (Me(), G(!1), fe.pause(), S("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const De = M.useRef({ frame: we, stable: Re, lost: Fe });
  De.current = { frame: we, stable: Re, lost: Fe };
  function kt(R) {
    const fe = Ea(R), He = fe.device !== b.current.device;
    b.current = fe, o(fe), r.settings(fe), S(""), f.current.active && (He && w.current.purpose === "test" ? (vt(), U("test")) : f.current.setOptions(wf(fe)));
  }
  function Ce(R) {
    Ae(""), d.current = null, Qe(!1), Be(R);
  }
  function Nt() {
    ge(""), U("test");
  }
  function ue() {
    w.current.phase !== "on" || w.current.purpose !== "test" || (Ie(), v.current = [], Te(!0), ge("Mitataan taustakohinaa kolme sekuntia. Älä soita."), A.current = setTimeout(() => {
      const R = v.current ?? [];
      if (Ie(), R.length < 10) {
        ge("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: He, loud: Jt } = Mv(R);
      kt({ ...b.current, minRms: fe }), ge(`Taustakohina on ${Math.round(lr(He))} dB ja äänikynnys nyt ${Math.round(lr(fe))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Me() {
    m.current++, clearTimeout(N.current), p.current.stop();
  }
  function Le(R, fe) {
    if (!R.results.length) return;
    const He = Po(R.results);
    r.session({
      id: R.id,
      mode: R.settings.mode,
      count: He.count,
      first: He.first,
      ms: He.ms,
      solo: He.solo,
      soloFirst: He.soloFirst,
      hints: R.settings.hints,
      at: Date.now(),
      complete: fe
    });
  }
  async function qe(R) {
    if (!R.question?.sound.length || R.phase !== "active") return;
    Me();
    const fe = m.current;
    R.pause(), f.current.pause(), G(!0), ae("info"), se("Kuuntele…"), c();
    try {
      await p.current.play(R.question.sound);
    } catch {
      fe === m.current && S("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== R || (R.resume(), f.current.resume(), G(!1), se(""), c());
  }
  async function ct(R) {
    Ne([]), B([]), Y(null), S(""), q(R.hintLevel), f.current.rearm(), ae("info"), se(""), c(), R.question?.sound.length && await qe(R);
  }
  async function un() {
    const R = b.current, fe = _o(R);
    if (fe) {
      S(fe);
      return;
    }
    Me();
    const He = m.current;
    if (S(""), ge(""), Ae(""), va(R)) {
      X(!0);
      const ft = await U("round");
      if (He !== m.current) return;
      if (X(!1), !ft) {
        S("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else w.current.phase !== "off" && vt();
    const Jt = new Ip(R, () => r.data.stats, (ft) => r.record(ft));
    try {
      Jt.start();
    } catch (ft) {
      w.current.purpose === "round" && vt(), S(ft instanceof Error ? ft.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => E.current?.scrollIntoView({ block: "start", behavior: "auto" })), await ct(Jt);
  }
  function Mt() {
    Me(), X(!1), vt();
  }
  function It(R, fe, He, Jt = 0) {
    const ft = d.current, Dt = ft?.question;
    if (!ft || !Dt || ft.phase !== "active") return;
    const hr = ft.answer(R, fe, He, Jt);
    if (hr !== "ignored") {
      if (hr === "candidate")
        Y(R), ae("bad"), se(Ck(ft.settings, Dt, R));
      else if (hr === "wrong")
        He ? Ne((bt) => [...bt, He]) : B((bt) => [...bt, R]), ae("bad"), se(Ek(ft.settings, Dt, fe, R, He));
      else if (Y(null), ae("good"), se(Nk(ft.settings, Dt, fe, R, He)), Le(ft, !1), ft.settings.advance) {
        const bt = m.current;
        N.current = setTimeout(() => {
          bt === m.current && Cn();
        }, fe === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Cn() {
    const R = d.current;
    if (!(!R || R.phase !== "feedback")) {
      Me();
      try {
        R.next();
      } catch (fe) {
        cn(!1), S(fe instanceof Error ? fe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (R.phase === "done") {
        cn(!0);
        return;
      }
      await ct(R);
    }
  }
  function cn(R = !1) {
    Me(), G(!1), X(!1), (w.current.purpose === "round" || w.current.phase === "requesting") && vt();
    const fe = d.current;
    fe && (fe.stop(), Le(fe, R)), Y(null), q(0), Ne([]), B([]), S(""), Ae(R ? "complete" : "stopped"), ae("info"), se(""), c();
  }
  function Tn() {
    const R = d.current;
    if (!R || !["active", "feedback", "paused"].includes(R.phase)) return;
    Me(), G(!1), R.pause();
    const fe = w.current.purpose === "round";
    fe && vt(), ae("info"), se(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function ss() {
    const R = d.current;
    if (!R || R.phase !== "paused" || le) return;
    Me();
    const fe = m.current;
    if (S(""), va(R.settings)) {
      X(!0);
      const He = await U("round");
      if (fe !== m.current) return;
      if (X(!1), !He) {
        S("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    R.resume(), ae("info"), se(""), c(), R.phase === "active" && (f.current.rearm(), R.question?.sound.length && await qe(R));
  }
  function cr(R) {
    const fe = d.current;
    !fe || fe.phase !== "active" || (fe.useHint(R), q(R), c());
  }
  const ci = M.useRef({ hidden: () => {
  }, restored: () => {
  } });
  ci.current = {
    hidden: () => {
      const R = d.current;
      R && ["active", "feedback"].includes(R.phase) || le ? Tn() : w.current.phase !== "off" && w.current.phase !== "error" && (Me(), X(!1), vt());
    },
    restored: () => {
      X(!1), G(!1), I({ phase: "off", purpose: "none" }), tt(), c();
    }
  }, M.useEffect(() => {
    Ze();
    const R = () => Ze();
    navigator.mediaDevices?.addEventListener?.("devicechange", R);
    const fe = () => {
      m.current++, clearTimeout(N.current), clearTimeout(A.current), f.current.stop(), p.current.stop(), Ev(), d.current?.pause();
    }, He = () => {
      document.hidden && ci.current.hidden();
    }, Jt = (ft) => {
      ft.persisted && ci.current.restored();
    };
    return document.addEventListener("visibilitychange", He), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Jt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", R), document.removeEventListener("visibilitychange", He), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const _i = M.useRef(null), di = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${le}`;
  M.useEffect(() => {
    const R = d.current, fe = E.current, He = document.activeElement;
    !R || !fe || !(He === document.body || fe.contains(He)) || (R.phase === "feedback" ? _i.current?.focus({ preventScroll: !0 }) : R.phase === "active" && !le && (He === document.body || He === _i.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [di]);
  const Ve = d.current, nt = !!Ve && ["active", "paused", "feedback"].includes(Ve.phase), at = nt ? Ve.settings : a, yt = nt ? Ve.question : void 0, Kt = !!yt && !!Ve?.answered, dn = nt && Ve.phase === "paused" && !le && !Kt, In = nt && Ve.phase === "active" && !le, dr = nt ? null : _o(a), fr = nt || _e, as = Mi(at), Mn = bp(at), Dn = yt && !Kt ? y : 0, bi = yt ? Fp(at, yt, Kt ? 2 : Dn) : { marks: [], text: "" }, ls = [...new Map([...bi.marks, ...Kt ? [] : de.map((R) => ({ ...R, label: $e(R.midi, at.flats), kind: "wrong" }))].map((R) => [Je(R), R])).values()], os = nt && va(at), us = !!yt && !dn && (yt.choices === "position" || ls.length > 0), _t = Ve ? Po(Ve.results) : null, cs = !Ve || at.hints !== "fade" ? "" : Ve.index <= 3 ? " · vastaus näkyy" : Ve.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", ds = Ve && !nt ? Ve.results.filter((R) => R.errors > 0 || R.hint) : [], [Aa, dt] = Rk(at), zn = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ s.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ s.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), gn = r.data.notice === "hints-default" && /* @__PURE__ */ s.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ s.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ s.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ s.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
      r.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !nt && Ee === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Bp, { onSelect: Ce })
  ] }) : !nt && Ee === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Uv, { onBack: jt })
  ] }) : !nt && Ee === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    it ? /* @__PURE__ */ s.jsx(Hv, { onBack: st }) : /* @__PURE__ */ s.jsx(Vp, { onBack: jt, onNotes: Xe })
  ] }) : !nt && Ee === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Qv, { onBack: jt })
  ] }) : !nt && Ee === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(kk, { onBack: jt })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: Aa, children: [
      "Lue tämän harjoituksen teoria: ",
      dt,
      " →"
    ] }) }),
    Ee !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        nt && cn(), jt();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: Ee === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: Ee === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    nt ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: nr(at.mode) }),
      " · ",
      Dd(at)
    ] }) : Ee === "legacy" ? /* @__PURE__ */ s.jsx(zd, { s: a, change: kt, locked: fr, problem: dr }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(zd, { s: a, change: kt, locked: fr, problem: dr })
    ] }),
    !nt && (Ee === "legacy" || va(a)) && /* @__PURE__ */ s.jsx(
      jk,
      {
        mic: _,
        frame: T,
        heard: V,
        accepted: D,
        now: $,
        s: a,
        change: kt,
        devices: ee,
        locked: _e,
        calibrating: pe,
        calibration: me,
        onTest: Nt,
        onStop: vt,
        onCalibrate: ue
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: E, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: nr(at.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${Ve.index}${Ve.total ? " / " + Ve.total : " · vapaa harjoittelu"} · ${_a[at.hints].title}${cs}${Ve.phase === "paused" && !le ? " · tauolla" : ""}` : je === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        Ve && Ve.results.length > 0 && _t ? /* @__PURE__ */ s.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ s.jsx("h3", { children: je === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ s.jsxs("dl", { children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-solo", children: _t.solo ? `${_t.soloFirst} / ${_t.solo}` : "–" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-guided", children: _t.guided })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ s.jsx("dd", { children: Pk(_t.ms / _t.count) })
            ] })
          ] }),
          _t.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          ds.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(ds.map((R) => hh(R.item, a.flats)).filter(Boolean))].slice(0, 6).map((R) => /* @__PURE__ */ s.jsx("li", { children: R }, R)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: Dd(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: _e ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Mt, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!dr, onClick: () => {
          un();
        }, children: Ve?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ve && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && yt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: dn ? "Harjoitus on tauolla." : yt.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: dn ? "Kysymys palaa näkyviin, kun jatkat." : le ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : wk(at, yt) }),
        Ve.hintLevel > 0 && !Kt && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: at.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        os && /* @__PURE__ */ s.jsx(gk, { mic: _, frame: T, heard: V, s: at, now: $ }),
        yt.choices === "note" && !dn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (at.accidentals ? Array.from({ length: 12 }, (R, fe) => fe) : Ak).map((R) => /* @__PURE__ */ s.jsx("button", { type: "button", className: H.includes(R) ? "wrong" : Kt && R === yt.midi % 12 ? "right" : "", disabled: !In || H.includes(R), onClick: () => It(R, "note"), children: $e(R, at.flats) }, R)) }),
        yt.choices === "degree" && !dn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (at.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[at.scale]) : Ei[at.chord].tones).map(([R, fe]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: H.includes(R) ? "wrong" : Kt && R === yt.interval ? "right" : "", disabled: !In || H.includes(R), onClick: () => It(R, "degree"), children: fe }, R)) }),
        us && /* @__PURE__ */ s.jsx(
          oi,
          {
            area: Mn,
            marks: ls,
            disabled: !In || yt.choices !== "position" || at.input === "mic",
            onAnswer: (R) => It(R.midi, "board", R),
            caption: as.fixed === "shape" ? `${at.shape}-muodon alue` : as.fixed === "box" ? `Boksin ${at.box} alue` : "Otelauta"
          }
        ),
        !Kt && !dn && Dn > 0 && bi.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: bi.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        te !== null && Ve.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            Ve.confirmWrong(), Y(null), se("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ne && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: ne }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          Ve.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: _i, onClick: () => {
            Cn();
          }, children: Ve.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ve.phase === "active" && !Kt && !le && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            Dn === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cr(Math.max(1, Ve.hintLevel)), children: Ve.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Dn === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cr(2), children: "Näytä vastaus" }),
            Dn > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => q(0), children: "Piilota vihje" })
          ] }),
          yt.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !In, onClick: () => {
            qe(Ve);
          }, children: "Kuuntele uudelleen" }),
          Ve.phase === "paused" && !le ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: _e, onClick: () => {
            ss();
          }, children: _e ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Tn, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cn(), children: "Lopeta harjoitus" })
        ] }),
        Ve.phase === "feedback" && at.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: _t?.count ? `Vastattu ${_t.count} · itsenäisesti heti oikein ${_t.soloFirst}/${_t.solo}${_t.guided ? ` · vihjeen kanssa ${_t.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && ne && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: ne })
    ] }),
    !nt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ue.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: vp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(_k, { store: r, s: a, locked: fr, changed: () => {
        const R = Ea(r.data.settings);
        b.current = R, o(R), c();
      } }),
      /* @__PURE__ */ s.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ s.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ s.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ s.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ s.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ s.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ s.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ s.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
lp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx(Lk, {}));
//# sourceMappingURL=app.js.map
