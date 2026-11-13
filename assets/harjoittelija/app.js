function Sp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ao = { exports: {} }, Gr = {}, lo = { exports: {} }, Le = {};
var dd;
function wp() {
  if (dd) return Le;
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
    var Se, G = {}, oe = null, B = null;
    if (D != null) for (Se in D.ref !== void 0 && (B = D.ref), D.key !== void 0 && (oe = "" + D.key), D) X.call(D, Se) && !M.hasOwnProperty(Se) && (G[Se] = D[Se]);
    var te = arguments.length - 2;
    if (te === 1) G.children = me;
    else if (1 < te) {
      for (var j = Array(te), Y = 0; Y < te; Y++) j[Y] = arguments[Y + 2];
      G.children = j;
    }
    if (g && g.defaultProps) for (Se in te = g.defaultProps, te) G[Se] === void 0 && (G[Se] = te[Se]);
    return { $$typeof: r, type: g, key: oe, ref: B, props: G, _owner: W.current };
  }
  function ne(g, D) {
    return { $$typeof: r, type: g.type, key: D, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function he(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }
  function _e(g) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(me) {
      return D[me];
    });
  }
  var ie = /\/+/g;
  function ce(g, D) {
    return typeof g == "object" && g !== null && g.key != null ? _e("" + g.key) : D.toString(36);
  }
  function Te(g, D, me, Se, G) {
    var oe = typeof g;
    (oe === "undefined" || oe === "boolean") && (g = null);
    var B = !1;
    if (g === null) B = !0;
    else switch (oe) {
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
    if (B) return B = g, G = G(B), g = Se === "" ? "." + ce(B, 0) : Se, I(G) ? (me = "", g != null && (me = g.replace(ie, "$&/") + "/"), Te(G, D, me, "", function(Y) {
      return Y;
    })) : G != null && (he(G) && (G = ne(G, me + (!G.key || B && B.key === G.key ? "" : ("" + G.key).replace(ie, "$&/") + "/") + g)), D.push(G)), 1;
    if (B = 0, Se = Se === "" ? "." : Se + ":", I(g)) for (var te = 0; te < g.length; te++) {
      oe = g[te];
      var j = Se + ce(oe, te);
      B += Te(oe, D, me, j, G);
    }
    else if (j = P(g), typeof j == "function") for (g = j.call(g), te = 0; !(oe = g.next()).done; ) oe = oe.value, j = Se + ce(oe, te++), B += Te(oe, D, me, j, G);
    else if (oe === "object") throw D = String(g), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function H(g, D, me) {
    if (g == null) return g;
    var Se = [], G = 0;
    return Te(g, Se, "", "", function(oe) {
      return D.call(me, oe, G++);
    }), Se;
  }
  function le(g) {
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
  var de = { current: null }, Q = { transition: null }, se = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Q, ReactCurrentOwner: W };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: H, forEach: function(g, D, me) {
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
    if (!he(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Le.Component = E, Le.Fragment = u, Le.Profiler = d, Le.PureComponent = N, Le.StrictMode = c, Le.Suspense = S, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Le.act = Z, Le.cloneElement = function(g, D, me) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var Se = b({}, g.props), G = g.key, oe = g.ref, B = g._owner;
    if (D != null) {
      if (D.ref !== void 0 && (oe = D.ref, B = W.current), D.key !== void 0 && (G = "" + D.key), g.type && g.type.defaultProps) var te = g.type.defaultProps;
      for (j in D) X.call(D, j) && !M.hasOwnProperty(j) && (Se[j] = D[j] === void 0 && te !== void 0 ? te[j] : D[j]);
    }
    var j = arguments.length - 2;
    if (j === 1) Se.children = me;
    else if (1 < j) {
      te = Array(j);
      for (var Y = 0; Y < j; Y++) te[Y] = arguments[Y + 2];
      Se.children = te;
    }
    return { $$typeof: r, type: g.type, key: G, ref: oe, props: Se, _owner: B };
  }, Le.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Le.createElement = V, Le.createFactory = function(g) {
    var D = V.bind(null, g);
    return D.type = g, D;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(g) {
    return { $$typeof: p, render: g };
  }, Le.isValidElement = he, Le.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: le };
  }, Le.memo = function(g, D) {
    return { $$typeof: R, type: g, compare: D === void 0 ? null : D };
  }, Le.startTransition = function(g) {
    var D = Q.transition;
    Q.transition = {};
    try {
      g();
    } finally {
      Q.transition = D;
    }
  }, Le.unstable_act = Z, Le.useCallback = function(g, D) {
    return de.current.useCallback(g, D);
  }, Le.useContext = function(g) {
    return de.current.useContext(g);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(g) {
    return de.current.useDeferredValue(g);
  }, Le.useEffect = function(g, D) {
    return de.current.useEffect(g, D);
  }, Le.useId = function() {
    return de.current.useId();
  }, Le.useImperativeHandle = function(g, D, me) {
    return de.current.useImperativeHandle(g, D, me);
  }, Le.useInsertionEffect = function(g, D) {
    return de.current.useInsertionEffect(g, D);
  }, Le.useLayoutEffect = function(g, D) {
    return de.current.useLayoutEffect(g, D);
  }, Le.useMemo = function(g, D) {
    return de.current.useMemo(g, D);
  }, Le.useReducer = function(g, D, me) {
    return de.current.useReducer(g, D, me);
  }, Le.useRef = function(g) {
    return de.current.useRef(g);
  }, Le.useState = function(g) {
    return de.current.useState(g);
  }, Le.useSyncExternalStore = function(g, D, me) {
    return de.current.useSyncExternalStore(g, D, me);
  }, Le.useTransition = function() {
    return de.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var fd;
function Oo() {
  return fd || (fd = 1, lo.exports = wp()), lo.exports;
}
var hd;
function Ep() {
  if (hd) return Gr;
  hd = 1;
  var r = Oo(), s = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, S, R) {
    var k, C = {}, P = null, $ = null;
    R !== void 0 && (P = "" + R), S.key !== void 0 && (P = "" + S.key), S.ref !== void 0 && ($ = S.ref);
    for (k in S) c.call(S, k) && !h.hasOwnProperty(k) && (C[k] = S[k]);
    if (p && p.defaultProps) for (k in S = p.defaultProps, S) C[k] === void 0 && (C[k] = S[k]);
    return { $$typeof: s, type: p, key: P, ref: $, props: C, _owner: d.current };
  }
  return Gr.Fragment = u, Gr.jsx = m, Gr.jsxs = m, Gr;
}
var pd;
function Np() {
  return pd || (pd = 1, ao.exports = Ep()), ao.exports;
}
var a = Np(), O = Oo(), da = {}, oo = { exports: {} }, zt = {}, uo = { exports: {} }, co = {};
var md;
function Cp() {
  return md || (md = 1, (function(r) {
    function s(Q, se) {
      var Z = Q.length;
      Q.push(se);
      e: for (; 0 < Z; ) {
        var g = Z - 1 >>> 1, D = Q[g];
        if (0 < d(D, se)) Q[g] = se, Q[Z] = D, Z = g;
        else break e;
      }
    }
    function u(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function c(Q) {
      if (Q.length === 0) return null;
      var se = Q[0], Z = Q.pop();
      if (Z !== se) {
        Q[0] = Z;
        e: for (var g = 0, D = Q.length, me = D >>> 1; g < me; ) {
          var Se = 2 * (g + 1) - 1, G = Q[Se], oe = Se + 1, B = Q[oe];
          if (0 > d(G, Z)) oe < D && 0 > d(B, G) ? (Q[g] = B, Q[oe] = Z, g = oe) : (Q[g] = G, Q[Se] = Z, g = Se);
          else if (oe < D && 0 > d(B, Z)) Q[g] = B, Q[oe] = Z, g = oe;
          else break e;
        }
      }
      return se;
    }
    function d(Q, se) {
      var Z = Q.sortIndex - se.sortIndex;
      return Z !== 0 ? Z : Q.id - se.id;
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
      for (var se = u(R); se !== null; ) {
        if (se.callback === null) c(R);
        else if (se.startTime <= Q) c(R), se.sortIndex = se.expirationTime, s(S, se);
        else break;
        se = u(R);
      }
    }
    function I(Q) {
      if (w = !1, F(Q), !b) if (u(S) !== null) b = !0, le(X);
      else {
        var se = u(R);
        se !== null && de(I, se.startTime - Q);
      }
    }
    function X(Q, se) {
      b = !1, w && (w = !1, z(V), V = -1), $ = !0;
      var Z = P;
      try {
        for (F(se), C = u(S); C !== null && (!(C.expirationTime > se) || Q && !_e()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, P = C.priorityLevel;
            var D = g(C.expirationTime <= se);
            se = r.unstable_now(), typeof D == "function" ? C.callback = D : C === u(S) && c(S), F(se);
          } else c(S);
          C = u(S);
        }
        if (C !== null) var me = !0;
        else {
          var Se = u(R);
          Se !== null && de(I, Se.startTime - se), me = !1;
        }
        return me;
      } finally {
        C = null, P = Z, $ = !1;
      }
    }
    var W = !1, M = null, V = -1, ne = 5, he = -1;
    function _e() {
      return !(r.unstable_now() - he < ne);
    }
    function ie() {
      if (M !== null) {
        var Q = r.unstable_now();
        he = Q;
        var se = !0;
        try {
          se = M(!0, Q);
        } finally {
          se ? ce() : (W = !1, M = null);
        }
      } else W = !1;
    }
    var ce;
    if (typeof N == "function") ce = function() {
      N(ie);
    };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), H = Te.port2;
      Te.port1.onmessage = ie, ce = function() {
        H.postMessage(null);
      };
    } else ce = function() {
      E(ie, 0);
    };
    function le(Q) {
      M = Q, W || (W = !0, ce());
    }
    function de(Q, se) {
      V = E(function() {
        Q(r.unstable_now());
      }, se);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, r.unstable_continueExecution = function() {
      b || $ || (b = !0, le(X));
    }, r.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, r.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, r.unstable_next = function(Q) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var se = 3;
          break;
        default:
          se = P;
      }
      var Z = P;
      P = se;
      try {
        return Q();
      } finally {
        P = Z;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(Q, se) {
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
        return se();
      } finally {
        P = Z;
      }
    }, r.unstable_scheduleCallback = function(Q, se, Z) {
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
      return D = Z + D, Q = { id: k++, callback: se, priorityLevel: Q, startTime: Z, expirationTime: D, sortIndex: -1 }, Z > g ? (Q.sortIndex = Z, s(R, Q), u(S) === null && Q === u(R) && (w ? (z(V), V = -1) : w = !0, de(I, Z - g))) : (Q.sortIndex = D, s(S, Q), b || $ || (b = !0, le(X))), Q;
    }, r.unstable_shouldYield = _e, r.unstable_wrapCallback = function(Q) {
      var se = P;
      return function() {
        var Z = P;
        P = se;
        try {
          return Q.apply(this, arguments);
        } finally {
          P = Z;
        }
      };
    };
  })(co)), co;
}
var vd;
function _p() {
  return vd || (vd = 1, uo.exports = Cp()), uo.exports;
}
var kd;
function Tp() {
  if (kd) return zt;
  kd = 1;
  var r = Oo(), s = _p();
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
  var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = /* @__PURE__ */ Symbol.for("react.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), he = /* @__PURE__ */ Symbol.for("react.provider"), _e = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), Te = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function se(e) {
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
  function Se(e, t) {
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
        return e = Se(e.type, !1), e;
      case 11:
        return e = Se(e.type.render, !1), e;
      case 1:
        return e = Se(e.type, !0), e;
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case W:
        return "Portal";
      case ne:
        return "Profiler";
      case V:
        return "StrictMode";
      case ce:
        return "Suspense";
      case Te:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case _e:
        return (e.displayName || "Context") + ".Consumer";
      case he:
        return (e._context.displayName || "Context") + ".Provider";
      case ie:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return oe(e(t));
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
        return oe(t);
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
  function re(e) {
    e._valueTracker || (e._valueTracker = Y(e));
  }
  function ae(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = j(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function fe(e) {
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
  function Pe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ce(e, t) {
    t = t.checked, t != null && F(e, "checked", t, !1);
  }
  function be(e, t) {
    Ce(e, t);
    var n = te(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Qe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qe(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function We(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Qe(e, t, n) {
    (t !== "number" || fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var He = Array.isArray;
  function Je(e, t, n, i) {
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
  function ot(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ye(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (He(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function ze(e, t) {
    var n = te(t.value), i = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function nt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Et, ln = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Et = Et || document.createElement("div"), Et.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Et.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Yt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jt = {
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
  }, Mt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Jt).forEach(function(e) {
    Mt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e];
    });
  });
  function je(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px";
  }
  function Bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = je(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ne = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ae(e, t) {
    if (t) {
      if (Ne[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
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
  var Be = null;
  function rt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Lt = null, vt = null, Xt = null;
  function Nn(e) {
    if (e = Ar(e)) {
      if (typeof Lt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Cs(t), Lt(e.stateNode, e.type, t));
    }
  }
  function vn(e) {
    vt ? Xt ? Xt.push(e) : Xt = [e] : vt = e;
  }
  function kn() {
    if (vt) {
      var e = vt, t = Xt;
      if (Xt = vt = null, Nn(e), t) for (e = 0; e < t.length; e++) Nn(t[e]);
    }
  }
  function ns(e, t) {
    return e(t);
  }
  function Oe() {
  }
  var qe = !1;
  function Xe(e, t, n) {
    if (qe) return e(t, n);
    qe = !0;
    try {
      return ns(e, t, n);
    } finally {
      qe = !1, (vt !== null || Xt !== null) && (Oe(), kn());
    }
  }
  function ut(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Cs(n);
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
  var Kt = !1;
  if (p) try {
    var Zt = {};
    Object.defineProperty(Zt, "passive", { get: function() {
      Kt = !0;
    } }), window.addEventListener("test", Zt, Zt), window.removeEventListener("test", Zt, Zt);
  } catch {
    Kt = !1;
  }
  function Ti(e, t, n, i, l, o, f, v, y) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, A);
    } catch (U) {
      this.onError(U);
    }
  }
  var Cn = !1, Dn = null, ui = !1, ur = null, ci = { onError: function(e) {
    Cn = !0, Dn = e;
  } };
  function cr(e, t, n, i, l, o, f, v, y) {
    Cn = !1, Dn = null, Ti.apply(ci, arguments);
  }
  function is(e, t, n, i, l, o, f, v, y) {
    if (cr.apply(this, arguments), Cn) {
      if (Cn) {
        var A = Dn;
        Cn = !1, Dn = null;
      } else throw Error(u(198));
      ui || (ui = !0, ur = A);
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
  function rs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function xt(e) {
    if (_n(e) !== e) throw Error(u(188));
  }
  function Ca(e) {
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
          if (o === n) return xt(l), e;
          if (o === i) return xt(l), t;
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
  function dr(e) {
    return e = Ca(e), e !== null ? ss(e) : null;
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
  var as = s.unstable_scheduleCallback, Tn = s.unstable_cancelCallback, zn = s.unstable_shouldYield, L = s.unstable_requestPaint, ee = s.unstable_now, Ie = s.unstable_getCurrentPriorityLevel, $t = s.unstable_ImmediatePriority, ct = s.unstable_UserBlockingPriority, Mn = s.unstable_NormalPriority, fr = s.unstable_LowPriority, Vn = s.unstable_IdlePriority, ls = null, yn = null;
  function bf(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var on = Math.clz32 ? Math.clz32 : zf, If = Math.log, Df = Math.LN2;
  function zf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (If(e) / Df | 0) | 0;
  }
  var os = 64, us = 4194304;
  function hr(e) {
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
  function cs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, o = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var v = f & ~l;
      v !== 0 ? i = hr(v) : (o &= f, o !== 0 && (i = hr(o)));
    } else f = n & ~l, f !== 0 ? i = hr(f) : o !== 0 && (i = hr(o));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - on(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function Vf(e, t) {
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
  function Bf(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var f = 31 - on(o), v = 1 << f, y = l[f];
      y === -1 ? ((v & n) === 0 || (v & i) !== 0) && (l[f] = Vf(v, t)) : y <= t && (e.expiredLanes |= v), o &= ~v;
    }
  }
  function _a(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Bo() {
    var e = os;
    return os <<= 1, (os & 4194240) === 0 && (os = 64), e;
  }
  function Ta(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
  }
  function Kf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - on(n), o = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Ma(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - on(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Ue = 0;
  function Ko(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ho, Pa, Uo, Go, Wo, Aa = !1, ds = [], Bn = null, Kn = null, Hn = null, mr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Un = [], Hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vr.delete(t.pointerId);
    }
  }
  function kr(e, t, n, i, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Ar(t), t !== null && Pa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Uf(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = kr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = kr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = kr(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return mr.set(o, kr(mr.get(o) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, vr.set(o, kr(vr.get(o) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function Yo(e) {
    var t = di(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = rs(n), t !== null) {
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
  function fs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = La(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Be = i, n.target.dispatchEvent(i), Be = null;
      } else return t = Ar(n), t !== null && Pa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Jo(e, t, n) {
    fs(e) && n.delete(t);
  }
  function Gf() {
    Aa = !1, Bn !== null && fs(Bn) && (Bn = null), Kn !== null && fs(Kn) && (Kn = null), Hn !== null && fs(Hn) && (Hn = null), mr.forEach(Jo), vr.forEach(Jo);
  }
  function yr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Aa || (Aa = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Gf)));
  }
  function gr(e) {
    function t(l) {
      return yr(l, e);
    }
    if (0 < ds.length) {
      yr(ds[0], e);
      for (var n = 1; n < ds.length; n++) {
        var i = ds[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && yr(Bn, e), Kn !== null && yr(Kn, e), Hn !== null && yr(Hn, e), mr.forEach(t), vr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Yo(n), n.blockedOn === null && Un.shift();
  }
  var Mi = I.ReactCurrentBatchConfig, hs = !0;
  function Wf(e, t, n, i) {
    var l = Ue, o = Mi.transition;
    Mi.transition = null;
    try {
      Ue = 1, Ra(e, t, n, i);
    } finally {
      Ue = l, Mi.transition = o;
    }
  }
  function Qf(e, t, n, i) {
    var l = Ue, o = Mi.transition;
    Mi.transition = null;
    try {
      Ue = 4, Ra(e, t, n, i);
    } finally {
      Ue = l, Mi.transition = o;
    }
  }
  function Ra(e, t, n, i) {
    if (hs) {
      var l = La(e, t, n, i);
      if (l === null) Ja(e, t, i, ps, n), Qo(e, i);
      else if (Uf(l, e, t, n, i)) i.stopPropagation();
      else if (Qo(e, i), t & 4 && -1 < Hf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Ar(l);
          if (o !== null && Ho(o), o = La(e, t, n, i), o === null && Ja(e, t, i, ps, n), o === l) break;
          l = o;
        }
        l !== null && i.stopPropagation();
      } else Ja(e, t, i, null, n);
    }
  }
  var ps = null;
  function La(e, t, n, i) {
    if (ps = null, e = rt(i), e = di(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = rs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ps = e, null;
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
        switch (Ie()) {
          case $t:
            return 1;
          case ct:
            return 4;
          case Mn:
          case fr:
            return 16;
          case Vn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, $a = null, ms = null;
  function Zo() {
    if (ms) return ms;
    var e, t = $a, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === l[o - i]; i++) ;
    return ms = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function vs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ks() {
    return !0;
  }
  function qo() {
    return !1;
  }
  function Ht(e) {
    function t(n, i, l, o, f) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(o) : o[v]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ks : qo, this.isPropagationStopped = qo, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ks);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ks);
    }, persist: function() {
    }, isPersistent: ks }), t;
  }
  var Pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Oa = Ht(Pi), xr = Z({}, Pi, { view: 0, detail: 0 }), Yf = Ht(xr), Fa, ba, jr, ys = Z({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Da, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (Fa = e.screenX - jr.screenX, ba = e.screenY - jr.screenY) : ba = Fa = 0, jr = e), Fa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ba;
  } }), eu = Ht(ys), Jf = Z({}, ys, { dataTransfer: 0 }), Xf = Ht(Jf), Zf = Z({}, xr, { relatedTarget: 0 }), Ia = Ht(Zf), qf = Z({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = Ht(qf), th = Z({}, Pi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), nh = Ht(th), ih = Z({}, Pi, { data: 0 }), tu = Ht(ih), rh = {
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
  }, sh = {
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
  }, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ah[e]) ? !!t[e] : !1;
  }
  function Da() {
    return lh;
  }
  var oh = Z({}, xr, { key: function(e) {
    if (e.key) {
      var t = rh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Da, charCode: function(e) {
    return e.type === "keypress" ? vs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), uh = Ht(oh), ch = Z({}, ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nu = Ht(ch), dh = Z({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Da }), fh = Ht(dh), hh = Z({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = Ht(hh), mh = Z({}, ys, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vh = Ht(mh), kh = [9, 13, 27, 32], za = p && "CompositionEvent" in window, Sr = null;
  p && "documentMode" in document && (Sr = document.documentMode);
  var yh = p && "TextEvent" in window && !Sr, iu = p && (!za || Sr && 8 < Sr && 11 >= Sr), ru = " ", su = !1;
  function au(e, t) {
    switch (e) {
      case "keyup":
        return kh.indexOf(t.keyCode) !== -1;
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
  var Ai = !1;
  function gh(e, t) {
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
  function xh(e, t) {
    if (Ai) return e === "compositionend" || !za && au(e, t) ? (e = Zo(), ms = $a = Gn = null, Ai = !1, e) : null;
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
  var jh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jh[e.type] : t === "textarea";
  }
  function uu(e, t, n, i) {
    vn(i), t = ws(t, "onChange"), 0 < t.length && (n = new Oa("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var wr = null, Er = null;
  function Sh(e) {
    _u(e, 0);
  }
  function gs(e) {
    var t = Fi(e);
    if (ae(t)) return e;
  }
  function wh(e, t) {
    if (e === "change") return t;
  }
  var cu = !1;
  if (p) {
    var Va;
    if (p) {
      var Ba = "oninput" in document;
      if (!Ba) {
        var du = document.createElement("div");
        du.setAttribute("oninput", "return;"), Ba = typeof du.oninput == "function";
      }
      Va = Ba;
    } else Va = !1;
    cu = Va && (!document.documentMode || 9 < document.documentMode);
  }
  function fu() {
    wr && (wr.detachEvent("onpropertychange", hu), Er = wr = null);
  }
  function hu(e) {
    if (e.propertyName === "value" && gs(Er)) {
      var t = [];
      uu(t, Er, e, rt(e)), Xe(Sh, t);
    }
  }
  function Eh(e, t, n) {
    e === "focusin" ? (fu(), wr = t, Er = n, wr.attachEvent("onpropertychange", hu)) : e === "focusout" && fu();
  }
  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gs(Er);
  }
  function Ch(e, t) {
    if (e === "click") return gs(t);
  }
  function _h(e, t) {
    if (e === "input" || e === "change") return gs(t);
  }
  function Th(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : Th;
  function Nr(e, t) {
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
    for (var e = window, t = fe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = fe(e.document);
    }
    return t;
  }
  function Ka(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Mh(e) {
    var t = ku(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ka(n)) {
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
  var Ph = p && "documentMode" in document && 11 >= document.documentMode, Ri = null, Ha = null, Cr = null, Ua = !1;
  function yu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ua || Ri == null || Ri !== fe(i) || (i = Ri, "selectionStart" in i && Ka(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Cr && Nr(Cr, i) || (Cr = i, i = ws(Ha, "onSelect"), 0 < i.length && (t = new Oa("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Ri)));
  }
  function xs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Li = { animationend: xs("Animation", "AnimationEnd"), animationiteration: xs("Animation", "AnimationIteration"), animationstart: xs("Animation", "AnimationStart"), transitionend: xs("Transition", "TransitionEnd") }, Ga = {}, gu = {};
  p && (gu = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
  function js(e) {
    if (Ga[e]) return Ga[e];
    if (!Li[e]) return e;
    var t = Li[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in gu) return Ga[e] = t[n];
    return e;
  }
  var xu = js("animationend"), ju = js("animationiteration"), Su = js("animationstart"), wu = js("transitionend"), Eu = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Eu.set(e, t), h(t, [e]);
  }
  for (var Wa = 0; Wa < Nu.length; Wa++) {
    var Qa = Nu[Wa], Ah = Qa.toLowerCase(), Rh = Qa[0].toUpperCase() + Qa.slice(1);
    Wn(Ah, "on" + Rh);
  }
  Wn(xu, "onAnimationEnd"), Wn(ju, "onAnimationIteration"), Wn(Su, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(wu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
  function Cu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, is(i, t, void 0, e), e.currentTarget = null;
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
    if (ui) throw e = ur, ui = !1, ur = null, e;
  }
  function et(e, t) {
    var n = t[nl];
    n === void 0 && (n = t[nl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Tu(t, e, 2, !1), n.add(i));
  }
  function Ya(e, t, n) {
    var i = 0;
    t && (i |= 4), Tu(n, e, i, t);
  }
  var Ss = "_reactListening" + Math.random().toString(36).slice(2);
  function Tr(e) {
    if (!e[Ss]) {
      e[Ss] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Lh.has(n) || Ya(n, !1, e), Ya(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ss] || (t[Ss] = !0, Ya("selectionchange", !1, t));
    }
  }
  function Tu(e, t, n, i) {
    switch (Xo(t)) {
      case 1:
        var l = Wf;
        break;
      case 4:
        l = Qf;
        break;
      default:
        l = Ra;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Ja(e, t, n, i, l) {
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
          if (f = di(v), f === null) return;
          if (y = f.tag, y === 5 || y === 6) {
            i = o = f;
            continue e;
          }
          v = v.parentNode;
        }
      }
      i = i.return;
    }
    Xe(function() {
      var A = o, U = rt(n), J = [];
      e: {
        var K = Eu.get(e);
        if (K !== void 0) {
          var ue = Oa, ve = e;
          switch (e) {
            case "keypress":
              if (vs(n) === 0) break e;
            case "keydown":
            case "keyup":
              ue = uh;
              break;
            case "focusin":
              ve = "focus", ue = Ia;
              break;
            case "focusout":
              ve = "blur", ue = Ia;
              break;
            case "beforeblur":
            case "afterblur":
              ue = Ia;
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
              ue = eu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = Xf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = fh;
              break;
            case xu:
            case ju:
            case Su:
              ue = eh;
              break;
            case wu:
              ue = ph;
              break;
            case "scroll":
              ue = Yf;
              break;
            case "wheel":
              ue = vh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = nh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = nu;
          }
          var ge = (t & 4) !== 0, dt = !ge && e === "scroll", _ = ge ? K !== null ? K + "Capture" : null : K;
          ge = [];
          for (var x = A, T; x !== null; ) {
            T = x;
            var q = T.stateNode;
            if (T.tag === 5 && q !== null && (T = q, _ !== null && (q = ut(x, _), q != null && ge.push(Mr(x, q, T)))), dt) break;
            x = x.return;
          }
          0 < ge.length && (K = new ue(K, ve, null, n, U), J.push({ event: K, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", ue = e === "mouseout" || e === "pointerout", K && n !== Be && (ve = n.relatedTarget || n.fromElement) && (di(ve) || ve[Pn])) break e;
          if ((ue || K) && (K = U.window === U ? U : (K = U.ownerDocument) ? K.defaultView || K.parentWindow : window, ue ? (ve = n.relatedTarget || n.toElement, ue = A, ve = ve ? di(ve) : null, ve !== null && (dt = _n(ve), ve !== dt || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (ue = null, ve = A), ue !== ve)) {
            if (ge = eu, q = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ge = nu, q = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), dt = ue == null ? K : Fi(ue), T = ve == null ? K : Fi(ve), K = new ge(q, x + "leave", ue, n, U), K.target = dt, K.relatedTarget = T, q = null, di(U) === A && (ge = new ge(_, x + "enter", ve, n, U), ge.target = T, ge.relatedTarget = dt, q = ge), dt = q, ue && ve) t: {
              for (ge = ue, _ = ve, x = 0, T = ge; T; T = $i(T)) x++;
              for (T = 0, q = _; q; q = $i(q)) T++;
              for (; 0 < x - T; ) ge = $i(ge), x--;
              for (; 0 < T - x; ) _ = $i(_), T--;
              for (; x--; ) {
                if (ge === _ || _ !== null && ge === _.alternate) break t;
                ge = $i(ge), _ = $i(_);
              }
              ge = null;
            }
            else ge = null;
            ue !== null && Mu(J, K, ue, ge, !1), ve !== null && dt !== null && Mu(J, dt, ve, ge, !0);
          }
        }
        e: {
          if (K = A ? Fi(A) : window, ue = K.nodeName && K.nodeName.toLowerCase(), ue === "select" || ue === "input" && K.type === "file") var xe = wh;
          else if (ou(K)) if (cu) xe = _h;
          else {
            xe = Nh;
            var we = Eh;
          }
          else (ue = K.nodeName) && ue.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (xe = Ch);
          if (xe && (xe = xe(e, A))) {
            uu(J, xe, n, U);
            break e;
          }
          we && we(e, K, A), e === "focusout" && (we = K._wrapperState) && we.controlled && K.type === "number" && Qe(K, "number", K.value);
        }
        switch (we = A ? Fi(A) : window, e) {
          case "focusin":
            (ou(we) || we.contentEditable === "true") && (Ri = we, Ha = A, Cr = null);
            break;
          case "focusout":
            Cr = Ha = Ri = null;
            break;
          case "mousedown":
            Ua = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ua = !1, yu(J, n, U);
            break;
          case "selectionchange":
            if (Ph) break;
          case "keydown":
          case "keyup":
            yu(J, n, U);
        }
        var Ee;
        if (za) e: {
          switch (e) {
            case "compositionstart":
              var Me = "onCompositionStart";
              break e;
            case "compositionend":
              Me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Me = "onCompositionUpdate";
              break e;
          }
          Me = void 0;
        }
        else Ai ? au(e, n) && (Me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Me = "onCompositionStart");
        Me && (iu && n.locale !== "ko" && (Ai || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && Ai && (Ee = Zo()) : (Gn = U, $a = "value" in Gn ? Gn.value : Gn.textContent, Ai = !0)), we = ws(A, Me), 0 < we.length && (Me = new tu(Me, e, null, n, U), J.push({ event: Me, listeners: we }), Ee ? Me.data = Ee : (Ee = lu(n), Ee !== null && (Me.data = Ee)))), (Ee = yh ? gh(e, n) : xh(e, n)) && (A = ws(A, "onBeforeInput"), 0 < A.length && (U = new tu("onBeforeInput", "beforeinput", null, n, U), J.push({ event: U, listeners: A }), U.data = Ee));
      }
      _u(J, t);
    });
  }
  function Mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ws(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = ut(e, n), o != null && i.unshift(Mr(e, o, l)), o = ut(e, t), o != null && i.push(Mr(e, o, l))), e = e.return;
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
  function Mu(e, t, n, i, l) {
    for (var o = t._reactName, f = []; n !== null && n !== i; ) {
      var v = n, y = v.alternate, A = v.stateNode;
      if (y !== null && y === i) break;
      v.tag === 5 && A !== null && (v = A, l ? (y = ut(n, o), y != null && f.unshift(Mr(n, y, v))) : l || (y = ut(n, o), y != null && f.push(Mr(n, y, v)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var $h = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
  function Pu(e) {
    return (typeof e == "string" ? e : "" + e).replace($h, `
`).replace(Oh, "");
  }
  function Es(e, t, n) {
    if (t = Pu(t), Pu(e) !== t && n) throw Error(u(425));
  }
  function Ns() {
  }
  var Xa = null, Za = null;
  function qa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var el = typeof setTimeout == "function" ? setTimeout : void 0, Fh = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
    return Au.resolve(null).then(e).catch(Ih);
  } : el;
  function Ih(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function tl(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), gr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    gr(t);
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
  var Oi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Oi, Pr = "__reactProps$" + Oi, Pn = "__reactContainer$" + Oi, nl = "__reactEvents$" + Oi, Dh = "__reactListeners$" + Oi, zh = "__reactHandles$" + Oi;
  function di(e) {
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
  function Ar(e) {
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Cs(e) {
    return e[Pr] || null;
  }
  var il = [], bi = -1;
  function Yn(e) {
    return { current: e };
  }
  function tt(e) {
    0 > bi || (e.current = il[bi], il[bi] = null, bi--);
  }
  function Ze(e, t) {
    bi++, il[bi] = e.current, e.current = t;
  }
  var Jn = {}, Nt = Yn(Jn), Ot = Yn(!1), fi = Jn;
  function Ii(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function _s() {
    tt(Ot), tt(Nt);
  }
  function Lu(e, t, n) {
    if (Nt.current !== Jn) throw Error(u(168));
    Ze(Nt, t), Ze(Ot, n);
  }
  function $u(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, B(e) || "Unknown", l));
    return Z({}, n, i);
  }
  function Ts(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, fi = Nt.current, Ze(Nt, e), Ze(Ot, Ot.current), !0;
  }
  function Ou(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    n ? (e = $u(e, t, fi), i.__reactInternalMemoizedMergedChildContext = e, tt(Ot), tt(Nt), Ze(Nt, e)) : tt(Ot), Ze(Ot, n);
  }
  var An = null, Ms = !1, rl = !1;
  function Fu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Vh(e) {
    Ms = !0, Fu(e);
  }
  function Xn() {
    if (!rl && An !== null) {
      rl = !0;
      var e = 0, t = Ue;
      try {
        var n = An;
        for (Ue = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, Ms = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), as($t, Xn), l;
      } finally {
        Ue = t, rl = !1;
      }
    }
    return null;
  }
  var Di = [], zi = 0, Ps = null, As = 0, qt = [], en = 0, hi = null, Rn = 1, Ln = "";
  function pi(e, t) {
    Di[zi++] = As, Di[zi++] = Ps, Ps = e, As = t;
  }
  function bu(e, t, n) {
    qt[en++] = Rn, qt[en++] = Ln, qt[en++] = hi, hi = e;
    var i = Rn;
    e = Ln;
    var l = 32 - on(i) - 1;
    i &= ~(1 << l), n += 1;
    var o = 32 - on(t) + l;
    if (30 < o) {
      var f = l - l % 5;
      o = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, Rn = 1 << 32 - on(t) + l | n << l | i, Ln = o + e;
    } else Rn = 1 << o | n << l | i, Ln = e;
  }
  function sl(e) {
    e.return !== null && (pi(e, 1), bu(e, 1, 0));
  }
  function al(e) {
    for (; e === Ps; ) Ps = Di[--zi], Di[zi] = null, As = Di[--zi], Di[zi] = null;
    for (; e === hi; ) hi = qt[--en], qt[en] = null, Ln = qt[--en], qt[en] = null, Rn = qt[--en], qt[en] = null;
  }
  var Ut = null, Gt = null, it = !1, cn = null;
  function Iu(e, t) {
    var n = sn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Du(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ut = e, Gt = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ut = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = hi !== null ? { id: Rn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ut = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ll(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ol(e) {
    if (it) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Du(e, t)) {
          if (ll(e)) throw Error(u(418));
          t = Qn(n.nextSibling);
          var i = Ut;
          t && Du(e, t) ? Iu(i, n) : (e.flags = e.flags & -4097 | 2, it = !1, Ut = e);
        }
      } else {
        if (ll(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, it = !1, Ut = e;
      }
    }
  }
  function zu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ut = e;
  }
  function Rs(e) {
    if (e !== Ut) return !1;
    if (!it) return zu(e), it = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qa(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (ll(e)) throw Vu(), Error(u(418));
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
    } else Gt = Ut ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vu() {
    for (var e = Gt; e; ) e = Qn(e.nextSibling);
  }
  function Vi() {
    Gt = Ut = null, it = !1;
  }
  function ul(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var Bh = I.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
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
  function Ls(e, t) {
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
      return x === null || x.tag !== 6 ? (x = eo(T, _.mode, q), x.return = _, x) : (x = l(x, T), x.return = _, x);
    }
    function y(_, x, T, q) {
      var xe = T.type;
      return xe === M ? U(_, x, T.props.children, q, T.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === le && Bu(xe) === x.type) ? (q = l(x, T.props), q.ref = Rr(_, x, T), q.return = _, q) : (q = ia(T.type, T.key, T.props, null, _.mode, q), q.ref = Rr(_, x, T), q.return = _, q);
    }
    function A(_, x, T, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== T.containerInfo || x.stateNode.implementation !== T.implementation ? (x = to(T, _.mode, q), x.return = _, x) : (x = l(x, T.children || []), x.return = _, x);
    }
    function U(_, x, T, q, xe) {
      return x === null || x.tag !== 7 ? (x = Si(T, _.mode, q, xe), x.return = _, x) : (x = l(x, T), x.return = _, x);
    }
    function J(_, x, T) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = eo("" + x, _.mode, T), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return T = ia(x.type, x.key, x.props, null, _.mode, T), T.ref = Rr(_, null, x), T.return = _, T;
          case W:
            return x = to(x, _.mode, T), x.return = _, x;
          case le:
            var q = x._init;
            return J(_, q(x._payload), T);
        }
        if (He(x) || se(x)) return x = Si(x, _.mode, T, null), x.return = _, x;
        Ls(_, x);
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
          case le:
            return xe = T._init, K(
              _,
              x,
              xe(T._payload),
              q
            );
        }
        if (He(T) || se(T)) return xe !== null ? null : U(_, x, T, q, null);
        Ls(_, T);
      }
      return null;
    }
    function ue(_, x, T, q, xe) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return _ = _.get(T) || null, v(x, _, "" + q, xe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case X:
            return _ = _.get(q.key === null ? T : q.key) || null, y(x, _, q, xe);
          case W:
            return _ = _.get(q.key === null ? T : q.key) || null, A(x, _, q, xe);
          case le:
            var we = q._init;
            return ue(_, x, T, we(q._payload), xe);
        }
        if (He(q) || se(q)) return _ = _.get(T) || null, U(x, _, q, xe, null);
        Ls(x, q);
      }
      return null;
    }
    function ve(_, x, T, q) {
      for (var xe = null, we = null, Ee = x, Me = x = 0, gt = null; Ee !== null && Me < T.length; Me++) {
        Ee.index > Me ? (gt = Ee, Ee = null) : gt = Ee.sibling;
        var Ve = K(_, Ee, T[Me], q);
        if (Ve === null) {
          Ee === null && (Ee = gt);
          break;
        }
        e && Ee && Ve.alternate === null && t(_, Ee), x = o(Ve, x, Me), we === null ? xe = Ve : we.sibling = Ve, we = Ve, Ee = gt;
      }
      if (Me === T.length) return n(_, Ee), it && pi(_, Me), xe;
      if (Ee === null) {
        for (; Me < T.length; Me++) Ee = J(_, T[Me], q), Ee !== null && (x = o(Ee, x, Me), we === null ? xe = Ee : we.sibling = Ee, we = Ee);
        return it && pi(_, Me), xe;
      }
      for (Ee = i(_, Ee); Me < T.length; Me++) gt = ue(Ee, _, Me, T[Me], q), gt !== null && (e && gt.alternate !== null && Ee.delete(gt.key === null ? Me : gt.key), x = o(gt, x, Me), we === null ? xe = gt : we.sibling = gt, we = gt);
      return e && Ee.forEach(function(ai) {
        return t(_, ai);
      }), it && pi(_, Me), xe;
    }
    function ge(_, x, T, q) {
      var xe = se(T);
      if (typeof xe != "function") throw Error(u(150));
      if (T = xe.call(T), T == null) throw Error(u(151));
      for (var we = xe = null, Ee = x, Me = x = 0, gt = null, Ve = T.next(); Ee !== null && !Ve.done; Me++, Ve = T.next()) {
        Ee.index > Me ? (gt = Ee, Ee = null) : gt = Ee.sibling;
        var ai = K(_, Ee, Ve.value, q);
        if (ai === null) {
          Ee === null && (Ee = gt);
          break;
        }
        e && Ee && ai.alternate === null && t(_, Ee), x = o(ai, x, Me), we === null ? xe = ai : we.sibling = ai, we = ai, Ee = gt;
      }
      if (Ve.done) return n(
        _,
        Ee
      ), it && pi(_, Me), xe;
      if (Ee === null) {
        for (; !Ve.done; Me++, Ve = T.next()) Ve = J(_, Ve.value, q), Ve !== null && (x = o(Ve, x, Me), we === null ? xe = Ve : we.sibling = Ve, we = Ve);
        return it && pi(_, Me), xe;
      }
      for (Ee = i(_, Ee); !Ve.done; Me++, Ve = T.next()) Ve = ue(Ee, _, Me, Ve.value, q), Ve !== null && (e && Ve.alternate !== null && Ee.delete(Ve.key === null ? Me : Ve.key), x = o(Ve, x, Me), we === null ? xe = Ve : we.sibling = Ve, we = Ve);
      return e && Ee.forEach(function(jp) {
        return t(_, jp);
      }), it && pi(_, Me), xe;
    }
    function dt(_, x, T, q) {
      if (typeof T == "object" && T !== null && T.type === M && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case X:
            e: {
              for (var xe = T.key, we = x; we !== null; ) {
                if (we.key === xe) {
                  if (xe = T.type, xe === M) {
                    if (we.tag === 7) {
                      n(_, we.sibling), x = l(we, T.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (we.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === le && Bu(xe) === we.type) {
                    n(_, we.sibling), x = l(we, T.props), x.ref = Rr(_, we, T), x.return = _, _ = x;
                    break e;
                  }
                  n(_, we);
                  break;
                } else t(_, we);
                we = we.sibling;
              }
              T.type === M ? (x = Si(T.props.children, _.mode, q, T.key), x.return = _, _ = x) : (q = ia(T.type, T.key, T.props, null, _.mode, q), q.ref = Rr(_, x, T), q.return = _, _ = q);
            }
            return f(_);
          case W:
            e: {
              for (we = T.key; x !== null; ) {
                if (x.key === we) if (x.tag === 4 && x.stateNode.containerInfo === T.containerInfo && x.stateNode.implementation === T.implementation) {
                  n(_, x.sibling), x = l(x, T.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  n(_, x);
                  break;
                }
                else t(_, x);
                x = x.sibling;
              }
              x = to(T, _.mode, q), x.return = _, _ = x;
            }
            return f(_);
          case le:
            return we = T._init, dt(_, x, we(T._payload), q);
        }
        if (He(T)) return ve(_, x, T, q);
        if (se(T)) return ge(_, x, T, q);
        Ls(_, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, x !== null && x.tag === 6 ? (n(_, x.sibling), x = l(x, T), x.return = _, _ = x) : (n(_, x), x = eo(T, _.mode, q), x.return = _, _ = x), f(_)) : n(_, x);
    }
    return dt;
  }
  var Bi = Ku(!0), Hu = Ku(!1), $s = Yn(null), Os = null, Ki = null, cl = null;
  function dl() {
    cl = Ki = Os = null;
  }
  function fl(e) {
    var t = $s.current;
    tt($s), e._currentValue = t;
  }
  function hl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Hi(e, t) {
    Os = e, cl = Ki = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (bt = !0), e.firstContext = null);
  }
  function tn(e) {
    var t = e._currentValue;
    if (cl !== e) if (e = { context: e, memoizedValue: t, next: null }, Ki === null) {
      if (Os === null) throw Error(u(308));
      Ki = e, Os.dependencies = { lanes: 0, firstContext: e };
    } else Ki = Ki.next = e;
    return t;
  }
  var mi = null;
  function pl(e) {
    mi === null ? mi = [e] : mi.push(e);
  }
  function Uu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, pl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, $n(e, i);
  }
  function $n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function ml(e) {
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
    return l = i.interleaved, l === null ? (t.next = t, pl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, $n(e, n);
  }
  function Fs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ma(e, n);
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
  function bs(e, t, n, i) {
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
        var K = v.lane, ue = v.eventTime;
        if ((i & K) === K) {
          U !== null && (U = U.next = {
            eventTime: ue,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var ve = e, ge = v;
            switch (K = t, ue = n, ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  J = ve.call(ue, J, K);
                  break e;
                }
                J = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, K = typeof ve == "function" ? ve.call(ue, J, K) : ve, K == null) break e;
                J = Z({}, J, K);
                break e;
              case 2:
                Zn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, K = l.effects, K === null ? l.effects = [v] : K.push(v));
        } else ue = { eventTime: ue, lane: K, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, U === null ? (A = U = ue, y = J) : U = U.next = ue, f |= K;
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
      yi |= f, e.lanes = f, e.memoizedState = J;
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
  var Lr = {}, xn = Yn(Lr), $r = Yn(Lr), Or = Yn(Lr);
  function vi(e) {
    if (e === Lr) throw Error(u(174));
    return e;
  }
  function vl(e, t) {
    switch (Ze(Or, t), Ze($r, e), Ze(xn, Lr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qt(t, e);
    }
    tt(xn), Ze(xn, t);
  }
  function Ui() {
    tt(xn), tt($r), tt(Or);
  }
  function Yu(e) {
    vi(Or.current);
    var t = vi(xn.current), n = Qt(t, e.type);
    t !== n && (Ze($r, e), Ze(xn, n));
  }
  function kl(e) {
    $r.current === e && (tt(xn), tt($r));
  }
  var st = Yn(0);
  function Is(e) {
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
  var yl = [];
  function gl() {
    for (var e = 0; e < yl.length; e++) yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0;
  }
  var Ds = I.ReactCurrentDispatcher, xl = I.ReactCurrentBatchConfig, ki = 0, at = null, pt = null, kt = null, zs = !1, Fr = !1, br = 0, Kh = 0;
  function Ct() {
    throw Error(u(321));
  }
  function jl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  function Sl(e, t, n, i, l, o) {
    if (ki = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ds.current = e === null || e.memoizedState === null ? Wh : Qh, e = n(i, l), Fr) {
      o = 0;
      do {
        if (Fr = !1, br = 0, 25 <= o) throw Error(u(301));
        o += 1, kt = pt = null, t.updateQueue = null, Ds.current = Yh, e = n(i, l);
      } while (Fr);
    }
    if (Ds.current = Ks, t = pt !== null && pt.next !== null, ki = 0, kt = pt = at = null, zs = !1, t) throw Error(u(300));
    return e;
  }
  function wl() {
    var e = br !== 0;
    return br = 0, e;
  }
  function jn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? at.memoizedState = kt = e : kt = kt.next = e, kt;
  }
  function nn() {
    if (pt === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pt.next;
    var t = kt === null ? at.memoizedState : kt.next;
    if (t !== null) kt = t, pt = e;
    else {
      if (e === null) throw Error(u(310));
      pt = e, e = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, kt === null ? at.memoizedState = kt = e : kt = kt.next = e;
    }
    return kt;
  }
  function Ir(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function El(e) {
    var t = nn(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = pt, l = i.baseQueue, o = n.pending;
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
        if ((ki & U) === U) y !== null && (y = y.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), i = A.hasEagerState ? A.eagerState : e(i, A.action);
        else {
          var J = {
            lane: U,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          y === null ? (v = y = J, f = i) : y = y.next = J, at.lanes |= U, yi |= U;
        }
        A = A.next;
      } while (A !== null && A !== o);
      y === null ? f = i : y.next = v, un(i, t.memoizedState) || (bt = !0), t.memoizedState = i, t.baseState = f, t.baseQueue = y, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, at.lanes |= o, yi |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Nl(e) {
    var t = nn(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        o = e(o, f.action), f = f.next;
      while (f !== l);
      un(o, t.memoizedState) || (bt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, i];
  }
  function Ju() {
  }
  function Xu(e, t) {
    var n = at, i = nn(), l = t(), o = !un(i.memoizedState, l);
    if (o && (i.memoizedState = l, bt = !0), i = i.queue, Cl(ec.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Dr(9, qu.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(u(349));
      (ki & 30) !== 0 || Zu(n, t, l);
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
      return !un(e, n);
    } catch {
      return !0;
    }
  }
  function nc(e) {
    var t = $n(e, 1);
    t !== null && pn(t, e, 1, -1);
  }
  function ic(e) {
    var t = jn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gh.bind(null, at, e), [t.memoizedState, e];
  }
  function Dr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function rc() {
    return nn().memoizedState;
  }
  function Vs(e, t, n, i) {
    var l = jn();
    at.flags |= e, l.memoizedState = Dr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Bs(e, t, n, i) {
    var l = nn();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (pt !== null) {
      var f = pt.memoizedState;
      if (o = f.destroy, i !== null && jl(i, f.deps)) {
        l.memoizedState = Dr(t, n, o, i);
        return;
      }
    }
    at.flags |= e, l.memoizedState = Dr(1 | t, n, o, i);
  }
  function sc(e, t) {
    return Vs(8390656, 8, e, t);
  }
  function Cl(e, t) {
    return Bs(2048, 8, e, t);
  }
  function ac(e, t) {
    return Bs(4, 2, e, t);
  }
  function lc(e, t) {
    return Bs(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, Bs(4, 4, oc.bind(null, t, e), n);
  }
  function _l() {
  }
  function cc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && jl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function dc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && jl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function fc(e, t, n) {
    return (ki & 21) === 0 ? (e.baseState && (e.baseState = !1, bt = !0), e.memoizedState = n) : (un(n, t) || (n = Bo(), at.lanes |= n, yi |= n, e.baseState = !0), t);
  }
  function Hh(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = xl.transition;
    xl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, xl.transition = i;
    }
  }
  function hc() {
    return nn().memoizedState;
  }
  function Uh(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, pc(e)) mc(t, n);
    else if (n = Uu(e, t, n, i), n !== null) {
      var l = At();
      pn(n, e, i, l), vc(n, t, i);
    }
  }
  function Gh(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pc(e)) mc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var f = t.lastRenderedState, v = o(f, n);
        if (l.hasEagerState = !0, l.eagerState = v, un(v, f)) {
          var y = t.interleaved;
          y === null ? (l.next = l, pl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Uu(e, t, l, i), n !== null && (l = At(), pn(n, e, i, l), vc(n, t, i));
    }
  }
  function pc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function mc(e, t) {
    Fr = zs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ma(e, n);
    }
  }
  var Ks = { readContext: tn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Wh = { readContext: tn, useCallback: function(e, t) {
    return jn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: tn, useEffect: sc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vs(
      4194308,
      4,
      oc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Vs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Vs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = jn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = jn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Uh.bind(null, at, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = jn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ic, useDebugValue: _l, useDeferredValue: function(e) {
    return jn().memoizedState = e;
  }, useTransition: function() {
    var e = ic(!1), t = e[0];
    return e = Hh.bind(null, e[1]), jn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = at, l = jn();
    if (it) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), yt === null) throw Error(u(349));
      (ki & 30) !== 0 || Zu(i, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, sc(ec.bind(
      null,
      i,
      o,
      e
    ), [e]), i.flags |= 2048, Dr(9, qu.bind(null, i, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = jn(), t = yt.identifierPrefix;
    if (it) {
      var n = Ln, i = Rn;
      n = (i & ~(1 << 32 - on(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Kh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Qh = {
    readContext: tn,
    useCallback: cc,
    useContext: tn,
    useEffect: Cl,
    useImperativeHandle: uc,
    useInsertionEffect: ac,
    useLayoutEffect: lc,
    useMemo: dc,
    useReducer: El,
    useRef: rc,
    useState: function() {
      return El(Ir);
    },
    useDebugValue: _l,
    useDeferredValue: function(e) {
      var t = nn();
      return fc(t, pt.memoizedState, e);
    },
    useTransition: function() {
      var e = El(Ir)[0], t = nn().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: Xu,
    useId: hc,
    unstable_isNewReconciler: !1
  }, Yh = { readContext: tn, useCallback: cc, useContext: tn, useEffect: Cl, useImperativeHandle: uc, useInsertionEffect: ac, useLayoutEffect: lc, useMemo: dc, useReducer: Nl, useRef: rc, useState: function() {
    return Nl(Ir);
  }, useDebugValue: _l, useDeferredValue: function(e) {
    var t = nn();
    return pt === null ? t.memoizedState = e : fc(t, pt.memoizedState, e);
  }, useTransition: function() {
    var e = Nl(Ir)[0], t = nn().memoizedState;
    return [e, t];
  }, useMutableSource: Ju, useSyncExternalStore: Xu, useId: hc, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Tl(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Hs = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), o = On(i, l);
    o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (pn(t, e, l, i), Fs(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), o = On(i, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (pn(t, e, l, i), Fs(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (pn(t, e, i, n), Fs(t, e, i));
  } };
  function kc(e, t, n, i, l, o, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, o, f) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, i) || !Nr(l, o) : !0;
  }
  function yc(e, t, n) {
    var i = !1, l = Jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = tn(o) : (l = Ft(t) ? fi : Nt.current, i = t.contextTypes, o = (i = i != null) ? Ii(e, l) : Jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function gc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
  }
  function Ml(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ml(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = tn(o) : (o = Ft(t) ? fi : Nt.current, l.context = Ii(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Tl(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Hs.enqueueReplaceState(l, l.state, null), bs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Gi(e, t) {
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
  function Pl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Al(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Jh = typeof WeakMap == "function" ? WeakMap : Map;
  function xc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      Xs || (Xs = !0, Gl = i), Al(e, t);
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
        Al(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Al(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Sc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Jh();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = cp.bind(null, e, t, n), t.then(e, e));
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
  var Xh = I.ReactCurrentOwner, bt = !1;
  function Pt(e, t, n, i) {
    t.child = e === null ? Hu(t, null, n, i) : Bi(t, e.child, n, i);
  }
  function Nc(e, t, n, i, l) {
    n = n.render;
    var o = t.ref;
    return Hi(t, l), i = Sl(e, t, n, i, o, l), n = wl(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (it && n && sl(t), t.flags |= 1, Pt(e, t, i, l), t.child);
  }
  function Cc(e, t, n, i, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ql(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, _c(e, t, o, i, l)) : (e = ia(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Nr, n(f, i) && e.ref === t.ref) return Fn(e, t, l);
    }
    return t.flags |= 1, e = si(o, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _c(e, t, n, i, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Nr(o, i) && e.ref === t.ref) if (bt = !1, t.pendingProps = i = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (bt = !0);
      else return t.lanes = e.lanes, Fn(e, t, l);
    }
    return Rl(e, t, n, i, l);
  }
  function Tc(e, t, n) {
    var i = t.pendingProps, l = i.children, o = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(Qi, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(Qi, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = o !== null ? o.baseLanes : n, Ze(Qi, Wt), Wt |= i;
    }
    else o !== null ? (i = o.baseLanes | n, t.memoizedState = null) : i = n, Ze(Qi, Wt), Wt |= i;
    return Pt(e, t, l, n), t.child;
  }
  function Mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Rl(e, t, n, i, l) {
    var o = Ft(n) ? fi : Nt.current;
    return o = Ii(t, o), Hi(t, l), n = Sl(e, t, n, i, o, l), i = wl(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (it && i && sl(t), t.flags |= 1, Pt(e, t, n, l), t.child);
  }
  function Pc(e, t, n, i, l) {
    if (Ft(n)) {
      var o = !0;
      Ts(t);
    } else o = !1;
    if (Hi(t, l), t.stateNode === null) Gs(e, t), yc(t, n, i), Ml(t, n, i, l), i = !0;
    else if (e === null) {
      var f = t.stateNode, v = t.memoizedProps;
      f.props = v;
      var y = f.context, A = n.contextType;
      typeof A == "object" && A !== null ? A = tn(A) : (A = Ft(n) ? fi : Nt.current, A = Ii(t, A));
      var U = n.getDerivedStateFromProps, J = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      J || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== i || y !== A) && gc(t, f, i, A), Zn = !1;
      var K = t.memoizedState;
      f.state = K, bs(t, i, f, l), y = t.memoizedState, v !== i || K !== y || Ot.current || Zn ? (typeof U == "function" && (Tl(t, n, U, i), y = t.memoizedState), (v = Zn || kc(t, n, v, i, K, y, A)) ? (J || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), f.props = i, f.state = y, f.context = A, i = v) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Gu(e, t), v = t.memoizedProps, A = t.type === t.elementType ? v : dn(t.type, v), f.props = A, J = t.pendingProps, K = f.context, y = n.contextType, typeof y == "object" && y !== null ? y = tn(y) : (y = Ft(n) ? fi : Nt.current, y = Ii(t, y));
      var ue = n.getDerivedStateFromProps;
      (U = typeof ue == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== J || K !== y) && gc(t, f, i, y), Zn = !1, K = t.memoizedState, f.state = K, bs(t, i, f, l);
      var ve = t.memoizedState;
      v !== J || K !== ve || Ot.current || Zn ? (typeof ue == "function" && (Tl(t, n, ue, i), ve = t.memoizedState), (A = Zn || kc(t, n, A, i, K, ve, y) || !1) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ve, y), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, ve, y)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), f.props = i, f.state = ve, f.context = y, i = A) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Ll(e, t, n, i, o, l);
  }
  function Ll(e, t, n, i, l, o) {
    Mc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return l && Ou(t, n, !1), Fn(e, t, o);
    i = t.stateNode, Xh.current = t;
    var v = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = Bi(t, e.child, null, o), t.child = Bi(t, null, v, o)) : Pt(e, t, v, o), t.memoizedState = i.state, l && Ou(t, n, !0), t.child;
  }
  function Ac(e) {
    var t = e.stateNode;
    t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), vl(e, t.containerInfo);
  }
  function Rc(e, t, n, i, l) {
    return Vi(), ul(l), t.flags |= 256, Pt(e, t, n, i), t.child;
  }
  var $l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ol(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lc(e, t, n) {
    var i = t.pendingProps, l = st.current, o = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(st, l & 1), e === null)
      return ol(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, f = { mode: "hidden", children: f }, (i & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = f) : o = ra(f, i, 0, null), e = Si(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ol(n), t.memoizedState = $l, e) : Fl(t, f));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return Zh(e, t, f, i, v, l, n);
    if (o) {
      o = i.fallback, f = t.mode, l = e.child, v = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (f & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = si(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? o = si(v, o) : (o = Si(o, f, n, null), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, f = e.child.memoizedState, f = f === null ? Ol(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, o.memoizedState = f, o.childLanes = e.childLanes & ~n, t.memoizedState = $l, i;
    }
    return o = e.child, e = o.sibling, i = si(o, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Fl(e, t) {
    return t = ra({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Us(e, t, n, i) {
    return i !== null && ul(i), Bi(t, e.child, null, n), e = Fl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Zh(e, t, n, i, l, o, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Pl(Error(u(422))), Us(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = i.fallback, l = t.mode, i = ra({ mode: "visible", children: i.children }, l, 0, null), o = Si(o, l, f, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, (t.mode & 1) !== 0 && Bi(t, e.child, null, f), t.child.memoizedState = Ol(f), t.memoizedState = $l, o);
    if ((t.mode & 1) === 0) return Us(e, t, f, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var v = i.dgst;
      return i = v, o = Error(u(419)), i = Pl(o, i, void 0), Us(e, t, f, i);
    }
    if (v = (f & e.childLanes) !== 0, bt || v) {
      if (i = yt, i !== null) {
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
        l = (l & (i.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, $n(e, l), pn(i, e, l, -1));
      }
      return Zl(), i = Pl(Error(u(421))), Us(e, t, f, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Gt = Qn(l.nextSibling), Ut = t, it = !0, cn = null, e !== null && (qt[en++] = Rn, qt[en++] = Ln, qt[en++] = hi, Rn = e.id, Ln = e.overflow, hi = t), t = Fl(t, i.children), t.flags |= 4096, t);
  }
  function $c(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), hl(e.return, t, n);
  }
  function bl(e, t, n, i, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = l);
  }
  function Oc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, o = i.tail;
    if (Pt(e, t, i.children, n), i = st.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Is(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), bl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Is(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        bl(t, !0, n, null, o);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), yi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function qh(e, t, n) {
    switch (t.tag) {
      case 3:
        Ac(t), Vi();
        break;
      case 5:
        Yu(t);
        break;
      case 1:
        Ft(t.type) && Ts(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ze($s, i._currentValue), i._currentValue = l;
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
  var Fc, Il, bc, Ic;
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
  }, Il = function() {
  }, bc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, vi(xn.current);
      var o = null;
      switch (n) {
        case "input":
          l = ke(e, l), i = ke(e, i), o = [];
          break;
        case "select":
          l = Z({}, l, { value: void 0 }), i = Z({}, i, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = ot(e, l), i = ot(e, i), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ns);
      }
      Ae(n, i);
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
  function zr(e, t) {
    if (!it) switch (e.tailMode) {
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
  function ep(e, t, n) {
    var i = t.pendingProps;
    switch (al(t), t.tag) {
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
        return Ft(t.type) && _s(), _t(t), null;
      case 3:
        return i = t.stateNode, Ui(), tt(Ot), tt(Nt), gl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Rs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (Yl(cn), cn = null))), Il(e, t), _t(t), null;
      case 5:
        kl(t);
        var l = vi(Or.current);
        if (n = t.type, e !== null && t.stateNode != null) bc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return _t(t), null;
          }
          if (e = vi(xn.current), Rs(t)) {
            i = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (i[gn] = t, i[Pr] = o, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < _r.length; l++) et(_r[l], i);
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
                Pe(i, o), et("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!o.multiple }, et("invalid", i);
                break;
              case "textarea":
                Ye(i, o), et("invalid", i);
            }
            Ae(n, o), l = null;
            for (var f in o) if (o.hasOwnProperty(f)) {
              var v = o[f];
              f === "children" ? typeof v == "string" ? i.textContent !== v && (o.suppressHydrationWarning !== !0 && Es(i.textContent, v, e), l = ["children", v]) : typeof v == "number" && i.textContent !== "" + v && (o.suppressHydrationWarning !== !0 && Es(
                i.textContent,
                v,
                e
              ), l = ["children", "" + v]) : d.hasOwnProperty(f) && v != null && f === "onScroll" && et("scroll", i);
            }
            switch (n) {
              case "input":
                re(i), We(i, o, !0);
                break;
              case "textarea":
                re(i), nt(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (i.onclick = Ns);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[gn] = t, e[Pr] = i, Fc(e, t, !1, !1), t.stateNode = e;
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
                  for (l = 0; l < _r.length; l++) et(_r[l], e);
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
                  Pe(e, i), l = ke(e, i), et("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Z({}, i, { value: void 0 }), et("invalid", e);
                  break;
                case "textarea":
                  Ye(e, i), l = ot(e, i), et("invalid", e);
                  break;
                default:
                  l = i;
              }
              Ae(n, l), v = l;
              for (o in v) if (v.hasOwnProperty(o)) {
                var y = v[o];
                o === "style" ? Bt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && ln(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Yt(e, y) : typeof y == "number" && Yt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (d.hasOwnProperty(o) ? y != null && o === "onScroll" && et("scroll", e) : y != null && F(e, o, y, f));
              }
              switch (n) {
                case "input":
                  re(e), We(e, i, !1);
                  break;
                case "textarea":
                  re(e), nt(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + te(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, o = i.value, o != null ? Je(e, !!i.multiple, o, !1) : i.defaultValue != null && Je(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ns);
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
          if (n = vi(Or.current), vi(xn.current), Rs(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (o = i.nodeValue !== n) && (e = Ut, e !== null)) switch (e.tag) {
              case 3:
                Es(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Es(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return _t(t), null;
      case 13:
        if (tt(st), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (it && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Vu(), Vi(), t.flags |= 98560, o = !1;
          else if (o = Rs(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[gn] = t;
            } else Vi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), o = !1;
          } else cn !== null && (Yl(cn), cn = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? mt === 0 && (mt = 3) : Zl())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Ui(), Il(e, t), e === null && Tr(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return fl(t.type._context), _t(t), null;
      case 17:
        return Ft(t.type) && _s(), _t(t), null;
      case 19:
        if (tt(st), o = t.memoizedState, o === null) return _t(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null) if (i) zr(o, !1);
        else {
          if (mt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Is(e), f !== null) {
              for (t.flags |= 128, zr(o, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) o = n, e = i, o.flags &= 14680066, f = o.alternate, f === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = f.childLanes, o.lanes = f.lanes, o.child = f.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = f.memoizedProps, o.memoizedState = f.memoizedState, o.updateQueue = f.updateQueue, o.type = f.type, e = f.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ee() > Yi && (t.flags |= 128, i = !0, zr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Is(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !it) return _t(t), null;
          } else 2 * ee() - o.renderingStartTime > Yi && n !== 1073741824 && (t.flags |= 128, i = !0, zr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (n = o.last, n !== null ? n.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ee(), t.sibling = null, n = st.current, Ze(st, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return Xl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function tp(e, t) {
    switch (al(t), t.tag) {
      case 1:
        return Ft(t.type) && _s(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ui(), tt(Ot), tt(Nt), gl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return kl(t), null;
      case 13:
        if (tt(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Vi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return tt(st), null;
      case 4:
        return Ui(), null;
      case 10:
        return fl(t.type._context), null;
      case 22:
      case 23:
        return Xl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ws = !1, Tt = !1, np = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function Wi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      lt(e, t, i);
    }
    else n.current = null;
  }
  function Dl(e, t, n) {
    try {
      n();
    } catch (i) {
      lt(e, t, i);
    }
  }
  var Dc = !1;
  function ip(e, t) {
    if (Xa = hs, e = ku(), Ka(e)) {
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
            for (var ue; J !== n || l !== 0 && J.nodeType !== 3 || (v = f + l), J !== o || i !== 0 && J.nodeType !== 3 || (y = f + i), J.nodeType === 3 && (f += J.nodeValue.length), (ue = J.firstChild) !== null; )
              K = J, J = ue;
            for (; ; ) {
              if (J === e) break t;
              if (K === n && ++A === l && (v = f), K === o && ++U === i && (y = f), (ue = J.nextSibling) !== null) break;
              J = K, K = J.parentNode;
            }
            J = ue;
          }
          n = v === -1 || y === -1 ? null : { start: v, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Za = { focusedElem: e, selectionRange: n }, hs = !1, pe = t; pe !== null; ) if (t = pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pe = e;
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
              var ge = ve.memoizedProps, dt = ve.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : dn(t.type, ge), dt);
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
        lt(t, t.return, q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return ve = Dc, Dc = !1, ve;
  }
  function Vr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Dl(t, n, o);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Qs(e, t) {
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
  function zl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function zc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Pr], delete t[nl], delete t[Dh], delete t[zh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Vl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ns));
    else if (i !== 4 && (e = e.child, e !== null)) for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), e = e.sibling;
  }
  function Bl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), e = e.sibling;
  }
  var jt = null, fn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Kc(e, t, n), n = n.sibling;
  }
  function Kc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(ls, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Tt || Wi(n, t);
      case 6:
        var i = jt, l = fn;
        jt = null, ei(e, t, n), jt = i, fn = l, jt !== null && (fn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
        break;
      case 18:
        jt !== null && (fn ? (e = jt, n = n.stateNode, e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), gr(e)) : tl(jt, n.stateNode));
        break;
      case 4:
        i = jt, l = fn, jt = n.stateNode.containerInfo, fn = !0, ei(e, t, n), jt = i, fn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var o = l, f = o.destroy;
            o = o.tag, f !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Dl(n, t, f), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Tt && (Wi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (v) {
          lt(n, t, v);
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
      n === null && (n = e.stateNode = new np()), t.forEach(function(i) {
        var l = fp.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function hn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var o = e, f = t, v = f;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              jt = v.stateNode, fn = !1;
              break e;
            case 3:
              jt = v.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              jt = v.stateNode.containerInfo, fn = !0;
              break e;
          }
          v = v.return;
        }
        if (jt === null) throw Error(u(160));
        Kc(o, f, l), jt = null, fn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (A) {
        lt(l, t, A);
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
        if (hn(t, e), Sn(e), i & 4) {
          try {
            Vr(3, e, e.return), Qs(3, e);
          } catch (ge) {
            lt(e, e.return, ge);
          }
          try {
            Vr(5, e, e.return);
          } catch (ge) {
            lt(e, e.return, ge);
          }
        }
        break;
      case 1:
        hn(t, e), Sn(e), i & 512 && n !== null && Wi(n, n.return);
        break;
      case 5:
        if (hn(t, e), Sn(e), i & 512 && n !== null && Wi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Yt(l, "");
          } catch (ge) {
            lt(e, e.return, ge);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, f = n !== null ? n.memoizedProps : o, v = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            v === "input" && o.type === "radio" && o.name != null && Ce(l, o), Re(v, f);
            var A = Re(v, o);
            for (f = 0; f < y.length; f += 2) {
              var U = y[f], J = y[f + 1];
              U === "style" ? Bt(l, J) : U === "dangerouslySetInnerHTML" ? ln(l, J) : U === "children" ? Yt(l, J) : F(l, U, J, A);
            }
            switch (v) {
              case "input":
                be(l, o);
                break;
              case "textarea":
                ze(l, o);
                break;
              case "select":
                var K = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var ue = o.value;
                ue != null ? Je(l, !!o.multiple, ue, !1) : K !== !!o.multiple && (o.defaultValue != null ? Je(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Je(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Pr] = o;
          } catch (ge) {
            lt(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (hn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (ge) {
            lt(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (hn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          gr(t.containerInfo);
        } catch (ge) {
          lt(e, e.return, ge);
        }
        break;
      case 4:
        hn(t, e), Sn(e);
        break;
      case 13:
        hn(t, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ul = ee())), i & 4 && Hc(e);
        break;
      case 22:
        if (U = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (A = Tt) || U, hn(t, e), Tt = A) : hn(t, e), Sn(e), i & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !U && (e.mode & 1) !== 0) for (pe = e, U = e.child; U !== null; ) {
            for (J = pe = U; pe !== null; ) {
              switch (K = pe, ue = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, K, K.return);
                  break;
                case 1:
                  Wi(K, K.return);
                  var ve = K.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = K, n = K.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ge) {
                      lt(i, n, ge);
                    }
                  }
                  break;
                case 5:
                  Wi(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Qc(J);
                    continue;
                  }
              }
              ue !== null ? (ue.return = K, pe = ue) : Qc(J);
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
                  lt(e, e.return, ge);
                }
              }
            } else if (J.tag === 6) {
              if (U === null) try {
                J.stateNode.nodeValue = A ? "" : J.memoizedProps;
              } catch (ge) {
                lt(e, e.return, ge);
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
        hn(t, e), Sn(e), i & 4 && Hc(e);
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
            i.flags & 32 && (Yt(l, ""), i.flags &= -33);
            var o = Bc(e);
            Bl(e, o, l);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, v = Bc(e);
            Vl(e, v, f);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        lt(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rp(e, t, n) {
    pe = e, Gc(e);
  }
  function Gc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; pe !== null; ) {
      var l = pe, o = l.child;
      if (l.tag === 22 && i) {
        var f = l.memoizedState !== null || Ws;
        if (!f) {
          var v = l.alternate, y = v !== null && v.memoizedState !== null || Tt;
          v = Ws;
          var A = Tt;
          if (Ws = f, (Tt = y) && !A) for (pe = l; pe !== null; ) f = pe, y = f.child, f.tag === 22 && f.memoizedState !== null ? Yc(l) : y !== null ? (y.return = f, pe = y) : Yc(l);
          for (; o !== null; ) pe = o, Gc(o), o = o.sibling;
          pe = l, Ws = v, Tt = A;
        }
        Wc(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, pe = o) : Wc(e);
    }
  }
  function Wc(e) {
    for (; pe !== null; ) {
      var t = pe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tt || Qs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Tt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dn(t.type, n.memoizedProps);
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
                    J !== null && gr(J);
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
          Tt || t.flags & 512 && zl(t);
        } catch (K) {
          lt(t, t.return, K);
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
  function Qc(e) {
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
  function Yc(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Qs(4, t);
            } catch (y) {
              lt(t, n, y);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (y) {
                lt(t, l, y);
              }
            }
            var o = t.return;
            try {
              zl(t);
            } catch (y) {
              lt(t, o, y);
            }
            break;
          case 5:
            var f = t.return;
            try {
              zl(t);
            } catch (y) {
              lt(t, f, y);
            }
        }
      } catch (y) {
        lt(t, t.return, y);
      }
      if (t === e) {
        pe = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, pe = v;
        break;
      }
      pe = t.return;
    }
  }
  var sp = Math.ceil, Ys = I.ReactCurrentDispatcher, Kl = I.ReactCurrentOwner, rn = I.ReactCurrentBatchConfig, De = 0, yt = null, ft = null, St = 0, Wt = 0, Qi = Yn(0), mt = 0, Br = null, yi = 0, Js = 0, Hl = 0, Kr = null, It = null, Ul = 0, Yi = 1 / 0, bn = null, Xs = !1, Gl = null, ti = null, Zs = !1, ni = null, qs = 0, Hr = 0, Wl = null, ea = -1, ta = 0;
  function At() {
    return (De & 6) !== 0 ? ee() : ea !== -1 ? ea : ea = ee();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && St !== 0 ? St & -St : Bh.transition !== null ? (ta === 0 && (ta = Bo()), ta) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xo(e.type)), e);
  }
  function pn(e, t, n, i) {
    if (50 < Hr) throw Hr = 0, Wl = null, Error(u(185));
    pr(e, n, i), ((De & 2) === 0 || e !== yt) && (e === yt && ((De & 2) === 0 && (Js |= n), mt === 4 && ri(e, St)), Dt(e, i), n === 1 && De === 0 && (t.mode & 1) === 0 && (Yi = ee() + 500, Ms && Xn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    Bf(e, t);
    var i = cs(e, e === yt ? St : 0);
    if (i === 0) n !== null && Tn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Tn(n), t === 1) e.tag === 0 ? Vh(Xc.bind(null, e)) : Fu(Xc.bind(null, e)), bh(function() {
        (De & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Ko(i)) {
          case 1:
            n = $t;
            break;
          case 4:
            n = ct;
            break;
          case 16:
            n = Mn;
            break;
          case 536870912:
            n = Vn;
            break;
          default:
            n = Mn;
        }
        n = sd(n, Jc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Jc(e, t) {
    if (ea = -1, ta = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Ji() && e.callbackNode !== n) return null;
    var i = cs(e, e === yt ? St : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = na(e, i);
    else {
      t = i;
      var l = De;
      De |= 2;
      var o = qc();
      (yt !== e || St !== t) && (bn = null, Yi = ee() + 500, xi(e, t));
      do
        try {
          op();
          break;
        } catch (v) {
          Zc(e, v);
        }
      while (!0);
      dl(), Ys.current = o, De = l, ft !== null ? t = 0 : (yt = null, St = 0, t = mt);
    }
    if (t !== 0) {
      if (t === 2 && (l = _a(e), l !== 0 && (i = l, t = Ql(e, l))), t === 1) throw n = Br, xi(e, 0), ri(e, i), Dt(e, ee()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !ap(l) && (t = na(e, i), t === 2 && (o = _a(e), o !== 0 && (i = o, t = Ql(e, o))), t === 1)) throw n = Br, xi(e, 0), ri(e, i), Dt(e, ee()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            ji(e, It, bn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Ul + 500 - ee(), 10 < t)) {
              if (cs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                At(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = el(ji.bind(null, e, It, bn), t);
              break;
            }
            ji(e, It, bn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var f = 31 - on(i);
              o = 1 << f, f = t[f], f > l && (l = f), i &= ~o;
            }
            if (i = l, i = ee() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * sp(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = el(ji.bind(null, e, It, bn), i);
              break;
            }
            ji(e, It, bn);
            break;
          case 5:
            ji(e, It, bn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Dt(e, ee()), e.callbackNode === n ? Jc.bind(null, e) : null;
  }
  function Ql(e, t) {
    var n = Kr;
    return e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256), e = na(e, t), e !== 2 && (t = It, It = n, t !== null && Yl(t)), e;
  }
  function Yl(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function ap(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], o = l.getSnapshot;
          l = l.value;
          try {
            if (!un(o(), l)) return !1;
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
    for (t &= ~Hl, t &= ~Js, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - on(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function Xc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Ji();
    var t = cs(e, 0);
    if ((t & 1) === 0) return Dt(e, ee()), null;
    var n = na(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = _a(e);
      i !== 0 && (t = i, n = Ql(e, i));
    }
    if (n === 1) throw n = Br, xi(e, 0), ri(e, t), Dt(e, ee()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ji(e, It, bn), Dt(e, ee()), null;
  }
  function Jl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Yi = ee() + 500, Ms && Xn());
    }
  }
  function gi(e) {
    ni !== null && ni.tag === 0 && (De & 6) === 0 && Ji();
    var t = De;
    De |= 1;
    var n = rn.transition, i = Ue;
    try {
      if (rn.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = i, rn.transition = n, De = t, (De & 6) === 0 && Xn();
    }
  }
  function Xl() {
    Wt = Qi.current, tt(Qi);
  }
  function xi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Fh(n)), ft !== null) for (n = ft.return; n !== null; ) {
      var i = n;
      switch (al(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && _s();
          break;
        case 3:
          Ui(), tt(Ot), tt(Nt), gl();
          break;
        case 5:
          kl(i);
          break;
        case 4:
          Ui();
          break;
        case 13:
          tt(st);
          break;
        case 19:
          tt(st);
          break;
        case 10:
          fl(i.type._context);
          break;
        case 22:
        case 23:
          Xl();
      }
      n = n.return;
    }
    if (yt = e, ft = e = si(e.current, null), St = Wt = t, mt = 0, Br = null, Hl = Js = yi = 0, It = Kr = null, mi !== null) {
      for (t = 0; t < mi.length; t++) if (n = mi[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, o = n.pending;
        if (o !== null) {
          var f = o.next;
          o.next = l, i.next = f;
        }
        n.pending = i;
      }
      mi = null;
    }
    return e;
  }
  function Zc(e, t) {
    do {
      var n = ft;
      try {
        if (dl(), Ds.current = Ks, zs) {
          for (var i = at.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          zs = !1;
        }
        if (ki = 0, kt = pt = at = null, Fr = !1, br = 0, Kl.current = null, n === null || n.return === null) {
          mt = 1, Br = t, ft = null;
          break;
        }
        e: {
          var o = e, f = n.return, v = n, y = t;
          if (t = St, v.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var A = y, U = v, J = U.tag;
            if ((U.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var K = U.alternate;
              K ? (U.updateQueue = K.updateQueue, U.memoizedState = K.memoizedState, U.lanes = K.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var ue = wc(f);
            if (ue !== null) {
              ue.flags &= -257, Ec(ue, f, v, o, t), ue.mode & 1 && Sc(o, A, t), t = ue, y = A;
              var ve = t.updateQueue;
              if (ve === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(y), t.updateQueue = ge;
              } else ve.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Sc(o, A, t), Zl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (it && v.mode & 1) {
            var dt = wc(f);
            if (dt !== null) {
              (dt.flags & 65536) === 0 && (dt.flags |= 256), Ec(dt, f, v, o, t), ul(Gi(y, v));
              break e;
            }
          }
          o = y = Gi(y, v), mt !== 4 && (mt = 2), Kr === null ? Kr = [o] : Kr.push(o), o = f;
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
        t = xe, ft === n && n !== null && (ft = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qc() {
    var e = Ys.current;
    return Ys.current = Ks, e === null ? Ks : e;
  }
  function Zl() {
    (mt === 0 || mt === 3 || mt === 2) && (mt = 4), yt === null || (yi & 268435455) === 0 && (Js & 268435455) === 0 || ri(yt, St);
  }
  function na(e, t) {
    var n = De;
    De |= 2;
    var i = qc();
    (yt !== e || St !== t) && (bn = null, xi(e, t));
    do
      try {
        lp();
        break;
      } catch (l) {
        Zc(e, l);
      }
    while (!0);
    if (dl(), De = n, Ys.current = i, ft !== null) throw Error(u(261));
    return yt = null, St = 0, mt;
  }
  function lp() {
    for (; ft !== null; ) ed(ft);
  }
  function op() {
    for (; ft !== null && !zn(); ) ed(ft);
  }
  function ed(e) {
    var t = rd(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? td(e) : ft = t, Kl.current = null;
  }
  function td(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ep(n, t, Wt), n !== null) {
          ft = n;
          return;
        }
      } else {
        if (n = tp(n, t), n !== null) {
          n.flags &= 32767, ft = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          mt = 6, ft = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ft = t;
        return;
      }
      ft = t = e;
    } while (t !== null);
    mt === 0 && (mt = 5);
  }
  function ji(e, t, n) {
    var i = Ue, l = rn.transition;
    try {
      rn.transition = null, Ue = 1, up(e, t, n, i);
    } finally {
      rn.transition = l, Ue = i;
    }
    return null;
  }
  function up(e, t, n, i) {
    do
      Ji();
    while (ni !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Kf(e, o), e === yt && (ft = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Zs || (Zs = !0, sd(Mn, function() {
      return Ji(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = rn.transition, rn.transition = null;
      var f = Ue;
      Ue = 1;
      var v = De;
      De |= 4, Kl.current = null, ip(e, n), Uc(n, e), Mh(Za), hs = !!Xa, Za = Xa = null, e.current = n, rp(n), L(), De = v, Ue = f, rn.transition = o;
    } else e.current = n;
    if (Zs && (Zs = !1, ni = e, qs = l), o = e.pendingLanes, o === 0 && (ti = null), bf(n.stateNode), Dt(e, ee()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Xs) throw Xs = !1, e = Gl, Gl = null, e;
    return (qs & 1) !== 0 && e.tag !== 0 && Ji(), o = e.pendingLanes, (o & 1) !== 0 ? e === Wl ? Hr++ : (Hr = 0, Wl = e) : Hr = 0, Xn(), null;
  }
  function Ji() {
    if (ni !== null) {
      var e = Ko(qs), t = rn.transition, n = Ue;
      try {
        if (rn.transition = null, Ue = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, qs = 0, (De & 6) !== 0) throw Error(u(331));
          var l = De;
          for (De |= 4, pe = e.current; pe !== null; ) {
            var o = pe, f = o.child;
            if ((pe.flags & 16) !== 0) {
              var v = o.deletions;
              if (v !== null) {
                for (var y = 0; y < v.length; y++) {
                  var A = v[y];
                  for (pe = A; pe !== null; ) {
                    var U = pe;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vr(8, U, o);
                    }
                    var J = U.child;
                    if (J !== null) J.return = U, pe = J;
                    else for (; pe !== null; ) {
                      U = pe;
                      var K = U.sibling, ue = U.return;
                      if (zc(U), U === A) {
                        pe = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = ue, pe = K;
                        break;
                      }
                      pe = ue;
                    }
                  }
                }
                var ve = o.alternate;
                if (ve !== null) {
                  var ge = ve.child;
                  if (ge !== null) {
                    ve.child = null;
                    do {
                      var dt = ge.sibling;
                      ge.sibling = null, ge = dt;
                    } while (ge !== null);
                  }
                }
                pe = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && f !== null) f.return = o, pe = f;
            else e: for (; pe !== null; ) {
              if (o = pe, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Vr(9, o, o.return);
              }
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, pe = _;
                break e;
              }
              pe = o.return;
            }
          }
          var x = e.current;
          for (pe = x; pe !== null; ) {
            f = pe;
            var T = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && T !== null) T.return = f, pe = T;
            else e: for (f = x; pe !== null; ) {
              if (v = pe, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qs(9, v);
                }
              } catch (xe) {
                lt(v, v.return, xe);
              }
              if (v === f) {
                pe = null;
                break e;
              }
              var q = v.sibling;
              if (q !== null) {
                q.return = v.return, pe = q;
                break e;
              }
              pe = v.return;
            }
          }
          if (De = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(ls, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Ue = n, rn.transition = t;
      }
    }
    return !1;
  }
  function nd(e, t, n) {
    t = Gi(n, t), t = xc(e, t, 1), e = qn(e, t, 1), t = At(), e !== null && (pr(e, 1, t), Dt(e, t));
  }
  function lt(e, t, n) {
    if (e.tag === 3) nd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Gi(n, e), e = jc(t, e, 1), t = qn(t, e, 1), e = At(), t !== null && (pr(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function cp(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (mt === 4 || mt === 3 && (St & 130023424) === St && 500 > ee() - Ul ? xi(e, 0) : Hl |= n), Dt(e, t);
  }
  function id(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = us, us <<= 1, (us & 130023424) === 0 && (us = 4194304)));
    var n = At();
    e = $n(e, t), e !== null && (pr(e, t, n), Dt(e, n));
  }
  function dp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), id(e, n);
  }
  function fp(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ot.current) bt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return bt = !1, qh(e, t, n);
      bt = (e.flags & 131072) !== 0;
    }
    else bt = !1, it && (t.flags & 1048576) !== 0 && bu(t, As, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Gs(e, t), e = t.pendingProps;
        var l = Ii(t, Nt.current);
        Hi(t, n), l = Sl(null, t, i, e, l, n);
        var o = wl();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(i) ? (o = !0, Ts(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ml(t), l.updater = Hs, t.stateNode = l, l._reactInternals = t, Ml(t, i, e, n), t = Ll(null, t, i, !0, o, n)) : (t.tag = 0, it && o && sl(t), Pt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Gs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = pp(i), e = dn(i, e), l) {
            case 0:
              t = Rl(null, t, i, e, n);
              break e;
            case 1:
              t = Pc(null, t, i, e, n);
              break e;
            case 11:
              t = Nc(null, t, i, e, n);
              break e;
            case 14:
              t = Cc(null, t, i, dn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Rl(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Pc(e, t, i, l, n);
      case 3:
        e: {
          if (Ac(t), e === null) throw Error(u(387));
          i = t.pendingProps, o = t.memoizedState, l = o.element, Gu(e, t), bs(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, o.isDehydrated) if (o = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Gi(Error(u(423)), t), t = Rc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Gi(Error(u(424)), t), t = Rc(e, t, i, n, l);
            break e;
          } else for (Gt = Qn(t.stateNode.containerInfo.firstChild), Ut = t, it = !0, cn = null, n = Hu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Vi(), i === l) {
              t = Fn(e, t, n);
              break e;
            }
            Pt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yu(t), e === null && ol(t), i = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, f = l.children, qa(i, l) ? f = null : o !== null && qa(i, o) && (t.flags |= 32), Mc(e, t), Pt(e, t, f, n), t.child;
      case 6:
        return e === null && ol(t), null;
      case 13:
        return Lc(e, t, n);
      case 4:
        return vl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Bi(t, null, i, n) : Pt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Nc(e, t, i, l, n);
      case 7:
        return Pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, o = t.memoizedProps, f = l.value, Ze($s, i._currentValue), i._currentValue = f, o !== null) if (un(o.value, f)) {
            if (o.children === l.children && !Ot.current) {
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
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), hl(
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
              f.lanes |= n, v = f.alternate, v !== null && (v.lanes |= n), hl(f, n, t), f = o.sibling;
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
          Pt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Hi(t, n), l = tn(l), i = i(l), t.flags |= 1, Pt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = dn(i, t.pendingProps), l = dn(i.type, l), Cc(e, t, i, l, n);
      case 15:
        return _c(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Gs(e, t), t.tag = 1, Ft(i) ? (e = !0, Ts(t)) : e = !1, Hi(t, n), yc(t, i, l), Ml(t, i, l, n), Ll(null, t, i, !0, e, n);
      case 19:
        return Oc(e, t, n);
      case 22:
        return Tc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function sd(e, t) {
    return as(e, t);
  }
  function hp(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, t, n, i) {
    return new hp(e, t, n, i);
  }
  function ql(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pp(e) {
    if (typeof e == "function") return ql(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ie) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ia(e, t, n, i, l, o) {
    var f = 2;
    if (i = e, typeof e == "function") ql(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case M:
        return Si(n.children, l, o, t);
      case V:
        f = 8, l |= 8;
        break;
      case ne:
        return e = sn(12, n, t, l | 2), e.elementType = ne, e.lanes = o, e;
      case ce:
        return e = sn(13, n, t, l), e.elementType = ce, e.lanes = o, e;
      case Te:
        return e = sn(19, n, t, l), e.elementType = Te, e.lanes = o, e;
      case de:
        return ra(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case he:
            f = 10;
            break e;
          case _e:
            f = 9;
            break e;
          case ie:
            f = 11;
            break e;
          case H:
            f = 14;
            break e;
          case le:
            f = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = sn(f, n, t, l), t.elementType = e, t.type = i, t.lanes = o, t;
  }
  function Si(e, t, n, i) {
    return e = sn(7, e, i, t), e.lanes = n, e;
  }
  function ra(e, t, n, i) {
    return e = sn(22, e, i, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function eo(e, t, n) {
    return e = sn(6, e, null, t), e.lanes = n, e;
  }
  function to(e, t, n) {
    return t = sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function mp(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ta(0), this.expirationTimes = Ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ta(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function no(e, t, n, i, l, o, f, v, y) {
    return e = new mp(e, t, n, v, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = sn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ml(o), e;
  }
  function vp(e, t, n) {
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
            if (Ft(t.type)) {
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
      if (Ft(n)) return $u(e, n, t);
    }
    return t;
  }
  function ld(e, t, n, i, l, o, f, v, y) {
    return e = no(n, i, !0, e, l, o, f, v, y), e.context = ad(null), n = e.current, i = At(), l = ii(n), o = On(i, l), o.callback = t ?? null, qn(n, o, l), e.current.lanes = l, pr(e, l, i), Dt(e, i), e;
  }
  function sa(e, t, n, i) {
    var l = t.current, o = At(), f = ii(l);
    return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(o, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, f), e !== null && (pn(e, l, f, o), Fs(e, l, f)), f;
  }
  function aa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function io(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function kp() {
    return null;
  }
  var ud = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ro(e) {
    this._internalRoot = e;
  }
  la.prototype.render = ro.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    sa(e, t, null, null);
  }, la.prototype.unmount = ro.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      gi(function() {
        sa(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function la(e) {
    this._internalRoot = e;
  }
  la.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Go();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Yo(e);
    }
  };
  function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function cd() {
  }
  function yp(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var o = i;
        i = function() {
          var A = aa(f);
          o.call(A);
        };
      }
      var f = ld(t, i, e, 0, null, !1, !1, "", cd);
      return e._reactRootContainer = f, e[Pn] = f.current, Tr(e.nodeType === 8 ? e.parentNode : e), gi(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var A = aa(y);
        v.call(A);
      };
    }
    var y = no(e, 0, !1, null, null, !1, !1, "", cd);
    return e._reactRootContainer = y, e[Pn] = y.current, Tr(e.nodeType === 8 ? e.parentNode : e), gi(function() {
      sa(t, y, n, i);
    }), y;
  }
  function ua(e, t, n, i, l) {
    var o = n._reactRootContainer;
    if (o) {
      var f = o;
      if (typeof l == "function") {
        var v = l;
        l = function() {
          var y = aa(f);
          v.call(y);
        };
      }
      sa(t, f, e, l);
    } else f = yp(n, t, e, l, i);
    return aa(f);
  }
  Ho = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = hr(t.pendingLanes);
          n !== 0 && (Ma(t, n | 1), Dt(t, ee()), (De & 6) === 0 && (Yi = ee() + 500, Xn()));
        }
        break;
      case 13:
        gi(function() {
          var i = $n(e, 1);
          if (i !== null) {
            var l = At();
            pn(i, e, 1, l);
          }
        }), io(e, 1);
    }
  }, Pa = function(e) {
    if (e.tag === 13) {
      var t = $n(e, 134217728);
      if (t !== null) {
        var n = At();
        pn(t, e, 134217728, n);
      }
      io(e, 134217728);
    }
  }, Uo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = $n(e, t);
      if (n !== null) {
        var i = At();
        pn(n, e, t, i);
      }
      io(e, t);
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
  }, Lt = function(e, t, n) {
    switch (t) {
      case "input":
        if (be(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Cs(i);
              if (!l) throw Error(u(90));
              ae(i), be(i, l);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && Je(e, !!n.multiple, t, !1);
    }
  }, ns = Jl, Oe = gi;
  var gp = { usingClientEntryPoint: !1, Events: [Ar, Fi, Cs, vn, kn, Jl] }, Ur = { findFiberByHostInstance: di, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xp = { bundleType: Ur.bundleType, version: Ur.version, rendererPackageName: Ur.rendererPackageName, rendererConfig: Ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = dr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ur.findFiberByHostInstance || kp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber) try {
      ls = ca.inject(xp), yn = ca;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!so(t)) throw Error(u(200));
    return vp(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!so(e)) throw Error(u(299));
    var n = !1, i = "", l = ud;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = no(e, 1, !1, null, null, n, !1, i, l), e[Pn] = t.current, Tr(e.nodeType === 8 ? e.parentNode : e), new ro(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = dr(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return gi(e);
  }, zt.hydrate = function(e, t, n) {
    if (!oa(t)) throw Error(u(200));
    return ua(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!so(e)) throw Error(u(405));
    var i = n != null && n.hydratedSources || null, l = !1, o = "", f = ud;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, l, !1, o, f), e[Pn] = t.current, Tr(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new la(t);
  }, zt.render = function(e, t, n) {
    if (!oa(t)) throw Error(u(200));
    return ua(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!oa(e)) throw Error(u(40));
    return e._reactRootContainer ? (gi(function() {
      ua(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = Jl, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!oa(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return ua(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var yd;
function Mp() {
  if (yd) return oo.exports;
  yd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), oo.exports = Tp(), oo.exports;
}
var gd;
function Pp() {
  if (gd) return da;
  gd = 1;
  var r = Mp();
  return da.createRoot = r.createRoot, da.hydrateRoot = r.hydrateRoot, da;
}
var Ap = Pp();
const Rp = (() => {
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
  function V(B, te, j) {
    const Y = s.indexOf(r[B][0]) + Number(j.slice(-1)) - 1, re = Y % s.length, ae = u[re] + 12 * Math.floor(Y / s.length), fe = B + te - ae;
    return s[re] + (fe < 0 ? "♭" : "♯").repeat(Math.abs(fe));
  }
  function ne(B) {
    return [...B.base, ...B.add].sort((te, j) => te[0] - j[0]);
  }
  function he(B, te, j) {
    const Y = te + (j ? 1 : 0), re = p[Y % p.length], ae = Math.min(...re.map(([be]) => be)), fe = Math.max(...re.map(([, be]) => be));
    let Ce = (B - d % 12 + 12) % 12 - (j ? 8 : 5) + 12 * Math.floor(Y / p.length);
    return ae + Ce < 0 && (Ce += 12), fe + Ce > h.pentatonic && (Ce -= 12), {
      strings: re.map((be) => be.map((We) => We + Ce)),
      start: ae + Ce,
      end: fe + Ce
    };
  }
  function _e(B, te, j) {
    const Y = j[te], re = (B + Y - d % 12 + 12) % 12, ae = d + re - Y, fe = c.map((ke, Pe) => {
      const Ce = te + (c.length - 1 - Pe) * 3;
      return [Ce, Ce + 1, Ce + 2].map((be) => {
        const We = Math.floor(be / j.length), Qe = j[be % j.length];
        return ae + Qe + 12 * We - ke;
      });
    });
    return {
      strings: fe,
      start: Math.min(...fe.map((ke) => ke[0])),
      end: Math.max(...fe.map((ke) => ke.at(-1)))
    };
  }
  function ie(B, te) {
    const j = [], Y = Math.ceil(-B.end / 12) * 12;
    for (let ae = Y; B.start + ae <= te; ae += 12) {
      const fe = B.strings.map((Pe) => Pe.map((Ce) => Ce + ae).filter((Ce) => Ce >= 0 && Ce <= te)), ke = fe.flat();
      j.push({
        strings: fe,
        start: Math.min(...ke),
        end: Math.max(...ke),
        partial: B.start + ae < 0 || B.end + ae > te
      });
    }
    const re = j.filter((ae) => !ae.partial);
    return re.length ? re : j;
  }
  function ce(B) {
    return ne(B).length === m;
  }
  function Te(B, te, j) {
    const Y = ce(te);
    B.querySelector('[value="3nps"]').disabled = !Y, B.value = Y ? j ?? "3nps" : "pentatonic";
  }
  function H(B, te, j, Y, re) {
    const ae = ne(te).map(([fe]) => fe);
    return Y.map((fe) => {
      const ke = fe - 1, Pe = j === "3nps" ? _e(B, ke, ae) : he(B, ke, te.base === C), Ce = re === void 0 ? [Pe] : ie(Pe, re);
      return { number: fe, positions: Ce };
    });
  }
  function le(B, te) {
    const j = B.getBoundingClientRect(), Y = B.querySelectorAll(te);
    let re = 1 / 0;
    Y.forEach((ae) => {
      const fe = ae.getBoundingClientRect();
      let ke = 0;
      fe.left < j.left ? ke = fe.left - j.left - 8 : fe.right > j.right && (ke = fe.right - j.right + 8), Math.abs(ke) < Math.abs(re) && (re = ke);
    }), Number.isFinite(re) && (B.scrollLeft += re);
  }
  function de(B, te = !1) {
    const j = B === "3nps" ? m : p.length;
    return Array.from({ length: j }, (Y, re) => {
      const ae = re + 1;
      return '<label class="box-toggle" data-box="' + ae + '"><input type="checkbox" value="' + ae + '"' + (te && re === 0 ? " checked" : "") + "> Boksi " + ae + "</label>";
    }).join("");
  }
  function Q(B, te) {
    const j = ne(te), Y = new Map(j.map(([ae, fe]) => [ae, V(B, ae, fe)])), re = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return j.flatMap(([ae, fe]) => re.flatMap(({ suffix: ke, base: Pe }) => {
      const Ce = Pe.map(([be]) => Y.get((ae + be) % 12));
      return Ce.every(Boolean) ? {
        root: (B + ae) % 12,
        degree: Number(String(fe).replace(/\D/g, "")),
        name: Ce[0] + ke,
        notes: Ce,
        base: Pe,
        add: []
      } : [];
    }));
  }
  function se(B, te) {
    const j = B.base.map(([ae]) => (B.root + ae) % 12), Y = c.map((ae) => {
      const fe = [];
      for (let ke = 0; ke <= te; ke++) {
        const Pe = (ae + ke) % 12;
        j.includes(Pe) && fe.push({ fret: ke, pitch: Pe });
      }
      return fe;
    }), re = [];
    for (let ae = 0; ae <= Y.length - 3; ae++)
      for (const fe of Y[ae])
        for (const ke of Y[ae + 1])
          if (fe.pitch !== ke.pitch)
            for (const Pe of Y[ae + 2]) {
              if (Pe.pitch === fe.pitch || Pe.pitch === ke.pitch) continue;
              const Ce = [fe.fret, ke.fret, Pe.fret], be = Math.min(...Ce), We = Math.max(...Ce);
              if (We - be > 3) continue;
              const Qe = Array(c.length).fill(null);
              Qe.splice(ae, 3, ...Ce), re.push({ strings: Qe, low: be, high: We });
            }
    return re.sort((ae, fe) => ae.high - fe.high || ae.low - fe.low);
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
  function D(B, te) {
    const j = Z[B + ":" + te];
    if (j) return { frets: j, barre: null };
    let Y = null;
    return g.forEach(({ string: re, openPC: ae, shapes: fe }) => {
      const ke = fe[te];
      if (!ke) return;
      let Pe = (B - ae + 12) % 12;
      if (Pe + Math.min(...ke.filter((We) => We !== null)) < 0 && (Pe += 12), Y && Y.fret <= Pe) return;
      const Ce = ke.map((We) => We === null ? null : Pe + We), be = Pe > 0 && ke.at(-1) === 0 ? { fret: Pe, from: re, to: ke.length - 1 } : null;
      Y = { fret: Pe, frets: Ce, barre: be };
    }), Y && { frets: Y.frets, barre: Y.barre };
  }
  function me(B, { frets: te, barre: j }, Y) {
    const Ce = [...c].reverse(), be = te.filter((ze) => ze > 0), Qe = !be.length || Math.max(...be) <= 4 && (te.includes(0) || Math.min(...be) === 1) ? 1 : Math.min(...be), He = (ze) => 24 + ze * 14, Je = (ze) => 30 + (ze - Qe) * 18 + 18 / 2, ot = 102;
    let Ye = '<svg class="chord-svg" viewBox="0 0 108 ' + (ot + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Y + "-ote paksusta kielestä ohueen: " + te.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Ye += '<line class="' + (ze === 0 && Qe === 1 ? "nut" : "fret") + '" x1="' + He(0) + '" y1="' + (30 + ze * 18) + '" x2="' + He(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return te.forEach((ze, nt) => {
      Ye += '<line class="string" x1="' + He(nt) + '" y1="30" x2="' + He(nt) + '" y2="' + ot + '"/>';
    }), Qe > 1 && (Ye += '<text class="fret-label" x="15" y="' + (Je(Qe) + 4) + '">' + Qe + "</text>"), j && (Ye += '<rect class="barre" x="' + (He(j.from) - 6.5) + '" y="' + (Je(j.fret) - 6.5) + '" width="' + ((j.to - j.from) * 14 + 13) + '" height="13" rx="6.5"/>'), te.forEach((ze, nt) => {
      if (ze === null) {
        Ye += '<text class="marker" x="' + He(nt) + '" y="22">×</text>';
        return;
      }
      const Vt = (Ce[nt] + ze) % 12 === B;
      if (ze === 0) {
        Ye += '<circle class="open' + (Vt ? " root-open" : "") + '" cx="' + He(nt) + '" cy="18" r="4.5"/>';
        return;
      }
      j && ze === j.fret && nt >= j.from && nt <= j.to && !Vt || (Ye += '<circle class="' + (Vt ? "root" : "tone") + '" cx="' + He(nt) + '" cy="' + Je(ze) + '" r="6.5"/>');
    }), Ye + "</svg>";
  }
  function Se(B, te) {
    const j = new URLSearchParams(location.search), Y = r.indexOf(j.get("toonikka")), re = j.get("asteikko");
    return {
      rootPC: Y === -1 ? B : Y,
      scaleId: Object.hasOwn(P, re) ? re : te
    };
  }
  function G(B, te, j) {
    return B + "?" + new URLSearchParams({ toonikka: r[te], asteikko: j });
  }
  function oe(B, te, j, {
    boxes: Y = [],
    onlyBoxNotes: re = !1,
    automatic: ae = !0,
    focusDegree: fe = "",
    grip: ke = null,
    barre: Pe = null,
    label: Ce = r[B] + " " + te.name,
    notes: be = null,
    targets: We = !1,
    muteFret: Qe = null
  } = {}) {
    const He = X(j), Je = He + 48, ot = Je + 28, Ye = w - 14, ze = M(c.length - 1) + 14, nt = ze - Ye, Vt = ae ? 680 : Math.ceil(ot * 0.64), Qt = Y.flatMap((Ne) => Ne.positions), Et = {};
    te.base.forEach(([Ne, Ae]) => Et[(B + Ne) % 12] = { deg: Ae, added: !1 }), te.add.forEach(([Ne, Ae]) => Et[(B + Ne) % 12] = { deg: Ae, added: !0 });
    const ln = c.map((Ne, Ae) => !!ke && ke[Ae] === null), Yt = !!ke && Qe !== null, Jt = R.filter((Ne, Ae) => ln[Ae]).reverse(), Mt = Ce + ". " + j + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Jt.length ? " Soittamatta jäävät kielet: " + Jt.join(", ") + "." : "");
    let je = '<svg viewBox="0 0 ' + ot + " " + I + '" style="min-width:' + Vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (We ? "group" : "img") + '" aria-label="' + Mt + '">';
    je += '<rect x="' + $ + '" y="' + Ye + '" width="' + (b - $) + '" height="' + nt + '" rx="6" fill="#2a2338"/>', je += '<rect x="' + b + '" y="' + Ye + '" width="' + (He - b) + '" height="' + nt + '" fill="#231a12"/>', je += '<rect x="' + He + '" y="' + Ye + '" width="' + (ot - He - 4) + '" height="' + nt + '" rx="8" fill="#32251e"/>';
    for (let Ne = 1; Ne <= j; Ne++)
      je += '<line x1="' + X(Ne) + '" y1="' + Ye + '" x2="' + X(Ne) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    je += '<rect x="' + (b - 3) + '" y="' + Ye + '" width="6" height="' + nt + '" rx="2" fill="#d8cbb6"/>', je += '<rect x="' + (Je - 11) + '" y="' + (Ye + 3) + '" width="22" height="' + (nt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', je += '<rect x="' + (Je - 4) + '" y="' + (Ye + 7) + '" width="3" height="' + (nt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Bt = (Ye + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Ne) => Ne <= j).forEach((Ne) => je += '<circle cx="' + W(Ne) + '" cy="' + Bt + '" r="5.5" fill="#7a6550"/>');
    for (let Ne = 12; Ne <= j; Ne += 12)
      je += '<circle cx="' + W(Ne) + '" cy="' + (Bt - z) + '" r="5.5" fill="#7a6550"/>', je += '<circle cx="' + W(Ne) + '" cy="' + (Bt + z) + '" r="5.5" fill="#7a6550"/>';
    je += '<text x="' + F + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', je += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', je += '<text x="' + Je + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Ne = 1; Ne <= j; Ne++)
      je += '<text x="' + W(Ne) + '" y="' + (I - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Ne + "</text>";
    if (Y.forEach(({ number: Ne, positions: Ae }) => {
      Ae.forEach((Re) => {
        const Be = Re.partial ? "box-highlight box-partial" : "box-highlight";
        je += '<g class="' + Be + '" data-box="' + Ne + '" aria-hidden="true">';
        const rt = Re.strings.find((vt) => vt.length), Lt = (W(rt[0]) + W(rt.at(-1))) / 2;
        je += '<text class="box-number" x="' + Lt + '" y="12">' + Ne + "</text>", Re.strings.forEach((vt, Xt) => {
          if (!vt.length) return;
          const Nn = W(vt[0]) - 16, vn = W(vt.at(-1)) - W(vt[0]) + 32;
          je += '<rect class="box-band" x="' + Nn + '" y="' + (M(Xt) - 14) + '" width="' + vn + '" height="28" rx="14"/>';
        }), je += "</g>";
      });
    }), c.forEach((Ne, Ae) => {
      const Re = 1 + Ae * 0.45, Be = M(Ae), rt = ln[Ae] && !Yt;
      rt ? je += '<text class="muted-mark" x="' + F + '" y="' + (Be + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ln[Ae] && Qe === 0 || (je += '<line x1="' + ($ + 4) + '" y1="' + Be + '" x2="' + (b - 4) + '" y2="' + Be + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), je += "<g" + (rt ? ' opacity=".35"' : "") + ">", je += '<line x1="' + b + '" y1="' + Be + '" x2="' + (Je + 5) + '" y2="' + Be + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', je += '<circle cx="' + (Je + 5) + '" cy="' + Be + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', je += "</g>", je += '<text x="13" y="' + (Be + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Ae] + "</text>";
    }), ke && Pe && Pe.fret >= 1 && Pe.fret <= j) {
      const Ne = M(Pe.from), Ae = M(Pe.to), Re = Math.min(Ne, Ae) - 6, Be = Math.max(Ne, Ae) + 6;
      je += '<rect class="barre-indicator" x="' + (W(Pe.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Be - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return We && (je += '<g class="fret-targets">', c.forEach((Ne, Ae) => {
      for (let Re = 0; Re <= j; Re++) {
        const Be = Re ? R[Ae] + "-kieli, " + Re + ". nauha" : "vapaa " + R[Ae] + "-kieli", rt = Re ? E : b - $ - 6;
        je += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Ae + '" data-fret="' + Re + '" data-midi="' + (Ne + Re) + '" aria-label="' + Be + '" x="' + (W(Re) - rt / 2) + '" y="' + (M(Ae) - z / 2) + '" width="' + rt + '" height="' + z + '" fill="transparent"/>';
      }
    }), je += "</g>"), (be ?? []).forEach(({ string: Ne, fret: Ae, label: Re, kind: Be }) => {
      je += '<g class="octave-note octave-' + Be + '">', je += '<circle cx="' + W(Ae) + '" cy="' + M(Ne) + '" r="' + N + '"/>', je += '<text x="' + W(Ae) + '" y="' + (M(Ne) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", je += "</g>";
    }), ke && (je += '<g class="grip-notes">'), (be ? [] : c).forEach((Ne, Ae) => {
      for (let Re = 0; Re <= j; Re++) {
        const Be = (Ne + Re) % 12;
        if (!(Be in Et) || ke && ke[Ae] !== Re || re && !Qt.some(({ strings: vn }) => {
          const kn = vn[Ae];
          return kn.length > 0 && Re >= kn[0] && Re <= kn.at(-1);
        })) continue;
        const rt = Et[Be], Lt = rt.deg === "1", vt = rt.added ? "#f0a13c" : Lt ? "#4b2fd6" : "#6d4aff", Xt = rt.added ? "#1a1430" : "#fff";
        rt.deg === fe && (je += '<circle class="focus-note" cx="' + W(Re) + '" cy="' + M(Ae) + '" r="14.5"/>');
        const Nn = ke ? ' data-string="' + (Ae + 1) + '" data-fret="' + Re + '" data-degree="' + rt.deg + '"' : "";
        je += "<circle" + Nn + ' cx="' + W(Re) + '" cy="' + M(Ae) + '" r="' + N + '" fill="' + vt + '" stroke="' + (Lt ? "#fff" : "#1a1430") + '" stroke-width="' + (Lt ? 2.5 : 1) + '"/>', je += '<text x="' + W(Re) + '" y="' + (M(Ae) + 3.5) + '" font-size="' + (rt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Xt + '" text-anchor="middle">' + rt.deg + "</text>";
      }
    }), ke && (je += "</g>"), Yt && ln.forEach((Ne, Ae) => {
      if (!Ne) return;
      const Re = W(Qe), Be = M(Ae);
      je += '<g class="muted-mark grip-mute" data-string="' + (Ae + 1) + '" data-fret="' + Qe + '">', je += '<circle cx="' + Re + '" cy="' + Be + '" r="9" fill="' + (Qe === 0 ? "#2a2338" : "#231a12") + '"/>', je += '<text x="' + Re + '" y="' + (Be + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', je += "</g>";
    }), je += "</svg>", je;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: P,
    noteName: V,
    scaleNotes: ne,
    scaleTriads: Q,
    triadGrips: se,
    chordGrip: D,
    renderChordDiagram: me,
    selectionFromURL: Se,
    selectionHref: G,
    renderBoard: oe,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: ce,
    syncBoxSystem: Te,
    fingeringBoxes: H,
    boxOptions: de,
    revealPositions: le
  };
})();
globalThis.MusicMapFretboard = Rp;
function xd(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function Lp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function $p(r) {
  const s = Lp(r), u = Math.round(s), c = (s - u) * 100;
  return { midi: u, cents: c };
}
const Fe = globalThis.MusicMapFretboard, Ke = (r) => (r % 12 + 12) % 12, Op = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Fp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], $e = (r, s = !1, u = !1) => (s ? Fp : Op)[Ke(r)] + (u ? Math.floor(r / 12) - 1 : ""), oi = (r) => Fe.CHROM[Ke(r)], Jr = (r, s, u) => Fe.noteName(Ke(r), s, u);
function bp(r, s) {
  const u = Math.floor(r / 12) - 1;
  return s[0] === "B" && Ke(r) < 2 ? u - 1 : s[0] === "C" && Ke(r) > 9 ? u + 1 : u;
}
const an = ["ohut E", "B", "G", "D", "A", "paksu E"], Fo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], tf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Ip = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ni = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, ht = (r, s) => ({ string: r, fret: s, midi: Fe.OPEN_PITCHES[r] + s });
function lr(r, s, u) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, u - s + 1) }, (d, h) => ht(c, s + h)));
}
const Ge = (r) => `${r.string}:${r.fret}`, Ei = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, nf = (r, s) => s === "maj" ? `${oi(r)}-duurisointu` : s === "min" ? `${oi(r)}-mollisointu` : `${oi(r)}7-sointu`, Xr = [
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
function rf(r, s) {
  const u = jd[s] ?? jd.E, c = Ke(r - u.root);
  return u.frets.flatMap((d, h) => d === null ? [] : [ht(h, d + c)]);
}
const ma = {
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
}, Ea = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (r, s, u, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(s, Math.min(u, r)) : c, wn = (r, s, u) => s.includes(r) ? r : u;
function xa(r) {
  const s = { ...ma };
  s.mode = wn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], s.mode), s.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : s.strings, s.strings.length || (s.strings = [...ma.strings]), s.min = Math.round(li(r.min, 0, 24, s.min)), s.max = Math.round(li(r.max, s.min, 24, Math.max(s.min, s.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[u] == "boolean" && (s[u] = r[u]);
  return s.check = wn(r.check, ["class", "pitch"], s.check), s.input = wn(r.input, ["mic", "board"], s.input), s.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : s.rounds, s.root = Math.round(li(r.root, 0, 11, s.root)), s.scale = typeof r.scale == "string" && Object.hasOwn(Fe.SCALES, r.scale) ? r.scale : s.scale, s.box = Math.round(li(r.box, 0, 5, s.box)), s.order = wn(r.order, ["random", "up", "down"], s.order), s.chord = wn(r.chord, ["maj", "min", "dom7"], s.chord), s.chordTone = wn(r.chordTone, ["build", "random", "1", "3", "5", "7"], s.chordTone), s.chord !== "dom7" && s.chordTone === "7" && (s.chordTone = "build"), s.shape = wn(r.shape, ["C", "A", "G", "E", "D"], s.shape), s.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : s.intervals, s.intervals.length || (s.intervals = [...ma.intervals]), s.direction = wn(r.direction, ["up", "down", "both"], s.direction), s.hints = wn(r.hints, ["off", "always", "fade"], s.hints), s.activity = wn(r.activity, ["play", "degree"], s.activity), s.minRms = li(r.minRms, 1e-3, 0.15, s.minRms), s.clarity = li(r.clarity, 0.85, 0.99, s.clarity), s.stability = li(r.stability, 120, 800, s.stability), s.cents = li(r.cents, 10, 45, s.cents), s.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", s;
}
function Dp(r, s) {
  const u = new URLSearchParams(r), c = { ...s };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(d) && Object.assign(c, { [h]: u.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(d) && (c[h] = Number(u.get(d)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((d) => Number(d) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(d) && (c[h] = u.get(d) === "1");
  if (u.has("toonikka")) {
    const d = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], p = Math.max(Fe.CHROM.indexOf(h), m.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    p >= 0 && (c.root = p);
  }
  return xa(c);
}
function zp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Fe.CHROM[r.root],
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
const Ci = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, In = (r) => r.mode === "scale" && r.order !== "random", sf = (r) => ["note", "degree"].includes(Ci(r)) ? "class" : In(r) ? "pitch" : r.check, fa = (r) => Ci(r) === "mic", Sd = "musiikin-kartta:harjoittelu", af = 3, go = () => ({ version: af, settings: { ...ma }, stats: {}, recent: [], sessions: [] }), lf = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, mn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function Vp(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((s) => mn(r[s])) && r.correct <= r.attempts && (r.errors === void 0 || mn(r.errors)) && (r.ema === void 0 || mn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || mn(r.emaMs));
}
function Bp(r) {
  return !!r && typeof r.id == "string" && mn(r.count) && mn(r.first) && r.first <= r.count && mn(r.ms) && mn(r.at) && (r.solo === void 0 || mn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || mn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function wd(r) {
  if (!r) return go();
  const s = JSON.parse(r);
  if (!s || ![1, 2, 3].includes(s.version) || !s.stats || typeof s.stats != "object" || Array.isArray(s.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(s.stats).some((m) => !Vp(m))) throw new Error("Virheellisiä tilastoja");
  if (s.recent !== void 0 && (!Array.isArray(s.recent) || s.recent.some((m) => !m || typeof m.id != "string" || !mn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (s.sessions !== void 0 && (!Array.isArray(s.sessions) || s.sessions.some((m) => !Bp(m)))) throw new Error("Virheellisiä kierroksia");
  const u = s.version < 3, c = xa(s.settings ?? {}), d = u && s.settings?.hints !== "always" && s.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: af,
    settings: c,
    stats: Object.fromEntries(Object.entries(s.stats).map(([m, p]) => [m, { ...p, errors: p.errors ?? 0 }])),
    recent: (s.recent ?? []).slice(-500),
    sessions: (s.sessions ?? []).slice(-200)
  };
  return (d || s.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Ed = 2500, Kp = 8e3, Nd = 0.3, Zr = (r) => r.ema ?? r.correct / r.attempts, qr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function bo(r) {
  if (!r?.attempts) return null;
  const s = Math.max(0, Math.min(1, 1 - (qr(r) - Ed) / (Kp - Ed)));
  return Zr(r) * 0.65 + s * 0.35;
}
function Hp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - bo(r)) * 3;
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
  data = go();
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
    const u = lf(s), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(s.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + s.errors,
      totalMs: c.totalMs + s.ms,
      lastSeen: s.at,
      ema: c.attempts ? Zr(c) + Nd * (d - Zr(c)) : d,
      emaMs: c.attempts ? qr(c) + Nd * (s.ms - qr(c)) : s.ms
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
    this.data = { ...go(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Up = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Gp = ["e", "B", "G", "D", "A", "E"];
function of({ string: r }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Gp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const uf = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Wp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function cf({ min: r, max: s }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - r + 1 }, (u, c) => {
      const d = r + c;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Up.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function sr({ area: r, marks: s = [], mutedStrings: u = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta" }) {
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
      /* @__PURE__ */ a.jsx(cf, { min: S, max: R }),
      /* @__PURE__ */ a.jsx("tbody", { children: Fe.OPEN_PITCHES.map((N, F) => /* @__PURE__ */ a.jsxs("tr", { className: p.includes(F) ? "" : "unused", style: uf(F), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${an[F]}${u.includes(F) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(of, { string: F }),
          u.includes(F) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        lr([F], S, R).map((I) => {
          const X = $.get(Ge(I)), W = `${an[F]}-kieli, ${Ni(I.fret)}`;
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
                const V = [...p].sort((ie, ce) => ie - ce), ne = V.indexOf(F), he = M.key === "ArrowUp" ? V[Math.max(0, ne - 1)] : M.key === "ArrowDown" ? V[Math.min(V.length - 1, ne + 1)] : F, _e = M.key === "Home" ? S : M.key === "End" ? R : Math.max(S, Math.min(R, I.fret + (M.key === "ArrowRight" ? 1 : M.key === "ArrowLeft" ? -1 : 0)));
                M.currentTarget.closest("table")?.querySelector(`button[data-string="${he}"][data-fret="${_e}"]`)?.focus();
              },
              disabled: c || !p.includes(F),
              "aria-label": W + (X ? `, ${Wp[X.kind]}${X.label ? " " + X.label : ""}` : ""),
              onClick: () => d?.(I),
              children: X ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: X.label || "●" }) : null
            }
          ) }, I.fret);
        })
      ] }, F)) })
    ] }) })
  ] });
}
function Qp({ area: r, stats: s, input: u, check: c, flats: d }) {
  const { strings: h, min: m, max: p } = r, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": p - m + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(cf, { min: m, max: p }),
    /* @__PURE__ */ a.jsx("tbody", { children: Fe.OPEN_PITCHES.map((R, k) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: uf(k), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${an[k]}`, children: /* @__PURE__ */ a.jsx(of, { string: k }) }),
      lr([k], m, p).map((C) => {
        const P = Object.hasOwn(s, S + Ge(C)) ? s[S + Ge(C)] : void 0, $ = bo(P), b = $ === null ? "unseen" : P.attempts < 3 ? "few" : $ >= 0.8 ? "strong" : $ >= 0.5 ? "growing" : "weak", w = `${an[k]}-kieli, ${Ni(C.fret)}, ${$e(C.midi, d)}`, E = P ? `${Math.round($ * 100)} %, ${P.correct}/${P.attempts} heti oikein, viime aikoina ${Math.round(Zr(P) * 100)} % ja ${(qr(P) / 1e3).toFixed(1)} s` : "ei vastauksia";
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
const Yp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Na = (r) => r.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, df = (r) => Fe.fingeringBoxes(r.root, Fe.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function _i(r) {
  if (r.mode === "caged") {
    const s = rf(r.root, r.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...s), max: Math.max(...s), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const s = df(r);
    return { strings: r.strings, min: s.start, max: s.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Jp(r) {
  const s = _i(r);
  return s.fixed ? { ...s, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, s.min - 1), max: Math.min(24, s.max + 1) } : s;
}
function ts(r) {
  const s = _i(r), u = lr(s.strings, s.min, s.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return u.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(Ke(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(rf(r.root, r.shape).map(Ge));
    return u.filter((m) => h.has(Ge(m)));
  }
  if (r.mode === "interval") return u;
  const c = u.filter((h) => Na(r).some(([m]) => Ke(h.midi - r.root) === m));
  if (r.mode !== "scale" || !r.box) return c;
  const d = df(r);
  return c.filter((h) => {
    const m = d.strings[h.string];
    return m.length > 0 && h.fret >= m[0] && h.fret <= m.at(-1);
  });
}
function ff(r, s) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: s.flatMap((h) => s.filter((m) => m.midi === h.midi + (c === "down" ? -d : d)).map((m) => ({ reference: h, target: m })))
  }))).filter((c) => c.pairs.length);
}
function Xp(r) {
  const s = Na(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? s : s.filter(([, u]) => u.endsWith(r.chordTone));
}
function xo(r) {
  const s = ts(r), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!s.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Xp(r).filter(([d]) => !s.some((h) => Ke(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${u}` : r.mode === "interval" && !ff(r, s).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(r) && new Set(s.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Zp(r, s) {
  const u = [...new Map([...s].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? u.reverse() : u;
}
function hf(r) {
  return In(r) ? new Set(ts(r).map((s) => s.midi)).size : r.rounds;
}
function qp(r, s) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? s <= 3 ? 2 : s <= 6 ? 1 : 0 : 0;
}
function Xi(r, s, u = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = s.reduce((m, p) => m + p, 0), d = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let m = 0; m < r.length; m++)
    if (h -= s[m], h < 0) return r[m];
  return r.at(-1);
}
const _d = (r, s) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${s}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${s}:${r.activity}` : `scale:${r.root}:${r.scale}:${s}:${r.activity}`;
function wi(r, s) {
  const u = r.filter((c) => !s(c));
  return u.length ? u : r;
}
function em(r, s, u = {}, c, d = Math.random) {
  const h = xo(r);
  if (h) throw new Error(h);
  const m = sf(r), p = Ci(r), S = m === "pitch", R = (M) => r.weak ? Hp(u[lf({ input: p, check: m, hint: !1, item: M })]) : 1, k = (M) => Xi(M, M.map(() => 1), d), C = ts(r), P = { check: m, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const M = wi(C, (he) => !!c && Ge(he) === Ge(c.position)), V = Xi(M, M.map((he) => R(`notes:${Ge(he)}`)), d), ne = $e(V.midi, r.flats, S);
    return {
      ...P,
      position: V,
      midi: V.midi,
      name: ne,
      item: `notes:${Ge(V)}`,
      prompt: `Etsi ${ne} ${Fo[V.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const M = (_e) => `ear-note:${Ke(_e.midi)}${r.reference ? ":ref" : ""}`, V = wi(C, (_e) => !!c && Ke(_e.midi) === Ke(c.midi)), ne = Xi(V, V.map((_e) => R(M(_e))), d), he = r.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...P,
      position: ne,
      midi: ne.midi,
      name: $e(ne.midi, r.flats),
      item: M(ne),
      choices: "note",
      reference: he,
      sound: he === void 0 ? [ne.midi] : [he, ne.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const M = wi(C, (ne) => !!c && ne.midi === c.midi), V = Xi(M, M.map((ne) => R(`repeat:${ne.midi}`)), d);
    return {
      ...P,
      position: V,
      midi: V.midi,
      name: $e(V.midi, r.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const M = wi(ff(r, C), (he) => c?.interval === he.iv && c?.direction === he.direction), V = Xi(M, M.map((he) => R(`interval:${he.iv}:${he.direction}`)), d), ne = k(wi(V.pairs, (he) => c?.reference === he.reference.midi));
    return {
      ...P,
      position: ne.target,
      midi: ne.target.midi,
      name: $e(ne.target.midi, r.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${$e(ne.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const $ = Na(r);
  let b, w = 0;
  if (In(r)) {
    const M = Zp(r, C);
    w = M.length, b = M[s % M.length];
  } else {
    const M = $.filter(([he]) => C.some((_e) => Ke(_e.midi - r.root) === he)), V = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [$[s % $.length]] : $.filter(([, he]) => he.endsWith(r.chordTone)) : wi(M, ([he]) => c?.interval === he), [ne] = Xi(V, V.map(([he]) => R(_d(r, he))), d);
    b = k(wi(C.filter((he) => Ke(he.midi - r.root) === ne), (he) => !!c && Ge(he) === Ge(c.position)));
  }
  const E = Ke(b.midi - r.root), z = $.find(([M]) => M === E)[1], N = Jr(r.root, E, z), F = S ? N + bp(b.midi, N) : N, I = r.mode === "scale" ? `${oi(r.root)}-${Fe.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${oi(r.root)}-duurisointu, ${r.shape}-muoto` : nf(r.root, r.chord), X = r.mode !== "caged" && r.activity === "degree", W = X ? `${I}: mikä aste on ${N}?` : w ? `${I} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${s % w + 1}/${w}: ${z}. aste (${F}).` : `${I}: etsi ${z}. aste${S ? ` (${F})` : ""}.`;
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
function jo(r, s, u) {
  return Number.isInteger(s) && (u === "class" ? Ke(r) === Ke(s) : r === s);
}
function pf(r, s, u) {
  return jo(s.midi, u.midi, s.check) ? r.mode === "notes" ? u.string === s.position.string : Yp(r) ? ts(r).some((c) => Ge(c) === Ge(u)) : !0 : !1;
}
function tm(r, s) {
  const u = _i(r);
  return lr(u.strings, u.min, u.max).filter((c) => pf(r, s, c));
}
const wt = (r, s, u) => ({ ...r, label: s, kind: u }), nm = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function im(r, s, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, d = _i(r), h = lr(d.strings, d.min, d.max), m = tm(r, s);
  if (r.mode === "notes") {
    if (c) return { marks: m.map((z) => wt(z, s.name, "answer")), text: `${s.name} on ${tf[s.position.string]}: ${Ni(s.position.fret)}.` };
    const w = h.find((z) => z.string === s.position.string), E = $e(w.midi, r.flats);
    return {
      marks: [wt(w, E, "anchor")],
      text: `Apupiste: ${Ip[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [wt(s.position, s.name, "answer")], text: `Sävel on ${s.name}.` } : { marks: [wt(s.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${an[s.position.string]}-kieli, ${Ni(s.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: m.map((w) => wt(w, $e(w.midi, r.flats, s.check === "pitch"), "answer")), text: `Sävel on ${s.name}.` } : { marks: [], text: `Sävel löytyy ${Fo[s.position.string]}.` };
  if (r.mode === "interval") {
    const w = $e(s.reference, r.flats, !0), E = h.filter((z) => z.midi === s.reference).map((z) => wt(z, w, "anchor"));
    return c ? {
      marks: [...E, ...m.map((z) => wt(z, $e(z.midi, r.flats, !0), "answer"))],
      text: `${nm(Xr[s.interval])} ${s.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${s.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${s.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const p = ts(r), S = Na(r), R = (w) => S.find(([E]) => E === Ke(w.midi - r.root))?.[1] ?? "", k = Jr(r.root, s.interval, s.degree), C = p.filter((w) => Ke(w.midi - r.root) === 0), P = (w) => m.some((E) => Ge(E) === Ge(w)), $ = `${s.degree}. aste on ${k}.`;
  if (r.mode === "caged")
    return c ? { marks: p.map((w) => wt(w, R(w), P(w) ? "answer" : "shape")), text: $ } : { marks: p.map((w) => wt(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${s.degree}. aste?` };
  const b = r.mode === "scale" ? "asteikon" : "soinnun";
  if (s.choices === "degree") {
    const w = p.filter((E) => Ke(E.midi) === Ke(s.midi));
    return c ? { marks: [...(s.interval === 0 ? [] : C).map((E) => wt(E, "1", "anchor")), ...w.map((E) => wt(E, s.degree, "answer"))], text: `${k} on ${s.degree}. aste.` } : s.interval === 0 ? { marks: w.map((E) => wt(E, k, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((E) => wt(E, "1", "anchor")), ...w.map((E) => wt(E, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !P(w)).map((w) => wt(w, "1", "anchor")), ...m.map((w) => wt(w, s.degree, "answer"))], text: $ } : s.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${oi(r.root)}.` } : { marks: C.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${s.degree}. aste on ${s.interval} puoliaskelta perussävelen yläpuolella.` };
}
class rm {
  constructor(s, u, c, d = () => performance.now(), h = Math.random) {
    this.settings = s, this.stats = u, this.record = c, this.now = d, this.random = h, this.total = hf(s);
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
      this.question = em(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = qp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(u === "degree" ? s === h.interval : u === "note" ? jo(h.midi, s, "class") : u === "board" ? !!c && pf(this.settings, h, c) : jo(h.midi, s, h.check)))
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
function So(r) {
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
const wo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], er = (r) => wo.find(([s]) => s === r)?.[1] ?? r;
function Rt({ label: r, children: s }) {
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
  const s = _i(r), u = hf(r), c = Ci(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = s.fixed === "shape" ? `${r.shape}-muoto, nauhat ${s.min}–${s.max}` : s.fixed === "box" ? `boksi ${r.box}, nauhat ${s.min}–${s.max}` : `nauhat ${s.min}–${s.max}`, m = s.strings.length === 6 ? "" : ` · kielet ${s.strings.map((p) => p + 1).join(", ")}`;
  return `${Ea[r.hints].title} · ${d} · ${In(r) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${m}`;
}
function Pd({ s: r, change: s, locked: u, problem: c }) {
  const d = O.useId(), h = (k, C) => s({ ...r, [k]: C }), m = _i(r), p = Ci(r) === "note" || Ci(r) === "degree", S = ["scale", "chord", "caged"].includes(r.mode), R = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: r.mode, onChange: (k) => h("mode", k.target.value), children: wo.map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C }, k)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: wo.find(([k]) => k === r.mode)[2] })
    ] }),
    S && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Rt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: r.root, onChange: (k) => h("root", Number(k.target.value)), children: Fe.CHROM.map((k, C) => /* @__PURE__ */ a.jsx("option", { value: C, children: k }, k)) }) }),
      r.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: r.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(Fe.SCALES).map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ a.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: r.box, onChange: (k) => h("box", Number(k.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ a.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ a.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: r.order, onChange: (k) => h("order", k.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: r.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(Ei).map(([k, C]) => /* @__PURE__ */ a.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ a.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: r.chordTone, onChange: (k) => h("chordTone", k.target.value), children: [
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
      r.mode === "caged" ? /* @__PURE__ */ a.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: r.shape, onChange: (k) => h("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ a.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ a.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: r.activity, onChange: (k) => h("activity", k.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.intervals.includes(k), onChange: (C) => h("intervals", C.target.checked ? [...r.intervals, k] : r.intervals.filter((P) => P !== k)) }),
        Xr[k]
      ] }, k)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: r.direction, onChange: (k) => h("direction", k.target.value), children: [
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
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...Ea[k] }))
      }
    ),
    p ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Td, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: r.rounds, disabled: In(r), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !p && /* @__PURE__ */ a.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: In(r) ? "pitch" : r.check, disabled: In(r), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(r.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
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
          /* @__PURE__ */ a.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: an.map((k, C) => /* @__PURE__ */ a.jsxs("label", { children: [
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
const Ad = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function sm(r) {
  return r && Object.hasOwn(Ad, r) ? Ad[r] : null;
}
const am = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function lm({ onSelect: r }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: am.map((s) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(s.id), children: [
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
const om = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Eo = 100, mf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Io(r) {
  if (r === null || r.trim() === "") return Eo;
  const s = Number(r);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : Eo;
}
function um() {
  try {
    return Io(localStorage.getItem(mf));
  } catch {
    return Eo;
  }
}
function cm(r) {
  try {
    localStorage.setItem(mf, String(Io(String(r))));
  } catch {
  }
}
function Rd(r, s, u = !0) {
  return u ? om[r] * Io(String(s)) / 100 : 0;
}
function vf(r = () => new Audio()) {
  try {
    const s = r();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const dm = 0.12, fm = 2e3, hm = 3;
function pm(r, s = !1) {
  return s ? !0 : r.atLoopBoundary || r.drift <= dm || r.seeking || r.readyState < hm ? !1 : r.msSinceLastFix >= fm;
}
const mm = 1.5, vm = 0.4, km = 0.5;
let No = null, ym = null;
function gm(r) {
  return No !== null ? No : (ym ??= vf()) ? 0 : vm;
}
class kf {
  constructor(s = gm()) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, u, c = !1, d = performance.now()) {
    if (u.readyState < 1 || s.readyState < 1 || !c && (u.paused || s.paused)) return !1;
    const h = u.currentTime - s.currentTime, m = Math.abs(h), p = s.loop && Number.isFinite(s.duration) && Math.abs(m - s.duration) < 0.35, S = this.lastFix.get(u);
    if (!pm({
      drift: m,
      atLoopBoundary: p,
      seeking: u.seeking,
      readyState: u.readyState,
      msSinceLastFix: S === void 0 ? 1 / 0 : d - S
    }, c)) return !1;
    const R = !s.paused;
    !c && R && S !== void 0 && (this.latency = Math.min(mm, Math.max(0, this.latency - km * h)), No = this.latency);
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
const xm = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class jm {
  constructor(s = xm) {
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
const Sm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", wm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Ld(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const s = Math.floor(r);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function yf() {
  const r = O.useRef(null), s = O.useRef(null), [u, c] = O.useState(!1), [d, h] = O.useState(!1), [m, p] = O.useState(!1), [S, R] = O.useState(0), [k, C] = O.useState(0), [P, $] = O.useState(""), b = O.useRef(new kf());
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
        Ld(S),
        " / ",
        Ld(k)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: Sm,
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
        src: wm,
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
const Em = 4e3;
class $d extends Error {
  name = "MicSetupError";
}
async function Nm(r, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new $d("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
          R = setTimeout(() => C(new $d("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Em);
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
async function Cm() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((s) => s.kind === "audioinput" && s.deviceId) : [];
}
var fo, Od;
function _m() {
  if (Od) return fo;
  Od = 1;
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
  return fo = r, r.prototype.fromComplexArray = function(u, c) {
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
          const E = b, z = E + P, N = z + P, F = N + P, I = u[E], X = u[E + 1], W = u[z], M = u[z + 1], V = u[N], ne = u[N + 1], he = u[F], _e = u[F + 1], ie = I, ce = X, Te = C[w], H = k * C[w + 1], le = W * Te - M * H, de = W * H + M * Te, Q = C[2 * w], se = k * C[2 * w + 1], Z = V * Q - ne * se, g = V * se + ne * Q, D = C[3 * w], me = k * C[3 * w + 1], Se = he * D - _e * me, G = he * me + _e * D, oe = ie + Z, B = ce + g, te = ie - Z, j = ce - g, Y = le + Se, re = de + G, ae = k * (le - Se), fe = k * (de - G), ke = oe + Y, Pe = B + re, Ce = oe - Y, be = B - re, We = te + fe, Qe = j - ae, He = te - fe, Je = j + ae;
          u[E] = ke, u[E + 1] = Pe, u[z] = We, u[z + 1] = Qe, u[N] = Ce, u[N + 1] = be, u[F] = He, u[F + 1] = Je;
        }
    }
  }, r.prototype._singleTransform2 = function(u, c, d) {
    const h = this._out, m = this._data, p = m[c], S = m[c + 1], R = m[c + d], k = m[c + d + 1], C = p + R, P = S + k, $ = p - R, b = S - k;
    h[u] = C, h[u + 1] = P, h[u + 2] = $, h[u + 3] = b;
  }, r.prototype._singleTransform4 = function(u, c, d) {
    const h = this._out, m = this._data, p = this._inv ? -1 : 1, S = d * 2, R = d * 3, k = m[c], C = m[c + 1], P = m[c + d], $ = m[c + d + 1], b = m[c + S], w = m[c + S + 1], E = m[c + R], z = m[c + R + 1], N = k + b, F = C + w, I = k - b, X = C - w, W = P + E, M = $ + z, V = p * (P - E), ne = p * ($ - z), he = N + W, _e = F + M, ie = I + ne, ce = X - V, Te = N - W, H = F - M, le = I - ne, de = X + V;
    h[u] = he, h[u + 1] = _e, h[u + 2] = ie, h[u + 3] = ce, h[u + 4] = Te, h[u + 5] = H, h[u + 6] = le, h[u + 7] = de;
  }, r.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, m = c / h << 1, p, S, R = this._bitrev;
    if (m === 4)
      for (p = 0, S = 0; p < c; p += m, S++) {
        const Ne = R[S];
        this._singleRealTransform2(p, Ne >>> 1, h >>> 1);
      }
    else
      for (p = 0, S = 0; p < c; p += m, S++) {
        const Ne = R[S];
        this._singleRealTransform4(p, Ne >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var P = m >>> 1, $ = P >>> 1, b = $ >>> 1;
      for (p = 0; p < c; p += m)
        for (var w = 0, E = 0; w <= b; w += 2, E += h) {
          var z = p + w, N = z + $, F = N + $, I = F + $, X = u[z], W = u[z + 1], M = u[N], V = u[N + 1], ne = u[F], he = u[F + 1], _e = u[I], ie = u[I + 1], ce = X, Te = W, H = C[E], le = k * C[E + 1], de = M * H - V * le, Q = M * le + V * H, se = C[2 * E], Z = k * C[2 * E + 1], g = ne * se - he * Z, D = ne * Z + he * se, me = C[3 * E], Se = k * C[3 * E + 1], G = _e * me - ie * Se, oe = _e * Se + ie * me, B = ce + g, te = Te + D, j = ce - g, Y = Te - D, re = de + G, ae = Q + oe, fe = k * (de - G), ke = k * (Q - oe), Pe = B + re, Ce = te + ae, be = j + ke, We = Y - fe;
          if (u[z] = Pe, u[z + 1] = Ce, u[N] = be, u[N + 1] = We, w === 0) {
            var Qe = B - re, He = te - ae;
            u[F] = Qe, u[F + 1] = He;
            continue;
          }
          if (w !== b) {
            var Je = j, ot = -Y, Ye = B, ze = -te, nt = -k * ke, Vt = -k * fe, Qt = -k * ae, Et = -k * re, ln = Je + nt, Yt = ot + Vt, Jt = Ye + Et, Mt = ze - Qt, je = p + $ - w, Bt = p + P - w;
            u[je] = ln, u[je + 1] = Yt, u[Bt] = Jt, u[Bt + 1] = Mt;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(u, c, d) {
    const h = this._out, m = this._data, p = m[c], S = m[c + d], R = p + S, k = p - S;
    h[u] = R, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(u, c, d) {
    const h = this._out, m = this._data, p = this._inv ? -1 : 1, S = d * 2, R = d * 3, k = m[c], C = m[c + d], P = m[c + S], $ = m[c + R], b = k + P, w = k - P, E = C + $, z = p * (C - $), N = b + E, F = w, I = -z, X = b - E, W = w, M = z;
    h[u] = N, h[u + 1] = 0, h[u + 2] = F, h[u + 3] = I, h[u + 4] = X, h[u + 5] = 0, h[u + 6] = W, h[u + 7] = M;
  }, fo;
}
var Tm = _m();
const Mm = /* @__PURE__ */ Sp(Tm);
class Wr {
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
    return new Wr(
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
    return new Wr(
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
    return new Wr(s, (u) => Array(u));
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
    this._inputLength = s, this._fft = new Mm(Rm(2 * s)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Pm(r) {
  const s = [];
  let u = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (u = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (u = !1, d !== -1 && s.push(d)) : u && r[h] > c && (c = r[h], d = h);
  return s;
}
function Am(r, s) {
  const [u, c, d] = [r - 1, r, r + 1], [h, m, p] = [s[u], s[c], s[d]], S = h / 2 - m + p / 2, R = -(h / 2) * (c + d) + m * (u + d) - p / 2 * (u + c), k = h * c * d / 2 - m * u * d + p * u * c / 2, C = -R / (2 * S), P = S * C * C + R * C + k;
  return [C, P];
}
class Qr {
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
    return new Qr(s, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new Qr(s, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new Qr(s, (u) => Array(u));
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
    this._autocorrelator = new Wr(s, u), this._nsdfBuffer = u(s);
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
    const c = Pm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * d
    ), [m, p] = Am(
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
function Rm(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function Lm(r) {
  const s = r * 0.17;
  let u = 2048;
  for (; u < s && u < 32768; ) u *= 2;
  return u;
}
const $m = 0.05, Om = 1.5;
class Fm {
  constructor(s, u = {}) {
    this.mic = s, this.opts = u;
    const c = s.context, d = Lm(c.sampleRate), h = Math.max(1, Math.min(2, s.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), s.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? h : 1); m++) {
      const p = c.createAnalyser();
      p.fftSize = d, p.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(p, m) : s.source.connect(p), this.analysers.push(p), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * $m))), this.detector = Qr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new bm();
  onset = new Im();
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
    } = this.opts, k = this.analysers.map((M, V) => (M.getFloatTimeDomainData(this.buffers[V]), Fd(this.buffers[V], this.buffers[V].length - this.shortLength))), C = k.indexOf(Math.max(...k));
    C !== this.channel && k[C] > (k[this.channel] ?? 0) * Om && (this.channel = C);
    const P = this.buffers[this.channel], $ = k[this.channel], b = Dm(P, P.length - this.shortLength), w = { rms: $, peak: b, channel: this.channel, levels: k }, E = $ < c, z = this.onset.feed($, s, c);
    if (E && Fd(P, 0) < c) {
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
    const { midi: I, cents: X } = $p(N);
    if (Math.abs(X) > h) {
      this.gate.feed(null, s, d, E, z), S?.({ ...w, status: "off-pitch", frequency: N, clarity: F, midi: I, cents: X });
      return;
    }
    S?.({ ...w, status: "pitch", frequency: N, clarity: F, midi: I, cents: X });
    const W = this.gate.feed(I, s, d, E, z);
    W !== null && R?.({ midi: I, frequency: N, cents: X, clarity: F, timestamp: s, heldMs: W.heldMs });
  }
}
class bm {
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
class Im {
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
function Fd(r, s = 0) {
  const u = Math.max(0, s);
  let c = 0;
  for (let d = u; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - u));
}
function Dm(r, s = 0) {
  let u = 0;
  for (let c = Math.max(0, s); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > u && (u = d);
  }
  return u;
}
const ar = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let qi;
function gf() {
  return (!qi || qi.state === "closed") && (qi = new AudioContext()), qi;
}
function zm() {
  const r = qi;
  qi = void 0, r?.close().catch(() => {
  });
}
const xf = (r) => r instanceof Error ? r.name : "";
function Vm(r) {
  const s = xf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Bm {
  constructor(s = (u) => Nm(u, gf)) {
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
      if (!s || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(xf(p))) throw p;
      h = await this.opener(void 0), m = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Fm(h, { ...u });
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
function jf(r, s) {
  return r !== "on" ? r : !s || s.status === "silent" ? "silent" : s.status === "pitch" ? "pitch" : s.status === "off-pitch" ? "untuned" : "noise";
}
const bd = (r) => Math.max(0, Math.min(1, (ar(r) + 60) / 60));
function Km(r) {
  const s = [...r].sort((c, d) => c - d), u = s[Math.min(s.length - 1, Math.floor(s.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
async function Id(r) {
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
function Sf(r) {
  const s = r instanceof Error ? r.message : "";
  return s === "reference-audio-resume-timeout" || s === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Do {
  constructor(s = gf) {
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
    if (await Id(c), u !== this.token) return !1;
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
    if (await Id(h), d !== this.token) return !1;
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
const Co = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [1, 2]), wf = [...new Map(Co.flatMap((r) => r.positions[0].strings.flatMap((s, u) => s.map((c) => {
  const d = ht(u, c);
  return [Ge(d), d];
})))).values()].sort((r, s) => r.midi - s.midi || s.string - r.string), ja = [5, 4, 3, 2, 1, 0].flatMap((r) => wf.filter((s) => s.string === r).sort((s, u) => s.fret - u.fret)), _o = [
  ...ja,
  ...ja.slice(1, -1).reverse()
], Hm = [..._o, ja[0]], Dd = new Set(
  Co[0].positions[0].strings.flatMap((r, s) => r.map((u) => {
    const c = ht(s, u);
    return Ge(c);
  })).filter((r) => Co[1].positions[0].strings.flatMap((s, u) => s.map((c) => Ge(ht(u, c)))).includes(r))
), Um = [
  ht(5, 5),
  ht(5, 8),
  ht(5, 10),
  ht(4, 7),
  ht(4, 10),
  ht(3, 7),
  ht(3, 10),
  ht(3, 7),
  ht(4, 10),
  ht(4, 7),
  ht(5, 10),
  ht(5, 8),
  ht(5, 5)
], Ef = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Nf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", ho = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], zd = (r) => Ke(r) === 9;
function Vd() {
  try {
    const r = Number(localStorage.getItem(Ef));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Gm() {
  try {
    const r = Number(localStorage.getItem(Nf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Wm({ onBack: r, onPosition: s }) {
  const [u, c] = O.useState(Vd), [d, h] = O.useState(Vd), [m, p] = O.useState(!1), [S, R] = O.useState("roots"), [k, C] = O.useState(Gm), [P, $] = O.useState(null), [b, w] = O.useState(null), [E, z] = O.useState(""), N = O.useRef(new Do()), F = O.useRef(0), I = b === null ? null : _o[b];
  function X() {
    F.current++, N.current.stop(), $(null), w(null);
  }
  O.useEffect(() => {
    const ie = () => {
      document.hidden && (F.current++, N.current.stop(), $(null), w(null));
    };
    return document.addEventListener("visibilitychange", ie), () => {
      document.removeEventListener("visibilitychange", ie), F.current++, N.current.stop();
    };
  }, []);
  async function W(ie) {
    const ce = ++F.current;
    N.current.stop(), w(null), z(""), $(ie);
    try {
      ie === "transition" ? await N.current.play(Um.map((Te) => Te.midi)) : ie === "once" ? await N.current.play(Hm.map((Te) => Te.midi)) : await N.current.loop(_o.map((Te) => Te.midi), (Te) => {
        ce === F.current && w(Te);
      }, k);
    } catch (Te) {
      ce === F.current && z(Sf(Te));
    } finally {
      ce === F.current && ($(null), w(null));
    }
  }
  function M(ie) {
    const ce = Math.max(40, Math.min(140, ie));
    C(ce), N.current.setLoopTempo(ce);
    try {
      localStorage.setItem(Nf, String(ce));
    } catch {
    }
  }
  function V(ie) {
    ie > u || (X(), h(ie), p(!1), R("roots"));
  }
  function ne() {
    X();
    const ie = Math.min(4, d + 1);
    if (h(ie), p(!1), R("roots"), ie > u) {
      c(ie);
      try {
        localStorage.setItem(Ef, String(ie));
      } catch {
      }
    }
  }
  const he = (ie, ce) => d < 2 || d === 2 && m && Dd.has(ce) || d === 3 && (S === "all" || S === "roots" && zd(ie)), _e = wf.filter((ie) => he(ie.midi, Ge(ie))).map((ie) => ({
    ...ie,
    label: d < 2 || d === 2 && m || d === 3 && S === "all" ? $e(ie.midi) : "A",
    kind: d < 2 && I?.string === ie.string && I?.fret === ie.fret ? "playing" : zd(ie.midi) ? "answer" : Dd.has(Ge(ie)) ? "anchor" : "shape"
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
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: ho.map((ie, ce) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: ce === d ? "journey-step current" : "journey-step",
        "aria-current": ce === d ? "step" : void 0,
        disabled: ce > u,
        onClick: () => V(ce),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: ce > u ? "🔒" : ce < u ? "✓" : ce + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: ie.title })
        ]
      },
      ie.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: ho[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: ho[d].detail }),
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
              ja.length,
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
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": m, onClick: () => p((ie) => !ie), children: m ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => V(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((ie) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: ie.value,
                  checked: S === ie.value,
                  onChange: () => R(ie.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: ie.name })
            ] }, ie.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => P === "once" ? X() : void W("once"), children: P === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => P === "transition" ? X() : void W("transition"), children: P === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: P === "whole" ? I && d < 2 ? `Nyt soi ${$e(I.midi, !1, !0)} · ${an[I.string]}-kieli, nauha ${I.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : P === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : P === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          sr,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: _e,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? m ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? S === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : S === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d === 3 && /* @__PURE__ */ a.jsx(yf, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: ne, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
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
const Yr = "musiikin-kartta:skaalapolku:v1", va = "musiikin-kartta:skaalapolku:position-2:v1", po = "musiikin-kartta:skaalapolku:position-3:v1", ka = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Sa = "musiikin-kartta:skaalapolku:active-position:v1", Cf = "musiikin-kartta:skaalapolku:tempo:v1", tr = 75, To = 40, Mo = 140;
function Qm() {
  try {
    const r = localStorage.getItem(Cf);
    if (r === null) return tr;
    const s = Number(r);
    return Number.isInteger(s) && s >= To && s <= Mo && s % 5 === 0 ? s : tr;
  } catch {
    return tr;
  }
}
const mo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Bd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(r = Yr) {
  try {
    const s = Number(localStorage.getItem(r));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function vo() {
  try {
    const r = localStorage.getItem(Sa);
    return r === "3" && En(ka) === 4 ? 3 : En(Yr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Ym() {
  try {
    return En(va) === 4 && localStorage.getItem(Sa) === "bridge";
  } catch {
    return !1;
  }
}
function Jm({ onBack: r }) {
  const [s, u] = O.useState(vo), [c, d] = O.useState(Ym), [h, m] = O.useState(() => ({
    1: En(Yr),
    2: En(va),
    3: En(po)
  })), [p, S] = O.useState(() => En(vo() === 3 ? po : vo() === 2 ? va : Yr)), R = h[s], [k, C] = O.useState(!1), [P, $] = O.useState("roots"), [b, w] = O.useState(Qm), [E, z] = O.useState(null), [N, F] = O.useState(null), [I, X] = O.useState(""), W = O.useRef(new Do()), M = O.useRef(0);
  function V(G) {
    const oe = Math.max(To, Math.min(Mo, G));
    w(oe), W.current.setLoopTempo(oe);
    try {
      localStorage.setItem(Cf, String(oe));
    } catch {
    }
  }
  function ne() {
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
  const he = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [s])[0].positions[0], _e = he.strings.flatMap((G, oe) => G.map((B) => ht(oe, B))).sort((G, oe) => G.midi - oe.midi || oe.string - G.string), ie = [..._e, ..._e.slice(1, -1).reverse()], ce = N === null ? null : ie[N], Te = s === 1 ? [69, 72, 69, 67, 64, 67, 69] : s === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], H = he.start, le = he.end, de = (G) => Ke(G) === 9, Q = (G) => p < 2 ? !0 : p === 2 ? k && de(G) : P === "scale" || P === "roots" && de(G), se = _e.filter((G) => Q(G.midi)).map((G) => ({
    ...G,
    label: p < 2 || p === 3 && P === "scale" ? $e(G.midi) : "A",
    kind: p < 2 && ce?.string === G.string && ce.fret === G.fret ? "playing" : de(G.midi) ? "answer" : "shape"
  }));
  async function Z(G) {
    const oe = ++M.current;
    W.current.stop(), F(null), X(""), z(G);
    try {
      G === "phrase" ? await W.current.play(Te) : await W.current.loop(ie.map((B) => B.midi), (B) => {
        oe === M.current && F(B);
      }, p === 2 ? b : tr);
    } catch (B) {
      oe === M.current && X(Sf(B));
    } finally {
      oe === M.current && (z(null), F(null));
    }
  }
  function g() {
    ne();
    const G = Math.min(4, p + 1);
    if (S(G), C(!1), $("roots"), G > R) {
      m((B) => ({ ...B, [s]: G }));
      const oe = s === 1 ? Yr : s === 2 ? va : po;
      try {
        localStorage.setItem(oe, String(G));
      } catch {
      }
    }
  }
  function D(G) {
    G > R || (ne(), S(G), C(!1), $("roots"));
  }
  function me(G) {
    if (!(G === 2 && h[1] < 4) && !(G === 3 && En(ka) < 4)) {
      ne(), d(!1), u(G), S(h[G]), C(!1), $("roots"), X("");
      try {
        localStorage.setItem(Sa, String(G));
      } catch {
      }
    }
  }
  function Se() {
    if (!(h[2] < 4)) {
      ne(), d(!0), C(!1), X("");
      try {
        localStorage.setItem(Sa, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ a.jsx(Wm, { onBack: r, onPosition: me }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ne(), r();
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
      le,
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
          onClick: Se,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": s === 3,
          disabled: En(ka) < 4,
          onClick: () => me(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${s} harjoitukset`, children: mo.map((G, oe) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: oe === p ? "journey-step current" : "journey-step",
        "aria-current": oe === p ? "step" : void 0,
        disabled: oe > R,
        onClick: () => D(oe),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: oe > R ? "🔒" : oe < R ? "✓" : oe + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: oe === 4 ? `Positio ${s} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: p === 4 ? `Positio ${s} harjoiteltu` : mo[p].title }),
        /* @__PURE__ */ a.jsx("span", { children: p === 4 ? "Valmis" : `Harjoitus ${p + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: mo[p].detail }),
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
              disabled: b <= To,
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
              disabled: b >= Mo,
              onClick: () => V(b + 5),
              children: "+ 5"
            }
          ),
          b !== tr && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(tr),
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
              onClick: () => E === "loop" ? ne() : void Z("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? ne() : void Z("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        p !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? ce && p < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${$e(ce.midi, !1, !0)} · ${an[ce.string]}-kieli, nauha ${ce.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        I && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: I }),
        p >= 1 && p <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          p === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": k, onClick: () => C((G) => !G), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => D(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          p === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Bd.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
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
          /* @__PURE__ */ a.jsx(sr, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: le, fixed: "box" }, marks: se, disabled: !0, caption: `A-mollipentatoninen, positio ${s}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            p < 2 ? "Vihreällä merkitty A on pohjasävel." : p === 3 ? Bd.find((G) => G.value === P).note : k ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        p === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(sr, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: le, fixed: "box" }, marks: se, disabled: !0, caption: `Position ${s} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        p === 3 && /* @__PURE__ */ a.jsx(yf, {}, s),
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
        s === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => me(2), children: "Siirry positioon 2 →" }) : s === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => me(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(ka) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Zi = [0, 2, 4, 5, 7, 9, 11], Xm = 1200, ha = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Zm({ onBack: r }) {
  const [s, u] = O.useState(0), [c, d] = O.useState([]), [h, m] = O.useState(!1), [p, S] = O.useState(""), [R, k] = O.useState(0), [C, P] = O.useState(!1), $ = s >= Zi.length, b = Zi[Math.min(s, Zi.length - 1)], w = lr(ha.strings, ha.min, ha.max).filter((M) => Ke(M.midi) === b), E = w.filter((M) => !c.includes(Ge(M))), z = E.length === 0 && !$, N = !z && h ? E[0] : void 0;
  O.useEffect(() => {
    if (!C || !z) return;
    const M = window.setTimeout(() => {
      u((V) => V + 1), d([]), m(!1), S("");
    }, Xm);
    return () => window.clearTimeout(M);
  }, [C, z]);
  const F = [
    ...w.filter((M) => c.includes(Ge(M))).map((M) => ({ ...M, kind: "answer", label: $e(M.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function I(M) {
    if ($ || z) return;
    const V = Ge(M);
    if (Ke(M.midi) !== b) {
      k((_e) => _e + 1), S(`Valitsit sävelen ${$e(M.midi)}. Etsi ${$e(b)}.`);
      return;
    }
    if (c.includes(V)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, V];
    d(ne), m(!1);
    const he = w.length - ne.length;
    S(he ? `Oikein! ${$e(b)} löytyi ${an[M.string]}-kieleltä (${Ni(M.fret)}). Vielä ${he}.` : `Löysit kaikki ${w.length} ${$e(b)}-säveltä tällä alueella.`);
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
          $e(b),
          "-sävelet"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sävel ",
          s + 1,
          " / ",
          Zi.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        $e(b),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ a.jsx(
        sr,
        {
          area: ha,
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
          s === Zi.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: X, children: s === Zi.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const qm = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, ko = ["C", "G", "D", "Em"], Kd = ["C", "G", "D", "Em", "Am", "E", "A"], ev = { min: 0, max: 3, fixed: "" };
function Hd(r) {
  const s = [...r];
  for (let u = s.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [s[u], s[c]] = [s[c], s[u]];
  }
  return s;
}
function tv({ onBack: r }) {
  const [s, u] = O.useState(4), [c, d] = O.useState(() => Hd(ko)), [h, m] = O.useState(0), [p, S] = O.useState(null), [R, k] = O.useState([]), [C, P] = O.useState(0), $ = h >= c.length, b = qm[c[Math.min(h, c.length - 1)]], w = s === 4 ? ko : Kd, E = b.frets.flatMap((M, V) => M === null ? [] : [V]), z = b.frets.flatMap((M, V) => M === null ? [V] : []), N = { ...ev, strings: E }, F = b.frets.flatMap((M, V) => M === null ? [] : [{
    ...ht(V, M),
    kind: M === 0 ? "anchor" : "shape",
    label: M === 0 ? "○" : "●"
  }]);
  function I(M = s) {
    u(M), d(Hd(M === 4 ? ko : Kd)), m(0), S(null), k([]), P(0);
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
        sr,
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
const ye = (r, s) => ({ first: r, ...s ? { second: s } : {} }), nr = () => [
  ye("Gm", "F"),
  ye("Gm"),
  ye("B♭", "F"),
  ye("Gm"),
  ye("Gm", "F"),
  ye("Gm"),
  ye("E♭", "F"),
  ye("Gm")
], ir = () => [
  ye("B♭", "F"),
  ye("Gm", "Dm"),
  ye("E♭", "F"),
  ye("Gm", "Dm")
], rr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], _f = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], nv = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: nr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ir(), ye("E♭"), { ...ye("E♭"), passingBass: "F" }],
    lyrics: rr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ye("Gm", "F"), ye("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: nr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ir(), ye("E♭"), ye("F")],
    lyrics: rr
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
    bars: nr(),
    lyrics: _f
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ir(), ye("E♭", "F"), ye("Gm")],
    lyrics: rr
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
], iv = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: nr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ir(), ye("E♭"), ye("E♭")],
    lyrics: rr
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: nr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ir(), ye("E♭"), ye("F")],
    lyrics: rr
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
    bars: nr(),
    lyrics: _f
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ir(), ye("B♭", "F"), ye("Gm"), ye("E♭", "F"), ye("Gm")],
    lyrics: rr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ye("E♭", "F"), ye("Gm", "F"), ye("E♭", "F"), ye("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], or = {
  acoustic: nv,
  normal: iv
}, rv = "normal", Po = "yksi-sointu-kaksi-askelta", zo = {
  acoustic: Po + "-akustinen",
  normal: Po + "-normaali"
}, Tf = (r) => r === Po || Object.values(zo).includes(r ?? "");
function sv(r) {
  const s = Object.entries(zo).find(([, u]) => u === r);
  return s ? s[0] : null;
}
const av = (r) => zo[r], Ud = (r) => {
  const s = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
function Vo(r, s = "acoustic") {
  const u = or[s], c = u[r], d = u[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Mf(r, s = "acoustic") {
  const u = or[s], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    d = C;
  const h = u[d];
  let m = 0;
  for (; m + 1 < h.bars.length && c >= es(d, m + 1, s); )
    m++;
  const p = es(d, m, s), S = Vo(d, s) / 4;
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
function es(r, s, u = "acoustic") {
  return or[u][r].start + Vo(r, u) * s;
}
function lv(r) {
  return or[r].flatMap((s, u) => s.bars.flatMap((c, d) => {
    const h = es(u, d, r), m = { section: s, sectionIndex: u, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [m];
    const p = Vo(u, r) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: h + p }];
  }));
}
function ov(r, s = "acoustic", u = !1) {
  const c = or[s], d = Mf(r, s), h = d.section.bars[d.barIndex], m = d.beat >= 3 && h.second ? "second" : "first", p = lv(s), S = p.findIndex(($) => $.sectionIndex === d.sectionIndex && $.barIndex === d.barIndex && $.part === m), k = [
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
function uv(r) {
  const s = r.filter((p) => p.lyrics?.length), u = (p) => 1 + (p.lyrics?.length ?? 0), c = s.reduce((p, S) => p + u(S), 0);
  let d = 0, h = 1 / 0, m = 0;
  for (let p = 0; p <= s.length; p++) {
    const S = Math.abs(c - 2 * m);
    (S < h || S === h && m >= c - m) && (d = p, h = S), p < s.length && (m += u(s[p]));
  }
  return [s.slice(0, d), s.slice(d)];
}
const Ao = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Pf = "musiikin-kartta:kappale-sointuvihjeet:v1", ya = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Gd = {
  showChords: !0,
  level: 0,
  fadeOrder: ya
};
function pa(r, s) {
  return !s.showChords || s.level >= s.fadeOrder[r];
}
function Wd(r) {
  if (!r) return { ...Gd, fadeOrder: { ...ya } };
  try {
    const s = JSON.parse(r);
    if (!s || typeof s != "object") throw new Error("Invalid settings");
    const u = s, c = u.level, d = { ...ya }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const m = h;
      for (const p of Ao)
        [1, 2, 3, 4].includes(m[p]) && (d[p] = m[p]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Gd, fadeOrder: { ...ya } };
  }
}
function cv() {
  try {
    return Wd(localStorage.getItem(Pf));
  } catch {
    return Wd(null);
  }
}
const dv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function fv(r) {
  const s = dv.exec(r.trim());
  if (!s) return r;
  const [, u, , c = "", d = ""] = s;
  return u + "5" + c + d;
}
const hv = (r, s) => s === "power" ? fv(r) : r, pv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], mv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function vv({ version: r, position: s, loop: u = !1, onSeek: c }) {
  const [d, h] = O.useState(cv), [m, p] = O.useState(null), [S, R] = O.useState(!1), [k, C] = O.useState("full"), P = (H) => hv(H, k), $ = or[r], b = Mf(s, r), { section: w, sectionIndex: E, barIndex: z, beat: N, chord: F } = b, I = N >= 3 && w.bars[z].second ? "second" : "first", X = (H, le, de) => `${r}:${H}:${le}:${de}`, W = (H, le) => X(w.id, H, le), M = W(z, I), V = pa(F, d), ne = V && m === M, he = (H, le, de) => !pa(H, d) || m === W(le, de), _e = d.showChords && d.level === 0, ie = Ao.filter((H) => pa(H, d)).length, { nextSection: ce } = ov(s, r, u), Te = !!ce && pa(ce.firstChord, d);
  return O.useEffect(() => {
    p(null);
  }, [M]), O.useEffect(() => {
    try {
      localStorage.setItem(Pf, JSON.stringify(d));
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
              h((le) => ({ ...le, showChords: H.target.checked })), p(null);
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
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, le]) => /* @__PURE__ */ a.jsxs("label", { children: [
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
          /* @__PURE__ */ a.jsx("span", { children: le })
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
              const le = Number(H.target.value);
              h((de) => ({ ...de, level: le })), p(null);
            },
            children: pv.map((H) => /* @__PURE__ */ a.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ie === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ie}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Ao.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
        H,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (le) => {
              const de = Number(le.target.value);
              h((Q) => ({ ...Q, fadeOrder: { ...Q.fadeOrder, [H]: de } })), p(null);
            },
            children: mv.map((le) => /* @__PURE__ */ a.jsx("option", { value: le.value, children: le.label }, le.value))
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
              const le = $.find((de) => de.id === H.target.value);
              le && c(le.start);
            },
            children: $.map((H) => /* @__PURE__ */ a.jsxs("option", { value: H.id, children: [
              Ud(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          V && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: V && !ne ? "?" : P(F) }),
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
              onClick: () => p(ne ? null : M),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        ce && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: Te ? "?" : P(ce.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, le) => {
      const de = le === z, Q = de && (N < 3 || !H.second), se = de && N >= 3 && !!H.second, Z = he(H.first, le, "first"), g = H.second ? he(H.second, le, "second") : !1, D = (Z ? P(H.first) : "sointu piilossa") + (H.second ? " " + (g ? P(H.second) : "sointu piilossa") : "") + (_e && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (_e && H.possibleChord ? " (" + P(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (de ? " active" : ""),
          "aria-pressed": de,
          "aria-label": "Tahti " + (le + 1) + ": " + D + ". Siirry kohtaan " + Ud(es(E, le, r)),
          onClick: () => c(es(E, le, r)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              le + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: Q && Z ? "now" : "", children: Z ? P(H.first) : "?" }),
              H.second && /* @__PURE__ */ a.jsx("strong", { className: se && g ? "now" : "", children: g ? P(H.second) : "?" })
            ] }),
            _e && H.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            _e && H.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              P(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        le
      );
    }) }),
    S ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: uv($).map((H, le) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: H.map((de) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: de.title }),
        de.lyrics?.map((Q, se) => /* @__PURE__ */ a.jsx("p", { children: Q }, se))
      ] }, de.id)) }, le)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, le) => /* @__PURE__ */ a.jsx("p", { children: H }, le))
    ] }),
    _e && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const wa = 7, kv = { name: "bluesasteikko", base: Fe.SCALES.mp.base, add: [[6, "♭5"]] }, yo = [
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
    scale: kv,
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
function yv(r) {
  return Fe.scaleNotes(r).map(([s, u]) => Fe.noteName(wa, s, u));
}
const Af = (r) => r === "pentatonic" ? 5 : 7;
function gv(r, s, u) {
  const c = s.filter((p) => p >= 1 && p <= Af(r.system)), d = Fe.fingeringBoxes(wa, r.scale, r.system, c, u);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([p]) => (wa + p) % 12), m = (p, S) => S >= 0 && S <= u && h.includes((Fe.OPEN_PITCHES[p] + S) % 12);
  return d.map((p) => ({ ...p, positions: p.positions.map((S) => {
    const R = S.strings.map((C, P) => {
      if (!C.length) return C;
      const $ = C[C.length - 1];
      return m(P, $ + 1) ? [...C.slice(0, -1), $ + 1] : C;
    }), k = R.flat();
    return { ...S, strings: R, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Qd = 17;
function xv({ open: r }) {
  const [s, u] = O.useState("mp"), [c, d] = O.useState({ pentatonic: [], "3nps": [] }), [h, m] = O.useState(!1), [p, S] = O.useState(!1), R = O.useRef(null), k = yo.find((E) => E.id === s) ?? yo[0], C = c[k.system], P = gv(k, C, Qd), $ = P.some((E) => E.positions.length > 0), b = Fe.renderBoard(wa, k.scale, Qd, {
    automatic: !0,
    boxes: P,
    onlyBoxNotes: $ && h,
    label: k.title + (C.length ? ", " + C.map((E) => "boksi " + E).join(", ") : "")
  });
  O.useEffect(() => {
    const E = R.current;
    !E || !r || P.length === 1 && Fe.revealPositions(E, ".box-highlight");
  }, [b, r]);
  function w(E, z) {
    d((N) => ({ ...N, [k.system]: z ? [...N[k.system], E].sort((F, I) => F - I) : N[k.system].filter((F) => F !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: s, onChange: (E) => u(E.target.value), children: yo.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: k.title }),
      /* @__PURE__ */ a.jsx("span", { children: yv(k.scale).join(" · ") })
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
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Af(k.system) }, (E, z) => z + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
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
let Rf = null;
function jv() {
  return sv(new URLSearchParams(location.search).get("kappale")) ?? Rf ?? rv;
}
function Sv(r) {
  Rf = r;
  const s = new URL(location.href);
  Tf(s.searchParams.get("kappale")) && (s.searchParams.set("kappale", av(r)), history.replaceState(history.state, "", s.pathname + s.search + s.hash));
}
const wv = {
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
}, Yd = 1e-3;
function Jd(r, s) {
  try {
    r.currentTime = s;
  } catch {
  }
}
function Xd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const s = Math.floor(r);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function Ev({ onBack: r }) {
  const s = O.useRef(null), u = O.useRef(null), c = O.useRef(null), d = O.useRef(0), h = O.useRef(new kf()), m = O.useRef(null), [p, S] = O.useState(jv), R = wv[p], [k, C] = O.useState(!1), [P, $] = O.useState(!0), [b, w] = O.useState(!0), [E, z] = O.useState(!1), [N, F] = O.useState(!1), [I, X] = O.useState(!1), [W, M] = O.useState(um), [V] = O.useState(() => vf() ? "element" : "webaudio"), ne = O.useRef(null), [he, _e] = O.useState(0), [ie, ce] = O.useState(0), [Te, H] = O.useState("");
  function le(j = !1, Y) {
    const re = s.current;
    if (re)
      for (const ae of [u.current, c.current])
        ae && (!Y || ae === Y) && h.current.align(re, ae, j);
  }
  function de() {
    return [
      ["backing", s.current, !0],
      ["guitar", u.current, P],
      ["vocals", c.current, b]
    ];
  }
  function Q(j = W, Y) {
    for (const [re, ae, fe] of de()) {
      if (!ae) continue;
      const ke = Rd(re, j, Y?.[re] ?? fe);
      if (V === "webaudio" && ne.current?.routed(ae))
        ne.current.setLevel(ae, ke);
      else
        try {
          ae.volume = Rd(re, j);
        } catch {
        }
    }
  }
  function se(j) {
    M(j), cm(j), Q(j);
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
      _e(0), ce(0), H(""), S(j), Sv(j);
    }
  }
  function D(j) {
    const Y = s.current;
    if (!Y || !Number.isFinite(j)) return;
    const re = Math.max(0, Math.min(j, Number.isFinite(Y.duration) ? Y.duration : j));
    m.current = re, _e(re), Jd(Y, re);
  }
  function me(j) {
    const Y = m.current;
    if (Y === null || j !== s.current || j.seeking) return;
    const re = Number.isFinite(j.duration) ? Math.min(Y, j.duration) : Y;
    if (re !== Y && (m.current = re, _e(re)), Math.abs(j.currentTime - re) < Yd) return;
    const ae = j.seekable;
    for (let fe = 0; fe < ae.length; fe++)
      if (ae.start(fe) <= re && re <= ae.end(fe)) {
        Jd(j, re);
        return;
      }
  }
  function Se(j) {
    if (j !== s.current) return;
    const Y = m.current;
    if (Y === null)
      _e(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - Y) < Yd) {
      m.current = null, le(!0);
      return;
    }
    j.paused || le();
  }
  async function G() {
    const j = s.current, Y = u.current, re = c.current;
    if (!j || !Y || !re) return;
    if (k) {
      Z();
      return;
    }
    H("");
    const ae = m.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && ae >= j.duration - 0.05 && D(0), me(j), V === "webaudio" && (ne.current ??= new jm(), ne.current.unlock()))
      for (const ke of [j, Y, re]) ne.current.route(ke);
    Q(), Y.muted = !P, re.muted = !b, le(!0);
    const fe = ++d.current;
    try {
      P || Y.pause(), b || re.pause();
      const ke = [j.play(), ...P ? [Y.play()] : [], ...b ? [re.play()] : []];
      if (await Promise.all(ke), fe !== d.current) return;
      le(), C(!0);
    } catch {
      if (fe !== d.current) return;
      Z(), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function oe(j, Y, re) {
    if (!j) return;
    if (j.muted = !Y, !Y) {
      j.pause();
      return;
    }
    !s.current || !k || (le(!0, j), j.play().catch(() => H(re + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function B(j) {
    $(j), Q(W, { guitar: j }), oe(u.current, j, "Kitararaita");
  }
  function te(j) {
    w(j), Q(W, { vocals: j }), oe(c.current, j, "Lauluraita");
  }
  return O.useEffect(() => {
    const j = () => {
      document.hidden && Z();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), d.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), ne.current?.close();
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
            max: ie > 0 ? ie : 1,
            step: 0.1,
            value: Math.min(he, ie > 0 ? ie : 1),
            disabled: ie <= 0,
            onChange: (j) => D(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Xd(he),
          " / ",
          Xd(ie)
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
              onChange: (j) => te(j.target.checked)
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
              onChange: (j) => se(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            W,
            " %"
          ] })
        ] })
      ] }),
      Te && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: Te }),
      /* @__PURE__ */ a.jsx(
        "audio",
        {
          ref: s,
          src: R.backing,
          preload: "metadata",
          loop: E,
          onLoadedMetadata: (j) => {
            j.currentTarget === s.current && (ce(j.currentTarget.duration), me(j.currentTarget));
          },
          onProgress: (j) => me(j.currentTarget),
          onCanPlay: (j) => me(j.currentTarget),
          onTimeUpdate: (j) => Se(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== s.current || j.currentTarget.loop || (m.current = null, u.current?.pause(), c.current?.pause(), C(!1), _e(j.currentTarget.duration));
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
            s.current?.paused && le(!0);
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
            s.current?.paused && le(!0);
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
      /* @__PURE__ */ a.jsx(vv, { version: p, position: he, loop: E, onSeek: D })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (j) => {
        j.preventDefault(), X((Y) => !Y);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(xv, { open: I })
    ] })
  ] });
}
const Ro = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, ga = (r, s = 1) => r.toFixed(s).replace(".", ",").replace("-", "−"), Lf = (r) => {
  const s = Math.round(r);
  return (s > 0 ? "+" : s < 0 ? "−" : "±") + Math.abs(s);
}, Lo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function Nv(r, s, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Lo(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function $f({ frame: r, threshold: s }) {
  const u = r?.rms ?? 0, c = ar(u), d = (r?.peak ?? 0) >= 0.98 ? "clip" : u >= s ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${ga(Math.max(-60, c), 0)} desibeliä${u >= s ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${bd(u) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${bd(s) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Cv({ mic: r, frame: s, heard: u, s: c, now: d }) {
  const h = jf(r.phase, s), m = u && d - u.at < 1500 ? u : null, p = h === "pitch" || h === "untuned" || m ? m ? `Kuulen: ${$e(m.midi, c.flats, !0)} · ${Lf(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Ro[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: p }),
    r.phase === "on" && /* @__PURE__ */ a.jsx($f, { frame: s, threshold: c.minRms })
  ] });
}
function _v({ mic: r, frame: s, heard: u, accepted: c, now: d, s: h, change: m, devices: p, locked: S, calibrating: R, calibration: k, onTest: C, onStop: P, onCalibrate: $ }) {
  const b = O.useId(), w = jf(r.phase, s), E = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", z = r.phase === "on", N = u && d - u.at < 1500 ? u : null, F = N && (w === "pitch" || w === "untuned"), I = z && (s?.peak ?? 0) >= 0.98, X = r.phase === "error" ? [] : Nv(w, h, r.info, I), W = !h.device || p.some((V) => V.deviceId === h.device), M = (V, ne) => m({ ...h, [V]: ne });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Ro[w],
      w === "pitch" && N ? ` ${$e(N.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Lo(r.info)}.` : r.phase === "error" ? r.error : Ro[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          Lo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(s?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx($f, { frame: s, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ga(Math.max(-60, ar(s?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? $e(N.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${ga(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Lf(N.cents),
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
      $e(c.midi, h.flats, !0),
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
              p.map((V, ne) => /* @__PURE__ */ a.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${ne + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              ga(ar(h.minRms), 0),
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
const Tv = (r) => r.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, Zd = (r, s) => Tv(r).find(([u]) => u === s)?.[1], Of = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Mv = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Pv(r, s) {
  return s.choices === "note" ? "Valitse sävelnimi." : s.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Av(r, s, u, c, d) {
  return s.choices === "degree" ? `Oikein! ${Jr(r.root, s.interval, s.degree)} on ${s.degree}. aste.` : Of(r) ? `Oikein! ${s.degree}. aste on ${Jr(r.root, s.interval, s.degree)}.` : r.mode === "interval" ? `Oikein! ${$e(s.reference, r.flats, !0)} → ${s.name} on ${Xr[s.interval]} ${Mv(s)}.` : r.mode === "notes" ? u === "board" && d ? `Oikein! ${$e(d.midi, r.flats)} on ${tf[d.string]}: ${Ni(d.fret)}.` : `Oikein! Soitit sävelen ${$e(c, r.flats, !0)}.` : `Oikein! Sävel oli ${s.name}.`;
}
function Rv(r, s, u, c, d) {
  if (u === "note") return `Ei ${$e(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Zd(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(d.midi) === Ke(s.midi);
  if (r.mode === "notes")
    return d.string !== s.position.string ? `Tuo on ${an[d.string]}-kieli. Etsi sävel ${Fo[s.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${s.name}.` : `Tuo on ${$e(d.midi, r.flats)}. Etsi ${s.name}.`;
  if (Of(r)) {
    const m = Ke(d.midi - r.root), p = Zd(r, m), S = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return p ? h && s.check === "pitch" && d.midi !== s.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${s.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${s.degree}. aste sen sisältä.` : `Tuo on ${Jr(r.root, m, p)} eli ${p}. aste. Etsi ${s.degree}. aste.` : `Tuo on ${$e(d.midi, r.flats)}, joka ei kuulu ${S}. Etsi ${s.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${$e(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Lv(r, s, u) {
  const c = $e(u, r.flats, !0);
  return Ke(u) === Ke(s.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Ff(r, s = !1) {
  const u = r.split(":"), c = (m) => Number(u[m]), d = (...m) => m.every((p) => Number.isInteger(c(p))), h = (m, p) => an[m] ? `${an[m]}-kieli, ${Ni(p)}` : null;
  switch (u[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${$e(c(1), s)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && d(1) ? `Kuule ja toista: ${$e(c(1), s, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Xr[c(1)] ? `${Xr[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!d(1, 3) || !Ei[m]) return null;
      const p = Ei[m].tones.find(([S]) => S === c(3))?.[1];
      return p ? `${nf(c(1), m)}: ${p}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = Fe.SCALES[u[2]];
      if (!d(1) || !m) return null;
      const p = `${oi(c(1))}-${m.name}`;
      if (u.length === 5 && d(3)) {
        const S = Fe.scaleNotes(m).find(([R]) => R === c(3))?.[1];
        return S ? `${p}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${oi(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && d(3)) {
        const p = Ei.maj.tones.find(([S]) => S === c(3))?.[1];
        return p ? `${m}: ${p}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function qd(r) {
  return Object.entries(r).flatMap(([s, u]) => {
    const [c, d, h, ...m] = s.split(":");
    return !m.length || !["solo", "guided"].includes(h) ? [] : [{ key: s, input: c, check: d, guided: h === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const $o = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", $v = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Ov(r) {
  const s = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${er(r.mode)}${r.hints ? ` · ${Ea[r.hints].title}` : ""} · ${s} · keskimäärin ${$o(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Fv({ store: r, s, locked: u, changed: c }) {
  const [d, h] = O.useState(""), m = O.useRef(null), { recent: p, sessions: S, stats: R } = r.data, k = Ci(s), C = sf(s), P = [...new Set(p.map((N) => N.mode))].map((N) => {
    const F = p.filter((I) => I.mode === N);
    return { mode: N, ...So(F), last: Math.max(...F.map((I) => I.at)) };
  }).sort((N, F) => F.last - N.last), $ = qd(R).filter((N) => !N.guided && N.mode === s.mode && N.input === k && N.check === C && N.stat.attempts >= 3).map((N) => ({ ...N, score: bo(N.stat), text: Ff(N.item, s.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, F) => N.score - F.score).slice(0, 5), b = qd(R).reduce((N, F) => N + F.stat.attempts, 0);
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
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: er(N.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: N.count }),
          /* @__PURE__ */ a.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: N.guided }),
          /* @__PURE__ */ a.jsx("td", { children: $o(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    $.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        er(s.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: $.map((N) => /* @__PURE__ */ a.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(Zr(N.stat) * 100),
        " % heti oikein · ",
        $o(qr(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: b ? `Harjoituksessa ${er(s.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        $v[s.input],
        ") ja tarkistuksella (",
        s.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(Qp, { area: { strings: s.strings, min: s.min, max: s.max, fixed: "" }, stats: R, input: s.input, check: s.check, flats: s.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ a.jsx("ul", { children: S.slice(-10).reverse().map((N) => /* @__PURE__ */ a.jsx("li", { children: Ov(N) }, N.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
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
function bv() {
  try {
    return new Cd(localStorage);
  } catch {
    return new Cd();
  }
}
const ef = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Iv = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Dv = [0, 2, 4, 5, 7, 9, 11];
function zv(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Vv() {
  const [r] = O.useState(bv), [s, u] = O.useState(() => Dp(location.search, r.data.settings)), [, c] = O.useReducer((L) => L + 1, 0), d = O.useRef(null), h = O.useRef(new Bm()), m = O.useRef(new Do()), p = O.useRef(0), S = O.useRef(), R = O.useRef(), k = O.useRef(null), C = O.useRef(0), P = O.useRef(null), $ = O.useRef(s);
  $.current = s;
  const [b, w] = O.useState({ phase: "off", purpose: "none" }), E = O.useRef(b), z = (L) => {
    E.current = L, w(L);
  }, [N, F] = O.useState(null), [I, X] = O.useState(null), [W, M] = O.useState(null), [V, ne] = O.useState(0), [he, _e] = O.useState([]), [ie, ce] = O.useState(!1), [Te, H] = O.useState(!1), [le, de] = O.useState(""), [Q, se] = O.useState("info"), [Z, g] = O.useState(""), [D, me] = O.useState(0), [Se, G] = O.useState([]), [oe, B] = O.useState([]), [te, j] = O.useState(null), [Y, re] = O.useState(!1), [ae, fe] = O.useState(""), [ke, Pe] = O.useState(""), [Ce, be] = O.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : Tf(L.get("kappale")) ? "songs" : sm(L.get("polku"));
  });
  function We() {
    be(null);
    const L = new URL(location.href);
    L.searchParams.has("polku") && (L.searchParams.delete("polku"), history.replaceState(history.state, "", L.pathname + L.search + L.hash));
  }
  const Qe = () => {
    Cm().then(_e).catch(() => {
    });
  };
  function He() {
    clearTimeout(R.current), k.current = null, re(!1);
  }
  function Je() {
    F(null), X(null), M(null);
  }
  function ot() {
    h.current.stop(), He(), z({ phase: "off", purpose: "none" }), Je();
  }
  async function Ye(L) {
    if (h.current.active && E.current.phase === "on")
      return He(), z({ ...E.current, purpose: L }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), Je();
    try {
      const ee = await h.current.start($.current.device, {
        ...ef($.current),
        onFrame: (Ie) => Qt.current.frame(Ie),
        onStableNote: (Ie) => Qt.current.stable(Ie)
      }, () => Qt.current.lost());
      return ee ? (z({ phase: "on", purpose: L, info: ee }), Qe(), !0) : !1;
    } catch (ee) {
      return z({ phase: "error", purpose: "none", error: Vm(ee) }), !1;
    }
  }
  function ze(L) {
    k.current?.push(L.rms);
    const ee = performance.now();
    ee - C.current < 66 || (C.current = ee, F(L), ne(ee), L.midi !== void 0 && L.frequency !== void 0 && X({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: ee }));
  }
  function nt(L) {
    E.current.purpose === "test" ? M(L) : E.current.purpose === "round" && Be(L.midi, "mic", void 0, L.heldMs);
  }
  function Vt() {
    const L = E.current.purpose === "round";
    He(), Je(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ee = d.current;
    L && ee && ["active", "feedback", "paused"].includes(ee.phase) && (Mt(), H(!1), ee.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Qt = O.useRef({ frame: ze, stable: nt, lost: Vt });
  Qt.current = { frame: ze, stable: nt, lost: Vt };
  function Et(L) {
    const ee = xa(L), Ie = ee.device !== $.current.device;
    $.current = ee, u(ee), r.settings(ee), g(""), h.current.active && (Ie && E.current.purpose === "test" ? (ot(), Ye("test")) : h.current.setOptions(ef(ee)));
  }
  function ln(L) {
    Pe(""), d.current = null, be(L);
  }
  function Yt() {
    fe(""), Ye("test");
  }
  function Jt() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (He(), k.current = [], re(!0), fe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const L = k.current ?? [];
      if (He(), L.length < 10) {
        fe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ee, noise: Ie, loud: $t } = Km(L);
      Et({ ...$.current, minRms: ee }), fe(`Taustakohina on ${Math.round(ar(Ie))} dB ja äänikynnys nyt ${Math.round(ar(ee))} dB. ${$t ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Mt() {
    p.current++, clearTimeout(S.current), m.current.stop();
  }
  function je(L, ee) {
    if (!L.results.length) return;
    const Ie = So(L.results);
    r.session({
      id: L.id,
      mode: L.settings.mode,
      count: Ie.count,
      first: Ie.first,
      ms: Ie.ms,
      solo: Ie.solo,
      soloFirst: Ie.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: ee
    });
  }
  async function Bt(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Mt();
    const ee = p.current;
    L.pause(), h.current.pause(), H(!0), se("info"), de("Kuuntele…"), c();
    try {
      await m.current.play(L.question.sound);
    } catch {
      ee === p.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ee !== p.current || d.current !== L || (L.resume(), h.current.resume(), H(!1), de(""), c());
  }
  async function Ne(L) {
    G([]), B([]), j(null), g(""), me(L.hintLevel), h.current.rearm(), se("info"), de(""), c(), L.question?.sound.length && await Bt(L);
  }
  async function Ae() {
    const L = $.current, ee = xo(L);
    if (ee) {
      g(ee);
      return;
    }
    Mt();
    const Ie = p.current;
    if (g(""), fe(""), Pe(""), fa(L)) {
      ce(!0);
      const ct = await Ye("round");
      if (Ie !== p.current) return;
      if (ce(!1), !ct) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && ot();
    const $t = new rm(L, () => r.data.stats, (ct) => r.record(ct));
    try {
      $t.start();
    } catch (ct) {
      E.current.purpose === "round" && ot(), g(ct instanceof Error ? ct.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = $t, requestAnimationFrame(() => P.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Ne($t);
  }
  function Re() {
    Mt(), ce(!1), ot();
  }
  function Be(L, ee, Ie, $t = 0) {
    const ct = d.current, Mn = ct?.question;
    if (!ct || !Mn || ct.phase !== "active") return;
    const fr = ct.answer(L, ee, Ie, $t);
    if (fr !== "ignored") {
      if (fr === "candidate")
        j(L), se("bad"), de(Lv(ct.settings, Mn, L));
      else if (fr === "wrong")
        Ie ? G((Vn) => [...Vn, Ie]) : B((Vn) => [...Vn, L]), se("bad"), de(Rv(ct.settings, Mn, ee, L, Ie));
      else if (j(null), se("good"), de(Av(ct.settings, Mn, ee, L, Ie)), je(ct, !1), ct.settings.advance) {
        const Vn = p.current;
        S.current = setTimeout(() => {
          Vn === p.current && rt();
        }, ee === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function rt() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      Mt();
      try {
        L.next();
      } catch (ee) {
        Lt(!1), g(ee instanceof Error ? ee.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        Lt(!0);
        return;
      }
      await Ne(L);
    }
  }
  function Lt(L = !1) {
    Mt(), H(!1), ce(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && ot();
    const ee = d.current;
    ee && (ee.stop(), je(ee, L)), j(null), me(0), G([]), B([]), g(""), Pe(L ? "complete" : "stopped"), se("info"), de(""), c();
  }
  function vt() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Mt(), H(!1), L.pause();
    const ee = E.current.purpose === "round";
    ee && ot(), se("info"), de(`Harjoitus on tauolla.${ee ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Xt() {
    const L = d.current;
    if (!L || L.phase !== "paused" || Te) return;
    Mt();
    const ee = p.current;
    if (g(""), fa(L.settings)) {
      ce(!0);
      const Ie = await Ye("round");
      if (ee !== p.current) return;
      if (ce(!1), !Ie) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), se("info"), de(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await Bt(L));
  }
  function Nn(L) {
    const ee = d.current;
    !ee || ee.phase !== "active" || (ee.useHint(L), me(L), c());
  }
  const vn = O.useRef({ hidden: () => {
  }, restored: () => {
  } });
  vn.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || Te ? vt() : E.current.phase !== "off" && E.current.phase !== "error" && (Mt(), ce(!1), ot());
    },
    restored: () => {
      ce(!1), H(!1), z({ phase: "off", purpose: "none" }), Je(), c();
    }
  }, O.useEffect(() => {
    Qe();
    const L = () => Qe();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const ee = () => {
      p.current++, clearTimeout(S.current), clearTimeout(R.current), h.current.stop(), m.current.stop(), zm(), d.current?.pause();
    }, Ie = () => {
      document.hidden && vn.current.hidden();
    }, $t = (ct) => {
      ct.persisted && vn.current.restored();
    };
    return document.addEventListener("visibilitychange", Ie), window.addEventListener("pagehide", ee), window.addEventListener("pageshow", $t), () => {
      ee(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ie), window.removeEventListener("pagehide", ee), window.removeEventListener("pageshow", $t);
    };
  }, []);
  const kn = O.useRef(null), ns = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${Te}`;
  O.useEffect(() => {
    const L = d.current, ee = P.current, Ie = document.activeElement;
    !L || !ee || !(Ie === document.body || ee.contains(Ie)) || (L.phase === "feedback" ? kn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Te && (Ie === document.body || Ie === kn.current) && ee.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ns]);
  const Oe = d.current, qe = !!Oe && ["active", "paused", "feedback"].includes(Oe.phase), Xe = qe ? Oe.settings : s, ut = qe ? Oe.question : void 0, Kt = !!ut && !!Oe?.answered, Zt = qe && Oe.phase === "paused" && !Te && !Kt, Ti = qe && Oe.phase === "active" && !Te, Cn = qe ? null : xo(s), Dn = qe || ie, ui = _i(Xe), ur = Jp(Xe), ci = ut && !Kt ? D : 0, cr = ut ? im(Xe, ut, Kt ? 2 : ci) : { marks: [], text: "" }, is = [...new Map([...cr.marks, ...Kt ? [] : Se.map((L) => ({ ...L, label: $e(L.midi, Xe.flats), kind: "wrong" }))].map((L) => [Ge(L), L])).values()], _n = qe && fa(Xe), rs = !!ut && !Zt && (ut.choices === "position" || is.length > 0), xt = Oe ? So(Oe.results) : null, Ca = !Oe || Xe.hints !== "fade" ? "" : Oe.index <= 3 ? " · vastaus näkyy" : Oe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", dr = Oe && !qe ? Oe.results.filter((L) => L.errors > 0 || L.hint) : [], [ss, as] = zv(Xe), Tn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), zn = r.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !qe && Ce === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx(lm, { onSelect: ln })
  ] }) : !qe && Ce === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx(Jm, { onBack: We })
  ] }) : !qe && Ce === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx(Zm, { onBack: We })
  ] }) : !qe && Ce === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx(tv, { onBack: We })
  ] }) : !qe && Ce === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx(Ev, { onBack: We })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Tn,
    zn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: ss, children: [
      "Lue tämän harjoituksen teoria: ",
      as,
      " →"
    ] }) }),
    Ce !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        qe && Lt(), We();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: Ce === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: Ce === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    qe ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: er(Xe.mode) }),
      " · ",
      Md(Xe)
    ] }) : Ce === "legacy" ? /* @__PURE__ */ a.jsx(Pd, { s, change: Et, locked: Dn, problem: Cn }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Pd, { s, change: Et, locked: Dn, problem: Cn })
    ] }),
    !qe && (Ce === "legacy" || fa(s)) && /* @__PURE__ */ a.jsx(
      _v,
      {
        mic: b,
        frame: N,
        heard: I,
        accepted: W,
        now: V,
        s,
        change: Et,
        devices: he,
        locked: ie,
        calibrating: Y,
        calibration: ae,
        onTest: Yt,
        onStop: ot,
        onCalibrate: Jt
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: P, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: er(Xe.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: qe ? `Kysymys ${Oe.index}${Oe.total ? " / " + Oe.total : " · vapaa harjoittelu"} · ${Ea[Xe.hints].title}${Ca}${Oe.phase === "paused" && !Te ? " · tauolla" : ""}` : ke === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !qe && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        Oe && Oe.results.length > 0 && xt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: ke === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: Iv(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          dr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(dr.map((L) => Ff(L.item, s.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Md(s) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: ie ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!Cn, onClick: () => {
          Ae();
        }, children: Oe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Oe && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      qe && ut && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: Zt ? "Harjoitus on tauolla." : ut.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: Zt ? "Kysymys palaa näkyviin, kun jatkat." : Te ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Pv(Xe, ut) }),
        Oe.hintLevel > 0 && !Kt && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Xe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        _n && /* @__PURE__ */ a.jsx(Cv, { mic: b, frame: N, heard: I, s: Xe, now: V }),
        ut.choices === "note" && !Zt && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Xe.accidentals ? Array.from({ length: 12 }, (L, ee) => ee) : Dv).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: oe.includes(L) ? "wrong" : Kt && L === ut.midi % 12 ? "right" : "", disabled: !Ti || oe.includes(L), onClick: () => Be(L, "note"), children: $e(L, Xe.flats) }, L)) }),
        ut.choices === "degree" && !Zt && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Xe.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[Xe.scale]) : Ei[Xe.chord].tones).map(([L, ee]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: oe.includes(L) ? "wrong" : Kt && L === ut.interval ? "right" : "", disabled: !Ti || oe.includes(L), onClick: () => Be(L, "degree"), children: ee }, L)) }),
        rs && /* @__PURE__ */ a.jsx(
          sr,
          {
            area: ur,
            marks: is,
            disabled: !Ti || ut.choices !== "position" || Xe.input === "mic",
            onAnswer: (L) => Be(L.midi, "board", L),
            caption: ui.fixed === "shape" ? `${Xe.shape}-muodon alue` : ui.fixed === "box" ? `Boksin ${Xe.box} alue` : "Otelauta"
          }
        ),
        !Kt && !Zt && ci > 0 && cr.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: cr.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${Q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: le }),
        te !== null && Oe.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Oe.confirmWrong(), j(null), de("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: Z }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          Oe.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: kn, onClick: () => {
            rt();
          }, children: Oe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Oe.phase === "active" && !Kt && !Te && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            ci === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Nn(Math.max(1, Oe.hintLevel)), children: Oe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            ci === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Nn(2), children: "Näytä vastaus" }),
            ci > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => me(0), children: "Piilota vihje" })
          ] }),
          ut.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Ti, onClick: () => {
            Bt(Oe);
          }, children: "Kuuntele uudelleen" }),
          Oe.phase === "paused" && !Te ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: ie, onClick: () => {
            Xt();
          }, children: ie ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Lt(), children: "Lopeta harjoitus" })
        ] }),
        Oe.phase === "feedback" && Xe.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !qe && Z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: Z })
    ] }),
    !qe && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        s.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Fe.CHROM[s.root])}&asteikko=${s.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: zp(s), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(Fv, { store: r, s, locked: Dn, changed: () => {
        const L = xa(r.data.settings);
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
Ap.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(Vv, {}));
//# sourceMappingURL=app.js.map
