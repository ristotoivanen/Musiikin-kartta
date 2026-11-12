function ym(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var so = { exports: {} }, Ur = {}, ao = { exports: {} }, Oe = {};
var cd;
function gm() {
  if (cd) return Oe;
  cd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function A(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, w = {};
  function E(g, b, ke) {
    this.props = g, this.context = b, this.refs = w, this.updater = ke || O;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(g, b) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, b, "setState");
  }, E.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = E.prototype;
  function N(g, b, ke) {
    this.props = g, this.context = b, this.refs = w, this.updater = ke || O;
  }
  var M = N.prototype = new z();
  M.constructor = N, D(M, E.prototype), M.isPureReactComponent = !0;
  var K = Array.isArray, J = Object.prototype.hasOwnProperty, q = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(g, b, ke) {
    var Ee, W = {}, se = null, j = null;
    if (b != null) for (Ee in b.ref !== void 0 && (j = b.ref), b.key !== void 0 && (se = "" + b.key), b) J.call(b, Ee) && !T.hasOwnProperty(Ee) && (W[Ee] = b[Ee]);
    var B = arguments.length - 2;
    if (B === 1) W.children = ke;
    else if (1 < B) {
      for (var I = Array(B), ie = 0; ie < B; ie++) I[ie] = arguments[ie + 2];
      W.children = I;
    }
    if (g && g.defaultProps) for (Ee in B = g.defaultProps, B) W[Ee] === void 0 && (W[Ee] = B[Ee]);
    return { $$typeof: r, type: g, key: se, ref: j, props: W, _owner: q.current };
  }
  function ee(g, b) {
    return { $$typeof: r, type: g.type, key: b, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function le(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }
  function _e(g) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ke) {
      return b[ke];
    });
  }
  var ne = /\/+/g;
  function oe(g, b) {
    return typeof g == "object" && g !== null && g.key != null ? _e("" + g.key) : b.toString(36);
  }
  function Se(g, b, ke, Ee, W) {
    var se = typeof g;
    (se === "undefined" || se === "boolean") && (g = null);
    var j = !1;
    if (g === null) j = !0;
    else switch (se) {
      case "string":
      case "number":
        j = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case r:
          case a:
            j = !0;
        }
    }
    if (j) return j = g, W = W(j), g = Ee === "" ? "." + oe(j, 0) : Ee, K(W) ? (ke = "", g != null && (ke = g.replace(ne, "$&/") + "/"), Se(W, b, ke, "", function(ie) {
      return ie;
    })) : W != null && (le(W) && (W = ee(W, ke + (!W.key || j && j.key === W.key ? "" : ("" + W.key).replace(ne, "$&/") + "/") + g)), b.push(W)), 1;
    if (j = 0, Ee = Ee === "" ? "." : Ee + ":", K(g)) for (var B = 0; B < g.length; B++) {
      se = g[B];
      var I = Ee + oe(se, B);
      j += Se(se, b, ke, I, W);
    }
    else if (I = A(g), typeof I == "function") for (g = I.call(g), B = 0; !(se = g.next()).done; ) se = se.value, I = Ee + oe(se, B++), j += Se(se, b, ke, I, W);
    else if (se === "object") throw b = String(g), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function U(g, b, ke) {
    if (g == null) return g;
    var Ee = [], W = 0;
    return Se(g, Ee, "", "", function(se) {
      return b.call(ke, se, W++);
    }), Ee;
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
  var re = { current: null }, Y = { transition: null }, te = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: Y, ReactCurrentOwner: q };
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
  } }, Oe.Component = E, Oe.Fragment = u, Oe.Profiler = d, Oe.PureComponent = N, Oe.StrictMode = c, Oe.Suspense = S, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, Oe.act = Z, Oe.cloneElement = function(g, b, ke) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var Ee = D({}, g.props), W = g.key, se = g.ref, j = g._owner;
    if (b != null) {
      if (b.ref !== void 0 && (se = b.ref, j = q.current), b.key !== void 0 && (W = "" + b.key), g.type && g.type.defaultProps) var B = g.type.defaultProps;
      for (I in b) J.call(b, I) && !T.hasOwnProperty(I) && (Ee[I] = b[I] === void 0 && B !== void 0 ? B[I] : b[I]);
    }
    var I = arguments.length - 2;
    if (I === 1) Ee.children = ke;
    else if (1 < I) {
      B = Array(I);
      for (var ie = 0; ie < I; ie++) B[ie] = arguments[ie + 2];
      Ee.children = B;
    }
    return { $$typeof: r, type: g.type, key: W, ref: se, props: Ee, _owner: j };
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
    return re.current.useCallback(g, b);
  }, Oe.useContext = function(g) {
    return re.current.useContext(g);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(g) {
    return re.current.useDeferredValue(g);
  }, Oe.useEffect = function(g, b) {
    return re.current.useEffect(g, b);
  }, Oe.useId = function() {
    return re.current.useId();
  }, Oe.useImperativeHandle = function(g, b, ke) {
    return re.current.useImperativeHandle(g, b, ke);
  }, Oe.useInsertionEffect = function(g, b) {
    return re.current.useInsertionEffect(g, b);
  }, Oe.useLayoutEffect = function(g, b) {
    return re.current.useLayoutEffect(g, b);
  }, Oe.useMemo = function(g, b) {
    return re.current.useMemo(g, b);
  }, Oe.useReducer = function(g, b, ke) {
    return re.current.useReducer(g, b, ke);
  }, Oe.useRef = function(g) {
    return re.current.useRef(g);
  }, Oe.useState = function(g) {
    return re.current.useState(g);
  }, Oe.useSyncExternalStore = function(g, b, ke) {
    return re.current.useSyncExternalStore(g, b, ke);
  }, Oe.useTransition = function() {
    return re.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var dd;
function $o() {
  return dd || (dd = 1, ao.exports = gm()), ao.exports;
}
var fd;
function xm() {
  if (fd) return Ur;
  fd = 1;
  var r = $o(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, S, $) {
    var k, C = {}, A = null, O = null;
    $ !== void 0 && (A = "" + $), S.key !== void 0 && (A = "" + S.key), S.ref !== void 0 && (O = S.ref);
    for (k in S) c.call(S, k) && !h.hasOwnProperty(k) && (C[k] = S[k]);
    if (m && m.defaultProps) for (k in S = m.defaultProps, S) C[k] === void 0 && (C[k] = S[k]);
    return { $$typeof: a, type: m, key: A, ref: O, props: C, _owner: d.current };
  }
  return Ur.Fragment = u, Ur.jsx = p, Ur.jsxs = p, Ur;
}
var hd;
function jm() {
  return hd || (hd = 1, so.exports = xm()), so.exports;
}
var s = jm(), F = $o(), ca = {}, lo = { exports: {} }, Dt = {}, oo = { exports: {} }, uo = {};
var md;
function Sm() {
  return md || (md = 1, (function(r) {
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
          var Ee = 2 * (g + 1) - 1, W = Y[Ee], se = Ee + 1, j = Y[se];
          if (0 > d(W, Z)) se < b && 0 > d(j, W) ? (Y[g] = j, Y[se] = Z, g = se) : (Y[g] = W, Y[Ee] = Z, g = Ee);
          else if (se < b && 0 > d(j, Z)) Y[g] = j, Y[se] = Z, g = se;
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
      r.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var S = [], $ = [], k = 1, C = null, A = 3, O = !1, D = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(Y) {
      for (var te = u($); te !== null; ) {
        if (te.callback === null) c($);
        else if (te.startTime <= Y) c($), te.sortIndex = te.expirationTime, a(S, te);
        else break;
        te = u($);
      }
    }
    function K(Y) {
      if (w = !1, M(Y), !D) if (u(S) !== null) D = !0, ue(J);
      else {
        var te = u($);
        te !== null && re(K, te.startTime - Y);
      }
    }
    function J(Y, te) {
      D = !1, w && (w = !1, z(V), V = -1), O = !0;
      var Z = A;
      try {
        for (M(te), C = u(S); C !== null && (!(C.expirationTime > te) || Y && !_e()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, A = C.priorityLevel;
            var b = g(C.expirationTime <= te);
            te = r.unstable_now(), typeof b == "function" ? C.callback = b : C === u(S) && c(S), M(te);
          } else c(S);
          C = u(S);
        }
        if (C !== null) var ke = !0;
        else {
          var Ee = u($);
          Ee !== null && re(K, Ee.startTime - te), ke = !1;
        }
        return ke;
      } finally {
        C = null, A = Z, O = !1;
      }
    }
    var q = !1, T = null, V = -1, ee = 5, le = -1;
    function _e() {
      return !(r.unstable_now() - le < ee);
    }
    function ne() {
      if (T !== null) {
        var Y = r.unstable_now();
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
    if (typeof N == "function") oe = function() {
      N(ne);
    };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), U = Se.port2;
      Se.port1.onmessage = ne, oe = function() {
        U.postMessage(null);
      };
    } else oe = function() {
      E(ne, 0);
    };
    function ue(Y) {
      T = Y, q || (q = !0, oe());
    }
    function re(Y, te) {
      V = E(function() {
        Y(r.unstable_now());
      }, te);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, r.unstable_continueExecution = function() {
      D || O || (D = !0, ue(J));
    }, r.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, r.unstable_getFirstCallbackNode = function() {
      return u(S);
    }, r.unstable_next = function(Y) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = A;
      }
      var Z = A;
      A = te;
      try {
        return Y();
      } finally {
        A = Z;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(Y, te) {
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
      var Z = A;
      A = Y;
      try {
        return te();
      } finally {
        A = Z;
      }
    }, r.unstable_scheduleCallback = function(Y, te, Z) {
      var g = r.unstable_now();
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
      return b = Z + b, Y = { id: k++, callback: te, priorityLevel: Y, startTime: Z, expirationTime: b, sortIndex: -1 }, Z > g ? (Y.sortIndex = Z, a($, Y), u(S) === null && Y === u($) && (w ? (z(V), V = -1) : w = !0, re(K, Z - g))) : (Y.sortIndex = b, a(S, Y), D || O || (D = !0, ue(J))), Y;
    }, r.unstable_shouldYield = _e, r.unstable_wrapCallback = function(Y) {
      var te = A;
      return function() {
        var Z = A;
        A = te;
        try {
          return Y.apply(this, arguments);
        } finally {
          A = Z;
        }
      };
    };
  })(uo)), uo;
}
var pd;
function wm() {
  return pd || (pd = 1, oo.exports = Sm()), oo.exports;
}
var vd;
function Em() {
  if (vd) return Dt;
  vd = 1;
  var r = $o(), a = wm();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, C = {};
  function A(e) {
    return S.call(C, e) ? !0 : S.call(k, e) ? !1 : $.test(e) ? C[e] = !0 : (k[e] = !0, !1);
  }
  function O(e, t, n, i) {
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
  function D(e, t, n, i) {
    if (t === null || typeof t > "u" || O(e, t, n, i)) return !0;
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
  function M(e, t, n, i) {
    var l = E.hasOwnProperty(t) ? E[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, l, i) && (n = null), i || l === null ? A(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var K = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.provider"), _e = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), Se = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.offscreen"), Y = Symbol.iterator;
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
  function Ee(e, t) {
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
        } catch (R) {
          var i = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          i = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          i = R;
        }
        e();
      }
    } catch (R) {
      if (R && i && typeof R.stack == "string") {
        for (var l = R.stack.split(`
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
        return e = Ee(e.type, !1), e;
      case 11:
        return e = Ee(e.type.render, !1), e;
      case 1:
        return e = Ee(e.type, !0), e;
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
      case Se:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case _e:
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
  function ie(e) {
    var t = I(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function pe(e) {
    e._valueTracker || (e._valueTracker = ie(e));
  }
  function de(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = I(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
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
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Te(e, t) {
    t = t.checked, t != null && M(e, "checked", t, !1);
  }
  function Le(e, t) {
    Te(e, t);
    var n = B(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Be(e, t.type, n) : t.hasOwnProperty("defaultValue") && Be(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Ke(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, l = 0; l < e.length; l++) {
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
    e._wrapperState = { initialValue: B(n) };
  }
  function ze(e, t) {
    var n = B(t.value), i = B(t.defaultValue);
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
  var Me = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $e(e, t) {
    if (t) {
      if (Me[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
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
    if (e = Pr(e)) {
      if (typeof Yt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Ns(t), Yt(e.stateNode, e.type, t));
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
  function it() {
  }
  var Ye = !1;
  function pt(e, t, n) {
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
  if (m) try {
    var kn = {};
    Object.defineProperty(kn, "passive", { get: function() {
      vn = !0;
    } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    vn = !1;
  }
  function cr(e, t, n, i, l, o, f, v, y) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (G) {
      this.onError(G);
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
        var R = ui;
        Nn = !1, ui = null;
      } else throw Error(u(198));
      Mi || (Mi = !0, Cn = R);
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
  var Tn = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, L = a.unstable_shouldYield, fe = a.unstable_requestPaint, we = a.unstable_now, Jt = a.unstable_getCurrentPriorityLevel, lt = a.unstable_ImmediatePriority, ci = a.unstable_UserBlockingPriority, Vn = a.unstable_NormalPriority, di = a.unstable_LowPriority, zo = a.unstable_IdlePriority, as = null, yn = null;
  function $f(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : Ff, Lf = Math.log, Of = Math.LN2;
  function Ff(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Lf(e) / Of | 0) | 0;
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
  function bf(e, t) {
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
  function If(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var f = 31 - an(o), v = 1 << f, y = l[f];
      y === -1 ? ((v & n) === 0 || (v & i) !== 0) && (l[f] = bf(v, t)) : y <= t && (e.expiredLanes |= v), o &= ~v;
    }
  }
  function Ca(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Vo() {
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
  function Df(e, t) {
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
  function Bo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ko, Ma, Ho, Uo, Go, Pa = !1, cs = [], Bn = null, Kn = null, Hn = null, mr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Un = [], zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wo(e, t) {
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
        pr.delete(t.pointerId);
    }
  }
  function vr(e, t, n, i, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && Ma(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Vf(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = vr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = vr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = vr(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return mr.set(o, vr(mr.get(o) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, pr.set(o, vr(pr.get(o) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function Qo(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jt(n), t !== null) {
            e.blockedOn = t, Go(e.priority, function() {
              Ho(n);
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
  function Yo(e, t, n) {
    ds(e) && n.delete(t);
  }
  function Bf() {
    Pa = !1, Bn !== null && ds(Bn) && (Bn = null), Kn !== null && ds(Kn) && (Kn = null), Hn !== null && ds(Hn) && (Hn = null), mr.forEach(Yo), pr.forEach(Yo);
  }
  function kr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Pa || (Pa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Bf)));
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
    for (Bn !== null && kr(Bn, e), Kn !== null && kr(Kn, e), Hn !== null && kr(Hn, e), mr.forEach(t), pr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Qo(n), n.blockedOn === null && Un.shift();
  }
  var Pi = K.ReactCurrentBatchConfig, fs = !0;
  function Kf(e, t, n, i) {
    var l = Ue, o = Pi.transition;
    Pi.transition = null;
    try {
      Ue = 1, Aa(e, t, n, i);
    } finally {
      Ue = l, Pi.transition = o;
    }
  }
  function Hf(e, t, n, i) {
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
      if (l === null) Ya(e, t, i, hs, n), Wo(e, i);
      else if (Vf(l, e, t, n, i)) i.stopPropagation();
      else if (Wo(e, i), t & 4 && -1 < zf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Pr(l);
          if (o !== null && Ko(o), o = Ra(e, t, n, i), o === null && Ya(e, t, i, hs, n), o === l) break;
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
  function Jo(e) {
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
          case zo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, $a = null, ms = null;
  function Xo() {
    if (ms) return ms;
    var e, t = $a, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === l[o - i]; i++) ;
    return ms = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function ps(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vs() {
    return !0;
  }
  function Zo() {
    return !1;
  }
  function Bt(e) {
    function t(n, i, l, o, f) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(o) : o[v]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vs : Zo, this.isPropagationStopped = Zo, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, La = Bt(Ai), gr = Z({}, Ai, { view: 0, detail: 0 }), Uf = Bt(gr), Oa, Fa, xr, ks = Z({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ia, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Oa = e.screenX - xr.screenX, Fa = e.screenY - xr.screenY) : Fa = Oa = 0, xr = e), Oa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fa;
  } }), qo = Bt(ks), Gf = Z({}, ks, { dataTransfer: 0 }), Wf = Bt(Gf), Qf = Z({}, gr, { relatedTarget: 0 }), ba = Bt(Qf), Yf = Z({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Bt(Yf), Xf = Z({}, Ai, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zf = Bt(Xf), qf = Z({}, Ai, { data: 0 }), eu = Bt(qf), eh = {
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
  }, th = {
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
  }, nh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ih(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nh[e]) ? !!t[e] : !1;
  }
  function Ia() {
    return ih;
  }
  var rh = Z({}, gr, { key: function(e) {
    if (e.key) {
      var t = eh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ps(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? th[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ia, charCode: function(e) {
    return e.type === "keypress" ? ps(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ps(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), sh = Bt(rh), ah = Z({}, ks, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = Bt(ah), lh = Z({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ia }), oh = Bt(lh), uh = Z({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ch = Bt(uh), dh = Z({}, ks, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), fh = Bt(dh), hh = [9, 13, 27, 32], Da = m && "CompositionEvent" in window, jr = null;
  m && "documentMode" in document && (jr = document.documentMode);
  var mh = m && "TextEvent" in window && !jr, nu = m && (!Da || jr && 8 < jr && 11 >= jr), iu = " ", ru = !1;
  function su(e, t) {
    switch (e) {
      case "keyup":
        return hh.indexOf(t.keyCode) !== -1;
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
  function au(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ri = !1;
  function ph(e, t) {
    switch (e) {
      case "compositionend":
        return au(t);
      case "keypress":
        return t.which !== 32 ? null : (ru = !0, iu);
      case "textInput":
        return e = t.data, e === iu && ru ? null : e;
      default:
        return null;
    }
  }
  function vh(e, t) {
    if (Ri) return e === "compositionend" || !Da && su(e, t) ? (e = Xo(), ms = $a = Gn = null, Ri = !1, e) : null;
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
        return nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kh[e.type] : t === "textarea";
  }
  function ou(e, t, n, i) {
    pn(i), t = Ss(t, "onChange"), 0 < t.length && (n = new La("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Sr = null, wr = null;
  function yh(e) {
    Cu(e, 0);
  }
  function ys(e) {
    var t = bi(e);
    if (de(t)) return e;
  }
  function gh(e, t) {
    if (e === "change") return t;
  }
  var uu = !1;
  if (m) {
    var za;
    if (m) {
      var Va = "oninput" in document;
      if (!Va) {
        var cu = document.createElement("div");
        cu.setAttribute("oninput", "return;"), Va = typeof cu.oninput == "function";
      }
      za = Va;
    } else za = !1;
    uu = za && (!document.documentMode || 9 < document.documentMode);
  }
  function du() {
    Sr && (Sr.detachEvent("onpropertychange", fu), wr = Sr = null);
  }
  function fu(e) {
    if (e.propertyName === "value" && ys(wr)) {
      var t = [];
      ou(t, wr, e, qe(e)), pt(yh, t);
    }
  }
  function xh(e, t, n) {
    e === "focusin" ? (du(), Sr = t, wr = n, Sr.attachEvent("onpropertychange", fu)) : e === "focusout" && du();
  }
  function jh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ys(wr);
  }
  function Sh(e, t) {
    if (e === "click") return ys(t);
  }
  function wh(e, t) {
    if (e === "input" || e === "change") return ys(t);
  }
  function Eh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : Eh;
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
  function hu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = hu(e);
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
      n = hu(n);
    }
  }
  function pu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vu() {
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
  function Ba(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Nh(e) {
    var t = vu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && pu(n.ownerDocument.documentElement, n)) {
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
  var Ch = m && "documentMode" in document && 11 >= document.documentMode, $i = null, Ka = null, Nr = null, Ha = !1;
  function ku(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ha || $i == null || $i !== ge(i) || (i = $i, "selectionStart" in i && Ba(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Nr && Er(Nr, i) || (Nr = i, i = Ss(Ka, "onSelect"), 0 < i.length && (t = new La("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = $i)));
  }
  function gs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Li = { animationend: gs("Animation", "AnimationEnd"), animationiteration: gs("Animation", "AnimationIteration"), animationstart: gs("Animation", "AnimationStart"), transitionend: gs("Transition", "TransitionEnd") }, Ua = {}, yu = {};
  m && (yu = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
  function xs(e) {
    if (Ua[e]) return Ua[e];
    if (!Li[e]) return e;
    var t = Li[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in yu) return Ua[e] = t[n];
    return e;
  }
  var gu = xs("animationend"), xu = xs("animationiteration"), ju = xs("animationstart"), Su = xs("transitionend"), wu = /* @__PURE__ */ new Map(), Eu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    wu.set(e, t), h(t, [e]);
  }
  for (var Ga = 0; Ga < Eu.length; Ga++) {
    var Wa = Eu[Ga], _h = Wa.toLowerCase(), Th = Wa[0].toUpperCase() + Wa.slice(1);
    Wn(_h, "on" + Th);
  }
  Wn(gu, "onAnimationEnd"), Wn(xu, "onAnimationIteration"), Wn(ju, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Su, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
  function Nu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, Na(i, t, void 0, e), e.currentTarget = null;
  }
  function Cu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var o = void 0;
        if (t) for (var f = i.length - 1; 0 <= f; f--) {
          var v = i[f], y = v.instance, R = v.currentTarget;
          if (v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Nu(l, v, R), o = y;
        }
        else for (f = 0; f < i.length; f++) {
          if (v = i[f], y = v.instance, R = v.currentTarget, v = v.listener, y !== o && l.isPropagationStopped()) break e;
          Nu(l, v, R), o = y;
        }
      }
    }
    if (Mi) throw e = Cn, Mi = !1, Cn = null, e;
  }
  function et(e, t) {
    var n = t[tl];
    n === void 0 && (n = t[tl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (_u(t, e, 2, !1), n.add(i));
  }
  function Qa(e, t, n) {
    var i = 0;
    t && (i |= 4), _u(n, e, i, t);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[js]) {
      e[js] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Mh.has(n) || Qa(n, !1, e), Qa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || (t[js] = !0, Qa("selectionchange", !1, t));
    }
  }
  function _u(e, t, n, i) {
    switch (Jo(t)) {
      case 1:
        var l = Kf;
        break;
      case 4:
        l = Hf;
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
    pt(function() {
      var R = o, G = qe(n), Q = [];
      e: {
        var H = wu.get(e);
        if (H !== void 0) {
          var ae = La, he = e;
          switch (e) {
            case "keypress":
              if (ps(n) === 0) break e;
            case "keydown":
            case "keyup":
              ae = sh;
              break;
            case "focusin":
              he = "focus", ae = ba;
              break;
            case "focusout":
              he = "blur", ae = ba;
              break;
            case "beforeblur":
            case "afterblur":
              ae = ba;
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
              ae = qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = Wf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = oh;
              break;
            case gu:
            case xu:
            case ju:
              ae = Jf;
              break;
            case Su:
              ae = ch;
              break;
            case "scroll":
              ae = Uf;
              break;
            case "wheel":
              ae = fh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = Zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = tu;
          }
          var ve = (t & 4) !== 0, ut = !ve && e === "scroll", _ = ve ? H !== null ? H + "Capture" : null : H;
          ve = [];
          for (var x = R, P; x !== null; ) {
            P = x;
            var X = P.stateNode;
            if (P.tag === 5 && X !== null && (P = X, _ !== null && (X = Pt(x, _), X != null && ve.push(Tr(x, X, P)))), ut) break;
            x = x.return;
          }
          0 < ve.length && (H = new ae(H, he, null, n, G), Q.push({ event: H, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", H && n !== Qe && (he = n.relatedTarget || n.fromElement) && (fi(he) || he[Pn])) break e;
          if ((ae || H) && (H = G.window === G ? G : (H = G.ownerDocument) ? H.defaultView || H.parentWindow : window, ae ? (he = n.relatedTarget || n.toElement, ae = R, he = he ? fi(he) : null, he !== null && (ut = _n(he), he !== ut || he.tag !== 5 && he.tag !== 6) && (he = null)) : (ae = null, he = R), ae !== he)) {
            if (ve = qo, X = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ve = tu, X = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), ut = ae == null ? H : bi(ae), P = he == null ? H : bi(he), H = new ve(X, x + "leave", ae, n, G), H.target = ut, H.relatedTarget = P, X = null, fi(G) === R && (ve = new ve(_, x + "enter", he, n, G), ve.target = P, ve.relatedTarget = ut, X = ve), ut = X, ae && he) t: {
              for (ve = ae, _ = he, x = 0, P = ve; P; P = Oi(P)) x++;
              for (P = 0, X = _; X; X = Oi(X)) P++;
              for (; 0 < x - P; ) ve = Oi(ve), x--;
              for (; 0 < P - x; ) _ = Oi(_), P--;
              for (; x--; ) {
                if (ve === _ || _ !== null && ve === _.alternate) break t;
                ve = Oi(ve), _ = Oi(_);
              }
              ve = null;
            }
            else ve = null;
            ae !== null && Tu(Q, H, ae, ve, !1), he !== null && ut !== null && Tu(Q, ut, he, ve, !0);
          }
        }
        e: {
          if (H = R ? bi(R) : window, ae = H.nodeName && H.nodeName.toLowerCase(), ae === "select" || ae === "input" && H.type === "file") var ye = gh;
          else if (lu(H)) if (uu) ye = wh;
          else {
            ye = jh;
            var Ne = xh;
          }
          else (ae = H.nodeName) && ae.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ye = Sh);
          if (ye && (ye = ye(e, R))) {
            ou(Q, ye, n, G);
            break e;
          }
          Ne && Ne(e, H, R), e === "focusout" && (Ne = H._wrapperState) && Ne.controlled && H.type === "number" && Be(H, "number", H.value);
        }
        switch (Ne = R ? bi(R) : window, e) {
          case "focusin":
            (lu(Ne) || Ne.contentEditable === "true") && ($i = Ne, Ka = R, Nr = null);
            break;
          case "focusout":
            Nr = Ka = $i = null;
            break;
          case "mousedown":
            Ha = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ha = !1, ku(Q, n, G);
            break;
          case "selectionchange":
            if (Ch) break;
          case "keydown":
          case "keyup":
            ku(Q, n, G);
        }
        var Ce;
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
        else Ri ? su(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (nu && n.locale !== "ko" && (Ri || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Ri && (Ce = Xo()) : (Gn = G, $a = "value" in Gn ? Gn.value : Gn.textContent, Ri = !0)), Ne = Ss(R, Pe), 0 < Ne.length && (Pe = new eu(Pe, e, null, n, G), Q.push({ event: Pe, listeners: Ne }), Ce ? Pe.data = Ce : (Ce = au(n), Ce !== null && (Pe.data = Ce)))), (Ce = mh ? ph(e, n) : vh(e, n)) && (R = Ss(R, "onBeforeInput"), 0 < R.length && (G = new eu("onBeforeInput", "beforeinput", null, n, G), Q.push({ event: G, listeners: R }), G.data = Ce));
      }
      Cu(Q, t);
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
  function Tu(e, t, n, i, l) {
    for (var o = t._reactName, f = []; n !== null && n !== i; ) {
      var v = n, y = v.alternate, R = v.stateNode;
      if (y !== null && y === i) break;
      v.tag === 5 && R !== null && (v = R, l ? (y = Pt(n, o), y != null && f.unshift(Tr(n, y, v))) : l || (y = Pt(n, o), y != null && f.push(Tr(n, y, v)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Ph = /\r\n?/g, Ah = /\u0000|\uFFFD/g;
  function Mu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Ah, "");
  }
  function ws(e, t, n) {
    if (t = Mu(t), Mu(e) !== t && n) throw Error(u(425));
  }
  function Es() {
  }
  var Ja = null, Xa = null;
  function Za(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var qa = typeof setTimeout == "function" ? setTimeout : void 0, Rh = typeof clearTimeout == "function" ? clearTimeout : void 0, Pu = typeof Promise == "function" ? Promise : void 0, $h = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pu < "u" ? function(e) {
    return Pu.resolve(null).then(e).catch(Lh);
  } : qa;
  function Lh(e) {
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
  function Au(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, Mr = "__reactProps$" + Fi, Pn = "__reactContainer$" + Fi, tl = "__reactEvents$" + Fi, Oh = "__reactListeners$" + Fi, Fh = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Au(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = Au(e);
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
  var Jn = {}, Nt = Yn(Jn), Lt = Yn(!1), hi = Jn;
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
    tt(Lt), tt(Nt);
  }
  function Ru(e, t, n) {
    if (Nt.current !== Jn) throw Error(u(168));
    Ze(Nt, t), Ze(Lt, n);
  }
  function $u(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, j(e) || "Unknown", l));
    return Z({}, n, i);
  }
  function _s(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, hi = Nt.current, Ze(Nt, e), Ze(Lt, Lt.current), !0;
  }
  function Lu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    n ? (e = $u(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, tt(Lt), tt(Nt), Ze(Nt, e)) : tt(Lt), Ze(Lt, n);
  }
  var An = null, Ts = !1, il = !1;
  function Ou(e) {
    An === null ? An = [e] : An.push(e);
  }
  function bh(e) {
    Ts = !0, Ou(e);
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
  var zi = [], Vi = 0, Ms = null, Ps = 0, Xt = [], Zt = 0, mi = null, Rn = 1, $n = "";
  function pi(e, t) {
    zi[Vi++] = Ps, zi[Vi++] = Ms, Ms = e, Ps = t;
  }
  function Fu(e, t, n) {
    Xt[Zt++] = Rn, Xt[Zt++] = $n, Xt[Zt++] = mi, mi = e;
    var i = Rn;
    e = $n;
    var l = 32 - an(i) - 1;
    i &= ~(1 << l), n += 1;
    var o = 32 - an(t) + l;
    if (30 < o) {
      var f = l - l % 5;
      o = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, Rn = 1 << 32 - an(t) + l | n << l | i, $n = o + e;
    } else Rn = 1 << o | n << l | i, $n = e;
  }
  function rl(e) {
    e.return !== null && (pi(e, 1), Fu(e, 1, 0));
  }
  function sl(e) {
    for (; e === Ms; ) Ms = zi[--Vi], zi[Vi] = null, Ps = zi[--Vi], zi[Vi] = null;
    for (; e === mi; ) mi = Xt[--Zt], Xt[Zt] = null, $n = Xt[--Zt], Xt[Zt] = null, Rn = Xt[--Zt], Xt[Zt] = null;
  }
  var Kt = null, Ht = null, rt = !1, on = null;
  function bu(e, t) {
    var n = nn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Iu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: Rn, overflow: $n } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Ht = null, !0) : !1;
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
        if (!Iu(e, t)) {
          if (al(e)) throw Error(u(418));
          t = Qn(n.nextSibling);
          var i = Kt;
          t && Iu(e, t) ? bu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Kt = e);
        }
      } else {
        if (al(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Kt = e;
      }
    }
  }
  function Du(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function As(e) {
    if (e !== Kt) return !1;
    if (!rt) return Du(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Za(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (al(e)) throw zu(), Error(u(418));
      for (; t; ) bu(e, t), t = Qn(t.nextSibling);
    }
    if (Du(e), e.tag === 13) {
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
  function zu() {
    for (var e = Ht; e; ) e = Qn(e.nextSibling);
  }
  function Bi() {
    Ht = Kt = null, rt = !1;
  }
  function ol(e) {
    on === null ? on = [e] : on.push(e);
  }
  var Ih = K.ReactCurrentBatchConfig;
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
  function Vu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bu(e) {
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
    function i(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function l(_, x) {
      return _ = si(_, x), _.index = 0, _.sibling = null, _;
    }
    function o(_, x, P) {
      return _.index = P, e ? (P = _.alternate, P !== null ? (P = P.index, P < x ? (_.flags |= 2, x) : P) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function f(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function v(_, x, P, X) {
      return x === null || x.tag !== 6 ? (x = ql(P, _.mode, X), x.return = _, x) : (x = l(x, P), x.return = _, x);
    }
    function y(_, x, P, X) {
      var ye = P.type;
      return ye === T ? G(_, x, P.props.children, X, P.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ue && Vu(ye) === x.type) ? (X = l(x, P.props), X.ref = Ar(_, x, P), X.return = _, X) : (X = na(P.type, P.key, P.props, null, _.mode, X), X.ref = Ar(_, x, P), X.return = _, X);
    }
    function R(_, x, P, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== P.containerInfo || x.stateNode.implementation !== P.implementation ? (x = eo(P, _.mode, X), x.return = _, x) : (x = l(x, P.children || []), x.return = _, x);
    }
    function G(_, x, P, X, ye) {
      return x === null || x.tag !== 7 ? (x = wi(P, _.mode, X, ye), x.return = _, x) : (x = l(x, P), x.return = _, x);
    }
    function Q(_, x, P) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = ql("" + x, _.mode, P), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case J:
            return P = na(x.type, x.key, x.props, null, _.mode, P), P.ref = Ar(_, null, x), P.return = _, P;
          case q:
            return x = eo(x, _.mode, P), x.return = _, x;
          case ue:
            var X = x._init;
            return Q(_, X(x._payload), P);
        }
        if (We(x) || te(x)) return x = wi(x, _.mode, P, null), x.return = _, x;
        Rs(_, x);
      }
      return null;
    }
    function H(_, x, P, X) {
      var ye = x !== null ? x.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return ye !== null ? null : v(_, x, "" + P, X);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case J:
            return P.key === ye ? y(_, x, P, X) : null;
          case q:
            return P.key === ye ? R(_, x, P, X) : null;
          case ue:
            return ye = P._init, H(
              _,
              x,
              ye(P._payload),
              X
            );
        }
        if (We(P) || te(P)) return ye !== null ? null : G(_, x, P, X, null);
        Rs(_, P);
      }
      return null;
    }
    function ae(_, x, P, X, ye) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return _ = _.get(P) || null, v(x, _, "" + X, ye);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case J:
            return _ = _.get(X.key === null ? P : X.key) || null, y(x, _, X, ye);
          case q:
            return _ = _.get(X.key === null ? P : X.key) || null, R(x, _, X, ye);
          case ue:
            var Ne = X._init;
            return ae(_, x, P, Ne(X._payload), ye);
        }
        if (We(X) || te(X)) return _ = _.get(P) || null, G(x, _, X, ye, null);
        Rs(x, X);
      }
      return null;
    }
    function he(_, x, P, X) {
      for (var ye = null, Ne = null, Ce = x, Pe = x = 0, yt = null; Ce !== null && Pe < P.length; Pe++) {
        Ce.index > Pe ? (yt = Ce, Ce = null) : yt = Ce.sibling;
        var Ve = H(_, Ce, P[Pe], X);
        if (Ve === null) {
          Ce === null && (Ce = yt);
          break;
        }
        e && Ce && Ve.alternate === null && t(_, Ce), x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve, Ce = yt;
      }
      if (Pe === P.length) return n(_, Ce), rt && pi(_, Pe), ye;
      if (Ce === null) {
        for (; Pe < P.length; Pe++) Ce = Q(_, P[Pe], X), Ce !== null && (x = o(Ce, x, Pe), Ne === null ? ye = Ce : Ne.sibling = Ce, Ne = Ce);
        return rt && pi(_, Pe), ye;
      }
      for (Ce = i(_, Ce); Pe < P.length; Pe++) yt = ae(Ce, _, Pe, P[Pe], X), yt !== null && (e && yt.alternate !== null && Ce.delete(yt.key === null ? Pe : yt.key), x = o(yt, x, Pe), Ne === null ? ye = yt : Ne.sibling = yt, Ne = yt);
      return e && Ce.forEach(function(ai) {
        return t(_, ai);
      }), rt && pi(_, Pe), ye;
    }
    function ve(_, x, P, X) {
      var ye = te(P);
      if (typeof ye != "function") throw Error(u(150));
      if (P = ye.call(P), P == null) throw Error(u(151));
      for (var Ne = ye = null, Ce = x, Pe = x = 0, yt = null, Ve = P.next(); Ce !== null && !Ve.done; Pe++, Ve = P.next()) {
        Ce.index > Pe ? (yt = Ce, Ce = null) : yt = Ce.sibling;
        var ai = H(_, Ce, Ve.value, X);
        if (ai === null) {
          Ce === null && (Ce = yt);
          break;
        }
        e && Ce && ai.alternate === null && t(_, Ce), x = o(ai, x, Pe), Ne === null ? ye = ai : Ne.sibling = ai, Ne = ai, Ce = yt;
      }
      if (Ve.done) return n(
        _,
        Ce
      ), rt && pi(_, Pe), ye;
      if (Ce === null) {
        for (; !Ve.done; Pe++, Ve = P.next()) Ve = Q(_, Ve.value, X), Ve !== null && (x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve);
        return rt && pi(_, Pe), ye;
      }
      for (Ce = i(_, Ce); !Ve.done; Pe++, Ve = P.next()) Ve = ae(Ce, _, Pe, Ve.value, X), Ve !== null && (e && Ve.alternate !== null && Ce.delete(Ve.key === null ? Pe : Ve.key), x = o(Ve, x, Pe), Ne === null ? ye = Ve : Ne.sibling = Ve, Ne = Ve);
      return e && Ce.forEach(function(km) {
        return t(_, km);
      }), rt && pi(_, Pe), ye;
    }
    function ut(_, x, P, X) {
      if (typeof P == "object" && P !== null && P.type === T && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case J:
            e: {
              for (var ye = P.key, Ne = x; Ne !== null; ) {
                if (Ne.key === ye) {
                  if (ye = P.type, ye === T) {
                    if (Ne.tag === 7) {
                      n(_, Ne.sibling), x = l(Ne, P.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (Ne.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ue && Vu(ye) === Ne.type) {
                    n(_, Ne.sibling), x = l(Ne, P.props), x.ref = Ar(_, Ne, P), x.return = _, _ = x;
                    break e;
                  }
                  n(_, Ne);
                  break;
                } else t(_, Ne);
                Ne = Ne.sibling;
              }
              P.type === T ? (x = wi(P.props.children, _.mode, X, P.key), x.return = _, _ = x) : (X = na(P.type, P.key, P.props, null, _.mode, X), X.ref = Ar(_, x, P), X.return = _, _ = X);
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
              x = eo(P, _.mode, X), x.return = _, _ = x;
            }
            return f(_);
          case ue:
            return Ne = P._init, ut(_, x, Ne(P._payload), X);
        }
        if (We(P)) return he(_, x, P, X);
        if (te(P)) return ve(_, x, P, X);
        Rs(_, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, x !== null && x.tag === 6 ? (n(_, x.sibling), x = l(x, P), x.return = _, _ = x) : (n(_, x), x = ql(P, _.mode, X), x.return = _, _ = x), f(_)) : n(_, x);
    }
    return ut;
  }
  var Ki = Bu(!0), Ku = Bu(!1), $s = Yn(null), Ls = null, Hi = null, ul = null;
  function cl() {
    ul = Hi = Ls = null;
  }
  function dl(e) {
    var t = $s.current;
    tt($s), e._currentValue = t;
  }
  function fl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ui(e, t) {
    Ls = e, ul = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (ul !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Ls === null) throw Error(u(308));
      Hi = e, Ls.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var vi = null;
  function hl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function Hu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, hl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function ml(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uu(e, t) {
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
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Ln(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, hl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function Os(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ta(e, n);
    }
  }
  function Gu(e, t) {
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
      var y = v, R = y.next;
      y.next = null, f === null ? o = R : f.next = R, f = y;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, v = G.lastBaseUpdate, v !== f && (v === null ? G.firstBaseUpdate = R : v.next = R, G.lastBaseUpdate = y));
    }
    if (o !== null) {
      var Q = l.baseState;
      f = 0, G = R = y = null, v = o;
      do {
        var H = v.lane, ae = v.eventTime;
        if ((i & H) === H) {
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
        } else ae = { eventTime: ae, lane: H, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, G === null ? (R = G = ae, y = Q) : G = G.next = ae, f |= H;
        if (v = v.next, v === null) {
          if (v = l.shared.pending, v === null) break;
          H = v, v = H.next, H.next = null, l.lastBaseUpdate = H, l.shared.pending = null;
        }
      } while (!0);
      if (G === null && (y = Q), l.baseState = y, l.firstBaseUpdate = R, l.lastBaseUpdate = G, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      gi |= f, e.lanes = f, e.memoizedState = Q;
    }
  }
  function Wu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(u(191, l));
        l.call(i);
      }
    }
  }
  var Rr = {}, xn = Yn(Rr), $r = Yn(Rr), Lr = Yn(Rr);
  function ki(e) {
    if (e === Rr) throw Error(u(174));
    return e;
  }
  function pl(e, t) {
    switch (Ze(Lr, t), Ze($r, e), Ze(xn, Rr), e = t.nodeType, e) {
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
    tt(xn), tt($r), tt(Lr);
  }
  function Qu(e) {
    ki(Lr.current);
    var t = ki(xn.current), n = Gt(t, e.type);
    t !== n && (Ze($r, e), Ze(xn, n));
  }
  function vl(e) {
    $r.current === e && (tt(xn), tt($r));
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
  var Is = K.ReactCurrentDispatcher, gl = K.ReactCurrentBatchConfig, yi = 0, at = null, ht = null, vt = null, Ds = !1, Or = !1, Fr = 0, Dh = 0;
  function Ct() {
    throw Error(u(321));
  }
  function xl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function jl(e, t, n, i, l, o) {
    if (yi = o, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e === null || e.memoizedState === null ? Kh : Hh, e = n(i, l), Or) {
      o = 0;
      do {
        if (Or = !1, Fr = 0, 25 <= o) throw Error(u(301));
        o += 1, vt = ht = null, t.updateQueue = null, Is.current = Uh, e = n(i, l);
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
      var v = f = null, y = null, R = o;
      do {
        var G = R.lane;
        if ((yi & G) === G) y !== null && (y = y.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), i = R.hasEagerState ? R.eagerState : e(i, R.action);
        else {
          var Q = {
            lane: G,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          y === null ? (v = y = Q, f = i) : y = y.next = Q, at.lanes |= G, gi |= G;
        }
        R = R.next;
      } while (R !== null && R !== o);
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
  function Yu() {
  }
  function Ju(e, t) {
    var n = at, i = en(), l = t(), o = !ln(i.memoizedState, l);
    if (o && (i.memoizedState = l, Ft = !0), i = i.queue, Nl(qu.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || vt !== null && vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ir(9, Zu.bind(null, n, i, l, t), void 0, null), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || Xu(n, t, l);
    }
    return l;
  }
  function Xu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Zu(e, t, n, i) {
    t.value = n, t.getSnapshot = i, ec(t) && tc(e);
  }
  function qu(e, t, n) {
    return n(function() {
      ec(t) && tc(e);
    });
  }
  function ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function tc(e) {
    var t = Ln(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function nc(e) {
    var t = jn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: br, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bh.bind(null, at, e), [t.memoizedState, e];
  }
  function Ir(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function ic() {
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
  function rc(e, t) {
    return zs(8390656, 8, e, t);
  }
  function Nl(e, t) {
    return Vs(2048, 8, e, t);
  }
  function sc(e, t) {
    return Vs(4, 2, e, t);
  }
  function ac(e, t) {
    return Vs(4, 4, e, t);
  }
  function lc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function oc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vs(4, 4, lc.bind(null, t, e), n);
  }
  function Cl() {
  }
  function uc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && xl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function cc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && xl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function dc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (ln(n, t) || (n = Vo(), at.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function zh(e, t) {
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
  function fc() {
    return en().memoizedState;
  }
  function Vh(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, hc(e)) mc(t, n);
    else if (n = Hu(e, t, n, i), n !== null) {
      var l = Rt();
      fn(n, e, i, l), pc(n, t, i);
    }
  }
  function Bh(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (hc(e)) mc(t, l);
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
      n = Hu(e, t, l, i), n !== null && (l = Rt(), fn(n, e, i, l), pc(n, t, i));
    }
  }
  function hc(e) {
    var t = e.alternate;
    return e === at || t !== null && t === at;
  }
  function mc(e, t) {
    Or = Ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function pc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ta(e, n);
    }
  }
  var Bs = { readContext: qt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Kh = { readContext: qt, useCallback: function(e, t) {
    return jn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: rc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zs(
      4194308,
      4,
      lc.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Vh.bind(null, at, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = jn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: nc, useDebugValue: Cl, useDeferredValue: function(e) {
    return jn().memoizedState = e;
  }, useTransition: function() {
    var e = nc(!1), t = e[0];
    return e = zh.bind(null, e[1]), jn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = at, l = jn();
    if (rt) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || Xu(i, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, rc(qu.bind(
      null,
      i,
      o,
      e
    ), [e]), i.flags |= 2048, Ir(9, Zu.bind(null, i, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = jn(), t = kt.identifierPrefix;
    if (rt) {
      var n = $n, i = Rn;
      n = (i & ~(1 << 32 - an(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Dh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Hh = {
    readContext: qt,
    useCallback: uc,
    useContext: qt,
    useEffect: Nl,
    useImperativeHandle: oc,
    useInsertionEffect: sc,
    useLayoutEffect: ac,
    useMemo: cc,
    useReducer: wl,
    useRef: ic,
    useState: function() {
      return wl(br);
    },
    useDebugValue: Cl,
    useDeferredValue: function(e) {
      var t = en();
      return dc(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = wl(br)[0], t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ju,
    useId: fc,
    unstable_isNewReconciler: !1
  }, Uh = { readContext: qt, useCallback: uc, useContext: qt, useEffect: Nl, useImperativeHandle: oc, useInsertionEffect: sc, useLayoutEffect: ac, useMemo: cc, useReducer: El, useRef: ic, useState: function() {
    return El(br);
  }, useDebugValue: Cl, useDeferredValue: function(e) {
    var t = en();
    return ht === null ? t.memoizedState = e : dc(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = El(br)[0], t = en().memoizedState;
    return [e, t];
  }, useMutableSource: Yu, useSyncExternalStore: Ju, useId: fc, unstable_isNewReconciler: !1 };
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
  function vc(e, t, n, i, l, o, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, o, f) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, i) || !Er(l, o) : !0;
  }
  function kc(e, t, n) {
    var i = !1, l = Jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = qt(o) : (l = Ot(t) ? hi : Nt.current, i = t.contextTypes, o = (i = i != null) ? Di(e, l) : Jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ks, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function yc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ml(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = qt(o) : (o = Ot(t) ? hi : Nt.current, l.context = Di(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (_l(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ks.enqueueReplaceState(l, l.state, null), Fs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wi(e, t) {
    try {
      var n = "", i = t;
      do
        n += W(i), i = i.return;
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
  var Gh = typeof WeakMap == "function" ? WeakMap : Map;
  function gc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      Js || (Js = !0, Ul = i), Pl(e, t);
    }, n;
  }
  function xc(e, t, n) {
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
  function jc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Gh();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = am.bind(null, e, t, n), t.then(e, e));
  }
  function Sc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Wh = K.ReactCurrentOwner, Ft = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Ku(t, null, n, i) : Ki(t, e.child, n, i);
  }
  function Ec(e, t, n, i, l) {
    n = n.render;
    var o = t.ref;
    return Ui(t, l), i = jl(e, t, n, i, o, l), n = Sl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (rt && n && rl(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Nc(e, t, n, i, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Cc(e, t, o, i, l)) : (e = na(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Er, n(f, i) && e.ref === t.ref) return Fn(e, t, l);
    }
    return t.flags |= 1, e = si(o, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cc(e, t, n, i, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Er(o, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, Fn(e, t, l);
    }
    return Al(e, t, n, i, l);
  }
  function _c(e, t, n) {
    var i = t.pendingProps, l = i.children, o = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(Yi, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(Yi, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = o !== null ? o.baseLanes : n, Ze(Yi, Ut), Ut |= i;
    }
    else o !== null ? (i = o.baseLanes | n, t.memoizedState = null) : i = n, Ze(Yi, Ut), Ut |= i;
    return At(e, t, l, n), t.child;
  }
  function Tc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Al(e, t, n, i, l) {
    var o = Ot(n) ? hi : Nt.current;
    return o = Di(t, o), Ui(t, l), n = jl(e, t, n, i, o, l), i = Sl(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (rt && i && rl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Mc(e, t, n, i, l) {
    if (Ot(n)) {
      var o = !0;
      _s(t);
    } else o = !1;
    if (Ui(t, l), t.stateNode === null) Us(e, t), kc(t, n, i), Tl(t, n, i, l), i = !0;
    else if (e === null) {
      var f = t.stateNode, v = t.memoizedProps;
      f.props = v;
      var y = f.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = qt(R) : (R = Ot(n) ? hi : Nt.current, R = Di(t, R));
      var G = n.getDerivedStateFromProps, Q = typeof G == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      Q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== i || y !== R) && yc(t, f, i, R), Zn = !1;
      var H = t.memoizedState;
      f.state = H, Fs(t, i, f, l), y = t.memoizedState, v !== i || H !== y || Lt.current || Zn ? (typeof G == "function" && (_l(t, n, G, i), y = t.memoizedState), (v = Zn || vc(t, n, v, i, H, y, R)) ? (Q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), f.props = i, f.state = y, f.context = R, i = v) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Uu(e, t), v = t.memoizedProps, R = t.type === t.elementType ? v : un(t.type, v), f.props = R, Q = t.pendingProps, H = f.context, y = n.contextType, typeof y == "object" && y !== null ? y = qt(y) : (y = Ot(n) ? hi : Nt.current, y = Di(t, y));
      var ae = n.getDerivedStateFromProps;
      (G = typeof ae == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== Q || H !== y) && yc(t, f, i, y), Zn = !1, H = t.memoizedState, f.state = H, Fs(t, i, f, l);
      var he = t.memoizedState;
      v !== Q || H !== he || Lt.current || Zn ? (typeof ae == "function" && (_l(t, n, ae, i), he = t.memoizedState), (R = Zn || vc(t, n, R, i, H, he, y) || !1) ? (G || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, he, y), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, he, y)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = he), f.props = i, f.state = he, f.context = y, i = R) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Rl(e, t, n, i, o, l);
  }
  function Rl(e, t, n, i, l, o) {
    Tc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return l && Lu(t, n, !1), Fn(e, t, o);
    i = t.stateNode, Wh.current = t;
    var v = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = Ki(t, e.child, null, o), t.child = Ki(t, null, v, o)) : At(e, t, v, o), t.memoizedState = i.state, l && Lu(t, n, !0), t.child;
  }
  function Pc(e) {
    var t = e.stateNode;
    t.pendingContext ? Ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ru(e, t.context, !1), pl(e, t.containerInfo);
  }
  function Ac(e, t, n, i, l) {
    return Bi(), ol(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var $l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ll(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rc(e, t, n) {
    var i = t.pendingProps, l = st.current, o = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), v ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(st, l & 1), e === null)
      return ll(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, f = { mode: "hidden", children: f }, (i & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = f) : o = ia(f, i, 0, null), e = wi(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ll(n), t.memoizedState = $l, e) : Ol(t, f));
    if (l = e.memoizedState, l !== null && (v = l.dehydrated, v !== null)) return Qh(e, t, f, i, v, l, n);
    if (o) {
      o = i.fallback, f = t.mode, l = e.child, v = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (f & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = si(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), v !== null ? o = si(v, o) : (o = wi(o, f, n, null), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, f = e.child.memoizedState, f = f === null ? Ll(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, o.memoizedState = f, o.childLanes = e.childLanes & ~n, t.memoizedState = $l, i;
    }
    return o = e.child, e = o.sibling, i = si(o, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Ol(e, t) {
    return t = ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hs(e, t, n, i) {
    return i !== null && ol(i), Ki(t, e.child, null, n), e = Ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qh(e, t, n, i, l, o, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ml(Error(u(422))), Hs(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = i.fallback, l = t.mode, i = ia({ mode: "visible", children: i.children }, l, 0, null), o = wi(o, l, f, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, (t.mode & 1) !== 0 && Ki(t, e.child, null, f), t.child.memoizedState = Ll(f), t.memoizedState = $l, o);
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
        l = (l & (i.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ln(e, l), fn(i, e, l, -1));
      }
      return Xl(), i = Ml(Error(u(421))), Hs(e, t, f, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ht = Qn(l.nextSibling), Kt = t, rt = !0, on = null, e !== null && (Xt[Zt++] = Rn, Xt[Zt++] = $n, Xt[Zt++] = mi, Rn = e.id, $n = e.overflow, mi = t), t = Ol(t, i.children), t.flags |= 4096, t);
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
  function Lc(e, t, n) {
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
  function Yh(e, t, n) {
    switch (t.tag) {
      case 3:
        Pc(t), Bi();
        break;
      case 5:
        Qu(t);
        break;
      case 1:
        Ot(t.type) && _s(t);
        break;
      case 4:
        pl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ze($s, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ze(st, st.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Rc(e, t, n) : (Ze(st, st.current & 1), e = Fn(e, t, n), e !== null ? e.sibling : null);
        Ze(st, st.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Lc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ze(st, st.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, _c(e, t, n);
    }
    return Fn(e, t, n);
  }
  var Oc, bl, Fc, bc;
  Oc = function(e, t) {
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
  }, Fc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(xn.current);
      var o = null;
      switch (n) {
        case "input":
          l = xe(e, l), i = xe(e, i), o = [];
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
      $e(n, i);
      var f;
      n = null;
      for (R in l) if (!i.hasOwnProperty(R) && l.hasOwnProperty(R) && l[R] != null) if (R === "style") {
        var v = l[R];
        for (f in v) v.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (d.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in i) {
        var y = i[R];
        if (v = l?.[R], i.hasOwnProperty(R) && y !== v && (y != null || v != null)) if (R === "style") if (v) {
          for (f in v) !v.hasOwnProperty(f) || y && y.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in y) y.hasOwnProperty(f) && v[f] !== y[f] && (n || (n = {}), n[f] = y[f]);
        } else n || (o || (o = []), o.push(
          R,
          n
        )), n = y;
        else R === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, v = v ? v.__html : void 0, y != null && v !== y && (o = o || []).push(R, y)) : R === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(R, "" + y) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (d.hasOwnProperty(R) ? (y != null && R === "onScroll" && et("scroll", e), o || v === y || (o = [])) : (o = o || []).push(R, y));
      }
      n && (o = o || []).push("style", n);
      var R = o;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, bc = function(e, t, n, i) {
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
  function Jh(e, t, n) {
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
        return i = t.stateNode, Gi(), tt(Lt), tt(Nt), yl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (As(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Ql(on), on = null))), bl(e, t), _t(t), null;
      case 5:
        vl(t);
        var l = ki(Lr.current);
        if (n = t.type, e !== null && t.stateNode != null) Fc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
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
            $e(n, o), l = null;
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
                pe(i), Je(i, o, !0);
                break;
              case "textarea":
                pe(i), nt(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (i.onclick = Es);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[gn] = t, e[Mr] = i, Oc(e, t, !1, !1), t.stateNode = e;
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
                  Ae(e, i), l = xe(e, i), et("invalid", e);
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
              $e(n, l), v = l;
              for (o in v) if (v.hasOwnProperty(o)) {
                var y = v[o];
                o === "style" ? Qt(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Wt(e, y) : typeof y == "number" && Wt(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (d.hasOwnProperty(o) ? y != null && o === "onScroll" && et("scroll", e) : y != null && M(e, o, y, f));
              }
              switch (n) {
                case "input":
                  pe(e), Je(e, i, !1);
                  break;
                case "textarea":
                  pe(e), nt(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + B(i.value));
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
        if (e && t.stateNode != null) bc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (n = ki(Lr.current), ki(xn.current), As(t)) {
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
          if (rt && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) zu(), Bi(), t.flags |= 98560, o = !1;
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
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? mt === 0 && (mt = 3) : Xl())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
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
          if (mt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = bs(e), f !== null) {
              for (t.flags |= 128, Dr(o, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) o = n, e = i, o.flags &= 14680066, f = o.alternate, f === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = f.childLanes, o.lanes = f.lanes, o.child = f.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = f.memoizedProps, o.memoizedState = f.memoizedState, o.updateQueue = f.updateQueue, o.type = f.type, e = f.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(st, st.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && we() > Ji && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = bs(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !rt) return _t(t), null;
          } else 2 * we() - o.renderingStartTime > Ji && n !== 1073741824 && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (n = o.last, n !== null ? n.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = we(), t.sibling = null, n = st.current, Ze(st, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
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
  function Xh(e, t) {
    switch (sl(t), t.tag) {
      case 1:
        return Ot(t.type) && Cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gi(), tt(Lt), tt(Nt), yl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
  var Gs = !1, Tt = !1, Zh = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
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
  var Ic = !1;
  function qh(e, t) {
    if (Ja = fs, e = vu(), Ba(e)) {
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
          var f = 0, v = -1, y = -1, R = 0, G = 0, Q = e, H = null;
          t: for (; ; ) {
            for (var ae; Q !== n || l !== 0 && Q.nodeType !== 3 || (v = f + l), Q !== o || i !== 0 && Q.nodeType !== 3 || (y = f + i), Q.nodeType === 3 && (f += Q.nodeValue.length), (ae = Q.firstChild) !== null; )
              H = Q, Q = ae;
            for (; ; ) {
              if (Q === e) break t;
              if (H === n && ++R === l && (v = f), H === o && ++G === i && (y = f), (ae = Q.nextSibling) !== null) break;
              Q = H, H = Q.parentNode;
            }
            Q = ae;
          }
          n = v === -1 || y === -1 ? null : { start: v, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Xa = { focusedElem: e, selectionRange: n }, fs = !1, ce = t; ce !== null; ) if (t = ce, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ce = e;
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
      } catch (X) {
        ot(t, t.return, X);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ce = e;
        break;
      }
      ce = t.return;
    }
    return he = Ic, Ic = !1, he;
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
  function Dc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Mr], delete t[tl], delete t[Oh], delete t[Fh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function zc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zc(e.return)) return null;
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
    for (n = n.child; n !== null; ) Bc(e, t, n), n = n.sibling;
  }
  function Bc(e, t, n) {
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
  function Kc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Zh()), t.forEach(function(i) {
        var l = om.bind(null, e, i);
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
        Bc(o, f, l), St = null, cn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (R) {
        ot(l, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hc(t, e), t = t.sibling;
  }
  function Hc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), Sn(e), i & 4) {
          try {
            zr(3, e, e.return), Ws(3, e);
          } catch (ve) {
            ot(e, e.return, ve);
          }
          try {
            zr(5, e, e.return);
          } catch (ve) {
            ot(e, e.return, ve);
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
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, f = n !== null ? n.memoizedProps : o, v = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            v === "input" && o.type === "radio" && o.name != null && Te(l, o), Re(v, f);
            var R = Re(v, o);
            for (f = 0; f < y.length; f += 2) {
              var G = y[f], Q = y[f + 1];
              G === "style" ? Qt(l, Q) : G === "dangerouslySetInnerHTML" ? sn(l, Q) : G === "children" ? Wt(l, Q) : M(l, G, Q, R);
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
            l[Mr] = o;
          } catch (ve) {
            ot(e, e.return, ve);
          }
        }
        break;
      case 6:
        if (dn(t, e), Sn(e), i & 4) {
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
        if (dn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          yr(t.containerInfo);
        } catch (ve) {
          ot(e, e.return, ve);
        }
        break;
      case 4:
        dn(t, e), Sn(e);
        break;
      case 13:
        dn(t, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Hl = we())), i & 4 && Kc(e);
        break;
      case 22:
        if (G = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (R = Tt) || G, dn(t, e), Tt = R) : dn(t, e), Sn(e), i & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !G && (e.mode & 1) !== 0) for (ce = e, G = e.child; G !== null; ) {
            for (Q = ce = G; ce !== null; ) {
              switch (H = ce, ae = H.child, H.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, H, H.return);
                  break;
                case 1:
                  Qi(H, H.return);
                  var he = H.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    i = H, n = H.return;
                    try {
                      t = i, he.props = t.memoizedProps, he.state = t.memoizedState, he.componentWillUnmount();
                    } catch (ve) {
                      ot(i, n, ve);
                    }
                  }
                  break;
                case 5:
                  Qi(H, H.return);
                  break;
                case 22:
                  if (H.memoizedState !== null) {
                    Wc(Q);
                    continue;
                  }
              }
              ae !== null ? (ae.return = H, ce = ae) : Wc(Q);
            }
            G = G.sibling;
          }
          e: for (G = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (G === null) {
                G = Q;
                try {
                  l = Q.stateNode, R ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (v = Q.stateNode, y = Q.memoizedProps.style, f = y != null && y.hasOwnProperty("display") ? y.display : null, v.style.display = je("display", f));
                } catch (ve) {
                  ot(e, e.return, ve);
                }
              }
            } else if (Q.tag === 6) {
              if (G === null) try {
                Q.stateNode.nodeValue = R ? "" : Q.memoizedProps;
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
        dn(t, e), Sn(e), i & 4 && Kc(e);
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
            if (zc(n)) {
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
            var o = Vc(e);
            Vl(e, o, l);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, v = Vc(e);
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
  function em(e, t, n) {
    ce = e, Uc(e);
  }
  function Uc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; ce !== null; ) {
      var l = ce, o = l.child;
      if (l.tag === 22 && i) {
        var f = l.memoizedState !== null || Gs;
        if (!f) {
          var v = l.alternate, y = v !== null && v.memoizedState !== null || Tt;
          v = Gs;
          var R = Tt;
          if (Gs = f, (Tt = y) && !R) for (ce = l; ce !== null; ) f = ce, y = f.child, f.tag === 22 && f.memoizedState !== null ? Qc(l) : y !== null ? (y.return = f, ce = y) : Qc(l);
          for (; o !== null; ) ce = o, Uc(o), o = o.sibling;
          ce = l, Gs = v, Tt = R;
        }
        Gc(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, ce = o) : Gc(e);
    }
  }
  function Gc(e) {
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
              var i = t.stateNode;
              if (t.flags & 4 && !Tt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Wu(t, o, i);
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
                Wu(t, f, n);
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
                var R = t.alternate;
                if (R !== null) {
                  var G = R.memoizedState;
                  if (G !== null) {
                    var Q = G.dehydrated;
                    Q !== null && yr(Q);
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
  function Wc(e) {
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
  function Qc(e) {
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
  var tm = Math.ceil, Qs = K.ReactCurrentDispatcher, Bl = K.ReactCurrentOwner, tn = K.ReactCurrentBatchConfig, De = 0, kt = null, dt = null, wt = 0, Ut = 0, Yi = Yn(0), mt = 0, Vr = null, gi = 0, Ys = 0, Kl = 0, Br = null, bt = null, Hl = 0, Ji = 1 / 0, bn = null, Js = !1, Ul = null, ti = null, Xs = !1, ni = null, Zs = 0, Kr = 0, Gl = null, qs = -1, ea = 0;
  function Rt() {
    return (De & 6) !== 0 ? we() : qs !== -1 ? qs : qs = we();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (De & 2) !== 0 && wt !== 0 ? wt & -wt : Ih.transition !== null ? (ea === 0 && (ea = Vo()), ea) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jo(e.type)), e);
  }
  function fn(e, t, n, i) {
    if (50 < Kr) throw Kr = 0, Gl = null, Error(u(185));
    hr(e, n, i), ((De & 2) === 0 || e !== kt) && (e === kt && ((De & 2) === 0 && (Ys |= n), mt === 4 && ri(e, wt)), It(e, i), n === 1 && De === 0 && (t.mode & 1) === 0 && (Ji = we() + 500, Ts && Xn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    If(e, t);
    var i = us(e, e === kt ? wt : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? bh(Jc.bind(null, e)) : Ou(Jc.bind(null, e)), $h(function() {
        (De & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Bo(i)) {
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
            n = zo;
            break;
          default:
            n = Vn;
        }
        n = rd(n, Yc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Yc(e, t) {
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
      var o = Zc();
      (kt !== e || wt !== t) && (bn = null, Ji = we() + 500, ji(e, t));
      do
        try {
          rm();
          break;
        } catch (v) {
          Xc(e, v);
        }
      while (!0);
      cl(), Qs.current = o, De = l, dt !== null ? t = 0 : (kt = null, wt = 0, t = mt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ca(e), l !== 0 && (i = l, t = Wl(e, l))), t === 1) throw n = Vr, ji(e, 0), ri(e, i), It(e, we()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !nm(l) && (t = ta(e, i), t === 2 && (o = Ca(e), o !== 0 && (i = o, t = Wl(e, o))), t === 1)) throw n = Vr, ji(e, 0), ri(e, i), It(e, we()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Si(e, bt, bn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Hl + 500 - we(), 10 < t)) {
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
            if (i = l, i = we() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * tm(i / 1960)) - i, 10 < i) {
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
    return It(e, we()), e.callbackNode === n ? Yc.bind(null, e) : null;
  }
  function Wl(e, t) {
    var n = Br;
    return e.current.memoizedState.isDehydrated && (ji(e, t).flags |= 256), e = ta(e, t), e !== 2 && (t = bt, bt = n, t !== null && Ql(t)), e;
  }
  function Ql(e) {
    bt === null ? bt = e : bt.push.apply(bt, e);
  }
  function nm(e) {
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
  function Jc(e) {
    if ((De & 6) !== 0) throw Error(u(327));
    Xi();
    var t = us(e, 0);
    if ((t & 1) === 0) return It(e, we()), null;
    var n = ta(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ca(e);
      i !== 0 && (t = i, n = Wl(e, i));
    }
    if (n === 1) throw n = Vr, ji(e, 0), ri(e, t), It(e, we()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, bt, bn), It(e, we()), null;
  }
  function Yl(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      De = n, De === 0 && (Ji = we() + 500, Ts && Xn());
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
    if (n !== -1 && (e.timeoutHandle = -1, Rh(n)), dt !== null) for (n = dt.return; n !== null; ) {
      var i = n;
      switch (sl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Cs();
          break;
        case 3:
          Gi(), tt(Lt), tt(Nt), yl();
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
    if (kt = e, dt = e = si(e.current, null), wt = Ut = t, mt = 0, Vr = null, Kl = Ys = gi = 0, bt = Br = null, vi !== null) {
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
  function Xc(e, t) {
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
          mt = 1, Vr = t, dt = null;
          break;
        }
        e: {
          var o = e, f = n.return, v = n, y = t;
          if (t = wt, v.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var R = y, G = v, Q = G.tag;
            if ((G.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var H = G.alternate;
              H ? (G.updateQueue = H.updateQueue, G.memoizedState = H.memoizedState, G.lanes = H.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ae = Sc(f);
            if (ae !== null) {
              ae.flags &= -257, wc(ae, f, v, o, t), ae.mode & 1 && jc(o, R, t), t = ae, y = R;
              var he = t.updateQueue;
              if (he === null) {
                var ve = /* @__PURE__ */ new Set();
                ve.add(y), t.updateQueue = ve;
              } else he.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                jc(o, R, t), Xl();
                break e;
              }
              y = Error(u(426));
            }
          } else if (rt && v.mode & 1) {
            var ut = Sc(f);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), wc(ut, f, v, o, t), ol(Wi(y, v));
              break e;
            }
          }
          o = y = Wi(y, v), mt !== 4 && (mt = 2), Br === null ? Br = [o] : Br.push(o), o = f;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = gc(o, y, t);
                Gu(o, _);
                break e;
              case 1:
                v = y;
                var x = o.type, P = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (ti === null || !ti.has(P)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var X = xc(o, v, t);
                  Gu(o, X);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ed(n);
      } catch (ye) {
        t = ye, dt === n && n !== null && (dt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zc() {
    var e = Qs.current;
    return Qs.current = Bs, e === null ? Bs : e;
  }
  function Xl() {
    (mt === 0 || mt === 3 || mt === 2) && (mt = 4), kt === null || (gi & 268435455) === 0 && (Ys & 268435455) === 0 || ri(kt, wt);
  }
  function ta(e, t) {
    var n = De;
    De |= 2;
    var i = Zc();
    (kt !== e || wt !== t) && (bn = null, ji(e, t));
    do
      try {
        im();
        break;
      } catch (l) {
        Xc(e, l);
      }
    while (!0);
    if (cl(), De = n, Qs.current = i, dt !== null) throw Error(u(261));
    return kt = null, wt = 0, mt;
  }
  function im() {
    for (; dt !== null; ) qc(dt);
  }
  function rm() {
    for (; dt !== null && !L(); ) qc(dt);
  }
  function qc(e) {
    var t = id(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? ed(e) : dt = t, Bl.current = null;
  }
  function ed(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Jh(n, t, Ut), n !== null) {
          dt = n;
          return;
        }
      } else {
        if (n = Xh(n, t), n !== null) {
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
  function Si(e, t, n) {
    var i = Ue, l = tn.transition;
    try {
      tn.transition = null, Ue = 1, sm(e, t, n, i);
    } finally {
      tn.transition = l, Ue = i;
    }
    return null;
  }
  function sm(e, t, n, i) {
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
    if (Df(e, o), e === kt && (dt = kt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Xs || (Xs = !0, rd(Vn, function() {
      return Xi(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = tn.transition, tn.transition = null;
      var f = Ue;
      Ue = 1;
      var v = De;
      De |= 4, Bl.current = null, qh(e, n), Hc(n, e), Nh(Xa), fs = !!Ja, Xa = Ja = null, e.current = n, em(n), fe(), De = v, Ue = f, tn.transition = o;
    } else e.current = n;
    if (Xs && (Xs = !1, ni = e, Zs = l), o = e.pendingLanes, o === 0 && (ti = null), $f(n.stateNode), It(e, we()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Js) throw Js = !1, e = Ul, Ul = null, e;
    return (Zs & 1) !== 0 && e.tag !== 0 && Xi(), o = e.pendingLanes, (o & 1) !== 0 ? e === Gl ? Kr++ : (Kr = 0, Gl = e) : Kr = 0, Xn(), null;
  }
  function Xi() {
    if (ni !== null) {
      var e = Bo(Zs), t = tn.transition, n = Ue;
      try {
        if (tn.transition = null, Ue = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, Zs = 0, (De & 6) !== 0) throw Error(u(331));
          var l = De;
          for (De |= 4, ce = e.current; ce !== null; ) {
            var o = ce, f = o.child;
            if ((ce.flags & 16) !== 0) {
              var v = o.deletions;
              if (v !== null) {
                for (var y = 0; y < v.length; y++) {
                  var R = v[y];
                  for (ce = R; ce !== null; ) {
                    var G = ce;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zr(8, G, o);
                    }
                    var Q = G.child;
                    if (Q !== null) Q.return = G, ce = Q;
                    else for (; ce !== null; ) {
                      G = ce;
                      var H = G.sibling, ae = G.return;
                      if (Dc(G), G === R) {
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
                  zr(9, o, o.return);
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
              var X = v.sibling;
              if (X !== null) {
                X.return = v.return, ce = X;
                break e;
              }
              ce = v.return;
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
  function td(e, t, n) {
    t = Wi(n, t), t = gc(e, t, 1), e = qn(e, t, 1), t = Rt(), e !== null && (hr(e, 1, t), It(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) td(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        td(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Wi(n, e), e = xc(t, e, 1), t = qn(t, e, 1), e = Rt(), t !== null && (hr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function am(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, kt === e && (wt & n) === n && (mt === 4 || mt === 3 && (wt & 130023424) === wt && 500 > we() - Hl ? ji(e, 0) : Kl |= n), It(e, t);
  }
  function nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = os, os <<= 1, (os & 130023424) === 0 && (os = 4194304)));
    var n = Rt();
    e = Ln(e, t), e !== null && (hr(e, t, n), It(e, n));
  }
  function lm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), nd(e, n);
  }
  function om(e, t) {
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
    i !== null && i.delete(t), nd(e, n);
  }
  var id;
  id = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, Yh(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Fu(t, Ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Us(e, t), e = t.pendingProps;
        var l = Di(t, Nt.current);
        Ui(t, n), l = jl(null, t, i, e, l, n);
        var o = Sl();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (o = !0, _s(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ml(t), l.updater = Ks, t.stateNode = l, l._reactInternals = t, Tl(t, i, e, n), t = Rl(null, t, i, !0, o, n)) : (t.tag = 0, rt && o && rl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Us(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = cm(i), e = un(i, e), l) {
            case 0:
              t = Al(null, t, i, e, n);
              break e;
            case 1:
              t = Mc(null, t, i, e, n);
              break e;
            case 11:
              t = Ec(null, t, i, e, n);
              break e;
            case 14:
              t = Nc(null, t, i, un(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Mc(e, t, i, l, n);
      case 3:
        e: {
          if (Pc(t), e === null) throw Error(u(387));
          i = t.pendingProps, o = t.memoizedState, l = o.element, Uu(e, t), Fs(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, o.isDehydrated) if (o = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Wi(Error(u(423)), t), t = Ac(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Wi(Error(u(424)), t), t = Ac(e, t, i, n, l);
            break e;
          } else for (Ht = Qn(t.stateNode.containerInfo.firstChild), Kt = t, rt = !0, on = null, n = Ku(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Qu(t), e === null && ll(t), i = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, f = l.children, Za(i, l) ? f = null : o !== null && Za(i, o) && (t.flags |= 32), Tc(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && ll(t), null;
      case 13:
        return Rc(e, t, n);
      case 4:
        return pl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ki(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Ec(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, o = t.memoizedProps, f = l.value, Ze($s, i._currentValue), i._currentValue = f, o !== null) if (ln(o.value, f)) {
            if (o.children === l.children && !Lt.current) {
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
                    var R = o.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var G = R.pending;
                      G === null ? y.next = y : (y.next = G.next, G.next = y), R.pending = y;
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
        return i = t.type, l = un(i, t.pendingProps), l = un(i.type, l), Nc(e, t, i, l, n);
      case 15:
        return Cc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Us(e, t), t.tag = 1, Ot(i) ? (e = !0, _s(t)) : e = !1, Ui(t, n), kc(t, i, l), Tl(t, i, l, n), Rl(null, t, i, !0, e, n);
      case 19:
        return Lc(e, t, n);
      case 22:
        return _c(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function rd(e, t) {
    return Tn(e, t);
  }
  function um(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, i) {
    return new um(e, t, n, i);
  }
  function Zl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function cm(e) {
    if (typeof e == "function") return Zl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne) return 11;
      if (e === U) return 14;
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
      case T:
        return wi(n.children, l, o, t);
      case V:
        f = 8, l |= 8;
        break;
      case ee:
        return e = nn(12, n, t, l | 2), e.elementType = ee, e.lanes = o, e;
      case oe:
        return e = nn(13, n, t, l), e.elementType = oe, e.lanes = o, e;
      case Se:
        return e = nn(19, n, t, l), e.elementType = Se, e.lanes = o, e;
      case re:
        return ia(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case le:
            f = 10;
            break e;
          case _e:
            f = 9;
            break e;
          case ne:
            f = 11;
            break e;
          case U:
            f = 14;
            break e;
          case ue:
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
    return e = nn(22, e, i, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ql(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function eo(e, t, n) {
    return t = nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function dm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _a(0), this.expirationTimes = _a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _a(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function to(e, t, n, i, l, o, f, v, y) {
    return e = new dm(e, t, n, v, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ml(o), e;
  }
  function fm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function sd(e) {
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
  function ad(e, t, n, i, l, o, f, v, y) {
    return e = to(n, i, !0, e, l, o, f, v, y), e.context = sd(null), n = e.current, i = Rt(), l = ii(n), o = On(i, l), o.callback = t ?? null, qn(n, o, l), e.current.lanes = l, hr(e, l, i), It(e, i), e;
  }
  function ra(e, t, n, i) {
    var l = t.current, o = Rt(), f = ii(l);
    return n = sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(o, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, f), e !== null && (fn(e, l, f, o), Os(e, l, f)), f;
  }
  function sa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function ld(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function no(e, t) {
    ld(e, t), (e = e.alternate) && ld(e, t);
  }
  function hm() {
    return null;
  }
  var od = typeof reportError == "function" ? reportError : function(e) {
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
      var t = Uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Qo(e);
    }
  };
  function ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function la(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ud() {
  }
  function mm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var o = i;
        i = function() {
          var R = sa(f);
          o.call(R);
        };
      }
      var f = ad(t, i, e, 0, null, !1, !1, "", ud);
      return e._reactRootContainer = f, e[Pn] = f.current, _r(e.nodeType === 8 ? e.parentNode : e), xi(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var R = sa(y);
        v.call(R);
      };
    }
    var y = to(e, 0, !1, null, null, !1, !1, "", ud);
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
    } else f = mm(n, t, e, l, i);
    return sa(f);
  }
  Ko = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fr(t.pendingLanes);
          n !== 0 && (Ta(t, n | 1), It(t, we()), (De & 6) === 0 && (Ji = we() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Rt();
            fn(i, e, 1, l);
          }
        }), no(e, 1);
    }
  }, Ma = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Rt();
        fn(t, e, 134217728, n);
      }
      no(e, 134217728);
    }
  }, Ho = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = Rt();
        fn(n, e, t, i);
      }
      no(e, t);
    }
  }, Uo = function() {
    return Ue;
  }, Go = function(e, t) {
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
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Ns(i);
              if (!l) throw Error(u(90));
              de(i), Le(i, l);
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
  var pm = { usingClientEntryPoint: !1, Events: [Pr, bi, Ns, pn, zn, Yl] }, Hr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vm = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = rs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Hr.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ua.isDisabled && ua.supportsFiber) try {
      as = ua.inject(vm), yn = ua;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ro(t)) throw Error(u(200));
    return fm(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!ro(e)) throw Error(u(299));
    var n = !1, i = "", l = od;
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
    var i = n != null && n.hydratedSources || null, l = !1, o = "", f = od;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = ad(t, null, e, 1, n ?? null, l, !1, o, f), e[Pn] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
var kd;
function Nm() {
  if (kd) return lo.exports;
  kd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), lo.exports = Em(), lo.exports;
}
var yd;
function Cm() {
  if (yd) return ca;
  yd = 1;
  var r = Nm();
  return ca.createRoot = r.createRoot, ca.hydrateRoot = r.hydrateRoot, ca;
}
var _m = Cm();
const Tm = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], S = ["e", "B", "G", "D", "A", "E"], $ = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], A = {
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
  }, O = 26, D = 72, w = 30, E = 54, z = 34, N = 11, M = (O + D) / 2, K = w + (c.length - 1) * z + 30, J = (j) => D + j * E, q = (j) => j === 0 ? M : J(j) - E / 2, T = (j) => w + j * z;
  function V(j, B, I) {
    const ie = a.indexOf(r[j][0]) + Number(I.slice(-1)) - 1, pe = ie % a.length, de = u[pe] + 12 * Math.floor(ie / a.length), ge = j + B - de;
    return a[pe] + (ge < 0 ? "♭" : "♯").repeat(Math.abs(ge));
  }
  function ee(j) {
    return [...j.base, ...j.add].sort((B, I) => B[0] - I[0]);
  }
  function le(j, B, I) {
    const ie = B + (I ? 1 : 0), pe = m[ie % m.length], de = Math.min(...pe.map(([Le]) => Le)), ge = Math.max(...pe.map(([, Le]) => Le));
    let Te = (j - d % 12 + 12) % 12 - (I ? 8 : 5) + 12 * Math.floor(ie / m.length);
    return de + Te < 0 && (Te += 12), ge + Te > h.pentatonic && (Te -= 12), {
      strings: pe.map((Le) => Le.map((Je) => Je + Te)),
      start: de + Te,
      end: ge + Te
    };
  }
  function _e(j, B, I) {
    const ie = I[B], pe = (j + ie - d % 12 + 12) % 12, de = d + pe - ie, ge = c.map((xe, Ae) => {
      const Te = B + (c.length - 1 - Ae) * 3;
      return [Te, Te + 1, Te + 2].map((Le) => {
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
  function ne(j, B) {
    const I = [], ie = Math.ceil(-j.end / 12) * 12;
    for (let de = ie; j.start + de <= B; de += 12) {
      const ge = j.strings.map((Ae) => Ae.map((Te) => Te + de).filter((Te) => Te >= 0 && Te <= B)), xe = ge.flat();
      I.push({
        strings: ge,
        start: Math.min(...xe),
        end: Math.max(...xe),
        partial: j.start + de < 0 || j.end + de > B
      });
    }
    const pe = I.filter((de) => !de.partial);
    return pe.length ? pe : I;
  }
  function oe(j) {
    return ee(j).length === p;
  }
  function Se(j, B, I) {
    const ie = oe(B);
    j.querySelector('[value="3nps"]').disabled = !ie, j.value = ie ? I ?? "3nps" : "pentatonic";
  }
  function U(j, B, I, ie, pe) {
    const de = ee(B).map(([ge]) => ge);
    return ie.map((ge) => {
      const xe = ge - 1, Ae = I === "3nps" ? _e(j, xe, de) : le(j, xe, B.base === C), Te = pe === void 0 ? [Ae] : ne(Ae, pe);
      return { number: ge, positions: Te };
    });
  }
  function ue(j, B) {
    const I = j.getBoundingClientRect(), ie = j.querySelectorAll(B);
    let pe = 1 / 0;
    ie.forEach((de) => {
      const ge = de.getBoundingClientRect();
      let xe = 0;
      ge.left < I.left ? xe = ge.left - I.left - 8 : ge.right > I.right && (xe = ge.right - I.right + 8), Math.abs(xe) < Math.abs(pe) && (pe = xe);
    }), Number.isFinite(pe) && (j.scrollLeft += pe);
  }
  function re(j, B = !1) {
    const I = j === "3nps" ? p : m.length;
    return Array.from({ length: I }, (ie, pe) => {
      const de = pe + 1;
      return '<label class="box-toggle" data-box="' + de + '"><input type="checkbox" value="' + de + '"' + (B && pe === 0 ? " checked" : "") + "> Boksi " + de + "</label>";
    }).join("");
  }
  function Y(j, B) {
    const I = ee(B), ie = new Map(I.map(([de, ge]) => [de, V(j, de, ge)])), pe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return I.flatMap(([de, ge]) => pe.flatMap(({ suffix: xe, base: Ae }) => {
      const Te = Ae.map(([Le]) => ie.get((de + Le) % 12));
      return Te.every(Boolean) ? {
        root: (j + de) % 12,
        degree: Number(String(ge).replace(/\D/g, "")),
        name: Te[0] + xe,
        notes: Te,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function te(j, B) {
    const I = j.base.map(([de]) => (j.root + de) % 12), ie = c.map((de) => {
      const ge = [];
      for (let xe = 0; xe <= B; xe++) {
        const Ae = (de + xe) % 12;
        I.includes(Ae) && ge.push({ fret: xe, pitch: Ae });
      }
      return ge;
    }), pe = [];
    for (let de = 0; de <= ie.length - 3; de++)
      for (const ge of ie[de])
        for (const xe of ie[de + 1])
          if (ge.pitch !== xe.pitch)
            for (const Ae of ie[de + 2]) {
              if (Ae.pitch === ge.pitch || Ae.pitch === xe.pitch) continue;
              const Te = [ge.fret, xe.fret, Ae.fret], Le = Math.min(...Te), Je = Math.max(...Te);
              if (Je - Le > 3) continue;
              const Be = Array(c.length).fill(null);
              Be.splice(de, 3, ...Te), pe.push({ strings: Be, low: Le, high: Je });
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
  function b(j, B) {
    const I = Z[j + ":" + B];
    if (I) return { frets: I, barre: null };
    let ie = null;
    return g.forEach(({ string: pe, openPC: de, shapes: ge }) => {
      const xe = ge[B];
      if (!xe) return;
      let Ae = (j - de + 12) % 12;
      if (Ae + Math.min(...xe.filter((Je) => Je !== null)) < 0 && (Ae += 12), ie && ie.fret <= Ae) return;
      const Te = xe.map((Je) => Je === null ? null : Ae + Je), Le = Ae > 0 && xe.at(-1) === 0 ? { fret: Ae, from: pe, to: xe.length - 1 } : null;
      ie = { fret: Ae, frets: Te, barre: Le };
    }), ie && { frets: ie.frets, barre: ie.barre };
  }
  function ke(j, { frets: B, barre: I }, ie) {
    const Te = [...c].reverse(), Le = B.filter((ze) => ze > 0), Be = !Le.length || Math.max(...Le) <= 4 && (B.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), We = (ze) => 24 + ze * 14, Ke = (ze) => 30 + (ze - Be) * 18 + 18 / 2, gt = 102;
    let Xe = '<svg class="chord-svg" viewBox="0 0 108 ' + (gt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ie + "-ote paksusta kielestä ohueen: " + B.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Xe += '<line class="' + (ze === 0 && Be === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + ze * 18) + '" x2="' + We(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return B.forEach((ze, nt) => {
      Xe += '<line class="string" x1="' + We(nt) + '" y1="30" x2="' + We(nt) + '" y2="' + gt + '"/>';
    }), Be > 1 && (Xe += '<text class="fret-label" x="15" y="' + (Ke(Be) + 4) + '">' + Be + "</text>"), I && (Xe += '<rect class="barre" x="' + (We(I.from) - 6.5) + '" y="' + (Ke(I.fret) - 6.5) + '" width="' + ((I.to - I.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((ze, nt) => {
      if (ze === null) {
        Xe += '<text class="marker" x="' + We(nt) + '" y="22">×</text>';
        return;
      }
      const Mt = (Te[nt] + ze) % 12 === j;
      if (ze === 0) {
        Xe += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + We(nt) + '" cy="18" r="4.5"/>';
        return;
      }
      I && ze === I.fret && nt >= I.from && nt <= I.to && !Mt || (Xe += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + We(nt) + '" cy="' + Ke(ze) + '" r="6.5"/>');
    }), Xe + "</svg>";
  }
  function Ee(j, B) {
    const I = new URLSearchParams(location.search), ie = r.indexOf(I.get("toonikka")), pe = I.get("asteikko");
    return {
      rootPC: ie === -1 ? j : ie,
      scaleId: Object.hasOwn(A, pe) ? pe : B
    };
  }
  function W(j, B, I) {
    return j + "?" + new URLSearchParams({ toonikka: r[B], asteikko: I });
  }
  function se(j, B, I, {
    boxes: ie = [],
    onlyBoxNotes: pe = !1,
    automatic: de = !0,
    focusDegree: ge = "",
    grip: xe = null,
    barre: Ae = null,
    label: Te = r[j] + " " + B.name,
    notes: Le = null,
    targets: Je = !1,
    muteFret: Be = null
  } = {}) {
    const We = J(I), Ke = We + 48, gt = Ke + 28, Xe = w - 14, ze = T(c.length - 1) + 14, nt = ze - Xe, Mt = de ? 680 : Math.ceil(gt * 0.64), Gt = ie.flatMap((Me) => Me.positions), zt = {};
    B.base.forEach(([Me, $e]) => zt[(j + Me) % 12] = { deg: $e, added: !1 }), B.add.forEach(([Me, $e]) => zt[(j + Me) % 12] = { deg: $e, added: !0 });
    const sn = c.map((Me, $e) => !!xe && xe[$e] === null), Wt = !!xe && Be !== null, ct = $.filter((Me, $e) => sn[$e]).reverse(), Dn = Te + ". " + I + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let je = '<svg viewBox="0 0 ' + gt + " " + K + '" style="min-width:' + Mt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Je ? "group" : "img") + '" aria-label="' + Dn + '">';
    je += '<rect x="' + O + '" y="' + Xe + '" width="' + (D - O) + '" height="' + nt + '" rx="6" fill="#2a2338"/>', je += '<rect x="' + D + '" y="' + Xe + '" width="' + (We - D) + '" height="' + nt + '" fill="#231a12"/>', je += '<rect x="' + We + '" y="' + Xe + '" width="' + (gt - We - 4) + '" height="' + nt + '" rx="8" fill="#32251e"/>';
    for (let Me = 1; Me <= I; Me++)
      je += '<line x1="' + J(Me) + '" y1="' + Xe + '" x2="' + J(Me) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    je += '<rect x="' + (D - 3) + '" y="' + Xe + '" width="6" height="' + nt + '" rx="2" fill="#d8cbb6"/>', je += '<rect x="' + (Ke - 11) + '" y="' + (Xe + 3) + '" width="22" height="' + (nt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', je += '<rect x="' + (Ke - 4) + '" y="' + (Xe + 7) + '" width="3" height="' + (nt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Xe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Me) => Me <= I).forEach((Me) => je += '<circle cx="' + q(Me) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let Me = 12; Me <= I; Me += 12)
      je += '<circle cx="' + q(Me) + '" cy="' + (Qt - z) + '" r="5.5" fill="#7a6550"/>', je += '<circle cx="' + q(Me) + '" cy="' + (Qt + z) + '" r="5.5" fill="#7a6550"/>';
    je += '<text x="' + M + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', je += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', je += '<text x="' + Ke + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Me = 1; Me <= I; Me++)
      je += '<text x="' + q(Me) + '" y="' + (K - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Me + "</text>";
    if (ie.forEach(({ number: Me, positions: $e }) => {
      $e.forEach((Re) => {
        const Qe = Re.partial ? "box-highlight box-partial" : "box-highlight";
        je += '<g class="' + Qe + '" data-box="' + Me + '" aria-hidden="true">';
        const qe = Re.strings.find((xt) => xt.length), Yt = (q(qe[0]) + q(qe.at(-1))) / 2;
        je += '<text class="box-number" x="' + Yt + '" y="12">' + Me + "</text>", Re.strings.forEach((xt, Vt) => {
          if (!xt.length) return;
          const mn = q(xt[0]) - 16, pn = q(xt.at(-1)) - q(xt[0]) + 32;
          je += '<rect class="box-band" x="' + mn + '" y="' + (T(Vt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), je += "</g>";
      });
    }), c.forEach((Me, $e) => {
      const Re = 1 + $e * 0.45, Qe = T($e), qe = sn[$e] && !Wt;
      qe ? je += '<text class="muted-mark" x="' + M + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[$e] && Be === 0 || (je += '<line x1="' + (O + 4) + '" y1="' + Qe + '" x2="' + (D - 4) + '" y2="' + Qe + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), je += "<g" + (qe ? ' opacity=".35"' : "") + ">", je += '<line x1="' + D + '" y1="' + Qe + '" x2="' + (Ke + 5) + '" y2="' + Qe + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', je += '<circle cx="' + (Ke + 5) + '" cy="' + Qe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', je += "</g>", je += '<text x="13" y="' + (Qe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + S[$e] + "</text>";
    }), xe && Ae && Ae.fret >= 1 && Ae.fret <= I) {
      const Me = T(Ae.from), $e = T(Ae.to), Re = Math.min(Me, $e) - 6, Qe = Math.max(Me, $e) + 6;
      je += '<rect class="barre-indicator" x="' + (q(Ae.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Qe - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Je && (je += '<g class="fret-targets">', c.forEach((Me, $e) => {
      for (let Re = 0; Re <= I; Re++) {
        const Qe = Re ? $[$e] + "-kieli, " + Re + ". nauha" : "vapaa " + $[$e] + "-kieli", qe = Re ? E : D - O - 6;
        je += '<rect class="fret-target" role="button" tabindex="0" data-string="' + $e + '" data-fret="' + Re + '" data-midi="' + (Me + Re) + '" aria-label="' + Qe + '" x="' + (q(Re) - qe / 2) + '" y="' + (T($e) - z / 2) + '" width="' + qe + '" height="' + z + '" fill="transparent"/>';
      }
    }), je += "</g>"), (Le ?? []).forEach(({ string: Me, fret: $e, label: Re, kind: Qe }) => {
      je += '<g class="octave-note octave-' + Qe + '">', je += '<circle cx="' + q($e) + '" cy="' + T(Me) + '" r="' + N + '"/>', je += '<text x="' + q($e) + '" y="' + (T(Me) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", je += "</g>";
    }), xe && (je += '<g class="grip-notes">'), (Le ? [] : c).forEach((Me, $e) => {
      for (let Re = 0; Re <= I; Re++) {
        const Qe = (Me + Re) % 12;
        if (!(Qe in zt) || xe && xe[$e] !== Re || pe && !Gt.some(({ strings: pn }) => {
          const zn = pn[$e];
          return zn.length > 0 && Re >= zn[0] && Re <= zn.at(-1);
        })) continue;
        const qe = zt[Qe], Yt = qe.deg === "1", xt = qe.added ? "#f0a13c" : Yt ? "#4b2fd6" : "#6d4aff", Vt = qe.added ? "#1a1430" : "#fff";
        qe.deg === ge && (je += '<circle class="focus-note" cx="' + q(Re) + '" cy="' + T($e) + '" r="14.5"/>');
        const mn = xe ? ' data-string="' + ($e + 1) + '" data-fret="' + Re + '" data-degree="' + qe.deg + '"' : "";
        je += "<circle" + mn + ' cx="' + q(Re) + '" cy="' + T($e) + '" r="' + N + '" fill="' + xt + '" stroke="' + (Yt ? "#fff" : "#1a1430") + '" stroke-width="' + (Yt ? 2.5 : 1) + '"/>', je += '<text x="' + q(Re) + '" y="' + (T($e) + 3.5) + '" font-size="' + (qe.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Vt + '" text-anchor="middle">' + qe.deg + "</text>";
      }
    }), xe && (je += "</g>"), Wt && sn.forEach((Me, $e) => {
      if (!Me) return;
      const Re = q(Be), Qe = T($e);
      je += '<g class="muted-mark grip-mute" data-string="' + ($e + 1) + '" data-fret="' + Be + '">', je += '<circle cx="' + Re + '" cy="' + Qe + '" r="9" fill="' + (Be === 0 ? "#2a2338" : "#231a12") + '"/>', je += '<text x="' + Re + '" y="' + (Qe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', je += "</g>";
    }), je += "</svg>", je;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: A,
    noteName: V,
    scaleNotes: ee,
    scaleTriads: Y,
    triadGrips: te,
    chordGrip: b,
    renderChordDiagram: ke,
    selectionFromURL: Ee,
    selectionHref: W,
    renderBoard: se,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: oe,
    syncBoxSystem: Se,
    fingeringBoxes: U,
    boxOptions: re,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = Tm;
function gd(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function Mm(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function Pm(r) {
  const a = Mm(r), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const Ie = globalThis.MusicMapFretboard, He = (r) => (r % 12 + 12) % 12, Am = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Rm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (r, a = !1, u = !1) => (a ? Rm : Am)[He(r)] + (u ? Math.floor(r / 12) - 1 : ""), oi = (r) => Ie.CHROM[He(r)], Yr = (r, a, u) => Ie.noteName(He(r), a, u);
function $m(r, a) {
  const u = Math.floor(r / 12) - 1;
  return a[0] === "B" && He(r) < 2 ? u - 1 : a[0] === "C" && He(r) > 9 ? u + 1 : u;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], Lo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], qd = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Lm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, ft = (r, a) => ({ string: r, fret: a, midi: Ie.OPEN_PITCHES[r] + a });
function or(r, a, u) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (d, h) => ft(c, a + h)));
}
const Ge = (r) => `${r.string}:${r.fret}`, Ni = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, ef = (r, a) => a === "maj" ? `${oi(r)}-duurisointu` : a === "min" ? `${oi(r)}-mollisointu` : `${oi(r)}7-sointu`, Jr = [
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
], xd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function tf(r, a) {
  const u = xd[a] ?? xd.E, c = He(r - u.root);
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
}, wa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (r, a, u, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(u, r)) : c, wn = (r, a, u) => a.includes(r) ? r : u;
function ga(r) {
  const a = { ...ma };
  a.mode = wn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...ma.strings]), a.min = Math.round(li(r.min, 0, 24, a.min)), a.max = Math.round(li(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[u] == "boolean" && (a[u] = r[u]);
  return a.check = wn(r.check, ["class", "pitch"], a.check), a.input = wn(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(li(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ie.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(li(r.box, 0, 5, a.box)), a.order = wn(r.order, ["random", "up", "down"], a.order), a.chord = wn(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...ma.intervals]), a.direction = wn(r.direction, ["up", "down", "both"], a.direction), a.hints = wn(r.hints, ["off", "always", "fade"], a.hints), a.activity = wn(r.activity, ["play", "degree"], a.activity), a.minRms = li(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(r.clarity, 0.85, 0.99, a.clarity), a.stability = li(r.stability, 120, 800, a.stability), a.cents = li(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function Om(r, a) {
  const u = new URLSearchParams(r), c = { ...a };
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
function Fm(r) {
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
    kielet: r.strings.map((a) => a + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const _i = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, In = (r) => r.mode === "scale" && r.order !== "random", nf = (r) => ["note", "degree"].includes(_i(r)) ? "class" : In(r) ? "pitch" : r.check, da = (r) => _i(r) === "mic", jd = "musiikin-kartta:harjoittelu", rf = 3, yo = () => ({ version: rf, settings: { ...ma }, stats: {}, recent: [], sessions: [] }), sf = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, hn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function bm(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || hn(r.errors)) && (r.ema === void 0 || hn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || hn(r.emaMs));
}
function Im(r) {
  return !!r && typeof r.id == "string" && hn(r.count) && hn(r.first) && r.first <= r.count && hn(r.ms) && hn(r.at) && (r.solo === void 0 || hn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || hn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Sd(r) {
  if (!r) return yo();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !bm(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !hn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !Im(p)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = ga(a.settings ?? {}), d = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: rf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const wd = 2500, Dm = 8e3, Ed = 0.3, Xr = (r) => r.ema ?? r.correct / r.attempts, Zr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Oo(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (Zr(r) - wd) / (Dm - wd)));
  return Xr(r) * 0.65 + a * 0.35;
}
function zm(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Oo(r)) * 3;
}
class Nd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Sd(a?.getItem(jd) ?? null);
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
        this.storage.setItem(jd, JSON.stringify(this.data)), this.warning = "";
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
    const u = sf(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Xr(c) + Ed * (d - Xr(c)) : d,
      emaMs: c.attempts ? Zr(c) + Ed * (a.ms - Zr(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = Sd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...yo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Vm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Bm = ["e", "B", "G", "D", "A", "E"];
function af({ string: r }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ s.jsx("strong", { children: Bm[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const lf = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Km = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function of({ min: r, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - r + 1 }, (u, c) => {
      const d = r + c;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Vm.has(d) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ar({ area: r, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta" }) {
  const p = { "--cols": r.max - r.min + 1 }, { strings: m, min: S, max: $ } = r, [k, C] = F.useState({ string: Math.min(...m), fret: S }), A = F.useRef(null), O = new Map(a.map((N) => [Ge(N), N])), D = a.map((N) => `${Ge(N)}${N.kind}`).join(",");
  F.useEffect(() => {
    const N = A.current, M = N?.querySelector(".target, .anchor");
    N && M && (N.scrollLeft += M.getBoundingClientRect().left - N.getBoundingClientRect().left - N.clientWidth / 2 + M.clientWidth / 2);
  }, [D]);
  const [w, E] = F.useState({ left: !1, right: !1 });
  F.useEffect(() => {
    const N = A.current;
    if (!N) return;
    const M = () => {
      const J = N.scrollLeft > 2, q = N.scrollLeft + N.clientWidth < N.scrollWidth - 2;
      E((T) => T.left === J && T.right === q ? T : { left: J, right: q });
    };
    M(), N.addEventListener("scroll", M, { passive: !0 });
    const K = typeof ResizeObserver > "u" ? null : new ResizeObserver(M);
    return K?.observe(N), () => {
      N.removeEventListener("scroll", M), K?.disconnect();
    };
  }, [D, S, $]);
  const z = m.includes(k.string) && k.fret >= S && k.fret <= $ ? k : { string: Math.min(...m), fret: S };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: A, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(of, { min: S, max: $ }),
      /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map((N, M) => /* @__PURE__ */ s.jsxs("tr", { className: m.includes(M) ? "" : "unused", style: lf(M), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${M + 1}. kieli: ${rn[M]}${u.includes(M) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(af, { string: M }),
          u.includes(M) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([M], S, $).map((K) => {
          const J = O.get(Ge(K)), q = `${rn[M]}-kieli, ${Ci(K.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${K.fret === 0 ? "open-fret " : ""}${J ? J.kind === "answer" ? "target" : J.kind : ""}`, children: /* @__PURE__ */ s.jsx(
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
                const V = [...m].sort((ne, oe) => ne - oe), ee = V.indexOf(M), le = T.key === "ArrowUp" ? V[Math.max(0, ee - 1)] : T.key === "ArrowDown" ? V[Math.min(V.length - 1, ee + 1)] : M, _e = T.key === "Home" ? S : T.key === "End" ? $ : Math.max(S, Math.min($, K.fret + (T.key === "ArrowRight" ? 1 : T.key === "ArrowLeft" ? -1 : 0)));
                T.currentTarget.closest("table")?.querySelector(`button[data-string="${le}"][data-fret="${_e}"]`)?.focus();
              },
              disabled: c || !m.includes(M),
              "aria-label": q + (J ? `, ${Km[J.kind]}${J.label ? " " + J.label : ""}` : ""),
              onClick: () => d?.(K),
              children: J ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: J.label || "●" }) : null
            }
          ) }, K.fret);
        })
      ] }, M)) })
    ] }) })
  ] });
}
function Hm({ area: r, stats: a, input: u, check: c, flats: d }) {
  const { strings: h, min: p, max: m } = r, S = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(of, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map(($, k) => /* @__PURE__ */ s.jsxs("tr", { className: h.includes(k) ? "" : "unused", style: lf(k), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${rn[k]}`, children: /* @__PURE__ */ s.jsx(af, { string: k }) }),
      or([k], p, m).map((C) => {
        const A = Object.hasOwn(a, S + Ge(C)) ? a[S + Ge(C)] : void 0, O = Oo(A), D = O === null ? "unseen" : A.attempts < 3 ? "few" : O >= 0.8 ? "strong" : O >= 0.5 ? "growing" : "weak", w = `${rn[k]}-kieli, ${Ci(C.fret)}, ${Fe(C.midi, d)}`, E = A ? `${Math.round(O * 100)} %, ${A.correct}/${A.attempts} heti oikein, viime aikoina ${Math.round(Xr(A) * 100)} % ja ${(Zr(A) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${D}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: O === null ? "·" : A.attempts < 3 ? "?" : Math.round(O * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, C.fret);
      })
    ] }, k)) })
  ] }) });
}
const Um = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Ea = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ni[r.mode === "caged" ? "maj" : r.chord].tones, uf = (r) => Ie.fingeringBoxes(r.root, Ie.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Ti(r) {
  if (r.mode === "caged") {
    const a = tf(r.root, r.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = uf(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Gm(r) {
  const a = Ti(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function es(r) {
  const a = Ti(r), u = or(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return u.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(He(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(tf(r.root, r.shape).map(Ge));
    return u.filter((p) => h.has(Ge(p)));
  }
  if (r.mode === "interval") return u;
  const c = u.filter((h) => Ea(r).some(([p]) => He(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = uf(r);
  return c.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function cf(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (c === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Wm(r) {
  const a = Ea(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(r.chordTone));
}
function go(r) {
  const a = es(r), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = Wm(r).filter(([d]) => !a.some((h) => He(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${u}` : r.mode === "interval" && !cf(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(r) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function Qm(r, a) {
  const u = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? u.reverse() : u;
}
function df(r) {
  return In(r) ? new Set(es(r).map((a) => a.midi)).size : r.rounds;
}
function Ym(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function Zi(r, a, u = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let p = 0; p < r.length; p++)
    if (h -= a[p], h < 0) return r[p];
  return r.at(-1);
}
const Cd = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ei(r, a) {
  const u = r.filter((c) => !a(c));
  return u.length ? u : r;
}
function Jm(r, a, u = {}, c, d = Math.random) {
  const h = go(r);
  if (h) throw new Error(h);
  const p = nf(r), m = _i(r), S = p === "pitch", $ = (T) => r.weak ? zm(u[sf({ input: m, check: p, hint: !1, item: T })]) : 1, k = (T) => Zi(T, T.map(() => 1), d), C = es(r), A = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const T = Ei(C, (le) => !!c && Ge(le) === Ge(c.position)), V = Zi(T, T.map((le) => $(`notes:${Ge(le)}`)), d), ee = Fe(V.midi, r.flats, S);
    return {
      ...A,
      position: V,
      midi: V.midi,
      name: ee,
      item: `notes:${Ge(V)}`,
      prompt: `Etsi ${ee} ${Lo[V.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const T = (_e) => `ear-note:${He(_e.midi)}${r.reference ? ":ref" : ""}`, V = Ei(C, (_e) => !!c && He(_e.midi) === He(c.midi)), ee = Zi(V, V.map((_e) => $(T(_e))), d), le = r.reference ? 57 + 12 * Math.round((ee.midi - 57) / 12) : void 0;
    return {
      ...A,
      position: ee,
      midi: ee.midi,
      name: Fe(ee.midi, r.flats),
      item: T(ee),
      choices: "note",
      reference: le,
      sound: le === void 0 ? [ee.midi] : [le, ee.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const T = Ei(C, (ee) => !!c && ee.midi === c.midi), V = Zi(T, T.map((ee) => $(`repeat:${ee.midi}`)), d);
    return {
      ...A,
      position: V,
      midi: V.midi,
      name: Fe(V.midi, r.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const T = Ei(cf(r, C), (le) => c?.interval === le.iv && c?.direction === le.direction), V = Zi(T, T.map((le) => $(`interval:${le.iv}:${le.direction}`)), d), ee = k(Ei(V.pairs, (le) => c?.reference === le.reference.midi));
    return {
      ...A,
      position: ee.target,
      midi: ee.target.midi,
      name: Fe(ee.target.midi, r.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: ee.reference.midi,
      sound: [ee.reference.midi, ee.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(ee.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const O = Ea(r);
  let D, w = 0;
  if (In(r)) {
    const T = Qm(r, C);
    w = T.length, D = T[a % T.length];
  } else {
    const T = O.filter(([le]) => C.some((_e) => He(_e.midi - r.root) === le)), V = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [O[a % O.length]] : O.filter(([, le]) => le.endsWith(r.chordTone)) : Ei(T, ([le]) => c?.interval === le), [ee] = Zi(V, V.map(([le]) => $(Cd(r, le))), d);
    D = k(Ei(C.filter((le) => He(le.midi - r.root) === ee), (le) => !!c && Ge(le) === Ge(c.position)));
  }
  const E = He(D.midi - r.root), z = O.find(([T]) => T === E)[1], N = Yr(r.root, E, z), M = S ? N + $m(D.midi, N) : N, K = r.mode === "scale" ? `${oi(r.root)}-${Ie.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${oi(r.root)}-duurisointu, ${r.shape}-muoto` : ef(r.root, r.chord), J = r.mode !== "caged" && r.activity === "degree", q = J ? `${K}: mikä aste on ${N}?` : w ? `${K} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${z}. aste (${M}).` : `${K}: etsi ${z}. aste${S ? ` (${M})` : ""}.`;
  return {
    ...A,
    position: D,
    midi: D.midi,
    name: M,
    item: Cd(r, E),
    prompt: q,
    degree: z,
    interval: E,
    choices: J ? "degree" : "position"
  };
}
function xo(r, a, u) {
  return Number.isInteger(a) && (u === "class" ? He(r) === He(a) : r === a);
}
function ff(r, a, u) {
  return xo(a.midi, u.midi, a.check) ? r.mode === "notes" ? u.string === a.position.string : Um(r) ? es(r).some((c) => Ge(c) === Ge(u)) : !0 : !1;
}
function Xm(r, a) {
  const u = Ti(r);
  return or(u.strings, u.min, u.max).filter((c) => ff(r, a, c));
}
const Et = (r, a, u) => ({ ...r, label: a, kind: u }), Zm = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function qm(r, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, d = Ti(r), h = or(d.strings, d.min, d.max), p = Xm(r, a);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((z) => Et(z, a.name, "answer")), text: `${a.name} on ${qd[a.position.string]}: ${Ci(a.position.fret)}.` };
    const w = h.find((z) => z.string === a.position.string), E = Fe(w.midi, r.flats);
    return {
      marks: [Et(w, E, "anchor")],
      text: `Apupiste: ${Lm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Et(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Et(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((w) => Et(w, Fe(w.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Lo[a.position.string]}.` };
  if (r.mode === "interval") {
    const w = Fe(a.reference, r.flats, !0), E = h.filter((z) => z.midi === a.reference).map((z) => Et(z, w, "anchor"));
    return c ? {
      marks: [...E, ...p.map((z) => Et(z, Fe(z.midi, r.flats, !0), "answer"))],
      text: `${Zm(Jr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = es(r), S = Ea(r), $ = (w) => S.find(([E]) => E === He(w.midi - r.root))?.[1] ?? "", k = Yr(r.root, a.interval, a.degree), C = m.filter((w) => He(w.midi - r.root) === 0), A = (w) => p.some((E) => Ge(E) === Ge(w)), O = `${a.degree}. aste on ${k}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((w) => Et(w, $(w), A(w) ? "answer" : "shape")), text: O } : { marks: m.map((w) => Et(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const D = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((E) => He(E.midi) === He(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : C).map((E) => Et(E, "1", "anchor")), ...w.map((E) => Et(E, a.degree, "answer"))], text: `${k} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((E) => Et(E, k, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((E) => Et(E, "1", "anchor")), ...w.map((E) => Et(E, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !A(w)).map((w) => Et(w, "1", "anchor")), ...p.map((w) => Et(w, a.degree, "answer"))], text: O } : a.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${oi(r.root)}.` } : { marks: C.map((w) => Et(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class ep {
  constructor(a, u, c, d = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = d, this.random = h, this.total = df(a);
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
      this.question = Jm(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Ym(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(u === "degree" ? a === h.interval : u === "note" ? xo(h.midi, a, "class") : u === "board" ? !!c && ff(this.settings, h, c) : xo(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = u === "board" ? c : void 0, S = {
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
    return m ? S.position = Ge(m) : this.settings.mode === "notes" && (S.position = Ge(h.position)), this.results.push(S), this.record(S), this.phase = "feedback", "correct";
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
  const a = r.filter((u) => !u.hint);
  return {
    count: r.length,
    first: r.filter((u) => u.first).length,
    solo: a.length,
    soloFirst: a.filter((u) => u.first).length,
    guided: r.length - a.length,
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
], tr = (r) => So.find(([a]) => a === r)?.[1] ?? r;
function $t({ label: r, children: a }) {
  const u = F.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: u, children: r }),
    F.cloneElement(a, { id: u })
  ] });
}
function _d({ legend: r, name: a, value: u, options: c, onChange: d, disabled: h }) {
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ s.jsx("legend", { children: r }),
    /* @__PURE__ */ s.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ s.jsxs("label", { className: p.value === u ? "selected" : "", children: [
      /* @__PURE__ */ s.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === u, onChange: () => d(p.value) }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("strong", { children: p.title }),
        /* @__PURE__ */ s.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Td(r) {
  const a = Ti(r), u = df(r), c = _i(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${wa[r.hints].title} · ${d} · ${In(r) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Md({ s: r, change: a, locked: u, problem: c }) {
  const d = F.useId(), h = (k, C) => a({ ...r, [k]: C }), p = Ti(r), m = _i(r) === "note" || _i(r) === "degree", S = ["scale", "chord", "caged"].includes(r.mode), $ = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx($t, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: r.mode, onChange: (k) => h("mode", k.target.value), children: So.map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C }, k)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: So.find(([k]) => k === r.mode)[2] })
    ] }),
    S && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx($t, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: r.root, onChange: (k) => h("root", Number(k.target.value)), children: Ie.CHROM.map((k, C) => /* @__PURE__ */ s.jsx("option", { value: C, children: k }, k)) }) }),
      r.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx($t, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: r.scale, onChange: (k) => h("scale", k.target.value), children: Object.entries(Ie.SCALES).map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ s.jsxs("select", { value: r.box, onChange: (k) => h("box", Number(k.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ s.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Sävelten järjestys", children: /* @__PURE__ */ s.jsxs("select", { value: r.order, onChange: (k) => h("order", k.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ s.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ s.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx($t, { label: "Sointutyyppi", children: /* @__PURE__ */ s.jsx("select", { value: r.chord, onChange: (k) => h("chord", k.target.value), children: Object.entries(Ni).map(([k, C]) => /* @__PURE__ */ s.jsx("option", { value: k, children: C.name }, k)) }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ s.jsxs("select", { value: r.chordTone, onChange: (k) => h("chordTone", k.target.value), children: [
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
      r.mode === "caged" ? /* @__PURE__ */ s.jsx($t, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ s.jsx("select", { value: r.shape, onChange: (k) => h("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ s.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ s.jsx($t, { label: "Tehtävä", children: /* @__PURE__ */ s.jsxs("select", { value: r.activity, onChange: (k) => h("activity", k.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ s.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ s.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.intervals.includes(k), onChange: (C) => h("intervals", C.target.checked ? [...r.intervals, k] : r.intervals.filter((A) => A !== k)) }),
        Jr[k]
      ] }, k)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx($t, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: r.direction, onChange: (k) => h("direction", k.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      _d,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (k) => h("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...wa[k] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(_d, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (k) => h("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ s.jsx($t, { label: "Kierroksen pituus", children: /* @__PURE__ */ s.jsxs("select", { value: r.rounds, disabled: In(r), onChange: (k) => h("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ s.jsx($t, { label: "Vastausten tarkistus", children: /* @__PURE__ */ s.jsxs("select", { value: In(r) ? "pitch" : r.check, disabled: In(r), onChange: (k) => h("check", k.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ s.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ s.jsx($t, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ s.jsxs("select", { value: String(r.flats), onChange: (k) => h("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ s.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ s.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(r) && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ s.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ s.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === k, onClick: () => a({ ...r, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsx($t, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (k) => h("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ s.jsx($t, { label: "Viimeinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (k) => h("max", Number(k.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: rn.map((k, C) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.strings.includes(C), onChange: (A) => h("strings", A.target.checked ? [...r.strings, C] : r.strings.filter((O) => O !== C)) }),
          C + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        $ && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (k) => h("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.reference, onChange: (k) => h("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.weak, onChange: (k) => h("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.advance, onChange: (k) => h("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const tp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Opi asteikko yksi positio kerrallaan ja käytä sitä sooloilussa.", example: "Aloita: A-mollipentatoninen, positio 1" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function np({ onSelect: r }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: tp.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
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
const ip = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", rp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3", sp = 0.12;
function Pd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function hf() {
  const r = F.useRef(null), a = F.useRef(null), [u, c] = F.useState(!1), [d, h] = F.useState(!1), [p, m] = F.useState(!1), [S, $] = F.useState(0), [k, C] = F.useState(0), [A, O] = F.useState("");
  function D(M = !1) {
    const K = r.current, J = a.current;
    if (!K || !J || !Number.isFinite(K.currentTime) || J.readyState < 1) return;
    const q = Math.abs(J.currentTime - K.currentTime), T = K.loop && Number.isFinite(K.duration) && Math.abs(q - K.duration) < 0.3;
    if (M || !T && q > sp)
      try {
        J.currentTime = K.currentTime;
      } catch {
      }
  }
  function w() {
    r.current?.pause(), a.current?.pause(), c(!1);
  }
  async function E() {
    const M = r.current, K = a.current;
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
    const K = r.current, J = a.current;
    if (!(!K || !J || !Number.isFinite(M))) {
      K.currentTime = M;
      try {
        J.currentTime = M;
      } catch {
      }
      $(M);
    }
  }
  function N(M) {
    M && D(), a.current && (a.current.muted = !M), h(M);
  }
  return F.useEffect(() => {
    const M = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", M), () => {
      document.removeEventListener("visibilitychange", M), r.current?.pause(), a.current?.pause();
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
              onChange: (M) => N(M.target.checked)
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
        E();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(S, k > 0 ? k : 1),
          disabled: !k,
          onChange: (M) => z(Number(M.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Pd(S),
        " / ",
        Pd(k)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: ip,
        loop: p,
        onLoadedMetadata: (M) => C(M.currentTarget.duration),
        onTimeUpdate: (M) => {
          $(M.currentTarget.currentTime), M.currentTarget.paused || D();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), c(!1), $(k));
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
        src: rp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const M = r.current, K = a.current;
          M?.duration && K?.duration && Math.abs(M.duration - K.duration) > 0.15 && O("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => O("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    A && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: A }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const ap = 4e3;
class Ad extends Error {
  name = "MicSetupError";
}
async function lp(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Ad("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
    if (d = a ? a() : new AudioContext(), d.state !== "running") {
      let $;
      await Promise.race([
        d.resume(),
        new Promise((k, C) => {
          $ = setTimeout(() => C(new Ad("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), ap);
        })
      ]).finally(() => clearTimeout($));
    }
    const h = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], S = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: c,
      label: m?.label ?? "",
      deviceId: S.deviceId ?? "",
      channelCount: S.channelCount ?? 1,
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
async function op() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var co, Rd;
function up() {
  if (Rd) return co;
  Rd = 1;
  function r(a) {
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
        var S = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << S;
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
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, S, $ = this._bitrev;
    if (p === 4)
      for (m = 0, S = 0; m < c; m += p, S++) {
        const E = $[S];
        this._singleTransform2(m, E, h);
      }
    else
      for (m = 0, S = 0; m < c; m += p, S++) {
        const E = $[S];
        this._singleTransform4(m, E, h);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var A = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var O = m + A, D = m, w = 0; D < O; D += 2, w += h) {
          const E = D, z = E + A, N = z + A, M = N + A, K = u[E], J = u[E + 1], q = u[z], T = u[z + 1], V = u[N], ee = u[N + 1], le = u[M], _e = u[M + 1], ne = K, oe = J, Se = C[w], U = k * C[w + 1], ue = q * Se - T * U, re = q * U + T * Se, Y = C[2 * w], te = k * C[2 * w + 1], Z = V * Y - ee * te, g = V * te + ee * Y, b = C[3 * w], ke = k * C[3 * w + 1], Ee = le * b - _e * ke, W = le * ke + _e * b, se = ne + Z, j = oe + g, B = ne - Z, I = oe - g, ie = ue + Ee, pe = re + W, de = k * (ue - Ee), ge = k * (re - W), xe = se + ie, Ae = j + pe, Te = se - ie, Le = j - pe, Je = B + ge, Be = I - de, We = B - ge, Ke = I + de;
          u[E] = xe, u[E + 1] = Ae, u[z] = Je, u[z + 1] = Be, u[N] = Te, u[N + 1] = Le, u[M] = We, u[M + 1] = Ke;
        }
    }
  }, r.prototype._singleTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], S = p[c + 1], $ = p[c + d], k = p[c + d + 1], C = m + $, A = S + k, O = m - $, D = S - k;
    h[u] = C, h[u + 1] = A, h[u + 2] = O, h[u + 3] = D;
  }, r.prototype._singleTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, S = d * 2, $ = d * 3, k = p[c], C = p[c + 1], A = p[c + d], O = p[c + d + 1], D = p[c + S], w = p[c + S + 1], E = p[c + $], z = p[c + $ + 1], N = k + D, M = C + w, K = k - D, J = C - w, q = A + E, T = O + z, V = m * (A - E), ee = m * (O - z), le = N + q, _e = M + T, ne = K + ee, oe = J - V, Se = N - q, U = M - T, ue = K - ee, re = J + V;
    h[u] = le, h[u + 1] = _e, h[u + 2] = ne, h[u + 3] = oe, h[u + 4] = Se, h[u + 5] = U, h[u + 6] = ue, h[u + 7] = re;
  }, r.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, S, $ = this._bitrev;
    if (p === 4)
      for (m = 0, S = 0; m < c; m += p, S++) {
        const Me = $[S];
        this._singleRealTransform2(m, Me >>> 1, h >>> 1);
      }
    else
      for (m = 0, S = 0; m < c; m += p, S++) {
        const Me = $[S];
        this._singleRealTransform4(m, Me >>> 1, h >>> 1);
      }
    var k = this._inv ? -1 : 1, C = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var A = p >>> 1, O = A >>> 1, D = O >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, E = 0; w <= D; w += 2, E += h) {
          var z = m + w, N = z + O, M = N + O, K = M + O, J = u[z], q = u[z + 1], T = u[N], V = u[N + 1], ee = u[M], le = u[M + 1], _e = u[K], ne = u[K + 1], oe = J, Se = q, U = C[E], ue = k * C[E + 1], re = T * U - V * ue, Y = T * ue + V * U, te = C[2 * E], Z = k * C[2 * E + 1], g = ee * te - le * Z, b = ee * Z + le * te, ke = C[3 * E], Ee = k * C[3 * E + 1], W = _e * ke - ne * Ee, se = _e * Ee + ne * ke, j = oe + g, B = Se + b, I = oe - g, ie = Se - b, pe = re + W, de = Y + se, ge = k * (re - W), xe = k * (Y - se), Ae = j + pe, Te = B + de, Le = I + xe, Je = ie - ge;
          if (u[z] = Ae, u[z + 1] = Te, u[N] = Le, u[N + 1] = Je, w === 0) {
            var Be = j - pe, We = B - de;
            u[M] = Be, u[M + 1] = We;
            continue;
          }
          if (w !== D) {
            var Ke = I, gt = -ie, Xe = j, ze = -B, nt = -k * xe, Mt = -k * ge, Gt = -k * de, zt = -k * pe, sn = Ke + nt, Wt = gt + Mt, ct = Xe + zt, Dn = ze - Gt, je = m + O - w, Qt = m + A - w;
            u[je] = sn, u[je + 1] = Wt, u[Qt] = ct, u[Qt + 1] = Dn;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], S = p[c + d], $ = m + S, k = m - S;
    h[u] = $, h[u + 1] = 0, h[u + 2] = k, h[u + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, S = d * 2, $ = d * 3, k = p[c], C = p[c + d], A = p[c + S], O = p[c + $], D = k + A, w = k - A, E = C + O, z = m * (C - O), N = D + E, M = w, K = -z, J = D - E, q = w, T = z;
    h[u] = N, h[u + 1] = 0, h[u + 2] = M, h[u + 3] = K, h[u + 4] = J, h[u + 5] = 0, h[u + 6] = q, h[u + 7] = T;
  }, co;
}
var cp = up();
const dp = /* @__PURE__ */ ym(cp);
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
  static forFloat32Array(a) {
    return new Gr(
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
    return new Gr(
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
    return new Gr(a, (u) => Array(u));
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
    this._inputLength = a, this._fft = new dp(mp(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function fp(r) {
  const a = [];
  let u = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (u = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (u = !1, d !== -1 && a.push(d)) : u && r[h] > c && (c = r[h], d = h);
  return a;
}
function hp(r, a) {
  const [u, c, d] = [r - 1, r, r + 1], [h, p, m] = [a[u], a[c], a[d]], S = h / 2 - p + m / 2, $ = -(h / 2) * (c + d) + p * (u + d) - m / 2 * (u + c), k = h * c * d / 2 - p * u * d + m * u * c / 2, C = -$ / (2 * S), A = S * C * C + $ * C + k;
  return [C, A];
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
  static forFloat32Array(a) {
    return new Wr(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Wr(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Wr(a, (u) => Array(u));
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
    this._autocorrelator = new Gr(a, u), this._nsdfBuffer = u(a);
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
    const c = fp(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((S) => this._nsdfBuffer[S])), h = c.find(
      (S) => this._nsdfBuffer[S] >= this._clarityThreshold * d
    ), [p, m] = hp(
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
function mp(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function pp(r) {
  const a = r * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const vp = 0.05, kp = 1.5;
class yp {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, d = pp(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * vp))), this.detector = Wr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new gp();
  onset = new xp();
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
      onFrame: S,
      onStableNote: $
    } = this.opts, k = this.analysers.map((T, V) => (T.getFloatTimeDomainData(this.buffers[V]), $d(this.buffers[V], this.buffers[V].length - this.shortLength))), C = k.indexOf(Math.max(...k));
    C !== this.channel && k[C] > (k[this.channel] ?? 0) * kp && (this.channel = C);
    const A = this.buffers[this.channel], O = k[this.channel], D = jp(A, A.length - this.shortLength), w = { rms: O, peak: D, channel: this.channel, levels: k }, E = O < c, z = this.onset.feed(O, a, c);
    if (E && $d(A, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), S?.({ ...w, status: "silent" });
      return;
    }
    const [N, M] = this.detector.findPitch(A, this.mic.context.sampleRate);
    if (!isFinite(N) || M < u) {
      this.gate.feed(null, a, d, E, z), S?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(M) ? M : 0 });
      return;
    }
    if (N < p || N > m) {
      this.gate.feed(null, a, d, E, z), S?.({ ...w, status: "out-of-range", frequency: N, clarity: M });
      return;
    }
    const { midi: K, cents: J } = Pm(N);
    if (Math.abs(J) > h) {
      this.gate.feed(null, a, d, E, z), S?.({ ...w, status: "off-pitch", frequency: N, clarity: M, midi: K, cents: J });
      return;
    }
    S?.({ ...w, status: "pitch", frequency: N, clarity: M, midi: K, cents: J });
    const q = this.gate.feed(K, a, d, E, z);
    q !== null && $?.({ midi: K, frequency: N, cents: J, clarity: M, timestamp: a, heldMs: q.heldMs });
  }
}
class gp {
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
class xp {
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
function $d(r, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let d = u; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - u));
}
function jp(r, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > u && (u = d);
  }
  return u;
}
const lr = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let er;
function mf() {
  return (!er || er.state === "closed") && (er = new AudioContext()), er;
}
function Sp() {
  const r = er;
  er = void 0, r?.close().catch(() => {
  });
}
const pf = (r) => r instanceof Error ? r.name : "";
function wp(r) {
  const a = pf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Ep {
  constructor(a = (u) => lp(u, mf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(pf(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new yp(h, { ...u });
      const m = () => {
        this.mic === h && (this.stop(), c());
      }, S = this.listeners = new AbortController();
      return h.stream.getTracks().forEach(($) => $.addEventListener("ended", m, { once: !0, signal: S.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: S.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
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
function vf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Ld = (r) => Math.max(0, Math.min(1, (lr(r) + 60) / 60));
function Np(r) {
  const a = [...r].sort((c, d) => c - d), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
async function Od(r) {
  const a = () => r.state === "running";
  if (a()) return;
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
  if (!a()) throw new Error("reference-audio-not-running");
}
function kf(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Fo {
  constructor(a = mf) {
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
    if (await Od(c), u !== this.token) return !1;
    const d = c.createGain();
    d.connect(c.destination), this.master = d;
    const h = Array.from({ length: 12 }, (S, $) => 1 / ($ + 1) ** 1.3), p = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((S, $) => {
      const k = c.createOscillator(), C = c.createGain(), A = c.currentTime + 0.05 + $ * 0.8;
      p ? k.setPeriodicWave(p) : k.type = "triangle", k.frequency.value = gd(S), C.gain.setValueAtTime(0, A), C.gain.linearRampToValueAtTime(0.22, A + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, A + 0.7), k.connect(C), C.connect(d), k.start(A), k.stop(A + 0.72);
    }), !await new Promise((S) => {
      this.settle = S, this.timer = setTimeout(() => S(!0), a.length * 800 + 350);
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
    if (await Od(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), S = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let $ = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && ($ = 60 / Math.max(40, Math.min(140, w)));
    };
    const k = 1.6;
    let C = h.currentTime + 0.05, A = 0;
    const O = [], D = () => {
      if (d === this.token) {
        if (C < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - C) / $);
          C += w * $, A = (A + w) % a.length, O.length = 0;
        }
        for (; C < h.currentTime + k; ) {
          const w = a[A], E = A, z = C, N = h.createOscillator(), M = h.createGain();
          S ? N.setPeriodicWave(S) : N.type = "triangle", N.frequency.value = gd(w), M.gain.setValueAtTime(0, z), M.gain.linearRampToValueAtTime(0.22, z + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, z + $ * 0.975), N.connect(M), M.connect(p), N.start(z), N.stop(z + $ * 0.985), O.push({ at: z, index: E }), C += $, A = (A + 1) % a.length;
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
const wo = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), yf = [...new Map(wo.flatMap((r) => r.positions[0].strings.flatMap((a, u) => a.map((c) => {
  const d = ft(u, c);
  return [Ge(d), d];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), xa = [5, 4, 3, 2, 1, 0].flatMap((r) => yf.filter((a) => a.string === r).sort((a, u) => a.fret - u.fret)), Eo = [
  ...xa,
  ...xa.slice(1, -1).reverse()
], Cp = [...Eo, xa[0]], Fd = new Set(
  wo[0].positions[0].strings.flatMap((r, a) => r.map((u) => {
    const c = ft(a, u);
    return Ge(c);
  })).filter((r) => wo[1].positions[0].strings.flatMap((a, u) => a.map((c) => Ge(ft(u, c)))).includes(r))
), _p = [
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
], gf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", xf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", fo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], bd = (r) => He(r) === 9;
function Id() {
  try {
    const r = Number(localStorage.getItem(gf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Tp() {
  try {
    const r = Number(localStorage.getItem(xf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Mp({ onBack: r, onPosition: a }) {
  const [u, c] = F.useState(Id), [d, h] = F.useState(Id), [p, m] = F.useState(!1), [S, $] = F.useState("roots"), [k, C] = F.useState(Tp), [A, O] = F.useState(null), [D, w] = F.useState(null), [E, z] = F.useState(""), N = F.useRef(new Fo()), M = F.useRef(0), K = D === null ? null : Eo[D];
  function J() {
    M.current++, N.current.stop(), O(null), w(null);
  }
  F.useEffect(() => {
    const ne = () => {
      document.hidden && (M.current++, N.current.stop(), O(null), w(null));
    };
    return document.addEventListener("visibilitychange", ne), () => {
      document.removeEventListener("visibilitychange", ne), M.current++, N.current.stop();
    };
  }, []);
  async function q(ne) {
    const oe = ++M.current;
    N.current.stop(), w(null), z(""), O(ne);
    try {
      ne === "transition" ? await N.current.play(_p.map((Se) => Se.midi)) : ne === "once" ? await N.current.play(Cp.map((Se) => Se.midi)) : await N.current.loop(Eo.map((Se) => Se.midi), (Se) => {
        oe === M.current && w(Se);
      }, k);
    } catch (Se) {
      oe === M.current && z(kf(Se));
    } finally {
      oe === M.current && (O(null), w(null));
    }
  }
  function T(ne) {
    const oe = Math.max(40, Math.min(140, ne));
    C(oe), N.current.setLoopTempo(oe);
    try {
      localStorage.setItem(xf, String(oe));
    } catch {
    }
  }
  function V(ne) {
    ne > u || (J(), h(ne), m(!1), $("roots"));
  }
  function ee() {
    J();
    const ne = Math.min(4, d + 1);
    if (h(ne), m(!1), $("roots"), ne > u) {
      c(ne);
      try {
        localStorage.setItem(gf, String(ne));
      } catch {
      }
    }
  }
  const le = (ne, oe) => d < 2 || d === 2 && p && Fd.has(oe) || d === 3 && (S === "all" || S === "roots" && bd(ne)), _e = yf.filter((ne) => le(ne.midi, Ge(ne))).map((ne) => ({
    ...ne,
    label: d < 2 || d === 2 && p || d === 3 && S === "all" ? Fe(ne.midi) : "A",
    kind: d < 2 && K?.string === ne.string && K?.fret === ne.fret ? "playing" : bd(ne.midi) ? "answer" : Fd.has(Ge(ne)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      J(), r();
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
        J(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        J(), a(2);
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
              xa.length,
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
              "aria-pressed": A === "whole",
              onClick: () => A === "whole" ? J() : void q("whole"),
              children: A === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": A === "once",
              onClick: () => A === "once" ? J() : void q("once"),
              children: A === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": A === "transition",
              onClick: () => A === "transition" ? J() : void q("transition"),
              children: A === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
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
                  checked: S === ne.value,
                  onChange: () => $(ne.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: ne.name })
            ] }, ne.value))
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => A === "once" ? J() : void q("once"), children: A === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => A === "transition" ? J() : void q("transition"), children: A === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: A === "whole" ? K && d < 2 ? `Nyt soi ${Fe(K.midi, !1, !0)} · ${rn[K.string]}-kieli, nauha ${K.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : A === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : A === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ s.jsx(
          ar,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: _e,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? S === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : S === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d === 3 && /* @__PURE__ */ s.jsx(hf, {}),
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
const Qr = "musiikin-kartta:skaalapolku:v1", pa = "musiikin-kartta:skaalapolku:position-2:v1", ho = "musiikin-kartta:skaalapolku:position-3:v1", va = "musiikin-kartta:skaalapolku:bridge-1-2:v1", ja = "musiikin-kartta:skaalapolku:active-position:v1", jf = "musiikin-kartta:skaalapolku:tempo:v1", nr = 75, No = 40, Co = 140;
function Pp() {
  try {
    const r = localStorage.getItem(jf);
    if (r === null) return nr;
    const a = Number(r);
    return Number.isInteger(a) && a >= No && a <= Co && a % 5 === 0 ? a : nr;
  } catch {
    return nr;
  }
}
const mo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Dd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(r = Qr) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function po() {
  try {
    const r = localStorage.getItem(ja);
    return r === "3" && En(va) === 4 ? 3 : En(Qr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Ap() {
  try {
    return En(pa) === 4 && localStorage.getItem(ja) === "bridge";
  } catch {
    return !1;
  }
}
function Rp({ onBack: r }) {
  const [a, u] = F.useState(po), [c, d] = F.useState(Ap), [h, p] = F.useState(() => ({
    1: En(Qr),
    2: En(pa),
    3: En(ho)
  })), [m, S] = F.useState(() => En(po() === 3 ? ho : po() === 2 ? pa : Qr)), $ = h[a], [k, C] = F.useState(!1), [A, O] = F.useState("roots"), [D, w] = F.useState(Pp), [E, z] = F.useState(null), [N, M] = F.useState(null), [K, J] = F.useState(""), q = F.useRef(new Fo()), T = F.useRef(0);
  function V(W) {
    const se = Math.max(No, Math.min(Co, W));
    w(se), q.current.setLoopTempo(se);
    try {
      localStorage.setItem(jf, String(se));
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
  const le = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], _e = le.strings.flatMap((W, se) => W.map((j) => ft(se, j))).sort((W, se) => W.midi - se.midi || se.string - W.string), ne = [..._e, ..._e.slice(1, -1).reverse()], oe = N === null ? null : ne[N], Se = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], U = le.start, ue = le.end, re = (W) => He(W) === 9, Y = (W) => m < 2 ? !0 : m === 2 ? k && re(W) : A === "scale" || A === "roots" && re(W), te = _e.filter((W) => Y(W.midi)).map((W) => ({
    ...W,
    label: m < 2 || m === 3 && A === "scale" ? Fe(W.midi) : "A",
    kind: m < 2 && oe?.string === W.string && oe.fret === W.fret ? "playing" : re(W.midi) ? "answer" : "shape"
  }));
  async function Z(W) {
    const se = ++T.current;
    q.current.stop(), M(null), J(""), z(W);
    try {
      W === "phrase" ? await q.current.play(Se) : await q.current.loop(ne.map((j) => j.midi), (j) => {
        se === T.current && M(j);
      }, m === 2 ? D : nr);
    } catch (j) {
      se === T.current && J(kf(j));
    } finally {
      se === T.current && (z(null), M(null));
    }
  }
  function g() {
    ee();
    const W = Math.min(4, m + 1);
    if (S(W), C(!1), O("roots"), W > $) {
      p((j) => ({ ...j, [a]: W }));
      const se = a === 1 ? Qr : a === 2 ? pa : ho;
      try {
        localStorage.setItem(se, String(W));
      } catch {
      }
    }
  }
  function b(W) {
    W > $ || (ee(), S(W), C(!1), O("roots"));
  }
  function ke(W) {
    if (!(W === 2 && h[1] < 4) && !(W === 3 && En(va) < 4)) {
      ee(), d(!1), u(W), S(h[W]), C(!1), O("roots"), J("");
      try {
        localStorage.setItem(ja, String(W));
      } catch {
      }
    }
  }
  function Ee() {
    if (!(h[2] < 4)) {
      ee(), d(!0), C(!1), J("");
      try {
        localStorage.setItem(ja, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ s.jsx(Mp, { onBack: r, onPosition: ke }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), r();
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
          onClick: Ee,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(va) < 4,
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
              disabled: D >= Co,
              onClick: () => V(D + 5),
              children: "+ 5"
            }
          ),
          D !== nr && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(nr),
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
              "aria-pressed": E === "loop",
              onClick: () => E === "loop" ? ee() : void Z("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => E === "phrase" ? ee() : void Z("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? oe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(oe.midi, !1, !0)} · ${rn[oe.string]}-kieli, nauha ${oe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        K && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: K }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": k, onClick: () => C((W) => !W), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => b(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Dd.map((W) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: W.value,
                    checked: A === W.value,
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
          /* @__PURE__ */ s.jsx(ar, { area: { strings: [0, 1, 2, 3, 4, 5], min: U, max: ue, fixed: "box" }, marks: te, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? Dd.find((W) => W.value === A).note : k ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ar, { area: { strings: [0, 1, 2, 3, 4, 5], min: U, max: ue, fixed: "box" }, marks: te, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        m === 3 && /* @__PURE__ */ s.jsx(hf, {}, a),
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
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => ke(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: Ee, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => ke(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(va) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const qi = [0, 2, 4, 5, 7, 9, 11], $p = 1200, fa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Lp({ onBack: r }) {
  const [a, u] = F.useState(0), [c, d] = F.useState([]), [h, p] = F.useState(!1), [m, S] = F.useState(""), [$, k] = F.useState(0), [C, A] = F.useState(!1), O = a >= qi.length, D = qi[Math.min(a, qi.length - 1)], w = or(fa.strings, fa.min, fa.max).filter((T) => He(T.midi) === D), E = w.filter((T) => !c.includes(Ge(T))), z = E.length === 0 && !O, N = !z && h ? E[0] : void 0;
  F.useEffect(() => {
    if (!C || !z) return;
    const T = window.setTimeout(() => {
      u((V) => V + 1), d([]), p(!1), S("");
    }, $p);
    return () => window.clearTimeout(T);
  }, [C, z]);
  const M = [
    ...w.filter((T) => c.includes(Ge(T))).map((T) => ({ ...T, kind: "answer", label: Fe(T.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function K(T) {
    if (O || z) return;
    const V = Ge(T);
    if (He(T.midi) !== D) {
      k((_e) => _e + 1), S(`Valitsit sävelen ${Fe(T.midi)}. Etsi ${Fe(D)}.`);
      return;
    }
    if (c.includes(V)) {
      S("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ee = [...c, V];
    d(ee), p(!1);
    const le = w.length - ee.length;
    S(le ? `Oikein! ${Fe(D)} löytyi ${rn[T.string]}-kieleltä (${Ci(T.fret)}). Vielä ${le}.` : `Löysit kaikki ${w.length} ${Fe(D)}-säveltä tällä alueella.`);
  }
  function J() {
    z && (u((T) => T + 1), d([]), p(!1), S(""));
  }
  function q() {
    u(0), d([]), p(!1), S(""), k(0);
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
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
          onChange: (T) => A(T.target.checked)
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
          qi.length
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
        ar,
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
          a === qi.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: J, children: a === qi.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Op = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, vo = ["C", "G", "D", "Em"], zd = ["C", "G", "D", "Em", "Am", "E", "A"], Fp = { min: 0, max: 3, fixed: "" };
function Vd(r) {
  const a = [...r];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function bp({ onBack: r }) {
  const [a, u] = F.useState(4), [c, d] = F.useState(() => Vd(vo)), [h, p] = F.useState(0), [m, S] = F.useState(null), [$, k] = F.useState([]), [C, A] = F.useState(0), O = h >= c.length, D = Op[c[Math.min(h, c.length - 1)]], w = a === 4 ? vo : zd, E = D.frets.flatMap((T, V) => T === null ? [] : [V]), z = D.frets.flatMap((T, V) => T === null ? [V] : []), N = { ...Fp, strings: E }, M = D.frets.flatMap((T, V) => T === null ? [] : [{
    ...ft(V, T),
    kind: T === 0 ? "anchor" : "shape",
    label: T === 0 ? "○" : "●"
  }]);
  function K(T = a) {
    u(T), d(Vd(T === 4 ? vo : zd)), p(0), S(null), k([]), A(0);
  }
  function J(T) {
    m || O || $.includes(T) || (T === D.name ? S(T) : (k((V) => [...V, T]), A((V) => V + 1)));
  }
  function q() {
    m && (p((T) => T + 1), S(null), k([]));
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
        ar,
        {
          area: N,
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
          onClick: () => J(T),
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
const me = (r, a) => ({ first: r, ...a ? { second: a } : {} }), ir = () => [
  me("Gm", "F"),
  me("Gm"),
  me("B♭", "F"),
  me("Gm"),
  me("Gm", "F"),
  me("Gm"),
  me("E♭", "F"),
  me("Gm")
], rr = () => [
  me("B♭", "F"),
  me("Gm", "Dm"),
  me("E♭", "F"),
  me("Gm", "Dm")
], sr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Sf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Ip = [
  { id: "intro", title: "Intro", start: 0, bars: [me("Gm", "F"), me("Gm"), me("B♭", "F"), me("Gm")] },
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
    bars: [...rr(), me("E♭"), { ...me("E♭"), passingBass: "F" }],
    lyrics: sr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [me("Gm", "F"), me("Gm")] },
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
    bars: [...rr(), me("E♭"), me("F")],
    lyrics: sr
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
    bars: ir(),
    lyrics: Sf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...rr(), me("E♭", "F"), me("Gm")],
    lyrics: sr
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
], Dp = [
  { id: "intro", title: "Intro", start: 0, bars: [me("Gm", "F"), me("Gm"), me("B♭", "F"), me("Gm")] },
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
    bars: [...rr(), me("E♭"), me("E♭")],
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
    bars: [...rr(), me("E♭"), me("F")],
    lyrics: sr
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
    bars: ir(),
    lyrics: Sf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...rr(), me("B♭", "F"), me("Gm"), me("E♭", "F"), me("Gm")],
    lyrics: sr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [me("E♭", "F"), me("Gm", "F"), me("E♭", "F"), me("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ur = {
  acoustic: Ip,
  normal: Dp
}, zp = "normal", _o = "yksi-sointu-kaksi-askelta", bo = {
  acoustic: _o + "-akustinen",
  normal: _o + "-normaali"
}, wf = (r) => r === _o || Object.values(bo).includes(r ?? "");
function Vp(r) {
  const a = Object.entries(bo).find(([, u]) => u === r);
  return a ? a[0] : null;
}
const Bp = (r) => bo[r], Bd = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Io(r, a = "acoustic") {
  const u = ur[a], c = u[r], d = u[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Ef(r, a = "acoustic") {
  const u = ur[a], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let C = 1; C < u.length && !(c < u[C].start); C++)
    d = C;
  const h = u[d];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= qr(d, p + 1, a); )
    p++;
  const m = qr(d, p, a), S = Io(d, a) / 4;
  let $ = 1;
  for (; $ < 4 && c >= m + $ * S; ) $++;
  const k = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: $,
    chord: k.second && $ >= 3 ? k.second : k.first
  };
}
function qr(r, a, u = "acoustic") {
  return ur[u][r].start + Io(r, u) * a;
}
function Kp(r) {
  return ur[r].flatMap((a, u) => a.bars.flatMap((c, d) => {
    const h = qr(u, d, r), p = { section: a, sectionIndex: u, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const m = Io(u, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + m }];
  }));
}
function Hp(r, a = "acoustic", u = !1) {
  const c = ur[a], d = Ef(r, a), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", m = Kp(a), S = m.findIndex((O) => O.sectionIndex === d.sectionIndex && O.barIndex === d.barIndex && O.part === p), k = [
    ...m.slice(S + 1).map((O) => ({ ...O, wrapped: !1 })),
    ...u ? m.slice(0, S + 1).map((O) => ({ ...O, wrapped: !0 })) : []
  ].find((O) => O.chord !== d.chord) ?? null;
  let C = null;
  const A = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!A || u)) {
    const O = A ? 0 : d.sectionIndex + 1, D = c[O], w = D.bars[0].first;
    C = {
      section: D,
      sectionIndex: O,
      firstChord: w,
      wrapped: A,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: k, nextSection: C };
}
function Up(r) {
  const a = r.filter((m) => m.lyrics?.length), u = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, S) => m + u(S), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const S = Math.abs(c - 2 * p);
    (S < h || S === h && p >= c - p) && (d = m, h = S), m < a.length && (p += u(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const To = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Nf = "musiikin-kartta:kappale-sointuvihjeet:v1", ka = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Kd = {
  showChords: !0,
  level: 0,
  fadeOrder: ka
};
function ha(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function Hd(r) {
  if (!r) return { ...Kd, fadeOrder: { ...ka } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, d = { ...ka }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of To)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Kd, fadeOrder: { ...ka } };
  }
}
function Gp() {
  try {
    return Hd(localStorage.getItem(Nf));
  } catch {
    return Hd(null);
  }
}
const Wp = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Qp(r) {
  const a = Wp.exec(r.trim());
  if (!a) return r;
  const [, u, , c = "", d = ""] = a;
  return u + "5" + c + d;
}
const Yp = (r, a) => a === "power" ? Qp(r) : r, Jp = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Xp = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Zp({ version: r, position: a, loop: u = !1, onSeek: c }) {
  const [d, h] = F.useState(Gp), [p, m] = F.useState(null), [S, $] = F.useState(!1), [k, C] = F.useState("full"), A = (U) => Yp(U, k), O = ur[r], D = Ef(a, r), { section: w, sectionIndex: E, barIndex: z, beat: N, chord: M } = D, K = N >= 3 && w.bars[z].second ? "second" : "first", J = (U, ue, re) => `${r}:${U}:${ue}:${re}`, q = (U, ue) => J(w.id, U, ue), T = q(z, K), V = ha(M, d), ee = V && p === T, le = (U, ue, re) => !ha(U, d) || p === q(ue, re), _e = d.showChords && d.level === 0, ne = To.filter((U) => ha(U, d)).length, { nextSection: oe } = Hp(a, r, u), Se = !!oe && ha(oe.firstChord, d);
  return F.useEffect(() => {
    m(null);
  }, [T]), F.useEffect(() => {
    try {
      localStorage.setItem(Nf, JSON.stringify(d));
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
            checked: S,
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
              h((re) => ({ ...re, level: ue })), m(null);
            },
            children: Jp.map((U) => /* @__PURE__ */ s.jsx("option", { value: U.value, children: U.label }, U.value))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ne === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ne}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: To.map((U) => /* @__PURE__ */ s.jsxs("label", { children: [
        U,
        /* @__PURE__ */ s.jsx(
          "select",
          {
            "aria-label": U + ": piilotusvaihe",
            value: d.fadeOrder[U],
            onChange: (ue) => {
              const re = Number(ue.target.value);
              h((Y) => ({ ...Y, fadeOrder: { ...Y.fadeOrder, [U]: re } })), m(null);
            },
            children: Xp.map((ue) => /* @__PURE__ */ s.jsx("option", { value: ue.value, children: ue.label }, ue.value))
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
              const ue = O.find((re) => re.id === U.target.value);
              ue && c(ue.start);
            },
            children: O.map((U) => /* @__PURE__ */ s.jsxs("option", { value: U.id, children: [
              Bd(U.start),
              " · ",
              U.title
            ] }, U.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          V && !ee ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: V && !ee ? "?" : A(M) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            N,
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
          /* @__PURE__ */ s.jsx("strong", { children: Se ? "?" : A(oe.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((U, ue) => {
      const re = ue === z, Y = re && (N < 3 || !U.second), te = re && N >= 3 && !!U.second, Z = le(U.first, ue, "first"), g = U.second ? le(U.second, ue, "second") : !1, b = (Z ? A(U.first) : "sointu piilossa") + (U.second ? " " + (g ? A(U.second) : "sointu piilossa") : "") + (_e && U.passingBass ? " (basson kulku " + U.passingBass + ")" : "") + (_e && U.possibleChord ? " (" + A(U.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (re ? " active" : ""),
          "aria-pressed": re,
          "aria-label": "Tahti " + (ue + 1) + ": " + b + ". Siirry kohtaan " + Bd(qr(E, ue, r)),
          onClick: () => c(qr(E, ue, r)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: Y && Z ? "now" : "", children: Z ? A(U.first) : "?" }),
              U.second && /* @__PURE__ */ s.jsx("strong", { className: te && g ? "now" : "", children: g ? A(U.second) : "?" })
            ] }),
            _e && U.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              U.passingBass,
              "), isku 4"
            ] }),
            _e && U.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              A(U.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    S ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: Up(O).map((U, ue) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: U.map((re) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: re.title }),
        re.lyrics?.map((Y, te) => /* @__PURE__ */ s.jsx("p", { children: Y }, te))
      ] }, re.id)) }, ue)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((U, ue) => /* @__PURE__ */ s.jsx("p", { children: U }, ue))
    ] }),
    _e && w.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const Sa = 7, qp = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, ko = [
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
    scale: qp,
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
function ev(r) {
  return Ie.scaleNotes(r).map(([a, u]) => Ie.noteName(Sa, a, u));
}
const Cf = (r) => r === "pentatonic" ? 5 : 7;
function tv(r, a, u) {
  const c = a.filter((m) => m >= 1 && m <= Cf(r.system)), d = Ie.fingeringBoxes(Sa, r.scale, r.system, c, u);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([m]) => (Sa + m) % 12), p = (m, S) => S >= 0 && S <= u && h.includes((Ie.OPEN_PITCHES[m] + S) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((S) => {
    const $ = S.strings.map((C, A) => {
      if (!C.length) return C;
      const O = C[C.length - 1];
      return p(A, O + 1) ? [...C.slice(0, -1), O + 1] : C;
    }), k = $.flat();
    return { ...S, strings: $, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const Ud = 17;
function nv({ open: r }) {
  const [a, u] = F.useState("mp"), [c, d] = F.useState({ pentatonic: [], "3nps": [] }), [h, p] = F.useState(!1), [m, S] = F.useState(!1), $ = F.useRef(null), k = ko.find((E) => E.id === a) ?? ko[0], C = c[k.system], A = tv(k, C, Ud), O = A.some((E) => E.positions.length > 0), D = Ie.renderBoard(Sa, k.scale, Ud, {
    automatic: !0,
    boxes: A,
    onlyBoxNotes: O && h,
    label: k.title + (C.length ? ", " + C.map((E) => "boksi " + E).join(", ") : "")
  });
  F.useEffect(() => {
    const E = $.current;
    !E || !r || A.length === 1 && Ie.revealPositions(E, ".box-highlight");
  }, [D, r]);
  function w(E, z) {
    d((N) => ({ ...N, [k.system]: z ? [...N[k.system], E].sort((M, K) => M - K) : N[k.system].filter((M) => M !== E) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (E) => u(E.target.value), children: ko.map((E) => /* @__PURE__ */ s.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: k.title }),
      /* @__PURE__ */ s.jsx("span", { children: ev(k.scale).join(" · ") })
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
      /* @__PURE__ */ s.jsx("summary", { onClick: (E) => {
        E.preventDefault(), S((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Cf(k.system) }, (E, z) => z + 1).map((E) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: O && h,
            disabled: !O,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: O ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const iv = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Mo = 100, _f = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Do(r) {
  if (r === null || r.trim() === "") return Mo;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Mo;
}
function rv() {
  try {
    return Do(localStorage.getItem(_f));
  } catch {
    return Mo;
  }
}
function sv(r) {
  try {
    localStorage.setItem(_f, String(Do(String(r))));
  } catch {
  }
}
function Gd(r, a, u = !0) {
  return u ? iv[r] * Do(String(a)) / 100 : 0;
}
function av(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const lv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class ov {
  constructor(a = lv) {
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
let Tf = null;
function uv() {
  return Vp(new URLSearchParams(location.search).get("kappale")) ?? Tf ?? zp;
}
function cv(r) {
  Tf = r;
  const a = new URL(location.href);
  wf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Bp(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const dv = {
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
}, fv = 0.12, Wd = 1e-3;
function Qd(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function Yd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function hv({ onBack: r }) {
  const a = F.useRef(null), u = F.useRef(null), c = F.useRef(null), d = F.useRef(0), h = F.useRef(null), [p, m] = F.useState(uv), S = dv[p], [$, k] = F.useState(!1), [C, A] = F.useState(!0), [O, D] = F.useState(!0), [w, E] = F.useState(!1), [z, N] = F.useState(!1), [M, K] = F.useState(!1), [J, q] = F.useState(rv), [T] = F.useState(() => av() ? "element" : "webaudio"), V = F.useRef(null), [ee, le] = F.useState(0), [_e, ne] = F.useState(0), [oe, Se] = F.useState("");
  function U(j = !1) {
    const B = a.current;
    if (!(!B || B.readyState < 1))
      for (const I of [u.current, c.current]) {
        if (!I || I.readyState < 1) continue;
        const ie = Math.abs(I.currentTime - B.currentTime), pe = B.loop && Number.isFinite(B.duration) && Math.abs(ie - B.duration) < 0.35;
        if (j || !pe && ie > fv)
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
  function re(j = J, B) {
    for (const [I, ie, pe] of ue()) {
      if (!ie) continue;
      const de = Gd(I, j, B?.[I] ?? pe);
      if (T === "webaudio" && V.current?.routed(ie))
        V.current.setLevel(ie, de);
      else
        try {
          ie.volume = Gd(I, j);
        } catch {
        }
    }
  }
  function Y(j) {
    q(j), sv(j), re(j);
  }
  function te() {
    d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), k(!1);
  }
  function Z(j) {
    if (j !== p) {
      h.current = null, te();
      for (const B of [a.current, u.current, c.current])
        if (B)
          try {
            B.currentTime = 0;
          } catch {
          }
      le(0), ne(0), Se(""), m(j), cv(j);
    }
  }
  function g(j) {
    const B = a.current;
    if (!B || !Number.isFinite(j)) return;
    const I = Math.max(0, Math.min(j, Number.isFinite(B.duration) ? B.duration : j));
    h.current = I, le(I), Qd(B, I);
  }
  function b(j) {
    const B = h.current;
    if (B === null || j !== a.current || j.seeking) return;
    const I = Number.isFinite(j.duration) ? Math.min(B, j.duration) : B;
    if (I !== B && (h.current = I, le(I)), Math.abs(j.currentTime - I) < Wd) return;
    const ie = j.seekable;
    for (let pe = 0; pe < ie.length; pe++)
      if (ie.start(pe) <= I && I <= ie.end(pe)) {
        Qd(j, I);
        return;
      }
  }
  function ke(j) {
    if (j !== a.current) return;
    const B = h.current;
    if (B === null)
      le(j.currentTime);
    else if (j.readyState >= 1 && !j.seeking && Math.abs(j.currentTime - B) < Wd) {
      h.current = null, U(!0);
      return;
    }
    j.paused || U();
  }
  async function Ee() {
    const j = a.current, B = u.current, I = c.current;
    if (!j || !B || !I) return;
    if ($) {
      te();
      return;
    }
    Se("");
    const ie = h.current ?? j.currentTime;
    if (Number.isFinite(j.duration) && ie >= j.duration - 0.05 && g(0), b(j), T === "webaudio" && (V.current ??= new ov(), V.current.unlock()))
      for (const de of [j, B, I]) V.current.route(de);
    re(), B.muted = !C, I.muted = !O, U(!0);
    const pe = ++d.current;
    try {
      const de = [j.play(), B.play(), I.play()];
      if (await Promise.all(de), pe !== d.current) return;
      U(), k(!0);
    } catch {
      if (pe !== d.current) return;
      te(), Se("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function W(j) {
    j && U(), u.current && (u.current.muted = !j), A(j), re(J, { guitar: j });
  }
  function se(j) {
    j && U(), c.current && (c.current.muted = !j), D(j), re(J, { vocals: j });
  }
  return F.useEffect(() => {
    const j = () => {
      document.hidden && te();
    };
    return document.addEventListener("visibilitychange", j), () => {
      document.removeEventListener("visibilitychange", j), d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), V.current?.close();
    };
  }, []), F.useEffect(() => {
    re();
  }, [p]), /* @__PURE__ */ s.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: p,
          onChange: (j) => Z(j.target.value),
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
          S.label,
          " · ",
          S.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          Ee();
        }, children: $ ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: _e > 0 ? _e : 1,
            step: 0.1,
            value: Math.min(ee, _e > 0 ? _e : 1),
            disabled: _e <= 0,
            onChange: (j) => g(Number(j.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Yd(ee),
          " / ",
          Yd(_e)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (j) => W(j.target.checked)
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
              onChange: (j) => se(j.target.checked)
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
              onChange: (j) => E(j.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": T, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            J > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            J > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: J,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": J + " %",
              onChange: (j) => Y(Number(j.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            J,
            " %"
          ] })
        ] })
      ] }),
      oe && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: oe }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: S.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (j) => {
            j.currentTarget === a.current && (ne(j.currentTarget.duration), b(j.currentTarget));
          },
          onProgress: (j) => b(j.currentTarget),
          onCanPlay: (j) => b(j.currentTarget),
          onTimeUpdate: (j) => ke(j.currentTarget),
          onEnded: (j) => {
            j.currentTarget !== a.current || j.currentTarget.loop || (h.current = null, u.current?.pause(), c.current?.pause(), k(!1), le(j.currentTarget.duration));
          },
          onPause: (j) => {
            j.currentTarget === a.current && k(!1);
          },
          onError: () => Se(S.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        p + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: u,
          src: S.guitar,
          preload: "metadata",
          muted: !C,
          loop: w,
          onLoadedMetadata: () => U(!0),
          onError: () => Se(S.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        p + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: c,
          src: S.vocals,
          preload: "metadata",
          muted: !O,
          loop: w,
          onLoadedMetadata: () => U(!0),
          onError: () => Se(S.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        p + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: z, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (j) => {
        j.preventDefault(), N((B) => !B);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(Zp, { version: p, position: ee, loop: w, onSeek: g })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: M, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (j) => {
        j.preventDefault(), K((B) => !B);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(nv, { open: M })
    ] })
  ] });
}
const Po = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, ya = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), Mf = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Ao = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function mv(r, a, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Ao(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Pf({ frame: r, threshold: a }) {
  const u = r?.rms ?? 0, c = lr(u), d = (r?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
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
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${Ld(u) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${Ld(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function pv({ mic: r, frame: a, heard: u, s: c, now: d }) {
  const h = vf(r.phase, a), p = u && d - u.at < 1500 ? u : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Fe(p.midi, c.flats, !0)} · ${Mf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Po[h];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ s.jsx(Pf, { frame: a, threshold: c.minRms })
  ] });
}
function vv({ mic: r, frame: a, heard: u, accepted: c, now: d, s: h, change: p, devices: m, locked: S, calibrating: $, calibration: k, onTest: C, onStop: A, onCalibrate: O }) {
  const D = F.useId(), w = vf(r.phase, a), E = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", z = r.phase === "on", N = u && d - u.at < 1500 ? u : null, M = N && (w === "pitch" || w === "untuned"), K = z && (a?.peak ?? 0) >= 0.98, J = r.phase === "error" ? [] : mv(w, h, r.info, K), q = !h.device || m.some((V) => V.deviceId === h.device), T = (V, ee) => p({ ...h, [V]: ee });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Po[w],
      w === "pitch" && N ? ` ${Fe(N.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Ao(r.info)}.` : r.phase === "error" ? r.error : Po[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Ao(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(Pf, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            ya(Math.max(-60, lr(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? Fe(N.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${ya(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          Mf(N.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${N.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, N.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: M ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: N ? `${Math.round(N.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Fe(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    J.length > 0 && z && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: J.map((V) => /* @__PURE__ */ s.jsx("li", { children: V }, V)) }),
    r.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: A, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: S, onClick: C, children: "Testaa mikrofoni" }),
      E && z && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: $, onClick: O, children: $ ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    S && r.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: S, children: [
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
              ya(lr(h.minRms), 0),
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
const kv = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ni[r.mode === "caged" ? "maj" : r.chord].tones, Jd = (r, a) => kv(r).find(([u]) => u === a)?.[1], Af = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", yv = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function gv(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function xv(r, a, u, c, d) {
  return a.choices === "degree" ? `Oikein! ${Yr(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : Af(r) ? `Oikein! ${a.degree}. aste on ${Yr(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Fe(a.reference, r.flats, !0)} → ${a.name} on ${Jr[a.interval]} ${yv(a)}.` : r.mode === "notes" ? u === "board" && d ? `Oikein! ${Fe(d.midi, r.flats)} on ${qd[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(c, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function jv(r, a, u, c, d) {
  if (u === "note") return `Ei ${Fe(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${Jd(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = He(d.midi) === He(a.midi);
  if (r.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${Lo[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Fe(d.midi, r.flats)}. Etsi ${a.name}.`;
  if (Af(r)) {
    const p = He(d.midi - r.root), m = Jd(r, p), S = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Yr(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Fe(d.midi, r.flats)}, joka ei kuulu ${S}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Sv(r, a, u) {
  const c = Fe(u, r.flats, !0);
  return He(u) === He(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Rf(r, a = !1) {
  const u = r.split(":"), c = (p) => Number(u[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), h = (p, m) => rn[p] ? `${rn[p]}-kieli, ${Ci(m)}` : null;
  switch (u[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && d(1) ? `Kuule ja toista: ${Fe(c(1), a, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Jr[c(1)] ? `${Jr[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = u[2];
      if (!d(1, 3) || !Ni[p]) return null;
      const m = Ni[p].tones.find(([S]) => S === c(3))?.[1];
      return m ? `${ef(c(1), p)}: ${m}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[u[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (u.length === 5 && d(3)) {
        const S = Ie.scaleNotes(p).find(([$]) => $ === c(3))?.[1];
        return S ? `${m}: ${S}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && d(3)) {
        const m = Ni.maj.tones.find(([S]) => S === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Xd(r) {
  return Object.entries(r).flatMap(([a, u]) => {
    const [c, d, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: u }];
  });
}
const Ro = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", wv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Ev(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${tr(r.mode)}${r.hints ? ` · ${wa[r.hints].title}` : ""} · ${a} · keskimäärin ${Ro(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Nv({ store: r, s: a, locked: u, changed: c }) {
  const [d, h] = F.useState(""), p = F.useRef(null), { recent: m, sessions: S, stats: $ } = r.data, k = _i(a), C = nf(a), A = [...new Set(m.map((N) => N.mode))].map((N) => {
    const M = m.filter((K) => K.mode === N);
    return { mode: N, ...jo(M), last: Math.max(...M.map((K) => K.at)) };
  }).sort((N, M) => M.last - N.last), O = Xd($).filter((N) => !N.guided && N.mode === a.mode && N.input === k && N.check === C && N.stat.attempts >= 3).map((N) => ({ ...N, score: Oo(N.stat), text: Rf(N.item, a.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, M) => N.score - M.score).slice(0, 5), D = Xd($).reduce((N, M) => N + M.stat.attempts, 0);
  function w() {
    const N = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), M = URL.createObjectURL(N), K = document.createElement("a");
    K.href = M, K.download = "musiikin-kartta-harjoittelu.json", K.click(), setTimeout(() => URL.revokeObjectURL(M), 1e3);
  }
  async function E(N) {
    if (N)
      try {
        const M = await N.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(M), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        D,
        " vastattua kysymystä · ",
        S.length,
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
        /* @__PURE__ */ s.jsx("tbody", { children: A.map((N) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: tr(N.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: N.count }),
          /* @__PURE__ */ s.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: N.guided }),
          /* @__PURE__ */ s.jsx("td", { children: Ro(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    O.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        tr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: O.map((N) => /* @__PURE__ */ s.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(Xr(N.stat) * 100),
        " % heti oikein · ",
        Ro(Zr(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: D ? `Harjoituksessa ${tr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        wv[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(Hm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: $, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      S.length ? /* @__PURE__ */ s.jsx("ul", { children: S.slice(-10).reverse().map((N) => /* @__PURE__ */ s.jsx("li", { children: Ev(N) }, N.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (N) => {
          E(N.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u || !D, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ s.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function Cv() {
  try {
    return new Nd(localStorage);
  } catch {
    return new Nd();
  }
}
const Zd = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), _v = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Tv = [0, 2, 4, 5, 7, 9, 11];
function Mv(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Pv() {
  const [r] = F.useState(Cv), [a, u] = F.useState(() => Om(location.search, r.data.settings)), [, c] = F.useReducer((L) => L + 1, 0), d = F.useRef(null), h = F.useRef(new Ep()), p = F.useRef(new Fo()), m = F.useRef(0), S = F.useRef(), $ = F.useRef(), k = F.useRef(null), C = F.useRef(0), A = F.useRef(null), O = F.useRef(a);
  O.current = a;
  const [D, w] = F.useState({ phase: "off", purpose: "none" }), E = F.useRef(D), z = (L) => {
    E.current = L, w(L);
  }, [N, M] = F.useState(null), [K, J] = F.useState(null), [q, T] = F.useState(null), [V, ee] = F.useState(0), [le, _e] = F.useState([]), [ne, oe] = F.useState(!1), [Se, U] = F.useState(!1), [ue, re] = F.useState(""), [Y, te] = F.useState("info"), [Z, g] = F.useState(""), [b, ke] = F.useState(0), [Ee, W] = F.useState([]), [se, j] = F.useState([]), [B, I] = F.useState(null), [ie, pe] = F.useState(!1), [de, ge] = F.useState(""), [xe, Ae] = F.useState(""), [Te, Le] = F.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : wf(L.get("kappale")) ? "songs" : null;
  }), Je = () => {
    op().then(_e).catch(() => {
    });
  };
  function Be() {
    clearTimeout($.current), k.current = null, pe(!1);
  }
  function We() {
    M(null), J(null), T(null);
  }
  function Ke() {
    h.current.stop(), Be(), z({ phase: "off", purpose: "none" }), We();
  }
  async function gt(L) {
    if (h.current.active && E.current.phase === "on")
      return Be(), z({ ...E.current, purpose: L }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: L }), We();
    try {
      const fe = await h.current.start(O.current.device, {
        ...Zd(O.current),
        onFrame: (we) => Mt.current.frame(we),
        onStableNote: (we) => Mt.current.stable(we)
      }, () => Mt.current.lost());
      return fe ? (z({ phase: "on", purpose: L, info: fe }), Je(), !0) : !1;
    } catch (fe) {
      return z({ phase: "error", purpose: "none", error: wp(fe) }), !1;
    }
  }
  function Xe(L) {
    k.current?.push(L.rms);
    const fe = performance.now();
    fe - C.current < 66 || (C.current = fe, M(L), ee(fe), L.midi !== void 0 && L.frequency !== void 0 && J({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: fe }));
  }
  function ze(L) {
    E.current.purpose === "test" ? T(L) : E.current.purpose === "round" && Re(L.midi, "mic", void 0, L.heldMs);
  }
  function nt() {
    const L = E.current.purpose === "round";
    Be(), We(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    L && fe && ["active", "feedback", "paused"].includes(fe.phase) && (ct(), U(!1), fe.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Mt = F.useRef({ frame: Xe, stable: ze, lost: nt });
  Mt.current = { frame: Xe, stable: ze, lost: nt };
  function Gt(L) {
    const fe = ga(L), we = fe.device !== O.current.device;
    O.current = fe, u(fe), r.settings(fe), g(""), h.current.active && (we && E.current.purpose === "test" ? (Ke(), gt("test")) : h.current.setOptions(Zd(fe)));
  }
  function zt(L) {
    Ae(""), d.current = null, Le(L);
  }
  function sn() {
    ge(""), gt("test");
  }
  function Wt() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (Be(), k.current = [], pe(!0), ge("Mitataan taustakohinaa kolme sekuntia. Älä soita."), $.current = setTimeout(() => {
      const L = k.current ?? [];
      if (Be(), L.length < 10) {
        ge("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: we, loud: Jt } = Np(L);
      Gt({ ...O.current, minRms: fe }), ge(`Taustakohina on ${Math.round(lr(we))} dB ja äänikynnys nyt ${Math.round(lr(fe))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    m.current++, clearTimeout(S.current), p.current.stop();
  }
  function Dn(L, fe) {
    if (!L.results.length) return;
    const we = jo(L.results);
    r.session({
      id: L.id,
      mode: L.settings.mode,
      count: we.count,
      first: we.first,
      ms: we.ms,
      solo: we.solo,
      soloFirst: we.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: fe
    });
  }
  async function je(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    ct();
    const fe = m.current;
    L.pause(), h.current.pause(), U(!0), te("info"), re("Kuuntele…"), c();
    try {
      await p.current.play(L.question.sound);
    } catch {
      fe === m.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== L || (L.resume(), h.current.resume(), U(!1), re(""), c());
  }
  async function Qt(L) {
    W([]), j([]), I(null), g(""), ke(L.hintLevel), h.current.rearm(), te("info"), re(""), c(), L.question?.sound.length && await je(L);
  }
  async function Me() {
    const L = O.current, fe = go(L);
    if (fe) {
      g(fe);
      return;
    }
    ct();
    const we = m.current;
    if (g(""), ge(""), Ae(""), da(L)) {
      oe(!0);
      const lt = await gt("round");
      if (we !== m.current) return;
      if (oe(!1), !lt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && Ke();
    const Jt = new ep(L, () => r.data.stats, (lt) => r.record(lt));
    try {
      Jt.start();
    } catch (lt) {
      E.current.purpose === "round" && Ke(), g(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => A.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Qt(Jt);
  }
  function $e() {
    ct(), oe(!1), Ke();
  }
  function Re(L, fe, we, Jt = 0) {
    const lt = d.current, ci = lt?.question;
    if (!lt || !ci || lt.phase !== "active") return;
    const Vn = lt.answer(L, fe, we, Jt);
    if (Vn !== "ignored") {
      if (Vn === "candidate")
        I(L), te("bad"), re(Sv(lt.settings, ci, L));
      else if (Vn === "wrong")
        we ? W((di) => [...di, we]) : j((di) => [...di, L]), te("bad"), re(jv(lt.settings, ci, fe, L, we));
      else if (I(null), te("good"), re(xv(lt.settings, ci, fe, L, we)), Dn(lt, !1), lt.settings.advance) {
        const di = m.current;
        S.current = setTimeout(() => {
          di === m.current && Qe();
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
    ct(), U(!1), oe(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && Ke();
    const fe = d.current;
    fe && (fe.stop(), Dn(fe, L)), I(null), ke(0), W([]), j([]), g(""), Ae(L ? "complete" : "stopped"), te("info"), re(""), c();
  }
  function Yt() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    ct(), U(!1), L.pause();
    const fe = E.current.purpose === "round";
    fe && Ke(), te("info"), re(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function xt() {
    const L = d.current;
    if (!L || L.phase !== "paused" || Se) return;
    ct();
    const fe = m.current;
    if (g(""), da(L.settings)) {
      oe(!0);
      const we = await gt("round");
      if (fe !== m.current) return;
      if (oe(!1), !we) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), te("info"), re(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await je(L));
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
      L && ["active", "feedback"].includes(L.phase) || Se ? Yt() : E.current.phase !== "off" && E.current.phase !== "error" && (ct(), oe(!1), Ke());
    },
    restored: () => {
      oe(!1), U(!1), z({ phase: "off", purpose: "none" }), We(), c();
    }
  }, F.useEffect(() => {
    Je();
    const L = () => Je();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const fe = () => {
      m.current++, clearTimeout(S.current), clearTimeout($.current), h.current.stop(), p.current.stop(), Sp(), d.current?.pause();
    }, we = () => {
      document.hidden && mn.current.hidden();
    }, Jt = (lt) => {
      lt.persisted && mn.current.restored();
    };
    return document.addEventListener("visibilitychange", we), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Jt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", we), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const pn = F.useRef(null), zn = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${Se}`;
  F.useEffect(() => {
    const L = d.current, fe = A.current, we = document.activeElement;
    !L || !fe || !(we === document.body || fe.contains(we)) || (L.phase === "feedback" ? pn.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !Se && (we === document.body || we === pn.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [zn]);
  const be = d.current, it = !!be && ["active", "paused", "feedback"].includes(be.phase), Ye = it ? be.settings : a, pt = it ? be.question : void 0, Pt = !!pt && !!be?.answered, vn = it && be.phase === "paused" && !Se && !Pt, kn = it && be.phase === "active" && !Se, cr = it ? null : go(a), Nn = it || ne, ui = Ti(Ye), Mi = Gm(Ye), Cn = pt && !Pt ? b : 0, dr = pt ? qm(Ye, pt, Pt ? 2 : Cn) : { marks: [], text: "" }, ts = [...new Map([...dr.marks, ...Pt ? [] : Ee.map((L) => ({ ...L, label: Fe(L.midi, Ye.flats), kind: "wrong" }))].map((L) => [Ge(L), L])).values()], Na = it && da(Ye), _n = !!pt && !vn && (pt.choices === "position" || ts.length > 0), jt = be ? jo(be.results) : null, ns = !be || Ye.hints !== "fade" ? "" : be.index <= 3 ? " · vastaus näkyy" : be.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", is = be && !it ? be.results.filter((L) => L.errors > 0 || L.hint) : [], [rs, ss] = Mv(Ye), Tn = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ s.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ s.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Mn = r.data.notice === "hints-default" && /* @__PURE__ */ s.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !it && Te === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(np, { onSelect: zt })
  ] }) : !it && Te === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(Rp, { onBack: () => Le(null) })
  ] }) : !it && Te === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(Lp, { onBack: () => Le(null) })
  ] }) : !it && Te === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(bp, { onBack: () => Le(null) })
  ] }) : !it && Te === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx(hv, { onBack: () => Le(null) })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Tn,
    Mn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: rs, children: [
      "Lue tämän harjoituksen teoria: ",
      ss,
      " →"
    ] }) }),
    Te !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        it && qe(), Le(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: Te === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: Te === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    it ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: tr(Ye.mode) }),
      " · ",
      Td(Ye)
    ] }) : Te === "legacy" ? /* @__PURE__ */ s.jsx(Md, { s: a, change: Gt, locked: Nn, problem: cr }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(Md, { s: a, change: Gt, locked: Nn, problem: cr })
    ] }),
    !it && (Te === "legacy" || da(a)) && /* @__PURE__ */ s.jsx(
      vv,
      {
        mic: D,
        frame: N,
        heard: K,
        accepted: q,
        now: V,
        s: a,
        change: Gt,
        devices: le,
        locked: ne,
        calibrating: ie,
        calibration: de,
        onTest: sn,
        onStop: Ke,
        onCalibrate: Wt
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: A, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: tr(Ye.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: it ? `Kysymys ${be.index}${be.total ? " / " + be.total : " · vapaa harjoittelu"} · ${wa[Ye.hints].title}${ns}${be.phase === "paused" && !Se ? " · tauolla" : ""}` : xe === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !it && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
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
              /* @__PURE__ */ s.jsx("dd", { children: _v(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          is.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(is.map((L) => Rf(L.item, a.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ s.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: Td(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: ne ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: $e, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!cr, onClick: () => {
          Me();
        }, children: be?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !be && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      it && pt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: vn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: vn ? "Kysymys palaa näkyviin, kun jatkat." : Se ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : gv(Ye, pt) }),
        be.hintLevel > 0 && !Pt && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ye.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Na && /* @__PURE__ */ s.jsx(pv, { mic: D, frame: N, heard: K, s: Ye, now: V }),
        pt.choices === "note" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ye.accidentals ? Array.from({ length: 12 }, (L, fe) => fe) : Tv).map((L) => /* @__PURE__ */ s.jsx("button", { type: "button", className: se.includes(L) ? "wrong" : Pt && L === pt.midi % 12 ? "right" : "", disabled: !kn || se.includes(L), onClick: () => Re(L, "note"), children: Fe(L, Ye.flats) }, L)) }),
        pt.choices === "degree" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ye.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ye.scale]) : Ni[Ye.chord].tones).map(([L, fe]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: se.includes(L) ? "wrong" : Pt && L === pt.interval ? "right" : "", disabled: !kn || se.includes(L), onClick: () => Re(L, "degree"), children: fe }, L)) }),
        _n && /* @__PURE__ */ s.jsx(
          ar,
          {
            area: Mi,
            marks: ts,
            disabled: !kn || pt.choices !== "position" || Ye.input === "mic",
            onAnswer: (L) => Re(L.midi, "board", L),
            caption: ui.fixed === "shape" ? `${Ye.shape}-muodon alue` : ui.fixed === "box" ? `Boksin ${Ye.box} alue` : "Otelauta"
          }
        ),
        !Pt && !vn && Cn > 0 && dr.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: dr.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${Y}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        B !== null && be.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            be.confirmWrong(), I(null), re("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          be.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: pn, onClick: () => {
            Qe();
          }, children: be.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          be.phase === "active" && !Pt && !Se && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            Cn === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(Math.max(1, be.hintLevel)), children: be.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Cn === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(2), children: "Näytä vastaus" }),
            Cn > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => ke(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !kn, onClick: () => {
            je(be);
          }, children: "Kuuntele uudelleen" }),
          be.phase === "paused" && !Se ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: ne, onClick: () => {
            xt();
          }, children: ne ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Yt, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => qe(), children: "Lopeta harjoitus" })
        ] }),
        be.phase === "feedback" && Ye.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !it && Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z })
    ] }),
    !it && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: Fm(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(Nv, { store: r, s: a, locked: Nn, changed: () => {
        const L = ga(r.data.settings);
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
_m.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx(Pv, {}));
//# sourceMappingURL=app.js.map
