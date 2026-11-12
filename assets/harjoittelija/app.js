function rm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var to = { exports: {} }, Bi = {}, no = { exports: {} }, Le = {};
var td;
function im() {
  if (td) return Le;
  td = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function $(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, w = {};
  function N(g, E, Z) {
    this.props = g, this.context = E, this.refs = w, this.updater = Z || F;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(g, E) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, E, "setState");
  }, N.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = N.prototype;
  function T(g, E, Z) {
    this.props = g, this.context = E, this.refs = w, this.updater = Z || F;
  }
  var A = T.prototype = new z();
  A.constructor = T, D(A, N.prototype), A.isPureReactComponent = !0;
  var H = Array.isArray, X = Object.prototype.hasOwnProperty, te = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(g, E, Z) {
    var ve, Te = {}, Ce = null, S = null;
    if (E != null) for (ve in E.ref !== void 0 && (S = E.ref), E.key !== void 0 && (Ce = "" + E.key), E) X.call(E, ve) && !P.hasOwnProperty(ve) && (Te[ve] = E[ve]);
    var b = arguments.length - 2;
    if (b === 1) Te.children = Z;
    else if (1 < b) {
      for (var I = Array(b), ee = 0; ee < b; ee++) I[ee] = arguments[ee + 2];
      Te.children = I;
    }
    if (g && g.defaultProps) for (ve in b = g.defaultProps, b) Te[ve] === void 0 && (Te[ve] = b[ve]);
    return { $$typeof: i, type: g, key: Ce, ref: S, props: Te, _owner: te.current };
  }
  function ne(g, E) {
    return { $$typeof: i, type: g.type, key: E, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function se(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Se(g) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Z) {
      return E[Z];
    });
  }
  var Oe = /\/+/g;
  function Ne(g, E) {
    return typeof g == "object" && g !== null && g.key != null ? Se("" + g.key) : E.toString(36);
  }
  function Me(g, E, Z, ve, Te) {
    var Ce = typeof g;
    (Ce === "undefined" || Ce === "boolean") && (g = null);
    var S = !1;
    if (g === null) S = !0;
    else switch (Ce) {
      case "string":
      case "number":
        S = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case s:
            S = !0;
        }
    }
    if (S) return S = g, Te = Te(S), g = ve === "" ? "." + Ne(S, 0) : ve, H(Te) ? (Z = "", g != null && (Z = g.replace(Oe, "$&/") + "/"), Me(Te, E, Z, "", function(ee) {
      return ee;
    })) : Te != null && (se(Te) && (Te = ne(Te, Z + (!Te.key || S && S.key === Te.key ? "" : ("" + Te.key).replace(Oe, "$&/") + "/") + g)), E.push(Te)), 1;
    if (S = 0, ve = ve === "" ? "." : ve + ":", H(g)) for (var b = 0; b < g.length; b++) {
      Ce = g[b];
      var I = ve + Ne(Ce, b);
      S += Me(Ce, E, Z, I, Te);
    }
    else if (I = $(g), typeof I == "function") for (g = I.call(g), b = 0; !(Ce = g.next()).done; ) Ce = Ce.value, I = ve + Ne(Ce, b++), S += Me(Ce, E, Z, I, Te);
    else if (Ce === "object") throw E = String(g), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function K(g, E, Z) {
    if (g == null) return g;
    var ve = [], Te = 0;
    return Me(g, ve, "", "", function(Ce) {
      return E.call(Z, Ce, Te++);
    }), ve;
  }
  function ue(g) {
    if (g._status === -1) {
      var E = g._result;
      E = E(), E.then(function(Z) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Z);
      }, function(Z) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Z);
      }), g._status === -1 && (g._status = 0, g._result = E);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var re = { current: null }, Q = { transition: null }, q = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: Q, ReactCurrentOwner: te };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: K, forEach: function(g, E, Z) {
    K(g, function() {
      E.apply(this, arguments);
    }, Z);
  }, count: function(g) {
    var E = 0;
    return K(g, function() {
      E++;
    }), E;
  }, toArray: function(g) {
    return K(g, function(E) {
      return E;
    }) || [];
  }, only: function(g) {
    if (!se(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Le.Component = N, Le.Fragment = u, Le.Profiler = h, Le.PureComponent = T, Le.StrictMode = c, Le.Suspense = j, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, Le.act = J, Le.cloneElement = function(g, E, Z) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var ve = D({}, g.props), Te = g.key, Ce = g.ref, S = g._owner;
    if (E != null) {
      if (E.ref !== void 0 && (Ce = E.ref, S = te.current), E.key !== void 0 && (Te = "" + E.key), g.type && g.type.defaultProps) var b = g.type.defaultProps;
      for (I in E) X.call(E, I) && !P.hasOwnProperty(I) && (ve[I] = E[I] === void 0 && b !== void 0 ? b[I] : E[I]);
    }
    var I = arguments.length - 2;
    if (I === 1) ve.children = Z;
    else if (1 < I) {
      b = Array(I);
      for (var ee = 0; ee < I; ee++) b[ee] = arguments[ee + 2];
      ve.children = b;
    }
    return { $$typeof: i, type: g.type, key: Te, ref: Ce, props: ve, _owner: S };
  }, Le.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: f, _context: g }, g.Consumer = g;
  }, Le.createElement = B, Le.createFactory = function(g) {
    var E = B.bind(null, g);
    return E.type = g, E;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(g) {
    return { $$typeof: k, render: g };
  }, Le.isValidElement = se, Le.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: ue };
  }, Le.memo = function(g, E) {
    return { $$typeof: O, type: g, compare: E === void 0 ? null : E };
  }, Le.startTransition = function(g) {
    var E = Q.transition;
    Q.transition = {};
    try {
      g();
    } finally {
      Q.transition = E;
    }
  }, Le.unstable_act = J, Le.useCallback = function(g, E) {
    return re.current.useCallback(g, E);
  }, Le.useContext = function(g) {
    return re.current.useContext(g);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(g) {
    return re.current.useDeferredValue(g);
  }, Le.useEffect = function(g, E) {
    return re.current.useEffect(g, E);
  }, Le.useId = function() {
    return re.current.useId();
  }, Le.useImperativeHandle = function(g, E, Z) {
    return re.current.useImperativeHandle(g, E, Z);
  }, Le.useInsertionEffect = function(g, E) {
    return re.current.useInsertionEffect(g, E);
  }, Le.useLayoutEffect = function(g, E) {
    return re.current.useLayoutEffect(g, E);
  }, Le.useMemo = function(g, E) {
    return re.current.useMemo(g, E);
  }, Le.useReducer = function(g, E, Z) {
    return re.current.useReducer(g, E, Z);
  }, Le.useRef = function(g) {
    return re.current.useRef(g);
  }, Le.useState = function(g) {
    return re.current.useState(g);
  }, Le.useSyncExternalStore = function(g, E, Z) {
    return re.current.useSyncExternalStore(g, E, Z);
  }, Le.useTransition = function() {
    return re.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var nd;
function No() {
  return nd || (nd = 1, no.exports = im()), no.exports;
}
var rd;
function sm() {
  if (rd) return Bi;
  rd = 1;
  var i = No(), s = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(k, j, O) {
    var v, C = {}, $ = null, F = null;
    O !== void 0 && ($ = "" + O), j.key !== void 0 && ($ = "" + j.key), j.ref !== void 0 && (F = j.ref);
    for (v in j) c.call(j, v) && !f.hasOwnProperty(v) && (C[v] = j[v]);
    if (k && k.defaultProps) for (v in j = k.defaultProps, j) C[v] === void 0 && (C[v] = j[v]);
    return { $$typeof: s, type: k, key: $, ref: F, props: C, _owner: h.current };
  }
  return Bi.Fragment = u, Bi.jsx = m, Bi.jsxs = m, Bi;
}
var id;
function am() {
  return id || (id = 1, to.exports = sm()), to.exports;
}
var l = am(), V = No(), oa = {}, ro = { exports: {} }, Dt = {}, io = { exports: {} }, so = {};
var sd;
function lm() {
  return sd || (sd = 1, (function(i) {
    function s(Q, q) {
      var J = Q.length;
      Q.push(q);
      e: for (; 0 < J; ) {
        var g = J - 1 >>> 1, E = Q[g];
        if (0 < h(E, q)) Q[g] = q, Q[J] = E, J = g;
        else break e;
      }
    }
    function u(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function c(Q) {
      if (Q.length === 0) return null;
      var q = Q[0], J = Q.pop();
      if (J !== q) {
        Q[0] = J;
        e: for (var g = 0, E = Q.length, Z = E >>> 1; g < Z; ) {
          var ve = 2 * (g + 1) - 1, Te = Q[ve], Ce = ve + 1, S = Q[Ce];
          if (0 > h(Te, J)) Ce < E && 0 > h(S, Te) ? (Q[g] = S, Q[Ce] = J, g = Ce) : (Q[g] = Te, Q[ve] = J, g = ve);
          else if (Ce < E && 0 > h(S, J)) Q[g] = S, Q[Ce] = J, g = Ce;
          else break e;
        }
      }
      return q;
    }
    function h(Q, q) {
      var J = Q.sortIndex - q.sortIndex;
      return J !== 0 ? J : Q.id - q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      i.unstable_now = function() {
        return f.now();
      };
    } else {
      var m = Date, k = m.now();
      i.unstable_now = function() {
        return m.now() - k;
      };
    }
    var j = [], O = [], v = 1, C = null, $ = 3, F = !1, D = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(Q) {
      for (var q = u(O); q !== null; ) {
        if (q.callback === null) c(O);
        else if (q.startTime <= Q) c(O), q.sortIndex = q.expirationTime, s(j, q);
        else break;
        q = u(O);
      }
    }
    function H(Q) {
      if (w = !1, A(Q), !D) if (u(j) !== null) D = !0, ue(X);
      else {
        var q = u(O);
        q !== null && re(H, q.startTime - Q);
      }
    }
    function X(Q, q) {
      D = !1, w && (w = !1, z(B), B = -1), F = !0;
      var J = $;
      try {
        for (A(q), C = u(j); C !== null && (!(C.expirationTime > q) || Q && !Se()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, $ = C.priorityLevel;
            var E = g(C.expirationTime <= q);
            q = i.unstable_now(), typeof E == "function" ? C.callback = E : C === u(j) && c(j), A(q);
          } else c(j);
          C = u(j);
        }
        if (C !== null) var Z = !0;
        else {
          var ve = u(O);
          ve !== null && re(H, ve.startTime - q), Z = !1;
        }
        return Z;
      } finally {
        C = null, $ = J, F = !1;
      }
    }
    var te = !1, P = null, B = -1, ne = 5, se = -1;
    function Se() {
      return !(i.unstable_now() - se < ne);
    }
    function Oe() {
      if (P !== null) {
        var Q = i.unstable_now();
        se = Q;
        var q = !0;
        try {
          q = P(!0, Q);
        } finally {
          q ? Ne() : (te = !1, P = null);
        }
      } else te = !1;
    }
    var Ne;
    if (typeof T == "function") Ne = function() {
      T(Oe);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), K = Me.port2;
      Me.port1.onmessage = Oe, Ne = function() {
        K.postMessage(null);
      };
    } else Ne = function() {
      N(Oe, 0);
    };
    function ue(Q) {
      P = Q, te || (te = !0, Ne());
    }
    function re(Q, q) {
      B = N(function() {
        Q(i.unstable_now());
      }, q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, i.unstable_continueExecution = function() {
      D || F || (D = !0, ue(X));
    }, i.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(j);
    }, i.unstable_next = function(Q) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = $;
      }
      var J = $;
      $ = q;
      try {
        return Q();
      } finally {
        $ = J;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(Q, q) {
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
      var J = $;
      $ = Q;
      try {
        return q();
      } finally {
        $ = J;
      }
    }, i.unstable_scheduleCallback = function(Q, q, J) {
      var g = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? g + J : g) : J = g, Q) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = J + E, Q = { id: v++, callback: q, priorityLevel: Q, startTime: J, expirationTime: E, sortIndex: -1 }, J > g ? (Q.sortIndex = J, s(O, Q), u(j) === null && Q === u(O) && (w ? (z(B), B = -1) : w = !0, re(H, J - g))) : (Q.sortIndex = E, s(j, Q), D || F || (D = !0, ue(X))), Q;
    }, i.unstable_shouldYield = Se, i.unstable_wrapCallback = function(Q) {
      var q = $;
      return function() {
        var J = $;
        $ = q;
        try {
          return Q.apply(this, arguments);
        } finally {
          $ = J;
        }
      };
    };
  })(so)), so;
}
var ad;
function om() {
  return ad || (ad = 1, io.exports = lm()), io.exports;
}
var ld;
function um() {
  if (ld) return Dt;
  ld = 1;
  var i = No(), s = om();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), h = {};
  function f(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (h[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, C = {};
  function $(e) {
    return j.call(C, e) ? !0 : j.call(v, e) ? !1 : O.test(e) ? C[e] = !0 : (v[e] = !0, !1);
  }
  function F(e, t, n, r) {
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
  function D(e, t, n, r) {
    if (t === null || typeof t > "u" || F(e, t, n, r)) return !0;
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
  function w(e, t, n, r, a, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      T
    );
    N[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, T);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, T);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, t, n, r) {
    var a = N.hasOwnProperty(t) ? N[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? $(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = /* @__PURE__ */ Symbol.for("react.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), se = /* @__PURE__ */ Symbol.for("react.provider"), Se = /* @__PURE__ */ Symbol.for("react.context"), Oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var J = Object.assign, g;
  function E(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var Z = !1;
  function ve(e, t) {
    if (!e || Z) return "";
    Z = !0;
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
        } catch (R) {
          var r = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          r = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          r = R;
        }
        e();
      }
    } catch (R) {
      if (R && r && typeof R.stack == "string") {
        for (var a = R.stack.split(`
`), o = r.stack.split(`
`), d = a.length - 1, p = o.length - 1; 1 <= d && 0 <= p && a[d] !== o[p]; ) p--;
        for (; 1 <= d && 0 <= p; d--, p--) if (a[d] !== o[p]) {
          if (d !== 1 || p !== 1)
            do
              if (d--, p--, 0 > p || a[d] !== o[p]) {
                var y = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= p);
          break;
        }
      }
    } finally {
      Z = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function Te(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ve(e.type, !1), e;
      case 11:
        return e = ve(e.type.render, !1), e;
      case 1:
        return e = ve(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case P:
        return "Fragment";
      case te:
        return "Portal";
      case ne:
        return "Profiler";
      case B:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Se:
        return (e.displayName || "Context") + ".Consumer";
      case se:
        return (e._context.displayName || "Context") + ".Provider";
      case Oe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case K:
        return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return Ce(e(t));
        } catch {
        }
    }
    return null;
  }
  function S(e) {
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
        return Ce(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
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
  function b(e) {
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
  function I(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ee(e) {
    var t = I(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, o.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function fe(e) {
    e._valueTracker || (e._valueTracker = ee(e));
  }
  function le(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = I(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function pe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var n = t.checked;
    return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Pe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = b(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function we(e, t) {
    t = t.checked, t != null && A(e, "checked", t, !1);
  }
  function $e(e, t) {
    we(e, t);
    var n = b(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ye(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || pe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function He(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + b(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Ge(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: b(n) };
  }
  function be(e, t) {
    var n = b(t.value), r = b(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function tt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zt, nn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (zt = zt || document.createElement("div"), zt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Gt(e, t) {
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
  }, In = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function(e) {
    In.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ct[t] = ct[e];
    });
  });
  function ye(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ct.hasOwnProperty(e) && ct[e] ? ("" + t).trim() : t + "px";
  }
  function Wt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = ye(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Ee = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Ee[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Ae(e, t) {
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
  var We = null;
  function Ze(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qt = null, gt = null, bt = null;
  function hn(e) {
    if (e = _i(e)) {
      if (typeof Qt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = ws(t), Qt(e.stateNode, e.type, t));
    }
  }
  function mn(e) {
    gt ? bt ? bt.push(e) : bt = [e] : gt = e;
  }
  function Dn() {
    if (gt) {
      var e = gt, t = bt;
      if (bt = gt = null, hn(e), t) for (e = 0; e < t.length; e++) hn(t[e]);
    }
  }
  function Fe(e, t) {
    return e(t);
  }
  function nt() {
  }
  var Qe = !1;
  function mt(e, t, n) {
    if (Qe) return e(t, n);
    Qe = !0;
    try {
      return Fe(e, t, n);
    } finally {
      Qe = !1, (gt !== null || bt !== null) && (nt(), Dn());
    }
  }
  function Mt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ws(n);
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var pn = !1;
  if (k) try {
    var vn = {};
    Object.defineProperty(vn, "passive", { get: function() {
      pn = !0;
    } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    pn = !1;
  }
  function li(e, t, n, r, a, o, d, p, y) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (G) {
      this.onError(G);
    }
  }
  var wn = !1, lr = null, _r = !1, En = null, oi = { onError: function(e) {
    wn = !0, lr = e;
  } };
  function qi(e, t, n, r, a, o, d, p, y) {
    wn = !1, lr = null, li.apply(oi, arguments);
  }
  function ja(e, t, n, r, a, o, d, p, y) {
    if (qi.apply(this, arguments), wn) {
      if (wn) {
        var R = lr;
        wn = !1, lr = null;
      } else throw Error(u(198));
      _r || (_r = !0, En = R);
    }
  }
  function Nn(e) {
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
  function xt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function es(e) {
    if (Nn(e) !== e) throw Error(u(188));
  }
  function ts(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === n) return es(a), e;
          if (o === r) return es(a), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = a, r = o;
      else {
        for (var d = !1, p = a.child; p; ) {
          if (p === n) {
            d = !0, n = a, r = o;
            break;
          }
          if (p === r) {
            d = !0, r = a, n = o;
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = o.child; p; ) {
            if (p === n) {
              d = !0, n = o, r = a;
              break;
            }
            if (p === r) {
              d = !0, r = o, n = a;
              break;
            }
            p = p.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ns(e) {
    return e = ts(e), e !== null ? rs(e) : null;
  }
  function rs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = rs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Cn = s.unstable_scheduleCallback, _n = s.unstable_cancelCallback, L = s.unstable_shouldYield, oe = s.unstable_requestPaint, ge = s.unstable_now, Yt = s.unstable_getCurrentPriorityLevel, lt = s.unstable_ImmediatePriority, or = s.unstable_UserBlockingPriority, zn = s.unstable_NormalPriority, ur = s.unstable_LowPriority, Ao = s.unstable_IdlePriority, is = null, kn = null;
  function yf(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(is, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : jf, gf = Math.log, xf = Math.LN2;
  function jf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gf(e) / xf | 0) | 0;
  }
  var ss = 64, as = 4194304;
  function ui(e) {
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
  function ls(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var p = d & ~a;
      p !== 0 ? r = ui(p) : (o &= d, o !== 0 && (r = ui(o)));
    } else d = n & ~a, d !== 0 ? r = ui(d) : o !== 0 && (r = ui(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rn(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Sf(e, t) {
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
  function wf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - rn(o), p = 1 << d, y = a[d];
      y === -1 ? ((p & n) === 0 || (p & r) !== 0) && (a[d] = Sf(p, t)) : y <= t && (e.expiredLanes |= p), o &= ~p;
    }
  }
  function Sa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ro() {
    var e = ss;
    return ss <<= 1, (ss & 4194240) === 0 && (ss = 64), e;
  }
  function wa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ci(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rn(t), e[t] = n;
  }
  function Ef(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - rn(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function Ea(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - rn(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var Ue = 0;
  function $o(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Lo, Na, Oo, Fo, Io, Ca = !1, os = [], bn = null, Vn = null, Bn = null, di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Hn = [], Nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Do(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Bn = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fi.delete(t.pointerId);
    }
  }
  function hi(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = _i(t), t !== null && Na(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Cf(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return bn = hi(bn, e, t, n, r, a), !0;
      case "dragenter":
        return Vn = hi(Vn, e, t, n, r, a), !0;
      case "mouseover":
        return Bn = hi(Bn, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return di.set(o, hi(di.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, fi.set(o, hi(fi.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function zo(e) {
    var t = cr(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xt(n), t !== null) {
            e.blockedOn = t, Io(e.priority, function() {
              Oo(n);
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
  function us(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        We = r, n.target.dispatchEvent(r), We = null;
      } else return t = _i(n), t !== null && Na(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function bo(e, t, n) {
    us(e) && n.delete(t);
  }
  function _f() {
    Ca = !1, bn !== null && us(bn) && (bn = null), Vn !== null && us(Vn) && (Vn = null), Bn !== null && us(Bn) && (Bn = null), di.forEach(bo), fi.forEach(bo);
  }
  function mi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ca || (Ca = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, _f)));
  }
  function pi(e) {
    function t(a) {
      return mi(a, e);
    }
    if (0 < os.length) {
      mi(os[0], e);
      for (var n = 1; n < os.length; n++) {
        var r = os[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bn !== null && mi(bn, e), Vn !== null && mi(Vn, e), Bn !== null && mi(Bn, e), di.forEach(t), fi.forEach(t), n = 0; n < Hn.length; n++) r = Hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) zo(n), n.blockedOn === null && Hn.shift();
  }
  var Tr = H.ReactCurrentBatchConfig, cs = !0;
  function Tf(e, t, n, r) {
    var a = Ue, o = Tr.transition;
    Tr.transition = null;
    try {
      Ue = 1, _a(e, t, n, r);
    } finally {
      Ue = a, Tr.transition = o;
    }
  }
  function Mf(e, t, n, r) {
    var a = Ue, o = Tr.transition;
    Tr.transition = null;
    try {
      Ue = 4, _a(e, t, n, r);
    } finally {
      Ue = a, Tr.transition = o;
    }
  }
  function _a(e, t, n, r) {
    if (cs) {
      var a = Ta(e, t, n, r);
      if (a === null) Ka(e, t, r, ds, n), Do(e, r);
      else if (Cf(a, e, t, n, r)) r.stopPropagation();
      else if (Do(e, r), t & 4 && -1 < Nf.indexOf(e)) {
        for (; a !== null; ) {
          var o = _i(a);
          if (o !== null && Lo(o), o = Ta(e, t, n, r), o === null && Ka(e, t, r, ds, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else Ka(e, t, r, null, n);
    }
  }
  var ds = null;
  function Ta(e, t, n, r) {
    if (ds = null, e = Ze(r), e = cr(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ds = e, null;
  }
  function Vo(e) {
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
        switch (Yt()) {
          case lt:
            return 1;
          case or:
            return 4;
          case zn:
          case ur:
            return 16;
          case Ao:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Un = null, Ma = null, fs = null;
  function Bo() {
    if (fs) return fs;
    var e, t = Ma, n = t.length, r, a = "value" in Un ? Un.value : Un.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[o - r]; r++) ;
    return fs = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function hs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ms() {
    return !0;
  }
  function Ho() {
    return !1;
  }
  function Vt(e) {
    function t(n, r, a, o, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(o) : o[p]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ms : Ho, this.isPropagationStopped = Ho, this;
    }
    return J(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
    }, persist: function() {
    }, isPersistent: ms }), t;
  }
  var Mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pa = Vt(Mr), vi = J({}, Mr, { view: 0, detail: 0 }), Pf = Vt(vi), Aa, Ra, ki, ps = J({}, vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: La, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Aa = e.screenX - ki.screenX, Ra = e.screenY - ki.screenY) : Ra = Aa = 0, ki = e), Aa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ra;
  } }), Uo = Vt(ps), Af = J({}, ps, { dataTransfer: 0 }), Rf = Vt(Af), $f = J({}, vi, { relatedTarget: 0 }), $a = Vt($f), Lf = J({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = Vt(Lf), Ff = J({}, Mr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), If = Vt(Ff), Df = J({}, Mr, { data: 0 }), Ko = Vt(Df), zf = {
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
  }, bf = {
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
  }, Vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : !1;
  }
  function La() {
    return Bf;
  }
  var Hf = J({}, vi, { key: function(e) {
    if (e.key) {
      var t = zf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = hs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: La, charCode: function(e) {
    return e.type === "keypress" ? hs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? hs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Uf = Vt(Hf), Kf = J({}, ps, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Go = Vt(Kf), Gf = J({}, vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: La }), Wf = Vt(Gf), Qf = J({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yf = Vt(Qf), Jf = J({}, ps, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xf = Vt(Jf), Zf = [9, 13, 27, 32], Oa = k && "CompositionEvent" in window, yi = null;
  k && "documentMode" in document && (yi = document.documentMode);
  var qf = k && "TextEvent" in window && !yi, Wo = k && (!Oa || yi && 8 < yi && 11 >= yi), Qo = " ", Yo = !1;
  function Jo(e, t) {
    switch (e) {
      case "keyup":
        return Zf.indexOf(t.keyCode) !== -1;
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
  function Xo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pr = !1;
  function eh(e, t) {
    switch (e) {
      case "compositionend":
        return Xo(t);
      case "keypress":
        return t.which !== 32 ? null : (Yo = !0, Qo);
      case "textInput":
        return e = t.data, e === Qo && Yo ? null : e;
      default:
        return null;
    }
  }
  function th(e, t) {
    if (Pr) return e === "compositionend" || !Oa && Jo(e, t) ? (e = Bo(), fs = Ma = Un = null, Pr = !1, e) : null;
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
        return Wo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nh[e.type] : t === "textarea";
  }
  function qo(e, t, n, r) {
    mn(r), t = xs(t, "onChange"), 0 < t.length && (n = new Pa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gi = null, xi = null;
  function rh(e) {
    ku(e, 0);
  }
  function vs(e) {
    var t = Or(e);
    if (le(t)) return e;
  }
  function ih(e, t) {
    if (e === "change") return t;
  }
  var eu = !1;
  if (k) {
    var Fa;
    if (k) {
      var Ia = "oninput" in document;
      if (!Ia) {
        var tu = document.createElement("div");
        tu.setAttribute("oninput", "return;"), Ia = typeof tu.oninput == "function";
      }
      Fa = Ia;
    } else Fa = !1;
    eu = Fa && (!document.documentMode || 9 < document.documentMode);
  }
  function nu() {
    gi && (gi.detachEvent("onpropertychange", ru), xi = gi = null);
  }
  function ru(e) {
    if (e.propertyName === "value" && vs(xi)) {
      var t = [];
      qo(t, xi, e, Ze(e)), mt(rh, t);
    }
  }
  function sh(e, t, n) {
    e === "focusin" ? (nu(), gi = t, xi = n, gi.attachEvent("onpropertychange", ru)) : e === "focusout" && nu();
  }
  function ah(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return vs(xi);
  }
  function lh(e, t) {
    if (e === "click") return vs(t);
  }
  function oh(e, t) {
    if (e === "input" || e === "change") return vs(t);
  }
  function uh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var sn = typeof Object.is == "function" ? Object.is : uh;
  function ji(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!j.call(t, a) || !sn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function su(e, t) {
    var n = iu(e);
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
      n = iu(n);
    }
  }
  function au(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lu() {
    for (var e = window, t = pe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pe(e.document);
    }
    return t;
  }
  function Da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ch(e) {
    var t = lu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && au(n.ownerDocument.documentElement, n)) {
      if (r !== null && Da(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = su(n, o);
          var d = su(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var dh = k && "documentMode" in document && 11 >= document.documentMode, Ar = null, za = null, Si = null, ba = !1;
  function ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ba || Ar == null || Ar !== pe(r) || (r = Ar, "selectionStart" in r && Da(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && ji(Si, r) || (Si = r, r = xs(za, "onSelect"), 0 < r.length && (t = new Pa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
  }
  function ks(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Rr = { animationend: ks("Animation", "AnimationEnd"), animationiteration: ks("Animation", "AnimationIteration"), animationstart: ks("Animation", "AnimationStart"), transitionend: ks("Transition", "TransitionEnd") }, Va = {}, uu = {};
  k && (uu = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
  function ys(e) {
    if (Va[e]) return Va[e];
    if (!Rr[e]) return e;
    var t = Rr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in uu) return Va[e] = t[n];
    return e;
  }
  var cu = ys("animationend"), du = ys("animationiteration"), fu = ys("animationstart"), hu = ys("transitionend"), mu = /* @__PURE__ */ new Map(), pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kn(e, t) {
    mu.set(e, t), f(t, [e]);
  }
  for (var Ba = 0; Ba < pu.length; Ba++) {
    var Ha = pu[Ba], fh = Ha.toLowerCase(), hh = Ha[0].toUpperCase() + Ha.slice(1);
    Kn(fh, "on" + hh);
  }
  Kn(cu, "onAnimationEnd"), Kn(du, "onAnimationIteration"), Kn(fu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(hu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
  function vu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ja(r, t, void 0, e), e.currentTarget = null;
  }
  function ku(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var p = r[d], y = p.instance, R = p.currentTarget;
          if (p = p.listener, y !== o && a.isPropagationStopped()) break e;
          vu(a, p, R), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (p = r[d], y = p.instance, R = p.currentTarget, p = p.listener, y !== o && a.isPropagationStopped()) break e;
          vu(a, p, R), o = y;
        }
      }
    }
    if (_r) throw e = En, _r = !1, En = null, e;
  }
  function qe(e, t) {
    var n = t[Xa];
    n === void 0 && (n = t[Xa] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (yu(t, e, 2, !1), n.add(r));
  }
  function Ua(e, t, n) {
    var r = 0;
    t && (r |= 4), yu(n, e, r, t);
  }
  var gs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ei(e) {
    if (!e[gs]) {
      e[gs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (mh.has(n) || Ua(n, !1, e), Ua(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gs] || (t[gs] = !0, Ua("selectionchange", !1, t));
    }
  }
  function yu(e, t, n, r) {
    switch (Vo(t)) {
      case 1:
        var a = Tf;
        break;
      case 4:
        a = Mf;
        break;
      default:
        a = _a;
    }
    n = a.bind(null, t, n, e), a = void 0, !pn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Ka(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var p = r.stateNode.containerInfo;
        if (p === a || p.nodeType === 8 && p.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          d = d.return;
        }
        for (; p !== null; ) {
          if (d = cr(p), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            r = o = d;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    mt(function() {
      var R = o, G = Ze(n), W = [];
      e: {
        var U = mu.get(e);
        if (U !== void 0) {
          var ie = Pa, ce = e;
          switch (e) {
            case "keypress":
              if (hs(n) === 0) break e;
            case "keydown":
            case "keyup":
              ie = Uf;
              break;
            case "focusin":
              ce = "focus", ie = $a;
              break;
            case "focusout":
              ce = "blur", ie = $a;
              break;
            case "beforeblur":
            case "afterblur":
              ie = $a;
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
              ie = Uo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = Rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = Wf;
              break;
            case cu:
            case du:
            case fu:
              ie = Of;
              break;
            case hu:
              ie = Yf;
              break;
            case "scroll":
              ie = Pf;
              break;
            case "wheel":
              ie = Xf;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = If;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = Go;
          }
          var he = (t & 4) !== 0, ut = !he && e === "scroll", _ = he ? U !== null ? U + "Capture" : null : U;
          he = [];
          for (var x = R, M; x !== null; ) {
            M = x;
            var Y = M.stateNode;
            if (M.tag === 5 && Y !== null && (M = Y, _ !== null && (Y = Mt(x, _), Y != null && he.push(Ni(x, Y, M)))), ut) break;
            x = x.return;
          }
          0 < he.length && (U = new ie(U, ce, null, n, G), W.push({ event: U, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", ie = e === "mouseout" || e === "pointerout", U && n !== We && (ce = n.relatedTarget || n.fromElement) && (cr(ce) || ce[Tn])) break e;
          if ((ie || U) && (U = G.window === G ? G : (U = G.ownerDocument) ? U.defaultView || U.parentWindow : window, ie ? (ce = n.relatedTarget || n.toElement, ie = R, ce = ce ? cr(ce) : null, ce !== null && (ut = Nn(ce), ce !== ut || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ie = null, ce = R), ie !== ce)) {
            if (he = Uo, Y = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (he = Go, Y = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = ie == null ? U : Or(ie), M = ce == null ? U : Or(ce), U = new he(Y, x + "leave", ie, n, G), U.target = ut, U.relatedTarget = M, Y = null, cr(G) === R && (he = new he(_, x + "enter", ce, n, G), he.target = M, he.relatedTarget = ut, Y = he), ut = Y, ie && ce) t: {
              for (he = ie, _ = ce, x = 0, M = he; M; M = $r(M)) x++;
              for (M = 0, Y = _; Y; Y = $r(Y)) M++;
              for (; 0 < x - M; ) he = $r(he), x--;
              for (; 0 < M - x; ) _ = $r(_), M--;
              for (; x--; ) {
                if (he === _ || _ !== null && he === _.alternate) break t;
                he = $r(he), _ = $r(_);
              }
              he = null;
            }
            else he = null;
            ie !== null && gu(W, U, ie, he, !1), ce !== null && ut !== null && gu(W, ut, ce, he, !0);
          }
        }
        e: {
          if (U = R ? Or(R) : window, ie = U.nodeName && U.nodeName.toLowerCase(), ie === "select" || ie === "input" && U.type === "file") var me = ih;
          else if (Zo(U)) if (eu) me = oh;
          else {
            me = ah;
            var xe = sh;
          }
          else (ie = U.nodeName) && ie.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (me = lh);
          if (me && (me = me(e, R))) {
            qo(W, me, n, G);
            break e;
          }
          xe && xe(e, U, R), e === "focusout" && (xe = U._wrapperState) && xe.controlled && U.type === "number" && Be(U, "number", U.value);
        }
        switch (xe = R ? Or(R) : window, e) {
          case "focusin":
            (Zo(xe) || xe.contentEditable === "true") && (Ar = xe, za = R, Si = null);
            break;
          case "focusout":
            Si = za = Ar = null;
            break;
          case "mousedown":
            ba = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ba = !1, ou(W, n, G);
            break;
          case "selectionchange":
            if (dh) break;
          case "keydown":
          case "keyup":
            ou(W, n, G);
        }
        var je;
        if (Oa) e: {
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
        else Pr ? Jo(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Wo && n.locale !== "ko" && (Pr || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Pr && (je = Bo()) : (Un = G, Ma = "value" in Un ? Un.value : Un.textContent, Pr = !0)), xe = xs(R, _e), 0 < xe.length && (_e = new Ko(_e, e, null, n, G), W.push({ event: _e, listeners: xe }), je ? _e.data = je : (je = Xo(n), je !== null && (_e.data = je)))), (je = qf ? eh(e, n) : th(e, n)) && (R = xs(R, "onBeforeInput"), 0 < R.length && (G = new Ko("onBeforeInput", "beforeinput", null, n, G), W.push({ event: G, listeners: R }), G.data = je));
      }
      ku(W, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function xs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, o = a.stateNode;
      a.tag === 5 && o !== null && (a = o, o = Mt(e, n), o != null && r.unshift(Ni(e, o, a)), o = Mt(e, t), o != null && r.push(Ni(e, o, a))), e = e.return;
    }
    return r;
  }
  function $r(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gu(e, t, n, r, a) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var p = n, y = p.alternate, R = p.stateNode;
      if (y !== null && y === r) break;
      p.tag === 5 && R !== null && (p = R, a ? (y = Mt(n, o), y != null && d.unshift(Ni(n, y, p))) : a || (y = Mt(n, o), y != null && d.push(Ni(n, y, p)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var ph = /\r\n?/g, vh = /\u0000|\uFFFD/g;
  function xu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ph, `
`).replace(vh, "");
  }
  function js(e, t, n) {
    if (t = xu(t), xu(e) !== t && n) throw Error(u(425));
  }
  function Ss() {
  }
  var Ga = null, Wa = null;
  function Qa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ya = typeof setTimeout == "function" ? setTimeout : void 0, kh = typeof clearTimeout == "function" ? clearTimeout : void 0, ju = typeof Promise == "function" ? Promise : void 0, yh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function(e) {
    return ju.resolve(null).then(e).catch(gh);
  } : Ya;
  function gh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ja(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), pi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    pi(t);
  }
  function Gn(e) {
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
  function Su(e) {
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
  var Lr = Math.random().toString(36).slice(2), yn = "__reactFiber$" + Lr, Ci = "__reactProps$" + Lr, Tn = "__reactContainer$" + Lr, Xa = "__reactEvents$" + Lr, xh = "__reactListeners$" + Lr, jh = "__reactHandles$" + Lr;
  function cr(e) {
    var t = e[yn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tn] || n[yn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Su(e); e !== null; ) {
          if (n = e[yn]) return n;
          e = Su(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function _i(e) {
    return e = e[yn] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ws(e) {
    return e[Ci] || null;
  }
  var Za = [], Fr = -1;
  function Wn(e) {
    return { current: e };
  }
  function et(e) {
    0 > Fr || (e.current = Za[Fr], Za[Fr] = null, Fr--);
  }
  function Xe(e, t) {
    Fr++, Za[Fr] = e.current, e.current = t;
  }
  var Qn = {}, Et = Wn(Qn), $t = Wn(!1), dr = Qn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n) a[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Es() {
    et($t), et(Et);
  }
  function wu(e, t, n) {
    if (Et.current !== Qn) throw Error(u(168));
    Xe(Et, t), Xe($t, n);
  }
  function Eu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(u(108, S(e) || "Unknown", a));
    return J({}, n, r);
  }
  function Ns(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, dr = Et.current, Xe(Et, e), Xe($t, $t.current), !0;
  }
  function Nu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = Eu(e, t, dr), r.__reactInternalMemoizedMergedChildContext = e, et($t), et(Et), Xe(Et, e)) : et($t), Xe($t, n);
  }
  var Mn = null, Cs = !1, qa = !1;
  function Cu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function Sh(e) {
    Cs = !0, Cu(e);
  }
  function Yn() {
    if (!qa && Mn !== null) {
      qa = !0;
      var e = 0, t = Ue;
      try {
        var n = Mn;
        for (Ue = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mn = null, Cs = !1;
      } catch (a) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), Cn(lt, Yn), a;
      } finally {
        Ue = t, qa = !1;
      }
    }
    return null;
  }
  var Dr = [], zr = 0, _s = null, Ts = 0, Jt = [], Xt = 0, fr = null, Pn = 1, An = "";
  function hr(e, t) {
    Dr[zr++] = Ts, Dr[zr++] = _s, _s = e, Ts = t;
  }
  function _u(e, t, n) {
    Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, fr = e;
    var r = Pn;
    e = An;
    var a = 32 - rn(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - rn(t) + a;
    if (30 < o) {
      var d = a - a % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Pn = 1 << 32 - rn(t) + a | n << a | r, An = o + e;
    } else Pn = 1 << o | n << a | r, An = e;
  }
  function el(e) {
    e.return !== null && (hr(e, 1), _u(e, 1, 0));
  }
  function tl(e) {
    for (; e === _s; ) _s = Dr[--zr], Dr[zr] = null, Ts = Dr[--zr], Dr[zr] = null;
    for (; e === fr; ) fr = Jt[--Xt], Jt[Xt] = null, An = Jt[--Xt], Jt[Xt] = null, Pn = Jt[--Xt], Jt[Xt] = null;
  }
  var Bt = null, Ht = null, rt = !1, an = null;
  function Tu(e, t) {
    var n = tn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Mu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Bt = e, Ht = Gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Bt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fr !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Bt = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function nl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function rl(e) {
    if (rt) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!Mu(e, t)) {
          if (nl(e)) throw Error(u(418));
          t = Gn(n.nextSibling);
          var r = Bt;
          t && Mu(e, t) ? Tu(r, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Bt = e);
        }
      } else {
        if (nl(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Bt = e;
      }
    }
  }
  function Pu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Bt = e;
  }
  function Ms(e) {
    if (e !== Bt) return !1;
    if (!rt) return Pu(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qa(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (nl(e)) throw Au(), Error(u(418));
      for (; t; ) Tu(e, t), t = Gn(t.nextSibling);
    }
    if (Pu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ht = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = Bt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Au() {
    for (var e = Ht; e; ) e = Gn(e.nextSibling);
  }
  function br() {
    Ht = Bt = null, rt = !1;
  }
  function il(e) {
    an === null ? an = [e] : an.push(e);
  }
  var wh = H.ReactCurrentBatchConfig;
  function Ti(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(d) {
          var p = a.refs;
          d === null ? delete p[o] : p[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Ps(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ru(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $u(e) {
    function t(_, x) {
      if (e) {
        var M = _.deletions;
        M === null ? (_.deletions = [x], _.flags |= 16) : M.push(x);
      }
    }
    function n(_, x) {
      if (!e) return null;
      for (; x !== null; ) t(_, x), x = x.sibling;
      return null;
    }
    function r(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function a(_, x) {
      return _ = rr(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, M) {
      return _.index = M, e ? (M = _.alternate, M !== null ? (M = M.index, M < x ? (_.flags |= 2, x) : M) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function p(_, x, M, Y) {
      return x === null || x.tag !== 6 ? (x = Yl(M, _.mode, Y), x.return = _, x) : (x = a(x, M), x.return = _, x);
    }
    function y(_, x, M, Y) {
      var me = M.type;
      return me === P ? G(_, x, M.props.children, Y, M.key) : x !== null && (x.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ue && Ru(me) === x.type) ? (Y = a(x, M.props), Y.ref = Ti(_, x, M), Y.return = _, Y) : (Y = ea(M.type, M.key, M.props, null, _.mode, Y), Y.ref = Ti(_, x, M), Y.return = _, Y);
    }
    function R(_, x, M, Y) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = Jl(M, _.mode, Y), x.return = _, x) : (x = a(x, M.children || []), x.return = _, x);
    }
    function G(_, x, M, Y, me) {
      return x === null || x.tag !== 7 ? (x = jr(M, _.mode, Y, me), x.return = _, x) : (x = a(x, M), x.return = _, x);
    }
    function W(_, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Yl("" + x, _.mode, M), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return M = ea(x.type, x.key, x.props, null, _.mode, M), M.ref = Ti(_, null, x), M.return = _, M;
          case te:
            return x = Jl(x, _.mode, M), x.return = _, x;
          case ue:
            var Y = x._init;
            return W(_, Y(x._payload), M);
        }
        if (Ge(x) || q(x)) return x = jr(x, _.mode, M, null), x.return = _, x;
        Ps(_, x);
      }
      return null;
    }
    function U(_, x, M, Y) {
      var me = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return me !== null ? null : p(_, x, "" + M, Y);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case X:
            return M.key === me ? y(_, x, M, Y) : null;
          case te:
            return M.key === me ? R(_, x, M, Y) : null;
          case ue:
            return me = M._init, U(
              _,
              x,
              me(M._payload),
              Y
            );
        }
        if (Ge(M) || q(M)) return me !== null ? null : G(_, x, M, Y, null);
        Ps(_, M);
      }
      return null;
    }
    function ie(_, x, M, Y, me) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return _ = _.get(M) || null, p(x, _, "" + Y, me);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case X:
            return _ = _.get(Y.key === null ? M : Y.key) || null, y(x, _, Y, me);
          case te:
            return _ = _.get(Y.key === null ? M : Y.key) || null, R(x, _, Y, me);
          case ue:
            var xe = Y._init;
            return ie(_, x, M, xe(Y._payload), me);
        }
        if (Ge(Y) || q(Y)) return _ = _.get(M) || null, G(x, _, Y, me, null);
        Ps(x, Y);
      }
      return null;
    }
    function ce(_, x, M, Y) {
      for (var me = null, xe = null, je = x, _e = x = 0, kt = null; je !== null && _e < M.length; _e++) {
        je.index > _e ? (kt = je, je = null) : kt = je.sibling;
        var Ve = U(_, je, M[_e], Y);
        if (Ve === null) {
          je === null && (je = kt);
          break;
        }
        e && je && Ve.alternate === null && t(_, je), x = o(Ve, x, _e), xe === null ? me = Ve : xe.sibling = Ve, xe = Ve, je = kt;
      }
      if (_e === M.length) return n(_, je), rt && hr(_, _e), me;
      if (je === null) {
        for (; _e < M.length; _e++) je = W(_, M[_e], Y), je !== null && (x = o(je, x, _e), xe === null ? me = je : xe.sibling = je, xe = je);
        return rt && hr(_, _e), me;
      }
      for (je = r(_, je); _e < M.length; _e++) kt = ie(je, _, _e, M[_e], Y), kt !== null && (e && kt.alternate !== null && je.delete(kt.key === null ? _e : kt.key), x = o(kt, x, _e), xe === null ? me = kt : xe.sibling = kt, xe = kt);
      return e && je.forEach(function(ir) {
        return t(_, ir);
      }), rt && hr(_, _e), me;
    }
    function he(_, x, M, Y) {
      var me = q(M);
      if (typeof me != "function") throw Error(u(150));
      if (M = me.call(M), M == null) throw Error(u(151));
      for (var xe = me = null, je = x, _e = x = 0, kt = null, Ve = M.next(); je !== null && !Ve.done; _e++, Ve = M.next()) {
        je.index > _e ? (kt = je, je = null) : kt = je.sibling;
        var ir = U(_, je, Ve.value, Y);
        if (ir === null) {
          je === null && (je = kt);
          break;
        }
        e && je && ir.alternate === null && t(_, je), x = o(ir, x, _e), xe === null ? me = ir : xe.sibling = ir, xe = ir, je = kt;
      }
      if (Ve.done) return n(
        _,
        je
      ), rt && hr(_, _e), me;
      if (je === null) {
        for (; !Ve.done; _e++, Ve = M.next()) Ve = W(_, Ve.value, Y), Ve !== null && (x = o(Ve, x, _e), xe === null ? me = Ve : xe.sibling = Ve, xe = Ve);
        return rt && hr(_, _e), me;
      }
      for (je = r(_, je); !Ve.done; _e++, Ve = M.next()) Ve = ie(je, _, _e, Ve.value, Y), Ve !== null && (e && Ve.alternate !== null && je.delete(Ve.key === null ? _e : Ve.key), x = o(Ve, x, _e), xe === null ? me = Ve : xe.sibling = Ve, xe = Ve);
      return e && je.forEach(function(nm) {
        return t(_, nm);
      }), rt && hr(_, _e), me;
    }
    function ut(_, x, M, Y) {
      if (typeof M == "object" && M !== null && M.type === P && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case X:
            e: {
              for (var me = M.key, xe = x; xe !== null; ) {
                if (xe.key === me) {
                  if (me = M.type, me === P) {
                    if (xe.tag === 7) {
                      n(_, xe.sibling), x = a(xe, M.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (xe.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ue && Ru(me) === xe.type) {
                    n(_, xe.sibling), x = a(xe, M.props), x.ref = Ti(_, xe, M), x.return = _, _ = x;
                    break e;
                  }
                  n(_, xe);
                  break;
                } else t(_, xe);
                xe = xe.sibling;
              }
              M.type === P ? (x = jr(M.props.children, _.mode, Y, M.key), x.return = _, _ = x) : (Y = ea(M.type, M.key, M.props, null, _.mode, Y), Y.ref = Ti(_, x, M), Y.return = _, _ = Y);
            }
            return d(_);
          case te:
            e: {
              for (xe = M.key; x !== null; ) {
                if (x.key === xe) if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                  n(_, x.sibling), x = a(x, M.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  n(_, x);
                  break;
                }
                else t(_, x);
                x = x.sibling;
              }
              x = Jl(M, _.mode, Y), x.return = _, _ = x;
            }
            return d(_);
          case ue:
            return xe = M._init, ut(_, x, xe(M._payload), Y);
        }
        if (Ge(M)) return ce(_, x, M, Y);
        if (q(M)) return he(_, x, M, Y);
        Ps(_, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, x !== null && x.tag === 6 ? (n(_, x.sibling), x = a(x, M), x.return = _, _ = x) : (n(_, x), x = Yl(M, _.mode, Y), x.return = _, _ = x), d(_)) : n(_, x);
    }
    return ut;
  }
  var Vr = $u(!0), Lu = $u(!1), As = Wn(null), Rs = null, Br = null, sl = null;
  function al() {
    sl = Br = Rs = null;
  }
  function ll(e) {
    var t = As.current;
    et(As), e._currentValue = t;
  }
  function ol(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Hr(e, t) {
    Rs = e, sl = Br = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ot = !0), e.firstContext = null);
  }
  function Zt(e) {
    var t = e._currentValue;
    if (sl !== e) if (e = { context: e, memoizedValue: t, next: null }, Br === null) {
      if (Rs === null) throw Error(u(308));
      Br = e, Rs.dependencies = { lanes: 0, firstContext: e };
    } else Br = Br.next = e;
    return t;
  }
  var mr = null;
  function ul(e) {
    mr === null ? mr = [e] : mr.push(e);
  }
  function Ou(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, ul(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Rn(e, r);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jn = !1;
  function cl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Rn(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, ul(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Rn(e, n);
  }
  function $s(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ea(e, n);
    }
  }
  function Iu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? a = o = d : o = o.next = d, n = n.next;
        } while (n !== null);
        o === null ? a = o = t : o = o.next = t;
      } else a = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ls(e, t, n, r) {
    var a = e.updateQueue;
    Jn = !1;
    var o = a.firstBaseUpdate, d = a.lastBaseUpdate, p = a.shared.pending;
    if (p !== null) {
      a.shared.pending = null;
      var y = p, R = y.next;
      y.next = null, d === null ? o = R : d.next = R, d = y;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, p = G.lastBaseUpdate, p !== d && (p === null ? G.firstBaseUpdate = R : p.next = R, G.lastBaseUpdate = y));
    }
    if (o !== null) {
      var W = a.baseState;
      d = 0, G = R = y = null, p = o;
      do {
        var U = p.lane, ie = p.eventTime;
        if ((r & U) === U) {
          G !== null && (G = G.next = {
            eventTime: ie,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var ce = e, he = p;
            switch (U = t, ie = n, he.tag) {
              case 1:
                if (ce = he.payload, typeof ce == "function") {
                  W = ce.call(ie, W, U);
                  break e;
                }
                W = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = he.payload, U = typeof ce == "function" ? ce.call(ie, W, U) : ce, U == null) break e;
                W = J({}, W, U);
                break e;
              case 2:
                Jn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, U = a.effects, U === null ? a.effects = [p] : U.push(p));
        } else ie = { eventTime: ie, lane: U, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, G === null ? (R = G = ie, y = W) : G = G.next = ie, d |= U;
        if (p = p.next, p === null) {
          if (p = a.shared.pending, p === null) break;
          U = p, p = U.next, U.next = null, a.lastBaseUpdate = U, a.shared.pending = null;
        }
      } while (!0);
      if (G === null && (y = W), a.baseState = y, a.firstBaseUpdate = R, a.lastBaseUpdate = G, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      kr |= d, e.lanes = d, e.memoizedState = W;
    }
  }
  function Du(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(u(191, a));
        a.call(r);
      }
    }
  }
  var Mi = {}, gn = Wn(Mi), Pi = Wn(Mi), Ai = Wn(Mi);
  function pr(e) {
    if (e === Mi) throw Error(u(174));
    return e;
  }
  function dl(e, t) {
    switch (Xe(Ai, t), Xe(Pi, e), Xe(gn, Mi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Kt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Kt(t, e);
    }
    et(gn), Xe(gn, t);
  }
  function Ur() {
    et(gn), et(Pi), et(Ai);
  }
  function zu(e) {
    pr(Ai.current);
    var t = pr(gn.current), n = Kt(t, e.type);
    t !== n && (Xe(Pi, e), Xe(gn, n));
  }
  function fl(e) {
    Pi.current === e && (et(gn), et(Pi));
  }
  var st = Wn(0);
  function Os(e) {
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
  var hl = [];
  function ml() {
    for (var e = 0; e < hl.length; e++) hl[e]._workInProgressVersionPrimary = null;
    hl.length = 0;
  }
  var Fs = H.ReactCurrentDispatcher, pl = H.ReactCurrentBatchConfig, vr = 0, at = null, ft = null, pt = null, Is = !1, Ri = !1, $i = 0, Eh = 0;
  function Nt() {
    throw Error(u(321));
  }
  function vl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1;
    return !0;
  }
  function kl(e, t, n, r, a, o) {
    if (vr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fs.current = e === null || e.memoizedState === null ? Th : Mh, e = n(r, a), Ri) {
      o = 0;
      do {
        if (Ri = !1, $i = 0, 25 <= o) throw Error(u(301));
        o += 1, pt = ft = null, t.updateQueue = null, Fs.current = Ph, e = n(r, a);
      } while (Ri);
    }
    if (Fs.current = bs, t = ft !== null && ft.next !== null, vr = 0, pt = ft = at = null, Is = !1, t) throw Error(u(300));
    return e;
  }
  function yl() {
    var e = $i !== 0;
    return $i = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? at.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function qt() {
    if (ft === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ft.next;
    var t = pt === null ? at.memoizedState : pt.next;
    if (t !== null) pt = t, ft = e;
    else {
      if (e === null) throw Error(u(310));
      ft = e, e = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, pt === null ? at.memoizedState = pt = e : pt = pt.next = e;
    }
    return pt;
  }
  function Li(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = ft, a = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = o.next, o.next = d;
      }
      r.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, r = r.baseState;
      var p = d = null, y = null, R = o;
      do {
        var G = R.lane;
        if ((vr & G) === G) y !== null && (y = y.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), r = R.hasEagerState ? R.eagerState : e(r, R.action);
        else {
          var W = {
            lane: G,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          y === null ? (p = y = W, d = r) : y = y.next = W, at.lanes |= G, kr |= G;
        }
        R = R.next;
      } while (R !== null && R !== o);
      y === null ? d = r : y.next = p, sn(r, t.memoizedState) || (Ot = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, at.lanes |= o, kr |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function xl(e) {
    var t = qt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== a);
      sn(o, t.memoizedState) || (Ot = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function bu() {
  }
  function Vu(e, t) {
    var n = at, r = qt(), a = t(), o = !sn(r.memoizedState, a);
    if (o && (r.memoizedState = a, Ot = !0), r = r.queue, jl(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && pt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Oi(9, Hu.bind(null, n, r, a, t), void 0, null), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || Bu(n, t, a);
    }
    return a;
  }
  function Bu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Hu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ku(t) && Gu(e);
  }
  function Uu(e, t, n) {
    return n(function() {
      Ku(t) && Gu(e);
    });
  }
  function Ku(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !sn(e, n);
    } catch {
      return !0;
    }
  }
  function Gu(e) {
    var t = Rn(e, 1);
    t !== null && cn(t, e, 1, -1);
  }
  function Wu(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Li, lastRenderedState: e }, t.queue = e, e = e.dispatch = _h.bind(null, at, e), [t.memoizedState, e];
  }
  function Oi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Qu() {
    return qt().memoizedState;
  }
  function Ds(e, t, n, r) {
    var a = xn();
    at.flags |= e, a.memoizedState = Oi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function zs(e, t, n, r) {
    var a = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && vl(r, d.deps)) {
        a.memoizedState = Oi(t, n, o, r);
        return;
      }
    }
    at.flags |= e, a.memoizedState = Oi(1 | t, n, o, r);
  }
  function Yu(e, t) {
    return Ds(8390656, 8, e, t);
  }
  function jl(e, t) {
    return zs(2048, 8, e, t);
  }
  function Ju(e, t) {
    return zs(4, 2, e, t);
  }
  function Xu(e, t) {
    return zs(4, 4, e, t);
  }
  function Zu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zs(4, 4, Zu.bind(null, t, e), n);
  }
  function Sl() {
  }
  function ec(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function tc(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function nc(e, t, n) {
    return (vr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ot = !0), e.memoizedState = n) : (sn(n, t) || (n = Ro(), at.lanes |= n, kr |= n, e.baseState = !0), t);
  }
  function Nh(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = pl.transition;
    pl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, pl.transition = r;
    }
  }
  function rc() {
    return qt().memoizedState;
  }
  function Ch(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ic(e)) sc(t, n);
    else if (n = Ou(e, t, n, r), n !== null) {
      var a = At();
      cn(n, e, r, a), ac(n, t, r);
    }
  }
  function _h(e, t, n) {
    var r = tr(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ic(e)) sc(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, p = o(d, n);
        if (a.hasEagerState = !0, a.eagerState = p, sn(p, d)) {
          var y = t.interleaved;
          y === null ? (a.next = a, ul(t)) : (a.next = y.next, y.next = a), t.interleaved = a;
          return;
        }
      } catch {
      }
      n = Ou(e, t, a, r), n !== null && (a = At(), cn(n, e, r, a), ac(n, t, r));
    }
  }
  function ic(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function sc(e, t) {
    Ri = Is = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ac(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ea(e, n);
    }
  }
  var bs = { readContext: Zt, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, Th = { readContext: Zt, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Zt, useEffect: Yu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ds(
      4194308,
      4,
      Zu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ds(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ds(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ch.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wu, useDebugValue: Sl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Wu(!1), t = e[0];
    return e = Nh.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, a = xn();
    if (rt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(u(349));
      (vr & 30) !== 0 || Bu(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, Yu(Uu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Oi(9, Hu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = vt.identifierPrefix;
    if (rt) {
      var n = An, r = Pn;
      n = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Eh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Mh = {
    readContext: Zt,
    useCallback: ec,
    useContext: Zt,
    useEffect: jl,
    useImperativeHandle: qu,
    useInsertionEffect: Ju,
    useLayoutEffect: Xu,
    useMemo: tc,
    useReducer: gl,
    useRef: Qu,
    useState: function() {
      return gl(Li);
    },
    useDebugValue: Sl,
    useDeferredValue: function(e) {
      var t = qt();
      return nc(t, ft.memoizedState, e);
    },
    useTransition: function() {
      var e = gl(Li)[0], t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: bu,
    useSyncExternalStore: Vu,
    useId: rc,
    unstable_isNewReconciler: !1
  }, Ph = { readContext: Zt, useCallback: ec, useContext: Zt, useEffect: jl, useImperativeHandle: qu, useInsertionEffect: Ju, useLayoutEffect: Xu, useMemo: tc, useReducer: xl, useRef: Qu, useState: function() {
    return xl(Li);
  }, useDebugValue: Sl, useDeferredValue: function(e) {
    var t = qt();
    return ft === null ? t.memoizedState = e : nc(t, ft.memoizedState, e);
  }, useTransition: function() {
    var e = xl(Li)[0], t = qt().memoizedState;
    return [e, t];
  }, useMutableSource: bu, useSyncExternalStore: Vu, useId: rc, unstable_isNewReconciler: !1 };
  function ln(e, t) {
    if (e && e.defaultProps) {
      t = J({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function wl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Vs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), a = tr(e), o = $n(r, a);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, a), t !== null && (cn(t, e, a, r), $s(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = At(), a = tr(e), o = $n(r, a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, a), t !== null && (cn(t, e, a, r), $s(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), r = tr(e), a = $n(n, r);
    a.tag = 2, t != null && (a.callback = t), t = Xn(e, a, r), t !== null && (cn(t, e, r, n), $s(t, e, r));
  } };
  function lc(e, t, n, r, a, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !ji(n, r) || !ji(a, o) : !0;
  }
  function oc(e, t, n) {
    var r = !1, a = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Zt(o) : (a = Lt(t) ? dr : Et.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, a) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function uc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
  }
  function El(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, cl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = Zt(o) : (o = Lt(t) ? dr : Et.current, a.context = Ir(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (wl(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Vs.enqueueReplaceState(a, a.state, null), Ls(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Kr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Te(r), r = r.return;
      while (r);
      var a = n;
    } catch (o) {
      a = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Nl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Cl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ah = typeof WeakMap == "function" ? WeakMap : Map;
  function cc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Qs || (Qs = !0, Vl = r), Cl(e, t);
    }, n;
  }
  function dc(e, t, n) {
    n = $n(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        Cl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Cl(e, t), typeof r != "function" && (qn === null ? qn = /* @__PURE__ */ new Set([this]) : qn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function fc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ah();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Kh.bind(null, e, t, n), t.then(e, e));
  }
  function hc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function mc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $n(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Rh = H.ReactCurrentOwner, Ot = !1;
  function Pt(e, t, n, r) {
    t.child = e === null ? Lu(t, null, n, r) : Vr(t, e.child, n, r);
  }
  function pc(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Hr(t, a), r = kl(e, t, n, r, o, a), n = yl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ln(e, t, a)) : (rt && n && el(t), t.flags |= 1, Pt(e, t, r, a), t.child);
  }
  function vc(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ql(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, kc(e, t, o, r, a)) : (e = ea(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ji, n(d, r) && e.ref === t.ref) return Ln(e, t, a);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kc(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ji(o, r) && e.ref === t.ref) if (Ot = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ot = !0);
      else return t.lanes = e.lanes, Ln(e, t, a);
    }
    return _l(e, t, n, r, a);
  }
  function yc(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(Wr, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(Wr, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Xe(Wr, Ut), Ut |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Xe(Wr, Ut), Ut |= r;
    return Pt(e, t, a, n), t.child;
  }
  function gc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function _l(e, t, n, r, a) {
    var o = Lt(n) ? dr : Et.current;
    return o = Ir(t, o), Hr(t, a), n = kl(e, t, n, r, o, a), r = yl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ln(e, t, a)) : (rt && r && el(t), t.flags |= 1, Pt(e, t, n, a), t.child);
  }
  function xc(e, t, n, r, a) {
    if (Lt(n)) {
      var o = !0;
      Ns(t);
    } else o = !1;
    if (Hr(t, a), t.stateNode === null) Hs(e, t), oc(t, n, r), El(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, p = t.memoizedProps;
      d.props = p;
      var y = d.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = Zt(R) : (R = Lt(n) ? dr : Et.current, R = Ir(t, R));
      var G = n.getDerivedStateFromProps, W = typeof G == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      W || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== r || y !== R) && uc(t, d, r, R), Jn = !1;
      var U = t.memoizedState;
      d.state = U, Ls(t, r, d, a), y = t.memoizedState, p !== r || U !== y || $t.current || Jn ? (typeof G == "function" && (wl(t, n, G, r), y = t.memoizedState), (p = Jn || lc(t, n, p, r, U, y, R)) ? (W || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = R, r = p) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Fu(e, t), p = t.memoizedProps, R = t.type === t.elementType ? p : ln(t.type, p), d.props = R, W = t.pendingProps, U = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = Zt(y) : (y = Lt(n) ? dr : Et.current, y = Ir(t, y));
      var ie = n.getDerivedStateFromProps;
      (G = typeof ie == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== W || U !== y) && uc(t, d, r, y), Jn = !1, U = t.memoizedState, d.state = U, Ls(t, r, d, a);
      var ce = t.memoizedState;
      p !== W || U !== ce || $t.current || Jn ? (typeof ie == "function" && (wl(t, n, ie, r), ce = t.memoizedState), (R = Jn || lc(t, n, R, r, U, ce, y) || !1) ? (G || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, ce, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, ce, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ce), d.props = r, d.state = ce, d.context = y, r = R) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Tl(e, t, n, r, o, a);
  }
  function Tl(e, t, n, r, a, o) {
    gc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Nu(t, n, !1), Ln(e, t, o);
    r = t.stateNode, Rh.current = t;
    var p = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Vr(t, e.child, null, o), t.child = Vr(t, null, p, o)) : Pt(e, t, p, o), t.memoizedState = r.state, a && Nu(t, n, !0), t.child;
  }
  function jc(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1), dl(e, t.containerInfo);
  }
  function Sc(e, t, n, r, a) {
    return br(), il(a), t.flags |= 256, Pt(e, t, n, r), t.child;
  }
  var Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wc(e, t, n) {
    var r = t.pendingProps, a = st.current, o = !1, d = (t.flags & 128) !== 0, p;
    if ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), p ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Xe(st, a & 1), e === null)
      return rl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = ta(d, r, 0, null), e = jr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Pl(n), t.memoizedState = Ml, e) : Al(t, d));
    if (a = e.memoizedState, a !== null && (p = a.dehydrated, p !== null)) return $h(e, t, d, r, p, a, n);
    if (o) {
      o = r.fallback, d = t.mode, a = e.child, p = a.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(a, y), r.subtreeFlags = a.subtreeFlags & 14680064), p !== null ? o = rr(p, o) : (o = jr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? Pl(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = Ml, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Al(e, t) {
    return t = ta({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Bs(e, t, n, r) {
    return r !== null && il(r), Vr(t, e.child, null, n), e = Al(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $h(e, t, n, r, a, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Nl(Error(u(422))), Bs(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = ta({ mode: "visible", children: r.children }, a, 0, null), o = jr(o, a, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vr(t, e.child, null, d), t.child.memoizedState = Pl(d), t.memoizedState = Ml, o);
    if ((t.mode & 1) === 0) return Bs(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var p = r.dgst;
      return r = p, o = Error(u(419)), r = Nl(o, r, void 0), Bs(e, t, d, r);
    }
    if (p = (d & e.childLanes) !== 0, Ot || p) {
      if (r = vt, r !== null) {
        switch (d & -d) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Rn(e, a), cn(r, e, a, -1));
      }
      return Wl(), r = Nl(Error(u(421))), Bs(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gh.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ht = Gn(a.nextSibling), Bt = t, rt = !0, an = null, e !== null && (Jt[Xt++] = Pn, Jt[Xt++] = An, Jt[Xt++] = fr, Pn = e.id, An = e.overflow, fr = t), t = Al(t, r.children), t.flags |= 4096, t);
  }
  function Ec(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ol(e.return, t, n);
  }
  function Rl(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function Nc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Pt(e, t, r.children, n), r = st.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
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
    if (Xe(st, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Os(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Rl(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Os(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Rl(t, !0, n, null, o);
        break;
      case "together":
        Rl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Lh(e, t, n) {
    switch (t.tag) {
      case 3:
        jc(t), br();
        break;
      case 5:
        zu(t);
        break;
      case 1:
        Lt(t.type) && Ns(t);
        break;
      case 4:
        dl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Xe(As, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Xe(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wc(e, t, n) : (Xe(st, st.current & 1), e = Ln(e, t, n), e !== null ? e.sibling : null);
        Xe(st, st.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Nc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Xe(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, yc(e, t, n);
    }
    return Ln(e, t, n);
  }
  var Cc, $l, _c, Tc;
  Cc = function(e, t) {
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
  }, $l = function() {
  }, _c = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, pr(gn.current);
      var o = null;
      switch (n) {
        case "input":
          a = ke(e, a), r = ke(e, r), o = [];
          break;
        case "select":
          a = J({}, a, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = yt(e, a), r = yt(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ss);
      }
      Re(n, r);
      var d;
      n = null;
      for (R in a) if (!r.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null) if (R === "style") {
        var p = a[R];
        for (d in p) p.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (h.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in r) {
        var y = r[R];
        if (p = a?.[R], r.hasOwnProperty(R) && y !== p && (y != null || p != null)) if (R === "style") if (p) {
          for (d in p) !p.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && p[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          R,
          n
        )), n = y;
        else R === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, p = p ? p.__html : void 0, y != null && p !== y && (o = o || []).push(R, y)) : R === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(R, "" + y) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (h.hasOwnProperty(R) ? (y != null && R === "onScroll" && qe("scroll", e), o || p === y || (o = [])) : (o = o || []).push(R, y));
      }
      n && (o = o || []).push("style", n);
      var R = o;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, Tc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Fi(e, t) {
    if (!rt) switch (e.tailMode) {
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
  function Ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Oh(e, t, n) {
    var r = t.pendingProps;
    switch (tl(t), t.tag) {
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
        return Ct(t), null;
      case 1:
        return Lt(t.type) && Es(), Ct(t), null;
      case 3:
        return r = t.stateNode, Ur(), et($t), et(Et), ml(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ms(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, an !== null && (Ul(an), an = null))), $l(e, t), Ct(t), null;
      case 5:
        fl(t);
        var a = pr(Ai.current);
        if (n = t.type, e !== null && t.stateNode != null) _c(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Ct(t), null;
          }
          if (e = pr(gn.current), Ms(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[yn] = t, r[Ci] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                qe("cancel", r), qe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < wi.length; a++) qe(wi[a], r);
                break;
              case "source":
                qe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                qe(
                  "error",
                  r
                ), qe("load", r);
                break;
              case "details":
                qe("toggle", r);
                break;
              case "input":
                Pe(r, o), qe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, qe("invalid", r);
                break;
              case "textarea":
                Je(r, o), qe("invalid", r);
            }
            Re(n, o), a = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var p = o[d];
              d === "children" ? typeof p == "string" ? r.textContent !== p && (o.suppressHydrationWarning !== !0 && js(r.textContent, p, e), a = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (o.suppressHydrationWarning !== !0 && js(
                r.textContent,
                p,
                e
              ), a = ["children", "" + p]) : h.hasOwnProperty(d) && p != null && d === "onScroll" && qe("scroll", r);
            }
            switch (n) {
              case "input":
                fe(r), Ye(r, o, !0);
                break;
              case "textarea":
                fe(r), tt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ss);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[yn] = t, e[Ci] = r, Cc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ae(n, r), n) {
                case "dialog":
                  qe("cancel", e), qe("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < wi.length; a++) qe(wi[a], e);
                  a = r;
                  break;
                case "source":
                  qe("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  qe(
                    "error",
                    e
                  ), qe("load", e), a = r;
                  break;
                case "details":
                  qe("toggle", e), a = r;
                  break;
                case "input":
                  Pe(e, r), a = ke(e, r), qe("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = J({}, r, { value: void 0 }), qe("invalid", e);
                  break;
                case "textarea":
                  Je(e, r), a = yt(e, r), qe("invalid", e);
                  break;
                default:
                  a = r;
              }
              Re(n, a), p = a;
              for (o in p) if (p.hasOwnProperty(o)) {
                var y = p[o];
                o === "style" ? Wt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && nn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Gt(e, y) : typeof y == "number" && Gt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (h.hasOwnProperty(o) ? y != null && o === "onScroll" && qe("scroll", e) : y != null && A(e, o, y, d));
              }
              switch (n) {
                case "input":
                  fe(e), Ye(e, r, !1);
                  break;
                case "textarea":
                  fe(e), tt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? He(e, !!r.multiple, o, !1) : r.defaultValue != null && He(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ss);
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
        return Ct(t), null;
      case 6:
        if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = pr(Ai.current), pr(gn.current), Ms(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yn] = t, (o = r.nodeValue !== n) && (e = Bt, e !== null)) switch (e.tag) {
              case 3:
                js(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && js(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yn] = t, t.stateNode = r;
        }
        return Ct(t), null;
      case 13:
        if (et(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Au(), br(), t.flags |= 98560, o = !1;
          else if (o = Ms(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[yn] = t;
            } else br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ct(t), o = !1;
          } else an !== null && (Ul(an), an = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? ht === 0 && (ht = 3) : Wl())), t.updateQueue !== null && (t.flags |= 4), Ct(t), null);
      case 4:
        return Ur(), $l(e, t), e === null && Ei(t.stateNode.containerInfo), Ct(t), null;
      case 10:
        return ll(t.type._context), Ct(t), null;
      case 17:
        return Lt(t.type) && Es(), Ct(t), null;
      case 19:
        if (et(st), o = t.memoizedState, o === null) return Ct(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Fi(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Os(e), d !== null) {
              for (t.flags |= 128, Fi(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Xe(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ge() > Qr && (t.flags |= 128, r = !0, Fi(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Os(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fi(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !rt) return Ct(t), null;
          } else 2 * ge() - o.renderingStartTime > Qr && n !== 1073741824 && (t.flags |= 128, r = !0, Fi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (n = o.last, n !== null ? n.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ge(), t.sibling = null, n = st.current, Xe(st, r ? n & 1 | 2 : n & 1), t) : (Ct(t), null);
      case 22:
      case 23:
        return Gl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ct(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Fh(e, t) {
    switch (tl(t), t.tag) {
      case 1:
        return Lt(t.type) && Es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ur(), et($t), et(Et), ml(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return fl(t), null;
      case 13:
        if (et(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return et(st), null;
      case 4:
        return Ur(), null;
      case 10:
        return ll(t.type._context), null;
      case 22:
      case 23:
        return Gl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Us = !1, _t = !1, Ih = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function Gr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ot(e, t, r);
    }
    else n.current = null;
  }
  function Ll(e, t, n) {
    try {
      n();
    } catch (r) {
      ot(e, t, r);
    }
  }
  var Mc = !1;
  function Dh(e, t) {
    if (Ga = cs, e = lu(), Da(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, p = -1, y = -1, R = 0, G = 0, W = e, U = null;
          t: for (; ; ) {
            for (var ie; W !== n || a !== 0 && W.nodeType !== 3 || (p = d + a), W !== o || r !== 0 && W.nodeType !== 3 || (y = d + r), W.nodeType === 3 && (d += W.nodeValue.length), (ie = W.firstChild) !== null; )
              U = W, W = ie;
            for (; ; ) {
              if (W === e) break t;
              if (U === n && ++R === a && (p = d), U === o && ++G === r && (y = d), (ie = W.nextSibling) !== null) break;
              W = U, U = W.parentNode;
            }
            W = ie;
          }
          n = p === -1 || y === -1 ? null : { start: p, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Wa = { focusedElem: e, selectionRange: n }, cs = !1, ae = t; ae !== null; ) if (t = ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ae = e;
    else for (; ae !== null; ) {
      t = ae;
      try {
        var ce = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ce !== null) {
              var he = ce.memoizedProps, ut = ce.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? he : ln(t.type, he), ut);
              _.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var M = t.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (Y) {
        ot(t, t.return, Y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ae = e;
        break;
      }
      ae = t.return;
    }
    return ce = Mc, Mc = !1, ce;
  }
  function Ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && Ll(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Ks(e, t) {
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
  function Ol(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Pc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[Ci], delete t[Xa], delete t[xh], delete t[jh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ac(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Rc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ac(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ss));
    else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
  }
  function Il(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Il(e, t, n), e = e.sibling; e !== null; ) Il(e, t, n), e = e.sibling;
  }
  var jt = null, on = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) $c(e, t, n), n = n.sibling;
  }
  function $c(e, t, n) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(is, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _t || Gr(n, t);
      case 6:
        var r = jt, a = on;
        jt = null, Zn(e, t, n), jt = r, on = a, jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
        break;
      case 18:
        jt !== null && (on ? (e = jt, n = n.stateNode, e.nodeType === 8 ? Ja(e.parentNode, n) : e.nodeType === 1 && Ja(e, n), pi(e)) : Ja(jt, n.stateNode));
        break;
      case 4:
        r = jt, a = on, jt = n.stateNode.containerInfo, on = !0, Zn(e, t, n), jt = r, on = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var o = a, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ll(n, t, d), a = a.next;
          } while (a !== r);
        }
        Zn(e, t, n);
        break;
      case 1:
        if (!_t && (Gr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          ot(n, t, p);
        }
        Zn(e, t, n);
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (_t = (r = _t) || n.memoizedState !== null, Zn(e, t, n), _t = r) : Zn(e, t, n);
        break;
      default:
        Zn(e, t, n);
    }
  }
  function Lc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ih()), t.forEach(function(r) {
        var a = Wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function un(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, d = t, p = d;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              jt = p.stateNode, on = !1;
              break e;
            case 3:
              jt = p.stateNode.containerInfo, on = !0;
              break e;
            case 4:
              jt = p.stateNode.containerInfo, on = !0;
              break e;
          }
          p = p.return;
        }
        if (jt === null) throw Error(u(160));
        $c(o, d, a), jt = null, on = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (R) {
        ot(a, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oc(t, e), t = t.sibling;
  }
  function Oc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(t, e), jn(e), r & 4) {
          try {
            Ii(3, e, e.return), Ks(3, e);
          } catch (he) {
            ot(e, e.return, he);
          }
          try {
            Ii(5, e, e.return);
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 1:
        un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return);
        break;
      case 5:
        if (un(t, e), jn(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Gt(a, "");
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, p = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            p === "input" && o.type === "radio" && o.name != null && we(a, o), Ae(p, d);
            var R = Ae(p, o);
            for (d = 0; d < y.length; d += 2) {
              var G = y[d], W = y[d + 1];
              G === "style" ? Wt(a, W) : G === "dangerouslySetInnerHTML" ? nn(a, W) : G === "children" ? Gt(a, W) : A(a, G, W, R);
            }
            switch (p) {
              case "input":
                $e(a, o);
                break;
              case "textarea":
                be(a, o);
                break;
              case "select":
                var U = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var ie = o.value;
                ie != null ? He(a, !!o.multiple, ie, !1) : U !== !!o.multiple && (o.defaultValue != null ? He(
                  a,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : He(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[Ci] = o;
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 6:
        if (un(t, e), jn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 3:
        if (un(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          pi(t.containerInfo);
        } catch (he) {
          ot(e, e.return, he);
        }
        break;
      case 4:
        un(t, e), jn(e);
        break;
      case 13:
        un(t, e), jn(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (bl = ge())), r & 4 && Lc(e);
        break;
      case 22:
        if (G = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (R = _t) || G, un(t, e), _t = R) : un(t, e), jn(e), r & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !G && (e.mode & 1) !== 0) for (ae = e, G = e.child; G !== null; ) {
            for (W = ae = G; ae !== null; ) {
              switch (U = ae, ie = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, U, U.return);
                  break;
                case 1:
                  Gr(U, U.return);
                  var ce = U.stateNode;
                  if (typeof ce.componentWillUnmount == "function") {
                    r = U, n = U.return;
                    try {
                      t = r, ce.props = t.memoizedProps, ce.state = t.memoizedState, ce.componentWillUnmount();
                    } catch (he) {
                      ot(r, n, he);
                    }
                  }
                  break;
                case 5:
                  Gr(U, U.return);
                  break;
                case 22:
                  if (U.memoizedState !== null) {
                    Dc(W);
                    continue;
                  }
              }
              ie !== null ? (ie.return = U, ae = ie) : Dc(W);
            }
            G = G.sibling;
          }
          e: for (G = null, W = e; ; ) {
            if (W.tag === 5) {
              if (G === null) {
                G = W;
                try {
                  a = W.stateNode, R ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (p = W.stateNode, y = W.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, p.style.display = ye("display", d));
                } catch (he) {
                  ot(e, e.return, he);
                }
              }
            } else if (W.tag === 6) {
              if (G === null) try {
                W.stateNode.nodeValue = R ? "" : W.memoizedProps;
              } catch (he) {
                ot(e, e.return, he);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === e) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === e) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === e) break e;
              G === W && (G = null), W = W.return;
            }
            G === W && (G = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        un(t, e), jn(e), r & 4 && Lc(e);
        break;
      case 21:
        break;
      default:
        un(
          t,
          e
        ), jn(e);
    }
  }
  function jn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ac(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (Gt(a, ""), r.flags &= -33);
            var o = Rc(e);
            Il(e, o, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, p = Rc(e);
            Fl(e, p, d);
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
  function zh(e, t, n) {
    ae = e, Fc(e);
  }
  function Fc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ae !== null; ) {
      var a = ae, o = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || Us;
        if (!d) {
          var p = a.alternate, y = p !== null && p.memoizedState !== null || _t;
          p = Us;
          var R = _t;
          if (Us = d, (_t = y) && !R) for (ae = a; ae !== null; ) d = ae, y = d.child, d.tag === 22 && d.memoizedState !== null ? zc(a) : y !== null ? (y.return = d, ae = y) : zc(a);
          for (; o !== null; ) ae = o, Fc(o), o = o.sibling;
          ae = a, Us = p, _t = R;
        }
        Ic(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, ae = o) : Ic(e);
    }
  }
  function Ic(e) {
    for (; ae !== null; ) {
      var t = ae;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Ks(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Du(t, o, r);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Du(t, d, n);
              }
              break;
            case 5:
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
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
                var R = t.alternate;
                if (R !== null) {
                  var G = R.memoizedState;
                  if (G !== null) {
                    var W = G.dehydrated;
                    W !== null && pi(W);
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
          _t || t.flags & 512 && Ol(t);
        } catch (U) {
          ot(t, t.return, U);
        }
      }
      if (t === e) {
        ae = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ae = n;
        break;
      }
      ae = t.return;
    }
  }
  function Dc(e) {
    for (; ae !== null; ) {
      var t = ae;
      if (t === e) {
        ae = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ae = n;
        break;
      }
      ae = t.return;
    }
  }
  function zc(e) {
    for (; ae !== null; ) {
      var t = ae;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ks(4, t);
            } catch (y) {
              ot(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                ot(t, a, y);
              }
            }
            var o = t.return;
            try {
              Ol(t);
            } catch (y) {
              ot(t, o, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Ol(t);
            } catch (y) {
              ot(t, d, y);
            }
        }
      } catch (y) {
        ot(t, t.return, y);
      }
      if (t === e) {
        ae = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, ae = p;
        break;
      }
      ae = t.return;
    }
  }
  var bh = Math.ceil, Gs = H.ReactCurrentDispatcher, Dl = H.ReactCurrentOwner, en = H.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, St = 0, Ut = 0, Wr = Wn(0), ht = 0, Di = null, kr = 0, Ws = 0, zl = 0, zi = null, Ft = null, bl = 0, Qr = 1 / 0, On = null, Qs = !1, Vl = null, qn = null, Ys = !1, er = null, Js = 0, bi = 0, Bl = null, Xs = -1, Zs = 0;
  function At() {
    return (De & 6) !== 0 ? ge() : Xs !== -1 ? Xs : Xs = ge();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && St !== 0 ? St & -St : wh.transition !== null ? (Zs === 0 && (Zs = Ro()), Zs) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vo(e.type)), e);
  }
  function cn(e, t, n, r) {
    if (50 < bi) throw bi = 0, Bl = null, Error(u(185));
    ci(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Ws |= n), ht === 4 && nr(e, St)), It(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Qr = ge() + 500, Cs && Yn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    wf(e, t);
    var r = ls(e, e === vt ? St : 0);
    if (r === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? Sh(Vc.bind(null, e)) : Cu(Vc.bind(null, e)), yh(function() {
        (De & 6) === 0 && Yn();
      }), n = null;
      else {
        switch ($o(r)) {
          case 1:
            n = lt;
            break;
          case 4:
            n = or;
            break;
          case 16:
            n = zn;
            break;
          case 536870912:
            n = Ao;
            break;
          default:
            n = zn;
        }
        n = Yc(n, bc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bc(e, t) {
    if (Xs = -1, Zs = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Yr() && e.callbackNode !== n) return null;
    var r = ls(e, e === vt ? St : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = qs(e, r);
    else {
      t = r;
      var a = De;
      De |= 2;
      var o = Hc();
      (vt !== e || St !== t) && (On = null, Qr = ge() + 500, gr(e, t));
      do
        try {
          Hh();
          break;
        } catch (p) {
          Bc(e, p);
        }
      while (!0);
      al(), Gs.current = o, De = a, dt !== null ? t = 0 : (vt = null, St = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (a = Sa(e), a !== 0 && (r = a, t = Hl(e, a))), t === 1) throw n = Di, gr(e, 0), nr(e, r), It(e, ge()), n;
      if (t === 6) nr(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Vh(a) && (t = qs(e, r), t === 2 && (o = Sa(e), o !== 0 && (r = o, t = Hl(e, o))), t === 1)) throw n = Di, gr(e, 0), nr(e, r), It(e, ge()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            xr(e, Ft, On);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = bl + 500 - ge(), 10 < t)) {
              if (ls(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                At(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Ya(xr.bind(null, e, Ft, On), t);
              break;
            }
            xr(e, Ft, On);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - rn(r);
              o = 1 << d, d = t[d], d > a && (a = d), r &= ~o;
            }
            if (r = a, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ya(xr.bind(null, e, Ft, On), r);
              break;
            }
            xr(e, Ft, On);
            break;
          case 5:
            xr(e, Ft, On);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return It(e, ge()), e.callbackNode === n ? bc.bind(null, e) : null;
  }
  function Hl(e, t) {
    var n = zi;
    return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = qs(e, t), e !== 2 && (t = Ft, Ft = n, t !== null && Ul(t)), e;
  }
  function Ul(e) {
    Ft === null ? Ft = e : Ft.push.apply(Ft, e);
  }
  function Vh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], o = a.getSnapshot;
          a = a.value;
          try {
            if (!sn(o(), a)) return !1;
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
  function nr(e, t) {
    for (t &= ~zl, t &= ~Ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - rn(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Vc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Yr();
    var t = ls(e, 0);
    if ((t & 1) === 0) return It(e, ge()), null;
    var n = qs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Sa(e);
      r !== 0 && (t = r, n = Hl(e, r));
    }
    if (n === 1) throw n = Di, gr(e, 0), nr(e, t), It(e, ge()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xr(e, Ft, On), It(e, ge()), null;
  }
  function Kl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Qr = ge() + 500, Cs && Yn());
    }
  }
  function yr(e) {
    er !== null && er.tag === 0 && (De & 6) === 0 && Yr();
    var t = De;
    De |= 1;
    var n = en.transition, r = Ue;
    try {
      if (en.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = r, en.transition = n, De = t, (De & 6) === 0 && Yn();
    }
  }
  function Gl() {
    Ut = Wr.current, et(Wr);
  }
  function gr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, kh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (tl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Es();
          break;
        case 3:
          Ur(), et($t), et(Et), ml();
          break;
        case 5:
          fl(r);
          break;
        case 4:
          Ur();
          break;
        case 13:
          et(st);
          break;
        case 19:
          et(st);
          break;
        case 10:
          ll(r.type._context);
          break;
        case 22:
        case 23:
          Gl();
      }
      n = n.return;
    }
    if (vt = e, dt = e = rr(e.current, null), St = Ut = t, ht = 0, Di = null, zl = Ws = kr = 0, Ft = zi = null, mr !== null) {
      for (t = 0; t < mr.length; t++) if (n = mr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = a, r.next = d;
        }
        n.pending = r;
      }
      mr = null;
    }
    return e;
  }
  function Bc(e, t) {
    do {
      var n = dt;
      try {
        if (al(), Fs.current = bs, Is) {
          for (var r = at.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Is = !1;
        }
        if (vr = 0, pt = ft = at = null, Ri = !1, $i = 0, Dl.current = null, n === null || n.return === null) {
          ht = 1, Di = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, p = n, y = t;
          if (t = St, p.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var R = y, G = p, W = G.tag;
            if ((G.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var U = G.alternate;
              U ? (G.updateQueue = U.updateQueue, G.memoizedState = U.memoizedState, G.lanes = U.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ie = hc(d);
            if (ie !== null) {
              ie.flags &= -257, mc(ie, d, p, o, t), ie.mode & 1 && fc(o, R, t), t = ie, y = R;
              var ce = t.updateQueue;
              if (ce === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(y), t.updateQueue = he;
              } else ce.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                fc(o, R, t), Wl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (rt && p.mode & 1) {
            var ut = hc(d);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), mc(ut, d, p, o, t), il(Kr(y, p));
              break e;
            }
          }
          o = y = Kr(y, p), ht !== 4 && (ht = 2), zi === null ? zi = [o] : zi.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = cc(o, y, t);
                Iu(o, _);
                break e;
              case 1:
                p = y;
                var x = o.type, M = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (qn === null || !qn.has(M)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var Y = dc(o, p, t);
                  Iu(o, Y);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Kc(n);
      } catch (me) {
        t = me, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Hc() {
    var e = Gs.current;
    return Gs.current = bs, e === null ? bs : e;
  }
  function Wl() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), vt === null || (kr & 268435455) === 0 && (Ws & 268435455) === 0 || nr(vt, St);
  }
  function qs(e, t) {
    var n = De;
    De |= 2;
    var r = Hc();
    (vt !== e || St !== t) && (On = null, gr(e, t));
    do
      try {
        Bh();
        break;
      } catch (a) {
        Bc(e, a);
      }
    while (!0);
    if (al(), De = n, Gs.current = r, dt !== null) throw Error(u(261));
    return vt = null, St = 0, ht;
  }
  function Bh() {
    for (; dt !== null; ) Uc(dt);
  }
  function Hh() {
    for (; dt !== null && !L(); ) Uc(dt);
  }
  function Uc(e) {
    var t = Qc(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? Kc(e) : dt = t, Dl.current = null;
  }
  function Kc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Oh(n, t, Ut), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = Fh(n, t), n !== null) {
          n.flags &= 32767, dt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ht = 6, dt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function xr(e, t, n) {
    var r = Ue, a = en.transition;
    try {
      en.transition = null, Ue = 1, Uh(e, t, n, r);
    } finally {
      en.transition = a, Ue = r;
    }
    return null;
  }
  function Uh(e, t, n, r) {
    do
      Yr();
    while (er !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Ef(e, o), e === vt && (dt = vt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ys || (Ys = !0, Yc(zn, function() {
      return Yr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = en.transition, en.transition = null;
      var d = Ue;
      Ue = 1;
      var p = De;
      De |= 4, Dl.current = null, Dh(e, n), Oc(n, e), ch(Wa), cs = !!Ga, Wa = Ga = null, e.current = n, zh(n), oe(), De = p, Ue = d, en.transition = o;
    } else e.current = n;
    if (Ys && (Ys = !1, er = e, Js = a), o = e.pendingLanes, o === 0 && (qn = null), yf(n.stateNode), It(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (Qs) throw Qs = !1, e = Vl, Vl = null, e;
    return (Js & 1) !== 0 && e.tag !== 0 && Yr(), o = e.pendingLanes, (o & 1) !== 0 ? e === Bl ? bi++ : (bi = 0, Bl = e) : bi = 0, Yn(), null;
  }
  function Yr() {
    if (er !== null) {
      var e = $o(Js), t = en.transition, n = Ue;
      try {
        if (en.transition = null, Ue = 16 > e ? 16 : e, er === null) var r = !1;
        else {
          if (e = er, er = null, Js = 0, (De & 6) !== 0) throw Error(u(331));
          var a = De;
          for (De |= 4, ae = e.current; ae !== null; ) {
            var o = ae, d = o.child;
            if ((ae.flags & 16) !== 0) {
              var p = o.deletions;
              if (p !== null) {
                for (var y = 0; y < p.length; y++) {
                  var R = p[y];
                  for (ae = R; ae !== null; ) {
                    var G = ae;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ii(8, G, o);
                    }
                    var W = G.child;
                    if (W !== null) W.return = G, ae = W;
                    else for (; ae !== null; ) {
                      G = ae;
                      var U = G.sibling, ie = G.return;
                      if (Pc(G), G === R) {
                        ae = null;
                        break;
                      }
                      if (U !== null) {
                        U.return = ie, ae = U;
                        break;
                      }
                      ae = ie;
                    }
                  }
                }
                var ce = o.alternate;
                if (ce !== null) {
                  var he = ce.child;
                  if (he !== null) {
                    ce.child = null;
                    do {
                      var ut = he.sibling;
                      he.sibling = null, he = ut;
                    } while (he !== null);
                  }
                }
                ae = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, ae = d;
            else e: for (; ae !== null; ) {
              if (o = ae, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ii(9, o, o.return);
              }
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, ae = _;
                break e;
              }
              ae = o.return;
            }
          }
          var x = e.current;
          for (ae = x; ae !== null; ) {
            d = ae;
            var M = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && M !== null) M.return = d, ae = M;
            else e: for (d = x; ae !== null; ) {
              if (p = ae, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ks(9, p);
                }
              } catch (me) {
                ot(p, p.return, me);
              }
              if (p === d) {
                ae = null;
                break e;
              }
              var Y = p.sibling;
              if (Y !== null) {
                Y.return = p.return, ae = Y;
                break e;
              }
              ae = p.return;
            }
          }
          if (De = a, Yn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(is, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ue = n, en.transition = t;
      }
    }
    return !1;
  }
  function Gc(e, t, n) {
    t = Kr(n, t), t = cc(e, t, 1), e = Xn(e, t, 1), t = At(), e !== null && (ci(e, 1, t), It(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) Gc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))) {
          e = Kr(n, e), e = dc(t, e, 1), t = Xn(t, e, 1), e = At(), t !== null && (ci(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Kh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (St & n) === n && (ht === 4 || ht === 3 && (St & 130023424) === St && 500 > ge() - bl ? gr(e, 0) : zl |= n), It(e, t);
  }
  function Wc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = as, as <<= 1, (as & 130023424) === 0 && (as = 4194304)));
    var n = At();
    e = Rn(e, t), e !== null && (ci(e, t, n), It(e, n));
  }
  function Gh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wc(e, n);
  }
  function Wh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Wc(e, n);
  }
  var Qc;
  Qc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $t.current) Ot = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ot = !1, Lh(e, t, n);
      Ot = (e.flags & 131072) !== 0;
    }
    else Ot = !1, rt && (t.flags & 1048576) !== 0 && _u(t, Ts, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Hs(e, t), e = t.pendingProps;
        var a = Ir(t, Et.current);
        Hr(t, n), a = kl(null, t, r, e, a, n);
        var o = yl();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lt(r) ? (o = !0, Ns(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, cl(t), a.updater = Vs, t.stateNode = a, a._reactInternals = t, El(t, r, e, n), t = Tl(null, t, r, !0, o, n)) : (t.tag = 0, rt && o && el(t), Pt(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Hs(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Yh(r), e = ln(r, e), a) {
            case 0:
              t = _l(null, t, r, e, n);
              break e;
            case 1:
              t = xc(null, t, r, e, n);
              break e;
            case 11:
              t = pc(null, t, r, e, n);
              break e;
            case 14:
              t = vc(null, t, r, ln(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), _l(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), xc(e, t, r, a, n);
      case 3:
        e: {
          if (jc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, Fu(e, t), Ls(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = Kr(Error(u(423)), t), t = Sc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Kr(Error(u(424)), t), t = Sc(e, t, r, n, a);
            break e;
          } else for (Ht = Gn(t.stateNode.containerInfo.firstChild), Bt = t, rt = !0, an = null, n = Lu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (br(), r === a) {
              t = Ln(e, t, n);
              break e;
            }
            Pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return zu(t), e === null && rl(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = a.children, Qa(r, a) ? d = null : o !== null && Qa(r, o) && (t.flags |= 32), gc(e, t), Pt(e, t, d, n), t.child;
      case 6:
        return e === null && rl(t), null;
      case 13:
        return wc(e, t, n);
      case 4:
        return dl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vr(t, null, r, n) : Pt(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), pc(e, t, r, a, n);
      case 7:
        return Pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, d = a.value, Xe(As, r._currentValue), r._currentValue = d, o !== null) if (sn(o.value, d)) {
            if (o.children === a.children && !$t.current) {
              t = Ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var p = o.dependencies;
            if (p !== null) {
              d = o.child;
              for (var y = p.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = $n(-1, n & -n), y.tag = 2;
                    var R = o.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var G = R.pending;
                      G === null ? y.next = y : (y.next = G.next, G.next = y), R.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), ol(
                    o.return,
                    n,
                    t
                  ), p.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) d = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (d = o.return, d === null) throw Error(u(341));
              d.lanes |= n, p = d.alternate, p !== null && (p.lanes |= n), ol(d, n, t), d = o.sibling;
            } else d = o.child;
            if (d !== null) d.return = o;
            else for (d = o; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (o = d.sibling, o !== null) {
                o.return = d.return, d = o;
                break;
              }
              d = d.return;
            }
            o = d;
          }
          Pt(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Hr(t, n), a = Zt(a), r = r(a), t.flags |= 1, Pt(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = ln(r, t.pendingProps), a = ln(r.type, a), vc(e, t, r, a, n);
      case 15:
        return kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ln(r, a), Hs(e, t), t.tag = 1, Lt(r) ? (e = !0, Ns(t)) : e = !1, Hr(t, n), oc(t, r, a), El(t, r, a, n), Tl(null, t, r, !0, e, n);
      case 19:
        return Nc(e, t, n);
      case 22:
        return yc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Yc(e, t) {
    return Cn(e, t);
  }
  function Qh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, n, r) {
    return new Qh(e, t, n, r);
  }
  function Ql(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Yh(e) {
    if (typeof e == "function") return Ql(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Oe) return 11;
      if (e === K) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = tn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ea(e, t, n, r, a, o) {
    var d = 2;
    if (r = e, typeof e == "function") Ql(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case P:
        return jr(n.children, a, o, t);
      case B:
        d = 8, a |= 8;
        break;
      case ne:
        return e = tn(12, n, t, a | 2), e.elementType = ne, e.lanes = o, e;
      case Ne:
        return e = tn(13, n, t, a), e.elementType = Ne, e.lanes = o, e;
      case Me:
        return e = tn(19, n, t, a), e.elementType = Me, e.lanes = o, e;
      case re:
        return ta(n, a, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case se:
            d = 10;
            break e;
          case Se:
            d = 9;
            break e;
          case Oe:
            d = 11;
            break e;
          case K:
            d = 14;
            break e;
          case ue:
            d = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = tn(d, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function jr(e, t, n, r) {
    return e = tn(7, e, r, t), e.lanes = n, e;
  }
  function ta(e, t, n, r) {
    return e = tn(22, e, r, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Yl(e, t, n) {
    return e = tn(6, e, null, t), e.lanes = n, e;
  }
  function Jl(e, t, n) {
    return t = tn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Jh(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wa(0), this.expirationTimes = wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wa(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Xl(e, t, n, r, a, o, d, p, y) {
    return e = new Jh(e, t, n, p, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cl(o), e;
  }
  function Xh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: te, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Jc(e) {
    if (!e) return Qn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Lt(t.type)) {
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
      if (Lt(n)) return Eu(e, n, t);
    }
    return t;
  }
  function Xc(e, t, n, r, a, o, d, p, y) {
    return e = Xl(n, r, !0, e, a, o, d, p, y), e.context = Jc(null), n = e.current, r = At(), a = tr(n), o = $n(r, a), o.callback = t ?? null, Xn(n, o, a), e.current.lanes = a, ci(e, a, r), It(e, r), e;
  }
  function na(e, t, n, r) {
    var a = t.current, o = At(), d = tr(a);
    return n = Jc(n), t.context === null ? t.context = n : t.pendingContext = n, t = $n(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(a, t, d), e !== null && (cn(e, a, d, o), $s(e, a, d)), d;
  }
  function ra(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Zc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Zl(e, t) {
    Zc(e, t), (e = e.alternate) && Zc(e, t);
  }
  function Zh() {
    return null;
  }
  var qc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ql(e) {
    this._internalRoot = e;
  }
  ia.prototype.render = ql.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    na(e, t, null, null);
  }, ia.prototype.unmount = ql.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yr(function() {
        na(null, e, null, null);
      }), t[Tn] = null;
    }
  };
  function ia(e) {
    this._internalRoot = e;
  }
  ia.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && zo(e);
    }
  };
  function eo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ed() {
  }
  function qh(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var R = ra(d);
          o.call(R);
        };
      }
      var d = Xc(t, r, e, 0, null, !1, !1, "", ed);
      return e._reactRootContainer = d, e[Tn] = d.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var R = ra(y);
        p.call(R);
      };
    }
    var y = Xl(e, 0, !1, null, null, !1, !1, "", ed);
    return e._reactRootContainer = y, e[Tn] = y.current, Ei(e.nodeType === 8 ? e.parentNode : e), yr(function() {
      na(t, y, n, r);
    }), y;
  }
  function aa(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof a == "function") {
        var p = a;
        a = function() {
          var y = ra(d);
          p.call(y);
        };
      }
      na(t, d, e, a);
    } else d = qh(n, t, e, a, r);
    return ra(d);
  }
  Lo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ui(t.pendingLanes);
          n !== 0 && (Ea(t, n | 1), It(t, ge()), (De & 6) === 0 && (Qr = ge() + 500, Yn()));
        }
        break;
      case 13:
        yr(function() {
          var r = Rn(e, 1);
          if (r !== null) {
            var a = At();
            cn(r, e, 1, a);
          }
        }), Zl(e, 1);
    }
  }, Na = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = At();
        cn(t, e, 134217728, n);
      }
      Zl(e, 134217728);
    }
  }, Oo = function(e) {
    if (e.tag === 13) {
      var t = tr(e), n = Rn(e, t);
      if (n !== null) {
        var r = At();
        cn(n, e, t, r);
      }
      Zl(e, t);
    }
  }, Fo = function() {
    return Ue;
  }, Io = function(e, t) {
    var n = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = n;
    }
  }, Qt = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = ws(r);
              if (!a) throw Error(u(90));
              le(r), $e(r, a);
            }
          }
        }
        break;
      case "textarea":
        be(e, n);
        break;
      case "select":
        t = n.value, t != null && He(e, !!n.multiple, t, !1);
    }
  }, Fe = Kl, nt = yr;
  var em = { usingClientEntryPoint: !1, Events: [_i, Or, ws, mn, Dn, Kl] }, Vi = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tm = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ns(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Vi.findFiberByHostInstance || Zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var la = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!la.isDisabled && la.supportsFiber) try {
      is = la.inject(tm), kn = la;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!eo(t)) throw Error(u(200));
    return Xh(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!eo(e)) throw Error(u(299));
    var n = !1, r = "", a = qc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Xl(e, 1, !1, null, null, n, !1, r, a), e[Tn] = t.current, Ei(e.nodeType === 8 ? e.parentNode : e), new ql(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ns(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return yr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!sa(t)) throw Error(u(200));
    return aa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!eo(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", d = qc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Xc(t, null, e, 1, n ?? null, a, !1, o, d), e[Tn] = t.current, Ei(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ia(t);
  }, Dt.render = function(e, t, n) {
    if (!sa(t)) throw Error(u(200));
    return aa(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!sa(e)) throw Error(u(40));
    return e._reactRootContainer ? (yr(function() {
      aa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Kl, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!sa(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return aa(e, t, n, !1, r);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var od;
function cm() {
  if (od) return ro.exports;
  od = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), ro.exports = um(), ro.exports;
}
var ud;
function dm() {
  if (ud) return oa;
  ud = 1;
  var i = cm();
  return oa.createRoot = i.createRoot, oa.hydrateRoot = i.hydrateRoot, oa;
}
var fm = dm();
const hm = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], s = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], h = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, m = 7, k = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], O = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], $ = {
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
  }, F = 26, D = 72, w = 30, N = 54, z = 34, T = 11, A = (F + D) / 2, H = w + (c.length - 1) * z + 30, X = (S) => D + S * N, te = (S) => S === 0 ? A : X(S) - N / 2, P = (S) => w + S * z;
  function B(S, b, I) {
    const ee = s.indexOf(i[S][0]) + Number(I.slice(-1)) - 1, fe = ee % s.length, le = u[fe] + 12 * Math.floor(ee / s.length), pe = S + b - le;
    return s[fe] + (pe < 0 ? "♭" : "♯").repeat(Math.abs(pe));
  }
  function ne(S) {
    return [...S.base, ...S.add].sort((b, I) => b[0] - I[0]);
  }
  function se(S, b, I) {
    const ee = b + (I ? 1 : 0), fe = k[ee % k.length], le = Math.min(...fe.map(([$e]) => $e)), pe = Math.max(...fe.map(([, $e]) => $e));
    let we = (S - h % 12 + 12) % 12 - (I ? 8 : 5) + 12 * Math.floor(ee / k.length);
    return le + we < 0 && (we += 12), pe + we > f.pentatonic && (we -= 12), {
      strings: fe.map(($e) => $e.map((Ye) => Ye + we)),
      start: le + we,
      end: pe + we
    };
  }
  function Se(S, b, I) {
    const ee = I[b], fe = (S + ee - h % 12 + 12) % 12, le = h + fe - ee, pe = c.map((ke, Pe) => {
      const we = b + (c.length - 1 - Pe) * 3;
      return [we, we + 1, we + 2].map(($e) => {
        const Ye = Math.floor($e / I.length), Be = I[$e % I.length];
        return le + Be + 12 * Ye - ke;
      });
    });
    return {
      strings: pe,
      start: Math.min(...pe.map((ke) => ke[0])),
      end: Math.max(...pe.map((ke) => ke.at(-1)))
    };
  }
  function Oe(S, b) {
    const I = [], ee = Math.ceil(-S.end / 12) * 12;
    for (let le = ee; S.start + le <= b; le += 12) {
      const pe = S.strings.map((Pe) => Pe.map((we) => we + le).filter((we) => we >= 0 && we <= b)), ke = pe.flat();
      I.push({
        strings: pe,
        start: Math.min(...ke),
        end: Math.max(...ke),
        partial: S.start + le < 0 || S.end + le > b
      });
    }
    const fe = I.filter((le) => !le.partial);
    return fe.length ? fe : I;
  }
  function Ne(S) {
    return ne(S).length === m;
  }
  function Me(S, b, I) {
    const ee = Ne(b);
    S.querySelector('[value="3nps"]').disabled = !ee, S.value = ee ? I ?? "3nps" : "pentatonic";
  }
  function K(S, b, I, ee, fe) {
    const le = ne(b).map(([pe]) => pe);
    return ee.map((pe) => {
      const ke = pe - 1, Pe = I === "3nps" ? Se(S, ke, le) : se(S, ke, b.base === C), we = fe === void 0 ? [Pe] : Oe(Pe, fe);
      return { number: pe, positions: we };
    });
  }
  function ue(S, b) {
    const I = S.getBoundingClientRect(), ee = S.querySelectorAll(b);
    let fe = 1 / 0;
    ee.forEach((le) => {
      const pe = le.getBoundingClientRect();
      let ke = 0;
      pe.left < I.left ? ke = pe.left - I.left - 8 : pe.right > I.right && (ke = pe.right - I.right + 8), Math.abs(ke) < Math.abs(fe) && (fe = ke);
    }), Number.isFinite(fe) && (S.scrollLeft += fe);
  }
  function re(S, b = !1) {
    const I = S === "3nps" ? m : k.length;
    return Array.from({ length: I }, (ee, fe) => {
      const le = fe + 1;
      return '<label class="box-toggle" data-box="' + le + '"><input type="checkbox" value="' + le + '"' + (b && fe === 0 ? " checked" : "") + "> Boksi " + le + "</label>";
    }).join("");
  }
  function Q(S, b) {
    const I = ne(b), ee = new Map(I.map(([le, pe]) => [le, B(S, le, pe)])), fe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return I.flatMap(([le, pe]) => fe.flatMap(({ suffix: ke, base: Pe }) => {
      const we = Pe.map(([$e]) => ee.get((le + $e) % 12));
      return we.every(Boolean) ? {
        root: (S + le) % 12,
        degree: Number(String(pe).replace(/\D/g, "")),
        name: we[0] + ke,
        notes: we,
        base: Pe,
        add: []
      } : [];
    }));
  }
  function q(S, b) {
    const I = S.base.map(([le]) => (S.root + le) % 12), ee = c.map((le) => {
      const pe = [];
      for (let ke = 0; ke <= b; ke++) {
        const Pe = (le + ke) % 12;
        I.includes(Pe) && pe.push({ fret: ke, pitch: Pe });
      }
      return pe;
    }), fe = [];
    for (let le = 0; le <= ee.length - 3; le++)
      for (const pe of ee[le])
        for (const ke of ee[le + 1])
          if (pe.pitch !== ke.pitch)
            for (const Pe of ee[le + 2]) {
              if (Pe.pitch === pe.pitch || Pe.pitch === ke.pitch) continue;
              const we = [pe.fret, ke.fret, Pe.fret], $e = Math.min(...we), Ye = Math.max(...we);
              if (Ye - $e > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(le, 3, ...we), fe.push({ strings: Be, low: $e, high: Ye });
            }
    return fe.sort((le, pe) => le.high - pe.high || le.low - pe.low);
  }
  const J = {
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
  function E(S, b) {
    const I = J[S + ":" + b];
    if (I) return { frets: I, barre: null };
    let ee = null;
    return g.forEach(({ string: fe, openPC: le, shapes: pe }) => {
      const ke = pe[b];
      if (!ke) return;
      let Pe = (S - le + 12) % 12;
      if (Pe + Math.min(...ke.filter((Ye) => Ye !== null)) < 0 && (Pe += 12), ee && ee.fret <= Pe) return;
      const we = ke.map((Ye) => Ye === null ? null : Pe + Ye), $e = Pe > 0 && ke.at(-1) === 0 ? { fret: Pe, from: fe, to: ke.length - 1 } : null;
      ee = { fret: Pe, frets: we, barre: $e };
    }), ee && { frets: ee.frets, barre: ee.barre };
  }
  function Z(S, { frets: b, barre: I }, ee) {
    const we = [...c].reverse(), $e = b.filter((be) => be > 0), Be = !$e.length || Math.max(...$e) <= 4 && (b.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), Ge = (be) => 24 + be * 14, He = (be) => 30 + (be - Be) * 18 + 18 / 2, yt = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ee + "-ote paksusta kielestä ohueen: " + b.map((be) => be ?? "x").join(" ") + '">';
    for (let be = 0; be <= 4; be++)
      Je += '<line class="' + (be === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + be * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + be * 18) + '"/>';
    return b.forEach((be, tt) => {
      Je += '<line class="string" x1="' + Ge(tt) + '" y1="30" x2="' + Ge(tt) + '" y2="' + yt + '"/>';
    }), Be > 1 && (Je += '<text class="fret-label" x="15" y="' + (He(Be) + 4) + '">' + Be + "</text>"), I && (Je += '<rect class="barre" x="' + (Ge(I.from) - 6.5) + '" y="' + (He(I.fret) - 6.5) + '" width="' + ((I.to - I.from) * 14 + 13) + '" height="13" rx="6.5"/>'), b.forEach((be, tt) => {
      if (be === null) {
        Je += '<text class="marker" x="' + Ge(tt) + '" y="22">×</text>';
        return;
      }
      const Tt = (we[tt] + be) % 12 === S;
      if (be === 0) {
        Je += '<circle class="open' + (Tt ? " root-open" : "") + '" cx="' + Ge(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      I && be === I.fret && tt >= I.from && tt <= I.to && !Tt || (Je += '<circle class="' + (Tt ? "root" : "tone") + '" cx="' + Ge(tt) + '" cy="' + He(be) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function ve(S, b) {
    const I = new URLSearchParams(location.search), ee = i.indexOf(I.get("toonikka")), fe = I.get("asteikko");
    return {
      rootPC: ee === -1 ? S : ee,
      scaleId: Object.hasOwn($, fe) ? fe : b
    };
  }
  function Te(S, b, I) {
    return S + "?" + new URLSearchParams({ toonikka: i[b], asteikko: I });
  }
  function Ce(S, b, I, {
    boxes: ee = [],
    onlyBoxNotes: fe = !1,
    automatic: le = !0,
    focusDegree: pe = "",
    grip: ke = null,
    barre: Pe = null,
    label: we = i[S] + " " + b.name,
    notes: $e = null,
    targets: Ye = !1,
    muteFret: Be = null
  } = {}) {
    const Ge = X(I), He = Ge + 48, yt = He + 28, Je = w - 14, be = P(c.length - 1) + 14, tt = be - Je, Tt = le ? 680 : Math.ceil(yt * 0.64), Kt = ee.flatMap((Ee) => Ee.positions), zt = {};
    b.base.forEach(([Ee, Re]) => zt[(S + Ee) % 12] = { deg: Re, added: !1 }), b.add.forEach(([Ee, Re]) => zt[(S + Ee) % 12] = { deg: Re, added: !0 });
    const nn = c.map((Ee, Re) => !!ke && ke[Re] === null), Gt = !!ke && Be !== null, ct = O.filter((Ee, Re) => nn[Re]).reverse(), In = we + ". " + I + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let ye = '<svg viewBox="0 0 ' + yt + " " + H + '" style="min-width:' + Tt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ye ? "group" : "img") + '" aria-label="' + In + '">';
    ye += '<rect x="' + F + '" y="' + Je + '" width="' + (D - F) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', ye += '<rect x="' + D + '" y="' + Je + '" width="' + (Ge - D) + '" height="' + tt + '" fill="#231a12"/>', ye += '<rect x="' + Ge + '" y="' + Je + '" width="' + (yt - Ge - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let Ee = 1; Ee <= I; Ee++)
      ye += '<line x1="' + X(Ee) + '" y1="' + Je + '" x2="' + X(Ee) + '" y2="' + be + '" stroke="#6f5b47" stroke-width="2"/>';
    ye += '<rect x="' + (D - 3) + '" y="' + Je + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', ye += '<rect x="' + (He - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ye += '<rect x="' + (He - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Wt = (Je + be) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Ee) => Ee <= I).forEach((Ee) => ye += '<circle cx="' + te(Ee) + '" cy="' + Wt + '" r="5.5" fill="#7a6550"/>');
    for (let Ee = 12; Ee <= I; Ee += 12)
      ye += '<circle cx="' + te(Ee) + '" cy="' + (Wt - z) + '" r="5.5" fill="#7a6550"/>', ye += '<circle cx="' + te(Ee) + '" cy="' + (Wt + z) + '" r="5.5" fill="#7a6550"/>';
    ye += '<text x="' + A + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ye += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ye += '<text x="' + He + '" y="' + (H - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Ee = 1; Ee <= I; Ee++)
      ye += '<text x="' + te(Ee) + '" y="' + (H - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Ee + "</text>";
    if (ee.forEach(({ number: Ee, positions: Re }) => {
      Re.forEach((Ae) => {
        const We = Ae.partial ? "box-highlight box-partial" : "box-highlight";
        ye += '<g class="' + We + '" data-box="' + Ee + '" aria-hidden="true">';
        const Ze = Ae.strings.find((gt) => gt.length), Qt = (te(Ze[0]) + te(Ze.at(-1))) / 2;
        ye += '<text class="box-number" x="' + Qt + '" y="12">' + Ee + "</text>", Ae.strings.forEach((gt, bt) => {
          if (!gt.length) return;
          const hn = te(gt[0]) - 16, mn = te(gt.at(-1)) - te(gt[0]) + 32;
          ye += '<rect class="box-band" x="' + hn + '" y="' + (P(bt) - 14) + '" width="' + mn + '" height="28" rx="14"/>';
        }), ye += "</g>";
      });
    }), c.forEach((Ee, Re) => {
      const Ae = 1 + Re * 0.45, We = P(Re), Ze = nn[Re] && !Gt;
      Ze ? ye += '<text class="muted-mark" x="' + A + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : nn[Re] && Be === 0 || (ye += '<line x1="' + (F + 4) + '" y1="' + We + '" x2="' + (D - 4) + '" y2="' + We + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), ye += "<g" + (Ze ? ' opacity=".35"' : "") + ">", ye += '<line x1="' + D + '" y1="' + We + '" x2="' + (He + 5) + '" y2="' + We + '" stroke="#b9b9c4" stroke-width="' + Ae.toFixed(2) + '"/>', ye += '<circle cx="' + (He + 5) + '" cy="' + We + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ye += "</g>", ye += '<text x="13" y="' + (We + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[Re] + "</text>";
    }), ke && Pe && Pe.fret >= 1 && Pe.fret <= I) {
      const Ee = P(Pe.from), Re = P(Pe.to), Ae = Math.min(Ee, Re) - 6, We = Math.max(Ee, Re) + 6;
      ye += '<rect class="barre-indicator" x="' + (te(Pe.fret) - 7) + '" y="' + Ae + '" width="14" height="' + (We - Ae) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Ye && (ye += '<g class="fret-targets">', c.forEach((Ee, Re) => {
      for (let Ae = 0; Ae <= I; Ae++) {
        const We = Ae ? O[Re] + "-kieli, " + Ae + ". nauha" : "vapaa " + O[Re] + "-kieli", Ze = Ae ? N : D - F - 6;
        ye += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + Ae + '" data-midi="' + (Ee + Ae) + '" aria-label="' + We + '" x="' + (te(Ae) - Ze / 2) + '" y="' + (P(Re) - z / 2) + '" width="' + Ze + '" height="' + z + '" fill="transparent"/>';
      }
    }), ye += "</g>"), ($e ?? []).forEach(({ string: Ee, fret: Re, label: Ae, kind: We }) => {
      ye += '<g class="octave-note octave-' + We + '">', ye += '<circle cx="' + te(Re) + '" cy="' + P(Ee) + '" r="' + T + '"/>', ye += '<text x="' + te(Re) + '" y="' + (P(Ee) + 3.5) + '" font-size="' + (Ae.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ae + "</text>", ye += "</g>";
    }), ke && (ye += '<g class="grip-notes">'), ($e ? [] : c).forEach((Ee, Re) => {
      for (let Ae = 0; Ae <= I; Ae++) {
        const We = (Ee + Ae) % 12;
        if (!(We in zt) || ke && ke[Re] !== Ae || fe && !Kt.some(({ strings: mn }) => {
          const Dn = mn[Re];
          return Dn.length > 0 && Ae >= Dn[0] && Ae <= Dn.at(-1);
        })) continue;
        const Ze = zt[We], Qt = Ze.deg === "1", gt = Ze.added ? "#f0a13c" : Qt ? "#4b2fd6" : "#6d4aff", bt = Ze.added ? "#1a1430" : "#fff";
        Ze.deg === pe && (ye += '<circle class="focus-note" cx="' + te(Ae) + '" cy="' + P(Re) + '" r="14.5"/>');
        const hn = ke ? ' data-string="' + (Re + 1) + '" data-fret="' + Ae + '" data-degree="' + Ze.deg + '"' : "";
        ye += "<circle" + hn + ' cx="' + te(Ae) + '" cy="' + P(Re) + '" r="' + T + '" fill="' + gt + '" stroke="' + (Qt ? "#fff" : "#1a1430") + '" stroke-width="' + (Qt ? 2.5 : 1) + '"/>', ye += '<text x="' + te(Ae) + '" y="' + (P(Re) + 3.5) + '" font-size="' + (Ze.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + bt + '" text-anchor="middle">' + Ze.deg + "</text>";
      }
    }), ke && (ye += "</g>"), Gt && nn.forEach((Ee, Re) => {
      if (!Ee) return;
      const Ae = te(Be), We = P(Re);
      ye += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Be + '">', ye += '<circle cx="' + Ae + '" cy="' + We + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', ye += '<text x="' + Ae + '" y="' + (We + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', ye += "</g>";
    }), ye += "</svg>", ye;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: $,
    noteName: B,
    scaleNotes: ne,
    scaleTriads: Q,
    triadGrips: q,
    chordGrip: E,
    renderChordDiagram: Z,
    selectionFromURL: ve,
    selectionHref: Te,
    renderBoard: Ce,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: Ne,
    syncBoxSystem: Me,
    fingeringBoxes: K,
    boxOptions: re,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = hm;
function cd(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function mm(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function pm(i) {
  const s = mm(i), u = Math.round(s), c = (s - u) * 100;
  return { midi: u, cents: c };
}
const ze = globalThis.MusicMapFretboard, Ke = (i) => (i % 12 + 12) % 12, vm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], km = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (i, s = !1, u = !1) => (s ? km : vm)[Ke(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => ze.CHROM[Ke(i)], Gi = (i, s, u) => ze.noteName(Ke(i), s, u);
function ym(i, s) {
  const u = Math.floor(i / 12) - 1;
  return s[0] === "B" && Ke(i) < 2 ? u - 1 : s[0] === "C" && Ke(i) > 9 ? u + 1 : u;
}
const fn = ["ohut E", "B", "G", "D", "A", "paksu E"], Co = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Vd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], gm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Er = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, ya = (i, s) => ({ string: i, fret: s, midi: ze.OPEN_PITCHES[i] + s });
function si(i, s, u) {
  return [...i].sort((c, h) => c - h).flatMap((c) => Array.from({ length: Math.max(0, u - s + 1) }, (h, f) => ya(c, s + f)));
}
const it = (i) => `${i.string}:${i.fret}`, wr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Bd = (i, s) => s === "maj" ? `${ar(i)}-duurisointu` : s === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Wi = [
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
], dd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Hd(i, s) {
  const u = dd[s] ?? dd.E, c = Ke(i - u.root);
  return u.frets.flatMap((h, f) => h === null ? [] : [ya(f, h + c)]);
}
const fa = {
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
}, ga = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, sr = (i, s, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(s, Math.min(u, i)) : c, Sn = (i, s, u) => s.includes(i) ? i : u;
function va(i) {
  const s = { ...fa };
  s.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], s.mode), s.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : s.strings, s.strings.length || (s.strings = [...fa.strings]), s.min = Math.round(sr(i.min, 0, 24, s.min)), s.max = Math.round(sr(i.max, s.min, 24, Math.max(s.min, s.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (s[u] = i[u]);
  return s.check = Sn(i.check, ["class", "pitch"], s.check), s.input = Sn(i.input, ["mic", "board"], s.input), s.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : s.rounds, s.root = Math.round(sr(i.root, 0, 11, s.root)), s.scale = typeof i.scale == "string" && Object.hasOwn(ze.SCALES, i.scale) ? i.scale : s.scale, s.box = Math.round(sr(i.box, 0, 5, s.box)), s.order = Sn(i.order, ["random", "up", "down"], s.order), s.chord = Sn(i.chord, ["maj", "min", "dom7"], s.chord), s.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], s.chordTone), s.chord !== "dom7" && s.chordTone === "7" && (s.chordTone = "build"), s.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], s.shape), s.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : s.intervals, s.intervals.length || (s.intervals = [...fa.intervals]), s.direction = Sn(i.direction, ["up", "down", "both"], s.direction), s.hints = Sn(i.hints, ["off", "always", "fade"], s.hints), s.activity = Sn(i.activity, ["play", "degree"], s.activity), s.minRms = sr(i.minRms, 1e-3, 0.15, s.minRms), s.clarity = sr(i.clarity, 0.85, 0.99, s.clarity), s.stability = sr(i.stability, 120, 800, s.stability), s.cents = sr(i.cents, 10, 45, s.cents), s.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", s;
}
function xm(i, s) {
  const u = new URLSearchParams(i), c = { ...s };
  for (const [h, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(h) && Object.assign(c, { [f]: u.get(h) });
  for (const [h, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(h) && (c[f] = Number(u.get(h)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((h) => Number(h) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [h, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(h) && (c[f] = u.get(h) === "1");
  if (u.has("toonikka")) {
    const h = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = h.charAt(0).toUpperCase() + h.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], k = Math.max(ze.CHROM.indexOf(f), m.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    k >= 0 && (c.root = k);
  }
  return va(c);
}
function jm(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: ze.CHROM[i.root],
    asteikko: i.scale,
    alku: String(i.min),
    loppu: String(i.max),
    boksi: String(i.box),
    kierros: String(i.rounds),
    tarkistus: i.check,
    muoto: i.shape,
    sointu: i.chord,
    jarjestys: i.order,
    vastaus: i.input,
    vihjeet: i.hints,
    tehtava: i.activity,
    sointuaste: i.chordTone,
    suunta: i.direction,
    kielet: i.strings.map((s) => s + 1).join(","),
    intervallit: i.intervals.join(","),
    kromaattinen: i.accidentals ? "1" : "0",
    alennukset: i.flats ? "1" : "0",
    kertaus: i.weak ? "1" : "0",
    vertailu: i.reference ? "1" : "0"
  });
}
const Nr = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, Fn = (i) => i.mode === "scale" && i.order !== "random", Ud = (i) => ["note", "degree"].includes(Nr(i)) ? "class" : Fn(i) ? "pitch" : i.check, ua = (i) => Nr(i) === "mic", fd = "musiikin-kartta:harjoittelu", Kd = 3, fo = () => ({ version: Kd, settings: { ...fa }, stats: {}, recent: [], sessions: [] }), Gd = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, dn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function Sm(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((s) => dn(i[s])) && i.correct <= i.attempts && (i.errors === void 0 || dn(i.errors)) && (i.ema === void 0 || dn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || dn(i.emaMs));
}
function wm(i) {
  return !!i && typeof i.id == "string" && dn(i.count) && dn(i.first) && i.first <= i.count && dn(i.ms) && dn(i.at) && (i.solo === void 0 || dn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || dn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function hd(i) {
  if (!i) return fo();
  const s = JSON.parse(i);
  if (!s || ![1, 2, 3].includes(s.version) || !s.stats || typeof s.stats != "object" || Array.isArray(s.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(s.stats).some((m) => !Sm(m))) throw new Error("Virheellisiä tilastoja");
  if (s.recent !== void 0 && (!Array.isArray(s.recent) || s.recent.some((m) => !m || typeof m.id != "string" || !dn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (s.sessions !== void 0 && (!Array.isArray(s.sessions) || s.sessions.some((m) => !wm(m)))) throw new Error("Virheellisiä kierroksia");
  const u = s.version < 3, c = va(s.settings ?? {}), h = u && s.settings?.hints !== "always" && s.settings?.hints !== "off";
  h && (c.hints = "off");
  const f = {
    version: Kd,
    settings: c,
    stats: Object.fromEntries(Object.entries(s.stats).map(([m, k]) => [m, { ...k, errors: k.errors ?? 0 }])),
    recent: (s.recent ?? []).slice(-500),
    sessions: (s.sessions ?? []).slice(-200)
  };
  return (h || s.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const md = 2500, Em = 8e3, pd = 0.3, Qi = (i) => i.ema ?? i.correct / i.attempts, Yi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function _o(i) {
  if (!i?.attempts) return null;
  const s = Math.max(0, Math.min(1, 1 - (Yi(i) - md) / (Em - md)));
  return Qi(i) * 0.65 + s * 0.35;
}
function Nm(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - _o(i)) * 3;
}
class vd {
  constructor(s) {
    this.storage = s;
    try {
      this.data = hd(s?.getItem(fd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = fo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(fd, JSON.stringify(this.data)), this.warning = "";
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
    const u = Gd(s), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, h = Number(s.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + h,
      errors: c.errors + s.errors,
      totalMs: c.totalMs + s.ms,
      lastSeen: s.at,
      ema: c.attempts ? Qi(c) + pd * (h - Qi(c)) : h,
      emaMs: c.attempts ? Yi(c) + pd * (s.ms - Yi(c)) : s.ms
    };
    Object.defineProperty(this.data.stats, u, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, s].slice(-500), this.save();
  }
  session(s) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== s.id), s].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(s) {
    if (!s.trim()) throw new Error("Tyhjä tiedosto");
    const u = hd(s);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...fo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Cm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), _m = ["e", "B", "G", "D", "A", "E"];
function Wd({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: _m[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Qd = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), Tm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Yd({ min: i, max: s }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - i + 1 }, (u, c) => {
      const h = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: h === 0 ? "open-fret" : "", children: [
        h,
        h > 0 && h % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Cm.has(h) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, h);
    })
  ] }) });
}
function Ji({ area: i, marks: s = [], mutedStrings: u = [], disabled: c = !1, onAnswer: h, caption: f = "Otelauta" }) {
  const m = { "--cols": i.max - i.min + 1 }, { strings: k, min: j, max: O } = i, [v, C] = V.useState({ string: Math.min(...k), fret: j }), $ = V.useRef(null), F = new Map(s.map((T) => [it(T), T])), D = s.map((T) => `${it(T)}${T.kind}`).join(",");
  V.useEffect(() => {
    const T = $.current, A = T?.querySelector(".target, .anchor");
    T && A && (T.scrollLeft += A.getBoundingClientRect().left - T.getBoundingClientRect().left - T.clientWidth / 2 + A.clientWidth / 2);
  }, [D]);
  const [w, N] = V.useState({ left: !1, right: !1 });
  V.useEffect(() => {
    const T = $.current;
    if (!T) return;
    const A = () => {
      const X = T.scrollLeft > 2, te = T.scrollLeft + T.clientWidth < T.scrollWidth - 2;
      N((P) => P.left === X && P.right === te ? P : { left: X, right: te });
    };
    A(), T.addEventListener("scroll", A, { passive: !0 });
    const H = typeof ResizeObserver > "u" ? null : new ResizeObserver(A);
    return H?.observe(T), () => {
      T.removeEventListener("scroll", A), H?.disconnect();
    };
  }, [D, j, O]);
  const z = k.includes(v.string) && v.fret >= j && v.fret <= O ? v : { string: Math.min(...k), fret: j };
  return /* @__PURE__ */ l.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ l.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { ref: $, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: m, children: [
      /* @__PURE__ */ l.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ l.jsx(Yd, { min: j, max: O }),
      /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((T, A) => /* @__PURE__ */ l.jsxs("tr", { className: k.includes(A) ? "" : "unused", style: Qd(A), children: [
        /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${A + 1}. kieli: ${fn[A]}${u.includes(A) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ l.jsx(Wd, { string: A }),
          u.includes(A) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        si([A], j, O).map((H) => {
          const X = F.get(it(H)), te = `${fn[A]}-kieli, ${Er(H.fret)}`;
          return /* @__PURE__ */ l.jsx("td", { className: `${H.fret === 0 ? "open-fret " : ""}${X ? X.kind === "answer" ? "target" : X.kind : ""}`, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "data-string": A,
              "data-fret": H.fret,
              tabIndex: z.string === A && z.fret === H.fret ? 0 : -1,
              onFocus: () => C(H),
              onKeyDown: (P) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) return;
                P.preventDefault();
                const B = [...k].sort((Oe, Ne) => Oe - Ne), ne = B.indexOf(A), se = P.key === "ArrowUp" ? B[Math.max(0, ne - 1)] : P.key === "ArrowDown" ? B[Math.min(B.length - 1, ne + 1)] : A, Se = P.key === "Home" ? j : P.key === "End" ? O : Math.max(j, Math.min(O, H.fret + (P.key === "ArrowRight" ? 1 : P.key === "ArrowLeft" ? -1 : 0)));
                P.currentTarget.closest("table")?.querySelector(`button[data-string="${se}"][data-fret="${Se}"]`)?.focus();
              },
              disabled: c || !k.includes(A),
              "aria-label": te + (X ? `, ${Tm[X.kind]}${X.label ? " " + X.label : ""}` : ""),
              onClick: () => h?.(H),
              children: X ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: X.label || "●" }) : null
            }
          ) }, H.fret);
        })
      ] }, A)) })
    ] }) })
  ] });
}
function Mm({ area: i, stats: s, input: u, check: c, flats: h }) {
  const { strings: f, min: m, max: k } = i, j = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": k - m + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Yd, { min: m, max: k }),
    /* @__PURE__ */ l.jsx("tbody", { children: ze.OPEN_PITCHES.map((O, v) => /* @__PURE__ */ l.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Qd(v), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${fn[v]}`, children: /* @__PURE__ */ l.jsx(Wd, { string: v }) }),
      si([v], m, k).map((C) => {
        const $ = Object.hasOwn(s, j + it(C)) ? s[j + it(C)] : void 0, F = _o($), D = F === null ? "unseen" : $.attempts < 3 ? "few" : F >= 0.8 ? "strong" : F >= 0.5 ? "growing" : "weak", w = `${fn[v]}-kieli, ${Er(C.fret)}, ${Ie(C.midi, h)}`, N = $ ? `${Math.round(F * 100)} %, ${$.correct}/${$.attempts} heti oikein, viime aikoina ${Math.round(Qi($) * 100)} % ja ${(Yi($) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${D}`, title: `${w}: ${N}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: F === null ? "·" : $.attempts < 3 ? "?" : Math.round(F * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            N
          ] })
        ] }, C.fret);
      })
    ] }, v)) })
  ] }) });
}
const Pm = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", xa = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Jd = (i) => ze.fingeringBoxes(i.root, ze.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Cr(i) {
  if (i.mode === "caged") {
    const s = Hd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...s), max: Math.max(...s), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const s = Jd(i);
    return { strings: i.strings, min: s.start, max: s.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function Am(i) {
  const s = Cr(i);
  return s.fixed ? { ...s, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, s.min - 1), max: Math.min(24, s.max + 1) } : s;
}
function Zi(i) {
  const s = Cr(i), u = si(s.strings, s.min, s.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((f) => i.accidentals || ![1, 3, 6, 8, 10].includes(Ke(f.midi)));
  if (i.mode === "caged") {
    const f = new Set(Hd(i.root, i.shape).map(it));
    return u.filter((m) => f.has(it(m)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((f) => xa(i).some(([m]) => Ke(f.midi - i.root) === m));
  if (i.mode !== "scale" || !i.box) return c;
  const h = Jd(i);
  return c.filter((f) => {
    const m = h.strings[f.string];
    return m.length > 0 && f.fret >= m[0] && f.fret <= m.at(-1);
  });
}
function Xd(i, s) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((h) => ({
    iv: h,
    direction: c,
    pairs: s.flatMap((f) => s.filter((m) => m.midi === f.midi + (c === "down" ? -h : h)).map((m) => ({ reference: f, target: m })))
  }))).filter((c) => c.pairs.length);
}
function Rm(i) {
  const s = xa(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? s : s.filter(([, u]) => u.endsWith(i.chordTone));
}
function ho(i) {
  const s = Zi(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!s.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Rm(i).filter(([h]) => !s.some((f) => Ke(f.midi - i.root) === h));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, h]) => h + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Xd(i, s).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(i) && new Set(s.map((h) => h.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function $m(i, s) {
  const u = [...new Map([...s].sort((c, h) => c.midi - h.midi || c.string - h.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function Zd(i) {
  return Fn(i) ? new Set(Zi(i).map((s) => s.midi)).size : i.rounds;
}
function Lm(i, s) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? s <= 3 ? 2 : s <= 6 ? 1 : 0 : 0;
}
function Jr(i, s, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = s.reduce((m, k) => m + k, 0), h = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(h * i.length)];
  let f = h * c;
  for (let m = 0; m < i.length; m++)
    if (f -= s[m], f < 0) return i[m];
  return i.at(-1);
}
const kd = (i, s) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${s}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${s}:${i.activity}` : `scale:${i.root}:${i.scale}:${s}:${i.activity}`;
function Sr(i, s) {
  const u = i.filter((c) => !s(c));
  return u.length ? u : i;
}
function Om(i, s, u = {}, c, h = Math.random) {
  const f = ho(i);
  if (f) throw new Error(f);
  const m = Ud(i), k = Nr(i), j = m === "pitch", O = (P) => i.weak ? Nm(u[Gd({ input: k, check: m, hint: !1, item: P })]) : 1, v = (P) => Jr(P, P.map(() => 1), h), C = Zi(i), $ = { check: m, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const P = Sr(C, (se) => !!c && it(se) === it(c.position)), B = Jr(P, P.map((se) => O(`notes:${it(se)}`)), h), ne = Ie(B.midi, i.flats, j);
    return {
      ...$,
      position: B,
      midi: B.midi,
      name: ne,
      item: `notes:${it(B)}`,
      prompt: `Etsi ${ne} ${Co[B.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const P = (Se) => `ear-note:${Ke(Se.midi)}${i.reference ? ":ref" : ""}`, B = Sr(C, (Se) => !!c && Ke(Se.midi) === Ke(c.midi)), ne = Jr(B, B.map((Se) => O(P(Se))), h), se = i.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...$,
      position: ne,
      midi: ne.midi,
      name: Ie(ne.midi, i.flats),
      item: P(ne),
      choices: "note",
      reference: se,
      sound: se === void 0 ? [ne.midi] : [se, ne.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const P = Sr(C, (ne) => !!c && ne.midi === c.midi), B = Jr(P, P.map((ne) => O(`repeat:${ne.midi}`)), h);
    return {
      ...$,
      position: B,
      midi: B.midi,
      name: Ie(B.midi, i.flats, !0),
      item: `repeat:${B.midi}`,
      sound: [B.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const P = Sr(Xd(i, C), (se) => c?.interval === se.iv && c?.direction === se.direction), B = Jr(P, P.map((se) => O(`interval:${se.iv}:${se.direction}`)), h), ne = v(Sr(B.pairs, (se) => c?.reference === se.reference.midi));
    return {
      ...$,
      position: ne.target,
      midi: ne.target.midi,
      name: Ie(ne.target.midi, i.flats, !0),
      item: `interval:${B.iv}:${B.direction}`,
      interval: B.iv,
      direction: B.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${B.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(ne.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const F = xa(i);
  let D, w = 0;
  if (Fn(i)) {
    const P = $m(i, C);
    w = P.length, D = P[s % P.length];
  } else {
    const P = F.filter(([se]) => C.some((Se) => Ke(Se.midi - i.root) === se)), B = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [F[s % F.length]] : F.filter(([, se]) => se.endsWith(i.chordTone)) : Sr(P, ([se]) => c?.interval === se), [ne] = Jr(B, B.map(([se]) => O(kd(i, se))), h);
    D = v(Sr(C.filter((se) => Ke(se.midi - i.root) === ne), (se) => !!c && it(se) === it(c.position)));
  }
  const N = Ke(D.midi - i.root), z = F.find(([P]) => P === N)[1], T = Gi(i.root, N, z), A = j ? T + ym(D.midi, T) : T, H = i.mode === "scale" ? `${ar(i.root)}-${ze.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : Bd(i.root, i.chord), X = i.mode !== "caged" && i.activity === "degree", te = X ? `${H}: mikä aste on ${T}?` : w ? `${H} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${s % w + 1}/${w}: ${z}. aste (${A}).` : `${H}: etsi ${z}. aste${j ? ` (${A})` : ""}.`;
  return {
    ...$,
    position: D,
    midi: D.midi,
    name: A,
    item: kd(i, N),
    prompt: te,
    degree: z,
    interval: N,
    choices: X ? "degree" : "position"
  };
}
function mo(i, s, u) {
  return Number.isInteger(s) && (u === "class" ? Ke(i) === Ke(s) : i === s);
}
function qd(i, s, u) {
  return mo(s.midi, u.midi, s.check) ? i.mode === "notes" ? u.string === s.position.string : Pm(i) ? Zi(i).some((c) => it(c) === it(u)) : !0 : !1;
}
function Fm(i, s) {
  const u = Cr(i);
  return si(u.strings, u.min, u.max).filter((c) => qd(i, s, c));
}
const wt = (i, s, u) => ({ ...i, label: s, kind: u }), Im = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function Dm(i, s, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, h = Cr(i), f = si(h.strings, h.min, h.max), m = Fm(i, s);
  if (i.mode === "notes") {
    if (c) return { marks: m.map((z) => wt(z, s.name, "answer")), text: `${s.name} on ${Vd[s.position.string]}: ${Er(s.position.fret)}.` };
    const w = f.find((z) => z.string === s.position.string), N = Ie(w.midi, i.flats);
    return {
      marks: [wt(w, N, "anchor")],
      text: `Apupiste: ${gm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [wt(s.position, s.name, "answer")], text: `Sävel on ${s.name}.` } : { marks: [wt(s.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${fn[s.position.string]}-kieli, ${Er(s.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: m.map((w) => wt(w, Ie(w.midi, i.flats, s.check === "pitch"), "answer")), text: `Sävel on ${s.name}.` } : { marks: [], text: `Sävel löytyy ${Co[s.position.string]}.` };
  if (i.mode === "interval") {
    const w = Ie(s.reference, i.flats, !0), N = f.filter((z) => z.midi === s.reference).map((z) => wt(z, w, "anchor"));
    return c ? {
      marks: [...N, ...m.map((z) => wt(z, Ie(z.midi, i.flats, !0), "answer"))],
      text: `${Im(Wi[s.interval])} ${s.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${s.name}.`
    } : { marks: N, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${s.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const k = Zi(i), j = xa(i), O = (w) => j.find(([N]) => N === Ke(w.midi - i.root))?.[1] ?? "", v = Gi(i.root, s.interval, s.degree), C = k.filter((w) => Ke(w.midi - i.root) === 0), $ = (w) => m.some((N) => it(N) === it(w)), F = `${s.degree}. aste on ${v}.`;
  if (i.mode === "caged")
    return c ? { marks: k.map((w) => wt(w, O(w), $(w) ? "answer" : "shape")), text: F } : { marks: k.map((w) => wt(w, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${s.degree}. aste?` };
  const D = i.mode === "scale" ? "asteikon" : "soinnun";
  if (s.choices === "degree") {
    const w = k.filter((N) => Ke(N.midi) === Ke(s.midi));
    return c ? { marks: [...(s.interval === 0 ? [] : C).map((N) => wt(N, "1", "anchor")), ...w.map((N) => wt(N, s.degree, "answer"))], text: `${v} on ${s.degree}. aste.` } : s.interval === 0 ? { marks: w.map((N) => wt(N, v, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((N) => wt(N, "1", "anchor")), ...w.map((N) => wt(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !$(w)).map((w) => wt(w, "1", "anchor")), ...m.map((w) => wt(w, s.degree, "answer"))], text: F } : s.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${ar(i.root)}.` } : { marks: C.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${s.degree}. aste on ${s.interval} puoliaskelta perussävelen yläpuolella.` };
}
class zm {
  constructor(s, u, c, h = () => performance.now(), f = Math.random) {
    this.settings = s, this.stats = u, this.record = c, this.now = h, this.random = f, this.total = Zd(s);
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
      this.question = Om(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Lm(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(s, u, c, h = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(u === "degree" ? s === f.interval : u === "note" ? mo(f.midi, s, "class") : u === "board" ? !!c && qd(this.settings, f, c) : mo(f.midi, s, f.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const k = u === "board" ? c : void 0, j = {
      id: `${this.id}:${this.index}`,
      item: k && this.settings.mode === "notes" ? `notes:${it(k)}` : f.item,
      mode: this.settings.mode,
      input: u,
      check: f.check,
      expected: f.midi,
      played: s,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, h)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return k ? j.position = it(k) : this.settings.mode === "notes" && (j.position = it(f.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function po(i) {
  const s = i.filter((u) => !u.hint);
  return {
    count: i.length,
    first: i.filter((u) => u.first).length,
    solo: s.length,
    soloFirst: s.filter((u) => u.first).length,
    guided: i.length - s.length,
    ms: i.reduce((u, c) => u + c.ms, 0)
  };
}
const vo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], qr = (i) => vo.find(([s]) => s === i)?.[1] ?? i;
function Rt({ label: i, children: s }) {
  const u = V.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    V.cloneElement(s, { id: u })
  ] });
}
function yd({ legend: i, name: s, value: u, options: c, onChange: h, disabled: f }) {
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ l.jsx("legend", { children: i }),
    /* @__PURE__ */ l.jsx("div", { className: "choice-row", children: c.map((m) => /* @__PURE__ */ l.jsxs("label", { className: m.value === u ? "selected" : "", children: [
      /* @__PURE__ */ l.jsx("input", { type: "radio", name: s, value: m.value, checked: m.value === u, onChange: () => h(m.value) }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("strong", { children: m.title }),
        /* @__PURE__ */ l.jsx("small", { children: m.summary })
      ] })
    ] }, m.value)) })
  ] });
}
function gd(i) {
  const s = Cr(i), u = Zd(i), c = Nr(i), h = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = s.fixed === "shape" ? `${i.shape}-muoto, nauhat ${s.min}–${s.max}` : s.fixed === "box" ? `boksi ${i.box}, nauhat ${s.min}–${s.max}` : `nauhat ${s.min}–${s.max}`, m = s.strings.length === 6 ? "" : ` · kielet ${s.strings.map((k) => k + 1).join(", ")}`;
  return `${ga[i.hints].title} · ${h} · ${Fn(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${f}${m}`;
}
function xd({ s: i, change: s, locked: u, problem: c }) {
  const h = V.useId(), f = (v, C) => s({ ...i, [v]: C }), m = Cr(i), k = Nr(i) === "note" || Nr(i) === "degree", j = ["scale", "chord", "caged"].includes(i.mode), O = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (v) => f("mode", v.target.value), children: vo.map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C }, v)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: vo.find(([v]) => v === i.mode)[2] })
    ] }),
    j && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(Rt, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (v) => f("root", Number(v.target.value)), children: ze.CHROM.map((v, C) => /* @__PURE__ */ l.jsx("option", { value: C, children: v }, v)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(ze.SCALES).map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ l.jsxs("select", { value: i.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ l.jsxs("select", { value: i.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ l.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ l.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(wr).map(([v, C]) => /* @__PURE__ */ l.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ l.jsxs("select", { value: i.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ l.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            i.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ l.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ l.jsxs("option", { value: "3", children: [
            "Terssi · ",
            i.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ l.jsx("option", { value: "5", children: "Kvintti · 5" }),
          i.chord === "dom7" && /* @__PURE__ */ l.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      i.mode === "caged" ? /* @__PURE__ */ l.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ l.jsx("select", { value: i.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ l.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ l.jsxs("select", { value: i.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ l.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ l.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(v), onChange: (C) => f("intervals", C.target.checked ? [...i.intervals, v] : i.intervals.filter(($) => $ !== v)) }),
        Wi[v]
      ] }, v)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ l.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ l.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ l.jsx(
      yd,
      {
        legend: "Harjoittelutapa",
        name: `${h}-way`,
        value: i.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...ga[v] }))
      }
    ),
    k ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(yd, { legend: "Vastaustapa", name: `${h}-input`, value: i.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: Fn(i), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !k && /* @__PURE__ */ l.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: Fn(i) ? "pitch" : i.check, disabled: Fn(i), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ l.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ l.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Fn(i) && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      m.fixed ? /* @__PURE__ */ l.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        m.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        m.min,
        "–",
        m.max,
        "."
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === v, onClick: () => s({ ...i, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ l.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: fn.map((v, C) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(C), onChange: ($) => f("strings", $.target.checked ? [...i.strings, C] : i.strings.filter((F) => F !== C)) }),
          C + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        O && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        i.mode === "ear-note" && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const bm = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Vm({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: bm.map((s) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(s.id), children: [
      /* @__PURE__ */ l.jsx("span", { className: "learning-number", "aria-hidden": "true", children: s.number }),
      /* @__PURE__ */ l.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ l.jsx("strong", { children: s.title }),
        /* @__PURE__ */ l.jsx("span", { children: s.description }),
        /* @__PURE__ */ l.jsx("small", { children: s.example })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, s.id)) })
  ] });
}
const Bm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Hm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", Um = 0.12;
function jd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const s = Math.floor(i);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function Km() {
  const i = V.useRef(null), s = V.useRef(null), [u, c] = V.useState(!1), [h, f] = V.useState(!1), [m, k] = V.useState(!1), [j, O] = V.useState(0), [v, C] = V.useState(0), [$, F] = V.useState("");
  function D(A = !1) {
    const H = i.current, X = s.current;
    if (!H || !X || !Number.isFinite(H.currentTime) || X.readyState < 1) return;
    const te = Math.abs(X.currentTime - H.currentTime), P = H.loop && Number.isFinite(H.duration) && Math.abs(te - H.duration) < 0.3;
    if (A || !P && te > Um)
      try {
        X.currentTime = H.currentTime;
      } catch {
      }
  }
  function w() {
    i.current?.pause(), s.current?.pause(), c(!1);
  }
  async function N() {
    const A = i.current, H = s.current;
    if (!(!A || !H)) {
      if (u) {
        w();
        return;
      }
      F(""), H.muted = !h, H.volume = 0.55, A.volume = 0.75, D(!0);
      try {
        await Promise.all([A.play(), H.play()]), D(), c(!0);
      } catch {
        w(), F("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function z(A) {
    const H = i.current, X = s.current;
    if (!(!H || !X || !Number.isFinite(A))) {
      H.currentTime = A;
      try {
        X.currentTime = A;
      } catch {
      }
      O(A);
    }
  }
  function T(A) {
    A && D(), s.current && (s.current.muted = !A), f(A);
  }
  return V.useEffect(() => {
    const A = () => {
      document.hidden && (i.current?.pause(), s.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A), i.current?.pause(), s.current?.pause();
    };
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ l.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: h,
              onChange: (A) => T(A.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Mallikitara ",
            h ? "päällä" : "pois"
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (A) => k(A.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        N();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(j, v > 0 ? v : 1),
          disabled: !v,
          onChange: (A) => z(Number(A.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        jd(j),
        " / ",
        jd(v)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Bm,
        loop: m,
        onLoadedMetadata: (A) => C(A.currentTarget.duration),
        onTimeUpdate: (A) => {
          O(A.currentTarget.currentTime), A.currentTarget.paused || D();
        },
        onEnded: () => {
          i.current?.loop || (s.current?.pause(), c(!1), O(v));
        },
        onPause: () => {
          s.current?.pause(), c(!1);
        },
        onError: () => F("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Hm,
        muted: !0,
        loop: m,
        onLoadedMetadata: () => {
          const A = i.current, H = s.current;
          A?.duration && H?.duration && Math.abs(A.duration - H.duration) > 0.15 && F("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => F("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    $ && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: $ }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Gm = 4e3;
class Sd extends Error {
  name = "MicSetupError";
}
async function Wm(i, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Sd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const u = {
    audio: {
      deviceId: i ? { exact: i } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, c = await navigator.mediaDevices.getUserMedia(u);
  let h;
  try {
    if (h = s ? s() : new AudioContext(), h.state !== "running") {
      let O;
      await Promise.race([
        h.resume(),
        new Promise((v, C) => {
          O = setTimeout(() => C(new Sd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Gm);
        })
      ]).finally(() => clearTimeout(O));
    }
    const f = h.createMediaStreamSource(c), m = h, k = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = k?.getSettings?.() ?? {};
    return {
      context: h,
      source: f,
      stream: c,
      label: k?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((O) => O.stop()), f.disconnect(), s || m.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((m) => m.stop()), s || await h?.close().catch(() => {
    }), f;
  }
}
async function Qm() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((s) => s.kind === "audioinput" && s.deviceId) : [];
}
var ao, wd;
function Ym() {
  if (wd) return ao;
  wd = 1;
  function i(s) {
    if (this.size = s | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = s << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const O = Math.PI * c / this.size;
      u[c] = Math.cos(O), u[c + 1] = -Math.sin(O);
    }
    this.table = u;
    for (var h = 0, f = 1; this.size > f; f <<= 1)
      h++;
    this._width = h % 2 === 0 ? h - 1 : h, this._bitrev = new Array(1 << this._width);
    for (var m = 0; m < this._bitrev.length; m++) {
      this._bitrev[m] = 0;
      for (var k = 0; k < this._width; k += 2) {
        var j = this._width - k - 2;
        this._bitrev[m] |= (m >>> k & 3) << j;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return ao = i, i.prototype.fromComplexArray = function(u, c) {
    for (var h = c || new Array(u.length >>> 1), f = 0; f < u.length; f += 2)
      h[f >>> 1] = u[f];
    return h;
  }, i.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, i.prototype.toComplexArray = function(u, c) {
    for (var h = c || this.createComplexArray(), f = 0; f < h.length; f += 2)
      h[f] = u[f >>> 1], h[f + 1] = 0;
    return h;
  }, i.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, h = c >>> 1, f = 2; f < h; f += 2)
      u[c - f] = u[f], u[c - f + 1] = -u[f + 1];
  }, i.prototype.transform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, i.prototype.realTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, i.prototype.inverseTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 1, this._transform4();
    for (var h = 0; h < u.length; h++)
      u[h] /= this.size;
    this._out = null, this._data = null;
  }, i.prototype._transform4 = function() {
    var u = this._out, c = this._csize, h = this._width, f = 1 << h, m = c / f << 1, k, j, O = this._bitrev;
    if (m === 4)
      for (k = 0, j = 0; k < c; k += m, j++) {
        const N = O[j];
        this._singleTransform2(k, N, f);
      }
    else
      for (k = 0, j = 0; k < c; k += m, j++) {
        const N = O[j];
        this._singleTransform4(k, N, f);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      m = c / f << 1;
      var $ = m >>> 2;
      for (k = 0; k < c; k += m)
        for (var F = k + $, D = k, w = 0; D < F; D += 2, w += f) {
          const N = D, z = N + $, T = z + $, A = T + $, H = u[N], X = u[N + 1], te = u[z], P = u[z + 1], B = u[T], ne = u[T + 1], se = u[A], Se = u[A + 1], Oe = H, Ne = X, Me = C[w], K = v * C[w + 1], ue = te * Me - P * K, re = te * K + P * Me, Q = C[2 * w], q = v * C[2 * w + 1], J = B * Q - ne * q, g = B * q + ne * Q, E = C[3 * w], Z = v * C[3 * w + 1], ve = se * E - Se * Z, Te = se * Z + Se * E, Ce = Oe + J, S = Ne + g, b = Oe - J, I = Ne - g, ee = ue + ve, fe = re + Te, le = v * (ue - ve), pe = v * (re - Te), ke = Ce + ee, Pe = S + fe, we = Ce - ee, $e = S - fe, Ye = b + pe, Be = I - le, Ge = b - pe, He = I + le;
          u[N] = ke, u[N + 1] = Pe, u[z] = Ye, u[z + 1] = Be, u[T] = we, u[T + 1] = $e, u[A] = Ge, u[A + 1] = He;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, h) {
    const f = this._out, m = this._data, k = m[c], j = m[c + 1], O = m[c + h], v = m[c + h + 1], C = k + O, $ = j + v, F = k - O, D = j - v;
    f[u] = C, f[u + 1] = $, f[u + 2] = F, f[u + 3] = D;
  }, i.prototype._singleTransform4 = function(u, c, h) {
    const f = this._out, m = this._data, k = this._inv ? -1 : 1, j = h * 2, O = h * 3, v = m[c], C = m[c + 1], $ = m[c + h], F = m[c + h + 1], D = m[c + j], w = m[c + j + 1], N = m[c + O], z = m[c + O + 1], T = v + D, A = C + w, H = v - D, X = C - w, te = $ + N, P = F + z, B = k * ($ - N), ne = k * (F - z), se = T + te, Se = A + P, Oe = H + ne, Ne = X - B, Me = T - te, K = A - P, ue = H - ne, re = X + B;
    f[u] = se, f[u + 1] = Se, f[u + 2] = Oe, f[u + 3] = Ne, f[u + 4] = Me, f[u + 5] = K, f[u + 6] = ue, f[u + 7] = re;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, h = this._width, f = 1 << h, m = c / f << 1, k, j, O = this._bitrev;
    if (m === 4)
      for (k = 0, j = 0; k < c; k += m, j++) {
        const Ee = O[j];
        this._singleRealTransform2(k, Ee >>> 1, f >>> 1);
      }
    else
      for (k = 0, j = 0; k < c; k += m, j++) {
        const Ee = O[j];
        this._singleRealTransform4(k, Ee >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      m = c / f << 1;
      var $ = m >>> 1, F = $ >>> 1, D = F >>> 1;
      for (k = 0; k < c; k += m)
        for (var w = 0, N = 0; w <= D; w += 2, N += f) {
          var z = k + w, T = z + F, A = T + F, H = A + F, X = u[z], te = u[z + 1], P = u[T], B = u[T + 1], ne = u[A], se = u[A + 1], Se = u[H], Oe = u[H + 1], Ne = X, Me = te, K = C[N], ue = v * C[N + 1], re = P * K - B * ue, Q = P * ue + B * K, q = C[2 * N], J = v * C[2 * N + 1], g = ne * q - se * J, E = ne * J + se * q, Z = C[3 * N], ve = v * C[3 * N + 1], Te = Se * Z - Oe * ve, Ce = Se * ve + Oe * Z, S = Ne + g, b = Me + E, I = Ne - g, ee = Me - E, fe = re + Te, le = Q + Ce, pe = v * (re - Te), ke = v * (Q - Ce), Pe = S + fe, we = b + le, $e = I + ke, Ye = ee - pe;
          if (u[z] = Pe, u[z + 1] = we, u[T] = $e, u[T + 1] = Ye, w === 0) {
            var Be = S - fe, Ge = b - le;
            u[A] = Be, u[A + 1] = Ge;
            continue;
          }
          if (w !== D) {
            var He = I, yt = -ee, Je = S, be = -b, tt = -v * ke, Tt = -v * pe, Kt = -v * le, zt = -v * fe, nn = He + tt, Gt = yt + Tt, ct = Je + zt, In = be - Kt, ye = k + F - w, Wt = k + $ - w;
            u[ye] = nn, u[ye + 1] = Gt, u[Wt] = ct, u[Wt + 1] = In;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, h) {
    const f = this._out, m = this._data, k = m[c], j = m[c + h], O = k + j, v = k - j;
    f[u] = O, f[u + 1] = 0, f[u + 2] = v, f[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, h) {
    const f = this._out, m = this._data, k = this._inv ? -1 : 1, j = h * 2, O = h * 3, v = m[c], C = m[c + h], $ = m[c + j], F = m[c + O], D = v + $, w = v - $, N = C + F, z = k * (C - F), T = D + N, A = w, H = -z, X = D - N, te = w, P = z;
    f[u] = T, f[u + 1] = 0, f[u + 2] = A, f[u + 3] = H, f[u + 4] = X, f[u + 5] = 0, f[u + 6] = te, f[u + 7] = P;
  }, ao;
}
var Jm = Ym();
const Xm = /* @__PURE__ */ rm(Jm);
class Hi {
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
    return new Hi(
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
    return new Hi(
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
    return new Hi(s, (u) => Array(u));
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
    this._inputLength = s, this._fft = new Xm(ep(2 * s)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
    for (let h = 0; h < s.length; h++)
      this._paddedInputBuffer[h] = s[h];
    for (let h = s.length; h < this._paddedInputBuffer.length; h++)
      this._paddedInputBuffer[h] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let h = 0; h < c.length; h += 2)
      c[h] = c[h] * c[h] + c[h + 1] * c[h + 1], c[h + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let h = 0; h < s.length; h++)
      u[h] = this._inverseBuffer[2 * h];
    return u;
  }
}
function Zm(i) {
  const s = [];
  let u = !1, c = -1 / 0, h = -1;
  for (let f = 1; f < i.length - 1; f++)
    i[f - 1] <= 0 && i[f] > 0 ? (u = !0, h = f, c = i[f]) : i[f - 1] > 0 && i[f] <= 0 ? (u = !1, h !== -1 && s.push(h)) : u && i[f] > c && (c = i[f], h = f);
  return s;
}
function qm(i, s) {
  const [u, c, h] = [i - 1, i, i + 1], [f, m, k] = [s[u], s[c], s[h]], j = f / 2 - m + k / 2, O = -(f / 2) * (c + h) + m * (u + h) - k / 2 * (u + c), v = f * c * h / 2 - m * u * h + k * u * c / 2, C = -O / (2 * j), $ = j * C * C + O * C + v;
  return [C, $];
}
class Ui {
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
    return new Ui(s, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new Ui(s, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new Ui(s, (u) => Array(u));
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
    this._autocorrelator = new Hi(s, u), this._nsdfBuffer = u(s);
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
    const c = Zm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const h = Math.max(...c.map((j) => this._nsdfBuffer[j])), f = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * h
    ), [m, k] = qm(
      // @ts-expect-error resultIndex is guaranteed to be defined
      f,
      this._nsdfBuffer
    );
    return [u / m, Math.min(k, 1)];
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
function ep(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function tp(i) {
  const s = i * 0.17;
  let u = 2048;
  for (; u < s && u < 32768; ) u *= 2;
  return u;
}
const np = 0.05, rp = 1.5;
class ip {
  constructor(s, u = {}) {
    this.mic = s, this.opts = u;
    const c = s.context, h = tp(c.sampleRate), f = Math.max(1, Math.min(2, s.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), s.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? f : 1); m++) {
      const k = c.createAnalyser();
      k.fftSize = h, k.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(k, m) : s.source.connect(k), this.analysers.push(k), this.buffers.push(new Float32Array(new ArrayBuffer(h * 4)));
    }
    this.shortLength = Math.min(h, Math.max(256, Math.round(c.sampleRate * np))), this.detector = Ui.forFloat32Array(h), this.detector.minVolumeDecibels = -60;
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
  gate = new sp();
  onset = new ap();
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
      stabilityMs: h = 240,
      centsTolerance: f = 35,
      minFreq: m = 70,
      maxFreq: k = 1450,
      onFrame: j,
      onStableNote: O
    } = this.opts, v = this.analysers.map((P, B) => (P.getFloatTimeDomainData(this.buffers[B]), Ed(this.buffers[B], this.buffers[B].length - this.shortLength))), C = v.indexOf(Math.max(...v));
    C !== this.channel && v[C] > (v[this.channel] ?? 0) * rp && (this.channel = C);
    const $ = this.buffers[this.channel], F = v[this.channel], D = lp($, $.length - this.shortLength), w = { rms: F, peak: D, channel: this.channel, levels: v }, N = F < c, z = this.onset.feed(F, s, c);
    if (N && Ed($, 0) < c) {
      this.gate.feed(null, s, h, !0, !1), j?.({ ...w, status: "silent" });
      return;
    }
    const [T, A] = this.detector.findPitch($, this.mic.context.sampleRate);
    if (!isFinite(T) || A < u) {
      this.gate.feed(null, s, h, N, z), j?.({ ...w, status: N ? "silent" : "unclear", clarity: isFinite(A) ? A : 0 });
      return;
    }
    if (T < m || T > k) {
      this.gate.feed(null, s, h, N, z), j?.({ ...w, status: "out-of-range", frequency: T, clarity: A });
      return;
    }
    const { midi: H, cents: X } = pm(T);
    if (Math.abs(X) > f) {
      this.gate.feed(null, s, h, N, z), j?.({ ...w, status: "off-pitch", frequency: T, clarity: A, midi: H, cents: X });
      return;
    }
    j?.({ ...w, status: "pitch", frequency: T, clarity: A, midi: H, cents: X });
    const te = this.gate.feed(H, s, h, N, z);
    te !== null && O?.({ midi: H, frequency: T, cents: X, clarity: A, timestamp: s, heldMs: te.heldMs });
  }
}
class sp {
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
  feed(s, u, c, h, f) {
    if (h ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), s === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== s) && (this.current = { midi: s, since: u, seen: u }), this.current.seen = u;
    const m = u - this.current.since;
    return m < c ? null : (this.armed = !1, this.current = null, { midi: s, heldMs: m });
  }
}
class ap {
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
    const h = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : s;
    return this.history.push({ time: u, rms: s }), s < c * 1.5 || s < h * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: s }], !0);
  }
}
function Ed(i, s = 0) {
  const u = Math.max(0, s);
  let c = 0;
  for (let h = u; h < i.length; h++) c += i[h] * i[h];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function lp(i, s = 0) {
  let u = 0;
  for (let c = Math.max(0, s); c < i.length; c++) {
    const h = Math.abs(i[c]);
    h > u && (u = h);
  }
  return u;
}
const ii = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let Zr;
function ef() {
  return (!Zr || Zr.state === "closed") && (Zr = new AudioContext()), Zr;
}
function op() {
  const i = Zr;
  Zr = void 0, i?.close().catch(() => {
  });
}
const tf = (i) => i instanceof Error ? i.name : "";
function up(i) {
  const s = tf(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class cp {
  constructor(s = (u) => Wm(u, ef)) {
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
    const h = this.generation;
    let f, m = !1;
    try {
      f = await this.opener(s || void 0);
    } catch (k) {
      if (!s || h !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(tf(k))) throw k;
      f = await this.opener(void 0), m = !0;
    }
    if (h !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new ip(f, { ...u });
      const k = () => {
        this.mic === f && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((O) => O.addEventListener("ended", k, { once: !0, signal: j.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && k();
      }, { signal: j.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: m };
    } catch (k) {
      throw this.stop(), k;
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
function nf(i, s) {
  return i !== "on" ? i : !s || s.status === "silent" ? "silent" : s.status === "pitch" ? "pitch" : s.status === "off-pitch" ? "untuned" : "noise";
}
const Nd = (i) => Math.max(0, Math.min(1, (ii(i) + 60) / 60));
function dp(i) {
  const s = [...i].sort((c, h) => c - h), u = s[Math.min(s.length - 1, Math.floor(s.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class rf {
  constructor(s = ef) {
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
    if (c.state !== "running" && await c.resume(), u !== this.token) return !1;
    const h = c.createGain();
    h.connect(c.destination), this.master = h;
    const f = Array.from({ length: 12 }, (j, O) => 1 / (O + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...f.map(() => 0)]), new Float32Array([0, ...f]));
    return s.forEach((j, O) => {
      const v = c.createOscillator(), C = c.createGain(), $ = c.currentTime + 0.05 + O * 0.8;
      m ? v.setPeriodicWave(m) : v.type = "triangle", v.frequency.value = cd(j), C.gain.setValueAtTime(0, $), C.gain.linearRampToValueAtTime(0.22, $ + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, $ + 0.7), v.connect(C), C.connect(h), v.start($), v.stop($ + 0.72);
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), s.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, h.disconnect(), this.master = void 0, !0);
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
    const h = this.token, f = this.provide();
    if (f.state !== "running" && await f.resume(), h !== this.token) return !1;
    const m = f.createGain();
    m.connect(f.destination), this.master = m;
    const k = Array.from({ length: 12 }, (w, N) => 1 / (N + 1) ** 1.3), j = f.createPeriodicWave?.(new Float32Array([0, ...k.map(() => 0)]), new Float32Array([0, ...k]));
    let O = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      h === this.token && Number.isFinite(w) && (O = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let C = f.currentTime + 0.05, $ = 0;
    const F = [], D = () => {
      if (h === this.token) {
        if (C < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - C) / O);
          C += w * O, $ = ($ + w) % s.length, F.length = 0;
        }
        for (; C < f.currentTime + v; ) {
          const w = s[$], N = $, z = C, T = f.createOscillator(), A = f.createGain();
          j ? T.setPeriodicWave(j) : T.type = "triangle", T.frequency.value = cd(w), A.gain.setValueAtTime(0, z), A.gain.linearRampToValueAtTime(0.22, z + 0.012), A.gain.exponentialRampToValueAtTime(1e-3, z + O * 0.975), T.connect(A), A.connect(m), T.start(z), T.stop(z + O * 0.985), F.push({ at: z, index: N }), C += O, $ = ($ + 1) % s.length;
        }
        for (; F.length && F[0].at <= f.currentTime + 0.01; ) {
          const w = F.shift();
          u?.(w.index);
        }
      }
    };
    return D(), this.loopTick = setInterval(D, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const Ki = "musiikin-kartta:skaalapolku:v1", lo = "musiikin-kartta:skaalapolku:position-2:v1", sf = "musiikin-kartta:skaalapolku:active-position:v1", af = "musiikin-kartta:skaalapolku:tempo:v1", ei = 75, ko = 40, yo = 140;
function fp() {
  try {
    const i = localStorage.getItem(af);
    if (i === null) return ei;
    const s = Number(i);
    return Number.isInteger(s) && s >= ko && s <= yo && s % 5 === 0 ? s : ei;
  } catch {
    return ei;
  }
}
const oo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Cd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function ha(i = Ki) {
  try {
    const s = Number(localStorage.getItem(i));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function _d() {
  try {
    return ha(Ki) === 4 && localStorage.getItem(sf) === "2" ? 2 : 1;
  } catch {
    return 1;
  }
}
function hp({ onBack: i }) {
  const [s, u] = V.useState(_d), [c, h] = V.useState(() => ({
    1: ha(Ki),
    2: ha(lo)
  })), [f, m] = V.useState(() => ha(_d() === 2 ? lo : Ki)), k = c[s], [j, O] = V.useState(!1), [v, C] = V.useState("roots"), [$, F] = V.useState(fp), [D, w] = V.useState(null), [N, z] = V.useState(null), [T, A] = V.useState(""), H = V.useRef(new rf()), X = V.useRef(0);
  function te(E) {
    const Z = Math.max(ko, Math.min(yo, E));
    F(Z), H.current.setLoopTempo(Z);
    try {
      localStorage.setItem(af, String(Z));
    } catch {
    }
  }
  function P() {
    X.current++, H.current.stop(), w(null), z(null);
  }
  V.useEffect(() => {
    const E = () => {
      document.hidden && (X.current++, H.current.stop(), w(null), z(null));
    };
    return document.addEventListener("visibilitychange", E), () => {
      document.removeEventListener("visibilitychange", E), X.current++, H.current.stop();
    };
  }, []);
  const B = ze.fingeringBoxes(9, ze.SCALES.mp, "pentatonic", [s])[0].positions[0], ne = B.strings.flatMap((E, Z) => E.map((ve) => ya(Z, ve))).sort((E, Z) => E.midi - Z.midi || Z.string - E.string), se = [...ne, ...ne.slice(1, -1).reverse()], Se = N === null ? null : se[N], Oe = s === 1 ? [69, 72, 69, 67, 64, 67, 69] : [69, 72, 74, 72, 69, 67, 69], Ne = B.start, Me = B.end, K = (E) => Ke(E) === 9, ue = (E) => f < 2 ? !0 : f === 2 ? j && K(E) : v === "scale" || v === "roots" && K(E), re = ne.filter((E) => ue(E.midi)).map((E) => ({
    ...E,
    label: f < 2 || f === 3 && v === "scale" ? Ie(E.midi) : "A",
    kind: f < 2 && Se?.string === E.string && Se.fret === E.fret ? "playing" : K(E.midi) ? "answer" : "shape"
  }));
  async function Q(E) {
    const Z = ++X.current;
    H.current.stop(), z(null), A(""), w(E);
    try {
      E === "phrase" ? await H.current.play(Oe) : await H.current.loop(se.map((ve) => ve.midi), (ve) => {
        Z === X.current && z(ve);
      }, f === 2 ? $ : ei);
    } catch {
      Z === X.current && A("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      Z === X.current && (w(null), z(null));
    }
  }
  function q() {
    P();
    const E = Math.min(4, f + 1);
    if (m(E), O(!1), C("roots"), E > k) {
      h((ve) => ({ ...ve, [s]: E }));
      const Z = s === 1 ? Ki : lo;
      try {
        localStorage.setItem(Z, String(E));
      } catch {
      }
    }
  }
  function J(E) {
    E > k || (P(), m(E), O(!1), C("roots"));
  }
  function g(E) {
    if (!(E === 2 && c[1] < 4)) {
      P(), u(E), m(c[E]), O(!1), C("roots"), A("");
      try {
        localStorage.setItem(sf, String(E));
      } catch {
      }
    }
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      P(), i();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      s
    ] }),
    /* @__PURE__ */ l.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      s
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ l.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ l.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      Ne,
      "–",
      Me,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": s === 1, onClick: () => g(1), children: "Positio 1" }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": s === 2,
          disabled: c[1] < 4,
          onClick: () => g(2),
          children: "Positio 2"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": `Position ${s} harjoitukset`, children: oo.map((E, Z) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: Z === f ? "journey-step current" : "journey-step",
        "aria-current": Z === f ? "step" : void 0,
        disabled: Z > k,
        onClick: () => J(Z),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: Z > k ? "🔒" : Z < k ? "✓" : Z + 1 }),
          /* @__PURE__ */ l.jsx("span", { children: Z === 4 ? `Positio ${s} harjoiteltu` : E.title })
        ]
      },
      E.title
    )) }),
    /* @__PURE__ */ l.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { id: "lesson-title", children: f === 4 ? `Positio ${s} harjoiteltu` : oo[f].title }),
        /* @__PURE__ */ l.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: oo[f].detail }),
      f < 4 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        f === 0 && /* @__PURE__ */ l.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        f === 0 && s === 2 && /* @__PURE__ */ l.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        f === 1 && /* @__PURE__ */ l.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        f === 2 && /* @__PURE__ */ l.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        f === 3 && /* @__PURE__ */ l.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        f === 2 && /* @__PURE__ */ l.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: $ <= ko,
              onClick: () => te($ - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            $,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: $ >= yo,
              onClick: () => te($ + 5),
              children: "+ 5"
            }
          ),
          $ !== ei && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => te(ei),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ l.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        f !== 3 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": D === "loop",
              onClick: () => D === "loop" ? P() : void Q("loop"),
              children: D === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => D === "phrase" ? P() : void Q("phrase"), children: D === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: D === "loop" ? Se && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(Se.midi, !1, !0)} · ${fn[Se.string]}-kieli, nauha ${Se.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        T && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: T }),
        f >= 1 && f <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          f === 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": j, onClick: () => O((E) => !E), children: j ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => J(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          f === 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ l.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Cd.map((E) => /* @__PURE__ */ l.jsxs("label", { children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: E.value,
                    checked: v === E.value,
                    onChange: () => C(E.value)
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: E.label })
              ] }, E.value))
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              Q("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ l.jsx(Ji, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ne, max: Me, fixed: "box" }, marks: re, disabled: !0, caption: `A-mollipentatoninen, positio ${s}` }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : f === 3 ? Cd.find((E) => E.value === v).note : j ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ji, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ne, max: Me, fixed: "box" }, marks: re, disabled: !0, caption: `Position ${s} sävelet` }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        f === 3 && /* @__PURE__ */ l.jsx(Km, {}, s),
        /* @__PURE__ */ l.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ l.jsx("p", { children: f === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : f === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : f === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: q, children: f === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ l.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ l.jsx("h3", { children: s === 1 ? "Valmis seuraavaan positioon" : "Kaksi positiota harjoiteltu" }),
        /* @__PURE__ */ l.jsx("p", { children: s === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : "Kertaa molempia positioita erikseen. Niiden yhdistämisen harjoitus rakennetaan seuraavaksi." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => J(2), children: "Kertaa muistiharjoitus" }),
        s === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => g(2), children: "Siirry positioon 2 →" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        c[1] < 4 ? "🔒 Positio 2" : c[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Positio 2 avautuu, kun olet kirjannut position 1 harjoitelluksi. Positioiden yhdistäminen ja positio 3 ovat vielä toteuttamatta." })
    ] })
  ] });
}
const Xr = [0, 2, 4, 5, 7, 9, 11], mp = 1200, ca = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function pp({ onBack: i }) {
  const [s, u] = V.useState(0), [c, h] = V.useState([]), [f, m] = V.useState(!1), [k, j] = V.useState(""), [O, v] = V.useState(0), [C, $] = V.useState(!1), F = s >= Xr.length, D = Xr[Math.min(s, Xr.length - 1)], w = si(ca.strings, ca.min, ca.max).filter((P) => Ke(P.midi) === D), N = w.filter((P) => !c.includes(it(P))), z = N.length === 0 && !F, T = !z && f ? N[0] : void 0;
  V.useEffect(() => {
    if (!C || !z) return;
    const P = window.setTimeout(() => {
      u((B) => B + 1), h([]), m(!1), j("");
    }, mp);
    return () => window.clearTimeout(P);
  }, [C, z]);
  const A = [
    ...w.filter((P) => c.includes(it(P))).map((P) => ({ ...P, kind: "answer", label: Ie(P.midi) })),
    ...T ? [{ ...T, kind: "anchor", label: "?" }] : []
  ];
  function H(P) {
    if (F || z) return;
    const B = it(P);
    if (Ke(P.midi) !== D) {
      v((Se) => Se + 1), j(`Valitsit sävelen ${Ie(P.midi)}. Etsi ${Ie(D)}.`);
      return;
    }
    if (c.includes(B)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, B];
    h(ne), m(!1);
    const se = w.length - ne.length;
    j(se ? `Oikein! ${Ie(D)} löytyi ${fn[P.string]}-kieleltä (${Er(P.fret)}). Vielä ${se}.` : `Löysit kaikki ${w.length} ${Ie(D)}-säveltä tällä alueella.`);
  }
  function X() {
    z && (u((P) => P + 1), h([]), m(!1), j(""));
  }
  function te() {
    u(0), h([]), m(!1), j(""), v(0);
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !F && /* @__PURE__ */ l.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (P) => $(P.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: F ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        O ? `Vääriä valintoja yhteensä ${O}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: te, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(D),
          "-sävelet"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sävel ",
          s + 1,
          " / ",
          Xr.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ie(D),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ l.jsx(
        Ji,
        {
          area: ca,
          marks: A,
          onAnswer: H,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: k
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => m((P) => !P),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (C ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          s === Xr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: X, children: s === Xr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const vp = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, uo = ["C", "G", "D", "Em"], Td = ["C", "G", "D", "Em", "Am", "E", "A"], kp = { min: 0, max: 3, fixed: "" };
function Md(i) {
  const s = [...i];
  for (let u = s.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [s[u], s[c]] = [s[c], s[u]];
  }
  return s;
}
function yp({ onBack: i }) {
  const [s, u] = V.useState(4), [c, h] = V.useState(() => Md(uo)), [f, m] = V.useState(0), [k, j] = V.useState(null), [O, v] = V.useState([]), [C, $] = V.useState(0), F = f >= c.length, D = vp[c[Math.min(f, c.length - 1)]], w = s === 4 ? uo : Td, N = D.frets.flatMap((P, B) => P === null ? [] : [B]), z = D.frets.flatMap((P, B) => P === null ? [B] : []), T = { ...kp, strings: N }, A = D.frets.flatMap((P, B) => P === null ? [] : [{
    ...ya(B, P),
    kind: P === 0 ? "anchor" : "shape",
    label: P === 0 ? "○" : "●"
  }]);
  function H(P = s) {
    u(P), h(Md(P === 4 ? uo : Td)), m(0), j(null), v([]), $(0);
  }
  function X(P) {
    k || F || O.includes(P) || (P === D.name ? j(P) : (v((B) => [...B, P]), $((B) => B + 1)));
  }
  function te() {
    k && (m((P) => P + 1), j(null), v([]));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ l.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: s === 4,
            onChange: () => H(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: s === 7,
            onChange: () => H(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: F ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Tunnistit kaikki ",
        s,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => H(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ l.jsx(
        Ji,
        {
          area: T,
          marks: A,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((P) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: k === P ? "right" : O.includes(P) ? "wrong" : "",
          disabled: !!k || O.includes(P),
          "aria-pressed": k === P,
          onClick: () => X(P),
          children: P
        },
        P
      )) }),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: k ? "feedback good" : O.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: k ? `Oikein! Tämä on ${D.name}-sointu.` : O.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      k && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: te, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const de = (i, s) => ({ first: i, ...s ? { second: s } : {} }), ti = () => [
  de("Gm", "F"),
  de("Gm"),
  de("B♭", "F"),
  de("Gm"),
  de("Gm", "F"),
  de("Gm"),
  de("E♭", "F"),
  de("Gm")
], ni = () => [
  de("B♭", "F"),
  de("Gm", "Dm"),
  de("E♭", "F"),
  de("Gm", "Dm")
], ri = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], lf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], gp = [
  { id: "intro", title: "Intro", start: 0, bars: [de("Gm", "F"), de("Gm"), de("B♭", "F"), de("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ti(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ni(), de("E♭"), { ...de("E♭"), passingBass: "F" }],
    lyrics: ri,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [de("Gm", "F"), de("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ti(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ni(), de("E♭"), de("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [de("Gm"), de("Dm"), de("F"), de("C"), de("Gm"), de("Dm"), de("E♭"), de("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ti(),
    lyrics: lf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ni(), de("E♭", "F"), de("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      de("E♭", "F"),
      { ...de("Gm"), possibleChord: "Dm" },
      de("E♭", "F"),
      de("Gm", "F"),
      { ...de("Gm"), possibleChord: "Dm" },
      de("Gm", "F"),
      de("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], xp = [
  { id: "intro", title: "Intro", start: 0, bars: [de("Gm", "F"), de("Gm"), de("B♭", "F"), de("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ti(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ni(), de("E♭"), de("E♭")],
    lyrics: ri
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ti(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ni(), de("E♭"), de("F")],
    lyrics: ri
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [de("Gm"), de("Dm"), de("F"), de("C"), de("Gm"), de("Dm"), de("E♭"), de("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ti(),
    lyrics: lf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ni(), de("B♭", "F"), de("Gm"), de("E♭", "F"), de("Gm")],
    lyrics: ri
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [de("E♭", "F"), de("Gm", "F"), de("E♭", "F"), de("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ai = {
  acoustic: gp,
  normal: xp
}, jp = "normal", go = "yksi-sointu-kaksi-askelta", To = {
  acoustic: go + "-akustinen",
  normal: go + "-normaali"
}, of = (i) => i === go || Object.values(To).includes(i ?? "");
function Sp(i) {
  const s = Object.entries(To).find(([, u]) => u === i);
  return s ? s[0] : null;
}
const wp = (i) => To[i], Pd = (i) => {
  const s = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
function Mo(i, s = "acoustic") {
  const u = ai[s], c = u[i], h = u[i + 1];
  return h ? (h.start - c.start) / c.bars.length : 240 / 69;
}
function uf(i, s = "acoustic") {
  const u = ai[s], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let h = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    h = C;
  const f = u[h];
  let m = 0;
  for (; m + 1 < f.bars.length && c >= Xi(h, m + 1, s); )
    m++;
  const k = Xi(h, m, s), j = Mo(h, s) / 4;
  let O = 1;
  for (; O < 4 && c >= k + O * j; ) O++;
  const v = f.bars[m];
  return {
    section: f,
    sectionIndex: h,
    barIndex: m,
    beat: O,
    chord: v.second && O >= 3 ? v.second : v.first
  };
}
function Xi(i, s, u = "acoustic") {
  return ai[u][i].start + Mo(i, u) * s;
}
function Ep(i) {
  return ai[i].flatMap((s, u) => s.bars.flatMap((c, h) => {
    const f = Xi(u, h, i), m = { section: s, sectionIndex: u, barIndex: h, part: "first", chord: c.first, time: f };
    if (!c.second) return [m];
    const k = Mo(u, i) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: f + k }];
  }));
}
function Np(i, s = "acoustic", u = !1) {
  const c = ai[s], h = uf(i, s), f = h.section.bars[h.barIndex], m = h.beat >= 3 && f.second ? "second" : "first", k = Ep(s), j = k.findIndex((F) => F.sectionIndex === h.sectionIndex && F.barIndex === h.barIndex && F.part === m), v = [
    ...k.slice(j + 1).map((F) => ({ ...F, wrapped: !1 })),
    ...u ? k.slice(0, j + 1).map((F) => ({ ...F, wrapped: !0 })) : []
  ].find((F) => F.chord !== h.chord) ?? null;
  let C = null;
  const $ = h.sectionIndex === c.length - 1;
  if (h.barIndex === h.section.bars.length - 1 && (!$ || u)) {
    const F = $ ? 0 : h.sectionIndex + 1, D = c[F], w = D.bars[0].first;
    C = {
      section: D,
      sectionIndex: F,
      firstChord: w,
      wrapped: $,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: C };
}
function Cp(i) {
  const s = i.filter((k) => k.lyrics?.length), u = (k) => 1 + (k.lyrics?.length ?? 0), c = s.reduce((k, j) => k + u(j), 0);
  let h = 0, f = 1 / 0, m = 0;
  for (let k = 0; k <= s.length; k++) {
    const j = Math.abs(c - 2 * m);
    (j < f || j === f && m >= c - m) && (h = k, f = j), k < s.length && (m += u(s[k]));
  }
  return [s.slice(0, h), s.slice(h)];
}
const xo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], cf = "musiikin-kartta:kappale-sointuvihjeet:v1", ma = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Ad = {
  showChords: !0,
  level: 0,
  fadeOrder: ma
};
function da(i, s) {
  return !s.showChords || s.level >= s.fadeOrder[i];
}
function Rd(i) {
  if (!i) return { ...Ad, fadeOrder: { ...ma } };
  try {
    const s = JSON.parse(i);
    if (!s || typeof s != "object") throw new Error("Invalid settings");
    const u = s, c = u.level, h = { ...ma }, f = u.fadeOrder;
    if (f && typeof f == "object") {
      const m = f;
      for (const k of xo)
        [1, 2, 3, 4].includes(m[k]) && (h[k] = m[k]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: h
    };
  } catch {
    return { ...Ad, fadeOrder: { ...ma } };
  }
}
function _p() {
  try {
    return Rd(localStorage.getItem(cf));
  } catch {
    return Rd(null);
  }
}
const Tp = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Mp(i) {
  const s = Tp.exec(i.trim());
  if (!s) return i;
  const [, u, , c = "", h = ""] = s;
  return u + "5" + c + h;
}
const Pp = (i, s) => s === "power" ? Mp(i) : i, Ap = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Rp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function $p({ version: i, position: s, loop: u = !1, onSeek: c }) {
  const [h, f] = V.useState(_p), [m, k] = V.useState(null), [j, O] = V.useState(!1), [v, C] = V.useState("full"), $ = (K) => Pp(K, v), F = ai[i], D = uf(s, i), { section: w, sectionIndex: N, barIndex: z, beat: T, chord: A } = D, H = T >= 3 && w.bars[z].second ? "second" : "first", X = (K, ue, re) => `${i}:${K}:${ue}:${re}`, te = (K, ue) => X(w.id, K, ue), P = te(z, H), B = da(A, h), ne = B && m === P, se = (K, ue, re) => !da(K, h) || m === te(ue, re), Se = h.showChords && h.level === 0, Oe = xo.filter((K) => da(K, h)).length, { nextSection: Ne } = Np(s, i, u), Me = !!Ne && da(Ne.firstChord, h);
  return V.useEffect(() => {
    k(null);
  }, [P]), V.useEffect(() => {
    try {
      localStorage.setItem(cf, JSON.stringify(h));
    } catch {
    }
  }, [h]), /* @__PURE__ */ l.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        h.showChords && h.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: h.showChords,
            onChange: (K) => {
              f((ue) => ({ ...ue, showChords: K.target.checked })), k(null);
            }
          }
        ),
        "Näytä soinnut"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: j,
            onChange: (K) => O(K.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([K, ue]) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: K,
              checked: v === K,
              onChange: () => C(K)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: ue })
        ] }, K))
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: h.level,
            disabled: !h.showChords,
            onChange: (K) => {
              const ue = Number(K.target.value);
              f((re) => ({ ...re, level: ue })), k(null);
            },
            children: Ap.map((K) => /* @__PURE__ */ l.jsx("option", { value: K.value, children: K.label }, K.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Oe === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Oe}/6 sointua` })
    ] }),
    h.showChords && h.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: xo.map((K) => /* @__PURE__ */ l.jsxs("label", { children: [
        K,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": K + ": piilotusvaihe",
            value: h.fadeOrder[K],
            onChange: (ue) => {
              const re = Number(ue.target.value);
              f((Q) => ({ ...Q, fadeOrder: { ...Q.fadeOrder, [K]: re } })), k(null);
            },
            children: Rp.map((ue) => /* @__PURE__ */ l.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, K)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (K) => {
              const ue = F.find((re) => re.id === K.target.value);
              ue && c(ue.start);
            },
            children: F.map((K) => /* @__PURE__ */ l.jsxs("option", { value: K.id, children: [
              Pd(K.start),
              " · ",
              K.title
            ] }, K.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
          B && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ l.jsx("strong", { children: B && !ne ? "?" : $(A) }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            T,
            "/4"
          ] }),
          B && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => k(ne ? null : P),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Ne && /* @__PURE__ */ l.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ l.jsx("strong", { children: Me ? "?" : $(Ne.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((K, ue) => {
      const re = ue === z, Q = re && (T < 3 || !K.second), q = re && T >= 3 && !!K.second, J = se(K.first, ue, "first"), g = K.second ? se(K.second, ue, "second") : !1, E = (J ? $(K.first) : "sointu piilossa") + (K.second ? " " + (g ? $(K.second) : "sointu piilossa") : "") + (Se && K.passingBass ? " (basson kulku " + K.passingBass + ")" : "") + (Se && K.possibleChord ? " (" + $(K.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (re ? " active" : ""),
          "aria-pressed": re,
          "aria-label": "Tahti " + (ue + 1) + ": " + E + ". Siirry kohtaan " + Pd(Xi(N, ue, i)),
          onClick: () => c(Xi(N, ue, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: Q && J ? "now" : "", children: J ? $(K.first) : "?" }),
              K.second && /* @__PURE__ */ l.jsx("strong", { className: q && g ? "now" : "", children: g ? $(K.second) : "?" })
            ] }),
            Se && K.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              K.passingBass,
              "), isku 4"
            ] }),
            Se && K.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              $(K.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    j ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: Cp(F).map((K, ue) => /* @__PURE__ */ l.jsx("div", { className: "song-lyrics-column", children: K.map((re) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: re.title }),
        re.lyrics?.map((Q, q) => /* @__PURE__ */ l.jsx("p", { children: Q }, q))
      ] }, re.id)) }, ue)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((K, ue) => /* @__PURE__ */ l.jsx("p", { children: K }, ue))
    ] }),
    Se && w.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const ka = 7, Lp = { name: "bluesasteikko", base: ze.SCALES.mp.base, add: [[6, "♭5"]] }, co = [
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
    scale: Lp,
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
function Op(i) {
  return ze.scaleNotes(i).map(([s, u]) => ze.noteName(ka, s, u));
}
const df = (i) => i === "pentatonic" ? 5 : 7;
function Fp(i, s, u) {
  const c = s.filter((k) => k >= 1 && k <= df(i.system)), h = ze.fingeringBoxes(ka, i.scale, i.system, c, u);
  if (i.id !== "blues") return h;
  const f = i.scale.add.map(([k]) => (ka + k) % 12), m = (k, j) => j >= 0 && j <= u && f.includes((ze.OPEN_PITCHES[k] + j) % 12);
  return h.map((k) => ({ ...k, positions: k.positions.map((j) => {
    const O = j.strings.map((C, $) => {
      if (!C.length) return C;
      const F = C[C.length - 1];
      return m($, F + 1) ? [...C.slice(0, -1), F + 1] : C;
    }), v = O.flat();
    return { ...j, strings: O, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const $d = 17;
function Ip({ open: i }) {
  const [s, u] = V.useState("mp"), [c, h] = V.useState({ pentatonic: [], "3nps": [] }), [f, m] = V.useState(!1), [k, j] = V.useState(!1), O = V.useRef(null), v = co.find((N) => N.id === s) ?? co[0], C = c[v.system], $ = Fp(v, C, $d), F = $.some((N) => N.positions.length > 0), D = ze.renderBoard(ka, v.scale, $d, {
    automatic: !0,
    boxes: $,
    onlyBoxNotes: F && f,
    label: v.title + (C.length ? ", " + C.map((N) => "boksi " + N).join(", ") : "")
  });
  V.useEffect(() => {
    const N = O.current;
    !N || !i || $.length === 1 && ze.revealPositions(N, ".box-highlight");
  }, [D, i]);
  function w(N, z) {
    h((T) => ({ ...T, [v.system]: z ? [...T[v.system], N].sort((A, H) => A - H) : T[v.system].filter((A) => A !== N) }));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ l.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ l.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ l.jsx("select", { value: s, onChange: (N) => u(N.target.value), children: co.map((N) => /* @__PURE__ */ l.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ l.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ l.jsx("strong", { children: v.title }),
      /* @__PURE__ */ l.jsx("span", { children: Op(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: O,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: D }
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-box-settings", open: k, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (N) => {
        N.preventDefault(), j((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ l.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ l.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: df(v.system) }, (N, z) => z + 1).map((N) => /* @__PURE__ */ l.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            value: N,
            checked: C.includes(N),
            onChange: (z) => w(N, z.target.checked)
          }
        ),
        " Boksi ",
        N
      ] }, v.system + N)) }),
      /* @__PURE__ */ l.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: F && f,
            disabled: !F,
            onChange: (N) => m(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: F ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const Dp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, jo = 100, ff = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Po(i) {
  if (i === null || i.trim() === "") return jo;
  const s = Number(i);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : jo;
}
function zp() {
  try {
    return Po(localStorage.getItem(ff));
  } catch {
    return jo;
  }
}
function bp(i) {
  try {
    localStorage.setItem(ff, String(Po(String(i))));
  } catch {
  }
}
function Ld(i, s, u = !0) {
  return u ? Dp[i] * Po(String(s)) / 100 : 0;
}
function Vp(i = () => new Audio()) {
  try {
    const s = i();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Bp = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class Hp {
  constructor(s = Bp) {
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
let hf = null;
function Up() {
  return Sp(new URLSearchParams(location.search).get("kappale")) ?? hf ?? jp;
}
function Kp(i) {
  hf = i;
  const s = new URL(location.href);
  of(s.searchParams.get("kappale")) && (s.searchParams.set("kappale", wp(i)), history.replaceState(history.state, "", s.pathname + s.search + s.hash));
}
const Gp = {
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
}, Wp = 0.12, Od = 1e-3;
function Fd(i, s) {
  try {
    i.currentTime = s;
  } catch {
  }
}
function Id(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const s = Math.floor(i);
  return String(Math.floor(s / 60)) + ":" + String(s % 60).padStart(2, "0");
}
function Qp({ onBack: i }) {
  const s = V.useRef(null), u = V.useRef(null), c = V.useRef(null), h = V.useRef(0), f = V.useRef(null), [m, k] = V.useState(Up), j = Gp[m], [O, v] = V.useState(!1), [C, $] = V.useState(!0), [F, D] = V.useState(!0), [w, N] = V.useState(!1), [z, T] = V.useState(!1), [A, H] = V.useState(!1), [X, te] = V.useState(zp), [P] = V.useState(() => Vp() ? "element" : "webaudio"), B = V.useRef(null), [ne, se] = V.useState(0), [Se, Oe] = V.useState(0), [Ne, Me] = V.useState("");
  function K(S = !1) {
    const b = s.current;
    if (!(!b || b.readyState < 1))
      for (const I of [u.current, c.current]) {
        if (!I || I.readyState < 1) continue;
        const ee = Math.abs(I.currentTime - b.currentTime), fe = b.loop && Number.isFinite(b.duration) && Math.abs(ee - b.duration) < 0.35;
        if (S || !fe && ee > Wp)
          try {
            I.currentTime = b.currentTime;
          } catch {
          }
      }
  }
  function ue() {
    return [
      ["backing", s.current, !0],
      ["guitar", u.current, C],
      ["vocals", c.current, F]
    ];
  }
  function re(S = X, b) {
    for (const [I, ee, fe] of ue()) {
      if (!ee) continue;
      const le = Ld(I, S, b?.[I] ?? fe);
      if (P === "webaudio" && B.current?.routed(ee))
        B.current.setLevel(ee, le);
      else
        try {
          ee.volume = Ld(I, S);
        } catch {
        }
    }
  }
  function Q(S) {
    te(S), bp(S), re(S);
  }
  function q() {
    h.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), v(!1);
  }
  function J(S) {
    if (S !== m) {
      f.current = null, q();
      for (const b of [s.current, u.current, c.current])
        if (b)
          try {
            b.currentTime = 0;
          } catch {
          }
      se(0), Oe(0), Me(""), k(S), Kp(S);
    }
  }
  function g(S) {
    const b = s.current;
    if (!b || !Number.isFinite(S)) return;
    const I = Math.max(0, Math.min(S, Number.isFinite(b.duration) ? b.duration : S));
    f.current = I, se(I), Fd(b, I);
  }
  function E(S) {
    const b = f.current;
    if (b === null || S !== s.current || S.seeking) return;
    const I = Number.isFinite(S.duration) ? Math.min(b, S.duration) : b;
    if (I !== b && (f.current = I, se(I)), Math.abs(S.currentTime - I) < Od) return;
    const ee = S.seekable;
    for (let fe = 0; fe < ee.length; fe++)
      if (ee.start(fe) <= I && I <= ee.end(fe)) {
        Fd(S, I);
        return;
      }
  }
  function Z(S) {
    if (S !== s.current) return;
    const b = f.current;
    if (b === null)
      se(S.currentTime);
    else if (S.readyState >= 1 && !S.seeking && Math.abs(S.currentTime - b) < Od) {
      f.current = null, K(!0);
      return;
    }
    S.paused || K();
  }
  async function ve() {
    const S = s.current, b = u.current, I = c.current;
    if (!S || !b || !I) return;
    if (O) {
      q();
      return;
    }
    Me("");
    const ee = f.current ?? S.currentTime;
    if (Number.isFinite(S.duration) && ee >= S.duration - 0.05 && g(0), E(S), P === "webaudio" && (B.current ??= new Hp(), B.current.unlock()))
      for (const le of [S, b, I]) B.current.route(le);
    re(), b.muted = !C, I.muted = !F, K(!0);
    const fe = ++h.current;
    try {
      const le = [S.play(), b.play(), I.play()];
      if (await Promise.all(le), fe !== h.current) return;
      K(), v(!0);
    } catch {
      if (fe !== h.current) return;
      q(), Me("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Te(S) {
    S && K(), u.current && (u.current.muted = !S), $(S), re(X, { guitar: S });
  }
  function Ce(S) {
    S && K(), c.current && (c.current.muted = !S), D(S), re(X, { vocals: S });
  }
  return V.useEffect(() => {
    const S = () => {
      document.hidden && q();
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), h.current++, s.current?.pause(), u.current?.pause(), c.current?.pause(), B.current?.close();
    };
  }, []), V.useEffect(() => {
    re();
  }, [m]), /* @__PURE__ */ l.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ l.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ l.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (S) => J(S.target.value),
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ l.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          j.label,
          " · ",
          j.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          ve();
        }, children: O ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Se > 0 ? Se : 1,
            step: 0.1,
            value: Math.min(ne, Se > 0 ? Se : 1),
            disabled: Se <= 0,
            onChange: (S) => g(Number(S.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Id(ne),
          " / ",
          Id(Se)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (S) => Te(S.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: F,
              onChange: (S) => Ce(S.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (S) => N(S.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "song-volume", "data-volume-mode": P, children: [
          /* @__PURE__ */ l.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ l.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            X > 0 && /* @__PURE__ */ l.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            X > 50 && /* @__PURE__ */ l.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: X,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": X + " %",
              onChange: (S) => Q(Number(S.target.value))
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-hidden": "true", children: [
            X,
            " %"
          ] })
        ] })
      ] }),
      Ne && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: Ne }),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: s,
          src: j.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (S) => {
            S.currentTarget === s.current && (Oe(S.currentTarget.duration), E(S.currentTarget));
          },
          onProgress: (S) => E(S.currentTarget),
          onCanPlay: (S) => E(S.currentTarget),
          onTimeUpdate: (S) => Z(S.currentTarget),
          onEnded: (S) => {
            S.currentTarget !== s.current || S.currentTarget.loop || (f.current = null, u.current?.pause(), c.current?.pause(), v(!1), se(S.currentTarget.duration));
          },
          onPause: (S) => {
            S.currentTarget === s.current && v(!1);
          },
          onError: () => Me(j.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: j.guitar,
          preload: "metadata",
          muted: !C,
          loop: w,
          onLoadedMetadata: () => K(!0),
          onError: () => Me(j.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: j.vocals,
          preload: "metadata",
          muted: !F,
          loop: w,
          onLoadedMetadata: () => K(!0),
          onError: () => Me(j.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: z, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (S) => {
        S.preventDefault(), T((b) => !b);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx($p, { version: m, position: ne, loop: w, onSeek: g })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-scales-collapse", open: A, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (S) => {
        S.preventDefault(), H((b) => !b);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ l.jsx(Ip, { open: A })
    ] })
  ] });
}
const So = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, pa = (i, s = 1) => i.toFixed(s).replace(".", ",").replace("-", "−"), mf = (i) => {
  const s = Math.round(i);
  return (s > 0 ? "+" : s < 0 ? "−" : "±") + Math.abs(s);
}, wo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function Yp(i, s, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (i) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${wo(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function pf({ frame: i, threshold: s }) {
  const u = i?.rms ?? 0, c = ii(u), h = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= s ? "over" : "under";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meter ${h}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${pa(Math.max(-60, c), 0)} desibeliä${u >= s ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${Nd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${Nd(s) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Jp({ mic: i, frame: s, heard: u, s: c, now: h }) {
  const f = nf(i.phase, s), m = u && h - u.at < 1500 ? u : null, k = f === "pitch" || f === "untuned" || m ? m ? `Kuulen: ${Ie(m.midi, c.flats, !0)} · ${mf(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : So[f];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: k }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(pf, { frame: s, threshold: c.minRms })
  ] });
}
function Xp({ mic: i, frame: s, heard: u, accepted: c, now: h, s: f, change: m, devices: k, locked: j, calibrating: O, calibration: v, onTest: C, onStop: $, onCalibrate: F }) {
  const D = V.useId(), w = nf(i.phase, s), N = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", z = i.phase === "on", T = u && h - u.at < 1500 ? u : null, A = T && (w === "pitch" || w === "untuned"), H = z && (s?.peak ?? 0) >= 0.98, X = i.phase === "error" ? [] : Yp(w, f, i.info, H), te = !f.device || k.some((B) => B.deviceId === f.device), P = (B, ne) => m({ ...f, [B]: ne });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : So[w],
      w === "pitch" && T ? ` ${Ie(T.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${wo(i.info)}.` : i.phase === "error" ? i.error : So[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ l.jsxs("dd", { "data-testid": "mic-device", children: [
          wo(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(s?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ l.jsxs("dd", { children: [
          /* @__PURE__ */ l.jsx(pf, { frame: s, threshold: f.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            pa(Math.max(-60, ii(s?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: A ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? Ie(T.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: A ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${pa(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: A ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          mf(T.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${T.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, T.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: A ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: T ? `${Math.round(T.clarity * 100)} %` : s?.clarity !== void 0 && w === "noise" ? `${Math.round(s.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && h - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    X.length > 0 && z && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: X.map((B) => /* @__PURE__ */ l.jsx("li", { children: B }, B)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: $, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: f.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: j, onClick: C, children: "Testaa mikrofoni" }),
      N && z && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: O, onClick: F, children: O ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${D}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${D}-device`, value: f.device, onChange: (B) => P("device", B.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !te && /* @__PURE__ */ l.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              k.map((B, ne) => /* @__PURE__ */ l.jsx("option", { value: B.deviceId, children: B.label || `Äänitulo ${ne + 1}` }, B.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-rms`, children: [
              "Äänikynnys · ",
              pa(ii(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (B) => P("minRms", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (B) => P("clarity", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (B) => P("stability", Number(B.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${D}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${D}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (B) => P("cents", Number(B.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
          k.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Zp = (i) => i.mode === "scale" ? ze.scaleNotes(ze.SCALES[i.scale]) : wr[i.mode === "caged" ? "maj" : i.chord].tones, Dd = (i, s) => Zp(i).find(([u]) => u === s)?.[1], vf = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", qp = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function ev(i, s) {
  return s.choices === "note" ? "Valitse sävelnimi." : s.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function tv(i, s, u, c, h) {
  return s.choices === "degree" ? `Oikein! ${Gi(i.root, s.interval, s.degree)} on ${s.degree}. aste.` : vf(i) ? `Oikein! ${s.degree}. aste on ${Gi(i.root, s.interval, s.degree)}.` : i.mode === "interval" ? `Oikein! ${Ie(s.reference, i.flats, !0)} → ${s.name} on ${Wi[s.interval]} ${qp(s)}.` : i.mode === "notes" ? u === "board" && h ? `Oikein! ${Ie(h.midi, i.flats)} on ${Vd[h.string]}: ${Er(h.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, i.flats, !0)}.` : `Oikein! Sävel oli ${s.name}.`;
}
function nv(i, s, u, c, h) {
  if (u === "note") return `Ei ${Ie(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Dd(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!h) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ke(h.midi) === Ke(s.midi);
  if (i.mode === "notes")
    return h.string !== s.position.string ? `Tuo on ${fn[h.string]}-kieli. Etsi sävel ${Co[s.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${s.name}.` : `Tuo on ${Ie(h.midi, i.flats)}. Etsi ${s.name}.`;
  if (vf(i)) {
    const m = Ke(h.midi - i.root), k = Dd(i, m), j = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return k ? f && s.check === "pitch" && h.midi !== s.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${s.name}.` : f ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${s.degree}. aste sen sisältä.` : `Tuo on ${Gi(i.root, m, k)} eli ${k}. aste. Etsi ${s.degree}. aste.` : `Tuo on ${Ie(h.midi, i.flats)}, joka ei kuulu ${j}. Etsi ${s.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(h.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function rv(i, s, u) {
  const c = Ie(u, i.flats, !0);
  return Ke(u) === Ke(s.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function kf(i, s = !1) {
  const u = i.split(":"), c = (m) => Number(u[m]), h = (...m) => m.every((k) => Number.isInteger(c(k))), f = (m, k) => fn[m] ? `${fn[m]}-kieli, ${Er(k)}` : null;
  switch (u[0]) {
    case "notes":
      return h(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return h(1) ? `Kuultu sävel ${Ie(c(1), s)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && h(1) ? `Kuule ja toista: ${Ie(c(1), s, !0)}` : h(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return h(1) && Wi[c(1)] ? `${Wi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!h(1, 3) || !wr[m]) return null;
      const k = wr[m].tones.find(([j]) => j === c(3))?.[1];
      return k ? `${Bd(c(1), m)}: ${k}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = ze.SCALES[u[2]];
      if (!h(1) || !m) return null;
      const k = `${ar(c(1))}-${m.name}`;
      if (u.length === 5 && h(3)) {
        const j = ze.scaleNotes(m).find(([O]) => O === c(3))?.[1];
        return j ? `${k}: ${j}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return h(3, 4) && f(c(3), c(4)) ? `${k}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!h(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && h(3)) {
        const k = wr.maj.tones.find(([j]) => j === c(3))?.[1];
        return k ? `${m}: ${k}. aste` : null;
      }
      return h(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function zd(i) {
  return Object.entries(i).flatMap(([s, u]) => {
    const [c, h, f, ...m] = s.split(":");
    return !m.length || !["solo", "guided"].includes(f) ? [] : [{ key: s, input: c, check: h, guided: f === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const Eo = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", iv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function sv(i) {
  const s = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${qr(i.mode)}${i.hints ? ` · ${ga[i.hints].title}` : ""} · ${s} · keskimäärin ${Eo(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function av({ store: i, s, locked: u, changed: c }) {
  const [h, f] = V.useState(""), m = V.useRef(null), { recent: k, sessions: j, stats: O } = i.data, v = Nr(s), C = Ud(s), $ = [...new Set(k.map((T) => T.mode))].map((T) => {
    const A = k.filter((H) => H.mode === T);
    return { mode: T, ...po(A), last: Math.max(...A.map((H) => H.at)) };
  }).sort((T, A) => A.last - T.last), F = zd(O).filter((T) => !T.guided && T.mode === s.mode && T.input === v && T.check === C && T.stat.attempts >= 3).map((T) => ({ ...T, score: _o(T.stat), text: kf(T.item, s.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, A) => T.score - A.score).slice(0, 5), D = zd(O).reduce((T, A) => T + A.stat.attempts, 0);
  function w() {
    const T = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), A = URL.createObjectURL(T), H = document.createElement("a");
    H.href = A, H.download = "musiikin-kartta-harjoittelu.json", H.click(), setTimeout(() => URL.revokeObjectURL(A), 1e3);
  }
  async function N(T) {
    if (T)
      try {
        const A = await T.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(A), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        m.current && (m.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        D,
        " vastattua kysymystä · ",
        j.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ l.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ l.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ l.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ l.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ l.jsx("tbody", { children: $.map((T) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: qr(T.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: T.count }),
          /* @__PURE__ */ l.jsx("td", { children: T.solo ? `${T.soloFirst}/${T.solo} · ${Math.round(T.soloFirst / T.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: T.guided }),
          /* @__PURE__ */ l.jsx("td", { children: Eo(T.ms / T.count) })
        ] }, T.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    F.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        qr(s.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: F.map((T) => /* @__PURE__ */ l.jsxs("li", { children: [
        T.text,
        " · viime aikoina ",
        Math.round(Qi(T.stat) * 100),
        " % heti oikein · ",
        Eo(Yi(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: D ? `Harjoituksessa ${qr(s.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        iv[s.input],
        ") ja tarkistuksella (",
        s.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(Mm, { area: { strings: s.strings, min: s.min, max: s.max, fixed: "" }, stats: O, input: s.input, check: s.check, flats: s.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ l.jsx("ul", { children: j.slice(-10).reverse().map((T) => /* @__PURE__ */ l.jsx("li", { children: sv(T) }, T.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => m.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: m, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (T) => {
          N(T.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !D, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      h && /* @__PURE__ */ l.jsx("p", { role: "status", children: h })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function lv() {
  try {
    return new vd(localStorage);
  } catch {
    return new vd();
  }
}
const bd = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), ov = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", uv = [0, 2, 4, 5, 7, 9, 11];
function cv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function dv() {
  const [i] = V.useState(lv), [s, u] = V.useState(() => xm(location.search, i.data.settings)), [, c] = V.useReducer((L) => L + 1, 0), h = V.useRef(null), f = V.useRef(new cp()), m = V.useRef(new rf()), k = V.useRef(0), j = V.useRef(), O = V.useRef(), v = V.useRef(null), C = V.useRef(0), $ = V.useRef(null), F = V.useRef(s);
  F.current = s;
  const [D, w] = V.useState({ phase: "off", purpose: "none" }), N = V.useRef(D), z = (L) => {
    N.current = L, w(L);
  }, [T, A] = V.useState(null), [H, X] = V.useState(null), [te, P] = V.useState(null), [B, ne] = V.useState(0), [se, Se] = V.useState([]), [Oe, Ne] = V.useState(!1), [Me, K] = V.useState(!1), [ue, re] = V.useState(""), [Q, q] = V.useState("info"), [J, g] = V.useState(""), [E, Z] = V.useState(0), [ve, Te] = V.useState([]), [Ce, S] = V.useState([]), [b, I] = V.useState(null), [ee, fe] = V.useState(!1), [le, pe] = V.useState(""), [ke, Pe] = V.useState(""), [we, $e] = V.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : of(L.get("kappale")) ? "songs" : null;
  }), Ye = () => {
    Qm().then(Se).catch(() => {
    });
  };
  function Be() {
    clearTimeout(O.current), v.current = null, fe(!1);
  }
  function Ge() {
    A(null), X(null), P(null);
  }
  function He() {
    f.current.stop(), Be(), z({ phase: "off", purpose: "none" }), Ge();
  }
  async function yt(L) {
    if (f.current.active && N.current.phase === "on")
      return Be(), z({ ...N.current, purpose: L }), f.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), Ge();
    try {
      const oe = await f.current.start(F.current.device, {
        ...bd(F.current),
        onFrame: (ge) => Tt.current.frame(ge),
        onStableNote: (ge) => Tt.current.stable(ge)
      }, () => Tt.current.lost());
      return oe ? (z({ phase: "on", purpose: L, info: oe }), Ye(), !0) : !1;
    } catch (oe) {
      return z({ phase: "error", purpose: "none", error: up(oe) }), !1;
    }
  }
  function Je(L) {
    v.current?.push(L.rms);
    const oe = performance.now();
    oe - C.current < 66 || (C.current = oe, A(L), ne(oe), L.midi !== void 0 && L.frequency !== void 0 && X({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: oe }));
  }
  function be(L) {
    N.current.purpose === "test" ? P(L) : N.current.purpose === "round" && Ae(L.midi, "mic", void 0, L.heldMs);
  }
  function tt() {
    const L = N.current.purpose === "round";
    Be(), Ge(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const oe = h.current;
    L && oe && ["active", "feedback", "paused"].includes(oe.phase) && (ct(), K(!1), oe.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Tt = V.useRef({ frame: Je, stable: be, lost: tt });
  Tt.current = { frame: Je, stable: be, lost: tt };
  function Kt(L) {
    const oe = va(L), ge = oe.device !== F.current.device;
    F.current = oe, u(oe), i.settings(oe), g(""), f.current.active && (ge && N.current.purpose === "test" ? (He(), yt("test")) : f.current.setOptions(bd(oe)));
  }
  function zt(L) {
    Pe(""), h.current = null, $e(L);
  }
  function nn() {
    pe(""), yt("test");
  }
  function Gt() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (Be(), v.current = [], fe(!0), pe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), O.current = setTimeout(() => {
      const L = v.current ?? [];
      if (Be(), L.length < 10) {
        pe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: oe, noise: ge, loud: Yt } = dp(L);
      Kt({ ...F.current, minRms: oe }), pe(`Taustakohina on ${Math.round(ii(ge))} dB ja äänikynnys nyt ${Math.round(ii(oe))} dB. ${Yt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    k.current++, clearTimeout(j.current), m.current.stop();
  }
  function In(L, oe) {
    if (!L.results.length) return;
    const ge = po(L.results);
    i.session({
      id: L.id,
      mode: L.settings.mode,
      count: ge.count,
      first: ge.first,
      ms: ge.ms,
      solo: ge.solo,
      soloFirst: ge.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: oe
    });
  }
  async function ye(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    ct();
    const oe = k.current;
    L.pause(), f.current.pause(), K(!0), q("info"), re("Kuuntele…"), c();
    try {
      await m.current.play(L.question.sound);
    } catch {
      oe === k.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    oe !== k.current || h.current !== L || (L.resume(), f.current.resume(), K(!1), re(""), c());
  }
  async function Wt(L) {
    Te([]), S([]), I(null), g(""), Z(L.hintLevel), f.current.rearm(), q("info"), re(""), c(), L.question?.sound.length && await ye(L);
  }
  async function Ee() {
    const L = F.current, oe = ho(L);
    if (oe) {
      g(oe);
      return;
    }
    ct();
    const ge = k.current;
    if (g(""), pe(""), Pe(""), ua(L)) {
      Ne(!0);
      const lt = await yt("round");
      if (ge !== k.current) return;
      if (Ne(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && He();
    const Yt = new zm(L, () => i.data.stats, (lt) => i.record(lt));
    try {
      Yt.start();
    } catch (lt) {
      N.current.purpose === "round" && He(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    h.current = Yt, requestAnimationFrame(() => $.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Wt(Yt);
  }
  function Re() {
    ct(), Ne(!1), He();
  }
  function Ae(L, oe, ge, Yt = 0) {
    const lt = h.current, or = lt?.question;
    if (!lt || !or || lt.phase !== "active") return;
    const zn = lt.answer(L, oe, ge, Yt);
    if (zn !== "ignored") {
      if (zn === "candidate")
        I(L), q("bad"), re(rv(lt.settings, or, L));
      else if (zn === "wrong")
        ge ? Te((ur) => [...ur, ge]) : S((ur) => [...ur, L]), q("bad"), re(nv(lt.settings, or, oe, L, ge));
      else if (I(null), q("good"), re(tv(lt.settings, or, oe, L, ge)), In(lt, !1), lt.settings.advance) {
        const ur = k.current;
        j.current = setTimeout(() => {
          ur === k.current && We();
        }, oe === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function We() {
    const L = h.current;
    if (!(!L || L.phase !== "feedback")) {
      ct();
      try {
        L.next();
      } catch (oe) {
        Ze(!1), g(oe instanceof Error ? oe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        Ze(!0);
        return;
      }
      await Wt(L);
    }
  }
  function Ze(L = !1) {
    ct(), K(!1), Ne(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && He();
    const oe = h.current;
    oe && (oe.stop(), In(oe, L)), I(null), Z(0), Te([]), S([]), g(""), Pe(L ? "complete" : "stopped"), q("info"), re(""), c();
  }
  function Qt() {
    const L = h.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    ct(), K(!1), L.pause();
    const oe = N.current.purpose === "round";
    oe && He(), q("info"), re(`Harjoitus on tauolla.${oe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function gt() {
    const L = h.current;
    if (!L || L.phase !== "paused" || Me) return;
    ct();
    const oe = k.current;
    if (g(""), ua(L.settings)) {
      Ne(!0);
      const ge = await yt("round");
      if (oe !== k.current) return;
      if (Ne(!1), !ge) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), q("info"), re(""), c(), L.phase === "active" && (f.current.rearm(), L.question?.sound.length && await ye(L));
  }
  function bt(L) {
    const oe = h.current;
    !oe || oe.phase !== "active" || (oe.useHint(L), Z(L), c());
  }
  const hn = V.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hn.current = {
    hidden: () => {
      const L = h.current;
      L && ["active", "feedback"].includes(L.phase) || Me ? Qt() : N.current.phase !== "off" && N.current.phase !== "error" && (ct(), Ne(!1), He());
    },
    restored: () => {
      Ne(!1), K(!1), z({ phase: "off", purpose: "none" }), Ge(), c();
    }
  }, V.useEffect(() => {
    Ye();
    const L = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const oe = () => {
      k.current++, clearTimeout(j.current), clearTimeout(O.current), f.current.stop(), m.current.stop(), op(), h.current?.pause();
    }, ge = () => {
      document.hidden && hn.current.hidden();
    }, Yt = (lt) => {
      lt.persisted && hn.current.restored();
    };
    return document.addEventListener("visibilitychange", ge), window.addEventListener("pagehide", oe), window.addEventListener("pageshow", Yt), () => {
      oe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", ge), window.removeEventListener("pagehide", oe), window.removeEventListener("pageshow", Yt);
    };
  }, []);
  const mn = V.useRef(null), Dn = `${h.current?.id}:${h.current?.index}:${h.current?.phase}:${Me}`;
  V.useEffect(() => {
    const L = h.current, oe = $.current, ge = document.activeElement;
    !L || !oe || !(ge === document.body || oe.contains(ge)) || (L.phase === "feedback" ? mn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Me && (ge === document.body || ge === mn.current) && oe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Dn]);
  const Fe = h.current, nt = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Qe = nt ? Fe.settings : s, mt = nt ? Fe.question : void 0, Mt = !!mt && !!Fe?.answered, pn = nt && Fe.phase === "paused" && !Me && !Mt, vn = nt && Fe.phase === "active" && !Me, li = nt ? null : ho(s), wn = nt || Oe, lr = Cr(Qe), _r = Am(Qe), En = mt && !Mt ? E : 0, oi = mt ? Dm(Qe, mt, Mt ? 2 : En) : { marks: [], text: "" }, qi = [...new Map([...oi.marks, ...Mt ? [] : ve.map((L) => ({ ...L, label: Ie(L.midi, Qe.flats), kind: "wrong" }))].map((L) => [it(L), L])).values()], ja = nt && ua(Qe), Nn = !!mt && !pn && (mt.choices === "position" || qi.length > 0), xt = Fe ? po(Fe.results) : null, es = !Fe || Qe.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", ts = Fe && !nt ? Fe.results.filter((L) => L.errors > 0 || L.hint) : [], [ns, rs] = cv(Qe), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ l.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ l.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), _n = i.data.notice === "hints-default" && /* @__PURE__ */ l.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ l.jsxs("p", { children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ l.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ l.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ l.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
      i.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !nt && we === null ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Vm, { onSelect: zt })
  ] }) : !nt && we === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(hp, { onBack: () => $e(null) })
  ] }) : !nt && we === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(pp, { onBack: () => $e(null) })
  ] }) : !nt && we === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(yp, { onBack: () => $e(null) })
  ] }) : !nt && we === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx(Qp, { onBack: () => $e(null) })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    _n,
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsxs("a", { href: ns, children: [
      "Lue tämän harjoituksen teoria: ",
      rs,
      " →"
    ] }) }),
    we !== "legacy" && /* @__PURE__ */ l.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
        nt && Ze(), $e(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ l.jsx("h2", { children: we === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ l.jsx("p", { children: we === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    nt ? /* @__PURE__ */ l.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ l.jsx("strong", { children: qr(Qe.mode) }),
      " · ",
      gd(Qe)
    ] }) : we === "legacy" ? /* @__PURE__ */ l.jsx(xd, { s, change: Kt, locked: wn, problem: li }) : /* @__PURE__ */ l.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ l.jsx(xd, { s, change: Kt, locked: wn, problem: li })
    ] }),
    !nt && (we === "legacy" || ua(s)) && /* @__PURE__ */ l.jsx(
      Xp,
      {
        mic: D,
        frame: T,
        heard: H,
        accepted: te,
        now: B,
        s,
        change: Kt,
        devices: se,
        locked: Oe,
        calibrating: ee,
        calibration: le,
        onTest: nn,
        onStop: He,
        onCalibrate: Gt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: $, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: qr(Qe.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: nt ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${ga[Qe.hints].title}${es}${Fe.phase === "paused" && !Me ? " · tauolla" : ""}` : ke === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Fe && Fe.results.length > 0 && xt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ l.jsx("h3", { children: ke === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ l.jsxs("dl", { children: [
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ l.jsx("dd", { children: ov(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          ts.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(ts.map((L) => kf(L.item, s.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ l.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: gd(s) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: Oe ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!li, onClick: () => {
          Ee();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      nt && mt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: pn ? "Harjoitus on tauolla." : mt.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: pn ? "Kysymys palaa näkyviin, kun jatkat." : Me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : ev(Qe, mt) }),
        Fe.hintLevel > 0 && !Mt && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Qe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        ja && /* @__PURE__ */ l.jsx(Jp, { mic: D, frame: T, heard: H, s: Qe, now: B }),
        mt.choices === "note" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Qe.accidentals ? Array.from({ length: 12 }, (L, oe) => oe) : uv).map((L) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ce.includes(L) ? "wrong" : Mt && L === mt.midi % 12 ? "right" : "", disabled: !vn || Ce.includes(L), onClick: () => Ae(L, "note"), children: Ie(L, Qe.flats) }, L)) }),
        mt.choices === "degree" && !pn && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Qe.mode === "scale" ? ze.scaleNotes(ze.SCALES[Qe.scale]) : wr[Qe.chord].tones).map(([L, oe]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ce.includes(L) ? "wrong" : Mt && L === mt.interval ? "right" : "", disabled: !vn || Ce.includes(L), onClick: () => Ae(L, "degree"), children: oe }, L)) }),
        Nn && /* @__PURE__ */ l.jsx(
          Ji,
          {
            area: _r,
            marks: qi,
            disabled: !vn || mt.choices !== "position" || Qe.input === "mic",
            onAnswer: (L) => Ae(L.midi, "board", L),
            caption: lr.fixed === "shape" ? `${Qe.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Qe.box} alue` : "Otelauta"
          }
        ),
        !Mt && !pn && En > 0 && oi.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: oi.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${Q}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        b !== null && Fe.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), I(null), re("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: mn, onClick: () => {
            We();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Mt && !Me && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            En === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            En === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => bt(2), children: "Näytä vastaus" }),
            En > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Z(0), children: "Piilota vihje" })
          ] }),
          mt.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !vn, onClick: () => {
            ye(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !Me ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: Oe, onClick: () => {
            gt();
          }, children: Oe ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Qt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Ze(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Qe.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !nt && J && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: J })
    ] }),
    !nt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        s.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(ze.CHROM[s.root])}&asteikko=${s.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: jm(s), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(av, { store: i, s, locked: wn, changed: () => {
        const L = va(i.data.settings);
        F.current = L, u(L), c();
      } }),
      /* @__PURE__ */ l.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ l.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ l.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ l.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ l.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ l.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ l.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ l.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
fm.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(dv, {}));
//# sourceMappingURL=app.js.map
