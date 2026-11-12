function Zh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var eo = { exports: {} }, Ui = {}, to = { exports: {} }, Le = {};
var Zc;
function qh() {
  if (Zc) return Le;
  Zc = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), E = Symbol.iterator;
  function $(g) {
    return g === null || typeof g != "object" ? null : (g = E && g[E] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, N = {};
  function _(g, D, ye) {
    this.props = g, this.context = D, this.refs = N, this.updater = ye || I;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(g, D) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, D, "setState");
  }, _.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function L() {
  }
  L.prototype = _.prototype;
  function M(g, D, ye) {
    this.props = g, this.context = D, this.refs = N, this.updater = ye || I;
  }
  var R = M.prototype = new L();
  R.constructor = M, b(R, _.prototype), R.isPureReactComponent = !0;
  var G = Array.isArray, Z = Object.prototype.hasOwnProperty, te = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(g, D, ye) {
    var Ne, Te = {}, Ce = null, j = null;
    if (D != null) for (Ne in D.ref !== void 0 && (j = D.ref), D.key !== void 0 && (Ce = "" + D.key), D) Z.call(D, Ne) && !P.hasOwnProperty(Ne) && (Te[Ne] = D[Ne]);
    var z = arguments.length - 2;
    if (z === 1) Te.children = ye;
    else if (1 < z) {
      for (var F = Array(z), ee = 0; ee < z; ee++) F[ee] = arguments[ee + 2];
      Te.children = F;
    }
    if (g && g.defaultProps) for (Ne in z = g.defaultProps, z) Te[Ne] === void 0 && (Te[Ne] = z[Ne]);
    return { $$typeof: i, type: g, key: Ce, ref: j, props: Te, _owner: te.current };
  }
  function se(g, D) {
    return { $$typeof: i, type: g.type, key: D, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function ae(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Pe(g) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ye) {
      return D[ye];
    });
  }
  var Q = /\/+/g;
  function re(g, D) {
    return typeof g == "object" && g !== null && g.key != null ? Pe("" + g.key) : D.toString(36);
  }
  function de(g, D, ye, Ne, Te) {
    var Ce = typeof g;
    (Ce === "undefined" || Ce === "boolean") && (g = null);
    var j = !1;
    if (g === null) j = !0;
    else switch (Ce) {
      case "string":
      case "number":
        j = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case a:
            j = !0;
        }
    }
    if (j) return j = g, Te = Te(j), g = Ne === "" ? "." + re(j, 0) : Ne, G(Te) ? (ye = "", g != null && (ye = g.replace(Q, "$&/") + "/"), de(Te, D, ye, "", function(ee) {
      return ee;
    })) : Te != null && (ae(Te) && (Te = se(Te, ye + (!Te.key || j && j.key === Te.key ? "" : ("" + Te.key).replace(Q, "$&/") + "/") + g)), D.push(Te)), 1;
    if (j = 0, Ne = Ne === "" ? "." : Ne + ":", G(g)) for (var z = 0; z < g.length; z++) {
      Ce = g[z];
      var F = Ne + re(Ce, z);
      j += de(Ce, D, ye, F, Te);
    }
    else if (F = $(g), typeof F == "function") for (g = F.call(g), z = 0; !(Ce = g.next()).done; ) Ce = Ce.value, F = Ne + re(Ce, z++), j += de(Ce, D, ye, F, Te);
    else if (Ce === "object") throw D = String(g), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function q(g, D, ye) {
    if (g == null) return g;
    var Ne = [], Te = 0;
    return de(g, Ne, "", "", function(Ce) {
      return D.call(ye, Ce, Te++);
    }), Ne;
  }
  function ge(g) {
    if (g._status === -1) {
      var D = g._result;
      D = D(), D.then(function(ye) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ye);
      }, function(ye) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ye);
      }), g._status === -1 && (g._status = 0, g._result = D);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var pe = { current: null }, Y = { transition: null }, ne = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Y, ReactCurrentOwner: te };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: q, forEach: function(g, D, ye) {
    q(g, function() {
      D.apply(this, arguments);
    }, ye);
  }, count: function(g) {
    var D = 0;
    return q(g, function() {
      D++;
    }), D;
  }, toArray: function(g) {
    return q(g, function(D) {
      return D;
    }) || [];
  }, only: function(g) {
    if (!ae(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Le.Component = _, Le.Fragment = u, Le.Profiler = f, Le.PureComponent = M, Le.StrictMode = c, Le.Suspense = S, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, Le.act = X, Le.cloneElement = function(g, D, ye) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var Ne = b({}, g.props), Te = g.key, Ce = g.ref, j = g._owner;
    if (D != null) {
      if (D.ref !== void 0 && (Ce = D.ref, j = te.current), D.key !== void 0 && (Te = "" + D.key), g.type && g.type.defaultProps) var z = g.type.defaultProps;
      for (F in D) Z.call(D, F) && !P.hasOwnProperty(F) && (Ne[F] = D[F] === void 0 && z !== void 0 ? z[F] : D[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) Ne.children = ye;
    else if (1 < F) {
      z = Array(F);
      for (var ee = 0; ee < F; ee++) z[ee] = arguments[ee + 2];
      Ne.children = z;
    }
    return { $$typeof: i, type: g.type, key: Te, ref: Ce, props: Ne, _owner: j };
  }, Le.createContext = function(g) {
    return g = { $$typeof: m, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Le.createElement = V, Le.createFactory = function(g) {
    var D = V.bind(null, g);
    return D.type = g, D;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(g) {
    return { $$typeof: k, render: g };
  }, Le.isValidElement = ae, Le.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: ge };
  }, Le.memo = function(g, D) {
    return { $$typeof: O, type: g, compare: D === void 0 ? null : D };
  }, Le.startTransition = function(g) {
    var D = Y.transition;
    Y.transition = {};
    try {
      g();
    } finally {
      Y.transition = D;
    }
  }, Le.unstable_act = X, Le.useCallback = function(g, D) {
    return pe.current.useCallback(g, D);
  }, Le.useContext = function(g) {
    return pe.current.useContext(g);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(g) {
    return pe.current.useDeferredValue(g);
  }, Le.useEffect = function(g, D) {
    return pe.current.useEffect(g, D);
  }, Le.useId = function() {
    return pe.current.useId();
  }, Le.useImperativeHandle = function(g, D, ye) {
    return pe.current.useImperativeHandle(g, D, ye);
  }, Le.useInsertionEffect = function(g, D) {
    return pe.current.useInsertionEffect(g, D);
  }, Le.useLayoutEffect = function(g, D) {
    return pe.current.useLayoutEffect(g, D);
  }, Le.useMemo = function(g, D) {
    return pe.current.useMemo(g, D);
  }, Le.useReducer = function(g, D, ye) {
    return pe.current.useReducer(g, D, ye);
  }, Le.useRef = function(g) {
    return pe.current.useRef(g);
  }, Le.useState = function(g) {
    return pe.current.useState(g);
  }, Le.useSyncExternalStore = function(g, D, ye) {
    return pe.current.useSyncExternalStore(g, D, ye);
  }, Le.useTransition = function() {
    return pe.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var qc;
function wo() {
  return qc || (qc = 1, to.exports = qh()), to.exports;
}
var ed;
function em() {
  if (ed) return Ui;
  ed = 1;
  var i = wo(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(k, S, O) {
    var v, E = {}, $ = null, I = null;
    O !== void 0 && ($ = "" + O), S.key !== void 0 && ($ = "" + S.key), S.ref !== void 0 && (I = S.ref);
    for (v in S) c.call(S, v) && !h.hasOwnProperty(v) && (E[v] = S[v]);
    if (k && k.defaultProps) for (v in S = k.defaultProps, S) E[v] === void 0 && (E[v] = S[v]);
    return { $$typeof: a, type: k, key: $, ref: I, props: E, _owner: f.current };
  }
  return Ui.Fragment = u, Ui.jsx = m, Ui.jsxs = m, Ui;
}
var td;
function tm() {
  return td || (td = 1, eo.exports = em()), eo.exports;
}
var l = tm(), B = wo(), ua = {}, no = { exports: {} }, zt = {}, ro = { exports: {} }, io = {};
var nd;
function nm() {
  return nd || (nd = 1, (function(i) {
    function a(Y, ne) {
      var X = Y.length;
      Y.push(ne);
      e: for (; 0 < X; ) {
        var g = X - 1 >>> 1, D = Y[g];
        if (0 < f(D, ne)) Y[g] = ne, Y[X] = D, X = g;
        else break e;
      }
    }
    function u(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function c(Y) {
      if (Y.length === 0) return null;
      var ne = Y[0], X = Y.pop();
      if (X !== ne) {
        Y[0] = X;
        e: for (var g = 0, D = Y.length, ye = D >>> 1; g < ye; ) {
          var Ne = 2 * (g + 1) - 1, Te = Y[Ne], Ce = Ne + 1, j = Y[Ce];
          if (0 > f(Te, X)) Ce < D && 0 > f(j, Te) ? (Y[g] = j, Y[Ce] = X, g = Ce) : (Y[g] = Te, Y[Ne] = X, g = Ne);
          else if (Ce < D && 0 > f(j, X)) Y[g] = j, Y[Ce] = X, g = Ce;
          else break e;
        }
      }
      return ne;
    }
    function f(Y, ne) {
      var X = Y.sortIndex - ne.sortIndex;
      return X !== 0 ? X : Y.id - ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, k = m.now();
      i.unstable_now = function() {
        return m.now() - k;
      };
    }
    var S = [], O = [], v = 1, E = null, $ = 3, I = !1, b = !1, N = !1, _ = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function R(Y) {
      for (var ne = u(O); ne !== null; ) {
        if (ne.callback === null) c(O);
        else if (ne.startTime <= Y) c(O), ne.sortIndex = ne.expirationTime, a(S, ne);
        else break;
        ne = u(O);
      }
    }
    function G(Y) {
      if (N = !1, R(Y), !b) if (u(S) !== null) b = !0, ge(Z);
      else {
        var ne = u(O);
        ne !== null && pe(G, ne.startTime - Y);
      }
    }
    function Z(Y, ne) {
      b = !1, N && (N = !1, L(V), V = -1), I = !0;
      var X = $;
      try {
        for (R(ne), E = u(S); E !== null && (!(E.expirationTime > ne) || Y && !Pe()); ) {
          var g = E.callback;
          if (typeof g == "function") {
            E.callback = null, $ = E.priorityLevel;
            var D = g(E.expirationTime <= ne);
            ne = i.unstable_now(), typeof D == "function" ? E.callback = D : E === u(S) && c(S), R(ne);
          } else c(S);
          E = u(S);
        }
        if (E !== null) var ye = !0;
        else {
          var Ne = u(O);
          Ne !== null && pe(G, Ne.startTime - ne), ye = !1;
        }
        return ye;
      } finally {
        E = null, $ = X, I = !1;
      }
    }
    var te = !1, P = null, V = -1, se = 5, ae = -1;
    function Pe() {
      return !(i.unstable_now() - ae < se);
    }
    function Q() {
      if (P !== null) {
        var Y = i.unstable_now();
        ae = Y;
        var ne = !0;
        try {
          ne = P(!0, Y);
        } finally {
          ne ? re() : (te = !1, P = null);
        }
      } else te = !1;
    }
    var re;
    if (typeof M == "function") re = function() {
      M(Q);
    };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), q = de.port2;
      de.port1.onmessage = Q, re = function() {
        q.postMessage(null);
      };
    } else re = function() {
      _(Q, 0);
    };
    function ge(Y) {
      P = Y, te || (te = !0, re());
    }
    function pe(Y, ne) {
      V = _(function() {
        Y(i.unstable_now());
      }, ne);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, i.unstable_continueExecution = function() {
      b || I || (b = !0, ge(Z));
    }, i.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, i.unstable_next = function(Y) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = $;
      }
      var X = $;
      $ = ne;
      try {
        return Y();
      } finally {
        $ = X;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(Y, ne) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var X = $;
      $ = Y;
      try {
        return ne();
      } finally {
        $ = X;
      }
    }, i.unstable_scheduleCallback = function(Y, ne, X) {
      var g = i.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? g + X : g) : X = g, Y) {
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
      return D = X + D, Y = { id: v++, callback: ne, priorityLevel: Y, startTime: X, expirationTime: D, sortIndex: -1 }, X > g ? (Y.sortIndex = X, a(O, Y), u(S) === null && Y === u(O) && (N ? (L(V), V = -1) : N = !0, pe(G, X - g))) : (Y.sortIndex = D, a(S, Y), b || I || (b = !0, ge(Z))), Y;
    }, i.unstable_shouldYield = Pe, i.unstable_wrapCallback = function(Y) {
      var ne = $;
      return function() {
        var X = $;
        $ = ne;
        try {
          return Y.apply(this, arguments);
        } finally {
          $ = X;
        }
      };
    };
  })(io)), io;
}
var rd;
function rm() {
  return rd || (rd = 1, ro.exports = nm()), ro.exports;
}
var id;
function im() {
  if (id) return zt;
  id = 1;
  var i = wo(), a = rm();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function h(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, E = {};
  function $(e) {
    return S.call(E, e) ? !0 : S.call(v, e) ? !1 : O.test(e) ? E[e] = !0 : (v[e] = !0, !1);
  }
  function I(e, t, n, r) {
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
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
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
  function N(e, t, n, r, s, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    _[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    _[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    _[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var L = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      L,
      M
    );
    _[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(L, M);
    _[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(L, M);
    _[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    _[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), _.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    _[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function R(e, t, n, r) {
    var s = _.hasOwnProperty(t) ? _[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, s, r) && (n = null), r || s === null ? $(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = /* @__PURE__ */ Symbol.for("react.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.provider"), Pe = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), re = /* @__PURE__ */ Symbol.for("react.suspense"), de = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), ge = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Object.assign, g;
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
  var ye = !1;
  function Ne(e, t) {
    if (!e || ye) return "";
    ye = !0;
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
        } catch (T) {
          var r = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          r = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          r = T;
        }
        e();
      }
    } catch (T) {
      if (T && r && typeof T.stack == "string") {
        for (var s = T.stack.split(`
`), o = r.stack.split(`
`), d = s.length - 1, p = o.length - 1; 1 <= d && 0 <= p && s[d] !== o[p]; ) p--;
        for (; 1 <= d && 0 <= p; d--, p--) if (s[d] !== o[p]) {
          if (d !== 1 || p !== 1)
            do
              if (d--, p--, 0 > p || s[d] !== o[p]) {
                var y = `
` + s[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= p);
          break;
        }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function Te(e) {
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
        return e = Ne(e.type, !1), e;
      case 11:
        return e = Ne(e.type.render, !1), e;
      case 1:
        return e = Ne(e.type, !0), e;
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
      case se:
        return "Profiler";
      case V:
        return "StrictMode";
      case re:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Pe:
        return (e.displayName || "Context") + ".Consumer";
      case ae:
        return (e._context.displayName || "Context") + ".Provider";
      case Q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case q:
        return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
      case ge:
        t = e._payload, e = e._init;
        try {
          return Ce(e(t));
        } catch {
        }
    }
    return null;
  }
  function j(e) {
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
  function z(e) {
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
  function F(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ee(e) {
    var t = F(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
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
  function oe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = F(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ve(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var n = t.checked;
    return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Me(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ee(e, t) {
    t = t.checked, t != null && R(e, "checked", t, !1);
  }
  function $e(e, t) {
    Ee(e, t);
    var n = z(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || ve(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Ue(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + z(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ye(e, t) {
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
    e._wrapperState = { initialValue: z(n) };
  }
  function ze(e, t) {
    var n = z(t.value), r = z(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function tt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function _t(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function bt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _t(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Vt, sn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Vt = Vt || document.createElement("div"), Vt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Qt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yt = {
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
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yt).forEach(function(e) {
    Tt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Yt[t] = Yt[e];
    });
  });
  function xe(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yt.hasOwnProperty(e) && Yt[e] ? ("" + t).trim() : t + "px";
  }
  function Bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = xe(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var we = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ae(e, t) {
    if (t) {
      if (we[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
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
  var He = null;
  function it(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rt = null, mt = null, Jt = null;
  function wn(e) {
    if (e = Ti(e)) {
      if (typeof Rt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Es(t), Rt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    mt ? Jt ? Jt.push(e) : Jt = [e] : mt = e;
  }
  function vn() {
    if (mt) {
      var e = mt, t = Jt;
      if (Jt = mt = null, wn(e), t) for (e = 0; e < t.length; e++) wn(t[e]);
    }
  }
  function es(e, t) {
    return e(t);
  }
  function Fe() {
  }
  var Ze = !1;
  function Je(e, t, n) {
    if (Ze) return e(t, n);
    Ze = !0;
    try {
      return es(e, t, n);
    } finally {
      Ze = !1, (mt !== null || Jt !== null) && (Fe(), vn());
    }
  }
  function ot(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Es(n);
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
  var Ut = !1;
  if (k) try {
    var Xt = {};
    Object.defineProperty(Xt, "passive", { get: function() {
      Ut = !0;
    } }), window.addEventListener("test", Xt, Xt), window.removeEventListener("test", Xt, Xt);
  } catch {
    Ut = !1;
  }
  function Cr(e, t, n, r, s, o, d, p, y) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (H) {
      this.onError(H);
    }
  }
  var En = !1, In = null, lr = !1, ai = null, or = { onError: function(e) {
    En = !0, In = e;
  } };
  function li(e, t, n, r, s, o, d, p, y) {
    En = !1, In = null, Cr.apply(or, arguments);
  }
  function ts(e, t, n, r, s, o, d, p, y) {
    if (li.apply(this, arguments), En) {
      if (En) {
        var T = In;
        En = !1, In = null;
      } else throw Error(u(198));
      lr || (lr = !0, ai = T);
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
  function ns(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gt(e) {
    if (Nn(e) !== e) throw Error(u(188));
  }
  function xa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return gt(s), e;
          if (o === r) return gt(s), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = s, r = o;
      else {
        for (var d = !1, p = s.child; p; ) {
          if (p === n) {
            d = !0, n = s, r = o;
            break;
          }
          if (p === r) {
            d = !0, r = s, n = o;
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = o.child; p; ) {
            if (p === n) {
              d = !0, n = o, r = s;
              break;
            }
            if (p === r) {
              d = !0, r = o, n = s;
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
  function oi(e) {
    return e = xa(e), e !== null ? rs(e) : null;
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
  var is = a.unstable_scheduleCallback, Cn = a.unstable_cancelCallback, Dn = a.unstable_shouldYield, A = a.unstable_requestPaint, J = a.unstable_now, Ie = a.unstable_getCurrentPriorityLevel, $t = a.unstable_ImmediatePriority, ut = a.unstable_UserBlockingPriority, _n = a.unstable_NormalPriority, ui = a.unstable_LowPriority, zn = a.unstable_IdlePriority, ss = null, kn = null;
  function hf(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : vf, mf = Math.log, pf = Math.LN2;
  function vf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mf(e) / pf | 0) | 0;
  }
  var as = 64, ls = 4194304;
  function ci(e) {
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
  function os(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var p = d & ~s;
      p !== 0 ? r = ci(p) : (o &= d, o !== 0 && (r = ci(o)));
    } else d = n & ~s, d !== 0 ? r = ci(d) : o !== 0 && (r = ci(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - an(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function kf(e, t) {
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
  function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - an(o), p = 1 << d, y = s[d];
      y === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[d] = kf(p, t)) : y <= t && (e.expiredLanes |= p), o &= ~p;
    }
  }
  function ja(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Mo() {
    var e = as;
    return as <<= 1, (as & 4194240) === 0 && (as = 64), e;
  }
  function Sa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function di(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function gf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - an(n), o = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
    }
  }
  function wa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - an(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Ge = 0;
  function Po(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ao, Ea, Ro, $o, Lo, Na = !1, us = [], bn = null, Vn = null, Bn = null, fi = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Map(), Un = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Fo(e, t) {
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
        fi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hi.delete(t.pointerId);
    }
  }
  function mi(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = Ti(t), t !== null && Ea(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function jf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return bn = mi(bn, e, t, n, r, s), !0;
      case "dragenter":
        return Vn = mi(Vn, e, t, n, r, s), !0;
      case "mouseover":
        return Bn = mi(Bn, e, t, n, r, s), !0;
      case "pointerover":
        var o = s.pointerId;
        return fi.set(o, mi(fi.get(o) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return o = s.pointerId, hi.set(o, mi(hi.get(o) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Oo(e) {
    var t = ur(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ns(n), t !== null) {
            e.blockedOn = t, Lo(e.priority, function() {
              Ro(n);
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
  function cs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        He = r, n.target.dispatchEvent(r), He = null;
      } else return t = Ti(n), t !== null && Ea(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Io(e, t, n) {
    cs(e) && n.delete(t);
  }
  function Sf() {
    Na = !1, bn !== null && cs(bn) && (bn = null), Vn !== null && cs(Vn) && (Vn = null), Bn !== null && cs(Bn) && (Bn = null), fi.forEach(Io), hi.forEach(Io);
  }
  function pi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Na || (Na = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Sf)));
  }
  function vi(e) {
    function t(s) {
      return pi(s, e);
    }
    if (0 < us.length) {
      pi(us[0], e);
      for (var n = 1; n < us.length; n++) {
        var r = us[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bn !== null && pi(bn, e), Vn !== null && pi(Vn, e), Bn !== null && pi(Bn, e), fi.forEach(t), hi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Oo(n), n.blockedOn === null && Un.shift();
  }
  var _r = G.ReactCurrentBatchConfig, ds = !0;
  function wf(e, t, n, r) {
    var s = Ge, o = _r.transition;
    _r.transition = null;
    try {
      Ge = 1, Ca(e, t, n, r);
    } finally {
      Ge = s, _r.transition = o;
    }
  }
  function Ef(e, t, n, r) {
    var s = Ge, o = _r.transition;
    _r.transition = null;
    try {
      Ge = 4, Ca(e, t, n, r);
    } finally {
      Ge = s, _r.transition = o;
    }
  }
  function Ca(e, t, n, r) {
    if (ds) {
      var s = _a(e, t, n, r);
      if (s === null) Ha(e, t, r, fs, n), Fo(e, r);
      else if (jf(s, e, t, n, r)) r.stopPropagation();
      else if (Fo(e, r), t & 4 && -1 < xf.indexOf(e)) {
        for (; s !== null; ) {
          var o = Ti(s);
          if (o !== null && Ao(o), o = _a(e, t, n, r), o === null && Ha(e, t, r, fs, n), o === s) break;
          s = o;
        }
        s !== null && r.stopPropagation();
      } else Ha(e, t, r, null, n);
    }
  }
  var fs = null;
  function _a(e, t, n, r) {
    if (fs = null, e = it(r), e = ur(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ns(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return fs = e, null;
  }
  function Do(e) {
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
          case ut:
            return 4;
          case _n:
          case ui:
            return 16;
          case zn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, Ta = null, hs = null;
  function zo() {
    if (hs) return hs;
    var e, t = Ta, n = t.length, r, s = "value" in Hn ? Hn.value : Hn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[o - r]; r++) ;
    return hs = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ms(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ps() {
    return !0;
  }
  function bo() {
    return !1;
  }
  function Ht(e) {
    function t(n, r, s, o, d) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(o) : o[p]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ps : bo, this.isPropagationStopped = bo, this;
    }
    return X(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ps);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ps);
    }, persist: function() {
    }, isPersistent: ps }), t;
  }
  var Tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ma = Ht(Tr), ki = X({}, Tr, { view: 0, detail: 0 }), Nf = Ht(ki), Pa, Aa, yi, vs = X({}, ki, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $a, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== yi && (yi && e.type === "mousemove" ? (Pa = e.screenX - yi.screenX, Aa = e.screenY - yi.screenY) : Aa = Pa = 0, yi = e), Pa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Aa;
  } }), Vo = Ht(vs), Cf = X({}, vs, { dataTransfer: 0 }), _f = Ht(Cf), Tf = X({}, ki, { relatedTarget: 0 }), Ra = Ht(Tf), Mf = X({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = Ht(Mf), Af = X({}, Tr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Rf = Ht(Af), $f = X({}, Tr, { data: 0 }), Bo = Ht($f), Lf = {
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
  }, Ff = {
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
  }, Of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function If(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Of[e]) ? !!t[e] : !1;
  }
  function $a() {
    return If;
  }
  var Df = X({}, ki, { key: function(e) {
    if (e.key) {
      var t = Lf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ff[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $a, charCode: function(e) {
    return e.type === "keypress" ? ms(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), zf = Ht(Df), bf = X({}, vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Uo = Ht(bf), Vf = X({}, ki, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $a }), Bf = Ht(Vf), Uf = X({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = Ht(Uf), Kf = X({}, vs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gf = Ht(Kf), Wf = [9, 13, 27, 32], La = k && "CompositionEvent" in window, gi = null;
  k && "documentMode" in document && (gi = document.documentMode);
  var Qf = k && "TextEvent" in window && !gi, Ho = k && (!La || gi && 8 < gi && 11 >= gi), Ko = " ", Go = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return Wf.indexOf(t.keyCode) !== -1;
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
  function Qo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mr = !1;
  function Yf(e, t) {
    switch (e) {
      case "compositionend":
        return Qo(t);
      case "keypress":
        return t.which !== 32 ? null : (Go = !0, Ko);
      case "textInput":
        return e = t.data, e === Ko && Go ? null : e;
      default:
        return null;
    }
  }
  function Jf(e, t) {
    if (Mr) return e === "compositionend" || !La && Wo(e, t) ? (e = zo(), hs = Ta = Hn = null, Mr = !1, e) : null;
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
        return Ho && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xf[e.type] : t === "textarea";
  }
  function Jo(e, t, n, r) {
    pn(r), t = js(t, "onChange"), 0 < t.length && (n = new Ma("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var xi = null, ji = null;
  function Zf(e) {
    mu(e, 0);
  }
  function ks(e) {
    var t = Lr(e);
    if (oe(t)) return e;
  }
  function qf(e, t) {
    if (e === "change") return t;
  }
  var Xo = !1;
  if (k) {
    var Fa;
    if (k) {
      var Oa = "oninput" in document;
      if (!Oa) {
        var Zo = document.createElement("div");
        Zo.setAttribute("oninput", "return;"), Oa = typeof Zo.oninput == "function";
      }
      Fa = Oa;
    } else Fa = !1;
    Xo = Fa && (!document.documentMode || 9 < document.documentMode);
  }
  function qo() {
    xi && (xi.detachEvent("onpropertychange", eu), ji = xi = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && ks(ji)) {
      var t = [];
      Jo(t, ji, e, it(e)), Je(Zf, t);
    }
  }
  function eh(e, t, n) {
    e === "focusin" ? (qo(), xi = t, ji = n, xi.attachEvent("onpropertychange", eu)) : e === "focusout" && qo();
  }
  function th(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(ji);
  }
  function nh(e, t) {
    if (e === "click") return ks(t);
  }
  function rh(e, t) {
    if (e === "input" || e === "change") return ks(t);
  }
  function ih(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : ih;
  function Si(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!S.call(t, s) || !ln(e[s], t[s])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nu(e, t) {
    var n = tu(e);
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
      n = tu(n);
    }
  }
  function ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function iu() {
    for (var e = window, t = ve(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ve(e.document);
    }
    return t;
  }
  function Ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function sh(e) {
    var t = iu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ia(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, o = Math.min(r.start, s);
          r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = nu(n, o);
          var d = nu(
            n,
            r
          );
          s && d && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ah = k && "documentMode" in document && 11 >= document.documentMode, Pr = null, Da = null, wi = null, za = !1;
  function su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    za || Pr == null || Pr !== ve(r) || (r = Pr, "selectionStart" in r && Ia(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wi && Si(wi, r) || (wi = r, r = js(Da, "onSelect"), 0 < r.length && (t = new Ma("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pr)));
  }
  function ys(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ar = { animationend: ys("Animation", "AnimationEnd"), animationiteration: ys("Animation", "AnimationIteration"), animationstart: ys("Animation", "AnimationStart"), transitionend: ys("Transition", "TransitionEnd") }, ba = {}, au = {};
  k && (au = document.createElement("div").style, "AnimationEvent" in window || (delete Ar.animationend.animation, delete Ar.animationiteration.animation, delete Ar.animationstart.animation), "TransitionEvent" in window || delete Ar.transitionend.transition);
  function gs(e) {
    if (ba[e]) return ba[e];
    if (!Ar[e]) return e;
    var t = Ar[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in au) return ba[e] = t[n];
    return e;
  }
  var lu = gs("animationend"), ou = gs("animationiteration"), uu = gs("animationstart"), cu = gs("transitionend"), du = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kn(e, t) {
    du.set(e, t), h(t, [e]);
  }
  for (var Va = 0; Va < fu.length; Va++) {
    var Ba = fu[Va], lh = Ba.toLowerCase(), oh = Ba[0].toUpperCase() + Ba.slice(1);
    Kn(lh, "on" + oh);
  }
  Kn(lu, "onAnimationEnd"), Kn(ou, "onAnimationIteration"), Kn(uu, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(cu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
  function hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ts(r, t, void 0, e), e.currentTarget = null;
  }
  function mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var p = r[d], y = p.instance, T = p.currentTarget;
          if (p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, T), o = y;
        }
        else for (d = 0; d < r.length; d++) {
          if (p = r[d], y = p.instance, T = p.currentTarget, p = p.listener, y !== o && s.isPropagationStopped()) break e;
          hu(s, p, T), o = y;
        }
      }
    }
    if (lr) throw e = ai, lr = !1, ai = null, e;
  }
  function qe(e, t) {
    var n = t[Ja];
    n === void 0 && (n = t[Ja] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (pu(t, e, 2, !1), n.add(r));
  }
  function Ua(e, t, n) {
    var r = 0;
    t && (r |= 4), pu(n, e, r, t);
  }
  var xs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ni(e) {
    if (!e[xs]) {
      e[xs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (uh.has(n) || Ua(n, !1, e), Ua(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xs] || (t[xs] = !0, Ua("selectionchange", !1, t));
    }
  }
  function pu(e, t, n, r) {
    switch (Do(t)) {
      case 1:
        var s = wf;
        break;
      case 4:
        s = Ef;
        break;
      default:
        s = Ca;
    }
    n = s.bind(null, t, n, e), s = void 0, !Ut || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Ha(e, t, n, r, s) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var p = r.stateNode.containerInfo;
        if (p === s || p.nodeType === 8 && p.parentNode === s) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === s || y.nodeType === 8 && y.parentNode === s)) return;
          d = d.return;
        }
        for (; p !== null; ) {
          if (d = ur(p), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            r = o = d;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    Je(function() {
      var T = o, H = it(n), K = [];
      e: {
        var U = du.get(e);
        if (U !== void 0) {
          var ie = Ma, ue = e;
          switch (e) {
            case "keypress":
              if (ms(n) === 0) break e;
            case "keydown":
            case "keyup":
              ie = zf;
              break;
            case "focusin":
              ue = "focus", ie = Ra;
              break;
            case "focusout":
              ue = "blur", ie = Ra;
              break;
            case "beforeblur":
            case "afterblur":
              ie = Ra;
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
              ie = Vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = _f;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = Bf;
              break;
            case lu:
            case ou:
            case uu:
              ie = Pf;
              break;
            case cu:
              ie = Hf;
              break;
            case "scroll":
              ie = Nf;
              break;
            case "wheel":
              ie = Gf;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = Rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = Uo;
          }
          var he = (t & 4) !== 0, ct = !he && e === "scroll", w = he ? U !== null ? U + "Capture" : null : U;
          he = [];
          for (var x = T, C; x !== null; ) {
            C = x;
            var W = C.stateNode;
            if (C.tag === 5 && W !== null && (C = W, w !== null && (W = ot(x, w), W != null && he.push(Ci(x, W, C)))), ct) break;
            x = x.return;
          }
          0 < he.length && (U = new ie(U, ue, null, n, H), K.push({ event: U, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", ie = e === "mouseout" || e === "pointerout", U && n !== He && (ue = n.relatedTarget || n.fromElement) && (ur(ue) || ue[Tn])) break e;
          if ((ie || U) && (U = H.window === H ? H : (U = H.ownerDocument) ? U.defaultView || U.parentWindow : window, ie ? (ue = n.relatedTarget || n.toElement, ie = T, ue = ue ? ur(ue) : null, ue !== null && (ct = Nn(ue), ue !== ct || ue.tag !== 5 && ue.tag !== 6) && (ue = null)) : (ie = null, ue = T), ie !== ue)) {
            if (he = Vo, W = "onMouseLeave", w = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (he = Uo, W = "onPointerLeave", w = "onPointerEnter", x = "pointer"), ct = ie == null ? U : Lr(ie), C = ue == null ? U : Lr(ue), U = new he(W, x + "leave", ie, n, H), U.target = ct, U.relatedTarget = C, W = null, ur(H) === T && (he = new he(w, x + "enter", ue, n, H), he.target = C, he.relatedTarget = ct, W = he), ct = W, ie && ue) t: {
              for (he = ie, w = ue, x = 0, C = he; C; C = Rr(C)) x++;
              for (C = 0, W = w; W; W = Rr(W)) C++;
              for (; 0 < x - C; ) he = Rr(he), x--;
              for (; 0 < C - x; ) w = Rr(w), C--;
              for (; x--; ) {
                if (he === w || w !== null && he === w.alternate) break t;
                he = Rr(he), w = Rr(w);
              }
              he = null;
            }
            else he = null;
            ie !== null && vu(K, U, ie, he, !1), ue !== null && ct !== null && vu(K, ct, ue, he, !0);
          }
        }
        e: {
          if (U = T ? Lr(T) : window, ie = U.nodeName && U.nodeName.toLowerCase(), ie === "select" || ie === "input" && U.type === "file") var me = qf;
          else if (Yo(U)) if (Xo) me = rh;
          else {
            me = th;
            var je = eh;
          }
          else (ie = U.nodeName) && ie.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (me = nh);
          if (me && (me = me(e, T))) {
            Jo(K, me, n, H);
            break e;
          }
          je && je(e, U, T), e === "focusout" && (je = U._wrapperState) && je.controlled && U.type === "number" && Be(U, "number", U.value);
        }
        switch (je = T ? Lr(T) : window, e) {
          case "focusin":
            (Yo(je) || je.contentEditable === "true") && (Pr = je, Da = T, wi = null);
            break;
          case "focusout":
            wi = Da = Pr = null;
            break;
          case "mousedown":
            za = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            za = !1, su(K, n, H);
            break;
          case "selectionchange":
            if (ah) break;
          case "keydown":
          case "keyup":
            su(K, n, H);
        }
        var Se;
        if (La) e: {
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
        else Mr ? Wo(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Ho && n.locale !== "ko" && (Mr || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Mr && (Se = zo()) : (Hn = H, Ta = "value" in Hn ? Hn.value : Hn.textContent, Mr = !0)), je = js(T, _e), 0 < je.length && (_e = new Bo(_e, e, null, n, H), K.push({ event: _e, listeners: je }), Se ? _e.data = Se : (Se = Qo(n), Se !== null && (_e.data = Se)))), (Se = Qf ? Yf(e, n) : Jf(e, n)) && (T = js(T, "onBeforeInput"), 0 < T.length && (H = new Bo("onBeforeInput", "beforeinput", null, n, H), K.push({ event: H, listeners: T }), H.data = Se));
      }
      mu(K, t);
    });
  }
  function Ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function js(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, o = s.stateNode;
      s.tag === 5 && o !== null && (s = o, o = ot(e, n), o != null && r.unshift(Ci(e, o, s)), o = ot(e, t), o != null && r.push(Ci(e, o, s))), e = e.return;
    }
    return r;
  }
  function Rr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vu(e, t, n, r, s) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var p = n, y = p.alternate, T = p.stateNode;
      if (y !== null && y === r) break;
      p.tag === 5 && T !== null && (p = T, s ? (y = ot(n, o), y != null && d.unshift(Ci(n, y, p))) : s || (y = ot(n, o), y != null && d.push(Ci(n, y, p)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var ch = /\r\n?/g, dh = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(ch, `
`).replace(dh, "");
  }
  function Ss(e, t, n) {
    if (t = ku(t), ku(e) !== t && n) throw Error(u(425));
  }
  function ws() {
  }
  var Ka = null, Ga = null;
  function Wa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qa = typeof setTimeout == "function" ? setTimeout : void 0, fh = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, hh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(mh);
  } : Qa;
  function mh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ya(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), vi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    vi(t);
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
  function gu(e) {
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
  var $r = Math.random().toString(36).slice(2), yn = "__reactFiber$" + $r, _i = "__reactProps$" + $r, Tn = "__reactContainer$" + $r, Ja = "__reactEvents$" + $r, ph = "__reactListeners$" + $r, vh = "__reactHandles$" + $r;
  function ur(e) {
    var t = e[yn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tn] || n[yn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
          if (n = e[yn]) return n;
          e = gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ti(e) {
    return e = e[yn] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Es(e) {
    return e[_i] || null;
  }
  var Xa = [], Fr = -1;
  function Wn(e) {
    return { current: e };
  }
  function et(e) {
    0 > Fr || (e.current = Xa[Fr], Xa[Fr] = null, Fr--);
  }
  function Xe(e, t) {
    Fr++, Xa[Fr] = e.current, e.current = t;
  }
  var Qn = {}, wt = Wn(Qn), Lt = Wn(!1), cr = Qn;
  function Or(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n) s[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function Ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ns() {
    et(Lt), et(wt);
  }
  function xu(e, t, n) {
    if (wt.current !== Qn) throw Error(u(168));
    Xe(wt, t), Xe(Lt, n);
  }
  function ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, j(e) || "Unknown", s));
    return X({}, n, r);
  }
  function Cs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, cr = wt.current, Xe(wt, e), Xe(Lt, Lt.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = ju(e, t, cr), r.__reactInternalMemoizedMergedChildContext = e, et(Lt), et(wt), Xe(wt, e)) : et(Lt), Xe(Lt, n);
  }
  var Mn = null, _s = !1, Za = !1;
  function wu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function kh(e) {
    _s = !0, wu(e);
  }
  function Yn() {
    if (!Za && Mn !== null) {
      Za = !0;
      var e = 0, t = Ge;
      try {
        var n = Mn;
        for (Ge = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mn = null, _s = !1;
      } catch (s) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), is($t, Yn), s;
      } finally {
        Ge = t, Za = !1;
      }
    }
    return null;
  }
  var Ir = [], Dr = 0, Ts = null, Ms = 0, Zt = [], qt = 0, dr = null, Pn = 1, An = "";
  function fr(e, t) {
    Ir[Dr++] = Ms, Ir[Dr++] = Ts, Ts = e, Ms = t;
  }
  function Eu(e, t, n) {
    Zt[qt++] = Pn, Zt[qt++] = An, Zt[qt++] = dr, dr = e;
    var r = Pn;
    e = An;
    var s = 32 - an(r) - 1;
    r &= ~(1 << s), n += 1;
    var o = 32 - an(t) + s;
    if (30 < o) {
      var d = s - s % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, s -= d, Pn = 1 << 32 - an(t) + s | n << s | r, An = o + e;
    } else Pn = 1 << o | n << s | r, An = e;
  }
  function qa(e) {
    e.return !== null && (fr(e, 1), Eu(e, 1, 0));
  }
  function el(e) {
    for (; e === Ts; ) Ts = Ir[--Dr], Ir[Dr] = null, Ms = Ir[--Dr], Ir[Dr] = null;
    for (; e === dr; ) dr = Zt[--qt], Zt[qt] = null, An = Zt[--qt], Zt[qt] = null, Pn = Zt[--qt], Zt[qt] = null;
  }
  var Kt = null, Gt = null, nt = !1, on = null;
  function Nu(e, t) {
    var n = rn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Cu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Gt = Gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dr !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nl(e) {
    if (nt) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Cu(e, t)) {
          if (tl(e)) throw Error(u(418));
          t = Gn(n.nextSibling);
          var r = Kt;
          t && Cu(e, t) ? Nu(r, n) : (e.flags = e.flags & -4097 | 2, nt = !1, Kt = e);
        }
      } else {
        if (tl(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, nt = !1, Kt = e;
      }
    }
  }
  function _u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function Ps(e) {
    if (e !== Kt) return !1;
    if (!nt) return _u(e), nt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wa(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (tl(e)) throw Tu(), Error(u(418));
      for (; t; ) Nu(e, t), t = Gn(t.nextSibling);
    }
    if (_u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Gt = Gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Kt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tu() {
    for (var e = Gt; e; ) e = Gn(e.nextSibling);
  }
  function zr() {
    Gt = Kt = null, nt = !1;
  }
  function rl(e) {
    on === null ? on = [e] : on.push(e);
  }
  var yh = G.ReactCurrentBatchConfig;
  function Mi(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var s = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(d) {
          var p = s.refs;
          d === null ? delete p[o] : p[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function As(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Mu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pu(e) {
    function t(w, x) {
      if (e) {
        var C = w.deletions;
        C === null ? (w.deletions = [x], w.flags |= 16) : C.push(x);
      }
    }
    function n(w, x) {
      if (!e) return null;
      for (; x !== null; ) t(w, x), x = x.sibling;
      return null;
    }
    function r(w, x) {
      for (w = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? w.set(x.key, x) : w.set(x.index, x), x = x.sibling;
      return w;
    }
    function s(w, x) {
      return w = rr(w, x), w.index = 0, w.sibling = null, w;
    }
    function o(w, x, C) {
      return w.index = C, e ? (C = w.alternate, C !== null ? (C = C.index, C < x ? (w.flags |= 2, x) : C) : (w.flags |= 2, x)) : (w.flags |= 1048576, x);
    }
    function d(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function p(w, x, C, W) {
      return x === null || x.tag !== 6 ? (x = Ql(C, w.mode, W), x.return = w, x) : (x = s(x, C), x.return = w, x);
    }
    function y(w, x, C, W) {
      var me = C.type;
      return me === P ? H(w, x, C.props.children, W, C.key) : x !== null && (x.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ge && Mu(me) === x.type) ? (W = s(x, C.props), W.ref = Mi(w, x, C), W.return = w, W) : (W = ta(C.type, C.key, C.props, null, w.mode, W), W.ref = Mi(w, x, C), W.return = w, W);
    }
    function T(w, x, C, W) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== C.containerInfo || x.stateNode.implementation !== C.implementation ? (x = Yl(C, w.mode, W), x.return = w, x) : (x = s(x, C.children || []), x.return = w, x);
    }
    function H(w, x, C, W, me) {
      return x === null || x.tag !== 7 ? (x = xr(C, w.mode, W, me), x.return = w, x) : (x = s(x, C), x.return = w, x);
    }
    function K(w, x, C) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Ql("" + x, w.mode, C), x.return = w, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return C = ta(x.type, x.key, x.props, null, w.mode, C), C.ref = Mi(w, null, x), C.return = w, C;
          case te:
            return x = Yl(x, w.mode, C), x.return = w, x;
          case ge:
            var W = x._init;
            return K(w, W(x._payload), C);
        }
        if (We(x) || ne(x)) return x = xr(x, w.mode, C, null), x.return = w, x;
        As(w, x);
      }
      return null;
    }
    function U(w, x, C, W) {
      var me = x !== null ? x.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number") return me !== null ? null : p(w, x, "" + C, W);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Z:
            return C.key === me ? y(w, x, C, W) : null;
          case te:
            return C.key === me ? T(w, x, C, W) : null;
          case ge:
            return me = C._init, U(
              w,
              x,
              me(C._payload),
              W
            );
        }
        if (We(C) || ne(C)) return me !== null ? null : H(w, x, C, W, null);
        As(w, C);
      }
      return null;
    }
    function ie(w, x, C, W, me) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return w = w.get(C) || null, p(x, w, "" + W, me);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Z:
            return w = w.get(W.key === null ? C : W.key) || null, y(x, w, W, me);
          case te:
            return w = w.get(W.key === null ? C : W.key) || null, T(x, w, W, me);
          case ge:
            var je = W._init;
            return ie(w, x, C, je(W._payload), me);
        }
        if (We(W) || ne(W)) return w = w.get(C) || null, H(x, w, W, me, null);
        As(x, W);
      }
      return null;
    }
    function ue(w, x, C, W) {
      for (var me = null, je = null, Se = x, _e = x = 0, kt = null; Se !== null && _e < C.length; _e++) {
        Se.index > _e ? (kt = Se, Se = null) : kt = Se.sibling;
        var be = U(w, Se, C[_e], W);
        if (be === null) {
          Se === null && (Se = kt);
          break;
        }
        e && Se && be.alternate === null && t(w, Se), x = o(be, x, _e), je === null ? me = be : je.sibling = be, je = be, Se = kt;
      }
      if (_e === C.length) return n(w, Se), nt && fr(w, _e), me;
      if (Se === null) {
        for (; _e < C.length; _e++) Se = K(w, C[_e], W), Se !== null && (x = o(Se, x, _e), je === null ? me = Se : je.sibling = Se, je = Se);
        return nt && fr(w, _e), me;
      }
      for (Se = r(w, Se); _e < C.length; _e++) kt = ie(Se, w, _e, C[_e], W), kt !== null && (e && kt.alternate !== null && Se.delete(kt.key === null ? _e : kt.key), x = o(kt, x, _e), je === null ? me = kt : je.sibling = kt, je = kt);
      return e && Se.forEach(function(ir) {
        return t(w, ir);
      }), nt && fr(w, _e), me;
    }
    function he(w, x, C, W) {
      var me = ne(C);
      if (typeof me != "function") throw Error(u(150));
      if (C = me.call(C), C == null) throw Error(u(151));
      for (var je = me = null, Se = x, _e = x = 0, kt = null, be = C.next(); Se !== null && !be.done; _e++, be = C.next()) {
        Se.index > _e ? (kt = Se, Se = null) : kt = Se.sibling;
        var ir = U(w, Se, be.value, W);
        if (ir === null) {
          Se === null && (Se = kt);
          break;
        }
        e && Se && ir.alternate === null && t(w, Se), x = o(ir, x, _e), je === null ? me = ir : je.sibling = ir, je = ir, Se = kt;
      }
      if (be.done) return n(
        w,
        Se
      ), nt && fr(w, _e), me;
      if (Se === null) {
        for (; !be.done; _e++, be = C.next()) be = K(w, be.value, W), be !== null && (x = o(be, x, _e), je === null ? me = be : je.sibling = be, je = be);
        return nt && fr(w, _e), me;
      }
      for (Se = r(w, Se); !be.done; _e++, be = C.next()) be = ie(Se, w, _e, be.value, W), be !== null && (e && be.alternate !== null && Se.delete(be.key === null ? _e : be.key), x = o(be, x, _e), je === null ? me = be : je.sibling = be, je = be);
      return e && Se.forEach(function(Xh) {
        return t(w, Xh);
      }), nt && fr(w, _e), me;
    }
    function ct(w, x, C, W) {
      if (typeof C == "object" && C !== null && C.type === P && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Z:
            e: {
              for (var me = C.key, je = x; je !== null; ) {
                if (je.key === me) {
                  if (me = C.type, me === P) {
                    if (je.tag === 7) {
                      n(w, je.sibling), x = s(je, C.props.children), x.return = w, w = x;
                      break e;
                    }
                  } else if (je.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ge && Mu(me) === je.type) {
                    n(w, je.sibling), x = s(je, C.props), x.ref = Mi(w, je, C), x.return = w, w = x;
                    break e;
                  }
                  n(w, je);
                  break;
                } else t(w, je);
                je = je.sibling;
              }
              C.type === P ? (x = xr(C.props.children, w.mode, W, C.key), x.return = w, w = x) : (W = ta(C.type, C.key, C.props, null, w.mode, W), W.ref = Mi(w, x, C), W.return = w, w = W);
            }
            return d(w);
          case te:
            e: {
              for (je = C.key; x !== null; ) {
                if (x.key === je) if (x.tag === 4 && x.stateNode.containerInfo === C.containerInfo && x.stateNode.implementation === C.implementation) {
                  n(w, x.sibling), x = s(x, C.children || []), x.return = w, w = x;
                  break e;
                } else {
                  n(w, x);
                  break;
                }
                else t(w, x);
                x = x.sibling;
              }
              x = Yl(C, w.mode, W), x.return = w, w = x;
            }
            return d(w);
          case ge:
            return je = C._init, ct(w, x, je(C._payload), W);
        }
        if (We(C)) return ue(w, x, C, W);
        if (ne(C)) return he(w, x, C, W);
        As(w, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, x !== null && x.tag === 6 ? (n(w, x.sibling), x = s(x, C), x.return = w, w = x) : (n(w, x), x = Ql(C, w.mode, W), x.return = w, w = x), d(w)) : n(w, x);
    }
    return ct;
  }
  var br = Pu(!0), Au = Pu(!1), Rs = Wn(null), $s = null, Vr = null, il = null;
  function sl() {
    il = Vr = $s = null;
  }
  function al(e) {
    var t = Rs.current;
    et(Rs), e._currentValue = t;
  }
  function ll(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Br(e, t) {
    $s = e, il = Vr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ot = !0), e.firstContext = null);
  }
  function en(e) {
    var t = e._currentValue;
    if (il !== e) if (e = { context: e, memoizedValue: t, next: null }, Vr === null) {
      if ($s === null) throw Error(u(308));
      Vr = e, $s.dependencies = { lanes: 0, firstContext: e };
    } else Vr = Vr.next = e;
    return t;
  }
  var hr = null;
  function ol(e) {
    hr === null ? hr = [e] : hr.push(e);
  }
  function Ru(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, ol(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Rn(e, r);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jn = !1;
  function ul(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $u(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Rn(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, ol(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Rn(e, n);
  }
  function Ls(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
    }
  }
  function Lu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? s = o = d : o = o.next = d, n = n.next;
        } while (n !== null);
        o === null ? s = o = t : o = o.next = t;
      } else s = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fs(e, t, n, r) {
    var s = e.updateQueue;
    Jn = !1;
    var o = s.firstBaseUpdate, d = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var y = p, T = y.next;
      y.next = null, d === null ? o = T : d.next = T, d = y;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, p = H.lastBaseUpdate, p !== d && (p === null ? H.firstBaseUpdate = T : p.next = T, H.lastBaseUpdate = y));
    }
    if (o !== null) {
      var K = s.baseState;
      d = 0, H = T = y = null, p = o;
      do {
        var U = p.lane, ie = p.eventTime;
        if ((r & U) === U) {
          H !== null && (H = H.next = {
            eventTime: ie,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var ue = e, he = p;
            switch (U = t, ie = n, he.tag) {
              case 1:
                if (ue = he.payload, typeof ue == "function") {
                  K = ue.call(ie, K, U);
                  break e;
                }
                K = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = he.payload, U = typeof ue == "function" ? ue.call(ie, K, U) : ue, U == null) break e;
                K = X({}, K, U);
                break e;
              case 2:
                Jn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, U = s.effects, U === null ? s.effects = [p] : U.push(p));
        } else ie = { eventTime: ie, lane: U, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, H === null ? (T = H = ie, y = K) : H = H.next = ie, d |= U;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          U = p, p = U.next, U.next = null, s.lastBaseUpdate = U, s.shared.pending = null;
        }
      } while (!0);
      if (H === null && (y = K), s.baseState = y, s.firstBaseUpdate = T, s.lastBaseUpdate = H, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          d |= s.lane, s = s.next;
        while (s !== t);
      } else o === null && (s.shared.lanes = 0);
      vr |= d, e.lanes = d, e.memoizedState = K;
    }
  }
  function Fu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var Pi = {}, gn = Wn(Pi), Ai = Wn(Pi), Ri = Wn(Pi);
  function mr(e) {
    if (e === Pi) throw Error(u(174));
    return e;
  }
  function cl(e, t) {
    switch (Xe(Ri, t), Xe(Ai, e), Xe(gn, Pi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bt(t, e);
    }
    et(gn), Xe(gn, t);
  }
  function Ur() {
    et(gn), et(Ai), et(Ri);
  }
  function Ou(e) {
    mr(Ri.current);
    var t = mr(gn.current), n = bt(t, e.type);
    t !== n && (Xe(Ai, e), Xe(gn, n));
  }
  function dl(e) {
    Ai.current === e && (et(gn), et(Ai));
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
  var fl = [];
  function hl() {
    for (var e = 0; e < fl.length; e++) fl[e]._workInProgressVersionPrimary = null;
    fl.length = 0;
  }
  var Is = G.ReactCurrentDispatcher, ml = G.ReactCurrentBatchConfig, pr = 0, at = null, ft = null, pt = null, Ds = !1, $i = !1, Li = 0, gh = 0;
  function Et() {
    throw Error(u(321));
  }
  function pl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function vl(e, t, n, r, s, o) {
    if (pr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e === null || e.memoizedState === null ? wh : Eh, e = n(r, s), $i) {
      o = 0;
      do {
        if ($i = !1, Li = 0, 25 <= o) throw Error(u(301));
        o += 1, pt = ft = null, t.updateQueue = null, Is.current = Nh, e = n(r, s);
      } while ($i);
    }
    if (Is.current = Vs, t = ft !== null && ft.next !== null, pr = 0, pt = ft = at = null, Ds = !1, t) throw Error(u(300));
    return e;
  }
  function kl() {
    var e = Li !== 0;
    return Li = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pt === null ? at.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function tn() {
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
  function Fi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yl(e) {
    var t = tn(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = ft, s = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (s !== null) {
        var d = s.next;
        s.next = o.next, o.next = d;
      }
      r.baseQueue = s = o, n.pending = null;
    }
    if (s !== null) {
      o = s.next, r = r.baseState;
      var p = d = null, y = null, T = o;
      do {
        var H = T.lane;
        if ((pr & H) === H) y !== null && (y = y.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
        else {
          var K = {
            lane: H,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          y === null ? (p = y = K, d = r) : y = y.next = K, at.lanes |= H, vr |= H;
        }
        T = T.next;
      } while (T !== null && T !== o);
      y === null ? d = r : y.next = p, ln(r, t.memoizedState) || (Ot = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        o = s.lane, at.lanes |= o, vr |= o, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gl(e) {
    var t = tn(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, o = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = s = s.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== s);
      ln(o, t.memoizedState) || (Ot = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Iu() {
  }
  function Du(e, t) {
    var n = at, r = tn(), s = t(), o = !ln(r.memoizedState, s);
    if (o && (r.memoizedState = s, Ot = !0), r = r.queue, xl(Vu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && pt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Oi(9, bu.bind(null, n, r, s, t), void 0, null), vt === null) throw Error(u(349));
      (pr & 30) !== 0 || zu(n, t, s);
    }
    return s;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function bu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Bu(t) && Uu(e);
  }
  function Vu(e, t, n) {
    return n(function() {
      Bu(t) && Uu(e);
    });
  }
  function Bu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function Uu(e) {
    var t = Rn(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function Hu(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sh.bind(null, at, e), [t.memoizedState, e];
  }
  function Oi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ku() {
    return tn().memoizedState;
  }
  function zs(e, t, n, r) {
    var s = xn();
    at.flags |= e, s.memoizedState = Oi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function bs(e, t, n, r) {
    var s = tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ft !== null) {
      var d = ft.memoizedState;
      if (o = d.destroy, r !== null && pl(r, d.deps)) {
        s.memoizedState = Oi(t, n, o, r);
        return;
      }
    }
    at.flags |= e, s.memoizedState = Oi(1 | t, n, o, r);
  }
  function Gu(e, t) {
    return zs(8390656, 8, e, t);
  }
  function xl(e, t) {
    return bs(2048, 8, e, t);
  }
  function Wu(e, t) {
    return bs(4, 2, e, t);
  }
  function Qu(e, t) {
    return bs(4, 4, e, t);
  }
  function Yu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ju(e, t, n) {
    return n = n != null ? n.concat([e]) : null, bs(4, 4, Yu.bind(null, t, e), n);
  }
  function jl() {
  }
  function Xu(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function qu(e, t, n) {
    return (pr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ot = !0), e.memoizedState = n) : (ln(n, t) || (n = Mo(), at.lanes |= n, vr |= n, e.baseState = !0), t);
  }
  function xh(e, t) {
    var n = Ge;
    Ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ml.transition;
    ml.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = n, ml.transition = r;
    }
  }
  function ec() {
    return tn().memoizedState;
  }
  function jh(e, t, n) {
    var r = tr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
    else if (n = Ru(e, t, n, r), n !== null) {
      var s = Pt();
      fn(n, e, r, s), rc(n, t, r);
    }
  }
  function Sh(e, t, n) {
    var r = tr(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tc(e)) nc(t, s);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, p = o(d, n);
        if (s.hasEagerState = !0, s.eagerState = p, ln(p, d)) {
          var y = t.interleaved;
          y === null ? (s.next = s, ol(t)) : (s.next = y.next, y.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Ru(e, t, s, r), n !== null && (s = Pt(), fn(n, e, r, s), rc(n, t, r));
    }
  }
  function tc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function nc(e, t) {
    $i = Ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
    }
  }
  var Vs = { readContext: en, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, wh = { readContext: en, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: en, useEffect: Gu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zs(
      4194308,
      4,
      Yu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return zs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return zs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: jl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = xh.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, s = xn();
    if (nt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(u(349));
      (pr & 30) !== 0 || zu(r, t, n);
    }
    s.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return s.queue = o, Gu(Vu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Oi(9, bu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = vt.identifierPrefix;
    if (nt) {
      var n = An, r = Pn;
      n = (r & ~(1 << 32 - an(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Li++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = gh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Eh = {
    readContext: en,
    useCallback: Xu,
    useContext: en,
    useEffect: xl,
    useImperativeHandle: Ju,
    useInsertionEffect: Wu,
    useLayoutEffect: Qu,
    useMemo: Zu,
    useReducer: yl,
    useRef: Ku,
    useState: function() {
      return yl(Fi);
    },
    useDebugValue: jl,
    useDeferredValue: function(e) {
      var t = tn();
      return qu(t, ft.memoizedState, e);
    },
    useTransition: function() {
      var e = yl(Fi)[0], t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Du,
    useId: ec,
    unstable_isNewReconciler: !1
  }, Nh = { readContext: en, useCallback: Xu, useContext: en, useEffect: xl, useImperativeHandle: Ju, useInsertionEffect: Wu, useLayoutEffect: Qu, useMemo: Zu, useReducer: gl, useRef: Ku, useState: function() {
    return gl(Fi);
  }, useDebugValue: jl, useDeferredValue: function(e) {
    var t = tn();
    return ft === null ? t.memoizedState = e : qu(t, ft.memoizedState, e);
  }, useTransition: function() {
    var e = gl(Fi)[0], t = tn().memoizedState;
    return [e, t];
  }, useMutableSource: Iu, useSyncExternalStore: Du, useId: ec, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = X({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Sl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Bs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pt(), s = tr(e), o = $n(r, s);
    o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (fn(t, e, s, r), Ls(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pt(), s = tr(e), o = $n(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xn(e, o, s), t !== null && (fn(t, e, s, r), Ls(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), r = tr(e), s = $n(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Xn(e, s, r), t !== null && (fn(t, e, r, n), Ls(t, e, r));
  } };
  function ic(e, t, n, r, s, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !Si(n, r) || !Si(s, o) : !0;
  }
  function sc(e, t, n) {
    var r = !1, s = Qn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = en(o) : (s = Ft(t) ? cr : wt.current, r = t.contextTypes, o = (r = r != null) ? Or(e, s) : Qn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
  }
  function wl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, ul(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = en(o) : (o = Ft(t) ? cr : wt.current, s.context = Or(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Sl(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Bs.enqueueReplaceState(s, s.state, null), Fs(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Te(r), r = r.return;
      while (r);
      var s = n;
    } catch (o) {
      s = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function El(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Nl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ch = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ys || (Ys = !0, bl = r), Nl(e, t);
    }, n;
  }
  function oc(e, t, n) {
    n = $n(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Nl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Nl(e, t), typeof r != "function" && (qn === null ? qn = /* @__PURE__ */ new Set([this]) : qn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ch();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = bh.bind(null, e, t, n), t.then(e, e));
  }
  function cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function dc(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $n(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var _h = G.ReactCurrentOwner, Ot = !1;
  function Mt(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : br(t, e.child, n, r);
  }
  function fc(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Br(t, s), r = vl(e, t, n, r, o, s), n = kl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ln(e, t, s)) : (nt && n && qa(t), t.flags |= 1, Mt(e, t, r, s), t.child);
  }
  function hc(e, t, n, r, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Wl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, mc(e, t, o, r, s)) : (e = ta(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & s) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Si, n(d, r) && e.ref === t.ref) return Ln(e, t, s);
    }
    return t.flags |= 1, e = rr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function mc(e, t, n, r, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Si(o, r) && e.ref === t.ref) if (Ot = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (Ot = !0);
      else return t.lanes = e.lanes, Ln(e, t, s);
    }
    return Cl(e, t, n, r, s);
  }
  function pc(e, t, n) {
    var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(Gr, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(Gr, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Xe(Gr, Wt), Wt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Xe(Gr, Wt), Wt |= r;
    return Mt(e, t, s, n), t.child;
  }
  function vc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Cl(e, t, n, r, s) {
    var o = Ft(n) ? cr : wt.current;
    return o = Or(t, o), Br(t, s), n = vl(e, t, n, r, o, s), r = kl(), e !== null && !Ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ln(e, t, s)) : (nt && r && qa(t), t.flags |= 1, Mt(e, t, n, s), t.child);
  }
  function kc(e, t, n, r, s) {
    if (Ft(n)) {
      var o = !0;
      Cs(t);
    } else o = !1;
    if (Br(t, s), t.stateNode === null) Hs(e, t), sc(t, n, r), wl(t, n, r, s), r = !0;
    else if (e === null) {
      var d = t.stateNode, p = t.memoizedProps;
      d.props = p;
      var y = d.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = en(T) : (T = Ft(n) ? cr : wt.current, T = Or(t, T));
      var H = n.getDerivedStateFromProps, K = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      K || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== r || y !== T) && ac(t, d, r, T), Jn = !1;
      var U = t.memoizedState;
      d.state = U, Fs(t, r, d, s), y = t.memoizedState, p !== r || U !== y || Lt.current || Jn ? (typeof H == "function" && (Sl(t, n, H, r), y = t.memoizedState), (p = Jn || ic(t, n, p, r, U, y, T)) ? (K || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), d.props = r, d.state = y, d.context = T, r = p) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, $u(e, t), p = t.memoizedProps, T = t.type === t.elementType ? p : un(t.type, p), d.props = T, K = t.pendingProps, U = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = en(y) : (y = Ft(n) ? cr : wt.current, y = Or(t, y));
      var ie = n.getDerivedStateFromProps;
      (H = typeof ie == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== K || U !== y) && ac(t, d, r, y), Jn = !1, U = t.memoizedState, d.state = U, Fs(t, r, d, s);
      var ue = t.memoizedState;
      p !== K || U !== ue || Lt.current || Jn ? (typeof ie == "function" && (Sl(t, n, ie, r), ue = t.memoizedState), (T = Jn || ic(t, n, T, r, U, ue, y) || !1) ? (H || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, ue, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, ue, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ue), d.props = r, d.state = ue, d.context = y, r = T) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return _l(e, t, n, r, o, s);
  }
  function _l(e, t, n, r, s, o) {
    vc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && Su(t, n, !1), Ln(e, t, o);
    r = t.stateNode, _h.current = t;
    var p = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = br(t, e.child, null, o), t.child = br(t, null, p, o)) : Mt(e, t, p, o), t.memoizedState = r.state, s && Su(t, n, !0), t.child;
  }
  function yc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), cl(e, t.containerInfo);
  }
  function gc(e, t, n, r, s) {
    return zr(), rl(s), t.flags |= 256, Mt(e, t, n, r), t.child;
  }
  var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ml(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps, s = st.current, o = !1, d = (t.flags & 128) !== 0, p;
    if ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Xe(st, s & 1), e === null)
      return nl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = na(d, r, 0, null), e = xr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ml(n), t.memoizedState = Tl, e) : Pl(t, d));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Th(e, t, d, r, p, s, n);
    if (o) {
      o = r.fallback, d = t.mode, s = e.child, p = s.sibling;
      var y = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = rr(s, y), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? o = rr(p, o) : (o = xr(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? Ml(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = Tl, r;
    }
    return o = e.child, e = o.sibling, r = rr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Pl(e, t) {
    return t = na({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Us(e, t, n, r) {
    return r !== null && rl(r), br(t, e.child, null, n), e = Pl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Th(e, t, n, r, s, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = El(Error(u(422))), Us(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = na({ mode: "visible", children: r.children }, s, 0, null), o = xr(o, s, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && br(t, e.child, null, d), t.child.memoizedState = Ml(d), t.memoizedState = Tl, o);
    if ((t.mode & 1) === 0) return Us(e, t, d, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, o = Error(u(419)), r = El(o, r, void 0), Us(e, t, d, r);
    }
    if (p = (d & e.childLanes) !== 0, Ot || p) {
      if (r = vt, r !== null) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
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
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = (s & (r.suspendedLanes | d)) !== 0 ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Rn(e, s), fn(r, e, s, -1));
      }
      return Gl(), r = El(Error(u(421))), Us(e, t, d, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vh.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Gt = Gn(s.nextSibling), Kt = t, nt = !0, on = null, e !== null && (Zt[qt++] = Pn, Zt[qt++] = An, Zt[qt++] = dr, Pn = e.id, An = e.overflow, dr = t), t = Pl(t, r.children), t.flags |= 4096, t);
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ll(e.return, t, n);
  }
  function Al(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
  }
  function Sc(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, o = r.tail;
    if (Mt(e, t, r.children, n), r = st.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
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
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Os(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Al(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Os(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Al(t, !0, n, null, o);
        break;
      case "together":
        Al(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), vr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Mh(e, t, n) {
    switch (t.tag) {
      case 3:
        yc(t), zr();
        break;
      case 5:
        Ou(t);
        break;
      case 1:
        Ft(t.type) && Cs(t);
        break;
      case 4:
        cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Xe(Rs, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Xe(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (Xe(st, st.current & 1), e = Ln(e, t, n), e !== null ? e.sibling : null);
        Xe(st, st.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Sc(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Xe(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pc(e, t, n);
    }
    return Ln(e, t, n);
  }
  var wc, Rl, Ec, Nc;
  wc = function(e, t) {
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
  }, Rl = function() {
  }, Ec = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, mr(gn.current);
      var o = null;
      switch (n) {
        case "input":
          s = ke(e, s), r = ke(e, r), o = [];
          break;
        case "select":
          s = X({}, s, { value: void 0 }), r = X({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          s = yt(e, s), r = yt(e, r), o = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ws);
      }
      Ae(n, r);
      var d;
      n = null;
      for (T in s) if (!r.hasOwnProperty(T) && s.hasOwnProperty(T) && s[T] != null) if (T === "style") {
        var p = s[T];
        for (d in p) p.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (f.hasOwnProperty(T) ? o || (o = []) : (o = o || []).push(T, null));
      for (T in r) {
        var y = r[T];
        if (p = s?.[T], r.hasOwnProperty(T) && y !== p && (y != null || p != null)) if (T === "style") if (p) {
          for (d in p) !p.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in y) y.hasOwnProperty(d) && p[d] !== y[d] && (n || (n = {}), n[d] = y[d]);
        } else n || (o || (o = []), o.push(
          T,
          n
        )), n = y;
        else T === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, p = p ? p.__html : void 0, y != null && p !== y && (o = o || []).push(T, y)) : T === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(T, "" + y) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (f.hasOwnProperty(T) ? (y != null && T === "onScroll" && qe("scroll", e), o || p === y || (o = [])) : (o = o || []).push(T, y));
      }
      n && (o = o || []).push("style", n);
      var T = o;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Nc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Ii(e, t) {
    if (!nt) switch (e.tailMode) {
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
  function Nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ph(e, t, n) {
    var r = t.pendingProps;
    switch (el(t), t.tag) {
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
        return Nt(t), null;
      case 1:
        return Ft(t.type) && Ns(), Nt(t), null;
      case 3:
        return r = t.stateNode, Ur(), et(Lt), et(wt), hl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ps(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Ul(on), on = null))), Rl(e, t), Nt(t), null;
      case 5:
        dl(t);
        var s = mr(Ri.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Nt(t), null;
          }
          if (e = mr(gn.current), Ps(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[yn] = t, r[_i] = o, e = (t.mode & 1) !== 0, n) {
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
                for (s = 0; s < Ei.length; s++) qe(Ei[s], r);
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
                Me(r, o), qe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, qe("invalid", r);
                break;
              case "textarea":
                Ye(r, o), qe("invalid", r);
            }
            Ae(n, o), s = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var p = o[d];
              d === "children" ? typeof p == "string" ? r.textContent !== p && (o.suppressHydrationWarning !== !0 && Ss(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (o.suppressHydrationWarning !== !0 && Ss(
                r.textContent,
                p,
                e
              ), s = ["children", "" + p]) : f.hasOwnProperty(d) && p != null && d === "onScroll" && qe("scroll", r);
            }
            switch (n) {
              case "input":
                fe(r), Qe(r, o, !0);
                break;
              case "textarea":
                fe(r), tt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ws);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _t(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[yn] = t, e[_i] = r, wc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Re(n, r), n) {
                case "dialog":
                  qe("cancel", e), qe("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Ei.length; s++) qe(Ei[s], e);
                  s = r;
                  break;
                case "source":
                  qe("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  qe(
                    "error",
                    e
                  ), qe("load", e), s = r;
                  break;
                case "details":
                  qe("toggle", e), s = r;
                  break;
                case "input":
                  Me(e, r), s = ke(e, r), qe("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = X({}, r, { value: void 0 }), qe("invalid", e);
                  break;
                case "textarea":
                  Ye(e, r), s = yt(e, r), qe("invalid", e);
                  break;
                default:
                  s = r;
              }
              Ae(n, s), p = s;
              for (o in p) if (p.hasOwnProperty(o)) {
                var y = p[o];
                o === "style" ? Bt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Qt(e, y) : typeof y == "number" && Qt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && qe("scroll", e) : y != null && R(e, o, y, d));
              }
              switch (n) {
                case "input":
                  fe(e), Qe(e, r, !1);
                  break;
                case "textarea":
                  fe(e), tt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + z(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Ue(e, !!r.multiple, o, !1) : r.defaultValue != null && Ue(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = ws);
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
        return Nt(t), null;
      case 6:
        if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = mr(Ri.current), mr(gn.current), Ps(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yn] = t, (o = r.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                Ss(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ss(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yn] = t, t.stateNode = r;
        }
        return Nt(t), null;
      case 13:
        if (et(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (nt && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Tu(), zr(), t.flags |= 98560, o = !1;
          else if (o = Ps(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[yn] = t;
            } else zr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Nt(t), o = !1;
          } else on !== null && (Ul(on), on = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? ht === 0 && (ht = 3) : Gl())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
      case 4:
        return Ur(), Rl(e, t), e === null && Ni(t.stateNode.containerInfo), Nt(t), null;
      case 10:
        return al(t.type._context), Nt(t), null;
      case 17:
        return Ft(t.type) && Ns(), Nt(t), null;
      case 19:
        if (et(st), o = t.memoizedState, o === null) return Nt(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Ii(o, !1);
        else {
          if (ht !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Os(e), d !== null) {
              for (t.flags |= 128, Ii(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Xe(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && J() > Wr && (t.flags |= 128, r = !0, Ii(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Os(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ii(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !nt) return Nt(t), null;
          } else 2 * J() - o.renderingStartTime > Wr && n !== 1073741824 && (t.flags |= 128, r = !0, Ii(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (n = o.last, n !== null ? n.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = st.current, Xe(st, r ? n & 1 | 2 : n & 1), t) : (Nt(t), null);
      case 22:
      case 23:
        return Kl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Ah(e, t) {
    switch (el(t), t.tag) {
      case 1:
        return Ft(t.type) && Ns(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ur(), et(Lt), et(wt), hl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return dl(t), null;
      case 13:
        if (et(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          zr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return et(st), null;
      case 4:
        return Ur(), null;
      case 10:
        return al(t.type._context), null;
      case 22:
      case 23:
        return Kl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ks = !1, Ct = !1, Rh = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function Kr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      lt(e, t, r);
    }
    else n.current = null;
  }
  function $l(e, t, n) {
    try {
      n();
    } catch (r) {
      lt(e, t, r);
    }
  }
  var Cc = !1;
  function $h(e, t) {
    if (Ka = ds, e = iu(), Ia(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, p = -1, y = -1, T = 0, H = 0, K = e, U = null;
          t: for (; ; ) {
            for (var ie; K !== n || s !== 0 && K.nodeType !== 3 || (p = d + s), K !== o || r !== 0 && K.nodeType !== 3 || (y = d + r), K.nodeType === 3 && (d += K.nodeValue.length), (ie = K.firstChild) !== null; )
              U = K, K = ie;
            for (; ; ) {
              if (K === e) break t;
              if (U === n && ++T === s && (p = d), U === o && ++H === r && (y = d), (ie = K.nextSibling) !== null) break;
              K = U, U = K.parentNode;
            }
            K = ie;
          }
          n = p === -1 || y === -1 ? null : { start: p, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ga = { focusedElem: e, selectionRange: n }, ds = !1, le = t; le !== null; ) if (t = le, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, le = e;
    else for (; le !== null; ) {
      t = le;
      try {
        var ue = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ue !== null) {
              var he = ue.memoizedProps, ct = ue.memoizedState, w = t.stateNode, x = w.getSnapshotBeforeUpdate(t.elementType === t.type ? he : un(t.type, he), ct);
              w.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var C = t.stateNode.containerInfo;
            C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (W) {
        lt(t, t.return, W);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, le = e;
        break;
      }
      le = t.return;
    }
    return ue = Cc, Cc = !1, ue;
  }
  function Di(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var o = s.destroy;
          s.destroy = void 0, o !== void 0 && $l(t, n, o);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Gs(e, t) {
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
  function Ll(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function _c(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[_i], delete t[Ja], delete t[ph], delete t[vh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tc(e.return)) return null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ws));
    else if (r !== 4 && (e = e.child, e !== null)) for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), e = e.sibling;
  }
  function Ol(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), e = e.sibling;
  }
  var xt = null, cn = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
  }
  function Pc(e, t, n) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(ss, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ct || Kr(n, t);
      case 6:
        var r = xt, s = cn;
        xt = null, Zn(e, t, n), xt = r, cn = s, xt !== null && (cn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (cn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? Ya(e.parentNode, n) : e.nodeType === 1 && Ya(e, n), vi(e)) : Ya(xt, n.stateNode));
        break;
      case 4:
        r = xt, s = cn, xt = n.stateNode.containerInfo, cn = !0, Zn(e, t, n), xt = r, cn = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var o = s, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && $l(n, t, d), s = s.next;
          } while (s !== r);
        }
        Zn(e, t, n);
        break;
      case 1:
        if (!Ct && (Kr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          lt(n, t, p);
        }
        Zn(e, t, n);
        break;
      case 21:
        Zn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null, Zn(e, t, n), Ct = r) : Zn(e, t, n);
        break;
      default:
        Zn(e, t, n);
    }
  }
  function Ac(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rh()), t.forEach(function(r) {
        var s = Bh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e, d = t, p = d;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              xt = p.stateNode, cn = !1;
              break e;
            case 3:
              xt = p.stateNode.containerInfo, cn = !0;
              break e;
            case 4:
              xt = p.stateNode.containerInfo, cn = !0;
              break e;
          }
          p = p.return;
        }
        if (xt === null) throw Error(u(160));
        Pc(o, d, s), xt = null, cn = !1;
        var y = s.alternate;
        y !== null && (y.return = null), s.return = null;
      } catch (T) {
        lt(s, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rc(t, e), t = t.sibling;
  }
  function Rc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), jn(e), r & 4) {
          try {
            Di(3, e, e.return), Gs(3, e);
          } catch (he) {
            lt(e, e.return, he);
          }
          try {
            Di(5, e, e.return);
          } catch (he) {
            lt(e, e.return, he);
          }
        }
        break;
      case 1:
        dn(t, e), jn(e), r & 512 && n !== null && Kr(n, n.return);
        break;
      case 5:
        if (dn(t, e), jn(e), r & 512 && n !== null && Kr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Qt(s, "");
          } catch (he) {
            lt(e, e.return, he);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, p = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            p === "input" && o.type === "radio" && o.name != null && Ee(s, o), Re(p, d);
            var T = Re(p, o);
            for (d = 0; d < y.length; d += 2) {
              var H = y[d], K = y[d + 1];
              H === "style" ? Bt(s, K) : H === "dangerouslySetInnerHTML" ? sn(s, K) : H === "children" ? Qt(s, K) : R(s, H, K, T);
            }
            switch (p) {
              case "input":
                $e(s, o);
                break;
              case "textarea":
                ze(s, o);
                break;
              case "select":
                var U = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var ie = o.value;
                ie != null ? Ue(s, !!o.multiple, ie, !1) : U !== !!o.multiple && (o.defaultValue != null ? Ue(
                  s,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ue(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[_i] = o;
          } catch (he) {
            lt(e, e.return, he);
          }
        }
        break;
      case 6:
        if (dn(t, e), jn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          s = e.stateNode, o = e.memoizedProps;
          try {
            s.nodeValue = o;
          } catch (he) {
            lt(e, e.return, he);
          }
        }
        break;
      case 3:
        if (dn(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          vi(t.containerInfo);
        } catch (he) {
          lt(e, e.return, he);
        }
        break;
      case 4:
        dn(t, e), jn(e);
        break;
      case 13:
        dn(t, e), jn(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (zl = J())), r & 4 && Ac(e);
        break;
      case 22:
        if (H = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ct = (T = Ct) || H, dn(t, e), Ct = T) : dn(t, e), jn(e), r & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !H && (e.mode & 1) !== 0) for (le = e, H = e.child; H !== null; ) {
            for (K = le = H; le !== null; ) {
              switch (U = le, ie = U.child, U.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Di(4, U, U.return);
                  break;
                case 1:
                  Kr(U, U.return);
                  var ue = U.stateNode;
                  if (typeof ue.componentWillUnmount == "function") {
                    r = U, n = U.return;
                    try {
                      t = r, ue.props = t.memoizedProps, ue.state = t.memoizedState, ue.componentWillUnmount();
                    } catch (he) {
                      lt(r, n, he);
                    }
                  }
                  break;
                case 5:
                  Kr(U, U.return);
                  break;
                case 22:
                  if (U.memoizedState !== null) {
                    Fc(K);
                    continue;
                  }
              }
              ie !== null ? (ie.return = U, le = ie) : Fc(K);
            }
            H = H.sibling;
          }
          e: for (H = null, K = e; ; ) {
            if (K.tag === 5) {
              if (H === null) {
                H = K;
                try {
                  s = K.stateNode, T ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (p = K.stateNode, y = K.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, p.style.display = xe("display", d));
                } catch (he) {
                  lt(e, e.return, he);
                }
              }
            } else if (K.tag === 6) {
              if (H === null) try {
                K.stateNode.nodeValue = T ? "" : K.memoizedProps;
              } catch (he) {
                lt(e, e.return, he);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === e) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              H === K && (H = null), K = K.return;
            }
            H === K && (H = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), jn(e), r & 4 && Ac(e);
        break;
      case 21:
        break;
      default:
        dn(
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
            if (Tc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Qt(s, ""), r.flags &= -33);
            var o = Mc(e);
            Ol(e, o, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, p = Mc(e);
            Fl(e, p, d);
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
  function Lh(e, t, n) {
    le = e, $c(e);
  }
  function $c(e, t, n) {
    for (var r = (e.mode & 1) !== 0; le !== null; ) {
      var s = le, o = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || Ks;
        if (!d) {
          var p = s.alternate, y = p !== null && p.memoizedState !== null || Ct;
          p = Ks;
          var T = Ct;
          if (Ks = d, (Ct = y) && !T) for (le = s; le !== null; ) d = le, y = d.child, d.tag === 22 && d.memoizedState !== null ? Oc(s) : y !== null ? (y.return = d, le = y) : Oc(s);
          for (; o !== null; ) le = o, $c(o), o = o.sibling;
          le = s, Ks = p, Ct = T;
        }
        Lc(e);
      } else (s.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = s, le = o) : Lc(e);
    }
  }
  function Lc(e) {
    for (; le !== null; ) {
      var t = le;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Gs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ct) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Fu(t, o, r);
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
                Fu(t, d, n);
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
                var T = t.alternate;
                if (T !== null) {
                  var H = T.memoizedState;
                  if (H !== null) {
                    var K = H.dehydrated;
                    K !== null && vi(K);
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
          Ct || t.flags & 512 && Ll(t);
        } catch (U) {
          lt(t, t.return, U);
        }
      }
      if (t === e) {
        le = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, le = n;
        break;
      }
      le = t.return;
    }
  }
  function Fc(e) {
    for (; le !== null; ) {
      var t = le;
      if (t === e) {
        le = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, le = n;
        break;
      }
      le = t.return;
    }
  }
  function Oc(e) {
    for (; le !== null; ) {
      var t = le;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Gs(4, t);
            } catch (y) {
              lt(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                lt(t, s, y);
              }
            }
            var o = t.return;
            try {
              Ll(t);
            } catch (y) {
              lt(t, o, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Ll(t);
            } catch (y) {
              lt(t, d, y);
            }
        }
      } catch (y) {
        lt(t, t.return, y);
      }
      if (t === e) {
        le = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, le = p;
        break;
      }
      le = t.return;
    }
  }
  var Fh = Math.ceil, Ws = G.ReactCurrentDispatcher, Il = G.ReactCurrentOwner, nn = G.ReactCurrentBatchConfig, De = 0, vt = null, dt = null, jt = 0, Wt = 0, Gr = Wn(0), ht = 0, zi = null, vr = 0, Qs = 0, Dl = 0, bi = null, It = null, zl = 0, Wr = 1 / 0, Fn = null, Ys = !1, bl = null, qn = null, Js = !1, er = null, Xs = 0, Vi = 0, Vl = null, Zs = -1, qs = 0;
  function Pt() {
    return (De & 6) !== 0 ? J() : Zs !== -1 ? Zs : Zs = J();
  }
  function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && jt !== 0 ? jt & -jt : yh.transition !== null ? (qs === 0 && (qs = Mo()), qs) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Do(e.type)), e);
  }
  function fn(e, t, n, r) {
    if (50 < Vi) throw Vi = 0, Vl = null, Error(u(185));
    di(e, n, r), ((De & 2) === 0 || e !== vt) && (e === vt && ((De & 2) === 0 && (Qs |= n), ht === 4 && nr(e, jt)), Dt(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Wr = J() + 500, _s && Yn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = os(e, e === vt ? jt : 0);
    if (r === 0) n !== null && Cn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Cn(n), t === 1) e.tag === 0 ? kh(Dc.bind(null, e)) : wu(Dc.bind(null, e)), hh(function() {
        (De & 6) === 0 && Yn();
      }), n = null;
      else {
        switch (Po(r)) {
          case 1:
            n = $t;
            break;
          case 4:
            n = ut;
            break;
          case 16:
            n = _n;
            break;
          case 536870912:
            n = zn;
            break;
          default:
            n = _n;
        }
        n = Gc(n, Ic.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ic(e, t) {
    if (Zs = -1, qs = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Qr() && e.callbackNode !== n) return null;
    var r = os(e, e === vt ? jt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ea(e, r);
    else {
      t = r;
      var s = De;
      De |= 2;
      var o = bc();
      (vt !== e || jt !== t) && (Fn = null, Wr = J() + 500, yr(e, t));
      do
        try {
          Dh();
          break;
        } catch (p) {
          zc(e, p);
        }
      while (!0);
      sl(), Ws.current = o, De = s, dt !== null ? t = 0 : (vt = null, jt = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (s = ja(e), s !== 0 && (r = s, t = Bl(e, s))), t === 1) throw n = zi, yr(e, 0), nr(e, r), Dt(e, J()), n;
      if (t === 6) nr(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Oh(s) && (t = ea(e, r), t === 2 && (o = ja(e), o !== 0 && (r = o, t = Bl(e, o))), t === 1)) throw n = zi, yr(e, 0), nr(e, r), Dt(e, J()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            gr(e, It, Fn);
            break;
          case 3:
            if (nr(e, r), (r & 130023424) === r && (t = zl + 500 - J(), 10 < t)) {
              if (os(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                Pt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Qa(gr.bind(null, e, It, Fn), t);
              break;
            }
            gr(e, It, Fn);
            break;
          case 4:
            if (nr(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - an(r);
              o = 1 << d, d = t[d], d > s && (s = d), r &= ~o;
            }
            if (r = s, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Qa(gr.bind(null, e, It, Fn), r);
              break;
            }
            gr(e, It, Fn);
            break;
          case 5:
            gr(e, It, Fn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Dt(e, J()), e.callbackNode === n ? Ic.bind(null, e) : null;
  }
  function Bl(e, t) {
    var n = bi;
    return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256), e = ea(e, t), e !== 2 && (t = It, It = n, t !== null && Ul(t)), e;
  }
  function Ul(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function Oh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], o = s.getSnapshot;
          s = s.value;
          try {
            if (!ln(o(), s)) return !1;
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
    for (t &= ~Dl, t &= ~Qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Dc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Qr();
    var t = os(e, 0);
    if ((t & 1) === 0) return Dt(e, J()), null;
    var n = ea(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ja(e);
      r !== 0 && (t = r, n = Bl(e, r));
    }
    if (n === 1) throw n = zi, yr(e, 0), nr(e, t), Dt(e, J()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, gr(e, It, Fn), Dt(e, J()), null;
  }
  function Hl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Wr = J() + 500, _s && Yn());
    }
  }
  function kr(e) {
    er !== null && er.tag === 0 && (De & 6) === 0 && Qr();
    var t = De;
    De |= 1;
    var n = nn.transition, r = Ge;
    try {
      if (nn.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = r, nn.transition = n, De = t, (De & 6) === 0 && Yn();
    }
  }
  function Kl() {
    Wt = Gr.current, et(Gr);
  }
  function yr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (el(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ns();
          break;
        case 3:
          Ur(), et(Lt), et(wt), hl();
          break;
        case 5:
          dl(r);
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
          al(r.type._context);
          break;
        case 22:
        case 23:
          Kl();
      }
      n = n.return;
    }
    if (vt = e, dt = e = rr(e.current, null), jt = Wt = t, ht = 0, zi = null, Dl = Qs = vr = 0, It = bi = null, hr !== null) {
      for (t = 0; t < hr.length; t++) if (n = hr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = s, r.next = d;
        }
        n.pending = r;
      }
      hr = null;
    }
    return e;
  }
  function zc(e, t) {
    do {
      var n = dt;
      try {
        if (sl(), Is.current = Vs, Ds) {
          for (var r = at.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Ds = !1;
        }
        if (pr = 0, pt = ft = at = null, $i = !1, Li = 0, Il.current = null, n === null || n.return === null) {
          ht = 1, zi = t, dt = null;
          break;
        }
        e: {
          var o = e, d = n.return, p = n, y = t;
          if (t = jt, p.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var T = y, H = p, K = H.tag;
            if ((H.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var U = H.alternate;
              U ? (H.updateQueue = U.updateQueue, H.memoizedState = U.memoizedState, H.lanes = U.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var ie = cc(d);
            if (ie !== null) {
              ie.flags &= -257, dc(ie, d, p, o, t), ie.mode & 1 && uc(o, T, t), t = ie, y = T;
              var ue = t.updateQueue;
              if (ue === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(y), t.updateQueue = he;
              } else ue.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(o, T, t), Gl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (nt && p.mode & 1) {
            var ct = cc(d);
            if (ct !== null) {
              (ct.flags & 65536) === 0 && (ct.flags |= 256), dc(ct, d, p, o, t), rl(Hr(y, p));
              break e;
            }
          }
          o = y = Hr(y, p), ht !== 4 && (ht = 2), bi === null ? bi = [o] : bi.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = lc(o, y, t);
                Lu(o, w);
                break e;
              case 1:
                p = y;
                var x = o.type, C = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (qn === null || !qn.has(C)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var W = oc(o, p, t);
                  Lu(o, W);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Bc(n);
      } catch (me) {
        t = me, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bc() {
    var e = Ws.current;
    return Ws.current = Vs, e === null ? Vs : e;
  }
  function Gl() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), vt === null || (vr & 268435455) === 0 && (Qs & 268435455) === 0 || nr(vt, jt);
  }
  function ea(e, t) {
    var n = De;
    De |= 2;
    var r = bc();
    (vt !== e || jt !== t) && (Fn = null, yr(e, t));
    do
      try {
        Ih();
        break;
      } catch (s) {
        zc(e, s);
      }
    while (!0);
    if (sl(), De = n, Ws.current = r, dt !== null) throw Error(u(261));
    return vt = null, jt = 0, ht;
  }
  function Ih() {
    for (; dt !== null; ) Vc(dt);
  }
  function Dh() {
    for (; dt !== null && !Dn(); ) Vc(dt);
  }
  function Vc(e) {
    var t = Kc(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? Bc(e) : dt = t, Il.current = null;
  }
  function Bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Ph(n, t, Wt), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = Ah(n, t), n !== null) {
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
  function gr(e, t, n) {
    var r = Ge, s = nn.transition;
    try {
      nn.transition = null, Ge = 1, zh(e, t, n, r);
    } finally {
      nn.transition = s, Ge = r;
    }
    return null;
  }
  function zh(e, t, n, r) {
    do
      Qr();
    while (er !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (gf(e, o), e === vt && (dt = vt = null, jt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Js || (Js = !0, Gc(_n, function() {
      return Qr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = nn.transition, nn.transition = null;
      var d = Ge;
      Ge = 1;
      var p = De;
      De |= 4, Il.current = null, $h(e, n), Rc(n, e), sh(Ga), ds = !!Ka, Ga = Ka = null, e.current = n, Lh(n), A(), De = p, Ge = d, nn.transition = o;
    } else e.current = n;
    if (Js && (Js = !1, er = e, Xs = s), o = e.pendingLanes, o === 0 && (qn = null), hf(n.stateNode), Dt(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Ys) throw Ys = !1, e = bl, bl = null, e;
    return (Xs & 1) !== 0 && e.tag !== 0 && Qr(), o = e.pendingLanes, (o & 1) !== 0 ? e === Vl ? Vi++ : (Vi = 0, Vl = e) : Vi = 0, Yn(), null;
  }
  function Qr() {
    if (er !== null) {
      var e = Po(Xs), t = nn.transition, n = Ge;
      try {
        if (nn.transition = null, Ge = 16 > e ? 16 : e, er === null) var r = !1;
        else {
          if (e = er, er = null, Xs = 0, (De & 6) !== 0) throw Error(u(331));
          var s = De;
          for (De |= 4, le = e.current; le !== null; ) {
            var o = le, d = o.child;
            if ((le.flags & 16) !== 0) {
              var p = o.deletions;
              if (p !== null) {
                for (var y = 0; y < p.length; y++) {
                  var T = p[y];
                  for (le = T; le !== null; ) {
                    var H = le;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Di(8, H, o);
                    }
                    var K = H.child;
                    if (K !== null) K.return = H, le = K;
                    else for (; le !== null; ) {
                      H = le;
                      var U = H.sibling, ie = H.return;
                      if (_c(H), H === T) {
                        le = null;
                        break;
                      }
                      if (U !== null) {
                        U.return = ie, le = U;
                        break;
                      }
                      le = ie;
                    }
                  }
                }
                var ue = o.alternate;
                if (ue !== null) {
                  var he = ue.child;
                  if (he !== null) {
                    ue.child = null;
                    do {
                      var ct = he.sibling;
                      he.sibling = null, he = ct;
                    } while (he !== null);
                  }
                }
                le = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, le = d;
            else e: for (; le !== null; ) {
              if (o = le, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Di(9, o, o.return);
              }
              var w = o.sibling;
              if (w !== null) {
                w.return = o.return, le = w;
                break e;
              }
              le = o.return;
            }
          }
          var x = e.current;
          for (le = x; le !== null; ) {
            d = le;
            var C = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && C !== null) C.return = d, le = C;
            else e: for (d = x; le !== null; ) {
              if (p = le, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gs(9, p);
                }
              } catch (me) {
                lt(p, p.return, me);
              }
              if (p === d) {
                le = null;
                break e;
              }
              var W = p.sibling;
              if (W !== null) {
                W.return = p.return, le = W;
                break e;
              }
              le = p.return;
            }
          }
          if (De = s, Yn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(ss, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ge = n, nn.transition = t;
      }
    }
    return !1;
  }
  function Uc(e, t, n) {
    t = Hr(n, t), t = lc(e, t, 1), e = Xn(e, t, 1), t = Pt(), e !== null && (di(e, 1, t), Dt(e, t));
  }
  function lt(e, t, n) {
    if (e.tag === 3) Uc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))) {
          e = Hr(n, e), e = oc(t, e, 1), t = Xn(t, e, 1), e = Pt(), t !== null && (di(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function bh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (jt & n) === n && (ht === 4 || ht === 3 && (jt & 130023424) === jt && 500 > J() - zl ? yr(e, 0) : Dl |= n), Dt(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ls, ls <<= 1, (ls & 130023424) === 0 && (ls = 4194304)));
    var n = Pt();
    e = Rn(e, t), e !== null && (di(e, t, n), Dt(e, n));
  }
  function Vh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hc(e, n);
  }
  function Bh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Hc(e, n);
  }
  var Kc;
  Kc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) Ot = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ot = !1, Mh(e, t, n);
      Ot = (e.flags & 131072) !== 0;
    }
    else Ot = !1, nt && (t.flags & 1048576) !== 0 && Eu(t, Ms, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Hs(e, t), e = t.pendingProps;
        var s = Or(t, wt.current);
        Br(t, n), s = vl(null, t, r, e, s, n);
        var o = kl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (o = !0, Cs(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ul(t), s.updater = Bs, t.stateNode = s, s._reactInternals = t, wl(t, r, e, n), t = _l(null, t, r, !0, o, n)) : (t.tag = 0, nt && o && qa(t), Mt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Hs(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Hh(r), e = un(r, e), s) {
            case 0:
              t = Cl(null, t, r, e, n);
              break e;
            case 1:
              t = kc(null, t, r, e, n);
              break e;
            case 11:
              t = fc(null, t, r, e, n);
              break e;
            case 14:
              t = hc(null, t, r, un(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), Cl(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), kc(e, t, r, s, n);
      case 3:
        e: {
          if (yc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, s = o.element, $u(e, t), Fs(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            s = Hr(Error(u(423)), t), t = gc(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = Hr(Error(u(424)), t), t = gc(e, t, r, n, s);
            break e;
          } else for (Gt = Gn(t.stateNode.containerInfo.firstChild), Kt = t, nt = !0, on = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (zr(), r === s) {
              t = Ln(e, t, n);
              break e;
            }
            Mt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ou(t), e === null && nl(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = s.children, Wa(r, s) ? d = null : o !== null && Wa(r, o) && (t.flags |= 32), vc(e, t), Mt(e, t, d, n), t.child;
      case 6:
        return e === null && nl(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return cl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = br(t, null, r, n) : Mt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), fc(e, t, r, s, n);
      case 7:
        return Mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, d = s.value, Xe(Rs, r._currentValue), r._currentValue = d, o !== null) if (ln(o.value, d)) {
            if (o.children === s.children && !Lt.current) {
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
                    var T = o.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var H = T.pending;
                      H === null ? y.next = y : (y.next = H.next, H.next = y), T.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), ll(
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
              d.lanes |= n, p = d.alternate, p !== null && (p.lanes |= n), ll(d, n, t), d = o.sibling;
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
          Mt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, Br(t, n), s = en(s), r = r(s), t.flags |= 1, Mt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = un(r, t.pendingProps), s = un(r.type, s), hc(e, t, r, s, n);
      case 15:
        return mc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : un(r, s), Hs(e, t), t.tag = 1, Ft(r) ? (e = !0, Cs(t)) : e = !1, Br(t, n), sc(t, r, s), wl(t, r, s, n), _l(null, t, r, !0, e, n);
      case 19:
        return Sc(e, t, n);
      case 22:
        return pc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Gc(e, t) {
    return is(e, t);
  }
  function Uh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(e, t, n, r) {
    return new Uh(e, t, n, r);
  }
  function Wl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hh(e) {
    if (typeof e == "function") return Wl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ta(e, t, n, r, s, o) {
    var d = 2;
    if (r = e, typeof e == "function") Wl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case P:
        return xr(n.children, s, o, t);
      case V:
        d = 8, s |= 8;
        break;
      case se:
        return e = rn(12, n, t, s | 2), e.elementType = se, e.lanes = o, e;
      case re:
        return e = rn(13, n, t, s), e.elementType = re, e.lanes = o, e;
      case de:
        return e = rn(19, n, t, s), e.elementType = de, e.lanes = o, e;
      case pe:
        return na(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ae:
            d = 10;
            break e;
          case Pe:
            d = 9;
            break e;
          case Q:
            d = 11;
            break e;
          case q:
            d = 14;
            break e;
          case ge:
            d = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = rn(d, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function xr(e, t, n, r) {
    return e = rn(7, e, r, t), e.lanes = n, e;
  }
  function na(e, t, n, r) {
    return e = rn(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ql(e, t, n) {
    return e = rn(6, e, null, t), e.lanes = n, e;
  }
  function Yl(e, t, n) {
    return t = rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Kh(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sa(0), this.expirationTimes = Sa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sa(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Jl(e, t, n, r, s, o, d, p, y) {
    return e = new Kh(e, t, n, p, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = rn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ul(o), e;
  }
  function Gh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: te, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Wc(e) {
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
      if (Ft(n)) return ju(e, n, t);
    }
    return t;
  }
  function Qc(e, t, n, r, s, o, d, p, y) {
    return e = Jl(n, r, !0, e, s, o, d, p, y), e.context = Wc(null), n = e.current, r = Pt(), s = tr(n), o = $n(r, s), o.callback = t ?? null, Xn(n, o, s), e.current.lanes = s, di(e, s, r), Dt(e, r), e;
  }
  function ra(e, t, n, r) {
    var s = t.current, o = Pt(), d = tr(s);
    return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = $n(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(s, t, d), e !== null && (fn(e, s, d, o), Ls(e, s, d)), d;
  }
  function ia(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Yc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Xl(e, t) {
    Yc(e, t), (e = e.alternate) && Yc(e, t);
  }
  function Wh() {
    return null;
  }
  var Jc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Zl(e) {
    this._internalRoot = e;
  }
  sa.prototype.render = Zl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ra(e, t, null, null);
  }, sa.prototype.unmount = Zl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      kr(function() {
        ra(null, e, null, null);
      }), t[Tn] = null;
    }
  };
  function sa(e) {
    this._internalRoot = e;
  }
  sa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = $o();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Oo(e);
    }
  };
  function ql(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Xc() {
  }
  function Qh(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var T = ia(d);
          o.call(T);
        };
      }
      var d = Qc(t, r, e, 0, null, !1, !1, "", Xc);
      return e._reactRootContainer = d, e[Tn] = d.current, Ni(e.nodeType === 8 ? e.parentNode : e), kr(), d;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var T = ia(y);
        p.call(T);
      };
    }
    var y = Jl(e, 0, !1, null, null, !1, !1, "", Xc);
    return e._reactRootContainer = y, e[Tn] = y.current, Ni(e.nodeType === 8 ? e.parentNode : e), kr(function() {
      ra(t, y, n, r);
    }), y;
  }
  function la(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var y = ia(d);
          p.call(y);
        };
      }
      ra(t, d, e, s);
    } else d = Qh(n, t, e, s, r);
    return ia(d);
  }
  Ao = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ci(t.pendingLanes);
          n !== 0 && (wa(t, n | 1), Dt(t, J()), (De & 6) === 0 && (Wr = J() + 500, Yn()));
        }
        break;
      case 13:
        kr(function() {
          var r = Rn(e, 1);
          if (r !== null) {
            var s = Pt();
            fn(r, e, 1, s);
          }
        }), Xl(e, 1);
    }
  }, Ea = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = Pt();
        fn(t, e, 134217728, n);
      }
      Xl(e, 134217728);
    }
  }, Ro = function(e) {
    if (e.tag === 13) {
      var t = tr(e), n = Rn(e, t);
      if (n !== null) {
        var r = Pt();
        fn(n, e, t, r);
      }
      Xl(e, t);
    }
  }, $o = function() {
    return Ge;
  }, Lo = function(e, t) {
    var n = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = n;
    }
  }, Rt = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = Es(r);
              if (!s) throw Error(u(90));
              oe(r), $e(r, s);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && Ue(e, !!n.multiple, t, !1);
    }
  }, es = Hl, Fe = kr;
  var Yh = { usingClientEntryPoint: !1, Events: [Ti, Lr, Es, pn, vn, Hl] }, Bi = { findFiberByHostInstance: ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jh = { bundleType: Bi.bundleType, version: Bi.version, rendererPackageName: Bi.rendererPackageName, rendererConfig: Bi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = oi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Bi.findFiberByHostInstance || Wh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oa.isDisabled && oa.supportsFiber) try {
      ss = oa.inject(Jh), kn = oa;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ql(t)) throw Error(u(200));
    return Gh(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!ql(e)) throw Error(u(299));
    var n = !1, r = "", s = Jc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Jl(e, 1, !1, null, null, n, !1, r, s), e[Tn] = t.current, Ni(e.nodeType === 8 ? e.parentNode : e), new Zl(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = oi(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return kr(e);
  }, zt.hydrate = function(e, t, n) {
    if (!aa(t)) throw Error(u(200));
    return la(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!ql(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, o = "", d = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, s, !1, o, d), e[Tn] = t.current, Ni(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new sa(t);
  }, zt.render = function(e, t, n) {
    if (!aa(t)) throw Error(u(200));
    return la(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!aa(e)) throw Error(u(40));
    return e._reactRootContainer ? (kr(function() {
      la(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tn] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = Hl, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!aa(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return la(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var sd;
function sm() {
  if (sd) return no.exports;
  sd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), no.exports = im(), no.exports;
}
var ad;
function am() {
  if (ad) return ua;
  ad = 1;
  var i = sm();
  return ua.createRoot = i.createRoot, ua.hydrateRoot = i.hydrateRoot, ua;
}
var lm = am();
const om = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, m = 7, k = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], O = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], E = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], $ = {
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
      base: E,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: E,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: E,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: E,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, I = 26, b = 72, N = 30, _ = 54, L = 34, M = 11, R = (I + b) / 2, G = N + (c.length - 1) * L + 30, Z = (j) => b + j * _, te = (j) => j === 0 ? R : Z(j) - _ / 2, P = (j) => N + j * L;
  function V(j, z, F) {
    const ee = a.indexOf(i[j][0]) + Number(F.slice(-1)) - 1, fe = ee % a.length, oe = u[fe] + 12 * Math.floor(ee / a.length), ve = j + z - oe;
    return a[fe] + (ve < 0 ? "♭" : "♯").repeat(Math.abs(ve));
  }
  function se(j) {
    return [...j.base, ...j.add].sort((z, F) => z[0] - F[0]);
  }
  function ae(j, z, F) {
    const ee = z + (F ? 1 : 0), fe = k[ee % k.length], oe = Math.min(...fe.map(([$e]) => $e)), ve = Math.max(...fe.map(([, $e]) => $e));
    let Ee = (j - f % 12 + 12) % 12 - (F ? 8 : 5) + 12 * Math.floor(ee / k.length);
    return oe + Ee < 0 && (Ee += 12), ve + Ee > h.pentatonic && (Ee -= 12), {
      strings: fe.map(($e) => $e.map((Qe) => Qe + Ee)),
      start: oe + Ee,
      end: ve + Ee
    };
  }
  function Pe(j, z, F) {
    const ee = F[z], fe = (j + ee - f % 12 + 12) % 12, oe = f + fe - ee, ve = c.map((ke, Me) => {
      const Ee = z + (c.length - 1 - Me) * 3;
      return [Ee, Ee + 1, Ee + 2].map(($e) => {
        const Qe = Math.floor($e / F.length), Be = F[$e % F.length];
        return oe + Be + 12 * Qe - ke;
      });
    });
    return {
      strings: ve,
      start: Math.min(...ve.map((ke) => ke[0])),
      end: Math.max(...ve.map((ke) => ke.at(-1)))
    };
  }
  function Q(j, z) {
    const F = [], ee = Math.ceil(-j.end / 12) * 12;
    for (let oe = ee; j.start + oe <= z; oe += 12) {
      const ve = j.strings.map((Me) => Me.map((Ee) => Ee + oe).filter((Ee) => Ee >= 0 && Ee <= z)), ke = ve.flat();
      F.push({
        strings: ve,
        start: Math.min(...ke),
        end: Math.max(...ke),
        partial: j.start + oe < 0 || j.end + oe > z
      });
    }
    const fe = F.filter((oe) => !oe.partial);
    return fe.length ? fe : F;
  }
  function re(j) {
    return se(j).length === m;
  }
  function de(j, z, F) {
    const ee = re(z);
    j.querySelector('[value="3nps"]').disabled = !ee, j.value = ee ? F ?? "3nps" : "pentatonic";
  }
  function q(j, z, F, ee, fe) {
    const oe = se(z).map(([ve]) => ve);
    return ee.map((ve) => {
      const ke = ve - 1, Me = F === "3nps" ? Pe(j, ke, oe) : ae(j, ke, z.base === E), Ee = fe === void 0 ? [Me] : Q(Me, fe);
      return { number: ve, positions: Ee };
    });
  }
  function ge(j, z) {
    const F = j.getBoundingClientRect(), ee = j.querySelectorAll(z);
    let fe = 1 / 0;
    ee.forEach((oe) => {
      const ve = oe.getBoundingClientRect();
      let ke = 0;
      ve.left < F.left ? ke = ve.left - F.left - 8 : ve.right > F.right && (ke = ve.right - F.right + 8), Math.abs(ke) < Math.abs(fe) && (fe = ke);
    }), Number.isFinite(fe) && (j.scrollLeft += fe);
  }
  function pe(j, z = !1) {
    const F = j === "3nps" ? m : k.length;
    return Array.from({ length: F }, (ee, fe) => {
      const oe = fe + 1;
      return '<label class="box-toggle" data-box="' + oe + '"><input type="checkbox" value="' + oe + '"' + (z && fe === 0 ? " checked" : "") + "> Boksi " + oe + "</label>";
    }).join("");
  }
  function Y(j, z) {
    const F = se(z), ee = new Map(F.map(([oe, ve]) => [oe, V(j, oe, ve)])), fe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return F.flatMap(([oe, ve]) => fe.flatMap(({ suffix: ke, base: Me }) => {
      const Ee = Me.map(([$e]) => ee.get((oe + $e) % 12));
      return Ee.every(Boolean) ? {
        root: (j + oe) % 12,
        degree: Number(String(ve).replace(/\D/g, "")),
        name: Ee[0] + ke,
        notes: Ee,
        base: Me,
        add: []
      } : [];
    }));
  }
  function ne(j, z) {
    const F = j.base.map(([oe]) => (j.root + oe) % 12), ee = c.map((oe) => {
      const ve = [];
      for (let ke = 0; ke <= z; ke++) {
        const Me = (oe + ke) % 12;
        F.includes(Me) && ve.push({ fret: ke, pitch: Me });
      }
      return ve;
    }), fe = [];
    for (let oe = 0; oe <= ee.length - 3; oe++)
      for (const ve of ee[oe])
        for (const ke of ee[oe + 1])
          if (ve.pitch !== ke.pitch)
            for (const Me of ee[oe + 2]) {
              if (Me.pitch === ve.pitch || Me.pitch === ke.pitch) continue;
              const Ee = [ve.fret, ke.fret, Me.fret], $e = Math.min(...Ee), Qe = Math.max(...Ee);
              if (Qe - $e > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(oe, 3, ...Ee), fe.push({ strings: Be, low: $e, high: Qe });
            }
    return fe.sort((oe, ve) => oe.high - ve.high || oe.low - ve.low);
  }
  const X = {
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
  function D(j, z) {
    const F = X[j + ":" + z];
    if (F) return { frets: F, barre: null };
    let ee = null;
    return g.forEach(({ string: fe, openPC: oe, shapes: ve }) => {
      const ke = ve[z];
      if (!ke) return;
      let Me = (j - oe + 12) % 12;
      if (Me + Math.min(...ke.filter((Qe) => Qe !== null)) < 0 && (Me += 12), ee && ee.fret <= Me) return;
      const Ee = ke.map((Qe) => Qe === null ? null : Me + Qe), $e = Me > 0 && ke.at(-1) === 0 ? { fret: Me, from: fe, to: ke.length - 1 } : null;
      ee = { fret: Me, frets: Ee, barre: $e };
    }), ee && { frets: ee.frets, barre: ee.barre };
  }
  function ye(j, { frets: z, barre: F }, ee) {
    const Ee = [...c].reverse(), $e = z.filter((ze) => ze > 0), Be = !$e.length || Math.max(...$e) <= 4 && (z.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), We = (ze) => 24 + ze * 14, Ue = (ze) => 30 + (ze - Be) * 18 + 18 / 2, yt = 102;
    let Ye = '<svg class="chord-svg" viewBox="0 0 108 ' + (yt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ee + "-ote paksusta kielestä ohueen: " + z.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Ye += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + ze * 18) + '" x2="' + We(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return z.forEach((ze, tt) => {
      Ye += '<line class="string" x1="' + We(tt) + '" y1="30" x2="' + We(tt) + '" y2="' + yt + '"/>';
    }), Be > 1 && (Ye += '<text class="fret-label" x="15" y="' + (Ue(Be) + 4) + '">' + Be + "</text>"), F && (Ye += '<rect class="barre" x="' + (We(F.from) - 6.5) + '" y="' + (Ue(F.fret) - 6.5) + '" width="' + ((F.to - F.from) * 14 + 13) + '" height="13" rx="6.5"/>'), z.forEach((ze, tt) => {
      if (ze === null) {
        Ye += '<text class="marker" x="' + We(tt) + '" y="22">×</text>';
        return;
      }
      const _t = (Ee[tt] + ze) % 12 === j;
      if (ze === 0) {
        Ye += '<circle class="open' + (_t ? " root-open" : "") + '" cx="' + We(tt) + '" cy="18" r="4.5"/>';
        return;
      }
      F && ze === F.fret && tt >= F.from && tt <= F.to && !_t || (Ye += '<circle class="' + (_t ? "root" : "tone") + '" cx="' + We(tt) + '" cy="' + Ue(ze) + '" r="6.5"/>');
    }), Ye + "</svg>";
  }
  function Ne(j, z) {
    const F = new URLSearchParams(location.search), ee = i.indexOf(F.get("toonikka")), fe = F.get("asteikko");
    return {
      rootPC: ee === -1 ? j : ee,
      scaleId: Object.hasOwn($, fe) ? fe : z
    };
  }
  function Te(j, z, F) {
    return j + "?" + new URLSearchParams({ toonikka: i[z], asteikko: F });
  }
  function Ce(j, z, F, {
    boxes: ee = [],
    onlyBoxNotes: fe = !1,
    automatic: oe = !0,
    focusDegree: ve = "",
    grip: ke = null,
    barre: Me = null,
    label: Ee = i[j] + " " + z.name,
    notes: $e = null,
    targets: Qe = !1,
    muteFret: Be = null
  } = {}) {
    const We = Z(F), Ue = We + 48, yt = Ue + 28, Ye = N - 14, ze = P(c.length - 1) + 14, tt = ze - Ye, _t = oe ? 680 : Math.ceil(yt * 0.64), bt = ee.flatMap((we) => we.positions), Vt = {};
    z.base.forEach(([we, Ae]) => Vt[(j + we) % 12] = { deg: Ae, added: !1 }), z.add.forEach(([we, Ae]) => Vt[(j + we) % 12] = { deg: Ae, added: !0 });
    const sn = c.map((we, Ae) => !!ke && ke[Ae] === null), Qt = !!ke && Be !== null, Yt = O.filter((we, Ae) => sn[Ae]).reverse(), Tt = Ee + ". " + F + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Yt.length ? " Soittamatta jäävät kielet: " + Yt.join(", ") + "." : "");
    let xe = '<svg viewBox="0 0 ' + yt + " " + G + '" style="min-width:' + _t + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + Tt + '">';
    xe += '<rect x="' + I + '" y="' + Ye + '" width="' + (b - I) + '" height="' + tt + '" rx="6" fill="#2a2338"/>', xe += '<rect x="' + b + '" y="' + Ye + '" width="' + (We - b) + '" height="' + tt + '" fill="#231a12"/>', xe += '<rect x="' + We + '" y="' + Ye + '" width="' + (yt - We - 4) + '" height="' + tt + '" rx="8" fill="#32251e"/>';
    for (let we = 1; we <= F; we++)
      xe += '<line x1="' + Z(we) + '" y1="' + Ye + '" x2="' + Z(we) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    xe += '<rect x="' + (b - 3) + '" y="' + Ye + '" width="6" height="' + tt + '" rx="2" fill="#d8cbb6"/>', xe += '<rect x="' + (Ue - 11) + '" y="' + (Ye + 3) + '" width="22" height="' + (tt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', xe += '<rect x="' + (Ue - 4) + '" y="' + (Ye + 7) + '" width="3" height="' + (tt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Bt = (Ye + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((we) => we <= F).forEach((we) => xe += '<circle cx="' + te(we) + '" cy="' + Bt + '" r="5.5" fill="#7a6550"/>');
    for (let we = 12; we <= F; we += 12)
      xe += '<circle cx="' + te(we) + '" cy="' + (Bt - L) + '" r="5.5" fill="#7a6550"/>', xe += '<circle cx="' + te(we) + '" cy="' + (Bt + L) + '" r="5.5" fill="#7a6550"/>';
    xe += '<text x="' + R + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', xe += '<text x="' + b + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', xe += '<text x="' + Ue + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let we = 1; we <= F; we++)
      xe += '<text x="' + te(we) + '" y="' + (G - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + we + "</text>";
    if (ee.forEach(({ number: we, positions: Ae }) => {
      Ae.forEach((Re) => {
        const He = Re.partial ? "box-highlight box-partial" : "box-highlight";
        xe += '<g class="' + He + '" data-box="' + we + '" aria-hidden="true">';
        const it = Re.strings.find((mt) => mt.length), Rt = (te(it[0]) + te(it.at(-1))) / 2;
        xe += '<text class="box-number" x="' + Rt + '" y="12">' + we + "</text>", Re.strings.forEach((mt, Jt) => {
          if (!mt.length) return;
          const wn = te(mt[0]) - 16, pn = te(mt.at(-1)) - te(mt[0]) + 32;
          xe += '<rect class="box-band" x="' + wn + '" y="' + (P(Jt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), xe += "</g>";
      });
    }), c.forEach((we, Ae) => {
      const Re = 1 + Ae * 0.45, He = P(Ae), it = sn[Ae] && !Qt;
      it ? xe += '<text class="muted-mark" x="' + R + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[Ae] && Be === 0 || (xe += '<line x1="' + (I + 4) + '" y1="' + He + '" x2="' + (b - 4) + '" y2="' + He + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), xe += "<g" + (it ? ' opacity=".35"' : "") + ">", xe += '<line x1="' + b + '" y1="' + He + '" x2="' + (Ue + 5) + '" y2="' + He + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', xe += '<circle cx="' + (Ue + 5) + '" cy="' + He + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', xe += "</g>", xe += '<text x="13" y="' + (He + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[Ae] + "</text>";
    }), ke && Me && Me.fret >= 1 && Me.fret <= F) {
      const we = P(Me.from), Ae = P(Me.to), Re = Math.min(we, Ae) - 6, He = Math.max(we, Ae) + 6;
      xe += '<rect class="barre-indicator" x="' + (te(Me.fret) - 7) + '" y="' + Re + '" width="14" height="' + (He - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (xe += '<g class="fret-targets">', c.forEach((we, Ae) => {
      for (let Re = 0; Re <= F; Re++) {
        const He = Re ? O[Ae] + "-kieli, " + Re + ". nauha" : "vapaa " + O[Ae] + "-kieli", it = Re ? _ : b - I - 6;
        xe += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Ae + '" data-fret="' + Re + '" data-midi="' + (we + Re) + '" aria-label="' + He + '" x="' + (te(Re) - it / 2) + '" y="' + (P(Ae) - L / 2) + '" width="' + it + '" height="' + L + '" fill="transparent"/>';
      }
    }), xe += "</g>"), ($e ?? []).forEach(({ string: we, fret: Ae, label: Re, kind: He }) => {
      xe += '<g class="octave-note octave-' + He + '">', xe += '<circle cx="' + te(Ae) + '" cy="' + P(we) + '" r="' + M + '"/>', xe += '<text x="' + te(Ae) + '" y="' + (P(we) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", xe += "</g>";
    }), ke && (xe += '<g class="grip-notes">'), ($e ? [] : c).forEach((we, Ae) => {
      for (let Re = 0; Re <= F; Re++) {
        const He = (we + Re) % 12;
        if (!(He in Vt) || ke && ke[Ae] !== Re || fe && !bt.some(({ strings: pn }) => {
          const vn = pn[Ae];
          return vn.length > 0 && Re >= vn[0] && Re <= vn.at(-1);
        })) continue;
        const it = Vt[He], Rt = it.deg === "1", mt = it.added ? "#f0a13c" : Rt ? "#4b2fd6" : "#6d4aff", Jt = it.added ? "#1a1430" : "#fff";
        it.deg === ve && (xe += '<circle class="focus-note" cx="' + te(Re) + '" cy="' + P(Ae) + '" r="14.5"/>');
        const wn = ke ? ' data-string="' + (Ae + 1) + '" data-fret="' + Re + '" data-degree="' + it.deg + '"' : "";
        xe += "<circle" + wn + ' cx="' + te(Re) + '" cy="' + P(Ae) + '" r="' + M + '" fill="' + mt + '" stroke="' + (Rt ? "#fff" : "#1a1430") + '" stroke-width="' + (Rt ? 2.5 : 1) + '"/>', xe += '<text x="' + te(Re) + '" y="' + (P(Ae) + 3.5) + '" font-size="' + (it.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Jt + '" text-anchor="middle">' + it.deg + "</text>";
      }
    }), ke && (xe += "</g>"), Qt && sn.forEach((we, Ae) => {
      if (!we) return;
      const Re = te(Be), He = P(Ae);
      xe += '<g class="muted-mark grip-mute" data-string="' + (Ae + 1) + '" data-fret="' + Be + '">', xe += '<circle cx="' + Re + '" cy="' + He + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', xe += '<text x="' + Re + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', xe += "</g>";
    }), xe += "</svg>", xe;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: E,
    SCALES: $,
    noteName: V,
    scaleNotes: se,
    scaleTriads: Y,
    triadGrips: ne,
    chordGrip: D,
    renderChordDiagram: ye,
    selectionFromURL: Ne,
    selectionHref: Te,
    renderBoard: Ce,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: re,
    syncBoxSystem: de,
    fingeringBoxes: q,
    boxOptions: pe,
    revealPositions: ge
  };
})();
globalThis.MusicMapFretboard = om;
function ld(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function um(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function cm(i) {
  const a = um(i), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const Ve = globalThis.MusicMapFretboard, Ke = (i) => (i % 12 + 12) % 12, dm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], fm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Oe = (i, a = !1, u = !1) => (a ? fm : dm)[Ke(i)] + (u ? Math.floor(i / 12) - 1 : ""), ar = (i) => Ve.CHROM[Ke(i)], Wi = (i, a, u) => Ve.noteName(Ke(i), a, u);
function hm(i, a) {
  const u = Math.floor(i / 12) - 1;
  return a[0] === "B" && Ke(i) < 2 ? u - 1 : a[0] === "C" && Ke(i) > 9 ? u + 1 : u;
}
const mn = ["ohut E", "B", "G", "D", "A", "paksu E"], Eo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Id = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], mm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], wr = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, ka = (i, a) => ({ string: i, fret: a, midi: Ve.OPEN_PITCHES[i] + a });
function ii(i, a, u) {
  return [...i].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (f, h) => ka(c, a + h)));
}
const rt = (i) => `${i.string}:${i.fret}`, Sr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Dd = (i, a) => a === "maj" ? `${ar(i)}-duurisointu` : a === "min" ? `${ar(i)}-mollisointu` : `${ar(i)}7-sointu`, Qi = [
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
], od = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function zd(i, a) {
  const u = od[a] ?? od.E, c = Ke(i - u.root);
  return u.frets.flatMap((f, h) => f === null ? [] : [ka(h, f + c)]);
}
const ha = {
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
}, ya = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, sr = (i, a, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(a, Math.min(u, i)) : c, Sn = (i, a, u) => a.includes(i) ? i : u;
function va(i) {
  const a = { ...ha };
  a.mode = Sn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...ha.strings]), a.min = Math.round(sr(i.min, 0, 24, a.min)), a.max = Math.round(sr(i.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (a[u] = i[u]);
  return a.check = Sn(i.check, ["class", "pitch"], a.check), a.input = Sn(i.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : a.rounds, a.root = Math.round(sr(i.root, 0, 11, a.root)), a.scale = typeof i.scale == "string" && Object.hasOwn(Ve.SCALES, i.scale) ? i.scale : a.scale, a.box = Math.round(sr(i.box, 0, 5, a.box)), a.order = Sn(i.order, ["random", "up", "down"], a.order), a.chord = Sn(i.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Sn(i.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Sn(i.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...ha.intervals]), a.direction = Sn(i.direction, ["up", "down", "both"], a.direction), a.hints = Sn(i.hints, ["off", "always", "fade"], a.hints), a.activity = Sn(i.activity, ["play", "degree"], a.activity), a.minRms = sr(i.minRms, 1e-3, 0.15, a.minRms), a.clarity = sr(i.clarity, 0.85, 0.99, a.clarity), a.stability = sr(i.stability, 120, 800, a.stability), a.cents = sr(i.cents, 10, 45, a.cents), a.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", a;
}
function pm(i, a) {
  const u = new URLSearchParams(i), c = { ...a };
  for (const [f, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(f) && Object.assign(c, { [h]: u.get(f) });
  for (const [f, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(f) && (c[h] = Number(u.get(f)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((f) => Number(f) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [f, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(f) && (c[h] = u.get(f) === "1");
  if (u.has("toonikka")) {
    const f = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = f.charAt(0).toUpperCase() + f.slice(1), m = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], k = Math.max(Ve.CHROM.indexOf(h), m.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    k >= 0 && (c.root = k);
  }
  return va(c);
}
function vm(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: Ve.CHROM[i.root],
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
    kielet: i.strings.map((a) => a + 1).join(","),
    intervallit: i.intervals.join(","),
    kromaattinen: i.accidentals ? "1" : "0",
    alennukset: i.flats ? "1" : "0",
    kertaus: i.weak ? "1" : "0",
    vertailu: i.reference ? "1" : "0"
  });
}
const Er = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, On = (i) => i.mode === "scale" && i.order !== "random", bd = (i) => ["note", "degree"].includes(Er(i)) ? "class" : On(i) ? "pitch" : i.check, ca = (i) => Er(i) === "mic", ud = "musiikin-kartta:harjoittelu", Vd = 3, oo = () => ({ version: Vd, settings: { ...ha }, stats: {}, recent: [], sessions: [] }), Bd = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, hn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function km(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(i[a])) && i.correct <= i.attempts && (i.errors === void 0 || hn(i.errors)) && (i.ema === void 0 || hn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || hn(i.emaMs));
}
function ym(i) {
  return !!i && typeof i.id == "string" && hn(i.count) && hn(i.first) && i.first <= i.count && hn(i.ms) && hn(i.at) && (i.solo === void 0 || hn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || hn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function cd(i) {
  if (!i) return oo();
  const a = JSON.parse(i);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((m) => !km(m))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((m) => !m || typeof m.id != "string" || !hn(m.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((m) => !ym(m)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = va(a.settings ?? {}), f = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  f && (c.hints = "off");
  const h = {
    version: Vd,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([m, k]) => [m, { ...k, errors: k.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (f || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const dd = 2500, gm = 8e3, fd = 0.3, Yi = (i) => i.ema ?? i.correct / i.attempts, Ji = (i) => i.emaMs ?? i.totalMs / i.attempts;
function No(i) {
  if (!i?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Ji(i) - dd) / (gm - dd)));
  return Yi(i) * 0.65 + a * 0.35;
}
function xm(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - No(i)) * 3;
}
class hd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = cd(a?.getItem(ud) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = oo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(ud, JSON.stringify(this.data)), this.warning = "";
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
    if (this.data.recent.some((m) => m.id === a.id)) return;
    const u = Bd(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, f = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + f,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Yi(c) + fd * (f - Yi(c)) : f,
      emaMs: c.attempts ? Ji(c) + fd * (a.ms - Ji(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = cd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...oo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const jm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Sm = ["e", "B", "G", "D", "A", "E"];
function Ud({ string: i }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ l.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ l.jsx("strong", { children: Sm[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ l.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ l.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Hd = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), wm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Kd({ min: i, max: a }) {
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
    /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - i + 1 }, (u, c) => {
      const f = i + c;
      return /* @__PURE__ */ l.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : jm.has(f) ? /* @__PURE__ */ l.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Xi({ area: i, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta" }) {
  const m = { "--cols": i.max - i.min + 1 }, { strings: k, min: S, max: O } = i, [v, E] = B.useState({ string: Math.min(...k), fret: S }), $ = B.useRef(null), I = new Map(a.map((_) => [rt(_), _])), b = a.map((_) => `${rt(_)}${_.kind}`).join(",");
  B.useEffect(() => {
    const _ = $.current, L = _?.querySelector(".target, .anchor");
    _ && L && (_.scrollLeft += L.getBoundingClientRect().left - _.getBoundingClientRect().left - _.clientWidth / 2 + L.clientWidth / 2);
  }, [b]);
  const N = k.includes(v.string) && v.fret >= S && v.fret <= O ? v : { string: Math.min(...k), fret: S };
  return /* @__PURE__ */ l.jsx("div", { ref: $, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board", style: m, children: [
    /* @__PURE__ */ l.jsxs("caption", { children: [
      h,
      " · ohut e ylhäällä, paksu E alhaalla"
    ] }),
    /* @__PURE__ */ l.jsx(Kd, { min: S, max: O }),
    /* @__PURE__ */ l.jsx("tbody", { children: Ve.OPEN_PITCHES.map((_, L) => /* @__PURE__ */ l.jsxs("tr", { className: k.includes(L) ? "" : "unused", style: Hd(L), children: [
      /* @__PURE__ */ l.jsxs("th", { scope: "row", "aria-label": `${L + 1}. kieli: ${mn[L]}${u.includes(L) ? ", ei soiteta" : ""}`, children: [
        /* @__PURE__ */ l.jsx(Ud, { string: L }),
        u.includes(L) && /* @__PURE__ */ l.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
      ] }),
      ii([L], S, O).map((M) => {
        const R = I.get(rt(M)), G = `${mn[L]}-kieli, ${wr(M.fret)}`;
        return /* @__PURE__ */ l.jsx("td", { className: `${M.fret === 0 ? "open-fret " : ""}${R ? R.kind === "answer" ? "target" : R.kind : ""}`, children: /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "data-string": L,
            "data-fret": M.fret,
            tabIndex: N.string === L && N.fret === M.fret ? 0 : -1,
            onFocus: () => E(M),
            onKeyDown: (Z) => {
              if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) return;
              Z.preventDefault();
              const te = [...k].sort((ae, Pe) => ae - Pe), P = te.indexOf(L), V = Z.key === "ArrowUp" ? te[Math.max(0, P - 1)] : Z.key === "ArrowDown" ? te[Math.min(te.length - 1, P + 1)] : L, se = Z.key === "Home" ? S : Z.key === "End" ? O : Math.max(S, Math.min(O, M.fret + (Z.key === "ArrowRight" ? 1 : Z.key === "ArrowLeft" ? -1 : 0)));
              Z.currentTarget.closest("table")?.querySelector(`button[data-string="${V}"][data-fret="${se}"]`)?.focus();
            },
            disabled: c || !k.includes(L),
            "aria-label": G + (R ? `, ${wm[R.kind]}${R.label ? " " + R.label : ""}` : ""),
            onClick: () => f?.(M),
            children: R ? /* @__PURE__ */ l.jsx("span", { className: "dot", children: R.label || "●" }) : null
          }
        ) }, M.fret);
      })
    ] }, L)) })
  ] }) });
}
function Em({ area: i, stats: a, input: u, check: c, flats: f }) {
  const { strings: h, min: m, max: k } = i, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ l.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ l.jsxs("table", { className: "practice-board mastery", style: { "--cols": k - m + 1 }, children: [
    /* @__PURE__ */ l.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ l.jsx(Kd, { min: m, max: k }),
    /* @__PURE__ */ l.jsx("tbody", { children: Ve.OPEN_PITCHES.map((O, v) => /* @__PURE__ */ l.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Hd(v), children: [
      /* @__PURE__ */ l.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${mn[v]}`, children: /* @__PURE__ */ l.jsx(Ud, { string: v }) }),
      ii([v], m, k).map((E) => {
        const $ = Object.hasOwn(a, S + rt(E)) ? a[S + rt(E)] : void 0, I = No($), b = I === null ? "unseen" : $.attempts < 3 ? "few" : I >= 0.8 ? "strong" : I >= 0.5 ? "growing" : "weak", N = `${mn[v]}-kieli, ${wr(E.fret)}, ${Oe(E.midi, f)}`, _ = $ ? `${Math.round(I * 100)} %, ${$.correct}/${$.attempts} heti oikein, viime aikoina ${Math.round(Yi($) * 100)} % ja ${(Ji($) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ l.jsxs("td", { className: `${E.fret === 0 ? "open-fret " : ""}${b}`, title: `${N}: ${_}`, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: I === null ? "·" : $.attempts < 3 ? "?" : Math.round(I * 100) }),
          /* @__PURE__ */ l.jsxs("span", { className: "sr-only", children: [
            N,
            ": ",
            _
          ] })
        ] }, E.fret);
      })
    ] }, v)) })
  ] }) });
}
const Nm = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", ga = (i) => i.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[i.scale]) : Sr[i.mode === "caged" ? "maj" : i.chord].tones, Gd = (i) => Ve.fingeringBoxes(i.root, Ve.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Nr(i) {
  if (i.mode === "caged") {
    const a = zd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const a = Gd(i);
    return { strings: i.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function Cm(i) {
  const a = Nr(i);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function qi(i) {
  const a = Nr(i), u = ii(a.strings, a.min, a.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((h) => i.accidentals || ![1, 3, 6, 8, 10].includes(Ke(h.midi)));
  if (i.mode === "caged") {
    const h = new Set(zd(i.root, i.shape).map(rt));
    return u.filter((m) => h.has(rt(m)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((h) => ga(i).some(([m]) => Ke(h.midi - i.root) === m));
  if (i.mode !== "scale" || !i.box) return c;
  const f = Gd(i);
  return c.filter((h) => {
    const m = f.strings[h.string];
    return m.length > 0 && h.fret >= m[0] && h.fret <= m.at(-1);
  });
}
function Wd(i, a) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((f) => ({
    iv: f,
    direction: c,
    pairs: a.flatMap((h) => a.filter((m) => m.midi === h.midi + (c === "down" ? -f : f)).map((m) => ({ reference: h, target: m })))
  }))).filter((c) => c.pairs.length);
}
function _m(i) {
  const a = ga(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(i.chordTone));
}
function uo(i) {
  const a = qi(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = _m(i).filter(([f]) => !a.some((h) => Ke(h.midi - i.root) === f));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, f]) => f + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !Wd(i, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : On(i) && new Set(a.map((f) => f.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Tm(i, a) {
  const u = [...new Map([...a].sort((c, f) => c.midi - f.midi || c.string - f.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function Qd(i) {
  return On(i) ? new Set(qi(i).map((a) => a.midi)).size : i.rounds;
}
function Mm(i, a) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Yr(i, a, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((m, k) => m + k, 0), f = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(f * i.length)];
  let h = f * c;
  for (let m = 0; m < i.length; m++)
    if (h -= a[m], h < 0) return i[m];
  return i.at(-1);
}
const md = (i, a) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${a}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${a}:${i.activity}` : `scale:${i.root}:${i.scale}:${a}:${i.activity}`;
function jr(i, a) {
  const u = i.filter((c) => !a(c));
  return u.length ? u : i;
}
function Pm(i, a, u = {}, c, f = Math.random) {
  const h = uo(i);
  if (h) throw new Error(h);
  const m = bd(i), k = Er(i), S = m === "pitch", O = (P) => i.weak ? xm(u[Bd({ input: k, check: m, hint: !1, item: P })]) : 1, v = (P) => Yr(P, P.map(() => 1), f), E = qi(i), $ = { check: m, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const P = jr(E, (ae) => !!c && rt(ae) === rt(c.position)), V = Yr(P, P.map((ae) => O(`notes:${rt(ae)}`)), f), se = Oe(V.midi, i.flats, S);
    return {
      ...$,
      position: V,
      midi: V.midi,
      name: se,
      item: `notes:${rt(V)}`,
      prompt: `Etsi ${se} ${Eo[V.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const P = (Pe) => `ear-note:${Ke(Pe.midi)}${i.reference ? ":ref" : ""}`, V = jr(E, (Pe) => !!c && Ke(Pe.midi) === Ke(c.midi)), se = Yr(V, V.map((Pe) => O(P(Pe))), f), ae = i.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...$,
      position: se,
      midi: se.midi,
      name: Oe(se.midi, i.flats),
      item: P(se),
      choices: "note",
      reference: ae,
      sound: ae === void 0 ? [se.midi] : [ae, se.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const P = jr(E, (se) => !!c && se.midi === c.midi), V = Yr(P, P.map((se) => O(`repeat:${se.midi}`)), f);
    return {
      ...$,
      position: V,
      midi: V.midi,
      name: Oe(V.midi, i.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const P = jr(Wd(i, E), (ae) => c?.interval === ae.iv && c?.direction === ae.direction), V = Yr(P, P.map((ae) => O(`interval:${ae.iv}:${ae.direction}`)), f), se = v(jr(V.pairs, (ae) => c?.reference === ae.reference.midi));
    return {
      ...$,
      position: se.target,
      midi: se.target.midi,
      name: Oe(se.target.midi, i.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Oe(se.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const I = ga(i);
  let b, N = 0;
  if (On(i)) {
    const P = Tm(i, E);
    N = P.length, b = P[a % P.length];
  } else {
    const P = I.filter(([ae]) => E.some((Pe) => Ke(Pe.midi - i.root) === ae)), V = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [I[a % I.length]] : I.filter(([, ae]) => ae.endsWith(i.chordTone)) : jr(P, ([ae]) => c?.interval === ae), [se] = Yr(V, V.map(([ae]) => O(md(i, ae))), f);
    b = v(jr(E.filter((ae) => Ke(ae.midi - i.root) === se), (ae) => !!c && rt(ae) === rt(c.position)));
  }
  const _ = Ke(b.midi - i.root), L = I.find(([P]) => P === _)[1], M = Wi(i.root, _, L), R = S ? M + hm(b.midi, M) : M, G = i.mode === "scale" ? `${ar(i.root)}-${Ve.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${ar(i.root)}-duurisointu, ${i.shape}-muoto` : Dd(i.root, i.chord), Z = i.mode !== "caged" && i.activity === "degree", te = Z ? `${G}: mikä aste on ${M}?` : N ? `${G} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % N + 1}/${N}: ${L}. aste (${R}).` : `${G}: etsi ${L}. aste${S ? ` (${R})` : ""}.`;
  return {
    ...$,
    position: b,
    midi: b.midi,
    name: R,
    item: md(i, _),
    prompt: te,
    degree: L,
    interval: _,
    choices: Z ? "degree" : "position"
  };
}
function co(i, a, u) {
  return Number.isInteger(a) && (u === "class" ? Ke(i) === Ke(a) : i === a);
}
function Yd(i, a, u) {
  return co(a.midi, u.midi, a.check) ? i.mode === "notes" ? u.string === a.position.string : Nm(i) ? qi(i).some((c) => rt(c) === rt(u)) : !0 : !1;
}
function Am(i, a) {
  const u = Nr(i);
  return ii(u.strings, u.min, u.max).filter((c) => Yd(i, a, c));
}
const St = (i, a, u) => ({ ...i, label: a, kind: u }), Rm = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function $m(i, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, f = Nr(i), h = ii(f.strings, f.min, f.max), m = Am(i, a);
  if (i.mode === "notes") {
    if (c) return { marks: m.map((L) => St(L, a.name, "answer")), text: `${a.name} on ${Id[a.position.string]}: ${wr(a.position.fret)}.` };
    const N = h.find((L) => L.string === a.position.string), _ = Oe(N.midi, i.flats);
    return {
      marks: [St(N, _, "anchor")],
      text: `Apupiste: ${mm[N.string]} ${N.fret === 0 ? "vapaa sävel" : N.fret + ". nauhan sävel"} on ${_}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [St(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [St(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${mn[a.position.string]}-kieli, ${wr(a.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: m.map((N) => St(N, Oe(N.midi, i.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Eo[a.position.string]}.` };
  if (i.mode === "interval") {
    const N = Oe(a.reference, i.flats, !0), _ = h.filter((L) => L.midi === a.reference).map((L) => St(L, N, "anchor"));
    return c ? {
      marks: [..._, ...m.map((L) => St(L, Oe(L.midi, i.flats, !0), "answer"))],
      text: `${Rm(Qi[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${N} → ${a.name}.`
    } : { marks: _, text: `Alkusävel ${N} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const k = qi(i), S = ga(i), O = (N) => S.find(([_]) => _ === Ke(N.midi - i.root))?.[1] ?? "", v = Wi(i.root, a.interval, a.degree), E = k.filter((N) => Ke(N.midi - i.root) === 0), $ = (N) => m.some((_) => rt(_) === rt(N)), I = `${a.degree}. aste on ${v}.`;
  if (i.mode === "caged")
    return c ? { marks: k.map((N) => St(N, O(N), $(N) ? "answer" : "shape")), text: I } : { marks: k.map((N) => St(N, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const b = i.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const N = k.filter((_) => Ke(_.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : E).map((_) => St(_, "1", "anchor")), ...N.map((_) => St(_, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: N.map((_) => St(_, v, "shape")), text: `Katso ${b} nimeä: mikä on sen perussävel?` } : {
      marks: [...E.map((_) => St(_, "1", "anchor")), ...N.map((_) => St(_, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...E.filter((N) => !$(N)).map((N) => St(N, "1", "anchor")), ...m.map((N) => St(N, a.degree, "answer"))], text: I } : a.interval === 0 ? { marks: [], text: `1. aste on ${b} perussävel ${ar(i.root)}.` } : { marks: E.map((N) => St(N, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Lm {
  constructor(a, u, c, f = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = f, this.random = h, this.total = Qd(a);
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
      this.question = Pm(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Mm(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(a, u, c, f = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? a === h.interval : u === "note" ? co(h.midi, a, "class") : u === "board" ? !!c && Yd(this.settings, h, c) : co(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const k = u === "board" ? c : void 0, S = {
      id: `${this.id}:${this.index}`,
      item: k && this.settings.mode === "notes" ? `notes:${rt(k)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, f)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return k ? S.position = rt(k) : this.settings.mode === "notes" && (S.position = rt(h.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function fo(i) {
  const a = i.filter((u) => !u.hint);
  return {
    count: i.length,
    first: i.filter((u) => u.first).length,
    solo: a.length,
    soloFirst: a.filter((u) => u.first).length,
    guided: i.length - a.length,
    ms: i.reduce((u, c) => u + c.ms, 0)
  };
}
const ho = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], Zr = (i) => ho.find(([a]) => a === i)?.[1] ?? i;
function At({ label: i, children: a }) {
  const u = B.useId();
  return /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ l.jsx("label", { htmlFor: u, children: i }),
    B.cloneElement(a, { id: u })
  ] });
}
function pd({ legend: i, name: a, value: u, options: c, onChange: f, disabled: h }) {
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ l.jsx("legend", { children: i }),
    /* @__PURE__ */ l.jsx("div", { className: "choice-row", children: c.map((m) => /* @__PURE__ */ l.jsxs("label", { className: m.value === u ? "selected" : "", children: [
      /* @__PURE__ */ l.jsx("input", { type: "radio", name: a, value: m.value, checked: m.value === u, onChange: () => f(m.value) }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("strong", { children: m.title }),
        /* @__PURE__ */ l.jsx("small", { children: m.summary })
      ] })
    ] }, m.value)) })
  ] });
}
function vd(i) {
  const a = Nr(i), u = Qd(i), c = Er(i), f = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${i.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${i.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, m = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((k) => k + 1).join(", ")}`;
  return `${ya[i.hints].title} · ${f} · ${On(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${m}`;
}
function kd({ s: i, change: a, locked: u, problem: c }) {
  const f = B.useId(), h = (v, E) => a({ ...i, [v]: E }), m = Nr(i), k = Er(i) === "note" || Er(i) === "degree", S = ["scale", "chord", "caged"].includes(i.mode), O = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ l.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ l.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(At, { label: "Harjoitus", children: /* @__PURE__ */ l.jsx("select", { value: i.mode, onChange: (v) => h("mode", v.target.value), children: ho.map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E }, v)) }) }),
      /* @__PURE__ */ l.jsx("p", { className: "mode-note", children: ho.find(([v]) => v === i.mode)[2] })
    ] }),
    S && /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ l.jsx(At, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ l.jsx("select", { value: i.root, onChange: (v) => h("root", Number(v.target.value)), children: Ve.CHROM.map((v, E) => /* @__PURE__ */ l.jsx("option", { value: E, children: v }, v)) }) }),
      i.mode === "scale" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(At, { label: "Asteikko", children: /* @__PURE__ */ l.jsx("select", { value: i.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ve.SCALES).map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(At, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ l.jsxs("select", { value: i.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ l.jsx(At, { label: "Sävelten järjestys", children: /* @__PURE__ */ l.jsxs("select", { value: i.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ l.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ l.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(At, { label: "Sointutyyppi", children: /* @__PURE__ */ l.jsx("select", { value: i.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Sr).map(([v, E]) => /* @__PURE__ */ l.jsx("option", { value: v, children: E.name }, v)) }) }),
        /* @__PURE__ */ l.jsx(At, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ l.jsxs("select", { value: i.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      i.mode === "caged" ? /* @__PURE__ */ l.jsx(At, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ l.jsx("select", { value: i.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ l.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ l.jsx(At, { label: "Tehtävä", children: /* @__PURE__ */ l.jsxs("select", { value: i.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ l.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ l.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.intervals.includes(v), onChange: (E) => h("intervals", E.target.checked ? [...i.intervals, v] : i.intervals.filter(($) => $ !== v)) }),
        Qi[v]
      ] }, v)) }),
      /* @__PURE__ */ l.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ l.jsx(At, { label: "Intervallin suunta", children: /* @__PURE__ */ l.jsxs("select", { value: i.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ l.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ l.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ l.jsx(
      pd,
      {
        legend: "Harjoittelutapa",
        name: `${f}-way`,
        value: i.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...ya[v] }))
      }
    ),
    k ? /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ l.jsx(pd, { legend: "Vastaustapa", name: `${f}-input`, value: i.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ l.jsx(At, { label: "Kierroksen pituus", children: /* @__PURE__ */ l.jsxs("select", { value: i.rounds, disabled: On(i), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ l.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !k && /* @__PURE__ */ l.jsx(At, { label: "Vastausten tarkistus", children: /* @__PURE__ */ l.jsxs("select", { value: On(i) ? "pitch" : i.check, disabled: On(i), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ l.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ l.jsx(At, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ l.jsxs("select", { value: String(i.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ l.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ l.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      On(i) && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      m.fixed ? /* @__PURE__ */ l.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        m.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        m.min,
        "–",
        m.max,
        "."
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ l.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === v, onClick: () => a({ ...i, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsx(At, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ l.jsx(At, { label: "Viimeinen nauha", children: /* @__PURE__ */ l.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      m.fixed !== "shape" && /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ l.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ l.jsx("div", { className: "check-row", children: mn.map((v, E) => /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.strings.includes(E), onChange: ($) => h("strings", $.target.checked ? [...i.strings, E] : i.strings.filter((I) => I !== E)) }),
          E + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "check-row", children: [
        O && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        i.mode === "ear-note" && /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: i.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Fm = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Om({ onSelect: i }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ l.jsx("div", { className: "learning-grid", children: Fm.map((a) => /* @__PURE__ */ l.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(a.id), children: [
      /* @__PURE__ */ l.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ l.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ l.jsx("strong", { children: a.title }),
        /* @__PURE__ */ l.jsx("span", { children: a.description }),
        /* @__PURE__ */ l.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const Im = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Dm = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", zm = 0.12;
function yd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function bm() {
  const i = B.useRef(null), a = B.useRef(null), [u, c] = B.useState(!1), [f, h] = B.useState(!1), [m, k] = B.useState(!1), [S, O] = B.useState(0), [v, E] = B.useState(0), [$, I] = B.useState("");
  function b(R = !1) {
    const G = i.current, Z = a.current;
    if (!G || !Z || !Number.isFinite(G.currentTime) || Z.readyState < 1) return;
    const te = Math.abs(Z.currentTime - G.currentTime), P = G.loop && Number.isFinite(G.duration) && Math.abs(te - G.duration) < 0.3;
    if (R || !P && te > zm)
      try {
        Z.currentTime = G.currentTime;
      } catch {
      }
  }
  function N() {
    i.current?.pause(), a.current?.pause(), c(!1);
  }
  async function _() {
    const R = i.current, G = a.current;
    if (!(!R || !G)) {
      if (u) {
        N();
        return;
      }
      I(""), G.muted = !f, G.volume = 0.55, R.volume = 0.75, b(!0);
      try {
        await Promise.all([R.play(), G.play()]), b(), c(!0);
      } catch {
        N(), I("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function L(R) {
    const G = i.current, Z = a.current;
    if (!(!G || !Z || !Number.isFinite(R))) {
      G.currentTime = R;
      try {
        Z.currentTime = R;
      } catch {
      }
      O(R);
    }
  }
  function M(R) {
    R && b(), a.current && (a.current.muted = !R), h(R);
  }
  return B.useEffect(() => {
    const R = () => {
      document.hidden && (i.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", R), () => {
      document.removeEventListener("visibilitychange", R), i.current?.pause(), a.current?.pause();
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
              checked: f,
              onChange: (R) => M(R.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Mallikitara ",
            f ? "päällä" : "pois"
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: m,
              onChange: (R) => k(R.target.checked)
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ l.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        _();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(S, v > 0 ? v : 1),
          disabled: !v,
          onChange: (R) => L(Number(R.target.value))
        }
      ),
      /* @__PURE__ */ l.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        yd(S),
        " / ",
        yd(v)
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: Im,
        loop: m,
        onLoadedMetadata: (R) => E(R.currentTarget.duration),
        onTimeUpdate: (R) => {
          O(R.currentTarget.currentTime), R.currentTarget.paused || b();
        },
        onEnded: () => {
          i.current?.loop || (a.current?.pause(), c(!1), O(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => I("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ l.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Dm,
        muted: !0,
        loop: m,
        onLoadedMetadata: () => {
          const R = i.current, G = a.current;
          R?.duration && G?.duration && Math.abs(R.duration - G.duration) > 0.15 && I("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => I("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    $ && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: $ }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Vm = 4e3;
class gd extends Error {
  name = "MicSetupError";
}
async function Bm(i, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new gd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
  let f;
  try {
    if (f = a ? a() : new AudioContext(), f.state !== "running") {
      let O;
      await Promise.race([
        f.resume(),
        new Promise((v, E) => {
          O = setTimeout(() => E(new gd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Vm);
        })
      ]).finally(() => clearTimeout(O));
    }
    const h = f.createMediaStreamSource(c), m = f, k = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = k?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: k?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((O) => O.stop()), h.disconnect(), a || m.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((m) => m.stop()), a || await f?.close().catch(() => {
    }), h;
  }
}
async function Um() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var so, xd;
function Hm() {
  if (xd) return so;
  xd = 1;
  function i(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const O = Math.PI * c / this.size;
      u[c] = Math.cos(O), u[c + 1] = -Math.sin(O);
    }
    this.table = u;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var m = 0; m < this._bitrev.length; m++) {
      this._bitrev[m] = 0;
      for (var k = 0; k < this._width; k += 2) {
        var S = this._width - k - 2;
        this._bitrev[m] |= (m >>> k & 3) << S;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return so = i, i.prototype.fromComplexArray = function(u, c) {
    for (var f = c || new Array(u.length >>> 1), h = 0; h < u.length; h += 2)
      f[h >>> 1] = u[h];
    return f;
  }, i.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, i.prototype.toComplexArray = function(u, c) {
    for (var f = c || this.createComplexArray(), h = 0; h < f.length; h += 2)
      f[h] = u[h >>> 1], f[h + 1] = 0;
    return f;
  }, i.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, f = c >>> 1, h = 2; h < f; h += 2)
      u[c - h] = u[h], u[c - h + 1] = -u[h + 1];
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
    for (var f = 0; f < u.length; f++)
      u[f] /= this.size;
    this._out = null, this._data = null;
  }, i.prototype._transform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, k, S, O = this._bitrev;
    if (m === 4)
      for (k = 0, S = 0; k < c; k += m, S++) {
        const _ = O[S];
        this._singleTransform2(k, _, h);
      }
    else
      for (k = 0, S = 0; k < c; k += m, S++) {
        const _ = O[S];
        this._singleTransform4(k, _, h);
      }
    var v = this._inv ? -1 : 1, E = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var $ = m >>> 2;
      for (k = 0; k < c; k += m)
        for (var I = k + $, b = k, N = 0; b < I; b += 2, N += h) {
          const _ = b, L = _ + $, M = L + $, R = M + $, G = u[_], Z = u[_ + 1], te = u[L], P = u[L + 1], V = u[M], se = u[M + 1], ae = u[R], Pe = u[R + 1], Q = G, re = Z, de = E[N], q = v * E[N + 1], ge = te * de - P * q, pe = te * q + P * de, Y = E[2 * N], ne = v * E[2 * N + 1], X = V * Y - se * ne, g = V * ne + se * Y, D = E[3 * N], ye = v * E[3 * N + 1], Ne = ae * D - Pe * ye, Te = ae * ye + Pe * D, Ce = Q + X, j = re + g, z = Q - X, F = re - g, ee = ge + Ne, fe = pe + Te, oe = v * (ge - Ne), ve = v * (pe - Te), ke = Ce + ee, Me = j + fe, Ee = Ce - ee, $e = j - fe, Qe = z + ve, Be = F - oe, We = z - ve, Ue = F + oe;
          u[_] = ke, u[_ + 1] = Me, u[L] = Qe, u[L + 1] = Be, u[M] = Ee, u[M + 1] = $e, u[R] = We, u[R + 1] = Ue;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, k = m[c], S = m[c + 1], O = m[c + f], v = m[c + f + 1], E = k + O, $ = S + v, I = k - O, b = S - v;
    h[u] = E, h[u + 1] = $, h[u + 2] = I, h[u + 3] = b;
  }, i.prototype._singleTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, k = this._inv ? -1 : 1, S = f * 2, O = f * 3, v = m[c], E = m[c + 1], $ = m[c + f], I = m[c + f + 1], b = m[c + S], N = m[c + S + 1], _ = m[c + O], L = m[c + O + 1], M = v + b, R = E + N, G = v - b, Z = E - N, te = $ + _, P = I + L, V = k * ($ - _), se = k * (I - L), ae = M + te, Pe = R + P, Q = G + se, re = Z - V, de = M - te, q = R - P, ge = G - se, pe = Z + V;
    h[u] = ae, h[u + 1] = Pe, h[u + 2] = Q, h[u + 3] = re, h[u + 4] = de, h[u + 5] = q, h[u + 6] = ge, h[u + 7] = pe;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, f = this._width, h = 1 << f, m = c / h << 1, k, S, O = this._bitrev;
    if (m === 4)
      for (k = 0, S = 0; k < c; k += m, S++) {
        const we = O[S];
        this._singleRealTransform2(k, we >>> 1, h >>> 1);
      }
    else
      for (k = 0, S = 0; k < c; k += m, S++) {
        const we = O[S];
        this._singleRealTransform4(k, we >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, E = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      m = c / h << 1;
      var $ = m >>> 1, I = $ >>> 1, b = I >>> 1;
      for (k = 0; k < c; k += m)
        for (var N = 0, _ = 0; N <= b; N += 2, _ += h) {
          var L = k + N, M = L + I, R = M + I, G = R + I, Z = u[L], te = u[L + 1], P = u[M], V = u[M + 1], se = u[R], ae = u[R + 1], Pe = u[G], Q = u[G + 1], re = Z, de = te, q = E[_], ge = v * E[_ + 1], pe = P * q - V * ge, Y = P * ge + V * q, ne = E[2 * _], X = v * E[2 * _ + 1], g = se * ne - ae * X, D = se * X + ae * ne, ye = E[3 * _], Ne = v * E[3 * _ + 1], Te = Pe * ye - Q * Ne, Ce = Pe * Ne + Q * ye, j = re + g, z = de + D, F = re - g, ee = de - D, fe = pe + Te, oe = Y + Ce, ve = v * (pe - Te), ke = v * (Y - Ce), Me = j + fe, Ee = z + oe, $e = F + ke, Qe = ee - ve;
          if (u[L] = Me, u[L + 1] = Ee, u[M] = $e, u[M + 1] = Qe, N === 0) {
            var Be = j - fe, We = z - oe;
            u[R] = Be, u[R + 1] = We;
            continue;
          }
          if (N !== b) {
            var Ue = F, yt = -ee, Ye = j, ze = -z, tt = -v * ke, _t = -v * ve, bt = -v * oe, Vt = -v * fe, sn = Ue + tt, Qt = yt + _t, Yt = Ye + Vt, Tt = ze - bt, xe = k + I - N, Bt = k + $ - N;
            u[xe] = sn, u[xe + 1] = Qt, u[Bt] = Yt, u[Bt + 1] = Tt;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, f) {
    const h = this._out, m = this._data, k = m[c], S = m[c + f], O = k + S, v = k - S;
    h[u] = O, h[u + 1] = 0, h[u + 2] = v, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, f) {
    const h = this._out, m = this._data, k = this._inv ? -1 : 1, S = f * 2, O = f * 3, v = m[c], E = m[c + f], $ = m[c + S], I = m[c + O], b = v + $, N = v - $, _ = E + I, L = k * (E - I), M = b + _, R = N, G = -L, Z = b - _, te = N, P = L;
    h[u] = M, h[u + 1] = 0, h[u + 2] = R, h[u + 3] = G, h[u + 4] = Z, h[u + 5] = 0, h[u + 6] = te, h[u + 7] = P;
  }, so;
}
var Km = Hm();
const Gm = /* @__PURE__ */ Zh(Km);
class Ki {
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
    return new Ki(
      a,
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
  static forFloat64Array(a) {
    return new Ki(
      a,
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
  static forNumberArray(a) {
    return new Ki(a, (u) => Array(u));
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
  constructor(a, u) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new Gm(Ym(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(a, u = this._bufferSupplier(a.length)) {
    if (a.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${a.length}`
      );
    for (let f = 0; f < a.length; f++)
      this._paddedInputBuffer[f] = a[f];
    for (let f = a.length; f < this._paddedInputBuffer.length; f++)
      this._paddedInputBuffer[f] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let f = 0; f < c.length; f += 2)
      c[f] = c[f] * c[f] + c[f + 1] * c[f + 1], c[f + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let f = 0; f < a.length; f++)
      u[f] = this._inverseBuffer[2 * f];
    return u;
  }
}
function Wm(i) {
  const a = [];
  let u = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, f = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, f !== -1 && a.push(f)) : u && i[h] > c && (c = i[h], f = h);
  return a;
}
function Qm(i, a) {
  const [u, c, f] = [i - 1, i, i + 1], [h, m, k] = [a[u], a[c], a[f]], S = h / 2 - m + k / 2, O = -(h / 2) * (c + f) + m * (u + f) - k / 2 * (u + c), v = h * c * f / 2 - m * u * f + k * u * c / 2, E = -O / (2 * S), $ = S * E * E + O * E + v;
  return [E, $];
}
class Gi {
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
    return new Gi(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Gi(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Gi(a, (u) => Array(u));
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
  constructor(a, u) {
    this._autocorrelator = new Ki(a, u), this._nsdfBuffer = u(a);
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
  findPitch(a, u) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const c = Wm(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * f
    ), [m, k] = Qm(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
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
  _belowMinimumVolume(a) {
    if (this._minVolumeAbsolute === 0) return !1;
    let u = 0;
    for (let c = 0; c < a.length; c++)
      u += a[c] ** 2;
    return Math.sqrt(u / a.length) < this._minVolumeAbsolute;
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
    let u = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && u > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / u, u -= a[c] ** 2 + a[a.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function Ym(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function Jm(i) {
  const a = i * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const Xm = 0.05, Zm = 1.5;
class qm {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, f = Jm(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let m = 0; m < (this.splitter ? h : 1); m++) {
      const k = c.createAnalyser();
      k.fftSize = f, k.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(k, m) : a.source.connect(k), this.analysers.push(k), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * Xm))), this.detector = Gi.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new ep();
  onset = new tp();
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
      minClarity: u = 0.9,
      minRms: c = 0.01,
      stabilityMs: f = 240,
      centsTolerance: h = 35,
      minFreq: m = 70,
      maxFreq: k = 1450,
      onFrame: S,
      onStableNote: O
    } = this.opts, v = this.analysers.map((P, V) => (P.getFloatTimeDomainData(this.buffers[V]), jd(this.buffers[V], this.buffers[V].length - this.shortLength))), E = v.indexOf(Math.max(...v));
    E !== this.channel && v[E] > (v[this.channel] ?? 0) * Zm && (this.channel = E);
    const $ = this.buffers[this.channel], I = v[this.channel], b = np($, $.length - this.shortLength), N = { rms: I, peak: b, channel: this.channel, levels: v }, _ = I < c, L = this.onset.feed(I, a, c);
    if (_ && jd($, 0) < c) {
      this.gate.feed(null, a, f, !0, !1), S?.({ ...N, status: "silent" });
      return;
    }
    const [M, R] = this.detector.findPitch($, this.mic.context.sampleRate);
    if (!isFinite(M) || R < u) {
      this.gate.feed(null, a, f, _, L), S?.({ ...N, status: _ ? "silent" : "unclear", clarity: isFinite(R) ? R : 0 });
      return;
    }
    if (M < m || M > k) {
      this.gate.feed(null, a, f, _, L), S?.({ ...N, status: "out-of-range", frequency: M, clarity: R });
      return;
    }
    const { midi: G, cents: Z } = cm(M);
    if (Math.abs(Z) > h) {
      this.gate.feed(null, a, f, _, L), S?.({ ...N, status: "off-pitch", frequency: M, clarity: R, midi: G, cents: Z });
      return;
    }
    S?.({ ...N, status: "pitch", frequency: M, clarity: R, midi: G, cents: Z });
    const te = this.gate.feed(G, a, f, _, L);
    te !== null && O?.({ midi: G, frequency: M, cents: Z, clarity: R, timestamp: a, heldMs: te.heldMs });
  }
}
class ep {
  constructor(a = 120, u = 80) {
    this.releaseMs = a, this.gapMs = u;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, u, c, f, h) {
    if (f ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: u, seen: u }), this.current.seen = u;
    const m = u - this.current.since;
    return m < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: m });
  }
}
class tp {
  constructor(a = 2, u = 300, c = 150) {
    this.ratio = a, this.windowMs = u, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, u, c) {
    if (u - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: u, rms: a }], !1;
    for (; this.history.length && u - this.history[0].time > this.windowMs; ) this.history.shift();
    const f = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: u, rms: a }), a < c * 1.5 || a < f * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: a }], !0);
  }
}
function jd(i, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let f = u; f < i.length; f++) c += i[f] * i[f];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function np(i, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < i.length; c++) {
    const f = Math.abs(i[c]);
    f > u && (u = f);
  }
  return u;
}
const ri = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let Xr;
function Jd() {
  return (!Xr || Xr.state === "closed") && (Xr = new AudioContext()), Xr;
}
function rp() {
  const i = Xr;
  Xr = void 0, i?.close().catch(() => {
  });
}
const Xd = (i) => i instanceof Error ? i.name : "";
function ip(i) {
  const a = Xd(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class sp {
  constructor(a = (u) => Bm(u, Jd)) {
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
  async start(a, u, c) {
    this.stop();
    const f = this.generation;
    let h, m = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (k) {
      if (!a || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Xd(k))) throw k;
      h = await this.opener(void 0), m = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new qm(h, { ...u });
      const k = () => {
        this.mic === h && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((O) => O.addEventListener("ended", k, { once: !0, signal: S.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && k();
      }, { signal: S.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: m };
    } catch (k) {
      throw this.stop(), k;
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
function Zd(i, a) {
  return i !== "on" ? i : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Sd = (i) => Math.max(0, Math.min(1, (ri(i) + 60) / 60));
function ap(i) {
  const a = [...i].sort((c, f) => c - f), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class qd {
  constructor(a = Jd) {
    this.provide = a;
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
  async play(a) {
    this.stop();
    const u = this.token, c = this.provide();
    if (c.state !== "running" && await c.resume(), u !== this.token) return !1;
    const f = c.createGain();
    f.connect(c.destination), this.master = f;
    const h = Array.from({ length: 12 }, (S, O) => 1 / (O + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((S, O) => {
      const v = c.createOscillator(), E = c.createGain(), $ = c.currentTime + 0.05 + O * 0.8;
      m ? v.setPeriodicWave(m) : v.type = "triangle", v.frequency.value = ld(S), E.gain.setValueAtTime(0, $), E.gain.linearRampToValueAtTime(0.22, $ + 0.012), E.gain.exponentialRampToValueAtTime(1e-3, $ + 0.7), v.connect(E), E.connect(f), v.start($), v.stop($ + 0.72);
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), a.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, f.disconnect(), this.master = void 0, !0);
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
  async loop(a, u, c = 75) {
    if (this.stop(), !a.length) return !1;
    const f = this.token, h = this.provide();
    if (h.state !== "running" && await h.resume(), f !== this.token) return !1;
    const m = h.createGain();
    m.connect(h.destination), this.master = m;
    const k = Array.from({ length: 12 }, (N, _) => 1 / (_ + 1) ** 1.3), S = h.createPeriodicWave?.(new Float32Array([0, ...k.map(() => 0)]), new Float32Array([0, ...k]));
    let O = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (N) => {
      f === this.token && Number.isFinite(N) && (O = 60 / Math.max(40, Math.min(140, N)));
    };
    const v = 1.6;
    let E = h.currentTime + 0.05, $ = 0;
    const I = [], b = () => {
      if (f === this.token) {
        if (E < h.currentTime - 0.02) {
          const N = Math.ceil((h.currentTime - E) / O);
          E += N * O, $ = ($ + N) % a.length, I.length = 0;
        }
        for (; E < h.currentTime + v; ) {
          const N = a[$], _ = $, L = E, M = h.createOscillator(), R = h.createGain();
          S ? M.setPeriodicWave(S) : M.type = "triangle", M.frequency.value = ld(N), R.gain.setValueAtTime(0, L), R.gain.linearRampToValueAtTime(0.22, L + 0.012), R.gain.exponentialRampToValueAtTime(1e-3, L + O * 0.975), M.connect(R), R.connect(m), M.start(L), M.stop(L + O * 0.985), I.push({ at: L, index: _ }), E += O, $ = ($ + 1) % a.length;
        }
        for (; I.length && I[0].at <= h.currentTime + 0.01; ) {
          const N = I.shift();
          u?.(N.index);
        }
      }
    };
    return b(), this.loopTick = setInterval(b, 25), new Promise((N) => {
      this.settle = N;
    });
  }
}
const ef = "musiikin-kartta:skaalapolku:v1", tf = "musiikin-kartta:skaalapolku:tempo:v1", qr = 75, mo = 40, po = 140;
function lp() {
  try {
    const i = localStorage.getItem(tf);
    if (i === null) return qr;
    const a = Number(i);
    return Number.isInteger(a) && a >= mo && a <= po && a % 5 === 0 ? a : qr;
  } catch {
    return qr;
  }
}
const ao = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele 1. position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio 1 harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
];
function wd() {
  try {
    const i = Number(localStorage.getItem(ef));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function op({ onBack: i, onOpenOldExercise: a }) {
  const [u, c] = B.useState(wd), [f, h] = B.useState(wd), [m, k] = B.useState(!1), [S, O] = B.useState(lp), [v, E] = B.useState(null), [$, I] = B.useState(null), [b, N] = B.useState(""), _ = B.useRef(new qd()), L = B.useRef(0);
  function M(q) {
    const ge = Math.max(mo, Math.min(po, q));
    O(ge), _.current.setLoopTempo(ge);
    try {
      localStorage.setItem(tf, String(ge));
    } catch {
    }
  }
  function R() {
    L.current++, _.current.stop(), E(null), I(null);
  }
  B.useEffect(() => {
    const q = () => {
      document.hidden && (L.current++, _.current.stop(), E(null), I(null));
    };
    return document.addEventListener("visibilitychange", q), () => {
      document.removeEventListener("visibilitychange", q), L.current++, _.current.stop();
    };
  }, []);
  const G = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [1])[0].positions[0], Z = G.strings.flatMap((q, ge) => q.map((pe) => ka(ge, pe))).sort((q, ge) => q.midi - ge.midi || ge.string - q.string), te = [...Z, ...Z.slice(1, -1).reverse()], P = $ === null ? null : te[$], V = [69, 72, 69, 67, 64, 67, 69], se = G.start, ae = G.end, Pe = Z.filter((q) => f < 2 || m && Ke(q.midi) === 9).map((q) => ({
    ...q,
    label: f >= 2 ? "A" : Oe(q.midi),
    kind: f < 2 && P?.string === q.string && P.fret === q.fret ? "playing" : Ke(q.midi) === 9 ? "answer" : "shape"
  }));
  async function Q(q) {
    const ge = ++L.current;
    _.current.stop(), I(null), N(""), E(q);
    try {
      q === "phrase" ? await _.current.play(V) : await _.current.loop(te.map((pe) => pe.midi), (pe) => {
        ge === L.current && I(pe);
      }, f === 2 ? S : qr);
    } catch {
      ge === L.current && N("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      ge === L.current && (E(null), I(null));
    }
  }
  function re() {
    R();
    const q = Math.min(4, f + 1);
    if (h(q), k(!1), q > u) {
      c(q);
      try {
        localStorage.setItem(ef, String(q));
      } catch {
      }
    }
  }
  function de(q) {
    q > u || (R(), h(q), k(!1));
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
      R(), i();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positio 1" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ l.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ l.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–8 · 6 kieltä"
    ] }),
    /* @__PURE__ */ l.jsx("nav", { className: "journey-steps", "aria-label": "Position 1 harjoitukset", children: ao.map((q, ge) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: ge === f ? "journey-step current" : "journey-step",
        "aria-current": ge === f ? "step" : void 0,
        disabled: ge > u,
        onClick: () => de(ge),
        children: [
          /* @__PURE__ */ l.jsx("span", { className: "journey-index", children: ge > u ? "🔒" : ge < u ? "✓" : ge + 1 }),
          /* @__PURE__ */ l.jsx("span", { children: q.title })
        ]
      },
      q.title
    )) }),
    /* @__PURE__ */ l.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { id: "lesson-title", children: ao[f].title }),
        /* @__PURE__ */ l.jsx("span", { children: f === 4 ? "Valmis" : `Harjoitus ${f + 1} / 4` })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: ao[f].detail }),
      f < 4 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        f === 0 && /* @__PURE__ */ l.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
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
              disabled: S <= mo,
              onClick: () => M(S - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            S,
            " BPM"
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: S >= po,
              onClick: () => M(S + 5),
              children: "+ 5"
            }
          ),
          S !== qr && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => M(qr),
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
              "aria-pressed": v === "loop",
              onClick: () => v === "loop" ? R() : void Q("loop"),
              children: v === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => v === "phrase" ? R() : void Q("phrase"), children: v === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        f !== 3 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: v === "loop" ? P && f < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Oe(P.midi, !1, !0)} · ${mn[P.string]}-kieli, nauha ${P.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        b && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: b }),
        f >= 1 && f <= 3 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          f >= 2 && /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", "aria-pressed": m, onClick: () => k((q) => !q), children: m ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            f === 2 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => de(1), children: "← Palaa edelliseen opetukseen" }),
            f === 3 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
              Q("phrase");
            }, children: "▶ Mallifraasi" })
          ] }),
          /* @__PURE__ */ l.jsx(Xi, { area: { strings: [0, 1, 2, 3, 4, 5], min: se, max: ae, fixed: "box" }, marks: Pe, disabled: !0, caption: "A-mollipentatoninen, positio 1" }),
          /* @__PURE__ */ l.jsxs("p", { className: "tools-note", children: [
            f < 2 ? "Vihreällä merkitty A on pohjasävel." : m ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        f === 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Xi, { area: { strings: [0, 1, 2, 3, 4, 5], min: se, max: ae, fixed: "box" }, marks: Pe, disabled: !0, caption: "Ensimmäisen position sävelet" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        f === 3 && /* @__PURE__ */ l.jsx(bm, {}),
        /* @__PURE__ */ l.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ l.jsx("p", { children: f === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : f === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : f === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: re, children: f === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ l.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Ensimmäinen positio harjoiteltu" }),
        /* @__PURE__ */ l.jsx("p", { children: "Kertaa asteikko muistista myös myöhemmin. Seuraavat positiot ja niiden yhdistäminen rakennetaan tämän mallin pohjalta." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => de(2), children: "Kertaa muistiharjoitus" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ l.jsx("p", { children: "🔒 Positio 2 · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3" }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Nämä harjoitukset ovat vielä toteuttamatta. Ensimmäinen positio toimii uuden rakenteen testiversiona." }),
      /* @__PURE__ */ l.jsxs("details", { children: [
        /* @__PURE__ */ l.jsx("summary", { children: "Vanha asteikon sävelharjoitus" }),
        /* @__PURE__ */ l.jsx("p", { children: "Halutessasi voit käyttää myös aiempaa otelaudalta vastaamisen harjoitusta. Se avautuu omine asetuksineen." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
          R(), a();
        }, children: "Avaa vanha asteikkoharjoitus" })
      ] })
    ] })
  ] });
}
const Jr = [0, 2, 4, 5, 7, 9, 11], up = 1200, da = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function cp({ onBack: i }) {
  const [a, u] = B.useState(0), [c, f] = B.useState([]), [h, m] = B.useState(!1), [k, S] = B.useState(""), [O, v] = B.useState(0), [E, $] = B.useState(!1), I = a >= Jr.length, b = Jr[Math.min(a, Jr.length - 1)], N = ii(da.strings, da.min, da.max).filter((P) => Ke(P.midi) === b), _ = N.filter((P) => !c.includes(rt(P))), L = _.length === 0 && !I, M = !L && h ? _[0] : void 0;
  B.useEffect(() => {
    if (!E || !L) return;
    const P = window.setTimeout(() => {
      u((V) => V + 1), f([]), m(!1), S("");
    }, up);
    return () => window.clearTimeout(P);
  }, [E, L]);
  const R = [
    ...N.filter((P) => c.includes(rt(P))).map((P) => ({ ...P, kind: "answer", label: Oe(P.midi) })),
    ...M ? [{ ...M, kind: "anchor", label: "?" }] : []
  ];
  function G(P) {
    if (I || L) return;
    const V = rt(P);
    if (Ke(P.midi) !== b) {
      v((Pe) => Pe + 1), S(`Valitsit sävelen ${Oe(P.midi)}. Etsi ${Oe(b)}.`);
      return;
    }
    if (c.includes(V)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const se = [...c, V];
    f(se), m(!1);
    const ae = N.length - se.length;
    S(ae ? `Oikein! ${Oe(b)} löytyi ${mn[P.string]}-kieleltä (${wr(P.fret)}). Vielä ${ae}.` : `Löysit kaikki ${N.length} ${Oe(b)}-säveltä tällä alueella.`);
  }
  function Z() {
    L && (u((P) => P + 1), f([]), m(!1), S(""));
  }
  function te() {
    u(0), f([]), m(!1), S(""), v(0);
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ l.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ l.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !I && /* @__PURE__ */ l.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: E,
          onChange: (P) => $(P.target.checked)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: I ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
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
          Oe(b),
          "-sävelet"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Jr.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Oe(b),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ l.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        N.length
      ] }),
      /* @__PURE__ */ l.jsx(
        Xi,
        {
          area: da,
          marks: R,
          onAnswer: G,
          disabled: L,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "p",
        {
          className: L ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: k
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        !L && /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => m((P) => !P),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        L && (E ? /* @__PURE__ */ l.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === Jr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: Z, children: a === Jr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const dp = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, lo = ["C", "G", "D", "Em"], Ed = ["C", "G", "D", "Em", "Am", "E", "A"], fp = { min: 0, max: 3, fixed: "" };
function Nd(i) {
  const a = [...i];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function hp({ onBack: i }) {
  const [a, u] = B.useState(4), [c, f] = B.useState(() => Nd(lo)), [h, m] = B.useState(0), [k, S] = B.useState(null), [O, v] = B.useState([]), [E, $] = B.useState(0), I = h >= c.length, b = dp[c[Math.min(h, c.length - 1)]], N = a === 4 ? lo : Ed, _ = b.frets.flatMap((P, V) => P === null ? [] : [V]), L = b.frets.flatMap((P, V) => P === null ? [V] : []), M = { ...fp, strings: _ }, R = b.frets.flatMap((P, V) => P === null ? [] : [{
    ...ka(V, P),
    kind: P === 0 ? "anchor" : "shape",
    label: P === 0 ? "○" : "●"
  }]);
  function G(P = a) {
    u(P), f(Nd(P === 4 ? lo : Ed)), m(0), S(null), v([]), $(0);
  }
  function Z(P) {
    k || I || O.includes(P) || (P === b.name ? S(P) : (v((V) => [...V, P]), $((V) => V + 1)));
  }
  function te() {
    k && (m((P) => P + 1), S(null), v([]));
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
            checked: a === 4,
            onChange: () => G(4)
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
            checked: a === 7,
            onChange: () => G(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "journey-lesson", children: I ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        E ? `Vääriä valintoja yhteensä ${E}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: () => G(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ l.jsx(
        Xi,
        {
          area: M,
          marks: R,
          mutedStrings: L,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ l.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: N.map((P) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: k === P ? "right" : O.includes(P) ? "wrong" : "",
          disabled: !!k || O.includes(P),
          "aria-pressed": k === P,
          onClick: () => Z(P),
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
          children: k ? `Oikein! Tämä on ${b.name}-sointu.` : O.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      k && /* @__PURE__ */ l.jsx("div", { className: "action-row", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", onClick: te, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ce = (i, a) => ({ first: i, ...a ? { second: a } : {} }), ei = () => [
  ce("Gm", "F"),
  ce("Gm"),
  ce("B♭", "F"),
  ce("Gm"),
  ce("Gm", "F"),
  ce("Gm"),
  ce("E♭", "F"),
  ce("Gm")
], ti = () => [
  ce("B♭", "F"),
  ce("Gm", "Dm"),
  ce("E♭", "F"),
  ce("Gm", "Dm")
], ni = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], nf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], mp = [
  { id: "intro", title: "Intro", start: 0, bars: [ce("Gm", "F"), ce("Gm"), ce("B♭", "F"), ce("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ei(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ti(), ce("E♭"), { ...ce("E♭"), passingBass: "F" }],
    lyrics: ni,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ce("Gm", "F"), ce("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ei(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ti(), ce("E♭"), ce("F")],
    lyrics: ni
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ce("Gm"), ce("Dm"), ce("F"), ce("C"), ce("Gm"), ce("Dm"), ce("E♭"), ce("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ei(),
    lyrics: nf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ti(), ce("E♭", "F"), ce("Gm")],
    lyrics: ni
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ce("E♭", "F"),
      { ...ce("Gm"), possibleChord: "Dm" },
      ce("E♭", "F"),
      ce("Gm", "F"),
      { ...ce("Gm"), possibleChord: "Dm" },
      ce("Gm", "F"),
      ce("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], pp = [
  { id: "intro", title: "Intro", start: 0, bars: [ce("Gm", "F"), ce("Gm"), ce("B♭", "F"), ce("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ei(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ti(), ce("E♭"), ce("E♭")],
    lyrics: ni
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ei(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ti(), ce("E♭"), ce("F")],
    lyrics: ni
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ce("Gm"), ce("Dm"), ce("F"), ce("C"), ce("Gm"), ce("Dm"), ce("E♭"), ce("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ei(),
    lyrics: nf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ti(), ce("B♭", "F"), ce("Gm"), ce("E♭", "F"), ce("Gm")],
    lyrics: ni
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ce("E♭", "F"), ce("Gm", "F"), ce("E♭", "F"), ce("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], si = {
  acoustic: mp,
  normal: pp
}, vp = "normal", vo = "yksi-sointu-kaksi-askelta", Co = {
  acoustic: vo + "-akustinen",
  normal: vo + "-normaali"
}, rf = (i) => i === vo || Object.values(Co).includes(i ?? "");
function kp(i) {
  const a = Object.entries(Co).find(([, u]) => u === i);
  return a ? a[0] : null;
}
const yp = (i) => Co[i], Cd = (i) => {
  const a = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function _o(i, a = "acoustic") {
  const u = si[a], c = u[i], f = u[i + 1];
  return f ? (f.start - c.start) / c.bars.length : 240 / 69;
}
function sf(i, a = "acoustic") {
  const u = si[a], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let f = 0;
  for (let E = 1; E < u.length && !(c < u[E].start); E++)
    f = E;
  const h = u[f];
  let m = 0;
  for (; m + 1 < h.bars.length && c >= Zi(f, m + 1, a); )
    m++;
  const k = Zi(f, m, a), S = _o(f, a) / 4;
  let O = 1;
  for (; O < 4 && c >= k + O * S; ) O++;
  const v = h.bars[m];
  return {
    section: h,
    sectionIndex: f,
    barIndex: m,
    beat: O,
    chord: v.second && O >= 3 ? v.second : v.first
  };
}
function Zi(i, a, u = "acoustic") {
  return si[u][i].start + _o(i, u) * a;
}
function gp(i) {
  return si[i].flatMap((a, u) => a.bars.flatMap((c, f) => {
    const h = Zi(u, f, i), m = { section: a, sectionIndex: u, barIndex: f, part: "first", chord: c.first, time: h };
    if (!c.second) return [m];
    const k = _o(u, i) / 2;
    return [m, { ...m, part: "second", chord: c.second, time: h + k }];
  }));
}
function xp(i, a = "acoustic", u = !1) {
  const c = si[a], f = sf(i, a), h = f.section.bars[f.barIndex], m = f.beat >= 3 && h.second ? "second" : "first", k = gp(a), S = k.findIndex((I) => I.sectionIndex === f.sectionIndex && I.barIndex === f.barIndex && I.part === m), v = [
    ...k.slice(S + 1).map((I) => ({ ...I, wrapped: !1 })),
    ...u ? k.slice(0, S + 1).map((I) => ({ ...I, wrapped: !0 })) : []
  ].find((I) => I.chord !== f.chord) ?? null;
  let E = null;
  const $ = f.sectionIndex === c.length - 1;
  if (f.barIndex === f.section.bars.length - 1 && (!$ || u)) {
    const I = $ ? 0 : f.sectionIndex + 1, b = c[I], N = b.bars[0].first;
    E = {
      section: b,
      sectionIndex: I,
      firstChord: N,
      wrapped: $,
      continues: N === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: E };
}
function jp(i) {
  const a = i.filter((k) => k.lyrics?.length), u = (k) => 1 + (k.lyrics?.length ?? 0), c = a.reduce((k, S) => k + u(S), 0);
  let f = 0, h = 1 / 0, m = 0;
  for (let k = 0; k <= a.length; k++) {
    const S = Math.abs(c - 2 * m);
    (S < h || S === h && m >= c - m) && (f = k, h = S), k < a.length && (m += u(a[k]));
  }
  return [a.slice(0, f), a.slice(f)];
}
const ko = ["Gm", "F", "B♭", "E♭", "Dm", "C"], af = "musiikin-kartta:kappale-sointuvihjeet:v1", ma = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, _d = {
  showChords: !0,
  level: 0,
  fadeOrder: ma
};
function fa(i, a) {
  return !a.showChords || a.level >= a.fadeOrder[i];
}
function Td(i) {
  if (!i) return { ..._d, fadeOrder: { ...ma } };
  try {
    const a = JSON.parse(i);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, f = { ...ma }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const m = h;
      for (const k of ko)
        [1, 2, 3, 4].includes(m[k]) && (f[k] = m[k]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: f
    };
  } catch {
    return { ..._d, fadeOrder: { ...ma } };
  }
}
function Sp() {
  try {
    return Td(localStorage.getItem(af));
  } catch {
    return Td(null);
  }
}
const wp = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Ep = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Np({ version: i, position: a, loop: u = !1, onSeek: c }) {
  const [f, h] = B.useState(Sp), [m, k] = B.useState(null), [S, O] = B.useState(!1), v = si[i], E = sf(a, i), { section: $, sectionIndex: I, barIndex: b, beat: N, chord: _ } = E, L = N >= 3 && $.bars[b].second ? "second" : "first", M = (Q, re, de) => `${i}:${Q}:${re}:${de}`, R = (Q, re) => M($.id, Q, re), G = R(b, L), Z = fa(_, f), te = Z && m === G, P = (Q, re, de) => !fa(Q, f) || m === R(re, de), V = f.showChords && f.level === 0, se = ko.filter((Q) => fa(Q, f)).length, { nextSection: ae } = xp(a, i, u), Pe = !!ae && fa(ae.firstChord, f);
  return B.useEffect(() => {
    k(null);
  }, [G]), B.useEffect(() => {
    try {
      localStorage.setItem(af, JSON.stringify(f));
    } catch {
    }
  }, [f]), /* @__PURE__ */ l.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ l.jsxs("span", { children: [
        f.showChords && f.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: f.showChords,
            onChange: (Q) => {
              h((re) => ({ ...re, showChords: Q.target.checked })), k(null);
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
            checked: S,
            onChange: (Q) => O(Q.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-hint-level",
            value: f.level,
            disabled: !f.showChords,
            onChange: (Q) => {
              const re = Number(Q.target.value);
              h((de) => ({ ...de, level: re })), k(null);
            },
            children: wp.map((Q) => /* @__PURE__ */ l.jsx("option", { value: Q.value, children: Q.label }, Q.value))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: se === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${se}/6 sointua` })
    ] }),
    f.showChords && f.level < 4 && /* @__PURE__ */ l.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ l.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ l.jsx("div", { className: "song-fade-order", children: ko.map((Q) => /* @__PURE__ */ l.jsxs("label", { children: [
        Q,
        /* @__PURE__ */ l.jsx(
          "select",
          {
            "aria-label": Q + ": piilotusvaihe",
            value: f.fadeOrder[Q],
            onChange: (re) => {
              const de = Number(re.target.value);
              h((q) => ({ ...q, fadeOrder: { ...q.fadeOrder, [Q]: de } })), k(null);
            },
            children: Ep.map((re) => /* @__PURE__ */ l.jsx("option", { value: re.value, children: re.label }, re.value))
          }
        )
      ] }, Q)) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: "song-section-jump",
            value: $.id,
            onChange: (Q) => {
              const re = v.find((de) => de.id === Q.target.value);
              re && c(re.start);
            },
            children: v.map((Q) => /* @__PURE__ */ l.jsxs("option", { value: Q.id, children: [
              Cd(Q.start),
              " · ",
              Q.title
            ] }, Q.id))
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "song-current-chord", children: [
          Z && !te ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ l.jsx("strong", { children: Z && !te ? "?" : _ }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            $.title,
            ", tahti ",
            b + 1,
            ", isku ",
            N,
            "/4"
          ] }),
          Z && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => k(te ? null : G),
              children: te ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        ae && /* @__PURE__ */ l.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ l.jsx("strong", { children: Pe ? "?" : ae.firstChord })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": $.title + ": tahdit", children: $.bars.map((Q, re) => {
      const de = re === b, q = de && (N < 3 || !Q.second), ge = de && N >= 3 && !!Q.second, pe = P(Q.first, re, "first"), Y = Q.second ? P(Q.second, re, "second") : !1, ne = (pe ? Q.first : "sointu piilossa") + (Q.second ? " " + (Y ? Q.second : "sointu piilossa") : "") + (V && Q.passingBass ? " (basson kulku " + Q.passingBass + ")" : "") + (V && Q.possibleChord ? " (" + Q.possibleChord + "?)" : "");
      return /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (de ? " active" : ""),
          "aria-pressed": de,
          "aria-label": "Tahti " + (re + 1) + ": " + ne + ". Siirry kohtaan " + Cd(Zi(I, re, i)),
          onClick: () => c(Zi(I, re, i)),
          children: [
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              re + 1
            ] }),
            /* @__PURE__ */ l.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ l.jsx("strong", { className: q && pe ? "now" : "", children: pe ? Q.first : "?" }),
              Q.second && /* @__PURE__ */ l.jsx("strong", { className: ge && Y ? "now" : "", children: Y ? Q.second : "?" })
            ] }),
            V && Q.passingBass && /* @__PURE__ */ l.jsxs("small", { children: [
              "Basso: (",
              Q.passingBass,
              "), isku 4"
            ] }),
            V && Q.possibleChord && /* @__PURE__ */ l.jsxs("small", { children: [
              "Mahdollinen (",
              Q.possibleChord,
              "?)"
            ] })
          ]
        },
        re
      );
    }) }),
    S ? /* @__PURE__ */ l.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ l.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ l.jsx("div", { className: "song-all-lyrics-grid", children: jp(v).map((Q, re) => /* @__PURE__ */ l.jsx("div", { className: "song-lyrics-column", children: Q.map((de) => /* @__PURE__ */ l.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ l.jsx("h5", { children: de.title }),
        de.lyrics?.map((q, ge) => /* @__PURE__ */ l.jsx("p", { children: q }, ge))
      ] }, de.id)) }, re)) }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : $.lyrics && /* @__PURE__ */ l.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ l.jsxs("h4", { children: [
        $.title,
        ": sanat"
      ] }),
      $.lyrics.map((Q, re) => /* @__PURE__ */ l.jsx("p", { children: Q }, re))
    ] }),
    V && $.note && /* @__PURE__ */ l.jsx("p", { className: "song-chord-note", children: $.note })
  ] });
}
const yo = 7, Cp = { name: "bluesasteikko", base: Ve.SCALES.mp.base, add: [[6, "♭5"]] }, Hi = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ve.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Cp,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ve.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function _p(i) {
  return Ve.scaleNotes(i).map(([a, u]) => Ve.noteName(yo, a, u));
}
const Md = 17;
function Tp({ open: i }) {
  const [a, u] = B.useState("mp"), [c, f] = B.useState(0), h = B.useRef(null), m = Hi.find((v) => v.id === a) ?? Hi[0], k = m.system === "pentatonic" ? 5 : 7, S = c ? Ve.fingeringBoxes(yo, m.scale, m.system, [c], Md) : [], O = Ve.renderBoard(yo, m.scale, Md, {
    automatic: !0,
    boxes: S,
    label: m.title + (c ? ", boksi " + c : "")
  });
  return B.useEffect(() => {
    const v = h.current;
    !v || !i || (c ? Ve.revealPositions(v, ".box-highlight") : v.scrollLeft = 0);
  }, [O, c, i]), /* @__PURE__ */ l.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "song-scale-controls", children: [
      /* @__PURE__ */ l.jsxs("label", { children: [
        "Asteikko",
        /* @__PURE__ */ l.jsx("select", { value: a, onChange: (v) => {
          const E = Hi.find(($) => $.id === v.target.value) ?? Hi[0];
          u(E.id), c > (E.system === "pentatonic" ? 5 : 7) && f(0);
        }, children: Hi.map((v) => /* @__PURE__ */ l.jsx("option", { value: v.id, children: v.title }, v.id)) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { children: [
        m.system === "pentatonic" ? "Pentatoninen boksi" : "Sormitus (3 säveltä kielellä)",
        /* @__PURE__ */ l.jsxs("select", { value: c, onChange: (v) => f(Number(v.target.value)), children: [
          /* @__PURE__ */ l.jsx("option", { value: 0, children: "Koko otelauta" }),
          Array.from({ length: k }, (v, E) => /* @__PURE__ */ l.jsxs("option", { value: E + 1, children: [
            "Boksi ",
            E + 1
          ] }, E + 1))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ l.jsx("strong", { children: m.title }),
      /* @__PURE__ */ l.jsx("span", { children: _p(m.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "song-scale-note", children: m.note }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: h,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: O }
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
      m.scale.add.length > 0 && /* @__PURE__ */ l.jsxs("span", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        m.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] })
  ] });
}
const Mp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, go = 100, lf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function To(i) {
  if (i === null || i.trim() === "") return go;
  const a = Number(i);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : go;
}
function Pp() {
  try {
    return To(localStorage.getItem(lf));
  } catch {
    return go;
  }
}
function Ap(i) {
  try {
    localStorage.setItem(lf, String(To(String(i))));
  } catch {
  }
}
function Pd(i, a, u = !0) {
  return u ? Mp[i] * To(String(a)) / 100 : 0;
}
function Rp(i = () => new Audio()) {
  try {
    const a = i();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const $p = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class Lp {
  constructor(a = $p) {
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
      const u = this.context.createMediaElementSource(a), c = this.context.createGain();
      return u.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch {
      return !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, u) {
    const c = this.gains.get(a);
    c && (c.gain.value = u);
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
let of = null;
function Fp() {
  return kp(new URLSearchParams(location.search).get("kappale")) ?? of ?? vp;
}
function Op(i) {
  of = i;
  const a = new URL(location.href);
  rf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", yp(i)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Ip = {
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
}, Dp = 0.12, Ad = 1e-3;
function Rd(i, a) {
  try {
    i.currentTime = a;
  } catch {
  }
}
function $d(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function zp({ onBack: i }) {
  const a = B.useRef(null), u = B.useRef(null), c = B.useRef(null), f = B.useRef(0), h = B.useRef(null), [m, k] = B.useState(Fp), S = Ip[m], [O, v] = B.useState(!1), [E, $] = B.useState(!0), [I, b] = B.useState(!0), [N, _] = B.useState(!1), [L, M] = B.useState(!1), [R, G] = B.useState(!1), [Z, te] = B.useState(Pp), [P] = B.useState(() => Rp() ? "element" : "webaudio"), V = B.useRef(null), [se, ae] = B.useState(0), [Pe, Q] = B.useState(0), [re, de] = B.useState("");
  function q(j = !1) {
    const z = a.current;
    if (!(!z || z.readyState < 1))
      for (const F of [u.current, c.current]) {
        if (!F || F.readyState < 1) continue;
        const ee = Math.abs(F.currentTime - z.currentTime), fe = z.loop && Number.isFinite(z.duration) && Math.abs(ee - z.duration) < 0.35;
        if (j || !fe && ee > Dp)
          try {
            F.currentTime = z.currentTime;
          } catch {
          }
      }
  }
  function ge() {
    return [
      ["backing", a.current, !0],
      ["guitar", u.current, E],
      ["vocals", c.current, I]
    ];
  }
  function pe(j = Z, z) {
    for (const [F, ee, fe] of ge()) {
      if (!ee) continue;
      const oe = Pd(F, j, z?.[F] ?? fe);
      if (P === "webaudio" && V.current?.routed(ee))
        V.current.setLevel(ee, oe);
      else
        try {
          ee.volume = Pd(F, j);
        } catch {
        }
    }
  }
  function Y(j) {
    te(j), Ap(j), pe(j);
  }
  function ne() {
    f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), v(!1);
  }
  function X(j) {
    if (j !== m) {
      h.current = null, ne();
      for (const z of [a.current, u.current, c.current])
        if (z)
          try {
            z.currentTime = 0;
          } catch {
          }
      ae(0), Q(0), de(""), k(j), Op(j);
    }
  }
  function g(j) {
    const z = a.current;
    if (!z || !Number.isFinite(j)) return;
    const F = Math.max(0, Math.min(j, Number.isFinite(z.duration) ? z.duration : j));
    h.current = F, ae(F), Rd(z, F);
  }
  function D(j) {
    const z = h.current;
    if (z === null || j !== a.current || j.seeking) return;
    const F = Number.isFinite(j.duration) ? Math.min(z, j.duration) : z;
    if (F !== z && (h.current = F, ae(F)), Math.abs(j.currentTime - F) < Ad) return;
    const ee = j.seekable;
    for (let fe = 0; fe < ee.length; fe++)
      if (ee.start(fe) <= F && F <= ee.end(fe)) {
        Rd(j, F);
        return;
      }
  }
  function ye(j) {
    if (j !== a.current) return;
    const z = h.current;
    if (z === null)
      ae(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - z) < Ad) {
      h.current = null, q(!0);
      return;
    }
    j.paused || q();
  }
  async function Ne() {
    const j = a.current, z = u.current, F = c.current;
    if (!j || !z || !F) return;
    if (O) {
      ne();
      return;
    }
    de("");
    const ee = h.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && ee >= j.duration - 0.05 && g(0), D(j), P === "webaudio" && (V.current ??= new Lp(), V.current.unlock()))
      for (const oe of [j, z, F]) V.current.route(oe);
    pe(), z.muted = !E, F.muted = !I, q(!0);
    const fe = ++f.current;
    try {
      const oe = [j.play(), z.play(), F.play()];
      if (await Promise.all(oe), fe !== f.current) return;
      q(), v(!0);
    } catch {
      if (fe !== f.current) return;
      ne(), de("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Te(j) {
    j && q(), u.current && (u.current.muted = !j), $(j), pe(Z, { guitar: j });
  }
  function Ce(j) {
    j && q(), c.current && (c.current.muted = !j), b(j), pe(Z, { vocals: j });
  }
  return B.useEffect(() => {
    const j = () => {
      document.hidden && ne();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), f.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), V.current?.close();
    };
  }, []), B.useEffect(() => {
    pe();
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
          onChange: (j) => X(j.target.value),
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
          S.label,
          " · ",
          S.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          Ne();
        }, children: O ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Pe > 0 ? Pe : 1,
            step: 0.1,
            value: Math.min(se, Pe > 0 ? Pe : 1),
            disabled: Pe <= 0,
            onChange: (j) => g(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ l.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          $d(se),
          " / ",
          $d(Pe)
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: (j) => Te(j.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: I,
              onChange: (j) => Ce(j.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (j) => _(j.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "song-volume", "data-volume-mode": P, children: [
          /* @__PURE__ */ l.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ l.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            Z > 0 && /* @__PURE__ */ l.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            Z > 50 && /* @__PURE__ */ l.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: Z,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": Z + " %",
              onChange: (j) => Y(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ l.jsxs("output", { "aria-hidden": "true", children: [
            Z,
            " %"
          ] })
        ] })
      ] }),
      re && /* @__PURE__ */ l.jsx("p", { className: "backing-error", role: "alert", children: re }),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: a,
          src: S.backing,
          preload: "metadata",
          loop: N,
          onLoadedMetadata: (j) => {
            j.currentTarget === a.current && (Q(j.currentTarget.duration), D(j.currentTarget));
          },
          onProgress: (j) => D(j.currentTarget),
          onCanPlay: (j) => D(j.currentTarget),
          onTimeUpdate: (j) => ye(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== a.current || j.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), v(!1), ae(j.currentTarget.duration));
          },
          onPause: (j) => {
            j.currentTarget === a.current && v(!1);
          },
          onError: () => de(S.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: u,
          src: S.guitar,
          preload: "metadata",
          muted: !E,
          loop: N,
          onLoadedMetadata: () => q(!0),
          onError: () => de(S.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ l.jsx(
        "audio",
        {
          ref: c,
          src: S.vocals,
          preload: "metadata",
          muted: !I,
          loop: N,
          onLoadedMetadata: () => q(!0),
          onError: () => de(S.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-chart-collapse", open: L, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), M((z) => !z);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ l.jsx(Np, { version: m, position: se, loop: N, onSeek: g })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { className: "song-scales-collapse", open: R, children: [
      /* @__PURE__ */ l.jsx("summary", { onClick: (j) => {
        j.preventDefault(), G((z) => !z);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ l.jsx(Tp, { open: R })
    ] })
  ] });
}
const xo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, pa = (i, a = 1) => i.toFixed(a).replace(".", ",").replace("-", "−"), uf = (i) => {
  const a = Math.round(i);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, jo = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function bp(i, a, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (i) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${jo(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function cf({ frame: i, threshold: a }) {
  const u = i?.rms ?? 0, c = ri(u), f = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meter ${f}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${pa(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meter-fill", style: { width: `${Sd(u) * 100}%` } }),
        /* @__PURE__ */ l.jsx("div", { className: "meter-threshold", style: { left: `${Sd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Vp({ mic: i, frame: a, heard: u, s: c, now: f }) {
  const h = Zd(i.phase, a), m = u && f - u.at < 1500 ? u : null, k = h === "pitch" || h === "untuned" || m ? m ? `Kuulen: ${Oe(m.midi, c.flats, !0)} · ${uf(m.cents)} senttiä${m.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : xo[h];
  return /* @__PURE__ */ l.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ l.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: k }),
    i.phase === "on" && /* @__PURE__ */ l.jsx(cf, { frame: a, threshold: c.minRms })
  ] });
}
function Bp({ mic: i, frame: a, heard: u, accepted: c, now: f, s: h, change: m, devices: k, locked: S, calibrating: O, calibration: v, onTest: E, onStop: $, onCalibrate: I }) {
  const b = B.useId(), N = Zd(i.phase, a), _ = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", L = i.phase === "on", M = u && f - u.at < 1500 ? u : null, R = M && (N === "pitch" || N === "untuned"), G = L && (a?.peak ?? 0) >= 0.98, Z = i.phase === "error" ? [] : bp(N, h, i.info, G), te = !h.device || k.some((V) => V.deviceId === h.device), P = (V, se) => m({ ...h, [V]: se });
  return /* @__PURE__ */ l.jsxs("section", { className: "mic-panel", "aria-labelledby": `${b}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ l.jsx("h2", { id: `${b}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ l.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: `mic-state ${N}`, "data-testid": "mic-state", "data-reading": N, children: [
      /* @__PURE__ */ l.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : xo[N],
      N === "pitch" && M ? ` ${Oe(M.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${jo(i.info)}.` : i.phase === "error" ? i.error : xo[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    L && /* @__PURE__ */ l.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ l.jsxs("dd", { "data-testid": "mic-device", children: [
          jo(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ l.jsxs("dd", { children: [
          /* @__PURE__ */ l.jsx(cf, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ l.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            pa(Math.max(-60, ri(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ l.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: M ? Oe(M.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-frequency", children: M ? `${pa(M.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-cents", children: M ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          uf(M.cents),
          " senttiä",
          /* @__PURE__ */ l.jsx("span", { className: `cents ${M.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ l.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, M.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: R ? "" : "stale", children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ l.jsx("dd", { "data-testid": "mic-clarity", children: M ? `${Math.round(M.clarity * 100)} %` : a?.clarity !== void 0 && N === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    L && c && f - c.timestamp < 4e3 && /* @__PURE__ */ l.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Oe(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    Z.length > 0 && L && /* @__PURE__ */ l.jsx("ul", { className: "mic-advice", children: Z.map((V) => /* @__PURE__ */ l.jsx("li", { children: V }, V)) }),
    i.phase === "error" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ l.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
      _ ? /* @__PURE__ */ l.jsx("button", { type: "button", onClick: $, children: "Lopeta testi" }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: S, onClick: E, children: "Testaa mikrofoni" }),
      _ && L && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: O, onClick: I, children: O ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && i.purpose !== "test" && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ l.jsxs("fieldset", { className: "plain", disabled: S, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: `${b}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ l.jsxs("select", { id: `${b}-device`, value: h.device, onChange: (V) => P("device", V.target.value), children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !te && /* @__PURE__ */ l.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              k.map((V, se) => /* @__PURE__ */ l.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${se + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-rms`, children: [
              "Äänikynnys · ",
              pa(ri(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (V) => P("minRms", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (V) => P("clarity", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (V) => P("stability", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ l.jsxs("label", { htmlFor: `${b}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ l.jsx("input", { id: `${b}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (V) => P("cents", Number(V.target.value)) })
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
const Up = (i) => i.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[i.scale]) : Sr[i.mode === "caged" ? "maj" : i.chord].tones, Ld = (i, a) => Up(i).find(([u]) => u === a)?.[1], df = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", Hp = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function Kp(i, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Gp(i, a, u, c, f) {
  return a.choices === "degree" ? `Oikein! ${Wi(i.root, a.interval, a.degree)} on ${a.degree}. aste.` : df(i) ? `Oikein! ${a.degree}. aste on ${Wi(i.root, a.interval, a.degree)}.` : i.mode === "interval" ? `Oikein! ${Oe(a.reference, i.flats, !0)} → ${a.name} on ${Qi[a.interval]} ${Hp(a)}.` : i.mode === "notes" ? u === "board" && f ? `Oikein! ${Oe(f.midi, i.flats)} on ${Id[f.string]}: ${wr(f.fret)}.` : `Oikein! Soitit sävelen ${Oe(c, i.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Wp(i, a, u, c, f) {
  if (u === "note") return `Ei ${Oe(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Ld(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!f) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(f.midi) === Ke(a.midi);
  if (i.mode === "notes")
    return f.string !== a.position.string ? `Tuo on ${mn[f.string]}-kieli. Etsi sävel ${Eo[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Oe(f.midi, i.flats)}. Etsi ${a.name}.`;
  if (df(i)) {
    const m = Ke(f.midi - i.root), k = Ld(i, m), S = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return k ? h && a.check === "pitch" && f.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Wi(i.root, m, k)} eli ${k}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Oe(f.midi, i.flats)}, joka ei kuulu ${S}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Oe(f.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Qp(i, a, u) {
  const c = Oe(u, i.flats, !0);
  return Ke(u) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function ff(i, a = !1) {
  const u = i.split(":"), c = (m) => Number(u[m]), f = (...m) => m.every((k) => Number.isInteger(c(k))), h = (m, k) => mn[m] ? `${mn[m]}-kieli, ${wr(k)}` : null;
  switch (u[0]) {
    case "notes":
      return f(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return f(1) ? `Kuultu sävel ${Oe(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && f(1) ? `Kuule ja toista: ${Oe(c(1), a, !0)}` : f(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return f(1) && Qi[c(1)] ? `${Qi[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const m = u[2];
      if (!f(1, 3) || !Sr[m]) return null;
      const k = Sr[m].tones.find(([S]) => S === c(3))?.[1];
      return k ? `${Dd(c(1), m)}: ${k}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const m = Ve.SCALES[u[2]];
      if (!f(1) || !m) return null;
      const k = `${ar(c(1))}-${m.name}`;
      if (u.length === 5 && f(3)) {
        const S = Ve.scaleNotes(m).find(([O]) => O === c(3))?.[1];
        return S ? `${k}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${k}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!f(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const m = `${ar(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && f(3)) {
        const k = Sr.maj.tones.find(([S]) => S === c(3))?.[1];
        return k ? `${m}: ${k}. aste` : null;
      }
      return f(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Fd(i) {
  return Object.entries(i).flatMap(([a, u]) => {
    const [c, f, h, ...m] = a.split(":");
    return !m.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: f, guided: h === "guided", item: m.join(":"), mode: m[0], stat: u }];
  });
}
const So = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", Yp = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Jp(i) {
  const a = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${Zr(i.mode)}${i.hints ? ` · ${ya[i.hints].title}` : ""} · ${a} · keskimäärin ${So(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function Xp({ store: i, s: a, locked: u, changed: c }) {
  const [f, h] = B.useState(""), m = B.useRef(null), { recent: k, sessions: S, stats: O } = i.data, v = Er(a), E = bd(a), $ = [...new Set(k.map((M) => M.mode))].map((M) => {
    const R = k.filter((G) => G.mode === M);
    return { mode: M, ...fo(R), last: Math.max(...R.map((G) => G.at)) };
  }).sort((M, R) => R.last - M.last), I = Fd(O).filter((M) => !M.guided && M.mode === a.mode && M.input === v && M.check === E && M.stat.attempts >= 3).map((M) => ({ ...M, score: No(M.stat), text: ff(M.item, a.flats) })).filter((M) => M.text && M.score < 0.8).sort((M, R) => M.score - R.score).slice(0, 5), b = Fd(O).reduce((M, R) => M + R.stat.attempts, 0);
  function N() {
    const M = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), R = URL.createObjectURL(M), G = document.createElement("a");
    G.href = R, G.download = "musiikin-kartta-harjoittelu.json", G.click(), setTimeout(() => URL.revokeObjectURL(R), 1e3);
  }
  async function _(M) {
    if (M)
      try {
        const R = await M.text();
        if (b && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(R), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        m.current && (m.current.value = "");
      }
  }
  function L() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ l.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ l.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    b === 0 ? /* @__PURE__ */ l.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        b,
        " vastattua kysymystä · ",
        S.length,
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
        /* @__PURE__ */ l.jsx("tbody", { children: $.map((M) => /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "row", children: Zr(M.mode) }),
          /* @__PURE__ */ l.jsx("td", { children: M.count }),
          /* @__PURE__ */ l.jsx("td", { children: M.solo ? `${M.soloFirst}/${M.solo} · ${Math.round(M.soloFirst / M.solo * 100)} %` : "–" }),
          /* @__PURE__ */ l.jsx("td", { children: M.guided }),
          /* @__PURE__ */ l.jsx("td", { children: So(M.ms / M.count) })
        ] }, M.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ l.jsx("h3", { children: "Seuraavaksi" }),
    I.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        Zr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ l.jsx("ul", { children: I.map((M) => /* @__PURE__ */ l.jsxs("li", { children: [
        M.text,
        " · viime aikoina ",
        Math.round(Yi(M.stat) * 100),
        " % heti oikein · ",
        So(Ji(M.stat))
      ] }, M.key)) })
    ] }) : /* @__PURE__ */ l.jsx("p", { children: b ? `Harjoituksessa ${Zr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Yp[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ l.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ l.jsx(Em, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: O, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ l.jsx("ul", { children: S.slice(-10).reverse().map((M) => /* @__PURE__ */ l.jsx("li", { children: Jp(M) }, M.id)) }) : /* @__PURE__ */ l.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ l.jsxs("details", { children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ l.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", onClick: N, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u, onClick: () => m.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ l.jsx("input", { ref: m, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (M) => {
          _(M.target.files?.[0]);
        } }),
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: u || !b, onClick: L, children: "Poista harjoitustulokset" })
      ] }),
      f && /* @__PURE__ */ l.jsx("p", { role: "status", children: f })
    ] }),
    i.warning && /* @__PURE__ */ l.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function Zp() {
  try {
    return new hd(localStorage);
  } catch {
    return new hd();
  }
}
const Od = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), qp = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", ev = [0, 2, 4, 5, 7, 9, 11];
function tv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function nv() {
  const [i] = B.useState(Zp), [a, u] = B.useState(() => pm(location.search, i.data.settings)), [, c] = B.useReducer((A) => A + 1, 0), f = B.useRef(null), h = B.useRef(new sp()), m = B.useRef(new qd()), k = B.useRef(0), S = B.useRef(), O = B.useRef(), v = B.useRef(null), E = B.useRef(0), $ = B.useRef(null), I = B.useRef(a);
  I.current = a;
  const [b, N] = B.useState({ phase: "off", purpose: "none" }), _ = B.useRef(b), L = (A) => {
    _.current = A, N(A);
  }, [M, R] = B.useState(null), [G, Z] = B.useState(null), [te, P] = B.useState(null), [V, se] = B.useState(0), [ae, Pe] = B.useState([]), [Q, re] = B.useState(!1), [de, q] = B.useState(!1), [ge, pe] = B.useState(""), [Y, ne] = B.useState("info"), [X, g] = B.useState(""), [D, ye] = B.useState(0), [Ne, Te] = B.useState([]), [Ce, j] = B.useState([]), [z, F] = B.useState(null), [ee, fe] = B.useState(!1), [oe, ve] = B.useState(""), [ke, Me] = B.useState(""), [Ee, $e] = B.useState(() => {
    const A = new URLSearchParams(location.search);
    return A.has("tila") || A.has("vanha") ? "legacy" : rf(A.get("kappale")) ? "songs" : null;
  }), Qe = () => {
    Um().then(Pe).catch(() => {
    });
  };
  function Be() {
    clearTimeout(O.current), v.current = null, fe(!1);
  }
  function We() {
    R(null), Z(null), P(null);
  }
  function Ue() {
    h.current.stop(), Be(), L({ phase: "off", purpose: "none" }), We();
  }
  async function yt(A) {
    if (h.current.active && _.current.phase === "on")
      return Be(), L({ ..._.current, purpose: A }), h.current.rearm(), !0;
    L({ phase: "requesting", purpose: A }), We();
    try {
      const J = await h.current.start(I.current.device, {
        ...Od(I.current),
        onFrame: (Ie) => _t.current.frame(Ie),
        onStableNote: (Ie) => _t.current.stable(Ie)
      }, () => _t.current.lost());
      return J ? (L({ phase: "on", purpose: A, info: J }), Qe(), !0) : !1;
    } catch (J) {
      return L({ phase: "error", purpose: "none", error: ip(J) }), !1;
    }
  }
  function Ye(A) {
    v.current?.push(A.rms);
    const J = performance.now();
    J - E.current < 66 || (E.current = J, R(A), se(J), A.midi !== void 0 && A.frequency !== void 0 && Z({ midi: A.midi, frequency: A.frequency, cents: A.cents ?? 0, clarity: A.clarity ?? 0, tuned: A.status === "pitch", at: J }));
  }
  function ze(A) {
    _.current.purpose === "test" ? P(A) : _.current.purpose === "round" && He(A.midi, "mic", void 0, A.heldMs);
  }
  function tt() {
    const A = _.current.purpose === "round";
    Be(), We(), L({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const J = f.current;
    A && J && ["active", "feedback", "paused"].includes(J.phase) && (Tt(), q(!1), J.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const _t = B.useRef({ frame: Ye, stable: ze, lost: tt });
  _t.current = { frame: Ye, stable: ze, lost: tt };
  function bt(A) {
    const J = va(A), Ie = J.device !== I.current.device;
    I.current = J, u(J), i.settings(J), g(""), h.current.active && (Ie && _.current.purpose === "test" ? (Ue(), yt("test")) : h.current.setOptions(Od(J)));
  }
  function Vt(A) {
    Me(""), f.current = null, $e(A);
  }
  function sn() {
    bt({
      ...I.current,
      mode: "scale",
      root: 9,
      scale: "mp",
      box: 1,
      order: "up",
      activity: "play",
      hints: "fade",
      input: "board",
      rounds: 10
    }), f.current = null, Me(""), $e("legacy");
  }
  function Qt() {
    ve(""), yt("test");
  }
  function Yt() {
    _.current.phase !== "on" || _.current.purpose !== "test" || (Be(), v.current = [], fe(!0), ve("Mitataan taustakohinaa kolme sekuntia. Älä soita."), O.current = setTimeout(() => {
      const A = v.current ?? [];
      if (Be(), A.length < 10) {
        ve("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: J, noise: Ie, loud: $t } = ap(A);
      bt({ ...I.current, minRms: J }), ve(`Taustakohina on ${Math.round(ri(Ie))} dB ja äänikynnys nyt ${Math.round(ri(J))} dB. ${$t ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Tt() {
    k.current++, clearTimeout(S.current), m.current.stop();
  }
  function xe(A, J) {
    if (!A.results.length) return;
    const Ie = fo(A.results);
    i.session({
      id: A.id,
      mode: A.settings.mode,
      count: Ie.count,
      first: Ie.first,
      ms: Ie.ms,
      solo: Ie.solo,
      soloFirst: Ie.soloFirst,
      hints: A.settings.hints,
      at: Date.now(),
      complete: J
    });
  }
  async function Bt(A) {
    if (!A.question?.sound.length || A.phase !== "active") return;
    Tt();
    const J = k.current;
    A.pause(), h.current.pause(), q(!0), ne("info"), pe("Kuuntele…"), c();
    try {
      await m.current.play(A.question.sound);
    } catch {
      J === k.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    J !== k.current || f.current !== A || (A.resume(), h.current.resume(), q(!1), pe(""), c());
  }
  async function we(A) {
    Te([]), j([]), F(null), g(""), ye(A.hintLevel), h.current.rearm(), ne("info"), pe(""), c(), A.question?.sound.length && await Bt(A);
  }
  async function Ae() {
    const A = I.current, J = uo(A);
    if (J) {
      g(J);
      return;
    }
    Tt();
    const Ie = k.current;
    if (g(""), ve(""), Me(""), ca(A)) {
      re(!0);
      const ut = await yt("round");
      if (Ie !== k.current) return;
      if (re(!1), !ut) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else _.current.phase !== "off" && Ue();
    const $t = new Lm(A, () => i.data.stats, (ut) => i.record(ut));
    try {
      $t.start();
    } catch (ut) {
      _.current.purpose === "round" && Ue(), g(ut instanceof Error ? ut.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    f.current = $t, requestAnimationFrame(() => $.current?.scrollIntoView({ block: "start", behavior: "auto" })), await we($t);
  }
  function Re() {
    Tt(), re(!1), Ue();
  }
  function He(A, J, Ie, $t = 0) {
    const ut = f.current, _n = ut?.question;
    if (!ut || !_n || ut.phase !== "active") return;
    const ui = ut.answer(A, J, Ie, $t);
    if (ui !== "ignored") {
      if (ui === "candidate")
        F(A), ne("bad"), pe(Qp(ut.settings, _n, A));
      else if (ui === "wrong")
        Ie ? Te((zn) => [...zn, Ie]) : j((zn) => [...zn, A]), ne("bad"), pe(Wp(ut.settings, _n, J, A, Ie));
      else if (F(null), ne("good"), pe(Gp(ut.settings, _n, J, A, Ie)), xe(ut, !1), ut.settings.advance) {
        const zn = k.current;
        S.current = setTimeout(() => {
          zn === k.current && it();
        }, J === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function it() {
    const A = f.current;
    if (!(!A || A.phase !== "feedback")) {
      Tt();
      try {
        A.next();
      } catch (J) {
        Rt(!1), g(J instanceof Error ? J.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (A.phase === "done") {
        Rt(!0);
        return;
      }
      await we(A);
    }
  }
  function Rt(A = !1) {
    Tt(), q(!1), re(!1), (_.current.purpose === "round" || _.current.phase === "requesting") && Ue();
    const J = f.current;
    J && (J.stop(), xe(J, A)), F(null), ye(0), Te([]), j([]), g(""), Me(A ? "complete" : "stopped"), ne("info"), pe(""), c();
  }
  function mt() {
    const A = f.current;
    if (!A || !["active", "feedback", "paused"].includes(A.phase)) return;
    Tt(), q(!1), A.pause();
    const J = _.current.purpose === "round";
    J && Ue(), ne("info"), pe(`Harjoitus on tauolla.${J ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Jt() {
    const A = f.current;
    if (!A || A.phase !== "paused" || de) return;
    Tt();
    const J = k.current;
    if (g(""), ca(A.settings)) {
      re(!0);
      const Ie = await yt("round");
      if (J !== k.current) return;
      if (re(!1), !Ie) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    A.resume(), ne("info"), pe(""), c(), A.phase === "active" && (h.current.rearm(), A.question?.sound.length && await Bt(A));
  }
  function wn(A) {
    const J = f.current;
    !J || J.phase !== "active" || (J.useHint(A), ye(A), c());
  }
  const pn = B.useRef({ hidden: () => {
  }, restored: () => {
  } });
  pn.current = {
    hidden: () => {
      const A = f.current;
      A && ["active", "feedback"].includes(A.phase) || de ? mt() : _.current.phase !== "off" && _.current.phase !== "error" && (Tt(), re(!1), Ue());
    },
    restored: () => {
      re(!1), q(!1), L({ phase: "off", purpose: "none" }), We(), c();
    }
  }, B.useEffect(() => {
    Qe();
    const A = () => Qe();
    navigator.mediaDevices?.addEventListener?.("devicechange", A);
    const J = () => {
      k.current++, clearTimeout(S.current), clearTimeout(O.current), h.current.stop(), m.current.stop(), rp(), f.current?.pause();
    }, Ie = () => {
      document.hidden && pn.current.hidden();
    }, $t = (ut) => {
      ut.persisted && pn.current.restored();
    };
    return document.addEventListener("visibilitychange", Ie), window.addEventListener("pagehide", J), window.addEventListener("pageshow", $t), () => {
      J(), navigator.mediaDevices?.removeEventListener?.("devicechange", A), document.removeEventListener("visibilitychange", Ie), window.removeEventListener("pagehide", J), window.removeEventListener("pageshow", $t);
    };
  }, []);
  const vn = B.useRef(null), es = `${f.current?.id}:${f.current?.index}:${f.current?.phase}:${de}`;
  B.useEffect(() => {
    const A = f.current, J = $.current, Ie = document.activeElement;
    !A || !J || !(Ie === document.body || J.contains(Ie)) || (A.phase === "feedback" ? vn.current?.focus({ preventScroll: !0 }) : A.phase === "active" && !de && (Ie === document.body || Ie === vn.current) && J.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [es]);
  const Fe = f.current, Ze = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Je = Ze ? Fe.settings : a, ot = Ze ? Fe.question : void 0, Ut = !!ot && !!Fe?.answered, Xt = Ze && Fe.phase === "paused" && !de && !Ut, Cr = Ze && Fe.phase === "active" && !de, En = Ze ? null : uo(a), In = Ze || Q, lr = Nr(Je), ai = Cm(Je), or = ot && !Ut ? D : 0, li = ot ? $m(Je, ot, Ut ? 2 : or) : { marks: [], text: "" }, ts = [...new Map([...li.marks, ...Ut ? [] : Ne.map((A) => ({ ...A, label: Oe(A.midi, Je.flats), kind: "wrong" }))].map((A) => [rt(A), A])).values()], Nn = Ze && ca(Je), ns = !!ot && !Xt && (ot.choices === "position" || ts.length > 0), gt = Fe ? fo(Fe.results) : null, xa = !Fe || Je.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", oi = Fe && !Ze ? Fe.results.filter((A) => A.errors > 0 || A.hint) : [], [rs, is] = tv(Je), Cn = /* @__PURE__ */ l.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ l.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ l.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ l.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Dn = i.data.notice === "hints-default" && /* @__PURE__ */ l.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !Ze && Ee === null ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(Om, { onSelect: Vt })
  ] }) : !Ze && Ee === "scales" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(op, { onBack: () => $e(null), onOpenOldExercise: sn })
  ] }) : !Ze && Ee === "ear" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(cp, { onBack: () => $e(null) })
  ] }) : !Ze && Ee === "chords" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(hp, { onBack: () => $e(null) })
  ] }) : !Ze && Ee === "songs" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx(zp, { onBack: () => $e(null) })
  ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    Cn,
    Dn,
    /* @__PURE__ */ l.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ l.jsxs("a", { href: rs, children: [
      "Lue tämän harjoituksen teoria: ",
      is,
      " →"
    ] }) }),
    Ee !== "legacy" && /* @__PURE__ */ l.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "back-link", onClick: () => {
        Ze && Rt(), $e(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ l.jsx("h2", { children: Ee === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ l.jsx("p", { children: Ee === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    Ze ? /* @__PURE__ */ l.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ l.jsx("strong", { children: Zr(Je.mode) }),
      " · ",
      vd(Je)
    ] }) : Ee === "legacy" ? /* @__PURE__ */ l.jsx(kd, { s: a, change: bt, locked: In, problem: En }) : /* @__PURE__ */ l.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ l.jsx(kd, { s: a, change: bt, locked: In, problem: En })
    ] }),
    !Ze && (Ee === "legacy" || ca(a)) && /* @__PURE__ */ l.jsx(
      Bp,
      {
        mic: b,
        frame: M,
        heard: G,
        accepted: te,
        now: V,
        s: a,
        change: bt,
        devices: ae,
        locked: Q,
        calibrating: ee,
        calibration: oe,
        onTest: Qt,
        onStop: Ue,
        onCalibrate: Yt
      }
    ),
    /* @__PURE__ */ l.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: $, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ l.jsx("h2", { id: "session-title", children: Zr(Je.mode) }),
        /* @__PURE__ */ l.jsx("span", { "data-testid": "round-status", children: Ze ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${ya[Je.hints].title}${xa}${Fe.phase === "paused" && !de ? " · tauolla" : ""}` : ke === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !Ze && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        Fe && Fe.results.length > 0 && gt ? /* @__PURE__ */ l.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ l.jsx("h3", { children: ke === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ l.jsxs("dl", { children: [
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-solo", children: gt.solo ? `${gt.soloFirst} / ${gt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ l.jsx("dd", { "data-testid": "summary-guided", children: gt.guided })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ l.jsx("dd", { children: qp(gt.ms / gt.count) })
            ] })
          ] }),
          gt.solo === 0 && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          oi.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ l.jsx("ul", { children: [...new Set(oi.map((A) => ff(A.item, a.flats)).filter(Boolean))].slice(0, 6).map((A) => /* @__PURE__ */ l.jsx("li", { children: A }, A)) })
          ] })
        ] }) : /* @__PURE__ */ l.jsx("p", { className: "question idle", children: vd(a) }),
        /* @__PURE__ */ l.jsx("div", { className: "action-row", children: Q ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: !!En, onClick: () => {
          Ae();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      Ze && ot && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: Xt ? "Harjoitus on tauolla." : ot.prompt }),
        /* @__PURE__ */ l.jsx("p", { className: "how", "data-testid": "instruction", children: Xt ? "Kysymys palaa näkyviin, kun jatkat." : de ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Kp(Je, ot) }),
        Fe.hintLevel > 0 && !Ut && /* @__PURE__ */ l.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Je.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Nn && /* @__PURE__ */ l.jsx(Vp, { mic: b, frame: M, heard: G, s: Je, now: V }),
        ot.choices === "note" && !Xt && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Je.accidentals ? Array.from({ length: 12 }, (A, J) => J) : ev).map((A) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ce.includes(A) ? "wrong" : Ut && A === ot.midi % 12 ? "right" : "", disabled: !Cr || Ce.includes(A), onClick: () => He(A, "note"), children: Oe(A, Je.flats) }, A)) }),
        ot.choices === "degree" && !Xt && /* @__PURE__ */ l.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Je.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[Je.scale]) : Sr[Je.chord].tones).map(([A, J]) => /* @__PURE__ */ l.jsx("button", { type: "button", className: Ce.includes(A) ? "wrong" : Ut && A === ot.interval ? "right" : "", disabled: !Cr || Ce.includes(A), onClick: () => He(A, "degree"), children: J }, A)) }),
        ns && /* @__PURE__ */ l.jsx(
          Xi,
          {
            area: ai,
            marks: ts,
            disabled: !Cr || ot.choices !== "position" || Je.input === "mic",
            onAnswer: (A) => He(A.midi, "board", A),
            caption: lr.fixed === "shape" ? `${Je.shape}-muodon alue` : lr.fixed === "box" ? `Boksin ${Je.box} alue` : "Otelauta"
          }
        ),
        !Ut && !Xt && or > 0 && li.text && /* @__PURE__ */ l.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: li.text }),
        /* @__PURE__ */ l.jsx("p", { className: `feedback ${Y}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ge }),
        z !== null && Fe.phase === "active" && /* @__PURE__ */ l.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), F(null), pe("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ l.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        X && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: X }),
        /* @__PURE__ */ l.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", ref: vn, onClick: () => {
            it();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Ut && !de && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            or === 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => wn(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            or === 1 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => wn(2), children: "Näytä vastaus" }),
            or > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => ye(0), children: "Piilota vihje" })
          ] }),
          ot.sound.length > 0 && /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !Cr, onClick: () => {
            Bt(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !de ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "primary", disabled: Q, onClick: () => {
            Jt();
          }, children: Q ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ l.jsx("button", { type: "button", onClick: mt, children: "Tauko" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => Rt(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Je.advance && /* @__PURE__ */ l.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ l.jsx("p", { className: "tools-note", "data-testid": "tally", children: gt?.count ? `Vastattu ${gt.count} · itsenäisesti heti oikein ${gt.soloFirst}/${gt.solo}${gt.guided ? ` · vihjeen kanssa ${gt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !Ze && X && /* @__PURE__ */ l.jsx("p", { className: "error", role: "alert", children: X })
    ] }),
    !Ze && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ l.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ve.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ l.jsx("a", { href: vm(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ l.jsx(Xp, { store: i, s: a, locked: In, changed: () => {
        const A = va(i.data.settings);
        I.current = A, u(A), c();
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
lm.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ l.jsx(nv, {}));
//# sourceMappingURL=app.js.map
