function Fm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var fo = { exports: {} }, Wr = {}, ho = { exports: {} }, $e = {};
var gd;
function Im() {
  if (gd) return $e;
  gd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, w = {};
  function N(g, T, ae) {
    this.props = g, this.context = T, this.refs = w, this.updater = ae || A;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(g, T) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, T, "setState");
  }, N.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = N.prototype;
  function S(g, T, ae) {
    this.props = g, this.context = T, this.refs = w, this.updater = ae || A;
  }
  var $ = S.prototype = new z();
  $.constructor = S, I($, N.prototype), $.isPureReactComponent = !0;
  var V = Array.isArray, J = Object.prototype.hasOwnProperty, U = { current: null }, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(g, T, ae) {
    var xe, Se = {}, G = null, H = null;
    if (T != null) for (xe in T.ref !== void 0 && (H = T.ref), T.key !== void 0 && (G = "" + T.key), T) J.call(T, xe) && !_.hasOwnProperty(xe) && (Se[xe] = T[xe]);
    var q = arguments.length - 2;
    if (q === 1) Se.children = ae;
    else if (1 < q) {
      for (var E = Array(q), X = 0; X < q; X++) E[X] = arguments[X + 2];
      Se.children = E;
    }
    if (g && g.defaultProps) for (xe in q = g.defaultProps, q) Se[xe] === void 0 && (Se[xe] = q[xe]);
    return { $$typeof: s, type: g, key: G, ref: H, props: Se, _owner: U.current };
  }
  function ne(g, T) {
    return { $$typeof: s, type: g.type, key: T, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function ie(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function ge(g) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ae) {
      return T[ae];
    });
  }
  var Te = /\/+/g;
  function B(g, T) {
    return typeof g == "object" && g !== null && g.key != null ? ge("" + g.key) : T.toString(36);
  }
  function re(g, T, ae, xe, Se) {
    var G = typeof g;
    (G === "undefined" || G === "boolean") && (g = null);
    var H = !1;
    if (g === null) H = !0;
    else switch (G) {
      case "string":
      case "number":
        H = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case s:
          case a:
            H = !0;
        }
    }
    if (H) return H = g, Se = Se(H), g = xe === "" ? "." + B(H, 0) : xe, V(Se) ? (ae = "", g != null && (ae = g.replace(Te, "$&/") + "/"), re(Se, T, ae, "", function(X) {
      return X;
    })) : Se != null && (ie(Se) && (Se = ne(Se, ae + (!Se.key || H && H.key === Se.key ? "" : ("" + Se.key).replace(Te, "$&/") + "/") + g)), T.push(Se)), 1;
    if (H = 0, xe = xe === "" ? "." : xe + ":", V(g)) for (var q = 0; q < g.length; q++) {
      G = g[q];
      var E = xe + B(G, q);
      H += re(G, T, ae, E, Se);
    }
    else if (E = M(g), typeof E == "function") for (g = E.call(g), q = 0; !(G = g.next()).done; ) G = G.value, E = xe + B(G, q++), H += re(G, T, ae, E, Se);
    else if (G === "object") throw T = String(g), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function K(g, T, ae) {
    if (g == null) return g;
    var xe = [], Se = 0;
    return re(g, xe, "", "", function(G) {
      return T.call(ae, G, Se++);
    }), xe;
  }
  function oe(g) {
    if (g._status === -1) {
      var T = g._result;
      T = T(), T.then(function(ae) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ae);
      }, function(ae) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ae);
      }), g._status === -1 && (g._status = 0, g._result = T);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var se = { current: null }, W = { transition: null }, ue = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: W, ReactCurrentOwner: U };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $e.Children = { map: K, forEach: function(g, T, ae) {
    K(g, function() {
      T.apply(this, arguments);
    }, ae);
  }, count: function(g) {
    var T = 0;
    return K(g, function() {
      T++;
    }), T;
  }, toArray: function(g) {
    return K(g, function(T) {
      return T;
    }) || [];
  }, only: function(g) {
    if (!ie(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, $e.Component = N, $e.Fragment = o, $e.Profiler = d, $e.PureComponent = S, $e.StrictMode = c, $e.Suspense = x, $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, $e.act = ee, $e.cloneElement = function(g, T, ae) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var xe = I({}, g.props), Se = g.key, G = g.ref, H = g._owner;
    if (T != null) {
      if (T.ref !== void 0 && (G = T.ref, H = U.current), T.key !== void 0 && (Se = "" + T.key), g.type && g.type.defaultProps) var q = g.type.defaultProps;
      for (E in T) J.call(T, E) && !_.hasOwnProperty(E) && (xe[E] = T[E] === void 0 && q !== void 0 ? q[E] : T[E]);
    }
    var E = arguments.length - 2;
    if (E === 1) xe.children = ae;
    else if (1 < E) {
      q = Array(E);
      for (var X = 0; X < E; X++) q[X] = arguments[X + 2];
      xe.children = q;
    }
    return { $$typeof: s, type: g.type, key: Se, ref: G, props: xe, _owner: H };
  }, $e.createContext = function(g) {
    return g = { $$typeof: p, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: f, _context: g }, g.Consumer = g;
  }, $e.createElement = F, $e.createFactory = function(g) {
    var T = F.bind(null, g);
    return T.type = g, T;
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(g) {
    return { $$typeof: m, render: g };
  }, $e.isValidElement = ie, $e.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: oe };
  }, $e.memo = function(g, T) {
    return { $$typeof: R, type: g, compare: T === void 0 ? null : T };
  }, $e.startTransition = function(g) {
    var T = W.transition;
    W.transition = {};
    try {
      g();
    } finally {
      W.transition = T;
    }
  }, $e.unstable_act = ee, $e.useCallback = function(g, T) {
    return se.current.useCallback(g, T);
  }, $e.useContext = function(g) {
    return se.current.useContext(g);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(g) {
    return se.current.useDeferredValue(g);
  }, $e.useEffect = function(g, T) {
    return se.current.useEffect(g, T);
  }, $e.useId = function() {
    return se.current.useId();
  }, $e.useImperativeHandle = function(g, T, ae) {
    return se.current.useImperativeHandle(g, T, ae);
  }, $e.useInsertionEffect = function(g, T) {
    return se.current.useInsertionEffect(g, T);
  }, $e.useLayoutEffect = function(g, T) {
    return se.current.useLayoutEffect(g, T);
  }, $e.useMemo = function(g, T) {
    return se.current.useMemo(g, T);
  }, $e.useReducer = function(g, T, ae) {
    return se.current.useReducer(g, T, ae);
  }, $e.useRef = function(g) {
    return se.current.useRef(g);
  }, $e.useState = function(g) {
    return se.current.useState(g);
  }, $e.useSyncExternalStore = function(g, T, ae) {
    return se.current.useSyncExternalStore(g, T, ae);
  }, $e.useTransition = function() {
    return se.current.useTransition();
  }, $e.version = "18.3.1", $e;
}
var jd;
function Ko() {
  return jd || (jd = 1, ho.exports = Im()), ho.exports;
}
var xd;
function Dm() {
  if (xd) return Wr;
  xd = 1;
  var s = Ko(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, x, R) {
    var v, C = {}, M = null, A = null;
    R !== void 0 && (M = "" + R), x.key !== void 0 && (M = "" + x.key), x.ref !== void 0 && (A = x.ref);
    for (v in x) c.call(x, v) && !f.hasOwnProperty(v) && (C[v] = x[v]);
    if (m && m.defaultProps) for (v in x = m.defaultProps, x) C[v] === void 0 && (C[v] = x[v]);
    return { $$typeof: a, type: m, key: M, ref: A, props: C, _owner: d.current };
  }
  return Wr.Fragment = o, Wr.jsx = p, Wr.jsxs = p, Wr;
}
var Sd;
function zm() {
  return Sd || (Sd = 1, fo.exports = Dm()), fo.exports;
}
var r = zm(), L = Ko(), ha = {}, mo = { exports: {} }, Dt = {}, po = { exports: {} }, vo = {};
var wd;
function Vm() {
  return wd || (wd = 1, (function(s) {
    function a(W, ue) {
      var ee = W.length;
      W.push(ue);
      e: for (; 0 < ee; ) {
        var g = ee - 1 >>> 1, T = W[g];
        if (0 < d(T, ue)) W[g] = ue, W[ee] = T, ee = g;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ue = W[0], ee = W.pop();
      if (ee !== ue) {
        W[0] = ee;
        e: for (var g = 0, T = W.length, ae = T >>> 1; g < ae; ) {
          var xe = 2 * (g + 1) - 1, Se = W[xe], G = xe + 1, H = W[G];
          if (0 > d(Se, ee)) G < T && 0 > d(H, Se) ? (W[g] = H, W[G] = ee, g = G) : (W[g] = Se, W[xe] = ee, g = xe);
          else if (G < T && 0 > d(H, ee)) W[g] = H, W[G] = ee, g = G;
          else break e;
        }
      }
      return ue;
    }
    function d(W, ue) {
      var ee = W.sortIndex - ue.sortIndex;
      return ee !== 0 ? ee : W.id - ue.id;
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
    var x = [], R = [], v = 1, C = null, M = 3, A = !1, I = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(W) {
      for (var ue = o(R); ue !== null; ) {
        if (ue.callback === null) c(R);
        else if (ue.startTime <= W) c(R), ue.sortIndex = ue.expirationTime, a(x, ue);
        else break;
        ue = o(R);
      }
    }
    function V(W) {
      if (w = !1, $(W), !I) if (o(x) !== null) I = !0, oe(J);
      else {
        var ue = o(R);
        ue !== null && se(V, ue.startTime - W);
      }
    }
    function J(W, ue) {
      I = !1, w && (w = !1, z(F), F = -1), A = !0;
      var ee = M;
      try {
        for ($(ue), C = o(x); C !== null && (!(C.expirationTime > ue) || W && !ge()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, M = C.priorityLevel;
            var T = g(C.expirationTime <= ue);
            ue = s.unstable_now(), typeof T == "function" ? C.callback = T : C === o(x) && c(x), $(ue);
          } else c(x);
          C = o(x);
        }
        if (C !== null) var ae = !0;
        else {
          var xe = o(R);
          xe !== null && se(V, xe.startTime - ue), ae = !1;
        }
        return ae;
      } finally {
        C = null, M = ee, A = !1;
      }
    }
    var U = !1, _ = null, F = -1, ne = 5, ie = -1;
    function ge() {
      return !(s.unstable_now() - ie < ne);
    }
    function Te() {
      if (_ !== null) {
        var W = s.unstable_now();
        ie = W;
        var ue = !0;
        try {
          ue = _(!0, W);
        } finally {
          ue ? B() : (U = !1, _ = null);
        }
      } else U = !1;
    }
    var B;
    if (typeof S == "function") B = function() {
      S(Te);
    };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), K = re.port2;
      re.port1.onmessage = Te, B = function() {
        K.postMessage(null);
      };
    } else B = function() {
      N(Te, 0);
    };
    function oe(W) {
      _ = W, U || (U = !0, B());
    }
    function se(W, ue) {
      F = N(function() {
        W(s.unstable_now());
      }, ue);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      I || A || (I = !0, oe(J));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(x);
    }, s.unstable_next = function(W) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = M;
      }
      var ee = M;
      M = ue;
      try {
        return W();
      } finally {
        M = ee;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(W, ue) {
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
      var ee = M;
      M = W;
      try {
        return ue();
      } finally {
        M = ee;
      }
    }, s.unstable_scheduleCallback = function(W, ue, ee) {
      var g = s.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? g + ee : g) : ee = g, W) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = ee + T, W = { id: v++, callback: ue, priorityLevel: W, startTime: ee, expirationTime: T, sortIndex: -1 }, ee > g ? (W.sortIndex = ee, a(R, W), o(x) === null && W === o(R) && (w ? (z(F), F = -1) : w = !0, se(V, ee - g))) : (W.sortIndex = T, a(x, W), I || A || (I = !0, oe(J))), W;
    }, s.unstable_shouldYield = ge, s.unstable_wrapCallback = function(W) {
      var ue = M;
      return function() {
        var ee = M;
        M = ue;
        try {
          return W.apply(this, arguments);
        } finally {
          M = ee;
        }
      };
    };
  })(vo)), vo;
}
var Nd;
function Bm() {
  return Nd || (Nd = 1, po.exports = Vm()), po.exports;
}
var Ed;
function Km() {
  if (Ed) return Dt;
  Ed = 1;
  var s = Ko(), a = Bm();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, C = {};
  function M(e) {
    return x.call(C, e) ? !0 : x.call(v, e) ? !1 : R.test(e) ? C[e] = !0 : (v[e] = !0, !1);
  }
  function A(e, t, n, i) {
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
  function I(e, t, n, i) {
    if (t === null || typeof t > "u" || A(e, t, n, i)) return !0;
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
  function w(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
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
  function S(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      S
    );
    N[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, S);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, S);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, i) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, n, l, i) && (n = null), i || l === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var V = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), ie = /* @__PURE__ */ Symbol.for("react.provider"), ge = /* @__PURE__ */ Symbol.for("react.context"), Te = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), re = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, g;
  function T(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var ae = !1;
  function xe(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
        } catch (O) {
          var i = O;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (O) {
          i = O;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (O) {
          i = O;
        }
        e();
      }
    } catch (O) {
      if (O && i && typeof O.stack == "string") {
        for (var l = O.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var y = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = xe(e.type, !1), e;
      case 11:
        return e = xe(e.type.render, !1), e;
      case 1:
        return e = xe(e.type, !0), e;
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
      case U:
        return "Portal";
      case ne:
        return "Profiler";
      case F:
        return "StrictMode";
      case B:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ge:
        return (e.displayName || "Context") + ".Consumer";
      case ie:
        return (e._context.displayName || "Context") + ".Provider";
      case Te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case K:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function H(e) {
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
        return t === F ? "StrictMode" : "Mode";
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
  function q(e) {
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
  function E(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = E(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function le(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function ce(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = E(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ve(e, t) {
    var n = t.checked;
    return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _e(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function Oe(e, t) {
    _e(e, t);
    var n = q(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? He(e, t.type, n) : t.hasOwnProperty("defaultValue") && He(e, t.type, q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function He(e, t, n) {
    (t !== "number" || fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Qe = Array.isArray;
  function Ue(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + q(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ze(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Qe(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: q(n) };
  }
  function Ve(e, t) {
    var n = q(t.value), i = q(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
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
  var dt = {
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
  Object.keys(dt).forEach(function(e) {
    Dn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), dt[t] = dt[e];
    });
  });
  function we(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dt.hasOwnProperty(e) && dt[e] ? ("" + t).trim() : t + "px";
  }
  function Qt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = we(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Me = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Me[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var Ye = null;
  function et(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yt = null, jt = null, Vt = null;
  function mn(e) {
    if (e = br(e)) {
      if (typeof Yt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = _s(t), Yt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    jt ? Vt ? Vt.push(e) : Vt = [e] : jt = e;
  }
  function zn() {
    if (jt) {
      var e = jt, t = Vt;
      if (Vt = jt = null, mn(e), t) for (e = 0; e < t.length; e++) mn(t[e]);
    }
  }
  function Ie(e, t) {
    return e(t);
  }
  function rt() {
  }
  var Je = !1;
  function pt(e, t, n) {
    if (Je) return e(t, n);
    Je = !0;
    try {
      return Ie(e, t, n);
    } finally {
      Je = !1, (jt !== null || Vt !== null) && (rt(), zn());
    }
  }
  function Pt(e, t) {
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
  var vn = !1;
  if (m) try {
    var kn = {};
    Object.defineProperty(kn, "passive", { get: function() {
      vn = !0;
    } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    vn = !1;
  }
  function fr(e, t, n, i, l, u, h, k, y) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var En = !1, ci = null, Ai = !1, Cn = null, hr = { onError: function(e) {
    En = !0, ci = e;
  } };
  function rs(e, t, n, i, l, u, h, k, y) {
    En = !1, ci = null, fr.apply(hr, arguments);
  }
  function Aa(e, t, n, i, l, u, h, k, y) {
    if (rs.apply(this, arguments), En) {
      if (En) {
        var O = ci;
        En = !1, ci = null;
      } else throw Error(o(198));
      Ai || (Ai = !0, Cn = O);
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
  function xt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ss(e) {
    if (Tn(e) !== e) throw Error(o(188));
  }
  function as(e) {
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
          if (u === n) return ss(l), e;
          if (u === i) return ss(l), t;
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
  function ls(e) {
    return e = as(e), e !== null ? os(e) : null;
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
  var _n = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, D = a.unstable_shouldYield, me = a.unstable_requestPaint, Ne = a.unstable_now, Jt = a.unstable_getCurrentPriorityLevel, ot = a.unstable_ImmediatePriority, di = a.unstable_UserBlockingPriority, Vn = a.unstable_NormalPriority, fi = a.unstable_LowPriority, Yo = a.unstable_IdlePriority, us = null, yn = null;
  function Zf(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : th, qf = Math.log, eh = Math.LN2;
  function th(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qf(e) / eh | 0) | 0;
  }
  var cs = 64, ds = 4194304;
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
  function fs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = mr(k) : (u &= h, u !== 0 && (i = mr(u)));
    } else h = n & ~l, h !== 0 ? i = mr(h) : u !== 0 && (i = mr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - an(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function nh(e, t) {
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
  function ih(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - an(u), k = 1 << h, y = l[h];
      y === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = nh(k, t)) : y <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function ba(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = cs;
    return cs <<= 1, (cs & 4194240) === 0 && (cs = 64), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function rh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - an(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function La(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - an(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Ge = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, Oa, qo, eu, tu, $a = !1, hs = [], Bn = null, Kn = null, Hn = null, vr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Un = [], sh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nu(e, t) {
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
        vr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kr.delete(t.pointerId);
    }
  }
  function yr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = br(t), t !== null && Oa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ah(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = yr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = yr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = yr(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return vr.set(u, yr(vr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, kr.set(u, yr(kr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function iu(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xt(n), t !== null) {
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
  function ms(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ye = i, n.target.dispatchEvent(i), Ye = null;
      } else return t = br(n), t !== null && Oa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    ms(e) && n.delete(t);
  }
  function lh() {
    $a = !1, Bn !== null && ms(Bn) && (Bn = null), Kn !== null && ms(Kn) && (Kn = null), Hn !== null && ms(Hn) && (Hn = null), vr.forEach(ru), kr.forEach(ru);
  }
  function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $a || ($a = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, lh)));
  }
  function jr(e) {
    function t(l) {
      return gr(l, e);
    }
    if (0 < hs.length) {
      gr(hs[0], e);
      for (var n = 1; n < hs.length; n++) {
        var i = hs[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && gr(Bn, e), Kn !== null && gr(Kn, e), Hn !== null && gr(Hn, e), vr.forEach(t), kr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) iu(n), n.blockedOn === null && Un.shift();
  }
  var bi = V.ReactCurrentBatchConfig, ps = !0;
  function oh(e, t, n, i) {
    var l = Ge, u = bi.transition;
    bi.transition = null;
    try {
      Ge = 1, Fa(e, t, n, i);
    } finally {
      Ge = l, bi.transition = u;
    }
  }
  function uh(e, t, n, i) {
    var l = Ge, u = bi.transition;
    bi.transition = null;
    try {
      Ge = 4, Fa(e, t, n, i);
    } finally {
      Ge = l, bi.transition = u;
    }
  }
  function Fa(e, t, n, i) {
    if (ps) {
      var l = Ia(e, t, n, i);
      if (l === null) tl(e, t, i, vs, n), nu(e, i);
      else if (ah(l, e, t, n, i)) i.stopPropagation();
      else if (nu(e, i), t & 4 && -1 < sh.indexOf(e)) {
        for (; l !== null; ) {
          var u = br(l);
          if (u !== null && Zo(u), u = Ia(e, t, n, i), u === null && tl(e, t, i, vs, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else tl(e, t, i, null, n);
    }
  }
  var vs = null;
  function Ia(e, t, n, i) {
    if (vs = null, e = et(i), e = hi(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return vs = e, null;
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
        switch (Jt()) {
          case ot:
            return 1;
          case di:
            return 4;
          case Vn:
          case fi:
            return 16;
          case Yo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Da = null, ks = null;
  function au() {
    if (ks) return ks;
    var e, t = Da, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return ks = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function ys(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function gs() {
    return !0;
  }
  function lu() {
    return !1;
  }
  function Bt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? gs : lu, this.isPropagationStopped = lu, this;
    }
    return ee(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gs);
    }, persist: function() {
    }, isPersistent: gs }), t;
  }
  var Ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, za = Bt(Ri), xr = ee({}, Ri, { view: 0, detail: 0 }), ch = Bt(xr), Va, Ba, Sr, js = ee({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Va = e.screenX - Sr.screenX, Ba = e.screenY - Sr.screenY) : Ba = Va = 0, Sr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ba;
  } }), ou = Bt(js), dh = ee({}, js, { dataTransfer: 0 }), fh = Bt(dh), hh = ee({}, xr, { relatedTarget: 0 }), Ka = Bt(hh), mh = ee({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = Bt(mh), vh = ee({}, Ri, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), kh = Bt(vh), yh = ee({}, Ri, { data: 0 }), uu = Bt(yh), gh = {
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
  }, jh = {
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
  }, xh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xh[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return Sh;
  }
  var wh = ee({}, xr, { key: function(e) {
    if (e.key) {
      var t = gh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ys(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? ys(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ys(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nh = Bt(wh), Eh = ee({}, js, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Bt(Eh), Ch = ee({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), Th = Bt(Ch), _h = ee({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mh = Bt(_h), Ph = ee({}, js, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ah = Bt(Ph), bh = [9, 13, 27, 32], Ua = m && "CompositionEvent" in window, wr = null;
  m && "documentMode" in document && (wr = document.documentMode);
  var Rh = m && "TextEvent" in window && !wr, du = m && (!Ua || wr && 8 < wr && 11 >= wr), fu = " ", hu = !1;
  function mu(e, t) {
    switch (e) {
      case "keyup":
        return bh.indexOf(t.keyCode) !== -1;
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
  function Lh(e, t) {
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
  function Oh(e, t) {
    if (Li) return e === "compositionend" || !Ua && mu(e, t) ? (e = au(), ks = Da = Gn = null, Li = !1, e) : null;
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
  var $h = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$h[e.type] : t === "textarea";
  }
  function ku(e, t, n, i) {
    pn(i), t = Es(t, "onChange"), 0 < t.length && (n = new za("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Er = null;
  function Fh(e) {
    Ou(e, 0);
  }
  function xs(e) {
    var t = Di(e);
    if (ce(t)) return e;
  }
  function Ih(e, t) {
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
    Nr && (Nr.detachEvent("onpropertychange", xu), Er = Nr = null);
  }
  function xu(e) {
    if (e.propertyName === "value" && xs(Er)) {
      var t = [];
      ku(t, Er, e, et(e)), pt(Fh, t);
    }
  }
  function Dh(e, t, n) {
    e === "focusin" ? (ju(), Nr = t, Er = n, Nr.attachEvent("onpropertychange", xu)) : e === "focusout" && ju();
  }
  function zh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xs(Er);
  }
  function Vh(e, t) {
    if (e === "click") return xs(t);
  }
  function Bh(e, t) {
    if (e === "input" || e === "change") return xs(t);
  }
  function Kh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : Kh;
  function Cr(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!x.call(t, l) || !ln(e[l], t[l])) return !1;
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
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Hh(e) {
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
  var Uh = m && "documentMode" in document && 11 >= document.documentMode, Oi = null, Ya = null, Tr = null, Ja = !1;
  function Cu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ja || Oi == null || Oi !== fe(i) || (i = Oi, "selectionStart" in i && Qa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Tr && Cr(Tr, i) || (Tr = i, i = Es(Ya, "onSelect"), 0 < i.length && (t = new za("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Oi)));
  }
  function Ss(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $i = { animationend: Ss("Animation", "AnimationEnd"), animationiteration: Ss("Animation", "AnimationIteration"), animationstart: Ss("Animation", "AnimationStart"), transitionend: Ss("Transition", "TransitionEnd") }, Xa = {}, Tu = {};
  m && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function ws(e) {
    if (Xa[e]) return Xa[e];
    if (!$i[e]) return e;
    var t = $i[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return Xa[e] = t[n];
    return e;
  }
  var _u = ws("animationend"), Mu = ws("animationiteration"), Pu = ws("animationstart"), Au = ws("transitionend"), bu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    bu.set(e, t), f(t, [e]);
  }
  for (var Za = 0; Za < Ru.length; Za++) {
    var qa = Ru[Za], Gh = qa.toLowerCase(), Wh = qa[0].toUpperCase() + qa.slice(1);
    Wn(Gh, "on" + Wh);
  }
  Wn(_u, "onAnimationEnd"), Wn(Mu, "onAnimationIteration"), Wn(Pu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Au, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
  function Lu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, Aa(i, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], y = k.instance, O = k.currentTarget;
          if (k = k.listener, y !== u && l.isPropagationStopped()) break e;
          Lu(l, k, O), u = y;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], y = k.instance, O = k.currentTarget, k = k.listener, y !== u && l.isPropagationStopped()) break e;
          Lu(l, k, O), u = y;
        }
      }
    }
    if (Ai) throw e = Cn, Ai = !1, Cn = null, e;
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
  var Ns = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(e) {
    if (!e[Ns]) {
      e[Ns] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Qh.has(n) || el(n, !1, e), el(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ns] || (t[Ns] = !0, el("selectionchange", !1, t));
    }
  }
  function $u(e, t, n, i) {
    switch (su(t)) {
      case 1:
        var l = oh;
        break;
      case 4:
        l = uh;
        break;
      default:
        l = Fa;
    }
    n = l.bind(null, t, n, e), l = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
          var y = h.tag;
          if ((y === 3 || y === 4) && (y = h.stateNode.containerInfo, y === l || y.nodeType === 8 && y.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = hi(k), h === null) return;
          if (y = h.tag, y === 5 || y === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    pt(function() {
      var O = u, Y = et(n), Z = [];
      e: {
        var Q = bu.get(e);
        if (Q !== void 0) {
          var de = za, pe = e;
          switch (e) {
            case "keypress":
              if (ys(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Nh;
              break;
            case "focusin":
              pe = "focus", de = Ka;
              break;
            case "focusout":
              pe = "blur", de = Ka;
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
              de = fh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Th;
              break;
            case _u:
            case Mu:
            case Pu:
              de = ph;
              break;
            case Au:
              de = Mh;
              break;
            case "scroll":
              de = ch;
              break;
            case "wheel":
              de = Ah;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = kh;
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
          var ye = (t & 4) !== 0, ct = !ye && e === "scroll", P = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var j = O, b; j !== null; ) {
            b = j;
            var te = b.stateNode;
            if (b.tag === 5 && te !== null && (b = te, P !== null && (te = Pt(j, P), te != null && ye.push(Pr(j, te, b)))), ct) break;
            j = j.return;
          }
          0 < ye.length && (Q = new de(Q, pe, null, n, Y), Z.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== Ye && (pe = n.relatedTarget || n.fromElement) && (hi(pe) || pe[Pn])) break e;
          if ((de || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (pe = n.relatedTarget || n.toElement, de = O, pe = pe ? hi(pe) : null, pe !== null && (ct = Tn(pe), pe !== ct || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (de = null, pe = O), de !== pe)) {
            if (ye = ou, te = "onMouseLeave", P = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (ye = cu, te = "onPointerLeave", P = "onPointerEnter", j = "pointer"), ct = de == null ? Q : Di(de), b = pe == null ? Q : Di(pe), Q = new ye(te, j + "leave", de, n, Y), Q.target = ct, Q.relatedTarget = b, te = null, hi(Y) === O && (ye = new ye(P, j + "enter", pe, n, Y), ye.target = b, ye.relatedTarget = ct, te = ye), ct = te, de && pe) t: {
              for (ye = de, P = pe, j = 0, b = ye; b; b = Fi(b)) j++;
              for (b = 0, te = P; te; te = Fi(te)) b++;
              for (; 0 < j - b; ) ye = Fi(ye), j--;
              for (; 0 < b - j; ) P = Fi(P), b--;
              for (; j--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = Fi(ye), P = Fi(P);
              }
              ye = null;
            }
            else ye = null;
            de !== null && Fu(Z, Q, de, ye, !1), pe !== null && ct !== null && Fu(Z, ct, pe, ye, !0);
          }
        }
        e: {
          if (Q = O ? Di(O) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var je = Ih;
          else if (vu(Q)) if (yu) je = Bh;
          else {
            je = zh;
            var Ee = Dh;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (je = Vh);
          if (je && (je = je(e, O))) {
            ku(Z, je, n, Y);
            break e;
          }
          Ee && Ee(e, Q, O), e === "focusout" && (Ee = Q._wrapperState) && Ee.controlled && Q.type === "number" && He(Q, "number", Q.value);
        }
        switch (Ee = O ? Di(O) : window, e) {
          case "focusin":
            (vu(Ee) || Ee.contentEditable === "true") && (Oi = Ee, Ya = O, Tr = null);
            break;
          case "focusout":
            Tr = Ya = Oi = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ja = !1, Cu(Z, n, Y);
            break;
          case "selectionchange":
            if (Uh) break;
          case "keydown":
          case "keyup":
            Cu(Z, n, Y);
        }
        var Ce;
        if (Ua) e: {
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
        else Li ? mu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (du && n.locale !== "ko" && (Li || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Li && (Ce = au()) : (Gn = Y, Da = "value" in Gn ? Gn.value : Gn.textContent, Li = !0)), Ee = Es(O, Pe), 0 < Ee.length && (Pe = new uu(Pe, e, null, n, Y), Z.push({ event: Pe, listeners: Ee }), Ce ? Pe.data = Ce : (Ce = pu(n), Ce !== null && (Pe.data = Ce)))), (Ce = Rh ? Lh(e, n) : Oh(e, n)) && (O = Es(O, "onBeforeInput"), 0 < O.length && (Y = new uu("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: Y, listeners: O }), Y.data = Ce));
      }
      Ou(Z, t);
    });
  }
  function Pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Es(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Pt(e, n), u != null && i.unshift(Pr(e, u, l)), u = Pt(e, t), u != null && i.push(Pr(e, u, l))), e = e.return;
    }
    return i;
  }
  function Fi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, y = k.alternate, O = k.stateNode;
      if (y !== null && y === i) break;
      k.tag === 5 && O !== null && (k = O, l ? (y = Pt(n, u), y != null && h.unshift(Pr(n, y, k))) : l || (y = Pt(n, u), y != null && h.push(Pr(n, y, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Yh = /\r\n?/g, Jh = /\u0000|\uFFFD/g;
  function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yh, `
`).replace(Jh, "");
  }
  function Cs(e, t, n) {
    if (t = Iu(t), Iu(e) !== t && n) throw Error(o(425));
  }
  function Ts() {
  }
  var nl = null, il = null;
  function rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sl = typeof setTimeout == "function" ? setTimeout : void 0, Xh = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, Zh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
    return Du.resolve(null).then(e).catch(qh);
  } : sl;
  function qh(e) {
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
          e.removeChild(l), jr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    jr(t);
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
  var Ii = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Ii, Ar = "__reactProps$" + Ii, Pn = "__reactContainer$" + Ii, ll = "__reactEvents$" + Ii, em = "__reactListeners$" + Ii, tm = "__reactHandles$" + Ii;
  function hi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
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
  function br(e) {
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Di(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _s(e) {
    return e[Ar] || null;
  }
  var ol = [], zi = -1;
  function Yn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > zi || (e.current = ol[zi], ol[zi] = null, zi--);
  }
  function qe(e, t) {
    zi++, ol[zi] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), Lt = Yn(!1), mi = Jn;
  function Vi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ms() {
    nt(Lt), nt(Et);
  }
  function Vu(e, t, n) {
    if (Et.current !== Jn) throw Error(o(168));
    qe(Et, t), qe(Lt, n);
  }
  function Bu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, H(e) || "Unknown", l));
    return ee({}, n, i);
  }
  function Ps(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, mi = Et.current, qe(Et, e), qe(Lt, Lt.current), !0;
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Bu(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, nt(Lt), nt(Et), qe(Et, e)) : nt(Lt), qe(Lt, n);
  }
  var An = null, As = !1, ul = !1;
  function Hu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function nm(e) {
    As = !0, Hu(e);
  }
  function Xn() {
    if (!ul && An !== null) {
      ul = !0;
      var e = 0, t = Ge;
      try {
        var n = An;
        for (Ge = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, As = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), _n(ot, Xn), l;
      } finally {
        Ge = t, ul = !1;
      }
    }
    return null;
  }
  var Bi = [], Ki = 0, bs = null, Rs = 0, Xt = [], Zt = 0, pi = null, bn = 1, Rn = "";
  function vi(e, t) {
    Bi[Ki++] = Rs, Bi[Ki++] = bs, bs = e, Rs = t;
  }
  function Uu(e, t, n) {
    Xt[Zt++] = bn, Xt[Zt++] = Rn, Xt[Zt++] = pi, pi = e;
    var i = bn;
    e = Rn;
    var l = 32 - an(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - an(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, bn = 1 << 32 - an(t) + l | n << l | i, Rn = u + e;
    } else bn = 1 << u | n << l | i, Rn = e;
  }
  function cl(e) {
    e.return !== null && (vi(e, 1), Uu(e, 1, 0));
  }
  function dl(e) {
    for (; e === bs; ) bs = Bi[--Ki], Bi[Ki] = null, Rs = Bi[--Ki], Bi[Ki] = null;
    for (; e === pi; ) pi = Xt[--Zt], Xt[Zt] = null, Rn = Xt[--Zt], Xt[Zt] = null, bn = Xt[--Zt], Xt[Zt] = null;
  }
  var Kt = null, Ht = null, st = !1, on = null;
  function Gu(e, t) {
    var n = nn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: bn, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function hl(e) {
    if (st) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!Wu(e, t)) {
          if (fl(e)) throw Error(o(418));
          t = Qn(n.nextSibling);
          var i = Kt;
          t && Wu(e, t) ? Gu(i, n) : (e.flags = e.flags & -4097 | 2, st = !1, Kt = e);
        }
      } else {
        if (fl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, st = !1, Kt = e;
      }
    }
  }
  function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function Ls(e) {
    if (e !== Kt) return !1;
    if (!st) return Qu(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps)), t && (t = Ht)) {
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
  function Yu() {
    for (var e = Ht; e; ) e = Qn(e.nextSibling);
  }
  function Hi() {
    Ht = Kt = null, st = !1;
  }
  function ml(e) {
    on === null ? on = [e] : on.push(e);
  }
  var im = V.ReactCurrentBatchConfig;
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
  function Os(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xu(e) {
    function t(P, j) {
      if (e) {
        var b = P.deletions;
        b === null ? (P.deletions = [j], P.flags |= 16) : b.push(j);
      }
    }
    function n(P, j) {
      if (!e) return null;
      for (; j !== null; ) t(P, j), j = j.sibling;
      return null;
    }
    function i(P, j) {
      for (P = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? P.set(j.key, j) : P.set(j.index, j), j = j.sibling;
      return P;
    }
    function l(P, j) {
      return P = si(P, j), P.index = 0, P.sibling = null, P;
    }
    function u(P, j, b) {
      return P.index = b, e ? (b = P.alternate, b !== null ? (b = b.index, b < j ? (P.flags |= 2, j) : b) : (P.flags |= 2, j)) : (P.flags |= 1048576, j);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, j, b, te) {
      return j === null || j.tag !== 6 ? (j = so(b, P.mode, te), j.return = P, j) : (j = l(j, b), j.return = P, j);
    }
    function y(P, j, b, te) {
      var je = b.type;
      return je === _ ? Y(P, j, b.props.children, te, b.key) : j !== null && (j.elementType === je || typeof je == "object" && je !== null && je.$$typeof === oe && Ju(je) === j.type) ? (te = l(j, b.props), te.ref = Rr(P, j, b), te.return = P, te) : (te = sa(b.type, b.key, b.props, null, P.mode, te), te.ref = Rr(P, j, b), te.return = P, te);
    }
    function O(P, j, b, te) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== b.containerInfo || j.stateNode.implementation !== b.implementation ? (j = ao(b, P.mode, te), j.return = P, j) : (j = l(j, b.children || []), j.return = P, j);
    }
    function Y(P, j, b, te, je) {
      return j === null || j.tag !== 7 ? (j = Ni(b, P.mode, te, je), j.return = P, j) : (j = l(j, b), j.return = P, j);
    }
    function Z(P, j, b) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return j = so("" + j, P.mode, b), j.return = P, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case J:
            return b = sa(j.type, j.key, j.props, null, P.mode, b), b.ref = Rr(P, null, j), b.return = P, b;
          case U:
            return j = ao(j, P.mode, b), j.return = P, j;
          case oe:
            var te = j._init;
            return Z(P, te(j._payload), b);
        }
        if (Qe(j) || ue(j)) return j = Ni(j, P.mode, b, null), j.return = P, j;
        Os(P, j);
      }
      return null;
    }
    function Q(P, j, b, te) {
      var je = j !== null ? j.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return je !== null ? null : k(P, j, "" + b, te);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            return b.key === je ? y(P, j, b, te) : null;
          case U:
            return b.key === je ? O(P, j, b, te) : null;
          case oe:
            return je = b._init, Q(
              P,
              j,
              je(b._payload),
              te
            );
        }
        if (Qe(b) || ue(b)) return je !== null ? null : Y(P, j, b, te, null);
        Os(P, b);
      }
      return null;
    }
    function de(P, j, b, te, je) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return P = P.get(b) || null, k(j, P, "" + te, je);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case J:
            return P = P.get(te.key === null ? b : te.key) || null, y(j, P, te, je);
          case U:
            return P = P.get(te.key === null ? b : te.key) || null, O(j, P, te, je);
          case oe:
            var Ee = te._init;
            return de(P, j, b, Ee(te._payload), je);
        }
        if (Qe(te) || ue(te)) return P = P.get(b) || null, Y(j, P, te, je, null);
        Os(j, te);
      }
      return null;
    }
    function pe(P, j, b, te) {
      for (var je = null, Ee = null, Ce = j, Pe = j = 0, yt = null; Ce !== null && Pe < b.length; Pe++) {
        Ce.index > Pe ? (yt = Ce, Ce = null) : yt = Ce.sibling;
        var Be = Q(P, Ce, b[Pe], te);
        if (Be === null) {
          Ce === null && (Ce = yt);
          break;
        }
        e && Ce && Be.alternate === null && t(P, Ce), j = u(Be, j, Pe), Ee === null ? je = Be : Ee.sibling = Be, Ee = Be, Ce = yt;
      }
      if (Pe === b.length) return n(P, Ce), st && vi(P, Pe), je;
      if (Ce === null) {
        for (; Pe < b.length; Pe++) Ce = Z(P, b[Pe], te), Ce !== null && (j = u(Ce, j, Pe), Ee === null ? je = Ce : Ee.sibling = Ce, Ee = Ce);
        return st && vi(P, Pe), je;
      }
      for (Ce = i(P, Ce); Pe < b.length; Pe++) yt = de(Ce, P, Pe, b[Pe], te), yt !== null && (e && yt.alternate !== null && Ce.delete(yt.key === null ? Pe : yt.key), j = u(yt, j, Pe), Ee === null ? je = yt : Ee.sibling = yt, Ee = yt);
      return e && Ce.forEach(function(ai) {
        return t(P, ai);
      }), st && vi(P, Pe), je;
    }
    function ye(P, j, b, te) {
      var je = ue(b);
      if (typeof je != "function") throw Error(o(150));
      if (b = je.call(b), b == null) throw Error(o(151));
      for (var Ee = je = null, Ce = j, Pe = j = 0, yt = null, Be = b.next(); Ce !== null && !Be.done; Pe++, Be = b.next()) {
        Ce.index > Pe ? (yt = Ce, Ce = null) : yt = Ce.sibling;
        var ai = Q(P, Ce, Be.value, te);
        if (ai === null) {
          Ce === null && (Ce = yt);
          break;
        }
        e && Ce && ai.alternate === null && t(P, Ce), j = u(ai, j, Pe), Ee === null ? je = ai : Ee.sibling = ai, Ee = ai, Ce = yt;
      }
      if (Be.done) return n(
        P,
        Ce
      ), st && vi(P, Pe), je;
      if (Ce === null) {
        for (; !Be.done; Pe++, Be = b.next()) Be = Z(P, Be.value, te), Be !== null && (j = u(Be, j, Pe), Ee === null ? je = Be : Ee.sibling = Be, Ee = Be);
        return st && vi(P, Pe), je;
      }
      for (Ce = i(P, Ce); !Be.done; Pe++, Be = b.next()) Be = de(Ce, P, Pe, Be.value, te), Be !== null && (e && Be.alternate !== null && Ce.delete(Be.key === null ? Pe : Be.key), j = u(Be, j, Pe), Ee === null ? je = Be : Ee.sibling = Be, Ee = Be);
      return e && Ce.forEach(function($m) {
        return t(P, $m);
      }), st && vi(P, Pe), je;
    }
    function ct(P, j, b, te) {
      if (typeof b == "object" && b !== null && b.type === _ && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            e: {
              for (var je = b.key, Ee = j; Ee !== null; ) {
                if (Ee.key === je) {
                  if (je = b.type, je === _) {
                    if (Ee.tag === 7) {
                      n(P, Ee.sibling), j = l(Ee, b.props.children), j.return = P, P = j;
                      break e;
                    }
                  } else if (Ee.elementType === je || typeof je == "object" && je !== null && je.$$typeof === oe && Ju(je) === Ee.type) {
                    n(P, Ee.sibling), j = l(Ee, b.props), j.ref = Rr(P, Ee, b), j.return = P, P = j;
                    break e;
                  }
                  n(P, Ee);
                  break;
                } else t(P, Ee);
                Ee = Ee.sibling;
              }
              b.type === _ ? (j = Ni(b.props.children, P.mode, te, b.key), j.return = P, P = j) : (te = sa(b.type, b.key, b.props, null, P.mode, te), te.ref = Rr(P, j, b), te.return = P, P = te);
            }
            return h(P);
          case U:
            e: {
              for (Ee = b.key; j !== null; ) {
                if (j.key === Ee) if (j.tag === 4 && j.stateNode.containerInfo === b.containerInfo && j.stateNode.implementation === b.implementation) {
                  n(P, j.sibling), j = l(j, b.children || []), j.return = P, P = j;
                  break e;
                } else {
                  n(P, j);
                  break;
                }
                else t(P, j);
                j = j.sibling;
              }
              j = ao(b, P.mode, te), j.return = P, P = j;
            }
            return h(P);
          case oe:
            return Ee = b._init, ct(P, j, Ee(b._payload), te);
        }
        if (Qe(b)) return pe(P, j, b, te);
        if (ue(b)) return ye(P, j, b, te);
        Os(P, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, j !== null && j.tag === 6 ? (n(P, j.sibling), j = l(j, b), j.return = P, P = j) : (n(P, j), j = so(b, P.mode, te), j.return = P, P = j), h(P)) : n(P, j);
    }
    return ct;
  }
  var Ui = Xu(!0), Zu = Xu(!1), $s = Yn(null), Fs = null, Gi = null, pl = null;
  function vl() {
    pl = Gi = Fs = null;
  }
  function kl(e) {
    var t = $s.current;
    nt($s), e._currentValue = t;
  }
  function yl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Wi(e, t) {
    Fs = e, pl = Gi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && ($t = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (pl !== e) if (e = { context: e, memoizedValue: t, next: null }, Gi === null) {
      if (Fs === null) throw Error(o(308));
      Gi = e, Fs.dependencies = { lanes: 0, firstContext: e };
    } else Gi = Gi.next = e;
    return t;
  }
  var ki = null;
  function gl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
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
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Ln(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, gl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function Is(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, La(e, n);
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
  function Ds(e, t, n, i) {
    var l = e.updateQueue;
    Zn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var y = k, O = y.next;
      y.next = null, h === null ? u = O : h.next = O, h = y;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, k = Y.lastBaseUpdate, k !== h && (k === null ? Y.firstBaseUpdate = O : k.next = O, Y.lastBaseUpdate = y));
    }
    if (u !== null) {
      var Z = l.baseState;
      h = 0, Y = O = y = null, k = u;
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
            var pe = e, ye = k;
            switch (Q = t, de = n, ye.tag) {
              case 1:
                if (pe = ye.payload, typeof pe == "function") {
                  Z = pe.call(de, Z, Q);
                  break e;
                }
                Z = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = ye.payload, Q = typeof pe == "function" ? pe.call(de, Z, Q) : pe, Q == null) break e;
                Z = ee({}, Z, Q);
                break e;
              case 2:
                Zn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else de = { eventTime: de, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Y === null ? (O = Y = de, y = Z) : Y = Y.next = de, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (y = Z), l.baseState = y, l.firstBaseUpdate = O, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ji |= h, e.lanes = h, e.memoizedState = Z;
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
  var Lr = {}, jn = Yn(Lr), Or = Yn(Lr), $r = Yn(Lr);
  function yi(e) {
    if (e === Lr) throw Error(o(174));
    return e;
  }
  function xl(e, t) {
    switch (qe($r, t), qe(Or, e), qe(jn, Lr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gt(t, e);
    }
    nt(jn), qe(jn, t);
  }
  function Qi() {
    nt(jn), nt(Or), nt($r);
  }
  function ic(e) {
    yi($r.current);
    var t = yi(jn.current), n = Gt(t, e.type);
    t !== n && (qe(Or, e), qe(jn, n));
  }
  function Sl(e) {
    Or.current === e && (nt(jn), nt(Or));
  }
  var at = Yn(0);
  function zs(e) {
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
  var Vs = V.ReactCurrentDispatcher, El = V.ReactCurrentBatchConfig, gi = 0, lt = null, ht = null, vt = null, Bs = !1, Fr = !1, Ir = 0, rm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function Tl(e, t, n, i, l, u) {
    if (gi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vs.current = e === null || e.memoizedState === null ? om : um, e = n(i, l), Fr) {
      u = 0;
      do {
        if (Fr = !1, Ir = 0, 25 <= u) throw Error(o(301));
        u += 1, vt = ht = null, t.updateQueue = null, Vs.current = cm, e = n(i, l);
      } while (Fr);
    }
    if (Vs.current = Us, t = ht !== null && ht.next !== null, gi = 0, vt = ht = lt = null, Bs = !1, t) throw Error(o(300));
    return e;
  }
  function _l() {
    var e = Ir !== 0;
    return Ir = 0, e;
  }
  function xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? lt.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function en() {
    if (ht === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ht.next;
    var t = vt === null ? lt.memoizedState : vt.next;
    if (t !== null) vt = t, ht = e;
    else {
      if (e === null) throw Error(o(310));
      ht = e, e = { memoizedState: ht.memoizedState, baseState: ht.baseState, baseQueue: ht.baseQueue, queue: ht.queue, next: null }, vt === null ? lt.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function Dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ml(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = ht, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, y = null, O = u;
      do {
        var Y = O.lane;
        if ((gi & Y) === Y) y !== null && (y = y.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), i = O.hasEagerState ? O.eagerState : e(i, O.action);
        else {
          var Z = {
            lane: Y,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          y === null ? (k = y = Z, h = i) : y = y.next = Z, lt.lanes |= Y, ji |= Y;
        }
        O = O.next;
      } while (O !== null && O !== u);
      y === null ? h = i : y.next = k, ln(i, t.memoizedState) || ($t = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = y, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, ji |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pl(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      ln(u, t.memoizedState) || ($t = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function rc() {
  }
  function sc(e, t) {
    var n = lt, i = en(), l = t(), u = !ln(i.memoizedState, l);
    if (u && (i.memoizedState = l, $t = !0), i = i.queue, Al(oc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || vt !== null && vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, lc.bind(null, n, i, l, t), void 0, null), kt === null) throw Error(o(349));
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
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function cc(e) {
    var t = Ln(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function dc(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = lm.bind(null, lt, e), [t.memoizedState, e];
  }
  function zr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function fc() {
    return en().memoizedState;
  }
  function Ks(e, t, n, i) {
    var l = xn();
    lt.flags |= e, l.memoizedState = zr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Hs(e, t, n, i) {
    var l = en();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (ht !== null) {
      var h = ht.memoizedState;
      if (u = h.destroy, i !== null && Cl(i, h.deps)) {
        l.memoizedState = zr(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = zr(1 | t, n, u, i);
  }
  function hc(e, t) {
    return Ks(8390656, 8, e, t);
  }
  function Al(e, t) {
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
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function jc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, $t = !0), e.memoizedState = n) : (ln(n, t) || (n = Jo(), lt.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function sm(e, t) {
    var n = Ge;
    Ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = El.transition;
    El.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = n, El.transition = i;
    }
  }
  function xc() {
    return en().memoizedState;
  }
  function am(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) wc(t, n);
    else if (n = qu(e, t, n, i), n !== null) {
      var l = bt();
      fn(n, e, i, l), Nc(n, t, i);
    }
  }
  function lm(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Sc(e)) wc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, ln(k, h)) {
          var y = t.interleaved;
          y === null ? (l.next = l, gl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = qu(e, t, l, i), n !== null && (l = bt(), fn(n, e, i, l), Nc(n, t, i));
    }
  }
  function Sc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function wc(e, t) {
    Fr = Bs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, La(e, n);
    }
  }
  var Us = { readContext: qt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, om = { readContext: qt, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: hc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ks(
      4194308,
      4,
      vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ks(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ks(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = xn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = am.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: dc, useDebugValue: bl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = dc(!1), t = e[0];
    return e = sm.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = lt, l = xn();
    if (st) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), kt === null) throw Error(o(349));
      (gi & 30) !== 0 || ac(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, hc(oc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, zr(9, lc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = kt.identifierPrefix;
    if (st) {
      var n = Rn, i = bn;
      n = (i & ~(1 << 32 - an(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = rm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, um = {
    readContext: qt,
    useCallback: yc,
    useContext: qt,
    useEffect: Al,
    useImperativeHandle: kc,
    useInsertionEffect: mc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: Ml,
    useRef: fc,
    useState: function() {
      return Ml(Dr);
    },
    useDebugValue: bl,
    useDeferredValue: function(e) {
      var t = en();
      return jc(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = Ml(Dr)[0], t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1
  }, cm = { readContext: qt, useCallback: yc, useContext: qt, useEffect: Al, useImperativeHandle: kc, useInsertionEffect: mc, useLayoutEffect: pc, useMemo: gc, useReducer: Pl, useRef: fc, useState: function() {
    return Pl(Dr);
  }, useDebugValue: bl, useDeferredValue: function(e) {
    var t = en();
    return ht === null ? t.memoizedState = e : jc(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = Pl(Dr)[0], t = en().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: sc, useId: xc, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Rl(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = bt(), l = ii(e), u = On(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (fn(t, e, l, i), Is(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = bt(), l = ii(e), u = On(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (fn(t, e, l, i), Is(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = bt(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (fn(t, e, i, n), Is(t, e, i));
  } };
  function Ec(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, i) || !Cr(l, u) : !0;
  }
  function Cc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = qt(u) : (l = Ot(t) ? mi : Et.current, i = t.contextTypes, u = (i = i != null) ? Vi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Tc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Gs.enqueueReplaceState(t, t.state, null);
  }
  function Ll(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, jl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = qt(u) : (u = Ot(t) ? mi : Et.current, l.context = Vi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Rl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Gs.enqueueReplaceState(l, l.state, null), Ds(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yi(e, t) {
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
  var dm = typeof WeakMap == "function" ? WeakMap : Map;
  function _c(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      qs || (qs = !0, Xl = i), $l(e, t);
    }, n;
  }
  function Mc(e, t, n) {
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
  function Pc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new dm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Em.bind(null, e, t, n), t.then(e, e));
  }
  function Ac(e) {
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
  var fm = V.ReactCurrentOwner, $t = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Zu(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Rc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Wi(t, l), i = Tl(e, t, n, i, u, l), n = _l(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (st && n && cl(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Lc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ro(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oc(e, t, u, i, l)) : (e = sa(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(h, i) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = si(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, i) && e.ref === t.ref) if ($t = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && ($t = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Fl(e, t, n, i, l);
  }
  function $c(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Xi, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Xi, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Xi, Ut), Ut |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Xi, Ut), Ut |= i;
    return At(e, t, l, n), t.child;
  }
  function Fc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fl(e, t, n, i, l) {
    var u = Ot(n) ? mi : Et.current;
    return u = Vi(t, u), Wi(t, l), n = Tl(e, t, n, i, u, l), i = _l(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (st && i && cl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Ic(e, t, n, i, l) {
    if (Ot(n)) {
      var u = !0;
      Ps(t);
    } else u = !1;
    if (Wi(t, l), t.stateNode === null) Qs(e, t), Cc(t, n, i), Ll(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var y = h.context, O = n.contextType;
      typeof O == "object" && O !== null ? O = qt(O) : (O = Ot(n) ? mi : Et.current, O = Vi(t, O));
      var Y = n.getDerivedStateFromProps, Z = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || y !== O) && Tc(t, h, i, O), Zn = !1;
      var Q = t.memoizedState;
      h.state = Q, Ds(t, i, h, l), y = t.memoizedState, k !== i || Q !== y || Lt.current || Zn ? (typeof Y == "function" && (Rl(t, n, Y, i), y = t.memoizedState), (k = Zn || Ec(t, n, k, i, Q, y, O)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), h.props = i, h.state = y, h.context = O, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ec(e, t), k = t.memoizedProps, O = t.type === t.elementType ? k : un(t.type, k), h.props = O, Z = t.pendingProps, Q = h.context, y = n.contextType, typeof y == "object" && y !== null ? y = qt(y) : (y = Ot(n) ? mi : Et.current, y = Vi(t, y));
      var de = n.getDerivedStateFromProps;
      (Y = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== Z || Q !== y) && Tc(t, h, i, y), Zn = !1, Q = t.memoizedState, h.state = Q, Ds(t, i, h, l);
      var pe = t.memoizedState;
      k !== Z || Q !== pe || Lt.current || Zn ? (typeof de == "function" && (Rl(t, n, de, i), pe = t.memoizedState), (O = Zn || Ec(t, n, O, i, Q, pe, y) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, pe, y), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, pe, y)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = pe), h.props = i, h.state = pe, h.context = y, i = O) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Il(e, t, n, i, u, l);
  }
  function Il(e, t, n, i, l, u) {
    Fc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Ku(t, n, !1), $n(e, t, u);
    i = t.stateNode, fm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : At(e, t, k, u), t.memoizedState = i.state, l && Ku(t, n, !0), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), xl(e, t.containerInfo);
  }
  function zc(e, t, n, i, l) {
    return Hi(), ml(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return hl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = aa(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = zl(n), t.memoizedState = Dl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return hm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = si(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = si(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? zl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Dl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = aa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ws(e, t, n, i) {
    return i !== null && ml(i), Ui(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function hm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ol(Error(o(422))), Ws(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = aa({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = zl(h), t.memoizedState = Dl, u);
    if ((t.mode & 1) === 0) return Ws(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = Ol(u, i, void 0), Ws(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, $t || k) {
      if (i = kt, i !== null) {
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ln(e, l), fn(i, e, l, -1));
      }
      return io(), i = Ol(Error(o(421))), Ws(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Ht = Qn(l.nextSibling), Kt = t, st = !0, on = null, e !== null && (Xt[Zt++] = bn, Xt[Zt++] = Rn, Xt[Zt++] = pi, bn = e.id, Rn = e.overflow, pi = t), t = Vl(t, i.children), t.flags |= 4096, t);
  }
  function Bc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), yl(e.return, t, n);
  }
  function Bl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (At(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
        else if (e.tag === 19) Bc(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && zs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Bl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && zs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Bl(t, !0, n, null, u);
        break;
      case "together":
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qs(e, t) {
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
  function mm(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), Hi();
        break;
      case 5:
        ic(t);
        break;
      case 1:
        Ot(t.type) && Ps(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        qe($s, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vc(e, t, n) : (qe(at, at.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
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
  var Hc, Kl, Uc, Gc;
  Hc = function(e, t) {
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
  }, Uc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ve(e, l), i = ve(e, i), u = [];
          break;
        case "select":
          l = ee({}, l, { value: void 0 }), i = ee({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = gt(e, l), i = gt(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ts);
      }
      Re(n, i);
      var h;
      n = null;
      for (O in l) if (!i.hasOwnProperty(O) && l.hasOwnProperty(O) && l[O] != null) if (O === "style") {
        var k = l[O];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (d.hasOwnProperty(O) ? u || (u = []) : (u = u || []).push(O, null));
      for (O in i) {
        var y = i[O];
        if (k = l?.[O], i.hasOwnProperty(O) && y !== k && (y != null || k != null)) if (O === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || y && y.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in y) y.hasOwnProperty(h) && k[h] !== y[h] && (n || (n = {}), n[h] = y[h]);
        } else n || (u || (u = []), u.push(
          O,
          n
        )), n = y;
        else O === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, k = k ? k.__html : void 0, y != null && k !== y && (u = u || []).push(O, y)) : O === "children" ? typeof y != "string" && typeof y != "number" || (u = u || []).push(O, "" + y) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (d.hasOwnProperty(O) ? (y != null && O === "onScroll" && tt("scroll", e), u || k === y || (u = [])) : (u = u || []).push(O, y));
      }
      n && (u = u || []).push("style", n);
      var O = u;
      (t.updateQueue = O) && (t.flags |= 4);
    }
  }, Gc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Vr(e, t) {
    if (!st) switch (e.tailMode) {
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
  function pm(e, t, n) {
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
        return Ot(t.type) && Ms(), Tt(t), null;
      case 3:
        return i = t.stateNode, Qi(), nt(Lt), nt(Et), Nl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Ls(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (eo(on), on = null))), Kl(e, t), Tt(t), null;
      case 5:
        Sl(t);
        var l = yi($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Uc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = yi(jn.current), Ls(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[gn] = t, i[Ar] = u, e = (t.mode & 1) !== 0, n) {
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
                Ze(i, u), tt("invalid", i);
            }
            Re(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Cs(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Cs(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                le(i), Xe(i, u, !0);
                break;
              case "textarea":
                le(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = Ts);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[gn] = t, e[Ar] = i, Hc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = be(n, i), n) {
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
                  Ae(e, i), l = ve(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = ee({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Ze(e, i), l = gt(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Re(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var y = k[u];
                u === "style" ? Qt(e, y) : u === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && sn(e, y)) : u === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Wt(e, y) : typeof y == "number" && Wt(e, "" + y) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? y != null && u === "onScroll" && tt("scroll", e) : y != null && $(e, u, y, h));
              }
              switch (n) {
                case "input":
                  le(e), Xe(e, i, !1);
                  break;
                case "textarea":
                  le(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + q(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? Ue(e, !!i.multiple, u, !1) : i.defaultValue != null && Ue(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ts);
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
          if (n = yi($r.current), yi(jn.current), Ls(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (u = i.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                Cs(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cs(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return Tt(t), null;
      case 13:
        if (nt(at), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Yu(), Hi(), t.flags |= 98560, u = !1;
          else if (u = Ls(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[gn] = t;
            } else Hi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tt(t), u = !1;
          } else on !== null && (eo(on), on = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? mt === 0 && (mt = 3) : io())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Qi(), Kl(e, t), e === null && Mr(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return kl(t.type._context), Tt(t), null;
      case 17:
        return Ot(t.type) && Ms(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Vr(u, !1);
        else {
          if (mt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = zs(e), h !== null) {
              for (t.flags |= 128, Vr(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Ne() > Zi && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = zs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !st) return Tt(t), null;
          } else 2 * Ne() - u.renderingStartTime > Zi && n !== 1073741824 && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Ne(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return no(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function vm(e, t) {
    switch (dl(t), t.tag) {
      case 1:
        return Ot(t.type) && Ms(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qi(), nt(Lt), nt(Et), Nl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Sl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Hi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Qi(), null;
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
  var Ys = !1, _t = !1, km = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Ji(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ut(e, t, i);
    }
    else n.current = null;
  }
  function Hl(e, t, n) {
    try {
      n();
    } catch (i) {
      ut(e, t, i);
    }
  }
  var Wc = !1;
  function ym(e, t) {
    if (nl = ps, e = Eu(), Qa(e)) {
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
          var h = 0, k = -1, y = -1, O = 0, Y = 0, Z = e, Q = null;
          t: for (; ; ) {
            for (var de; Z !== n || l !== 0 && Z.nodeType !== 3 || (k = h + l), Z !== u || i !== 0 && Z.nodeType !== 3 || (y = h + i), Z.nodeType === 3 && (h += Z.nodeValue.length), (de = Z.firstChild) !== null; )
              Q = Z, Z = de;
            for (; ; ) {
              if (Z === e) break t;
              if (Q === n && ++O === l && (k = h), Q === u && ++Y === i && (y = h), (de = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = de;
          }
          n = k === -1 || y === -1 ? null : { start: k, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (il = { focusedElem: e, selectionRange: n }, ps = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
    else for (; he !== null; ) {
      t = he;
      try {
        var pe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var ye = pe.memoizedProps, ct = pe.memoizedState, P = t.stateNode, j = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : un(t.type, ye), ct);
              P.__reactInternalSnapshotBeforeUpdate = j;
            }
            break;
          case 3:
            var b = t.stateNode.containerInfo;
            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (te) {
        ut(t, t.return, te);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return pe = Wc, Wc = !1, pe;
  }
  function Br(e, t, n) {
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
  function Js(e, t) {
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
  function Ul(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Ar], delete t[ll], delete t[em], delete t[tm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ts));
    else if (i !== 4 && (e = e.child, e !== null)) for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), e = e.sibling;
  }
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  var St = null, cn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Xc(e, t, n), n = n.sibling;
  }
  function Xc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(us, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _t || Ji(n, t);
      case 6:
        var i = St, l = cn;
        St = null, ei(e, t, n), St = i, cn = l, St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? al(e.parentNode, n) : e.nodeType === 1 && al(e, n), jr(e)) : al(St, n.stateNode));
        break;
      case 4:
        i = St, l = cn, St = n.stateNode.containerInfo, cn = !0, ei(e, t, n), St = i, cn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!_t && (Ji(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ut(n, t, k);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (_t = (i = _t) || n.memoizedState !== null, ei(e, t, n), _t = i) : ei(e, t, n);
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
      n === null && (n = e.stateNode = new km()), t.forEach(function(i) {
        var l = Tm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              St = k.stateNode, cn = !1;
              break e;
            case 3:
              St = k.stateNode.containerInfo, cn = !0;
              break e;
            case 4:
              St = k.stateNode.containerInfo, cn = !0;
              break e;
          }
          k = k.return;
        }
        if (St === null) throw Error(o(160));
        Xc(u, h, l), St = null, cn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (O) {
        ut(l, t, O);
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
        if (dn(t, e), Sn(e), i & 4) {
          try {
            Br(3, e, e.return), Js(3, e);
          } catch (ye) {
            ut(e, e.return, ye);
          }
          try {
            Br(5, e, e.return);
          } catch (ye) {
            ut(e, e.return, ye);
          }
        }
        break;
      case 1:
        dn(t, e), Sn(e), i & 512 && n !== null && Ji(n, n.return);
        break;
      case 5:
        if (dn(t, e), Sn(e), i & 512 && n !== null && Ji(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Wt(l, "");
          } catch (ye) {
            ut(e, e.return, ye);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            k === "input" && u.type === "radio" && u.name != null && _e(l, u), be(k, h);
            var O = be(k, u);
            for (h = 0; h < y.length; h += 2) {
              var Y = y[h], Z = y[h + 1];
              Y === "style" ? Qt(l, Z) : Y === "dangerouslySetInnerHTML" ? sn(l, Z) : Y === "children" ? Wt(l, Z) : $(l, Y, Z, O);
            }
            switch (k) {
              case "input":
                Oe(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? Ue(l, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? Ue(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Ue(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Ar] = u;
          } catch (ye) {
            ut(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (dn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ye) {
            ut(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (dn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (ye) {
          ut(e, e.return, ye);
        }
        break;
      case 4:
        dn(t, e), Sn(e);
        break;
      case 13:
        dn(t, e), Sn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Jl = Ne())), i & 4 && Zc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (O = _t) || Y, dn(t, e), _t = O) : dn(t, e), Sn(e), i & 8192) {
          if (O = e.memoizedState !== null, (e.stateNode.isHidden = O) && !Y && (e.mode & 1) !== 0) for (he = e, Y = e.child; Y !== null; ) {
            for (Z = he = Y; he !== null; ) {
              switch (Q = he, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, Q, Q.return);
                  break;
                case 1:
                  Ji(Q, Q.return);
                  var pe = Q.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, pe.props = t.memoizedProps, pe.state = t.memoizedState, pe.componentWillUnmount();
                    } catch (ye) {
                      ut(i, n, ye);
                    }
                  }
                  break;
                case 5:
                  Ji(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    nd(Z);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, he = de) : nd(Z);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Y === null) {
                Y = Z;
                try {
                  l = Z.stateNode, O ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = Z.stateNode, y = Z.memoizedProps.style, h = y != null && y.hasOwnProperty("display") ? y.display : null, k.style.display = we("display", h));
                } catch (ye) {
                  ut(e, e.return, ye);
                }
              }
            } else if (Z.tag === 6) {
              if (Y === null) try {
                Z.stateNode.nodeValue = O ? "" : Z.memoizedProps;
              } catch (ye) {
                ut(e, e.return, ye);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              Y === Z && (Y = null), Z = Z.return;
            }
            Y === Z && (Y = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), Sn(e), i & 4 && Zc(e);
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
            i.flags & 32 && (Wt(l, ""), i.flags &= -33);
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
      } catch (y) {
        ut(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gm(e, t, n) {
    he = e, ed(e);
  }
  function ed(e, t, n) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var l = he, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Ys;
        if (!h) {
          var k = l.alternate, y = k !== null && k.memoizedState !== null || _t;
          k = Ys;
          var O = _t;
          if (Ys = h, (_t = y) && !O) for (he = l; he !== null; ) h = he, y = h.child, h.tag === 22 && h.memoizedState !== null ? id(l) : y !== null ? (y.return = h, he = y) : id(l);
          for (; u !== null; ) he = u, ed(u), u = u.sibling;
          he = l, Ys = k, _t = O;
        }
        td(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, he = u) : td(e);
    }
  }
  function td(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Js(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
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
                var O = t.alternate;
                if (O !== null) {
                  var Y = O.memoizedState;
                  if (Y !== null) {
                    var Z = Y.dehydrated;
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
          _t || t.flags & 512 && Ul(t);
        } catch (Q) {
          ut(t, t.return, Q);
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
  function nd(e) {
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
  function id(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Js(4, t);
            } catch (y) {
              ut(t, n, y);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (y) {
                ut(t, l, y);
              }
            }
            var u = t.return;
            try {
              Ul(t);
            } catch (y) {
              ut(t, u, y);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ul(t);
            } catch (y) {
              ut(t, h, y);
            }
        }
      } catch (y) {
        ut(t, t.return, y);
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
  var jm = Math.ceil, Xs = V.ReactCurrentDispatcher, Ql = V.ReactCurrentOwner, tn = V.ReactCurrentBatchConfig, ze = 0, kt = null, ft = null, wt = 0, Ut = 0, Xi = Yn(0), mt = 0, Kr = null, ji = 0, Zs = 0, Yl = 0, Hr = null, Ft = null, Jl = 0, Zi = 1 / 0, Fn = null, qs = !1, Xl = null, ti = null, ea = !1, ni = null, ta = 0, Ur = 0, Zl = null, na = -1, ia = 0;
  function bt() {
    return (ze & 6) !== 0 ? Ne() : na !== -1 ? na : na = Ne();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && wt !== 0 ? wt & -wt : im.transition !== null ? (ia === 0 && (ia = Jo()), ia) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : su(e.type)), e);
  }
  function fn(e, t, n, i) {
    if (50 < Ur) throw Ur = 0, Zl = null, Error(o(185));
    pr(e, n, i), ((ze & 2) === 0 || e !== kt) && (e === kt && ((ze & 2) === 0 && (Zs |= n), mt === 4 && ri(e, wt)), It(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Zi = Ne() + 500, As && Xn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    ih(e, t);
    var i = fs(e, e === kt ? wt : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? nm(sd.bind(null, e)) : Hu(sd.bind(null, e)), Zh(function() {
        (ze & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Xo(i)) {
          case 1:
            n = ot;
            break;
          case 4:
            n = di;
            break;
          case 16:
            n = Vn;
            break;
          case 536870912:
            n = Yo;
            break;
          default:
            n = Vn;
        }
        n = hd(n, rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rd(e, t) {
    if (na = -1, ia = 0, (ze & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (qi() && e.callbackNode !== n) return null;
    var i = fs(e, e === kt ? wt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = ra(e, i);
    else {
      t = i;
      var l = ze;
      ze |= 2;
      var u = ld();
      (kt !== e || wt !== t) && (Fn = null, Zi = Ne() + 500, Si(e, t));
      do
        try {
          wm();
          break;
        } catch (k) {
          ad(e, k);
        }
      while (!0);
      vl(), Xs.current = u, ze = l, ft !== null ? t = 0 : (kt = null, wt = 0, t = mt);
    }
    if (t !== 0) {
      if (t === 2 && (l = ba(e), l !== 0 && (i = l, t = ql(e, l))), t === 1) throw n = Kr, Si(e, 0), ri(e, i), It(e, Ne()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !xm(l) && (t = ra(e, i), t === 2 && (u = ba(e), u !== 0 && (i = u, t = ql(e, u))), t === 1)) throw n = Kr, Si(e, 0), ri(e, i), It(e, Ne()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, Ft, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Jl + 500 - Ne(), 10 < t)) {
              if (fs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                bt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = sl(wi.bind(null, e, Ft, Fn), t);
              break;
            }
            wi(e, Ft, Fn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - an(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = Ne() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * jm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = sl(wi.bind(null, e, Ft, Fn), i);
              break;
            }
            wi(e, Ft, Fn);
            break;
          case 5:
            wi(e, Ft, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return It(e, Ne()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function ql(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = ra(e, t), e !== 2 && (t = Ft, Ft = n, t !== null && eo(t)), e;
  }
  function eo(e) {
    Ft === null ? Ft = e : Ft.push.apply(Ft, e);
  }
  function xm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!ln(u(), l)) return !1;
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
    for (t &= ~Yl, t &= ~Zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function sd(e) {
    if ((ze & 6) !== 0) throw Error(o(327));
    qi();
    var t = fs(e, 0);
    if ((t & 1) === 0) return It(e, Ne()), null;
    var n = ra(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = ba(e);
      i !== 0 && (t = i, n = ql(e, i));
    }
    if (n === 1) throw n = Kr, Si(e, 0), ri(e, t), It(e, Ne()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, Ft, Fn), It(e, Ne()), null;
  }
  function to(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Zi = Ne() + 500, As && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && qi();
    var t = ze;
    ze |= 1;
    var n = tn.transition, i = Ge;
    try {
      if (tn.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = i, tn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function no() {
    Ut = Xi.current, nt(Xi);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Xh(n)), ft !== null) for (n = ft.return; n !== null; ) {
      var i = n;
      switch (dl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ms();
          break;
        case 3:
          Qi(), nt(Lt), nt(Et), Nl();
          break;
        case 5:
          Sl(i);
          break;
        case 4:
          Qi();
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
    if (kt = e, ft = e = si(e.current, null), wt = Ut = t, mt = 0, Kr = null, Yl = Zs = ji = 0, Ft = Hr = null, ki !== null) {
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
      var n = ft;
      try {
        if (vl(), Vs.current = Us, Bs) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Bs = !1;
        }
        if (gi = 0, vt = ht = lt = null, Fr = !1, Ir = 0, Ql.current = null, n === null || n.return === null) {
          mt = 1, Kr = t, ft = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, y = t;
          if (t = wt, k.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var O = y, Y = k, Z = Y.tag;
            if ((Y.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var de = Ac(h);
            if (de !== null) {
              de.flags &= -257, bc(de, h, k, u, t), de.mode & 1 && Pc(u, O, t), t = de, y = O;
              var pe = t.updateQueue;
              if (pe === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(y), t.updateQueue = ye;
              } else pe.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Pc(u, O, t), io();
                break e;
              }
              y = Error(o(426));
            }
          } else if (st && k.mode & 1) {
            var ct = Ac(h);
            if (ct !== null) {
              (ct.flags & 65536) === 0 && (ct.flags |= 256), bc(ct, h, k, u, t), ml(Yi(y, k));
              break e;
            }
          }
          u = y = Yi(y, k), mt !== 4 && (mt = 2), Hr === null ? Hr = [u] : Hr.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = _c(u, y, t);
                tc(u, P);
                break e;
              case 1:
                k = y;
                var j = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ti === null || !ti.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var te = Mc(u, k, t);
                  tc(u, te);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ud(n);
      } catch (je) {
        t = je, ft === n && n !== null && (ft = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ld() {
    var e = Xs.current;
    return Xs.current = Us, e === null ? Us : e;
  }
  function io() {
    (mt === 0 || mt === 3 || mt === 2) && (mt = 4), kt === null || (ji & 268435455) === 0 && (Zs & 268435455) === 0 || ri(kt, wt);
  }
  function ra(e, t) {
    var n = ze;
    ze |= 2;
    var i = ld();
    (kt !== e || wt !== t) && (Fn = null, Si(e, t));
    do
      try {
        Sm();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    if (vl(), ze = n, Xs.current = i, ft !== null) throw Error(o(261));
    return kt = null, wt = 0, mt;
  }
  function Sm() {
    for (; ft !== null; ) od(ft);
  }
  function wm() {
    for (; ft !== null && !D(); ) od(ft);
  }
  function od(e) {
    var t = fd(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? ud(e) : ft = t, Ql.current = null;
  }
  function ud(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = pm(n, t, Ut), n !== null) {
          ft = n;
          return;
        }
      } else {
        if (n = vm(n, t), n !== null) {
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
  function wi(e, t, n) {
    var i = Ge, l = tn.transition;
    try {
      tn.transition = null, Ge = 1, Nm(e, t, n, i);
    } finally {
      tn.transition = l, Ge = i;
    }
    return null;
  }
  function Nm(e, t, n, i) {
    do
      qi();
    while (ni !== null);
    if ((ze & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (rh(e, u), e === kt && (ft = kt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ea || (ea = !0, hd(Vn, function() {
      return qi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = tn.transition, tn.transition = null;
      var h = Ge;
      Ge = 1;
      var k = ze;
      ze |= 4, Ql.current = null, ym(e, n), qc(n, e), Hh(il), ps = !!nl, il = nl = null, e.current = n, gm(n), me(), ze = k, Ge = h, tn.transition = u;
    } else e.current = n;
    if (ea && (ea = !1, ni = e, ta = l), u = e.pendingLanes, u === 0 && (ti = null), Zf(n.stateNode), It(e, Ne()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (qs) throw qs = !1, e = Xl, Xl = null, e;
    return (ta & 1) !== 0 && e.tag !== 0 && qi(), u = e.pendingLanes, (u & 1) !== 0 ? e === Zl ? Ur++ : (Ur = 0, Zl = e) : Ur = 0, Xn(), null;
  }
  function qi() {
    if (ni !== null) {
      var e = Xo(ta), t = tn.transition, n = Ge;
      try {
        if (tn.transition = null, Ge = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, ta = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, he = e.current; he !== null; ) {
            var u = he, h = u.child;
            if ((he.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var y = 0; y < k.length; y++) {
                  var O = k[y];
                  for (he = O; he !== null; ) {
                    var Y = he;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Br(8, Y, u);
                    }
                    var Z = Y.child;
                    if (Z !== null) Z.return = Y, he = Z;
                    else for (; he !== null; ) {
                      Y = he;
                      var Q = Y.sibling, de = Y.return;
                      if (Qc(Y), Y === O) {
                        he = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = de, he = Q;
                        break;
                      }
                      he = de;
                    }
                  }
                }
                var pe = u.alternate;
                if (pe !== null) {
                  var ye = pe.child;
                  if (ye !== null) {
                    pe.child = null;
                    do {
                      var ct = ye.sibling;
                      ye.sibling = null, ye = ct;
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
                  Br(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, he = P;
                break e;
              }
              he = u.return;
            }
          }
          var j = e.current;
          for (he = j; he !== null; ) {
            h = he;
            var b = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && b !== null) b.return = h, he = b;
            else e: for (h = j; he !== null; ) {
              if (k = he, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Js(9, k);
                }
              } catch (je) {
                ut(k, k.return, je);
              }
              if (k === h) {
                he = null;
                break e;
              }
              var te = k.sibling;
              if (te !== null) {
                te.return = k.return, he = te;
                break e;
              }
              he = k.return;
            }
          }
          if (ze = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(us, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Ge = n, tn.transition = t;
      }
    }
    return !1;
  }
  function cd(e, t, n) {
    t = Yi(n, t), t = _c(e, t, 1), e = qn(e, t, 1), t = bt(), e !== null && (pr(e, 1, t), It(e, t));
  }
  function ut(e, t, n) {
    if (e.tag === 3) cd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Yi(n, e), e = Mc(t, e, 1), t = qn(t, e, 1), e = bt(), t !== null && (pr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Em(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = bt(), e.pingedLanes |= e.suspendedLanes & n, kt === e && (wt & n) === n && (mt === 4 || mt === 3 && (wt & 130023424) === wt && 500 > Ne() - Jl ? Si(e, 0) : Yl |= n), It(e, t);
  }
  function dd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ds, ds <<= 1, (ds & 130023424) === 0 && (ds = 4194304)));
    var n = bt();
    e = Ln(e, t), e !== null && (pr(e, t, n), It(e, n));
  }
  function Cm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), dd(e, n);
  }
  function Tm(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) $t = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return $t = !1, mm(e, t, n);
      $t = (e.flags & 131072) !== 0;
    }
    else $t = !1, st && (t.flags & 1048576) !== 0 && Uu(t, Rs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Qs(e, t), e = t.pendingProps;
        var l = Vi(t, Et.current);
        Wi(t, n), l = Tl(null, t, i, e, l, n);
        var u = _l();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (u = !0, Ps(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jl(t), l.updater = Gs, t.stateNode = l, l._reactInternals = t, Ll(t, i, e, n), t = Il(null, t, i, !0, u, n)) : (t.tag = 0, st && u && cl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Qs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Mm(i), e = un(i, e), l) {
            case 0:
              t = Fl(null, t, i, e, n);
              break e;
            case 1:
              t = Ic(null, t, i, e, n);
              break e;
            case 11:
              t = Rc(null, t, i, e, n);
              break e;
            case 14:
              t = Lc(null, t, i, un(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Fl(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Ic(e, t, i, l, n);
      case 3:
        e: {
          if (Dc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, ec(e, t), Ds(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Yi(Error(o(423)), t), t = zc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Yi(Error(o(424)), t), t = zc(e, t, i, n, l);
            break e;
          } else for (Ht = Qn(t.stateNode.containerInfo.firstChild), Kt = t, st = !0, on = null, n = Zu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hi(), i === l) {
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
        return Vc(e, t, n);
      case 4:
        return xl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Rc(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe($s, i._currentValue), i._currentValue = h, u !== null) if (ln(u.value, h)) {
            if (u.children === l.children && !Lt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var y = k.firstContext; y !== null; ) {
                if (y.context === i) {
                  if (u.tag === 1) {
                    y = On(-1, n & -n), y.tag = 2;
                    var O = u.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var Y = O.pending;
                      Y === null ? y.next = y : (y.next = Y.next, Y.next = y), O.pending = y;
                    }
                  }
                  u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), yl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                y = y.next;
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
        return l = t.type, i = t.pendingProps.children, Wi(t, n), l = qt(l), i = i(l), t.flags |= 1, At(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = un(i, t.pendingProps), l = un(i.type, l), Lc(e, t, i, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Qs(e, t), t.tag = 1, Ot(i) ? (e = !0, Ps(t)) : e = !1, Wi(t, n), Cc(t, i, l), Ll(t, i, l, n), Il(null, t, i, !0, e, n);
      case 19:
        return Kc(e, t, n);
      case 22:
        return $c(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function hd(e, t) {
    return _n(e, t);
  }
  function _m(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, i) {
    return new _m(e, t, n, i);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mm(e) {
    if (typeof e == "function") return ro(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === K) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function sa(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") ro(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case _:
        return Ni(n.children, l, u, t);
      case F:
        h = 8, l |= 8;
        break;
      case ne:
        return e = nn(12, n, t, l | 2), e.elementType = ne, e.lanes = u, e;
      case B:
        return e = nn(13, n, t, l), e.elementType = B, e.lanes = u, e;
      case re:
        return e = nn(19, n, t, l), e.elementType = re, e.lanes = u, e;
      case se:
        return aa(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            h = 10;
            break e;
          case ge:
            h = 9;
            break e;
          case Te:
            h = 11;
            break e;
          case K:
            h = 14;
            break e;
          case oe:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = nn(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ni(e, t, n, i) {
    return e = nn(7, e, i, t), e.lanes = n, e;
  }
  function aa(e, t, n, i) {
    return e = nn(22, e, i, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function so(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function ao(e, t, n) {
    return t = nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Pm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ra(0), this.expirationTimes = Ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function lo(e, t, n, i, l, u, h, k, y) {
    return e = new Pm(e, t, n, k, y), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = nn(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(u), e;
  }
  function Am(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
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
            if (Ot(t.type)) {
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
      if (Ot(n)) return Bu(e, n, t);
    }
    return t;
  }
  function pd(e, t, n, i, l, u, h, k, y) {
    return e = lo(n, i, !0, e, l, u, h, k, y), e.context = md(null), n = e.current, i = bt(), l = ii(n), u = On(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, pr(e, l, i), It(e, i), e;
  }
  function la(e, t, n, i) {
    var l = t.current, u = bt(), h = ii(l);
    return n = md(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, h), e !== null && (fn(e, l, h, u), Is(e, l, h)), h;
  }
  function oa(e) {
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
  function bm() {
    return null;
  }
  var kd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function uo(e) {
    this._internalRoot = e;
  }
  ua.prototype.render = uo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    la(e, t, null, null);
  }, ua.prototype.unmount = uo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        la(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function ua(e) {
    this._internalRoot = e;
  }
  ua.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && iu(e);
    }
  };
  function co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ca(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function yd() {
  }
  function Rm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var O = oa(h);
          u.call(O);
        };
      }
      var h = pd(t, i, e, 0, null, !1, !1, "", yd);
      return e._reactRootContainer = h, e[Pn] = h.current, Mr(e.nodeType === 8 ? e.parentNode : e), xi(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var O = oa(y);
        k.call(O);
      };
    }
    var y = lo(e, 0, !1, null, null, !1, !1, "", yd);
    return e._reactRootContainer = y, e[Pn] = y.current, Mr(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      la(t, y, n, i);
    }), y;
  }
  function da(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var y = oa(h);
          k.call(y);
        };
      }
      la(t, h, e, l);
    } else h = Rm(n, t, e, l, i);
    return oa(h);
  }
  Zo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (La(t, n | 1), It(t, Ne()), (ze & 6) === 0 && (Zi = Ne() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = bt();
            fn(i, e, 1, l);
          }
        }), oo(e, 1);
    }
  }, Oa = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = bt();
        fn(t, e, 134217728, n);
      }
      oo(e, 134217728);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = bt();
        fn(n, e, t, i);
      }
      oo(e, t);
    }
  }, eu = function() {
    return Ge;
  }, tu = function(e, t) {
    var n = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = n;
    }
  }, Yt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Oe(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = _s(i);
              if (!l) throw Error(o(90));
              ce(i), Oe(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ve(e, n);
        break;
      case "select":
        t = n.value, t != null && Ue(e, !!n.multiple, t, !1);
    }
  }, Ie = to, rt = xi;
  var Lm = { usingClientEntryPoint: !1, Events: [br, Di, _s, pn, zn, to] }, Gr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Om = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ls(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Gr.findFiberByHostInstance || bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fa.isDisabled && fa.supportsFiber) try {
      us = fa.inject(Om), yn = fa;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!co(t)) throw Error(o(200));
    return Am(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!co(e)) throw Error(o(299));
    var n = !1, i = "", l = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = lo(e, 1, !1, null, null, n, !1, i, l), e[Pn] = t.current, Mr(e.nodeType === 8 ? e.parentNode : e), new uo(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = ls(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return xi(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!ca(t)) throw Error(o(200));
    return da(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!co(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = kd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, l, !1, u, h), e[Pn] = t.current, Mr(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ua(t);
  }, Dt.render = function(e, t, n) {
    if (!ca(t)) throw Error(o(200));
    return da(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!ca(e)) throw Error(o(40));
    return e._reactRootContainer ? (xi(function() {
      da(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = to, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!ca(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return da(e, t, n, !1, i);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var Cd;
function Hm() {
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
  return s(), mo.exports = Km(), mo.exports;
}
var Td;
function Um() {
  if (Td) return ha;
  Td = 1;
  var s = Hm();
  return ha.createRoot = s.createRoot, ha.hydrateRoot = s.hydrateRoot, ha;
}
var Gm = Um();
const Wm = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], x = ["e", "B", "G", "D", "A", "E"], R = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
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
  }, A = 26, I = 72, w = 30, N = 54, z = 34, S = 11, $ = (A + I) / 2, V = w + (c.length - 1) * z + 30, J = (H) => I + H * N, U = (H) => H === 0 ? $ : J(H) - N / 2, _ = (H) => w + H * z;
  function F(H, q, E) {
    const X = a.indexOf(s[H][0]) + Number(E.slice(-1)) - 1, le = X % a.length, ce = o[le] + 12 * Math.floor(X / a.length), fe = H + q - ce;
    return a[le] + (fe < 0 ? "♭" : "♯").repeat(Math.abs(fe));
  }
  function ne(H) {
    return [...H.base, ...H.add].sort((q, E) => q[0] - E[0]);
  }
  function ie(H, q, E) {
    const X = q + (E ? 1 : 0), le = m[X % m.length], ce = Math.min(...le.map(([Oe]) => Oe)), fe = Math.max(...le.map(([, Oe]) => Oe));
    let _e = (H - d % 12 + 12) % 12 - (E ? 8 : 5) + 12 * Math.floor(X / m.length);
    return ce + _e < 0 && (_e += 12), fe + _e > f.pentatonic && (_e -= 12), {
      strings: le.map((Oe) => Oe.map((Xe) => Xe + _e)),
      start: ce + _e,
      end: fe + _e
    };
  }
  function ge(H, q, E) {
    const X = E[q], le = (H + X - d % 12 + 12) % 12, ce = d + le - X, fe = c.map((ve, Ae) => {
      const _e = q + (c.length - 1 - Ae) * 3;
      return [_e, _e + 1, _e + 2].map((Oe) => {
        const Xe = Math.floor(Oe / E.length), He = E[Oe % E.length];
        return ce + He + 12 * Xe - ve;
      });
    });
    return {
      strings: fe,
      start: Math.min(...fe.map((ve) => ve[0])),
      end: Math.max(...fe.map((ve) => ve.at(-1)))
    };
  }
  function Te(H, q) {
    const E = [], X = Math.ceil(-H.end / 12) * 12;
    for (let ce = X; H.start + ce <= q; ce += 12) {
      const fe = H.strings.map((Ae) => Ae.map((_e) => _e + ce).filter((_e) => _e >= 0 && _e <= q)), ve = fe.flat();
      E.push({
        strings: fe,
        start: Math.min(...ve),
        end: Math.max(...ve),
        partial: H.start + ce < 0 || H.end + ce > q
      });
    }
    const le = E.filter((ce) => !ce.partial);
    return le.length ? le : E;
  }
  function B(H) {
    return ne(H).length === p;
  }
  function re(H, q, E) {
    const X = B(q);
    H.querySelector('[value="3nps"]').disabled = !X, H.value = X ? E ?? "3nps" : "pentatonic";
  }
  function K(H, q, E, X, le) {
    const ce = ne(q).map(([fe]) => fe);
    return X.map((fe) => {
      const ve = fe - 1, Ae = E === "3nps" ? ge(H, ve, ce) : ie(H, ve, q.base === C), _e = le === void 0 ? [Ae] : Te(Ae, le);
      return { number: fe, positions: _e };
    });
  }
  function oe(H, q) {
    const E = H.getBoundingClientRect(), X = H.querySelectorAll(q);
    let le = 1 / 0;
    X.forEach((ce) => {
      const fe = ce.getBoundingClientRect();
      let ve = 0;
      fe.left < E.left ? ve = fe.left - E.left - 8 : fe.right > E.right && (ve = fe.right - E.right + 8), Math.abs(ve) < Math.abs(le) && (le = ve);
    }), Number.isFinite(le) && (H.scrollLeft += le);
  }
  function se(H, q = !1) {
    const E = H === "3nps" ? p : m.length;
    return Array.from({ length: E }, (X, le) => {
      const ce = le + 1;
      return '<label class="box-toggle" data-box="' + ce + '"><input type="checkbox" value="' + ce + '"' + (q && le === 0 ? " checked" : "") + "> Boksi " + ce + "</label>";
    }).join("");
  }
  function W(H, q) {
    const E = ne(q), X = new Map(E.map(([ce, fe]) => [ce, F(H, ce, fe)])), le = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return E.flatMap(([ce, fe]) => le.flatMap(({ suffix: ve, base: Ae }) => {
      const _e = Ae.map(([Oe]) => X.get((ce + Oe) % 12));
      return _e.every(Boolean) ? {
        root: (H + ce) % 12,
        degree: Number(String(fe).replace(/\D/g, "")),
        name: _e[0] + ve,
        notes: _e,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function ue(H, q) {
    const E = H.base.map(([ce]) => (H.root + ce) % 12), X = c.map((ce) => {
      const fe = [];
      for (let ve = 0; ve <= q; ve++) {
        const Ae = (ce + ve) % 12;
        E.includes(Ae) && fe.push({ fret: ve, pitch: Ae });
      }
      return fe;
    }), le = [];
    for (let ce = 0; ce <= X.length - 3; ce++)
      for (const fe of X[ce])
        for (const ve of X[ce + 1])
          if (fe.pitch !== ve.pitch)
            for (const Ae of X[ce + 2]) {
              if (Ae.pitch === fe.pitch || Ae.pitch === ve.pitch) continue;
              const _e = [fe.fret, ve.fret, Ae.fret], Oe = Math.min(..._e), Xe = Math.max(..._e);
              if (Xe - Oe > 3) continue;
              const He = Array(c.length).fill(null);
              He.splice(ce, 3, ..._e), le.push({ strings: He, low: Oe, high: Xe });
            }
    return le.sort((ce, fe) => ce.high - fe.high || ce.low - fe.low);
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
  function T(H, q) {
    const E = ee[H + ":" + q];
    if (E) return { frets: E, barre: null };
    let X = null;
    return g.forEach(({ string: le, openPC: ce, shapes: fe }) => {
      const ve = fe[q];
      if (!ve) return;
      let Ae = (H - ce + 12) % 12;
      if (Ae + Math.min(...ve.filter((Xe) => Xe !== null)) < 0 && (Ae += 12), X && X.fret <= Ae) return;
      const _e = ve.map((Xe) => Xe === null ? null : Ae + Xe), Oe = Ae > 0 && ve.at(-1) === 0 ? { fret: Ae, from: le, to: ve.length - 1 } : null;
      X = { fret: Ae, frets: _e, barre: Oe };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function ae(H, { frets: q, barre: E }, X) {
    const _e = [...c].reverse(), Oe = q.filter((Ve) => Ve > 0), He = !Oe.length || Math.max(...Oe) <= 4 && (q.includes(0) || Math.min(...Oe) === 1) ? 1 : Math.min(...Oe), Qe = (Ve) => 24 + Ve * 14, Ue = (Ve) => 30 + (Ve - He) * 18 + 18 / 2, gt = 102;
    let Ze = '<svg class="chord-svg" viewBox="0 0 108 ' + (gt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + q.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Ze += '<line class="' + (Ve === 0 && He === 1 ? "nut" : "fret") + '" x1="' + Qe(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + Qe(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return q.forEach((Ve, it) => {
      Ze += '<line class="string" x1="' + Qe(it) + '" y1="30" x2="' + Qe(it) + '" y2="' + gt + '"/>';
    }), He > 1 && (Ze += '<text class="fret-label" x="15" y="' + (Ue(He) + 4) + '">' + He + "</text>"), E && (Ze += '<rect class="barre" x="' + (Qe(E.from) - 6.5) + '" y="' + (Ue(E.fret) - 6.5) + '" width="' + ((E.to - E.from) * 14 + 13) + '" height="13" rx="6.5"/>'), q.forEach((Ve, it) => {
      if (Ve === null) {
        Ze += '<text class="marker" x="' + Qe(it) + '" y="22">×</text>';
        return;
      }
      const Mt = (_e[it] + Ve) % 12 === H;
      if (Ve === 0) {
        Ze += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + Qe(it) + '" cy="18" r="4.5"/>';
        return;
      }
      E && Ve === E.fret && it >= E.from && it <= E.to && !Mt || (Ze += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + Qe(it) + '" cy="' + Ue(Ve) + '" r="6.5"/>');
    }), Ze + "</svg>";
  }
  function xe(H, q) {
    const E = new URLSearchParams(location.search), X = s.indexOf(E.get("toonikka")), le = E.get("asteikko");
    return {
      rootPC: X === -1 ? H : X,
      scaleId: Object.hasOwn(M, le) ? le : q
    };
  }
  function Se(H, q, E) {
    return H + "?" + new URLSearchParams({ toonikka: s[q], asteikko: E });
  }
  function G(H, q, E, {
    boxes: X = [],
    onlyBoxNotes: le = !1,
    automatic: ce = !0,
    focusDegree: fe = "",
    grip: ve = null,
    barre: Ae = null,
    label: _e = s[H] + " " + q.name,
    notes: Oe = null,
    targets: Xe = !1,
    muteFret: He = null
  } = {}) {
    const Qe = J(E), Ue = Qe + 48, gt = Ue + 28, Ze = w - 14, Ve = _(c.length - 1) + 14, it = Ve - Ze, Mt = ce ? 680 : Math.ceil(gt * 0.64), Gt = X.flatMap((Me) => Me.positions), zt = {};
    q.base.forEach(([Me, Re]) => zt[(H + Me) % 12] = { deg: Re, added: !1 }), q.add.forEach(([Me, Re]) => zt[(H + Me) % 12] = { deg: Re, added: !0 });
    const sn = c.map((Me, Re) => !!ve && ve[Re] === null), Wt = !!ve && He !== null, dt = R.filter((Me, Re) => sn[Re]).reverse(), Dn = _e + ". " + E + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (dt.length ? " Soittamatta jäävät kielet: " + dt.join(", ") + "." : "");
    let we = '<svg viewBox="0 0 ' + gt + " " + V + '" style="min-width:' + Mt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Xe ? "group" : "img") + '" aria-label="' + Dn + '">';
    we += '<rect x="' + A + '" y="' + Ze + '" width="' + (I - A) + '" height="' + it + '" rx="6" fill="#2a2338"/>', we += '<rect x="' + I + '" y="' + Ze + '" width="' + (Qe - I) + '" height="' + it + '" fill="#231a12"/>', we += '<rect x="' + Qe + '" y="' + Ze + '" width="' + (gt - Qe - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Me = 1; Me <= E; Me++)
      we += '<line x1="' + J(Me) + '" y1="' + Ze + '" x2="' + J(Me) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    we += '<rect x="' + (I - 3) + '" y="' + Ze + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', we += '<rect x="' + (Ue - 11) + '" y="' + (Ze + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', we += '<rect x="' + (Ue - 4) + '" y="' + (Ze + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Ze + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Me) => Me <= E).forEach((Me) => we += '<circle cx="' + U(Me) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let Me = 12; Me <= E; Me += 12)
      we += '<circle cx="' + U(Me) + '" cy="' + (Qt - z) + '" r="5.5" fill="#7a6550"/>', we += '<circle cx="' + U(Me) + '" cy="' + (Qt + z) + '" r="5.5" fill="#7a6550"/>';
    we += '<text x="' + $ + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', we += '<text x="' + I + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', we += '<text x="' + Ue + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Me = 1; Me <= E; Me++)
      we += '<text x="' + U(Me) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Me + "</text>";
    if (X.forEach(({ number: Me, positions: Re }) => {
      Re.forEach((be) => {
        const Ye = be.partial ? "box-highlight box-partial" : "box-highlight";
        we += '<g class="' + Ye + '" data-box="' + Me + '" aria-hidden="true">';
        const et = be.strings.find((jt) => jt.length), Yt = (U(et[0]) + U(et.at(-1))) / 2;
        we += '<text class="box-number" x="' + Yt + '" y="12">' + Me + "</text>", be.strings.forEach((jt, Vt) => {
          if (!jt.length) return;
          const mn = U(jt[0]) - 16, pn = U(jt.at(-1)) - U(jt[0]) + 32;
          we += '<rect class="box-band" x="' + mn + '" y="' + (_(Vt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), we += "</g>";
      });
    }), c.forEach((Me, Re) => {
      const be = 1 + Re * 0.45, Ye = _(Re), et = sn[Re] && !Wt;
      et ? we += '<text class="muted-mark" x="' + $ + '" y="' + (Ye + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[Re] && He === 0 || (we += '<line x1="' + (A + 4) + '" y1="' + Ye + '" x2="' + (I - 4) + '" y2="' + Ye + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), we += "<g" + (et ? ' opacity=".35"' : "") + ">", we += '<line x1="' + I + '" y1="' + Ye + '" x2="' + (Ue + 5) + '" y2="' + Ye + '" stroke="#b9b9c4" stroke-width="' + be.toFixed(2) + '"/>', we += '<circle cx="' + (Ue + 5) + '" cy="' + Ye + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', we += "</g>", we += '<text x="13" y="' + (Ye + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + x[Re] + "</text>";
    }), ve && Ae && Ae.fret >= 1 && Ae.fret <= E) {
      const Me = _(Ae.from), Re = _(Ae.to), be = Math.min(Me, Re) - 6, Ye = Math.max(Me, Re) + 6;
      we += '<rect class="barre-indicator" x="' + (U(Ae.fret) - 7) + '" y="' + be + '" width="14" height="' + (Ye - be) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Xe && (we += '<g class="fret-targets">', c.forEach((Me, Re) => {
      for (let be = 0; be <= E; be++) {
        const Ye = be ? R[Re] + "-kieli, " + be + ". nauha" : "vapaa " + R[Re] + "-kieli", et = be ? N : I - A - 6;
        we += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + be + '" data-midi="' + (Me + be) + '" aria-label="' + Ye + '" x="' + (U(be) - et / 2) + '" y="' + (_(Re) - z / 2) + '" width="' + et + '" height="' + z + '" fill="transparent"/>';
      }
    }), we += "</g>"), (Oe ?? []).forEach(({ string: Me, fret: Re, label: be, kind: Ye }) => {
      we += '<g class="octave-note octave-' + Ye + '">', we += '<circle cx="' + U(Re) + '" cy="' + _(Me) + '" r="' + S + '"/>', we += '<text x="' + U(Re) + '" y="' + (_(Me) + 3.5) + '" font-size="' + (be.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + be + "</text>", we += "</g>";
    }), ve && (we += '<g class="grip-notes">'), (Oe ? [] : c).forEach((Me, Re) => {
      for (let be = 0; be <= E; be++) {
        const Ye = (Me + be) % 12;
        if (!(Ye in zt) || ve && ve[Re] !== be || le && !Gt.some(({ strings: pn }) => {
          const zn = pn[Re];
          return zn.length > 0 && be >= zn[0] && be <= zn.at(-1);
        })) continue;
        const et = zt[Ye], Yt = et.deg === "1", jt = et.added ? "#f0a13c" : Yt ? "#4b2fd6" : "#6d4aff", Vt = et.added ? "#1a1430" : "#fff";
        et.deg === fe && (we += '<circle class="focus-note" cx="' + U(be) + '" cy="' + _(Re) + '" r="14.5"/>');
        const mn = ve ? ' data-string="' + (Re + 1) + '" data-fret="' + be + '" data-degree="' + et.deg + '"' : "";
        we += "<circle" + mn + ' cx="' + U(be) + '" cy="' + _(Re) + '" r="' + S + '" fill="' + jt + '" stroke="' + (Yt ? "#fff" : "#1a1430") + '" stroke-width="' + (Yt ? 2.5 : 1) + '"/>', we += '<text x="' + U(be) + '" y="' + (_(Re) + 3.5) + '" font-size="' + (et.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Vt + '" text-anchor="middle">' + et.deg + "</text>";
      }
    }), ve && (we += "</g>"), Wt && sn.forEach((Me, Re) => {
      if (!Me) return;
      const be = U(He), Ye = _(Re);
      we += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + He + '">', we += '<circle cx="' + be + '" cy="' + Ye + '" r="9" fill="' + (He === 0 ? "#2a2338" : "#231a12") + '"/>', we += '<text x="' + be + '" y="' + (Ye + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', we += "</g>";
    }), we += "</svg>", we;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: M,
    noteName: F,
    scaleNotes: ne,
    scaleTriads: W,
    triadGrips: ue,
    chordGrip: T,
    renderChordDiagram: ae,
    selectionFromURL: xe,
    selectionHref: Se,
    renderBoard: G,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: B,
    syncBoxSystem: re,
    fingeringBoxes: K,
    boxOptions: se,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = Wm;
function ko(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Qm(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Ym(s) {
  const a = Qm(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const De = globalThis.MusicMapFretboard, Ke = (s) => (s % 12 + 12) % 12, Jm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Xm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Le = (s, a = !1, o = !1) => (a ? Xm : Jm)[Ke(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => De.CHROM[Ke(s)], Xr = (s, a, o) => De.noteName(Ke(s), a, o);
function Zm(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Ke(s) < 2 ? o - 1 : a[0] === "C" && Ke(s) > 9 ? o + 1 : o;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], Ho = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], vf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], qm = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ti = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Fe = (s, a) => ({ string: s, fret: a, midi: De.OPEN_PITCHES[s] + a });
function cr(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Fe(c, a + f)));
}
const We = (s) => `${s.string}:${s.fret}`, Ci = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, kf = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, Zr = [
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
], _d = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function yf(s, a) {
  const o = _d[a] ?? _d.E, c = Ke(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Fe(f, d + c)]);
}
const ka = {
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
}, li = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, wn = (s, a, o) => a.includes(s) ? s : o;
function wa(s) {
  const a = { ...ka };
  a.mode = wn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ka.strings]), a.min = Math.round(li(s.min, 0, 24, a.min)), a.max = Math.round(li(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = wn(s.check, ["class", "pitch"], a.check), a.input = wn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(li(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(De.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(li(s.box, 0, 5, a.box)), a.order = wn(s.order, ["random", "up", "down"], a.order), a.chord = wn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ka.intervals]), a.direction = wn(s.direction, ["up", "down", "both"], a.direction), a.hints = wn(s.hints, ["off", "always", "fade"], a.hints), a.activity = wn(s.activity, ["play", "degree"], a.activity), a.minRms = li(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(s.clarity, 0.85, 0.99, a.clarity), a.stability = li(s.stability, 120, 800, a.stability), a.cents = li(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function ep(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(De.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return wa(c);
}
function tp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: De.CHROM[s.root],
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
const _i = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", gf = (s) => ["note", "degree"].includes(_i(s)) ? "class" : In(s) ? "pitch" : s.check, ma = (s) => _i(s) === "mic", Md = "musiikin-kartta:harjoittelu", jf = 3, To = () => ({ version: jf, settings: { ...ka }, stats: {}, recent: [], sessions: [] }), xf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, hn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function np(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || hn(s.errors)) && (s.ema === void 0 || hn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || hn(s.emaMs));
}
function ip(s) {
  return !!s && typeof s.id == "string" && hn(s.count) && hn(s.first) && s.first <= s.count && hn(s.ms) && hn(s.at) && (s.solo === void 0 || hn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || hn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Pd(s) {
  if (!s) return To();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !np(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !hn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !ip(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = wa(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: jf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Ad = 2500, rp = 8e3, bd = 0.3, qr = (s) => s.ema ?? s.correct / s.attempts, es = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Uo(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (es(s) - Ad) / (rp - Ad)));
  return qr(s) * 0.65 + a * 0.35;
}
function sp(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Uo(s)) * 3;
}
class Rd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Pd(a?.getItem(Md) ?? null);
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
        this.storage.setItem(Md, JSON.stringify(this.data)), this.warning = "";
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
    const o = xf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? qr(c) + bd * (d - qr(c)) : d,
      emaMs: c.attempts ? es(c) + bd * (a.ms - es(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Pd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...To(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const ap = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), lp = ["e", "B", "G", "D", "A", "E"];
function Sf({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: lp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const wf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), op = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Nf({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : ap.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function Mi({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta" }) {
  const p = { "--cols": s.max - s.min + 1 }, { strings: m, min: x, max: R } = s, [v, C] = L.useState({ string: Math.min(...m), fret: x }), M = L.useRef(null), A = new Map(a.map((S) => [We(S), S])), I = a.map((S) => `${We(S)}${S.kind}`).join(",");
  L.useEffect(() => {
    const S = M.current, $ = S?.querySelector(".target, .anchor");
    S && $ && (S.scrollLeft += $.getBoundingClientRect().left - S.getBoundingClientRect().left - S.clientWidth / 2 + $.clientWidth / 2);
  }, [I]);
  const [w, N] = L.useState({ left: !1, right: !1 });
  L.useEffect(() => {
    const S = M.current;
    if (!S) return;
    const $ = () => {
      const J = S.scrollLeft > 2, U = S.scrollLeft + S.clientWidth < S.scrollWidth - 2;
      N((_) => _.left === J && _.right === U ? _ : { left: J, right: U });
    };
    $(), S.addEventListener("scroll", $, { passive: !0 });
    const V = typeof ResizeObserver > "u" ? null : new ResizeObserver($);
    return V?.observe(S), () => {
      S.removeEventListener("scroll", $), V?.disconnect();
    };
  }, [I, x, R]);
  const z = m.includes(v.string) && v.fret >= x && v.fret <= R ? v : { string: Math.min(...m), fret: x };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: M, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Nf, { min: x, max: R }),
      /* @__PURE__ */ r.jsx("tbody", { children: De.OPEN_PITCHES.map((S, $) => /* @__PURE__ */ r.jsxs("tr", { className: m.includes($) ? "" : "unused", style: wf($), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${$ + 1}. kieli: ${rn[$]}${o.includes($) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Sf, { string: $ }),
          o.includes($) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        cr([$], x, R).map((V) => {
          const J = A.get(We(V)), U = `${rn[$]}-kieli, ${Ti(V.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${V.fret === 0 ? "open-fret " : ""}${J ? J.kind === "answer" ? "target" : J.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": $,
              "data-fret": V.fret,
              tabIndex: z.string === $ && z.fret === V.fret ? 0 : -1,
              onFocus: () => C(V),
              onKeyDown: (_) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) return;
                _.preventDefault();
                const F = [...m].sort((Te, B) => Te - B), ne = F.indexOf($), ie = _.key === "ArrowUp" ? F[Math.max(0, ne - 1)] : _.key === "ArrowDown" ? F[Math.min(F.length - 1, ne + 1)] : $, ge = _.key === "Home" ? x : _.key === "End" ? R : Math.max(x, Math.min(R, V.fret + (_.key === "ArrowRight" ? 1 : _.key === "ArrowLeft" ? -1 : 0)));
                _.currentTarget.closest("table")?.querySelector(`button[data-string="${ie}"][data-fret="${ge}"]`)?.focus();
              },
              disabled: c || !m.includes($),
              "aria-label": U + (J ? `, ${op[J.kind]}${J.label ? " " + J.label : ""}` : ""),
              onClick: () => d?.(V),
              children: J ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: J.label || "●" }) : null
            }
          ) }, V.fret);
        })
      ] }, $)) })
    ] }) })
  ] });
}
function up({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, x = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Nf, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: De.OPEN_PITCHES.map((R, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: wf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${rn[v]}`, children: /* @__PURE__ */ r.jsx(Sf, { string: v }) }),
      cr([v], p, m).map((C) => {
        const M = Object.hasOwn(a, x + We(C)) ? a[x + We(C)] : void 0, A = Uo(M), I = A === null ? "unseen" : M.attempts < 3 ? "few" : A >= 0.8 ? "strong" : A >= 0.5 ? "growing" : "weak", w = `${rn[v]}-kieli, ${Ti(C.fret)}, ${Le(C.midi, d)}`, N = M ? `${Math.round(A * 100)} %, ${M.correct}/${M.attempts} heti oikein, viime aikoina ${Math.round(qr(M) * 100)} % ja ${(es(M) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${I}`, title: `${w}: ${N}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: A === null ? "·" : M.attempts < 3 ? "?" : Math.round(A * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            N
          ] })
        ] }, C.fret);
      })
    ] }, v)) })
  ] }) });
}
const cp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Ma = (s) => s.mode === "scale" ? De.scaleNotes(De.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, Ef = (s) => De.fingeringBoxes(s.root, De.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Pi(s) {
  if (s.mode === "caged") {
    const a = yf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Ef(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function dp(s) {
  const a = Pi(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function ns(s) {
  const a = Pi(s), o = cr(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ke(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(yf(s.root, s.shape).map(We));
    return o.filter((p) => f.has(We(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => Ma(s).some(([p]) => Ke(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Ef(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function Cf(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function fp(s) {
  const a = Ma(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function _o(s) {
  const a = ns(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = fp(s).filter(([d]) => !a.some((f) => Ke(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Cf(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function hp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Tf(s) {
  return In(s) ? new Set(ns(s).map((a) => a.midi)).size : s.rounds;
}
function mp(s, a) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function er(s, a, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(c > 0)) return s[Math.floor(d * s.length)];
  let f = d * c;
  for (let p = 0; p < s.length; p++)
    if (f -= a[p], f < 0) return s[p];
  return s.at(-1);
}
const Ld = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function pp(s, a, o = {}, c, d = Math.random) {
  const f = _o(s);
  if (f) throw new Error(f);
  const p = gf(s), m = _i(s), x = p === "pitch", R = (_) => s.weak ? sp(o[xf({ input: m, check: p, hint: !1, item: _ })]) : 1, v = (_) => er(_, _.map(() => 1), d), C = ns(s), M = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const _ = Ei(C, (ie) => !!c && We(ie) === We(c.position)), F = er(_, _.map((ie) => R(`notes:${We(ie)}`)), d), ne = Le(F.midi, s.flats, x);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: ne,
      item: `notes:${We(F)}`,
      prompt: `Etsi ${ne} ${Ho[F.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const _ = (ge) => `ear-note:${Ke(ge.midi)}${s.reference ? ":ref" : ""}`, F = Ei(C, (ge) => !!c && Ke(ge.midi) === Ke(c.midi)), ne = er(F, F.map((ge) => R(_(ge))), d), ie = s.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...M,
      position: ne,
      midi: ne.midi,
      name: Le(ne.midi, s.flats),
      item: _(ne),
      choices: "note",
      reference: ie,
      sound: ie === void 0 ? [ne.midi] : [ie, ne.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const _ = Ei(C, (ne) => !!c && ne.midi === c.midi), F = er(_, _.map((ne) => R(`repeat:${ne.midi}`)), d);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: Le(F.midi, s.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const _ = Ei(Cf(s, C), (ie) => c?.interval === ie.iv && c?.direction === ie.direction), F = er(_, _.map((ie) => R(`interval:${ie.iv}:${ie.direction}`)), d), ne = v(Ei(F.pairs, (ie) => c?.reference === ie.reference.midi));
    return {
      ...M,
      position: ne.target,
      midi: ne.target.midi,
      name: Le(ne.target.midi, s.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Le(ne.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const A = Ma(s);
  let I, w = 0;
  if (In(s)) {
    const _ = hp(s, C);
    w = _.length, I = _[a % _.length];
  } else {
    const _ = A.filter(([ie]) => C.some((ge) => Ke(ge.midi - s.root) === ie)), F = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [A[a % A.length]] : A.filter(([, ie]) => ie.endsWith(s.chordTone)) : Ei(_, ([ie]) => c?.interval === ie), [ne] = er(F, F.map(([ie]) => R(Ld(s, ie))), d);
    I = v(Ei(C.filter((ie) => Ke(ie.midi - s.root) === ne), (ie) => !!c && We(ie) === We(c.position)));
  }
  const N = Ke(I.midi - s.root), z = A.find(([_]) => _ === N)[1], S = Xr(s.root, N, z), $ = x ? S + Zm(I.midi, S) : S, V = s.mode === "scale" ? `${oi(s.root)}-${De.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : kf(s.root, s.chord), J = s.mode !== "caged" && s.activity === "degree", U = J ? `${V}: mikä aste on ${S}?` : w ? `${V} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${z}. aste (${$}).` : `${V}: etsi ${z}. aste${x ? ` (${$})` : ""}.`;
  return {
    ...M,
    position: I,
    midi: I.midi,
    name: $,
    item: Ld(s, N),
    prompt: U,
    degree: z,
    interval: N,
    choices: J ? "degree" : "position"
  };
}
function Mo(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Ke(s) === Ke(a) : s === a);
}
function _f(s, a, o) {
  return Mo(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : cp(s) ? ns(s).some((c) => We(c) === We(o)) : !0 : !1;
}
function vp(s, a) {
  const o = Pi(s);
  return cr(o.strings, o.min, o.max).filter((c) => _f(s, a, c));
}
const Nt = (s, a, o) => ({ ...s, label: a, kind: o }), kp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function yp(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = Pi(s), f = cr(d.strings, d.min, d.max), p = vp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((z) => Nt(z, a.name, "answer")), text: `${a.name} on ${vf[a.position.string]}: ${Ti(a.position.fret)}.` };
    const w = f.find((z) => z.string === a.position.string), N = Le(w.midi, s.flats);
    return {
      marks: [Nt(w, N, "anchor")],
      text: `Apupiste: ${qm[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [Nt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Nt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[a.position.string]}-kieli, ${Ti(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((w) => Nt(w, Le(w.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Ho[a.position.string]}.` };
  if (s.mode === "interval") {
    const w = Le(a.reference, s.flats, !0), N = f.filter((z) => z.midi === a.reference).map((z) => Nt(z, w, "anchor"));
    return c ? {
      marks: [...N, ...p.map((z) => Nt(z, Le(z.midi, s.flats, !0), "answer"))],
      text: `${kp(Zr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: N, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = ns(s), x = Ma(s), R = (w) => x.find(([N]) => N === Ke(w.midi - s.root))?.[1] ?? "", v = Xr(s.root, a.interval, a.degree), C = m.filter((w) => Ke(w.midi - s.root) === 0), M = (w) => p.some((N) => We(N) === We(w)), A = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((w) => Nt(w, R(w), M(w) ? "answer" : "shape")), text: A } : { marks: m.map((w) => Nt(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const I = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((N) => Ke(N.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : C).map((N) => Nt(N, "1", "anchor")), ...w.map((N) => Nt(N, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((N) => Nt(N, v, "shape")), text: `Katso ${I} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((N) => Nt(N, "1", "anchor")), ...w.map((N) => Nt(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !M(w)).map((w) => Nt(w, "1", "anchor")), ...p.map((w) => Nt(w, a.degree, "answer"))], text: A } : a.interval === 0 ? { marks: [], text: `1. aste on ${I} perussävel ${oi(s.root)}.` } : { marks: C.map((w) => Nt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class gp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Tf(a);
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
      this.question = pp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = mp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? Mo(f.midi, a, "class") : o === "board" ? !!c && _f(this.settings, f, c) : Mo(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, x = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${We(m)}` : f.item,
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
    return m ? x.position = We(m) : this.settings.mode === "notes" && (x.position = We(f.position)), this.results.push(x), this.record(x), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Po(s) {
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
const Ao = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], rr = (s) => Ao.find(([a]) => a === s)?.[1] ?? s;
function Rt({ label: s, children: a }) {
  const o = L.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    L.cloneElement(a, { id: o })
  ] });
}
function Od({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
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
function $d(s) {
  const a = Pi(s), o = Tf(s), c = _i(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${_a[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Fd({ s, change: a, locked: o, problem: c }) {
  const d = L.useId(), f = (v, C) => a({ ...s, [v]: C }), p = Pi(s), m = _i(s) === "note" || _i(s) === "degree", x = ["scale", "chord", "caged"].includes(s.mode), R = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Ao.map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Ao.find(([v]) => v === s.mode)[2] })
    ] }),
    x && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(Rt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: De.CHROM.map((v, C) => /* @__PURE__ */ r.jsx("option", { value: C, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(De.SCALES).map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ci).map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (C) => f("intervals", C.target.checked ? [...s.intervals, v] : s.intervals.filter((M) => M !== v)) }),
        Zr[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Od,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ..._a[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Od, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
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
          /* @__PURE__ */ r.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: rn.map((v, C) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(C), onChange: (M) => f("strings", M.target.checked ? [...s.strings, C] : s.strings.filter((A) => A !== C)) }),
          C + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        R && /* @__PURE__ */ r.jsxs("label", { children: [
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
const jp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function xp({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: jp.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
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
const Sp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, bo = 100, Mf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Go(s) {
  if (s === null || s.trim() === "") return bo;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : bo;
}
function wp() {
  try {
    return Go(localStorage.getItem(Mf));
  } catch {
    return bo;
  }
}
function Np(s) {
  try {
    localStorage.setItem(Mf, String(Go(String(s))));
  } catch {
  }
}
function Id(s, a, o = !0) {
  return o ? Sp[s] * Go(String(a)) / 100 : 0;
}
function Pf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Ep = 0.12, Cp = 2e3, Tp = 3;
function _p(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Ep || s.seeking || s.readyState < Tp ? !1 : s.msSinceLastFix >= Cp;
}
const Mp = 1.5, Pp = 0.4, Ap = 0.5;
let Ro = null, bp = null;
function Rp(s) {
  return Ro !== null ? Ro : (bp ??= Pf()) ? 0 : Pp;
}
class Af {
  constructor(a = Rp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, c = !1, d = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, x = this.lastFix.get(o);
    if (!_p({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: x === void 0 ? 1 / 0 : d - x
    }, c)) return !1;
    const R = !a.paused;
    !c && R && x !== void 0 && (this.latency = Math.min(Mp, Math.max(0, this.latency - Ap * f)), Ro = this.latency);
    let v = a.currentTime + (R ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return R ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
const Lp = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Op {
  constructor(a = Lp) {
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
const $p = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Fp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Dd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function bf() {
  const s = L.useRef(null), a = L.useRef(null), [o, c] = L.useState(!1), [d, f] = L.useState(!1), [p, m] = L.useState(!1), [x, R] = L.useState(0), [v, C] = L.useState(0), [M, A] = L.useState(""), I = L.useRef(new Af());
  function w(V = !1) {
    const J = s.current, U = a.current;
    !J || !U || !Number.isFinite(J.currentTime) || I.current.align(J, U, V);
  }
  function N() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function z() {
    const V = s.current, J = a.current;
    if (!(!V || !J)) {
      if (o) {
        N();
        return;
      }
      A(""), J.muted = !d, J.volume = 0.55, V.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [V.play(), J.play()] : [V.play()]), w(), c(!0);
      } catch {
        N(), A("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function S(V) {
    const J = s.current, U = a.current;
    if (!(!J || !U || !Number.isFinite(V))) {
      J.currentTime = V;
      try {
        U.currentTime = V;
      } catch {
      }
      R(V);
    }
  }
  function $(V) {
    const J = s.current, U = a.current;
    if (f(V), !!U) {
      if (U.muted = !V, !V) {
        U.pause();
        return;
      }
      !J || !o || (w(!0), U.play().catch(() => A("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return L.useEffect(() => {
    const V = () => {
      document.hidden && (s.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), s.current?.pause(), a.current?.pause();
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
              onChange: (V) => $(V.target.checked)
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
              onChange: (V) => m(V.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        z();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(x, v > 0 ? v : 1),
          disabled: !v,
          onChange: (V) => S(Number(V.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Dd(x),
        " / ",
        Dd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: $p,
        loop: p,
        onLoadedMetadata: (V) => C(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          R(V.currentTarget.currentTime), V.currentTarget.paused || w();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), R(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => A("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Fp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const V = s.current, J = a.current;
          V?.duration && J?.duration && Math.abs(V.duration - J.duration) > 0.15 && A("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => A("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    M && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: M }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Ip = 4e3;
class zd extends Error {
  name = "MicSetupError";
}
async function Dp(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new zd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let R;
      await Promise.race([
        d.resume(),
        new Promise((v, C) => {
          R = setTimeout(() => C(new zd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Ip);
        })
      ]).finally(() => clearTimeout(R));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], x = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: x.deviceId ?? "",
      channelCount: x.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((R) => R.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function zp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var yo, Vd;
function Vp() {
  if (Vd) return yo;
  Vd = 1;
  function s(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const R = Math.PI * c / this.size;
      o[c] = Math.cos(R), o[c + 1] = -Math.sin(R);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var x = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << x;
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, R = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const N = R[x];
        this._singleTransform2(m, N, f);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const N = R[x];
        this._singleTransform4(m, N, f);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var A = m + M, I = m, w = 0; I < A; I += 2, w += f) {
          const N = I, z = N + M, S = z + M, $ = S + M, V = o[N], J = o[N + 1], U = o[z], _ = o[z + 1], F = o[S], ne = o[S + 1], ie = o[$], ge = o[$ + 1], Te = V, B = J, re = C[w], K = v * C[w + 1], oe = U * re - _ * K, se = U * K + _ * re, W = C[2 * w], ue = v * C[2 * w + 1], ee = F * W - ne * ue, g = F * ue + ne * W, T = C[3 * w], ae = v * C[3 * w + 1], xe = ie * T - ge * ae, Se = ie * ae + ge * T, G = Te + ee, H = B + g, q = Te - ee, E = B - g, X = oe + xe, le = se + Se, ce = v * (oe - xe), fe = v * (se - Se), ve = G + X, Ae = H + le, _e = G - X, Oe = H - le, Xe = q + fe, He = E - ce, Qe = q - fe, Ue = E + ce;
          o[N] = ve, o[N + 1] = Ae, o[z] = Xe, o[z + 1] = He, o[S] = _e, o[S + 1] = Oe, o[$] = Qe, o[$ + 1] = Ue;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + 1], R = p[c + d], v = p[c + d + 1], C = m + R, M = x + v, A = m - R, I = x - v;
    f[o] = C, f[o + 1] = M, f[o + 2] = A, f[o + 3] = I;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, R = d * 3, v = p[c], C = p[c + 1], M = p[c + d], A = p[c + d + 1], I = p[c + x], w = p[c + x + 1], N = p[c + R], z = p[c + R + 1], S = v + I, $ = C + w, V = v - I, J = C - w, U = M + N, _ = A + z, F = m * (M - N), ne = m * (A - z), ie = S + U, ge = $ + _, Te = V + ne, B = J - F, re = S - U, K = $ - _, oe = V - ne, se = J + F;
    f[o] = ie, f[o + 1] = ge, f[o + 2] = Te, f[o + 3] = B, f[o + 4] = re, f[o + 5] = K, f[o + 6] = oe, f[o + 7] = se;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, R = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Me = R[x];
        this._singleRealTransform2(m, Me >>> 1, f >>> 1);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Me = R[x];
        this._singleRealTransform4(m, Me >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 1, A = M >>> 1, I = A >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, N = 0; w <= I; w += 2, N += f) {
          var z = m + w, S = z + A, $ = S + A, V = $ + A, J = o[z], U = o[z + 1], _ = o[S], F = o[S + 1], ne = o[$], ie = o[$ + 1], ge = o[V], Te = o[V + 1], B = J, re = U, K = C[N], oe = v * C[N + 1], se = _ * K - F * oe, W = _ * oe + F * K, ue = C[2 * N], ee = v * C[2 * N + 1], g = ne * ue - ie * ee, T = ne * ee + ie * ue, ae = C[3 * N], xe = v * C[3 * N + 1], Se = ge * ae - Te * xe, G = ge * xe + Te * ae, H = B + g, q = re + T, E = B - g, X = re - T, le = se + Se, ce = W + G, fe = v * (se - Se), ve = v * (W - G), Ae = H + le, _e = q + ce, Oe = E + ve, Xe = X - fe;
          if (o[z] = Ae, o[z + 1] = _e, o[S] = Oe, o[S + 1] = Xe, w === 0) {
            var He = H - le, Qe = q - ce;
            o[$] = He, o[$ + 1] = Qe;
            continue;
          }
          if (w !== I) {
            var Ue = E, gt = -X, Ze = H, Ve = -q, it = -v * ve, Mt = -v * fe, Gt = -v * ce, zt = -v * le, sn = Ue + it, Wt = gt + Mt, dt = Ze + zt, Dn = Ve - Gt, we = m + A - w, Qt = m + M - w;
            o[we] = sn, o[we + 1] = Wt, o[Qt] = dt, o[Qt + 1] = Dn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + d], R = m + x, v = m - x;
    f[o] = R, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, R = d * 3, v = p[c], C = p[c + d], M = p[c + x], A = p[c + R], I = v + M, w = v - M, N = C + A, z = m * (C - A), S = I + N, $ = w, V = -z, J = I - N, U = w, _ = z;
    f[o] = S, f[o + 1] = 0, f[o + 2] = $, f[o + 3] = V, f[o + 4] = J, f[o + 5] = 0, f[o + 6] = U, f[o + 7] = _;
  }, yo;
}
var Bp = Vp();
const Kp = /* @__PURE__ */ Fm(Bp);
class Qr {
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
    return new Qr(
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
    return new Qr(
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
    return new Qr(a, (o) => Array(o));
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
    this._inputLength = a, this._fft = new Kp(Gp(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Hp(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function Up(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], x = f / 2 - p + m / 2, R = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, C = -R / (2 * x), M = x * C * C + R * C + v;
  return [C, M];
}
class Yr {
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
    return new Yr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Yr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Yr(a, (o) => Array(o));
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
    this._autocorrelator = new Qr(a, o), this._nsdfBuffer = o(a);
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
    const c = Hp(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((x) => this._nsdfBuffer[x])), f = c.find(
      (x) => this._nsdfBuffer[x] >= this._clarityThreshold * d
    ), [p, m] = Up(
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
function Gp(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function Wp(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const Qp = 0.05, Yp = 1.5;
class Jp {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = Wp(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Qp))), this.detector = Yr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Xp();
  onset = new Zp();
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
      onFrame: x,
      onStableNote: R
    } = this.opts, v = this.analysers.map((_, F) => (_.getFloatTimeDomainData(this.buffers[F]), Bd(this.buffers[F], this.buffers[F].length - this.shortLength))), C = v.indexOf(Math.max(...v));
    C !== this.channel && v[C] > (v[this.channel] ?? 0) * Yp && (this.channel = C);
    const M = this.buffers[this.channel], A = v[this.channel], I = qp(M, M.length - this.shortLength), w = { rms: A, peak: I, channel: this.channel, levels: v }, N = A < c, z = this.onset.feed(A, a, c);
    if (N && Bd(M, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), x?.({ ...w, status: "silent" });
      return;
    }
    const [S, $] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(S) || $ < o) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: N ? "silent" : "unclear", clarity: isFinite($) ? $ : 0 });
      return;
    }
    if (S < p || S > m) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: "out-of-range", frequency: S, clarity: $ });
      return;
    }
    const { midi: V, cents: J } = Ym(S);
    if (Math.abs(J) > f) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: "off-pitch", frequency: S, clarity: $, midi: V, cents: J });
      return;
    }
    x?.({ ...w, status: "pitch", frequency: S, clarity: $, midi: V, cents: J });
    const U = this.gate.feed(V, a, d, N, z);
    U !== null && R?.({ midi: V, frequency: S, cents: J, clarity: $, timestamp: a, heldMs: U.heldMs });
  }
}
class Xp {
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
class Zp {
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
function Bd(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function qp(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const ur = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let nr;
function Rf() {
  return (!nr || nr.state === "closed") && (nr = new AudioContext()), nr;
}
function ev() {
  const s = nr;
  nr = void 0, s?.close().catch(() => {
  });
}
const Lf = (s) => s instanceof Error ? s.name : "";
function tv(s) {
  const a = Lf(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class nv {
  constructor(a = (o) => Dp(o, Rf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Lf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new Jp(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, x = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((R) => R.addEventListener("ended", m, { once: !0, signal: x.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: x.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
function Of(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Kd = (s) => Math.max(0, Math.min(1, (ur(s) + 60) / 60));
function iv(s) {
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
function Pa(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class is {
  constructor(a = Rf) {
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
    const p = Array.from({ length: 12 }, (R, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((R, v) => {
      const C = d.createOscillator(), M = d.createGain(), A = d.currentTime + 0.05 + v * 0.8;
      m ? C.setPeriodicWave(m) : C.type = "triangle", C.frequency.value = ko(R), M.gain.setValueAtTime(0, A), M.gain.linearRampToValueAtTime(0.22, A + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, A + 0.7), C.connect(M), M.connect(f), C.start(A), C.stop(A + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((R) => {
      this.settle = R, this.timer = setTimeout(() => R(!0), a.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, c) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, f = this.provide();
    if (await go(f), d !== this.token) return !1;
    const p = 60 / Math.max(40, Math.min(140, o)), m = f.createGain();
    m.connect(f.destination), this.master = m;
    const x = Array.from({ length: 12 }, (A, I) => 1 / (I + 1) ** 1.3), R = f.createPeriodicWave?.(
      new Float32Array([0, ...x.map(() => 0)]),
      new Float32Array([0, ...x])
    ), v = f.currentTime + 0.05;
    let C = 0;
    return a.forEach((A, I) => {
      if (!Number.isFinite(A.beat) || A.beat < 0 || !Number.isFinite(A.duration) || A.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const w = v + A.beat * p, N = A.duration * p, z = w + Math.max(0.08, N * 0.94), S = f.createOscillator(), $ = f.createGain();
      R ? S.setPeriodicWave(R) : S.type = "triangle", S.frequency.value = ko(A.midi), $.gain.setValueAtTime(0, w), $.gain.linearRampToValueAtTime(0.22, w + 0.012), $.gain.exponentialRampToValueAtTime(1e-3, z - 0.01), S.connect($), $.connect(m), S.start(w), S.stop(z), c && this.noteTimers.push(setTimeout(() => {
        d === this.token && c(I);
      }, 50 + A.beat * p * 1e3)), C = Math.max(C, A.beat + A.duration);
    }), !await new Promise((A) => {
      this.settle = A, this.timer = setTimeout(() => A(!0), 50 + C * p * 1e3 + 150);
    }) || d !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], m.disconnect(), this.master = void 0, !0);
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
    const m = Array.from({ length: 12 }, (w, N) => 1 / (N + 1) ** 1.3), x = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let R = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (R = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let C = f.currentTime + 0.05, M = 0;
    const A = [], I = () => {
      if (d === this.token) {
        if (C < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - C) / R);
          C += w * R, M = (M + w) % a.length, A.length = 0;
        }
        for (; C < f.currentTime + v; ) {
          const w = a[M], N = M, z = C, S = f.createOscillator(), $ = f.createGain();
          x ? S.setPeriodicWave(x) : S.type = "triangle", S.frequency.value = ko(w), $.gain.setValueAtTime(0, z), $.gain.linearRampToValueAtTime(0.22, z + 0.012), $.gain.exponentialRampToValueAtTime(1e-3, z + R * 0.975), S.connect($), $.connect(p), S.start(z), S.stop(z + R * 0.985), A.push({ at: z, index: N }), C += R, M = (M + 1) % a.length;
        }
        for (; A.length && A[0].at <= f.currentTime + 0.01; ) {
          const w = A.shift();
          o?.(w.index);
        }
      }
    };
    return I(), this.loopTick = setInterval(I, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function ui(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const x = { position: d === null || f === null ? null : Fe(d, f), beat: o, duration: p };
    return o += p, x;
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
const Hd = ui("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Ud = ui("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), rv = ui("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Gd = ui("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Wd = ui("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), sv = ui("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Qd = ui("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Yd = ui("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), av = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Hd, Ud],
    whole: jo("Melodia · A + B + C", Hd, Ud, rv),
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
    fragments: [Gd, Wd],
    whole: jo("Ukko Nooa · A + B", Gd, Wd),
    bonus: sv,
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
    fragments: [Qd, Yd],
    whole: jo("Siirtymämelodia · A + B", Qd, Yd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function lv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const Jd = ["e", "B", "G", "D", "A", "E"];
function Na({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = av[s], [f, p] = L.useState(a === "full" ? "whole" : "a"), [m, x] = L.useState(d.tempo), [R, v] = L.useState(a !== "memory"), [C, M] = L.useState(!1), [A, I] = L.useState(null), [w, N] = L.useState(""), z = L.useRef(new is()), S = L.useRef(0);
  function $() {
    S.current++, z.current.stop(), M(!1), I(null);
  }
  L.useEffect(() => {
    c && (c.current = $);
    const B = () => {
      document.hidden && $();
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), S.current++, z.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const V = [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    ...a === "listen" ? [] : [{ id: "b", name: "Osa B", clip: d.fragments[1] }],
    ...a === "full" ? [{ id: "whole", name: "Pidempi melodia", clip: d.whole }] : [],
    ...a === "full" && d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], J = V.find((B) => B.id === f) ?? V[0], U = J.clip, _ = lv(U), F = A === null ? null : _[A]?.beat ?? null, ne = F === null ? null : U.events.find((B) => B.beat === F)?.position ?? null, ie = U.beats / 4;
  async function ge() {
    if (C) {
      $();
      return;
    }
    o?.();
    const B = ++S.current;
    z.current.stop(), M(!0), I(null), N("");
    try {
      await z.current.playTimed(_, m, (re) => {
        B === S.current && I(re);
      });
    } catch (re) {
      B === S.current && N(Pa(re));
    } finally {
      B === S.current && (M(!1), I(null));
    }
  }
  function Te(B) {
    $(), N(""), p(B);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "full" ? "ENNEN IMPROVISOINTIA · PIENI KAPPALE" : a === "memory" ? "MELODIA MUISTISTA" : "TUNNISTETTAVA MELODIAPÄTKÄ" }),
    /* @__PURE__ */ r.jsx("h4", { children: d.title }),
    /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
      d.qualifier,
      " · 4/4 · ",
      ie.toString().replace(".", ","),
      " tahtia valitussa osassa"
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "melody-instruction", children: a === "listen" ? "Kuuntele ensin lyhyt katkelma. Samat sävelet löytyvät opeteltavasta asteikosta." : a === "fingering" ? "Kokeile osia A ja B erikseen. Seuraa rytmiä ja löydä oikeat kielet sekä nauhat." : a === "memory" ? "Kuuntele katkelma, piilota tabulatuuri ja yritä soittaa se muistista. Voit pyytää merkinnät takaisin." : "Kuuntele osat erikseen ja yhdistä ne pidemmäksi melodiaksi. Soita se sitten itse. Tämän jälkeen siirryt improvisoimaan ja muuttelemaan tuttuja säveliä." }),
    a === "full" && d.bonus && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
      "Viimeinen valinta on ",
      /* @__PURE__ */ r.jsx("strong", { children: "erillinen oma harjoitus" }),
      ", ei osa ",
      d.title,
      " -sävelmää."
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: V.map((B) => /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": J.id === B.id,
        onClick: () => Te(B.id),
        children: B.name
      },
      B.id
    )) }),
    /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": C, onClick: () => {
        ge();
      }, children: C ? "■ Pysäytä melodia" : "▶ Kuuntele valittu melodia kerran" }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        "Tempo",
        /* @__PURE__ */ r.jsx("select", { value: m, onChange: (B) => {
          $(), x(Number(B.target.value));
        }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((B, re) => B - re).filter((B, re, K) => K.indexOf(B) === re).map((B) => /* @__PURE__ */ r.jsxs("option", { value: B, children: [
          B,
          " BPM"
        ] }, B)) })
      ] }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": R, onClick: () => v((B) => !B), children: R ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
    ] }),
    w && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: w }),
    /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: C && A !== null ? `Nyt soi ${Le(_[A].midi)} · ${Jd[ne.string]}-kieli, ${ne.fret}. nauha` : C ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
    R && /* @__PURE__ */ r.jsxs("div", { className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
      /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${J.name}, kitaratabulatuuri`, children: [
        /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
          U.events.map((B, re) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: B.beat % 4 === 0 ? "bar-start" : "", children: [
            /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: B.beat % 4 === 0 ? `T${Math.floor(B.beat / 4) + 1}` : "·" }),
            /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: B.duration === 1 ? "♩" : `${B.duration} iskua` })
          ] }, re))
        ] }) }),
        /* @__PURE__ */ r.jsx("tbody", { children: Jd.map((B, re) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: B }),
          U.events.map((K, oe) => {
            const se = K.position?.string === re, W = se && F === K.beat;
            return /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `${K.beat % 4 === 0 ? "bar-start " : ""}${W ? "melody-playing " : ""}${se && Ke(K.position.midi) === d.tonic ? "melody-root" : ""}`,
                "aria-label": se ? `${B}-kieli, ${K.position.fret}. nauha, ${Le(K.position.midi)}` : void 0,
                children: se ? K.position.fret : "—"
              },
              oe
            );
          })
        ] }, re)) })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
    d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
  ] });
}
const Lo = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [1, 2]), $f = [...new Map(Lo.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Fe(o, c);
  return [We(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ea = [5, 4, 3, 2, 1, 0].flatMap((s) => $f.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), Oo = [
  ...Ea,
  ...Ea.slice(1, -1).reverse()
], ov = [...Oo, Ea[0]], Xd = new Set(
  Lo[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Fe(a, o);
    return We(c);
  })).filter((s) => Lo[1].positions[0].strings.flatMap((a, o) => a.map((c) => We(Fe(o, c)))).includes(s))
), uv = [
  Fe(5, 5),
  Fe(5, 8),
  Fe(5, 10),
  Fe(4, 7),
  Fe(4, 10),
  Fe(3, 7),
  Fe(3, 10),
  Fe(3, 7),
  Fe(4, 10),
  Fe(4, 7),
  Fe(5, 10),
  Fe(5, 8),
  Fe(5, 5)
], Ff = "musiikin-kartta:skaalapolku:bridge-1-2:v1", If = "musiikin-kartta:skaalapolku:bridge-tempo:v1", xo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], Zd = (s) => Ke(s) === 9;
function qd() {
  try {
    const s = Number(localStorage.getItem(Ff));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function cv() {
  try {
    const s = Number(localStorage.getItem(If));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function dv({ onBack: s, onPosition: a }) {
  const [o, c] = L.useState(qd), [d, f] = L.useState(qd), [p, m] = L.useState(!1), [x, R] = L.useState("roots"), [v, C] = L.useState(cv), [M, A] = L.useState(null), [I, w] = L.useState(null), [N, z] = L.useState(""), S = L.useRef(new is()), $ = L.useRef(0), V = L.useRef(null), J = I === null ? null : Oo[I];
  function U() {
    V.current?.(), $.current++, S.current.stop(), A(null), w(null);
  }
  L.useEffect(() => {
    const B = () => {
      document.hidden && ($.current++, S.current.stop(), A(null), w(null));
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), $.current++, S.current.stop();
    };
  }, []);
  async function _(B) {
    V.current?.();
    const re = ++$.current;
    S.current.stop(), w(null), z(""), A(B);
    try {
      B === "transition" ? await S.current.play(uv.map((K) => K.midi)) : B === "once" ? await S.current.play(ov.map((K) => K.midi)) : await S.current.loop(Oo.map((K) => K.midi), (K) => {
        re === $.current && w(K);
      }, v);
    } catch (K) {
      re === $.current && z(Pa(K));
    } finally {
      re === $.current && (A(null), w(null));
    }
  }
  function F(B) {
    const re = Math.max(40, Math.min(140, B));
    C(re), S.current.setLoopTempo(re);
    try {
      localStorage.setItem(If, String(re));
    } catch {
    }
  }
  function ne(B) {
    B > o || (U(), f(B), m(!1), R("roots"));
  }
  function ie() {
    U();
    const B = Math.min(4, d + 1);
    if (f(B), m(!1), R("roots"), B > o) {
      c(B);
      try {
        localStorage.setItem(Ff, String(B));
      } catch {
      }
    }
  }
  const ge = (B, re) => d < 2 || d === 2 && p && Xd.has(re) || d === 3 && (x === "all" || x === "roots" && Zd(B)), Te = $f.filter((B) => ge(B.midi, We(B))).map((B) => ({
    ...B,
    label: d < 2 || d === 2 && p || d === 3 && x === "all" ? Le(B.midi) : "A",
    kind: d < 2 && J?.string === B.string && J?.fret === B.fret ? "playing" : Zd(B.midi) ? "answer" : Xd.has(We(B)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      U(), s();
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
        U(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        U(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ne(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: xo.map((B, re) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: re === d ? "journey-step current" : "journey-step",
        "aria-current": re === d ? "step" : void 0,
        disabled: re > o,
        onClick: () => ne(re),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: re > o ? "🔒" : re < o ? "✓" : re + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: B.title })
        ]
      },
      B.title
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
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ r.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "whole",
              onClick: () => M === "whole" ? U() : void _("whole"),
              children: M === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "once",
              onClick: () => M === "once" ? U() : void _("once"),
              children: M === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "transition",
              onClick: () => M === "transition" ? U() : void _("transition"),
              children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((B) => !B), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((B) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: B.value,
                  checked: x === B.value,
                  onChange: () => R(B.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: B.name })
            ] }, B.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "once" ? U() : void _("once"), children: M === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "transition" ? U() : void _("transition"), children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: M === "whole" ? J && d < 2 ? `Nyt soi ${Le(J.midi, !1, !0)} · ${rn[J.string]}-kieli, nauha ${J.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : M === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : M === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        N && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ r.jsx(
          Mi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: Te,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? x === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : x === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d >= 1 && d <= 3 && /* @__PURE__ */ r.jsx(
          Na,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : d === 2 ? "memory" : "full",
            onBeforePlay: U,
            stopHandleRef: V
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx(bf, {}),
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
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
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
const Jr = "musiikin-kartta:skaalapolku:v1", ya = "musiikin-kartta:skaalapolku:position-2:v1", So = "musiikin-kartta:skaalapolku:position-3:v1", ga = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ca = "musiikin-kartta:skaalapolku:active-position:v1", Df = "musiikin-kartta:skaalapolku:tempo:v1", sr = 75, $o = 40, Fo = 140;
function fv() {
  try {
    const s = localStorage.getItem(Df);
    if (s === null) return sr;
    const a = Number(s);
    return Number.isInteger(a) && a >= $o && a <= Fo && a % 5 === 0 ? a : sr;
  } catch {
    return sr;
  }
}
const wo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], ef = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nn(s = Jr) {
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
    return s === "3" && Nn(ga) === 4 ? 3 : Nn(Jr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function hv() {
  try {
    return Nn(ya) === 4 && localStorage.getItem(Ca) === "bridge";
  } catch {
    return !1;
  }
}
function mv({ onBack: s }) {
  const [a, o] = L.useState(No), [c, d] = L.useState(hv), [f, p] = L.useState(() => ({
    1: Nn(Jr),
    2: Nn(ya),
    3: Nn(So)
  })), [m, x] = L.useState(() => Nn(No() === 3 ? So : No() === 2 ? ya : Jr)), R = f[a], [v, C] = L.useState(!1), [M, A] = L.useState("roots"), [I, w] = L.useState(fv), [N, z] = L.useState(null), [S, $] = L.useState(null), [V, J] = L.useState(""), U = L.useRef(new is()), _ = L.useRef(0), F = L.useRef(null);
  function ne(G) {
    const H = Math.max($o, Math.min(Fo, G));
    w(H), U.current.setLoopTempo(H);
    try {
      localStorage.setItem(Df, String(H));
    } catch {
    }
  }
  function ie() {
    F.current?.(), _.current++, U.current.stop(), z(null), $(null);
  }
  L.useEffect(() => {
    const G = () => {
      document.hidden && (_.current++, U.current.stop(), z(null), $(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), _.current++, U.current.stop();
    };
  }, []);
  const ge = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [a])[0].positions[0], Te = ge.strings.flatMap((G, H) => G.map((q) => Fe(H, q))).sort((G, H) => G.midi - H.midi || H.string - G.string), B = [...Te, ...Te.slice(1, -1).reverse()], re = S === null ? null : B[S], K = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], oe = ge.start, se = ge.end, W = (G) => Ke(G) === 9, ue = (G) => m < 2 ? !0 : m === 2 ? v && W(G) : M === "scale" || M === "roots" && W(G), ee = Te.filter((G) => ue(G.midi)).map((G) => ({
    ...G,
    label: m < 2 || m === 3 && M === "scale" ? Le(G.midi) : "A",
    kind: m < 2 && re?.string === G.string && re.fret === G.fret ? "playing" : W(G.midi) ? "answer" : "shape"
  }));
  async function g(G) {
    F.current?.();
    const H = ++_.current;
    U.current.stop(), $(null), J(""), z(G);
    try {
      G === "phrase" ? await U.current.play(K) : await U.current.loop(B.map((q) => q.midi), (q) => {
        H === _.current && $(q);
      }, m === 2 ? I : sr);
    } catch (q) {
      H === _.current && J(Pa(q));
    } finally {
      H === _.current && (z(null), $(null));
    }
  }
  function T() {
    ie();
    const G = Math.min(4, m + 1);
    if (x(G), C(!1), A("roots"), G > R) {
      p((q) => ({ ...q, [a]: G }));
      const H = a === 1 ? Jr : a === 2 ? ya : So;
      try {
        localStorage.setItem(H, String(G));
      } catch {
      }
    }
  }
  function ae(G) {
    G > R || (ie(), x(G), C(!1), A("roots"));
  }
  function xe(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && Nn(ga) < 4)) {
      ie(), d(!1), o(G), x(f[G]), C(!1), A("roots"), J("");
      try {
        localStorage.setItem(Ca, String(G));
      } catch {
      }
    }
  }
  function Se() {
    if (!(f[2] < 4)) {
      ie(), d(!0), C(!1), J("");
      try {
        localStorage.setItem(Ca, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(dv, { onBack: s, onPosition: xe }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
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
      oe,
      "–",
      se,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => xe(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => xe(2),
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
          disabled: Nn(ga) < 4,
          onClick: () => xe(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: wo.map((G, H) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: H === m ? "journey-step current" : "journey-step",
        "aria-current": H === m ? "step" : void 0,
        disabled: H > R,
        onClick: () => ae(H),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: H > R ? "🔒" : H < R ? "✓" : H + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: H === 4 ? `Positio ${a} harjoiteltu` : G.title })
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
          a === 1 ? "Harjoittele myös vanhan perinnemelodian alkua seuraavassa osiossa." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ r.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ r.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ r.jsxs("p", { children: [
          a === 1 ? "Harjoittele ensin alla pidempi melodia osista A, B ja C. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: I <= $o,
              onClick: () => ne(I - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            I,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: I >= Fo,
              onClick: () => ne(I + 5),
              children: "+ 5"
            }
          ),
          I !== sr && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ne(sr),
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? ie() : void g("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => N === "phrase" ? ie() : void g("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? re && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Le(re.midi, !1, !0)} · ${rn[re.string]}-kieli, nauha ${re.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: V }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => C((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ae(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              ef.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: M === G.value,
                    onChange: () => A(G.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              g("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(Mi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: ee, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? ef.find((G) => G.value === M).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(Mi, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: ee, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && m >= 0 && m <= 3 && /* @__PURE__ */ r.jsx(
          Na,
          {
            pieceId: "wayfaring",
            stage: m === 0 ? "listen" : m === 1 ? "fingering" : m === 2 ? "memory" : "full",
            onBeforePlay: ie,
            stopHandleRef: F
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(bf, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: T, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ae(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => xe(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => xe(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Nn(ga) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const pv = ["ionian", "aeolian"], ir = {
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
      Fe(4, 3),
      Fe(4, 5),
      Fe(3, 2),
      Fe(3, 3),
      Fe(3, 5),
      Fe(2, 2),
      Fe(2, 4),
      Fe(2, 5)
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
      Fe(5, 5),
      Fe(5, 7),
      Fe(5, 8),
      Fe(4, 5),
      Fe(4, 7),
      Fe(4, 8),
      Fe(3, 5),
      Fe(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, zf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", Vf = "musiikin-kartta:moodipolku:active:v1", vv = (s) => {
  const a = ir[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, kv = (s) => [...vv(s), ir[s].positions[0]], tf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function ja(s) {
  try {
    const a = Number(localStorage.getItem(zf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function nf() {
  try {
    return localStorage.getItem(Vf) === "aeolian" && ja("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function yv({ onBack: s }) {
  const [a, o] = L.useState(nf), [c, d] = L.useState(() => ({
    ionian: ja("ionian"),
    aeolian: ja("aeolian")
  })), [f, p] = L.useState(() => ja(nf())), [m, x] = L.useState(null), [R, v] = L.useState(null), [C, M] = L.useState(!1), [A, I] = L.useState("roots"), [w, N] = L.useState(""), [z, S] = L.useState(null), [$, V] = L.useState(null), J = L.useRef(new is()), U = L.useRef(0), _ = L.useRef(null), F = ir[a], ne = kv(a), ie = m === "scale" && R !== null ? ne[R] : null;
  function ge() {
    _.current?.(), U.current++, J.current.stop(), x(null), v(null);
  }
  L.useEffect(() => {
    const T = () => {
      document.hidden && (U.current++, J.current.stop(), x(null), v(null));
    };
    return document.addEventListener("visibilitychange", T), () => {
      document.removeEventListener("visibilitychange", T), U.current++, J.current.stop();
    };
  }, []);
  async function Te(T, ae, xe = !1) {
    _.current?.();
    const Se = ++U.current;
    J.current.stop(), v(null), N(""), x(T);
    try {
      const G = xe ? await J.current.loop(ae, void 0, 75) : await J.current.play(ae, (H) => {
        Se === U.current && T === "scale" && v(H);
      });
      return Se === U.current && G;
    } catch (G) {
      return Se === U.current && N(Pa(G)), !1;
    } finally {
      Se === U.current && (x(null), v(null));
    }
  }
  function B(T) {
    T > c[a] || (ge(), p(T), S(null), V(null), M(!1), I("roots"), N(""));
  }
  function re() {
    ge();
    const T = Math.min(5, f + 1);
    if (p(T), S(null), V(null), M(!1), I("roots"), T > c[a]) {
      d((ae) => ({ ...ae, [a]: T }));
      try {
        localStorage.setItem(zf(a), String(T));
      } catch {
      }
    }
  }
  function K(T) {
    if (!(T === "aeolian" && c.ionian < 5)) {
      ge(), o(T), p(c[T]), S(null), V(null), M(!1), I("roots"), N("");
      try {
        localStorage.setItem(Vf, T);
      } catch {
      }
    }
  }
  async function oe() {
    ge(), V(null), S(null);
    const T = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Te("comparison", ir[T].phrase) && S(T);
  }
  const se = (T) => Ke(T) === F.tonic, W = F.positions.filter((T) => f < 2 ? !0 : f === 2 ? C && se(T.midi) : f === 4 ? A === "all" || A === "roots" && se(T.midi) : !1).map((T) => ({
    ...T,
    label: f === 2 || f === 4 && A === "roots" ? F.tonicName : Le(T.midi),
    kind: ie?.string === T.string && ie.fret === T.fret ? "playing" : se(T.midi) ? "answer" : "shape"
  })), ue = [...new Set(F.positions.map((T) => T.string))], ee = Math.min(...F.positions.map((T) => T.fret)), g = Math.max(...F.positions.map((T) => T.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ge(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      pv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => K("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => K("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      tf.map((T, ae) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === ae ? "journey-step current" : "journey-step",
          "aria-current": f === ae ? "step" : void 0,
          disabled: ae > c[a],
          onClick: () => B(ae),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: ae > c[a] ? "🔒" : ae < c[a] ? "✓" : ae + 1 }),
            /* @__PURE__ */ r.jsx("span", { children: T })
          ]
        },
        T
      )),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => B(5),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ r.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : tf[f] }),
        /* @__PURE__ */ r.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ r.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
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
                oe();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Te("comparison", ir[z].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        z !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: $ !== null || m !== null,
                onClick: () => V("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: $ !== null || m !== null,
                onClick: () => V("aeolian"),
                children: "A"
              }
            )
          ] }),
          $ !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            $ === z ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            ir[z].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        a === "ionian" && /* @__PURE__ */ r.jsx(
          Na,
          {
            pieceId: "nooa",
            stage: "full",
            onBeforePlay: ge,
            stopHandleRef: _
          },
          "nooa:full"
        ),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([T, ae]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: T,
                checked: A === T,
                onChange: () => I(T)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: ae })
          ] }, T))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M((T) => !T), children: C ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ge() : void Te("scale", ne.map((T) => T.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ge() : void Te("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        Mi,
        {
          area: { strings: ue, min: ee, max: g, fixed: "box" },
          marks: W,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && f < 3 && /* @__PURE__ */ r.jsx(
        Na,
        {
          pieceId: "nooa",
          stage: f === 0 ? "listen" : f === 1 ? "fingering" : "memory",
          onBeforePlay: ge,
          stopHandleRef: _
        },
        `nooa:${f}`
      ),
      f < 2 && m === "scale" && ie && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Le(ie.midi),
        " · nauha ",
        ie.fret,
        "."
      ] }),
      w && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: w }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: re, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => B(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => K("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function gv({ onBack: s }) {
  const [a, o] = L.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(mv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(yv, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
const tr = [0, 2, 4, 5, 7, 9, 11], jv = 1200, pa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function xv({ onBack: s }) {
  const [a, o] = L.useState(0), [c, d] = L.useState([]), [f, p] = L.useState(!1), [m, x] = L.useState(""), [R, v] = L.useState(0), [C, M] = L.useState(!1), A = a >= tr.length, I = tr[Math.min(a, tr.length - 1)], w = cr(pa.strings, pa.min, pa.max).filter((_) => Ke(_.midi) === I), N = w.filter((_) => !c.includes(We(_))), z = N.length === 0 && !A, S = !z && f ? N[0] : void 0;
  L.useEffect(() => {
    if (!C || !z) return;
    const _ = window.setTimeout(() => {
      o((F) => F + 1), d([]), p(!1), x("");
    }, jv);
    return () => window.clearTimeout(_);
  }, [C, z]);
  const $ = [
    ...w.filter((_) => c.includes(We(_))).map((_) => ({ ..._, kind: "answer", label: Le(_.midi) })),
    ...S ? [{ ...S, kind: "anchor", label: "?" }] : []
  ];
  function V(_) {
    if (A || z) return;
    const F = We(_);
    if (Ke(_.midi) !== I) {
      v((ge) => ge + 1), x(`Valitsit sävelen ${Le(_.midi)}. Etsi ${Le(I)}.`);
      return;
    }
    if (c.includes(F)) {
      x("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, F];
    d(ne), p(!1);
    const ie = w.length - ne.length;
    x(ie ? `Oikein! ${Le(I)} löytyi ${rn[_.string]}-kieleltä (${Ti(_.fret)}). Vielä ${ie}.` : `Löysit kaikki ${w.length} ${Le(I)}-säveltä tällä alueella.`);
  }
  function J() {
    z && (o((_) => _ + 1), d([]), p(!1), x(""));
  }
  function U() {
    o(0), d([]), p(!1), x(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !A && /* @__PURE__ */ r.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (_) => M(_.target.checked)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: A ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        R ? `Vääriä valintoja yhteensä ${R}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          Le(I),
          "-sävelet"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          tr.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Le(I),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ r.jsx(
        Mi,
        {
          area: pa,
          marks: $,
          onAnswer: V,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((_) => !_),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (C ? /* @__PURE__ */ r.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === tr.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: J, children: a === tr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Sv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Eo = ["C", "G", "D", "Em"], rf = ["C", "G", "D", "Em", "Am", "E", "A"], wv = { min: 0, max: 3, fixed: "" };
function sf(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Nv({ onBack: s }) {
  const [a, o] = L.useState(4), [c, d] = L.useState(() => sf(Eo)), [f, p] = L.useState(0), [m, x] = L.useState(null), [R, v] = L.useState([]), [C, M] = L.useState(0), A = f >= c.length, I = Sv[c[Math.min(f, c.length - 1)]], w = a === 4 ? Eo : rf, N = I.frets.flatMap((_, F) => _ === null ? [] : [F]), z = I.frets.flatMap((_, F) => _ === null ? [F] : []), S = { ...wv, strings: N }, $ = I.frets.flatMap((_, F) => _ === null ? [] : [{
    ...Fe(F, _),
    kind: _ === 0 ? "anchor" : "shape",
    label: _ === 0 ? "○" : "●"
  }]);
  function V(_ = a) {
    o(_), d(sf(_ === 4 ? Eo : rf)), p(0), x(null), v([]), M(0);
  }
  function J(_) {
    m || A || R.includes(_) || (_ === I.name ? x(_) : (v((F) => [...F, _]), M((F) => F + 1)));
  }
  function U() {
    m && (p((_) => _ + 1), x(null), v([]));
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
            onChange: () => V(4)
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
            onChange: () => V(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: A ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => V(), children: "Harjoittele uudelleen" }) })
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
        Mi,
        {
          area: S,
          marks: $,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((_) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === _ ? "right" : R.includes(_) ? "wrong" : "",
          disabled: !!m || R.includes(_),
          "aria-pressed": m === _,
          onClick: () => J(_),
          children: _
        },
        _
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : R.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${I.name}-sointu.` : R.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (s, a) => ({ first: s, ...a ? { second: a } : {} }), ar = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], lr = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], or = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Bf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Ev = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ar(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...lr(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: or,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ar(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...lr(), ke("E♭"), ke("F")],
    lyrics: or
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
    bars: ar(),
    lyrics: Bf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...lr(), ke("E♭", "F"), ke("Gm")],
    lyrics: or
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
], Cv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ar(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...lr(), ke("E♭"), ke("E♭")],
    lyrics: or
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ar(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...lr(), ke("E♭"), ke("F")],
    lyrics: or
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
    bars: ar(),
    lyrics: Bf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...lr(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: or
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], dr = {
  acoustic: Ev,
  normal: Cv
}, Tv = "normal", Io = "yksi-sointu-kaksi-askelta", Wo = {
  acoustic: Io + "-akustinen",
  normal: Io + "-normaali"
}, Kf = (s) => s === Io || Object.values(Wo).includes(s ?? "");
function _v(s) {
  const a = Object.entries(Wo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const Mv = (s) => Wo[s], af = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Qo(s, a = "acoustic") {
  const o = dr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Hf(s, a = "acoustic") {
  const o = dr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let C = 1; C < o.length && !(c < o[C].start); C++)
    d = C;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ts(d, p + 1, a); )
    p++;
  const m = ts(d, p, a), x = Qo(d, a) / 4;
  let R = 1;
  for (; R < 4 && c >= m + R * x; ) R++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: R,
    chord: v.second && R >= 3 ? v.second : v.first
  };
}
function ts(s, a, o = "acoustic") {
  return dr[o][s].start + Qo(s, o) * a;
}
function Pv(s) {
  return dr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ts(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Qo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Av(s, a = "acoustic", o = !1) {
  const c = dr[a], d = Hf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = Pv(a), x = m.findIndex((A) => A.sectionIndex === d.sectionIndex && A.barIndex === d.barIndex && A.part === p), v = [
    ...m.slice(x + 1).map((A) => ({ ...A, wrapped: !1 })),
    ...o ? m.slice(0, x + 1).map((A) => ({ ...A, wrapped: !0 })) : []
  ].find((A) => A.chord !== d.chord) ?? null;
  let C = null;
  const M = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!M || o)) {
    const A = M ? 0 : d.sectionIndex + 1, I = c[A], w = I.bars[0].first;
    C = {
      section: I,
      sectionIndex: A,
      firstChord: w,
      wrapped: M,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: C };
}
function bv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, x) => m + o(x), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const x = Math.abs(c - 2 * p);
    (x < f || x === f && p >= c - p) && (d = m, f = x), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Do = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Uf = "musiikin-kartta:kappale-sointuvihjeet:v1", xa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, lf = {
  showChords: !0,
  level: 0,
  fadeOrder: xa
};
function va(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function of(s) {
  if (!s) return { ...lf, fadeOrder: { ...xa } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...xa }, f = o.fadeOrder;
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
    return { ...lf, fadeOrder: { ...xa } };
  }
}
function Rv() {
  try {
    return of(localStorage.getItem(Uf));
  } catch {
    return of(null);
  }
}
const Lv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Ov(s) {
  const a = Lv.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const $v = (s, a) => a === "power" ? Ov(s) : s, Fv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Iv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Dv({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = L.useState(Rv), [p, m] = L.useState(null), [x, R] = L.useState(!1), [v, C] = L.useState("full"), M = (K) => $v(K, v), A = dr[s], I = Hf(a, s), { section: w, sectionIndex: N, barIndex: z, beat: S, chord: $ } = I, V = S >= 3 && w.bars[z].second ? "second" : "first", J = (K, oe, se) => `${s}:${K}:${oe}:${se}`, U = (K, oe) => J(w.id, K, oe), _ = U(z, V), F = va($, d), ne = F && p === _, ie = (K, oe, se) => !va(K, d) || p === U(oe, se), ge = d.showChords && d.level === 0, Te = Do.filter((K) => va(K, d)).length, { nextSection: B } = Av(a, s, o), re = !!B && va(B.firstChord, d);
  return L.useEffect(() => {
    m(null);
  }, [_]), L.useEffect(() => {
    try {
      localStorage.setItem(Uf, JSON.stringify(d));
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
            onChange: (K) => {
              f((oe) => ({ ...oe, showChords: K.target.checked })), m(null);
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
            checked: x,
            onChange: (K) => R(K.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([K, oe]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: K,
              checked: v === K,
              onChange: () => C(K)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: oe })
        ] }, K))
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (K) => {
              const oe = Number(K.target.value);
              f((se) => ({ ...se, level: oe })), m(null);
            },
            children: Fv.map((K) => /* @__PURE__ */ r.jsx("option", { value: K.value, children: K.label }, K.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Te === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Te}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Do.map((K) => /* @__PURE__ */ r.jsxs("label", { children: [
        K,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": K + ": piilotusvaihe",
            value: d.fadeOrder[K],
            onChange: (oe) => {
              const se = Number(oe.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [K]: se } })), m(null);
            },
            children: Iv.map((oe) => /* @__PURE__ */ r.jsx("option", { value: oe.value, children: oe.label }, oe.value))
          }
        )
      ] }, K)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (K) => {
              const oe = A.find((se) => se.id === K.target.value);
              oe && c(oe.start);
            },
            children: A.map((K) => /* @__PURE__ */ r.jsxs("option", { value: K.id, children: [
              af(K.start),
              " · ",
              K.title
            ] }, K.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          F && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: F && !ne ? "?" : M($) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            S,
            "/4"
          ] }),
          F && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ne ? null : _),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        B && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: re ? "?" : M(B.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((K, oe) => {
      const se = oe === z, W = se && (S < 3 || !K.second), ue = se && S >= 3 && !!K.second, ee = ie(K.first, oe, "first"), g = K.second ? ie(K.second, oe, "second") : !1, T = (ee ? M(K.first) : "sointu piilossa") + (K.second ? " " + (g ? M(K.second) : "sointu piilossa") : "") + (ge && K.passingBass ? " (basson kulku " + K.passingBass + ")" : "") + (ge && K.possibleChord ? " (" + M(K.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (se ? " active" : ""),
          "aria-pressed": se,
          "aria-label": "Tahti " + (oe + 1) + ": " + T + ". Siirry kohtaan " + af(ts(N, oe, s)),
          onClick: () => c(ts(N, oe, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && ee ? "now" : "", children: ee ? M(K.first) : "?" }),
              K.second && /* @__PURE__ */ r.jsx("strong", { className: ue && g ? "now" : "", children: g ? M(K.second) : "?" })
            ] }),
            ge && K.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              K.passingBass,
              "), isku 4"
            ] }),
            ge && K.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              M(K.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    x ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: bv(A).map((K, oe) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: K.map((se) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: se.title }),
        se.lyrics?.map((W, ue) => /* @__PURE__ */ r.jsx("p", { children: W }, ue))
      ] }, se.id)) }, oe)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((K, oe) => /* @__PURE__ */ r.jsx("p", { children: K }, oe))
    ] }),
    ge && w.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const Ta = 7, zv = { name: "bluesasteikko", base: De.SCALES.mp.base, add: [[6, "♭5"]] }, Co = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: De.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: zv,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: De.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Vv(s) {
  return De.scaleNotes(s).map(([a, o]) => De.noteName(Ta, a, o));
}
const Gf = (s) => s === "pentatonic" ? 5 : 7;
function Bv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Gf(s.system)), d = De.fingeringBoxes(Ta, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (Ta + m) % 12), p = (m, x) => x >= 0 && x <= o && f.includes((De.OPEN_PITCHES[m] + x) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((x) => {
    const R = x.strings.map((C, M) => {
      if (!C.length) return C;
      const A = C[C.length - 1];
      return p(M, A + 1) ? [...C.slice(0, -1), A + 1] : C;
    }), v = R.flat();
    return { ...x, strings: R, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const uf = 17;
function Kv({ open: s }) {
  const [a, o] = L.useState("mp"), [c, d] = L.useState({ pentatonic: [], "3nps": [] }), [f, p] = L.useState(!1), [m, x] = L.useState(!1), R = L.useRef(null), v = Co.find((N) => N.id === a) ?? Co[0], C = c[v.system], M = Bv(v, C, uf), A = M.some((N) => N.positions.length > 0), I = De.renderBoard(Ta, v.scale, uf, {
    automatic: !0,
    boxes: M,
    onlyBoxNotes: A && f,
    label: v.title + (C.length ? ", " + C.map((N) => "boksi " + N).join(", ") : "")
  });
  L.useEffect(() => {
    const N = R.current;
    !N || !s || M.length === 1 && De.revealPositions(N, ".box-highlight");
  }, [I, s]);
  function w(N, z) {
    d((S) => ({ ...S, [v.system]: z ? [...S[v.system], N].sort(($, V) => $ - V) : S[v.system].filter(($) => $ !== N) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (N) => o(N.target.value), children: Co.map((N) => /* @__PURE__ */ r.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: v.title }),
      /* @__PURE__ */ r.jsx("span", { children: Vv(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: R,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: I }
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
      /* @__PURE__ */ r.jsx("summary", { onClick: (N) => {
        N.preventDefault(), x((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Gf(v.system) }, (N, z) => z + 1).map((N) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ r.jsx(
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
      /* @__PURE__ */ r.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: A && f,
            disabled: !A,
            onChange: (N) => p(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: A ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Wf = null;
function Hv() {
  return _v(new URLSearchParams(location.search).get("kappale")) ?? Wf ?? Tv;
}
function Uv(s) {
  Wf = s;
  const a = new URL(location.href);
  Kf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Mv(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Gv = {
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
}, cf = 1e-3;
function df(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function ff(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Wv({ onBack: s }) {
  const a = L.useRef(null), o = L.useRef(null), c = L.useRef(null), d = L.useRef(0), f = L.useRef(new Af()), p = L.useRef(null), [m, x] = L.useState(Hv), R = Gv[m], [v, C] = L.useState(!1), [M, A] = L.useState(!0), [I, w] = L.useState(!0), [N, z] = L.useState(!1), [S, $] = L.useState(!1), [V, J] = L.useState(!1), [U, _] = L.useState(wp), [F] = L.useState(() => Pf() ? "element" : "webaudio"), ne = L.useRef(null), [ie, ge] = L.useState(0), [Te, B] = L.useState(0), [re, K] = L.useState("");
  function oe(E = !1, X) {
    const le = a.current;
    if (le)
      for (const ce of [o.current, c.current])
        ce && (!X || ce === X) && f.current.align(le, ce, E);
  }
  function se() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, M],
      ["vocals", c.current, I]
    ];
  }
  function W(E = U, X) {
    for (const [le, ce, fe] of se()) {
      if (!ce) continue;
      const ve = Id(le, E, X?.[le] ?? fe);
      if (F === "webaudio" && ne.current?.routed(ce))
        ne.current.setLevel(ce, ve);
      else
        try {
          ce.volume = Id(le, E);
        } catch {
        }
    }
  }
  function ue(E) {
    _(E), Np(E), W(E);
  }
  function ee() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), C(!1);
  }
  function g(E) {
    if (E !== m) {
      p.current = null, ee();
      for (const X of [a.current, o.current, c.current])
        if (X)
          try {
            X.currentTime = 0;
          } catch {
          }
      ge(0), B(0), K(""), x(E), Uv(E);
    }
  }
  function T(E) {
    const X = a.current;
    if (!X || !Number.isFinite(E)) return;
    const le = Math.max(0, Math.min(E, Number.isFinite(X.duration) ? X.duration : E));
    p.current = le, ge(le), df(X, le);
  }
  function ae(E) {
    const X = p.current;
    if (X === null || E !== a.current || E.seeking) return;
    const le = Number.isFinite(E.duration) ? Math.min(X, E.duration) : X;
    if (le !== X && (p.current = le, ge(le)), Math.abs(E.currentTime - le) < cf) return;
    const ce = E.seekable;
    for (let fe = 0; fe < ce.length; fe++)
      if (ce.start(fe) <= le && le <= ce.end(fe)) {
        df(E, le);
        return;
      }
  }
  function xe(E) {
    if (E !== a.current) return;
    const X = p.current;
    if (X === null)
      ge(E.currentTime);
    else if (E.readyState >= 1 && !E.seeking && Math.abs(E.currentTime - X) < cf) {
      p.current = null, oe(!0);
      return;
    }
    E.paused || oe();
  }
  async function Se() {
    const E = a.current, X = o.current, le = c.current;
    if (!E || !X || !le) return;
    if (v) {
      ee();
      return;
    }
    K("");
    const ce = p.current ?? E.currentTime;
    if (Number.isFinite(E.duration) && ce >= E.duration - 0.05 && T(0), ae(E), F === "webaudio" && (ne.current ??= new Op(), ne.current.unlock()))
      for (const ve of [E, X, le]) ne.current.route(ve);
    W(), X.muted = !M, le.muted = !I, oe(!0);
    const fe = ++d.current;
    try {
      M || X.pause(), I || le.pause();
      const ve = [E.play(), ...M ? [X.play()] : [], ...I ? [le.play()] : []];
      if (await Promise.all(ve), fe !== d.current) return;
      oe(), C(!0);
    } catch {
      if (fe !== d.current) return;
      ee(), K("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function G(E, X, le) {
    if (!E) return;
    if (E.muted = !X, !X) {
      E.pause();
      return;
    }
    !a.current || !v || (oe(!0, E), E.play().catch(() => K(le + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function H(E) {
    A(E), W(U, { guitar: E }), G(o.current, E, "Kitararaita");
  }
  function q(E) {
    w(E), W(U, { vocals: E }), G(c.current, E, "Lauluraita");
  }
  return L.useEffect(() => {
    const E = () => {
      document.hidden && ee();
    };
    return document.addEventListener("visibilitychange", E), () => {
      document.removeEventListener("visibilitychange", E), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), ne.current?.close();
    };
  }, []), L.useEffect(() => {
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
          onChange: (E) => g(E.target.value),
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
          R.label,
          " · ",
          R.length,
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
            max: Te > 0 ? Te : 1,
            step: 0.1,
            value: Math.min(ie, Te > 0 ? Te : 1),
            disabled: Te <= 0,
            onChange: (E) => T(Number(E.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          ff(ie),
          " / ",
          ff(Te)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: M,
              onChange: (E) => H(E.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: I,
              onChange: (E) => q(E.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (E) => z(E.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": F, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            U > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            U > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: U,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": U + " %",
              onChange: (E) => ue(Number(E.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            U,
            " %"
          ] })
        ] })
      ] }),
      re && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: re }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: R.backing,
          preload: "metadata",
          loop: N,
          onLoadedMetadata: (E) => {
            E.currentTarget === a.current && (B(E.currentTarget.duration), ae(E.currentTarget));
          },
          onProgress: (E) => ae(E.currentTarget),
          onCanPlay: (E) => ae(E.currentTarget),
          onTimeUpdate: (E) => xe(E.currentTarget),
          onEnded: (E) => {
            E.currentTarget !== a.current || E.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), C(!1), ge(E.currentTarget.duration));
          },
          onPause: (E) => {
            E.currentTarget === a.current && C(!1);
          },
          onError: () => K(R.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: R.guitar,
          preload: "metadata",
          muted: !M,
          loop: N,
          onLoadedMetadata: () => {
            a.current?.paused && oe(!0);
          },
          onError: () => K(R.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: R.vocals,
          preload: "metadata",
          muted: !I,
          loop: N,
          onLoadedMetadata: () => {
            a.current?.paused && oe(!0);
          },
          onError: () => K(R.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: S, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (E) => {
        E.preventDefault(), $((X) => !X);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Dv, { version: m, position: ie, loop: N, onSeek: T })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: V, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (E) => {
        E.preventDefault(), J((X) => !X);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(Kv, { open: V })
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
}, Sa = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), Qf = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Vo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function Qv(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Vo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Yf({ frame: s, threshold: a }) {
  const o = s?.rms ?? 0, c = ur(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${Sa(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${Kd(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${Kd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Yv({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = Of(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Le(p.midi, c.flats, !0)} · ${Qf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : zo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(Yf, { frame: a, threshold: c.minRms })
  ] });
}
function Jv({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: x, calibrating: R, calibration: v, onTest: C, onStop: M, onCalibrate: A }) {
  const I = L.useId(), w = Of(s.phase, a), N = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", z = s.phase === "on", S = o && d - o.at < 1500 ? o : null, $ = S && (w === "pitch" || w === "untuned"), V = z && (a?.peak ?? 0) >= 0.98, J = s.phase === "error" ? [] : Qv(w, f, s.info, V), U = !f.device || m.some((F) => F.deviceId === f.device), _ = (F, ne) => p({ ...f, [F]: ne });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${I}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${I}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : zo[w],
      w === "pitch" && S ? ` ${Le(S.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Vo(s.info)}.` : s.phase === "error" ? s.error : zo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Vo(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(Yf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Sa(Math.max(-60, ur(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: S ? Le(S.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: S ? `${Sa(S.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: S ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Qf(S.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${S.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, S.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: S ? `${Math.round(S.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Le(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    J.length > 0 && z && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: J.map((F) => /* @__PURE__ */ r.jsx("li", { children: F }, F)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: M, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: x, onClick: C, children: "Testaa mikrofoni" }),
      N && z && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: R, onClick: A, children: R ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    x && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: x, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${I}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${I}-device`, value: f.device, onChange: (F) => _("device", F.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !U && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((F, ne) => /* @__PURE__ */ r.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${ne + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${I}-rms`, children: [
              "Äänikynnys · ",
              Sa(ur(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${I}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (F) => _("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${I}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${I}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (F) => _("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${I}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${I}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (F) => _("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${I}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${I}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (F) => _("cents", Number(F.target.value)) })
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
const Xv = (s) => s.mode === "scale" ? De.scaleNotes(De.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, hf = (s, a) => Xv(s).find(([o]) => o === a)?.[1], Jf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Zv = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function qv(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function ek(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Xr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : Jf(s) ? `Oikein! ${a.degree}. aste on ${Xr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${Le(a.reference, s.flats, !0)} → ${a.name} on ${Zr[a.interval]} ${Zv(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Le(d.midi, s.flats)} on ${vf[d.string]}: ${Ti(d.fret)}.` : `Oikein! Soitit sävelen ${Le(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function tk(s, a, o, c, d) {
  if (o === "note") return `Ei ${Le(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${hf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ke(d.midi) === Ke(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${Ho[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Le(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (Jf(s)) {
    const p = Ke(d.midi - s.root), m = hf(s, p), x = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Xr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Le(d.midi, s.flats)}, joka ei kuulu ${x}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Le(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function nk(s, a, o) {
  const c = Le(o, s.flats, !0);
  return Ke(o) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Xf(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => rn[p] ? `${rn[p]}-kieli, ${Ti(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Le(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Le(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Zr[c(1)] ? `${Zr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ci[p]) return null;
      const m = Ci[p].tones.find(([x]) => x === c(3))?.[1];
      return m ? `${kf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = De.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const x = De.scaleNotes(p).find(([R]) => R === c(3))?.[1];
        return x ? `${m}: ${x}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ci.maj.tones.find(([x]) => x === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function mf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Bo = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", ik = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function rk(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${rr(s.mode)}${s.hints ? ` · ${_a[s.hints].title}` : ""} · ${a} · keskimäärin ${Bo(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function sk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = L.useState(""), p = L.useRef(null), { recent: m, sessions: x, stats: R } = s.data, v = _i(a), C = gf(a), M = [...new Set(m.map((S) => S.mode))].map((S) => {
    const $ = m.filter((V) => V.mode === S);
    return { mode: S, ...Po($), last: Math.max(...$.map((V) => V.at)) };
  }).sort((S, $) => $.last - S.last), A = mf(R).filter((S) => !S.guided && S.mode === a.mode && S.input === v && S.check === C && S.stat.attempts >= 3).map((S) => ({ ...S, score: Uo(S.stat), text: Xf(S.item, a.flats) })).filter((S) => S.text && S.score < 0.8).sort((S, $) => S.score - $.score).slice(0, 5), I = mf(R).reduce((S, $) => S + $.stat.attempts, 0);
  function w() {
    const S = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), $ = URL.createObjectURL(S), V = document.createElement("a");
    V.href = $, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL($), 1e3);
  }
  async function N(S) {
    if (S)
      try {
        const $ = await S.text();
        if (I && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore($), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    I === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        I,
        " vastattua kysymystä · ",
        x.length,
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
        /* @__PURE__ */ r.jsx("tbody", { children: M.map((S) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: rr(S.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: S.count }),
          /* @__PURE__ */ r.jsx("td", { children: S.solo ? `${S.soloFirst}/${S.solo} · ${Math.round(S.soloFirst / S.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: S.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Bo(S.ms / S.count) })
        ] }, S.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    A.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        rr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: A.map((S) => /* @__PURE__ */ r.jsxs("li", { children: [
        S.text,
        " · viime aikoina ",
        Math.round(qr(S.stat) * 100),
        " % heti oikein · ",
        Bo(es(S.stat))
      ] }, S.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: I ? `Harjoituksessa ${rr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        ik[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(up, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: R, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      x.length ? /* @__PURE__ */ r.jsx("ul", { children: x.slice(-10).reverse().map((S) => /* @__PURE__ */ r.jsx("li", { children: rk(S) }, S.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (S) => {
          N(S.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !I, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function ak() {
  try {
    return new Rd(localStorage);
  } catch {
    return new Rd();
  }
}
const pf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), lk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", ok = [0, 2, 4, 5, 7, 9, 11];
function uk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function ck() {
  const [s] = L.useState(ak), [a, o] = L.useState(() => ep(location.search, s.data.settings)), [, c] = L.useReducer((D) => D + 1, 0), d = L.useRef(null), f = L.useRef(new nv()), p = L.useRef(new is()), m = L.useRef(0), x = L.useRef(), R = L.useRef(), v = L.useRef(null), C = L.useRef(0), M = L.useRef(null), A = L.useRef(a);
  A.current = a;
  const [I, w] = L.useState({ phase: "off", purpose: "none" }), N = L.useRef(I), z = (D) => {
    N.current = D, w(D);
  }, [S, $] = L.useState(null), [V, J] = L.useState(null), [U, _] = L.useState(null), [F, ne] = L.useState(0), [ie, ge] = L.useState([]), [Te, B] = L.useState(!1), [re, K] = L.useState(!1), [oe, se] = L.useState(""), [W, ue] = L.useState("info"), [ee, g] = L.useState(""), [T, ae] = L.useState(0), [xe, Se] = L.useState([]), [G, H] = L.useState([]), [q, E] = L.useState(null), [X, le] = L.useState(!1), [ce, fe] = L.useState(""), [ve, Ae] = L.useState(""), [_e, Oe] = L.useState(() => {
    const D = new URLSearchParams(location.search);
    return D.has("tila") || D.has("vanha") ? "legacy" : Kf(D.get("kappale")) ? "songs" : null;
  }), Xe = () => {
    zp().then(ge).catch(() => {
    });
  };
  function He() {
    clearTimeout(R.current), v.current = null, le(!1);
  }
  function Qe() {
    $(null), J(null), _(null);
  }
  function Ue() {
    f.current.stop(), He(), z({ phase: "off", purpose: "none" }), Qe();
  }
  async function gt(D) {
    if (f.current.active && N.current.phase === "on")
      return He(), z({ ...N.current, purpose: D }), f.current.rearm(), !0;
    z({ phase: "requesting", purpose: D }), Qe();
    try {
      const me = await f.current.start(A.current.device, {
        ...pf(A.current),
        onFrame: (Ne) => Mt.current.frame(Ne),
        onStableNote: (Ne) => Mt.current.stable(Ne)
      }, () => Mt.current.lost());
      return me ? (z({ phase: "on", purpose: D, info: me }), Xe(), !0) : !1;
    } catch (me) {
      return z({ phase: "error", purpose: "none", error: tv(me) }), !1;
    }
  }
  function Ze(D) {
    v.current?.push(D.rms);
    const me = performance.now();
    me - C.current < 66 || (C.current = me, $(D), ne(me), D.midi !== void 0 && D.frequency !== void 0 && J({ midi: D.midi, frequency: D.frequency, cents: D.cents ?? 0, clarity: D.clarity ?? 0, tuned: D.status === "pitch", at: me }));
  }
  function Ve(D) {
    N.current.purpose === "test" ? _(D) : N.current.purpose === "round" && be(D.midi, "mic", void 0, D.heldMs);
  }
  function it() {
    const D = N.current.purpose === "round";
    He(), Qe(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const me = d.current;
    D && me && ["active", "feedback", "paused"].includes(me.phase) && (dt(), K(!1), me.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Mt = L.useRef({ frame: Ze, stable: Ve, lost: it });
  Mt.current = { frame: Ze, stable: Ve, lost: it };
  function Gt(D) {
    const me = wa(D), Ne = me.device !== A.current.device;
    A.current = me, o(me), s.settings(me), g(""), f.current.active && (Ne && N.current.purpose === "test" ? (Ue(), gt("test")) : f.current.setOptions(pf(me)));
  }
  function zt(D) {
    Ae(""), d.current = null, Oe(D);
  }
  function sn() {
    fe(""), gt("test");
  }
  function Wt() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (He(), v.current = [], le(!0), fe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const D = v.current ?? [];
      if (He(), D.length < 10) {
        fe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: me, noise: Ne, loud: Jt } = iv(D);
      Gt({ ...A.current, minRms: me }), fe(`Taustakohina on ${Math.round(ur(Ne))} dB ja äänikynnys nyt ${Math.round(ur(me))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function dt() {
    m.current++, clearTimeout(x.current), p.current.stop();
  }
  function Dn(D, me) {
    if (!D.results.length) return;
    const Ne = Po(D.results);
    s.session({
      id: D.id,
      mode: D.settings.mode,
      count: Ne.count,
      first: Ne.first,
      ms: Ne.ms,
      solo: Ne.solo,
      soloFirst: Ne.soloFirst,
      hints: D.settings.hints,
      at: Date.now(),
      complete: me
    });
  }
  async function we(D) {
    if (!D.question?.sound.length || D.phase !== "active") return;
    dt();
    const me = m.current;
    D.pause(), f.current.pause(), K(!0), ue("info"), se("Kuuntele…"), c();
    try {
      await p.current.play(D.question.sound);
    } catch {
      me === m.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    me !== m.current || d.current !== D || (D.resume(), f.current.resume(), K(!1), se(""), c());
  }
  async function Qt(D) {
    Se([]), H([]), E(null), g(""), ae(D.hintLevel), f.current.rearm(), ue("info"), se(""), c(), D.question?.sound.length && await we(D);
  }
  async function Me() {
    const D = A.current, me = _o(D);
    if (me) {
      g(me);
      return;
    }
    dt();
    const Ne = m.current;
    if (g(""), fe(""), Ae(""), ma(D)) {
      B(!0);
      const ot = await gt("round");
      if (Ne !== m.current) return;
      if (B(!1), !ot) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && Ue();
    const Jt = new gp(D, () => s.data.stats, (ot) => s.record(ot));
    try {
      Jt.start();
    } catch (ot) {
      N.current.purpose === "round" && Ue(), g(ot instanceof Error ? ot.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => M.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Qt(Jt);
  }
  function Re() {
    dt(), B(!1), Ue();
  }
  function be(D, me, Ne, Jt = 0) {
    const ot = d.current, di = ot?.question;
    if (!ot || !di || ot.phase !== "active") return;
    const Vn = ot.answer(D, me, Ne, Jt);
    if (Vn !== "ignored") {
      if (Vn === "candidate")
        E(D), ue("bad"), se(nk(ot.settings, di, D));
      else if (Vn === "wrong")
        Ne ? Se((fi) => [...fi, Ne]) : H((fi) => [...fi, D]), ue("bad"), se(tk(ot.settings, di, me, D, Ne));
      else if (E(null), ue("good"), se(ek(ot.settings, di, me, D, Ne)), Dn(ot, !1), ot.settings.advance) {
        const fi = m.current;
        x.current = setTimeout(() => {
          fi === m.current && Ye();
        }, me === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Ye() {
    const D = d.current;
    if (!(!D || D.phase !== "feedback")) {
      dt();
      try {
        D.next();
      } catch (me) {
        et(!1), g(me instanceof Error ? me.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (D.phase === "done") {
        et(!0);
        return;
      }
      await Qt(D);
    }
  }
  function et(D = !1) {
    dt(), K(!1), B(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && Ue();
    const me = d.current;
    me && (me.stop(), Dn(me, D)), E(null), ae(0), Se([]), H([]), g(""), Ae(D ? "complete" : "stopped"), ue("info"), se(""), c();
  }
  function Yt() {
    const D = d.current;
    if (!D || !["active", "feedback", "paused"].includes(D.phase)) return;
    dt(), K(!1), D.pause();
    const me = N.current.purpose === "round";
    me && Ue(), ue("info"), se(`Harjoitus on tauolla.${me ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function jt() {
    const D = d.current;
    if (!D || D.phase !== "paused" || re) return;
    dt();
    const me = m.current;
    if (g(""), ma(D.settings)) {
      B(!0);
      const Ne = await gt("round");
      if (me !== m.current) return;
      if (B(!1), !Ne) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    D.resume(), ue("info"), se(""), c(), D.phase === "active" && (f.current.rearm(), D.question?.sound.length && await we(D));
  }
  function Vt(D) {
    const me = d.current;
    !me || me.phase !== "active" || (me.useHint(D), ae(D), c());
  }
  const mn = L.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mn.current = {
    hidden: () => {
      const D = d.current;
      D && ["active", "feedback"].includes(D.phase) || re ? Yt() : N.current.phase !== "off" && N.current.phase !== "error" && (dt(), B(!1), Ue());
    },
    restored: () => {
      B(!1), K(!1), z({ phase: "off", purpose: "none" }), Qe(), c();
    }
  }, L.useEffect(() => {
    Xe();
    const D = () => Xe();
    navigator.mediaDevices?.addEventListener?.("devicechange", D);
    const me = () => {
      m.current++, clearTimeout(x.current), clearTimeout(R.current), f.current.stop(), p.current.stop(), ev(), d.current?.pause();
    }, Ne = () => {
      document.hidden && mn.current.hidden();
    }, Jt = (ot) => {
      ot.persisted && mn.current.restored();
    };
    return document.addEventListener("visibilitychange", Ne), window.addEventListener("pagehide", me), window.addEventListener("pageshow", Jt), () => {
      me(), navigator.mediaDevices?.removeEventListener?.("devicechange", D), document.removeEventListener("visibilitychange", Ne), window.removeEventListener("pagehide", me), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const pn = L.useRef(null), zn = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${re}`;
  L.useEffect(() => {
    const D = d.current, me = M.current, Ne = document.activeElement;
    !D || !me || !(Ne === document.body || me.contains(Ne)) || (D.phase === "feedback" ? pn.current?.focus({ preventScroll: !0 }) : D.phase === "active" && !re && (Ne === document.body || Ne === pn.current) && me.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [zn]);
  const Ie = d.current, rt = !!Ie && ["active", "paused", "feedback"].includes(Ie.phase), Je = rt ? Ie.settings : a, pt = rt ? Ie.question : void 0, Pt = !!pt && !!Ie?.answered, vn = rt && Ie.phase === "paused" && !re && !Pt, kn = rt && Ie.phase === "active" && !re, fr = rt ? null : _o(a), En = rt || Te, ci = Pi(Je), Ai = dp(Je), Cn = pt && !Pt ? T : 0, hr = pt ? yp(Je, pt, Pt ? 2 : Cn) : { marks: [], text: "" }, rs = [...new Map([...hr.marks, ...Pt ? [] : xe.map((D) => ({ ...D, label: Le(D.midi, Je.flats), kind: "wrong" }))].map((D) => [We(D), D])).values()], Aa = rt && ma(Je), Tn = !!pt && !vn && (pt.choices === "position" || rs.length > 0), xt = Ie ? Po(Ie.results) : null, ss = !Ie || Je.hints !== "fade" ? "" : Ie.index <= 3 ? " · vastaus näkyy" : Ie.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", as = Ie && !rt ? Ie.results.filter((D) => D.errors > 0 || D.hint) : [], [ls, os] = uk(Je), _n = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ r.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ r.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Mn = s.data.notice === "hints-default" && /* @__PURE__ */ r.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !rt && _e === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx(xp, { onSelect: zt })
  ] }) : !rt && _e === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx(gv, { onBack: () => Oe(null) })
  ] }) : !rt && _e === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx(xv, { onBack: () => Oe(null) })
  ] }) : !rt && _e === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx(Nv, { onBack: () => Oe(null) })
  ] }) : !rt && _e === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx(Wv, { onBack: () => Oe(null) })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    Mn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: ls, children: [
      "Lue tämän harjoituksen teoria: ",
      os,
      " →"
    ] }) }),
    _e !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        rt && et(), Oe(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: _e === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: _e === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    rt ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: rr(Je.mode) }),
      " · ",
      $d(Je)
    ] }) : _e === "legacy" ? /* @__PURE__ */ r.jsx(Fd, { s: a, change: Gt, locked: En, problem: fr }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Fd, { s: a, change: Gt, locked: En, problem: fr })
    ] }),
    !rt && (_e === "legacy" || ma(a)) && /* @__PURE__ */ r.jsx(
      Jv,
      {
        mic: I,
        frame: S,
        heard: V,
        accepted: U,
        now: F,
        s: a,
        change: Gt,
        devices: ie,
        locked: Te,
        calibrating: X,
        calibration: ce,
        onTest: sn,
        onStop: Ue,
        onCalibrate: Wt
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: M, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: rr(Je.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: rt ? `Kysymys ${Ie.index}${Ie.total ? " / " + Ie.total : " · vapaa harjoittelu"} · ${_a[Je.hints].title}${ss}${Ie.phase === "paused" && !re ? " · tauolla" : ""}` : ve === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !rt && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        Ie && Ie.results.length > 0 && xt ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: ve === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ r.jsxs("dl", { children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ r.jsx("dd", { children: lk(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          as.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(as.map((D) => Xf(D.item, a.flats)).filter(Boolean))].slice(0, 6).map((D) => /* @__PURE__ */ r.jsx("li", { children: D }, D)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: $d(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: Te ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!fr, onClick: () => {
          Me();
        }, children: Ie?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ie && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      rt && pt && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: vn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: vn ? "Kysymys palaa näkyviin, kun jatkat." : re ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : qv(Je, pt) }),
        Ie.hintLevel > 0 && !Pt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Je.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Aa && /* @__PURE__ */ r.jsx(Yv, { mic: I, frame: S, heard: V, s: Je, now: F }),
        pt.choices === "note" && !vn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Je.accidentals ? Array.from({ length: 12 }, (D, me) => me) : ok).map((D) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(D) ? "wrong" : Pt && D === pt.midi % 12 ? "right" : "", disabled: !kn || G.includes(D), onClick: () => be(D, "note"), children: Le(D, Je.flats) }, D)) }),
        pt.choices === "degree" && !vn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Je.mode === "scale" ? De.scaleNotes(De.SCALES[Je.scale]) : Ci[Je.chord].tones).map(([D, me]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(D) ? "wrong" : Pt && D === pt.interval ? "right" : "", disabled: !kn || G.includes(D), onClick: () => be(D, "degree"), children: me }, D)) }),
        Tn && /* @__PURE__ */ r.jsx(
          Mi,
          {
            area: Ai,
            marks: rs,
            disabled: !kn || pt.choices !== "position" || Je.input === "mic",
            onAnswer: (D) => be(D.midi, "board", D),
            caption: ci.fixed === "shape" ? `${Je.shape}-muodon alue` : ci.fixed === "box" ? `Boksin ${Je.box} alue` : "Otelauta"
          }
        ),
        !Pt && !vn && Cn > 0 && hr.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: hr.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        q !== null && Ie.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ie.confirmWrong(), E(null), se("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          Ie.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: pn, onClick: () => {
            Ye();
          }, children: Ie.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ie.phase === "active" && !Pt && !re && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            Cn === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Vt(Math.max(1, Ie.hintLevel)), children: Ie.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Cn === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Vt(2), children: "Näytä vastaus" }),
            Cn > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ae(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !kn, onClick: () => {
            we(Ie);
          }, children: "Kuuntele uudelleen" }),
          Ie.phase === "paused" && !re ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: Te, onClick: () => {
            jt();
          }, children: Te ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Yt, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => et(), children: "Lopeta harjoitus" })
        ] }),
        Ie.phase === "feedback" && Je.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !rt && ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee })
    ] }),
    !rt && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(De.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: tp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(sk, { store: s, s: a, locked: En, changed: () => {
        const D = wa(s.data.settings);
        A.current = D, o(D), c();
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
Gm.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(ck, {}));
//# sourceMappingURL=app.js.map
