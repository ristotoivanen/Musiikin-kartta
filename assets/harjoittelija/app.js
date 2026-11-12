function jp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var so = { exports: {} }, Ur = {}, ao = { exports: {} }, Oe = {};
var dd;
function Sp() {
  if (dd) return Oe;
  dd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function P(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function E(g, D, me) {
    this.props = g, this.context = D, this.refs = w, this.updater = me || $;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(g, D) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, D, "setState");
  }, E.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = E.prototype;
  function N(g, D, me) {
    this.props = g, this.context = D, this.refs = w, this.updater = me || $;
  }
  var F = N.prototype = new z();
  F.constructor = N, b(F, E.prototype), F.isPureReactComponent = !0;
  var I = Array.isArray, X = Object.prototype.hasOwnProperty, W = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(g, D, me) {
    var we, G = {}, le = null, B = null;
    if (D != null) for (we in D.ref !== void 0 && (B = D.ref), D.key !== void 0 && (le = "" + D.key), D) X.call(D, we) && !M.hasOwnProperty(we) && (G[we] = D[we]);
    var ee = arguments.length - 2;
    if (ee === 1) G.children = me;
    else if (1 < ee) {
      for (var j = Array(ee), Y = 0; Y < ee; Y++) j[Y] = arguments[Y + 2];
      G.children = j;
    }
    if (g && g.defaultProps) for (we in ee = g.defaultProps, ee) G[we] === void 0 && (G[we] = ee[we]);
    return { $$typeof: r, type: g, key: le, ref: B, props: G, _owner: W.current };
  }
  function te(g, D) {
    return { $$typeof: r, type: g.type, key: D, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function fe(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }
  function Te(g) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(me) {
      return D[me];
    });
  }
  var ne = /\/+/g;
  function ue(g, D) {
    return typeof g == "object" && g !== null && g.key != null ? Te("" + g.key) : D.toString(36);
  }
  function Me(g, D, me, we, G) {
    var le = typeof g;
    (le === "undefined" || le === "boolean") && (g = null);
    var B = !1;
    if (g === null) B = !0;
    else switch (le) {
      case "string":
      case "number":
        B = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case r:
          case s:
            B = !0;
        }
    }
    if (B) return B = g, G = G(B), g = we === "" ? "." + ue(B, 0) : we, I(G) ? (me = "", g != null && (me = g.replace(ne, "$&/") + "/"), Me(G, D, me, "", function(Y) {
      return Y;
    })) : G != null && (fe(G) && (G = te(G, me + (!G.key || B && B.key === G.key ? "" : ("" + G.key).replace(ne, "$&/") + "/") + g)), D.push(G)), 1;
    if (B = 0, we = we === "" ? "." : we + ":", I(g)) for (var ee = 0; ee < g.length; ee++) {
      le = g[ee];
      var j = we + ue(le, ee);
      B += Me(le, D, me, j, G);
    }
    else if (j = P(g), typeof j == "function") for (g = j.call(g), ee = 0; !(le = g.next()).done; ) le = le.value, j = we + ue(le, ee++), B += Me(le, D, me, j, G);
    else if (le === "object") throw D = String(g), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function H(g, D, me) {
    if (g == null) return g;
    var we = [], G = 0;
    return Me(g, we, "", "", function(le) {
      return D.call(me, le, G++);
    }), we;
  }
  function ae(g) {
    if (g._status === -1) {
      var D = g._result;
      D = D(), D.then(function(me) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = me);
      }, function(me) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = me);
      }), g._status === -1 && (g._status = 0, g._result = D);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ce = { current: null }, Q = { transition: null }, re = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Q, ReactCurrentOwner: W };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: H, forEach: function(g, D, me) {
    H(g, function() {
      D.apply(this, arguments);
    }, me);
  }, count: function(g) {
    var D = 0;
    return H(g, function() {
      D++;
    }), D;
  }, toArray: function(g) {
    return H(g, function(D) {
      return D;
    }) || [];
  }, only: function(g) {
    if (!fe(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Oe.Component = E, Oe.Fragment = u, Oe.Profiler = d, Oe.PureComponent = N, Oe.StrictMode = c, Oe.Suspense = S, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, Oe.act = Z, Oe.cloneElement = function(g, D, me) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var we = b({}, g.props), G = g.key, le = g.ref, B = g._owner;
    if (D != null) {
      if (D.ref !== void 0 && (le = D.ref, B = W.current), D.key !== void 0 && (G = "" + D.key), g.type && g.type.defaultProps) var ee = g.type.defaultProps;
      for (j in D) X.call(D, j) && !M.hasOwnProperty(j) && (we[j] = D[j] === void 0 && ee !== void 0 ? ee[j] : D[j]);
    }
    var j = arguments.length - 2;
    if (j === 1) we.children = me;
    else if (1 < j) {
      ee = Array(j);
      for (var Y = 0; Y < j; Y++) ee[Y] = arguments[Y + 2];
      we.children = ee;
    }
    return { $$typeof: r, type: g.type, key: G, ref: le, props: we, _owner: B };
  }, Oe.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Oe.createElement = V, Oe.createFactory = function(g) {
    var D = V.bind(null, g);
    return D.type = g, D;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(g) {
    return { $$typeof: p, render: g };
  }, Oe.isValidElement = fe, Oe.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: ae };
  }, Oe.memo = function(g, D) {
    return { $$typeof: R, type: g, compare: D === void 0 ? null : D };
  }, Oe.startTransition = function(g) {
    var D = Q.transition;
    Q.transition = {};
    try {
      g();
    } finally {
      Q.transition = D;
    }
  }, Oe.unstable_act = Z, Oe.useCallback = function(g, D) {
    return ce.current.useCallback(g, D);
  }, Oe.useContext = function(g) {
    return ce.current.useContext(g);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(g) {
    return ce.current.useDeferredValue(g);
  }, Oe.useEffect = function(g, D) {
    return ce.current.useEffect(g, D);
  }, Oe.useId = function() {
    return ce.current.useId();
  }, Oe.useImperativeHandle = function(g, D, me) {
    return ce.current.useImperativeHandle(g, D, me);
  }, Oe.useInsertionEffect = function(g, D) {
    return ce.current.useInsertionEffect(g, D);
  }, Oe.useLayoutEffect = function(g, D) {
    return ce.current.useLayoutEffect(g, D);
  }, Oe.useMemo = function(g, D) {
    return ce.current.useMemo(g, D);
  }, Oe.useReducer = function(g, D, me) {
    return ce.current.useReducer(g, D, me);
  }, Oe.useRef = function(g) {
    return ce.current.useRef(g);
  }, Oe.useState = function(g) {
    return ce.current.useState(g);
  }, Oe.useSyncExternalStore = function(g, D, me) {
    return ce.current.useSyncExternalStore(g, D, me);
  }, Oe.useTransition = function() {
    return ce.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var fd;
function $o() {
  return fd || (fd = 1, ao.exports = Sp()), ao.exports;
}
var hd;
function wp() {
  if (hd) return Ur;
  hd = 1;
  var r = $o(), s = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, S, R) {
    var k, C = {}, P = null, $ = null;
    R !== void 0 && (P = "" + R), S.key !== void 0 && (P = "" + S.key), S.ref !== void 0 && ($ = S.ref);
    for (k in S) c.call(S, k) && !h.hasOwnProperty(k) && (C[k] = S[k]);
    if (p && p.defaultProps) for (k in S = p.defaultProps, S) C[k] === void 0 && (C[k] = S[k]);
    return { $$typeof: s, type: p, key: P, ref: $, props: C, _owner: d.current };
  }
  return Ur.Fragment = u, Ur.jsx = m, Ur.jsxs = m, Ur;
}
var pd;
function Ep() {
  return pd || (pd = 1, so.exports = wp()), so.exports;
}
var a = Ep(), O = $o(), ca = {}, lo = { exports: {} }, Dt = {}, oo = { exports: {} }, uo = {};
var md;
function Np() {
  return md || (md = 1, (function(r) {
    function s(Q, re) {
      var Z = Q.length;
      Q.push(re);
      e: for (; 0 < Z; ) {
        var g = Z - 1 >>> 1, D = Q[g];
        if (0 < d(D, re)) Q[g] = re, Q[Z] = D, Z = g;
        else break e;
      }
    }
    function u(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function c(Q) {
      if (Q.length === 0) return null;
      var re = Q[0], Z = Q.pop();
      if (Z !== re) {
        Q[0] = Z;
        e: for (var g = 0, D = Q.length, me = D >>> 1; g < me; ) {
          var we = 2 * (g + 1) - 1, G = Q[we], le = we + 1, B = Q[le];
          if (0 > d(G, Z)) le < D && 0 > d(B, G) ? (Q[g] = B, Q[le] = Z, g = le) : (Q[g] = G, Q[we] = Z, g = we);
          else if (le < D && 0 > d(B, Z)) Q[g] = B, Q[le] = Z, g = le;
          else break e;
        }
      }
      return re;
    }
    function d(Q, re) {
      var Z = Q.sortIndex - re.sortIndex;
      return Z !== 0 ? Z : Q.id - re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      r.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, p = m.now();
      r.unstable_now = function() {
        return m.now() - p;
      };
    }
    var S = [], R = [], k = 1, C = null, P = 3, $ = !1, b = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function F(Q) {
      for (var re = u(R); re !== null; ) {
        if (re.callback === null) c(R);
        else if (re.startTime <= Q) c(R), re.sortIndex = re.expirationTime, s(S, re);
        else break;
        re = u(R);
      }
    }
    function I(Q) {
      if (w = !1, F(Q), !b) if (u(S) !== null) b = !0, ae(X);
      else {
        var re = u(R);
        re !== null && ce(I, re.startTime - Q);
      }
    }
    function X(Q, re) {
      b = !1, w && (w = !1, z(V), V = -1), $ = !0;
      var Z = P;
      try {
        for (F(re), C = u(S); C !== null && (!(C.expirationTime > re) || Q && !Te()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, P = C.priorityLevel;
            var D = g(C.expirationTime <= re);
            re = r.unstable_now(), typeof D == "function" ? C.callback = D : C === u(S) && c(S), F(re);
          } else c(S);
          C = u(S);
        }
        if (C !== null) var me = !0;
        else {
          var we = u(R);
          we !== null && ce(I, we.startTime - re), me = !1;
        }
        return me;
      } finally {
        C = null, P = Z, $ = !1;
      }
    }
    var W = !1, M = null, V = -1, te = 5, fe = -1;
    function Te() {
      return !(r.unstable_now() - fe < te);
    }
    function ne() {
      if (M !== null) {
        var Q = r.unstable_now();
        fe = Q;
        var re = !0;
        try {
          re = M(!0, Q);
        } finally {
          re ? ue() : (W = !1, M = null);
        }
      } else W = !1;
    }
    var ue;
    if (typeof N == "function") ue = function() {
      N(ne);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), H = Me.port2;
      Me.port1.onmessage = ne, ue = function() {
        H.postMessage(null);
      };
    } else ue = function() {
      E(ne, 0);
    };
    function ae(Q) {
      M = Q, W || (W = !0, ue());
    }
    function ce(Q, re) {
      V = E(function() {
        Q(r.unstable_now());
      }, re);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, r.unstable_continueExecution = function() {
      b || $ || (b = !0, ae(X));
    }, r.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, r.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, r.unstable_next = function(Q) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = P;
      }
      var Z = P;
      P = re;
      try {
        return Q();
      } finally {
        P = Z;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(Q, re) {
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
      var Z = P;
      P = Q;
      try {
        return re();
      } finally {
        P = Z;
      }
    }, r.unstable_scheduleCallback = function(Q, re, Z) {
      var g = r.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? g + Z : g) : Z = g, Q) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = Z + D, Q = { id: k++, callback: re, priorityLevel: Q, startTime: Z, expirationTime: D, sortIndex: -1 }, Z > g ? (Q.sortIndex = Z, s(R, Q), u(S) === null && Q === u(R) && (w ? (z(V), V = -1) : w = !0, ce(I, Z - g))) : (Q.sortIndex = D, s(S, Q), b || $ || (b = !0, ae(X))), Q;
    }, r.unstable_shouldYield = Te, r.unstable_wrapCallback = function(Q) {
      var re = P;
      return function() {
        var Z = P;
        P = re;
        try {
          return Q.apply(this, arguments);
        } finally {
          P = Z;
        }
      };
    };
  })(uo)), uo;
}
var vd;
function Cp() {
  return vd || (vd = 1, oo.exports = Np()), oo.exports;
}
var kd;
function _p() {
  if (kd) return Dt;
  kd = 1;
  var r = $o(), s = Cp();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, C = {};
  function P(e) {
    return S.call(C, e) ? !0 : S.call(k, e) ? !1 : R.test(e) ? C[e] = !0 : (k[e] = !0, !1);
  }
  function $(e, t, n, i) {
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
  function b(e, t, n, i) {
    if (t === null || typeof t > "u" || $(e, t, n, i)) return !0;
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
  function w(e, t, n, i, l, o, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = f;
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
  var z = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      N
    );
    E[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, N);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, N);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function F(e, t, n, i) {
    var l = E.hasOwnProperty(t) ? E[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, i) && (n = null), i || l === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = /* @__PURE__ */ Symbol.for("react.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), fe = /* @__PURE__ */ Symbol.for("react.provider"), Te = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), ue = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Object.assign, g;
  function D(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var me = !1;
  function we(e, t) {
    if (!e || me) return "";
    me = !0;
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
        } catch (A) {
          var i = A;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (A) {
          i = A;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          i = A;
        }
        e();
      }
    } catch (A) {
      if (A && i && typeof A.stack == "string") {
        for (var l = A.stack.split(`
`), o = i.stack.split(`
`), f = l.length - 1, v = o.length - 1; 1 <= f && 0 <= v && l[f] !== o[v]; ) v--;
        for (; 1 <= f && 0 <= v; f--, v--) if (l[f] !== o[v]) {
          if (f !== 1 || v !== 1)
            do
              if (f--, v--, 0 > v || l[f] !== o[v]) {
                var y = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= f && 0 <= v);
          break;
        }
      }
    } finally {
      me = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function G(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = we(e.type, !1), e;
      case 11:
        return e = we(e.type.render, !1), e;
      case 1:
        return e = we(e.type, !0), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case W:
        return "Portal";
      case te:
        return "Profiler";
      case V:
        return "StrictMode";
      case ue:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Te:
        return (e.displayName || "Context") + ".Consumer";
      case fe:
        return (e._context.displayName || "Context") + ".Provider";
      case ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : le(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return le(e(t));
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
        return le(t);
      case 8:
        return t === V ? "StrictMode" : "Mode";
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
  function ee(e) {
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
  function j(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Y(e) {
    var t = j(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        i = "" + f, o.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(f) {
        i = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ie(e) {
    e._valueTracker || (e._valueTracker = Y(e));
  }
  function se(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = j(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function de(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var n = t.checked;
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ce(e, t) {
    t = t.checked, t != null && F(e, "checked", t, !1);
  }
  function $e(e, t) {
    Ce(e, t);
    var n = ee(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Je(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || de(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Ke(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Xe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (We(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function ze(e, t) {
    var n = ee(t.value), i = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function nt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Mt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zt, sn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (zt = zt || document.createElement("div"), zt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Wt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ct = {
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
  }, Dn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function(e) {
    Dn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ct[t] = ct[e];
    });
  });
  function je(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ct.hasOwnProperty(e) && ct[e] ? ("" + t).trim() : t + "px";
  }
  function Qt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = je(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var _e = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Le(e, t) {
    if (t) {
      if (_e[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Re(e, t) {
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
  var Qe = null;
  function qe(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yt = null, xt = null, Vt = null;
  function pn(e) {
    if (e = Pr(e)) {
      if (typeof Yt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Ns(t), Yt(e.stateNode, e.type, t));
    }
  }
  function mn(e) {
    xt ? Vt ? Vt.push(e) : Vt = [e] : xt = e;
  }
  function zn() {
    if (xt) {
      var e = xt, t = Vt;
      if (Vt = xt = null, pn(e), t) for (e = 0; e < t.length; e++) pn(t[e]);
    }
  }
  function be(e, t) {
    return e(t);
  }
  function it() {
  }
  var Ye = !1;
  function mt(e, t, n) {
    if (Ye) return e(t, n);
    Ye = !0;
    try {
      return be(e, t, n);
    } finally {
      Ye = !1, (xt !== null || Vt !== null) && (it(), zn());
    }
  }
  function Pt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Ns(n);
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var vn = !1;
  if (p) try {
    var kn = {};
    Object.defineProperty(kn, "passive", { get: function() {
      vn = !0;
    } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    vn = !1;
  }
  function cr(e, t, n, i, l, o, f, v, y) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, A);
    } catch (U) {
      this.onError(U);
    }
  }
  var Nn = !1, ui = null, Mi = !1, Cn = null, dr = { onError: function(e) {
    Nn = !0, ui = e;
  } };
  function ts(e, t, n, i, l, o, f, v, y) {
    Nn = !1, ui = null, cr.apply(dr, arguments);
  }
  function Na(e, t, n, i, l, o, f, v, y) {
    if (ts.apply(this, arguments), Nn) {
      if (Nn) {
        var A = ui;
        Nn = !1, ui = null;
      } else throw Error(u(198));
      Mi || (Mi = !0, Cn = A);
    }
  }
  function _n(e) {
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
  function jt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ns(e) {
    if (_n(e) !== e) throw Error(u(188));
  }
  function is(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (i = l.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return ns(l), e;
          if (o === i) return ns(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) n = l, i = o;
      else {
        for (var f = !1, v = l.child; v; ) {
          if (v === n) {
            f = !0, n = l, i = o;
            break;
          }
          if (v === i) {
            f = !0, i = l, n = o;
            break;
          }
          v = v.sibling;
        }
        if (!f) {
          for (v = o.child; v; ) {
            if (v === n) {
              f = !0, n = o, i = l;
              break;
            }
            if (v === i) {
              f = !0, i = o, n = l;
              break;
            }
            v = v.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function rs(e) {
    return e = is(e), e !== null ? ss(e) : null;
  }
  function ss(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ss(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tn = s.unstable_scheduleCallback, Mn = s.unstable_cancelCallback, L = s.unstable_shouldYield, pe = s.unstable_requestPaint, Se = s.unstable_now, Jt = s.unstable_getCurrentPriorityLevel, lt = s.unstable_ImmediatePriority, ci = s.unstable_UserBlockingPriority, Vn = s.unstable_NormalPriority, di = s.unstable_LowPriority, Vo = s.unstable_IdlePriority, as = null, yn = null;
  function Ff(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : Df, bf = Math.log, If = Math.LN2;
  function Df(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bf(e) / If | 0) | 0;
  }
  var ls = 64, os = 4194304;
  function fr(e) {
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
  function us(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, o = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var v = f & ~l;
      v !== 0 ? i = fr(v) : (o &= f, o !== 0 && (i = fr(o)));
    } else f = n & ~l, f !== 0 ? i = fr(f) : o !== 0 && (i = fr(o));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - an(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function zf(e, t) {
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
  function Vf(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var f = 31 - an(o), v = 1 << f, y = l[f];
      y === -1 ? ((v & n) === 0 || (v & i) !== 0) && (l[f] = zf(v, t)) : y <= t && (e.expiredLanes |= v), o &= ~v;
    }
  }
  function Ca(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Bo() {
    var e = ls;
    return ls <<= 1, (ls & 4194240) === 0 && (ls = 64), e;
  }
  function _a(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function Bf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - an(n), o = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Ta(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - an(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Ue = 0;
  function Ko(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ho, Ma, Uo, Go, Wo, Pa = !1, cs = [], Bn = null, Kn = null, Hn = null, pr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Un = [], Kf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mr.delete(t.pointerId);
    }
  }
  function vr(e, t, n, i, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && Ma(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Hf(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = vr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = vr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = vr(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return pr.set(o, vr(pr.get(o) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, mr.set(o, vr(mr.get(o) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function Yo(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jt(n), t !== null) {
            e.blockedOn = t, Wo(e.priority, function() {
              Uo(n);
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
  function ds(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Qe = i, n.target.dispatchEvent(i), Qe = null;
      } else return t = Pr(n), t !== null && Ma(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Jo(e, t, n) {
    ds(e) && n.delete(t);
  }
  function Uf() {
    Pa = !1, Bn !== null && ds(Bn) && (Bn = null), Kn !== null && ds(Kn) && (Kn = null), Hn !== null && ds(Hn) && (Hn = null), pr.forEach(Jo), mr.forEach(Jo);
  }
  function kr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Pa || (Pa = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Uf)));
  }
  function yr(e) {
    function t(l) {
      return kr(l, e);
    }
    if (0 < cs.length) {
      kr(cs[0], e);
      for (var n = 1; n < cs.length; n++) {
        var i = cs[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && kr(Bn, e), Kn !== null && kr(Kn, e), Hn !== null && kr(Hn, e), pr.forEach(t), mr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Yo(n), n.blockedOn === null && Un.shift();
  }
  var Pi = I.ReactCurrentBatchConfig, fs = !0;
  function Gf(e, t, n, i) {
    var l = Ue, o = Pi.transition;
    Pi.transition = null;
    try {
      Ue = 1, Aa(e, t, n, i);
    } finally {
      Ue = l, Pi.transition = o;
    }
  }
  function Wf(e, t, n, i) {
    var l = Ue, o = Pi.transition;
    Pi.transition = null;
    try {
      Ue = 4, Aa(e, t, n, i);
    } finally {
      Ue = l, Pi.transition = o;
    }
  }
  function Aa(e, t, n, i) {
    if (fs) {
      var l = Ra(e, t, n, i);
      if (l === null) Ya(e, t, i, hs, n), Qo(e, i);
      else if (Hf(l, e, t, n, i)) i.stopPropagation();
      else if (Qo(e, i), t & 4 && -1 < Kf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Pr(l);
          if (o !== null && Ho(o), o = Ra(e, t, n, i), o === null && Ya(e, t, i, hs, n), o === l) break;
          l = o;
        }
        l !== null && i.stopPropagation();
      } else Ya(e, t, i, null, n);
    }
  }
  var hs = null;
  function Ra(e, t, n, i) {
    if (hs = null, e = qe(i), e = fi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = jt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return hs = e, null;
  }
  function Xo(e) {
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
        switch (Jt()) {
          case lt:
            return 1;
          case ci:
            return 4;
          case Vn:
          case di:
            return 16;
          case Vo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, La = null, ps = null;
  function Zo() {
    if (ps) return ps;
    var e, t = La, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === l[o - i]; i++) ;
    return ps = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function ms(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vs() {
    return !0;
  }
  function qo() {
    return !1;
  }
  function Bt(e) {
    function t(n, i, l, o, f) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(o) : o[v]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vs : qo, this.isPropagationStopped = qo, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vs);
    }, persist: function() {
    }, isPersistent: vs }), t;
  }
  var Ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $a = Bt(Ai), gr = Z({}, Ai, { view: 0, detail: 0 }), Qf = Bt(gr), Oa, Fa, xr, ks = Z({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ia, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Oa = e.screenX - xr.screenX, Fa = e.screenY - xr.screenY) : Fa = Oa = 0, xr = e), Oa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fa;
  } }), eu = Bt(ks), Yf = Z({}, ks, { dataTransfer: 0 }), Jf = Bt(Yf), Xf = Z({}, gr, { relatedTarget: 0 }), ba = Bt(Xf), Zf = Z({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = Bt(Zf), eh = Z({}, Ai, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), th = Bt(eh), nh = Z({}, Ai, { data: 0 }), tu = Bt(nh), ih = {
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
  }, rh = {
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
  }, sh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ah(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sh[e]) ? !!t[e] : !1;
  }
  function Ia() {
    return ah;
  }
  var lh = Z({}, gr, { key: function(e) {
    if (e.key) {
      var t = ih[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ia, charCode: function(e) {
    return e.type === "keypress" ? ms(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), oh = Bt(lh), uh = Z({}, ks, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nu = Bt(uh), ch = Z({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ia }), dh = Bt(ch), fh = Z({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hh = Bt(fh), ph = Z({}, ks, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mh = Bt(ph), vh = [9, 13, 27, 32], Da = p && "CompositionEvent" in window, jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var kh = p && "TextEvent" in window && !jr, iu = p && (!Da || jr && 8 < jr && 11 >= jr), ru = " ", su = !1;
  function au(e, t) {
    switch (e) {
      case "keyup":
        return vh.indexOf(t.keyCode) !== -1;
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
  function lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ri = !1;
  function yh(e, t) {
    switch (e) {
      case "compositionend":
        return lu(t);
      case "keypress":
        return t.which !== 32 ? null : (su = !0, ru);
      case "textInput":
        return e = t.data, e === ru && su ? null : e;
      default:
        return null;
    }
  }
  function gh(e, t) {
    if (Ri) return e === "compositionend" || !Da && au(e, t) ? (e = Zo(), ps = La = Gn = null, Ri = !1, e) : null;
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
        return iu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xh[e.type] : t === "textarea";
  }
  function uu(e, t, n, i) {
    mn(i), t = Ss(t, "onChange"), 0 < t.length && (n = new $a("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Sr = null, wr = null;
  function jh(e) {
    _u(e, 0);
  }
  function ys(e) {
    var t = bi(e);
    if (se(t)) return e;
  }
  function Sh(e, t) {
    if (e === "change") return t;
  }
  var cu = !1;
  if (p) {
    var za;
    if (p) {
      var Va = "oninput" in document;
      if (!Va) {
        var du = document.createElement("div");
        du.setAttribute("oninput", "return;"), Va = typeof du.oninput == "function";
      }
      za = Va;
    } else za = !1;
    cu = za && (!document.documentMode || 9 < document.documentMode);
  }
  function fu() {
    Sr && (Sr.detachEvent("onpropertychange", hu), wr = Sr = null);
  }
  function hu(e) {
    if (e.propertyName === "value" && ys(wr)) {
      var t = [];
      uu(t, wr, e, qe(e)), mt(jh, t);
    }
  }
  function wh(e, t, n) {
    e === "focusin" ? (fu(), Sr = t, wr = n, Sr.attachEvent("onpropertychange", hu)) : e === "focusout" && fu();
  }
  function Eh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ys(wr);
  }
  function Nh(e, t) {
    if (e === "click") return ys(t);
  }
  function Ch(e, t) {
    if (e === "input" || e === "change") return ys(t);
  }
  function _h(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : _h;
  function Er(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!S.call(t, l) || !ln(e[l], t[l])) return !1;
    }
    return !0;
  }
  function pu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = pu(e);
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
      n = pu(n);
    }
  }
  function vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ku() {
    for (var e = window, t = de(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = de(e.document);
    }
    return t;
  }
  function Ba(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Th(e) {
    var t = ku(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ba(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(i.start, l);
          i = i.end === void 0 ? o : Math.min(i.end, l), !e.extend && o > i && (l = i, i = o, o = l), l = mu(n, o);
          var f = mu(
            n,
            i
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > i ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Mh = p && "documentMode" in document && 11 >= document.documentMode, Li = null, Ka = null, Nr = null, Ha = !1;
  function yu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ha || Li == null || Li !== de(i) || (i = Li, "selectionStart" in i && Ba(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Nr && Er(Nr, i) || (Nr = i, i = Ss(Ka, "onSelect"), 0 < i.length && (t = new $a("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function gs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $i = { animationend: gs("Animation", "AnimationEnd"), animationiteration: gs("Animation", "AnimationIteration"), animationstart: gs("Animation", "AnimationStart"), transitionend: gs("Transition", "TransitionEnd") }, Ua = {}, gu = {};
  p && (gu = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function xs(e) {
    if (Ua[e]) return Ua[e];
    if (!$i[e]) return e;
    var t = $i[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in gu) return Ua[e] = t[n];
    return e;
  }
  var xu = xs("animationend"), ju = xs("animationiteration"), Su = xs("animationstart"), wu = xs("transitionend"), Eu = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Eu.set(e, t), h(t, [e]);
  }
  for (var Ga = 0; Ga < Nu.length; Ga++) {
    var Wa = Nu[Ga], Ph = Wa.toLowerCase(), Ah = Wa[0].toUpperCase() + Wa.slice(1);
    Wn(Ph, "on" + Ah);
  }
  Wn(xu, "onAnimationEnd"), Wn(ju, "onAnimationIteration"), Wn(Su, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(wu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
  function Cu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, Na(i, t, void 0, e), e.currentTarget = null;
  }
  function _u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var o = void 0;
        if (t) for (var f = i.length - 1; 0 <= f; f--) {
          var v = i[f], y = v.instance, A = v.currentTarget;
          if (v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Cu(l, v, A), o = y;
        }
        else for (f = 0; f < i.length; f++) {
          if (v = i[f], y = v.instance, A = v.currentTarget, v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Cu(l, v, A), o = y;
        }
      }
    }
    if (Mi) throw e = Cn, Mi = !1, Cn = null, e;
  }
  function et(e, t) {
    var n = t[tl];
    n === void 0 && (n = t[tl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Tu(t, e, 2, !1), n.add(i));
  }
  function Qa(e, t, n) {
    var i = 0;
    t && (i |= 4), Tu(n, e, i, t);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[js]) {
      e[js] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Rh.has(n) || Qa(n, !1, e), Qa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || (t[js] = !0, Qa("selectionchange", !1, t));
    }
  }
  function Tu(e, t, n, i) {
    switch (Xo(t)) {
      case 1:
        var l = Gf;
        break;
      case 4:
        l = Wf;
        break;
      default:
        l = Aa;
    }
    n = l.bind(null, t, n, e), l = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Ya(e, t, n, i, l) {
    var o = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var f = i.tag;
      if (f === 3 || f === 4) {
        var v = i.stateNode.containerInfo;
        if (v === l || v.nodeType === 8 && v.parentNode === l) break;
        if (f === 4) for (f = i.return; f !== null; ) {
          var y = f.tag;
          if ((y === 3 || y === 4) && (y = f.stateNode.containerInfo, y === l || y.nodeType === 8 && y.parentNode === l)) return;
          f = f.return;
        }
        for (; v !== null; ) {
          if (f = fi(v), f === null) return;
          if (y = f.tag, y === 5 || y === 6) {
            i = o = f;
            continue e;
          }
          v = v.parentNode;
        }
      }
      i = i.return;
    }
    mt(function() {
      var A = o, U = qe(n), J = [];
      e: {
        var K = Eu.get(e);
        if (K !== void 0) {
          var oe = $a, ve = e;
          switch (e) {
            case "keypress":
              if (ms(n) === 0) break e;
            case "keydown":
            case "keyup":
              oe = oh;
              break;
            case "focusin":
              ve = "focus", oe = ba;
              break;
            case "focusout":
              ve = "blur", oe = ba;
              break;
            case "beforeblur":
            case "afterblur":
              oe = ba;
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
              oe = eu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = dh;
              break;
            case xu:
            case ju:
            case Su:
              oe = qf;
              break;
            case wu:
              oe = hh;
              break;
            case "scroll":
              oe = Qf;
              break;
            case "wheel":
              oe = mh;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = th;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = nu;
          }
          var ge = (t & 4) !== 0, ut = !ge && e === "scroll", _ = ge ? K !== null ? K + "Capture" : null : K;
          ge = [];
          for (var x = A, T; x !== null; ) {
            T = x;
            var q = T.stateNode;
            if (T.tag === 5 && q !== null && (T = q, _ !== null && (q = Pt(x, _), q != null && ge.push(Tr(x, q, T)))), ut) break;
            x = x.return;
          }
          0 < ge.length && (K = new oe(K, ve, null, n, U), J.push({ event: K, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", oe = e === "mouseout" || e === "pointerout", K && n !== Qe && (ve = n.relatedTarget || n.fromElement) && (fi(ve) || ve[Pn])) break e;
          if ((oe || K) && (K = U.window === U ? U : (K = U.ownerDocument) ? K.defaultView || K.parentWindow : window, oe ? (ve = n.relatedTarget || n.toElement, oe = A, ve = ve ? fi(ve) : null, ve !== null && (ut = _n(ve), ve !== ut || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (oe = null, ve = A), oe !== ve)) {
            if (ge = eu, q = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ge = nu, q = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = oe == null ? K : bi(oe), T = ve == null ? K : bi(ve), K = new ge(q, x + "leave", oe, n, U), K.target = ut, K.relatedTarget = T, q = null, fi(U) === A && (ge = new ge(_, x + "enter", ve, n, U), ge.target = T, ge.relatedTarget = ut, q = ge), ut = q, oe && ve) t: {
              for (ge = oe, _ = ve, x = 0, T = ge; T; T = Oi(T)) x++;
              for (T = 0, q = _; q; q = Oi(q)) T++;
              for (; 0 < x - T; ) ge = Oi(ge), x--;
              for (; 0 < T - x; ) _ = Oi(_), T--;
              for (; x--; ) {
                if (ge === _ || _ !== null && ge === _.alternate) break t;
                ge = Oi(ge), _ = Oi(_);
              }
              ge = null;
            }
            else ge = null;
            oe !== null && Mu(J, K, oe, ge, !1), ve !== null && ut !== null && Mu(J, ut, ve, ge, !0);
          }
        }
        e: {
          if (K = A ? bi(A) : window, oe = K.nodeName && K.nodeName.toLowerCase(), oe === "select" || oe === "input" && K.type === "file") var xe = Sh;
          else if (ou(K)) if (cu) xe = Ch;
          else {
            xe = Eh;
            var Ee = wh;
          }
          else (oe = K.nodeName) && oe.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (xe = Nh);
          if (xe && (xe = xe(e, A))) {
            uu(J, xe, n, U);
            break e;
          }
          Ee && Ee(e, K, A), e === "focusout" && (Ee = K._wrapperState) && Ee.controlled && K.type === "number" && Be(K, "number", K.value);
        }
        switch (Ee = A ? bi(A) : window, e) {
          case "focusin":
            (ou(Ee) || Ee.contentEditable === "true") && (Li = Ee, Ka = A, Nr = null);
            break;
          case "focusout":
            Nr = Ka = Li = null;
            break;
          case "mousedown":
            Ha = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ha = !1, yu(J, n, U);
            break;
          case "selectionchange":
            if (Mh) break;
          case "keydown":
          case "keyup":
            yu(J, n, U);
        }
        var Ne;
        if (Da) e: {
          switch (e) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else Ri ? au(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (iu && n.locale !== "ko" && (Ri || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Ri && (Ne = Zo()) : (Gn = U, La = "value" in Gn ? Gn.value : Gn.textContent, Ri = !0)), Ee = Ss(A, Pe), 0 < Ee.length && (Pe = new tu(Pe, e, null, n, U), J.push({ event: Pe, listeners: Ee }), Ne ? Pe.data = Ne : (Ne = lu(n), Ne !== null && (Pe.data = Ne)))), (Ne = kh ? yh(e, n) : gh(e, n)) && (A = Ss(A, "onBeforeInput"), 0 < A.length && (U = new tu("onBeforeInput", "beforeinput", null, n, U), J.push({ event: U, listeners: A }), U.data = Ne));
      }
      _u(J, t);
    });
  }
  function Tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ss(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Pt(e, n), o != null && i.unshift(Tr(e, o, l)), o = Pt(e, t), o != null && i.push(Tr(e, o, l))), e = e.return;
    }
    return i;
  }
  function Oi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Mu(e, t, n, i, l) {
    for (var o = t._reactName, f = []; n !== null && n !== i; ) {
      var v = n, y = v.alternate, A = v.stateNode;
      if (y !== null && y === i) break;
      v.tag === 5 && A !== null && (v = A, l ? (y = Pt(n, o), y != null && f.unshift(Tr(n, y, v))) : l || (y = Pt(n, o), y != null && f.push(Tr(n, y, v)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Lh = /\r\n?/g, $h = /\u0000|\uFFFD/g;
  function Pu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lh, `
`).replace($h, "");
  }
  function ws(e, t, n) {
    if (t = Pu(t), Pu(e) !== t && n) throw Error(u(425));
  }
  function Es() {
  }
  var Ja = null, Xa = null;
  function Za(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var qa = typeof setTimeout == "function" ? setTimeout : void 0, Oh = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, Fh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
    return Au.resolve(null).then(e).catch(bh);
  } : qa;
  function bh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function el(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), yr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    yr(t);
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
  function Ru(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, Mr = "__reactProps$" + Fi, Pn = "__reactContainer$" + Fi, tl = "__reactEvents$" + Fi, Ih = "__reactListeners$" + Fi, Dh = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ru(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = Ru(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Pr(e) {
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function bi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Ns(e) {
    return e[Mr] || null;
  }
  var nl = [], Ii = -1;
  function Yn(e) {
    return { current: e };
  }
  function tt(e) {
    0 > Ii || (e.current = nl[Ii], nl[Ii] = null, Ii--);
  }
  function Ze(e, t) {
    Ii++, nl[Ii] = e.current, e.current = t;
  }
  var Jn = {}, Nt = Yn(Jn), $t = Yn(!1), hi = Jn;
  function Di(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Cs() {
    tt($t), tt(Nt);
  }
  function Lu(e, t, n) {
    if (Nt.current !== Jn) throw Error(u(168));
    Ze(Nt, t), Ze($t, n);
  }
  function $u(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, B(e) || "Unknown", l));
    return Z({}, n, i);
  }
  function _s(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, hi = Nt.current, Ze(Nt, e), Ze($t, $t.current), !0;
  }
  function Ou(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    n ? (e = $u(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, tt($t), tt(Nt), Ze(Nt, e)) : tt($t), Ze($t, n);
  }
  var An = null, Ts = !1, il = !1;
  function Fu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function zh(e) {
    Ts = !0, Fu(e);
  }
  function Xn() {
    if (!il && An !== null) {
      il = !0;
      var e = 0, t = Ue;
      try {
        var n = An;
        for (Ue = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, Ts = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), Tn(lt, Xn), l;
      } finally {
        Ue = t, il = !1;
      }
    }
    return null;
  }
  var zi = [], Vi = 0, Ms = null, Ps = 0, Xt = [], Zt = 0, pi = null, Rn = 1, Ln = "";
  function mi(e, t) {
    zi[Vi++] = Ps, zi[Vi++] = Ms, Ms = e, Ps = t;
  }
  function bu(e, t, n) {
    Xt[Zt++] = Rn, Xt[Zt++] = Ln, Xt[Zt++] = pi, pi = e;
    var i = Rn;
    e = Ln;
    var l = 32 - an(i) - 1;
    i &= ~(1 << l), n += 1;
    var o = 32 - an(t) + l;
    if (30 < o) {
      var f = l - l % 5;
      o = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, Rn = 1 << 32 - an(t) + l | n << l | i, Ln = o + e;
    } else Rn = 1 << o | n << l | i, Ln = e;
  }
  function rl(e) {
    e.return !== null && (mi(e, 1), bu(e, 1, 0));
  }
  function sl(e) {
    for (; e === Ms; ) Ms = zi[--Vi], zi[Vi] = null, Ps = zi[--Vi], zi[Vi] = null;
    for (; e === pi; ) pi = Xt[--Zt], Xt[Zt] = null, Ln = Xt[--Zt], Xt[Zt] = null, Rn = Xt[--Zt], Xt[Zt] = null;
  }
  var Kt = null, Ht = null, rt = !1, on = null;
  function Iu(e, t) {
    var n = nn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Du(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: Rn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function al(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ll(e) {
    if (rt) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!Du(e, t)) {
          if (al(e)) throw Error(u(418));
          t = Qn(n.nextSibling);
          var i = Kt;
          t && Du(e, t) ? Iu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Kt = e);
        }
      } else {
        if (al(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Kt = e;
      }
    }
  }
  function zu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function As(e) {
    if (e !== Kt) return !1;
    if (!rt) return zu(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Za(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (al(e)) throw Vu(), Error(u(418));
      for (; t; ) Iu(e, t), t = Qn(t.nextSibling);
    }
    if (zu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ht = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = Kt ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vu() {
    for (var e = Ht; e; ) e = Qn(e.nextSibling);
  }
  function Bi() {
    Ht = Kt = null, rt = !1;
  }
  function ol(e) {
    on === null ? on = [e] : on.push(e);
  }
  var Vh = I.ReactCurrentBatchConfig;
  function Ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(u(147, e));
        var l = i, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(f) {
          var v = l.refs;
          f === null ? delete v[o] : v[o] = f;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Rs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Bu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ku(e) {
    function t(_, x) {
      if (e) {
        var T = _.deletions;
        T === null ? (_.deletions = [x], _.flags |= 16) : T.push(x);
      }
    }
    function n(_, x) {
      if (!e) return null;
      for (; x !== null; ) t(_, x), x = x.sibling;
      return null;
    }
    function i(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function l(_, x) {
      return _ = si(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, T) {
      return _.index = T, e ? (T = _.alternate, T !== null ? (T = T.index, T < x ? (_.flags |= 2, x) : T) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function f(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function v(_, x, T, q) {
      return x === null || x.tag !== 6 ? (x = ql(T, _.mode, q), x.return = _, x) : (x = l(x, T), x.return = _, x);
    }
    function y(_, x, T, q) {
      var xe = T.type;
      return xe === M ? U(_, x, T.props.children, q, T.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Bu(xe) === x.type) ? (q = l(x, T.props), q.ref = Ar(_, x, T), q.return = _, q) : (q = na(T.type, T.key, T.props, null, _.mode, q), q.ref = Ar(_, x, T), q.return = _, q);
    }
    function A(_, x, T, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== T.containerInfo || x.stateNode.implementation !== T.implementation ? (x = eo(T, _.mode, q), x.return = _, x) : (x = l(x, T.children || []), x.return = _, x);
    }
    function U(_, x, T, q, xe) {
      return x === null || x.tag !== 7 ? (x = wi(T, _.mode, q, xe), x.return = _, x) : (x = l(x, T), x.return = _, x);
    }
    function J(_, x, T) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = ql("" + x, _.mode, T), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return T = na(x.type, x.key, x.props, null, _.mode, T), T.ref = Ar(_, null, x), T.return = _, T;
          case W:
            return x = eo(x, _.mode, T), x.return = _, x;
          case ae:
            var q = x._init;
            return J(_, q(x._payload), T);
        }
        if (We(x) || re(x)) return x = wi(x, _.mode, T, null), x.return = _, x;
        Rs(_, x);
      }
      return null;
    }
    function K(_, x, T, q) {
      var xe = x !== null ? x.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return xe !== null ? null : v(_, x, "" + T, q);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case X:
            return T.key === xe ? y(_, x, T, q) : null;
          case W:
            return T.key === xe ? A(_, x, T, q) : null;
          case ae:
            return xe = T._init, K(
              _,
              x,
              xe(T._payload),
              q
            );
        }
        if (We(T) || re(T)) return xe !== null ? null : U(_, x, T, q, null);
        Rs(_, T);
      }
      return null;
    }
    function oe(_, x, T, q, xe) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return _ = _.get(T) || null, v(x, _, "" + q, xe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case X:
            return _ = _.get(q.key === null ? T : q.key) || null, y(x, _, q, xe);
          case W:
            return _ = _.get(q.key === null ? T : q.key) || null, A(x, _, q, xe);
          case ae:
            var Ee = q._init;
            return oe(_, x, T, Ee(q._payload), xe);
        }
        if (We(q) || re(q)) return _ = _.get(T) || null, U(x, _, q, xe, null);
        Rs(x, q);
      }
      return null;
    }
    function ve(_, x, T, q) {
      for (var xe = null, Ee = null, Ne = x, Pe = x = 0, yt = null; Ne !== null && Pe < T.length; Pe++) {
        Ne.index > Pe ? (yt = Ne, Ne = null) : yt = Ne.sibling;
        var Ve = K(_, Ne, T[Pe], q);
        if (Ve === null) {
          Ne === null && (Ne = yt);
          break;
        }
        e && Ne && Ve.alternate === null && t(_, Ne), x = o(Ve, x, Pe), Ee === null ? xe = Ve : Ee.sibling = Ve, Ee = Ve, Ne = yt;
      }
      if (Pe === T.length) return n(_, Ne), rt && mi(_, Pe), xe;
      if (Ne === null) {
        for (; Pe < T.length; Pe++) Ne = J(_, T[Pe], q), Ne !== null && (x = o(Ne, x, Pe), Ee === null ? xe = Ne : Ee.sibling = Ne, Ee = Ne);
        return rt && mi(_, Pe), xe;
      }
      for (Ne = i(_, Ne); Pe < T.length; Pe++) yt = oe(Ne, _, Pe, T[Pe], q), yt !== null && (e && yt.alternate !== null && Ne.delete(yt.key === null ? Pe : yt.key), x = o(yt, x, Pe), Ee === null ? xe = yt : Ee.sibling = yt, Ee = yt);
      return e && Ne.forEach(function(ai) {
        return t(_, ai);
      }), rt && mi(_, Pe), xe;
    }
    function ge(_, x, T, q) {
      var xe = re(T);
      if (typeof xe != "function") throw Error(u(150));
      if (T = xe.call(T), T == null) throw Error(u(151));
      for (var Ee = xe = null, Ne = x, Pe = x = 0, yt = null, Ve = T.next(); Ne !== null && !Ve.done; Pe++, Ve = T.next()) {
        Ne.index > Pe ? (yt = Ne, Ne = null) : yt = Ne.sibling;
        var ai = K(_, Ne, Ve.value, q);
        if (ai === null) {
          Ne === null && (Ne = yt);
          break;
        }
        e && Ne && ai.alternate === null && t(_, Ne), x = o(ai, x, Pe), Ee === null ? xe = ai : Ee.sibling = ai, Ee = ai, Ne = yt;
      }
      if (Ve.done) return n(
        _,
        Ne
      ), rt && mi(_, Pe), xe;
      if (Ne === null) {
        for (; !Ve.done; Pe++, Ve = T.next()) Ve = J(_, Ve.value, q), Ve !== null && (x = o(Ve, x, Pe), Ee === null ? xe = Ve : Ee.sibling = Ve, Ee = Ve);
        return rt && mi(_, Pe), xe;
      }
      for (Ne = i(_, Ne); !Ve.done; Pe++, Ve = T.next()) Ve = oe(Ne, _, Pe, Ve.value, q), Ve !== null && (e && Ve.alternate !== null && Ne.delete(Ve.key === null ? Pe : Ve.key), x = o(Ve, x, Pe), Ee === null ? xe = Ve : Ee.sibling = Ve, Ee = Ve);
      return e && Ne.forEach(function(xp) {
        return t(_, xp);
      }), rt && mi(_, Pe), xe;
    }
    function ut(_, x, T, q) {
      if (typeof T == "object" && T !== null && T.type === M && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case X:
            e: {
              for (var xe = T.key, Ee = x; Ee !== null; ) {
                if (Ee.key === xe) {
                  if (xe = T.type, xe === M) {
                    if (Ee.tag === 7) {
                      n(_, Ee.sibling), x = l(Ee, T.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (Ee.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Bu(xe) === Ee.type) {
                    n(_, Ee.sibling), x = l(Ee, T.props), x.ref = Ar(_, Ee, T), x.return = _, _ = x;
                    break e;
                  }
                  n(_, Ee);
                  break;
                } else t(_, Ee);
                Ee = Ee.sibling;
              }
              T.type === M ? (x = wi(T.props.children, _.mode, q, T.key), x.return = _, _ = x) : (q = na(T.type, T.key, T.props, null, _.mode, q), q.ref = Ar(_, x, T), q.return = _, _ = q);
            }
            return f(_);
          case W:
            e: {
              for (Ee = T.key; x !== null; ) {
                if (x.key === Ee) if (x.tag === 4 && x.stateNode.containerInfo === T.containerInfo && x.stateNode.implementation === T.implementation) {
                  n(_, x.sibling), x = l(x, T.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  n(_, x);
                  break;
                }
                else t(_, x);
                x = x.sibling;
              }
              x = eo(T, _.mode, q), x.return = _, _ = x;
            }
            return f(_);
          case ae:
            return Ee = T._init, ut(_, x, Ee(T._payload), q);
        }
        if (We(T)) return ve(_, x, T, q);
        if (re(T)) return ge(_, x, T, q);
        Rs(_, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, x !== null && x.tag === 6 ? (n(_, x.sibling), x = l(x, T), x.return = _, _ = x) : (n(_, x), x = ql(T, _.mode, q), x.return = _, _ = x), f(_)) : n(_, x);
    }
    return ut;
  }
  var Ki = Ku(!0), Hu = Ku(!1), Ls = Yn(null), $s = null, Hi = null, ul = null;
  function cl() {
    ul = Hi = $s = null;
  }
  function dl(e) {
    var t = Ls.current;
    tt(Ls), e._currentValue = t;
  }
  function fl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ui(e, t) {
    $s = e, ul = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (ul !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if ($s === null) throw Error(u(308));
      Hi = e, $s.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var vi = null;
  function hl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function Uu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, hl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, $n(e, i);
  }
  function $n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function pl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (De & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, $n(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, hl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, $n(e, n);
  }
  function Os(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ta(e, n);
    }
  }
  function Wu(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = f : o = o.next = f, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fs(e, t, n, i) {
    var l = e.updateQueue;
    Zn = !1;
    var o = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var y = v, A = y.next;
      y.next = null, f === null ? o = A : f.next = A, f = y;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, v = U.lastBaseUpdate, v !== f && (v === null ? U.firstBaseUpdate = A : v.next = A, U.lastBaseUpdate = y));
    }
    if (o !== null) {
      var J = l.baseState;
      f = 0, U = A = y = null, v = o;
      do {
        var K = v.lane, oe = v.eventTime;
        if ((i & K) === K) {
          U !== null && (U = U.next = {
            eventTime: oe,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var ve = e, ge = v;
            switch (K = t, oe = n, ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  J = ve.call(oe, J, K);
                  break e;
                }
                J = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, K = typeof ve == "function" ? ve.call(oe, J, K) : ve, K == null) break e;
                J = Z({}, J, K);
                break e;
              case 2:
                Zn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, K = l.effects, K === null ? l.effects = [v] : K.push(v));
        } else oe = { eventTime: oe, lane: K, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, U === null ? (A = U = oe, y = J) : U = U.next = oe, f |= K;
        if (v = v.next, v === null) {
          if (v = l.shared.pending, v === null) break;
          K = v, v = K.next, K.next = null, l.lastBaseUpdate = K, l.shared.pending = null;
        }
      } while (!0);
      if (U === null && (y = J), l.baseState = y, l.firstBaseUpdate = A, l.lastBaseUpdate = U, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      gi |= f, e.lanes = f, e.memoizedState = J;
    }
  }
  function Qu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(u(191, l));
        l.call(i);
      }
    }
  }
  var Rr = {}, xn = Yn(Rr), Lr = Yn(Rr), $r = Yn(Rr);
  function ki(e) {
    if (e === Rr) throw Error(u(174));
    return e;
  }
  function ml(e, t) {
    switch (Ze($r, t), Ze(Lr, e), Ze(xn, Rr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gt(t, e);
    }
    tt(xn), Ze(xn, t);
  }
  function Gi() {
    tt(xn), tt(Lr), tt($r);
  }
  function Yu(e) {
    ki($r.current);
    var t = ki(xn.current), n = Gt(t, e.type);
    t !== n && (Ze(Lr, e), Ze(xn, n));
  }
  function vl(e) {
    Lr.current === e && (tt(xn), tt(Lr));
  }
  var st = Yn(0);
  function bs(e) {
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
  var kl = [];
  function yl() {
    for (var e = 0; e < kl.length; e++) kl[e]._workInProgressVersionPrimary = null;
    kl.length = 0;
  }
  var Is = I.ReactCurrentDispatcher, gl = I.ReactCurrentBatchConfig, yi = 0, at = null, ht = null, vt = null, Ds = !1, Or = !1, Fr = 0, Bh = 0;
  function Ct() {
    throw Error(u(321));
  }
  function xl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function jl(e, t, n, i, l, o) {
    if (yi = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e === null || e.memoizedState === null ? Gh : Wh, e = n(i, l), Or) {
      o = 0;
      do {
        if (Or = !1, Fr = 0, 25 <= o) throw Error(u(301));
        o += 1, vt = ht = null, t.updateQueue = null, Is.current = Qh, e = n(i, l);
      } while (Or);
    }
    if (Is.current = Bs, t = ht !== null && ht.next !== null, yi = 0, vt = ht = at = null, Ds = !1, t) throw Error(u(300));
    return e;
  }
  function Sl() {
    var e = Fr !== 0;
    return Fr = 0, e;
  }
  function jn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? at.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function en() {
    if (ht === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ht.next;
    var t = vt === null ? at.memoizedState : vt.next;
    if (t !== null) vt = t, ht = e;
    else {
      if (e === null) throw Error(u(310));
      ht = e, e = { memoizedState: ht.memoizedState, baseState: ht.baseState, baseQueue: ht.baseQueue, queue: ht.queue, next: null }, vt === null ? at.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function br(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wl(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = ht, l = i.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = o.next, o.next = f;
      }
      i.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, i = i.baseState;
      var v = f = null, y = null, A = o;
      do {
        var U = A.lane;
        if ((yi & U) === U) y !== null && (y = y.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), i = A.hasEagerState ? A.eagerState : e(i, A.action);
        else {
          var J = {
            lane: U,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          y === null ? (v = y = J, f = i) : y = y.next = J, at.lanes |= U, gi |= U;
        }
        A = A.next;
      } while (A !== null && A !== o);
      y === null ? f = i : y.next = v, ln(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = f, t.baseQueue = y, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, at.lanes |= o, gi |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function El(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        o = e(o, f.action), f = f.next;
      while (f !== l);
      ln(o, t.memoizedState) || (Ft = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, i];
  }
  function Ju() {
  }
  function Xu(e, t) {
    var n = at, i = en(), l = t(), o = !ln(i.memoizedState, l);
    if (o && (i.memoizedState = l, Ft = !0), i = i.queue, Nl(ec.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || vt !== null && vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ir(9, qu.bind(null, n, i, l, t), void 0, null), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || Zu(n, t, l);
    }
    return l;
  }
  function Zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function qu(e, t, n, i) {
    t.value = n, t.getSnapshot = i, tc(t) && nc(e);
  }
  function ec(e, t, n) {
    return n(function() {
      tc(t) && nc(e);
    });
  }
  function tc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function nc(e) {
    var t = $n(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function ic(e) {
    var t = jn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: br, lastRenderedState: e }, t.queue = e, e = e.dispatch = Uh.bind(null, at, e), [t.memoizedState, e];
  }
  function Ir(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function rc() {
    return en().memoizedState;
  }
  function zs(e, t, n, i) {
    var l = jn();
    at.flags |= e, l.memoizedState = Ir(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Vs(e, t, n, i) {
    var l = en();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (ht !== null) {
      var f = ht.memoizedState;
      if (o = f.destroy, i !== null && xl(i, f.deps)) {
        l.memoizedState = Ir(t, n, o, i);
        return;
      }
    }
    at.flags |= e, l.memoizedState = Ir(1 | t, n, o, i);
  }
  function sc(e, t) {
    return zs(8390656, 8, e, t);
  }
  function Nl(e, t) {
    return Vs(2048, 8, e, t);
  }
  function ac(e, t) {
    return Vs(4, 2, e, t);
  }
  function lc(e, t) {
    return Vs(4, 4, e, t);
  }
  function oc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function uc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vs(4, 4, oc.bind(null, t, e), n);
  }
  function Cl() {
  }
  function cc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && xl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function dc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && xl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function fc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (ln(n, t) || (n = Bo(), at.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function Kh(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = gl.transition;
    gl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, gl.transition = i;
    }
  }
  function hc() {
    return en().memoizedState;
  }
  function Hh(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, pc(e)) mc(t, n);
    else if (n = Uu(e, t, n, i), n !== null) {
      var l = Rt();
      fn(n, e, i, l), vc(n, t, i);
    }
  }
  function Uh(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pc(e)) mc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var f = t.lastRenderedState, v = o(f, n);
        if (l.hasEagerState = !0, l.eagerState = v, ln(v, f)) {
          var y = t.interleaved;
          y === null ? (l.next = l, hl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Uu(e, t, l, i), n !== null && (l = Rt(), fn(n, e, i, l), vc(n, t, i));
    }
  }
  function pc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function mc(e, t) {
    Or = Ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ta(e, n);
    }
  }
  var Bs = { readContext: qt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Gh = { readContext: qt, useCallback: function(e, t) {
    return jn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: sc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zs(
      4194308,
      4,
      oc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return zs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return zs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = jn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = jn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Hh.bind(null, at, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = jn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ic, useDebugValue: Cl, useDeferredValue: function(e) {
    return jn().memoizedState = e;
  }, useTransition: function() {
    var e = ic(!1), t = e[0];
    return e = Kh.bind(null, e[1]), jn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = at, l = jn();
    if (rt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || Zu(i, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, sc(ec.bind(
      null,
      i,
      o,
      e
    ), [e]), i.flags |= 2048, Ir(9, qu.bind(null, i, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = jn(), t = kt.identifierPrefix;
    if (rt) {
      var n = Ln, i = Rn;
      n = (i & ~(1 << 32 - an(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Bh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Wh = {
    readContext: qt,
    useCallback: cc,
    useContext: qt,
    useEffect: Nl,
    useImperativeHandle: uc,
    useInsertionEffect: ac,
    useLayoutEffect: lc,
    useMemo: dc,
    useReducer: wl,
    useRef: rc,
    useState: function() {
      return wl(br);
    },
    useDebugValue: Cl,
    useDeferredValue: function(e) {
      var t = en();
      return fc(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = wl(br)[0], t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: Xu,
    useId: hc,
    unstable_isNewReconciler: !1
  }, Qh = { readContext: qt, useCallback: cc, useContext: qt, useEffect: Nl, useImperativeHandle: uc, useInsertionEffect: ac, useLayoutEffect: lc, useMemo: dc, useReducer: El, useRef: rc, useState: function() {
    return El(br);
  }, useDebugValue: Cl, useDeferredValue: function(e) {
    var t = en();
    return ht === null ? t.memoizedState = e : fc(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = El(br)[0], t = en().memoizedState;
    return [e, t];
  }, useMutableSource: Ju, useSyncExternalStore: Xu, useId: hc, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function _l(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ks = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Rt(), l = ii(e), o = On(i, l);
    o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, i), Os(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Rt(), l = ii(e), o = On(i, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, i), Os(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Rt(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (fn(t, e, i, n), Os(t, e, i));
  } };
  function kc(e, t, n, i, l, o, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, o, f) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, i) || !Er(l, o) : !0;
  }
  function yc(e, t, n) {
    var i = !1, l = Jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = qt(o) : (l = Ot(t) ? hi : Nt.current, i = t.contextTypes, o = (i = i != null) ? Di(e, l) : Jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ks, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function gc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, pl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = qt(o) : (o = Ot(t) ? hi : Nt.current, l.context = Di(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (_l(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ks.enqueueReplaceState(l, l.state, null), Fs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wi(e, t) {
    try {
      var n = "", i = t;
      do
        n += G(i), i = i.return;
      while (i);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ml(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Pl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Yh = typeof WeakMap == "function" ? WeakMap : Map;
  function xc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      Js || (Js = !0, Ul = i), Pl(e, t);
    }, n;
  }
  function jc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        Pl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Pl(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Sc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Yh();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = up.bind(null, e, t, n), t.then(e, e));
  }
  function wc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ec(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Jh = I.ReactCurrentOwner, Ft = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Hu(t, null, n, i) : Ki(t, e.child, n, i);
  }
  function Nc(e, t, n, i, l) {
    n = n.render;
    var o = t.ref;
    return Ui(t, l), i = jl(e, t, n, i, o, l), n = Sl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (rt && n && rl(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Cc(e, t, n, i, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, _c(e, t, o, i, l)) : (e = na(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Er, n(f, i) && e.ref === t.ref) return Fn(e, t, l);
    }
    return t.flags |= 1, e = si(o, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _c(e, t, n, i, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Er(o, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, Fn(e, t, l);
    }
    return Al(e, t, n, i, l);
  }
  function Tc(e, t, n) {
    var i = t.pendingProps, l = i.children, o = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(Yi, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(Yi, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = o !== null ? o.baseLanes : n, Ze(Yi, Ut), Ut |= i;
    }
    else o !== null ? (i = o.baseLanes | n, t.memoizedState = null) : i = n, Ze(Yi, Ut), Ut |= i;
    return At(e, t, l, n), t.child;
  }
  function Mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Al(e, t, n, i, l) {
    var o = Ot(n) ? hi : Nt.current;
    return o = Di(t, o), Ui(t, l), n = jl(e, t, n, i, o, l), i = Sl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (rt && i && rl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Pc(e, t, n, i, l) {
    if (Ot(n)) {
      var o = !0;
      _s(t);
    } else o = !1;
    if (Ui(t, l), t.stateNode === null) Us(e, t), yc(t, n, i), Tl(t, n, i, l), i = !0;
    else if (e === null) {
      var f = t.stateNode, v = t.memoizedProps;
      f.props = v;
      var y = f.context, A = n.contextType;
      typeof A == "object" && A !== null ? A = qt(A) : (A = Ot(n) ? hi : Nt.current, A = Di(t, A));
      var U = n.getDerivedStateFromProps, J = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      J || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== i || y !== A) && gc(t, f, i, A), Zn = !1;
      var K = t.memoizedState;
      f.state = K, Fs(t, i, f, l), y = t.memoizedState, v !== i || K !== y || $t.current || Zn ? (typeof U == "function" && (_l(t, n, U, i), y = t.memoizedState), (v = Zn || kc(t, n, v, i, K, y, A)) ? (J || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), f.props = i, f.state = y, f.context = A, i = v) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Gu(e, t), v = t.memoizedProps, A = t.type === t.elementType ? v : un(t.type, v), f.props = A, J = t.pendingProps, K = f.context, y = n.contextType, typeof y == "object" && y !== null ? y = qt(y) : (y = Ot(n) ? hi : Nt.current, y = Di(t, y));
      var oe = n.getDerivedStateFromProps;
      (U = typeof oe == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== J || K !== y) && gc(t, f, i, y), Zn = !1, K = t.memoizedState, f.state = K, Fs(t, i, f, l);
      var ve = t.memoizedState;
      v !== J || K !== ve || $t.current || Zn ? (typeof oe == "function" && (_l(t, n, oe, i), ve = t.memoizedState), (A = Zn || kc(t, n, A, i, K, ve, y) || !1) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ve, y), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, ve, y)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), f.props = i, f.state = ve, f.context = y, i = A) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Rl(e, t, n, i, o, l);
  }
  function Rl(e, t, n, i, l, o) {
    Mc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return l && Ou(t, n, !1), Fn(e, t, o);
    i = t.stateNode, Jh.current = t;
    var v = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = Ki(t, e.child, null, o), t.child = Ki(t, null, v, o)) : At(e, t, v, o), t.memoizedState = i.state, l && Ou(t, n, !0), t.child;
  }
  function Ac(e) {
    var t = e.stateNode;
    t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), ml(e, t.containerInfo);
  }
  function Rc(e, t, n, i, l) {
    return Bi(), ol(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lc(e, t, n) {
    var i = t.pendingProps, l = st.current, o = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(st, l & 1), e === null)
      return ll(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, f = { mode: "hidden", children: f }, (i & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = f) : o = ia(f, i, 0, null), e = wi(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $l(n), t.memoizedState = Ll, e) : Ol(t, f));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return Xh(e, t, f, i, v, l, n);
    if (o) {
      o = i.fallback, f = t.mode, l = e.child, v = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (f & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = si(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? o = si(v, o) : (o = wi(o, f, n, null), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, f = e.child.memoizedState, f = f === null ? $l(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, o.memoizedState = f, o.childLanes = e.childLanes & ~n, t.memoizedState = Ll, i;
    }
    return o = e.child, e = o.sibling, i = si(o, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Ol(e, t) {
    return t = ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hs(e, t, n, i) {
    return i !== null && ol(i), Ki(t, e.child, null, n), e = Ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xh(e, t, n, i, l, o, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ml(Error(u(422))), Hs(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = i.fallback, l = t.mode, i = ia({ mode: "visible", children: i.children }, l, 0, null), o = wi(o, l, f, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, (t.mode & 1) !== 0 && Ki(t, e.child, null, f), t.child.memoizedState = $l(f), t.memoizedState = Ll, o);
    if ((t.mode & 1) === 0) return Hs(e, t, f, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var v = i.dgst;
      return i = v, o = Error(u(419)), i = Ml(o, i, void 0), Hs(e, t, f, i);
    }
    if (v = (f & e.childLanes) !== 0, Ft || v) {
      if (i = kt, i !== null) {
        switch (f & -f) {
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
        l = (l & (i.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, $n(e, l), fn(i, e, l, -1));
      }
      return Xl(), i = Ml(Error(u(421))), Hs(e, t, f, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ht = Qn(l.nextSibling), Kt = t, rt = !0, on = null, e !== null && (Xt[Zt++] = Rn, Xt[Zt++] = Ln, Xt[Zt++] = pi, Rn = e.id, Ln = e.overflow, pi = t), t = Ol(t, i.children), t.flags |= 4096, t);
  }
  function $c(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), fl(e.return, t, n);
  }
  function Fl(e, t, n, i, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = l);
  }
  function Oc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, o = i.tail;
    if (At(e, t, i.children, n), i = st.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $c(e, n, t);
        else if (e.tag === 19) $c(e, n, t);
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
    if (Ze(st, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Fl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && bs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Fl(t, !0, n, null, o);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Us(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Zh(e, t, n) {
    switch (t.tag) {
      case 3:
        Ac(t), Bi();
        break;
      case 5:
        Yu(t);
        break;
      case 1:
        Ot(t.type) && _s(t);
        break;
      case 4:
        ml(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ze(Ls, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ze(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lc(e, t, n) : (Ze(st, st.current & 1), e = Fn(e, t, n), e !== null ? e.sibling : null);
        Ze(st, st.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Oc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ze(st, st.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Tc(e, t, n);
    }
    return Fn(e, t, n);
  }
  var Fc, bl, bc, Ic;
  Fc = function(e, t) {
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
  }, bl = function() {
  }, bc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(xn.current);
      var o = null;
      switch (n) {
        case "input":
          l = ke(e, l), i = ke(e, i), o = [];
          break;
        case "select":
          l = Z({}, l, { value: void 0 }), i = Z({}, i, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = gt(e, l), i = gt(e, i), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Es);
      }
      Le(n, i);
      var f;
      n = null;
      for (A in l) if (!i.hasOwnProperty(A) && l.hasOwnProperty(A) && l[A] != null) if (A === "style") {
        var v = l[A];
        for (f in v) v.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (d.hasOwnProperty(A) ? o || (o = []) : (o = o || []).push(A, null));
      for (A in i) {
        var y = i[A];
        if (v = l?.[A], i.hasOwnProperty(A) && y !== v && (y != null || v != null)) if (A === "style") if (v) {
          for (f in v) !v.hasOwnProperty(f) || y && y.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in y) y.hasOwnProperty(f) && v[f] !== y[f] && (n || (n = {}), n[f] = y[f]);
        } else n || (o || (o = []), o.push(
          A,
          n
        )), n = y;
        else A === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, v = v ? v.__html : void 0, y != null && v !== y && (o = o || []).push(A, y)) : A === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(A, "" + y) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (d.hasOwnProperty(A) ? (y != null && A === "onScroll" && et("scroll", e), o || v === y || (o = [])) : (o = o || []).push(A, y));
      }
      n && (o = o || []).push("style", n);
      var A = o;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, Ic = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Dr(e, t) {
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
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function qh(e, t, n) {
    var i = t.pendingProps;
    switch (sl(t), t.tag) {
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
        return _t(t), null;
      case 1:
        return Ot(t.type) && Cs(), _t(t), null;
      case 3:
        return i = t.stateNode, Gi(), tt($t), tt(Nt), yl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (As(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Ql(on), on = null))), bl(e, t), _t(t), null;
      case 5:
        vl(t);
        var l = ki($r.current);
        if (n = t.type, e !== null && t.stateNode != null) bc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return _t(t), null;
          }
          if (e = ki(xn.current), As(t)) {
            i = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (i[gn] = t, i[Mr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                et("cancel", i), et("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++) et(Cr[l], i);
                break;
              case "source":
                et("error", i);
                break;
              case "img":
              case "image":
              case "link":
                et(
                  "error",
                  i
                ), et("load", i);
                break;
              case "details":
                et("toggle", i);
                break;
              case "input":
                Ae(i, o), et("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!o.multiple }, et("invalid", i);
                break;
              case "textarea":
                Xe(i, o), et("invalid", i);
            }
            Le(n, o), l = null;
            for (var f in o) if (o.hasOwnProperty(f)) {
              var v = o[f];
              f === "children" ? typeof v == "string" ? i.textContent !== v && (o.suppressHydrationWarning !== !0 && ws(i.textContent, v, e), l = ["children", v]) : typeof v == "number" && i.textContent !== "" + v && (o.suppressHydrationWarning !== !0 && ws(
                i.textContent,
                v,
                e
              ), l = ["children", "" + v]) : d.hasOwnProperty(f) && v != null && f === "onScroll" && et("scroll", i);
            }
            switch (n) {
              case "input":
                ie(i), Je(i, o, !0);
                break;
              case "textarea":
                ie(i), nt(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (i.onclick = Es);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[gn] = t, e[Mr] = i, Fc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Re(n, i), n) {
                case "dialog":
                  et("cancel", e), et("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  et("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Cr.length; l++) et(Cr[l], e);
                  l = i;
                  break;
                case "source":
                  et("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  et(
                    "error",
                    e
                  ), et("load", e), l = i;
                  break;
                case "details":
                  et("toggle", e), l = i;
                  break;
                case "input":
                  Ae(e, i), l = ke(e, i), et("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Z({}, i, { value: void 0 }), et("invalid", e);
                  break;
                case "textarea":
                  Xe(e, i), l = gt(e, i), et("invalid", e);
                  break;
                default:
                  l = i;
              }
              Le(n, l), v = l;
              for (o in v) if (v.hasOwnProperty(o)) {
                var y = v[o];
                o === "style" ? Qt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Wt(e, y) : typeof y == "number" && Wt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (d.hasOwnProperty(o) ? y != null && o === "onScroll" && et("scroll", e) : y != null && F(e, o, y, f));
              }
              switch (n) {
                case "input":
                  ie(e), Je(e, i, !1);
                  break;
                case "textarea":
                  ie(e), nt(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ee(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, o = i.value, o != null ? Ke(e, !!i.multiple, o, !1) : i.defaultValue != null && Ke(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Es);
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
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (n = ki($r.current), ki(xn.current), As(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (o = i.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                ws(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ws(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return _t(t), null;
      case 13:
        if (tt(st), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Vu(), Bi(), t.flags |= 98560, o = !1;
          else if (o = As(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[gn] = t;
            } else Bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), o = !1;
          } else on !== null && (Ql(on), on = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? pt === 0 && (pt = 3) : Xl())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Gi(), bl(e, t), e === null && _r(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return dl(t.type._context), _t(t), null;
      case 17:
        return Ot(t.type) && Cs(), _t(t), null;
      case 19:
        if (tt(st), o = t.memoizedState, o === null) return _t(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null) if (i) Dr(o, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = bs(e), f !== null) {
              for (t.flags |= 128, Dr(o, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) o = n, e = i, o.flags &= 14680066, f = o.alternate, f === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = f.childLanes, o.lanes = f.lanes, o.child = f.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = f.memoizedProps, o.memoizedState = f.memoizedState, o.updateQueue = f.updateQueue, o.type = f.type, e = f.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Se() > Ji && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = bs(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !rt) return _t(t), null;
          } else 2 * Se() - o.renderingStartTime > Ji && n !== 1073741824 && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (n = o.last, n !== null ? n.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Se(), t.sibling = null, n = st.current, Ze(st, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return Jl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function ep(e, t) {
    switch (sl(t), t.tag) {
      case 1:
        return Ot(t.type) && Cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gi(), tt($t), tt(Nt), yl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return vl(t), null;
      case 13:
        if (tt(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Bi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return tt(st), null;
      case 4:
        return Gi(), null;
      case 10:
        return dl(t.type._context), null;
      case 22:
      case 23:
        return Jl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gs = !1, Tt = !1, tp = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Qi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ot(e, t, i);
    }
    else n.current = null;
  }
  function Il(e, t, n) {
    try {
      n();
    } catch (i) {
      ot(e, t, i);
    }
  }
  var Dc = !1;
  function np(e, t) {
    if (Ja = fs, e = ku(), Ba(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset, o = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, v = -1, y = -1, A = 0, U = 0, J = e, K = null;
          t: for (; ; ) {
            for (var oe; J !== n || l !== 0 && J.nodeType !== 3 || (v = f + l), J !== o || i !== 0 && J.nodeType !== 3 || (y = f + i), J.nodeType === 3 && (f += J.nodeValue.length), (oe = J.firstChild) !== null; )
              K = J, J = oe;
            for (; ; ) {
              if (J === e) break t;
              if (K === n && ++A === l && (v = f), K === o && ++U === i && (y = f), (oe = J.nextSibling) !== null) break;
              J = K, K = J.parentNode;
            }
            J = oe;
          }
          n = v === -1 || y === -1 ? null : { start: v, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Xa = { focusedElem: e, selectionRange: n }, fs = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
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
              var ge = ve.memoizedProps, ut = ve.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : un(t.type, ge), ut);
              _.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (q) {
        ot(t, t.return, q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return ve = Dc, Dc = !1, ve;
  }
  function zr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Il(t, n, o);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Ws(e, t) {
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
  function Dl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function zc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Mr], delete t[tl], delete t[Ih], delete t[Dh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Vc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Es));
    else if (i !== 4 && (e = e.child, e !== null)) for (zl(e, t, n), e = e.sibling; e !== null; ) zl(e, t, n), e = e.sibling;
  }
  function Vl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), e = e.sibling;
  }
  var St = null, cn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Kc(e, t, n), n = n.sibling;
  }
  function Kc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(as, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Tt || Qi(n, t);
      case 6:
        var i = St, l = cn;
        St = null, ei(e, t, n), St = i, cn = l, St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? el(e.parentNode, n) : e.nodeType === 1 && el(e, n), yr(e)) : el(St, n.stateNode));
        break;
      case 4:
        i = St, l = cn, St = n.stateNode.containerInfo, cn = !0, ei(e, t, n), St = i, cn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var o = l, f = o.destroy;
            o = o.tag, f !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Il(n, t, f), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Tt && (Qi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (v) {
          ot(n, t, v);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Tt = (i = Tt) || n.memoizedState !== null, ei(e, t, n), Tt = i) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function Hc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new tp()), t.forEach(function(i) {
        var l = dp.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var o = e, f = t, v = f;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              St = v.stateNode, cn = !1;
              break e;
            case 3:
              St = v.stateNode.containerInfo, cn = !0;
              break e;
            case 4:
              St = v.stateNode.containerInfo, cn = !0;
              break e;
          }
          v = v.return;
        }
        if (St === null) throw Error(u(160));
        Kc(o, f, l), St = null, cn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (A) {
        ot(l, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uc(t, e), t = t.sibling;
  }
  function Uc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), Sn(e), i & 4) {
          try {
            zr(3, e, e.return), Ws(3, e);
          } catch (ge) {
            ot(e, e.return, ge);
          }
          try {
            zr(5, e, e.return);
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        break;
      case 1:
        dn(t, e), Sn(e), i & 512 && n !== null && Qi(n, n.return);
        break;
      case 5:
        if (dn(t, e), Sn(e), i & 512 && n !== null && Qi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Wt(l, "");
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, f = n !== null ? n.memoizedProps : o, v = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            v === "input" && o.type === "radio" && o.name != null && Ce(l, o), Re(v, f);
            var A = Re(v, o);
            for (f = 0; f < y.length; f += 2) {
              var U = y[f], J = y[f + 1];
              U === "style" ? Qt(l, J) : U === "dangerouslySetInnerHTML" ? sn(l, J) : U === "children" ? Wt(l, J) : F(l, U, J, A);
            }
            switch (v) {
              case "input":
                $e(l, o);
                break;
              case "textarea":
                ze(l, o);
                break;
              case "select":
                var K = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var oe = o.value;
                oe != null ? Ke(l, !!o.multiple, oe, !1) : K !== !!o.multiple && (o.defaultValue != null ? Ke(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ke(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Mr] = o;
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (dn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (dn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          yr(t.containerInfo);
        } catch (ge) {
          ot(e, e.return, ge);
        }
        break;
      case 4:
        dn(t, e), Sn(e);
        break;
      case 13:
        dn(t, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Hl = Se())), i & 4 && Hc(e);
        break;
      case 22:
        if (U = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (A = Tt) || U, dn(t, e), Tt = A) : dn(t, e), Sn(e), i & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !U && (e.mode & 1) !== 0) for (he = e, U = e.child; U !== null; ) {
            for (J = he = U; he !== null; ) {
              switch (K = he, oe = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, K, K.return);
                  break;
                case 1:
                  Qi(K, K.return);
                  var ve = K.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = K, n = K.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ge) {
                      ot(i, n, ge);
                    }
                  }
                  break;
                case 5:
                  Qi(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Qc(J);
                    continue;
                  }
              }
              oe !== null ? (oe.return = K, he = oe) : Qc(J);
            }
            U = U.sibling;
          }
          e: for (U = null, J = e; ; ) {
            if (J.tag === 5) {
              if (U === null) {
                U = J;
                try {
                  l = J.stateNode, A ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (v = J.stateNode, y = J.memoizedProps.style, f = y != null && y.hasOwnProperty("display") ? y.display : null, v.style.display = je("display", f));
                } catch (ge) {
                  ot(e, e.return, ge);
                }
              }
            } else if (J.tag === 6) {
              if (U === null) try {
                J.stateNode.nodeValue = A ? "" : J.memoizedProps;
              } catch (ge) {
                ot(e, e.return, ge);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              U === J && (U = null), J = J.return;
            }
            U === J && (U = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), Sn(e), i & 4 && Hc(e);
        break;
      case 21:
        break;
      default:
        dn(
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
            if (Vc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Wt(l, ""), i.flags &= -33);
            var o = Bc(e);
            Vl(e, o, l);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, v = Bc(e);
            zl(e, v, f);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        ot(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ip(e, t, n) {
    he = e, Gc(e);
  }
  function Gc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var l = he, o = l.child;
      if (l.tag === 22 && i) {
        var f = l.memoizedState !== null || Gs;
        if (!f) {
          var v = l.alternate, y = v !== null && v.memoizedState !== null || Tt;
          v = Gs;
          var A = Tt;
          if (Gs = f, (Tt = y) && !A) for (he = l; he !== null; ) f = he, y = f.child, f.tag === 22 && f.memoizedState !== null ? Yc(l) : y !== null ? (y.return = f, he = y) : Yc(l);
          for (; o !== null; ) he = o, Gc(o), o = o.sibling;
          he = l, Gs = v, Tt = A;
        }
        Wc(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, he = o) : Wc(e);
    }
  }
  function Wc(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tt || Ws(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Tt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Qu(t, o, i);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Qu(t, f, n);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (n === null && t.flags & 4) {
                n = v;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && n.focus();
                    break;
                  case "img":
                    y.src && (n.src = y.src);
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
                var A = t.alternate;
                if (A !== null) {
                  var U = A.memoizedState;
                  if (U !== null) {
                    var J = U.dehydrated;
                    J !== null && yr(J);
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
              throw Error(u(163));
          }
          Tt || t.flags & 512 && Dl(t);
        } catch (K) {
          ot(t, t.return, K);
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
  function Qc(e) {
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
  function Yc(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ws(4, t);
            } catch (y) {
              ot(t, n, y);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (y) {
                ot(t, l, y);
              }
            }
            var o = t.return;
            try {
              Dl(t);
            } catch (y) {
              ot(t, o, y);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Dl(t);
            } catch (y) {
              ot(t, f, y);
            }
        }
      } catch (y) {
        ot(t, t.return, y);
      }
      if (t === e) {
        he = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, he = v;
        break;
      }
      he = t.return;
    }
  }
  var rp = Math.ceil, Qs = I.ReactCurrentDispatcher, Bl = I.ReactCurrentOwner, tn = I.ReactCurrentBatchConfig, De = 0, kt = null, dt = null, wt = 0, Ut = 0, Yi = Yn(0), pt = 0, Vr = null, gi = 0, Ys = 0, Kl = 0, Br = null, bt = null, Hl = 0, Ji = 1 / 0, bn = null, Js = !1, Ul = null, ti = null, Xs = !1, ni = null, Zs = 0, Kr = 0, Gl = null, qs = -1, ea = 0;
  function Rt() {
    return (De & 6) !== 0 ? Se() : qs !== -1 ? qs : qs = Se();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && wt !== 0 ? wt & -wt : Vh.transition !== null ? (ea === 0 && (ea = Bo()), ea) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xo(e.type)), e);
  }
  function fn(e, t, n, i) {
    if (50 < Kr) throw Kr = 0, Gl = null, Error(u(185));
    hr(e, n, i), ((De & 2) === 0 || e !== kt) && (e === kt && ((De & 2) === 0 && (Ys |= n), pt === 4 && ri(e, wt)), It(e, i), n === 1 && De === 0 && (t.mode & 1) === 0 && (Ji = Se() + 500, Ts && Xn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    Vf(e, t);
    var i = us(e, e === kt ? wt : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? zh(Xc.bind(null, e)) : Fu(Xc.bind(null, e)), Fh(function() {
        (De & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Ko(i)) {
          case 1:
            n = lt;
            break;
          case 4:
            n = ci;
            break;
          case 16:
            n = Vn;
            break;
          case 536870912:
            n = Vo;
            break;
          default:
            n = Vn;
        }
        n = sd(n, Jc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Jc(e, t) {
    if (qs = -1, ea = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Xi() && e.callbackNode !== n) return null;
    var i = us(e, e === kt ? wt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = ta(e, i);
    else {
      t = i;
      var l = De;
      De |= 2;
      var o = qc();
      (kt !== e || wt !== t) && (bn = null, Ji = Se() + 500, ji(e, t));
      do
        try {
          lp();
          break;
        } catch (v) {
          Zc(e, v);
        }
      while (!0);
      cl(), Qs.current = o, De = l, dt !== null ? t = 0 : (kt = null, wt = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ca(e), l !== 0 && (i = l, t = Wl(e, l))), t === 1) throw n = Vr, ji(e, 0), ri(e, i), It(e, Se()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !sp(l) && (t = ta(e, i), t === 2 && (o = Ca(e), o !== 0 && (i = o, t = Wl(e, o))), t === 1)) throw n = Vr, ji(e, 0), ri(e, i), It(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Si(e, bt, bn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Hl + 500 - Se(), 10 < t)) {
              if (us(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Rt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = qa(Si.bind(null, e, bt, bn), t);
              break;
            }
            Si(e, bt, bn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var f = 31 - an(i);
              o = 1 << f, f = t[f], f > l && (l = f), i &= ~o;
            }
            if (i = l, i = Se() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * rp(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = qa(Si.bind(null, e, bt, bn), i);
              break;
            }
            Si(e, bt, bn);
            break;
          case 5:
            Si(e, bt, bn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return It(e, Se()), e.callbackNode === n ? Jc.bind(null, e) : null;
  }
  function Wl(e, t) {
    var n = Br;
    return e.current.memoizedState.isDehydrated && (ji(e, t).flags |= 256), e = ta(e, t), e !== 2 && (t = bt, bt = n, t !== null && Ql(t)), e;
  }
  function Ql(e) {
    bt === null ? bt = e : bt.push.apply(bt, e);
  }
  function sp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ln(o(), l)) return !1;
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
    for (t &= ~Kl, t &= ~Ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function Xc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Xi();
    var t = us(e, 0);
    if ((t & 1) === 0) return It(e, Se()), null;
    var n = ta(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ca(e);
      i !== 0 && (t = i, n = Wl(e, i));
    }
    if (n === 1) throw n = Vr, ji(e, 0), ri(e, t), It(e, Se()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, bt, bn), It(e, Se()), null;
  }
  function Yl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Ji = Se() + 500, Ts && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (De & 6) === 0 && Xi();
    var t = De;
    De |= 1;
    var n = tn.transition, i = Ue;
    try {
      if (tn.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = i, tn.transition = n, De = t, (De & 6) === 0 && Xn();
    }
  }
  function Jl() {
    Ut = Yi.current, tt(Yi);
  }
  function ji(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Oh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var i = n;
      switch (sl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Cs();
          break;
        case 3:
          Gi(), tt($t), tt(Nt), yl();
          break;
        case 5:
          vl(i);
          break;
        case 4:
          Gi();
          break;
        case 13:
          tt(st);
          break;
        case 19:
          tt(st);
          break;
        case 10:
          dl(i.type._context);
          break;
        case 22:
        case 23:
          Jl();
      }
      n = n.return;
    }
    if (kt = e, dt = e = si(e.current, null), wt = Ut = t, pt = 0, Vr = null, Kl = Ys = gi = 0, bt = Br = null, vi !== null) {
      for (t = 0; t < vi.length; t++) if (n = vi[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, o = n.pending;
        if (o !== null) {
          var f = o.next;
          o.next = l, i.next = f;
        }
        n.pending = i;
      }
      vi = null;
    }
    return e;
  }
  function Zc(e, t) {
    do {
      var n = dt;
      try {
        if (cl(), Is.current = Bs, Ds) {
          for (var i = at.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ds = !1;
        }
        if (yi = 0, vt = ht = at = null, Or = !1, Fr = 0, Bl.current = null, n === null || n.return === null) {
          pt = 1, Vr = t, dt = null;
          break;
        }
        e: {
          var o = e, f = n.return, v = n, y = t;
          if (t = wt, v.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var A = y, U = v, J = U.tag;
            if ((U.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var K = U.alternate;
              K ? (U.updateQueue = K.updateQueue, U.memoizedState = K.memoizedState, U.lanes = K.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var oe = wc(f);
            if (oe !== null) {
              oe.flags &= -257, Ec(oe, f, v, o, t), oe.mode & 1 && Sc(o, A, t), t = oe, y = A;
              var ve = t.updateQueue;
              if (ve === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(y), t.updateQueue = ge;
              } else ve.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Sc(o, A, t), Xl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (rt && v.mode & 1) {
            var ut = wc(f);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), Ec(ut, f, v, o, t), ol(Wi(y, v));
              break e;
            }
          }
          o = y = Wi(y, v), pt !== 4 && (pt = 2), Br === null ? Br = [o] : Br.push(o), o = f;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = xc(o, y, t);
                Wu(o, _);
                break e;
              case 1:
                v = y;
                var x = o.type, T = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (ti === null || !ti.has(T)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var q = jc(o, v, t);
                  Wu(o, q);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        td(n);
      } catch (xe) {
        t = xe, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qc() {
    var e = Qs.current;
    return Qs.current = Bs, e === null ? Bs : e;
  }
  function Xl() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), kt === null || (gi & 268435455) === 0 && (Ys & 268435455) === 0 || ri(kt, wt);
  }
  function ta(e, t) {
    var n = De;
    De |= 2;
    var i = qc();
    (kt !== e || wt !== t) && (bn = null, ji(e, t));
    do
      try {
        ap();
        break;
      } catch (l) {
        Zc(e, l);
      }
    while (!0);
    if (cl(), De = n, Qs.current = i, dt !== null) throw Error(u(261));
    return kt = null, wt = 0, pt;
  }
  function ap() {
    for (; dt !== null; ) ed(dt);
  }
  function lp() {
    for (; dt !== null && !L(); ) ed(dt);
  }
  function ed(e) {
    var t = rd(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? td(e) : dt = t, Bl.current = null;
  }
  function td(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = qh(n, t, Ut), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = ep(n, t), n !== null) {
          n.flags &= 32767, dt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pt = 6, dt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function Si(e, t, n) {
    var i = Ue, l = tn.transition;
    try {
      tn.transition = null, Ue = 1, op(e, t, n, i);
    } finally {
      tn.transition = l, Ue = i;
    }
    return null;
  }
  function op(e, t, n, i) {
    do
      Xi();
    while (ni !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Bf(e, o), e === kt && (dt = kt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Xs || (Xs = !0, sd(Vn, function() {
      return Xi(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = tn.transition, tn.transition = null;
      var f = Ue;
      Ue = 1;
      var v = De;
      De |= 4, Bl.current = null, np(e, n), Uc(n, e), Th(Xa), fs = !!Ja, Xa = Ja = null, e.current = n, ip(n), pe(), De = v, Ue = f, tn.transition = o;
    } else e.current = n;
    if (Xs && (Xs = !1, ni = e, Zs = l), o = e.pendingLanes, o === 0 && (ti = null), Ff(n.stateNode), It(e, Se()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Js) throw Js = !1, e = Ul, Ul = null, e;
    return (Zs & 1) !== 0 && e.tag !== 0 && Xi(), o = e.pendingLanes, (o & 1) !== 0 ? e === Gl ? Kr++ : (Kr = 0, Gl = e) : Kr = 0, Xn(), null;
  }
  function Xi() {
    if (ni !== null) {
      var e = Ko(Zs), t = tn.transition, n = Ue;
      try {
        if (tn.transition = null, Ue = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, Zs = 0, (De & 6) !== 0) throw Error(u(331));
          var l = De;
          for (De |= 4, he = e.current; he !== null; ) {
            var o = he, f = o.child;
            if ((he.flags & 16) !== 0) {
              var v = o.deletions;
              if (v !== null) {
                for (var y = 0; y < v.length; y++) {
                  var A = v[y];
                  for (he = A; he !== null; ) {
                    var U = he;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zr(8, U, o);
                    }
                    var J = U.child;
                    if (J !== null) J.return = U, he = J;
                    else for (; he !== null; ) {
                      U = he;
                      var K = U.sibling, oe = U.return;
                      if (zc(U), U === A) {
                        he = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = oe, he = K;
                        break;
                      }
                      he = oe;
                    }
                  }
                }
                var ve = o.alternate;
                if (ve !== null) {
                  var ge = ve.child;
                  if (ge !== null) {
                    ve.child = null;
                    do {
                      var ut = ge.sibling;
                      ge.sibling = null, ge = ut;
                    } while (ge !== null);
                  }
                }
                he = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && f !== null) f.return = o, he = f;
            else e: for (; he !== null; ) {
              if (o = he, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  zr(9, o, o.return);
              }
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, he = _;
                break e;
              }
              he = o.return;
            }
          }
          var x = e.current;
          for (he = x; he !== null; ) {
            f = he;
            var T = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && T !== null) T.return = f, he = T;
            else e: for (f = x; he !== null; ) {
              if (v = he, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, v);
                }
              } catch (xe) {
                ot(v, v.return, xe);
              }
              if (v === f) {
                he = null;
                break e;
              }
              var q = v.sibling;
              if (q !== null) {
                q.return = v.return, he = q;
                break e;
              }
              he = v.return;
            }
          }
          if (De = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(as, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Ue = n, tn.transition = t;
      }
    }
    return !1;
  }
  function nd(e, t, n) {
    t = Wi(n, t), t = xc(e, t, 1), e = qn(e, t, 1), t = Rt(), e !== null && (hr(e, 1, t), It(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) nd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Wi(n, e), e = jc(t, e, 1), t = qn(t, e, 1), e = Rt(), t !== null && (hr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function up(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, kt === e && (wt & n) === n && (pt === 4 || pt === 3 && (wt & 130023424) === wt && 500 > Se() - Hl ? ji(e, 0) : Kl |= n), It(e, t);
  }
  function id(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = os, os <<= 1, (os & 130023424) === 0 && (os = 4194304)));
    var n = Rt();
    e = $n(e, t), e !== null && (hr(e, t, n), It(e, n));
  }
  function cp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), id(e, n);
  }
  function dp(e, t) {
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
        throw Error(u(314));
    }
    i !== null && i.delete(t), id(e, n);
  }
  var rd;
  rd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $t.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, Zh(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && bu(t, Ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Us(e, t), e = t.pendingProps;
        var l = Di(t, Nt.current);
        Ui(t, n), l = jl(null, t, i, e, l, n);
        var o = Sl();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (o = !0, _s(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pl(t), l.updater = Ks, t.stateNode = l, l._reactInternals = t, Tl(t, i, e, n), t = Rl(null, t, i, !0, o, n)) : (t.tag = 0, rt && o && rl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Us(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = hp(i), e = un(i, e), l) {
            case 0:
              t = Al(null, t, i, e, n);
              break e;
            case 1:
              t = Pc(null, t, i, e, n);
              break e;
            case 11:
              t = Nc(null, t, i, e, n);
              break e;
            case 14:
              t = Cc(null, t, i, un(i.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Al(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Pc(e, t, i, l, n);
      case 3:
        e: {
          if (Ac(t), e === null) throw Error(u(387));
          i = t.pendingProps, o = t.memoizedState, l = o.element, Gu(e, t), Fs(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, o.isDehydrated) if (o = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Wi(Error(u(423)), t), t = Rc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Wi(Error(u(424)), t), t = Rc(e, t, i, n, l);
            break e;
          } else for (Ht = Qn(t.stateNode.containerInfo.firstChild), Kt = t, rt = !0, on = null, n = Hu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Bi(), i === l) {
              t = Fn(e, t, n);
              break e;
            }
            At(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yu(t), e === null && ll(t), i = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, f = l.children, Za(i, l) ? f = null : o !== null && Za(i, o) && (t.flags |= 32), Mc(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && ll(t), null;
      case 13:
        return Lc(e, t, n);
      case 4:
        return ml(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ki(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Nc(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, o = t.memoizedProps, f = l.value, Ze(Ls, i._currentValue), i._currentValue = f, o !== null) if (ln(o.value, f)) {
            if (o.children === l.children && !$t.current) {
              t = Fn(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var v = o.dependencies;
            if (v !== null) {
              f = o.child;
              for (var y = v.firstContext; y !== null; ) {
                if (y.context === i) {
                  if (o.tag === 1) {
                    y = On(-1, n & -n), y.tag = 2;
                    var A = o.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var U = A.pending;
                      U === null ? y.next = y : (y.next = U.next, U.next = y), A.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), fl(
                    o.return,
                    n,
                    t
                  ), v.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) f = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (f = o.return, f === null) throw Error(u(341));
              f.lanes |= n, v = f.alternate, v !== null && (v.lanes |= n), fl(f, n, t), f = o.sibling;
            } else f = o.child;
            if (f !== null) f.return = o;
            else for (f = o; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (o = f.sibling, o !== null) {
                o.return = f.return, f = o;
                break;
              }
              f = f.return;
            }
            o = f;
          }
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Ui(t, n), l = qt(l), i = i(l), t.flags |= 1, At(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = un(i, t.pendingProps), l = un(i.type, l), Cc(e, t, i, l, n);
      case 15:
        return _c(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Us(e, t), t.tag = 1, Ot(i) ? (e = !0, _s(t)) : e = !1, Ui(t, n), yc(t, i, l), Tl(t, i, l, n), Rl(null, t, i, !0, e, n);
      case 19:
        return Oc(e, t, n);
      case 22:
        return Tc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function sd(e, t) {
    return Tn(e, t);
  }
  function fp(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, i) {
    return new fp(e, t, n, i);
  }
  function Zl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hp(e) {
    if (typeof e == "function") return Zl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function na(e, t, n, i, l, o) {
    var f = 2;
    if (i = e, typeof e == "function") Zl(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case M:
        return wi(n.children, l, o, t);
      case V:
        f = 8, l |= 8;
        break;
      case te:
        return e = nn(12, n, t, l | 2), e.elementType = te, e.lanes = o, e;
      case ue:
        return e = nn(13, n, t, l), e.elementType = ue, e.lanes = o, e;
      case Me:
        return e = nn(19, n, t, l), e.elementType = Me, e.lanes = o, e;
      case ce:
        return ia(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case fe:
            f = 10;
            break e;
          case Te:
            f = 9;
            break e;
          case ne:
            f = 11;
            break e;
          case H:
            f = 14;
            break e;
          case ae:
            f = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = nn(f, n, t, l), t.elementType = e, t.type = i, t.lanes = o, t;
  }
  function wi(e, t, n, i) {
    return e = nn(7, e, i, t), e.lanes = n, e;
  }
  function ia(e, t, n, i) {
    return e = nn(22, e, i, t), e.elementType = ce, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ql(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function eo(e, t, n) {
    return t = nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function pp(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _a(0), this.expirationTimes = _a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _a(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function to(e, t, n, i, l, o, f, v, y) {
    return e = new pp(e, t, n, v, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pl(o), e;
  }
  function mp(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function ad(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ot(n)) return $u(e, n, t);
    }
    return t;
  }
  function ld(e, t, n, i, l, o, f, v, y) {
    return e = to(n, i, !0, e, l, o, f, v, y), e.context = ad(null), n = e.current, i = Rt(), l = ii(n), o = On(i, l), o.callback = t ?? null, qn(n, o, l), e.current.lanes = l, hr(e, l, i), It(e, i), e;
  }
  function ra(e, t, n, i) {
    var l = t.current, o = Rt(), f = ii(l);
    return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(o, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, f), e !== null && (fn(e, l, f, o), Os(e, l, f)), f;
  }
  function sa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function no(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function vp() {
    return null;
  }
  var ud = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function io(e) {
    this._internalRoot = e;
  }
  aa.prototype.render = io.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ra(e, t, null, null);
  }, aa.prototype.unmount = io.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        ra(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function aa(e) {
    this._internalRoot = e;
  }
  aa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Go();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Yo(e);
    }
  };
  function ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function la(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function cd() {
  }
  function kp(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var o = i;
        i = function() {
          var A = sa(f);
          o.call(A);
        };
      }
      var f = ld(t, i, e, 0, null, !1, !1, "", cd);
      return e._reactRootContainer = f, e[Pn] = f.current, _r(e.nodeType === 8 ? e.parentNode : e), xi(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var A = sa(y);
        v.call(A);
      };
    }
    var y = to(e, 0, !1, null, null, !1, !1, "", cd);
    return e._reactRootContainer = y, e[Pn] = y.current, _r(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      ra(t, y, n, i);
    }), y;
  }
  function oa(e, t, n, i, l) {
    var o = n._reactRootContainer;
    if (o) {
      var f = o;
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var y = sa(f);
          v.call(y);
        };
      }
      ra(t, f, e, l);
    } else f = kp(n, t, e, l, i);
    return sa(f);
  }
  Ho = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fr(t.pendingLanes);
          n !== 0 && (Ta(t, n | 1), It(t, Se()), (De & 6) === 0 && (Ji = Se() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = $n(e, 1);
          if (i !== null) {
            var l = Rt();
            fn(i, e, 1, l);
          }
        }), no(e, 1);
    }
  }, Ma = function(e) {
    if (e.tag === 13) {
      var t = $n(e, 134217728);
      if (t !== null) {
        var n = Rt();
        fn(t, e, 134217728, n);
      }
      no(e, 134217728);
    }
  }, Uo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = $n(e, t);
      if (n !== null) {
        var i = Rt();
        fn(n, e, t, i);
      }
      no(e, t);
    }
  }, Go = function() {
    return Ue;
  }, Wo = function(e, t) {
    var n = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = n;
    }
  }, Yt = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Ns(i);
              if (!l) throw Error(u(90));
              se(i), $e(i, l);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && Ke(e, !!n.multiple, t, !1);
    }
  }, be = Yl, it = xi;
  var yp = { usingClientEntryPoint: !1, Events: [Pr, bi, Ns, mn, zn, Yl] }, Hr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gp = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = rs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Hr.findFiberByHostInstance || vp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ua.isDisabled && ua.supportsFiber) try {
      as = ua.inject(gp), yn = ua;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ro(t)) throw Error(u(200));
    return mp(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!ro(e)) throw Error(u(299));
    var n = !1, i = "", l = ud;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = to(e, 1, !1, null, null, n, !1, i, l), e[Pn] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new io(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = rs(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return xi(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!la(t)) throw Error(u(200));
    return oa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!ro(e)) throw Error(u(405));
    var i = n != null && n.hydratedSources || null, l = !1, o = "", f = ud;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, l, !1, o, f), e[Pn] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new aa(t);
  }, Dt.render = function(e, t, n) {
    if (!la(t)) throw Error(u(200));
    return oa(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!la(e)) throw Error(u(40));
    return e._reactRootContainer ? (xi(function() {
      oa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Yl, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!la(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return oa(e, t, n, !1, i);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var yd;
function Tp() {
  if (yd) return lo.exports;
  yd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), lo.exports = _p(), lo.exports;
}
var gd;
function Mp() {
  if (gd) return ca;
  gd = 1;
  var r = Tp();
  return ca.createRoot = r.createRoot, ca.hydrateRoot = r.hydrateRoot, ca;
}
var Pp = Mp();
const Ap = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], s = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, m = 7, p = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], R = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], P = {
    mp: {
      name: "mollipentatoninen",
      base: k,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: k,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: k,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: k,
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
      base: C,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: C,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: C,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: C,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, $ = 26, b = 72, w = 30, E = 54, z = 34, N = 11, F = ($ + b) / 2, I = w + (c.length - 1) * z + 30, X = (B) => b + B * E, W = (B) => B === 0 ? F : X(B) - E / 2, M = (B) => w + B * z;
  function V(B, ee, j) {
    const Y = s.indexOf(r[B][0]) + Number(j.slice(-1)) - 1, ie = Y % s.length, se = u[ie] + 12 * Math.floor(Y / s.length), de = B + ee - se;
    return s[ie] + (de < 0 ? "♭" : "♯").repeat(Math.abs(de));
  }
  function te(B) {
    return [...B.base, ...B.add].sort((ee, j) => ee[0] - j[0]);
  }
  function fe(B, ee, j) {
    const Y = ee + (j ? 1 : 0), ie = p[Y % p.length], se = Math.min(...ie.map(([$e]) => $e)), de = Math.max(...ie.map(([, $e]) => $e));
    let Ce = (B - d % 12 + 12) % 12 - (j ? 8 : 5) + 12 * Math.floor(Y / p.length);
    return se + Ce < 0 && (Ce += 12), de + Ce > h.pentatonic && (Ce -= 12), {
      strings: ie.map(($e) => $e.map((Je) => Je + Ce)),
      start: se + Ce,
      end: de + Ce
    };
  }
  function Te(B, ee, j) {
    const Y = j[ee], ie = (B + Y - d % 12 + 12) % 12, se = d + ie - Y, de = c.map((ke, Ae) => {
      const Ce = ee + (c.length - 1 - Ae) * 3;
      return [Ce, Ce + 1, Ce + 2].map(($e) => {
        const Je = Math.floor($e / j.length), Be = j[$e % j.length];
        return se + Be + 12 * Je - ke;
      });
    });
    return {
      strings: de,
      start: Math.min(...de.map((ke) => ke[0])),
      end: Math.max(...de.map((ke) => ke.at(-1)))
    };
  }
  function ne(B, ee) {
    const j = [], Y = Math.ceil(-B.end / 12) * 12;
    for (let se = Y; B.start + se <= ee; se += 12) {
      const de = B.strings.map((Ae) => Ae.map((Ce) => Ce + se).filter((Ce) => Ce >= 0 && Ce <= ee)), ke = de.flat();
      j.push({
        strings: de,
        start: Math.min(...ke),
        end: Math.max(...ke),
        partial: B.start + se < 0 || B.end + se > ee
      });
    }
    const ie = j.filter((se) => !se.partial);
    return ie.length ? ie : j;
  }
  function ue(B) {
    return te(B).length === m;
  }
  function Me(B, ee, j) {
    const Y = ue(ee);
    B.querySelector('[value="3nps"]').disabled = !Y, B.value = Y ? j ?? "3nps" : "pentatonic";
  }
  function H(B, ee, j, Y, ie) {
    const se = te(ee).map(([de]) => de);
    return Y.map((de) => {
      const ke = de - 1, Ae = j === "3nps" ? Te(B, ke, se) : fe(B, ke, ee.base === C), Ce = ie === void 0 ? [Ae] : ne(Ae, ie);
      return { number: de, positions: Ce };
    });
  }
  function ae(B, ee) {
    const j = B.getBoundingClientRect(), Y = B.querySelectorAll(ee);
    let ie = 1 / 0;
    Y.forEach((se) => {
      const de = se.getBoundingClientRect();
      let ke = 0;
      de.left < j.left ? ke = de.left - j.left - 8 : de.right > j.right && (ke = de.right - j.right + 8), Math.abs(ke) < Math.abs(ie) && (ie = ke);
    }), Number.isFinite(ie) && (B.scrollLeft += ie);
  }
  function ce(B, ee = !1) {
    const j = B === "3nps" ? m : p.length;
    return Array.from({ length: j }, (Y, ie) => {
      const se = ie + 1;
      return '<label class="box-toggle" data-box="' + se + '"><input type="checkbox" value="' + se + '"' + (ee && ie === 0 ? " checked" : "") + "> Boksi " + se + "</label>";
    }).join("");
  }
  function Q(B, ee) {
    const j = te(ee), Y = new Map(j.map(([se, de]) => [se, V(B, se, de)])), ie = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return j.flatMap(([se, de]) => ie.flatMap(({ suffix: ke, base: Ae }) => {
      const Ce = Ae.map(([$e]) => Y.get((se + $e) % 12));
      return Ce.every(Boolean) ? {
        root: (B + se) % 12,
        degree: Number(String(de).replace(/\D/g, "")),
        name: Ce[0] + ke,
        notes: Ce,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function re(B, ee) {
    const j = B.base.map(([se]) => (B.root + se) % 12), Y = c.map((se) => {
      const de = [];
      for (let ke = 0; ke <= ee; ke++) {
        const Ae = (se + ke) % 12;
        j.includes(Ae) && de.push({ fret: ke, pitch: Ae });
      }
      return de;
    }), ie = [];
    for (let se = 0; se <= Y.length - 3; se++)
      for (const de of Y[se])
        for (const ke of Y[se + 1])
          if (de.pitch !== ke.pitch)
            for (const Ae of Y[se + 2]) {
              if (Ae.pitch === de.pitch || Ae.pitch === ke.pitch) continue;
              const Ce = [de.fret, ke.fret, Ae.fret], $e = Math.min(...Ce), Je = Math.max(...Ce);
              if (Je - $e > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(se, 3, ...Ce), ie.push({ strings: Be, low: $e, high: Je });
            }
    return ie.sort((se, de) => se.high - de.high || se.low - de.low);
  }
  const Z = {
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
  }, g = [
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
  function D(B, ee) {
    const j = Z[B + ":" + ee];
    if (j) return { frets: j, barre: null };
    let Y = null;
    return g.forEach(({ string: ie, openPC: se, shapes: de }) => {
      const ke = de[ee];
      if (!ke) return;
      let Ae = (B - se + 12) % 12;
      if (Ae + Math.min(...ke.filter((Je) => Je !== null)) < 0 && (Ae += 12), Y && Y.fret <= Ae) return;
      const Ce = ke.map((Je) => Je === null ? null : Ae + Je), $e = Ae > 0 && ke.at(-1) === 0 ? { fret: Ae, from: ie, to: ke.length - 1 } : null;
      Y = { fret: Ae, frets: Ce, barre: $e };
    }), Y && { frets: Y.frets, barre: Y.barre };
  }
  function me(B, { frets: ee, barre: j }, Y) {
    const Ce = [...c].reverse(), $e = ee.filter((ze) => ze > 0), Be = !$e.length || Math.max(...$e) <= 4 && (ee.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), We = (ze) => 24 + ze * 14, Ke = (ze) => 30 + (ze - Be) * 18 + 18 / 2, gt = 102;
    let Xe = '<svg class="chord-svg" viewBox="0 0 108 ' + (gt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Y + "-ote paksusta kielestä ohueen: " + ee.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Xe += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + ze * 18) + '" x2="' + We(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return ee.forEach((ze, nt) => {
      Xe += '<line class="string" x1="' + We(nt) + '" y1="30" x2="' + We(nt) + '" y2="' + gt + '"/>';
    }), Be > 1 && (Xe += '<text class="fret-label" x="15" y="' + (Ke(Be) + 4) + '">' + Be + "</text>"), j && (Xe += '<rect class="barre" x="' + (We(j.from) - 6.5) + '" y="' + (Ke(j.fret) - 6.5) + '" width="' + ((j.to - j.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((ze, nt) => {
      if (ze === null) {
        Xe += '<text class="marker" x="' + We(nt) + '" y="22">×</text>';
        return;
      }
      const Mt = (Ce[nt] + ze) % 12 === B;
      if (ze === 0) {
        Xe += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + We(nt) + '" cy="18" r="4.5"/>';
        return;
      }
      j && ze === j.fret && nt >= j.from && nt <= j.to && !Mt || (Xe += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + We(nt) + '" cy="' + Ke(ze) + '" r="6.5"/>');
    }), Xe + "</svg>";
  }
  function we(B, ee) {
    const j = new URLSearchParams(location.search), Y = r.indexOf(j.get("toonikka")), ie = j.get("asteikko");
    return {
      rootPC: Y === -1 ? B : Y,
      scaleId: Object.hasOwn(P, ie) ? ie : ee
    };
  }
  function G(B, ee, j) {
    return B + "?" + new URLSearchParams({ toonikka: r[ee], asteikko: j });
  }
  function le(B, ee, j, {
    boxes: Y = [],
    onlyBoxNotes: ie = !1,
    automatic: se = !0,
    focusDegree: de = "",
    grip: ke = null,
    barre: Ae = null,
    label: Ce = r[B] + " " + ee.name,
    notes: $e = null,
    targets: Je = !1,
    muteFret: Be = null
  } = {}) {
    const We = X(j), Ke = We + 48, gt = Ke + 28, Xe = w - 14, ze = M(c.length - 1) + 14, nt = ze - Xe, Mt = se ? 680 : Math.ceil(gt * 0.64), Gt = Y.flatMap((_e) => _e.positions), zt = {};
    ee.base.forEach(([_e, Le]) => zt[(B + _e) % 12] = { deg: Le, added: !1 }), ee.add.forEach(([_e, Le]) => zt[(B + _e) % 12] = { deg: Le, added: !0 });
    const sn = c.map((_e, Le) => !!ke && ke[Le] === null), Wt = !!ke && Be !== null, ct = R.filter((_e, Le) => sn[Le]).reverse(), Dn = Ce + ". " + j + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let je = '<svg viewBox="0 0 ' + gt + " " + I + '" style="min-width:' + Mt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Je ? "group" : "img") + '" aria-label="' + Dn + '">';
    je += '<rect x="' + $ + '" y="' + Xe + '" width="' + (b - $) + '" height="' + nt + '" rx="6" fill="#2a2338"/>', je += '<rect x="' + b + '" y="' + Xe + '" width="' + (We - b) + '" height="' + nt + '" fill="#231a12"/>', je += '<rect x="' + We + '" y="' + Xe + '" width="' + (gt - We - 4) + '" height="' + nt + '" rx="8" fill="#32251e"/>';
    for (let _e = 1; _e <= j; _e++)
      je += '<line x1="' + X(_e) + '" y1="' + Xe + '" x2="' + X(_e) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    je += '<rect x="' + (b - 3) + '" y="' + Xe + '" width="6" height="' + nt + '" rx="2" fill="#d8cbb6"/>', je += '<rect x="' + (Ke - 11) + '" y="' + (Xe + 3) + '" width="22" height="' + (nt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', je += '<rect x="' + (Ke - 4) + '" y="' + (Xe + 7) + '" width="3" height="' + (nt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Xe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((_e) => _e <= j).forEach((_e) => je += '<circle cx="' + W(_e) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let _e = 12; _e <= j; _e += 12)
      je += '<circle cx="' + W(_e) + '" cy="' + (Qt - z) + '" r="5.5" fill="#7a6550"/>', je += '<circle cx="' + W(_e) + '" cy="' + (Qt + z) + '" r="5.5" fill="#7a6550"/>';
    je += '<text x="' + F + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', je += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', je += '<text x="' + Ke + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let _e = 1; _e <= j; _e++)
      je += '<text x="' + W(_e) + '" y="' + (I - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + _e + "</text>";
    if (Y.forEach(({ number: _e, positions: Le }) => {
      Le.forEach((Re) => {
        const Qe = Re.partial ? "box-highlight box-partial" : "box-highlight";
        je += '<g class="' + Qe + '" data-box="' + _e + '" aria-hidden="true">';
        const qe = Re.strings.find((xt) => xt.length), Yt = (W(qe[0]) + W(qe.at(-1))) / 2;
        je += '<text class="box-number" x="' + Yt + '" y="12">' + _e + "</text>", Re.strings.forEach((xt, Vt) => {
          if (!xt.length) return;
          const pn = W(xt[0]) - 16, mn = W(xt.at(-1)) - W(xt[0]) + 32;
          je += '<rect class="box-band" x="' + pn + '" y="' + (M(Vt) - 14) + '" width="' + mn + '" height="28" rx="14"/>';
        }), je += "</g>";
      });
    }), c.forEach((_e, Le) => {
      const Re = 1 + Le * 0.45, Qe = M(Le), qe = sn[Le] && !Wt;
      qe ? je += '<text class="muted-mark" x="' + F + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[Le] && Be === 0 || (je += '<line x1="' + ($ + 4) + '" y1="' + Qe + '" x2="' + (b - 4) + '" y2="' + Qe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), je += "<g" + (qe ? ' opacity=".35"' : "") + ">", je += '<line x1="' + b + '" y1="' + Qe + '" x2="' + (Ke + 5) + '" y2="' + Qe + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', je += '<circle cx="' + (Ke + 5) + '" cy="' + Qe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', je += "</g>", je += '<text x="13" y="' + (Qe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Le] + "</text>";
    }), ke && Ae && Ae.fret >= 1 && Ae.fret <= j) {
      const _e = M(Ae.from), Le = M(Ae.to), Re = Math.min(_e, Le) - 6, Qe = Math.max(_e, Le) + 6;
      je += '<rect class="barre-indicator" x="' + (W(Ae.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Qe - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Je && (je += '<g class="fret-targets">', c.forEach((_e, Le) => {
      for (let Re = 0; Re <= j; Re++) {
        const Qe = Re ? R[Le] + "-kieli, " + Re + ". nauha" : "vapaa " + R[Le] + "-kieli", qe = Re ? E : b - $ - 6;
        je += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Le + '" data-fret="' + Re + '" data-midi="' + (_e + Re) + '" aria-label="' + Qe + '" x="' + (W(Re) - qe / 2) + '" y="' + (M(Le) - z / 2) + '" width="' + qe + '" height="' + z + '" fill="transparent"/>';
      }
    }), je += "</g>"), ($e ?? []).forEach(({ string: _e, fret: Le, label: Re, kind: Qe }) => {
      je += '<g class="octave-note octave-' + Qe + '">', je += '<circle cx="' + W(Le) + '" cy="' + M(_e) + '" r="' + N + '"/>', je += '<text x="' + W(Le) + '" y="' + (M(_e) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", je += "</g>";
    }), ke && (je += '<g class="grip-notes">'), ($e ? [] : c).forEach((_e, Le) => {
      for (let Re = 0; Re <= j; Re++) {
        const Qe = (_e + Re) % 12;
        if (!(Qe in zt) || ke && ke[Le] !== Re || ie && !Gt.some(({ strings: mn }) => {
          const zn = mn[Le];
          return zn.length > 0 && Re >= zn[0] && Re <= zn.at(-1);
        })) continue;
        const qe = zt[Qe], Yt = qe.deg === "1", xt = qe.added ? "#f0a13c" : Yt ? "#4b2fd6" : "#6d4aff", Vt = qe.added ? "#1a1430" : "#fff";
        qe.deg === de && (je += '<circle class="focus-note" cx="' + W(Re) + '" cy="' + M(Le) + '" r="14.5"/>');
        const pn = ke ? ' data-string="' + (Le + 1) + '" data-fret="' + Re + '" data-degree="' + qe.deg + '"' : "";
        je += "<circle" + pn + ' cx="' + W(Re) + '" cy="' + M(Le) + '" r="' + N + '" fill="' + xt + '" stroke="' + (Yt ? "#fff" : "#1a1430") + '" stroke-width="' + (Yt ? 2.5 : 1) + '"/>', je += '<text x="' + W(Re) + '" y="' + (M(Le) + 3.5) + '" font-size="' + (qe.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Vt + '" text-anchor="middle">' + qe.deg + "</text>";
      }
    }), ke && (je += "</g>"), Wt && sn.forEach((_e, Le) => {
      if (!_e) return;
      const Re = W(Be), Qe = M(Le);
      je += '<g class="muted-mark grip-mute" data-string="' + (Le + 1) + '" data-fret="' + Be + '">', je += '<circle cx="' + Re + '" cy="' + Qe + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', je += '<text x="' + Re + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', je += "</g>";
    }), je += "</svg>", je;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: P,
    noteName: V,
    scaleNotes: te,
    scaleTriads: Q,
    triadGrips: re,
    chordGrip: D,
    renderChordDiagram: me,
    selectionFromURL: we,
    selectionHref: G,
    renderBoard: le,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: ue,
    syncBoxSystem: Me,
    fingeringBoxes: H,
    boxOptions: ce,
    revealPositions: ae
  };
})();
globalThis.MusicMapFretboard = Ap;
function xd(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function Rp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function Lp(r) {
  const s = Rp(r), u = Math.round(s), c = (s - u) * 100;
  return { midi: u, cents: c };
}
const Ie = globalThis.MusicMapFretboard, He = (r) => (r % 12 + 12) % 12, $p = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Op = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (r, s = !1, u = !1) => (s ? Op : $p)[He(r)] + (u ? Math.floor(r / 12) - 1 : ""), oi = (r) => Ie.CHROM[He(r)], Yr = (r, s, u) => Ie.noteName(He(r), s, u);
function Fp(r, s) {
  const u = Math.floor(r / 12) - 1;
  return s[0] === "B" && He(r) < 2 ? u - 1 : s[0] === "C" && He(r) > 9 ? u + 1 : u;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], Oo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], ef = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], bp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, ft = (r, s) => ({ string: r, fret: s, midi: Ie.OPEN_PITCHES[r] + s });
function or(r, s, u) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, u - s + 1) }, (d, h) => ft(c, s + h)));
}
const Ge = (r) => `${r.string}:${r.fret}`, Ni = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, tf = (r, s) => s === "maj" ? `${oi(r)}-duurisointu` : s === "min" ? `${oi(r)}-mollisointu` : `${oi(r)}7-sointu`, Jr = [
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
], jd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function nf(r, s) {
  const u = jd[s] ?? jd.E, c = He(r - u.root);
  return u.frets.flatMap((d, h) => d === null ? [] : [ft(h, d + c)]);
}
const pa = {
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
}, wa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (r, s, u, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(s, Math.min(u, r)) : c, wn = (r, s, u) => s.includes(r) ? r : u;
function ga(r) {
  const s = { ...pa };
  s.mode = wn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], s.mode), s.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : s.strings, s.strings.length || (s.strings = [...pa.strings]), s.min = Math.round(li(r.min, 0, 24, s.min)), s.max = Math.round(li(r.max, s.min, 24, Math.max(s.min, s.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[u] == "boolean" && (s[u] = r[u]);
  return s.check = wn(r.check, ["class", "pitch"], s.check), s.input = wn(r.input, ["mic", "board"], s.input), s.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : s.rounds, s.root = Math.round(li(r.root, 0, 11, s.root)), s.scale = typeof r.scale == "string" && Object.hasOwn(Ie.SCALES, r.scale) ? r.scale : s.scale, s.box = Math.round(li(r.box, 0, 5, s.box)), s.order = wn(r.order, ["random", "up", "down"], s.order), s.chord = wn(r.chord, ["maj", "min", "dom7"], s.chord), s.chordTone = wn(r.chordTone, ["build", "random", "1", "3", "5", "7"], s.chordTone), s.chord !== "dom7" && s.chordTone === "7" && (s.chordTone = "build"), s.shape = wn(r.shape, ["C", "A", "G", "E", "D"], s.shape), s.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : s.intervals, s.intervals.length || (s.intervals = [...pa.intervals]), s.direction = wn(r.direction, ["up", "down", "both"], s.direction), s.hints = wn(r.hints, ["off", "always", "fade"], s.hints), s.activity = wn(r.activity, ["play", "degree"], s.activity), s.minRms = li(r.minRms, 1e-3, 0.15, s.minRms), s.clarity = li(r.clarity, 0.85, 0.99, s.clarity), s.stability = li(r.stability, 120, 800, s.stability), s.cents = li(r.cents, 10, 45, s.cents), s.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", s;
}
function Ip(r, s) {
  const u = new URLSearchParams(r), c = { ...s };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(d) && Object.assign(c, { [h]: u.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(d) && (c[h] = Number(u.get(d)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((d) => Number(d) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(d) && (c[h] = u.get(d) === "1");
  if (u.has("toonikka")) {
    const d = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], p = Math.max(Ie.CHROM.indexOf(h), m.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    p >= 0 && (c.root = p);
  }
  return ga(c);
}
function Dp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Ie.CHROM[r.root],
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
    kielet: r.strings.map((s) => s + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const _i = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, In = (r) => r.mode === "scale" && r.order !== "random", rf = (r) => ["note", "degree"].includes(_i(r)) ? "class" : In(r) ? "pitch" : r.check, da = (r) => _i(r) === "mic", Sd = "musiikin-kartta:harjoittelu", sf = 3, yo = () => ({ version: sf, settings: { ...pa }, stats: {}, recent: [], sessions: [] }), af = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, hn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function zp(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((s) => hn(r[s])) && r.correct <= r.attempts && (r.errors === void 0 || hn(r.errors)) && (r.ema === void 0 || hn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || hn(r.emaMs));
}
function Vp(r) {
  return !!r && typeof r.id == "string" && hn(r.count) && hn(r.first) && r.first <= r.count && hn(r.ms) && hn(r.at) && (r.solo === void 0 || hn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || hn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function wd(r) {
  if (!r) return yo();
  const s = JSON.parse(r);
  if (!s || ![1, 2, 3].includes(s.version) || !s.stats || typeof s.stats != "object" || Array.isArray(s.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(s.stats).some((m) => !zp(m))) throw new Error("Virheellisiä tilastoja");
  if (s.recent !== void 0 && (!Array.isArray(s.recent) || s.recent.some((m) => !m || typeof m.id != "string" || !hn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (s.sessions !== void 0 && (!Array.isArray(s.sessions) || s.sessions.some((m) => !Vp(m)))) throw new Error("Virheellisiä kierroksia");
  const u = s.version < 3, c = ga(s.settings ?? {}), d = u && s.settings?.hints !== "always" && s.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: sf,
    settings: c,
    stats: Object.fromEntries(Object.entries(s.stats).map(([m, p]) => [m, { ...p, errors: p.errors ?? 0 }])),
    recent: (s.recent ?? []).slice(-500),
    sessions: (s.sessions ?? []).slice(-200)
  };
  return (d || s.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Ed = 2500, Bp = 8e3, Nd = 0.3, Xr = (r) => r.ema ?? r.correct / r.attempts, Zr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Fo(r) {
  if (!r?.attempts) return null;
  const s = Math.max(0, Math.min(1, 1 - (Zr(r) - Ed) / (Bp - Ed)));
  return Xr(r) * 0.65 + s * 0.35;
}
function Kp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Fo(r)) * 3;
}
class Cd {
  constructor(s) {
    this.storage = s;
    try {
      this.data = wd(s?.getItem(Sd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = yo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Sd, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(s) {
    this.data.settings = s, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(s) {
    if (this.data.recent.some((m) => m.id === s.id)) return;
    const u = af(s), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(s.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + s.errors,
      totalMs: c.totalMs + s.ms,
      lastSeen: s.at,
      ema: c.attempts ? Xr(c) + Nd * (d - Xr(c)) : d,
      emaMs: c.attempts ? Zr(c) + Nd * (s.ms - Zr(c)) : s.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, s].slice(-500), this.save();
  }
  session(s) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== s.id), s].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(s) {
    if (!s.trim()) throw new Error("Tyhjä tiedosto");
    const u = wd(s);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...yo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Hp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Up = ["e", "B", "G", "D", "A", "E"];
function lf({ string: r }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Up[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const of = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Gp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function uf({ min: r, max: s }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - r + 1 }, (u, c) => {
      const d = r + c;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Hp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ar({ area: r, marks: s = [], mutedStrings: u = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta" }) {
  const m = { "--cols": r.max - r.min + 1 }, { strings: p, min: S, max: R } = r, [k, C] = O.useState({ string: Math.min(...p), fret: S }), P = O.useRef(null), $ = new Map(s.map((N) => [Ge(N), N])), b = s.map((N) => `${Ge(N)}${N.kind}`).join(",");
  O.useEffect(() => {
    const N = P.current, F = N?.querySelector(".target, .anchor");
    N && F && (N.scrollLeft += F.getBoundingClientRect().left - N.getBoundingClientRect().left - N.clientWidth / 2 + F.clientWidth / 2);
  }, [b]);
  const [w, E] = O.useState({ left: !1, right: !1 });
  O.useEffect(() => {
    const N = P.current;
    if (!N) return;
    const F = () => {
      const X = N.scrollLeft > 2, W = N.scrollLeft + N.clientWidth < N.scrollWidth - 2;
      E((M) => M.left === X && M.right === W ? M : { left: X, right: W });
    };
    F(), N.addEventListener("scroll", F, { passive: !0 });
    const I = typeof ResizeObserver > "u" ? null : new ResizeObserver(F);
    return I?.observe(N), () => {
      N.removeEventListener("scroll", F), I?.disconnect();
    };
  }, [b, S, R]);
  const z = p.includes(k.string) && k.fret >= S && k.fret <= R ? k : { string: Math.min(...p), fret: S };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: P, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board", style: m, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(uf, { min: S, max: R }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ie.OPEN_PITCHES.map((N, F) => /* @__PURE__ */ a.jsxs("tr", { className: p.includes(F) ? "" : "unused", style: of(F), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${rn[F]}${u.includes(F) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(lf, { string: F }),
          u.includes(F) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([F], S, R).map((I) => {
          const X = $.get(Ge(I)), W = `${rn[F]}-kieli, ${Ci(I.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${I.fret === 0 ? "open-fret " : ""}${X ? X.kind === "answer" ? "target" : X.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": F,
              "data-fret": I.fret,
              tabIndex: z.string === F && z.fret === I.fret ? 0 : -1,
              onFocus: () => C(I),
              onKeyDown: (M) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) return;
                M.preventDefault();
                const V = [...p].sort((ne, ue) => ne - ue), te = V.indexOf(F), fe = M.key === "ArrowUp" ? V[Math.max(0, te - 1)] : M.key === "ArrowDown" ? V[Math.min(V.length - 1, te + 1)] : F, Te = M.key === "Home" ? S : M.key === "End" ? R : Math.max(S, Math.min(R, I.fret + (M.key === "ArrowRight" ? 1 : M.key === "ArrowLeft" ? -1 : 0)));
                M.currentTarget.closest("table")?.querySelector(`button[data-string="${fe}"][data-fret="${Te}"]`)?.focus();
              },
              disabled: c || !p.includes(F),
              "aria-label": W + (X ? `, ${Gp[X.kind]}${X.label ? " " + X.label : ""}` : ""),
              onClick: () => d?.(I),
              children: X ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: X.label || "●" }) : null
            }
          ) }, I.fret);
        })
      ] }, F)) })
    ] }) })
  ] });
}
function Wp({ area: r, stats: s, input: u, check: c, flats: d }) {
  const { strings: h, min: m, max: p } = r, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": p - m + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(uf, { min: m, max: p }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ie.OPEN_PITCHES.map((R, k) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: of(k), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${rn[k]}`, children: /* @__PURE__ */ a.jsx(lf, { string: k }) }),
      or([k], m, p).map((C) => {
        const P = Object.hasOwn(s, S + Ge(C)) ? s[S + Ge(C)] : void 0, $ = Fo(P), b = $ === null ? "unseen" : P.attempts < 3 ? "few" : $ >= 0.8 ? "strong" : $ >= 0.5 ? "growing" : "weak", w = `${rn[k]}-kieli, ${Ci(C.fret)}, ${Fe(C.midi, d)}`, E = P ? `${Math.round($ * 100)} %, ${P.correct}/${P.attempts} heti oikein, viime aikoina ${Math.round(Xr(P) * 100)} % ja ${(Zr(P) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${b}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: $ === null ? "·" : P.attempts < 3 ? "?" : Math.round($ * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, C.fret);
      })
    ] }, k)) })
  ] }) });
}
const Qp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Ea = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ni[r.mode === "caged" ? "maj" : r.chord].tones, cf = (r) => Ie.fingeringBoxes(r.root, Ie.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Ti(r) {
  if (r.mode === "caged") {
    const s = nf(r.root, r.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...s), max: Math.max(...s), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const s = cf(r);
    return { strings: r.strings, min: s.start, max: s.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Yp(r) {
  const s = Ti(r);
  return s.fixed ? { ...s, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, s.min - 1), max: Math.min(24, s.max + 1) } : s;
}
function es(r) {
  const s = Ti(r), u = or(s.strings, s.min, s.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return u.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(He(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(nf(r.root, r.shape).map(Ge));
    return u.filter((m) => h.has(Ge(m)));
  }
  if (r.mode === "interval") return u;
  const c = u.filter((h) => Ea(r).some(([m]) => He(h.midi - r.root) === m));
  if (r.mode !== "scale" || !r.box) return c;
  const d = cf(r);
  return c.filter((h) => {
    const m = d.strings[h.string];
    return m.length > 0 && h.fret >= m[0] && h.fret <= m.at(-1);
  });
}
function df(r, s) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: s.flatMap((h) => s.filter((m) => m.midi === h.midi + (c === "down" ? -d : d)).map((m) => ({ reference: h, target: m })))
  }))).filter((c) => c.pairs.length);
}
function Jp(r) {
  const s = Ea(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? s : s.filter(([, u]) => u.endsWith(r.chordTone));
}
function go(r) {
  const s = es(r), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!s.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Jp(r).filter(([d]) => !s.some((h) => He(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${u}` : r.mode === "interval" && !df(r, s).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(r) && new Set(s.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Xp(r, s) {
  const u = [...new Map([...s].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? u.reverse() : u;
}
function ff(r) {
  return In(r) ? new Set(es(r).map((s) => s.midi)).size : r.rounds;
}
function Zp(r, s) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? s <= 3 ? 2 : s <= 6 ? 1 : 0 : 0;
}
function Zi(r, s, u = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = s.reduce((m, p) => m + p, 0), d = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let m = 0; m < r.length; m++)
    if (h -= s[m], h < 0) return r[m];
  return r.at(-1);
}
const _d = (r, s) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${s}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${s}:${r.activity}` : `scale:${r.root}:${r.scale}:${s}:${r.activity}`;
function Ei(r, s) {
  const u = r.filter((c) => !s(c));
  return u.length ? u : r;
}
function qp(r, s, u = {}, c, d = Math.random) {
  const h = go(r);
  if (h) throw new Error(h);
  const m = rf(r), p = _i(r), S = m === "pitch", R = (M) => r.weak ? Kp(u[af({ input: p, check: m, hint: !1, item: M })]) : 1, k = (M) => Zi(M, M.map(() => 1), d), C = es(r), P = { check: m, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const M = Ei(C, (fe) => !!c && Ge(fe) === Ge(c.position)), V = Zi(M, M.map((fe) => R(`notes:${Ge(fe)}`)), d), te = Fe(V.midi, r.flats, S);
    return {
      ...P,
      position: V,
      midi: V.midi,
      name: te,
      item: `notes:${Ge(V)}`,
      prompt: `Etsi ${te} ${Oo[V.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const M = (Te) => `ear-note:${He(Te.midi)}${r.reference ? ":ref" : ""}`, V = Ei(C, (Te) => !!c && He(Te.midi) === He(c.midi)), te = Zi(V, V.map((Te) => R(M(Te))), d), fe = r.reference ? 57 + 12 * Math.round((te.midi - 57) / 12) : void 0;
    return {
      ...P,
      position: te,
      midi: te.midi,
      name: Fe(te.midi, r.flats),
      item: M(te),
      choices: "note",
      reference: fe,
      sound: fe === void 0 ? [te.midi] : [fe, te.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const M = Ei(C, (te) => !!c && te.midi === c.midi), V = Zi(M, M.map((te) => R(`repeat:${te.midi}`)), d);
    return {
      ...P,
      position: V,
      midi: V.midi,
      name: Fe(V.midi, r.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const M = Ei(df(r, C), (fe) => c?.interval === fe.iv && c?.direction === fe.direction), V = Zi(M, M.map((fe) => R(`interval:${fe.iv}:${fe.direction}`)), d), te = k(Ei(V.pairs, (fe) => c?.reference === fe.reference.midi));
    return {
      ...P,
      position: te.target,
      midi: te.target.midi,
      name: Fe(te.target.midi, r.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: te.reference.midi,
      sound: [te.reference.midi, te.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(te.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const $ = Ea(r);
  let b, w = 0;
  if (In(r)) {
    const M = Xp(r, C);
    w = M.length, b = M[s % M.length];
  } else {
    const M = $.filter(([fe]) => C.some((Te) => He(Te.midi - r.root) === fe)), V = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [$[s % $.length]] : $.filter(([, fe]) => fe.endsWith(r.chordTone)) : Ei(M, ([fe]) => c?.interval === fe), [te] = Zi(V, V.map(([fe]) => R(_d(r, fe))), d);
    b = k(Ei(C.filter((fe) => He(fe.midi - r.root) === te), (fe) => !!c && Ge(fe) === Ge(c.position)));
  }
  const E = He(b.midi - r.root), z = $.find(([M]) => M === E)[1], N = Yr(r.root, E, z), F = S ? N + Fp(b.midi, N) : N, I = r.mode === "scale" ? `${oi(r.root)}-${Ie.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${oi(r.root)}-duurisointu, ${r.shape}-muoto` : tf(r.root, r.chord), X = r.mode !== "caged" && r.activity === "degree", W = X ? `${I}: mikä aste on ${N}?` : w ? `${I} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${s % w + 1}/${w}: ${z}. aste (${F}).` : `${I}: etsi ${z}. aste${S ? ` (${F})` : ""}.`;
  return {
    ...P,
    position: b,
    midi: b.midi,
    name: F,
    item: _d(r, E),
    prompt: W,
    degree: z,
    interval: E,
    choices: X ? "degree" : "position"
  };
}
function xo(r, s, u) {
  return Number.isInteger(s) && (u === "class" ? He(r) === He(s) : r === s);
}
function hf(r, s, u) {
  return xo(s.midi, u.midi, s.check) ? r.mode === "notes" ? u.string === s.position.string : Qp(r) ? es(r).some((c) => Ge(c) === Ge(u)) : !0 : !1;
}
function em(r, s) {
  const u = Ti(r);
  return or(u.strings, u.min, u.max).filter((c) => hf(r, s, c));
}
const Et = (r, s, u) => ({ ...r, label: s, kind: u }), tm = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function nm(r, s, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, d = Ti(r), h = or(d.strings, d.min, d.max), m = em(r, s);
  if (r.mode === "notes") {
    if (c) return { marks: m.map((z) => Et(z, s.name, "answer")), text: `${s.name} on ${ef[s.position.string]}: ${Ci(s.position.fret)}.` };
    const w = h.find((z) => z.string === s.position.string), E = Fe(w.midi, r.flats);
    return {
      marks: [Et(w, E, "anchor")],
      text: `Apupiste: ${bp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Et(s.position, s.name, "answer")], text: `Sävel on ${s.name}.` } : { marks: [Et(s.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[s.position.string]}-kieli, ${Ci(s.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: m.map((w) => Et(w, Fe(w.midi, r.flats, s.check === "pitch"), "answer")), text: `Sävel on ${s.name}.` } : { marks: [], text: `Sävel löytyy ${Oo[s.position.string]}.` };
  if (r.mode === "interval") {
    const w = Fe(s.reference, r.flats, !0), E = h.filter((z) => z.midi === s.reference).map((z) => Et(z, w, "anchor"));
    return c ? {
      marks: [...E, ...m.map((z) => Et(z, Fe(z.midi, r.flats, !0), "answer"))],
      text: `${tm(Jr[s.interval])} ${s.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${s.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${s.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const p = es(r), S = Ea(r), R = (w) => S.find(([E]) => E === He(w.midi - r.root))?.[1] ?? "", k = Yr(r.root, s.interval, s.degree), C = p.filter((w) => He(w.midi - r.root) === 0), P = (w) => m.some((E) => Ge(E) === Ge(w)), $ = `${s.degree}. aste on ${k}.`;
  if (r.mode === "caged")
    return c ? { marks: p.map((w) => Et(w, R(w), P(w) ? "answer" : "shape")), text: $ } : { marks: p.map((w) => Et(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${s.degree}. aste?` };
  const b = r.mode === "scale" ? "asteikon" : "soinnun";
  if (s.choices === "degree") {
    const w = p.filter((E) => He(E.midi) === He(s.midi));
    return c ? { marks: [...(s.interval === 0 ? [] : C).map((E) => Et(E, "1", "anchor")), ...w.map((E) => Et(E, s.degree, "answer"))], text: `${k} on ${s.degree}. aste.` } : s.interval === 0 ? { marks: w.map((E) => Et(E, k, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((E) => Et(E, "1", "anchor")), ...w.map((E) => Et(E, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !P(w)).map((w) => Et(w, "1", "anchor")), ...m.map((w) => Et(w, s.degree, "answer"))], text: $ } : s.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${oi(r.root)}.` } : { marks: C.map((w) => Et(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${s.degree}. aste on ${s.interval} puoliaskelta perussävelen yläpuolella.` };
}
class im {
  constructor(s, u, c, d = () => performance.now(), h = Math.random) {
    this.settings = s, this.stats = u, this.record = c, this.now = d, this.random = h, this.total = ff(s);
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
      this.question = qp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Zp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(s) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(s))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(s, u, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? s === h.interval : u === "note" ? xo(h.midi, s, "class") : u === "board" ? !!c && hf(this.settings, h, c) : xo(h.midi, s, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const p = u === "board" ? c : void 0, S = {
      id: `${this.id}:${this.index}`,
      item: p && this.settings.mode === "notes" ? `notes:${Ge(p)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: s,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return p ? S.position = Ge(p) : this.settings.mode === "notes" && (S.position = Ge(h.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function jo(r) {
  const s = r.filter((u) => !u.hint);
  return {
    count: r.length,
    first: r.filter((u) => u.first).length,
    solo: s.length,
    soloFirst: s.filter((u) => u.first).length,
    guided: r.length - s.length,
    ms: r.reduce((u, c) => u + c.ms, 0)
  };
}
const So = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], tr = (r) => So.find(([s]) => s === r)?.[1] ?? r;
function Lt({ label: r, children: s }) {
  const u = O.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: u, children: r }),
    O.cloneElement(s, { id: u })
  ] });
}
function Td({ legend: r, name: s, value: u, options: c, onChange: d, disabled: h }) {
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ a.jsx("legend", { children: r }),
    /* @__PURE__ */ a.jsx("div", { className: "choice-row", children: c.map((m) => /* @__PURE__ */ a.jsxs("label", { className: m.value === u ? "selected" : "", children: [
      /* @__PURE__ */ a.jsx("input", { type: "radio", name: s, value: m.value, checked: m.value === u, onChange: () => d(m.value) }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: m.title }),
        /* @__PURE__ */ a.jsx("small", { children: m.summary })
      ] })
    ] }, m.value)) })
  ] });
}
function Md(r) {
  const s = Ti(r), u = ff(r), c = _i(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = s.fixed === "shape" ? `${r.shape}-muoto, nauhat ${s.min}–${s.max}` : s.fixed === "box" ? `boksi ${r.box}, nauhat ${s.min}–${s.max}` : `nauhat ${s.min}–${s.max}`, m = s.strings.length === 6 ? "" : ` · kielet ${s.strings.map((p) => p + 1).join(", ")}`;
  return `${wa[r.hints].title} · ${d} · ${In(r) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${m}`;
}
function Pd({ s: r, change: s, locked: u, problem: c }) {
  const d = O.useId(), h = (k, C) => s({ ...r, [k]: C }), m = Ti(r), p = _i(r) === "note" || _i(r) === "degree", S = ["scale", "chord", "caged"].includes(r.mode), R = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Lt, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: r.mode, onChange: (k) => h("mode", k.target.value), children: So.map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C }, k)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: So.find(([k]) => k === r.mode)[2] })
    ] }),
    S && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Lt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: r.root, onChange: (k) => h("root", Number(k.target.value)), children: Ie.CHROM.map((k, C) => /* @__PURE__ */ a.jsx("option", { value: C, children: k }, k)) }) }),
      r.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Lt, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: r.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(Ie.SCALES).map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ a.jsx(Lt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: r.box, onChange: (k) => h("box", Number(k.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ a.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ a.jsx(Lt, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: r.order, onChange: (k) => h("order", k.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Lt, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: r.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(Ni).map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ a.jsx(Lt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: r.chordTone, onChange: (k) => h("chordTone", k.target.value), children: [
          /* @__PURE__ */ a.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            r.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ a.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ a.jsxs("option", { value: "3", children: [
            "Terssi · ",
            r.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ a.jsx("option", { value: "5", children: "Kvintti · 5" }),
          r.chord === "dom7" && /* @__PURE__ */ a.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      r.mode === "caged" ? /* @__PURE__ */ a.jsx(Lt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: r.shape, onChange: (k) => h("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ a.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ a.jsx(Lt, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: r.activity, onChange: (k) => h("activity", k.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.intervals.includes(k), onChange: (C) => h("intervals", C.target.checked ? [...r.intervals, k] : r.intervals.filter((P) => P !== k)) }),
        Jr[k]
      ] }, k)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Lt, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: r.direction, onChange: (k) => h("direction", k.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Td,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (k) => h("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...wa[k] }))
      }
    ),
    p ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Td, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Lt, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: r.rounds, disabled: In(r), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !p && /* @__PURE__ */ a.jsx(Lt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: In(r) ? "pitch" : r.check, disabled: In(r), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Lt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(r.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ a.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ a.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(r) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      m.fixed ? /* @__PURE__ */ a.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        m.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        m.min,
        "–",
        m.max,
        "."
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ a.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === k, onClick: () => s({ ...r, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsx(Lt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Lt, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: rn.map((k, C) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.strings.includes(C), onChange: (P) => h("strings", P.target.checked ? [...r.strings, C] : r.strings.filter(($) => $ !== C)) }),
          C + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "check-row", children: [
        R && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (k) => h("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.reference, onChange: (k) => h("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.weak, onChange: (k) => h("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.advance, onChange: (k) => h("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const rm = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function sm({ onSelect: r }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: rm.map((s) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(s.id), children: [
      /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: s.number }),
      /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ a.jsx("strong", { children: s.title }),
        /* @__PURE__ */ a.jsx("span", { children: s.description }),
        /* @__PURE__ */ a.jsx("small", { children: s.example })
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, s.id)) })
  ] });
}
const am = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, wo = 100, pf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function bo(r) {
  if (r === null || r.trim() === "") return wo;
  const s = Number(r);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : wo;
}
function lm() {
  try {
    return bo(localStorage.getItem(pf));
  } catch {
    return wo;
  }
}
function om(r) {
  try {
    localStorage.setItem(pf, String(bo(String(r))));
  } catch {
  }
}
function Ad(r, s, u = !0) {
  return u ? am[r] * bo(String(s)) / 100 : 0;
}
function mf(r = () => new Audio()) {
  try {
    const s = r();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const um = 0.12, cm = 2e3, dm = 3;
function fm(r, s = !1) {
  return s ? !0 : r.atLoopBoundary || r.drift <= um || r.seeking || r.readyState < dm ? !1 : r.msSinceLastFix >= cm;
}
const hm = 1.5, pm = 0.4, mm = 0.5;
let Eo = null, vm = null;
function km(r) {
  return Eo !== null ? Eo : (vm ??= mf()) ? 0 : pm;
}
class vf {
  constructor(s = km()) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, u, c = !1, d = performance.now()) {
    if (u.readyState < 1 || s.readyState < 1 || !c && (u.paused || s.paused)) return !1;
    const h = u.currentTime - s.currentTime, m = Math.abs(h), p = s.loop && Number.isFinite(s.duration) && Math.abs(m - s.duration) < 0.35, S = this.lastFix.get(u);
    if (!fm({
      drift: m,
      atLoopBoundary: p,
      seeking: u.seeking,
      readyState: u.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, c)) return !1;
    const R = !s.paused;
    !c && R && S !== void 0 && (this.latency = Math.min(hm, Math.max(0, this.latency - mm * h)), Eo = this.latency);
    let k = s.currentTime + (R ? this.latency : 0);
    Number.isFinite(u.duration) && (k = Math.min(k, Math.max(0, u.duration - 0.05)));
    try {
      u.currentTime = k;
    } catch {
      return !1;
    }
    return R ? this.lastFix.set(u, d) : this.lastFix.delete(u), !0;
  }
}
const ym = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class gm {
  constructor(s = ym) {
    this.create = s;
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
  route(s) {
    if (this.gains.has(s)) return !0;
    if (!this.context) return !1;
    try {
      const u = this.context.createMediaElementSource(s), c = this.context.createGain();
      return u.connect(c), c.connect(this.context.destination), this.gains.set(s, c), !0;
    } catch {
      return !1;
    }
  }
  routed(s) {
    return !!s && this.gains.has(s);
  }
  setLevel(s, u) {
    const c = this.gains.get(s);
    c && (c.gain.value = u);
  }
  close() {
    const s = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), s?.close().catch(() => {
    });
  }
}
const xm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", jm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Rd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const s = Math.floor(r);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function kf() {
  const r = O.useRef(null), s = O.useRef(null), [u, c] = O.useState(!1), [d, h] = O.useState(!1), [m, p] = O.useState(!1), [S, R] = O.useState(0), [k, C] = O.useState(0), [P, $] = O.useState(""), b = O.useRef(new vf());
  function w(I = !1) {
    const X = r.current, W = s.current;
    !X || !W || !Number.isFinite(X.currentTime) || b.current.align(X, W, I);
  }
  function E() {
    r.current?.pause(), s.current?.pause(), c(!1);
  }
  async function z() {
    const I = r.current, X = s.current;
    if (!(!I || !X)) {
      if (u) {
        E();
        return;
      }
      $(""), X.muted = !d, X.volume = 0.55, I.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [I.play(), X.play()] : [I.play()]), w(), c(!0);
      } catch {
        E(), $("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function N(I) {
    const X = r.current, W = s.current;
    if (!(!X || !W || !Number.isFinite(I))) {
      X.currentTime = I;
      try {
        W.currentTime = I;
      } catch {
      }
      R(I);
    }
  }
  function F(I) {
    const X = r.current, W = s.current;
    if (h(I), !!W) {
      if (W.muted = !I, !I) {
        W.pause();
        return;
      }
      !X || !u || (w(!0), W.play().catch(() => $("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return O.useEffect(() => {
    const I = () => {
      document.hidden && (r.current?.pause(), s.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", I), () => {
      document.removeEventListener("visibilitychange", I), r.current?.pause(), s.current?.pause();
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
              onChange: (I) => F(I.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (I) => p(I.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        z();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(S, k > 0 ? k : 1),
          disabled: !k,
          onChange: (I) => N(Number(I.target.value))
        }
      ),
      /* @__PURE__ */ a.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Rd(S),
        " / ",
        Rd(k)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: xm,
        loop: m,
        onLoadedMetadata: (I) => C(I.currentTarget.duration),
        onTimeUpdate: (I) => {
          R(I.currentTarget.currentTime), I.currentTarget.paused || w();
        },
        onEnded: () => {
          r.current?.loop || (s.current?.pause(), c(!1), R(k));
        },
        onPause: () => {
          s.current?.pause(), c(!1);
        },
        onError: () => $("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: jm,
        muted: !0,
        loop: m,
        onLoadedMetadata: () => {
          const I = r.current, X = s.current;
          I?.duration && X?.duration && Math.abs(I.duration - X.duration) > 0.15 && $("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => $("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    P && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: P }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Sm = 4e3;
class Ld extends Error {
  name = "MicSetupError";
}
async function wm(r, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Ld("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const u = {
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
  }, c = await navigator.mediaDevices.getUserMedia(u);
  let d;
  try {
    if (d = s ? s() : new AudioContext(), d.state !== "running") {
      let R;
      await Promise.race([
        d.resume(),
        new Promise((k, C) => {
          R = setTimeout(() => C(new Ld("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Sm);
        })
      ]).finally(() => clearTimeout(R));
    }
    const h = d.createMediaStreamSource(c), m = d, p = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = p?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: c,
      label: p?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((R) => R.stop()), h.disconnect(), s || m.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((m) => m.stop()), s || await d?.close().catch(() => {
    }), h;
  }
}
async function Em() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((s) => s.kind === "audioinput" && s.deviceId) : [];
}
var co, $d;
function Nm() {
  if ($d) return co;
  $d = 1;
  function r(s) {
    if (this.size = s | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = s << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const R = Math.PI * c / this.size;
      u[c] = Math.cos(R), u[c + 1] = -Math.sin(R);
    }
    this.table = u;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var m = 0; m < this._bitrev.length; m++) {
      this._bitrev[m] = 0;
      for (var p = 0; p < this._width; p += 2) {
        var S = this._width - p - 2;
        this._bitrev[m] |= (m >>> p & 3) << S;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return co = r, r.prototype.fromComplexArray = function(u, c) {
    for (var d = c || new Array(u.length >>> 1), h = 0; h < u.length; h += 2)
      d[h >>> 1] = u[h];
    return d;
  }, r.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, r.prototype.toComplexArray = function(u, c) {
    for (var d = c || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = u[h >>> 1], d[h + 1] = 0;
    return d;
  }, r.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, d = c >>> 1, h = 2; h < d; h += 2)
      u[c - h] = u[h], u[c - h + 1] = -u[h + 1];
  }, r.prototype.transform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < u.length; d++)
      u[d] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, m = c / h << 1, p, S, R = this._bitrev;
    if (m === 4)
      for (p = 0, S = 0; p < c; p += m, S++) {
        const E = R[S];
        this._singleTransform2(p, E, h);
      }
    else
      for (p = 0, S = 0; p < c; p += m, S++) {
        const E = R[S];
        this._singleTransform4(p, E, h);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var P = m >>> 2;
      for (p = 0; p < c; p += m)
        for (var $ = p + P, b = p, w = 0; b < $; b += 2, w += h) {
          const E = b, z = E + P, N = z + P, F = N + P, I = u[E], X = u[E + 1], W = u[z], M = u[z + 1], V = u[N], te = u[N + 1], fe = u[F], Te = u[F + 1], ne = I, ue = X, Me = C[w], H = k * C[w + 1], ae = W * Me - M * H, ce = W * H + M * Me, Q = C[2 * w], re = k * C[2 * w + 1], Z = V * Q - te * re, g = V * re + te * Q, D = C[3 * w], me = k * C[3 * w + 1], we = fe * D - Te * me, G = fe * me + Te * D, le = ne + Z, B = ue + g, ee = ne - Z, j = ue - g, Y = ae + we, ie = ce + G, se = k * (ae - we), de = k * (ce - G), ke = le + Y, Ae = B + ie, Ce = le - Y, $e = B - ie, Je = ee + de, Be = j - se, We = ee - de, Ke = j + se;
          u[E] = ke, u[E + 1] = Ae, u[z] = Je, u[z + 1] = Be, u[N] = Ce, u[N + 1] = $e, u[F] = We, u[F + 1] = Ke;
        }
    }
  }, r.prototype._singleTransform2 = function(u, c, d) {
    const h = this._out, m = this._data, p = m[c], S = m[c + 1], R = m[c + d], k = m[c + d + 1], C = p + R, P = S + k, $ = p - R, b = S - k;
    h[u] = C, h[u + 1] = P, h[u + 2] = $, h[u + 3] = b;
  }, r.prototype._singleTransform4 = function(u, c, d) {
    const h = this._out, m = this._data, p = this._inv ? -1 : 1, S = d * 2, R = d * 3, k = m[c], C = m[c + 1], P = m[c + d], $ = m[c + d + 1], b = m[c + S], w = m[c + S + 1], E = m[c + R], z = m[c + R + 1], N = k + b, F = C + w, I = k - b, X = C - w, W = P + E, M = $ + z, V = p * (P - E), te = p * ($ - z), fe = N + W, Te = F + M, ne = I + te, ue = X - V, Me = N - W, H = F - M, ae = I - te, ce = X + V;
    h[u] = fe, h[u + 1] = Te, h[u + 2] = ne, h[u + 3] = ue, h[u + 4] = Me, h[u + 5] = H, h[u + 6] = ae, h[u + 7] = ce;
  }, r.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, m = c / h << 1, p, S, R = this._bitrev;
    if (m === 4)
      for (p = 0, S = 0; p < c; p += m, S++) {
        const _e = R[S];
        this._singleRealTransform2(p, _e >>> 1, h >>> 1);
      }
    else
      for (p = 0, S = 0; p < c; p += m, S++) {
        const _e = R[S];
        this._singleRealTransform4(p, _e >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var P = m >>> 1, $ = P >>> 1, b = $ >>> 1;
      for (p = 0; p < c; p += m)
        for (var w = 0, E = 0; w <= b; w += 2, E += h) {
          var z = p + w, N = z + $, F = N + $, I = F + $, X = u[z], W = u[z + 1], M = u[N], V = u[N + 1], te = u[F], fe = u[F + 1], Te = u[I], ne = u[I + 1], ue = X, Me = W, H = C[E], ae = k * C[E + 1], ce = M * H - V * ae, Q = M * ae + V * H, re = C[2 * E], Z = k * C[2 * E + 1], g = te * re - fe * Z, D = te * Z + fe * re, me = C[3 * E], we = k * C[3 * E + 1], G = Te * me - ne * we, le = Te * we + ne * me, B = ue + g, ee = Me + D, j = ue - g, Y = Me - D, ie = ce + G, se = Q + le, de = k * (ce - G), ke = k * (Q - le), Ae = B + ie, Ce = ee + se, $e = j + ke, Je = Y - de;
          if (u[z] = Ae, u[z + 1] = Ce, u[N] = $e, u[N + 1] = Je, w === 0) {
            var Be = B - ie, We = ee - se;
            u[F] = Be, u[F + 1] = We;
            continue;
          }
          if (w !== b) {
            var Ke = j, gt = -Y, Xe = B, ze = -ee, nt = -k * ke, Mt = -k * de, Gt = -k * se, zt = -k * ie, sn = Ke + nt, Wt = gt + Mt, ct = Xe + zt, Dn = ze - Gt, je = p + $ - w, Qt = p + P - w;
            u[je] = sn, u[je + 1] = Wt, u[Qt] = ct, u[Qt + 1] = Dn;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(u, c, d) {
    const h = this._out, m = this._data, p = m[c], S = m[c + d], R = p + S, k = p - S;
    h[u] = R, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(u, c, d) {
    const h = this._out, m = this._data, p = this._inv ? -1 : 1, S = d * 2, R = d * 3, k = m[c], C = m[c + d], P = m[c + S], $ = m[c + R], b = k + P, w = k - P, E = C + $, z = p * (C - $), N = b + E, F = w, I = -z, X = b - E, W = w, M = z;
    h[u] = N, h[u + 1] = 0, h[u + 2] = F, h[u + 3] = I, h[u + 4] = X, h[u + 5] = 0, h[u + 6] = W, h[u + 7] = M;
  }, co;
}
var Cm = Nm();
const _m = /* @__PURE__ */ jp(Cm);
class Gr {
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
  static forFloat32Array(s) {
    return new Gr(
      s,
      (u) => new Float32Array(u)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(s) {
    return new Gr(
      s,
      (u) => new Float64Array(u)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(s) {
    return new Gr(s, (u) => Array(u));
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
  constructor(s, u) {
    if (s < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = s, this._fft = new _m(Pm(2 * s)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(s, u = this._bufferSupplier(s.length)) {
    if (s.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${s.length}`
      );
    for (let d = 0; d < s.length; d++)
      this._paddedInputBuffer[d] = s[d];
    for (let d = s.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let d = 0; d < c.length; d += 2)
      c[d] = c[d] * c[d] + c[d + 1] * c[d + 1], c[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < s.length; d++)
      u[d] = this._inverseBuffer[2 * d];
    return u;
  }
}
function Tm(r) {
  const s = [];
  let u = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (u = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (u = !1, d !== -1 && s.push(d)) : u && r[h] > c && (c = r[h], d = h);
  return s;
}
function Mm(r, s) {
  const [u, c, d] = [r - 1, r, r + 1], [h, m, p] = [s[u], s[c], s[d]], S = h / 2 - m + p / 2, R = -(h / 2) * (c + d) + m * (u + d) - p / 2 * (u + c), k = h * c * d / 2 - m * u * d + p * u * c / 2, C = -R / (2 * S), P = S * C * C + R * C + k;
  return [C, P];
}
class Wr {
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
  static forFloat32Array(s) {
    return new Wr(s, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new Wr(s, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new Wr(s, (u) => Array(u));
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
  constructor(s, u) {
    this._autocorrelator = new Gr(s, u), this._nsdfBuffer = u(s);
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
  set clarityThreshold(s) {
    if (!Number.isFinite(s) || s <= 0 || s > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = s;
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
  set minVolumeAbsolute(s) {
    if (!Number.isFinite(s) || s < 0 || s > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = s;
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
  set minVolumeDecibels(s) {
    if (!Number.isFinite(s) || s > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (s / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(s) {
    if (!Number.isFinite(s) || s <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = s;
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
  findPitch(s, u) {
    if (this._belowMinimumVolume(s)) return [0, 0];
    this._nsdf(s);
    const c = Tm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * d
    ), [m, p] = Mm(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / m, Math.min(p, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(s) {
    if (this._minVolumeAbsolute === 0) return !1;
    let u = 0;
    for (let c = 0; c < s.length; c++)
      u += s[c] ** 2;
    return Math.sqrt(u / s.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(s) {
    this._autocorrelator.autocorrelate(s, this._nsdfBuffer);
    let u = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && u > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / u, u -= s[c] ** 2 + s[s.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function Pm(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function Am(r) {
  const s = r * 0.17;
  let u = 2048;
  for (; u < s && u < 32768; ) u *= 2;
  return u;
}
const Rm = 0.05, Lm = 1.5;
class $m {
  constructor(s, u = {}) {
    this.mic = s, this.opts = u;
    const c = s.context, d = Am(c.sampleRate), h = Math.max(1, Math.min(2, s.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), s.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? h : 1); m++) {
      const p = c.createAnalyser();
      p.fftSize = d, p.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(p, m) : s.source.connect(p), this.analysers.push(p), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Rm))), this.detector = Wr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Om();
  onset = new Fm();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(s) {
    Object.assign(this.opts, s);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const s = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(s));
    };
    this.rafId = requestAnimationFrame(s);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const s of this.analysers) s.disconnect();
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
  processFrame(s) {
    const {
      minClarity: u = 0.9,
      minRms: c = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: m = 70,
      maxFreq: p = 1450,
      onFrame: S,
      onStableNote: R
    } = this.opts, k = this.analysers.map((M, V) => (M.getFloatTimeDomainData(this.buffers[V]), Od(this.buffers[V], this.buffers[V].length - this.shortLength))), C = k.indexOf(Math.max(...k));
    C !== this.channel && k[C] > (k[this.channel] ?? 0) * Lm && (this.channel = C);
    const P = this.buffers[this.channel], $ = k[this.channel], b = bm(P, P.length - this.shortLength), w = { rms: $, peak: b, channel: this.channel, levels: k }, E = $ < c, z = this.onset.feed($, s, c);
    if (E && Od(P, 0) < c) {
      this.gate.feed(null, s, d, !0, !1), S?.({ ...w, status: "silent" });
      return;
    }
    const [N, F] = this.detector.findPitch(P, this.mic.context.sampleRate);
    if (!isFinite(N) || F < u) {
      this.gate.feed(null, s, d, E, z), S?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(F) ? F : 0 });
      return;
    }
    if (N < m || N > p) {
      this.gate.feed(null, s, d, E, z), S?.({ ...w, status: "out-of-range", frequency: N, clarity: F });
      return;
    }
    const { midi: I, cents: X } = Lp(N);
    if (Math.abs(X) > h) {
      this.gate.feed(null, s, d, E, z), S?.({ ...w, status: "off-pitch", frequency: N, clarity: F, midi: I, cents: X });
      return;
    }
    S?.({ ...w, status: "pitch", frequency: N, clarity: F, midi: I, cents: X });
    const W = this.gate.feed(I, s, d, E, z);
    W !== null && R?.({ midi: I, frequency: N, cents: X, clarity: F, timestamp: s, heldMs: W.heldMs });
  }
}
class Om {
  constructor(s = 120, u = 80) {
    this.releaseMs = s, this.gapMs = u;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(s, u, c, d, h) {
    if (d ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), s === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== s) && (this.current = { midi: s, since: u, seen: u }), this.current.seen = u;
    const m = u - this.current.since;
    return m < c ? null : (this.armed = !1, this.current = null, { midi: s, heldMs: m });
  }
}
class Fm {
  constructor(s = 2, u = 300, c = 150) {
    this.ratio = s, this.windowMs = u, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(s, u, c) {
    if (u - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: u, rms: s }], !1;
    for (; this.history.length && u - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : s;
    return this.history.push({ time: u, rms: s }), s < c * 1.5 || s < d * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: s }], !0);
  }
}
function Od(r, s = 0) {
  const u = Math.max(0, s);
  let c = 0;
  for (let d = u; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - u));
}
function bm(r, s = 0) {
  let u = 0;
  for (let c = Math.max(0, s); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > u && (u = d);
  }
  return u;
}
const lr = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let er;
function yf() {
  return (!er || er.state === "closed") && (er = new AudioContext()), er;
}
function Im() {
  const r = er;
  er = void 0, r?.close().catch(() => {
  });
}
const gf = (r) => r instanceof Error ? r.name : "";
function Dm(r) {
  const s = gf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class zm {
  constructor(s = (u) => wm(u, yf)) {
    this.opener = s;
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
  async start(s, u, c) {
    this.stop();
    const d = this.generation;
    let h, m = !1;
    try {
      h = await this.opener(s || void 0);
    } catch (p) {
      if (!s || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(gf(p))) throw p;
      h = await this.opener(void 0), m = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new $m(h, { ...u });
      const p = () => {
        this.mic === h && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((R) => R.addEventListener("ended", p, { once: !0, signal: S.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && p();
      }, { signal: S.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: m };
    } catch (p) {
      throw this.stop(), p;
    }
  }
  setOptions(s) {
    this.loop?.setOptions(s);
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
function xf(r, s) {
  return r !== "on" ? r : !s || s.status === "silent" ? "silent" : s.status === "pitch" ? "pitch" : s.status === "off-pitch" ? "untuned" : "noise";
}
const Fd = (r) => Math.max(0, Math.min(1, (lr(r) + 60) / 60));
function Vm(r) {
  const s = [...r].sort((c, d) => c - d), u = s[Math.min(s.length - 1, Math.floor(s.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
async function bd(r) {
  const s = () => r.state === "running";
  if (s()) return;
  let u;
  try {
    await Promise.race([
      r.resume(),
      new Promise((c, d) => {
        u = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    u !== void 0 && clearTimeout(u);
  }
  if (!s()) throw new Error("reference-audio-not-running");
}
function jf(r) {
  const s = r instanceof Error ? r.message : "";
  return s === "reference-audio-resume-timeout" || s === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Io {
  constructor(s = yf) {
    this.provide = s;
  }
  provide;
  master;
  token = 0;
  timer;
  loopTick;
  adjustLoopTempo;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), clearInterval(this.loopTick), this.loopTick = void 0, this.adjustLoopTempo = void 0, this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(s) {
    this.stop();
    const u = this.token, c = this.provide();
    if (await bd(c), u !== this.token) return !1;
    const d = c.createGain();
    d.connect(c.destination), this.master = d;
    const h = Array.from({ length: 12 }, (S, R) => 1 / (R + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return s.forEach((S, R) => {
      const k = c.createOscillator(), C = c.createGain(), P = c.currentTime + 0.05 + R * 0.8;
      m ? k.setPeriodicWave(m) : k.type = "triangle", k.frequency.value = xd(S), C.gain.setValueAtTime(0, P), C.gain.linearRampToValueAtTime(0.22, P + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, P + 0.7), k.connect(C), C.connect(d), k.start(P), k.stop(P + 0.72);
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), s.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, d.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(s) {
    this.adjustLoopTempo?.(s);
  }
  async loop(s, u, c = 75) {
    if (this.stop(), !s.length) return !1;
    const d = this.token, h = this.provide();
    if (await bd(h), d !== this.token) return !1;
    const m = h.createGain();
    m.connect(h.destination), this.master = m;
    const p = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), S = h.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    let R = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (R = 60 / Math.max(40, Math.min(140, w)));
    };
    const k = 1.6;
    let C = h.currentTime + 0.05, P = 0;
    const $ = [], b = () => {
      if (d === this.token) {
        if (C < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - C) / R);
          C += w * R, P = (P + w) % s.length, $.length = 0;
        }
        for (; C < h.currentTime + k; ) {
          const w = s[P], E = P, z = C, N = h.createOscillator(), F = h.createGain();
          S ? N.setPeriodicWave(S) : N.type = "triangle", N.frequency.value = xd(w), F.gain.setValueAtTime(0, z), F.gain.linearRampToValueAtTime(0.22, z + 0.012), F.gain.exponentialRampToValueAtTime(1e-3, z + R * 0.975), N.connect(F), F.connect(m), N.start(z), N.stop(z + R * 0.985), $.push({ at: z, index: E }), C += R, P = (P + 1) % s.length;
        }
        for (; $.length && $[0].at <= h.currentTime + 0.01; ) {
          const w = $.shift();
          u?.(w.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const No = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), Sf = [...new Map(No.flatMap((r) => r.positions[0].strings.flatMap((s, u) => s.map((c) => {
  const d = ft(u, c);
  return [Ge(d), d];
})))).values()].sort((r, s) => r.midi - s.midi || s.string - r.string), xa = [5, 4, 3, 2, 1, 0].flatMap((r) => Sf.filter((s) => s.string === r).sort((s, u) => s.fret - u.fret)), Co = [
  ...xa,
  ...xa.slice(1, -1).reverse()
], Bm = [...Co, xa[0]], Id = new Set(
  No[0].positions[0].strings.flatMap((r, s) => r.map((u) => {
    const c = ft(s, u);
    return Ge(c);
  })).filter((r) => No[1].positions[0].strings.flatMap((s, u) => s.map((c) => Ge(ft(u, c)))).includes(r))
), Km = [
  ft(5, 5),
  ft(5, 8),
  ft(5, 10),
  ft(4, 7),
  ft(4, 10),
  ft(3, 7),
  ft(3, 10),
  ft(3, 7),
  ft(4, 10),
  ft(4, 7),
  ft(5, 10),
  ft(5, 8),
  ft(5, 5)
], wf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ef = "musiikin-kartta:skaalapolku:bridge-tempo:v1", fo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], Dd = (r) => He(r) === 9;
function zd() {
  try {
    const r = Number(localStorage.getItem(wf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Hm() {
  try {
    const r = Number(localStorage.getItem(Ef));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Um({ onBack: r, onPosition: s }) {
  const [u, c] = O.useState(zd), [d, h] = O.useState(zd), [m, p] = O.useState(!1), [S, R] = O.useState("roots"), [k, C] = O.useState(Hm), [P, $] = O.useState(null), [b, w] = O.useState(null), [E, z] = O.useState(""), N = O.useRef(new Io()), F = O.useRef(0), I = b === null ? null : Co[b];
  function X() {
    F.current++, N.current.stop(), $(null), w(null);
  }
  O.useEffect(() => {
    const ne = () => {
      document.hidden && (F.current++, N.current.stop(), $(null), w(null));
    };
    return document.addEventListener("visibilitychange", ne), () => {
      document.removeEventListener("visibilitychange", ne), F.current++, N.current.stop();
    };
  }, []);
  async function W(ne) {
    const ue = ++F.current;
    N.current.stop(), w(null), z(""), $(ne);
    try {
      ne === "transition" ? await N.current.play(Km.map((Me) => Me.midi)) : ne === "once" ? await N.current.play(Bm.map((Me) => Me.midi)) : await N.current.loop(Co.map((Me) => Me.midi), (Me) => {
        ue === F.current && w(Me);
      }, k);
    } catch (Me) {
      ue === F.current && z(jf(Me));
    } finally {
      ue === F.current && ($(null), w(null));
    }
  }
  function M(ne) {
    const ue = Math.max(40, Math.min(140, ne));
    C(ue), N.current.setLoopTempo(ue);
    try {
      localStorage.setItem(Ef, String(ue));
    } catch {
    }
  }
  function V(ne) {
    ne > u || (X(), h(ne), p(!1), R("roots"));
  }
  function te() {
    X();
    const ne = Math.min(4, d + 1);
    if (h(ne), p(!1), R("roots"), ne > u) {
      c(ne);
      try {
        localStorage.setItem(wf, String(ne));
      } catch {
      }
    }
  }
  const fe = (ne, ue) => d < 2 || d === 2 && m && Id.has(ue) || d === 3 && (S === "all" || S === "roots" && Dd(ne)), Te = Sf.filter((ne) => fe(ne.midi, Ge(ne))).map((ne) => ({
    ...ne,
    label: d < 2 || d === 2 && m || d === 3 && S === "all" ? Fe(ne.midi) : "A",
    kind: d < 2 && I?.string === ne.string && I?.fret === ne.fret ? "playing" : Dd(ne.midi) ? "answer" : Id.has(Ge(ne)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      X(), r();
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
        X(), s(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        X(), s(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => V(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: fo.map((ne, ue) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: ue === d ? "journey-step current" : "journey-step",
        "aria-current": ue === d ? "step" : void 0,
        disabled: ue > u,
        onClick: () => V(ue),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: ue > u ? "🔒" : ue < u ? "✓" : ue + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: ne.title })
        ]
      },
      ne.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: fo[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: fo[d].detail }),
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
              xa.length,
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
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: k <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => M(k - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            k,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: k >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => M(k + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "whole",
              onClick: () => P === "whole" ? X() : void W("whole"),
              children: P === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "once",
              onClick: () => P === "once" ? X() : void W("once"),
              children: P === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": P === "transition",
              onClick: () => P === "transition" ? X() : void W("transition"),
              children: P === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": m, onClick: () => p((ne) => !ne), children: m ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => V(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((ne) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: ne.value,
                  checked: S === ne.value,
                  onChange: () => R(ne.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: ne.name })
            ] }, ne.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => P === "once" ? X() : void W("once"), children: P === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => P === "transition" ? X() : void W("transition"), children: P === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: P === "whole" ? I && d < 2 ? `Nyt soi ${Fe(I.midi, !1, !0)} · ${rn[I.string]}-kieli, nauha ${I.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : P === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : P === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          ar,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: Te,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? m ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? S === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : S === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d === 3 && /* @__PURE__ */ a.jsx(kf, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: te, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => V(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => s(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => s(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => s(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsx("p", { children: u === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Qr = "musiikin-kartta:skaalapolku:v1", ma = "musiikin-kartta:skaalapolku:position-2:v1", ho = "musiikin-kartta:skaalapolku:position-3:v1", va = "musiikin-kartta:skaalapolku:bridge-1-2:v1", ja = "musiikin-kartta:skaalapolku:active-position:v1", Nf = "musiikin-kartta:skaalapolku:tempo:v1", nr = 75, _o = 40, To = 140;
function Gm() {
  try {
    const r = localStorage.getItem(Nf);
    if (r === null) return nr;
    const s = Number(r);
    return Number.isInteger(s) && s >= _o && s <= To && s % 5 === 0 ? s : nr;
  } catch {
    return nr;
  }
}
const po = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Vd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(r = Qr) {
  try {
    const s = Number(localStorage.getItem(r));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function mo() {
  try {
    const r = localStorage.getItem(ja);
    return r === "3" && En(va) === 4 ? 3 : En(Qr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Wm() {
  try {
    return En(ma) === 4 && localStorage.getItem(ja) === "bridge";
  } catch {
    return !1;
  }
}
function Qm({ onBack: r }) {
  const [s, u] = O.useState(mo), [c, d] = O.useState(Wm), [h, m] = O.useState(() => ({
    1: En(Qr),
    2: En(ma),
    3: En(ho)
  })), [p, S] = O.useState(() => En(mo() === 3 ? ho : mo() === 2 ? ma : Qr)), R = h[s], [k, C] = O.useState(!1), [P, $] = O.useState("roots"), [b, w] = O.useState(Gm), [E, z] = O.useState(null), [N, F] = O.useState(null), [I, X] = O.useState(""), W = O.useRef(new Io()), M = O.useRef(0);
  function V(G) {
    const le = Math.max(_o, Math.min(To, G));
    w(le), W.current.setLoopTempo(le);
    try {
      localStorage.setItem(Nf, String(le));
    } catch {
    }
  }
  function te() {
    M.current++, W.current.stop(), z(null), F(null);
  }
  O.useEffect(() => {
    const G = () => {
      document.hidden && (M.current++, W.current.stop(), z(null), F(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), M.current++, W.current.stop();
    };
  }, []);
  const fe = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [s])[0].positions[0], Te = fe.strings.flatMap((G, le) => G.map((B) => ft(le, B))).sort((G, le) => G.midi - le.midi || le.string - G.string), ne = [...Te, ...Te.slice(1, -1).reverse()], ue = N === null ? null : ne[N], Me = s === 1 ? [69, 72, 69, 67, 64, 67, 69] : s === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], H = fe.start, ae = fe.end, ce = (G) => He(G) === 9, Q = (G) => p < 2 ? !0 : p === 2 ? k && ce(G) : P === "scale" || P === "roots" && ce(G), re = Te.filter((G) => Q(G.midi)).map((G) => ({
    ...G,
    label: p < 2 || p === 3 && P === "scale" ? Fe(G.midi) : "A",
    kind: p < 2 && ue?.string === G.string && ue.fret === G.fret ? "playing" : ce(G.midi) ? "answer" : "shape"
  }));
  async function Z(G) {
    const le = ++M.current;
    W.current.stop(), F(null), X(""), z(G);
    try {
      G === "phrase" ? await W.current.play(Me) : await W.current.loop(ne.map((B) => B.midi), (B) => {
        le === M.current && F(B);
      }, p === 2 ? b : nr);
    } catch (B) {
      le === M.current && X(jf(B));
    } finally {
      le === M.current && (z(null), F(null));
    }
  }
  function g() {
    te();
    const G = Math.min(4, p + 1);
    if (S(G), C(!1), $("roots"), G > R) {
      m((B) => ({ ...B, [s]: G }));
      const le = s === 1 ? Qr : s === 2 ? ma : ho;
      try {
        localStorage.setItem(le, String(G));
      } catch {
      }
    }
  }
  function D(G) {
    G > R || (te(), S(G), C(!1), $("roots"));
  }
  function me(G) {
    if (!(G === 2 && h[1] < 4) && !(G === 3 && En(va) < 4)) {
      te(), d(!1), u(G), S(h[G]), C(!1), $("roots"), X("");
      try {
        localStorage.setItem(ja, String(G));
      } catch {
      }
    }
  }
  function we() {
    if (!(h[2] < 4)) {
      te(), d(!0), C(!1), X("");
      try {
        localStorage.setItem(ja, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ a.jsx(Um, { onBack: r, onPosition: me }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      te(), r();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      s
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      s
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      H,
      "–",
      ae,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": s === 1, onClick: () => me(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": s === 2,
          disabled: h[1] < 4,
          onClick: () => me(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: we,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": s === 3,
          disabled: En(va) < 4,
          onClick: () => me(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${s} harjoitukset`, children: po.map((G, le) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: le === p ? "journey-step current" : "journey-step",
        "aria-current": le === p ? "step" : void 0,
        disabled: le > R,
        onClick: () => D(le),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: le > R ? "🔒" : le < R ? "✓" : le + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: le === 4 ? `Positio ${s} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: p === 4 ? `Positio ${s} harjoiteltu` : po[p].title }),
        /* @__PURE__ */ a.jsx("span", { children: p === 4 ? "Valmis" : `Harjoitus ${p + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: po[p].detail }),
      p < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        p === 0 && /* @__PURE__ */ a.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        p === 0 && s === 2 && /* @__PURE__ */ a.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        p === 0 && s === 3 && /* @__PURE__ */ a.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        p === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        p === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        p === 3 && /* @__PURE__ */ a.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        p === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: b <= _o,
              onClick: () => V(b - 5),
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
              disabled: b >= To,
              onClick: () => V(b + 5),
              children: "+ 5"
            }
          ),
          b !== nr && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(nr),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        p !== 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "loop",
              onClick: () => E === "loop" ? te() : void Z("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? te() : void Z("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        p !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? ue && p < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(ue.midi, !1, !0)} · ${rn[ue.string]}-kieli, nauha ${ue.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        I && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: I }),
        p >= 1 && p <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          p === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": k, onClick: () => C((G) => !G), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => D(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          p === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Vd.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: P === G.value,
                    onChange: () => $(G.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              Z("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(ar, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: ae, fixed: "box" }, marks: re, disabled: !0, caption: `A-mollipentatoninen, positio ${s}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            p < 2 ? "Vihreällä merkitty A on pohjasävel." : p === 3 ? Vd.find((G) => G.value === P).note : k ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        p === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(ar, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: ae, fixed: "box" }, marks: re, disabled: !0, caption: `Position ${s} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        p === 3 && /* @__PURE__ */ a.jsx(kf, {}, s),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: p === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : p === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : p === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: g, children: p === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      p === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: s === 1 ? "Valmis seuraavaan positioon" : s === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ a.jsx("p", { children: s === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : s === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => D(2), children: "Kertaa muistiharjoitus" }),
        s === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => me(2), children: "Siirry positioon 2 →" }) : s === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: we, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => me(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(va) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const qi = [0, 2, 4, 5, 7, 9, 11], Ym = 1200, fa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Jm({ onBack: r }) {
  const [s, u] = O.useState(0), [c, d] = O.useState([]), [h, m] = O.useState(!1), [p, S] = O.useState(""), [R, k] = O.useState(0), [C, P] = O.useState(!1), $ = s >= qi.length, b = qi[Math.min(s, qi.length - 1)], w = or(fa.strings, fa.min, fa.max).filter((M) => He(M.midi) === b), E = w.filter((M) => !c.includes(Ge(M))), z = E.length === 0 && !$, N = !z && h ? E[0] : void 0;
  O.useEffect(() => {
    if (!C || !z) return;
    const M = window.setTimeout(() => {
      u((V) => V + 1), d([]), m(!1), S("");
    }, Ym);
    return () => window.clearTimeout(M);
  }, [C, z]);
  const F = [
    ...w.filter((M) => c.includes(Ge(M))).map((M) => ({ ...M, kind: "answer", label: Fe(M.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function I(M) {
    if ($ || z) return;
    const V = Ge(M);
    if (He(M.midi) !== b) {
      k((Te) => Te + 1), S(`Valitsit sävelen ${Fe(M.midi)}. Etsi ${Fe(b)}.`);
      return;
    }
    if (c.includes(V)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const te = [...c, V];
    d(te), m(!1);
    const fe = w.length - te.length;
    S(fe ? `Oikein! ${Fe(b)} löytyi ${rn[M.string]}-kieleltä (${Ci(M.fret)}). Vielä ${fe}.` : `Löysit kaikki ${w.length} ${Fe(b)}-säveltä tällä alueella.`);
  }
  function X() {
    z && (u((M) => M + 1), d([]), m(!1), S(""));
  }
  function W() {
    u(0), d([]), m(!1), S(""), k(0);
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !$ && /* @__PURE__ */ a.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (M) => P(M.target.checked)
        }
      ),
      /* @__PURE__ */ a.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        R ? `Vääriä valintoja yhteensä ${R}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: W, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          "Etsi kaikki ",
          Fe(b),
          "-sävelet"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sävel ",
          s + 1,
          " / ",
          qi.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Fe(b),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ a.jsx(
        ar,
        {
          area: fa,
          marks: F,
          onAnswer: I,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: p
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => m((M) => !M),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (C ? /* @__PURE__ */ a.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          s === qi.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: X, children: s === qi.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Xm = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, vo = ["C", "G", "D", "Em"], Bd = ["C", "G", "D", "Em", "Am", "E", "A"], Zm = { min: 0, max: 3, fixed: "" };
function Kd(r) {
  const s = [...r];
  for (let u = s.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [s[u], s[c]] = [s[c], s[u]];
  }
  return s;
}
function qm({ onBack: r }) {
  const [s, u] = O.useState(4), [c, d] = O.useState(() => Kd(vo)), [h, m] = O.useState(0), [p, S] = O.useState(null), [R, k] = O.useState([]), [C, P] = O.useState(0), $ = h >= c.length, b = Xm[c[Math.min(h, c.length - 1)]], w = s === 4 ? vo : Bd, E = b.frets.flatMap((M, V) => M === null ? [] : [V]), z = b.frets.flatMap((M, V) => M === null ? [V] : []), N = { ...Zm, strings: E }, F = b.frets.flatMap((M, V) => M === null ? [] : [{
    ...ft(V, M),
    kind: M === 0 ? "anchor" : "shape",
    label: M === 0 ? "○" : "●"
  }]);
  function I(M = s) {
    u(M), d(Kd(M === 4 ? vo : Bd)), m(0), S(null), k([]), P(0);
  }
  function X(M) {
    p || $ || R.includes(M) || (M === b.name ? S(M) : (k((V) => [...V, M]), P((V) => V + 1)));
  }
  function W() {
    p && (m((M) => M + 1), S(null), k([]));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
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
            checked: s === 4,
            onChange: () => I(4)
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
            checked: s === 7,
            onChange: () => I(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Tunnistit kaikki ",
        s,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => I(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ a.jsx(
        ar,
        {
          area: N,
          marks: F,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((M) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: p === M ? "right" : R.includes(M) ? "wrong" : "",
          disabled: !!p || R.includes(M),
          "aria-pressed": p === M,
          onClick: () => X(M),
          children: M
        },
        M
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: p ? "feedback good" : R.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: p ? `Oikein! Tämä on ${b.name}-sointu.` : R.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      p && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: W, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ye = (r, s) => ({ first: r, ...s ? { second: s } : {} }), ir = () => [
  ye("Gm", "F"),
  ye("Gm"),
  ye("B♭", "F"),
  ye("Gm"),
  ye("Gm", "F"),
  ye("Gm"),
  ye("E♭", "F"),
  ye("Gm")
], rr = () => [
  ye("B♭", "F"),
  ye("Gm", "Dm"),
  ye("E♭", "F"),
  ye("Gm", "Dm")
], sr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Cf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], ev = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ir(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...rr(), ye("E♭"), { ...ye("E♭"), passingBass: "F" }],
    lyrics: sr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ye("Gm", "F"), ye("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ir(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...rr(), ye("E♭"), ye("F")],
    lyrics: sr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ye("Gm"), ye("Dm"), ye("F"), ye("C"), ye("Gm"), ye("Dm"), ye("E♭"), ye("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ir(),
    lyrics: Cf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...rr(), ye("E♭", "F"), ye("Gm")],
    lyrics: sr
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ye("E♭", "F"),
      { ...ye("Gm"), possibleChord: "Dm" },
      ye("E♭", "F"),
      ye("Gm", "F"),
      { ...ye("Gm"), possibleChord: "Dm" },
      ye("Gm", "F"),
      ye("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], tv = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ir(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...rr(), ye("E♭"), ye("E♭")],
    lyrics: sr
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ir(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...rr(), ye("E♭"), ye("F")],
    lyrics: sr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ye("Gm"), ye("Dm"), ye("F"), ye("C"), ye("Gm"), ye("Dm"), ye("E♭"), ye("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ir(),
    lyrics: Cf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...rr(), ye("B♭", "F"), ye("Gm"), ye("E♭", "F"), ye("Gm")],
    lyrics: sr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ye("E♭", "F"), ye("Gm", "F"), ye("E♭", "F"), ye("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ur = {
  acoustic: ev,
  normal: tv
}, nv = "normal", Mo = "yksi-sointu-kaksi-askelta", Do = {
  acoustic: Mo + "-akustinen",
  normal: Mo + "-normaali"
}, _f = (r) => r === Mo || Object.values(Do).includes(r ?? "");
function iv(r) {
  const s = Object.entries(Do).find(([, u]) => u === r);
  return s ? s[0] : null;
}
const rv = (r) => Do[r], Hd = (r) => {
  const s = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
function zo(r, s = "acoustic") {
  const u = ur[s], c = u[r], d = u[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Tf(r, s = "acoustic") {
  const u = ur[s], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    d = C;
  const h = u[d];
  let m = 0;
  for (; m + 1 < h.bars.length && c >= qr(d, m + 1, s); )
    m++;
  const p = qr(d, m, s), S = zo(d, s) / 4;
  let R = 1;
  for (; R < 4 && c >= p + R * S; ) R++;
  const k = h.bars[m];
  return {
    section: h,
    sectionIndex: d,
    barIndex: m,
    beat: R,
    chord: k.second && R >= 3 ? k.second : k.first
  };
}
function qr(r, s, u = "acoustic") {
  return ur[u][r].start + zo(r, u) * s;
}
function sv(r) {
  return ur[r].flatMap((s, u) => s.bars.flatMap((c, d) => {
    const h = qr(u, d, r), m = { section: s, sectionIndex: u, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [m];
    const p = zo(u, r) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: h + p }];
  }));
}
function av(r, s = "acoustic", u = !1) {
  const c = ur[s], d = Tf(r, s), h = d.section.bars[d.barIndex], m = d.beat >= 3 && h.second ? "second" : "first", p = sv(s), S = p.findIndex(($) => $.sectionIndex === d.sectionIndex && $.barIndex === d.barIndex && $.part === m), k = [
    ...p.slice(S + 1).map(($) => ({ ...$, wrapped: !1 })),
    ...u ? p.slice(0, S + 1).map(($) => ({ ...$, wrapped: !0 })) : []
  ].find(($) => $.chord !== d.chord) ?? null;
  let C = null;
  const P = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!P || u)) {
    const $ = P ? 0 : d.sectionIndex + 1, b = c[$], w = b.bars[0].first;
    C = {
      section: b,
      sectionIndex: $,
      firstChord: w,
      wrapped: P,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: k, nextSection: C };
}
function lv(r) {
  const s = r.filter((p) => p.lyrics?.length), u = (p) => 1 + (p.lyrics?.length ?? 0), c = s.reduce((p, S) => p + u(S), 0);
  let d = 0, h = 1 / 0, m = 0;
  for (let p = 0; p <= s.length; p++) {
    const S = Math.abs(c - 2 * m);
    (S < h || S === h && m >= c - m) && (d = p, h = S), p < s.length && (m += u(s[p]));
  }
  return [s.slice(0, d), s.slice(d)];
}
const Po = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Mf = "musiikin-kartta:kappale-sointuvihjeet:v1", ka = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Ud = {
  showChords: !0,
  level: 0,
  fadeOrder: ka
};
function ha(r, s) {
  return !s.showChords || s.level >= s.fadeOrder[r];
}
function Gd(r) {
  if (!r) return { ...Ud, fadeOrder: { ...ka } };
  try {
    const s = JSON.parse(r);
    if (!s || typeof s != "object") throw new Error("Invalid settings");
    const u = s, c = u.level, d = { ...ka }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const m = h;
      for (const p of Po)
        [1, 2, 3, 4].includes(m[p]) && (d[p] = m[p]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Ud, fadeOrder: { ...ka } };
  }
}
function ov() {
  try {
    return Gd(localStorage.getItem(Mf));
  } catch {
    return Gd(null);
  }
}
const uv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function cv(r) {
  const s = uv.exec(r.trim());
  if (!s) return r;
  const [, u, , c = "", d = ""] = s;
  return u + "5" + c + d;
}
const dv = (r, s) => s === "power" ? cv(r) : r, fv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], hv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function pv({ version: r, position: s, loop: u = !1, onSeek: c }) {
  const [d, h] = O.useState(ov), [m, p] = O.useState(null), [S, R] = O.useState(!1), [k, C] = O.useState("full"), P = (H) => dv(H, k), $ = ur[r], b = Tf(s, r), { section: w, sectionIndex: E, barIndex: z, beat: N, chord: F } = b, I = N >= 3 && w.bars[z].second ? "second" : "first", X = (H, ae, ce) => `${r}:${H}:${ae}:${ce}`, W = (H, ae) => X(w.id, H, ae), M = W(z, I), V = ha(F, d), te = V && m === M, fe = (H, ae, ce) => !ha(H, d) || m === W(ae, ce), Te = d.showChords && d.level === 0, ne = Po.filter((H) => ha(H, d)).length, { nextSection: ue } = av(s, r, u), Me = !!ue && ha(ue.firstChord, d);
  return O.useEffect(() => {
    p(null);
  }, [M]), O.useEffect(() => {
    try {
      localStorage.setItem(Mf, JSON.stringify(d));
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
            onChange: (H) => {
              h((ae) => ({ ...ae, showChords: H.target.checked })), p(null);
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
            checked: S,
            onChange: (H) => R(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ae]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: k === H,
              onChange: () => C(H)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: ae })
        ] }, H))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (H) => {
              const ae = Number(H.target.value);
              h((ce) => ({ ...ce, level: ae })), p(null);
            },
            children: fv.map((H) => /* @__PURE__ */ a.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ne === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ne}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Po.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
        H,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (ae) => {
              const ce = Number(ae.target.value);
              h((Q) => ({ ...Q, fadeOrder: { ...Q.fadeOrder, [H]: ce } })), p(null);
            },
            children: hv.map((ae) => /* @__PURE__ */ a.jsx("option", { value: ae.value, children: ae.label }, ae.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (H) => {
              const ae = $.find((ce) => ce.id === H.target.value);
              ae && c(ae.start);
            },
            children: $.map((H) => /* @__PURE__ */ a.jsxs("option", { value: H.id, children: [
              Hd(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          V && !te ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: V && !te ? "?" : P(F) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            N,
            "/4"
          ] }),
          V && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => p(te ? null : M),
              children: te ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        ue && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: Me ? "?" : P(ue.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, ae) => {
      const ce = ae === z, Q = ce && (N < 3 || !H.second), re = ce && N >= 3 && !!H.second, Z = fe(H.first, ae, "first"), g = H.second ? fe(H.second, ae, "second") : !1, D = (Z ? P(H.first) : "sointu piilossa") + (H.second ? " " + (g ? P(H.second) : "sointu piilossa") : "") + (Te && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (Te && H.possibleChord ? " (" + P(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ce ? " active" : ""),
          "aria-pressed": ce,
          "aria-label": "Tahti " + (ae + 1) + ": " + D + ". Siirry kohtaan " + Hd(qr(E, ae, r)),
          onClick: () => c(qr(E, ae, r)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ae + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: Q && Z ? "now" : "", children: Z ? P(H.first) : "?" }),
              H.second && /* @__PURE__ */ a.jsx("strong", { className: re && g ? "now" : "", children: g ? P(H.second) : "?" })
            ] }),
            Te && H.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            Te && H.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              P(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ae
      );
    }) }),
    S ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: lv($).map((H, ae) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: H.map((ce) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: ce.title }),
        ce.lyrics?.map((Q, re) => /* @__PURE__ */ a.jsx("p", { children: Q }, re))
      ] }, ce.id)) }, ae)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, ae) => /* @__PURE__ */ a.jsx("p", { children: H }, ae))
    ] }),
    Te && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const Sa = 7, mv = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, ko = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ie.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: mv,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ie.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function vv(r) {
  return Ie.scaleNotes(r).map(([s, u]) => Ie.noteName(Sa, s, u));
}
const Pf = (r) => r === "pentatonic" ? 5 : 7;
function kv(r, s, u) {
  const c = s.filter((p) => p >= 1 && p <= Pf(r.system)), d = Ie.fingeringBoxes(Sa, r.scale, r.system, c, u);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([p]) => (Sa + p) % 12), m = (p, S) => S >= 0 && S <= u && h.includes((Ie.OPEN_PITCHES[p] + S) % 12);
  return d.map((p) => ({ ...p, positions: p.positions.map((S) => {
    const R = S.strings.map((C, P) => {
      if (!C.length) return C;
      const $ = C[C.length - 1];
      return m(P, $ + 1) ? [...C.slice(0, -1), $ + 1] : C;
    }), k = R.flat();
    return { ...S, strings: R, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Wd = 17;
function yv({ open: r }) {
  const [s, u] = O.useState("mp"), [c, d] = O.useState({ pentatonic: [], "3nps": [] }), [h, m] = O.useState(!1), [p, S] = O.useState(!1), R = O.useRef(null), k = ko.find((E) => E.id === s) ?? ko[0], C = c[k.system], P = kv(k, C, Wd), $ = P.some((E) => E.positions.length > 0), b = Ie.renderBoard(Sa, k.scale, Wd, {
    automatic: !0,
    boxes: P,
    onlyBoxNotes: $ && h,
    label: k.title + (C.length ? ", " + C.map((E) => "boksi " + E).join(", ") : "")
  });
  O.useEffect(() => {
    const E = R.current;
    !E || !r || P.length === 1 && Ie.revealPositions(E, ".box-highlight");
  }, [b, r]);
  function w(E, z) {
    d((N) => ({ ...N, [k.system]: z ? [...N[k.system], E].sort((F, I) => F - I) : N[k.system].filter((F) => F !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: s, onChange: (E) => u(E.target.value), children: ko.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: k.title }),
      /* @__PURE__ */ a.jsx("span", { children: vv(k.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "song-scale-note", children: k.note }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: R,
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
      k.scale.add.length > 0 && /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        k.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-box-settings", open: p, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (E) => {
        E.preventDefault(), S((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Pf(k.system) }, (E, z) => z + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: C.includes(E),
            onChange: (z) => w(E, z.target.checked)
          }
        ),
        " Boksi ",
        E
      ] }, k.system + E)) }),
      /* @__PURE__ */ a.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: $ && h,
            disabled: !$,
            onChange: (E) => m(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: $ ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Af = null;
function gv() {
  return iv(new URLSearchParams(location.search).get("kappale")) ?? Af ?? nv;
}
function xv(r) {
  Af = r;
  const s = new URL(location.href);
  _f(s.searchParams.get("kappale")) && (s.searchParams.set("kappale", rv(r)), history.replaceState(history.state, "", s.pathname + s.search + s.hash));
}
const jv = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3"
  }
}, Qd = 1e-3;
function Yd(r, s) {
  try {
    r.currentTime = s;
  } catch {
  }
}
function Jd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const s = Math.floor(r);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function Sv({ onBack: r }) {
  const s = O.useRef(null), u = O.useRef(null), c = O.useRef(null), d = O.useRef(0), h = O.useRef(new vf()), m = O.useRef(null), [p, S] = O.useState(gv), R = jv[p], [k, C] = O.useState(!1), [P, $] = O.useState(!0), [b, w] = O.useState(!0), [E, z] = O.useState(!1), [N, F] = O.useState(!1), [I, X] = O.useState(!1), [W, M] = O.useState(lm), [V] = O.useState(() => mf() ? "element" : "webaudio"), te = O.useRef(null), [fe, Te] = O.useState(0), [ne, ue] = O.useState(0), [Me, H] = O.useState("");
  function ae(j = !1, Y) {
    const ie = s.current;
    if (ie)
      for (const se of [u.current, c.current])
        se && (!Y || se === Y) && h.current.align(ie, se, j);
  }
  function ce() {
    return [
      ["backing", s.current, !0],
      ["guitar", u.current, P],
      ["vocals", c.current, b]
    ];
  }
  function Q(j = W, Y) {
    for (const [ie, se, de] of ce()) {
      if (!se) continue;
      const ke = Ad(ie, j, Y?.[ie] ?? de);
      if (V === "webaudio" && te.current?.routed(se))
        te.current.setLevel(se, ke);
      else
        try {
          se.volume = Ad(ie, j);
        } catch {
        }
    }
  }
  function re(j) {
    M(j), om(j), Q(j);
  }
  function Z() {
    d.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), C(!1);
  }
  function g(j) {
    if (j !== p) {
      m.current = null, Z();
      for (const Y of [s.current, u.current, c.current])
        if (Y)
          try {
            Y.currentTime = 0;
          } catch {
          }
      Te(0), ue(0), H(""), S(j), xv(j);
    }
  }
  function D(j) {
    const Y = s.current;
    if (!Y || !Number.isFinite(j)) return;
    const ie = Math.max(0, Math.min(j, Number.isFinite(Y.duration) ? Y.duration : j));
    m.current = ie, Te(ie), Yd(Y, ie);
  }
  function me(j) {
    const Y = m.current;
    if (Y === null || j !== s.current || j.seeking) return;
    const ie = Number.isFinite(j.duration) ? Math.min(Y, j.duration) : Y;
    if (ie !== Y && (m.current = ie, Te(ie)), Math.abs(j.currentTime - ie) < Qd) return;
    const se = j.seekable;
    for (let de = 0; de < se.length; de++)
      if (se.start(de) <= ie && ie <= se.end(de)) {
        Yd(j, ie);
        return;
      }
  }
  function we(j) {
    if (j !== s.current) return;
    const Y = m.current;
    if (Y === null)
      Te(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - Y) < Qd) {
      m.current = null, ae(!0);
      return;
    }
    j.paused || ae();
  }
  async function G() {
    const j = s.current, Y = u.current, ie = c.current;
    if (!j || !Y || !ie) return;
    if (k) {
      Z();
      return;
    }
    H("");
    const se = m.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && se >= j.duration - 0.05 && D(0), me(j), V === "webaudio" && (te.current ??= new gm(), te.current.unlock()))
      for (const ke of [j, Y, ie]) te.current.route(ke);
    Q(), Y.muted = !P, ie.muted = !b, ae(!0);
    const de = ++d.current;
    try {
      P || Y.pause(), b || ie.pause();
      const ke = [j.play(), ...P ? [Y.play()] : [], ...b ? [ie.play()] : []];
      if (await Promise.all(ke), de !== d.current) return;
      ae(), C(!0);
    } catch {
      if (de !== d.current) return;
      Z(), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function le(j, Y, ie) {
    if (!j) return;
    if (j.muted = !Y, !Y) {
      j.pause();
      return;
    }
    !s.current || !k || (ae(!0, j), j.play().catch(() => H(ie + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function B(j) {
    $(j), Q(W, { guitar: j }), le(u.current, j, "Kitararaita");
  }
  function ee(j) {
    w(j), Q(W, { vocals: j }), le(c.current, j, "Lauluraita");
  }
  return O.useEffect(() => {
    const j = () => {
      document.hidden && Z();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), d.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), te.current?.close();
    };
  }, []), O.useEffect(() => {
    Q();
  }, [p]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ a.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ a.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "song-version-select",
          value: p,
          onChange: (j) => g(j.target.value),
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
          R.label,
          " · ",
          R.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          G();
        }, children: k ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: ne > 0 ? ne : 1,
            step: 0.1,
            value: Math.min(fe, ne > 0 ? ne : 1),
            disabled: ne <= 0,
            onChange: (j) => D(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Jd(fe),
          " / ",
          Jd(ne)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: P,
              onChange: (j) => B(j.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: b,
              onChange: (j) => ee(j.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (j) => z(j.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": V, children: [
          /* @__PURE__ */ a.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            W > 0 && /* @__PURE__ */ a.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            W > 50 && /* @__PURE__ */ a.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: W,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": W + " %",
              onChange: (j) => re(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            W,
            " %"
          ] })
        ] })
      ] }),
      Me && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: Me }),
      /* @__PURE__ */ a.jsx(
        "audio",
        {
          ref: s,
          src: R.backing,
          preload: "metadata",
          loop: E,
          onLoadedMetadata: (j) => {
            j.currentTarget === s.current && (ue(j.currentTarget.duration), me(j.currentTarget));
          },
          onProgress: (j) => me(j.currentTarget),
          onCanPlay: (j) => me(j.currentTarget),
          onTimeUpdate: (j) => we(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== s.current || j.currentTarget.loop || (m.current = null, u.current?.pause(), c.current?.pause(), C(!1), Te(j.currentTarget.duration));
          },
          onPause: (j) => {
            j.currentTarget === s.current && C(!1);
          },
          onError: () => H(R.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        p + "-backing"
      ),
      /* @__PURE__ */ a.jsx(
        "audio",
        {
          ref: u,
          src: R.guitar,
          preload: "metadata",
          muted: !P,
          loop: E,
          onLoadedMetadata: () => {
            s.current?.paused && ae(!0);
          },
          onError: () => H(R.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        p + "-guitar"
      ),
      /* @__PURE__ */ a.jsx(
        "audio",
        {
          ref: c,
          src: R.vocals,
          preload: "metadata",
          muted: !b,
          loop: E,
          onLoadedMetadata: () => {
            s.current?.paused && ae(!0);
          },
          onError: () => H(R.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        p + "-vocals"
      )
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: N, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (j) => {
        j.preventDefault(), F((Y) => !Y);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(pv, { version: p, position: fe, loop: E, onSeek: D })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (j) => {
        j.preventDefault(), X((Y) => !Y);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(yv, { open: I })
    ] })
  ] });
}
const Ao = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, ya = (r, s = 1) => r.toFixed(s).replace(".", ",").replace("-", "−"), Rf = (r) => {
  const s = Math.round(r);
  return (s > 0 ? "+" : s < 0 ? "−" : "±") + Math.abs(s);
}, Ro = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function wv(r, s, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Ro(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${s.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${s.stability} ms.`];
    default:
      return [];
  }
}
function Lf({ frame: r, threshold: s }) {
  const u = r?.rms ?? 0, c = lr(u), d = (r?.peak ?? 0) >= 0.98 ? "clip" : u >= s ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${ya(Math.max(-60, c), 0)} desibeliä${u >= s ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${Fd(u) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${Fd(s) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Ev({ mic: r, frame: s, heard: u, s: c, now: d }) {
  const h = xf(r.phase, s), m = u && d - u.at < 1500 ? u : null, p = h === "pitch" || h === "untuned" || m ? m ? `Kuulen: ${Fe(m.midi, c.flats, !0)} · ${Rf(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Ao[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: p }),
    r.phase === "on" && /* @__PURE__ */ a.jsx(Lf, { frame: s, threshold: c.minRms })
  ] });
}
function Nv({ mic: r, frame: s, heard: u, accepted: c, now: d, s: h, change: m, devices: p, locked: S, calibrating: R, calibration: k, onTest: C, onStop: P, onCalibrate: $ }) {
  const b = O.useId(), w = xf(r.phase, s), E = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", z = r.phase === "on", N = u && d - u.at < 1500 ? u : null, F = N && (w === "pitch" || w === "untuned"), I = z && (s?.peak ?? 0) >= 0.98, X = r.phase === "error" ? [] : wv(w, h, r.info, I), W = !h.device || p.some((V) => V.deviceId === h.device), M = (V, te) => m({ ...h, [V]: te });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Ao[w],
      w === "pitch" && N ? ` ${Fe(N.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Ro(r.info)}.` : r.phase === "error" ? r.error : Ao[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          Ro(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(s?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx(Lf, { frame: s, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ya(Math.max(-60, lr(s?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? Fe(N.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${ya(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Rf(N.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${N.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, N.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: N ? `${Math.round(N.clarity * 100)} %` : s?.clarity !== void 0 && w === "noise" ? `${Math.round(s.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Fe(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    X.length > 0 && z && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: X.map((V) => /* @__PURE__ */ a.jsx("li", { children: V }, V)) }),
    r.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: P, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: S, onClick: C, children: "Testaa mikrofoni" }),
      E && z && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: R, onClick: $, children: R ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && r.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: S, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (V) => M("device", V.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !W && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              p.map((V, te) => /* @__PURE__ */ a.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${te + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              ya(lr(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (V) => M("minRms", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (V) => M("clarity", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (V) => M("stability", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (V) => M("cents", Number(V.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          p.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Cv = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ni[r.mode === "caged" ? "maj" : r.chord].tones, Xd = (r, s) => Cv(r).find(([u]) => u === s)?.[1], $f = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", _v = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Tv(r, s) {
  return s.choices === "note" ? "Valitse sävelnimi." : s.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Mv(r, s, u, c, d) {
  return s.choices === "degree" ? `Oikein! ${Yr(r.root, s.interval, s.degree)} on ${s.degree}. aste.` : $f(r) ? `Oikein! ${s.degree}. aste on ${Yr(r.root, s.interval, s.degree)}.` : r.mode === "interval" ? `Oikein! ${Fe(s.reference, r.flats, !0)} → ${s.name} on ${Jr[s.interval]} ${_v(s)}.` : r.mode === "notes" ? u === "board" && d ? `Oikein! ${Fe(d.midi, r.flats)} on ${ef[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(c, r.flats, !0)}.` : `Oikein! Sävel oli ${s.name}.`;
}
function Pv(r, s, u, c, d) {
  if (u === "note") return `Ei ${Fe(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Xd(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = He(d.midi) === He(s.midi);
  if (r.mode === "notes")
    return d.string !== s.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${Oo[s.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${s.name}.` : `Tuo on ${Fe(d.midi, r.flats)}. Etsi ${s.name}.`;
  if ($f(r)) {
    const m = He(d.midi - r.root), p = Xd(r, m), S = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return p ? h && s.check === "pitch" && d.midi !== s.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${s.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${s.degree}. aste sen sisältä.` : `Tuo on ${Yr(r.root, m, p)} eli ${p}. aste. Etsi ${s.degree}. aste.` : `Tuo on ${Fe(d.midi, r.flats)}, joka ei kuulu ${S}. Etsi ${s.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Av(r, s, u) {
  const c = Fe(u, r.flats, !0);
  return He(u) === He(s.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Of(r, s = !1) {
  const u = r.split(":"), c = (m) => Number(u[m]), d = (...m) => m.every((p) => Number.isInteger(c(p))), h = (m, p) => rn[m] ? `${rn[m]}-kieli, ${Ci(p)}` : null;
  switch (u[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(c(1), s)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && d(1) ? `Kuule ja toista: ${Fe(c(1), s, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Jr[c(1)] ? `${Jr[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!d(1, 3) || !Ni[m]) return null;
      const p = Ni[m].tones.find(([S]) => S === c(3))?.[1];
      return p ? `${tf(c(1), m)}: ${p}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = Ie.SCALES[u[2]];
      if (!d(1) || !m) return null;
      const p = `${oi(c(1))}-${m.name}`;
      if (u.length === 5 && d(3)) {
        const S = Ie.scaleNotes(m).find(([R]) => R === c(3))?.[1];
        return S ? `${p}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${oi(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && d(3)) {
        const p = Ni.maj.tones.find(([S]) => S === c(3))?.[1];
        return p ? `${m}: ${p}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Zd(r) {
  return Object.entries(r).flatMap(([s, u]) => {
    const [c, d, h, ...m] = s.split(":");
    return !m.length || !["solo", "guided"].includes(h) ? [] : [{ key: s, input: c, check: d, guided: h === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const Lo = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Rv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Lv(r) {
  const s = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${tr(r.mode)}${r.hints ? ` · ${wa[r.hints].title}` : ""} · ${s} · keskimäärin ${Lo(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function $v({ store: r, s, locked: u, changed: c }) {
  const [d, h] = O.useState(""), m = O.useRef(null), { recent: p, sessions: S, stats: R } = r.data, k = _i(s), C = rf(s), P = [...new Set(p.map((N) => N.mode))].map((N) => {
    const F = p.filter((I) => I.mode === N);
    return { mode: N, ...jo(F), last: Math.max(...F.map((I) => I.at)) };
  }).sort((N, F) => F.last - N.last), $ = Zd(R).filter((N) => !N.guided && N.mode === s.mode && N.input === k && N.check === C && N.stat.attempts >= 3).map((N) => ({ ...N, score: Fo(N.stat), text: Of(N.item, s.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, F) => N.score - F.score).slice(0, 5), b = Zd(R).reduce((N, F) => N + F.stat.attempts, 0);
  function w() {
    const N = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), F = URL.createObjectURL(N), I = document.createElement("a");
    I.href = F, I.download = "musiikin-kartta-harjoittelu.json", I.click(), setTimeout(() => URL.revokeObjectURL(F), 1e3);
  }
  async function E(N) {
    if (N)
      try {
        const F = await N.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(F), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        m.current && (m.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    b === 0 ? /* @__PURE__ */ a.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        b,
        " vastattua kysymystä · ",
        S.length,
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
        /* @__PURE__ */ a.jsx("tbody", { children: P.map((N) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: tr(N.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: N.count }),
          /* @__PURE__ */ a.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: N.guided }),
          /* @__PURE__ */ a.jsx("td", { children: Lo(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    $.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        tr(s.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: $.map((N) => /* @__PURE__ */ a.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(Xr(N.stat) * 100),
        " % heti oikein · ",
        Lo(Zr(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: b ? `Harjoituksessa ${tr(s.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Rv[s.input],
        ") ja tarkistuksella (",
        s.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Wp, { area: { strings: s.strings, min: s.min, max: s.max, fixed: "" }, stats: R, input: s.input, check: s.check, flats: s.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ a.jsx("ul", { children: S.slice(-10).reverse().map((N) => /* @__PURE__ */ a.jsx("li", { children: Lv(N) }, N.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: u, onClick: () => m.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: m, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (N) => {
          E(N.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: u || !b, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function Ov() {
  try {
    return new Cd(localStorage);
  } catch {
    return new Cd();
  }
}
const qd = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Fv = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", bv = [0, 2, 4, 5, 7, 9, 11];
function Iv(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Dv() {
  const [r] = O.useState(Ov), [s, u] = O.useState(() => Ip(location.search, r.data.settings)), [, c] = O.useReducer((L) => L + 1, 0), d = O.useRef(null), h = O.useRef(new zm()), m = O.useRef(new Io()), p = O.useRef(0), S = O.useRef(), R = O.useRef(), k = O.useRef(null), C = O.useRef(0), P = O.useRef(null), $ = O.useRef(s);
  $.current = s;
  const [b, w] = O.useState({ phase: "off", purpose: "none" }), E = O.useRef(b), z = (L) => {
    E.current = L, w(L);
  }, [N, F] = O.useState(null), [I, X] = O.useState(null), [W, M] = O.useState(null), [V, te] = O.useState(0), [fe, Te] = O.useState([]), [ne, ue] = O.useState(!1), [Me, H] = O.useState(!1), [ae, ce] = O.useState(""), [Q, re] = O.useState("info"), [Z, g] = O.useState(""), [D, me] = O.useState(0), [we, G] = O.useState([]), [le, B] = O.useState([]), [ee, j] = O.useState(null), [Y, ie] = O.useState(!1), [se, de] = O.useState(""), [ke, Ae] = O.useState(""), [Ce, $e] = O.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : _f(L.get("kappale")) ? "songs" : null;
  }), Je = () => {
    Em().then(Te).catch(() => {
    });
  };
  function Be() {
    clearTimeout(R.current), k.current = null, ie(!1);
  }
  function We() {
    F(null), X(null), M(null);
  }
  function Ke() {
    h.current.stop(), Be(), z({ phase: "off", purpose: "none" }), We();
  }
  async function gt(L) {
    if (h.current.active && E.current.phase === "on")
      return Be(), z({ ...E.current, purpose: L }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), We();
    try {
      const pe = await h.current.start($.current.device, {
        ...qd($.current),
        onFrame: (Se) => Mt.current.frame(Se),
        onStableNote: (Se) => Mt.current.stable(Se)
      }, () => Mt.current.lost());
      return pe ? (z({ phase: "on", purpose: L, info: pe }), Je(), !0) : !1;
    } catch (pe) {
      return z({ phase: "error", purpose: "none", error: Dm(pe) }), !1;
    }
  }
  function Xe(L) {
    k.current?.push(L.rms);
    const pe = performance.now();
    pe - C.current < 66 || (C.current = pe, F(L), te(pe), L.midi !== void 0 && L.frequency !== void 0 && X({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: pe }));
  }
  function ze(L) {
    E.current.purpose === "test" ? M(L) : E.current.purpose === "round" && Re(L.midi, "mic", void 0, L.heldMs);
  }
  function nt() {
    const L = E.current.purpose === "round";
    Be(), We(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const pe = d.current;
    L && pe && ["active", "feedback", "paused"].includes(pe.phase) && (ct(), H(!1), pe.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Mt = O.useRef({ frame: Xe, stable: ze, lost: nt });
  Mt.current = { frame: Xe, stable: ze, lost: nt };
  function Gt(L) {
    const pe = ga(L), Se = pe.device !== $.current.device;
    $.current = pe, u(pe), r.settings(pe), g(""), h.current.active && (Se && E.current.purpose === "test" ? (Ke(), gt("test")) : h.current.setOptions(qd(pe)));
  }
  function zt(L) {
    Ae(""), d.current = null, $e(L);
  }
  function sn() {
    de(""), gt("test");
  }
  function Wt() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (Be(), k.current = [], ie(!0), de("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const L = k.current ?? [];
      if (Be(), L.length < 10) {
        de("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: pe, noise: Se, loud: Jt } = Vm(L);
      Gt({ ...$.current, minRms: pe }), de(`Taustakohina on ${Math.round(lr(Se))} dB ja äänikynnys nyt ${Math.round(lr(pe))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    p.current++, clearTimeout(S.current), m.current.stop();
  }
  function Dn(L, pe) {
    if (!L.results.length) return;
    const Se = jo(L.results);
    r.session({
      id: L.id,
      mode: L.settings.mode,
      count: Se.count,
      first: Se.first,
      ms: Se.ms,
      solo: Se.solo,
      soloFirst: Se.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: pe
    });
  }
  async function je(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    ct();
    const pe = p.current;
    L.pause(), h.current.pause(), H(!0), re("info"), ce("Kuuntele…"), c();
    try {
      await m.current.play(L.question.sound);
    } catch {
      pe === p.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    pe !== p.current || d.current !== L || (L.resume(), h.current.resume(), H(!1), ce(""), c());
  }
  async function Qt(L) {
    G([]), B([]), j(null), g(""), me(L.hintLevel), h.current.rearm(), re("info"), ce(""), c(), L.question?.sound.length && await je(L);
  }
  async function _e() {
    const L = $.current, pe = go(L);
    if (pe) {
      g(pe);
      return;
    }
    ct();
    const Se = p.current;
    if (g(""), de(""), Ae(""), da(L)) {
      ue(!0);
      const lt = await gt("round");
      if (Se !== p.current) return;
      if (ue(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && Ke();
    const Jt = new im(L, () => r.data.stats, (lt) => r.record(lt));
    try {
      Jt.start();
    } catch (lt) {
      E.current.purpose === "round" && Ke(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => P.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Qt(Jt);
  }
  function Le() {
    ct(), ue(!1), Ke();
  }
  function Re(L, pe, Se, Jt = 0) {
    const lt = d.current, ci = lt?.question;
    if (!lt || !ci || lt.phase !== "active") return;
    const Vn = lt.answer(L, pe, Se, Jt);
    if (Vn !== "ignored") {
      if (Vn === "candidate")
        j(L), re("bad"), ce(Av(lt.settings, ci, L));
      else if (Vn === "wrong")
        Se ? G((di) => [...di, Se]) : B((di) => [...di, L]), re("bad"), ce(Pv(lt.settings, ci, pe, L, Se));
      else if (j(null), re("good"), ce(Mv(lt.settings, ci, pe, L, Se)), Dn(lt, !1), lt.settings.advance) {
        const di = p.current;
        S.current = setTimeout(() => {
          di === p.current && Qe();
        }, pe === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Qe() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      ct();
      try {
        L.next();
      } catch (pe) {
        qe(!1), g(pe instanceof Error ? pe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        qe(!0);
        return;
      }
      await Qt(L);
    }
  }
  function qe(L = !1) {
    ct(), H(!1), ue(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && Ke();
    const pe = d.current;
    pe && (pe.stop(), Dn(pe, L)), j(null), me(0), G([]), B([]), g(""), Ae(L ? "complete" : "stopped"), re("info"), ce(""), c();
  }
  function Yt() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    ct(), H(!1), L.pause();
    const pe = E.current.purpose === "round";
    pe && Ke(), re("info"), ce(`Harjoitus on tauolla.${pe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function xt() {
    const L = d.current;
    if (!L || L.phase !== "paused" || Me) return;
    ct();
    const pe = p.current;
    if (g(""), da(L.settings)) {
      ue(!0);
      const Se = await gt("round");
      if (pe !== p.current) return;
      if (ue(!1), !Se) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), re("info"), ce(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await je(L));
  }
  function Vt(L) {
    const pe = d.current;
    !pe || pe.phase !== "active" || (pe.useHint(L), me(L), c());
  }
  const pn = O.useRef({ hidden: () => {
  }, restored: () => {
  } });
  pn.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || Me ? Yt() : E.current.phase !== "off" && E.current.phase !== "error" && (ct(), ue(!1), Ke());
    },
    restored: () => {
      ue(!1), H(!1), z({ phase: "off", purpose: "none" }), We(), c();
    }
  }, O.useEffect(() => {
    Je();
    const L = () => Je();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const pe = () => {
      p.current++, clearTimeout(S.current), clearTimeout(R.current), h.current.stop(), m.current.stop(), Im(), d.current?.pause();
    }, Se = () => {
      document.hidden && pn.current.hidden();
    }, Jt = (lt) => {
      lt.persisted && pn.current.restored();
    };
    return document.addEventListener("visibilitychange", Se), window.addEventListener("pagehide", pe), window.addEventListener("pageshow", Jt), () => {
      pe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Se), window.removeEventListener("pagehide", pe), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const mn = O.useRef(null), zn = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${Me}`;
  O.useEffect(() => {
    const L = d.current, pe = P.current, Se = document.activeElement;
    !L || !pe || !(Se === document.body || pe.contains(Se)) || (L.phase === "feedback" ? mn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Me && (Se === document.body || Se === mn.current) && pe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [zn]);
  const be = d.current, it = !!be && ["active", "paused", "feedback"].includes(be.phase), Ye = it ? be.settings : s, mt = it ? be.question : void 0, Pt = !!mt && !!be?.answered, vn = it && be.phase === "paused" && !Me && !Pt, kn = it && be.phase === "active" && !Me, cr = it ? null : go(s), Nn = it || ne, ui = Ti(Ye), Mi = Yp(Ye), Cn = mt && !Pt ? D : 0, dr = mt ? nm(Ye, mt, Pt ? 2 : Cn) : { marks: [], text: "" }, ts = [...new Map([...dr.marks, ...Pt ? [] : we.map((L) => ({ ...L, label: Fe(L.midi, Ye.flats), kind: "wrong" }))].map((L) => [Ge(L), L])).values()], Na = it && da(Ye), _n = !!mt && !vn && (mt.choices === "position" || ts.length > 0), jt = be ? jo(be.results) : null, ns = !be || Ye.hints !== "fade" ? "" : be.index <= 3 ? " · vastaus näkyy" : be.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", is = be && !it ? be.results.filter((L) => L.errors > 0 || L.hint) : [], [rs, ss] = Iv(Ye), Tn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Mn = r.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
      r.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !it && Ce === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx(sm, { onSelect: zt })
  ] }) : !it && Ce === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx(Qm, { onBack: () => $e(null) })
  ] }) : !it && Ce === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx(Jm, { onBack: () => $e(null) })
  ] }) : !it && Ce === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx(qm, { onBack: () => $e(null) })
  ] }) : !it && Ce === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx(Sv, { onBack: () => $e(null) })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: rs, children: [
      "Lue tämän harjoituksen teoria: ",
      ss,
      " →"
    ] }) }),
    Ce !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        it && qe(), $e(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: Ce === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: Ce === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    it ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: tr(Ye.mode) }),
      " · ",
      Md(Ye)
    ] }) : Ce === "legacy" ? /* @__PURE__ */ a.jsx(Pd, { s, change: Gt, locked: Nn, problem: cr }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Pd, { s, change: Gt, locked: Nn, problem: cr })
    ] }),
    !it && (Ce === "legacy" || da(s)) && /* @__PURE__ */ a.jsx(
      Nv,
      {
        mic: b,
        frame: N,
        heard: I,
        accepted: W,
        now: V,
        s,
        change: Gt,
        devices: fe,
        locked: ne,
        calibrating: Y,
        calibration: se,
        onTest: sn,
        onStop: Ke,
        onCalibrate: Wt
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: P, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: tr(Ye.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: it ? `Kysymys ${be.index}${be.total ? " / " + be.total : " · vapaa harjoittelu"} · ${wa[Ye.hints].title}${ns}${be.phase === "paused" && !Me ? " · tauolla" : ""}` : ke === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !it && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        be && be.results.length > 0 && jt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: ke === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: Fv(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          is.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(is.map((L) => Of(L.item, s.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Md(s) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: ne ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Le, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!cr, onClick: () => {
          _e();
        }, children: be?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !be && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      it && mt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: vn ? "Harjoitus on tauolla." : mt.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: vn ? "Kysymys palaa näkyviin, kun jatkat." : Me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Tv(Ye, mt) }),
        be.hintLevel > 0 && !Pt && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ye.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Na && /* @__PURE__ */ a.jsx(Ev, { mic: b, frame: N, heard: I, s: Ye, now: V }),
        mt.choices === "note" && !vn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ye.accidentals ? Array.from({ length: 12 }, (L, pe) => pe) : bv).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: le.includes(L) ? "wrong" : Pt && L === mt.midi % 12 ? "right" : "", disabled: !kn || le.includes(L), onClick: () => Re(L, "note"), children: Fe(L, Ye.flats) }, L)) }),
        mt.choices === "degree" && !vn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ye.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ye.scale]) : Ni[Ye.chord].tones).map(([L, pe]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: le.includes(L) ? "wrong" : Pt && L === mt.interval ? "right" : "", disabled: !kn || le.includes(L), onClick: () => Re(L, "degree"), children: pe }, L)) }),
        _n && /* @__PURE__ */ a.jsx(
          ar,
          {
            area: Mi,
            marks: ts,
            disabled: !kn || mt.choices !== "position" || Ye.input === "mic",
            onAnswer: (L) => Re(L.midi, "board", L),
            caption: ui.fixed === "shape" ? `${Ye.shape}-muodon alue` : ui.fixed === "box" ? `Boksin ${Ye.box} alue` : "Otelauta"
          }
        ),
        !Pt && !vn && Cn > 0 && dr.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: dr.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${Q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ae }),
        ee !== null && be.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            be.confirmWrong(), j(null), ce("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: Z }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          be.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: mn, onClick: () => {
            Qe();
          }, children: be.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          be.phase === "active" && !Pt && !Me && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            Cn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Vt(Math.max(1, be.hintLevel)), children: be.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Cn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Vt(2), children: "Näytä vastaus" }),
            Cn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => me(0), children: "Piilota vihje" })
          ] }),
          mt.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !kn, onClick: () => {
            je(be);
          }, children: "Kuuntele uudelleen" }),
          be.phase === "paused" && !Me ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: ne, onClick: () => {
            xt();
          }, children: ne ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Yt, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => qe(), children: "Lopeta harjoitus" })
        ] }),
        be.phase === "feedback" && Ye.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !it && Z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: Z })
    ] }),
    !it && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        s.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[s.root])}&asteikko=${s.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Dp(s), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx($v, { store: r, s, locked: Nn, changed: () => {
        const L = ga(r.data.settings);
        $.current = L, u(L), c();
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
Pp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(Dv, {}));
//# sourceMappingURL=app.js.map
