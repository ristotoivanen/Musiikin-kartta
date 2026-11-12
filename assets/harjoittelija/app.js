function mm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var io = { exports: {} }, Ui = {}, so = { exports: {} }, Oe = {};
var ud;
function pm() {
  if (ud) return Oe;
  ud = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function R(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, w = {};
  function N(g, b, ke) {
    this.props = g, this.context = b, this.refs = w, this.updater = ke || O;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(g, b) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, b, "setState");
  }, N.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = N.prototype;
  function E(g, b, ke) {
    this.props = g, this.context = b, this.refs = w, this.updater = ke || O;
  }
  var M = E.prototype = new z();
  M.constructor = E, D(M, N.prototype), M.isPureReactComponent = !0;
  var K = Array.isArray, X = Object.prototype.hasOwnProperty, q = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(g, b, ke) {
    var we, W = {}, se = null, S = null;
    if (b != null) for (we in b.ref !== void 0 && (S = b.ref), b.key !== void 0 && (se = "" + b.key), b) X.call(b, we) && !T.hasOwnProperty(we) && (W[we] = b[we]);
    var B = arguments.length - 2;
    if (B === 1) W.children = ke;
    else if (1 < B) {
      for (var I = Array(B), re = 0; re < B; re++) I[re] = arguments[re + 2];
      W.children = I;
    }
    if (g && g.defaultProps) for (we in B = g.defaultProps, B) W[we] === void 0 && (W[we] = B[we]);
    return { $$typeof: i, type: g, key: se, ref: S, props: W, _owner: q.current };
  }
  function ee(g, b) {
    return { $$typeof: i, type: g.type, key: b, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function le(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Ce(g) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ke) {
      return b[ke];
    });
  }
  var ne = /\/+/g;
  function oe(g, b) {
    return typeof g == "object" && g !== null && g.key != null ? Ce("" + g.key) : b.toString(36);
  }
  function Me(g, b, ke, we, W) {
    var se = typeof g;
    (se === "undefined" || se === "boolean") && (g = null);
    var S = !1;
    if (g === null) S = !0;
    else switch (se) {
      case "string":
      case "number":
        S = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case i:
          case a:
            S = !0;
        }
    }
    if (S) return S = g, W = W(S), g = we === "" ? "." + oe(S, 0) : we, K(W) ? (ke = "", g != null && (ke = g.replace(ne, "$&/") + "/"), Me(W, b, ke, "", function(re) {
      return re;
    })) : W != null && (le(W) && (W = ee(W, ke + (!W.key || S && S.key === W.key ? "" : ("" + W.key).replace(ne, "$&/") + "/") + g)), b.push(W)), 1;
    if (S = 0, we = we === "" ? "." : we + ":", K(g)) for (var B = 0; B < g.length; B++) {
      se = g[B];
      var I = we + oe(se, B);
      S += Me(se, b, ke, I, W);
    }
    else if (I = R(g), typeof I == "function") for (g = I.call(g), B = 0; !(se = g.next()).done; ) se = se.value, I = we + oe(se, B++), S += Me(se, b, ke, I, W);
    else if (se === "object") throw b = String(g), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function U(g, b, ke) {
    if (g == null) return g;
    var we = [], W = 0;
    return Me(g, we, "", "", function(se) {
      return b.call(ke, se, W++);
    }), we;
  }
  function ue(g) {
    if (g._status === -1) {
      var b = g._result;
      b = b(), b.then(function(ke) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ke);
      }, function(ke) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ke);
      }), g._status === -1 && (g._status = 0, g._result = b);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ie = { current: null }, Y = { transition: null }, te = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: Y, ReactCurrentOwner: q };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: U, forEach: function(g, b, ke) {
    U(g, function() {
      b.apply(this, arguments);
    }, ke);
  }, count: function(g) {
    var b = 0;
    return U(g, function() {
      b++;
    }), b;
  }, toArray: function(g) {
    return U(g, function(b) {
      return b;
    }) || [];
  }, only: function(g) {
    if (!le(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Oe.Component = N, Oe.Fragment = u, Oe.Profiler = d, Oe.PureComponent = E, Oe.StrictMode = c, Oe.Suspense = j, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, Oe.act = Z, Oe.cloneElement = function(g, b, ke) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var we = D({}, g.props), W = g.key, se = g.ref, S = g._owner;
    if (b != null) {
      if (b.ref !== void 0 && (se = b.ref, S = q.current), b.key !== void 0 && (W = "" + b.key), g.type && g.type.defaultProps) var B = g.type.defaultProps;
      for (I in b) X.call(b, I) && !T.hasOwnProperty(I) && (we[I] = b[I] === void 0 && B !== void 0 ? B[I] : b[I]);
    }
    var I = arguments.length - 2;
    if (I === 1) we.children = ke;
    else if (1 < I) {
      B = Array(I);
      for (var re = 0; re < I; re++) B[re] = arguments[re + 2];
      we.children = B;
    }
    return { $$typeof: i, type: g.type, key: W, ref: se, props: we, _owner: S };
  }, Oe.createContext = function(g) {
    return g = { $$typeof: p, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, Oe.createElement = V, Oe.createFactory = function(g) {
    var b = V.bind(null, g);
    return b.type = g, b;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(g) {
    return { $$typeof: m, render: g };
  }, Oe.isValidElement = le, Oe.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: ue };
  }, Oe.memo = function(g, b) {
    return { $$typeof: $, type: g, compare: b === void 0 ? null : b };
  }, Oe.startTransition = function(g) {
    var b = Y.transition;
    Y.transition = {};
    try {
      g();
    } finally {
      Y.transition = b;
    }
  }, Oe.unstable_act = Z, Oe.useCallback = function(g, b) {
    return ie.current.useCallback(g, b);
  }, Oe.useContext = function(g) {
    return ie.current.useContext(g);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(g) {
    return ie.current.useDeferredValue(g);
  }, Oe.useEffect = function(g, b) {
    return ie.current.useEffect(g, b);
  }, Oe.useId = function() {
    return ie.current.useId();
  }, Oe.useImperativeHandle = function(g, b, ke) {
    return ie.current.useImperativeHandle(g, b, ke);
  }, Oe.useInsertionEffect = function(g, b) {
    return ie.current.useInsertionEffect(g, b);
  }, Oe.useLayoutEffect = function(g, b) {
    return ie.current.useLayoutEffect(g, b);
  }, Oe.useMemo = function(g, b) {
    return ie.current.useMemo(g, b);
  }, Oe.useReducer = function(g, b, ke) {
    return ie.current.useReducer(g, b, ke);
  }, Oe.useRef = function(g) {
    return ie.current.useRef(g);
  }, Oe.useState = function(g) {
    return ie.current.useState(g);
  }, Oe.useSyncExternalStore = function(g, b, ke) {
    return ie.current.useSyncExternalStore(g, b, ke);
  }, Oe.useTransition = function() {
    return ie.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var cd;
function Ro() {
  return cd || (cd = 1, so.exports = pm()), so.exports;
}
var dd;
function vm() {
  if (dd) return Ui;
  dd = 1;
  var i = Ro(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, j, $) {
    var k, C = {}, R = null, O = null;
    $ !== void 0 && (R = "" + $), j.key !== void 0 && (R = "" + j.key), j.ref !== void 0 && (O = j.ref);
    for (k in j) c.call(j, k) && !h.hasOwnProperty(k) && (C[k] = j[k]);
    if (m && m.defaultProps) for (k in j = m.defaultProps, j) C[k] === void 0 && (C[k] = j[k]);
    return { $$typeof: a, type: m, key: R, ref: O, props: C, _owner: d.current };
  }
  return Ui.Fragment = u, Ui.jsx = p, Ui.jsxs = p, Ui;
}
var fd;
function km() {
  return fd || (fd = 1, io.exports = vm()), io.exports;
}
var s = km(), F = Ro(), ca = {}, ao = { exports: {} }, Dt = {}, lo = { exports: {} }, oo = {};
var hd;
function ym() {
  return hd || (hd = 1, (function(i) {
    function a(Y, te) {
      var Z = Y.length;
      Y.push(te);
      e: for (; 0 < Z; ) {
        var g = Z - 1 >>> 1, b = Y[g];
        if (0 < d(b, te)) Y[g] = te, Y[Z] = b, Z = g;
        else break e;
      }
    }
    function u(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function c(Y) {
      if (Y.length === 0) return null;
      var te = Y[0], Z = Y.pop();
      if (Z !== te) {
        Y[0] = Z;
        e: for (var g = 0, b = Y.length, ke = b >>> 1; g < ke; ) {
          var we = 2 * (g + 1) - 1, W = Y[we], se = we + 1, S = Y[se];
          if (0 > d(W, Z)) se < b && 0 > d(S, W) ? (Y[g] = S, Y[se] = Z, g = se) : (Y[g] = W, Y[we] = Z, g = we);
          else if (se < b && 0 > d(S, Z)) Y[g] = S, Y[se] = Z, g = se;
          else break e;
        }
      }
      return te;
    }
    function d(Y, te) {
      var Z = Y.sortIndex - te.sortIndex;
      return Z !== 0 ? Z : Y.id - te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, m = p.now();
      i.unstable_now = function() {
        return p.now() - m;
      };
    }
    var j = [], $ = [], k = 1, C = null, R = 3, O = !1, D = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(Y) {
      for (var te = u($); te !== null; ) {
        if (te.callback === null) c($);
        else if (te.startTime <= Y) c($), te.sortIndex = te.expirationTime, a(j, te);
        else break;
        te = u($);
      }
    }
    function K(Y) {
      if (w = !1, M(Y), !D) if (u(j) !== null) D = !0, ue(X);
      else {
        var te = u($);
        te !== null && ie(K, te.startTime - Y);
      }
    }
    function X(Y, te) {
      D = !1, w && (w = !1, z(V), V = -1), O = !0;
      var Z = R;
      try {
        for (M(te), C = u(j); C !== null && (!(C.expirationTime > te) || Y && !Ce()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, R = C.priorityLevel;
            var b = g(C.expirationTime <= te);
            te = i.unstable_now(), typeof b == "function" ? C.callback = b : C === u(j) && c(j), M(te);
          } else c(j);
          C = u(j);
        }
        if (C !== null) var ke = !0;
        else {
          var we = u($);
          we !== null && ie(K, we.startTime - te), ke = !1;
        }
        return ke;
      } finally {
        C = null, R = Z, O = !1;
      }
    }
    var q = !1, T = null, V = -1, ee = 5, le = -1;
    function Ce() {
      return !(i.unstable_now() - le < ee);
    }
    function ne() {
      if (T !== null) {
        var Y = i.unstable_now();
        le = Y;
        var te = !0;
        try {
          te = T(!0, Y);
        } finally {
          te ? oe() : (q = !1, T = null);
        }
      } else q = !1;
    }
    var oe;
    if (typeof E == "function") oe = function() {
      E(ne);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), U = Me.port2;
      Me.port1.onmessage = ne, oe = function() {
        U.postMessage(null);
      };
    } else oe = function() {
      N(ne, 0);
    };
    function ue(Y) {
      T = Y, q || (q = !0, oe());
    }
    function ie(Y, te) {
      V = N(function() {
        Y(i.unstable_now());
      }, te);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, i.unstable_continueExecution = function() {
      D || O || (D = !0, ue(X));
    }, i.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(j);
    }, i.unstable_next = function(Y) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = R;
      }
      var Z = R;
      R = te;
      try {
        return Y();
      } finally {
        R = Z;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(Y, te) {
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
      var Z = R;
      R = Y;
      try {
        return te();
      } finally {
        R = Z;
      }
    }, i.unstable_scheduleCallback = function(Y, te, Z) {
      var g = i.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? g + Z : g) : Z = g, Y) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return b = Z + b, Y = { id: k++, callback: te, priorityLevel: Y, startTime: Z, expirationTime: b, sortIndex: -1 }, Z > g ? (Y.sortIndex = Z, a($, Y), u(j) === null && Y === u($) && (w ? (z(V), V = -1) : w = !0, ie(K, Z - g))) : (Y.sortIndex = b, a(j, Y), D || O || (D = !0, ue(X))), Y;
    }, i.unstable_shouldYield = Ce, i.unstable_wrapCallback = function(Y) {
      var te = R;
      return function() {
        var Z = R;
        R = te;
        try {
          return Y.apply(this, arguments);
        } finally {
          R = Z;
        }
      };
    };
  })(oo)), oo;
}
var md;
function gm() {
  return md || (md = 1, lo.exports = ym()), lo.exports;
}
var pd;
function xm() {
  if (pd) return Dt;
  pd = 1;
  var i = Ro(), a = gm();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, C = {};
  function R(e) {
    return j.call(C, e) ? !0 : j.call(k, e) ? !1 : $.test(e) ? C[e] = !0 : (k[e] = !0, !1);
  }
  function O(e, t, n, r) {
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
    if (t === null || typeof t > "u" || O(e, t, n, r)) return !0;
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
  function w(e, t, n, r, l, o, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = f;
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
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      E
    );
    N[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, E);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, E);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function M(e, t, n, r) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, l, r) && (n = null), r || l === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var K = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.provider"), Ce = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Object.assign, g;
  function b(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var ke = !1;
  function we(e, t) {
    if (!e || ke) return "";
    ke = !0;
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
          var r = A;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (A) {
          r = A;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          r = A;
        }
        e();
      }
    } catch (A) {
      if (A && r && typeof A.stack == "string") {
        for (var l = A.stack.split(`
`), o = r.stack.split(`
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
      ke = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? b(e) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 5:
        return b(e.type);
      case 16:
        return b("Lazy");
      case 13:
        return b("Suspense");
      case 19:
        return b("SuspenseList");
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
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case q:
        return "Portal";
      case ee:
        return "Profiler";
      case V:
        return "StrictMode";
      case oe:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ce:
        return (e.displayName || "Context") + ".Consumer";
      case le:
        return (e._context.displayName || "Context") + ".Provider";
      case ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case U:
        return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return se(e(t));
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
        return se(t);
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
  function B(e) {
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
  function re(e) {
    var t = I(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        r = "" + f, o.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(f) {
        r = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function pe(e) {
    e._valueTracker || (e._valueTracker = re(e));
  }
  function de(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = I(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function xe(e, t) {
    var n = t.checked;
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _e(e, t) {
    t = t.checked, t != null && M(e, "checked", t, !1);
  }
  function Le(e, t) {
    _e(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Je(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Be(e, t, n) {
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Ke(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
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
    e._wrapperState = { initialValue: B(n) };
  }
  function ze(e, t) {
    var n = B(t.value), r = B(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
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
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
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
      var r = n.indexOf("--") === 0, l = je(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Te = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $e(e, t) {
    if (t) {
      if (Te[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
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
  function mn(e) {
    if (e = Pi(e)) {
      if (typeof Yt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Es(t), Yt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    xt ? Vt ? Vt.push(e) : Vt = [e] : xt = e;
  }
  function zn() {
    if (xt) {
      var e = xt, t = Vt;
      if (Vt = xt = null, mn(e), t) for (e = 0; e < t.length; e++) mn(t[e]);
    }
  }
  function be(e, t) {
    return e(t);
  }
  function rt() {
  }
  var Ye = !1;
  function pt(e, t, n) {
    if (Ye) return e(t, n);
    Ye = !0;
    try {
      return be(e, t, n);
    } finally {
      Ye = !1, (xt !== null || Vt !== null) && (rt(), zn());
    }
  }
  function Pt(e, t) {
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
  var vn = !1;
  if (m) try {
    var kn = {};
    Object.defineProperty(kn, "passive", { get: function() {
      vn = !0;
    } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    vn = !1;
  }
  function ci(e, t, n, r, l, o, f, v, y) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var En = !1, ur = null, Mr = !1, Cn = null, di = { onError: function(e) {
    En = !0, ur = e;
  } };
  function ts(e, t, n, r, l, o, f, v, y) {
    En = !1, ur = null, ci.apply(di, arguments);
  }
  function Na(e, t, n, r, l, o, f, v, y) {
    if (ts.apply(this, arguments), En) {
      if (En) {
        var A = ur;
        En = !1, ur = null;
      } else throw Error(u(198));
      Mr || (Mr = !0, Cn = A);
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
  function rs(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return ns(l), e;
          if (o === r) return ns(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var f = !1, v = l.child; v; ) {
          if (v === n) {
            f = !0, n = l, r = o;
            break;
          }
          if (v === r) {
            f = !0, r = l, n = o;
            break;
          }
          v = v.sibling;
        }
        if (!f) {
          for (v = o.child; v; ) {
            if (v === n) {
              f = !0, n = o, r = l;
              break;
            }
            if (v === r) {
              f = !0, r = o, n = l;
              break;
            }
            v = v.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function is(e) {
    return e = rs(e), e !== null ? ss(e) : null;
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
  var Tn = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, L = a.unstable_shouldYield, fe = a.unstable_requestPaint, Se = a.unstable_now, Jt = a.unstable_getCurrentPriorityLevel, lt = a.unstable_ImmediatePriority, cr = a.unstable_UserBlockingPriority, Vn = a.unstable_NormalPriority, dr = a.unstable_LowPriority, Do = a.unstable_IdlePriority, as = null, yn = null;
  function Mf(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : Rf, Pf = Math.log, Af = Math.LN2;
  function Rf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Pf(e) / Af | 0) | 0;
  }
  var ls = 64, os = 4194304;
  function fi(e) {
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
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var v = f & ~l;
      v !== 0 ? r = fi(v) : (o &= f, o !== 0 && (r = fi(o)));
    } else f = n & ~l, f !== 0 ? r = fi(f) : o !== 0 && (r = fi(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - an(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function $f(e, t) {
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
  function Lf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var f = 31 - an(o), v = 1 << f, y = l[f];
      y === -1 ? ((v & n) === 0 || (v & r) !== 0) && (l[f] = $f(v, t)) : y <= t && (e.expiredLanes |= v), o &= ~v;
    }
  }
  function Ea(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function zo() {
    var e = ls;
    return ls <<= 1, (ls & 4194240) === 0 && (ls = 64), e;
  }
  function Ca(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function Of(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - an(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function _a(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - an(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var Ue = 0;
  function Vo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Bo, Ta, Ko, Ho, Uo, Ma = !1, cs = [], Bn = null, Kn = null, Hn = null, mi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), Un = [], Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Go(e, t) {
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
        mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(t.pointerId);
    }
  }
  function vi(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Pi(t), t !== null && Ta(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function bf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Bn = vi(Bn, e, t, n, r, l), !0;
      case "dragenter":
        return Kn = vi(Kn, e, t, n, r, l), !0;
      case "mouseover":
        return Hn = vi(Hn, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return mi.set(o, vi(mi.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, pi.set(o, vi(pi.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Wo(e) {
    var t = fr(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jt(n), t !== null) {
            e.blockedOn = t, Uo(e.priority, function() {
              Ko(n);
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
      var n = Aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Qe = r, n.target.dispatchEvent(r), Qe = null;
      } else return t = Pi(n), t !== null && Ta(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Qo(e, t, n) {
    ds(e) && n.delete(t);
  }
  function If() {
    Ma = !1, Bn !== null && ds(Bn) && (Bn = null), Kn !== null && ds(Kn) && (Kn = null), Hn !== null && ds(Hn) && (Hn = null), mi.forEach(Qo), pi.forEach(Qo);
  }
  function ki(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ma || (Ma = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, If)));
  }
  function yi(e) {
    function t(l) {
      return ki(l, e);
    }
    if (0 < cs.length) {
      ki(cs[0], e);
      for (var n = 1; n < cs.length; n++) {
        var r = cs[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Bn !== null && ki(Bn, e), Kn !== null && ki(Kn, e), Hn !== null && ki(Hn, e), mi.forEach(t), pi.forEach(t), n = 0; n < Un.length; n++) r = Un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Wo(n), n.blockedOn === null && Un.shift();
  }
  var Pr = K.ReactCurrentBatchConfig, fs = !0;
  function Df(e, t, n, r) {
    var l = Ue, o = Pr.transition;
    Pr.transition = null;
    try {
      Ue = 1, Pa(e, t, n, r);
    } finally {
      Ue = l, Pr.transition = o;
    }
  }
  function zf(e, t, n, r) {
    var l = Ue, o = Pr.transition;
    Pr.transition = null;
    try {
      Ue = 4, Pa(e, t, n, r);
    } finally {
      Ue = l, Pr.transition = o;
    }
  }
  function Pa(e, t, n, r) {
    if (fs) {
      var l = Aa(e, t, n, r);
      if (l === null) Qa(e, t, r, hs, n), Go(e, r);
      else if (bf(l, e, t, n, r)) r.stopPropagation();
      else if (Go(e, r), t & 4 && -1 < Ff.indexOf(e)) {
        for (; l !== null; ) {
          var o = Pi(l);
          if (o !== null && Bo(o), o = Aa(e, t, n, r), o === null && Qa(e, t, r, hs, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Qa(e, t, r, null, n);
    }
  }
  var hs = null;
  function Aa(e, t, n, r) {
    if (hs = null, e = qe(r), e = fr(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = jt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return hs = e, null;
  }
  function Yo(e) {
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
          case cr:
            return 4;
          case Vn:
          case dr:
            return 16;
          case Do:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Ra = null, ms = null;
  function Jo() {
    if (ms) return ms;
    var e, t = Ra, n = t.length, r, l = "value" in Gn ? Gn.value : Gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === l[o - r]; r++) ;
    return ms = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ps(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vs() {
    return !0;
  }
  function Xo() {
    return !1;
  }
  function Bt(e) {
    function t(n, r, l, o, f) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(o) : o[v]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vs : Xo, this.isPropagationStopped = Xo, this;
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
  var Ar = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $a = Bt(Ar), gi = Z({}, Ar, { view: 0, detail: 0 }), Vf = Bt(gi), La, Oa, xi, ks = Z({}, gi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ba, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== xi && (xi && e.type === "mousemove" ? (La = e.screenX - xi.screenX, Oa = e.screenY - xi.screenY) : Oa = La = 0, xi = e), La);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Oa;
  } }), Zo = Bt(ks), Bf = Z({}, ks, { dataTransfer: 0 }), Kf = Bt(Bf), Hf = Z({}, gi, { relatedTarget: 0 }), Fa = Bt(Hf), Uf = Z({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = Bt(Uf), Wf = Z({}, Ar, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Qf = Bt(Wf), Yf = Z({}, Ar, { data: 0 }), qo = Bt(Yf), Jf = {
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
  }, Xf = {
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
  }, Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1;
  }
  function ba() {
    return qf;
  }
  var eh = Z({}, gi, { key: function(e) {
    if (e.key) {
      var t = Jf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ps(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ba, charCode: function(e) {
    return e.type === "keypress" ? ps(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ps(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), th = Bt(eh), nh = Z({}, ks, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), eu = Bt(nh), rh = Z({}, gi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ba }), ih = Bt(rh), sh = Z({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ah = Bt(sh), lh = Z({}, ks, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oh = Bt(lh), uh = [9, 13, 27, 32], Ia = m && "CompositionEvent" in window, ji = null;
  m && "documentMode" in document && (ji = document.documentMode);
  var ch = m && "TextEvent" in window && !ji, tu = m && (!Ia || ji && 8 < ji && 11 >= ji), nu = " ", ru = !1;
  function iu(e, t) {
    switch (e) {
      case "keyup":
        return uh.indexOf(t.keyCode) !== -1;
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
  function su(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rr = !1;
  function dh(e, t) {
    switch (e) {
      case "compositionend":
        return su(t);
      case "keypress":
        return t.which !== 32 ? null : (ru = !0, nu);
      case "textInput":
        return e = t.data, e === nu && ru ? null : e;
      default:
        return null;
    }
  }
  function fh(e, t) {
    if (Rr) return e === "compositionend" || !Ia && iu(e, t) ? (e = Jo(), ms = Ra = Gn = null, Rr = !1, e) : null;
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
        return tu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hh[e.type] : t === "textarea";
  }
  function lu(e, t, n, r) {
    pn(r), t = Ss(t, "onChange"), 0 < t.length && (n = new $a("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Si = null, wi = null;
  function mh(e) {
    Eu(e, 0);
  }
  function ys(e) {
    var t = br(e);
    if (de(t)) return e;
  }
  function ph(e, t) {
    if (e === "change") return t;
  }
  var ou = !1;
  if (m) {
    var Da;
    if (m) {
      var za = "oninput" in document;
      if (!za) {
        var uu = document.createElement("div");
        uu.setAttribute("oninput", "return;"), za = typeof uu.oninput == "function";
      }
      Da = za;
    } else Da = !1;
    ou = Da && (!document.documentMode || 9 < document.documentMode);
  }
  function cu() {
    Si && (Si.detachEvent("onpropertychange", du), wi = Si = null);
  }
  function du(e) {
    if (e.propertyName === "value" && ys(wi)) {
      var t = [];
      lu(t, wi, e, qe(e)), pt(mh, t);
    }
  }
  function vh(e, t, n) {
    e === "focusin" ? (cu(), Si = t, wi = n, Si.attachEvent("onpropertychange", du)) : e === "focusout" && cu();
  }
  function kh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ys(wi);
  }
  function yh(e, t) {
    if (e === "click") return ys(t);
  }
  function gh(e, t) {
    if (e === "input" || e === "change") return ys(t);
  }
  function xh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : xh;
  function Ni(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !ln(e[l], t[l])) return !1;
    }
    return !0;
  }
  function fu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hu(e, t) {
    var n = fu(e);
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
      n = fu(n);
    }
  }
  function mu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function pu() {
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
  function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function jh(e) {
    var t = pu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Va(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = hu(n, o);
          var f = hu(
            n,
            r
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Sh = m && "documentMode" in document && 11 >= document.documentMode, $r = null, Ba = null, Ei = null, Ka = !1;
  function vu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ka || $r == null || $r !== ge(r) || (r = $r, "selectionStart" in r && Va(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ei && Ni(Ei, r) || (Ei = r, r = Ss(Ba, "onSelect"), 0 < r.length && (t = new $a("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $r)));
  }
  function gs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Lr = { animationend: gs("Animation", "AnimationEnd"), animationiteration: gs("Animation", "AnimationIteration"), animationstart: gs("Animation", "AnimationStart"), transitionend: gs("Transition", "TransitionEnd") }, Ha = {}, ku = {};
  m && (ku = document.createElement("div").style, "AnimationEvent" in window || (delete Lr.animationend.animation, delete Lr.animationiteration.animation, delete Lr.animationstart.animation), "TransitionEvent" in window || delete Lr.transitionend.transition);
  function xs(e) {
    if (Ha[e]) return Ha[e];
    if (!Lr[e]) return e;
    var t = Lr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ku) return Ha[e] = t[n];
    return e;
  }
  var yu = xs("animationend"), gu = xs("animationiteration"), xu = xs("animationstart"), ju = xs("transitionend"), Su = /* @__PURE__ */ new Map(), wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Su.set(e, t), h(t, [e]);
  }
  for (var Ua = 0; Ua < wu.length; Ua++) {
    var Ga = wu[Ua], wh = Ga.toLowerCase(), Nh = Ga[0].toUpperCase() + Ga.slice(1);
    Wn(wh, "on" + Nh);
  }
  Wn(yu, "onAnimationEnd"), Wn(gu, "onAnimationIteration"), Wn(xu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(ju, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Eh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
  function Nu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Na(r, t, void 0, e), e.currentTarget = null;
  }
  function Eu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var v = r[f], y = v.instance, A = v.currentTarget;
          if (v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Nu(l, v, A), o = y;
        }
        else for (f = 0; f < r.length; f++) {
          if (v = r[f], y = v.instance, A = v.currentTarget, v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Nu(l, v, A), o = y;
        }
      }
    }
    if (Mr) throw e = Cn, Mr = !1, Cn = null, e;
  }
  function et(e, t) {
    var n = t[el];
    n === void 0 && (n = t[el] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Cu(t, e, 2, !1), n.add(r));
  }
  function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4), Cu(n, e, r, t);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function _i(e) {
    if (!e[js]) {
      e[js] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Eh.has(n) || Wa(n, !1, e), Wa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || (t[js] = !0, Wa("selectionchange", !1, t));
    }
  }
  function Cu(e, t, n, r) {
    switch (Yo(t)) {
      case 1:
        var l = Df;
        break;
      case 4:
        l = zf;
        break;
      default:
        l = Pa;
    }
    n = l.bind(null, t, n, e), l = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Qa(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var f = r.tag;
      if (f === 3 || f === 4) {
        var v = r.stateNode.containerInfo;
        if (v === l || v.nodeType === 8 && v.parentNode === l) break;
        if (f === 4) for (f = r.return; f !== null; ) {
          var y = f.tag;
          if ((y === 3 || y === 4) && (y = f.stateNode.containerInfo, y === l || y.nodeType === 8 && y.parentNode === l)) return;
          f = f.return;
        }
        for (; v !== null; ) {
          if (f = fr(v), f === null) return;
          if (y = f.tag, y === 5 || y === 6) {
            r = o = f;
            continue e;
          }
          v = v.parentNode;
        }
      }
      r = r.return;
    }
    pt(function() {
      var A = o, G = qe(n), Q = [];
      e: {
        var H = Su.get(e);
        if (H !== void 0) {
          var ae = $a, he = e;
          switch (e) {
            case "keypress":
              if (ps(n) === 0) break e;
            case "keydown":
            case "keyup":
              ae = th;
              break;
            case "focusin":
              he = "focus", ae = Fa;
              break;
            case "focusout":
              he = "blur", ae = Fa;
              break;
            case "beforeblur":
            case "afterblur":
              ae = Fa;
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
              ae = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = Kf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = ih;
              break;
            case yu:
            case gu:
            case xu:
              ae = Gf;
              break;
            case ju:
              ae = ah;
              break;
            case "scroll":
              ae = Vf;
              break;
            case "wheel":
              ae = oh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = Qf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = eu;
          }
          var ve = (t & 4) !== 0, ut = !ve && e === "scroll", _ = ve ? H !== null ? H + "Capture" : null : H;
          ve = [];
          for (var x = A, P; x !== null; ) {
            P = x;
            var J = P.stateNode;
            if (P.tag === 5 && J !== null && (P = J, _ !== null && (J = Pt(x, _), J != null && ve.push(Ti(x, J, P)))), ut) break;
            x = x.return;
          }
          0 < ve.length && (H = new ae(H, he, null, n, G), Q.push({ event: H, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", H && n !== Qe && (he = n.relatedTarget || n.fromElement) && (fr(he) || he[Pn])) break e;
          if ((ae || H) && (H = G.window === G ? G : (H = G.ownerDocument) ? H.defaultView || H.parentWindow : window, ae ? (he = n.relatedTarget || n.toElement, ae = A, he = he ? fr(he) : null, he !== null && (ut = _n(he), he !== ut || he.tag !== 5 && he.tag !== 6) && (he = null)) : (ae = null, he = A), ae !== he)) {
            if (ve = Zo, J = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ve = eu, J = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = ae == null ? H : br(ae), P = he == null ? H : br(he), H = new ve(J, x + "leave", ae, n, G), H.target = ut, H.relatedTarget = P, J = null, fr(G) === A && (ve = new ve(_, x + "enter", he, n, G), ve.target = P, ve.relatedTarget = ut, J = ve), ut = J, ae && he) t: {
              for (ve = ae, _ = he, x = 0, P = ve; P; P = Or(P)) x++;
              for (P = 0, J = _; J; J = Or(J)) P++;
              for (; 0 < x - P; ) ve = Or(ve), x--;
              for (; 0 < P - x; ) _ = Or(_), P--;
              for (; x--; ) {
                if (ve === _ || _ !== null && ve === _.alternate) break t;
                ve = Or(ve), _ = Or(_);
              }
              ve = null;
            }
            else ve = null;
            ae !== null && _u(Q, H, ae, ve, !1), he !== null && ut !== null && _u(Q, ut, he, ve, !0);
          }
        }
        e: {
          if (H = A ? br(A) : window, ae = H.nodeName && H.nodeName.toLowerCase(), ae === "select" || ae === "input" && H.type === "file") var ye = ph;
          else if (au(H)) if (ou) ye = gh;
          else {
            ye = kh;
            var Ne = vh;
          }
          else (ae = H.nodeName) && ae.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ye = yh);
          if (ye && (ye = ye(e, A))) {
            lu(Q, ye, n, G);
            break e;
          }
          Ne && Ne(e, H, A), e === "focusout" && (Ne = H._wrapperState) && Ne.controlled && H.type === "number" && Be(H, "number", H.value);
        }
        switch (Ne = A ? br(A) : window, e) {
          case "focusin":
            (au(Ne) || Ne.contentEditable === "true") && ($r = Ne, Ba = A, Ei = null);
            break;
          case "focusout":
            Ei = Ba = $r = null;
            break;
          case "mousedown":
            Ka = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ka = !1, vu(Q, n, G);
            break;
          case "selectionchange":
            if (Sh) break;
          case "keydown":
          case "keyup":
            vu(Q, n, G);
        }
        var Ee;
        if (Ia) e: {
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
        else Rr ? iu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (tu && n.locale !== "ko" && (Rr || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Rr && (Ee = Jo()) : (Gn = G, Ra = "value" in Gn ? Gn.value : Gn.textContent, Rr = !0)), Ne = Ss(A, Pe), 0 < Ne.length && (Pe = new qo(Pe, e, null, n, G), Q.push({ event: Pe, listeners: Ne }), Ee ? Pe.data = Ee : (Ee = su(n), Ee !== null && (Pe.data = Ee)))), (Ee = ch ? dh(e, n) : fh(e, n)) && (A = Ss(A, "onBeforeInput"), 0 < A.length && (G = new qo("onBeforeInput", "beforeinput", null, n, G), Q.push({ event: G, listeners: A }), G.data = Ee));
      }
      Eu(Q, t);
    });
  }
  function Ti(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ss(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Pt(e, n), o != null && r.unshift(Ti(e, o, l)), o = Pt(e, t), o != null && r.push(Ti(e, o, l))), e = e.return;
    }
    return r;
  }
  function Or(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function _u(e, t, n, r, l) {
    for (var o = t._reactName, f = []; n !== null && n !== r; ) {
      var v = n, y = v.alternate, A = v.stateNode;
      if (y !== null && y === r) break;
      v.tag === 5 && A !== null && (v = A, l ? (y = Pt(n, o), y != null && f.unshift(Ti(n, y, v))) : l || (y = Pt(n, o), y != null && f.push(Ti(n, y, v)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Ch = /\r\n?/g, _h = /\u0000|\uFFFD/g;
  function Tu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ch, `
`).replace(_h, "");
  }
  function ws(e, t, n) {
    if (t = Tu(t), Tu(e) !== t && n) throw Error(u(425));
  }
  function Ns() {
  }
  var Ya = null, Ja = null;
  function Xa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Za = typeof setTimeout == "function" ? setTimeout : void 0, Th = typeof clearTimeout == "function" ? clearTimeout : void 0, Mu = typeof Promise == "function" ? Promise : void 0, Mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mu < "u" ? function(e) {
    return Mu.resolve(null).then(e).catch(Ph);
  } : Za;
  function Ph(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function qa(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), yi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    yi(t);
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
  function Pu(e) {
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
  var Fr = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fr, Mi = "__reactProps$" + Fr, Pn = "__reactContainer$" + Fr, el = "__reactEvents$" + Fr, Ah = "__reactListeners$" + Fr, Rh = "__reactHandles$" + Fr;
  function fr(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pu(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = Pu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Pi(e) {
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function br(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Es(e) {
    return e[Mi] || null;
  }
  var tl = [], Ir = -1;
  function Yn(e) {
    return { current: e };
  }
  function tt(e) {
    0 > Ir || (e.current = tl[Ir], tl[Ir] = null, Ir--);
  }
  function Ze(e, t) {
    Ir++, tl[Ir] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), Lt = Yn(!1), hr = Jn;
  function Dr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Cs() {
    tt(Lt), tt(Et);
  }
  function Au(e, t, n) {
    if (Et.current !== Jn) throw Error(u(168));
    Ze(Et, t), Ze(Lt, n);
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, S(e) || "Unknown", l));
    return Z({}, n, r);
  }
  function _s(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, hr = Et.current, Ze(Et, e), Ze(Lt, Lt.current), !0;
  }
  function $u(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = Ru(e, t, hr), r.__reactInternalMemoizedMergedChildContext = e, tt(Lt), tt(Et), Ze(Et, e)) : tt(Lt), Ze(Lt, n);
  }
  var An = null, Ts = !1, nl = !1;
  function Lu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function $h(e) {
    Ts = !0, Lu(e);
  }
  function Xn() {
    if (!nl && An !== null) {
      nl = !0;
      var e = 0, t = Ue;
      try {
        var n = An;
        for (Ue = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        An = null, Ts = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), Tn(lt, Xn), l;
      } finally {
        Ue = t, nl = !1;
      }
    }
    return null;
  }
  var zr = [], Vr = 0, Ms = null, Ps = 0, Xt = [], Zt = 0, mr = null, Rn = 1, $n = "";
  function pr(e, t) {
    zr[Vr++] = Ps, zr[Vr++] = Ms, Ms = e, Ps = t;
  }
  function Ou(e, t, n) {
    Xt[Zt++] = Rn, Xt[Zt++] = $n, Xt[Zt++] = mr, mr = e;
    var r = Rn;
    e = $n;
    var l = 32 - an(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - an(t) + l;
    if (30 < o) {
      var f = l - l % 5;
      o = (r & (1 << f) - 1).toString(32), r >>= f, l -= f, Rn = 1 << 32 - an(t) + l | n << l | r, $n = o + e;
    } else Rn = 1 << o | n << l | r, $n = e;
  }
  function rl(e) {
    e.return !== null && (pr(e, 1), Ou(e, 1, 0));
  }
  function il(e) {
    for (; e === Ms; ) Ms = zr[--Vr], zr[Vr] = null, Ps = zr[--Vr], zr[Vr] = null;
    for (; e === mr; ) mr = Xt[--Zt], Xt[Zt] = null, $n = Xt[--Zt], Xt[Zt] = null, Rn = Xt[--Zt], Xt[Zt] = null;
  }
  var Kt = null, Ht = null, it = !1, on = null;
  function Fu(e, t) {
    var n = nn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mr !== null ? { id: Rn, overflow: $n } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function sl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function al(e) {
    if (it) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!bu(e, t)) {
          if (sl(e)) throw Error(u(418));
          t = Qn(n.nextSibling);
          var r = Kt;
          t && bu(e, t) ? Fu(r, n) : (e.flags = e.flags & -4097 | 2, it = !1, Kt = e);
        }
      } else {
        if (sl(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, it = !1, Kt = e;
      }
    }
  }
  function Iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function As(e) {
    if (e !== Kt) return !1;
    if (!it) return Iu(e), it = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xa(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (sl(e)) throw Du(), Error(u(418));
      for (; t; ) Fu(e, t), t = Qn(t.nextSibling);
    }
    if (Iu(e), e.tag === 13) {
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
  function Du() {
    for (var e = Ht; e; ) e = Qn(e.nextSibling);
  }
  function Br() {
    Ht = Kt = null, it = !1;
  }
  function ll(e) {
    on === null ? on = [e] : on.push(e);
  }
  var Lh = K.ReactCurrentBatchConfig;
  function Ai(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r, o = "" + e;
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
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vu(e) {
    function t(_, x) {
      if (e) {
        var P = _.deletions;
        P === null ? (_.deletions = [x], _.flags |= 16) : P.push(x);
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
    function l(_, x) {
      return _ = sr(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, P) {
      return _.index = P, e ? (P = _.alternate, P !== null ? (P = P.index, P < x ? (_.flags |= 2, x) : P) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function f(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function v(_, x, P, J) {
      return x === null || x.tag !== 6 ? (x = Zl(P, _.mode, J), x.return = _, x) : (x = l(x, P), x.return = _, x);
    }
    function y(_, x, P, J) {
      var ye = P.type;
      return ye === T ? G(_, x, P.props.children, J, P.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ue && zu(ye) === x.type) ? (J = l(x, P.props), J.ref = Ai(_, x, P), J.return = _, J) : (J = na(P.type, P.key, P.props, null, _.mode, J), J.ref = Ai(_, x, P), J.return = _, J);
    }
    function A(_, x, P, J) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== P.containerInfo || x.stateNode.implementation !== P.implementation ? (x = ql(P, _.mode, J), x.return = _, x) : (x = l(x, P.children || []), x.return = _, x);
    }
    function G(_, x, P, J, ye) {
      return x === null || x.tag !== 7 ? (x = wr(P, _.mode, J, ye), x.return = _, x) : (x = l(x, P), x.return = _, x);
    }
    function Q(_, x, P) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Zl("" + x, _.mode, P), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return P = na(x.type, x.key, x.props, null, _.mode, P), P.ref = Ai(_, null, x), P.return = _, P;
          case q:
            return x = ql(x, _.mode, P), x.return = _, x;
          case ue:
            var J = x._init;
            return Q(_, J(x._payload), P);
        }
        if (We(x) || te(x)) return x = wr(x, _.mode, P, null), x.return = _, x;
        Rs(_, x);
      }
      return null;
    }
    function H(_, x, P, J) {
      var ye = x !== null ? x.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return ye !== null ? null : v(_, x, "" + P, J);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case X:
            return P.key === ye ? y(_, x, P, J) : null;
          case q:
            return P.key === ye ? A(_, x, P, J) : null;
          case ue:
            return ye = P._init, H(
              _,
              x,
              ye(P._payload),
              J
            );
        }
        if (We(P) || te(P)) return ye !== null ? null : G(_, x, P, J, null);
        Rs(_, P);
      }
      return null;
    }
    function ae(_, x, P, J, ye) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return _ = _.get(P) || null, v(x, _, "" + J, ye);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case X:
            return _ = _.get(J.key === null ? P : J.key) || null, y(x, _, J, ye);
          case q:
            return _ = _.get(J.key === null ? P : J.key) || null, A(x, _, J, ye);
          case ue:
            var Ne = J._init;
            return ae(_, x, P, Ne(J._payload), ye);
        }
        if (We(J) || te(J)) return _ = _.get(P) || null, G(x, _, J, ye, null);
        Rs(x, J);
      }
      return null;
    }
    function he(_, x, P, J) {
      for (var ye = null, Ne = null, Ee = x, Pe = x = 0, yt = null; Ee !== null && Pe < P.length; Pe++) {
        Ee.index > Pe ? (yt = Ee, Ee = null) : yt = Ee.sibling;
        var Ve = H(_, Ee, P[Pe], J);
        if (Ve === null) {
          Ee === null && (Ee = yt);
          break;
        }
        e && Ee && Ve.alternate === null && t(_, Ee), x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve, Ee = yt;
      }
      if (Pe === P.length) return n(_, Ee), it && pr(_, Pe), ye;
      if (Ee === null) {
        for (; Pe < P.length; Pe++) Ee = Q(_, P[Pe], J), Ee !== null && (x = o(Ee, x, Pe), Ne === null ? ye = Ee : Ne.sibling = Ee, Ne = Ee);
        return it && pr(_, Pe), ye;
      }
      for (Ee = r(_, Ee); Pe < P.length; Pe++) yt = ae(Ee, _, Pe, P[Pe], J), yt !== null && (e && yt.alternate !== null && Ee.delete(yt.key === null ? Pe : yt.key), x = o(yt, x, Pe), Ne === null ? ye = yt : Ne.sibling = yt, Ne = yt);
      return e && Ee.forEach(function(ar) {
        return t(_, ar);
      }), it && pr(_, Pe), ye;
    }
    function ve(_, x, P, J) {
      var ye = te(P);
      if (typeof ye != "function") throw Error(u(150));
      if (P = ye.call(P), P == null) throw Error(u(151));
      for (var Ne = ye = null, Ee = x, Pe = x = 0, yt = null, Ve = P.next(); Ee !== null && !Ve.done; Pe++, Ve = P.next()) {
        Ee.index > Pe ? (yt = Ee, Ee = null) : yt = Ee.sibling;
        var ar = H(_, Ee, Ve.value, J);
        if (ar === null) {
          Ee === null && (Ee = yt);
          break;
        }
        e && Ee && ar.alternate === null && t(_, Ee), x = o(ar, x, Pe), Ne === null ? ye = ar : Ne.sibling = ar, Ne = ar, Ee = yt;
      }
      if (Ve.done) return n(
        _,
        Ee
      ), it && pr(_, Pe), ye;
      if (Ee === null) {
        for (; !Ve.done; Pe++, Ve = P.next()) Ve = Q(_, Ve.value, J), Ve !== null && (x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve);
        return it && pr(_, Pe), ye;
      }
      for (Ee = r(_, Ee); !Ve.done; Pe++, Ve = P.next()) Ve = ae(Ee, _, Pe, Ve.value, J), Ve !== null && (e && Ve.alternate !== null && Ee.delete(Ve.key === null ? Pe : Ve.key), x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve);
      return e && Ee.forEach(function(hm) {
        return t(_, hm);
      }), it && pr(_, Pe), ye;
    }
    function ut(_, x, P, J) {
      if (typeof P == "object" && P !== null && P.type === T && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case X:
            e: {
              for (var ye = P.key, Ne = x; Ne !== null; ) {
                if (Ne.key === ye) {
                  if (ye = P.type, ye === T) {
                    if (Ne.tag === 7) {
                      n(_, Ne.sibling), x = l(Ne, P.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (Ne.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ue && zu(ye) === Ne.type) {
                    n(_, Ne.sibling), x = l(Ne, P.props), x.ref = Ai(_, Ne, P), x.return = _, _ = x;
                    break e;
                  }
                  n(_, Ne);
                  break;
                } else t(_, Ne);
                Ne = Ne.sibling;
              }
              P.type === T ? (x = wr(P.props.children, _.mode, J, P.key), x.return = _, _ = x) : (J = na(P.type, P.key, P.props, null, _.mode, J), J.ref = Ai(_, x, P), J.return = _, _ = J);
            }
            return f(_);
          case q:
            e: {
              for (Ne = P.key; x !== null; ) {
                if (x.key === Ne) if (x.tag === 4 && x.stateNode.containerInfo === P.containerInfo && x.stateNode.implementation === P.implementation) {
                  n(_, x.sibling), x = l(x, P.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  n(_, x);
                  break;
                }
                else t(_, x);
                x = x.sibling;
              }
              x = ql(P, _.mode, J), x.return = _, _ = x;
            }
            return f(_);
          case ue:
            return Ne = P._init, ut(_, x, Ne(P._payload), J);
        }
        if (We(P)) return he(_, x, P, J);
        if (te(P)) return ve(_, x, P, J);
        Rs(_, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, x !== null && x.tag === 6 ? (n(_, x.sibling), x = l(x, P), x.return = _, _ = x) : (n(_, x), x = Zl(P, _.mode, J), x.return = _, _ = x), f(_)) : n(_, x);
    }
    return ut;
  }
  var Kr = Vu(!0), Bu = Vu(!1), $s = Yn(null), Ls = null, Hr = null, ol = null;
  function ul() {
    ol = Hr = Ls = null;
  }
  function cl(e) {
    var t = $s.current;
    tt($s), e._currentValue = t;
  }
  function dl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ur(e, t) {
    Ls = e, ol = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (ol !== e) if (e = { context: e, memoizedValue: t, next: null }, Hr === null) {
      if (Ls === null) throw Error(u(308));
      Hr = e, Ls.dependencies = { lanes: 0, firstContext: e };
    } else Hr = Hr.next = e;
    return t;
  }
  var vr = null;
  function fl(e) {
    vr === null ? vr = [e] : vr.push(e);
  }
  function Ku(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, fl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, r);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function hl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ln(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, fl(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ln(e, n);
  }
  function Os(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, _a(e, n);
    }
  }
  function Uu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = f : o = o.next = f, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fs(e, t, n, r) {
    var l = e.updateQueue;
    Zn = !1;
    var o = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var y = v, A = y.next;
      y.next = null, f === null ? o = A : f.next = A, f = y;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, v = G.lastBaseUpdate, v !== f && (v === null ? G.firstBaseUpdate = A : v.next = A, G.lastBaseUpdate = y));
    }
    if (o !== null) {
      var Q = l.baseState;
      f = 0, G = A = y = null, v = o;
      do {
        var H = v.lane, ae = v.eventTime;
        if ((r & H) === H) {
          G !== null && (G = G.next = {
            eventTime: ae,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var he = e, ve = v;
            switch (H = t, ae = n, ve.tag) {
              case 1:
                if (he = ve.payload, typeof he == "function") {
                  Q = he.call(ae, Q, H);
                  break e;
                }
                Q = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = ve.payload, H = typeof he == "function" ? he.call(ae, Q, H) : he, H == null) break e;
                Q = Z({}, Q, H);
                break e;
              case 2:
                Zn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, H = l.effects, H === null ? l.effects = [v] : H.push(v));
        } else ae = { eventTime: ae, lane: H, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, G === null ? (A = G = ae, y = Q) : G = G.next = ae, f |= H;
        if (v = v.next, v === null) {
          if (v = l.shared.pending, v === null) break;
          H = v, v = H.next, H.next = null, l.lastBaseUpdate = H, l.shared.pending = null;
        }
      } while (!0);
      if (G === null && (y = Q), l.baseState = y, l.firstBaseUpdate = A, l.lastBaseUpdate = G, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      gr |= f, e.lanes = f, e.memoizedState = Q;
    }
  }
  function Gu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(u(191, l));
        l.call(r);
      }
    }
  }
  var Ri = {}, xn = Yn(Ri), $i = Yn(Ri), Li = Yn(Ri);
  function kr(e) {
    if (e === Ri) throw Error(u(174));
    return e;
  }
  function ml(e, t) {
    switch (Ze(Li, t), Ze($i, e), Ze(xn, Ri), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gt(t, e);
    }
    tt(xn), Ze(xn, t);
  }
  function Gr() {
    tt(xn), tt($i), tt(Li);
  }
  function Wu(e) {
    kr(Li.current);
    var t = kr(xn.current), n = Gt(t, e.type);
    t !== n && (Ze($i, e), Ze(xn, n));
  }
  function pl(e) {
    $i.current === e && (tt(xn), tt($i));
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
  var vl = [];
  function kl() {
    for (var e = 0; e < vl.length; e++) vl[e]._workInProgressVersionPrimary = null;
    vl.length = 0;
  }
  var Is = K.ReactCurrentDispatcher, yl = K.ReactCurrentBatchConfig, yr = 0, at = null, ht = null, vt = null, Ds = !1, Oi = !1, Fi = 0, Oh = 0;
  function Ct() {
    throw Error(u(321));
  }
  function gl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function xl(e, t, n, r, l, o) {
    if (yr = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e === null || e.memoizedState === null ? Dh : zh, e = n(r, l), Oi) {
      o = 0;
      do {
        if (Oi = !1, Fi = 0, 25 <= o) throw Error(u(301));
        o += 1, vt = ht = null, t.updateQueue = null, Is.current = Vh, e = n(r, l);
      } while (Oi);
    }
    if (Is.current = Bs, t = ht !== null && ht.next !== null, yr = 0, vt = ht = at = null, Ds = !1, t) throw Error(u(300));
    return e;
  }
  function jl() {
    var e = Fi !== 0;
    return Fi = 0, e;
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
  function bi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Sl(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = ht, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = o.next, o.next = f;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var v = f = null, y = null, A = o;
      do {
        var G = A.lane;
        if ((yr & G) === G) y !== null && (y = y.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), r = A.hasEagerState ? A.eagerState : e(r, A.action);
        else {
          var Q = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          y === null ? (v = y = Q, f = r) : y = y.next = Q, at.lanes |= G, gr |= G;
        }
        A = A.next;
      } while (A !== null && A !== o);
      y === null ? f = r : y.next = v, ln(r, t.memoizedState) || (Ft = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, at.lanes |= o, gr |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function wl(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        o = e(o, f.action), f = f.next;
      while (f !== l);
      ln(o, t.memoizedState) || (Ft = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Qu() {
  }
  function Yu(e, t) {
    var n = at, r = en(), l = t(), o = !ln(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ft = !0), r = r.queue, Nl(Zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || vt !== null && vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ii(9, Xu.bind(null, n, r, l, t), void 0, null), kt === null) throw Error(u(349));
      (yr & 30) !== 0 || Ju(n, t, l);
    }
    return l;
  }
  function Ju(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, qu(t) && ec(e);
  }
  function Zu(e, t, n) {
    return n(function() {
      qu(t) && ec(e);
    });
  }
  function qu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function ec(e) {
    var t = Ln(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function tc(e) {
    var t = jn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ih.bind(null, at, e), [t.memoizedState, e];
  }
  function Ii(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function nc() {
    return en().memoizedState;
  }
  function zs(e, t, n, r) {
    var l = jn();
    at.flags |= e, l.memoizedState = Ii(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Vs(e, t, n, r) {
    var l = en();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ht !== null) {
      var f = ht.memoizedState;
      if (o = f.destroy, r !== null && gl(r, f.deps)) {
        l.memoizedState = Ii(t, n, o, r);
        return;
      }
    }
    at.flags |= e, l.memoizedState = Ii(1 | t, n, o, r);
  }
  function rc(e, t) {
    return zs(8390656, 8, e, t);
  }
  function Nl(e, t) {
    return Vs(2048, 8, e, t);
  }
  function ic(e, t) {
    return Vs(4, 2, e, t);
  }
  function sc(e, t) {
    return Vs(4, 4, e, t);
  }
  function ac(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function lc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vs(4, 4, ac.bind(null, t, e), n);
  }
  function El() {
  }
  function oc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function uc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function cc(e, t, n) {
    return (yr & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (ln(n, t) || (n = zo(), at.lanes |= n, gr |= n, e.baseState = !0), t);
  }
  function Fh(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = yl.transition;
    yl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, yl.transition = r;
    }
  }
  function dc() {
    return en().memoizedState;
  }
  function bh(e, t, n) {
    var r = rr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fc(e)) hc(t, n);
    else if (n = Ku(e, t, n, r), n !== null) {
      var l = Rt();
      fn(n, e, r, l), mc(n, t, r);
    }
  }
  function Ih(e, t, n) {
    var r = rr(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (fc(e)) hc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var f = t.lastRenderedState, v = o(f, n);
        if (l.hasEagerState = !0, l.eagerState = v, ln(v, f)) {
          var y = t.interleaved;
          y === null ? (l.next = l, fl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Ku(e, t, l, r), n !== null && (l = Rt(), fn(n, e, r, l), mc(n, t, r));
    }
  }
  function fc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function hc(e, t) {
    Oi = Ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function mc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, _a(e, n);
    }
  }
  var Bs = { readContext: qt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Dh = { readContext: qt, useCallback: function(e, t) {
    return jn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: rc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zs(
      4194308,
      4,
      ac.bind(null, t, e),
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
    var r = jn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = bh.bind(null, at, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = jn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: tc, useDebugValue: El, useDeferredValue: function(e) {
    return jn().memoizedState = e;
  }, useTransition: function() {
    var e = tc(!1), t = e[0];
    return e = Fh.bind(null, e[1]), jn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = at, l = jn();
    if (it) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), kt === null) throw Error(u(349));
      (yr & 30) !== 0 || Ju(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, rc(Zu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Ii(9, Xu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = jn(), t = kt.identifierPrefix;
    if (it) {
      var n = $n, r = Rn;
      n = (r & ~(1 << 32 - an(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Oh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zh = {
    readContext: qt,
    useCallback: oc,
    useContext: qt,
    useEffect: Nl,
    useImperativeHandle: lc,
    useInsertionEffect: ic,
    useLayoutEffect: sc,
    useMemo: uc,
    useReducer: Sl,
    useRef: nc,
    useState: function() {
      return Sl(bi);
    },
    useDebugValue: El,
    useDeferredValue: function(e) {
      var t = en();
      return cc(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = Sl(bi)[0], t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Yu,
    useId: dc,
    unstable_isNewReconciler: !1
  }, Vh = { readContext: qt, useCallback: oc, useContext: qt, useEffect: Nl, useImperativeHandle: lc, useInsertionEffect: ic, useLayoutEffect: sc, useMemo: uc, useReducer: wl, useRef: nc, useState: function() {
    return wl(bi);
  }, useDebugValue: El, useDeferredValue: function(e) {
    var t = en();
    return ht === null ? t.memoizedState = e : cc(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = wl(bi)[0], t = en().memoizedState;
    return [e, t];
  }, useMutableSource: Qu, useSyncExternalStore: Yu, useId: dc, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Cl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ks = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Rt(), l = rr(e), o = On(r, l);
    o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, r), Os(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Rt(), l = rr(e), o = On(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, r), Os(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Rt(), r = rr(e), l = On(n, r);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, r), t !== null && (fn(t, e, r, n), Os(t, e, r));
  } };
  function pc(e, t, n, r, l, o, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, f) : t.prototype && t.prototype.isPureReactComponent ? !Ni(n, r) || !Ni(l, o) : !0;
  }
  function vc(e, t, n) {
    var r = !1, l = Jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = qt(o) : (l = Ot(t) ? hr : Et.current, r = t.contextTypes, o = (r = r != null) ? Dr(e, l) : Jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ks, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function kc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
  }
  function _l(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, hl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = qt(o) : (o = Ot(t) ? hr : Et.current, l.context = Dr(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Cl(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ks.enqueueReplaceState(l, l.state, null), Fs(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wr(e, t) {
    try {
      var n = "", r = t;
      do
        n += W(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Tl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ml(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Bh = typeof WeakMap == "function" ? WeakMap : Map;
  function yc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Js || (Js = !0, Hl = r), Ml(e, t);
    }, n;
  }
  function gc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ml(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Ml(e, t), typeof r != "function" && (tr === null ? tr = /* @__PURE__ */ new Set([this]) : tr.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function xc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bh();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = nm.bind(null, e, t, n), t.then(e, e));
  }
  function jc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Sc(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Kh = K.ReactCurrentOwner, Ft = !1;
  function At(e, t, n, r) {
    t.child = e === null ? Bu(t, null, n, r) : Kr(t, e.child, n, r);
  }
  function wc(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Ur(t, l), r = xl(e, t, n, r, o, l), n = jl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (it && n && rl(t), t.flags |= 1, At(e, t, r, l), t.child);
  }
  function Nc(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Xl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ec(e, t, o, r, l)) : (e = na(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ni, n(f, r) && e.ref === t.ref) return Fn(e, t, l);
    }
    return t.flags |= 1, e = sr(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ec(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ni(o, r) && e.ref === t.ref) if (Ft = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, Fn(e, t, l);
    }
    return Pl(e, t, n, r, l);
  }
  function Cc(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(Yr, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(Yr, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ze(Yr, Ut), Ut |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ze(Yr, Ut), Ut |= r;
    return At(e, t, l, n), t.child;
  }
  function _c(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Pl(e, t, n, r, l) {
    var o = Ot(n) ? hr : Et.current;
    return o = Dr(t, o), Ur(t, l), n = xl(e, t, n, r, o, l), r = jl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (it && r && rl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Tc(e, t, n, r, l) {
    if (Ot(n)) {
      var o = !0;
      _s(t);
    } else o = !1;
    if (Ur(t, l), t.stateNode === null) Us(e, t), vc(t, n, r), _l(t, n, r, l), r = !0;
    else if (e === null) {
      var f = t.stateNode, v = t.memoizedProps;
      f.props = v;
      var y = f.context, A = n.contextType;
      typeof A == "object" && A !== null ? A = qt(A) : (A = Ot(n) ? hr : Et.current, A = Dr(t, A));
      var G = n.getDerivedStateFromProps, Q = typeof G == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      Q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== r || y !== A) && kc(t, f, r, A), Zn = !1;
      var H = t.memoizedState;
      f.state = H, Fs(t, r, f, l), y = t.memoizedState, v !== r || H !== y || Lt.current || Zn ? (typeof G == "function" && (Cl(t, n, G, r), y = t.memoizedState), (v = Zn || pc(t, n, v, r, H, y, A)) ? (Q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), f.props = r, f.state = y, f.context = A, r = v) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Hu(e, t), v = t.memoizedProps, A = t.type === t.elementType ? v : un(t.type, v), f.props = A, Q = t.pendingProps, H = f.context, y = n.contextType, typeof y == "object" && y !== null ? y = qt(y) : (y = Ot(n) ? hr : Et.current, y = Dr(t, y));
      var ae = n.getDerivedStateFromProps;
      (G = typeof ae == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== Q || H !== y) && kc(t, f, r, y), Zn = !1, H = t.memoizedState, f.state = H, Fs(t, r, f, l);
      var he = t.memoizedState;
      v !== Q || H !== he || Lt.current || Zn ? (typeof ae == "function" && (Cl(t, n, ae, r), he = t.memoizedState), (A = Zn || pc(t, n, A, r, H, he, y) || !1) ? (G || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, he, y), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, he, y)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = he), f.props = r, f.state = he, f.context = y, r = A) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Al(e, t, n, r, o, l);
  }
  function Al(e, t, n, r, l, o) {
    _c(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return l && $u(t, n, !1), Fn(e, t, o);
    r = t.stateNode, Kh.current = t;
    var v = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = Kr(t, e.child, null, o), t.child = Kr(t, null, v, o)) : At(e, t, v, o), t.memoizedState = r.state, l && $u(t, n, !0), t.child;
  }
  function Mc(e) {
    var t = e.stateNode;
    t.pendingContext ? Au(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Au(e, t.context, !1), ml(e, t.containerInfo);
  }
  function Pc(e, t, n, r, l) {
    return Br(), ll(l), t.flags |= 256, At(e, t, n, r), t.child;
  }
  var Rl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ac(e, t, n) {
    var r = t.pendingProps, l = st.current, o = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(st, l & 1), e === null)
      return al(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = f) : o = ra(f, r, 0, null), e = wr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $l(n), t.memoizedState = Rl, e) : Ll(t, f));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return Hh(e, t, f, r, v, l, n);
    if (o) {
      o = r.fallback, f = t.mode, l = e.child, v = l.sibling;
      var y = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = sr(l, y), r.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? o = sr(v, o) : (o = wr(o, f, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, f = e.child.memoizedState, f = f === null ? $l(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, o.memoizedState = f, o.childLanes = e.childLanes & ~n, t.memoizedState = Rl, r;
    }
    return o = e.child, e = o.sibling, r = sr(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ll(e, t) {
    return t = ra({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hs(e, t, n, r) {
    return r !== null && ll(r), Kr(t, e.child, null, n), e = Ll(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hh(e, t, n, r, l, o, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Tl(Error(u(422))), Hs(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = ra({ mode: "visible", children: r.children }, l, 0, null), o = wr(o, l, f, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Kr(t, e.child, null, f), t.child.memoizedState = $l(f), t.memoizedState = Rl, o);
    if ((t.mode & 1) === 0) return Hs(e, t, f, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var v = r.dgst;
      return r = v, o = Error(u(419)), r = Tl(o, r, void 0), Hs(e, t, f, r);
    }
    if (v = (f & e.childLanes) !== 0, Ft || v) {
      if (r = kt, r !== null) {
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
        l = (l & (r.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ln(e, l), fn(r, e, l, -1));
      }
      return Jl(), r = Tl(Error(u(421))), Hs(e, t, f, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ht = Qn(l.nextSibling), Kt = t, it = !0, on = null, e !== null && (Xt[Zt++] = Rn, Xt[Zt++] = $n, Xt[Zt++] = mr, Rn = e.id, $n = e.overflow, mr = t), t = Ll(t, r.children), t.flags |= 4096, t);
  }
  function Rc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), dl(e.return, t, n);
  }
  function Ol(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function $c(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (At(e, t, r.children, n), r = st.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rc(e, n, t);
        else if (e.tag === 19) Rc(e, n, t);
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
    if (Ze(st, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ol(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && bs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ol(t, !0, n, null, o);
        break;
      case "together":
        Ol(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), gr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Uh(e, t, n) {
    switch (t.tag) {
      case 3:
        Mc(t), Br();
        break;
      case 5:
        Wu(t);
        break;
      case 1:
        Ot(t.type) && _s(t);
        break;
      case 4:
        ml(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Ze($s, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ze(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ac(e, t, n) : (Ze(st, st.current & 1), e = Fn(e, t, n), e !== null ? e.sibling : null);
        Ze(st, st.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return $c(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ze(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Cc(e, t, n);
    }
    return Fn(e, t, n);
  }
  var Lc, Fl, Oc, Fc;
  Lc = function(e, t) {
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
  }, Fl = function() {
  }, Oc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, kr(xn.current);
      var o = null;
      switch (n) {
        case "input":
          l = xe(e, l), r = xe(e, r), o = [];
          break;
        case "select":
          l = Z({}, l, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = gt(e, l), r = gt(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ns);
      }
      $e(n, r);
      var f;
      n = null;
      for (A in l) if (!r.hasOwnProperty(A) && l.hasOwnProperty(A) && l[A] != null) if (A === "style") {
        var v = l[A];
        for (f in v) v.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (d.hasOwnProperty(A) ? o || (o = []) : (o = o || []).push(A, null));
      for (A in r) {
        var y = r[A];
        if (v = l?.[A], r.hasOwnProperty(A) && y !== v && (y != null || v != null)) if (A === "style") if (v) {
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
  }, Fc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Di(e, t) {
    if (!it) switch (e.tailMode) {
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
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Gh(e, t, n) {
    var r = t.pendingProps;
    switch (il(t), t.tag) {
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
        return r = t.stateNode, Gr(), tt(Lt), tt(Et), kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (As(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Wl(on), on = null))), Fl(e, t), _t(t), null;
      case 5:
        pl(t);
        var l = kr(Li.current);
        if (n = t.type, e !== null && t.stateNode != null) Oc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return _t(t), null;
          }
          if (e = kr(xn.current), As(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[gn] = t, r[Mi] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                et("cancel", r), et("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ci.length; l++) et(Ci[l], r);
                break;
              case "source":
                et("error", r);
                break;
              case "img":
              case "image":
              case "link":
                et(
                  "error",
                  r
                ), et("load", r);
                break;
              case "details":
                et("toggle", r);
                break;
              case "input":
                Ae(r, o), et("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, et("invalid", r);
                break;
              case "textarea":
                Xe(r, o), et("invalid", r);
            }
            $e(n, o), l = null;
            for (var f in o) if (o.hasOwnProperty(f)) {
              var v = o[f];
              f === "children" ? typeof v == "string" ? r.textContent !== v && (o.suppressHydrationWarning !== !0 && ws(r.textContent, v, e), l = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (o.suppressHydrationWarning !== !0 && ws(
                r.textContent,
                v,
                e
              ), l = ["children", "" + v]) : d.hasOwnProperty(f) && v != null && f === "onScroll" && et("scroll", r);
            }
            switch (n) {
              case "input":
                pe(r), Je(r, o, !0);
                break;
              case "textarea":
                pe(r), nt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ns);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[gn] = t, e[Mi] = r, Lc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Re(n, r), n) {
                case "dialog":
                  et("cancel", e), et("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  et("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Ci.length; l++) et(Ci[l], e);
                  l = r;
                  break;
                case "source":
                  et("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  et(
                    "error",
                    e
                  ), et("load", e), l = r;
                  break;
                case "details":
                  et("toggle", e), l = r;
                  break;
                case "input":
                  Ae(e, r), l = xe(e, r), et("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = Z({}, r, { value: void 0 }), et("invalid", e);
                  break;
                case "textarea":
                  Xe(e, r), l = gt(e, r), et("invalid", e);
                  break;
                default:
                  l = r;
              }
              $e(n, l), v = l;
              for (o in v) if (v.hasOwnProperty(o)) {
                var y = v[o];
                o === "style" ? Qt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Wt(e, y) : typeof y == "number" && Wt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (d.hasOwnProperty(o) ? y != null && o === "onScroll" && et("scroll", e) : y != null && M(e, o, y, f));
              }
              switch (n) {
                case "input":
                  pe(e), Je(e, r, !1);
                  break;
                case "textarea":
                  pe(e), nt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + B(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Ke(e, !!r.multiple, o, !1) : r.defaultValue != null && Ke(
                    e,
                    !!r.multiple,
                    r.defaultValue,
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
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) Fc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = kr(Li.current), kr(xn.current), As(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[gn] = t, (o = r.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                ws(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ws(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gn] = t, t.stateNode = r;
        }
        return _t(t), null;
      case 13:
        if (tt(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (it && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Du(), Br(), t.flags |= 98560, o = !1;
          else if (o = As(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[gn] = t;
            } else Br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), o = !1;
          } else on !== null && (Wl(on), on = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? mt === 0 && (mt = 3) : Jl())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Gr(), Fl(e, t), e === null && _i(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return cl(t.type._context), _t(t), null;
      case 17:
        return Ot(t.type) && Cs(), _t(t), null;
      case 19:
        if (tt(st), o = t.memoizedState, o === null) return _t(t), null;
        if (r = (t.flags & 128) !== 0, f = o.rendering, f === null) if (r) Di(o, !1);
        else {
          if (mt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = bs(e), f !== null) {
              for (t.flags |= 128, Di(o, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, f = o.alternate, f === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = f.childLanes, o.lanes = f.lanes, o.child = f.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = f.memoizedProps, o.memoizedState = f.memoizedState, o.updateQueue = f.updateQueue, o.type = f.type, e = f.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Se() > Jr && (t.flags |= 128, r = !0, Di(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = bs(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Di(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !it) return _t(t), null;
          } else 2 * Se() - o.renderingStartTime > Jr && n !== 1073741824 && (t.flags |= 128, r = !0, Di(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (n = o.last, n !== null ? n.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Se(), t.sibling = null, n = st.current, Ze(st, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return Yl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Wh(e, t) {
    switch (il(t), t.tag) {
      case 1:
        return Ot(t.type) && Cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gr(), tt(Lt), tt(Et), kl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return pl(t), null;
      case 13:
        if (tt(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return tt(st), null;
      case 4:
        return Gr(), null;
      case 10:
        return cl(t.type._context), null;
      case 22:
      case 23:
        return Yl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gs = !1, Tt = !1, Qh = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Qr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ot(e, t, r);
    }
    else n.current = null;
  }
  function bl(e, t, n) {
    try {
      n();
    } catch (r) {
      ot(e, t, r);
    }
  }
  var bc = !1;
  function Yh(e, t) {
    if (Ya = fs, e = pu(), Va(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, v = -1, y = -1, A = 0, G = 0, Q = e, H = null;
          t: for (; ; ) {
            for (var ae; Q !== n || l !== 0 && Q.nodeType !== 3 || (v = f + l), Q !== o || r !== 0 && Q.nodeType !== 3 || (y = f + r), Q.nodeType === 3 && (f += Q.nodeValue.length), (ae = Q.firstChild) !== null; )
              H = Q, Q = ae;
            for (; ; ) {
              if (Q === e) break t;
              if (H === n && ++A === l && (v = f), H === o && ++G === r && (y = f), (ae = Q.nextSibling) !== null) break;
              Q = H, H = Q.parentNode;
            }
            Q = ae;
          }
          n = v === -1 || y === -1 ? null : { start: v, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ja = { focusedElem: e, selectionRange: n }, fs = !1, ce = t; ce !== null; ) if (t = ce, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ce = e;
    else for (; ce !== null; ) {
      t = ce;
      try {
        var he = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var ve = he.memoizedProps, ut = he.memoizedState, _ = t.stateNode, x = _.getSnapshotBeforeUpdate(t.elementType === t.type ? ve : un(t.type, ve), ut);
              _.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var P = t.stateNode.containerInfo;
            P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (J) {
        ot(t, t.return, J);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ce = e;
        break;
      }
      ce = t.return;
    }
    return he = bc, bc = !1, he;
  }
  function zi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && bl(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ws(e, t) {
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
  function Il(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Ic(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Mi], delete t[el], delete t[Ah], delete t[Rh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Dl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ns));
    else if (r !== 4 && (e = e.child, e !== null)) for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), e = e.sibling;
  }
  function zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (zl(e, t, n), e = e.sibling; e !== null; ) zl(e, t, n), e = e.sibling;
  }
  var St = null, cn = !1;
  function er(e, t, n) {
    for (n = n.child; n !== null; ) Vc(e, t, n), n = n.sibling;
  }
  function Vc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(as, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Tt || Qr(n, t);
      case 6:
        var r = St, l = cn;
        St = null, er(e, t, n), St = r, cn = l, St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? qa(e.parentNode, n) : e.nodeType === 1 && qa(e, n), yi(e)) : qa(St, n.stateNode));
        break;
      case 4:
        r = St, l = cn, St = n.stateNode.containerInfo, cn = !0, er(e, t, n), St = r, cn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, f = o.destroy;
            o = o.tag, f !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && bl(n, t, f), l = l.next;
          } while (l !== r);
        }
        er(e, t, n);
        break;
      case 1:
        if (!Tt && (Qr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (v) {
          ot(n, t, v);
        }
        er(e, t, n);
        break;
      case 21:
        er(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Tt = (r = Tt) || n.memoizedState !== null, er(e, t, n), Tt = r) : er(e, t, n);
        break;
      default:
        er(e, t, n);
    }
  }
  function Bc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Qh()), t.forEach(function(r) {
        var l = im.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
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
        Vc(o, f, l), St = null, cn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (A) {
        ot(l, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kc(t, e), t = t.sibling;
  }
  function Kc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), Sn(e), r & 4) {
          try {
            zi(3, e, e.return), Ws(3, e);
          } catch (ve) {
            ot(e, e.return, ve);
          }
          try {
            zi(5, e, e.return);
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        break;
      case 1:
        dn(t, e), Sn(e), r & 512 && n !== null && Qr(n, n.return);
        break;
      case 5:
        if (dn(t, e), Sn(e), r & 512 && n !== null && Qr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Wt(l, "");
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, f = n !== null ? n.memoizedProps : o, v = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            v === "input" && o.type === "radio" && o.name != null && _e(l, o), Re(v, f);
            var A = Re(v, o);
            for (f = 0; f < y.length; f += 2) {
              var G = y[f], Q = y[f + 1];
              G === "style" ? Qt(l, Q) : G === "dangerouslySetInnerHTML" ? sn(l, Q) : G === "children" ? Wt(l, Q) : M(l, G, Q, A);
            }
            switch (v) {
              case "input":
                Le(l, o);
                break;
              case "textarea":
                ze(l, o);
                break;
              case "select":
                var H = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var ae = o.value;
                ae != null ? Ke(l, !!o.multiple, ae, !1) : H !== !!o.multiple && (o.defaultValue != null ? Ke(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ke(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Mi] = o;
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        break;
      case 6:
        if (dn(t, e), Sn(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (dn(t, e), Sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          yi(t.containerInfo);
        } catch (ve) {
          ot(e, e.return, ve);
        }
        break;
      case 4:
        dn(t, e), Sn(e);
        break;
      case 13:
        dn(t, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Kl = Se())), r & 4 && Bc(e);
        break;
      case 22:
        if (G = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (A = Tt) || G, dn(t, e), Tt = A) : dn(t, e), Sn(e), r & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !G && (e.mode & 1) !== 0) for (ce = e, G = e.child; G !== null; ) {
            for (Q = ce = G; ce !== null; ) {
              switch (H = ce, ae = H.child, H.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zi(4, H, H.return);
                  break;
                case 1:
                  Qr(H, H.return);
                  var he = H.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    r = H, n = H.return;
                    try {
                      t = r, he.props = t.memoizedProps, he.state = t.memoizedState, he.componentWillUnmount();
                    } catch (ve) {
                      ot(r, n, ve);
                    }
                  }
                  break;
                case 5:
                  Qr(H, H.return);
                  break;
                case 22:
                  if (H.memoizedState !== null) {
                    Gc(Q);
                    continue;
                  }
              }
              ae !== null ? (ae.return = H, ce = ae) : Gc(Q);
            }
            G = G.sibling;
          }
          e: for (G = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (G === null) {
                G = Q;
                try {
                  l = Q.stateNode, A ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (v = Q.stateNode, y = Q.memoizedProps.style, f = y != null && y.hasOwnProperty("display") ? y.display : null, v.style.display = je("display", f));
                } catch (ve) {
                  ot(e, e.return, ve);
                }
              }
            } else if (Q.tag === 6) {
              if (G === null) try {
                Q.stateNode.nodeValue = A ? "" : Q.memoizedProps;
              } catch (ve) {
                ot(e, e.return, ve);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === e) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === e) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === e) break e;
              G === Q && (G = null), Q = Q.return;
            }
            G === Q && (G = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), Sn(e), r & 4 && Bc(e);
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
            if (Dc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Wt(l, ""), r.flags &= -33);
            var o = zc(e);
            zl(e, o, l);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, v = zc(e);
            Dl(e, v, f);
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
  function Jh(e, t, n) {
    ce = e, Hc(e);
  }
  function Hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ce !== null; ) {
      var l = ce, o = l.child;
      if (l.tag === 22 && r) {
        var f = l.memoizedState !== null || Gs;
        if (!f) {
          var v = l.alternate, y = v !== null && v.memoizedState !== null || Tt;
          v = Gs;
          var A = Tt;
          if (Gs = f, (Tt = y) && !A) for (ce = l; ce !== null; ) f = ce, y = f.child, f.tag === 22 && f.memoizedState !== null ? Wc(l) : y !== null ? (y.return = f, ce = y) : Wc(l);
          for (; o !== null; ) ce = o, Hc(o), o = o.sibling;
          ce = l, Gs = v, Tt = A;
        }
        Uc(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, ce = o) : Uc(e);
    }
  }
  function Uc(e) {
    for (; ce !== null; ) {
      var t = ce;
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
              var r = t.stateNode;
              if (t.flags & 4 && !Tt) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Gu(t, o, r);
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
                Gu(t, f, n);
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
                  var G = A.memoizedState;
                  if (G !== null) {
                    var Q = G.dehydrated;
                    Q !== null && yi(Q);
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
          Tt || t.flags & 512 && Il(t);
        } catch (H) {
          ot(t, t.return, H);
        }
      }
      if (t === e) {
        ce = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ce = n;
        break;
      }
      ce = t.return;
    }
  }
  function Gc(e) {
    for (; ce !== null; ) {
      var t = ce;
      if (t === e) {
        ce = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ce = n;
        break;
      }
      ce = t.return;
    }
  }
  function Wc(e) {
    for (; ce !== null; ) {
      var t = ce;
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
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                ot(t, l, y);
              }
            }
            var o = t.return;
            try {
              Il(t);
            } catch (y) {
              ot(t, o, y);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Il(t);
            } catch (y) {
              ot(t, f, y);
            }
        }
      } catch (y) {
        ot(t, t.return, y);
      }
      if (t === e) {
        ce = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, ce = v;
        break;
      }
      ce = t.return;
    }
  }
  var Xh = Math.ceil, Qs = K.ReactCurrentDispatcher, Vl = K.ReactCurrentOwner, tn = K.ReactCurrentBatchConfig, De = 0, kt = null, dt = null, wt = 0, Ut = 0, Yr = Yn(0), mt = 0, Vi = null, gr = 0, Ys = 0, Bl = 0, Bi = null, bt = null, Kl = 0, Jr = 1 / 0, bn = null, Js = !1, Hl = null, tr = null, Xs = !1, nr = null, Zs = 0, Ki = 0, Ul = null, qs = -1, ea = 0;
  function Rt() {
    return (De & 6) !== 0 ? Se() : qs !== -1 ? qs : qs = Se();
  }
  function rr(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && wt !== 0 ? wt & -wt : Lh.transition !== null ? (ea === 0 && (ea = zo()), ea) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yo(e.type)), e);
  }
  function fn(e, t, n, r) {
    if (50 < Ki) throw Ki = 0, Ul = null, Error(u(185));
    hi(e, n, r), ((De & 2) === 0 || e !== kt) && (e === kt && ((De & 2) === 0 && (Ys |= n), mt === 4 && ir(e, wt)), It(e, r), n === 1 && De === 0 && (t.mode & 1) === 0 && (Jr = Se() + 500, Ts && Xn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    Lf(e, t);
    var r = us(e, e === kt ? wt : 0);
    if (r === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? $h(Yc.bind(null, e)) : Lu(Yc.bind(null, e)), Mh(function() {
        (De & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Vo(r)) {
          case 1:
            n = lt;
            break;
          case 4:
            n = cr;
            break;
          case 16:
            n = Vn;
            break;
          case 536870912:
            n = Do;
            break;
          default:
            n = Vn;
        }
        n = rd(n, Qc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Qc(e, t) {
    if (qs = -1, ea = 0, (De & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Xr() && e.callbackNode !== n) return null;
    var r = us(e, e === kt ? wt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ta(e, r);
    else {
      t = r;
      var l = De;
      De |= 2;
      var o = Xc();
      (kt !== e || wt !== t) && (bn = null, Jr = Se() + 500, jr(e, t));
      do
        try {
          em();
          break;
        } catch (v) {
          Jc(e, v);
        }
      while (!0);
      ul(), Qs.current = o, De = l, dt !== null ? t = 0 : (kt = null, wt = 0, t = mt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ea(e), l !== 0 && (r = l, t = Gl(e, l))), t === 1) throw n = Vi, jr(e, 0), ir(e, r), It(e, Se()), n;
      if (t === 6) ir(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Zh(l) && (t = ta(e, r), t === 2 && (o = Ea(e), o !== 0 && (r = o, t = Gl(e, o))), t === 1)) throw n = Vi, jr(e, 0), ir(e, r), It(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Sr(e, bt, bn);
            break;
          case 3:
            if (ir(e, r), (r & 130023424) === r && (t = Kl + 500 - Se(), 10 < t)) {
              if (us(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Rt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Za(Sr.bind(null, e, bt, bn), t);
              break;
            }
            Sr(e, bt, bn);
            break;
          case 4:
            if (ir(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var f = 31 - an(r);
              o = 1 << f, f = t[f], f > l && (l = f), r &= ~o;
            }
            if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Za(Sr.bind(null, e, bt, bn), r);
              break;
            }
            Sr(e, bt, bn);
            break;
          case 5:
            Sr(e, bt, bn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return It(e, Se()), e.callbackNode === n ? Qc.bind(null, e) : null;
  }
  function Gl(e, t) {
    var n = Bi;
    return e.current.memoizedState.isDehydrated && (jr(e, t).flags |= 256), e = ta(e, t), e !== 2 && (t = bt, bt = n, t !== null && Wl(t)), e;
  }
  function Wl(e) {
    bt === null ? bt = e : bt.push.apply(bt, e);
  }
  function Zh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
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
  function ir(e, t) {
    for (t &= ~Bl, t &= ~Ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Yc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Xr();
    var t = us(e, 0);
    if ((t & 1) === 0) return It(e, Se()), null;
    var n = ta(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ea(e);
      r !== 0 && (t = r, n = Gl(e, r));
    }
    if (n === 1) throw n = Vi, jr(e, 0), ir(e, t), It(e, Se()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sr(e, bt, bn), It(e, Se()), null;
  }
  function Ql(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Jr = Se() + 500, Ts && Xn());
    }
  }
  function xr(e) {
    nr !== null && nr.tag === 0 && (De & 6) === 0 && Xr();
    var t = De;
    De |= 1;
    var n = tn.transition, r = Ue;
    try {
      if (tn.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = r, tn.transition = n, De = t, (De & 6) === 0 && Xn();
    }
  }
  function Yl() {
    Ut = Yr.current, tt(Yr);
  }
  function jr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Th(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var r = n;
      switch (il(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Cs();
          break;
        case 3:
          Gr(), tt(Lt), tt(Et), kl();
          break;
        case 5:
          pl(r);
          break;
        case 4:
          Gr();
          break;
        case 13:
          tt(st);
          break;
        case 19:
          tt(st);
          break;
        case 10:
          cl(r.type._context);
          break;
        case 22:
        case 23:
          Yl();
      }
      n = n.return;
    }
    if (kt = e, dt = e = sr(e.current, null), wt = Ut = t, mt = 0, Vi = null, Bl = Ys = gr = 0, bt = Bi = null, vr !== null) {
      for (t = 0; t < vr.length; t++) if (n = vr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var f = o.next;
          o.next = l, r.next = f;
        }
        n.pending = r;
      }
      vr = null;
    }
    return e;
  }
  function Jc(e, t) {
    do {
      var n = dt;
      try {
        if (ul(), Is.current = Bs, Ds) {
          for (var r = at.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Ds = !1;
        }
        if (yr = 0, vt = ht = at = null, Oi = !1, Fi = 0, Vl.current = null, n === null || n.return === null) {
          mt = 1, Vi = t, dt = null;
          break;
        }
        e: {
          var o = e, f = n.return, v = n, y = t;
          if (t = wt, v.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var A = y, G = v, Q = G.tag;
            if ((G.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var H = G.alternate;
              H ? (G.updateQueue = H.updateQueue, G.memoizedState = H.memoizedState, G.lanes = H.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ae = jc(f);
            if (ae !== null) {
              ae.flags &= -257, Sc(ae, f, v, o, t), ae.mode & 1 && xc(o, A, t), t = ae, y = A;
              var he = t.updateQueue;
              if (he === null) {
                var ve = /* @__PURE__ */ new Set();
                ve.add(y), t.updateQueue = ve;
              } else he.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                xc(o, A, t), Jl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (it && v.mode & 1) {
            var ut = jc(f);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), Sc(ut, f, v, o, t), ll(Wr(y, v));
              break e;
            }
          }
          o = y = Wr(y, v), mt !== 4 && (mt = 2), Bi === null ? Bi = [o] : Bi.push(o), o = f;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = yc(o, y, t);
                Uu(o, _);
                break e;
              case 1:
                v = y;
                var x = o.type, P = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (tr === null || !tr.has(P)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var J = gc(o, v, t);
                  Uu(o, J);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        qc(n);
      } catch (ye) {
        t = ye, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xc() {
    var e = Qs.current;
    return Qs.current = Bs, e === null ? Bs : e;
  }
  function Jl() {
    (mt === 0 || mt === 3 || mt === 2) && (mt = 4), kt === null || (gr & 268435455) === 0 && (Ys & 268435455) === 0 || ir(kt, wt);
  }
  function ta(e, t) {
    var n = De;
    De |= 2;
    var r = Xc();
    (kt !== e || wt !== t) && (bn = null, jr(e, t));
    do
      try {
        qh();
        break;
      } catch (l) {
        Jc(e, l);
      }
    while (!0);
    if (ul(), De = n, Qs.current = r, dt !== null) throw Error(u(261));
    return kt = null, wt = 0, mt;
  }
  function qh() {
    for (; dt !== null; ) Zc(dt);
  }
  function em() {
    for (; dt !== null && !L(); ) Zc(dt);
  }
  function Zc(e) {
    var t = nd(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? qc(e) : dt = t, Vl.current = null;
  }
  function qc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Gh(n, t, Ut), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = Wh(n, t), n !== null) {
          n.flags &= 32767, dt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          mt = 6, dt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    mt === 0 && (mt = 5);
  }
  function Sr(e, t, n) {
    var r = Ue, l = tn.transition;
    try {
      tn.transition = null, Ue = 1, tm(e, t, n, r);
    } finally {
      tn.transition = l, Ue = r;
    }
    return null;
  }
  function tm(e, t, n, r) {
    do
      Xr();
    while (nr !== null);
    if ((De & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Of(e, o), e === kt && (dt = kt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Xs || (Xs = !0, rd(Vn, function() {
      return Xr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = tn.transition, tn.transition = null;
      var f = Ue;
      Ue = 1;
      var v = De;
      De |= 4, Vl.current = null, Yh(e, n), Kc(n, e), jh(Ja), fs = !!Ya, Ja = Ya = null, e.current = n, Jh(n), fe(), De = v, Ue = f, tn.transition = o;
    } else e.current = n;
    if (Xs && (Xs = !1, nr = e, Zs = l), o = e.pendingLanes, o === 0 && (tr = null), Mf(n.stateNode), It(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Js) throw Js = !1, e = Hl, Hl = null, e;
    return (Zs & 1) !== 0 && e.tag !== 0 && Xr(), o = e.pendingLanes, (o & 1) !== 0 ? e === Ul ? Ki++ : (Ki = 0, Ul = e) : Ki = 0, Xn(), null;
  }
  function Xr() {
    if (nr !== null) {
      var e = Vo(Zs), t = tn.transition, n = Ue;
      try {
        if (tn.transition = null, Ue = 16 > e ? 16 : e, nr === null) var r = !1;
        else {
          if (e = nr, nr = null, Zs = 0, (De & 6) !== 0) throw Error(u(331));
          var l = De;
          for (De |= 4, ce = e.current; ce !== null; ) {
            var o = ce, f = o.child;
            if ((ce.flags & 16) !== 0) {
              var v = o.deletions;
              if (v !== null) {
                for (var y = 0; y < v.length; y++) {
                  var A = v[y];
                  for (ce = A; ce !== null; ) {
                    var G = ce;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zi(8, G, o);
                    }
                    var Q = G.child;
                    if (Q !== null) Q.return = G, ce = Q;
                    else for (; ce !== null; ) {
                      G = ce;
                      var H = G.sibling, ae = G.return;
                      if (Ic(G), G === A) {
                        ce = null;
                        break;
                      }
                      if (H !== null) {
                        H.return = ae, ce = H;
                        break;
                      }
                      ce = ae;
                    }
                  }
                }
                var he = o.alternate;
                if (he !== null) {
                  var ve = he.child;
                  if (ve !== null) {
                    he.child = null;
                    do {
                      var ut = ve.sibling;
                      ve.sibling = null, ve = ut;
                    } while (ve !== null);
                  }
                }
                ce = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && f !== null) f.return = o, ce = f;
            else e: for (; ce !== null; ) {
              if (o = ce, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  zi(9, o, o.return);
              }
              var _ = o.sibling;
              if (_ !== null) {
                _.return = o.return, ce = _;
                break e;
              }
              ce = o.return;
            }
          }
          var x = e.current;
          for (ce = x; ce !== null; ) {
            f = ce;
            var P = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && P !== null) P.return = f, ce = P;
            else e: for (f = x; ce !== null; ) {
              if (v = ce, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, v);
                }
              } catch (ye) {
                ot(v, v.return, ye);
              }
              if (v === f) {
                ce = null;
                break e;
              }
              var J = v.sibling;
              if (J !== null) {
                J.return = v.return, ce = J;
                break e;
              }
              ce = v.return;
            }
          }
          if (De = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(as, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ue = n, tn.transition = t;
      }
    }
    return !1;
  }
  function ed(e, t, n) {
    t = Wr(n, t), t = yc(e, t, 1), e = qn(e, t, 1), t = Rt(), e !== null && (hi(e, 1, t), It(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) ed(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tr === null || !tr.has(r))) {
          e = Wr(n, e), e = gc(t, e, 1), t = qn(t, e, 1), e = Rt(), t !== null && (hi(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function nm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, kt === e && (wt & n) === n && (mt === 4 || mt === 3 && (wt & 130023424) === wt && 500 > Se() - Kl ? jr(e, 0) : Bl |= n), It(e, t);
  }
  function td(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = os, os <<= 1, (os & 130023424) === 0 && (os = 4194304)));
    var n = Rt();
    e = Ln(e, t), e !== null && (hi(e, t, n), It(e, n));
  }
  function rm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), td(e, n);
  }
  function im(e, t) {
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
        throw Error(u(314));
    }
    r !== null && r.delete(t), td(e, n);
  }
  var nd;
  nd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, Uh(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, it && (t.flags & 1048576) !== 0 && Ou(t, Ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Us(e, t), e = t.pendingProps;
        var l = Dr(t, Et.current);
        Ur(t, n), l = xl(null, t, r, e, l, n);
        var o = jl();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(r) ? (o = !0, _s(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, hl(t), l.updater = Ks, t.stateNode = l, l._reactInternals = t, _l(t, r, e, n), t = Al(null, t, r, !0, o, n)) : (t.tag = 0, it && o && rl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Us(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = am(r), e = un(r, e), l) {
            case 0:
              t = Pl(null, t, r, e, n);
              break e;
            case 1:
              t = Tc(null, t, r, e, n);
              break e;
            case 11:
              t = wc(null, t, r, e, n);
              break e;
            case 14:
              t = Nc(null, t, r, un(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : un(r, l), Pl(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : un(r, l), Tc(e, t, r, l, n);
      case 3:
        e: {
          if (Mc(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, Hu(e, t), Fs(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Wr(Error(u(423)), t), t = Pc(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Wr(Error(u(424)), t), t = Pc(e, t, r, n, l);
            break e;
          } else for (Ht = Qn(t.stateNode.containerInfo.firstChild), Kt = t, it = !0, on = null, n = Bu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Br(), r === l) {
              t = Fn(e, t, n);
              break e;
            }
            At(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Wu(t), e === null && al(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, f = l.children, Xa(r, l) ? f = null : o !== null && Xa(r, o) && (t.flags |= 32), _c(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && al(t), null;
      case 13:
        return Ac(e, t, n);
      case 4:
        return ml(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kr(t, null, r, n) : At(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : un(r, l), wc(e, t, r, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, f = l.value, Ze($s, r._currentValue), r._currentValue = f, o !== null) if (ln(o.value, f)) {
            if (o.children === l.children && !Lt.current) {
              t = Fn(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var v = o.dependencies;
            if (v !== null) {
              f = o.child;
              for (var y = v.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = On(-1, n & -n), y.tag = 2;
                    var A = o.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var G = A.pending;
                      G === null ? y.next = y : (y.next = G.next, G.next = y), A.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), dl(
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
              f.lanes |= n, v = f.alternate, v !== null && (v.lanes |= n), dl(f, n, t), f = o.sibling;
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
        return l = t.type, r = t.pendingProps.children, Ur(t, n), l = qt(l), r = r(l), t.flags |= 1, At(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = un(r, t.pendingProps), l = un(r.type, l), Nc(e, t, r, l, n);
      case 15:
        return Ec(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : un(r, l), Us(e, t), t.tag = 1, Ot(r) ? (e = !0, _s(t)) : e = !1, Ur(t, n), vc(t, r, l), _l(t, r, l, n), Al(null, t, r, !0, e, n);
      case 19:
        return $c(e, t, n);
      case 22:
        return Cc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function rd(e, t) {
    return Tn(e, t);
  }
  function sm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, r) {
    return new sm(e, t, n, r);
  }
  function Xl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function am(e) {
    if (typeof e == "function") return Xl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function sr(e, t) {
    var n = e.alternate;
    return n === null ? (n = nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function na(e, t, n, r, l, o) {
    var f = 2;
    if (r = e, typeof e == "function") Xl(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case T:
        return wr(n.children, l, o, t);
      case V:
        f = 8, l |= 8;
        break;
      case ee:
        return e = nn(12, n, t, l | 2), e.elementType = ee, e.lanes = o, e;
      case oe:
        return e = nn(13, n, t, l), e.elementType = oe, e.lanes = o, e;
      case Me:
        return e = nn(19, n, t, l), e.elementType = Me, e.lanes = o, e;
      case ie:
        return ra(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case le:
            f = 10;
            break e;
          case Ce:
            f = 9;
            break e;
          case ne:
            f = 11;
            break e;
          case U:
            f = 14;
            break e;
          case ue:
            f = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = nn(f, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function wr(e, t, n, r) {
    return e = nn(7, e, r, t), e.lanes = n, e;
  }
  function ra(e, t, n, r) {
    return e = nn(22, e, r, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Zl(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function ql(e, t, n) {
    return t = nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function lm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ca(0), this.expirationTimes = Ca(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ca(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function eo(e, t, n, r, l, o, f, v, y) {
    return e = new lm(e, t, n, v, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hl(o), e;
  }
  function om(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function id(e) {
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
      if (Ot(n)) return Ru(e, n, t);
    }
    return t;
  }
  function sd(e, t, n, r, l, o, f, v, y) {
    return e = eo(n, r, !0, e, l, o, f, v, y), e.context = id(null), n = e.current, r = Rt(), l = rr(n), o = On(r, l), o.callback = t ?? null, qn(n, o, l), e.current.lanes = l, hi(e, l, r), It(e, r), e;
  }
  function ia(e, t, n, r) {
    var l = t.current, o = Rt(), f = rr(l);
    return n = id(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(o, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qn(l, t, f), e !== null && (fn(e, l, f, o), Os(e, l, f)), f;
  }
  function sa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function ad(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function to(e, t) {
    ad(e, t), (e = e.alternate) && ad(e, t);
  }
  function um() {
    return null;
  }
  var ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function no(e) {
    this._internalRoot = e;
  }
  aa.prototype.render = no.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    ia(e, t, null, null);
  }, aa.prototype.unmount = no.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xr(function() {
        ia(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function aa(e) {
    this._internalRoot = e;
  }
  aa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ho();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Wo(e);
    }
  };
  function ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function la(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function od() {
  }
  function cm(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var A = sa(f);
          o.call(A);
        };
      }
      var f = sd(t, r, e, 0, null, !1, !1, "", od);
      return e._reactRootContainer = f, e[Pn] = f.current, _i(e.nodeType === 8 ? e.parentNode : e), xr(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var v = r;
      r = function() {
        var A = sa(y);
        v.call(A);
      };
    }
    var y = eo(e, 0, !1, null, null, !1, !1, "", od);
    return e._reactRootContainer = y, e[Pn] = y.current, _i(e.nodeType === 8 ? e.parentNode : e), xr(function() {
      ia(t, y, n, r);
    }), y;
  }
  function oa(e, t, n, r, l) {
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
      ia(t, f, e, l);
    } else f = cm(n, t, e, l, r);
    return sa(f);
  }
  Bo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fi(t.pendingLanes);
          n !== 0 && (_a(t, n | 1), It(t, Se()), (De & 6) === 0 && (Jr = Se() + 500, Xn()));
        }
        break;
      case 13:
        xr(function() {
          var r = Ln(e, 1);
          if (r !== null) {
            var l = Rt();
            fn(r, e, 1, l);
          }
        }), to(e, 1);
    }
  }, Ta = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Rt();
        fn(t, e, 134217728, n);
      }
      to(e, 134217728);
    }
  }, Ko = function(e) {
    if (e.tag === 13) {
      var t = rr(e), n = Ln(e, t);
      if (n !== null) {
        var r = Rt();
        fn(n, e, t, r);
      }
      to(e, t);
    }
  }, Ho = function() {
    return Ue;
  }, Uo = function(e, t) {
    var n = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = n;
    }
  }, Yt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Le(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Es(r);
              if (!l) throw Error(u(90));
              de(r), Le(r, l);
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
  }, be = Ql, rt = xr;
  var dm = { usingClientEntryPoint: !1, Events: [Pi, br, Es, pn, zn, Ql] }, Hi = { findFiberByHostInstance: fr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fm = { bundleType: Hi.bundleType, version: Hi.version, rendererPackageName: Hi.rendererPackageName, rendererConfig: Hi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = is(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Hi.findFiberByHostInstance || um, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ua.isDisabled && ua.supportsFiber) try {
      as = ua.inject(fm), yn = ua;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ro(t)) throw Error(u(200));
    return om(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!ro(e)) throw Error(u(299));
    var n = !1, r = "", l = ld;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = eo(e, 1, !1, null, null, n, !1, r, l), e[Pn] = t.current, _i(e.nodeType === 8 ? e.parentNode : e), new no(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = is(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return xr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!la(t)) throw Error(u(200));
    return oa(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!ro(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", f = ld;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = sd(t, null, e, 1, n ?? null, l, !1, o, f), e[Pn] = t.current, _i(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new aa(t);
  }, Dt.render = function(e, t, n) {
    if (!la(t)) throw Error(u(200));
    return oa(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!la(e)) throw Error(u(40));
    return e._reactRootContainer ? (xr(function() {
      oa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Ql, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!la(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return oa(e, t, n, !1, r);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var vd;
function jm() {
  if (vd) return ao.exports;
  vd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), ao.exports = xm(), ao.exports;
}
var kd;
function Sm() {
  if (kd) return ca;
  kd = 1;
  var i = jm();
  return ca.createRoot = i.createRoot, ca.hydrateRoot = i.hydrateRoot, ca;
}
var wm = Sm();
const Nm = (() => {
  const i = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], $ = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], R = {
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
  }, O = 26, D = 72, w = 30, N = 54, z = 34, E = 11, M = (O + D) / 2, K = w + (c.length - 1) * z + 30, X = (S) => D + S * N, q = (S) => S === 0 ? M : X(S) - N / 2, T = (S) => w + S * z;
  function V(S, B, I) {
    const re = a.indexOf(i[S][0]) + Number(I.slice(-1)) - 1, pe = re % a.length, de = u[pe] + 12 * Math.floor(re / a.length), ge = S + B - de;
    return a[pe] + (ge < 0 ? "♭" : "♯").repeat(Math.abs(ge));
  }
  function ee(S) {
    return [...S.base, ...S.add].sort((B, I) => B[0] - I[0]);
  }
  function le(S, B, I) {
    const re = B + (I ? 1 : 0), pe = m[re % m.length], de = Math.min(...pe.map(([Le]) => Le)), ge = Math.max(...pe.map(([, Le]) => Le));
    let _e = (S - d % 12 + 12) % 12 - (I ? 8 : 5) + 12 * Math.floor(re / m.length);
    return de + _e < 0 && (_e += 12), ge + _e > h.pentatonic && (_e -= 12), {
      strings: pe.map((Le) => Le.map((Je) => Je + _e)),
      start: de + _e,
      end: ge + _e
    };
  }
  function Ce(S, B, I) {
    const re = I[B], pe = (S + re - d % 12 + 12) % 12, de = d + pe - re, ge = c.map((xe, Ae) => {
      const _e = B + (c.length - 1 - Ae) * 3;
      return [_e, _e + 1, _e + 2].map((Le) => {
        const Je = Math.floor(Le / I.length), Be = I[Le % I.length];
        return de + Be + 12 * Je - xe;
      });
    });
    return {
      strings: ge,
      start: Math.min(...ge.map((xe) => xe[0])),
      end: Math.max(...ge.map((xe) => xe.at(-1)))
    };
  }
  function ne(S, B) {
    const I = [], re = Math.ceil(-S.end / 12) * 12;
    for (let de = re; S.start + de <= B; de += 12) {
      const ge = S.strings.map((Ae) => Ae.map((_e) => _e + de).filter((_e) => _e >= 0 && _e <= B)), xe = ge.flat();
      I.push({
        strings: ge,
        start: Math.min(...xe),
        end: Math.max(...xe),
        partial: S.start + de < 0 || S.end + de > B
      });
    }
    const pe = I.filter((de) => !de.partial);
    return pe.length ? pe : I;
  }
  function oe(S) {
    return ee(S).length === p;
  }
  function Me(S, B, I) {
    const re = oe(B);
    S.querySelector('[value="3nps"]').disabled = !re, S.value = re ? I ?? "3nps" : "pentatonic";
  }
  function U(S, B, I, re, pe) {
    const de = ee(B).map(([ge]) => ge);
    return re.map((ge) => {
      const xe = ge - 1, Ae = I === "3nps" ? Ce(S, xe, de) : le(S, xe, B.base === C), _e = pe === void 0 ? [Ae] : ne(Ae, pe);
      return { number: ge, positions: _e };
    });
  }
  function ue(S, B) {
    const I = S.getBoundingClientRect(), re = S.querySelectorAll(B);
    let pe = 1 / 0;
    re.forEach((de) => {
      const ge = de.getBoundingClientRect();
      let xe = 0;
      ge.left < I.left ? xe = ge.left - I.left - 8 : ge.right > I.right && (xe = ge.right - I.right + 8), Math.abs(xe) < Math.abs(pe) && (pe = xe);
    }), Number.isFinite(pe) && (S.scrollLeft += pe);
  }
  function ie(S, B = !1) {
    const I = S === "3nps" ? p : m.length;
    return Array.from({ length: I }, (re, pe) => {
      const de = pe + 1;
      return '<label class="box-toggle" data-box="' + de + '"><input type="checkbox" value="' + de + '"' + (B && pe === 0 ? " checked" : "") + "> Boksi " + de + "</label>";
    }).join("");
  }
  function Y(S, B) {
    const I = ee(B), re = new Map(I.map(([de, ge]) => [de, V(S, de, ge)])), pe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return I.flatMap(([de, ge]) => pe.flatMap(({ suffix: xe, base: Ae }) => {
      const _e = Ae.map(([Le]) => re.get((de + Le) % 12));
      return _e.every(Boolean) ? {
        root: (S + de) % 12,
        degree: Number(String(ge).replace(/\D/g, "")),
        name: _e[0] + xe,
        notes: _e,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function te(S, B) {
    const I = S.base.map(([de]) => (S.root + de) % 12), re = c.map((de) => {
      const ge = [];
      for (let xe = 0; xe <= B; xe++) {
        const Ae = (de + xe) % 12;
        I.includes(Ae) && ge.push({ fret: xe, pitch: Ae });
      }
      return ge;
    }), pe = [];
    for (let de = 0; de <= re.length - 3; de++)
      for (const ge of re[de])
        for (const xe of re[de + 1])
          if (ge.pitch !== xe.pitch)
            for (const Ae of re[de + 2]) {
              if (Ae.pitch === ge.pitch || Ae.pitch === xe.pitch) continue;
              const _e = [ge.fret, xe.fret, Ae.fret], Le = Math.min(..._e), Je = Math.max(..._e);
              if (Je - Le > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(de, 3, ..._e), pe.push({ strings: Be, low: Le, high: Je });
            }
    return pe.sort((de, ge) => de.high - ge.high || de.low - ge.low);
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
  function b(S, B) {
    const I = Z[S + ":" + B];
    if (I) return { frets: I, barre: null };
    let re = null;
    return g.forEach(({ string: pe, openPC: de, shapes: ge }) => {
      const xe = ge[B];
      if (!xe) return;
      let Ae = (S - de + 12) % 12;
      if (Ae + Math.min(...xe.filter((Je) => Je !== null)) < 0 && (Ae += 12), re && re.fret <= Ae) return;
      const _e = xe.map((Je) => Je === null ? null : Ae + Je), Le = Ae > 0 && xe.at(-1) === 0 ? { fret: Ae, from: pe, to: xe.length - 1 } : null;
      re = { fret: Ae, frets: _e, barre: Le };
    }), re && { frets: re.frets, barre: re.barre };
  }
  function ke(S, { frets: B, barre: I }, re) {
    const _e = [...c].reverse(), Le = B.filter((ze) => ze > 0), Be = !Le.length || Math.max(...Le) <= 4 && (B.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), We = (ze) => 24 + ze * 14, Ke = (ze) => 30 + (ze - Be) * 18 + 18 / 2, gt = 102;
    let Xe = '<svg class="chord-svg" viewBox="0 0 108 ' + (gt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + re + "-ote paksusta kielestä ohueen: " + B.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Xe += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + ze * 18) + '" x2="' + We(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return B.forEach((ze, nt) => {
      Xe += '<line class="string" x1="' + We(nt) + '" y1="30" x2="' + We(nt) + '" y2="' + gt + '"/>';
    }), Be > 1 && (Xe += '<text class="fret-label" x="15" y="' + (Ke(Be) + 4) + '">' + Be + "</text>"), I && (Xe += '<rect class="barre" x="' + (We(I.from) - 6.5) + '" y="' + (Ke(I.fret) - 6.5) + '" width="' + ((I.to - I.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((ze, nt) => {
      if (ze === null) {
        Xe += '<text class="marker" x="' + We(nt) + '" y="22">×</text>';
        return;
      }
      const Mt = (_e[nt] + ze) % 12 === S;
      if (ze === 0) {
        Xe += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + We(nt) + '" cy="18" r="4.5"/>';
        return;
      }
      I && ze === I.fret && nt >= I.from && nt <= I.to && !Mt || (Xe += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + We(nt) + '" cy="' + Ke(ze) + '" r="6.5"/>');
    }), Xe + "</svg>";
  }
  function we(S, B) {
    const I = new URLSearchParams(location.search), re = i.indexOf(I.get("toonikka")), pe = I.get("asteikko");
    return {
      rootPC: re === -1 ? S : re,
      scaleId: Object.hasOwn(R, pe) ? pe : B
    };
  }
  function W(S, B, I) {
    return S + "?" + new URLSearchParams({ toonikka: i[B], asteikko: I });
  }
  function se(S, B, I, {
    boxes: re = [],
    onlyBoxNotes: pe = !1,
    automatic: de = !0,
    focusDegree: ge = "",
    grip: xe = null,
    barre: Ae = null,
    label: _e = i[S] + " " + B.name,
    notes: Le = null,
    targets: Je = !1,
    muteFret: Be = null
  } = {}) {
    const We = X(I), Ke = We + 48, gt = Ke + 28, Xe = w - 14, ze = T(c.length - 1) + 14, nt = ze - Xe, Mt = de ? 680 : Math.ceil(gt * 0.64), Gt = re.flatMap((Te) => Te.positions), zt = {};
    B.base.forEach(([Te, $e]) => zt[(S + Te) % 12] = { deg: $e, added: !1 }), B.add.forEach(([Te, $e]) => zt[(S + Te) % 12] = { deg: $e, added: !0 });
    const sn = c.map((Te, $e) => !!xe && xe[$e] === null), Wt = !!xe && Be !== null, ct = $.filter((Te, $e) => sn[$e]).reverse(), Dn = _e + ". " + I + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let je = '<svg viewBox="0 0 ' + gt + " " + K + '" style="min-width:' + Mt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Je ? "group" : "img") + '" aria-label="' + Dn + '">';
    je += '<rect x="' + O + '" y="' + Xe + '" width="' + (D - O) + '" height="' + nt + '" rx="6" fill="#2a2338"/>', je += '<rect x="' + D + '" y="' + Xe + '" width="' + (We - D) + '" height="' + nt + '" fill="#231a12"/>', je += '<rect x="' + We + '" y="' + Xe + '" width="' + (gt - We - 4) + '" height="' + nt + '" rx="8" fill="#32251e"/>';
    for (let Te = 1; Te <= I; Te++)
      je += '<line x1="' + X(Te) + '" y1="' + Xe + '" x2="' + X(Te) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    je += '<rect x="' + (D - 3) + '" y="' + Xe + '" width="6" height="' + nt + '" rx="2" fill="#d8cbb6"/>', je += '<rect x="' + (Ke - 11) + '" y="' + (Xe + 3) + '" width="22" height="' + (nt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', je += '<rect x="' + (Ke - 4) + '" y="' + (Xe + 7) + '" width="3" height="' + (nt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Xe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Te) => Te <= I).forEach((Te) => je += '<circle cx="' + q(Te) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let Te = 12; Te <= I; Te += 12)
      je += '<circle cx="' + q(Te) + '" cy="' + (Qt - z) + '" r="5.5" fill="#7a6550"/>', je += '<circle cx="' + q(Te) + '" cy="' + (Qt + z) + '" r="5.5" fill="#7a6550"/>';
    je += '<text x="' + M + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', je += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', je += '<text x="' + Ke + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Te = 1; Te <= I; Te++)
      je += '<text x="' + q(Te) + '" y="' + (K - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Te + "</text>";
    if (re.forEach(({ number: Te, positions: $e }) => {
      $e.forEach((Re) => {
        const Qe = Re.partial ? "box-highlight box-partial" : "box-highlight";
        je += '<g class="' + Qe + '" data-box="' + Te + '" aria-hidden="true">';
        const qe = Re.strings.find((xt) => xt.length), Yt = (q(qe[0]) + q(qe.at(-1))) / 2;
        je += '<text class="box-number" x="' + Yt + '" y="12">' + Te + "</text>", Re.strings.forEach((xt, Vt) => {
          if (!xt.length) return;
          const mn = q(xt[0]) - 16, pn = q(xt.at(-1)) - q(xt[0]) + 32;
          je += '<rect class="box-band" x="' + mn + '" y="' + (T(Vt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), je += "</g>";
      });
    }), c.forEach((Te, $e) => {
      const Re = 1 + $e * 0.45, Qe = T($e), qe = sn[$e] && !Wt;
      qe ? je += '<text class="muted-mark" x="' + M + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[$e] && Be === 0 || (je += '<line x1="' + (O + 4) + '" y1="' + Qe + '" x2="' + (D - 4) + '" y2="' + Qe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), je += "<g" + (qe ? ' opacity=".35"' : "") + ">", je += '<line x1="' + D + '" y1="' + Qe + '" x2="' + (Ke + 5) + '" y2="' + Qe + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', je += '<circle cx="' + (Ke + 5) + '" cy="' + Qe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', je += "</g>", je += '<text x="13" y="' + (Qe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[$e] + "</text>";
    }), xe && Ae && Ae.fret >= 1 && Ae.fret <= I) {
      const Te = T(Ae.from), $e = T(Ae.to), Re = Math.min(Te, $e) - 6, Qe = Math.max(Te, $e) + 6;
      je += '<rect class="barre-indicator" x="' + (q(Ae.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Qe - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Je && (je += '<g class="fret-targets">', c.forEach((Te, $e) => {
      for (let Re = 0; Re <= I; Re++) {
        const Qe = Re ? $[$e] + "-kieli, " + Re + ". nauha" : "vapaa " + $[$e] + "-kieli", qe = Re ? N : D - O - 6;
        je += '<rect class="fret-target" role="button" tabindex="0" data-string="' + $e + '" data-fret="' + Re + '" data-midi="' + (Te + Re) + '" aria-label="' + Qe + '" x="' + (q(Re) - qe / 2) + '" y="' + (T($e) - z / 2) + '" width="' + qe + '" height="' + z + '" fill="transparent"/>';
      }
    }), je += "</g>"), (Le ?? []).forEach(({ string: Te, fret: $e, label: Re, kind: Qe }) => {
      je += '<g class="octave-note octave-' + Qe + '">', je += '<circle cx="' + q($e) + '" cy="' + T(Te) + '" r="' + E + '"/>', je += '<text x="' + q($e) + '" y="' + (T(Te) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", je += "</g>";
    }), xe && (je += '<g class="grip-notes">'), (Le ? [] : c).forEach((Te, $e) => {
      for (let Re = 0; Re <= I; Re++) {
        const Qe = (Te + Re) % 12;
        if (!(Qe in zt) || xe && xe[$e] !== Re || pe && !Gt.some(({ strings: pn }) => {
          const zn = pn[$e];
          return zn.length > 0 && Re >= zn[0] && Re <= zn.at(-1);
        })) continue;
        const qe = zt[Qe], Yt = qe.deg === "1", xt = qe.added ? "#f0a13c" : Yt ? "#4b2fd6" : "#6d4aff", Vt = qe.added ? "#1a1430" : "#fff";
        qe.deg === ge && (je += '<circle class="focus-note" cx="' + q(Re) + '" cy="' + T($e) + '" r="14.5"/>');
        const mn = xe ? ' data-string="' + ($e + 1) + '" data-fret="' + Re + '" data-degree="' + qe.deg + '"' : "";
        je += "<circle" + mn + ' cx="' + q(Re) + '" cy="' + T($e) + '" r="' + E + '" fill="' + xt + '" stroke="' + (Yt ? "#fff" : "#1a1430") + '" stroke-width="' + (Yt ? 2.5 : 1) + '"/>', je += '<text x="' + q(Re) + '" y="' + (T($e) + 3.5) + '" font-size="' + (qe.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Vt + '" text-anchor="middle">' + qe.deg + "</text>";
      }
    }), xe && (je += "</g>"), Wt && sn.forEach((Te, $e) => {
      if (!Te) return;
      const Re = q(Be), Qe = T($e);
      je += '<g class="muted-mark grip-mute" data-string="' + ($e + 1) + '" data-fret="' + Be + '">', je += '<circle cx="' + Re + '" cy="' + Qe + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', je += '<text x="' + Re + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', je += "</g>";
    }), je += "</svg>", je;
  }
  return {
    CHROM: i,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: R,
    noteName: V,
    scaleNotes: ee,
    scaleTriads: Y,
    triadGrips: te,
    chordGrip: b,
    renderChordDiagram: ke,
    selectionFromURL: we,
    selectionHref: W,
    renderBoard: se,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: oe,
    syncBoxSystem: Me,
    fingeringBoxes: U,
    boxOptions: ie,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = Nm;
function yd(i) {
  return 440 * Math.pow(2, (i - 69) / 12);
}
function Em(i) {
  return 69 + 12 * Math.log2(i / 440);
}
function Cm(i) {
  const a = Em(i), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const Ie = globalThis.MusicMapFretboard, He = (i) => (i % 12 + 12) % 12, _m = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Tm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (i, a = !1, u = !1) => (a ? Tm : _m)[He(i)] + (u ? Math.floor(i / 12) - 1 : ""), or = (i) => Ie.CHROM[He(i)], Yi = (i, a, u) => Ie.noteName(He(i), a, u);
function Mm(i, a) {
  const u = Math.floor(i / 12) - 1;
  return a[0] === "B" && He(i) < 2 ? u - 1 : a[0] === "C" && He(i) > 9 ? u + 1 : u;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], $o = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Xd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Pm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Cr = (i) => i === 0 ? "vapaa kieli" : `${i}. nauha`, ft = (i, a) => ({ string: i, fret: a, midi: Ie.OPEN_PITCHES[i] + a });
function oi(i, a, u) {
  return [...i].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (d, h) => ft(c, a + h)));
}
const Ge = (i) => `${i.string}:${i.fret}`, Er = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Zd = (i, a) => a === "maj" ? `${or(i)}-duurisointu` : a === "min" ? `${or(i)}-mollisointu` : `${or(i)}7-sointu`, Ji = [
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
], gd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function qd(i, a) {
  const u = gd[a] ?? gd.E, c = He(i - u.root);
  return u.frets.flatMap((d, h) => d === null ? [] : [ft(h, d + c)]);
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
}, Sa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, lr = (i, a, u, c) => typeof i == "number" && Number.isFinite(i) ? Math.max(a, Math.min(u, i)) : c, wn = (i, a, u) => a.includes(i) ? i : u;
function ga(i) {
  const a = { ...ma };
  a.mode = wn(i.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(i.strings) ? [...new Set(i.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...ma.strings]), a.min = Math.round(lr(i.min, 0, 24, a.min)), a.max = Math.round(lr(i.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof i[u] == "boolean" && (a[u] = i[u]);
  return a.check = wn(i.check, ["class", "pitch"], a.check), a.input = wn(i.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(i.rounds) ? i.rounds : a.rounds, a.root = Math.round(lr(i.root, 0, 11, a.root)), a.scale = typeof i.scale == "string" && Object.hasOwn(Ie.SCALES, i.scale) ? i.scale : a.scale, a.box = Math.round(lr(i.box, 0, 5, a.box)), a.order = wn(i.order, ["random", "up", "down"], a.order), a.chord = wn(i.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(i.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(i.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(i.intervals) ? [...new Set(i.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...ma.intervals]), a.direction = wn(i.direction, ["up", "down", "both"], a.direction), a.hints = wn(i.hints, ["off", "always", "fade"], a.hints), a.activity = wn(i.activity, ["play", "degree"], a.activity), a.minRms = lr(i.minRms, 1e-3, 0.15, a.minRms), a.clarity = lr(i.clarity, 0.85, 0.99, a.clarity), a.stability = lr(i.stability, 120, 800, a.stability), a.cents = lr(i.cents, 10, 45, a.cents), a.device = typeof i.device == "string" ? i.device.slice(0, 256) : "", a;
}
function Am(i, a) {
  const u = new URLSearchParams(i), c = { ...a };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(d) && Object.assign(c, { [h]: u.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(d) && (c[h] = Number(u.get(d)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((d) => Number(d) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(d) && (c[h] = u.get(d) === "1");
  if (u.has("toonikka")) {
    const d = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ie.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    m >= 0 && (c.root = m);
  }
  return ga(c);
}
function Rm(i) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: i.mode,
    toonikka: Ie.CHROM[i.root],
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
const _r = (i) => i.mode === "ear-note" ? "note" : ["scale", "chord"].includes(i.mode) && i.activity === "degree" ? "degree" : i.input, In = (i) => i.mode === "scale" && i.order !== "random", ef = (i) => ["note", "degree"].includes(_r(i)) ? "class" : In(i) ? "pitch" : i.check, da = (i) => _r(i) === "mic", xd = "musiikin-kartta:harjoittelu", tf = 3, yo = () => ({ version: tf, settings: { ...ma }, stats: {}, recent: [], sessions: [] }), nf = (i) => `${i.input}:${i.check}:${i.hint ? "guided" : "solo"}:${i.item}`, hn = (i) => typeof i == "number" && Number.isFinite(i) && i >= 0;
function $m(i) {
  return !!i && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(i[a])) && i.correct <= i.attempts && (i.errors === void 0 || hn(i.errors)) && (i.ema === void 0 || hn(i.ema) && i.ema <= 1) && (i.emaMs === void 0 || hn(i.emaMs));
}
function Lm(i) {
  return !!i && typeof i.id == "string" && hn(i.count) && hn(i.first) && i.first <= i.count && hn(i.ms) && hn(i.at) && (i.solo === void 0 || hn(i.solo) && i.solo <= i.count) && (i.soloFirst === void 0 || hn(i.soloFirst) && i.soloFirst <= (i.solo ?? i.count));
}
function jd(i) {
  if (!i) return yo();
  const a = JSON.parse(i);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !$m(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !hn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !Lm(p)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = ga(a.settings ?? {}), d = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: tf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Sd = 2500, Om = 8e3, wd = 0.3, Xi = (i) => i.ema ?? i.correct / i.attempts, Zi = (i) => i.emaMs ?? i.totalMs / i.attempts;
function Lo(i) {
  if (!i?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Zi(i) - Sd) / (Om - Sd)));
  return Xi(i) * 0.65 + a * 0.35;
}
function Fm(i) {
  return !i || i.attempts < 3 ? 3 : 0.25 + (1 - Lo(i)) * 3;
}
class Nd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = jd(a?.getItem(xd) ?? null);
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
        this.storage.setItem(xd, JSON.stringify(this.data)), this.warning = "";
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
    const u = nf(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Xi(c) + wd * (d - Xi(c)) : d,
      emaMs: c.attempts ? Zi(c) + wd * (a.ms - Zi(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = jd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...yo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const bm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Im = ["e", "B", "G", "D", "A", "E"];
function rf({ string: i }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      i + 1,
      " · ",
      /* @__PURE__ */ s.jsx("strong", { children: Im[i] })
    ] }),
    i === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : i === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const sf = (i) => ({ "--string-thickness": 1.25 + i * 0.45 + "px" }), Dm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function af({ min: i, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - i + 1 }, (u, c) => {
      const d = i + c;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : bm.has(d) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ai({ area: i, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta" }) {
  const p = { "--cols": i.max - i.min + 1 }, { strings: m, min: j, max: $ } = i, [k, C] = F.useState({ string: Math.min(...m), fret: j }), R = F.useRef(null), O = new Map(a.map((E) => [Ge(E), E])), D = a.map((E) => `${Ge(E)}${E.kind}`).join(",");
  F.useEffect(() => {
    const E = R.current, M = E?.querySelector(".target, .anchor");
    E && M && (E.scrollLeft += M.getBoundingClientRect().left - E.getBoundingClientRect().left - E.clientWidth / 2 + M.clientWidth / 2);
  }, [D]);
  const [w, N] = F.useState({ left: !1, right: !1 });
  F.useEffect(() => {
    const E = R.current;
    if (!E) return;
    const M = () => {
      const X = E.scrollLeft > 2, q = E.scrollLeft + E.clientWidth < E.scrollWidth - 2;
      N((T) => T.left === X && T.right === q ? T : { left: X, right: q });
    };
    M(), E.addEventListener("scroll", M, { passive: !0 });
    const K = typeof ResizeObserver > "u" ? null : new ResizeObserver(M);
    return K?.observe(E), () => {
      E.removeEventListener("scroll", M), K?.disconnect();
    };
  }, [D, j, $]);
  const z = m.includes(k.string) && k.fret >= j && k.fret <= $ ? k : { string: Math.min(...m), fret: j };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: R, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(af, { min: j, max: $ }),
      /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map((E, M) => /* @__PURE__ */ s.jsxs("tr", { className: m.includes(M) ? "" : "unused", style: sf(M), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${M + 1}. kieli: ${rn[M]}${u.includes(M) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(rf, { string: M }),
          u.includes(M) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        oi([M], j, $).map((K) => {
          const X = O.get(Ge(K)), q = `${rn[M]}-kieli, ${Cr(K.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${K.fret === 0 ? "open-fret " : ""}${X ? X.kind === "answer" ? "target" : X.kind : ""}`, children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "data-string": M,
              "data-fret": K.fret,
              tabIndex: z.string === M && z.fret === K.fret ? 0 : -1,
              onFocus: () => C(K),
              onKeyDown: (T) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) return;
                T.preventDefault();
                const V = [...m].sort((ne, oe) => ne - oe), ee = V.indexOf(M), le = T.key === "ArrowUp" ? V[Math.max(0, ee - 1)] : T.key === "ArrowDown" ? V[Math.min(V.length - 1, ee + 1)] : M, Ce = T.key === "Home" ? j : T.key === "End" ? $ : Math.max(j, Math.min($, K.fret + (T.key === "ArrowRight" ? 1 : T.key === "ArrowLeft" ? -1 : 0)));
                T.currentTarget.closest("table")?.querySelector(`button[data-string="${le}"][data-fret="${Ce}"]`)?.focus();
              },
              disabled: c || !m.includes(M),
              "aria-label": q + (X ? `, ${Dm[X.kind]}${X.label ? " " + X.label : ""}` : ""),
              onClick: () => d?.(K),
              children: X ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: X.label || "●" }) : null
            }
          ) }, K.fret);
        })
      ] }, M)) })
    ] }) })
  ] });
}
function zm({ area: i, stats: a, input: u, check: c, flats: d }) {
  const { strings: h, min: p, max: m } = i, j = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(af, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map(($, k) => /* @__PURE__ */ s.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: sf(k), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${rn[k]}`, children: /* @__PURE__ */ s.jsx(rf, { string: k }) }),
      oi([k], p, m).map((C) => {
        const R = Object.hasOwn(a, j + Ge(C)) ? a[j + Ge(C)] : void 0, O = Lo(R), D = O === null ? "unseen" : R.attempts < 3 ? "few" : O >= 0.8 ? "strong" : O >= 0.5 ? "growing" : "weak", w = `${rn[k]}-kieli, ${Cr(C.fret)}, ${Fe(C.midi, d)}`, N = R ? `${Math.round(O * 100)} %, ${R.correct}/${R.attempts} heti oikein, viime aikoina ${Math.round(Xi(R) * 100)} % ja ${(Zi(R) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${D}`, title: `${w}: ${N}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: O === null ? "·" : R.attempts < 3 ? "?" : Math.round(O * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            N
          ] })
        ] }, C.fret);
      })
    ] }, k)) })
  ] }) });
}
const Vm = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", wa = (i) => i.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[i.scale]) : Er[i.mode === "caged" ? "maj" : i.chord].tones, lf = (i) => Ie.fingeringBoxes(i.root, Ie.SCALES[i.scale], "pentatonic", [i.box])[0].positions[0];
function Tr(i) {
  if (i.mode === "caged") {
    const a = qd(i.root, i.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (i.mode === "scale" && i.box) {
    const a = lf(i);
    return { strings: i.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: i.strings, min: i.min, max: i.max, fixed: "" };
}
function Bm(i) {
  const a = Tr(i);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function es(i) {
  const a = Tr(i), u = oi(a.strings, a.min, a.max);
  if (i.mode === "notes" || i.mode === "ear-note" || i.mode === "repeat")
    return u.filter((h) => i.accidentals || ![1, 3, 6, 8, 10].includes(He(h.midi)));
  if (i.mode === "caged") {
    const h = new Set(qd(i.root, i.shape).map(Ge));
    return u.filter((p) => h.has(Ge(p)));
  }
  if (i.mode === "interval") return u;
  const c = u.filter((h) => wa(i).some(([p]) => He(h.midi - i.root) === p));
  if (i.mode !== "scale" || !i.box) return c;
  const d = lf(i);
  return c.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function of(i, a) {
  return (i.direction === "both" ? ["up", "down"] : [i.direction]).flatMap((c) => i.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (c === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Km(i) {
  const a = wa(i);
  return i.mode !== "chord" || i.chordTone === "random" ? [] : i.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(i.chordTone));
}
function go(i) {
  const a = es(i), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return i.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${i.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : i.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : i.mode !== "interval" && !i.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Km(i).filter(([d]) => !a.some((h) => He(h.midi - i.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${u}` : i.mode === "interval" && !of(i, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(i) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Hm(i, a) {
  const u = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return i.order === "down" ? u.reverse() : u;
}
function uf(i) {
  return In(i) ? new Set(es(i).map((a) => a.midi)).size : i.rounds;
}
function Um(i, a) {
  return i.hints === "always" ? 2 : i.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Zr(i, a, u = Math.random) {
  if (!i.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return i[Math.floor(d * i.length)];
  let h = d * c;
  for (let p = 0; p < i.length; p++)
    if (h -= a[p], h < 0) return i[p];
  return i.at(-1);
}
const Ed = (i, a) => i.mode === "caged" ? `caged:${i.root}:${i.shape}:${a}` : i.mode === "chord" ? `chord:${i.root}:${i.chord}:${a}:${i.activity}` : `scale:${i.root}:${i.scale}:${a}:${i.activity}`;
function Nr(i, a) {
  const u = i.filter((c) => !a(c));
  return u.length ? u : i;
}
function Gm(i, a, u = {}, c, d = Math.random) {
  const h = go(i);
  if (h) throw new Error(h);
  const p = ef(i), m = _r(i), j = p === "pitch", $ = (T) => i.weak ? Fm(u[nf({ input: m, check: p, hint: !1, item: T })]) : 1, k = (T) => Zr(T, T.map(() => 1), d), C = es(i), R = { check: p, sound: [], choices: "position" };
  if (i.mode === "notes") {
    const T = Nr(C, (le) => !!c && Ge(le) === Ge(c.position)), V = Zr(T, T.map((le) => $(`notes:${Ge(le)}`)), d), ee = Fe(V.midi, i.flats, j);
    return {
      ...R,
      position: V,
      midi: V.midi,
      name: ee,
      item: `notes:${Ge(V)}`,
      prompt: `Etsi ${ee} ${$o[V.string]}.`
    };
  }
  if (i.mode === "ear-note") {
    const T = (Ce) => `ear-note:${He(Ce.midi)}${i.reference ? ":ref" : ""}`, V = Nr(C, (Ce) => !!c && He(Ce.midi) === He(c.midi)), ee = Zr(V, V.map((Ce) => $(T(Ce))), d), le = i.reference ? 57 + 12 * Math.round((ee.midi - 57) / 12) : void 0;
    return {
      ...R,
      position: ee,
      midi: ee.midi,
      name: Fe(ee.midi, i.flats),
      item: T(ee),
      choices: "note",
      reference: le,
      sound: le === void 0 ? [ee.midi] : [le, ee.midi],
      prompt: i.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (i.mode === "repeat") {
    const T = Nr(C, (ee) => !!c && ee.midi === c.midi), V = Zr(T, T.map((ee) => $(`repeat:${ee.midi}`)), d);
    return {
      ...R,
      position: V,
      midi: V.midi,
      name: Fe(V.midi, i.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (i.mode === "interval") {
    const T = Nr(of(i, C), (le) => c?.interval === le.iv && c?.direction === le.direction), V = Zr(T, T.map((le) => $(`interval:${le.iv}:${le.direction}`)), d), ee = k(Nr(V.pairs, (le) => c?.reference === le.reference.midi));
    return {
      ...R,
      position: ee.target,
      midi: ee.target.midi,
      name: Fe(ee.target.midi, i.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: ee.reference.midi,
      sound: [ee.reference.midi, ee.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(ee.reference.midi, i.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const O = wa(i);
  let D, w = 0;
  if (In(i)) {
    const T = Hm(i, C);
    w = T.length, D = T[a % T.length];
  } else {
    const T = O.filter(([le]) => C.some((Ce) => He(Ce.midi - i.root) === le)), V = i.mode === "chord" && i.chordTone !== "random" ? i.chordTone === "build" ? [O[a % O.length]] : O.filter(([, le]) => le.endsWith(i.chordTone)) : Nr(T, ([le]) => c?.interval === le), [ee] = Zr(V, V.map(([le]) => $(Ed(i, le))), d);
    D = k(Nr(C.filter((le) => He(le.midi - i.root) === ee), (le) => !!c && Ge(le) === Ge(c.position)));
  }
  const N = He(D.midi - i.root), z = O.find(([T]) => T === N)[1], E = Yi(i.root, N, z), M = j ? E + Mm(D.midi, E) : E, K = i.mode === "scale" ? `${or(i.root)}-${Ie.SCALES[i.scale].name}${i.box ? `, boksi ${i.box}` : ""}` : i.mode === "caged" ? `${or(i.root)}-duurisointu, ${i.shape}-muoto` : Zd(i.root, i.chord), X = i.mode !== "caged" && i.activity === "degree", q = X ? `${K}: mikä aste on ${E}?` : w ? `${K} ${i.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${z}. aste (${M}).` : `${K}: etsi ${z}. aste${j ? ` (${M})` : ""}.`;
  return {
    ...R,
    position: D,
    midi: D.midi,
    name: M,
    item: Ed(i, N),
    prompt: q,
    degree: z,
    interval: N,
    choices: X ? "degree" : "position"
  };
}
function xo(i, a, u) {
  return Number.isInteger(a) && (u === "class" ? He(i) === He(a) : i === a);
}
function cf(i, a, u) {
  return xo(a.midi, u.midi, a.check) ? i.mode === "notes" ? u.string === a.position.string : Vm(i) ? es(i).some((c) => Ge(c) === Ge(u)) : !0 : !1;
}
function Wm(i, a) {
  const u = Tr(i);
  return oi(u.strings, u.min, u.max).filter((c) => cf(i, a, c));
}
const Nt = (i, a, u) => ({ ...i, label: a, kind: u }), Qm = (i) => i.charAt(0).toUpperCase() + i.slice(1);
function Ym(i, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, d = Tr(i), h = oi(d.strings, d.min, d.max), p = Wm(i, a);
  if (i.mode === "notes") {
    if (c) return { marks: p.map((z) => Nt(z, a.name, "answer")), text: `${a.name} on ${Xd[a.position.string]}: ${Cr(a.position.fret)}.` };
    const w = h.find((z) => z.string === a.position.string), N = Fe(w.midi, i.flats);
    return {
      marks: [Nt(w, N, "anchor")],
      text: `Apupiste: ${Pm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (i.mode === "ear-note")
    return c ? { marks: [Nt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Nt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[a.position.string]}-kieli, ${Cr(a.position.fret)}.` };
  if (i.mode === "repeat")
    return c ? { marks: p.map((w) => Nt(w, Fe(w.midi, i.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${$o[a.position.string]}.` };
  if (i.mode === "interval") {
    const w = Fe(a.reference, i.flats, !0), N = h.filter((z) => z.midi === a.reference).map((z) => Nt(z, w, "anchor"));
    return c ? {
      marks: [...N, ...p.map((z) => Nt(z, Fe(z.midi, i.flats, !0), "answer"))],
      text: `${Qm(Ji[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: N, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = es(i), j = wa(i), $ = (w) => j.find(([N]) => N === He(w.midi - i.root))?.[1] ?? "", k = Yi(i.root, a.interval, a.degree), C = m.filter((w) => He(w.midi - i.root) === 0), R = (w) => p.some((N) => Ge(N) === Ge(w)), O = `${a.degree}. aste on ${k}.`;
  if (i.mode === "caged")
    return c ? { marks: m.map((w) => Nt(w, $(w), R(w) ? "answer" : "shape")), text: O } : { marks: m.map((w) => Nt(w, "", "shape")), text: `${i.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const D = i.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((N) => He(N.midi) === He(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : C).map((N) => Nt(N, "1", "anchor")), ...w.map((N) => Nt(N, a.degree, "answer"))], text: `${k} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((N) => Nt(N, k, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((N) => Nt(N, "1", "anchor")), ...w.map((N) => Nt(N, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !R(w)).map((w) => Nt(w, "1", "anchor")), ...p.map((w) => Nt(w, a.degree, "answer"))], text: O } : a.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${or(i.root)}.` } : { marks: C.map((w) => Nt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Jm {
  constructor(a, u, c, d = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = d, this.random = h, this.total = uf(a);
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
      this.question = Gm(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Um(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(a, u, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? a === h.interval : u === "note" ? xo(h.midi, a, "class") : u === "board" ? !!c && cf(this.settings, h, c) : xo(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = u === "board" ? c : void 0, j = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ge(m)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? j.position = Ge(m) : this.settings.mode === "notes" && (j.position = Ge(h.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function jo(i) {
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
const So = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ti = (i) => So.find(([a]) => a === i)?.[1] ?? i;
function $t({ label: i, children: a }) {
  const u = F.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: u, children: i }),
    F.cloneElement(a, { id: u })
  ] });
}
function Cd({ legend: i, name: a, value: u, options: c, onChange: d, disabled: h }) {
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ s.jsx("legend", { children: i }),
    /* @__PURE__ */ s.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ s.jsxs("label", { className: p.value === u ? "selected" : "", children: [
      /* @__PURE__ */ s.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === u, onChange: () => d(p.value) }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("strong", { children: p.title }),
        /* @__PURE__ */ s.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function _d(i) {
  const a = Tr(i), u = uf(i), c = _r(i), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${i.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${i.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Sa[i.hints].title} · ${d} · ${In(i) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Td({ s: i, change: a, locked: u, problem: c }) {
  const d = F.useId(), h = (k, C) => a({ ...i, [k]: C }), p = Tr(i), m = _r(i) === "note" || _r(i) === "degree", j = ["scale", "chord", "caged"].includes(i.mode), $ = ["notes", "ear-note", "repeat"].includes(i.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx($t, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: i.mode, onChange: (k) => h("mode", k.target.value), children: So.map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C }, k)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: So.find(([k]) => k === i.mode)[2] })
    ] }),
    j && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx($t, { label: i.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: i.root, onChange: (k) => h("root", Number(k.target.value)), children: Ie.CHROM.map((k, C) => /* @__PURE__ */ s.jsx("option", { value: C, children: k }, k)) }) }),
      i.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx($t, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: i.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(Ie.SCALES).map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ s.jsxs("select", { value: i.box, onChange: (k) => h("box", Number(k.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ s.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Sävelten järjestys", children: /* @__PURE__ */ s.jsxs("select", { value: i.order, onChange: (k) => h("order", k.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ s.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ s.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      i.mode === "chord" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx($t, { label: "Sointutyyppi", children: /* @__PURE__ */ s.jsx("select", { value: i.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(Er).map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ s.jsxs("select", { value: i.chordTone, onChange: (k) => h("chordTone", k.target.value), children: [
          /* @__PURE__ */ s.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            i.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ s.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ s.jsxs("option", { value: "3", children: [
            "Terssi · ",
            i.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "5", children: "Kvintti · 5" }),
          i.chord === "dom7" && /* @__PURE__ */ s.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      i.mode === "caged" ? /* @__PURE__ */ s.jsx($t, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ s.jsx("select", { value: i.shape, onChange: (k) => h("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ s.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ s.jsx($t, { label: "Tehtävä", children: /* @__PURE__ */ s.jsxs("select", { value: i.activity, onChange: (k) => h("activity", k.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ s.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    i.mode === "interval" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ s.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.intervals.includes(k), onChange: (C) => h("intervals", C.target.checked ? [...i.intervals, k] : i.intervals.filter((R) => R !== k)) }),
        Ji[k]
      ] }, k)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx($t, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: i.direction, onChange: (k) => h("direction", k.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      Cd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: i.hints,
        onChange: (k) => h("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...Sa[k] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(Cd, { legend: "Vastaustapa", name: `${d}-input`, value: i.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ s.jsx($t, { label: "Kierroksen pituus", children: /* @__PURE__ */ s.jsxs("select", { value: i.rounds, disabled: In(i), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ s.jsx($t, { label: "Vastausten tarkistus", children: /* @__PURE__ */ s.jsxs("select", { value: In(i) ? "pitch" : i.check, disabled: In(i), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ s.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ s.jsxs("select", { value: String(i.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ s.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ s.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(i) && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ s.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${i.shape}-muoto` : `Boksi ${i.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ s.jsxs("button", { type: "button", "aria-pressed": i.min === 0 && i.max === k, onClick: () => a({ ...i, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsx($t, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: "0", max: "24", value: i.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ s.jsx($t, { label: "Viimeinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: i.min, max: "24", value: i.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: rn.map((k, C) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.strings.includes(C), onChange: (R) => h("strings", R.target.checked ? [...i.strings, C] : i.strings.filter((O) => O !== C)) }),
          C + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        $ && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.accidentals, onChange: (k) => h("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        i.mode === "ear-note" && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.reference, onChange: (k) => h("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.weak, onChange: (k) => h("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: i.advance, onChange: (k) => h("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Xm = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Zm({ onSelect: i }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: Xm.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => i(a.id), children: [
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
const qm = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", ep = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", tp = 0.12;
function Md(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function df() {
  const i = F.useRef(null), a = F.useRef(null), [u, c] = F.useState(!1), [d, h] = F.useState(!1), [p, m] = F.useState(!1), [j, $] = F.useState(0), [k, C] = F.useState(0), [R, O] = F.useState("");
  function D(M = !1) {
    const K = i.current, X = a.current;
    if (!K || !X || !Number.isFinite(K.currentTime) || X.readyState < 1) return;
    const q = Math.abs(X.currentTime - K.currentTime), T = K.loop && Number.isFinite(K.duration) && Math.abs(q - K.duration) < 0.3;
    if (M || !T && q > tp)
      try {
        X.currentTime = K.currentTime;
      } catch {
      }
  }
  function w() {
    i.current?.pause(), a.current?.pause(), c(!1);
  }
  async function N() {
    const M = i.current, K = a.current;
    if (!(!M || !K)) {
      if (u) {
        w();
        return;
      }
      O(""), K.muted = !d, K.volume = 0.55, M.volume = 0.75, D(!0);
      try {
        await Promise.all([M.play(), K.play()]), D(), c(!0);
      } catch {
        w(), O("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function z(M) {
    const K = i.current, X = a.current;
    if (!(!K || !X || !Number.isFinite(M))) {
      K.currentTime = M;
      try {
        X.currentTime = M;
      } catch {
      }
      $(M);
    }
  }
  function E(M) {
    M && D(), a.current && (a.current.muted = !M), h(M);
  }
  return F.useEffect(() => {
    const M = () => {
      document.hidden && (i.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", M), () => {
      document.removeEventListener("visibilitychange", M), i.current?.pause(), a.current?.pause();
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
              onChange: (M) => E(M.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsxs("span", { children: [
            "Mallikitara ",
            d ? "päällä" : "pois"
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (M) => m(M.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        N();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(j, k > 0 ? k : 1),
          disabled: !k,
          onChange: (M) => z(Number(M.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Md(j),
        " / ",
        Md(k)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: qm,
        loop: p,
        onLoadedMetadata: (M) => C(M.currentTarget.duration),
        onTimeUpdate: (M) => {
          $(M.currentTarget.currentTime), M.currentTarget.paused || D();
        },
        onEnded: () => {
          i.current?.loop || (a.current?.pause(), c(!1), $(k));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => O("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: ep,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const M = i.current, K = a.current;
          M?.duration && K?.duration && Math.abs(M.duration - K.duration) > 0.15 && O("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => O("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    R && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: R }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const np = 4e3;
class Pd extends Error {
  name = "MicSetupError";
}
async function rp(i, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Pd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
  let d;
  try {
    if (d = a ? a() : new AudioContext(), d.state !== "running") {
      let $;
      await Promise.race([
        d.resume(),
        new Promise((k, C) => {
          $ = setTimeout(() => C(new Pd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), np);
        })
      ]).finally(() => clearTimeout($));
    }
    const h = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: c,
      label: m?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach(($) => $.stop()), h.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), h;
  }
}
async function ip() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var uo, Ad;
function sp() {
  if (Ad) return uo;
  Ad = 1;
  function i(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const $ = Math.PI * c / this.size;
      u[c] = Math.cos($), u[c + 1] = -Math.sin($);
    }
    this.table = u;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var j = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << j;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return uo = i, i.prototype.fromComplexArray = function(u, c) {
    for (var d = c || new Array(u.length >>> 1), h = 0; h < u.length; h += 2)
      d[h >>> 1] = u[h];
    return d;
  }, i.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, i.prototype.toComplexArray = function(u, c) {
    for (var d = c || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = u[h >>> 1], d[h + 1] = 0;
    return d;
  }, i.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, d = c >>> 1, h = 2; h < d; h += 2)
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
    for (var d = 0; d < u.length; d++)
      u[d] /= this.size;
    this._out = null, this._data = null;
  }, i.prototype._transform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, j, $ = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const N = $[j];
        this._singleTransform2(m, N, h);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const N = $[j];
        this._singleTransform4(m, N, h);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var R = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var O = m + R, D = m, w = 0; D < O; D += 2, w += h) {
          const N = D, z = N + R, E = z + R, M = E + R, K = u[N], X = u[N + 1], q = u[z], T = u[z + 1], V = u[E], ee = u[E + 1], le = u[M], Ce = u[M + 1], ne = K, oe = X, Me = C[w], U = k * C[w + 1], ue = q * Me - T * U, ie = q * U + T * Me, Y = C[2 * w], te = k * C[2 * w + 1], Z = V * Y - ee * te, g = V * te + ee * Y, b = C[3 * w], ke = k * C[3 * w + 1], we = le * b - Ce * ke, W = le * ke + Ce * b, se = ne + Z, S = oe + g, B = ne - Z, I = oe - g, re = ue + we, pe = ie + W, de = k * (ue - we), ge = k * (ie - W), xe = se + re, Ae = S + pe, _e = se - re, Le = S - pe, Je = B + ge, Be = I - de, We = B - ge, Ke = I + de;
          u[N] = xe, u[N + 1] = Ae, u[z] = Je, u[z + 1] = Be, u[E] = _e, u[E + 1] = Le, u[M] = We, u[M + 1] = Ke;
        }
    }
  }, i.prototype._singleTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], j = p[c + 1], $ = p[c + d], k = p[c + d + 1], C = m + $, R = j + k, O = m - $, D = j - k;
    h[u] = C, h[u + 1] = R, h[u + 2] = O, h[u + 3] = D;
  }, i.prototype._singleTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, $ = d * 3, k = p[c], C = p[c + 1], R = p[c + d], O = p[c + d + 1], D = p[c + j], w = p[c + j + 1], N = p[c + $], z = p[c + $ + 1], E = k + D, M = C + w, K = k - D, X = C - w, q = R + N, T = O + z, V = m * (R - N), ee = m * (O - z), le = E + q, Ce = M + T, ne = K + ee, oe = X - V, Me = E - q, U = M - T, ue = K - ee, ie = X + V;
    h[u] = le, h[u + 1] = Ce, h[u + 2] = ne, h[u + 3] = oe, h[u + 4] = Me, h[u + 5] = U, h[u + 6] = ue, h[u + 7] = ie;
  }, i.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, j, $ = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = $[j];
        this._singleRealTransform2(m, Te >>> 1, h >>> 1);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = $[j];
        this._singleRealTransform4(m, Te >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var R = p >>> 1, O = R >>> 1, D = O >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, N = 0; w <= D; w += 2, N += h) {
          var z = m + w, E = z + O, M = E + O, K = M + O, X = u[z], q = u[z + 1], T = u[E], V = u[E + 1], ee = u[M], le = u[M + 1], Ce = u[K], ne = u[K + 1], oe = X, Me = q, U = C[N], ue = k * C[N + 1], ie = T * U - V * ue, Y = T * ue + V * U, te = C[2 * N], Z = k * C[2 * N + 1], g = ee * te - le * Z, b = ee * Z + le * te, ke = C[3 * N], we = k * C[3 * N + 1], W = Ce * ke - ne * we, se = Ce * we + ne * ke, S = oe + g, B = Me + b, I = oe - g, re = Me - b, pe = ie + W, de = Y + se, ge = k * (ie - W), xe = k * (Y - se), Ae = S + pe, _e = B + de, Le = I + xe, Je = re - ge;
          if (u[z] = Ae, u[z + 1] = _e, u[E] = Le, u[E + 1] = Je, w === 0) {
            var Be = S - pe, We = B - de;
            u[M] = Be, u[M + 1] = We;
            continue;
          }
          if (w !== D) {
            var Ke = I, gt = -re, Xe = S, ze = -B, nt = -k * xe, Mt = -k * ge, Gt = -k * de, zt = -k * pe, sn = Ke + nt, Wt = gt + Mt, ct = Xe + zt, Dn = ze - Gt, je = m + O - w, Qt = m + R - w;
            u[je] = sn, u[je + 1] = Wt, u[Qt] = ct, u[Qt + 1] = Dn;
          }
        }
    }
  }, i.prototype._singleRealTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], j = p[c + d], $ = m + j, k = m - j;
    h[u] = $, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, i.prototype._singleRealTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, $ = d * 3, k = p[c], C = p[c + d], R = p[c + j], O = p[c + $], D = k + R, w = k - R, N = C + O, z = m * (C - O), E = D + N, M = w, K = -z, X = D - N, q = w, T = z;
    h[u] = E, h[u + 1] = 0, h[u + 2] = M, h[u + 3] = K, h[u + 4] = X, h[u + 5] = 0, h[u + 6] = q, h[u + 7] = T;
  }, uo;
}
var ap = sp();
const lp = /* @__PURE__ */ mm(ap);
class Gi {
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
    return new Gi(
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
    return new Gi(
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
    return new Gi(a, (u) => Array(u));
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
    this._inputLength = a, this._fft = new lp(cp(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
      u[d] = this._inverseBuffer[2 * d];
    return u;
  }
}
function op(i) {
  const a = [];
  let u = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < i.length - 1; h++)
    i[h - 1] <= 0 && i[h] > 0 ? (u = !0, d = h, c = i[h]) : i[h - 1] > 0 && i[h] <= 0 ? (u = !1, d !== -1 && a.push(d)) : u && i[h] > c && (c = i[h], d = h);
  return a;
}
function up(i, a) {
  const [u, c, d] = [i - 1, i, i + 1], [h, p, m] = [a[u], a[c], a[d]], j = h / 2 - p + m / 2, $ = -(h / 2) * (c + d) + p * (u + d) - m / 2 * (u + c), k = h * c * d / 2 - p * u * d + m * u * c / 2, C = -$ / (2 * j), R = j * C * C + $ * C + k;
  return [C, R];
}
class Wi {
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
    return new Wi(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Wi(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Wi(a, (u) => Array(u));
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
    this._autocorrelator = new Gi(a, u), this._nsdfBuffer = u(a);
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
    const c = op(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((j) => this._nsdfBuffer[j])), h = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * d
    ), [p, m] = up(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / p, Math.min(m, 1)];
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
function cp(i) {
  return i--, i |= i >> 1, i |= i >> 2, i |= i >> 4, i |= i >> 8, i |= i >> 16, i++, i;
}
function dp(i) {
  const a = i * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const fp = 0.05, hp = 1.5;
class mp {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, d = dp(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * fp))), this.detector = Wi.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new pp();
  onset = new vp();
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
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: j,
      onStableNote: $
    } = this.opts, k = this.analysers.map((T, V) => (T.getFloatTimeDomainData(this.buffers[V]), Rd(this.buffers[V], this.buffers[V].length - this.shortLength))), C = k.indexOf(Math.max(...k));
    C !== this.channel && k[C] > (k[this.channel] ?? 0) * hp && (this.channel = C);
    const R = this.buffers[this.channel], O = k[this.channel], D = kp(R, R.length - this.shortLength), w = { rms: O, peak: D, channel: this.channel, levels: k }, N = O < c, z = this.onset.feed(O, a, c);
    if (N && Rd(R, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), j?.({ ...w, status: "silent" });
      return;
    }
    const [E, M] = this.detector.findPitch(R, this.mic.context.sampleRate);
    if (!isFinite(E) || M < u) {
      this.gate.feed(null, a, d, N, z), j?.({ ...w, status: N ? "silent" : "unclear", clarity: isFinite(M) ? M : 0 });
      return;
    }
    if (E < p || E > m) {
      this.gate.feed(null, a, d, N, z), j?.({ ...w, status: "out-of-range", frequency: E, clarity: M });
      return;
    }
    const { midi: K, cents: X } = Cm(E);
    if (Math.abs(X) > h) {
      this.gate.feed(null, a, d, N, z), j?.({ ...w, status: "off-pitch", frequency: E, clarity: M, midi: K, cents: X });
      return;
    }
    j?.({ ...w, status: "pitch", frequency: E, clarity: M, midi: K, cents: X });
    const q = this.gate.feed(K, a, d, N, z);
    q !== null && $?.({ midi: K, frequency: E, cents: X, clarity: M, timestamp: a, heldMs: q.heldMs });
  }
}
class pp {
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
  feed(a, u, c, d, h) {
    if (d ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: u, seen: u }), this.current.seen = u;
    const p = u - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class vp {
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
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: u, rms: a }), a < c * 1.5 || a < d * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: a }], !0);
  }
}
function Rd(i, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let d = u; d < i.length; d++) c += i[d] * i[d];
  return Math.sqrt(c / Math.max(1, i.length - u));
}
function kp(i, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < i.length; c++) {
    const d = Math.abs(i[c]);
    d > u && (u = d);
  }
  return u;
}
const li = (i) => i > 0 ? Math.max(-90, 20 * Math.log10(i)) : -90;
let ei;
function ff() {
  return (!ei || ei.state === "closed") && (ei = new AudioContext()), ei;
}
function yp() {
  const i = ei;
  ei = void 0, i?.close().catch(() => {
  });
}
const hf = (i) => i instanceof Error ? i.name : "";
function gp(i) {
  const a = hf(i);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? i.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class xp {
  constructor(a = (u) => rp(u, ff)) {
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
    const d = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (m) {
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(hf(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new mp(h, { ...u });
      const m = () => {
        this.mic === h && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach(($) => $.addEventListener("ended", m, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
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
function mf(i, a) {
  return i !== "on" ? i : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const $d = (i) => Math.max(0, Math.min(1, (li(i) + 60) / 60));
function jp(i) {
  const a = [...i].sort((c, d) => c - d), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
class Oo {
  constructor(a = ff) {
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
    const d = c.createGain();
    d.connect(c.destination), this.master = d;
    const h = Array.from({ length: 12 }, (j, $) => 1 / ($ + 1) ** 1.3), p = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((j, $) => {
      const k = c.createOscillator(), C = c.createGain(), R = c.currentTime + 0.05 + $ * 0.8;
      p ? k.setPeriodicWave(p) : k.type = "triangle", k.frequency.value = yd(j), C.gain.setValueAtTime(0, R), C.gain.linearRampToValueAtTime(0.22, R + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, R + 0.7), k.connect(C), C.connect(d), k.start(R), k.stop(R + 0.72);
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), a.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, d.disconnect(), this.master = void 0, !0);
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
    const d = this.token, h = this.provide();
    if (h.state !== "running" && await h.resume(), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (w, N) => 1 / (N + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let $ = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && ($ = 60 / Math.max(40, Math.min(140, w)));
    };
    const k = 1.6;
    let C = h.currentTime + 0.05, R = 0;
    const O = [], D = () => {
      if (d === this.token) {
        if (C < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - C) / $);
          C += w * $, R = (R + w) % a.length, O.length = 0;
        }
        for (; C < h.currentTime + k; ) {
          const w = a[R], N = R, z = C, E = h.createOscillator(), M = h.createGain();
          j ? E.setPeriodicWave(j) : E.type = "triangle", E.frequency.value = yd(w), M.gain.setValueAtTime(0, z), M.gain.linearRampToValueAtTime(0.22, z + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, z + $ * 0.975), E.connect(M), M.connect(p), E.start(z), E.stop(z + $ * 0.985), O.push({ at: z, index: N }), C += $, R = (R + 1) % a.length;
        }
        for (; O.length && O[0].at <= h.currentTime + 0.01; ) {
          const w = O.shift();
          u?.(w.index);
        }
      }
    };
    return D(), this.loopTick = setInterval(D, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
const wo = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), Sp = [...new Map(wo.flatMap((i) => i.positions[0].strings.flatMap((a, u) => a.map((c) => {
  const d = ft(u, c);
  return [Ge(d), d];
})))).values()].sort((i, a) => i.midi - a.midi || a.string - i.string), Ld = new Set(
  wo[0].positions[0].strings.flatMap((i, a) => i.map((u) => {
    const c = ft(a, u);
    return Ge(c);
  })).filter((i) => wo[1].positions[0].strings.flatMap((a, u) => a.map((c) => Ge(ft(u, c)))).includes(i))
), co = [
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
], pf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", vf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", fo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita siirtymä", detail: "Siirrä kättä saman asteikon sisällä ja palaa takaisin." },
  { title: "Yhdistä muistista", detail: "Toista sama reitti ilman kuvion apua." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], Od = (i) => He(i) === 9;
function Fd() {
  try {
    const i = Number(localStorage.getItem(pf));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function wp() {
  try {
    const i = Number(localStorage.getItem(vf));
    return Number.isInteger(i) && i >= 40 && i <= 140 && i % 5 === 0 ? i : 75;
  } catch {
    return 75;
  }
}
function Np({ onBack: i, onPosition: a }) {
  const [u, c] = F.useState(Fd), [d, h] = F.useState(Fd), [p, m] = F.useState(!1), [j, $] = F.useState("roots"), [k, C] = F.useState(wp), [R, O] = F.useState(null), [D, w] = F.useState(null), [N, z] = F.useState(""), E = F.useRef(new Oo()), M = F.useRef(0), K = D === null ? null : co[D];
  function X() {
    M.current++, E.current.stop(), O(null), w(null);
  }
  F.useEffect(() => {
    const ne = () => {
      document.hidden && (M.current++, E.current.stop(), O(null), w(null));
    };
    return document.addEventListener("visibilitychange", ne), () => {
      document.removeEventListener("visibilitychange", ne), M.current++, E.current.stop();
    };
  }, []);
  async function q(ne) {
    const oe = ++M.current;
    E.current.stop(), w(null), z(""), O(ne);
    try {
      ne === "phrase" ? await E.current.play(co.map((Me) => Me.midi)) : await E.current.loop(co.slice(0, -1).map((Me) => Me.midi), (Me) => {
        oe === M.current && w(Me);
      }, k);
    } catch {
      oe === M.current && z("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset.");
    } finally {
      oe === M.current && (O(null), w(null));
    }
  }
  function T(ne) {
    const oe = Math.max(40, Math.min(140, ne));
    C(oe), E.current.setLoopTempo(oe);
    try {
      localStorage.setItem(vf, String(oe));
    } catch {
    }
  }
  function V(ne) {
    ne > u || (X(), h(ne), m(!1), $("roots"));
  }
  function ee() {
    X();
    const ne = Math.min(4, d + 1);
    if (h(ne), m(!1), $("roots"), ne > u) {
      c(ne);
      try {
        localStorage.setItem(pf, String(ne));
      } catch {
      }
    }
  }
  const le = (ne, oe) => d < 2 || d === 2 && p && Ld.has(oe) || d === 3 && (j === "all" || j === "roots" && Od(ne)), Ce = Sp.filter((ne) => le(ne.midi, Ge(ne))).map((ne) => ({
    ...ne,
    label: d < 2 || d === 2 && p || d === 3 && j === "all" ? Fe(ne.midi) : "A",
    kind: d < 2 && K?.string === ne.string && K?.fret === ne.fret ? "playing" : Od(ne.midi) ? "answer" : Ld.has(Ge(ne)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      X(), i();
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
        X(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        X(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => V(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: fo.map((ne, oe) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: oe === d ? "journey-step current" : "journey-step",
        "aria-current": oe === d ? "step" : void 0,
        disabled: oe > u,
        onClick: () => V(oe),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: oe > u ? "🔒" : oe < u ? "✓" : oe + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: ne.title })
        ]
      },
      ne.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: fo[d].title }),
        /* @__PURE__ */ s.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: fo[d].detail }),
      d < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        d === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää." }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            /* @__PURE__ */ s.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Soita ensin paksulla E-kielellä ",
            /* @__PURE__ */ s.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            ". Nauha 8 on yhteinen kohta. Jatka A-kielellä ",
            /* @__PURE__ */ s.jsx("strong", { children: "7 (E) → 10 (G)" }),
            " ja D-kielellä ",
            /* @__PURE__ */ s.jsx("strong", { children: "7 (A) → 10 (C)" }),
            ". Palaa samaa reittiä. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ s.jsx("p", { children: "Reitti on yksi soitettava harjoitussarja, ei koko asteikon ylös–alas-kuvio. Se näyttää, miten siirtymä toimii käytännössä." })
        ] }),
        d === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita sama siirtymä korvakuulolta ja muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ s.jsx("p", { children: "Soita Am-taustan päälle ensin kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: k <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => T(k - 5), children: "− 5" }),
          /* @__PURE__ */ s.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            k,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: k >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => T(k + 5), children: "+ 5" }),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": R === "route",
              onClick: () => R === "route" ? X() : void q("route"),
              children: R === "route" ? "■ Pysäytä siirtymä" : "▶ Toista siirtymää jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => R === "phrase" ? X() : void q("phrase"), children: R === "phrase" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele siirtymä kerran" })
        ] }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((ne) => !ne), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => V(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((ne) => /* @__PURE__ */ s.jsxs("label", { children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: ne.value,
                  checked: j === ne.value,
                  onChange: () => $(ne.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: ne.name })
            ] }, ne.value))
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            q("phrase");
          }, children: "▶ Kuuntele siirtymä kerran" }) })
        ] }),
        d !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: R === "route" ? K && d < 2 ? `Nyt soi ${Fe(K.midi, !1, !0)} · ${rn[K.string]}-kieli, nauha ${K.fret}.` : "Siirtymän toisto käynnissä. Pysäytä painikkeesta." : "Mallisoitto etenee paksulta E-kieleltä A- ja D-kielille, sitten takaisin." }),
        N && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ s.jsx(
          ai,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: Ce,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? j === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : j === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d === 3 && /* @__PURE__ */ s.jsx(df, {}),
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
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => V(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsx("p", { children: u === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Qi = "musiikin-kartta:skaalapolku:v1", pa = "musiikin-kartta:skaalapolku:position-2:v1", ho = "musiikin-kartta:skaalapolku:position-3:v1", va = "musiikin-kartta:skaalapolku:bridge-1-2:v1", xa = "musiikin-kartta:skaalapolku:active-position:v1", kf = "musiikin-kartta:skaalapolku:tempo:v1", ni = 75, No = 40, Eo = 140;
function Ep() {
  try {
    const i = localStorage.getItem(kf);
    if (i === null) return ni;
    const a = Number(i);
    return Number.isInteger(a) && a >= No && a <= Eo && a % 5 === 0 ? a : ni;
  } catch {
    return ni;
  }
}
const mo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], bd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nn(i = Qi) {
  try {
    const a = Number(localStorage.getItem(i));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function po() {
  try {
    const i = localStorage.getItem(xa);
    return i === "3" && Nn(va) === 4 ? 3 : Nn(Qi) === 4 && (i === "2" || i === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Cp() {
  try {
    return Nn(pa) === 4 && localStorage.getItem(xa) === "bridge";
  } catch {
    return !1;
  }
}
function _p({ onBack: i }) {
  const [a, u] = F.useState(po), [c, d] = F.useState(Cp), [h, p] = F.useState(() => ({
    1: Nn(Qi),
    2: Nn(pa),
    3: Nn(ho)
  })), [m, j] = F.useState(() => Nn(po() === 3 ? ho : po() === 2 ? pa : Qi)), $ = h[a], [k, C] = F.useState(!1), [R, O] = F.useState("roots"), [D, w] = F.useState(Ep), [N, z] = F.useState(null), [E, M] = F.useState(null), [K, X] = F.useState(""), q = F.useRef(new Oo()), T = F.useRef(0);
  function V(W) {
    const se = Math.max(No, Math.min(Eo, W));
    w(se), q.current.setLoopTempo(se);
    try {
      localStorage.setItem(kf, String(se));
    } catch {
    }
  }
  function ee() {
    T.current++, q.current.stop(), z(null), M(null);
  }
  F.useEffect(() => {
    const W = () => {
      document.hidden && (T.current++, q.current.stop(), z(null), M(null));
    };
    return document.addEventListener("visibilitychange", W), () => {
      document.removeEventListener("visibilitychange", W), T.current++, q.current.stop();
    };
  }, []);
  const le = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], Ce = le.strings.flatMap((W, se) => W.map((S) => ft(se, S))).sort((W, se) => W.midi - se.midi || se.string - W.string), ne = [...Ce, ...Ce.slice(1, -1).reverse()], oe = E === null ? null : ne[E], Me = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], U = le.start, ue = le.end, ie = (W) => He(W) === 9, Y = (W) => m < 2 ? !0 : m === 2 ? k && ie(W) : R === "scale" || R === "roots" && ie(W), te = Ce.filter((W) => Y(W.midi)).map((W) => ({
    ...W,
    label: m < 2 || m === 3 && R === "scale" ? Fe(W.midi) : "A",
    kind: m < 2 && oe?.string === W.string && oe.fret === W.fret ? "playing" : ie(W.midi) ? "answer" : "shape"
  }));
  async function Z(W) {
    const se = ++T.current;
    q.current.stop(), M(null), X(""), z(W);
    try {
      W === "phrase" ? await q.current.play(Me) : await q.current.loop(ne.map((S) => S.midi), (S) => {
        se === T.current && M(S);
      }, m === 2 ? D : ni);
    } catch {
      se === T.current && X("Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.");
    } finally {
      se === T.current && (z(null), M(null));
    }
  }
  function g() {
    ee();
    const W = Math.min(4, m + 1);
    if (j(W), C(!1), O("roots"), W > $) {
      p((S) => ({ ...S, [a]: W }));
      const se = a === 1 ? Qi : a === 2 ? pa : ho;
      try {
        localStorage.setItem(se, String(W));
      } catch {
      }
    }
  }
  function b(W) {
    W > $ || (ee(), j(W), C(!1), O("roots"));
  }
  function ke(W) {
    if (!(W === 2 && h[1] < 4) && !(W === 3 && Nn(va) < 4)) {
      ee(), d(!1), u(W), j(h[W]), C(!1), O("roots"), X("");
      try {
        localStorage.setItem(xa, String(W));
      } catch {
      }
    }
  }
  function we() {
    if (!(h[2] < 4)) {
      ee(), d(!0), C(!1), X("");
      try {
        localStorage.setItem(xa, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ s.jsx(Np, { onBack: i, onPosition: ke }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), i();
    }, children: "← Oppimispolut" }),
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
      U,
      "–",
      ue,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => ke(1), children: "Positio 1" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: h[1] < 4,
          onClick: () => ke(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: we,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Nn(va) < 4,
          onClick: () => ke(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: mo.map((W, se) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: se === m ? "journey-step current" : "journey-step",
        "aria-current": se === m ? "step" : void 0,
        disabled: se > $,
        onClick: () => b(se),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: se > $ ? "🔒" : se < $ ? "✓" : se + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: se === 4 ? `Positio ${a} harjoiteltu` : W.title })
        ]
      },
      W.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : mo[m].title }),
        /* @__PURE__ */ s.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: mo[m].detail }),
      m < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        m === 0 && /* @__PURE__ */ s.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        m === 0 && a === 2 && /* @__PURE__ */ s.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ s.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ s.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: D <= No,
              onClick: () => V(D - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            D,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: D >= Eo,
              onClick: () => V(D + 5),
              children: "+ 5"
            }
          ),
          D !== ni && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(ni),
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? ee() : void Z("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => N === "phrase" ? ee() : void Z("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? oe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(oe.midi, !1, !0)} · ${rn[oe.string]}-kieli, nauha ${oe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        K && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: K }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": k, onClick: () => C((W) => !W), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => b(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              bd.map((W) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: W.value,
                    checked: R === W.value,
                    onChange: () => O(W.value)
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: W.label })
              ] }, W.value))
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
              Z("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ s.jsx(ai, { area: { strings: [0, 1, 2, 3, 4, 5], min: U, max: ue, fixed: "box" }, marks: te, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? bd.find((W) => W.value === R).note : k ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ai, { area: { strings: [0, 1, 2, 3, 4, 5], min: U, max: ue, fixed: "box" }, marks: te, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        m === 3 && /* @__PURE__ */ s.jsx(df, {}, a),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: g, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ s.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => b(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => ke(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: we, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => ke(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Nn(va) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const qr = [0, 2, 4, 5, 7, 9, 11], Tp = 1200, fa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Mp({ onBack: i }) {
  const [a, u] = F.useState(0), [c, d] = F.useState([]), [h, p] = F.useState(!1), [m, j] = F.useState(""), [$, k] = F.useState(0), [C, R] = F.useState(!1), O = a >= qr.length, D = qr[Math.min(a, qr.length - 1)], w = oi(fa.strings, fa.min, fa.max).filter((T) => He(T.midi) === D), N = w.filter((T) => !c.includes(Ge(T))), z = N.length === 0 && !O, E = !z && h ? N[0] : void 0;
  F.useEffect(() => {
    if (!C || !z) return;
    const T = window.setTimeout(() => {
      u((V) => V + 1), d([]), p(!1), j("");
    }, Tp);
    return () => window.clearTimeout(T);
  }, [C, z]);
  const M = [
    ...w.filter((T) => c.includes(Ge(T))).map((T) => ({ ...T, kind: "answer", label: Fe(T.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function K(T) {
    if (O || z) return;
    const V = Ge(T);
    if (He(T.midi) !== D) {
      k((Ce) => Ce + 1), j(`Valitsit sävelen ${Fe(T.midi)}. Etsi ${Fe(D)}.`);
      return;
    }
    if (c.includes(V)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ee = [...c, V];
    d(ee), p(!1);
    const le = w.length - ee.length;
    j(le ? `Oikein! ${Fe(D)} löytyi ${rn[T.string]}-kieleltä (${Cr(T.fret)}). Vielä ${le}.` : `Löysit kaikki ${w.length} ${Fe(D)}-säveltä tällä alueella.`);
  }
  function X() {
    z && (u((T) => T + 1), d([]), p(!1), j(""));
  }
  function q() {
    u(0), d([]), p(!1), j(""), k(0);
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !O && /* @__PURE__ */ s.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (T) => R(T.target.checked)
        }
      ),
      /* @__PURE__ */ s.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        $ ? `Vääriä valintoja yhteensä ${$}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: q, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          "Etsi kaikki ",
          Fe(D),
          "-sävelet"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          qr.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Fe(D),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ s.jsx(
        ai,
        {
          area: fa,
          marks: M,
          onAnswer: K,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((T) => !T),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (C ? /* @__PURE__ */ s.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === qr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: X, children: a === qr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Pp = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, vo = ["C", "G", "D", "Em"], Id = ["C", "G", "D", "Em", "Am", "E", "A"], Ap = { min: 0, max: 3, fixed: "" };
function Dd(i) {
  const a = [...i];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function Rp({ onBack: i }) {
  const [a, u] = F.useState(4), [c, d] = F.useState(() => Dd(vo)), [h, p] = F.useState(0), [m, j] = F.useState(null), [$, k] = F.useState([]), [C, R] = F.useState(0), O = h >= c.length, D = Pp[c[Math.min(h, c.length - 1)]], w = a === 4 ? vo : Id, N = D.frets.flatMap((T, V) => T === null ? [] : [V]), z = D.frets.flatMap((T, V) => T === null ? [V] : []), E = { ...Ap, strings: N }, M = D.frets.flatMap((T, V) => T === null ? [] : [{
    ...ft(V, T),
    kind: T === 0 ? "anchor" : "shape",
    label: T === 0 ? "○" : "●"
  }]);
  function K(T = a) {
    u(T), d(Dd(T === 4 ? vo : Id)), p(0), j(null), k([]), R(0);
  }
  function X(T) {
    m || O || $.includes(T) || (T === D.name ? j(T) : (k((V) => [...V, T]), R((V) => V + 1)));
  }
  function q() {
    m && (p((T) => T + 1), j(null), k([]));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
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
            onChange: () => K(4)
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
            onChange: () => K(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => K(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ s.jsx(
        ai,
        {
          area: E,
          marks: M,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ s.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((T) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: m === T ? "right" : $.includes(T) ? "wrong" : "",
          disabled: !!m || $.includes(T),
          "aria-pressed": m === T,
          onClick: () => X(T),
          children: T
        },
        T
      )) }),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: m ? "feedback good" : $.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${D.name}-sointu.` : $.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: q, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const me = (i, a) => ({ first: i, ...a ? { second: a } : {} }), ri = () => [
  me("Gm", "F"),
  me("Gm"),
  me("B♭", "F"),
  me("Gm"),
  me("Gm", "F"),
  me("Gm"),
  me("E♭", "F"),
  me("Gm")
], ii = () => [
  me("B♭", "F"),
  me("Gm", "Dm"),
  me("E♭", "F"),
  me("Gm", "Dm")
], si = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], yf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], $p = [
  { id: "intro", title: "Intro", start: 0, bars: [me("Gm", "F"), me("Gm"), me("B♭", "F"), me("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ri(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ii(), me("E♭"), { ...me("E♭"), passingBass: "F" }],
    lyrics: si,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [me("Gm", "F"), me("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ri(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ii(), me("E♭"), me("F")],
    lyrics: si
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [me("Gm"), me("Dm"), me("F"), me("C"), me("Gm"), me("Dm"), me("E♭"), me("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ri(),
    lyrics: yf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ii(), me("E♭", "F"), me("Gm")],
    lyrics: si
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      me("E♭", "F"),
      { ...me("Gm"), possibleChord: "Dm" },
      me("E♭", "F"),
      me("Gm", "F"),
      { ...me("Gm"), possibleChord: "Dm" },
      me("Gm", "F"),
      me("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Lp = [
  { id: "intro", title: "Intro", start: 0, bars: [me("Gm", "F"), me("Gm"), me("B♭", "F"), me("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ri(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ii(), me("E♭"), me("E♭")],
    lyrics: si
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ri(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ii(), me("E♭"), me("F")],
    lyrics: si
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [me("Gm"), me("Dm"), me("F"), me("C"), me("Gm"), me("Dm"), me("E♭"), me("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ri(),
    lyrics: yf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ii(), me("B♭", "F"), me("Gm"), me("E♭", "F"), me("Gm")],
    lyrics: si
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [me("E♭", "F"), me("Gm", "F"), me("E♭", "F"), me("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ui = {
  acoustic: $p,
  normal: Lp
}, Op = "normal", Co = "yksi-sointu-kaksi-askelta", Fo = {
  acoustic: Co + "-akustinen",
  normal: Co + "-normaali"
}, gf = (i) => i === Co || Object.values(Fo).includes(i ?? "");
function Fp(i) {
  const a = Object.entries(Fo).find(([, u]) => u === i);
  return a ? a[0] : null;
}
const bp = (i) => Fo[i], zd = (i) => {
  const a = Math.max(0, Math.floor(Number.isFinite(i) ? i : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function bo(i, a = "acoustic") {
  const u = ui[a], c = u[i], d = u[i + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function xf(i, a = "acoustic") {
  const u = ui[a], c = Math.max(0, Number.isFinite(i) ? i : 0);
  let d = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    d = C;
  const h = u[d];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= qi(d, p + 1, a); )
    p++;
  const m = qi(d, p, a), j = bo(d, a) / 4;
  let $ = 1;
  for (; $ < 4 && c >= m + $ * j; ) $++;
  const k = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: $,
    chord: k.second && $ >= 3 ? k.second : k.first
  };
}
function qi(i, a, u = "acoustic") {
  return ui[u][i].start + bo(i, u) * a;
}
function Ip(i) {
  return ui[i].flatMap((a, u) => a.bars.flatMap((c, d) => {
    const h = qi(u, d, i), p = { section: a, sectionIndex: u, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const m = bo(u, i) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + m }];
  }));
}
function Dp(i, a = "acoustic", u = !1) {
  const c = ui[a], d = xf(i, a), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", m = Ip(a), j = m.findIndex((O) => O.sectionIndex === d.sectionIndex && O.barIndex === d.barIndex && O.part === p), k = [
    ...m.slice(j + 1).map((O) => ({ ...O, wrapped: !1 })),
    ...u ? m.slice(0, j + 1).map((O) => ({ ...O, wrapped: !0 })) : []
  ].find((O) => O.chord !== d.chord) ?? null;
  let C = null;
  const R = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!R || u)) {
    const O = R ? 0 : d.sectionIndex + 1, D = c[O], w = D.bars[0].first;
    C = {
      section: D,
      sectionIndex: O,
      firstChord: w,
      wrapped: R,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: k, nextSection: C };
}
function zp(i) {
  const a = i.filter((m) => m.lyrics?.length), u = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, j) => m + u(j), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const j = Math.abs(c - 2 * p);
    (j < h || j === h && p >= c - p) && (d = m, h = j), m < a.length && (p += u(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const _o = ["Gm", "F", "B♭", "E♭", "Dm", "C"], jf = "musiikin-kartta:kappale-sointuvihjeet:v1", ka = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Vd = {
  showChords: !0,
  level: 0,
  fadeOrder: ka
};
function ha(i, a) {
  return !a.showChords || a.level >= a.fadeOrder[i];
}
function Bd(i) {
  if (!i) return { ...Vd, fadeOrder: { ...ka } };
  try {
    const a = JSON.parse(i);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, d = { ...ka }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of _o)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Vd, fadeOrder: { ...ka } };
  }
}
function Vp() {
  try {
    return Bd(localStorage.getItem(jf));
  } catch {
    return Bd(null);
  }
}
const Bp = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Kp(i) {
  const a = Bp.exec(i.trim());
  if (!a) return i;
  const [, u, , c = "", d = ""] = a;
  return u + "5" + c + d;
}
const Hp = (i, a) => a === "power" ? Kp(i) : i, Up = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Gp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Wp({ version: i, position: a, loop: u = !1, onSeek: c }) {
  const [d, h] = F.useState(Vp), [p, m] = F.useState(null), [j, $] = F.useState(!1), [k, C] = F.useState("full"), R = (U) => Hp(U, k), O = ui[i], D = xf(a, i), { section: w, sectionIndex: N, barIndex: z, beat: E, chord: M } = D, K = E >= 3 && w.bars[z].second ? "second" : "first", X = (U, ue, ie) => `${i}:${U}:${ue}:${ie}`, q = (U, ue) => X(w.id, U, ue), T = q(z, K), V = ha(M, d), ee = V && p === T, le = (U, ue, ie) => !ha(U, d) || p === q(ue, ie), Ce = d.showChords && d.level === 0, ne = _o.filter((U) => ha(U, d)).length, { nextSection: oe } = Dp(a, i, u), Me = !!oe && ha(oe.firstChord, d);
  return F.useEffect(() => {
    m(null);
  }, [T]), F.useEffect(() => {
    try {
      localStorage.setItem(jf, JSON.stringify(d));
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
            onChange: (U) => {
              h((ue) => ({ ...ue, showChords: U.target.checked })), m(null);
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
            checked: j,
            onChange: (U) => $(U.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([U, ue]) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: U,
              checked: k === U,
              onChange: () => C(U)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: ue })
        ] }, U))
      ] }),
      /* @__PURE__ */ s.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (U) => {
              const ue = Number(U.target.value);
              h((ie) => ({ ...ie, level: ue })), m(null);
            },
            children: Up.map((U) => /* @__PURE__ */ s.jsx("option", { value: U.value, children: U.label }, U.value))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ne === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ne}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: _o.map((U) => /* @__PURE__ */ s.jsxs("label", { children: [
        U,
        /* @__PURE__ */ s.jsx(
          "select",
          {
            "aria-label": U + ": piilotusvaihe",
            value: d.fadeOrder[U],
            onChange: (ue) => {
              const ie = Number(ue.target.value);
              h((Y) => ({ ...Y, fadeOrder: { ...Y.fadeOrder, [U]: ie } })), m(null);
            },
            children: Gp.map((ue) => /* @__PURE__ */ s.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, U)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ s.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (U) => {
              const ue = O.find((ie) => ie.id === U.target.value);
              ue && c(ue.start);
            },
            children: O.map((U) => /* @__PURE__ */ s.jsxs("option", { value: U.id, children: [
              zd(U.start),
              " · ",
              U.title
            ] }, U.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          V && !ee ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: V && !ee ? "?" : R(M) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            E,
            "/4"
          ] }),
          V && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ee ? null : T),
              children: ee ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        oe && /* @__PURE__ */ s.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ s.jsx("strong", { children: Me ? "?" : R(oe.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((U, ue) => {
      const ie = ue === z, Y = ie && (E < 3 || !U.second), te = ie && E >= 3 && !!U.second, Z = le(U.first, ue, "first"), g = U.second ? le(U.second, ue, "second") : !1, b = (Z ? R(U.first) : "sointu piilossa") + (U.second ? " " + (g ? R(U.second) : "sointu piilossa") : "") + (Ce && U.passingBass ? " (basson kulku " + U.passingBass + ")" : "") + (Ce && U.possibleChord ? " (" + R(U.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ie ? " active" : ""),
          "aria-pressed": ie,
          "aria-label": "Tahti " + (ue + 1) + ": " + b + ". Siirry kohtaan " + zd(qi(N, ue, i)),
          onClick: () => c(qi(N, ue, i)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: Y && Z ? "now" : "", children: Z ? R(U.first) : "?" }),
              U.second && /* @__PURE__ */ s.jsx("strong", { className: te && g ? "now" : "", children: g ? R(U.second) : "?" })
            ] }),
            Ce && U.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              U.passingBass,
              "), isku 4"
            ] }),
            Ce && U.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              R(U.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    j ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: zp(O).map((U, ue) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: U.map((ie) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: ie.title }),
        ie.lyrics?.map((Y, te) => /* @__PURE__ */ s.jsx("p", { children: Y }, te))
      ] }, ie.id)) }, ue)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((U, ue) => /* @__PURE__ */ s.jsx("p", { children: U }, ue))
    ] }),
    Ce && w.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const ja = 7, Qp = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, ko = [
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
    scale: Qp,
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
function Yp(i) {
  return Ie.scaleNotes(i).map(([a, u]) => Ie.noteName(ja, a, u));
}
const Sf = (i) => i === "pentatonic" ? 5 : 7;
function Jp(i, a, u) {
  const c = a.filter((m) => m >= 1 && m <= Sf(i.system)), d = Ie.fingeringBoxes(ja, i.scale, i.system, c, u);
  if (i.id !== "blues") return d;
  const h = i.scale.add.map(([m]) => (ja + m) % 12), p = (m, j) => j >= 0 && j <= u && h.includes((Ie.OPEN_PITCHES[m] + j) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((j) => {
    const $ = j.strings.map((C, R) => {
      if (!C.length) return C;
      const O = C[C.length - 1];
      return p(R, O + 1) ? [...C.slice(0, -1), O + 1] : C;
    }), k = $.flat();
    return { ...j, strings: $, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Kd = 17;
function Xp({ open: i }) {
  const [a, u] = F.useState("mp"), [c, d] = F.useState({ pentatonic: [], "3nps": [] }), [h, p] = F.useState(!1), [m, j] = F.useState(!1), $ = F.useRef(null), k = ko.find((N) => N.id === a) ?? ko[0], C = c[k.system], R = Jp(k, C, Kd), O = R.some((N) => N.positions.length > 0), D = Ie.renderBoard(ja, k.scale, Kd, {
    automatic: !0,
    boxes: R,
    onlyBoxNotes: O && h,
    label: k.title + (C.length ? ", " + C.map((N) => "boksi " + N).join(", ") : "")
  });
  F.useEffect(() => {
    const N = $.current;
    !N || !i || R.length === 1 && Ie.revealPositions(N, ".box-highlight");
  }, [D, i]);
  function w(N, z) {
    d((E) => ({ ...E, [k.system]: z ? [...E[k.system], N].sort((M, K) => M - K) : E[k.system].filter((M) => M !== N) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (N) => u(N.target.value), children: ko.map((N) => /* @__PURE__ */ s.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: k.title }),
      /* @__PURE__ */ s.jsx("span", { children: Yp(k.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "song-scale-note", children: k.note }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: $,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: D }
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
      k.scale.add.length > 0 && /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        k.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (N) => {
        N.preventDefault(), j((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Sf(k.system) }, (N, z) => z + 1).map((N) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ s.jsx(
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
      ] }, k.system + N)) }),
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: O && h,
            disabled: !O,
            onChange: (N) => p(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: O ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const Zp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, To = 100, wf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Io(i) {
  if (i === null || i.trim() === "") return To;
  const a = Number(i);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : To;
}
function qp() {
  try {
    return Io(localStorage.getItem(wf));
  } catch {
    return To;
  }
}
function ev(i) {
  try {
    localStorage.setItem(wf, String(Io(String(i))));
  } catch {
  }
}
function Hd(i, a, u = !0) {
  return u ? Zp[i] * Io(String(a)) / 100 : 0;
}
function tv(i = () => new Audio()) {
  try {
    const a = i();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const nv = () => {
  const i = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!i) throw new Error("Web Audio API puuttuu");
  return new i();
};
class rv {
  constructor(a = nv) {
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
let Nf = null;
function iv() {
  return Fp(new URLSearchParams(location.search).get("kappale")) ?? Nf ?? Op;
}
function sv(i) {
  Nf = i;
  const a = new URL(location.href);
  gf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", bp(i)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const av = {
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
}, lv = 0.12, Ud = 1e-3;
function Gd(i, a) {
  try {
    i.currentTime = a;
  } catch {
  }
}
function Wd(i) {
  if (!Number.isFinite(i) || i < 0) return "0:00";
  const a = Math.floor(i);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function ov({ onBack: i }) {
  const a = F.useRef(null), u = F.useRef(null), c = F.useRef(null), d = F.useRef(0), h = F.useRef(null), [p, m] = F.useState(iv), j = av[p], [$, k] = F.useState(!1), [C, R] = F.useState(!0), [O, D] = F.useState(!0), [w, N] = F.useState(!1), [z, E] = F.useState(!1), [M, K] = F.useState(!1), [X, q] = F.useState(qp), [T] = F.useState(() => tv() ? "element" : "webaudio"), V = F.useRef(null), [ee, le] = F.useState(0), [Ce, ne] = F.useState(0), [oe, Me] = F.useState("");
  function U(S = !1) {
    const B = a.current;
    if (!(!B || B.readyState < 1))
      for (const I of [u.current, c.current]) {
        if (!I || I.readyState < 1) continue;
        const re = Math.abs(I.currentTime - B.currentTime), pe = B.loop && Number.isFinite(B.duration) && Math.abs(re - B.duration) < 0.35;
        if (S || !pe && re > lv)
          try {
            I.currentTime = B.currentTime;
          } catch {
          }
      }
  }
  function ue() {
    return [
      ["backing", a.current, !0],
      ["guitar", u.current, C],
      ["vocals", c.current, O]
    ];
  }
  function ie(S = X, B) {
    for (const [I, re, pe] of ue()) {
      if (!re) continue;
      const de = Hd(I, S, B?.[I] ?? pe);
      if (T === "webaudio" && V.current?.routed(re))
        V.current.setLevel(re, de);
      else
        try {
          re.volume = Hd(I, S);
        } catch {
        }
    }
  }
  function Y(S) {
    q(S), ev(S), ie(S);
  }
  function te() {
    d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), k(!1);
  }
  function Z(S) {
    if (S !== p) {
      h.current = null, te();
      for (const B of [a.current, u.current, c.current])
        if (B)
          try {
            B.currentTime = 0;
          } catch {
          }
      le(0), ne(0), Me(""), m(S), sv(S);
    }
  }
  function g(S) {
    const B = a.current;
    if (!B || !Number.isFinite(S)) return;
    const I = Math.max(0, Math.min(S, Number.isFinite(B.duration) ? B.duration : S));
    h.current = I, le(I), Gd(B, I);
  }
  function b(S) {
    const B = h.current;
    if (B === null || S !== a.current || S.seeking) return;
    const I = Number.isFinite(S.duration) ? Math.min(B, S.duration) : B;
    if (I !== B && (h.current = I, le(I)), Math.abs(S.currentTime - I) < Ud) return;
    const re = S.seekable;
    for (let pe = 0; pe < re.length; pe++)
      if (re.start(pe) <= I && I <= re.end(pe)) {
        Gd(S, I);
        return;
      }
  }
  function ke(S) {
    if (S !== a.current) return;
    const B = h.current;
    if (B === null)
      le(S.currentTime);
    else if (S.readyState >= 1 && !S.seeking && Math.abs(S.currentTime - B) < Ud) {
      h.current = null, U(!0);
      return;
    }
    S.paused || U();
  }
  async function we() {
    const S = a.current, B = u.current, I = c.current;
    if (!S || !B || !I) return;
    if ($) {
      te();
      return;
    }
    Me("");
    const re = h.current ?? S.currentTime;
    if (Number.isFinite(S.duration) && re >= S.duration - 0.05 && g(0), b(S), T === "webaudio" && (V.current ??= new rv(), V.current.unlock()))
      for (const de of [S, B, I]) V.current.route(de);
    ie(), B.muted = !C, I.muted = !O, U(!0);
    const pe = ++d.current;
    try {
      const de = [S.play(), B.play(), I.play()];
      if (await Promise.all(de), pe !== d.current) return;
      U(), k(!0);
    } catch {
      if (pe !== d.current) return;
      te(), Me("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function W(S) {
    S && U(), u.current && (u.current.muted = !S), R(S), ie(X, { guitar: S });
  }
  function se(S) {
    S && U(), c.current && (c.current.muted = !S), D(S), ie(X, { vocals: S });
  }
  return F.useEffect(() => {
    const S = () => {
      document.hidden && te();
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), V.current?.close();
    };
  }, []), F.useEffect(() => {
    ie();
  }, [p]), /* @__PURE__ */ s.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: i, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ s.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ s.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ s.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ s.jsxs(
        "select",
        {
          id: "song-version-select",
          value: p,
          onChange: (S) => Z(S.target.value),
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
          j.label,
          " · ",
          j.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          we();
        }, children: $ ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Ce > 0 ? Ce : 1,
            step: 0.1,
            value: Math.min(ee, Ce > 0 ? Ce : 1),
            disabled: Ce <= 0,
            onChange: (S) => g(Number(S.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Wd(ee),
          " / ",
          Wd(Ce)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (S) => W(S.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: O,
              onChange: (S) => se(S.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (S) => N(S.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": T, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            X > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            X > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: X,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": X + " %",
              onChange: (S) => Y(Number(S.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            X,
            " %"
          ] })
        ] })
      ] }),
      oe && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: oe }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: j.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (S) => {
            S.currentTarget === a.current && (ne(S.currentTarget.duration), b(S.currentTarget));
          },
          onProgress: (S) => b(S.currentTarget),
          onCanPlay: (S) => b(S.currentTarget),
          onTimeUpdate: (S) => ke(S.currentTarget),
          onEnded: (S) => {
            S.currentTarget !== a.current || S.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), k(!1), le(S.currentTarget.duration));
          },
          onPause: (S) => {
            S.currentTarget === a.current && k(!1);
          },
          onError: () => Me(j.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        p + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: u,
          src: j.guitar,
          preload: "metadata",
          muted: !C,
          loop: w,
          onLoadedMetadata: () => U(!0),
          onError: () => Me(j.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        p + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: c,
          src: j.vocals,
          preload: "metadata",
          muted: !O,
          loop: w,
          onLoadedMetadata: () => U(!0),
          onError: () => Me(j.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        p + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: z, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (S) => {
        S.preventDefault(), E((B) => !B);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(Wp, { version: p, position: ee, loop: w, onSeek: g })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: M, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (S) => {
        S.preventDefault(), K((B) => !B);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(Xp, { open: M })
    ] })
  ] });
}
const Mo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, ya = (i, a = 1) => i.toFixed(a).replace(".", ",").replace("-", "−"), Ef = (i) => {
  const a = Math.round(i);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Po = (i) => i ? i.label || "Järjestelmän oletustulo" : "";
function uv(i, a, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (i) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Po(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Cf({ frame: i, threshold: a }) {
  const u = i?.rms ?? 0, c = li(u), d = (i?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${ya(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${$d(u) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${$d(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function cv({ mic: i, frame: a, heard: u, s: c, now: d }) {
  const h = mf(i.phase, a), p = u && d - u.at < 1500 ? u : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Fe(p.midi, c.flats, !0)} · ${Ef(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Mo[h];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    i.phase === "on" && /* @__PURE__ */ s.jsx(Cf, { frame: a, threshold: c.minRms })
  ] });
}
function dv({ mic: i, frame: a, heard: u, accepted: c, now: d, s: h, change: p, devices: m, locked: j, calibrating: $, calibration: k, onTest: C, onStop: R, onCalibrate: O }) {
  const D = F.useId(), w = mf(i.phase, a), N = i.purpose === "test" && i.phase !== "off" && i.phase !== "error", z = i.phase === "on", E = u && d - u.at < 1500 ? u : null, M = E && (w === "pitch" || w === "untuned"), K = z && (a?.peak ?? 0) >= 0.98, X = i.phase === "error" ? [] : uv(w, h, i.info, K), q = !h.device || m.some((V) => V.deviceId === h.device), T = (V, ee) => p({ ...h, [V]: ee });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      i.phase === "error" ? i.error : Mo[w],
      w === "pitch" && E ? ` ${Fe(E.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: i.phase === "on" ? `Mikrofoni kuuntelee: ${Po(i.info)}.` : i.phase === "error" ? i.error : Mo[i.phase] }),
    i.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Po(i.info),
          i.info && i.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${i.info.channels}` : "",
          i.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(Cf, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ya(Math.max(-60, li(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Fe(E.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${ya(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          Ef(E.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Fe(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    X.length > 0 && z && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: X.map((V) => /* @__PURE__ */ s.jsx("li", { children: V }, V)) }),
    i.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: R, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: h.input === "mic" && i.phase !== "on" ? "primary" : "", disabled: j, onClick: C, children: "Testaa mikrofoni" }),
      N && z && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: $, onClick: O, children: $ ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && i.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: `${D}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ s.jsxs("select", { id: `${D}-device`, value: h.device, onChange: (V) => T("device", V.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !q && /* @__PURE__ */ s.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((V, ee) => /* @__PURE__ */ s.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${ee + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-rms`, children: [
              "Äänikynnys · ",
              ya(li(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (V) => T("minRms", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (V) => T("clarity", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (V) => T("stability", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (V) => T("cents", Number(V.target.value)) })
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
const fv = (i) => i.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[i.scale]) : Er[i.mode === "caged" ? "maj" : i.chord].tones, Qd = (i, a) => fv(i).find(([u]) => u === a)?.[1], _f = (i) => i.mode === "scale" || i.mode === "chord" || i.mode === "caged", hv = (i) => i.direction === "up" ? "ylöspäin" : "alaspäin";
function mv(i, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : i.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function pv(i, a, u, c, d) {
  return a.choices === "degree" ? `Oikein! ${Yi(i.root, a.interval, a.degree)} on ${a.degree}. aste.` : _f(i) ? `Oikein! ${a.degree}. aste on ${Yi(i.root, a.interval, a.degree)}.` : i.mode === "interval" ? `Oikein! ${Fe(a.reference, i.flats, !0)} → ${a.name} on ${Ji[a.interval]} ${hv(a)}.` : i.mode === "notes" ? u === "board" && d ? `Oikein! ${Fe(d.midi, i.flats)} on ${Xd[d.string]}: ${Cr(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(c, i.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function vv(i, a, u, c, d) {
  if (u === "note") return `Ei ${Fe(c, i.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Qd(i, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = He(d.midi) === He(a.midi);
  if (i.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${$o[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Fe(d.midi, i.flats)}. Etsi ${a.name}.`;
  if (_f(i)) {
    const p = He(d.midi - i.root), m = Qd(i, p), j = i.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${i.mode === "caged" ? "muodon" : i.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Yi(i.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Fe(d.midi, i.flats)}, joka ei kuulu ${j}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, i.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function kv(i, a, u) {
  const c = Fe(u, i.flats, !0);
  return He(u) === He(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Tf(i, a = !1) {
  const u = i.split(":"), c = (p) => Number(u[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), h = (p, m) => rn[p] ? `${rn[p]}-kieli, ${Cr(m)}` : null;
  switch (u[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && d(1) ? `Kuule ja toista: ${Fe(c(1), a, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Ji[c(1)] ? `${Ji[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = u[2];
      if (!d(1, 3) || !Er[p]) return null;
      const m = Er[p].tones.find(([j]) => j === c(3))?.[1];
      return m ? `${Zd(c(1), p)}: ${m}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[u[2]];
      if (!d(1) || !p) return null;
      const m = `${or(c(1))}-${p.name}`;
      if (u.length === 5 && d(3)) {
        const j = Ie.scaleNotes(p).find(([$]) => $ === c(3))?.[1];
        return j ? `${m}: ${j}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const p = `${or(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && d(3)) {
        const m = Er.maj.tones.find(([j]) => j === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Yd(i) {
  return Object.entries(i).flatMap(([a, u]) => {
    const [c, d, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: u }];
  });
}
const Ao = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", yv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function gv(i) {
  const a = i.solo === void 0 ? `${i.first}/${i.count} heti oikein` : i.solo ? `itsenäisesti ${i.soloFirst ?? 0}/${i.solo} heti oikein${i.count > i.solo ? ` · ${i.count - i.solo} vihjeen kanssa` : ""}` : `${i.count} vastausta vihjeen kanssa`;
  return `${new Date(i.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ti(i.mode)}${i.hints ? ` · ${Sa[i.hints].title}` : ""} · ${a} · keskimäärin ${Ao(i.ms / Math.max(1, i.count))}${i.complete ? "" : " · keskeytetty"}`;
}
function xv({ store: i, s: a, locked: u, changed: c }) {
  const [d, h] = F.useState(""), p = F.useRef(null), { recent: m, sessions: j, stats: $ } = i.data, k = _r(a), C = ef(a), R = [...new Set(m.map((E) => E.mode))].map((E) => {
    const M = m.filter((K) => K.mode === E);
    return { mode: E, ...jo(M), last: Math.max(...M.map((K) => K.at)) };
  }).sort((E, M) => M.last - E.last), O = Yd($).filter((E) => !E.guided && E.mode === a.mode && E.input === k && E.check === C && E.stat.attempts >= 3).map((E) => ({ ...E, score: Lo(E.stat), text: Tf(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, M) => E.score - M.score).slice(0, 5), D = Yd($).reduce((E, M) => E + M.stat.attempts, 0);
  function w() {
    const E = new Blob([JSON.stringify(i.data, null, 2)], { type: "application/json" }), M = URL.createObjectURL(E), K = document.createElement("a");
    K.href = M, K.download = "musiikin-kartta-harjoittelu.json", K.click(), setTimeout(() => URL.revokeObjectURL(M), 1e3);
  }
  async function N(E) {
    if (E)
      try {
        const M = await E.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        i.restore(M), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (i.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        D,
        " vastattua kysymystä · ",
        j.length,
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
        /* @__PURE__ */ s.jsx("tbody", { children: R.map((E) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: ti(E.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: E.count }),
          /* @__PURE__ */ s.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: E.guided }),
          /* @__PURE__ */ s.jsx("td", { children: Ao(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    O.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ti(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: O.map((E) => /* @__PURE__ */ s.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(Xi(E.stat) * 100),
        " % heti oikein · ",
        Ao(Zi(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: D ? `Harjoituksessa ${ti(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        yv[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(zm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: $, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ s.jsx("ul", { children: j.slice(-10).reverse().map((E) => /* @__PURE__ */ s.jsx("li", { children: gv(E) }, E.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          N(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u || !D, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ s.jsx("p", { role: "status", children: d })
    ] }),
    i.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: i.warning })
  ] });
}
function jv() {
  try {
    return new Nd(localStorage);
  } catch {
    return new Nd();
  }
}
const Jd = (i) => ({ minRms: i.minRms, minClarity: i.clarity, stabilityMs: i.stability, centsTolerance: i.cents }), Sv = (i) => (i / 1e3).toFixed(1).replace(".", ",") + " s", wv = [0, 2, 4, 5, 7, 9, 11];
function Nv(i) {
  return i.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : i.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : i.mode === "chord" ? i.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : i.mode === "scale" ? ["mp", "majp"].includes(i.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Ev() {
  const [i] = F.useState(jv), [a, u] = F.useState(() => Am(location.search, i.data.settings)), [, c] = F.useReducer((L) => L + 1, 0), d = F.useRef(null), h = F.useRef(new xp()), p = F.useRef(new Oo()), m = F.useRef(0), j = F.useRef(), $ = F.useRef(), k = F.useRef(null), C = F.useRef(0), R = F.useRef(null), O = F.useRef(a);
  O.current = a;
  const [D, w] = F.useState({ phase: "off", purpose: "none" }), N = F.useRef(D), z = (L) => {
    N.current = L, w(L);
  }, [E, M] = F.useState(null), [K, X] = F.useState(null), [q, T] = F.useState(null), [V, ee] = F.useState(0), [le, Ce] = F.useState([]), [ne, oe] = F.useState(!1), [Me, U] = F.useState(!1), [ue, ie] = F.useState(""), [Y, te] = F.useState("info"), [Z, g] = F.useState(""), [b, ke] = F.useState(0), [we, W] = F.useState([]), [se, S] = F.useState([]), [B, I] = F.useState(null), [re, pe] = F.useState(!1), [de, ge] = F.useState(""), [xe, Ae] = F.useState(""), [_e, Le] = F.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : gf(L.get("kappale")) ? "songs" : null;
  }), Je = () => {
    ip().then(Ce).catch(() => {
    });
  };
  function Be() {
    clearTimeout($.current), k.current = null, pe(!1);
  }
  function We() {
    M(null), X(null), T(null);
  }
  function Ke() {
    h.current.stop(), Be(), z({ phase: "off", purpose: "none" }), We();
  }
  async function gt(L) {
    if (h.current.active && N.current.phase === "on")
      return Be(), z({ ...N.current, purpose: L }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), We();
    try {
      const fe = await h.current.start(O.current.device, {
        ...Jd(O.current),
        onFrame: (Se) => Mt.current.frame(Se),
        onStableNote: (Se) => Mt.current.stable(Se)
      }, () => Mt.current.lost());
      return fe ? (z({ phase: "on", purpose: L, info: fe }), Je(), !0) : !1;
    } catch (fe) {
      return z({ phase: "error", purpose: "none", error: gp(fe) }), !1;
    }
  }
  function Xe(L) {
    k.current?.push(L.rms);
    const fe = performance.now();
    fe - C.current < 66 || (C.current = fe, M(L), ee(fe), L.midi !== void 0 && L.frequency !== void 0 && X({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: fe }));
  }
  function ze(L) {
    N.current.purpose === "test" ? T(L) : N.current.purpose === "round" && Re(L.midi, "mic", void 0, L.heldMs);
  }
  function nt() {
    const L = N.current.purpose === "round";
    Be(), We(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    L && fe && ["active", "feedback", "paused"].includes(fe.phase) && (ct(), U(!1), fe.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Mt = F.useRef({ frame: Xe, stable: ze, lost: nt });
  Mt.current = { frame: Xe, stable: ze, lost: nt };
  function Gt(L) {
    const fe = ga(L), Se = fe.device !== O.current.device;
    O.current = fe, u(fe), i.settings(fe), g(""), h.current.active && (Se && N.current.purpose === "test" ? (Ke(), gt("test")) : h.current.setOptions(Jd(fe)));
  }
  function zt(L) {
    Ae(""), d.current = null, Le(L);
  }
  function sn() {
    ge(""), gt("test");
  }
  function Wt() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (Be(), k.current = [], pe(!0), ge("Mitataan taustakohinaa kolme sekuntia. Älä soita."), $.current = setTimeout(() => {
      const L = k.current ?? [];
      if (Be(), L.length < 10) {
        ge("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: Se, loud: Jt } = jp(L);
      Gt({ ...O.current, minRms: fe }), ge(`Taustakohina on ${Math.round(li(Se))} dB ja äänikynnys nyt ${Math.round(li(fe))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    m.current++, clearTimeout(j.current), p.current.stop();
  }
  function Dn(L, fe) {
    if (!L.results.length) return;
    const Se = jo(L.results);
    i.session({
      id: L.id,
      mode: L.settings.mode,
      count: Se.count,
      first: Se.first,
      ms: Se.ms,
      solo: Se.solo,
      soloFirst: Se.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: fe
    });
  }
  async function je(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    ct();
    const fe = m.current;
    L.pause(), h.current.pause(), U(!0), te("info"), ie("Kuuntele…"), c();
    try {
      await p.current.play(L.question.sound);
    } catch {
      fe === m.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== L || (L.resume(), h.current.resume(), U(!1), ie(""), c());
  }
  async function Qt(L) {
    W([]), S([]), I(null), g(""), ke(L.hintLevel), h.current.rearm(), te("info"), ie(""), c(), L.question?.sound.length && await je(L);
  }
  async function Te() {
    const L = O.current, fe = go(L);
    if (fe) {
      g(fe);
      return;
    }
    ct();
    const Se = m.current;
    if (g(""), ge(""), Ae(""), da(L)) {
      oe(!0);
      const lt = await gt("round");
      if (Se !== m.current) return;
      if (oe(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && Ke();
    const Jt = new Jm(L, () => i.data.stats, (lt) => i.record(lt));
    try {
      Jt.start();
    } catch (lt) {
      N.current.purpose === "round" && Ke(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => R.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Qt(Jt);
  }
  function $e() {
    ct(), oe(!1), Ke();
  }
  function Re(L, fe, Se, Jt = 0) {
    const lt = d.current, cr = lt?.question;
    if (!lt || !cr || lt.phase !== "active") return;
    const Vn = lt.answer(L, fe, Se, Jt);
    if (Vn !== "ignored") {
      if (Vn === "candidate")
        I(L), te("bad"), ie(kv(lt.settings, cr, L));
      else if (Vn === "wrong")
        Se ? W((dr) => [...dr, Se]) : S((dr) => [...dr, L]), te("bad"), ie(vv(lt.settings, cr, fe, L, Se));
      else if (I(null), te("good"), ie(pv(lt.settings, cr, fe, L, Se)), Dn(lt, !1), lt.settings.advance) {
        const dr = m.current;
        j.current = setTimeout(() => {
          dr === m.current && Qe();
        }, fe === "mic" ? 1800 : 1400);
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
      } catch (fe) {
        qe(!1), g(fe instanceof Error ? fe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
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
    ct(), U(!1), oe(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && Ke();
    const fe = d.current;
    fe && (fe.stop(), Dn(fe, L)), I(null), ke(0), W([]), S([]), g(""), Ae(L ? "complete" : "stopped"), te("info"), ie(""), c();
  }
  function Yt() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    ct(), U(!1), L.pause();
    const fe = N.current.purpose === "round";
    fe && Ke(), te("info"), ie(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function xt() {
    const L = d.current;
    if (!L || L.phase !== "paused" || Me) return;
    ct();
    const fe = m.current;
    if (g(""), da(L.settings)) {
      oe(!0);
      const Se = await gt("round");
      if (fe !== m.current) return;
      if (oe(!1), !Se) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), te("info"), ie(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await je(L));
  }
  function Vt(L) {
    const fe = d.current;
    !fe || fe.phase !== "active" || (fe.useHint(L), ke(L), c());
  }
  const mn = F.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mn.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || Me ? Yt() : N.current.phase !== "off" && N.current.phase !== "error" && (ct(), oe(!1), Ke());
    },
    restored: () => {
      oe(!1), U(!1), z({ phase: "off", purpose: "none" }), We(), c();
    }
  }, F.useEffect(() => {
    Je();
    const L = () => Je();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const fe = () => {
      m.current++, clearTimeout(j.current), clearTimeout($.current), h.current.stop(), p.current.stop(), yp(), d.current?.pause();
    }, Se = () => {
      document.hidden && mn.current.hidden();
    }, Jt = (lt) => {
      lt.persisted && mn.current.restored();
    };
    return document.addEventListener("visibilitychange", Se), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Jt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Se), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const pn = F.useRef(null), zn = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${Me}`;
  F.useEffect(() => {
    const L = d.current, fe = R.current, Se = document.activeElement;
    !L || !fe || !(Se === document.body || fe.contains(Se)) || (L.phase === "feedback" ? pn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Me && (Se === document.body || Se === pn.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [zn]);
  const be = d.current, rt = !!be && ["active", "paused", "feedback"].includes(be.phase), Ye = rt ? be.settings : a, pt = rt ? be.question : void 0, Pt = !!pt && !!be?.answered, vn = rt && be.phase === "paused" && !Me && !Pt, kn = rt && be.phase === "active" && !Me, ci = rt ? null : go(a), En = rt || ne, ur = Tr(Ye), Mr = Bm(Ye), Cn = pt && !Pt ? b : 0, di = pt ? Ym(Ye, pt, Pt ? 2 : Cn) : { marks: [], text: "" }, ts = [...new Map([...di.marks, ...Pt ? [] : we.map((L) => ({ ...L, label: Fe(L.midi, Ye.flats), kind: "wrong" }))].map((L) => [Ge(L), L])).values()], Na = rt && da(Ye), _n = !!pt && !vn && (pt.choices === "position" || ts.length > 0), jt = be ? jo(be.results) : null, ns = !be || Ye.hints !== "fade" ? "" : be.index <= 3 ? " · vastaus näkyy" : be.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", rs = be && !rt ? be.results.filter((L) => L.errors > 0 || L.hint) : [], [is, ss] = Nv(Ye), Tn = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ s.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ s.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Mn = i.data.notice === "hints-default" && /* @__PURE__ */ s.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
      i.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !rt && _e === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(Zm, { onSelect: zt })
  ] }) : !rt && _e === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(_p, { onBack: () => Le(null) })
  ] }) : !rt && _e === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(Mp, { onBack: () => Le(null) })
  ] }) : !rt && _e === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(Rp, { onBack: () => Le(null) })
  ] }) : !rt && _e === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(ov, { onBack: () => Le(null) })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: is, children: [
      "Lue tämän harjoituksen teoria: ",
      ss,
      " →"
    ] }) }),
    _e !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        rt && qe(), Le(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: _e === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: _e === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    rt ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: ti(Ye.mode) }),
      " · ",
      _d(Ye)
    ] }) : _e === "legacy" ? /* @__PURE__ */ s.jsx(Td, { s: a, change: Gt, locked: En, problem: ci }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(Td, { s: a, change: Gt, locked: En, problem: ci })
    ] }),
    !rt && (_e === "legacy" || da(a)) && /* @__PURE__ */ s.jsx(
      dv,
      {
        mic: D,
        frame: E,
        heard: K,
        accepted: q,
        now: V,
        s: a,
        change: Gt,
        devices: le,
        locked: ne,
        calibrating: re,
        calibration: de,
        onTest: sn,
        onStop: Ke,
        onCalibrate: Wt
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: R, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: ti(Ye.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: rt ? `Kysymys ${be.index}${be.total ? " / " + be.total : " · vapaa harjoittelu"} · ${Sa[Ye.hints].title}${ns}${be.phase === "paused" && !Me ? " · tauolla" : ""}` : xe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !rt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        be && be.results.length > 0 && jt ? /* @__PURE__ */ s.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ s.jsx("h3", { children: xe === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ s.jsxs("dl", { children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ s.jsx("dd", { children: Sv(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          rs.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(rs.map((L) => Tf(L.item, a.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ s.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: _d(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: ne ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: $e, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!ci, onClick: () => {
          Te();
        }, children: be?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !be && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      rt && pt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: vn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: vn ? "Kysymys palaa näkyviin, kun jatkat." : Me ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : mv(Ye, pt) }),
        be.hintLevel > 0 && !Pt && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ye.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Na && /* @__PURE__ */ s.jsx(cv, { mic: D, frame: E, heard: K, s: Ye, now: V }),
        pt.choices === "note" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ye.accidentals ? Array.from({ length: 12 }, (L, fe) => fe) : wv).map((L) => /* @__PURE__ */ s.jsx("button", { type: "button", className: se.includes(L) ? "wrong" : Pt && L === pt.midi % 12 ? "right" : "", disabled: !kn || se.includes(L), onClick: () => Re(L, "note"), children: Fe(L, Ye.flats) }, L)) }),
        pt.choices === "degree" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ye.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ye.scale]) : Er[Ye.chord].tones).map(([L, fe]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: se.includes(L) ? "wrong" : Pt && L === pt.interval ? "right" : "", disabled: !kn || se.includes(L), onClick: () => Re(L, "degree"), children: fe }, L)) }),
        _n && /* @__PURE__ */ s.jsx(
          ai,
          {
            area: Mr,
            marks: ts,
            disabled: !kn || pt.choices !== "position" || Ye.input === "mic",
            onAnswer: (L) => Re(L.midi, "board", L),
            caption: ur.fixed === "shape" ? `${Ye.shape}-muodon alue` : ur.fixed === "box" ? `Boksin ${Ye.box} alue` : "Otelauta"
          }
        ),
        !Pt && !vn && Cn > 0 && di.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: di.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${Y}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        B !== null && be.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            be.confirmWrong(), I(null), ie("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          be.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: pn, onClick: () => {
            Qe();
          }, children: be.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          be.phase === "active" && !Pt && !Me && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            Cn === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(Math.max(1, be.hintLevel)), children: be.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Cn === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(2), children: "Näytä vastaus" }),
            Cn > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => ke(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !kn, onClick: () => {
            je(be);
          }, children: "Kuuntele uudelleen" }),
          be.phase === "paused" && !Me ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: ne, onClick: () => {
            xt();
          }, children: ne ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Yt, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => qe(), children: "Lopeta harjoitus" })
        ] }),
        be.phase === "feedback" && Ye.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !rt && Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z })
    ] }),
    !rt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: Rm(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(xv, { store: i, s: a, locked: En, changed: () => {
        const L = ga(i.data.settings);
        O.current = L, u(L), c();
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
wm.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx(Ev, {}));
//# sourceMappingURL=app.js.map
