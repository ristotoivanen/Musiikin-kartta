function cp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var yo = { exports: {} }, Xs = {}, go = { exports: {} }, Be = {};
var bd;
function dp() {
  if (bd) return Be;
  bd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), k = Symbol.iterator;
  function T(S) {
    return S === null || typeof S != "object" ? null : (S = k && S[k] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var N = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, w = {};
  function E(S, g, ne) {
    this.props = S, this.context = g, this.refs = w, this.updater = ne || N;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(S, g) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, g, "setState");
  }, E.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function B() {
  }
  B.prototype = E.prototype;
  function b(S, g, ne) {
    this.props = S, this.context = g, this.refs = w, this.updater = ne || N;
  }
  var U = b.prototype = new B();
  U.constructor = b, _(U, E.prototype), U.isPureReactComponent = !0;
  var z = Array.isArray, V = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(S, g, ne) {
    var ce, Ee = {}, H = null, K = null;
    if (g != null) for (ce in g.ref !== void 0 && (K = g.ref), g.key !== void 0 && (H = "" + g.key), g) V.call(g, ce) && !O.hasOwnProperty(ce) && (Ee[ce] = g[ce]);
    var ee = arguments.length - 2;
    if (ee === 1) Ee.children = ne;
    else if (1 < ee) {
      for (var J = Array(ee), pe = 0; pe < ee; pe++) J[pe] = arguments[pe + 2];
      Ee.children = J;
    }
    if (S && S.defaultProps) for (ce in ee = S.defaultProps, ee) Ee[ce] === void 0 && (Ee[ce] = ee[ce]);
    return { $$typeof: r, type: S, key: H, ref: K, props: Ee, _owner: D.current };
  }
  function re(S, g) {
    return { $$typeof: r, type: S.type, key: g, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function Z(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function we(S) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ne) {
      return g[ne];
    });
  }
  var Ne = /\/+/g;
  function Y(S, g) {
    return typeof S == "object" && S !== null && S.key != null ? we("" + S.key) : g.toString(36);
  }
  function he(S, g, ne, ce, Ee) {
    var H = typeof S;
    (H === "undefined" || H === "boolean") && (S = null);
    var K = !1;
    if (S === null) K = !0;
    else switch (H) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case i:
            K = !0;
        }
    }
    if (K) return K = S, Ee = Ee(K), S = ce === "" ? "." + Y(K, 0) : ce, z(Ee) ? (ne = "", S != null && (ne = S.replace(Ne, "$&/") + "/"), he(Ee, g, ne, "", function(pe) {
      return pe;
    })) : Ee != null && (Z(Ee) && (Ee = re(Ee, ne + (!Ee.key || K && K.key === Ee.key ? "" : ("" + Ee.key).replace(Ne, "$&/") + "/") + S)), g.push(Ee)), 1;
    if (K = 0, ce = ce === "" ? "." : ce + ":", z(S)) for (var ee = 0; ee < S.length; ee++) {
      H = S[ee];
      var J = ce + Y(H, ee);
      K += he(H, g, ne, J, Ee);
    }
    else if (J = T(S), typeof J == "function") for (S = J.call(S), ee = 0; !(H = S.next()).done; ) H = H.value, J = ce + Y(H, ee++), K += he(H, g, ne, J, Ee);
    else if (H === "object") throw g = String(S), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function G(S, g, ne) {
    if (S == null) return S;
    var ce = [], Ee = 0;
    return he(S, ce, "", "", function(H) {
      return g.call(ne, H, Ee++);
    }), ce;
  }
  function ue(S) {
    if (S._status === -1) {
      var g = S._result;
      g = g(), g.then(function(ne) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ne);
      }, function(ne) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ne);
      }), S._status === -1 && (S._status = 0, S._result = g);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var se = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Be.Children = { map: G, forEach: function(S, g, ne) {
    G(S, function() {
      g.apply(this, arguments);
    }, ne);
  }, count: function(S) {
    var g = 0;
    return G(S, function() {
      g++;
    }), g;
  }, toArray: function(S) {
    return G(S, function(g) {
      return g;
    }) || [];
  }, only: function(S) {
    if (!Z(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, Be.Component = E, Be.Fragment = l, Be.Profiler = d, Be.PureComponent = b, Be.StrictMode = c, Be.Suspense = x, Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Be.act = te, Be.cloneElement = function(S, g, ne) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var ce = _({}, S.props), Ee = S.key, H = S.ref, K = S._owner;
    if (g != null) {
      if (g.ref !== void 0 && (H = g.ref, K = D.current), g.key !== void 0 && (Ee = "" + g.key), S.type && S.type.defaultProps) var ee = S.type.defaultProps;
      for (J in g) V.call(g, J) && !O.hasOwnProperty(J) && (ce[J] = g[J] === void 0 && ee !== void 0 ? ee[J] : g[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) ce.children = ne;
    else if (1 < J) {
      ee = Array(J);
      for (var pe = 0; pe < J; pe++) ee[pe] = arguments[pe + 2];
      ce.children = ee;
    }
    return { $$typeof: r, type: S.type, key: Ee, ref: H, props: ce, _owner: K };
  }, Be.createContext = function(S) {
    return S = { $$typeof: p, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: h, _context: S }, S.Consumer = S;
  }, Be.createElement = F, Be.createFactory = function(S) {
    var g = F.bind(null, S);
    return g.type = S, g;
  }, Be.createRef = function() {
    return { current: null };
  }, Be.forwardRef = function(S) {
    return { $$typeof: m, render: S };
  }, Be.isValidElement = Z, Be.lazy = function(S) {
    return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: ue };
  }, Be.memo = function(S, g) {
    return { $$typeof: j, type: S, compare: g === void 0 ? null : g };
  }, Be.startTransition = function(S) {
    var g = W.transition;
    W.transition = {};
    try {
      S();
    } finally {
      W.transition = g;
    }
  }, Be.unstable_act = te, Be.useCallback = function(S, g) {
    return se.current.useCallback(S, g);
  }, Be.useContext = function(S) {
    return se.current.useContext(S);
  }, Be.useDebugValue = function() {
  }, Be.useDeferredValue = function(S) {
    return se.current.useDeferredValue(S);
  }, Be.useEffect = function(S, g) {
    return se.current.useEffect(S, g);
  }, Be.useId = function() {
    return se.current.useId();
  }, Be.useImperativeHandle = function(S, g, ne) {
    return se.current.useImperativeHandle(S, g, ne);
  }, Be.useInsertionEffect = function(S, g) {
    return se.current.useInsertionEffect(S, g);
  }, Be.useLayoutEffect = function(S, g) {
    return se.current.useLayoutEffect(S, g);
  }, Be.useMemo = function(S, g) {
    return se.current.useMemo(S, g);
  }, Be.useReducer = function(S, g, ne) {
    return se.current.useReducer(S, g, ne);
  }, Be.useRef = function(S) {
    return se.current.useRef(S);
  }, Be.useState = function(S) {
    return se.current.useState(S);
  }, Be.useSyncExternalStore = function(S, g, ne) {
    return se.current.useSyncExternalStore(S, g, ne);
  }, Be.useTransition = function() {
    return se.current.useTransition();
  }, Be.version = "18.3.1", Be;
}
var Ad;
function qo() {
  return Ad || (Ad = 1, go.exports = dp()), go.exports;
}
var Pd;
function hp() {
  if (Pd) return Xs;
  Pd = 1;
  var r = qo(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, x, j) {
    var v, k = {}, T = null, N = null;
    j !== void 0 && (T = "" + j), x.key !== void 0 && (T = "" + x.key), x.ref !== void 0 && (N = x.ref);
    for (v in x) c.call(x, v) && !h.hasOwnProperty(v) && (k[v] = x[v]);
    if (m && m.defaultProps) for (v in x = m.defaultProps, x) k[v] === void 0 && (k[v] = x[v]);
    return { $$typeof: i, type: m, key: T, ref: N, props: k, _owner: d.current };
  }
  return Xs.Fragment = l, Xs.jsx = p, Xs.jsxs = p, Xs;
}
var Ld;
function fp() {
  return Ld || (Ld = 1, yo.exports = hp()), yo.exports;
}
var a = fp(), A = qo(), xa = {}, xo = { exports: {} }, Ht = {}, jo = { exports: {} }, So = {};
var Rd;
function mp() {
  return Rd || (Rd = 1, (function(r) {
    function i(W, ae) {
      var te = W.length;
      W.push(ae);
      e: for (; 0 < te; ) {
        var S = te - 1 >>> 1, g = W[S];
        if (0 < d(g, ae)) W[S] = ae, W[te] = g, te = S;
        else break e;
      }
    }
    function l(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ae = W[0], te = W.pop();
      if (te !== ae) {
        W[0] = te;
        e: for (var S = 0, g = W.length, ne = g >>> 1; S < ne; ) {
          var ce = 2 * (S + 1) - 1, Ee = W[ce], H = ce + 1, K = W[H];
          if (0 > d(Ee, te)) H < g && 0 > d(K, Ee) ? (W[S] = K, W[H] = te, S = H) : (W[S] = Ee, W[ce] = te, S = ce);
          else if (H < g && 0 > d(K, te)) W[S] = K, W[H] = te, S = H;
          else break e;
        }
      }
      return ae;
    }
    function d(W, ae) {
      var te = W.sortIndex - ae.sortIndex;
      return te !== 0 ? te : W.id - ae.id;
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
    var x = [], j = [], v = 1, k = null, T = 3, N = !1, _ = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(W) {
      for (var ae = l(j); ae !== null; ) {
        if (ae.callback === null) c(j);
        else if (ae.startTime <= W) c(j), ae.sortIndex = ae.expirationTime, i(x, ae);
        else break;
        ae = l(j);
      }
    }
    function z(W) {
      if (w = !1, U(W), !_) if (l(x) !== null) _ = !0, ue(V);
      else {
        var ae = l(j);
        ae !== null && se(z, ae.startTime - W);
      }
    }
    function V(W, ae) {
      _ = !1, w && (w = !1, B(F), F = -1), N = !0;
      var te = T;
      try {
        for (U(ae), k = l(x); k !== null && (!(k.expirationTime > ae) || W && !we()); ) {
          var S = k.callback;
          if (typeof S == "function") {
            k.callback = null, T = k.priorityLevel;
            var g = S(k.expirationTime <= ae);
            ae = r.unstable_now(), typeof g == "function" ? k.callback = g : k === l(x) && c(x), U(ae);
          } else c(x);
          k = l(x);
        }
        if (k !== null) var ne = !0;
        else {
          var ce = l(j);
          ce !== null && se(z, ce.startTime - ae), ne = !1;
        }
        return ne;
      } finally {
        k = null, T = te, N = !1;
      }
    }
    var D = !1, O = null, F = -1, re = 5, Z = -1;
    function we() {
      return !(r.unstable_now() - Z < re);
    }
    function Ne() {
      if (O !== null) {
        var W = r.unstable_now();
        Z = W;
        var ae = !0;
        try {
          ae = O(!0, W);
        } finally {
          ae ? Y() : (D = !1, O = null);
        }
      } else D = !1;
    }
    var Y;
    if (typeof b == "function") Y = function() {
      b(Ne);
    };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), G = he.port2;
      he.port1.onmessage = Ne, Y = function() {
        G.postMessage(null);
      };
    } else Y = function() {
      E(Ne, 0);
    };
    function ue(W) {
      O = W, D || (D = !0, Y());
    }
    function se(W, ae) {
      F = E(function() {
        W(r.unstable_now());
      }, ae);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, r.unstable_continueExecution = function() {
      _ || N || (_ = !0, ue(V));
    }, r.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < W ? Math.floor(1e3 / W) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, r.unstable_getFirstCallbackNode = function() {
      return l(x);
    }, r.unstable_next = function(W) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = T;
      }
      var te = T;
      T = ae;
      try {
        return W();
      } finally {
        T = te;
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
      var te = T;
      T = W;
      try {
        return ae();
      } finally {
        T = te;
      }
    }, r.unstable_scheduleCallback = function(W, ae, te) {
      var S = r.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? S + te : S) : te = S, W) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = te + g, W = { id: v++, callback: ae, priorityLevel: W, startTime: te, expirationTime: g, sortIndex: -1 }, te > S ? (W.sortIndex = te, i(j, W), l(x) === null && W === l(j) && (w ? (B(F), F = -1) : w = !0, se(z, te - S))) : (W.sortIndex = g, i(x, W), _ || N || (_ = !0, ue(V))), W;
    }, r.unstable_shouldYield = we, r.unstable_wrapCallback = function(W) {
      var ae = T;
      return function() {
        var te = T;
        T = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          T = te;
        }
      };
    };
  })(So)), So;
}
var Od;
function pp() {
  return Od || (Od = 1, jo.exports = mp()), jo.exports;
}
var $d;
function vp() {
  if ($d) return Ht;
  $d = 1;
  var r = qo(), i = pp();
  function l(e) {
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function T(e) {
    return x.call(k, e) ? !0 : x.call(v, e) ? !1 : j.test(e) ? k[e] = !0 : (v[e] = !0, !1);
  }
  function N(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, n, s) {
    if (t === null || typeof t > "u" || N(e, t, n, s)) return !0;
    if (s) return !1;
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
  function w(e, t, n, s, o, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
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
  var B = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      B,
      b
    );
    E[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(B, b);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(B, b);
    E[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, s) {
    var o = E.hasOwnProperty(t) ? E[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, n, o, s) && (n = null), s || o === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, s = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.provider"), we = /* @__PURE__ */ Symbol.for("react.context"), Ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Object.assign, S;
  function g(e) {
    if (S === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      S = t && t[1] || "";
    }
    return `
` + S + e;
  }
  var ne = !1;
  function ce(e, t) {
    if (!e || ne) return "";
    ne = !0;
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
          var s = I;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (I) {
          s = I;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          s = I;
        }
        e();
      }
    } catch (I) {
      if (I && s && typeof I.stack == "string") {
        for (var o = I.stack.split(`
`), u = s.stack.split(`
`), f = o.length - 1, y = u.length - 1; 1 <= f && 0 <= y && o[f] !== u[y]; ) y--;
        for (; 1 <= f && 0 <= y; f--, y--) if (o[f] !== u[y]) {
          if (f !== 1 || y !== 1)
            do
              if (f--, y--, 0 > y || o[f] !== u[y]) {
                var C = `
` + o[f].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= f && 0 <= y);
          break;
        }
      }
    } finally {
      ne = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function Ee(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
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
      case F:
        return "StrictMode";
      case Y:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case we:
        return (e.displayName || "Context") + ".Consumer";
      case Z:
        return (e._context.displayName || "Context") + ".Provider";
      case Ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return H(e(t));
        } catch {
        }
    }
    return null;
  }
  function K(e) {
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
  function J(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pe(e) {
    var t = J(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(f) {
        s = "" + f, u.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(f) {
        s = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ce(e) {
    e._valueTracker || (e._valueTracker = pe(e));
  }
  function ge(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = J(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function xe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function je(e, t) {
    var n = t.checked;
    return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ie(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Te(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function $(e, t) {
    Te(e, t);
    var n = ee(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? le(e, t.type, n) : t.hasOwnProperty("defaultValue") && le(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function oe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function le(e, t, n) {
    (t !== "number" || xe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Me = Array.isArray;
  function _e(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, s && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function He(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Oe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (Me(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function Fe(e, t) {
    var n = ee(t.value), s = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function Je(e) {
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
  function qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ft, en = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ft = Ft || document.createElement("div"), Ft.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ft.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Pt = {
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
  }, gn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Pt).forEach(function(e) {
    gn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Pt[t] = Pt[e];
    });
  });
  function be(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pt.hasOwnProperty(e) && Pt[e] ? ("" + t).trim() : t + "px";
  }
  function on(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, o = be(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var Le = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Le[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function ze(e, t) {
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
  var Ze = null;
  function at(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var un = null, St = null, Lt = null;
  function Tn(e) {
    if (e = $s(e)) {
      if (typeof un != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Or(t), un(e.stateNode, e.type, t));
    }
  }
  function cn(e) {
    St ? Lt ? Lt.push(e) : Lt = [e] : St = e;
  }
  function Mn() {
    if (St) {
      var e = St, t = Lt;
      if (Lt = St = null, Tn(e), t) for (e = 0; e < t.length; e++) Tn(t[e]);
    }
  }
  function cr(e, t) {
    return e(t);
  }
  function ms() {
  }
  var fi = !1;
  function Li(e, t, n) {
    if (fi) return e(t, n);
    fi = !0;
    try {
      return cr(e, t, n);
    } finally {
      fi = !1, (St !== null || Lt !== null) && (ms(), Mn());
    }
  }
  function mi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = Or(n);
    if (s === null) return null;
    n = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var Ve = !1;
  if (m) try {
    var et = {};
    Object.defineProperty(et, "passive", { get: function() {
      Ve = !0;
    } }), window.addEventListener("test", et, et), window.removeEventListener("test", et, et);
  } catch {
    Ve = !1;
  }
  function nt(e, t, n, s, o, u, f, y, C) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (X) {
      this.onError(X);
    }
  }
  var ht = !1, Dt = null, dn = !1, zn = null, ps = { onError: function(e) {
    ht = !0, Dt = e;
  } };
  function vs(e, t, n, s, o, u, f, y, C) {
    ht = !1, Dt = null, nt.apply(ps, arguments);
  }
  function dr(e, t, n, s, o, u, f, y, C) {
    if (vs.apply(this, arguments), ht) {
      if (ht) {
        var I = Dt;
        ht = !1, Dt = null;
      } else throw Error(l(198));
      dn || (dn = !0, zn = I);
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
  function Bn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ri(e) {
    if (_n(e) !== e) throw Error(l(188));
  }
  function hr(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (s = o.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return Ri(o), e;
          if (u === s) return Ri(o), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== s.return) n = o, s = u;
      else {
        for (var f = !1, y = o.child; y; ) {
          if (y === n) {
            f = !0, n = o, s = u;
            break;
          }
          if (y === s) {
            f = !0, s = o, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = u.child; y; ) {
            if (y === n) {
              f = !0, n = u, s = o;
              break;
            }
            if (y === s) {
              f = !0, s = u, n = o;
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(l(189));
        }
      }
      if (n.alternate !== s) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function fr(e) {
    return e = hr(e), e !== null ? mr(e) : null;
  }
  function mr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = mr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wt = i.unstable_scheduleCallback, pr = i.unstable_cancelCallback, vr = i.unstable_shouldYield, Ia = i.unstable_requestPaint, lt = i.unstable_now, Vn = i.unstable_getCurrentPriorityLevel, xn = i.unstable_ImmediatePriority, L = i.unstable_UserBlockingPriority, fe = i.unstable_NormalPriority, Ge = i.unstable_LowPriority, Wt = i.unstable_IdlePriority, ot = null, Rt = null;
  function ks(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
      Rt.onCommitFiberRoot(ot, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Et = Math.clz32 ? Math.clz32 : Mf, Cf = Math.log, Tf = Math.LN2;
  function Mf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Cf(e) / Tf | 0) | 0;
  }
  var kr = 64, yr = 4194304;
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
  function gr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, o = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var y = f & ~o;
      y !== 0 ? s = ys(y) : (u &= f, u !== 0 && (s = ys(u)));
    } else f = n & ~o, f !== 0 ? s = ys(f) : u !== 0 && (s = ys(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & o) === 0 && (o = s & -s, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Et(t), o = 1 << n, s |= e[n], t &= ~o;
    return s;
  }
  function _f(e, t) {
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
  function bf(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var f = 31 - Et(u), y = 1 << f, C = o[f];
      C === -1 ? ((y & n) === 0 || (y & s) !== 0) && (o[f] = _f(y, t)) : C <= t && (e.expiredLanes |= y), u &= ~y;
    }
  }
  function Fa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var e = kr;
    return kr <<= 1, (kr & 4194240) === 0 && (kr = 64), e;
  }
  function Da(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
  }
  function Af(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Et(n), u = 1 << o;
      t[o] = 0, s[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function za(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Et(n), o = 1 << s;
      o & t | e[s] & t && (e[s] |= t), n &= ~o;
    }
  }
  var qe = 0;
  function ou(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var uu, Ba, cu, du, hu, Va = !1, xr = [], Kn = null, Un = null, Hn = null, xs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Gn = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
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
  function Ss(e, t, n, s, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [o] }, t !== null && (t = $s(t), t !== null && Ba(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Lf(e, t, n, s, o) {
    switch (t) {
      case "focusin":
        return Kn = Ss(Kn, e, t, n, s, o), !0;
      case "dragenter":
        return Un = Ss(Un, e, t, n, s, o), !0;
      case "mouseover":
        return Hn = Ss(Hn, e, t, n, s, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return xs.set(u, Ss(xs.get(u) || null, e, t, n, s, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, js.set(u, Ss(js.get(u) || null, e, t, n, s, o)), !0;
    }
    return !1;
  }
  function mu(e) {
    var t = pi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Bn(n), t !== null) {
            e.blockedOn = t, hu(e.priority, function() {
              cu(n);
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
  function jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ze = s, n.target.dispatchEvent(s), Ze = null;
      } else return t = $s(n), t !== null && Ba(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pu(e, t, n) {
    jr(e) && n.delete(t);
  }
  function Rf() {
    Va = !1, Kn !== null && jr(Kn) && (Kn = null), Un !== null && jr(Un) && (Un = null), Hn !== null && jr(Hn) && (Hn = null), xs.forEach(pu), js.forEach(pu);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Va || (Va = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Rf)));
  }
  function Es(e) {
    function t(o) {
      return ws(o, e);
    }
    if (0 < xr.length) {
      ws(xr[0], e);
      for (var n = 1; n < xr.length; n++) {
        var s = xr[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (Kn !== null && ws(Kn, e), Un !== null && ws(Un, e), Hn !== null && ws(Hn, e), xs.forEach(t), js.forEach(t), n = 0; n < Gn.length; n++) s = Gn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null); ) mu(n), n.blockedOn === null && Gn.shift();
  }
  var Oi = z.ReactCurrentBatchConfig, Sr = !0;
  function Of(e, t, n, s) {
    var o = qe, u = Oi.transition;
    Oi.transition = null;
    try {
      qe = 1, Ka(e, t, n, s);
    } finally {
      qe = o, Oi.transition = u;
    }
  }
  function $f(e, t, n, s) {
    var o = qe, u = Oi.transition;
    Oi.transition = null;
    try {
      qe = 4, Ka(e, t, n, s);
    } finally {
      qe = o, Oi.transition = u;
    }
  }
  function Ka(e, t, n, s) {
    if (Sr) {
      var o = Ua(e, t, n, s);
      if (o === null) ll(e, t, s, wr, n), fu(e, s);
      else if (Lf(o, e, t, n, s)) s.stopPropagation();
      else if (fu(e, s), t & 4 && -1 < Pf.indexOf(e)) {
        for (; o !== null; ) {
          var u = $s(o);
          if (u !== null && uu(u), u = Ua(e, t, n, s), u === null && ll(e, t, s, wr, n), u === o) break;
          o = u;
        }
        o !== null && s.stopPropagation();
      } else ll(e, t, s, null, n);
    }
  }
  var wr = null;
  function Ua(e, t, n, s) {
    if (wr = null, e = at(s), e = pi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Bn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return wr = e, null;
  }
  function vu(e) {
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
        switch (Vn()) {
          case xn:
            return 1;
          case L:
            return 4;
          case fe:
          case Ge:
            return 16;
          case Wt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wn = null, Ha = null, Er = null;
  function ku() {
    if (Er) return Er;
    var e, t = Ha, n = t.length, s, o = "value" in Wn ? Wn.value : Wn.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var f = n - e;
    for (s = 1; s <= f && t[n - s] === o[u - s]; s++) ;
    return Er = o.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Nr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Cr() {
    return !0;
  }
  function yu() {
    return !1;
  }
  function Qt(e) {
    function t(n, s, o, u, f) {
      this._reactName = n, this._targetInst = o, this.type = s, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Cr : yu, this.isPropagationStopped = yu, this;
    }
    return te(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cr);
    }, persist: function() {
    }, isPersistent: Cr }), t;
  }
  var $i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ga = Qt($i), Ns = te({}, $i, { view: 0, detail: 0 }), If = Qt(Ns), Wa, Qa, Cs, Tr = te({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Cs && (Cs && e.type === "mousemove" ? (Wa = e.screenX - Cs.screenX, Qa = e.screenY - Cs.screenY) : Qa = Wa = 0, Cs = e), Wa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qa;
  } }), gu = Qt(Tr), Ff = te({}, Tr, { dataTransfer: 0 }), Df = Qt(Ff), zf = te({}, Ns, { relatedTarget: 0 }), Ya = Qt(zf), Bf = te({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vf = Qt(Bf), Kf = te({}, $i, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uf = Qt(Kf), Hf = te({}, $i, { data: 0 }), xu = Qt(Hf), Gf = {
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
  }, Wf = {
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
  }, Qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
  }
  function Ja() {
    return Yf;
  }
  var Jf = te({}, Ns, { key: function(e) {
    if (e.key) {
      var t = Gf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Nr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(e) {
    return e.type === "keypress" ? Nr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Xf = Qt(Jf), Zf = te({}, Tr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ju = Qt(Zf), qf = te({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), em = Qt(qf), tm = te({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nm = Qt(tm), im = te({}, Tr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sm = Qt(im), rm = [9, 13, 27, 32], Xa = m && "CompositionEvent" in window, Ts = null;
  m && "documentMode" in document && (Ts = document.documentMode);
  var am = m && "TextEvent" in window && !Ts, Su = m && (!Xa || Ts && 8 < Ts && 11 >= Ts), wu = " ", Eu = !1;
  function Nu(e, t) {
    switch (e) {
      case "keyup":
        return rm.indexOf(t.keyCode) !== -1;
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
  function Cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ii = !1;
  function lm(e, t) {
    switch (e) {
      case "compositionend":
        return Cu(t);
      case "keypress":
        return t.which !== 32 ? null : (Eu = !0, wu);
      case "textInput":
        return e = t.data, e === wu && Eu ? null : e;
      default:
        return null;
    }
  }
  function om(e, t) {
    if (Ii) return e === "compositionend" || !Xa && Nu(e, t) ? (e = ku(), Er = Ha = Wn = null, Ii = !1, e) : null;
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
        return Su && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var um = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!um[e.type] : t === "textarea";
  }
  function Mu(e, t, n, s) {
    cn(s), t = Pr(t, "onChange"), 0 < t.length && (n = new Ga("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var Ms = null, _s = null;
  function cm(e) {
    Gu(e, 0);
  }
  function Mr(e) {
    var t = Vi(e);
    if (ge(t)) return e;
  }
  function dm(e, t) {
    if (e === "change") return t;
  }
  var _u = !1;
  if (m) {
    var Za;
    if (m) {
      var qa = "oninput" in document;
      if (!qa) {
        var bu = document.createElement("div");
        bu.setAttribute("oninput", "return;"), qa = typeof bu.oninput == "function";
      }
      Za = qa;
    } else Za = !1;
    _u = Za && (!document.documentMode || 9 < document.documentMode);
  }
  function Au() {
    Ms && (Ms.detachEvent("onpropertychange", Pu), _s = Ms = null);
  }
  function Pu(e) {
    if (e.propertyName === "value" && Mr(_s)) {
      var t = [];
      Mu(t, _s, e, at(e)), Li(cm, t);
    }
  }
  function hm(e, t, n) {
    e === "focusin" ? (Au(), Ms = t, _s = n, Ms.attachEvent("onpropertychange", Pu)) : e === "focusout" && Au();
  }
  function fm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Mr(_s);
  }
  function mm(e, t) {
    if (e === "click") return Mr(t);
  }
  function pm(e, t) {
    if (e === "input" || e === "change") return Mr(t);
  }
  function vm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var hn = typeof Object.is == "function" ? Object.is : vm;
  function bs(e, t) {
    if (hn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var o = n[s];
      if (!x.call(t, o) || !hn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ru(e, t) {
    var n = Lu(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (s = e + n.textContent.length, e <= t && s >= t) return { node: n, offset: t - e };
        e = s;
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
      n = Lu(n);
    }
  }
  function Ou(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ou(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $u() {
    for (var e = window, t = xe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xe(e.document);
    }
    return t;
  }
  function el(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function km(e) {
    var t = $u(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ou(n.ownerDocument.documentElement, n)) {
      if (s !== null && el(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(s.start, o);
          s = s.end === void 0 ? u : Math.min(s.end, o), !e.extend && u > s && (o = s, s = u, u = o), o = Ru(n, u);
          var f = Ru(
            n,
            s
          );
          o && f && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ym = m && "documentMode" in document && 11 >= document.documentMode, Fi = null, tl = null, As = null, nl = !1;
  function Iu(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nl || Fi == null || Fi !== xe(s) || (s = Fi, "selectionStart" in s && el(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), As && bs(As, s) || (As = s, s = Pr(tl, "onSelect"), 0 < s.length && (t = new Ga("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = Fi)));
  }
  function _r(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Di = { animationend: _r("Animation", "AnimationEnd"), animationiteration: _r("Animation", "AnimationIteration"), animationstart: _r("Animation", "AnimationStart"), transitionend: _r("Transition", "TransitionEnd") }, il = {}, Fu = {};
  m && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete Di.animationend.animation, delete Di.animationiteration.animation, delete Di.animationstart.animation), "TransitionEvent" in window || delete Di.transitionend.transition);
  function br(e) {
    if (il[e]) return il[e];
    if (!Di[e]) return e;
    var t = Di[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fu) return il[e] = t[n];
    return e;
  }
  var Du = br("animationend"), zu = br("animationiteration"), Bu = br("animationstart"), Vu = br("transitionend"), Ku = /* @__PURE__ */ new Map(), Uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qn(e, t) {
    Ku.set(e, t), h(t, [e]);
  }
  for (var sl = 0; sl < Uu.length; sl++) {
    var rl = Uu[sl], gm = rl.toLowerCase(), xm = rl[0].toUpperCase() + rl.slice(1);
    Qn(gm, "on" + xm);
  }
  Qn(Du, "onAnimationEnd"), Qn(zu, "onAnimationIteration"), Qn(Bu, "onAnimationStart"), Qn("dblclick", "onDoubleClick"), Qn("focusin", "onFocus"), Qn("focusout", "onBlur"), Qn(Vu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));
  function Hu(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, dr(s, t, void 0, e), e.currentTarget = null;
  }
  function Gu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], o = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = s.length - 1; 0 <= f; f--) {
          var y = s[f], C = y.instance, I = y.currentTarget;
          if (y = y.listener, C !== u && o.isPropagationStopped()) break e;
          Hu(o, y, I), u = C;
        }
        else for (f = 0; f < s.length; f++) {
          if (y = s[f], C = y.instance, I = y.currentTarget, y = y.listener, C !== u && o.isPropagationStopped()) break e;
          Hu(o, y, I), u = C;
        }
      }
    }
    if (dn) throw e = zn, dn = !1, zn = null, e;
  }
  function it(e, t) {
    var n = t[fl];
    n === void 0 && (n = t[fl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (Wu(t, e, 2, !1), n.add(s));
  }
  function al(e, t, n) {
    var s = 0;
    t && (s |= 4), Wu(n, e, s, t);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[Ar]) {
      e[Ar] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (jm.has(n) || al(n, !1, e), al(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || (t[Ar] = !0, al("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, s) {
    switch (vu(t)) {
      case 1:
        var o = Of;
        break;
      case 4:
        o = $f;
        break;
      default:
        o = Ka;
    }
    n = o.bind(null, t, n, e), o = void 0, !Ve || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function ll(e, t, n, s, o) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var f = s.tag;
      if (f === 3 || f === 4) {
        var y = s.stateNode.containerInfo;
        if (y === o || y.nodeType === 8 && y.parentNode === o) break;
        if (f === 4) for (f = s.return; f !== null; ) {
          var C = f.tag;
          if ((C === 3 || C === 4) && (C = f.stateNode.containerInfo, C === o || C.nodeType === 8 && C.parentNode === o)) return;
          f = f.return;
        }
        for (; y !== null; ) {
          if (f = pi(y), f === null) return;
          if (C = f.tag, C === 5 || C === 6) {
            s = u = f;
            continue e;
          }
          y = y.parentNode;
        }
      }
      s = s.return;
    }
    Li(function() {
      var I = u, X = at(n), q = [];
      e: {
        var Q = Ku.get(e);
        if (Q !== void 0) {
          var de = Ga, ve = e;
          switch (e) {
            case "keypress":
              if (Nr(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Xf;
              break;
            case "focusin":
              ve = "focus", de = Ya;
              break;
            case "focusout":
              ve = "blur", de = Ya;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ya;
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
              de = gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Df;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = em;
              break;
            case Du:
            case zu:
            case Bu:
              de = Vf;
              break;
            case Vu:
              de = nm;
              break;
            case "scroll":
              de = If;
              break;
            case "wheel":
              de = sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Uf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = ju;
          }
          var ye = (t & 4) !== 0, ft = !ye && e === "scroll", P = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var M = I, R; M !== null; ) {
            R = M;
            var ie = R.stateNode;
            if (R.tag === 5 && ie !== null && (R = ie, P !== null && (ie = mi(M, P), ie != null && ye.push(Rs(M, ie, R)))), ft) break;
            M = M.return;
          }
          0 < ye.length && (Q = new de(Q, ve, null, n, X), q.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== Ze && (ve = n.relatedTarget || n.fromElement) && (pi(ve) || ve[bn])) break e;
          if ((de || Q) && (Q = X.window === X ? X : (Q = X.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (ve = n.relatedTarget || n.toElement, de = I, ve = ve ? pi(ve) : null, ve !== null && (ft = _n(ve), ve !== ft || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (de = null, ve = I), de !== ve)) {
            if (ye = gu, ie = "onMouseLeave", P = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (ye = ju, ie = "onPointerLeave", P = "onPointerEnter", M = "pointer"), ft = de == null ? Q : Vi(de), R = ve == null ? Q : Vi(ve), Q = new ye(ie, M + "leave", de, n, X), Q.target = ft, Q.relatedTarget = R, ie = null, pi(X) === I && (ye = new ye(P, M + "enter", ve, n, X), ye.target = R, ye.relatedTarget = ft, ie = ye), ft = ie, de && ve) t: {
              for (ye = de, P = ve, M = 0, R = ye; R; R = zi(R)) M++;
              for (R = 0, ie = P; ie; ie = zi(ie)) R++;
              for (; 0 < M - R; ) ye = zi(ye), M--;
              for (; 0 < R - M; ) P = zi(P), R--;
              for (; M--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = zi(ye), P = zi(P);
              }
              ye = null;
            }
            else ye = null;
            de !== null && Qu(q, Q, de, ye, !1), ve !== null && ft !== null && Qu(q, ft, ve, ye, !0);
          }
        }
        e: {
          if (Q = I ? Vi(I) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var Se = dm;
          else if (Tu(Q)) if (_u) Se = pm;
          else {
            Se = fm;
            var Ae = hm;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Se = mm);
          if (Se && (Se = Se(e, I))) {
            Mu(q, Se, n, X);
            break e;
          }
          Ae && Ae(e, Q, I), e === "focusout" && (Ae = Q._wrapperState) && Ae.controlled && Q.type === "number" && le(Q, "number", Q.value);
        }
        switch (Ae = I ? Vi(I) : window, e) {
          case "focusin":
            (Tu(Ae) || Ae.contentEditable === "true") && (Fi = Ae, tl = I, As = null);
            break;
          case "focusout":
            As = tl = Fi = null;
            break;
          case "mousedown":
            nl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nl = !1, Iu(q, n, X);
            break;
          case "selectionchange":
            if (ym) break;
          case "keydown":
          case "keyup":
            Iu(q, n, X);
        }
        var Pe;
        if (Xa) e: {
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
        else Ii ? Nu(e, n) && ($e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Su && n.locale !== "ko" && (Ii || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Ii && (Pe = ku()) : (Wn = X, Ha = "value" in Wn ? Wn.value : Wn.textContent, Ii = !0)), Ae = Pr(I, $e), 0 < Ae.length && ($e = new xu($e, e, null, n, X), q.push({ event: $e, listeners: Ae }), Pe ? $e.data = Pe : (Pe = Cu(n), Pe !== null && ($e.data = Pe)))), (Pe = am ? lm(e, n) : om(e, n)) && (I = Pr(I, "onBeforeInput"), 0 < I.length && (X = new xu("onBeforeInput", "beforeinput", null, n, X), q.push({ event: X, listeners: I }), X.data = Pe));
      }
      Gu(q, t);
    });
  }
  function Rs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Pr(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = mi(e, n), u != null && s.unshift(Rs(e, u, o)), u = mi(e, t), u != null && s.push(Rs(e, u, o))), e = e.return;
    }
    return s;
  }
  function zi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, s, o) {
    for (var u = t._reactName, f = []; n !== null && n !== s; ) {
      var y = n, C = y.alternate, I = y.stateNode;
      if (C !== null && C === s) break;
      y.tag === 5 && I !== null && (y = I, o ? (C = mi(n, u), C != null && f.unshift(Rs(n, C, y))) : o || (C = mi(n, u), C != null && f.push(Rs(n, C, y)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Sm = /\r\n?/g, wm = /\u0000|\uFFFD/g;
  function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sm, `
`).replace(wm, "");
  }
  function Lr(e, t, n) {
    if (t = Yu(t), Yu(e) !== t && n) throw Error(l(425));
  }
  function Rr() {
  }
  var ol = null, ul = null;
  function cl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var dl = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, Ju = typeof Promise == "function" ? Promise : void 0, Nm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ju < "u" ? function(e) {
    return Ju.resolve(null).then(e).catch(Cm);
  } : dl;
  function Cm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hl(e, t) {
    var n = t, s = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (s === 0) {
          e.removeChild(o), Es(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = o;
    } while (n);
    Es(t);
  }
  function Yn(e) {
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
  function Xu(e) {
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
  var Bi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Bi, Os = "__reactProps$" + Bi, bn = "__reactContainer$" + Bi, fl = "__reactEvents$" + Bi, Tm = "__reactListeners$" + Bi, Mm = "__reactHandles$" + Bi;
  function pi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bn] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xu(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = Xu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function $s(e) {
    return e = e[jn] || e[bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Vi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Or(e) {
    return e[Os] || null;
  }
  var ml = [], Ki = -1;
  function Jn(e) {
    return { current: e };
  }
  function st(e) {
    0 > Ki || (e.current = ml[Ki], ml[Ki] = null, Ki--);
  }
  function tt(e, t) {
    Ki++, ml[Ki] = e.current, e.current = t;
  }
  var Xn = {}, Mt = Jn(Xn), zt = Jn(!1), vi = Xn;
  function Ui(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Bt(e) {
    return e = e.childContextTypes, e != null;
  }
  function $r() {
    st(zt), st(Mt);
  }
  function Zu(e, t, n) {
    if (Mt.current !== Xn) throw Error(l(168));
    tt(Mt, t), tt(zt, n);
  }
  function qu(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(l(108, K(e) || "Unknown", o));
    return te({}, n, s);
  }
  function Ir(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xn, vi = Mt.current, tt(Mt, e), tt(zt, zt.current), !0;
  }
  function ec(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(l(169));
    n ? (e = qu(e, t, vi), s.__reactInternalMemoizedMergedChildContext = e, st(zt), st(Mt), tt(Mt, e)) : st(zt), tt(zt, n);
  }
  var An = null, Fr = !1, pl = !1;
  function tc(e) {
    An === null ? An = [e] : An.push(e);
  }
  function _m(e) {
    Fr = !0, tc(e);
  }
  function Zn() {
    if (!pl && An !== null) {
      pl = !0;
      var e = 0, t = qe;
      try {
        var n = An;
        for (qe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        An = null, Fr = !1;
      } catch (o) {
        throw An !== null && (An = An.slice(e + 1)), wt(xn, Zn), o;
      } finally {
        qe = t, pl = !1;
      }
    }
    return null;
  }
  var Hi = [], Gi = 0, Dr = null, zr = 0, tn = [], nn = 0, ki = null, Pn = 1, Ln = "";
  function yi(e, t) {
    Hi[Gi++] = zr, Hi[Gi++] = Dr, Dr = e, zr = t;
  }
  function nc(e, t, n) {
    tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = ki, ki = e;
    var s = Pn;
    e = Ln;
    var o = 32 - Et(s) - 1;
    s &= ~(1 << o), n += 1;
    var u = 32 - Et(t) + o;
    if (30 < u) {
      var f = o - o % 5;
      u = (s & (1 << f) - 1).toString(32), s >>= f, o -= f, Pn = 1 << 32 - Et(t) + o | n << o | s, Ln = u + e;
    } else Pn = 1 << u | n << o | s, Ln = e;
  }
  function vl(e) {
    e.return !== null && (yi(e, 1), nc(e, 1, 0));
  }
  function kl(e) {
    for (; e === Dr; ) Dr = Hi[--Gi], Hi[Gi] = null, zr = Hi[--Gi], Hi[Gi] = null;
    for (; e === ki; ) ki = tn[--nn], tn[nn] = null, Ln = tn[--nn], tn[nn] = null, Pn = tn[--nn], tn[nn] = null;
  }
  var Yt = null, Jt = null, rt = !1, fn = null;
  function ic(e, t) {
    var n = ln(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Yt = e, Jt = Yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Yt = e, Jt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ki !== null ? { id: Pn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ln(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Yt = e, Jt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function gl(e) {
    if (rt) {
      var t = Jt;
      if (t) {
        var n = t;
        if (!sc(e, t)) {
          if (yl(e)) throw Error(l(418));
          t = Yn(n.nextSibling);
          var s = Yt;
          t && sc(e, t) ? ic(s, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Yt = e);
        }
      } else {
        if (yl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Yt = e;
      }
    }
  }
  function rc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Yt = e;
  }
  function Br(e) {
    if (e !== Yt) return !1;
    if (!rt) return rc(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cl(e.type, e.memoizedProps)), t && (t = Jt)) {
      if (yl(e)) throw ac(), Error(l(418));
      for (; t; ) ic(e, t), t = Yn(t.nextSibling);
    }
    if (rc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Jt = Yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Jt = null;
      }
    } else Jt = Yt ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ac() {
    for (var e = Jt; e; ) e = Yn(e.nextSibling);
  }
  function Wi() {
    Jt = Yt = null, rt = !1;
  }
  function xl(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var bm = z.ReactCurrentBatchConfig;
  function Is(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(l(147, e));
        var o = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
          var y = o.refs;
          f === null ? delete y[u] : y[u] = f;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Vr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function lc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function oc(e) {
    function t(P, M) {
      if (e) {
        var R = P.deletions;
        R === null ? (P.deletions = [M], P.flags |= 16) : R.push(M);
      }
    }
    function n(P, M) {
      if (!e) return null;
      for (; M !== null; ) t(P, M), M = M.sibling;
      return null;
    }
    function s(P, M) {
      for (P = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? P.set(M.key, M) : P.set(M.index, M), M = M.sibling;
      return P;
    }
    function o(P, M) {
      return P = ai(P, M), P.index = 0, P.sibling = null, P;
    }
    function u(P, M, R) {
      return P.index = R, e ? (R = P.alternate, R !== null ? (R = R.index, R < M ? (P.flags |= 2, M) : R) : (P.flags |= 2, M)) : (P.flags |= 1048576, M);
    }
    function f(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function y(P, M, R, ie) {
      return M === null || M.tag !== 6 ? (M = ho(R, P.mode, ie), M.return = P, M) : (M = o(M, R), M.return = P, M);
    }
    function C(P, M, R, ie) {
      var Se = R.type;
      return Se === O ? X(P, M, R.props.children, ie, R.key) : M !== null && (M.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === ue && lc(Se) === M.type) ? (ie = o(M, R.props), ie.ref = Is(P, M, R), ie.return = P, ie) : (ie = ha(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Is(P, M, R), ie.return = P, ie);
    }
    function I(P, M, R, ie) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== R.containerInfo || M.stateNode.implementation !== R.implementation ? (M = fo(R, P.mode, ie), M.return = P, M) : (M = o(M, R.children || []), M.return = P, M);
    }
    function X(P, M, R, ie, Se) {
      return M === null || M.tag !== 7 ? (M = Ci(R, P.mode, ie, Se), M.return = P, M) : (M = o(M, R), M.return = P, M);
    }
    function q(P, M, R) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = ho("" + M, P.mode, R), M.return = P, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return R = ha(M.type, M.key, M.props, null, P.mode, R), R.ref = Is(P, null, M), R.return = P, R;
          case D:
            return M = fo(M, P.mode, R), M.return = P, M;
          case ue:
            var ie = M._init;
            return q(P, ie(M._payload), R);
        }
        if (Me(M) || ae(M)) return M = Ci(M, P.mode, R, null), M.return = P, M;
        Vr(P, M);
      }
      return null;
    }
    function Q(P, M, R, ie) {
      var Se = M !== null ? M.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Se !== null ? null : y(P, M, "" + R, ie);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return R.key === Se ? C(P, M, R, ie) : null;
          case D:
            return R.key === Se ? I(P, M, R, ie) : null;
          case ue:
            return Se = R._init, Q(
              P,
              M,
              Se(R._payload),
              ie
            );
        }
        if (Me(R) || ae(R)) return Se !== null ? null : X(P, M, R, ie, null);
        Vr(P, R);
      }
      return null;
    }
    function de(P, M, R, ie, Se) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(R) || null, y(M, P, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case V:
            return P = P.get(ie.key === null ? R : ie.key) || null, C(M, P, ie, Se);
          case D:
            return P = P.get(ie.key === null ? R : ie.key) || null, I(M, P, ie, Se);
          case ue:
            var Ae = ie._init;
            return de(P, M, R, Ae(ie._payload), Se);
        }
        if (Me(ie) || ae(ie)) return P = P.get(R) || null, X(M, P, ie, Se, null);
        Vr(M, ie);
      }
      return null;
    }
    function ve(P, M, R, ie) {
      for (var Se = null, Ae = null, Pe = M, $e = M = 0, jt = null; Pe !== null && $e < R.length; $e++) {
        Pe.index > $e ? (jt = Pe, Pe = null) : jt = Pe.sibling;
        var Ye = Q(P, Pe, R[$e], ie);
        if (Ye === null) {
          Pe === null && (Pe = jt);
          break;
        }
        e && Pe && Ye.alternate === null && t(P, Pe), M = u(Ye, M, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye, Pe = jt;
      }
      if ($e === R.length) return n(P, Pe), rt && yi(P, $e), Se;
      if (Pe === null) {
        for (; $e < R.length; $e++) Pe = q(P, R[$e], ie), Pe !== null && (M = u(Pe, M, $e), Ae === null ? Se = Pe : Ae.sibling = Pe, Ae = Pe);
        return rt && yi(P, $e), Se;
      }
      for (Pe = s(P, Pe); $e < R.length; $e++) jt = de(Pe, P, $e, R[$e], ie), jt !== null && (e && jt.alternate !== null && Pe.delete(jt.key === null ? $e : jt.key), M = u(jt, M, $e), Ae === null ? Se = jt : Ae.sibling = jt, Ae = jt);
      return e && Pe.forEach(function(li) {
        return t(P, li);
      }), rt && yi(P, $e), Se;
    }
    function ye(P, M, R, ie) {
      var Se = ae(R);
      if (typeof Se != "function") throw Error(l(150));
      if (R = Se.call(R), R == null) throw Error(l(151));
      for (var Ae = Se = null, Pe = M, $e = M = 0, jt = null, Ye = R.next(); Pe !== null && !Ye.done; $e++, Ye = R.next()) {
        Pe.index > $e ? (jt = Pe, Pe = null) : jt = Pe.sibling;
        var li = Q(P, Pe, Ye.value, ie);
        if (li === null) {
          Pe === null && (Pe = jt);
          break;
        }
        e && Pe && li.alternate === null && t(P, Pe), M = u(li, M, $e), Ae === null ? Se = li : Ae.sibling = li, Ae = li, Pe = jt;
      }
      if (Ye.done) return n(
        P,
        Pe
      ), rt && yi(P, $e), Se;
      if (Pe === null) {
        for (; !Ye.done; $e++, Ye = R.next()) Ye = q(P, Ye.value, ie), Ye !== null && (M = u(Ye, M, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
        return rt && yi(P, $e), Se;
      }
      for (Pe = s(P, Pe); !Ye.done; $e++, Ye = R.next()) Ye = de(Pe, P, $e, Ye.value, ie), Ye !== null && (e && Ye.alternate !== null && Pe.delete(Ye.key === null ? $e : Ye.key), M = u(Ye, M, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
      return e && Pe.forEach(function(up) {
        return t(P, up);
      }), rt && yi(P, $e), Se;
    }
    function ft(P, M, R, ie) {
      if (typeof R == "object" && R !== null && R.type === O && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            e: {
              for (var Se = R.key, Ae = M; Ae !== null; ) {
                if (Ae.key === Se) {
                  if (Se = R.type, Se === O) {
                    if (Ae.tag === 7) {
                      n(P, Ae.sibling), M = o(Ae, R.props.children), M.return = P, P = M;
                      break e;
                    }
                  } else if (Ae.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === ue && lc(Se) === Ae.type) {
                    n(P, Ae.sibling), M = o(Ae, R.props), M.ref = Is(P, Ae, R), M.return = P, P = M;
                    break e;
                  }
                  n(P, Ae);
                  break;
                } else t(P, Ae);
                Ae = Ae.sibling;
              }
              R.type === O ? (M = Ci(R.props.children, P.mode, ie, R.key), M.return = P, P = M) : (ie = ha(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Is(P, M, R), ie.return = P, P = ie);
            }
            return f(P);
          case D:
            e: {
              for (Ae = R.key; M !== null; ) {
                if (M.key === Ae) if (M.tag === 4 && M.stateNode.containerInfo === R.containerInfo && M.stateNode.implementation === R.implementation) {
                  n(P, M.sibling), M = o(M, R.children || []), M.return = P, P = M;
                  break e;
                } else {
                  n(P, M);
                  break;
                }
                else t(P, M);
                M = M.sibling;
              }
              M = fo(R, P.mode, ie), M.return = P, P = M;
            }
            return f(P);
          case ue:
            return Ae = R._init, ft(P, M, Ae(R._payload), ie);
        }
        if (Me(R)) return ve(P, M, R, ie);
        if (ae(R)) return ye(P, M, R, ie);
        Vr(P, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, M !== null && M.tag === 6 ? (n(P, M.sibling), M = o(M, R), M.return = P, P = M) : (n(P, M), M = ho(R, P.mode, ie), M.return = P, P = M), f(P)) : n(P, M);
    }
    return ft;
  }
  var Qi = oc(!0), uc = oc(!1), Kr = Jn(null), Ur = null, Yi = null, jl = null;
  function Sl() {
    jl = Yi = Ur = null;
  }
  function wl(e) {
    var t = Kr.current;
    st(Kr), e._currentValue = t;
  }
  function El(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ji(e, t) {
    Ur = e, jl = Yi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Vt = !0), e.firstContext = null);
  }
  function sn(e) {
    var t = e._currentValue;
    if (jl !== e) if (e = { context: e, memoizedValue: t, next: null }, Yi === null) {
      if (Ur === null) throw Error(l(308));
      Yi = e, Ur.dependencies = { lanes: 0, firstContext: e };
    } else Yi = Yi.next = e;
    return t;
  }
  var gi = null;
  function Nl(e) {
    gi === null ? gi = [e] : gi.push(e);
  }
  function cc(e, t, n, s) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Nl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rn(e, s);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var qn = !1;
  function Cl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function dc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ei(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (We & 2) !== 0) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Rn(e, n);
    }
    return o = s.interleaved, o === null ? (t.next = t, Nl(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Rn(e, n);
  }
  function Hr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, za(e, n);
    }
  }
  function hc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? o = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Gr(e, t, n, s) {
    var o = e.updateQueue;
    qn = !1;
    var u = o.firstBaseUpdate, f = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var C = y, I = C.next;
      C.next = null, f === null ? u = I : f.next = I, f = C;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, y = X.lastBaseUpdate, y !== f && (y === null ? X.firstBaseUpdate = I : y.next = I, X.lastBaseUpdate = C));
    }
    if (u !== null) {
      var q = o.baseState;
      f = 0, X = I = C = null, y = u;
      do {
        var Q = y.lane, de = y.eventTime;
        if ((s & Q) === Q) {
          X !== null && (X = X.next = {
            eventTime: de,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var ve = e, ye = y;
            switch (Q = t, de = n, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  q = ve.call(de, q, Q);
                  break e;
                }
                q = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, Q = typeof ve == "function" ? ve.call(de, q, Q) : ve, Q == null) break e;
                q = te({}, q, Q);
                break e;
              case 2:
                qn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, Q = o.effects, Q === null ? o.effects = [y] : Q.push(y));
        } else de = { eventTime: de, lane: Q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, X === null ? (I = X = de, C = q) : X = X.next = de, f |= Q;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null) break;
          Q = y, y = Q.next, Q.next = null, o.lastBaseUpdate = Q, o.shared.pending = null;
        }
      } while (!0);
      if (X === null && (C = q), o.baseState = C, o.firstBaseUpdate = I, o.lastBaseUpdate = X, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          f |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      Si |= f, e.lanes = f, e.memoizedState = q;
    }
  }
  function fc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = n, typeof o != "function") throw Error(l(191, o));
        o.call(s);
      }
    }
  }
  var Fs = {}, Sn = Jn(Fs), Ds = Jn(Fs), zs = Jn(Fs);
  function xi(e) {
    if (e === Fs) throw Error(l(174));
    return e;
  }
  function Tl(e, t) {
    switch (tt(zs, t), tt(Ds, e), tt(Sn, Fs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qt(t, e);
    }
    st(Sn), tt(Sn, t);
  }
  function Xi() {
    st(Sn), st(Ds), st(zs);
  }
  function mc(e) {
    xi(zs.current);
    var t = xi(Sn.current), n = qt(t, e.type);
    t !== n && (tt(Ds, e), tt(Sn, n));
  }
  function Ml(e) {
    Ds.current === e && (st(Sn), st(Ds));
  }
  var ut = Jn(0);
  function Wr(e) {
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
  var _l = [];
  function bl() {
    for (var e = 0; e < _l.length; e++) _l[e]._workInProgressVersionPrimary = null;
    _l.length = 0;
  }
  var Qr = z.ReactCurrentDispatcher, Al = z.ReactCurrentBatchConfig, ji = 0, ct = null, kt = null, gt = null, Yr = !1, Bs = !1, Vs = 0, Am = 0;
  function _t() {
    throw Error(l(321));
  }
  function Pl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!hn(e[n], t[n])) return !1;
    return !0;
  }
  function Ll(e, t, n, s, o, u) {
    if (ji = u, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? Om : $m, e = n(s, o), Bs) {
      u = 0;
      do {
        if (Bs = !1, Vs = 0, 25 <= u) throw Error(l(301));
        u += 1, gt = kt = null, t.updateQueue = null, Qr.current = Im, e = n(s, o);
      } while (Bs);
    }
    if (Qr.current = Zr, t = kt !== null && kt.next !== null, ji = 0, gt = kt = ct = null, Yr = !1, t) throw Error(l(300));
    return e;
  }
  function Rl() {
    var e = Vs !== 0;
    return Vs = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return gt === null ? ct.memoizedState = gt = e : gt = gt.next = e, gt;
  }
  function rn() {
    if (kt === null) {
      var e = ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = kt.next;
    var t = gt === null ? ct.memoizedState : gt.next;
    if (t !== null) gt = t, kt = e;
    else {
      if (e === null) throw Error(l(310));
      kt = e, e = { memoizedState: kt.memoizedState, baseState: kt.baseState, baseQueue: kt.baseQueue, queue: kt.queue, next: null }, gt === null ? ct.memoizedState = gt = e : gt = gt.next = e;
    }
    return gt;
  }
  function Ks(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ol(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var s = kt, o = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var f = o.next;
        o.next = u.next, u.next = f;
      }
      s.baseQueue = o = u, n.pending = null;
    }
    if (o !== null) {
      u = o.next, s = s.baseState;
      var y = f = null, C = null, I = u;
      do {
        var X = I.lane;
        if ((ji & X) === X) C !== null && (C = C.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), s = I.hasEagerState ? I.eagerState : e(s, I.action);
        else {
          var q = {
            lane: X,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          C === null ? (y = C = q, f = s) : C = C.next = q, ct.lanes |= X, Si |= X;
        }
        I = I.next;
      } while (I !== null && I !== u);
      C === null ? f = s : C.next = y, hn(s, t.memoizedState) || (Vt = !0), t.memoizedState = s, t.baseState = f, t.baseQueue = C, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, ct.lanes |= u, Si |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $l(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var f = o = o.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== o);
      hn(u, t.memoizedState) || (Vt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function pc() {
  }
  function vc(e, t) {
    var n = ct, s = rn(), o = t(), u = !hn(s.memoizedState, o);
    if (u && (s.memoizedState = o, Vt = !0), s = s.queue, Il(gc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || gt !== null && gt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Us(9, yc.bind(null, n, s, o, t), void 0, null), xt === null) throw Error(l(349));
      (ji & 30) !== 0 || kc(n, t, o);
    }
    return o;
  }
  function kc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function yc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, xc(t) && jc(e);
  }
  function gc(e, t, n) {
    return n(function() {
      xc(t) && jc(e);
    });
  }
  function xc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !hn(e, n);
    } catch {
      return !0;
    }
  }
  function jc(e) {
    var t = Rn(e, 1);
    t !== null && kn(t, e, 1, -1);
  }
  function Sc(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rm.bind(null, ct, e), [t.memoizedState, e];
  }
  function Us(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function wc() {
    return rn().memoizedState;
  }
  function Jr(e, t, n, s) {
    var o = wn();
    ct.flags |= e, o.memoizedState = Us(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Xr(e, t, n, s) {
    var o = rn();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (kt !== null) {
      var f = kt.memoizedState;
      if (u = f.destroy, s !== null && Pl(s, f.deps)) {
        o.memoizedState = Us(t, n, u, s);
        return;
      }
    }
    ct.flags |= e, o.memoizedState = Us(1 | t, n, u, s);
  }
  function Ec(e, t) {
    return Jr(8390656, 8, e, t);
  }
  function Il(e, t) {
    return Xr(2048, 8, e, t);
  }
  function Nc(e, t) {
    return Xr(4, 2, e, t);
  }
  function Cc(e, t) {
    return Xr(4, 4, e, t);
  }
  function Tc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Mc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Xr(4, 4, Tc.bind(null, t, e), n);
  }
  function Fl() {
  }
  function _c(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Pl(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function bc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Pl(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ac(e, t, n) {
    return (ji & 21) === 0 ? (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n) : (hn(n, t) || (n = lu(), ct.lanes |= n, Si |= n, e.baseState = !0), t);
  }
  function Pm(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Al.transition;
    Al.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Al.transition = s;
    }
  }
  function Pc() {
    return rn().memoizedState;
  }
  function Lm(e, t, n) {
    var s = si(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Lc(e)) Rc(t, n);
    else if (n = cc(e, t, n, s), n !== null) {
      var o = $t();
      kn(n, e, s, o), Oc(n, t, s);
    }
  }
  function Rm(e, t, n) {
    var s = si(e), o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Lc(e)) Rc(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, y = u(f, n);
        if (o.hasEagerState = !0, o.eagerState = y, hn(y, f)) {
          var C = t.interleaved;
          C === null ? (o.next = o, Nl(t)) : (o.next = C.next, C.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = cc(e, t, o, s), n !== null && (o = $t(), kn(n, e, s, o), Oc(n, t, s));
    }
  }
  function Lc(e) {
    var t = e.alternate;
    return e === ct || t !== null && t === ct;
  }
  function Rc(e, t) {
    Bs = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Oc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, za(e, n);
    }
  }
  var Zr = { readContext: sn, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, Om = { readContext: sn, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: sn, useEffect: Ec, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Jr(
      4194308,
      4,
      Tc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Jr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Jr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = wn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Lm.bind(null, ct, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Sc, useDebugValue: Fl, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = Sc(!1), t = e[0];
    return e = Pm.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = ct, o = wn();
    if (rt) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), xt === null) throw Error(l(349));
      (ji & 30) !== 0 || kc(s, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Ec(gc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Us(9, yc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = xt.identifierPrefix;
    if (rt) {
      var n = Ln, s = Pn;
      n = (s & ~(1 << 32 - Et(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Am++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, $m = {
    readContext: sn,
    useCallback: _c,
    useContext: sn,
    useEffect: Il,
    useImperativeHandle: Mc,
    useInsertionEffect: Nc,
    useLayoutEffect: Cc,
    useMemo: bc,
    useReducer: Ol,
    useRef: wc,
    useState: function() {
      return Ol(Ks);
    },
    useDebugValue: Fl,
    useDeferredValue: function(e) {
      var t = rn();
      return Ac(t, kt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ol(Ks)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: pc,
    useSyncExternalStore: vc,
    useId: Pc,
    unstable_isNewReconciler: !1
  }, Im = { readContext: sn, useCallback: _c, useContext: sn, useEffect: Il, useImperativeHandle: Mc, useInsertionEffect: Nc, useLayoutEffect: Cc, useMemo: bc, useReducer: $l, useRef: wc, useState: function() {
    return $l(Ks);
  }, useDebugValue: Fl, useDeferredValue: function(e) {
    var t = rn();
    return kt === null ? t.memoizedState = e : Ac(t, kt.memoizedState, e);
  }, useTransition: function() {
    var e = $l(Ks)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: pc, useSyncExternalStore: vc, useId: Pc, unstable_isNewReconciler: !1 };
  function mn(e, t) {
    if (e && e.defaultProps) {
      t = te({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Dl(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var qr = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = $t(), o = si(e), u = On(s, o);
    u.payload = t, n != null && (u.callback = n), t = ei(e, u, o), t !== null && (kn(t, e, o, s), Hr(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = $t(), o = si(e), u = On(s, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = ei(e, u, o), t !== null && (kn(t, e, o, s), Hr(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $t(), s = si(e), o = On(n, s);
    o.tag = 2, t != null && (o.callback = t), t = ei(e, o, s), t !== null && (kn(t, e, s, n), Hr(t, e, s));
  } };
  function $c(e, t, n, s, o, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, f) : t.prototype && t.prototype.isPureReactComponent ? !bs(n, s) || !bs(o, u) : !0;
  }
  function Ic(e, t, n) {
    var s = !1, o = Xn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = sn(u) : (o = Bt(t) ? vi : Mt.current, s = t.contextTypes, u = (s = s != null) ? Ui(e, o) : Xn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qr, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Fc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && qr.enqueueReplaceState(t, t.state, null);
  }
  function zl(e, t, n, s) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Cl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = sn(u) : (u = Bt(t) ? vi : Mt.current, o.context = Ui(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Dl(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qr.enqueueReplaceState(o, o.state, null), Gr(e, n, o, s), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zi(e, t) {
    try {
      var n = "", s = t;
      do
        n += Ee(s), s = s.return;
      while (s);
      var o = n;
    } catch (u) {
      o = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Bl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Vl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Fm = typeof WeakMap == "function" ? WeakMap : Map;
  function Dc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      aa || (aa = !0, io = s), Vl(e, t);
    }, n;
  }
  function zc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      n.payload = function() {
        return s(o);
      }, n.callback = function() {
        Vl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Vl(e, t), typeof s != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([this]) : ni.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Bc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Fm();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(n) || (o.add(n), e = Zm.bind(null, e, t, n), t.then(e, e));
  }
  function Vc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Kc(e, t, n, s, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, ei(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Dm = z.ReactCurrentOwner, Vt = !1;
  function Ot(e, t, n, s) {
    t.child = e === null ? uc(t, null, n, s) : Qi(t, e.child, n, s);
  }
  function Uc(e, t, n, s, o) {
    n = n.render;
    var u = t.ref;
    return Ji(t, o), s = Ll(e, t, n, s, u, o), n = Rl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $n(e, t, o)) : (rt && n && vl(t), t.flags |= 1, Ot(e, t, s, o), t.child);
  }
  function Hc(e, t, n, s, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !co(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Gc(e, t, u, s, o)) : (e = ha(n.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : bs, n(f, s) && e.ref === t.ref) return $n(e, t, o);
    }
    return t.flags |= 1, e = ai(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gc(e, t, n, s, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (bs(u, s) && e.ref === t.ref) if (Vt = !1, t.pendingProps = s = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Vt = !0);
      else return t.lanes = e.lanes, $n(e, t, o);
    }
    return Kl(e, t, n, s, o);
  }
  function Wc(e, t, n) {
    var s = t.pendingProps, o = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(es, Xt), Xt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, tt(es, Xt), Xt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, tt(es, Xt), Xt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, tt(es, Xt), Xt |= s;
    return Ot(e, t, o, n), t.child;
  }
  function Qc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Kl(e, t, n, s, o) {
    var u = Bt(n) ? vi : Mt.current;
    return u = Ui(t, u), Ji(t, o), n = Ll(e, t, n, s, u, o), s = Rl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $n(e, t, o)) : (rt && s && vl(t), t.flags |= 1, Ot(e, t, n, o), t.child);
  }
  function Yc(e, t, n, s, o) {
    if (Bt(n)) {
      var u = !0;
      Ir(t);
    } else u = !1;
    if (Ji(t, o), t.stateNode === null) ta(e, t), Ic(t, n, s), zl(t, n, s, o), s = !0;
    else if (e === null) {
      var f = t.stateNode, y = t.memoizedProps;
      f.props = y;
      var C = f.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = sn(I) : (I = Bt(n) ? vi : Mt.current, I = Ui(t, I));
      var X = n.getDerivedStateFromProps, q = typeof X == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== s || C !== I) && Fc(t, f, s, I), qn = !1;
      var Q = t.memoizedState;
      f.state = Q, Gr(t, s, f, o), C = t.memoizedState, y !== s || Q !== C || zt.current || qn ? (typeof X == "function" && (Dl(t, n, X, s), C = t.memoizedState), (y = qn || $c(t, n, y, s, Q, C, I)) ? (q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), f.props = s, f.state = C, f.context = I, s = y) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      f = t.stateNode, dc(e, t), y = t.memoizedProps, I = t.type === t.elementType ? y : mn(t.type, y), f.props = I, q = t.pendingProps, Q = f.context, C = n.contextType, typeof C == "object" && C !== null ? C = sn(C) : (C = Bt(n) ? vi : Mt.current, C = Ui(t, C));
      var de = n.getDerivedStateFromProps;
      (X = typeof de == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== q || Q !== C) && Fc(t, f, s, C), qn = !1, Q = t.memoizedState, f.state = Q, Gr(t, s, f, o);
      var ve = t.memoizedState;
      y !== q || Q !== ve || zt.current || qn ? (typeof de == "function" && (Dl(t, n, de, s), ve = t.memoizedState), (I = qn || $c(t, n, I, s, Q, ve, C) || !1) ? (X || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, ve, C), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(s, ve, C)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ve), f.props = s, f.state = ve, f.context = C, s = I) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ul(e, t, n, s, u, o);
  }
  function Ul(e, t, n, s, o, u) {
    Qc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!s && !f) return o && ec(t, n, !1), $n(e, t, u);
    s = t.stateNode, Dm.current = t;
    var y = f && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && f ? (t.child = Qi(t, e.child, null, u), t.child = Qi(t, null, y, u)) : Ot(e, t, y, u), t.memoizedState = s.state, o && ec(t, n, !0), t.child;
  }
  function Jc(e) {
    var t = e.stateNode;
    t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), Tl(e, t.containerInfo);
  }
  function Xc(e, t, n, s, o) {
    return Wi(), xl(o), t.flags |= 256, Ot(e, t, n, s), t.child;
  }
  var Hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zc(e, t, n) {
    var s = t.pendingProps, o = ut.current, u = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), tt(ut, o & 1), e === null)
      return gl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, f = { mode: "hidden", children: f }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = fa(f, s, 0, null), e = Ci(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Gl(n), t.memoizedState = Hl, e) : Wl(t, f));
    if (o = e.memoizedState, o !== null && (y = o.dehydrated, y !== null)) return zm(e, t, f, s, y, o, n);
    if (u) {
      u = s.fallback, f = t.mode, o = e.child, y = o.sibling;
      var C = { mode: "hidden", children: s.children };
      return (f & 1) === 0 && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = C, t.deletions = null) : (s = ai(o, C), s.subtreeFlags = o.subtreeFlags & 14680064), y !== null ? u = ai(y, u) : (u = Ci(u, f, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, f = e.child.memoizedState, f = f === null ? Gl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = Hl, s;
    }
    return u = e.child, e = u.sibling, s = ai(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Wl(e, t) {
    return t = fa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ea(e, t, n, s) {
    return s !== null && xl(s), Qi(t, e.child, null, n), e = Wl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function zm(e, t, n, s, o, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Bl(Error(l(422))), ea(e, t, f, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, o = t.mode, s = fa({ mode: "visible", children: s.children }, o, 0, null), u = Ci(u, o, f, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Qi(t, e.child, null, f), t.child.memoizedState = Gl(f), t.memoizedState = Hl, u);
    if ((t.mode & 1) === 0) return ea(e, t, f, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var y = s.dgst;
      return s = y, u = Error(l(419)), s = Bl(u, s, void 0), ea(e, t, f, s);
    }
    if (y = (f & e.childLanes) !== 0, Vt || y) {
      if (s = xt, s !== null) {
        switch (f & -f) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (s.suspendedLanes | f)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, Rn(e, o), kn(s, e, o, -1));
      }
      return uo(), s = Bl(Error(l(421))), ea(e, t, f, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qm.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, Jt = Yn(o.nextSibling), Yt = t, rt = !0, fn = null, e !== null && (tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = ki, Pn = e.id, Ln = e.overflow, ki = t), t = Wl(t, s.children), t.flags |= 4096, t);
  }
  function qc(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), El(e.return, t, n);
  }
  function Ql(e, t, n, s, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = o);
  }
  function ed(e, t, n) {
    var s = t.pendingProps, o = s.revealOrder, u = s.tail;
    if (Ot(e, t, s.children, n), s = ut.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qc(e, n, t);
        else if (e.tag === 19) qc(e, n, t);
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
      s &= 1;
    }
    if (tt(ut, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Wr(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ql(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Wr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ql(t, !0, n, null, u);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ta(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Si |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = ai(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ai(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Bm(e, t, n) {
    switch (t.tag) {
      case 3:
        Jc(t), Wi();
        break;
      case 5:
        mc(t);
        break;
      case 1:
        Bt(t.type) && Ir(t);
        break;
      case 4:
        Tl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        tt(Kr, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (tt(ut, ut.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zc(e, t, n) : (tt(ut, ut.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        tt(ut, ut.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return ed(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), tt(ut, ut.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Wc(e, t, n);
    }
    return $n(e, t, n);
  }
  var td, Yl, nd, id;
  td = function(e, t) {
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
  }, Yl = function() {
  }, nd = function(e, t, n, s) {
    var o = e.memoizedProps;
    if (o !== s) {
      e = t.stateNode, xi(Sn.current);
      var u = null;
      switch (n) {
        case "input":
          o = je(e, o), s = je(e, s), u = [];
          break;
        case "select":
          o = te({}, o, { value: void 0 }), s = te({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = He(e, o), s = He(e, s), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Rr);
      }
      Re(n, s);
      var f;
      n = null;
      for (I in o) if (!s.hasOwnProperty(I) && o.hasOwnProperty(I) && o[I] != null) if (I === "style") {
        var y = o[I];
        for (f in y) y.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? u || (u = []) : (u = u || []).push(I, null));
      for (I in s) {
        var C = s[I];
        if (y = o?.[I], s.hasOwnProperty(I) && C !== y && (C != null || y != null)) if (I === "style") if (y) {
          for (f in y) !y.hasOwnProperty(f) || C && C.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in C) C.hasOwnProperty(f) && y[f] !== C[f] && (n || (n = {}), n[f] = C[f]);
        } else n || (u || (u = []), u.push(
          I,
          n
        )), n = C;
        else I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, y = y ? y.__html : void 0, C != null && y !== C && (u = u || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (u = u || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (C != null && I === "onScroll" && it("scroll", e), u || y === C || (u = [])) : (u = u || []).push(I, C));
      }
      n && (u = u || []).push("style", n);
      var I = u;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, id = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Hs(e, t) {
    if (!rt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function bt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Vm(e, t, n) {
    var s = t.pendingProps;
    switch (kl(t), t.tag) {
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
        return bt(t), null;
      case 1:
        return Bt(t.type) && $r(), bt(t), null;
      case 3:
        return s = t.stateNode, Xi(), st(zt), st(Mt), bl(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (ao(fn), fn = null))), Yl(e, t), bt(t), null;
      case 5:
        Ml(t);
        var o = xi(zs.current);
        if (n = t.type, e !== null && t.stateNode != null) nd(e, t, n, s, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return bt(t), null;
          }
          if (e = xi(Sn.current), Br(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[jn] = t, s[Os] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                it("cancel", s), it("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                it("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ps.length; o++) it(Ps[o], s);
                break;
              case "source":
                it("error", s);
                break;
              case "img":
              case "image":
              case "link":
                it(
                  "error",
                  s
                ), it("load", s);
                break;
              case "details":
                it("toggle", s);
                break;
              case "input":
                Ie(s, u), it("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, it("invalid", s);
                break;
              case "textarea":
                Oe(s, u), it("invalid", s);
            }
            Re(n, u), o = null;
            for (var f in u) if (u.hasOwnProperty(f)) {
              var y = u[f];
              f === "children" ? typeof y == "string" ? s.textContent !== y && (u.suppressHydrationWarning !== !0 && Lr(s.textContent, y, e), o = ["children", y]) : typeof y == "number" && s.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && Lr(
                s.textContent,
                y,
                e
              ), o = ["children", "" + y]) : d.hasOwnProperty(f) && y != null && f === "onScroll" && it("scroll", s);
            }
            switch (n) {
              case "input":
                Ce(s), oe(s, u, !0);
                break;
              case "textarea":
                Ce(s), Je(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Rr);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            f = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = f.createElement(n, { is: s.is }) : (e = f.createElement(n), n === "select" && (f = e, s.multiple ? f.multiple = !0 : s.size && (f.size = s.size))) : e = f.createElementNS(e, n), e[jn] = t, e[Os] = s, td(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = ze(n, s), n) {
                case "dialog":
                  it("cancel", e), it("close", e), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  it("load", e), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Ps.length; o++) it(Ps[o], e);
                  o = s;
                  break;
                case "source":
                  it("error", e), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  it(
                    "error",
                    e
                  ), it("load", e), o = s;
                  break;
                case "details":
                  it("toggle", e), o = s;
                  break;
                case "input":
                  Ie(e, s), o = je(e, s), it("invalid", e);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, o = te({}, s, { value: void 0 }), it("invalid", e);
                  break;
                case "textarea":
                  Oe(e, s), o = He(e, s), it("invalid", e);
                  break;
                default:
                  o = s;
              }
              Re(n, o), y = o;
              for (u in y) if (y.hasOwnProperty(u)) {
                var C = y[u];
                u === "style" ? on(e, C) : u === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && en(e, C)) : u === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && Gt(e, C) : typeof C == "number" && Gt(e, "" + C) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? C != null && u === "onScroll" && it("scroll", e) : C != null && U(e, u, C, f));
              }
              switch (n) {
                case "input":
                  Ce(e), oe(e, s, !1);
                  break;
                case "textarea":
                  Ce(e), Je(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + ee(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? _e(e, !!s.multiple, u, !1) : s.defaultValue != null && _e(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Rr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return bt(t), null;
      case 6:
        if (e && t.stateNode != null) id(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(l(166));
          if (n = xi(zs.current), xi(Sn.current), Br(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[jn] = t, (u = s.nodeValue !== n) && (e = Yt, e !== null)) switch (e.tag) {
              case 3:
                Lr(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Lr(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[jn] = t, t.stateNode = s;
        }
        return bt(t), null;
      case 13:
        if (st(ut), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Jt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ac(), Wi(), t.flags |= 98560, u = !1;
          else if (u = Br(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[jn] = t;
            } else Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bt(t), u = !1;
          } else fn !== null && (ao(fn), fn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ut.current & 1) !== 0 ? yt === 0 && (yt = 3) : uo())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
      case 4:
        return Xi(), Yl(e, t), e === null && Ls(t.stateNode.containerInfo), bt(t), null;
      case 10:
        return wl(t.type._context), bt(t), null;
      case 17:
        return Bt(t.type) && $r(), bt(t), null;
      case 19:
        if (st(ut), u = t.memoizedState, u === null) return bt(t), null;
        if (s = (t.flags & 128) !== 0, f = u.rendering, f === null) if (s) Hs(u, !1);
        else {
          if (yt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Wr(e), f !== null) {
              for (t.flags |= 128, Hs(u, !1), s = f.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return tt(ut, ut.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && lt() > ts && (t.flags |= 128, s = !0, Hs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Wr(f), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hs(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !rt) return bt(t), null;
          } else 2 * lt() - u.renderingStartTime > ts && n !== 1073741824 && (t.flags |= 128, s = !0, Hs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = lt(), t.sibling = null, n = ut.current, tt(ut, s ? n & 1 | 2 : n & 1), t) : (bt(t), null);
      case 22:
      case 23:
        return oo(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Xt & 1073741824) !== 0 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Km(e, t) {
    switch (kl(t), t.tag) {
      case 1:
        return Bt(t.type) && $r(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xi(), st(zt), st(Mt), bl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ml(t), null;
      case 13:
        if (st(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return st(ut), null;
      case 4:
        return Xi(), null;
      case 10:
        return wl(t.type._context), null;
      case 22:
      case 23:
        return oo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var na = !1, At = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function qi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      dt(e, t, s);
    }
    else n.current = null;
  }
  function Jl(e, t, n) {
    try {
      n();
    } catch (s) {
      dt(e, t, s);
    }
  }
  var sd = !1;
  function Hm(e, t) {
    if (ol = Sr, e = $u(), el(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var o = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, y = -1, C = -1, I = 0, X = 0, q = e, Q = null;
          t: for (; ; ) {
            for (var de; q !== n || o !== 0 && q.nodeType !== 3 || (y = f + o), q !== u || s !== 0 && q.nodeType !== 3 || (C = f + s), q.nodeType === 3 && (f += q.nodeValue.length), (de = q.firstChild) !== null; )
              Q = q, q = de;
            for (; ; ) {
              if (q === e) break t;
              if (Q === n && ++I === o && (y = f), Q === u && ++X === s && (C = f), (de = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = de;
          }
          n = y === -1 || C === -1 ? null : { start: y, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ul = { focusedElem: e, selectionRange: n }, Sr = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
    else for (; me !== null; ) {
      t = me;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, ft = ve.memoizedState, P = t.stateNode, M = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : mn(t.type, ye), ft);
              P.__reactInternalSnapshotBeforeUpdate = M;
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
            throw Error(l(163));
        }
      } catch (ie) {
        dt(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ve = sd, sd = !1, ve;
  }
  function Gs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && Jl(t, n, u);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function ia(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Xl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function rd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Os], delete t[fl], delete t[Tm], delete t[Mm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ld(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ad(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zl(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Rr));
    else if (s !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
  }
  function ql(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), e = e.sibling;
  }
  var Nt = null, pn = !1;
  function ti(e, t, n) {
    for (n = n.child; n !== null; ) od(e, t, n), n = n.sibling;
  }
  function od(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
      Rt.onCommitFiberUnmount(ot, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        At || qi(n, t);
      case 6:
        var s = Nt, o = pn;
        Nt = null, ti(e, t, n), Nt = s, pn = o, Nt !== null && (pn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
        break;
      case 18:
        Nt !== null && (pn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n), Es(e)) : hl(Nt, n.stateNode));
        break;
      case 4:
        s = Nt, o = pn, Nt = n.stateNode.containerInfo, pn = !0, ti(e, t, n), Nt = s, pn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!At && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var u = o, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Jl(n, t, f), o = o.next;
          } while (o !== s);
        }
        ti(e, t, n);
        break;
      case 1:
        if (!At && (qi(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (y) {
          dt(n, t, y);
        }
        ti(e, t, n);
        break;
      case 21:
        ti(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (At = (s = At) || n.memoizedState !== null, ti(e, t, n), At = s) : ti(e, t, n);
        break;
      default:
        ti(e, t, n);
    }
  }
  function ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Um()), t.forEach(function(s) {
        var o = ep.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
    }
  }
  function vn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var o = n[s];
      try {
        var u = e, f = t, y = f;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              Nt = y.stateNode, pn = !1;
              break e;
            case 3:
              Nt = y.stateNode.containerInfo, pn = !0;
              break e;
            case 4:
              Nt = y.stateNode.containerInfo, pn = !0;
              break e;
          }
          y = y.return;
        }
        if (Nt === null) throw Error(l(160));
        od(u, f, o), Nt = null, pn = !1;
        var C = o.alternate;
        C !== null && (C.return = null), o.return = null;
      } catch (I) {
        dt(o, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cd(t, e), t = t.sibling;
  }
  function cd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(t, e), En(e), s & 4) {
          try {
            Gs(3, e, e.return), ia(3, e);
          } catch (ye) {
            dt(e, e.return, ye);
          }
          try {
            Gs(5, e, e.return);
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 1:
        vn(t, e), En(e), s & 512 && n !== null && qi(n, n.return);
        break;
      case 5:
        if (vn(t, e), En(e), s & 512 && n !== null && qi(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Gt(o, "");
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        if (s & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, y = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            y === "input" && u.type === "radio" && u.name != null && Te(o, u), ze(y, f);
            var I = ze(y, u);
            for (f = 0; f < C.length; f += 2) {
              var X = C[f], q = C[f + 1];
              X === "style" ? on(o, q) : X === "dangerouslySetInnerHTML" ? en(o, q) : X === "children" ? Gt(o, q) : U(o, X, q, I);
            }
            switch (y) {
              case "input":
                $(o, u);
                break;
              case "textarea":
                Fe(o, u);
                break;
              case "select":
                var Q = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? _e(o, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? _e(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : _e(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[Os] = u;
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (vn(t, e), En(e), s & 4) {
          if (e.stateNode === null) throw Error(l(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (vn(t, e), En(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Es(t.containerInfo);
        } catch (ye) {
          dt(e, e.return, ye);
        }
        break;
      case 4:
        vn(t, e), En(e);
        break;
      case 13:
        vn(t, e), En(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (no = lt())), s & 4 && ud(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (At = (I = At) || X, vn(t, e), At = I) : vn(t, e), En(e), s & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !X && (e.mode & 1) !== 0) for (me = e, X = e.child; X !== null; ) {
            for (q = me = X; me !== null; ) {
              switch (Q = me, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, Q, Q.return);
                  break;
                case 1:
                  qi(Q, Q.return);
                  var ve = Q.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    s = Q, n = Q.return;
                    try {
                      t = s, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      dt(s, n, ye);
                    }
                  }
                  break;
                case 5:
                  qi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    fd(q);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, me = de) : fd(q);
            }
            X = X.sibling;
          }
          e: for (X = null, q = e; ; ) {
            if (q.tag === 5) {
              if (X === null) {
                X = q;
                try {
                  o = q.stateNode, I ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = q.stateNode, C = q.memoizedProps.style, f = C != null && C.hasOwnProperty("display") ? C.display : null, y.style.display = be("display", f));
                } catch (ye) {
                  dt(e, e.return, ye);
                }
              }
            } else if (q.tag === 6) {
              if (X === null) try {
                q.stateNode.nodeValue = I ? "" : q.memoizedProps;
              } catch (ye) {
                dt(e, e.return, ye);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              X === q && (X = null), q = q.return;
            }
            X === q && (X = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        vn(t, e), En(e), s & 4 && ud(e);
        break;
      case 21:
        break;
      default:
        vn(
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
            if (ad(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (Gt(o, ""), s.flags &= -33);
            var u = ld(e);
            ql(e, u, o);
            break;
          case 3:
          case 4:
            var f = s.stateNode.containerInfo, y = ld(e);
            Zl(e, y, f);
            break;
          default:
            throw Error(l(161));
        }
      } catch (C) {
        dt(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Gm(e, t, n) {
    me = e, dd(e);
  }
  function dd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; me !== null; ) {
      var o = me, u = o.child;
      if (o.tag === 22 && s) {
        var f = o.memoizedState !== null || na;
        if (!f) {
          var y = o.alternate, C = y !== null && y.memoizedState !== null || At;
          y = na;
          var I = At;
          if (na = f, (At = C) && !I) for (me = o; me !== null; ) f = me, C = f.child, f.tag === 22 && f.memoizedState !== null ? md(o) : C !== null ? (C.return = f, me = C) : md(o);
          for (; u !== null; ) me = u, dd(u), u = u.sibling;
          me = o, na = y, At = I;
        }
        hd(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, me = u) : hd(e);
    }
  }
  function hd(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              At || ia(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !At) if (n === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                s.componentDidUpdate(o, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && fc(t, u, s);
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
                fc(t, f, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var C = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && n.focus();
                    break;
                  case "img":
                    C.src && (n.src = C.src);
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
                  var X = I.memoizedState;
                  if (X !== null) {
                    var q = X.dehydrated;
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
              throw Error(l(163));
          }
          At || t.flags & 512 && Xl(t);
        } catch (Q) {
          dt(t, t.return, Q);
        }
      }
      if (t === e) {
        me = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function fd(e) {
    for (; me !== null; ) {
      var t = me;
      if (t === e) {
        me = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function md(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ia(4, t);
            } catch (C) {
              dt(t, n, C);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (C) {
                dt(t, o, C);
              }
            }
            var u = t.return;
            try {
              Xl(t);
            } catch (C) {
              dt(t, u, C);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Xl(t);
            } catch (C) {
              dt(t, f, C);
            }
        }
      } catch (C) {
        dt(t, t.return, C);
      }
      if (t === e) {
        me = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, me = y;
        break;
      }
      me = t.return;
    }
  }
  var Wm = Math.ceil, sa = z.ReactCurrentDispatcher, eo = z.ReactCurrentOwner, an = z.ReactCurrentBatchConfig, We = 0, xt = null, mt = null, Ct = 0, Xt = 0, es = Jn(0), yt = 0, Ws = null, Si = 0, ra = 0, to = 0, Qs = null, Kt = null, no = 0, ts = 1 / 0, In = null, aa = !1, io = null, ni = null, la = !1, ii = null, oa = 0, Ys = 0, so = null, ua = -1, ca = 0;
  function $t() {
    return (We & 6) !== 0 ? lt() : ua !== -1 ? ua : ua = lt();
  }
  function si(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && Ct !== 0 ? Ct & -Ct : bm.transition !== null ? (ca === 0 && (ca = lu()), ca) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vu(e.type)), e);
  }
  function kn(e, t, n, s) {
    if (50 < Ys) throw Ys = 0, so = null, Error(l(185));
    gs(e, n, s), ((We & 2) === 0 || e !== xt) && (e === xt && ((We & 2) === 0 && (ra |= n), yt === 4 && ri(e, Ct)), Ut(e, s), n === 1 && We === 0 && (t.mode & 1) === 0 && (ts = lt() + 500, Fr && Zn()));
  }
  function Ut(e, t) {
    var n = e.callbackNode;
    bf(e, t);
    var s = gr(e, e === xt ? Ct : 0);
    if (s === 0) n !== null && pr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && pr(n), t === 1) e.tag === 0 ? _m(vd.bind(null, e)) : tc(vd.bind(null, e)), Nm(function() {
        (We & 6) === 0 && Zn();
      }), n = null;
      else {
        switch (ou(s)) {
          case 1:
            n = xn;
            break;
          case 4:
            n = L;
            break;
          case 16:
            n = fe;
            break;
          case 536870912:
            n = Wt;
            break;
          default:
            n = fe;
        }
        n = Ed(n, pd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pd(e, t) {
    if (ua = -1, ca = 0, (We & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (ns() && e.callbackNode !== n) return null;
    var s = gr(e, e === xt ? Ct : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = da(e, s);
    else {
      t = s;
      var o = We;
      We |= 2;
      var u = yd();
      (xt !== e || Ct !== t) && (In = null, ts = lt() + 500, Ei(e, t));
      do
        try {
          Jm();
          break;
        } catch (y) {
          kd(e, y);
        }
      while (!0);
      Sl(), sa.current = u, We = o, mt !== null ? t = 0 : (xt = null, Ct = 0, t = yt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Fa(e), o !== 0 && (s = o, t = ro(e, o))), t === 1) throw n = Ws, Ei(e, 0), ri(e, s), Ut(e, lt()), n;
      if (t === 6) ri(e, s);
      else {
        if (o = e.current.alternate, (s & 30) === 0 && !Qm(o) && (t = da(e, s), t === 2 && (u = Fa(e), u !== 0 && (s = u, t = ro(e, u))), t === 1)) throw n = Ws, Ei(e, 0), ri(e, s), Ut(e, lt()), n;
        switch (e.finishedWork = o, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Ni(e, Kt, In);
            break;
          case 3:
            if (ri(e, s), (s & 130023424) === s && (t = no + 500 - lt(), 10 < t)) {
              if (gr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & s) !== s) {
                $t(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = dl(Ni.bind(null, e, Kt, In), t);
              break;
            }
            Ni(e, Kt, In);
            break;
          case 4:
            if (ri(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, o = -1; 0 < s; ) {
              var f = 31 - Et(s);
              u = 1 << f, f = t[f], f > o && (o = f), s &= ~u;
            }
            if (s = o, s = lt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Wm(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = dl(Ni.bind(null, e, Kt, In), s);
              break;
            }
            Ni(e, Kt, In);
            break;
          case 5:
            Ni(e, Kt, In);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Ut(e, lt()), e.callbackNode === n ? pd.bind(null, e) : null;
  }
  function ro(e, t) {
    var n = Qs;
    return e.current.memoizedState.isDehydrated && (Ei(e, t).flags |= 256), e = da(e, t), e !== 2 && (t = Kt, Kt = n, t !== null && ao(t)), e;
  }
  function ao(e) {
    Kt === null ? Kt = e : Kt.push.apply(Kt, e);
  }
  function Qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var o = n[s], u = o.getSnapshot;
          o = o.value;
          try {
            if (!hn(u(), o)) return !1;
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
    for (t &= ~to, t &= ~ra, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Et(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function vd(e) {
    if ((We & 6) !== 0) throw Error(l(327));
    ns();
    var t = gr(e, 0);
    if ((t & 1) === 0) return Ut(e, lt()), null;
    var n = da(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Fa(e);
      s !== 0 && (t = s, n = ro(e, s));
    }
    if (n === 1) throw n = Ws, Ei(e, 0), ri(e, t), Ut(e, lt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ni(e, Kt, In), Ut(e, lt()), null;
  }
  function lo(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (ts = lt() + 500, Fr && Zn());
    }
  }
  function wi(e) {
    ii !== null && ii.tag === 0 && (We & 6) === 0 && ns();
    var t = We;
    We |= 1;
    var n = an.transition, s = qe;
    try {
      if (an.transition = null, qe = 1, e) return e();
    } finally {
      qe = s, an.transition = n, We = t, (We & 6) === 0 && Zn();
    }
  }
  function oo() {
    Xt = es.current, st(es);
  }
  function Ei(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Em(n)), mt !== null) for (n = mt.return; n !== null; ) {
      var s = n;
      switch (kl(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && $r();
          break;
        case 3:
          Xi(), st(zt), st(Mt), bl();
          break;
        case 5:
          Ml(s);
          break;
        case 4:
          Xi();
          break;
        case 13:
          st(ut);
          break;
        case 19:
          st(ut);
          break;
        case 10:
          wl(s.type._context);
          break;
        case 22:
        case 23:
          oo();
      }
      n = n.return;
    }
    if (xt = e, mt = e = ai(e.current, null), Ct = Xt = t, yt = 0, Ws = null, to = ra = Si = 0, Kt = Qs = null, gi !== null) {
      for (t = 0; t < gi.length; t++) if (n = gi[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var o = s.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = o, s.next = f;
        }
        n.pending = s;
      }
      gi = null;
    }
    return e;
  }
  function kd(e, t) {
    do {
      var n = mt;
      try {
        if (Sl(), Qr.current = Zr, Yr) {
          for (var s = ct.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          Yr = !1;
        }
        if (ji = 0, gt = kt = ct = null, Bs = !1, Vs = 0, eo.current = null, n === null || n.return === null) {
          yt = 1, Ws = t, mt = null;
          break;
        }
        e: {
          var u = e, f = n.return, y = n, C = t;
          if (t = Ct, y.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var I = C, X = y, q = X.tag;
            if ((X.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Q = X.alternate;
              Q ? (X.updateQueue = Q.updateQueue, X.memoizedState = Q.memoizedState, X.lanes = Q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var de = Vc(f);
            if (de !== null) {
              de.flags &= -257, Kc(de, f, y, u, t), de.mode & 1 && Bc(u, I, t), t = de, C = I;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(C), t.updateQueue = ye;
              } else ve.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                Bc(u, I, t), uo();
                break e;
              }
              C = Error(l(426));
            }
          } else if (rt && y.mode & 1) {
            var ft = Vc(f);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), Kc(ft, f, y, u, t), xl(Zi(C, y));
              break e;
            }
          }
          u = C = Zi(C, y), yt !== 4 && (yt = 2), Qs === null ? Qs = [u] : Qs.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = Dc(u, C, t);
                hc(u, P);
                break e;
              case 1:
                y = C;
                var M = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ni === null || !ni.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var ie = zc(u, y, t);
                  hc(u, ie);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        xd(n);
      } catch (Se) {
        t = Se, mt === n && n !== null && (mt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yd() {
    var e = sa.current;
    return sa.current = Zr, e === null ? Zr : e;
  }
  function uo() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4), xt === null || (Si & 268435455) === 0 && (ra & 268435455) === 0 || ri(xt, Ct);
  }
  function da(e, t) {
    var n = We;
    We |= 2;
    var s = yd();
    (xt !== e || Ct !== t) && (In = null, Ei(e, t));
    do
      try {
        Ym();
        break;
      } catch (o) {
        kd(e, o);
      }
    while (!0);
    if (Sl(), We = n, sa.current = s, mt !== null) throw Error(l(261));
    return xt = null, Ct = 0, yt;
  }
  function Ym() {
    for (; mt !== null; ) gd(mt);
  }
  function Jm() {
    for (; mt !== null && !vr(); ) gd(mt);
  }
  function gd(e) {
    var t = wd(e.alternate, e, Xt);
    e.memoizedProps = e.pendingProps, t === null ? xd(e) : mt = t, eo.current = null;
  }
  function xd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Vm(n, t, Xt), n !== null) {
          mt = n;
          return;
        }
      } else {
        if (n = Km(n, t), n !== null) {
          n.flags &= 32767, mt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          yt = 6, mt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    yt === 0 && (yt = 5);
  }
  function Ni(e, t, n) {
    var s = qe, o = an.transition;
    try {
      an.transition = null, qe = 1, Xm(e, t, n, s);
    } finally {
      an.transition = o, qe = s;
    }
    return null;
  }
  function Xm(e, t, n, s) {
    do
      ns();
    while (ii !== null);
    if ((We & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Af(e, u), e === xt && (mt = xt = null, Ct = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || la || (la = !0, Ed(fe, function() {
      return ns(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = an.transition, an.transition = null;
      var f = qe;
      qe = 1;
      var y = We;
      We |= 4, eo.current = null, Hm(e, n), cd(n, e), km(ul), Sr = !!ol, ul = ol = null, e.current = n, Gm(n), Ia(), We = y, qe = f, an.transition = u;
    } else e.current = n;
    if (la && (la = !1, ii = e, oa = o), u = e.pendingLanes, u === 0 && (ni = null), ks(n.stateNode), Ut(e, lt()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], s(o.value, { componentStack: o.stack, digest: o.digest });
    if (aa) throw aa = !1, e = io, io = null, e;
    return (oa & 1) !== 0 && e.tag !== 0 && ns(), u = e.pendingLanes, (u & 1) !== 0 ? e === so ? Ys++ : (Ys = 0, so = e) : Ys = 0, Zn(), null;
  }
  function ns() {
    if (ii !== null) {
      var e = ou(oa), t = an.transition, n = qe;
      try {
        if (an.transition = null, qe = 16 > e ? 16 : e, ii === null) var s = !1;
        else {
          if (e = ii, ii = null, oa = 0, (We & 6) !== 0) throw Error(l(331));
          var o = We;
          for (We |= 4, me = e.current; me !== null; ) {
            var u = me, f = u.child;
            if ((me.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var C = 0; C < y.length; C++) {
                  var I = y[C];
                  for (me = I; me !== null; ) {
                    var X = me;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gs(8, X, u);
                    }
                    var q = X.child;
                    if (q !== null) q.return = X, me = q;
                    else for (; me !== null; ) {
                      X = me;
                      var Q = X.sibling, de = X.return;
                      if (rd(X), X === I) {
                        me = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = de, me = Q;
                        break;
                      }
                      me = de;
                    }
                  }
                }
                var ve = u.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var ft = ye.sibling;
                      ye.sibling = null, ye = ft;
                    } while (ye !== null);
                  }
                }
                me = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, me = f;
            else e: for (; me !== null; ) {
              if (u = me, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Gs(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, me = P;
                break e;
              }
              me = u.return;
            }
          }
          var M = e.current;
          for (me = M; me !== null; ) {
            f = me;
            var R = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && R !== null) R.return = f, me = R;
            else e: for (f = M; me !== null; ) {
              if (y = me, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ia(9, y);
                }
              } catch (Se) {
                dt(y, y.return, Se);
              }
              if (y === f) {
                me = null;
                break e;
              }
              var ie = y.sibling;
              if (ie !== null) {
                ie.return = y.return, me = ie;
                break e;
              }
              me = y.return;
            }
          }
          if (We = o, Zn(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
            Rt.onPostCommitFiberRoot(ot, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        qe = n, an.transition = t;
      }
    }
    return !1;
  }
  function jd(e, t, n) {
    t = Zi(n, t), t = Dc(e, t, 1), e = ei(e, t, 1), t = $t(), e !== null && (gs(e, 1, t), Ut(e, t));
  }
  function dt(e, t, n) {
    if (e.tag === 3) jd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        jd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ni === null || !ni.has(s))) {
          e = Zi(n, e), e = zc(t, e, 1), t = ei(t, e, 1), e = $t(), t !== null && (gs(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = $t(), e.pingedLanes |= e.suspendedLanes & n, xt === e && (Ct & n) === n && (yt === 4 || yt === 3 && (Ct & 130023424) === Ct && 500 > lt() - no ? Ei(e, 0) : to |= n), Ut(e, t);
  }
  function Sd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = yr, yr <<= 1, (yr & 130023424) === 0 && (yr = 4194304)));
    var n = $t();
    e = Rn(e, t), e !== null && (gs(e, t, n), Ut(e, n));
  }
  function qm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Sd(e, n);
  }
  function ep(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    s !== null && s.delete(t), Sd(e, n);
  }
  var wd;
  wd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || zt.current) Vt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Vt = !1, Bm(e, t, n);
      Vt = (e.flags & 131072) !== 0;
    }
    else Vt = !1, rt && (t.flags & 1048576) !== 0 && nc(t, zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        ta(e, t), e = t.pendingProps;
        var o = Ui(t, Mt.current);
        Ji(t, n), o = Ll(null, t, s, e, o, n);
        var u = Rl();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Bt(s) ? (u = !0, Ir(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Cl(t), o.updater = qr, t.stateNode = o, o._reactInternals = t, zl(t, s, e, n), t = Ul(null, t, s, !0, u, n)) : (t.tag = 0, rt && u && vl(t), Ot(null, t, o, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (ta(e, t), e = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = np(s), e = mn(s, e), o) {
            case 0:
              t = Kl(null, t, s, e, n);
              break e;
            case 1:
              t = Yc(null, t, s, e, n);
              break e;
            case 11:
              t = Uc(null, t, s, e, n);
              break e;
            case 14:
              t = Hc(null, t, s, mn(s.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Kl(e, t, s, o, n);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Yc(e, t, s, o, n);
      case 3:
        e: {
          if (Jc(t), e === null) throw Error(l(387));
          s = t.pendingProps, u = t.memoizedState, o = u.element, dc(e, t), Gr(t, s, null, n);
          var f = t.memoizedState;
          if (s = f.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = Zi(Error(l(423)), t), t = Xc(e, t, s, n, o);
            break e;
          } else if (s !== o) {
            o = Zi(Error(l(424)), t), t = Xc(e, t, s, n, o);
            break e;
          } else for (Jt = Yn(t.stateNode.containerInfo.firstChild), Yt = t, rt = !0, fn = null, n = uc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wi(), s === o) {
              t = $n(e, t, n);
              break e;
            }
            Ot(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return mc(t), e === null && gl(t), s = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = o.children, cl(s, o) ? f = null : u !== null && cl(s, u) && (t.flags |= 32), Qc(e, t), Ot(e, t, f, n), t.child;
      case 6:
        return e === null && gl(t), null;
      case 13:
        return Zc(e, t, n);
      case 4:
        return Tl(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Qi(t, null, s, n) : Ot(e, t, s, n), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Uc(e, t, s, o, n);
      case 7:
        return Ot(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ot(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ot(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, o = t.pendingProps, u = t.memoizedProps, f = o.value, tt(Kr, s._currentValue), s._currentValue = f, u !== null) if (hn(u.value, f)) {
            if (u.children === o.children && !zt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var y = u.dependencies;
            if (y !== null) {
              f = u.child;
              for (var C = y.firstContext; C !== null; ) {
                if (C.context === s) {
                  if (u.tag === 1) {
                    C = On(-1, n & -n), C.tag = 2;
                    var I = u.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var X = I.pending;
                      X === null ? C.next = C : (C.next = X.next, X.next = C), I.pending = C;
                    }
                  }
                  u.lanes |= n, C = u.alternate, C !== null && (C.lanes |= n), El(
                    u.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                C = C.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(l(341));
              f.lanes |= n, y = f.alternate, y !== null && (y.lanes |= n), El(f, n, t), f = u.sibling;
            } else f = u.child;
            if (f !== null) f.return = u;
            else for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
            u = f;
          }
          Ot(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, Ji(t, n), o = sn(o), s = s(o), t.flags |= 1, Ot(e, t, s, n), t.child;
      case 14:
        return s = t.type, o = mn(s, t.pendingProps), o = mn(s.type, o), Hc(e, t, s, o, n);
      case 15:
        return Gc(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), ta(e, t), t.tag = 1, Bt(s) ? (e = !0, Ir(t)) : e = !1, Ji(t, n), Ic(t, s, o), zl(t, s, o, n), Ul(null, t, s, !0, e, n);
      case 19:
        return ed(e, t, n);
      case 22:
        return Wc(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Ed(e, t) {
    return wt(e, t);
  }
  function tp(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, n, s) {
    return new tp(e, t, n, s);
  }
  function co(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function np(e) {
    if (typeof e == "function") return co(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ne) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function ai(e, t) {
    var n = e.alternate;
    return n === null ? (n = ln(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ha(e, t, n, s, o, u) {
    var f = 2;
    if (s = e, typeof e == "function") co(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case O:
        return Ci(n.children, o, u, t);
      case F:
        f = 8, o |= 8;
        break;
      case re:
        return e = ln(12, n, t, o | 2), e.elementType = re, e.lanes = u, e;
      case Y:
        return e = ln(13, n, t, o), e.elementType = Y, e.lanes = u, e;
      case he:
        return e = ln(19, n, t, o), e.elementType = he, e.lanes = u, e;
      case se:
        return fa(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Z:
            f = 10;
            break e;
          case we:
            f = 9;
            break e;
          case Ne:
            f = 11;
            break e;
          case G:
            f = 14;
            break e;
          case ue:
            f = 16, s = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = ln(f, n, t, o), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Ci(e, t, n, s) {
    return e = ln(7, e, s, t), e.lanes = n, e;
  }
  function fa(e, t, n, s) {
    return e = ln(22, e, s, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ho(e, t, n) {
    return e = ln(6, e, null, t), e.lanes = n, e;
  }
  function fo(e, t, n) {
    return t = ln(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ip(e, t, n, s, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Da(0), this.expirationTimes = Da(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Da(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function mo(e, t, n, s, o, u, f, y, C) {
    return e = new ip(e, t, n, y, C), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = ln(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(u), e;
  }
  function sp(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function Nd(e) {
    if (!e) return Xn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Bt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Bt(n)) return qu(e, n, t);
    }
    return t;
  }
  function Cd(e, t, n, s, o, u, f, y, C) {
    return e = mo(n, s, !0, e, o, u, f, y, C), e.context = Nd(null), n = e.current, s = $t(), o = si(n), u = On(s, o), u.callback = t ?? null, ei(n, u, o), e.current.lanes = o, gs(e, o, s), Ut(e, s), e;
  }
  function ma(e, t, n, s) {
    var o = t.current, u = $t(), f = si(o);
    return n = Nd(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, f), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = ei(o, t, f), e !== null && (kn(e, o, f, u), Hr(e, o, f)), f;
  }
  function pa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Td(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function po(e, t) {
    Td(e, t), (e = e.alternate) && Td(e, t);
  }
  function rp() {
    return null;
  }
  var Md = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function vo(e) {
    this._internalRoot = e;
  }
  va.prototype.render = vo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    ma(e, t, null, null);
  }, va.prototype.unmount = vo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wi(function() {
        ma(null, e, null, null);
      }), t[bn] = null;
    }
  };
  function va(e) {
    this._internalRoot = e;
  }
  va.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = du();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++) ;
      Gn.splice(n, 0, e), n === 0 && mu(e);
    }
  };
  function ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function _d() {
  }
  function ap(e, t, n, s, o) {
    if (o) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var I = pa(f);
          u.call(I);
        };
      }
      var f = Cd(t, s, e, 0, null, !1, !1, "", _d);
      return e._reactRootContainer = f, e[bn] = f.current, Ls(e.nodeType === 8 ? e.parentNode : e), wi(), f;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof s == "function") {
      var y = s;
      s = function() {
        var I = pa(C);
        y.call(I);
      };
    }
    var C = mo(e, 0, !1, null, null, !1, !1, "", _d);
    return e._reactRootContainer = C, e[bn] = C.current, Ls(e.nodeType === 8 ? e.parentNode : e), wi(function() {
      ma(t, C, n, s);
    }), C;
  }
  function ya(e, t, n, s, o) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof o == "function") {
        var y = o;
        o = function() {
          var C = pa(f);
          y.call(C);
        };
      }
      ma(t, f, e, o);
    } else f = ap(n, t, e, o, s);
    return pa(f);
  }
  uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ys(t.pendingLanes);
          n !== 0 && (za(t, n | 1), Ut(t, lt()), (We & 6) === 0 && (ts = lt() + 500, Zn()));
        }
        break;
      case 13:
        wi(function() {
          var s = Rn(e, 1);
          if (s !== null) {
            var o = $t();
            kn(s, e, 1, o);
          }
        }), po(e, 1);
    }
  }, Ba = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = $t();
        kn(t, e, 134217728, n);
      }
      po(e, 134217728);
    }
  }, cu = function(e) {
    if (e.tag === 13) {
      var t = si(e), n = Rn(e, t);
      if (n !== null) {
        var s = $t();
        kn(n, e, t, s);
      }
      po(e, t);
    }
  }, du = function() {
    return qe;
  }, hu = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, un = function(e, t, n) {
    switch (t) {
      case "input":
        if ($(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var o = Or(s);
              if (!o) throw Error(l(90));
              ge(s), $(s, o);
            }
          }
        }
        break;
      case "textarea":
        Fe(e, n);
        break;
      case "select":
        t = n.value, t != null && _e(e, !!n.multiple, t, !1);
    }
  }, cr = lo, ms = wi;
  var lp = { usingClientEntryPoint: !1, Events: [$s, Vi, Or, cn, Mn, lo] }, Js = { findFiberByHostInstance: pi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, op = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = fr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || rp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ga.isDisabled && ga.supportsFiber) try {
      ot = ga.inject(op), Rt = ga;
    } catch {
    }
  }
  return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp, Ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ko(t)) throw Error(l(200));
    return sp(e, t, null, n);
  }, Ht.createRoot = function(e, t) {
    if (!ko(e)) throw Error(l(299));
    var n = !1, s = "", o = Md;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = mo(e, 1, !1, null, null, n, !1, s, o), e[bn] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new vo(t);
  }, Ht.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = fr(t), e = e === null ? null : e.stateNode, e;
  }, Ht.flushSync = function(e) {
    return wi(e);
  }, Ht.hydrate = function(e, t, n) {
    if (!ka(t)) throw Error(l(200));
    return ya(null, e, t, !0, n);
  }, Ht.hydrateRoot = function(e, t, n) {
    if (!ko(e)) throw Error(l(405));
    var s = n != null && n.hydratedSources || null, o = !1, u = "", f = Md;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Cd(t, null, e, 1, n ?? null, o, !1, u, f), e[bn] = t.current, Ls(e), s) for (e = 0; e < s.length; e++) n = s[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new va(t);
  }, Ht.render = function(e, t, n) {
    if (!ka(t)) throw Error(l(200));
    return ya(null, e, t, !1, n);
  }, Ht.unmountComponentAtNode = function(e) {
    if (!ka(e)) throw Error(l(40));
    return e._reactRootContainer ? (wi(function() {
      ya(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bn] = null;
      });
    }), !0) : !1;
  }, Ht.unstable_batchedUpdates = lo, Ht.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!ka(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ya(e, t, n, !1, s);
  }, Ht.version = "18.3.1-next-f1338f8080-20240426", Ht;
}
var Id;
function kp() {
  if (Id) return xo.exports;
  Id = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), xo.exports = vp(), xo.exports;
}
var Fd;
function yp() {
  if (Fd) return xa;
  Fd = 1;
  var r = kp();
  return xa.createRoot = r.createRoot, xa.hydrateRoot = r.hydrateRoot, xa;
}
var gp = yp();
const xp = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], x = ["e", "B", "G", "D", "A", "E"], j = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], k = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], T = {
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
      base: k,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: k,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: k,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: k,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, N = 26, _ = 72, w = 30, E = 54, B = 34, b = 11, U = (N + _) / 2, z = w + (c.length - 1) * B + 30, V = (K) => _ + K * E, D = (K) => K === 0 ? U : V(K) - E / 2, O = (K) => w + K * B;
  function F(K, ee, J) {
    const pe = i.indexOf(r[K][0]) + Number(J.slice(-1)) - 1, Ce = pe % i.length, ge = l[Ce] + 12 * Math.floor(pe / i.length), xe = K + ee - ge;
    return i[Ce] + (xe < 0 ? "♭" : "♯").repeat(Math.abs(xe));
  }
  function re(K) {
    return [...K.base, ...K.add].sort((ee, J) => ee[0] - J[0]);
  }
  function Z(K, ee, J) {
    const pe = ee + (J ? 1 : 0), Ce = m[pe % m.length], ge = Math.min(...Ce.map(([$]) => $)), xe = Math.max(...Ce.map(([, $]) => $));
    let Te = (K - d % 12 + 12) % 12 - (J ? 8 : 5) + 12 * Math.floor(pe / m.length);
    return ge + Te < 0 && (Te += 12), xe + Te > h.pentatonic && (Te -= 12), {
      strings: Ce.map(($) => $.map((oe) => oe + Te)),
      start: ge + Te,
      end: xe + Te
    };
  }
  function we(K, ee, J) {
    const pe = J[ee], Ce = (K + pe - d % 12 + 12) % 12, ge = d + Ce - pe, xe = c.map((je, Ie) => {
      const Te = ee + (c.length - 1 - Ie) * 3;
      return [Te, Te + 1, Te + 2].map(($) => {
        const oe = Math.floor($ / J.length), le = J[$ % J.length];
        return ge + le + 12 * oe - je;
      });
    });
    return {
      strings: xe,
      start: Math.min(...xe.map((je) => je[0])),
      end: Math.max(...xe.map((je) => je.at(-1)))
    };
  }
  function Ne(K, ee) {
    const J = [], pe = Math.ceil(-K.end / 12) * 12;
    for (let ge = pe; K.start + ge <= ee; ge += 12) {
      const xe = K.strings.map((Ie) => Ie.map((Te) => Te + ge).filter((Te) => Te >= 0 && Te <= ee)), je = xe.flat();
      J.push({
        strings: xe,
        start: Math.min(...je),
        end: Math.max(...je),
        partial: K.start + ge < 0 || K.end + ge > ee
      });
    }
    const Ce = J.filter((ge) => !ge.partial);
    return Ce.length ? Ce : J;
  }
  function Y(K) {
    return re(K).length === p;
  }
  function he(K, ee, J) {
    const pe = Y(ee);
    K.querySelector('[value="3nps"]').disabled = !pe, K.value = pe ? J ?? "3nps" : "pentatonic";
  }
  function G(K, ee, J, pe, Ce) {
    const ge = re(ee).map(([xe]) => xe);
    return pe.map((xe) => {
      const je = xe - 1, Ie = J === "3nps" ? we(K, je, ge) : Z(K, je, ee.base === k), Te = Ce === void 0 ? [Ie] : Ne(Ie, Ce);
      return { number: xe, positions: Te };
    });
  }
  function ue(K, ee) {
    const J = K.getBoundingClientRect(), pe = K.querySelectorAll(ee);
    let Ce = 1 / 0;
    pe.forEach((ge) => {
      const xe = ge.getBoundingClientRect();
      let je = 0;
      xe.left < J.left ? je = xe.left - J.left - 8 : xe.right > J.right && (je = xe.right - J.right + 8), Math.abs(je) < Math.abs(Ce) && (Ce = je);
    }), Number.isFinite(Ce) && (K.scrollLeft += Ce);
  }
  function se(K, ee = !1) {
    const J = K === "3nps" ? p : m.length;
    return Array.from({ length: J }, (pe, Ce) => {
      const ge = Ce + 1;
      return '<label class="box-toggle" data-box="' + ge + '"><input type="checkbox" value="' + ge + '"' + (ee && Ce === 0 ? " checked" : "") + "> Boksi " + ge + "</label>";
    }).join("");
  }
  function W(K, ee) {
    const J = re(ee), pe = new Map(J.map(([ge, xe]) => [ge, F(K, ge, xe)])), Ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return J.flatMap(([ge, xe]) => Ce.flatMap(({ suffix: je, base: Ie }) => {
      const Te = Ie.map(([$]) => pe.get((ge + $) % 12));
      return Te.every(Boolean) ? {
        root: (K + ge) % 12,
        degree: Number(String(xe).replace(/\D/g, "")),
        name: Te[0] + je,
        notes: Te,
        base: Ie,
        add: []
      } : [];
    }));
  }
  function ae(K, ee) {
    const J = K.base.map(([ge]) => (K.root + ge) % 12), pe = c.map((ge) => {
      const xe = [];
      for (let je = 0; je <= ee; je++) {
        const Ie = (ge + je) % 12;
        J.includes(Ie) && xe.push({ fret: je, pitch: Ie });
      }
      return xe;
    }), Ce = [];
    for (let ge = 0; ge <= pe.length - 3; ge++)
      for (const xe of pe[ge])
        for (const je of pe[ge + 1])
          if (xe.pitch !== je.pitch)
            for (const Ie of pe[ge + 2]) {
              if (Ie.pitch === xe.pitch || Ie.pitch === je.pitch) continue;
              const Te = [xe.fret, je.fret, Ie.fret], $ = Math.min(...Te), oe = Math.max(...Te);
              if (oe - $ > 3) continue;
              const le = Array(c.length).fill(null);
              le.splice(ge, 3, ...Te), Ce.push({ strings: le, low: $, high: oe });
            }
    return Ce.sort((ge, xe) => ge.high - xe.high || ge.low - xe.low);
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
  function g(K, ee) {
    const J = te[K + ":" + ee];
    if (J) return { frets: J, barre: null };
    let pe = null;
    return S.forEach(({ string: Ce, openPC: ge, shapes: xe }) => {
      const je = xe[ee];
      if (!je) return;
      let Ie = (K - ge + 12) % 12;
      if (Ie + Math.min(...je.filter((oe) => oe !== null)) < 0 && (Ie += 12), pe && pe.fret <= Ie) return;
      const Te = je.map((oe) => oe === null ? null : Ie + oe), $ = Ie > 0 && je.at(-1) === 0 ? { fret: Ie, from: Ce, to: je.length - 1 } : null;
      pe = { fret: Ie, frets: Te, barre: $ };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function ne(K, { frets: ee, barre: J }, pe) {
    const Te = [...c].reverse(), $ = ee.filter((Fe) => Fe > 0), le = !$.length || Math.max(...$) <= 4 && (ee.includes(0) || Math.min(...$) === 1) ? 1 : Math.min(...$), Me = (Fe) => 24 + Fe * 14, _e = (Fe) => 30 + (Fe - le) * 18 + 18 / 2, He = 102;
    let Oe = '<svg class="chord-svg" viewBox="0 0 108 ' + (He + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + ee.map((Fe) => Fe ?? "x").join(" ") + '">';
    for (let Fe = 0; Fe <= 4; Fe++)
      Oe += '<line class="' + (Fe === 0 && le === 1 ? "nut" : "fret") + '" x1="' + Me(0) + '" y1="' + (30 + Fe * 18) + '" x2="' + Me(5) + '" y2="' + (30 + Fe * 18) + '"/>';
    return ee.forEach((Fe, Je) => {
      Oe += '<line class="string" x1="' + Me(Je) + '" y1="30" x2="' + Me(Je) + '" y2="' + He + '"/>';
    }), le > 1 && (Oe += '<text class="fret-label" x="15" y="' + (_e(le) + 4) + '">' + le + "</text>"), J && (Oe += '<rect class="barre" x="' + (Me(J.from) - 6.5) + '" y="' + (_e(J.fret) - 6.5) + '" width="' + ((J.to - J.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((Fe, Je) => {
      if (Fe === null) {
        Oe += '<text class="marker" x="' + Me(Je) + '" y="22">×</text>';
        return;
      }
      const vt = (Te[Je] + Fe) % 12 === K;
      if (Fe === 0) {
        Oe += '<circle class="open' + (vt ? " root-open" : "") + '" cx="' + Me(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      J && Fe === J.fret && Je >= J.from && Je <= J.to && !vt || (Oe += '<circle class="' + (vt ? "root" : "tone") + '" cx="' + Me(Je) + '" cy="' + _e(Fe) + '" r="6.5"/>');
    }), Oe + "</svg>";
  }
  function ce(K, ee) {
    const J = new URLSearchParams(location.search), pe = r.indexOf(J.get("toonikka")), Ce = J.get("asteikko");
    return {
      rootPC: pe === -1 ? K : pe,
      scaleId: Object.hasOwn(T, Ce) ? Ce : ee
    };
  }
  function Ee(K, ee, J) {
    return K + "?" + new URLSearchParams({ toonikka: r[ee], asteikko: J });
  }
  function H(K, ee, J, {
    boxes: pe = [],
    onlyBoxNotes: Ce = !1,
    automatic: ge = !0,
    focusDegree: xe = "",
    grip: je = null,
    barre: Ie = null,
    label: Te = r[K] + " " + ee.name,
    notes: $ = null,
    targets: oe = !1,
    muteFret: le = null
  } = {}) {
    const Me = V(J), _e = Me + 48, He = _e + 28, Oe = w - 14, Fe = O(c.length - 1) + 14, Je = Fe - Oe, vt = ge ? 680 : Math.ceil(He * 0.64), qt = pe.flatMap((Le) => Le.positions), Ft = {};
    ee.base.forEach(([Le, Re]) => Ft[(K + Le) % 12] = { deg: Re, added: !1 }), ee.add.forEach(([Le, Re]) => Ft[(K + Le) % 12] = { deg: Re, added: !0 });
    const en = c.map((Le, Re) => !!je && je[Re] === null), Gt = !!je && le !== null, Pt = j.filter((Le, Re) => en[Re]).reverse(), gn = Te + ". " + J + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Pt.length ? " Soittamatta jäävät kielet: " + Pt.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + He + " " + z + '" style="min-width:' + vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (oe ? "group" : "img") + '" aria-label="' + gn + '">';
    be += '<rect x="' + N + '" y="' + Oe + '" width="' + (_ - N) + '" height="' + Je + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + _ + '" y="' + Oe + '" width="' + (Me - _) + '" height="' + Je + '" fill="#231a12"/>', be += '<rect x="' + Me + '" y="' + Oe + '" width="' + (He - Me - 4) + '" height="' + Je + '" rx="8" fill="#32251e"/>';
    for (let Le = 1; Le <= J; Le++)
      be += '<line x1="' + V(Le) + '" y1="' + Oe + '" x2="' + V(Le) + '" y2="' + Fe + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (_ - 3) + '" y="' + Oe + '" width="6" height="' + Je + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (_e - 11) + '" y="' + (Oe + 3) + '" width="22" height="' + (Je - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (_e - 4) + '" y="' + (Oe + 7) + '" width="3" height="' + (Je - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const on = (Oe + Fe) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Le) => Le <= J).forEach((Le) => be += '<circle cx="' + D(Le) + '" cy="' + on + '" r="5.5" fill="#7a6550"/>');
    for (let Le = 12; Le <= J; Le += 12)
      be += '<circle cx="' + D(Le) + '" cy="' + (on - B) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + D(Le) + '" cy="' + (on + B) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + U + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + _ + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + _e + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Le = 1; Le <= J; Le++)
      be += '<text x="' + D(Le) + '" y="' + (z - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Le + "</text>";
    if (pe.forEach(({ number: Le, positions: Re }) => {
      Re.forEach((ze) => {
        const Ze = ze.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ze + '" data-box="' + Le + '" aria-hidden="true">';
        const at = ze.strings.find((St) => St.length), un = (D(at[0]) + D(at.at(-1))) / 2;
        be += '<text class="box-number" x="' + un + '" y="12">' + Le + "</text>", ze.strings.forEach((St, Lt) => {
          if (!St.length) return;
          const Tn = D(St[0]) - 16, cn = D(St.at(-1)) - D(St[0]) + 32;
          be += '<rect class="box-band" x="' + Tn + '" y="' + (O(Lt) - 14) + '" width="' + cn + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), c.forEach((Le, Re) => {
      const ze = 1 + Re * 0.45, Ze = O(Re), at = en[Re] && !Gt;
      at ? be += '<text class="muted-mark" x="' + U + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : en[Re] && le === 0 || (be += '<line x1="' + (N + 4) + '" y1="' + Ze + '" x2="' + (_ - 4) + '" y2="' + Ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (at ? ' opacity=".35"' : "") + ">", be += '<line x1="' + _ + '" y1="' + Ze + '" x2="' + (_e + 5) + '" y2="' + Ze + '" stroke="#b9b9c4" stroke-width="' + ze.toFixed(2) + '"/>', be += '<circle cx="' + (_e + 5) + '" cy="' + Ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + x[Re] + "</text>";
    }), je && Ie && Ie.fret >= 1 && Ie.fret <= J) {
      const Le = O(Ie.from), Re = O(Ie.to), ze = Math.min(Le, Re) - 6, Ze = Math.max(Le, Re) + 6;
      be += '<rect class="barre-indicator" x="' + (D(Ie.fret) - 7) + '" y="' + ze + '" width="14" height="' + (Ze - ze) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return oe && (be += '<g class="fret-targets">', c.forEach((Le, Re) => {
      for (let ze = 0; ze <= J; ze++) {
        const Ze = ze ? j[Re] + "-kieli, " + ze + ". nauha" : "vapaa " + j[Re] + "-kieli", at = ze ? E : _ - N - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + ze + '" data-midi="' + (Le + ze) + '" aria-label="' + Ze + '" x="' + (D(ze) - at / 2) + '" y="' + (O(Re) - B / 2) + '" width="' + at + '" height="' + B + '" fill="transparent"/>';
      }
    }), be += "</g>"), ($ ?? []).forEach(({ string: Le, fret: Re, label: ze, kind: Ze }) => {
      be += '<g class="octave-note octave-' + Ze + '">', be += '<circle cx="' + D(Re) + '" cy="' + O(Le) + '" r="' + b + '"/>', be += '<text x="' + D(Re) + '" y="' + (O(Le) + 3.5) + '" font-size="' + (ze.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + ze + "</text>", be += "</g>";
    }), je && (be += '<g class="grip-notes">'), ($ ? [] : c).forEach((Le, Re) => {
      for (let ze = 0; ze <= J; ze++) {
        const Ze = (Le + ze) % 12;
        if (!(Ze in Ft) || je && je[Re] !== ze || Ce && !qt.some(({ strings: cn }) => {
          const Mn = cn[Re];
          return Mn.length > 0 && ze >= Mn[0] && ze <= Mn.at(-1);
        })) continue;
        const at = Ft[Ze], un = at.deg === "1", St = at.added ? "#f0a13c" : un ? "#4b2fd6" : "#6d4aff", Lt = at.added ? "#1a1430" : "#fff";
        at.deg === xe && (be += '<circle class="focus-note" cx="' + D(ze) + '" cy="' + O(Re) + '" r="14.5"/>');
        const Tn = je ? ' data-string="' + (Re + 1) + '" data-fret="' + ze + '" data-degree="' + at.deg + '"' : "";
        be += "<circle" + Tn + ' cx="' + D(ze) + '" cy="' + O(Re) + '" r="' + b + '" fill="' + St + '" stroke="' + (un ? "#fff" : "#1a1430") + '" stroke-width="' + (un ? 2.5 : 1) + '"/>', be += '<text x="' + D(ze) + '" y="' + (O(Re) + 3.5) + '" font-size="' + (at.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Lt + '" text-anchor="middle">' + at.deg + "</text>";
      }
    }), je && (be += "</g>"), Gt && en.forEach((Le, Re) => {
      if (!Le) return;
      const ze = D(le), Ze = O(Re);
      be += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + le + '">', be += '<circle cx="' + ze + '" cy="' + Ze + '" r="9" fill="' + (le === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + ze + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
    }), be += "</svg>", be;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: k,
    SCALES: T,
    noteName: F,
    scaleNotes: re,
    scaleTriads: W,
    triadGrips: ae,
    chordGrip: g,
    renderChordDiagram: ne,
    selectionFromURL: ce,
    selectionHref: Ee,
    renderBoard: H,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Y,
    syncBoxSystem: he,
    fingeringBoxes: G,
    boxOptions: se,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = xp;
function wo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function jp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function Sp(r) {
  const i = jp(r), l = Math.round(i), c = (i - l) * 100;
  return { midi: l, cents: c };
}
const Ue = globalThis.MusicMapFretboard, Qe = (r) => (r % 12 + 12) % 12, wp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Ep = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], De = (r, i = !1, l = !1) => (i ? Ep : wp)[Qe(r)] + (l ? Math.floor(r / 12) - 1 : ""), ci = (r) => Ue.CHROM[Qe(r)], ir = (r, i, l) => Ue.noteName(Qe(r), i, l);
function Np(r, i) {
  const l = Math.floor(r / 12) - 1;
  return i[0] === "B" && Qe(r) < 2 ? l - 1 : i[0] === "C" && Qe(r) > 9 ? l + 1 : l;
}
const Zt = ["ohut E", "B", "G", "D", "A", "paksu E"], eu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Lh = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Cp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], bi = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ke = (r, i) => ({ string: r, fret: i, midi: Ue.OPEN_PITCHES[r] + i });
function hs(r, i, l) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => Ke(c, i + h)));
}
const Xe = (r) => `${r.string}:${r.fret}`, _i = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Rh = (r, i) => i === "maj" ? `${ci(r)}-duurisointu` : i === "min" ? `${ci(r)}-mollisointu` : `${ci(r)}7-sointu`, sr = [
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
], Dd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Oh(r, i) {
  const l = Dd[i] ?? Dd.E, c = Qe(r - l.root);
  return l.frets.flatMap((d, h) => d === null ? [] : [Ke(h, d + c)]);
}
const Ea = {
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
}, Ra = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, oi = (r, i, l, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(i, Math.min(l, r)) : c, Nn = (r, i, l) => i.includes(r) ? r : l;
function ba(r) {
  const i = { ...Ea };
  i.mode = Nn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((l) => Number.isInteger(l) && l >= 0 && l <= 5))].sort((l, c) => l - c) : i.strings, i.strings.length || (i.strings = [...Ea.strings]), i.min = Math.round(oi(r.min, 0, 24, i.min)), i.max = Math.round(oi(r.max, i.min, 24, Math.max(i.min, i.max)));
  for (const l of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[l] == "boolean" && (i[l] = r[l]);
  return i.check = Nn(r.check, ["class", "pitch"], i.check), i.input = Nn(r.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : i.rounds, i.root = Math.round(oi(r.root, 0, 11, i.root)), i.scale = typeof r.scale == "string" && Object.hasOwn(Ue.SCALES, r.scale) ? r.scale : i.scale, i.box = Math.round(oi(r.box, 0, 5, i.box)), i.order = Nn(r.order, ["random", "up", "down"], i.order), i.chord = Nn(r.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Nn(r.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Nn(r.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((l) => Number.isInteger(l) && l >= 1 && l <= 12))].sort((l, c) => l - c) : i.intervals, i.intervals.length || (i.intervals = [...Ea.intervals]), i.direction = Nn(r.direction, ["up", "down", "both"], i.direction), i.hints = Nn(r.hints, ["off", "always", "fade"], i.hints), i.activity = Nn(r.activity, ["play", "degree"], i.activity), i.minRms = oi(r.minRms, 1e-3, 0.15, i.minRms), i.clarity = oi(r.clarity, 0.85, 0.99, i.clarity), i.stability = oi(r.stability, 120, 800, i.stability), i.cents = oi(r.cents, 10, 45, i.cents), i.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", i;
}
function Tp(r, i) {
  const l = new URLSearchParams(r), c = { ...i };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    l.has(d) && Object.assign(c, { [h]: l.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    l.has(d) && (c[h] = Number(l.get(d)));
  l.has("kielet") && (c.strings = l.get("kielet").split(",").map((d) => Number(d) - 1)), l.has("intervallit") && (c.intervals = l.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    l.has(d) && (c[h] = l.get(d) === "1");
  if (l.has("toonikka")) {
    const d = l.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ue.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    m >= 0 && (c.root = m);
  }
  return ba(c);
}
function Mp(r) {
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
    kielet: r.strings.map((i) => i + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const Ai = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Dn = (r) => r.mode === "scale" && r.order !== "random", $h = (r) => ["note", "degree"].includes(Ai(r)) ? "class" : Dn(r) ? "pitch" : r.check, ja = (r) => Ai(r) === "mic", zd = "musiikin-kartta:harjoittelu", Ih = 3, $o = () => ({ version: Ih, settings: { ...Ea }, stats: {}, recent: [], sessions: [] }), Fh = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, yn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function _p(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => yn(r[i])) && r.correct <= r.attempts && (r.errors === void 0 || yn(r.errors)) && (r.ema === void 0 || yn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || yn(r.emaMs));
}
function bp(r) {
  return !!r && typeof r.id == "string" && yn(r.count) && yn(r.first) && r.first <= r.count && yn(r.ms) && yn(r.at) && (r.solo === void 0 || yn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || yn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Bd(r) {
  if (!r) return $o();
  const i = JSON.parse(r);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !_p(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !yn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !bp(p)))) throw new Error("Virheellisiä kierroksia");
  const l = i.version < 3, c = ba(i.settings ?? {}), d = l && i.settings?.hints !== "always" && i.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: Ih,
    settings: c,
    stats: Object.fromEntries(Object.entries(i.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (i.recent ?? []).slice(-500),
    sessions: (i.sessions ?? []).slice(-200)
  };
  return (d || i.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Vd = 2500, Ap = 8e3, Kd = 0.3, rr = (r) => r.ema ?? r.correct / r.attempts, ar = (r) => r.emaMs ?? r.totalMs / r.attempts;
function tu(r) {
  if (!r?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (ar(r) - Vd) / (Ap - Vd)));
  return rr(r) * 0.65 + i * 0.35;
}
function Pp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - tu(r)) * 3;
}
class Ud {
  constructor(i) {
    this.storage = i;
    try {
      this.data = Bd(i?.getItem(zd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = $o();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(zd, JSON.stringify(this.data)), this.warning = "";
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
    const l = Fh(i), c = this.data.stats[l] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(i.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + i.errors,
      totalMs: c.totalMs + i.ms,
      lastSeen: i.at,
      ema: c.attempts ? rr(c) + Kd * (d - rr(c)) : d,
      emaMs: c.attempts ? ar(c) + Kd * (i.ms - ar(c)) : i.ms
    };
    Object.defineProperty(this.data.stats, l, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, i].slice(-500), this.save();
  }
  session(i) {
    this.data.sessions = [...this.data.sessions.filter((l) => l.id !== i.id), i].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(i) {
    if (!i.trim()) throw new Error("Tyhjä tiedosto");
    const l = Bd(i);
    this.data = l, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...$o(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Lp = 4e3, Hd = 12, Rp = 1500;
function Op(r, i) {
  const l = r.left + r.stickyLeft, c = r.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Hd : i.right > c && (d = i.right - c + Hd), d === 0) return null;
  const h = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + d));
  return Math.abs(h - r.scrollLeft) < 1 ? null : h;
}
function $p(r, i) {
  return i.right <= r.left + r.stickyLeft || i.left >= r.right;
}
function Dh(r, i, l, { stickySelector: c, enabled: d = !0, playback: h } = {}) {
  const p = A.useRef(0), m = A.useRef(!1), x = A.useRef(""), j = A.useRef(0), v = A.useRef(h);
  A.useEffect(() => {
    const k = r.current;
    if (!k || !d) return;
    const T = () => {
      p.current = Date.now() + Lp;
    }, N = () => {
      m.current = !0, T();
    }, _ = () => {
      m.current && (m.current = !1, T());
    }, w = (E) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(E.key) && T();
    };
    return k.addEventListener("pointerdown", N, { passive: !0 }), k.addEventListener("touchstart", N, { passive: !0 }), k.addEventListener("wheel", T, { passive: !0 }), k.addEventListener("keydown", w), window.addEventListener("pointerup", _, { passive: !0 }), window.addEventListener("pointercancel", _, { passive: !0 }), window.addEventListener("touchend", _, { passive: !0 }), window.addEventListener("touchcancel", _, { passive: !0 }), () => {
      k.removeEventListener("pointerdown", N), k.removeEventListener("touchstart", N), k.removeEventListener("wheel", T), k.removeEventListener("keydown", w), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), window.removeEventListener("touchend", _), window.removeEventListener("touchcancel", _);
    };
  }, [r, d]), A.useLayoutEffect(() => {
    const k = h !== void 0 && !!h && h !== v.current;
    v.current = h, k && !m.current && (p.current = 0);
  }, [h]), A.useLayoutEffect(() => {
    h === void 0 && x.current === "" && l !== "" && Date.now() - j.current > Rp && !m.current && (p.current = 0), x.current !== "" && l === "" && (j.current = Date.now()), x.current = l;
    const k = r.current;
    if (!k || !d || !l || m.current || Date.now() < p.current) return;
    const T = k.querySelector(i);
    if (!T) return;
    const N = k.getBoundingClientRect(), _ = T.getBoundingClientRect(), w = c ? k.querySelector(c) : null, E = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, B = {
      left: N.left,
      right: N.left + k.clientWidth,
      scrollLeft: k.scrollLeft,
      maxScroll: k.scrollWidth - k.clientWidth,
      stickyLeft: E
    }, b = Op(B, _);
    if (b === null) return;
    const z = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || $p(B, _);
    typeof k.scrollTo == "function" ? k.scrollTo({ left: b, behavior: z ? "auto" : "smooth" }) : k.scrollLeft = b;
  }, [r, i, l, c, d, h]);
}
const Ip = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Fp = ["e", "B", "G", "D", "A", "E"];
function zh({ string: r }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Fp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Bh = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Dp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Vh({ min: r, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - r + 1 }, (l, c) => {
      const d = r + c;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Ip.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function di({ area: r, marks: i = [], mutedStrings: l = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta", follow: p = "hints", playback: m }) {
  const x = { "--cols": r.max - r.min + 1 }, { strings: j, min: v, max: k } = r, [T, N] = A.useState({ string: Math.min(...j), fret: v }), _ = A.useRef(null), w = new Map(i.map((V) => [Xe(V), V])), E = i.map((V) => `${Xe(V)}${V.kind}`).join(",");
  A.useEffect(() => {
    if (p !== "hints") return;
    const V = _.current, D = V?.querySelector(".target, .anchor");
    V && D && (V.scrollLeft += D.getBoundingClientRect().left - V.getBoundingClientRect().left - V.clientWidth / 2 + D.clientWidth / 2);
  }, [E, p]), A.useEffect(() => {
    p === "playing" && _.current && (_.current.scrollLeft = 0);
  }, [p, v, k]);
  const B = i.find((V) => V.kind === "playing");
  Dh(_, ".playing", B ? Xe(B) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [b, U] = A.useState({ left: !1, right: !1 });
  A.useEffect(() => {
    const V = _.current;
    if (!V) return;
    const D = () => {
      const F = V.scrollLeft > 2, re = V.scrollLeft + V.clientWidth < V.scrollWidth - 2;
      U((Z) => Z.left === F && Z.right === re ? Z : { left: F, right: re });
    };
    D(), V.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(V), () => {
      V.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [E, v, k]);
  const z = j.includes(T.string) && T.fret >= v && T.fret <= k ? T : { string: Math.min(...j), fret: v };
  return /* @__PURE__ */ a.jsxs("div", { className: "fret-wrap" + (b.left ? " more-left" : "") + (b.right ? " more-right" : ""), children: [
    (b.left || b.right) && /* @__PURE__ */ a.jsxs("p", { className: "fret-scroll-hint", children: [
      b.left && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      b.left && b.right ? "molemmilla puolilla" : b.right ? "oikealla" : "vasemmalla",
      b.right && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { ref: _, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board", style: x, children: [
      /* @__PURE__ */ a.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ a.jsx(Vh, { min: v, max: k }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((V, D) => /* @__PURE__ */ a.jsxs("tr", { className: j.includes(D) ? "" : "unused", style: Bh(D), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Zt[D]}${l.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(zh, { string: D }),
          l.includes(D) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        hs([D], v, k).map((O) => {
          const F = w.get(Xe(O)), re = `${Zt[D]}-kieli, ${bi(O.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: z.string === D && z.fret === O.fret ? 0 : -1,
              onFocus: () => N(O),
              onKeyDown: (Z) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) return;
                Z.preventDefault();
                const we = [...j].sort((G, ue) => G - ue), Ne = we.indexOf(D), Y = Z.key === "ArrowUp" ? we[Math.max(0, Ne - 1)] : Z.key === "ArrowDown" ? we[Math.min(we.length - 1, Ne + 1)] : D, he = Z.key === "Home" ? v : Z.key === "End" ? k : Math.max(v, Math.min(k, O.fret + (Z.key === "ArrowRight" ? 1 : Z.key === "ArrowLeft" ? -1 : 0)));
                Z.currentTarget.closest("table")?.querySelector(`button[data-string="${Y}"][data-fret="${he}"]`)?.focus();
              },
              disabled: c || !j.includes(D),
              "aria-label": re + (F ? `, ${Dp[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => d?.(O),
              children: F ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function zp({ area: r, stats: i, input: l, check: c, flats: d }) {
  const { strings: h, min: p, max: m } = r, x = `${l}:${c}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Vh, { min: p, max: m }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((j, v) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Bh(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Zt[v]}`, children: /* @__PURE__ */ a.jsx(zh, { string: v }) }),
      hs([v], p, m).map((k) => {
        const T = Object.hasOwn(i, x + Xe(k)) ? i[x + Xe(k)] : void 0, N = tu(T), _ = N === null ? "unseen" : T.attempts < 3 ? "few" : N >= 0.8 ? "strong" : N >= 0.5 ? "growing" : "weak", w = `${Zt[v]}-kieli, ${bi(k.fret)}, ${De(k.midi, d)}`, E = T ? `${Math.round(N * 100)} %, ${T.correct}/${T.attempts} heti oikein, viime aikoina ${Math.round(rr(T) * 100)} % ja ${(ar(T) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${k.fret === 0 ? "open-fret " : ""}${_}`, title: `${w}: ${E}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: N === null ? "·" : T.attempts < 3 ? "?" : Math.round(N * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            E
          ] })
        ] }, k.fret);
      })
    ] }, v)) })
  ] }) });
}
const Bp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Oa = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : _i[r.mode === "caged" ? "maj" : r.chord].tones, Kh = (r) => Ue.fingeringBoxes(r.root, Ue.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Pi(r) {
  if (r.mode === "caged") {
    const i = Oh(r.root, r.shape).map((l) => l.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...i), max: Math.max(...i), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const i = Kh(r);
    return { strings: r.strings, min: i.start, max: i.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Vp(r) {
  const i = Pi(r);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function or(r) {
  const i = Pi(r), l = hs(i.strings, i.min, i.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return l.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(Qe(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(Oh(r.root, r.shape).map(Xe));
    return l.filter((p) => h.has(Xe(p)));
  }
  if (r.mode === "interval") return l;
  const c = l.filter((h) => Oa(r).some(([p]) => Qe(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = Kh(r);
  return c.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Uh(r, i) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: i.flatMap((h) => i.filter((p) => p.midi === h.midi + (c === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Kp(r) {
  const i = Oa(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? i : i.filter(([, l]) => l.endsWith(r.chordTone));
}
function Io(r) {
  const i = or(r), l = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : l}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${l}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${l}`;
  const c = Kp(r).filter(([d]) => !i.some((h) => Qe(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${l}` : r.mode === "interval" && !Uh(r, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Dn(r) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${l}` : null;
}
function Up(r, i) {
  const l = [...new Map([...i].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? l.reverse() : l;
}
function Hh(r) {
  return Dn(r) ? new Set(or(r).map((i) => i.midi)).size : r.rounds;
}
function Hp(r, i) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? i <= 3 ? 2 : i <= 6 ? 1 : 0 : 0;
}
function is(r, i, l = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = i.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, l()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let p = 0; p < r.length; p++)
    if (h -= i[p], h < 0) return r[p];
  return r.at(-1);
}
const Gd = (r, i) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${i}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${i}:${r.activity}` : `scale:${r.root}:${r.scale}:${i}:${r.activity}`;
function Ti(r, i) {
  const l = r.filter((c) => !i(c));
  return l.length ? l : r;
}
function Gp(r, i, l = {}, c, d = Math.random) {
  const h = Io(r);
  if (h) throw new Error(h);
  const p = $h(r), m = Ai(r), x = p === "pitch", j = (O) => r.weak ? Pp(l[Fh({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => is(O, O.map(() => 1), d), k = or(r), T = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const O = Ti(k, (Z) => !!c && Xe(Z) === Xe(c.position)), F = is(O, O.map((Z) => j(`notes:${Xe(Z)}`)), d), re = De(F.midi, r.flats, x);
    return {
      ...T,
      position: F,
      midi: F.midi,
      name: re,
      item: `notes:${Xe(F)}`,
      prompt: `Etsi ${re} ${eu[F.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const O = (we) => `ear-note:${Qe(we.midi)}${r.reference ? ":ref" : ""}`, F = Ti(k, (we) => !!c && Qe(we.midi) === Qe(c.midi)), re = is(F, F.map((we) => j(O(we))), d), Z = r.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...T,
      position: re,
      midi: re.midi,
      name: De(re.midi, r.flats),
      item: O(re),
      choices: "note",
      reference: Z,
      sound: Z === void 0 ? [re.midi] : [Z, re.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const O = Ti(k, (re) => !!c && re.midi === c.midi), F = is(O, O.map((re) => j(`repeat:${re.midi}`)), d);
    return {
      ...T,
      position: F,
      midi: F.midi,
      name: De(F.midi, r.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const O = Ti(Uh(r, k), (Z) => c?.interval === Z.iv && c?.direction === Z.direction), F = is(O, O.map((Z) => j(`interval:${Z.iv}:${Z.direction}`)), d), re = v(Ti(F.pairs, (Z) => c?.reference === Z.reference.midi));
    return {
      ...T,
      position: re.target,
      midi: re.target.midi,
      name: De(re.target.midi, r.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${De(re.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const N = Oa(r);
  let _, w = 0;
  if (Dn(r)) {
    const O = Up(r, k);
    w = O.length, _ = O[i % O.length];
  } else {
    const O = N.filter(([Z]) => k.some((we) => Qe(we.midi - r.root) === Z)), F = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [N[i % N.length]] : N.filter(([, Z]) => Z.endsWith(r.chordTone)) : Ti(O, ([Z]) => c?.interval === Z), [re] = is(F, F.map(([Z]) => j(Gd(r, Z))), d);
    _ = v(Ti(k.filter((Z) => Qe(Z.midi - r.root) === re), (Z) => !!c && Xe(Z) === Xe(c.position)));
  }
  const E = Qe(_.midi - r.root), B = N.find(([O]) => O === E)[1], b = ir(r.root, E, B), U = x ? b + Np(_.midi, b) : b, z = r.mode === "scale" ? `${ci(r.root)}-${Ue.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${ci(r.root)}-duurisointu, ${r.shape}-muoto` : Rh(r.root, r.chord), V = r.mode !== "caged" && r.activity === "degree", D = V ? `${z}: mikä aste on ${b}?` : w ? `${z} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % w + 1}/${w}: ${B}. aste (${U}).` : `${z}: etsi ${B}. aste${x ? ` (${U})` : ""}.`;
  return {
    ...T,
    position: _,
    midi: _.midi,
    name: U,
    item: Gd(r, E),
    prompt: D,
    degree: B,
    interval: E,
    choices: V ? "degree" : "position"
  };
}
function Fo(r, i, l) {
  return Number.isInteger(i) && (l === "class" ? Qe(r) === Qe(i) : r === i);
}
function Gh(r, i, l) {
  return Fo(i.midi, l.midi, i.check) ? r.mode === "notes" ? l.string === i.position.string : Bp(r) ? or(r).some((c) => Xe(c) === Xe(l)) : !0 : !1;
}
function Wp(r, i) {
  const l = Pi(r);
  return hs(l.strings, l.min, l.max).filter((c) => Gh(r, i, c));
}
const Tt = (r, i, l) => ({ ...r, label: i, kind: l }), Qp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Yp(r, i, l) {
  if (l <= 0) return { marks: [], text: "" };
  const c = l >= 2, d = Pi(r), h = hs(d.strings, d.min, d.max), p = Wp(r, i);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((B) => Tt(B, i.name, "answer")), text: `${i.name} on ${Lh[i.position.string]}: ${bi(i.position.fret)}.` };
    const w = h.find((B) => B.string === i.position.string), E = De(w.midi, r.flats);
    return {
      marks: [Tt(w, E, "anchor")],
      text: `Apupiste: ${Cp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Tt(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [Tt(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Zt[i.position.string]}-kieli, ${bi(i.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((w) => Tt(w, De(w.midi, r.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${eu[i.position.string]}.` };
  if (r.mode === "interval") {
    const w = De(i.reference, r.flats, !0), E = h.filter((B) => B.midi === i.reference).map((B) => Tt(B, w, "anchor"));
    return c ? {
      marks: [...E, ...p.map((B) => Tt(B, De(B.midi, r.flats, !0), "answer"))],
      text: `${Qp(sr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${i.name}.`
    } : { marks: E, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = or(r), x = Oa(r), j = (w) => x.find(([E]) => E === Qe(w.midi - r.root))?.[1] ?? "", v = ir(r.root, i.interval, i.degree), k = m.filter((w) => Qe(w.midi - r.root) === 0), T = (w) => p.some((E) => Xe(E) === Xe(w)), N = `${i.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((w) => Tt(w, j(w), T(w) ? "answer" : "shape")), text: N } : { marks: m.map((w) => Tt(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const _ = r.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const w = m.filter((E) => Qe(E.midi) === Qe(i.midi));
    return c ? { marks: [...(i.interval === 0 ? [] : k).map((E) => Tt(E, "1", "anchor")), ...w.map((E) => Tt(E, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: w.map((E) => Tt(E, v, "shape")), text: `Katso ${_} nimeä: mikä on sen perussävel?` } : {
      marks: [...k.map((E) => Tt(E, "1", "anchor")), ...w.map((E) => Tt(E, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...k.filter((w) => !T(w)).map((w) => Tt(w, "1", "anchor")), ...p.map((w) => Tt(w, i.degree, "answer"))], text: N } : i.interval === 0 ? { marks: [], text: `1. aste on ${_} perussävel ${ci(r.root)}.` } : { marks: k.map((w) => Tt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Jp {
  constructor(i, l, c, d = () => performance.now(), h = Math.random) {
    this.settings = i, this.stats = l, this.record = c, this.now = d, this.random = h, this.total = Hh(i);
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
      this.question = Gp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Hp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(i, l, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(l === "degree" ? i === h.interval : l === "note" ? Fo(h.midi, i, "class") : l === "board" ? !!c && Gh(this.settings, h, c) : Fo(h.midi, i, h.check)))
      return l === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = l === "board" ? c : void 0, x = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Xe(m)}` : h.item,
      mode: this.settings.mode,
      input: l,
      check: h.check,
      expected: h.midi,
      played: i,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? x.position = Xe(m) : this.settings.mode === "notes" && (x.position = Xe(h.position)), this.results.push(x), this.record(x), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Do(r) {
  const i = r.filter((l) => !l.hint);
  return {
    count: r.length,
    first: r.filter((l) => l.first).length,
    solo: i.length,
    soloFirst: i.filter((l) => l.first).length,
    guided: r.length - i.length,
    ms: r.reduce((l, c) => l + c.ms, 0)
  };
}
const zo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], as = (r) => zo.find(([i]) => i === r)?.[1] ?? r;
function It({ label: r, children: i }) {
  const l = A.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, children: r }),
    A.cloneElement(i, { id: l })
  ] });
}
function Wd({ legend: r, name: i, value: l, options: c, onChange: d, disabled: h }) {
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ a.jsx("legend", { children: r }),
    /* @__PURE__ */ a.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ a.jsxs("label", { className: p.value === l ? "selected" : "", children: [
      /* @__PURE__ */ a.jsx("input", { type: "radio", name: i, value: p.value, checked: p.value === l, onChange: () => d(p.value) }),
      /* @__PURE__ */ a.jsxs("span", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: p.title }),
        /* @__PURE__ */ a.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Qd(r) {
  const i = Pi(r), l = Hh(r), c = Ai(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = i.fixed === "shape" ? `${r.shape}-muoto, nauhat ${i.min}–${i.max}` : i.fixed === "box" ? `boksi ${r.box}, nauhat ${i.min}–${i.max}` : `nauhat ${i.min}–${i.max}`, p = i.strings.length === 6 ? "" : ` · kielet ${i.strings.map((m) => m + 1).join(", ")}`;
  return `${Ra[r.hints].title} · ${d} · ${Dn(r) ? `yksi läpisoitto, ${l} säveltä` : l ? `${l} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Yd({ s: r, change: i, locked: l, problem: c }) {
  const d = A.useId(), h = (v, k) => i({ ...r, [v]: k }), p = Pi(r), m = Ai(r) === "note" || Ai(r) === "degree", x = ["scale", "chord", "caged"].includes(r.mode), j = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: l, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(It, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: r.mode, onChange: (v) => h("mode", v.target.value), children: zo.map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: zo.find(([v]) => v === r.mode)[2] })
    ] }),
    x && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(It, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: r.root, onChange: (v) => h("root", Number(v.target.value)), children: Ue.CHROM.map((v, k) => /* @__PURE__ */ a.jsx("option", { value: k, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(It, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: r.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ue.SCALES).map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(It, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: r.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(It, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: r.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(It, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: r.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(_i).map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(It, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: r.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      r.mode === "caged" ? /* @__PURE__ */ a.jsx(It, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: r.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(It, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: r.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (k) => h("intervals", k.target.checked ? [...r.intervals, v] : r.intervals.filter((T) => T !== v)) }),
        sr[v]
      ] }, v)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(It, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: r.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Wd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Ra[v] }))
      }
    ),
    m ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Wd, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(It, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: r.rounds, disabled: Dn(r), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ a.jsx(It, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: Dn(r) ? "pitch" : r.check, disabled: Dn(r), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(It, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(r.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ a.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ a.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Dn(r) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ a.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ a.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === v, onClick: () => i({ ...r, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsx(It, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(It, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: Zt.map((v, k) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.strings.includes(k), onChange: (T) => h("strings", T.target.checked ? [...r.strings, k] : r.strings.filter((N) => N !== k)) }),
          k + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "check-row", children: [
        j && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Jd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Xp(r) {
  return r && Object.hasOwn(Jd, r) ? Jd[r] : null;
}
const Zp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function qp({ onSelect: r }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: Zp.map((i) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(i.id), children: [
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
function ev({ onBack: r, onNotes: i }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home ear-exercise-menu", "aria-labelledby": "ear-exercise-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
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
const tv = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Bo = 100, Wh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function nu(r) {
  if (r === null || r.trim() === "") return Bo;
  const i = Number(r);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Bo;
}
function nv() {
  try {
    return nu(localStorage.getItem(Wh));
  } catch {
    return Bo;
  }
}
function iv(r) {
  try {
    localStorage.setItem(Wh, String(nu(String(r))));
  } catch {
  }
}
function Eo(r, i, l = !0) {
  return l ? tv[r] * nu(String(i)) / 100 : 0;
}
function Qh(r = () => new Audio()) {
  try {
    const i = r();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Yh = 0.12, sv = 2e3, Jh = 3, Xd = 1e-3, rv = Yh, Zd = 1500, av = 4e3;
function Xh(r) {
  return r.readyState >= Jh && !r.seeking;
}
function Zh(r) {
  return r.every(Xh);
}
function lv(r) {
  let i = 0;
  for (const l of r)
    if (!Xh(l))
      try {
        const c = l.play();
        l.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), i++;
      } catch {
      }
  return i;
}
function ov(r, i, l, c = {
  set: (d, h) => setTimeout(d, h),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const h = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, m = null;
    const x = c.set(() => j("aikakatkaisu"), i);
    function j(T) {
      if (!p) {
        p = !0, c.clear(x), m !== null && c.clear(m);
        for (const N of r) for (const _ of h) N.removeEventListener(_, v);
        d(T);
      }
    }
    function v() {
      l() ? j("ohitettu") : r.some((T) => T.error) ? j("virhe") : Zh(r) && j("valmis");
    }
    const k = () => {
      v(), p || (m = c.set(k, 50));
    };
    for (const T of r) for (const N of h) T.addEventListener(N, v);
    v(), p || (m = c.set(k, 50));
  });
}
function uv(r, i = !1) {
  return i ? !0 : r.atLoopBoundary || r.drift <= Yh || r.seeking || r.readyState < Jh ? !1 : r.msSinceLastFix >= sv;
}
const cv = 1.5, dv = 0.4, hv = 0.5;
let Vo = null, fv = null;
function mv(r) {
  return Vo !== null ? Vo : (fv ??= Qh()) ? 0 : dv;
}
class qh {
  constructor(i = mv()) {
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
  align(i, l, c = !1, d = performance.now(), h = Xd) {
    if (l.readyState < 1 || i.readyState < 1 || !c && (l.paused || i.paused) || !c && d < this.holdUntil) return !1;
    const p = l.currentTime - i.currentTime, m = Math.abs(p), x = i.loop && Number.isFinite(i.duration) && Math.abs(m - i.duration) < 0.35, j = this.lastFix.get(l);
    if (!uv({
      drift: m,
      atLoopBoundary: x,
      seeking: l.seeking,
      readyState: l.readyState,
      msSinceLastFix: j === void 0 ? 1 / 0 : d - j
    }, c)) return !1;
    const v = !i.paused;
    !c && v && j !== void 0 && (this.latency = Math.min(cv, Math.max(0, this.latency - hv * p)), Vo = this.latency);
    let k = i.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(l.duration) && (k = Math.min(k, Math.max(0, l.duration - 0.05))), Math.abs(l.currentTime - k) < Math.max(h, Xd)) return !1;
    try {
      l.currentTime = k;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(l, d) : this.lastFix.delete(l), !0;
  }
}
function pv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function vv(r = pv(), i = () => Qh()) {
  return r ? "webaudio" : i() ? "element" : "webaudio";
}
function kv(r = globalThis.navigator) {
  const i = r?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
}
const yv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class gv {
  constructor(i = yv, l = globalThis.navigator) {
    this.create = i, this.nav = l;
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
        kv(this.nav);
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
      const l = this.context.createMediaElementSource(i), c = this.context.createGain();
      return l.connect(c), c.connect(this.context.destination), this.gains.set(i, c), !0;
    } catch (l) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(l), !1;
    }
  }
  routed(i) {
    return !!i && this.gains.has(i);
  }
  setLevel(i, l) {
    const c = this.gains.get(i);
    c && (c.gain.value = l);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(i) {
    const l = i ? this.gains.get(i) : void 0;
    return l ? l.gain.value : null;
  }
  close() {
    const i = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), i?.close().catch(() => {
    });
  }
}
const xv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", jv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function qd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const i = Math.floor(r);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function ef() {
  const r = A.useRef(null), i = A.useRef(null), [l, c] = A.useState(!1), [d, h] = A.useState(!1), [p, m] = A.useState(!1), [x, j] = A.useState(0), [v, k] = A.useState(0), [T, N] = A.useState(""), _ = A.useRef(new qh());
  function w(z = !1) {
    const V = r.current, D = i.current;
    !V || !D || !Number.isFinite(V.currentTime) || _.current.align(V, D, z);
  }
  function E() {
    r.current?.pause(), i.current?.pause(), c(!1);
  }
  async function B() {
    const z = r.current, V = i.current;
    if (!(!z || !V)) {
      if (l) {
        E();
        return;
      }
      N(""), V.muted = !d, V.volume = 0.55, z.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [z.play(), V.play()] : [z.play()]), w(), c(!0);
      } catch {
        E(), N("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function b(z) {
    const V = r.current, D = i.current;
    if (!(!V || !D || !Number.isFinite(z))) {
      V.currentTime = z;
      try {
        D.currentTime = z;
      } catch {
      }
      j(z);
    }
  }
  function U(z) {
    const V = r.current, D = i.current;
    if (h(z), !!D) {
      if (D.muted = !z, !z) {
        D.pause();
        return;
      }
      !V || !l || (w(!0), D.play().catch(() => N("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return A.useEffect(() => {
    const z = () => {
      document.hidden && (r.current?.pause(), i.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), r.current?.pause(), i.current?.pause();
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
              onChange: (z) => U(z.target.checked)
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
              onChange: (z) => m(z.target.checked)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        B();
      }, children: l ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(x, v > 0 ? v : 1),
          disabled: !v,
          onChange: (z) => b(Number(z.target.value))
        }
      ),
      /* @__PURE__ */ a.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        qd(x),
        " / ",
        qd(v)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: xv,
        loop: p,
        onLoadedMetadata: (z) => k(z.currentTarget.duration),
        onTimeUpdate: (z) => {
          j(z.currentTarget.currentTime), z.currentTarget.paused || w();
        },
        onEnded: () => {
          r.current?.loop || (i.current?.pause(), c(!1), j(v));
        },
        onPause: () => {
          i.current?.pause(), c(!1);
        },
        onError: () => N("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: jv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const z = r.current, V = i.current;
          z?.duration && V?.duration && Math.abs(z.duration - V.duration) > 0.15 && N("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => N("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    T && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: T }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Sv = 4e3;
class eh extends Error {
  name = "MicSetupError";
}
async function wv(r, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new eh("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const l = {
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
  }, c = await navigator.mediaDevices.getUserMedia(l);
  let d;
  try {
    if (d = i ? i() : new AudioContext(), d.state !== "running") {
      let j;
      await Promise.race([
        d.resume(),
        new Promise((v, k) => {
          j = setTimeout(() => k(new eh("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Sv);
        })
      ]).finally(() => clearTimeout(j));
    }
    const h = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], x = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: c,
      label: m?.label ?? "",
      deviceId: x.deviceId ?? "",
      channelCount: x.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((j) => j.stop()), h.disconnect(), i || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), i || await d?.close().catch(() => {
    }), h;
  }
}
async function Ev() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var No, th;
function Nv() {
  if (th) return No;
  th = 1;
  function r(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var l = new Array(this.size * 2), c = 0; c < l.length; c += 2) {
      const j = Math.PI * c / this.size;
      l[c] = Math.cos(j), l[c + 1] = -Math.sin(j);
    }
    this.table = l;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
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
  return No = r, r.prototype.fromComplexArray = function(l, c) {
    for (var d = c || new Array(l.length >>> 1), h = 0; h < l.length; h += 2)
      d[h >>> 1] = l[h];
    return d;
  }, r.prototype.createComplexArray = function() {
    const l = new Array(this._csize);
    for (var c = 0; c < l.length; c++)
      l[c] = 0;
    return l;
  }, r.prototype.toComplexArray = function(l, c) {
    for (var d = c || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = l[h >>> 1], d[h + 1] = 0;
    return d;
  }, r.prototype.completeSpectrum = function(l) {
    for (var c = this._csize, d = c >>> 1, h = 2; h < d; h += 2)
      l[c - h] = l[h], l[c - h + 1] = -l[h + 1];
  }, r.prototype.transform = function(l, c) {
    if (l === c)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(l, c) {
    if (l === c)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(l, c) {
    if (l === c)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < l.length; d++)
      l[d] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var l = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, x, j = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const E = j[x];
        this._singleTransform2(m, E, h);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const E = j[x];
        this._singleTransform4(m, E, h);
      }
    var v = this._inv ? -1 : 1, k = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var T = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var N = m + T, _ = m, w = 0; _ < N; _ += 2, w += h) {
          const E = _, B = E + T, b = B + T, U = b + T, z = l[E], V = l[E + 1], D = l[B], O = l[B + 1], F = l[b], re = l[b + 1], Z = l[U], we = l[U + 1], Ne = z, Y = V, he = k[w], G = v * k[w + 1], ue = D * he - O * G, se = D * G + O * he, W = k[2 * w], ae = v * k[2 * w + 1], te = F * W - re * ae, S = F * ae + re * W, g = k[3 * w], ne = v * k[3 * w + 1], ce = Z * g - we * ne, Ee = Z * ne + we * g, H = Ne + te, K = Y + S, ee = Ne - te, J = Y - S, pe = ue + ce, Ce = se + Ee, ge = v * (ue - ce), xe = v * (se - Ee), je = H + pe, Ie = K + Ce, Te = H - pe, $ = K - Ce, oe = ee + xe, le = J - ge, Me = ee - xe, _e = J + ge;
          l[E] = je, l[E + 1] = Ie, l[B] = oe, l[B + 1] = le, l[b] = Te, l[b + 1] = $, l[U] = Me, l[U + 1] = _e;
        }
    }
  }, r.prototype._singleTransform2 = function(l, c, d) {
    const h = this._out, p = this._data, m = p[c], x = p[c + 1], j = p[c + d], v = p[c + d + 1], k = m + j, T = x + v, N = m - j, _ = x - v;
    h[l] = k, h[l + 1] = T, h[l + 2] = N, h[l + 3] = _;
  }, r.prototype._singleTransform4 = function(l, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, j = d * 3, v = p[c], k = p[c + 1], T = p[c + d], N = p[c + d + 1], _ = p[c + x], w = p[c + x + 1], E = p[c + j], B = p[c + j + 1], b = v + _, U = k + w, z = v - _, V = k - w, D = T + E, O = N + B, F = m * (T - E), re = m * (N - B), Z = b + D, we = U + O, Ne = z + re, Y = V - F, he = b - D, G = U - O, ue = z - re, se = V + F;
    h[l] = Z, h[l + 1] = we, h[l + 2] = Ne, h[l + 3] = Y, h[l + 4] = he, h[l + 5] = G, h[l + 6] = ue, h[l + 7] = se;
  }, r.prototype._realTransform4 = function() {
    var l = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, x, j = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Le = j[x];
        this._singleRealTransform2(m, Le >>> 1, h >>> 1);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Le = j[x];
        this._singleRealTransform4(m, Le >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, k = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var T = p >>> 1, N = T >>> 1, _ = N >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, E = 0; w <= _; w += 2, E += h) {
          var B = m + w, b = B + N, U = b + N, z = U + N, V = l[B], D = l[B + 1], O = l[b], F = l[b + 1], re = l[U], Z = l[U + 1], we = l[z], Ne = l[z + 1], Y = V, he = D, G = k[E], ue = v * k[E + 1], se = O * G - F * ue, W = O * ue + F * G, ae = k[2 * E], te = v * k[2 * E + 1], S = re * ae - Z * te, g = re * te + Z * ae, ne = k[3 * E], ce = v * k[3 * E + 1], Ee = we * ne - Ne * ce, H = we * ce + Ne * ne, K = Y + S, ee = he + g, J = Y - S, pe = he - g, Ce = se + Ee, ge = W + H, xe = v * (se - Ee), je = v * (W - H), Ie = K + Ce, Te = ee + ge, $ = J + je, oe = pe - xe;
          if (l[B] = Ie, l[B + 1] = Te, l[b] = $, l[b + 1] = oe, w === 0) {
            var le = K - Ce, Me = ee - ge;
            l[U] = le, l[U + 1] = Me;
            continue;
          }
          if (w !== _) {
            var _e = J, He = -pe, Oe = K, Fe = -ee, Je = -v * je, vt = -v * xe, qt = -v * ge, Ft = -v * Ce, en = _e + Je, Gt = He + vt, Pt = Oe + Ft, gn = Fe - qt, be = m + N - w, on = m + T - w;
            l[be] = en, l[be + 1] = Gt, l[on] = Pt, l[on + 1] = gn;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(l, c, d) {
    const h = this._out, p = this._data, m = p[c], x = p[c + d], j = m + x, v = m - x;
    h[l] = j, h[l + 1] = 0, h[l + 2] = v, h[l + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(l, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, j = d * 3, v = p[c], k = p[c + d], T = p[c + x], N = p[c + j], _ = v + T, w = v - T, E = k + N, B = m * (k - N), b = _ + E, U = w, z = -B, V = _ - E, D = w, O = B;
    h[l] = b, h[l + 1] = 0, h[l + 2] = U, h[l + 3] = z, h[l + 4] = V, h[l + 5] = 0, h[l + 6] = D, h[l + 7] = O;
  }, No;
}
var Cv = Nv();
const Tv = /* @__PURE__ */ cp(Cv);
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
      (l) => new Float32Array(l)
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
      (l) => new Float64Array(l)
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
    return new qs(i, (l) => Array(l));
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
  constructor(i, l) {
    if (i < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = i, this._fft = new Tv(bv(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(i, l = this._bufferSupplier(i.length)) {
    if (i.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${i.length}`
      );
    for (let d = 0; d < i.length; d++)
      this._paddedInputBuffer[d] = i[d];
    for (let d = i.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let d = 0; d < c.length; d += 2)
      c[d] = c[d] * c[d] + c[d + 1] * c[d + 1], c[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < i.length; d++)
      l[d] = this._inverseBuffer[2 * d];
    return l;
  }
}
function Mv(r) {
  const i = [];
  let l = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (l = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && r[h] > c && (c = r[h], d = h);
  return i;
}
function _v(r, i) {
  const [l, c, d] = [r - 1, r, r + 1], [h, p, m] = [i[l], i[c], i[d]], x = h / 2 - p + m / 2, j = -(h / 2) * (c + d) + p * (l + d) - m / 2 * (l + c), v = h * c * d / 2 - p * l * d + m * l * c / 2, k = -j / (2 * x), T = x * k * k + j * k + v;
  return [k, T];
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
    return new er(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new er(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new er(i, (l) => Array(l));
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
  constructor(i, l) {
    this._autocorrelator = new qs(i, l), this._nsdfBuffer = l(i);
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
  findPitch(i, l) {
    if (this._belowMinimumVolume(i)) return [0, 0];
    this._nsdf(i);
    const c = Mv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((x) => this._nsdfBuffer[x])), h = c.find(
      (x) => this._nsdfBuffer[x] >= this._clarityThreshold * d
    ), [p, m] = _v(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [l / p, Math.min(m, 1)];
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
    let l = 0;
    for (let c = 0; c < i.length; c++)
      l += i[c] ** 2;
    return Math.sqrt(l / i.length) < this._minVolumeAbsolute;
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
    let l = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && l > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / l, l -= i[c] ** 2 + i[i.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function bv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function Av(r) {
  const i = r * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Pv = 0.05, Lv = 1.5;
class Rv {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const c = i.context, d = Av(c.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : i.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Pv))), this.detector = er.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Ov();
  onset = new $v();
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
      minClarity: l = 0.9,
      minRms: c = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: x,
      onStableNote: j
    } = this.opts, v = this.analysers.map((O, F) => (O.getFloatTimeDomainData(this.buffers[F]), nh(this.buffers[F], this.buffers[F].length - this.shortLength))), k = v.indexOf(Math.max(...v));
    k !== this.channel && v[k] > (v[this.channel] ?? 0) * Lv && (this.channel = k);
    const T = this.buffers[this.channel], N = v[this.channel], _ = Iv(T, T.length - this.shortLength), w = { rms: N, peak: _, channel: this.channel, levels: v }, E = N < c, B = this.onset.feed(N, i, c);
    if (E && nh(T, 0) < c) {
      this.gate.feed(null, i, d, !0, !1), x?.({ ...w, status: "silent" });
      return;
    }
    const [b, U] = this.detector.findPitch(T, this.mic.context.sampleRate);
    if (!isFinite(b) || U < l) {
      this.gate.feed(null, i, d, E, B), x?.({ ...w, status: E ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (b < p || b > m) {
      this.gate.feed(null, i, d, E, B), x?.({ ...w, status: "out-of-range", frequency: b, clarity: U });
      return;
    }
    const { midi: z, cents: V } = Sp(b);
    if (Math.abs(V) > h) {
      this.gate.feed(null, i, d, E, B), x?.({ ...w, status: "off-pitch", frequency: b, clarity: U, midi: z, cents: V });
      return;
    }
    x?.({ ...w, status: "pitch", frequency: b, clarity: U, midi: z, cents: V });
    const D = this.gate.feed(z, i, d, E, B);
    D !== null && j?.({ midi: z, frequency: b, cents: V, clarity: U, timestamp: i, heldMs: D.heldMs });
  }
}
class Ov {
  constructor(i = 120, l = 80) {
    this.releaseMs = i, this.gapMs = l;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(i, l, c, d, h) {
    if (d ? (this.quietSince ??= l, l - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), i === null)
      return this.current && l - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== i) && (this.current = { midi: i, since: l, seen: l }), this.current.seen = l;
    const p = l - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: p });
  }
}
class $v {
  constructor(i = 2, l = 300, c = 150) {
    this.ratio = i, this.windowMs = l, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(i, l, c) {
    if (l - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: l, rms: i }], !1;
    for (; this.history.length && l - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : i;
    return this.history.push({ time: l, rms: i }), i < c * 1.5 || i < d * this.ratio ? !1 : (this.lastOnset = l, this.history = [{ time: l, rms: i }], !0);
  }
}
function nh(r, i = 0) {
  const l = Math.max(0, i);
  let c = 0;
  for (let d = l; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - l));
}
function Iv(r, i = 0) {
  let l = 0;
  for (let c = Math.max(0, i); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > l && (l = d);
  }
  return l;
}
const ds = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let ss;
function tf() {
  return (!ss || ss.state === "closed") && (ss = new AudioContext()), ss;
}
function Fv() {
  const r = ss;
  ss = void 0, r?.close().catch(() => {
  });
}
const nf = (r) => r instanceof Error ? r.name : "";
function Dv(r) {
  const i = nf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class zv {
  constructor(i = (l) => wv(l, tf)) {
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
  async start(i, l, c) {
    this.stop();
    const d = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(i || void 0);
    } catch (m) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(nf(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Rv(h, { ...l });
      const m = () => {
        this.mic === h && (this.stop(), c());
      }, x = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((j) => j.addEventListener("ended", m, { once: !0, signal: x.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: x.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
    } catch (m) {
      throw this.stop(), m;
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
function sf(r, i) {
  return r !== "on" ? r : !i || i.status === "silent" ? "silent" : i.status === "pitch" ? "pitch" : i.status === "off-pitch" ? "untuned" : "noise";
}
const ih = (r) => Math.max(0, Math.min(1, (ds(r) + 60) / 60));
function Bv(r) {
  const i = [...r].sort((c, d) => c - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function Co(r) {
  const i = () => r.state === "running";
  if (i()) return;
  let l;
  try {
    await Promise.race([
      r.resume(),
      new Promise((c, d) => {
        l = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    l !== void 0 && clearTimeout(l);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function $a(r) {
  const i = r instanceof Error ? r.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class ur {
  constructor(i = tf) {
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
  async play(i, l) {
    this.stop();
    const c = this.token, d = this.provide();
    if (await Co(d), c !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const p = Array.from({ length: 12 }, (j, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((j, v) => {
      const k = d.createOscillator(), T = d.createGain(), N = d.currentTime + 0.05 + v * 0.8;
      m ? k.setPeriodicWave(m) : k.type = "triangle", k.frequency.value = wo(j), T.gain.setValueAtTime(0, N), T.gain.linearRampToValueAtTime(0.22, N + 0.012), T.gain.exponentialRampToValueAtTime(1e-3, N + 0.7), k.connect(T), T.connect(h), k.start(N), k.stop(N + 0.72), l && this.noteTimers.push(setTimeout(() => {
        c === this.token && l(v);
      }, 50 + v * 800));
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), i.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(i, l, c, d) {
    if (this.stop(), !i.length) return !1;
    const h = this.token, p = this.provide();
    if (await Co(p), h !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, l)), x = p.createGain();
    x.connect(p.destination), this.master = x;
    const j = Array.from({ length: 12 }, (_, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...j.map(() => 0)]),
      new Float32Array([0, ...j])
    ), k = p.currentTime + 0.05;
    let T = 0;
    return i.forEach((_, w) => {
      if (!Number.isFinite(_.beat) || _.beat < 0 || !Number.isFinite(_.duration) || _.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const E = k + _.beat * m, B = _.duration * m, b = E + Math.max(0.08, B * 0.94), U = p.createOscillator(), z = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = wo(_.midi), z.gain.setValueAtTime(0, E), z.gain.linearRampToValueAtTime(0.22, E + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, b - 0.01), U.connect(z), z.connect(x), U.start(E), U.stop(b), c && this.noteTimers.push(setTimeout(() => {
        h === this.token && c(w);
      }, 50 + _.beat * m * 1e3));
      const V = i[w + 1]?.beat ?? 1 / 0;
      d && V > _.beat + _.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + _.beat * m * 1e3 + B * 1e3)), T = Math.max(T, _.beat + _.duration);
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), 50 + T * m * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], x.disconnect(), this.master = void 0, !0);
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
  async loop(i, l, c = 75) {
    if (this.stop(), !i.length) return !1;
    const d = this.token, h = this.provide();
    if (await Co(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (w, E) => 1 / (E + 1) ** 1.3), x = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let j = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (j = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let k = h.currentTime + 0.05, T = 0;
    const N = [], _ = () => {
      if (d === this.token) {
        if (k < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - k) / j);
          k += w * j, T = (T + w) % i.length, N.length = 0;
        }
        for (; k < h.currentTime + v; ) {
          const w = i[T], E = T, B = k, b = h.createOscillator(), U = h.createGain();
          x ? b.setPeriodicWave(x) : b.type = "triangle", b.frequency.value = wo(w), U.gain.setValueAtTime(0, B), U.gain.linearRampToValueAtTime(0.22, B + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, B + j * 0.975), b.connect(U), U.connect(p), b.start(B), b.stop(B + j * 0.985), N.push({ at: B, index: E }), k += j, T = (T + 1) % i.length;
        }
        for (; N.length && N[0].at <= h.currentTime + 0.01; ) {
          const w = N.shift();
          l?.(w.index);
        }
      }
    };
    return _(), this.loopTick = setInterval(_, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function hi(r, i) {
  let l = 0;
  const c = i.map(([d, h, p]) => {
    const x = { position: d === null || h === null ? null : Ke(d, h), beat: l, duration: p };
    return l += p, x;
  });
  return { label: r, events: c, beats: l };
}
function To(r, ...i) {
  let l = 0;
  const c = i.flatMap((d) => {
    const h = d.events.map((p) => ({ ...p, beat: p.beat + l }));
    return l += d.beats, h;
  });
  return { label: r, events: c, beats: l };
}
const sh = hi("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), rh = hi("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Vv = hi("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), ah = hi("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), lh = hi("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Kv = hi("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), oh = hi("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), uh = hi("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Uv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [sh, rh],
    whole: To("Melodia · A + B + C", sh, rh, Vv),
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
    fragments: [ah, lh],
    whole: To("Ukko Nooa · A + B", ah, lh),
    bonus: Kv,
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
    fragments: [oh, uh],
    whole: To("Siirtymämelodia · A + B", oh, uh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Hv(r) {
  return r.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const ch = ["e", "B", "G", "D", "A", "E"];
function iu({ pieceId: r, stage: i, onBeforePlay: l, stopHandleRef: c }) {
  const d = Uv[r], [h, p] = A.useState(i === "fingering" ? "a" : "whole"), [m, x] = A.useState(d.tempo), [j, v] = A.useState(!1), [k, T] = A.useState(!1), [N, _] = A.useState(i !== "memory"), [w, E] = A.useState(!1), [B, b] = A.useState(null), [U, z] = A.useState(""), V = A.useRef(new ur()), D = A.useRef(0);
  function O() {
    D.current++, V.current.stop(), E(!1), b(null);
  }
  A.useEffect(() => {
    c && (c.current = O);
    const g = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", g), () => {
      document.removeEventListener("visibilitychange", g), D.current++, V.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const F = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], re = F.find((g) => g.id === h) ?? F[0], Z = re.clip, we = Hv(Z), Ne = B === null ? null : we[B]?.beat ?? null, Y = Ne === null ? null : Z.events.find((g) => g.beat === Ne)?.position ?? null, he = A.useRef(null);
  Dh(he, ".melody-playing", w && Ne !== null ? String(Ne) : "", { enabled: j && k, playback: w });
  const G = Z.beats / 4, ue = [...new Map(Z.events.filter((g) => g.position).map((g) => [Xe(g.position), g.position])).values()], se = ue.map((g) => g.fret), W = ue.filter((g) => N || Y?.string === g.string && Y.fret === g.fret).map((g) => ({
    ...g,
    label: De(g.midi),
    kind: Y?.string === g.string && Y.fret === g.fret ? "playing" : Qe(g.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(ue.map((g) => g.string))],
    min: Math.min(...se),
    max: Math.max(...se),
    fixed: "box"
  };
  async function te() {
    if (w) {
      O();
      return;
    }
    l?.();
    const g = ++D.current;
    V.current.stop(), E(!0), b(null), z("");
    try {
      await V.current.playTimed(we, m, (ne) => {
        g === D.current && b(ne);
      }, () => {
        g === D.current && b(null);
      });
    } catch (ne) {
      g === D.current && z($a(ne));
    } finally {
      g === D.current && (E(!1), b(null));
    }
  }
  function S(g) {
    O(), z(""), p(g);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (g) => {
    const ne = g.currentTarget.open;
    v(ne), ne || O();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    j && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: i === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ a.jsx("h4", { children: d.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        G.toString().replace(".", ","),
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
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: F.map((g) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": re.id === g.id,
          onClick: () => S(g.id),
          children: g.name
        },
        g.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          te();
        }, children: w ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: m, onChange: (g) => {
            O(), x(Number(g.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((g, ne) => g - ne).filter((g, ne, ce) => ce.indexOf(g) === ne).map((g) => /* @__PURE__ */ a.jsxs("option", { value: g, children: [
            g,
            " BPM"
          ] }, g)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": k, onClick: () => T((g) => !g), children: k ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && B !== null ? `Nyt soi ${De(we[B].midi)} · ${ch[Y.string]}-kieli, ${Y.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(di, { area: ae, marks: W, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${re.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": N,
              onClick: () => _((g) => !g),
              children: N ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      k && /* @__PURE__ */ a.jsxs("div", { ref: he, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${re.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kieli" }),
            Z.events.map((g, ne) => /* @__PURE__ */ a.jsxs("th", { scope: "col", className: g.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ a.jsx("span", { className: "melody-bar", children: g.beat % 4 === 0 ? `T${Math.floor(g.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ a.jsx("span", { className: "melody-duration", children: g.duration === 1 ? "♩" : `${g.duration} iskua` })
            ] }, ne))
          ] }) }),
          /* @__PURE__ */ a.jsx("tbody", { children: ch.map((g, ne) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: g }),
            Z.events.map((ce, Ee) => {
              const H = ce.position?.string === ne, K = H && Ne === ce.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${ce.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${H && Qe(ce.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${g}-kieli, ${ce.position.fret}. nauha, ${De(ce.position.midi)}` : void 0,
                  children: H ? ce.position.fret : "—"
                },
                Ee
              );
            })
          ] }, ne)) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ a.jsx("p", { className: "melody-source", children: /* @__PURE__ */ a.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Ko = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [1, 2]), rf = [...new Map(Ko.flatMap((r) => r.positions[0].strings.flatMap((i, l) => i.map((c) => {
  const d = Ke(l, c);
  return [Xe(d), d];
})))).values()].sort((r, i) => r.midi - i.midi || i.string - r.string), Aa = [5, 4, 3, 2, 1, 0].flatMap((r) => rf.filter((i) => i.string === r).sort((i, l) => i.fret - l.fret)), Uo = [
  ...Aa,
  ...Aa.slice(1, -1).reverse()
], Gv = [...Uo, Aa[0]], dh = new Set(
  Ko[0].positions[0].strings.flatMap((r, i) => r.map((l) => {
    const c = Ke(i, l);
    return Xe(c);
  })).filter((r) => Ko[1].positions[0].strings.flatMap((i, l) => i.map((c) => Xe(Ke(l, c)))).includes(r))
), Wv = [
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
], af = "musiikin-kartta:skaalapolku:bridge-1-2:v1", lf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Mo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], hh = (r) => Qe(r) === 9;
function fh() {
  try {
    const r = Number(localStorage.getItem(af));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Qv() {
  try {
    const r = Number(localStorage.getItem(lf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Yv({ onBack: r, onPosition: i }) {
  const [l, c] = A.useState(fh), [d, h] = A.useState(fh), [p, m] = A.useState(!1), [x, j] = A.useState("roots"), [v, k] = A.useState(Qv), [T, N] = A.useState(null), [_, w] = A.useState(null), [E, B] = A.useState(""), b = A.useRef(new ur()), U = A.useRef(0), z = A.useRef(null), V = _ === null ? null : Uo[_];
  function D() {
    z.current?.(), U.current++, b.current.stop(), N(null), w(null);
  }
  A.useEffect(() => {
    const Y = () => {
      document.hidden && (U.current++, b.current.stop(), N(null), w(null));
    };
    return document.addEventListener("visibilitychange", Y), () => {
      document.removeEventListener("visibilitychange", Y), U.current++, b.current.stop();
    };
  }, []);
  async function O(Y) {
    z.current?.();
    const he = ++U.current;
    b.current.stop(), w(null), B(""), N(Y);
    try {
      Y === "transition" ? await b.current.play(Wv.map((G) => G.midi)) : Y === "once" ? await b.current.play(Gv.map((G) => G.midi)) : await b.current.loop(Uo.map((G) => G.midi), (G) => {
        he === U.current && w(G);
      }, v);
    } catch (G) {
      he === U.current && B($a(G));
    } finally {
      he === U.current && (N(null), w(null));
    }
  }
  function F(Y) {
    const he = Math.max(40, Math.min(140, Y));
    k(he), b.current.setLoopTempo(he);
    try {
      localStorage.setItem(lf, String(he));
    } catch {
    }
  }
  function re(Y) {
    Y > l || (D(), h(Y), m(!1), j("roots"));
  }
  function Z() {
    D();
    const Y = Math.min(4, d + 1);
    if (h(Y), m(!1), j("roots"), Y > l) {
      c(Y);
      try {
        localStorage.setItem(af, String(Y));
      } catch {
      }
    }
  }
  const we = (Y, he) => d < 2 || d === 2 && p && dh.has(he) || d === 3 && (x === "all" || x === "roots" && hh(Y)), Ne = rf.filter((Y) => we(Y.midi, Xe(Y))).map((Y) => ({
    ...Y,
    label: d < 2 || d === 2 && p || d === 3 && x === "all" ? De(Y.midi) : "A",
    kind: d < 2 && V?.string === Y.string && V?.fret === Y.fret ? "playing" : hh(Y.midi) ? "answer" : dh.has(Xe(Y)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), r();
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
        D(), i(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
        D(), i(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => re(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Mo.map((Y, he) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: he === d ? "journey-step current" : "journey-step",
        "aria-current": he === d ? "step" : void 0,
        disabled: he > l,
        onClick: () => re(he),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: he > l ? "🔒" : he < l ? "✓" : he + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: Y.title })
        ]
      },
      Y.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: Mo[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Mo[d].detail }),
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
              Aa.length,
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
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "whole",
              onClick: () => T === "whole" ? D() : void O("whole"),
              children: T === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "once",
              onClick: () => T === "once" ? D() : void O("once"),
              children: T === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "transition",
              onClick: () => T === "transition" ? D() : void O("transition"),
              children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((Y) => !Y), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => re(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Y) => /* @__PURE__ */ a.jsxs("label", { children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Y.value,
                  checked: x === Y.value,
                  onChange: () => j(Y.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: Y.name })
            ] }, Y.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => T === "once" ? D() : void O("once"), children: T === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => T === "transition" ? D() : void O("transition"), children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: T === "whole" ? V && d < 2 ? `Nyt soi ${De(V.midi, !1, !0)} · ${Zt[V.string]}-kieli, nauha ${V.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : T === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : T === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          di,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: T,
            marks: Ne,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? x === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : x === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ a.jsx(
          iu,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(ef, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Z, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ a.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => re(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => i(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => i(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsx("p", { children: l === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const tr = "musiikin-kartta:skaalapolku:v1", Na = "musiikin-kartta:skaalapolku:position-2:v1", _o = "musiikin-kartta:skaalapolku:position-3:v1", Ca = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Pa = "musiikin-kartta:skaalapolku:active-position:v1", of = "musiikin-kartta:skaalapolku:tempo:v1", ls = 75, Ho = 40, Go = 140;
function Jv() {
  try {
    const r = localStorage.getItem(of);
    if (r === null) return ls;
    const i = Number(r);
    return Number.isInteger(i) && i >= Ho && i <= Go && i % 5 === 0 ? i : ls;
  } catch {
    return ls;
  }
}
const bo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], mh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Cn(r = tr) {
  try {
    const i = Number(localStorage.getItem(r));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function Ao() {
  try {
    const r = localStorage.getItem(Pa);
    return r === "3" && Cn(Ca) === 4 ? 3 : Cn(tr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Xv() {
  try {
    return Cn(Na) === 4 && localStorage.getItem(Pa) === "bridge";
  } catch {
    return !1;
  }
}
function Zv({ onBack: r }) {
  const [i, l] = A.useState(Ao), [c, d] = A.useState(Xv), [h, p] = A.useState(() => ({
    1: Cn(tr),
    2: Cn(Na),
    3: Cn(_o)
  })), [m, x] = A.useState(() => Cn(Ao() === 3 ? _o : Ao() === 2 ? Na : tr)), j = h[i], [v, k] = A.useState(!1), [T, N] = A.useState("roots"), [_, w] = A.useState(Jv), [E, B] = A.useState(null), [b, U] = A.useState(null), [z, V] = A.useState(""), D = A.useRef(new ur()), O = A.useRef(0), F = A.useRef(null);
  function re(H) {
    const K = Math.max(Ho, Math.min(Go, H));
    w(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(of, String(K));
    } catch {
    }
  }
  function Z() {
    F.current?.(), O.current++, D.current.stop(), B(null), U(null);
  }
  A.useEffect(() => {
    const H = () => {
      document.hidden && (O.current++, D.current.stop(), B(null), U(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), O.current++, D.current.stop();
    };
  }, []);
  const we = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [i])[0].positions[0], Ne = we.strings.flatMap((H, K) => H.map((ee) => Ke(K, ee))).sort((H, K) => H.midi - K.midi || K.string - H.string), Y = [...Ne, ...Ne.slice(1, -1).reverse()], he = b === null ? null : Y[b], G = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ue = we.start, se = we.end, W = (H) => Qe(H) === 9, ae = (H) => m < 2 ? !0 : m === 2 ? v && W(H) : T === "scale" || T === "roots" && W(H), te = Ne.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: m < 2 || m === 3 && T === "scale" ? De(H.midi) : "A",
    kind: m < 2 && he?.string === H.string && he.fret === H.fret ? "playing" : W(H.midi) ? "answer" : "shape"
  }));
  async function S(H) {
    F.current?.();
    const K = ++O.current;
    D.current.stop(), U(null), V(""), B(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(Y.map((ee) => ee.midi), (ee) => {
        K === O.current && U(ee);
      }, m === 2 ? _ : ls);
    } catch (ee) {
      K === O.current && V($a(ee));
    } finally {
      K === O.current && (B(null), U(null));
    }
  }
  function g() {
    Z();
    const H = Math.min(4, m + 1);
    if (x(H), k(!1), N("roots"), H > j) {
      p((ee) => ({ ...ee, [i]: H }));
      const K = i === 1 ? tr : i === 2 ? Na : _o;
      try {
        localStorage.setItem(K, String(H));
      } catch {
      }
    }
  }
  function ne(H) {
    H > j || (Z(), x(H), k(!1), N("roots"));
  }
  function ce(H) {
    if (!(H === 2 && h[1] < 4) && !(H === 3 && Cn(Ca) < 4)) {
      Z(), d(!1), l(H), x(h[H]), k(!1), N("roots"), V("");
      try {
        localStorage.setItem(Pa, String(H));
      } catch {
      }
    }
  }
  function Ee() {
    if (!(h[2] < 4)) {
      Z(), d(!0), k(!1), V("");
      try {
        localStorage.setItem(Pa, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ a.jsx(Yv, { onBack: r, onPosition: ce }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Z(), r();
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
      se,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === 1, onClick: () => ce(1), children: "Positio 1" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 2,
          disabled: h[1] < 4,
          onClick: () => ce(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: Ee,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": i === 3,
          disabled: Cn(Ca) < 4,
          onClick: () => ce(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: bo.map((H, K) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > j,
        onClick: () => ne(K),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: K > j ? "🔒" : K < j ? "✓" : K + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: K === 4 ? `Positio ${i} harjoiteltu` : H.title })
        ]
      },
      H.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${i} harjoiteltu` : bo[m].title }),
        /* @__PURE__ */ a.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: bo[m].detail }),
      m < 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        m === 0 && /* @__PURE__ */ a.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          i === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && i === 2 && /* @__PURE__ */ a.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && i === 3 && /* @__PURE__ */ a.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ a.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ a.jsxs("p", { children: [
          i === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ a.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: _ <= Ho,
              onClick: () => re(_ - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            _,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: _ >= Go,
              onClick: () => re(_ + 5),
              children: "+ 5"
            }
          ),
          _ !== ls && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => re(ls),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": E === "loop",
              onClick: () => E === "loop" ? Z() : void S("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? Z() : void S("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? he && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${De(he.midi, !1, !0)} · ${Zt[he.string]}-kieli, nauha ${he.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: z }),
        m >= 1 && m <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          m === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => k((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              mh.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: H.value,
                    checked: T === H.value,
                    onChange: () => N(H.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: H.label })
              ] }, H.value))
            ] }),
            i !== 1 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              S("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(di, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: se, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: E, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? mh.find((H) => H.value === T).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(di, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: se, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: E, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (m === 1 || m === 2) && /* @__PURE__ */ a.jsx(
          iu,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: Z,
            stopHandleRef: F
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ a.jsx(ef, {}, i),
        /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ a.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: g, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsx("h3", { children: i === 1 ? "Valmis seuraavaan positioon" : i === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ a.jsx("p", { children: i === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : i === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
        i === 1 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => ce(2), children: "Siirry positioon 2 →" }) : i === 2 ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: Ee, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ce(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Cn(Ca) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const qv = ["ionian", "aeolian"], rs = {
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
}, uf = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", cf = "musiikin-kartta:moodipolku:active:v1", ek = (r) => {
  const i = rs[r].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, tk = (r) => [...ek(r), rs[r].positions[0]], ph = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Ta(r) {
  try {
    const i = Number(localStorage.getItem(uf(r)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function vh() {
  try {
    return localStorage.getItem(cf) === "aeolian" && Ta("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function nk({ onBack: r }) {
  const [i, l] = A.useState(vh), [c, d] = A.useState(() => ({
    ionian: Ta("ionian"),
    aeolian: Ta("aeolian")
  })), [h, p] = A.useState(() => Ta(vh())), [m, x] = A.useState(null), [j, v] = A.useState(null), [k, T] = A.useState(!1), [N, _] = A.useState("roots"), [w, E] = A.useState(""), [B, b] = A.useState(null), [U, z] = A.useState(null), V = A.useRef(new ur()), D = A.useRef(0), O = A.useRef(null), F = rs[i], re = tk(i), Z = m === "scale" && j !== null ? re[j] : null;
  function we() {
    O.current?.(), D.current++, V.current.stop(), x(null), v(null);
  }
  A.useEffect(() => {
    const g = () => {
      document.hidden && (D.current++, V.current.stop(), x(null), v(null));
    };
    return document.addEventListener("visibilitychange", g), () => {
      document.removeEventListener("visibilitychange", g), D.current++, V.current.stop();
    };
  }, []);
  async function Ne(g, ne, ce = !1) {
    O.current?.();
    const Ee = ++D.current;
    V.current.stop(), v(null), E(""), x(g);
    try {
      const H = ce ? await V.current.loop(ne, void 0, 75) : await V.current.play(ne, (K) => {
        Ee === D.current && g === "scale" && v(K);
      });
      return Ee === D.current && H;
    } catch (H) {
      return Ee === D.current && E($a(H)), !1;
    } finally {
      Ee === D.current && (x(null), v(null));
    }
  }
  function Y(g) {
    g > c[i] || (we(), p(g), b(null), z(null), T(!1), _("roots"), E(""));
  }
  function he() {
    we();
    const g = Math.min(5, h + 1);
    if (p(g), b(null), z(null), T(!1), _("roots"), g > c[i]) {
      d((ne) => ({ ...ne, [i]: g }));
      try {
        localStorage.setItem(uf(i), String(g));
      } catch {
      }
    }
  }
  function G(g) {
    if (!(g === "aeolian" && c.ionian < 5)) {
      we(), l(g), p(c[g]), b(null), z(null), T(!1), _("roots"), E("");
      try {
        localStorage.setItem(cf, g);
      } catch {
      }
    }
  }
  async function ue() {
    we(), z(null), b(null);
    const g = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ne("comparison", rs[g].phrase) && b(g);
  }
  const se = (g) => Qe(g) === F.tonic, W = F.positions.filter((g) => h < 2 ? !0 : h === 2 ? k && se(g.midi) : h === 4 ? N === "all" || N === "roots" && se(g.midi) : !1).map((g) => ({
    ...g,
    label: h === 2 || h === 4 && N === "roots" ? F.tonicName : De(g.midi),
    kind: Z?.string === g.string && Z.fret === g.fret ? "playing" : se(g.midi) ? "answer" : "shape"
  })), ae = [...new Set(F.positions.map((g) => g.string))], te = Math.min(...F.positions.map((g) => g.fret)), S = Math.max(...F.positions.map((g) => g.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      we(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      qv.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": i === "ionian", onClick: () => G("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": i === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => G("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ a.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      ph.map((g, ne) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === ne ? "journey-step current" : "journey-step",
          "aria-current": h === ne ? "step" : void 0,
          disabled: ne > c[i],
          onClick: () => Y(ne),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: ne > c[i] ? "🔒" : ne < c[i] ? "✓" : ne + 1 }),
            /* @__PURE__ */ a.jsx("span", { children: g })
          ]
        },
        g
      )),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: c[i] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => Y(5),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: c[i] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ a.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : ph[h] }),
        /* @__PURE__ */ a.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      h === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
              disabled: m !== null,
              onClick: () => {
                ue();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          B !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ne("comparison", rs[B].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        B !== null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => z("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => z("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ a.jsxs("p", { role: "status", children: [
            U === B ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            rs[B].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([g, ne]) => /* @__PURE__ */ a.jsxs("label", { children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: g,
                checked: N === g,
                onChange: () => _(g)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: ne })
          ] }, g))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => T((g) => !g), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? we() : void Ne("scale", re.map((g) => g.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? we() : void Ne("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && m === "scale" && Z && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        De(Z.midi, !1, !0),
        " · ",
        Zt[Z.string],
        "-kieli, nauha ",
        Z.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ a.jsx(
        di,
        {
          area: { strings: ae, min: te, max: S, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
        iu,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: we,
          stopHandleRef: O
        },
        `nooa:${h}`
      ),
      w && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: w }),
      h < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: he, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => Y(2), children: "Kertaa muistiharjoitus" }),
        i === "ionian" && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => G("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        i === "aeolian" && /* @__PURE__ */ a.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function ik({ onBack: r }) {
  const [i, l] = A.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(Zv, { onBack: () => l(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(nk, { onBack: () => l(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ a.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ a.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => l("pentatonic"), children: [
        /* @__PURE__ */ a.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ a.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ a.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ a.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => l("modes"), children: [
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
const Zs = [0, 2, 4, 5, 7, 9, 11], Sa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function sk({ onBack: r }) {
  const [i, l] = A.useState(0), [c, d] = A.useState([]), [h, p] = A.useState(!1), [m, x] = A.useState(""), [j, v] = A.useState(0), k = i >= Zs.length, T = Zs[Math.min(i, Zs.length - 1)], N = hs(Sa.strings, Sa.min, Sa.max).filter((V) => Qe(V.midi) === T), _ = N.filter((V) => !c.includes(Xe(V))), w = _.length === 0 && !k, E = !w && h ? _[0] : void 0, B = [
    ...N.filter((V) => c.includes(Xe(V))).map((V) => ({ ...V, kind: "answer", label: De(V.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function b(V) {
    if (k || w) return;
    const D = Xe(V);
    if (Qe(V.midi) !== T) {
      v((re) => re + 1), x(`Valitsit sävelen ${De(V.midi)}. Etsi ${De(T)}.`);
      return;
    }
    if (c.includes(D)) {
      x("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, D];
    d(O), p(!1);
    const F = N.length - O.length;
    x(F ? `Oikein! ${De(T)} löytyi ${Zt[V.string]}-kieleltä (${bi(V.fret)}). Vielä ${F}.` : `Löysit kaikki ${N.length} ${De(T)}-säveltä tällä alueella.`);
  }
  function U() {
    w && (l((V) => V + 1), d([]), p(!1), x(""));
  }
  function z() {
    l(0), d([]), p(!1), x(""), v(0);
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ a.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: k ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
          De(T),
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
        De(T),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        N.length
      ] }),
      /* @__PURE__ */ a.jsx(
        di,
        {
          area: Sa,
          marks: B,
          onAnswer: b,
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
          children: m
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !w && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((V) => !V),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: U, children: i === Zs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const rk = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Po = ["C", "G", "D", "Em"], kh = ["C", "G", "D", "Em", "Am", "E", "A"], ak = { min: 0, max: 3, fixed: "" };
function yh(r) {
  const i = [...r];
  for (let l = i.length - 1; l > 0; l--) {
    const c = Math.floor(Math.random() * (l + 1));
    [i[l], i[c]] = [i[c], i[l]];
  }
  return i;
}
function lk({ onBack: r }) {
  const [i, l] = A.useState(4), [c, d] = A.useState(() => yh(Po)), [h, p] = A.useState(0), [m, x] = A.useState(null), [j, v] = A.useState([]), [k, T] = A.useState(0), N = h >= c.length, _ = rk[c[Math.min(h, c.length - 1)]], w = i === 4 ? Po : kh, E = _.frets.flatMap((O, F) => O === null ? [] : [F]), B = _.frets.flatMap((O, F) => O === null ? [F] : []), b = { ...ak, strings: E }, U = _.frets.flatMap((O, F) => O === null ? [] : [{
    ...Ke(F, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function z(O = i) {
    l(O), d(yh(O === 4 ? Po : kh)), p(0), x(null), v([]), T(0);
  }
  function V(O) {
    m || N || j.includes(O) || (O === _.name ? x(O) : (v((F) => [...F, O]), T((F) => F + 1)));
  }
  function D() {
    m && (p((O) => O + 1), x(null), v([]));
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
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: N ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Tunnistit kaikki ",
        i,
        " sointua. ",
        k ? `Vääriä valintoja yhteensä ${k}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: () => z(), children: "Harjoittele uudelleen" }) })
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
        di,
        {
          area: b,
          marks: U,
          mutedStrings: B,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((O) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : j.includes(O) ? "wrong" : "",
          disabled: !!m || j.includes(O),
          "aria-pressed": m === O,
          onClick: () => V(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: m ? "feedback good" : j.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${_.name}-sointu.` : j.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: D, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (r, i) => ({ first: r, ...i ? { second: i } : {} }), os = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], us = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], cs = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], df = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], ok = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
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
    bars: [...us(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: cs,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
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
    bars: [...us(), ke("E♭"), ke("F")],
    lyrics: cs
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
    bars: os(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...us(), ke("E♭", "F"), ke("Gm")],
    lyrics: cs
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
], uk = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
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
    bars: [...us(), ke("E♭"), ke("E♭")],
    lyrics: cs
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
    bars: [...us(), ke("E♭"), ke("F")],
    lyrics: cs
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
    bars: os(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...us(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: cs
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], fs = {
  acoustic: ok,
  normal: uk
}, ck = "normal", Wo = "yksi-sointu-kaksi-askelta", su = {
  acoustic: Wo + "-akustinen",
  normal: Wo + "-normaali"
}, hf = (r) => r === Wo || Object.values(su).includes(r ?? "");
function dk(r) {
  const i = Object.entries(su).find(([, l]) => l === r);
  return i ? i[0] : null;
}
const hk = (r) => su[r], gh = (r) => {
  const i = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
};
function ru(r, i = "acoustic") {
  const l = fs[i], c = l[r], d = l[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function au(r, i = "acoustic") {
  const l = fs[i], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let k = 1; k < l.length && !(c < l[k].start); k++)
    d = k;
  const h = l[d];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= lr(d, p + 1, i); )
    p++;
  const m = lr(d, p, i), x = ru(d, i) / 4;
  let j = 1;
  for (; j < 4 && c >= m + j * x; ) j++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: j,
    chord: v.second && j >= 3 ? v.second : v.first
  };
}
function lr(r, i, l = "acoustic") {
  return fs[l][r].start + ru(r, l) * i;
}
function fk(r) {
  return fs[r].flatMap((i, l) => i.bars.flatMap((c, d) => {
    const h = lr(l, d, r), p = { section: i, sectionIndex: l, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const m = ru(l, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + m }];
  }));
}
function mk(r, i = "acoustic", l = !1) {
  const c = fs[i], d = au(r, i), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", m = fk(i), x = m.findIndex((N) => N.sectionIndex === d.sectionIndex && N.barIndex === d.barIndex && N.part === p), v = [
    ...m.slice(x + 1).map((N) => ({ ...N, wrapped: !1 })),
    ...l ? m.slice(0, x + 1).map((N) => ({ ...N, wrapped: !0 })) : []
  ].find((N) => N.chord !== d.chord) ?? null;
  let k = null;
  const T = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!T || l)) {
    const N = T ? 0 : d.sectionIndex + 1, _ = c[N], w = _.bars[0].first;
    k = {
      section: _,
      sectionIndex: N,
      firstChord: w,
      wrapped: T,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: k };
}
function pk(r) {
  const i = r.filter((m) => m.lyrics?.length), l = (m) => 1 + (m.lyrics?.length ?? 0), c = i.reduce((m, x) => m + l(x), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= i.length; m++) {
    const x = Math.abs(c - 2 * p);
    (x < h || x === h && p >= c - p) && (d = m, h = x), m < i.length && (p += l(i[m]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const Qo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], ff = "musiikin-kartta:kappale-sointuvihjeet:v1", Ma = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, xh = {
  showChords: !0,
  level: 0,
  fadeOrder: Ma
};
function wa(r, i) {
  return !i.showChords || i.level >= i.fadeOrder[r];
}
function jh(r) {
  if (!r) return { ...xh, fadeOrder: { ...Ma } };
  try {
    const i = JSON.parse(r);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const l = i, c = l.level, d = { ...Ma }, h = l.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of Qo)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof l.showChords == "boolean" ? l.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...xh, fadeOrder: { ...Ma } };
  }
}
function vk() {
  try {
    return jh(localStorage.getItem(ff));
  } catch {
    return jh(null);
  }
}
const kk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function yk(r) {
  const i = kk.exec(r.trim());
  if (!i) return r;
  const [, l, , c = "", d = ""] = i;
  return l + "5" + c + d;
}
const gk = (r, i) => i === "power" ? yk(r) : r, xk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], jk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Sk({ version: r, position: i, loop: l = !1, onSeek: c }) {
  const [d, h] = A.useState(vk), [p, m] = A.useState(null), [x, j] = A.useState(!1), [v, k] = A.useState("full"), T = (G) => gk(G, v), N = fs[r], _ = au(i, r), { section: w, sectionIndex: E, barIndex: B, beat: b, chord: U } = _, z = b >= 3 && w.bars[B].second ? "second" : "first", V = (G, ue, se) => `${r}:${G}:${ue}:${se}`, D = (G, ue) => V(w.id, G, ue), O = D(B, z), F = wa(U, d), re = F && p === O, Z = (G, ue, se) => !wa(G, d) || p === D(ue, se), we = d.showChords && d.level === 0, Ne = Qo.filter((G) => wa(G, d)).length, { nextSection: Y } = mk(i, r, l), he = !!Y && wa(Y.firstChord, d);
  return A.useEffect(() => {
    m(null);
  }, [O]), A.useEffect(() => {
    try {
      localStorage.setItem(ff, JSON.stringify(d));
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
            onChange: (G) => {
              h((ue) => ({ ...ue, showChords: G.target.checked })), m(null);
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
            checked: x,
            onChange: (G) => j(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, ue]) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: G,
              checked: v === G,
              onChange: () => k(G)
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: ue })
        ] }, G))
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (G) => {
              const ue = Number(G.target.value);
              h((se) => ({ ...se, level: ue })), m(null);
            },
            children: xk.map((G) => /* @__PURE__ */ a.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ne === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ne}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Qo.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
        G,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (ue) => {
              const se = Number(ue.target.value);
              h((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [G]: se } })), m(null);
            },
            children: jk.map((ue) => /* @__PURE__ */ a.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, G)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ a.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (G) => {
              const ue = N.find((se) => se.id === G.target.value);
              ue && c(ue.start);
            },
            children: N.map((G) => /* @__PURE__ */ a.jsxs("option", { value: G.id, children: [
              gh(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          F && !re ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: F && !re ? "?" : T(U) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            w.title,
            ", tahti ",
            B + 1,
            ", isku ",
            b,
            "/4"
          ] }),
          F && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(re ? null : O),
              children: re ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Y && /* @__PURE__ */ a.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ a.jsx("strong", { children: he ? "?" : T(Y.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((G, ue) => {
      const se = ue === B, W = se && (b < 3 || !G.second), ae = se && b >= 3 && !!G.second, te = Z(G.first, ue, "first"), S = G.second ? Z(G.second, ue, "second") : !1, g = (te ? T(G.first) : "sointu piilossa") + (G.second ? " " + (S ? T(G.second) : "sointu piilossa") : "") + (we && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (we && G.possibleChord ? " (" + T(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (se ? " active" : ""),
          "aria-pressed": se,
          "aria-label": "Tahti " + (ue + 1) + ": " + g + ". Siirry kohtaan " + gh(lr(E, ue, r)),
          onClick: () => c(lr(E, ue, r)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: W && te ? "now" : "", children: te ? T(G.first) : "?" }),
              G.second && /* @__PURE__ */ a.jsx("strong", { className: ae && S ? "now" : "", children: S ? T(G.second) : "?" })
            ] }),
            we && G.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            we && G.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              T(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    x ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: pk(N).map((G, ue) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: G.map((se) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: se.title }),
        se.lyrics?.map((W, ae) => /* @__PURE__ */ a.jsx("p", { children: W }, ae))
      ] }, se.id)) }, ue)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((G, ue) => /* @__PURE__ */ a.jsx("p", { children: G }, ue))
    ] }),
    we && w.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const La = 7, wk = { name: "bluesasteikko", base: Ue.SCALES.mp.base, add: [[6, "♭5"]] }, Lo = [
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
    scale: wk,
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
function Ek(r) {
  return Ue.scaleNotes(r).map(([i, l]) => Ue.noteName(La, i, l));
}
const mf = (r) => r === "pentatonic" ? 5 : 7;
function Nk(r, i, l) {
  const c = i.filter((m) => m >= 1 && m <= mf(r.system)), d = Ue.fingeringBoxes(La, r.scale, r.system, c, l);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([m]) => (La + m) % 12), p = (m, x) => x >= 0 && x <= l && h.includes((Ue.OPEN_PITCHES[m] + x) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((x) => {
    const j = x.strings.map((k, T) => {
      if (!k.length) return k;
      const N = k[k.length - 1];
      return p(T, N + 1) ? [...k.slice(0, -1), N + 1] : k;
    }), v = j.flat();
    return { ...x, strings: j, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Sh = 17;
function Ck({ open: r }) {
  const [i, l] = A.useState("mp"), [c, d] = A.useState({ pentatonic: [], "3nps": [] }), [h, p] = A.useState(!1), [m, x] = A.useState(!1), j = A.useRef(null), v = Lo.find((E) => E.id === i) ?? Lo[0], k = c[v.system], T = Nk(v, k, Sh), N = T.some((E) => E.positions.length > 0), _ = Ue.renderBoard(La, v.scale, Sh, {
    automatic: !0,
    boxes: T,
    onlyBoxNotes: N && h,
    label: v.title + (k.length ? ", " + k.map((E) => "boksi " + E).join(", ") : "")
  });
  A.useEffect(() => {
    const E = j.current;
    !E || !r || T.length === 1 && Ue.revealPositions(E, ".box-highlight");
  }, [_, r]);
  function w(E, B) {
    d((b) => ({ ...b, [v.system]: B ? [...b[v.system], E].sort((U, z) => U - z) : b[v.system].filter((U) => U !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (E) => l(E.target.value), children: Lo.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: Ek(v.scale).join(" · ") })
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
        dangerouslySetInnerHTML: { __html: _ }
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
    /* @__PURE__ */ a.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: (E) => {
        E.preventDefault(), x((B) => !B);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ a.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: mf(v.system) }, (E, B) => B + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: k.includes(E),
            onChange: (B) => w(E, B.target.checked)
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
            checked: N && h,
            disabled: !N,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: N ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const pt = ["backing", "guitar", "vocals"], pf = 0.05, vf = 5e-3;
class Tk {
  constructor(i, l = {}) {
    this.context = i, this.fetchImpl = l.fetch ?? ((h, p) => fetch(h, p)), this.now = l.now ?? (() => performance.now());
    const c = {}, d = {};
    for (const h of pt)
      c[h] = i.createGain(), d[h] = i.createGain(), c[h].connect(d[h]), d[h].connect(i.destination);
    this.inputs = c, this.levels = d;
  }
  context;
  state = "tyhja";
  error = "";
  events = [];
  /** Kutsutaan, kun kappale soi loppuun ilman looppia. */
  onEnded;
  onStateChange;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  inputs;
  levels;
  buffers = {};
  sources = null;
  when = 0;
  offset = 0;
  looping = !1;
  /** Loop on ollut päällä tämän soiton aikana, joten kohta lasketaan loopin pituuden jakojäännöksenä. */
  wrapped = !1;
  loadToken = 0;
  controller = null;
  fetchImpl;
  now;
  record(i, l = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...l }), this.events.length > 500 && this.events.shift();
  }
  setState(i) {
    this.state !== i && (this.state = i, this.onStateChange?.(i));
  }
  /** Raitojen yhteinen pituus (lyhimmän raidan kesto). 0, jos puskureita ei ole. */
  get duration() {
    const i = pt.map((l) => this.buffers[l]?.duration ?? 0);
    return i.every((l) => l > 0) ? Math.min(...i) : 0;
  }
  get playing() {
    return this.sources !== null;
  }
  /** Puskurien todellinen koko tavuina (näytteet × kanavat × 4). */
  get bufferBytes() {
    return pt.reduce((i, l) => {
      const c = this.buffers[l];
      return i + (c ? c.length * c.numberOfChannels * 4 : 0);
    }, 0);
  }
  /**
   * Lataa ja purkaa yhden version kolme raitaa. Edellisen version puskurit ja lähteet vapautetaan ensin.
   * Purku tehdään raita kerrallaan, jotta purun aikainen huippumuisti pysyy pienempänä.
   */
  async load(i) {
    this.release();
    const l = ++this.loadToken, c = new AbortController();
    this.controller = c;
    const d = () => l === this.loadToken;
    this.error = "", this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = await Promise.all(pt.map(async (x) => {
        const j = await this.fetchImpl(i[x], { signal: c.signal });
        if (!j.ok) throw new Error(`${x}: HTTP ${j.status}`);
        const v = await j.arrayBuffer();
        return this.record("ladattu", { track: x, bytes: v.byteLength, kesto: Math.round(this.now() - h) }), v;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const m = {};
      for (const [x, j] of pt.entries()) {
        const v = this.now();
        this.record("purku-alku", { track: j });
        const k = await this.context.decodeAudioData(p[x]);
        if (!d()) return "peruttu";
        m[j] = k, this.record("purettu", {
          track: j,
          kesto: Math.round(this.now() - v),
          length: k.length,
          channels: k.numberOfChannels,
          sampleRate: k.sampleRate,
          bytes: k.length * k.numberOfChannels * 4
        });
      }
      return this.buffers = m, this.controller = null, this.record("valmis", { kesto: Math.round(this.now() - h), bytes: this.bufferBytes, duration: this.duration }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.buffers = {}, this.error = p instanceof Error ? p.message : String(p), this.record("virhe", { message: this.error }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai purun. Valmiit puskurit säilyvät. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja vapauttaa puskurit (versionvaihto, soittimesta poistuminen). */
  release() {
    this.cancel(), this.stopSources();
    const i = this.duration > 0;
    this.buffers = {}, this.offset = 0, i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös raitojen tasosolmut. */
  dispose() {
    this.release();
    for (const i of pt)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at samalla ajoitushetkellä. Edelliset lähteet pysäytetään.
   * Palauttaa false, jos puskureita ei ole.
   */
  play(i = this.offset) {
    const l = this.duration;
    if (this.state !== "valmis" || l <= 0) return !1;
    this.stopSources();
    const c = Math.max(0, Math.min(i, l - 1e-3)), d = this.context.currentTime + pf, h = pt.map((p) => {
      const m = this.context.createBufferSource();
      return m.buffer = this.buffers[p], m.loop = this.looping, m.loopStart = 0, m.loopEnd = l, m.connect(this.inputs[p]), m.start(d, c), m;
    });
    return h[0].onended = () => {
      this.sources === h && (this.sources = null, this.offset = l, this.record("loppu"), this.onEnded?.());
    }, this.sources = h, this.when = d, this.offset = c, this.wrapped = this.looping, this.record("soitto", { when: d, offset: c, contextTime: this.context.currentTime }), !0;
  }
  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause() {
    const i = this.position();
    return this.sources && this.record("tauko", { at: i }), this.stopSources(), this.offset = i, i;
  }
  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(i) {
    this.sources ? this.play(i) : this.offset = Math.max(0, Math.min(i, Math.max(0, this.duration - 1e-3))), this.record("kelaus", { at: i });
  }
  /** Loop kaikille raidoille yhtä aikaa: sama alku (0) ja loppu (yhteinen pituus). */
  setLoop(i) {
    this.looping = i, i && (this.wrapped = !0);
    for (const l of this.sources ?? []) l.loop = i;
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, l) {
    const c = this.levels[i].gain;
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(l, this.context.currentTime, vf) : c.value = l;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä c (renderöinnin aika). */
  position(i = this.context.currentTime) {
    if (!this.sources) return this.offset;
    const l = this.duration, c = Math.max(0, i - this.when), d = this.offset + c;
    return l <= 0 ? d : this.wrapped ? d % l : Math.min(d, l);
  }
  /**
   * Kuuluva kohta nyt. AudioContext.currentTime on renderöinnin aika, ei kaiuttimen: getOutputTimestamp kertoo,
   * mikä kontekstin hetki on parhaillaan ulostulossa. Ilman sitä vähennetään ilmoitetut viiveet.
   */
  audiblePosition(i = this.now()) {
    const l = this.context.getOutputTimestamp?.();
    let c;
    return l && typeof l.contextTime == "number" && typeof l.performanceTime == "number" && l.contextTime > 0 ? c = l.contextTime + (i - l.performanceTime) / 1e3 : c = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(c, this.context.currentTime));
  }
  stopSources() {
    const i = this.sources;
    this.sources = null;
    for (const l of i ?? []) {
      l.onended = null;
      try {
        l.stop();
      } catch {
      }
      l.disconnect();
    }
  }
}
function Mk(r) {
  const i = globalThis.navigator?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
  const l = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!l) throw new Error("Web Audio API puuttuu");
  if (r)
    try {
      return new l(r);
    } catch {
    }
  return new l();
}
const Mi = 1152, _k = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], bk = [44100, 48e3, 32e3];
function Ak(r) {
  let i = 0;
  for (r.length >= 10 && r[0] === 73 && r[1] === 68 && r[2] === 51 && (i = 10 + ((r[6] & 127) << 21 | (r[7] & 127) << 14 | (r[8] & 127) << 7 | r[9] & 127) + (r[5] & 16 ? 10 : 0)); i + 4 <= r.length && !(r[i] === 255 && (r[i + 1] & 224) === 224); ) i++;
  const l = [];
  let c = 0, d = 0, h = i;
  for (; h + 4 <= r.length && r[h] === 255 && (r[h + 1] & 224) === 224; ) {
    const N = r[h + 1], _ = r[h + 2], w = r[h + 3];
    if ((N >> 3 & 3) !== 3 || (N >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const E = _k[_ >> 4 & 15] * 1e3, B = bk[_ >> 2 & 3];
    if (!E || !B) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${h}`);
    const b = Math.floor(144 * E / B) + (_ >> 1 & 1);
    if (h + b > r.length) break;
    if (!c)
      c = B, d = (w >> 6 & 3) === 3 ? 1 : 2;
    else if (B !== c) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    l.push(h), h += b;
  }
  if (!l.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, m = 0, x = 0;
  const j = l[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...r.subarray(j, j + 4));
  if (v === "Xing" || v === "Info") {
    x = 1;
    const N = r[j + 7], _ = j + 8 + (N & 1 ? 4 : 0) + (N & 2 ? 4 : 0) + (N & 4 ? 100 : 0) + (N & 8 ? 4 : 0), w = r.subarray(_, _ + 4);
    if (_ + 24 <= l[1] && w.length === 4 && [...w].every((E) => E >= 32 && E < 127)) {
      const E = _ + 21;
      p = r[E] << 4 | r[E + 1] >> 4, m = (r[E + 1] & 15) << 8 | r[E + 2];
    }
  }
  const k = Uint32Array.from(l.slice(x)), T = Math.max(0, k.length * Mi - p - m);
  return { sampleRate: c, channels: d, frameOffsets: k, dataEnd: h, delay: p, padding: m, length: T };
}
const kf = 2, Pk = 1;
function wh(r, i, l, c = 0) {
  const d = i + r.delay, h = d + l, p = r.frameOffsets.length, m = Math.max(0, Math.floor(d / Mi) - kf), x = Math.min(p, Math.ceil(h / Mi) + Pk + Math.ceil(c / Mi));
  return { firstFrame: m, endFrame: x, skip: d - m * Mi + c };
}
const Lk = [[100, 160], [1e3, 1060], [3e3, 3060]], nr = 2048, Fn = (kf + 1) * Mi;
function yf(r) {
  if (r.length < Fn + nr) return !1;
  let i = 0;
  for (let l = Fn; l < Fn + nr; l++) i += r[l] * r[l];
  return i >= 1e-6;
}
function Rk(r, i, l, c, d = 1700) {
  if (!yf(i)) return null;
  const h = c * Mi - l.delay;
  let p = null, m = 1 / 0;
  for (let j = 0; j <= d; j++) {
    const v = h - j;
    if (v + Fn < 0 || v + Fn + nr > r.length) continue;
    let k = 0;
    for (let T = Fn; T < Fn + nr && k < m; T += 8) k = Math.max(k, Math.abs(i[T] - r[v + T]));
    k < m && (m = k, p = j);
  }
  if (p === null) return null;
  let x = 0;
  for (let j = Fn; j < Fn + nr; j++) x = Math.max(x, Math.abs(i[j] - r[h - p + j]));
  return x <= 1e-4 ? p : null;
}
function Ro(r, i, l) {
  const c = l.endFrame < i.frameOffsets.length ? i.frameOffsets[l.endFrame] : i.dataEnd;
  return r.slice(i.frameOffsets[l.firstFrame], c);
}
const Ok = 10, Eh = 4, $k = 6, Ik = 400, Fk = 256, Dk = 480;
class Nh extends Error {
}
class Ch extends Error {
}
const gf = (r, i) => i ? gf(i, r % i) : r;
class Oo {
  constructor(i, l = {}) {
    this.context = i, this.fetchImpl = l.fetch ?? ((h, p) => fetch(h, p)), this.now = l.now ?? (() => performance.now()), this.setIntervalImpl = l.setInterval ?? ((h, p) => setInterval(h, p)), this.clearIntervalImpl = l.clearInterval ?? ((h) => clearInterval(h)), this.decoderFor = l.decoderFor;
    const c = {}, d = {};
    for (const h of pt)
      c[h] = i.createGain(), d[h] = i.createGain(), c[h].connect(d[h]), d[h].connect(i.destination);
    this.inputs = c, this.levels = d;
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
  pumping = !1;
  pumpQueued = !1;
  timer = null;
  fetchImpl;
  now;
  setIntervalImpl;
  clearIntervalImpl;
  decoderFor;
  record(i, l = {}) {
    this.events.push({ kind: i, ms: Math.round(this.now()), ...l }), this.events.length > 500 && this.events.shift();
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
    return this.slots.reduce((i, l) => i + pt.reduce((c, d) => {
      const h = l.buffers[d];
      return c + h.length * h.numberOfChannels * 4;
    }, 0), 0);
  }
  /** Ladatut pakatut MP3-tavut. */
  get compressedBytes() {
    return this.data ? pt.reduce((i, l) => i + this.data[l].bytes.byteLength, 0) : 0;
  }
  /** Lataa yhden version kolme MP3:a ja purkaa ensimmäisen palan valmiiksi. Edellinen versio vapautetaan ensin. */
  async load(i) {
    this.release();
    const l = ++this.loadToken, c = new AbortController();
    this.controller = c;
    const d = () => l === this.loadToken;
    this.error = "", this.errorKind = null, this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = await Promise.all(pt.map(async (N) => {
        const _ = await this.fetchImpl(i[N], { signal: c.signal });
        if (!_.ok) throw new Error(`${N}: HTTP ${_.status}`);
        const w = new Uint8Array(await _.arrayBuffer());
        return this.record("ladattu", { track: N, bytes: w.byteLength, kesto: Math.round(this.now() - h) }), w;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const m = {};
      if (pt.forEach((N, _) => {
        m[N] = { bytes: p[_], layout: Ak(p[_]) };
      }), new Set(pt.map((N) => m[N].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const j = m.backing.layout.sampleRate, v = Math.max(...pt.map((N) => m[N].layout.channels));
      (j !== this.rate || v !== this.channels) && (this.slots = []), this.rate = j, this.channels = v;
      const k = this.grid;
      if (k > Dk) throw new Ch(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${j} Hz:n raitojen näytetarkkaan paloitukseen`);
      if (this.length = Math.floor(Math.min(...pt.map((N) => m[N].layout.length)) / k) * k, this.data = m, this.gen++, j !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: j, konteksti: this.context.sampleRate, ruudukko: k }), this.decoderDelay === null && await this.calibrate(m, d), !d()) return "peruttu";
      const T = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!T) throw new Error("Puskurialtaassa ei ole tilaa");
      return this.controller = null, this.record("valmis", {
        kesto: Math.round(this.now() - h),
        bytes: this.bufferBytes,
        compressed: this.compressedBytes,
        duration: this.duration,
        sampleRate: j
      }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.data = null, this.length = 0, this.error = p instanceof Error ? p.message : String(p), this.errorKind = p instanceof Nh ? "kalibrointi" : p instanceof Ch ? "naytetaajuus" : "lataus", this.record("virhe", { message: this.error, laji: this.errorKind }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai ensimmäisen palan purun. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja unohtaa version (versionvaihto). Allas säilyy uudelleenkäyttöä varten. */
  release() {
    this.cancel(), this.stopSession();
    const i = this.data !== null;
    this.data = null, this.length = 0, this.offset = 0, this.gen++;
    for (const l of this.slots)
      l.ready = !1, l.gen = -1;
    i && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös altaan ja raitojen tasosolmut. AudioContextin sulkee omistaja. */
  dispose() {
    this.release(), this.slots = [];
    for (const i of pt)
      this.inputs[i].disconnect(), this.levels[i].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at. Jos kohdan pala on valmiina, ääni alkaa START_LEAD_SECONDS:n päästä,
   * muuten heti kun pala on purettu. Palauttaa false, jos kappaletta ei ole ladattu.
   */
  play(i = this.offset) {
    if (this.state !== "valmis" || this.length <= 0) return !1;
    this.stopSession();
    const l = this.grid, c = Math.max(0, Math.min(Math.round(i * this.rate / l) * l, this.length - l));
    return this.session = { id: ++this.sessionId, items: [], nextFrame: null, nextTimeline: c, ending: !1 }, this.offset = c / this.rate, this.timer = this.setIntervalImpl(() => {
      this.pump();
    }, Ik), this.pump(), !0;
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
    const l = this.session;
    if (!l) return;
    if (i) {
      l.ending = !1, this.pump();
      return;
    }
    const c = this.context.currentTime * this.context.sampleRate, d = l.items.findIndex((h, p) => p > 0 && h.timelineStart === 0 && h.frame > c);
    if (d > 0) {
      const h = l.items.splice(d);
      for (const p of h) this.stopItem(p);
      l.nextFrame = h[0].frame, l.nextTimeline = this.length;
    }
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(i, l) {
    const c = this.levels[i].gain;
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(l, this.context.currentTime, vf) : c.value = l;
  }
  level(i) {
    return this.levels[i].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä contextTime: se pala, jonka ajastettu alku on viimeksi ohitettu. */
  position(i = this.context.currentTime) {
    const l = this.session;
    if (!l || !l.items.length) return this.offset;
    const c = i * this.context.sampleRate;
    let d = l.items[0];
    for (const p of l.items)
      if (p.frame <= c) d = p;
      else break;
    if (c <= d.frame) return d.timelineStart / this.rate;
    const h = Math.min((c - d.frame) * this.rate / this.context.sampleRate, d.length);
    return Math.min(d.timelineStart + h, this.length) / this.rate;
  }
  /** Kuuluva kohta nyt (kuten D1): getOutputTimestamp, tai kontekstin kello miinus ilmoitetut viiveet. */
  audiblePosition(i = this.now()) {
    const l = this.context.getOutputTimestamp?.();
    let c;
    return l && typeof l.contextTime == "number" && typeof l.performanceTime == "number" && l.contextTime > 0 ? c = l.contextTime + (i - l.performanceTime) / 1e3 : c = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(c, this.context.currentTime));
  }
  /** Purkaa aikajanan näytteet [start, start + length) uusiin taulukoihin (testejä ja tarkistuksia varten, ei altaaseen). */
  async readRange(i, l, c) {
    const d = this.data?.[i];
    if (!d) throw new Error("Kappaletta ei ole ladattu");
    const h = wh(d.layout, l, c, this.decoderDelay ?? 0), p = await this.decoder().decodeAudioData(Ro(d.bytes, d.layout, h).buffer);
    return Array.from({ length: p.numberOfChannels }, (m, x) => p.getChannelData(x).slice(h.skip, h.skip + c));
  }
  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan (Apple 0, Chromiumin FFmpeg 529
   * näytettä). Kokeillaan ikkunoita ja raitoja, kunnes löytyy ääntä ja bittitarkka vastaavuus. Jos ei löydy, lataus
   * päättyy hallittuun virheeseen eikä viivettä arvata (väärä arvo siirtäisi koko kappaleen).
   */
  async calibrate(i, l) {
    const c = this.decoder(), d = [], h = [];
    for (const p of pt) {
      const m = i[p].layout.frameOffsets.length, x = Lk.filter(([, j]) => m > j + 2);
      if (!x.length && m >= 16) {
        const j = Math.max(4, Math.floor(m / 3));
        x.push([j, Math.min(m - 2, j + 60)]);
      }
      for (const [j, v] of x) h.push([p, j, v]);
    }
    h.sort((p, m) => p[2] - m[2]);
    for (const [p, m, x] of h) {
      const { bytes: j, layout: v } = i[p], k = await c.decodeAudioData(Ro(j, v, { firstFrame: m, endFrame: x }).buffer);
      if (!l()) return;
      if (!yf(k.getChannelData(0))) {
        d.push(`${p}@${m}: hiljainen`);
        continue;
      }
      const T = await c.decodeAudioData(j.slice(0, v.frameOffsets[x]).buffer);
      if (!l()) return;
      const N = Rk(T.getChannelData(0), k.getChannelData(0), v, m);
      if (N !== null) {
        this.decoderDelay = N, this.record("kalibroitu", { track: p, kehys: m, dekooderiviive: N });
        return;
      }
      d.push(`${p}@${m}: ei bittitarkkaa vastaavuutta`);
    }
    throw this.record("kalibrointi-epaonnistui", { yritykset: d }), new Nh("Selaimen MP3-purkua ei voitu kohdistaa aikajanaan");
  }
  decoder() {
    return this.rate === this.context.sampleRate ? this.context : this.decoderFor ? this.decoderFor(this.rate) : new OfflineAudioContext(1, 1, this.rate);
  }
  /** Kohdistusruudukko MP3-näytteinä: 1, kun taajuudet ovat samat; muuten pienin pituus, joka on kokonainen kontekstin kehysmäärä. */
  get grid() {
    const i = Math.round(this.context.sampleRate);
    return this.rate && i !== this.rate ? this.rate / gf(this.rate, i) : 1;
  }
  get segmentLength() {
    const i = this.grid;
    return Math.floor(Math.round(Ok * this.rate) / i) * i;
  }
  /** Vapaa allaspaikka: varaamaton tai vanhentunut ensin, sitten pisimpään käyttämätön; uusi vain tarvittaessa. */
  freeSlot() {
    const i = this.slots.filter((c) => c.users === 0 && !c.filling), l = i.find((c) => !c.ready || c.gen !== this.gen);
    if (l) return l;
    if (i.length && this.slots.length >= Eh) return i.reduce((c, d) => c.used <= d.used ? c : d);
    if (this.slots.length < Eh) {
      const c = {};
      for (const h of pt) c[h] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
      const d = { buffers: c, gen: -1, start: 0, length: 0, ready: !1, filling: !1, users: 0, used: 0 };
      return this.slots.push(d), this.record("allas", { paikat: this.slots.length, bytes: this.bufferBytes }), d;
    }
    return i.length ? i.reduce((c, d) => c.used <= d.used ? c : d) : null;
  }
  /**
   * Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta, kesken oleva purku samalle kohdalle
   * (ei kahta purkua samasta palasta) tai uusi purku alkaen kohdasta start.
   */
  obtain(i) {
    const l = this.gen, c = this.slots.find((j) => j.ready && j.gen === l && i >= j.start && i < j.start + j.length);
    if (c)
      return c.used = ++this.useCounter, Promise.resolve(c);
    const d = this.pending.find((j) => j.gen === l && i >= j.start && i < j.start + j.length);
    if (d) return d.promise;
    const h = this.data, p = this.freeSlot();
    if (!p || !h) return Promise.resolve(null);
    const m = Math.min(this.segmentLength, this.length - i), x = { gen: l, start: i, length: m, promise: Promise.resolve(null) };
    return x.promise = this.fill(p, h, l, i, m).finally(() => {
      this.pending = this.pending.filter((j) => j !== x);
    }), this.pending.push(x), x.promise;
  }
  async fill(i, l, c, d, h) {
    Object.assign(i, { gen: c, start: d, length: h, ready: !1, filling: !0 });
    const p = this.now();
    try {
      const m = this.decoder(), x = await Promise.all(pt.map(async (j) => {
        const { bytes: v, layout: k } = l[j], T = wh(k, d, h, this.decoderDelay ?? 0), N = await m.decodeAudioData(Ro(v, k, T).buffer);
        return { track: j, buffer: N, plan: T };
      }));
      if (i.filling = !1, c !== this.gen)
        return i.gen = -1, null;
      for (const { track: j, buffer: v, plan: k } of x) {
        const T = i.buffers[j];
        for (let N = 0; N < T.numberOfChannels; N++) {
          const _ = v.getChannelData(Math.min(N, v.numberOfChannels - 1)).subarray(k.skip, k.skip + h);
          T.copyToChannel(_, N, 0), _.length < h && (T.copyToChannel(new Float32Array(h - _.length), N, _.length), this.record("pala-lyhyt", { track: j, start: d, puuttuu: h - _.length }));
        }
      }
      return i.ready = !0, i.used = ++this.useCounter, this.record("pala", { start: d / this.rate, length: h / this.rate, kesto: Math.round(this.now() - p) }), i;
    } catch (m) {
      throw i.filling = !1, i.gen = -1, m;
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
        if (!i || i.ending || i.nextFrame !== null && i.nextFrame / this.context.sampleRate - this.context.currentTime >= $k) return;
        let l = i.nextTimeline;
        if (l >= this.length) {
          if (!this.looping) {
            i.ending = !0, this.obtain(0).catch(() => this.record("alku-esipurku-virhe"));
            return;
          }
          l = 0;
        }
        const c = await this.obtain(l);
        if (this.session !== i) return;
        if (!c) {
          this.record("allas-taynna");
          return;
        }
        if (l === 0 && i.nextTimeline >= this.length && !this.looping) {
          i.ending = !0;
          return;
        }
        this.schedule(i, c, l);
      }
    } catch (i) {
      this.fail(i);
    } finally {
      this.pumping = !1, this.pumpQueued && (this.pumpQueued = !1, this.pump());
    }
  }
  schedule(i, l, c) {
    const d = this.context.sampleRate, h = c - l.start, p = l.length - h, m = Math.ceil((this.context.currentTime + pf) * d);
    let x = i.nextFrame ?? m;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Fk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), x = m);
    const j = x / d, v = Math.round(p * d / this.rate), k = pt.map((N) => {
      const _ = this.context.createBufferSource();
      return _.buffer = l.buffers[N], _.connect(this.inputs[N]), _.start(j, h / this.rate), _.stop((x + v) / d), _;
    }), T = { slot: l, frame: x, timelineStart: c, length: p, sources: k, done: !1 };
    l.users++, k[0].onended = () => this.finished(i, T), i.items.push(T), i.items.length === 1 ? this.record("soitto", { when: j, offset: c / this.rate, contextTime: this.context.currentTime }) : this.record("pala-ajastettu", { when: j, offset: c / this.rate, pituus: p / this.rate }), i.nextFrame = x + v, i.nextTimeline = c + p;
  }
  stopItem(i) {
    if (!i.done) {
      i.done = !0, i.slot.users = Math.max(0, i.slot.users - 1);
      for (const l of i.sources) {
        l.onended = null;
        try {
          l.stop();
        } catch {
        }
        l.disconnect();
      }
    }
  }
  finished(i, l) {
    if (l.done) return;
    l.done = !0, l.slot.users = Math.max(0, l.slot.users - 1);
    for (const d of l.sources)
      d.onended = null, d.disconnect();
    if (this.session !== i) return;
    const c = i.items.indexOf(l);
    if (c > 0 && i.items.splice(0, c), i.ending && i.items[i.items.length - 1] === l) {
      this.stopSession(), this.offset = this.duration, this.record("loppu"), this.onEnded?.();
      return;
    }
    this.pump();
  }
  stopSession() {
    const i = this.session;
    this.session = null, this.timer !== null && (this.clearIntervalImpl(this.timer), this.timer = null);
    for (const l of i?.items ?? []) this.stopItem(l);
  }
  fail(i) {
    this.stopSession(), this.error = i instanceof Error ? i.message : String(i), this.record("virhe", { message: this.error }), this.setState("virhe"), this.onError?.(this.error);
  }
}
const xf = typeof location < "u" ? new URLSearchParams(location.search).get("soitin") : null, Yo = xf === "d2", ui = xf === "d1" || Yo, zk = typeof location < "u" && Number(new URLSearchParams(location.search).get("naytetaajuus")) || 48e3;
let jf = null;
function Bk() {
  return dk(new URLSearchParams(location.search).get("kappale")) ?? jf ?? ck;
}
function Vk(r) {
  jf = r;
  const i = new URL(location.href);
  hf(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", hk(r)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const Kk = {
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
}, Th = 1e-3;
function Mh(r, i) {
  try {
    r.currentTime = i;
  } catch {
  }
}
function _h(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const i = Math.floor(r);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function Uk({ onBack: r }) {
  const i = A.useRef(null), l = A.useRef(null), c = A.useRef(null), d = A.useRef(0), h = A.useRef(new qh()), p = A.useRef(null), m = A.useRef(null), x = A.useRef(0), [j, v] = A.useState("tyhja"), [k, T] = A.useState(Bk), N = Kk[k], [_, w] = A.useState(!1), [E, B] = A.useState(!0), [b, U] = A.useState(!0), [z, V] = A.useState(!1), [D, O] = A.useState(!1), [F, re] = A.useState(!1), [Z, we] = A.useState(nv), [Ne] = A.useState(() => vv()), Y = A.useRef(null), [he, G] = A.useState(""), [ue, se] = A.useState(0), [W, ae] = A.useState(0), [te, S] = A.useState("");
  function g($ = !1, oe, le) {
    const Me = i.current;
    if (Me)
      for (const _e of [l.current, c.current])
        _e && (!oe || _e === oe) && h.current.align(Me, _e, $, void 0, le);
  }
  function ne() {
    return [
      ["backing", i.current, !0],
      ["guitar", l.current, E],
      ["vocals", c.current, b]
    ];
  }
  function ce($ = Z, oe) {
    if (ui) {
      const le = m.current?.player;
      if (le) for (const [Me, , _e] of ne()) le.setLevel(Me, Eo(Me, $, oe?.[Me] ?? _e));
      return;
    }
    for (const [le, Me, _e] of ne()) {
      if (!Me) continue;
      const He = Eo(le, $, oe?.[le] ?? _e);
      if (Ne === "webaudio" && Y.current?.routed(Me))
        Y.current.setLevel(Me, He);
      else
        try {
          Me.volume = Eo(le, $);
        } catch {
        }
    }
  }
  function Ee($) {
    we($), iv($), ce($);
  }
  function H() {
    if (ui) {
      const $ = m.current?.player;
      $?.playing && se($.pause());
    }
    d.current++, i.current?.pause(), l.current?.pause(), c.current?.pause(), w(!1);
  }
  function K($) {
    if ($ !== k) {
      ui && (x.current++, m.current?.player.release()), p.current = null, H();
      for (const oe of [i.current, l.current, c.current])
        if (oe)
          try {
            oe.currentTime = 0;
          } catch {
          }
      se(0), ae(0), S(""), T($), Vk($);
    }
  }
  function ee($) {
    if (ui) {
      const Me = m.current?.player, _e = Math.max(0, Math.min($, W > 0 ? W : $));
      se(_e), Me?.state === "valmis" ? Me.seek(_e) : p.current = _e;
      return;
    }
    const oe = i.current;
    if (!oe || !Number.isFinite($)) return;
    const le = Math.max(0, Math.min($, Number.isFinite(oe.duration) ? oe.duration : $));
    p.current = le, se(le), Mh(oe, le);
  }
  function J($) {
    const oe = p.current;
    if (oe === null || $ !== i.current || $.seeking) return;
    const le = Number.isFinite($.duration) ? Math.min(oe, $.duration) : oe;
    if (le !== oe && (p.current = le, se(le)), Math.abs($.currentTime - le) < Th) return;
    const Me = $.seekable;
    for (let _e = 0; _e < Me.length; _e++)
      if (Me.start(_e) <= le && le <= Me.end(_e)) {
        Mh($, le);
        return;
      }
  }
  function pe($) {
    if ($ !== i.current) return;
    const oe = p.current;
    if (oe === null)
      se($.currentTime);
    else if ($.readyState >= 1 && !$.seeking && Math.abs($.currentTime - oe) < Th) {
      p.current = null, g(!0);
      return;
    }
    $.paused || g();
  }
  function Ce() {
    if (m.current) return m.current;
    try {
      const $ = Mk(Yo ? { sampleRate: zk } : void 0), oe = Yo ? new Oo($) : new Tk($);
      return oe.onStateChange = v, oe instanceof Oo && (oe.onError = (le) => {
        w(!1), se(oe.position()), S(`Toisto keskeytyi (${le}). Paina Soita uudelleen.`);
      }), oe.onEnded = () => {
        w(!1), se(oe.duration);
      }, $.onstatechange = () => {
        $.state !== "running" && oe.playing && (se(oe.pause()), w(!1));
      }, m.current = { context: $, player: oe }, window.__kappaleD1 = { context: $, player: oe }, m.current;
    } catch ($) {
      return S("Web Audio ei ole käytettävissä tässä selaimessa. " + ($ instanceof Error ? $.message : "")), null;
    }
  }
  async function ge() {
    const $ = Ce();
    if (!$) return;
    const { context: oe, player: le } = $;
    if (_) {
      se(le.pause()), w(!1);
      return;
    }
    if (le.state === "ladataan" || le.state === "puretaan") {
      x.current++, le.cancel();
      return;
    }
    const Me = oe.state === "running" ? Promise.resolve() : oe.resume();
    S("");
    const _e = ++x.current;
    if (le.state !== "valmis") {
      const Oe = await le.load({ backing: N.backing, guitar: N.guitar, vocals: N.vocals });
      if (_e !== x.current) return;
      if (Oe === "virhe") {
        const Fe = le instanceof Oo ? le.errorKind : "lataus";
        S(Fe === "kalibrointi" || Fe === "naytetaajuus" ? `Kokeilusoitin ei voi soittaa tässä selaimessa (${le.error}). Käytä tavallista soitinta.` : "Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.");
        return;
      }
      if (Oe !== "valmis") return;
      ae(le.duration);
    }
    try {
      await Me;
    } catch {
    }
    if (_e !== x.current) return;
    if (oe.state !== "running") {
      S(`Ääni ei käynnistynyt (Web Audio: ${oe.state}). Paina Soita uudelleen.`);
      return;
    }
    ce(), le.setLoop(z), p.current !== null && (le.seek(p.current), p.current = null);
    let He = le.position();
    if (He >= le.duration - 0.05 && (He = 0), !le.play(He)) {
      S("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    se(He), w(!0);
  }
  async function xe() {
    if (ui) {
      await ge();
      return;
    }
    const $ = i.current, oe = l.current, le = c.current;
    if (!$ || !oe || !le) return;
    if (_) {
      H();
      return;
    }
    S("");
    const Me = p.current ?? $.currentTime;
    if (Number.isFinite($.duration) && Me >= $.duration - 0.05 && ee(0), J($), Ne === "webaudio") {
      const Oe = Y.current ??= new gv(), Fe = Oe.unlock() && [$, oe, le].map((Je) => Oe.route(Je)).every(Boolean);
      G(Fe ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + Oe.lastError);
    }
    ce(), oe.muted = !E, le.muted = !b, g(!0, void 0, rv);
    const _e = ++d.current;
    E || oe.pause(), b || le.pause();
    const He = [$, ...E ? [oe] : [], ...b ? [le] : []];
    if (!Zh(He)) {
      lv(He);
      const Oe = await ov(He, av, () => _e !== d.current);
      if (Oe === "ohitettu" || _e !== d.current) return;
      if (Oe === "virhe") {
        H(), S("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (h.current.hold(performance.now() + Zd), await Promise.all(He.map((Oe) => Oe.play())), _e !== d.current) return;
      if (h.current.hold(performance.now() + Zd), g(), w(!0), Ne === "webaudio" && Y.current?.routed($)) {
        const Oe = Y.current;
        setTimeout(() => {
          _e === d.current && Oe.state !== "running" && S(`Ääni ei käynnistynyt (Web Audio: ${Oe.state}). Pysäytä ja soita uudelleen.${Oe.lastError ? " " + Oe.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (_e !== d.current) return;
      H(), S("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function je($, oe, le) {
    if (!$) return;
    if ($.muted = !oe, !oe) {
      $.pause();
      return;
    }
    !i.current || !_ || (g(!0, $), $.play().catch(() => S(le + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Ie($) {
    B($), ce(Z, { guitar: $ }), je(l.current, $, "Kitararaita");
  }
  function Te($) {
    U($), ce(Z, { vocals: $ }), je(c.current, $, "Lauluraita");
  }
  return A.useEffect(() => {
    const $ = () => {
      document.hidden && H();
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $), d.current++, i.current?.pause(), l.current?.pause(), c.current?.pause(), Y.current?.close(), x.current++, m.current?.player.dispose(), m.current?.context.close().catch(() => {
      }), m.current = null, delete window.__kappaleD1;
    };
  }, []), A.useEffect(() => {
    ce();
  }, [k]), A.useEffect(() => {
    m.current?.player.setLoop(z);
  }, [z]), A.useEffect(() => {
    if (!ui || !_) return;
    let $ = 0, oe = "", le = 0;
    const Me = () => {
      const _e = m.current?.player;
      if (_e?.playing) {
        const He = _e.audiblePosition(), Oe = au(He, k), Fe = `${Oe.sectionIndex}:${Oe.barIndex}:${Oe.beat}`, Je = performance.now();
        (Fe !== oe || Je - le > 250) && (oe = Fe, le = Je, se(He));
      }
      $ = requestAnimationFrame(Me);
    };
    return $ = requestAnimationFrame(Me), () => cancelAnimationFrame($);
  }, [_, k]), /* @__PURE__ */ a.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: k,
          onChange: ($) => K($.target.value),
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
          N.label,
          " · ",
          N.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          xe();
        }, children: _ ? "■ Tauko" : j === "ladataan" || j === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: W > 0 ? W : 1,
            step: 0.1,
            value: Math.min(ue, W > 0 ? W : 1),
            disabled: W <= 0,
            onChange: ($) => ee(Number($.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          _h(ue),
          " / ",
          _h(W)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: ($) => Ie($.target.checked)
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
              onChange: ($) => Te($.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: z,
              onChange: ($) => V($.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "song-volume", "data-volume-mode": Ne, children: [
          /* @__PURE__ */ a.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            Z > 0 && /* @__PURE__ */ a.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            Z > 50 && /* @__PURE__ */ a.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: Z,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": Z + " %",
              onChange: ($) => Ee(Number($.target.value))
            }
          ),
          /* @__PURE__ */ a.jsxs("output", { "aria-hidden": "true", children: [
            Z,
            " %"
          ] })
        ] })
      ] }),
      he && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: he }),
      /* @__PURE__ */ a.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ a.jsxs("a", { href: N.download, download: N.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          N.label,
          ", koko kappale · ",
          N.downloadSize
        ] })
      ] }),
      te && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: te }),
      ui && (j === "ladataan" || j === "puretaan") && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: j === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
      !ui && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: N.backing,
            preload: "metadata",
            loop: z,
            onLoadedMetadata: ($) => {
              $.currentTarget === i.current && (ae($.currentTarget.duration), J($.currentTarget));
            },
            onProgress: ($) => J($.currentTarget),
            onCanPlay: ($) => J($.currentTarget),
            onTimeUpdate: ($) => pe($.currentTarget),
            onEnded: ($) => {
              $.currentTarget !== i.current || $.currentTarget.loop || (p.current = null, l.current?.pause(), c.current?.pause(), w(!1), se($.currentTarget.duration));
            },
            onPause: ($) => {
              $.currentTarget === i.current && w(!1);
            },
            onError: () => S(N.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          k + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: l,
            src: N.guitar,
            preload: "metadata",
            muted: !E,
            loop: z,
            onLoadedMetadata: () => {
              i.current?.paused && g(!0);
            },
            onError: () => S(N.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          k + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: c,
            src: N.vocals,
            preload: "metadata",
            muted: !b,
            loop: z,
            onLoadedMetadata: () => {
              i.current?.paused && g(!0);
            },
            onError: () => S(N.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          k + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: D, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: ($) => {
        $.preventDefault(), O((oe) => !oe);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(Sk, { version: k, position: ue, loop: z, onSeek: ee })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: F, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: ($) => {
        $.preventDefault(), re((oe) => !oe);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(Ck, { open: F })
    ] })
  ] });
}
const Jo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, _a = (r, i = 1) => r.toFixed(i).replace(".", ",").replace("-", "−"), Sf = (r) => {
  const i = Math.round(r);
  return (i > 0 ? "+" : i < 0 ? "−" : "±") + Math.abs(i);
}, Xo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function Hk(r, i, l, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Xo(l)}. Vaihda laite Mikrofonin asetuksista.`,
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
function wf({ frame: r, threshold: i }) {
  const l = r?.rms ?? 0, c = ds(l), d = (r?.peak ?? 0) >= 0.98 ? "clip" : l >= i ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${_a(Math.max(-60, c), 0)} desibeliä${l >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${ih(l) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${ih(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Gk({ mic: r, frame: i, heard: l, s: c, now: d }) {
  const h = sf(r.phase, i), p = l && d - l.at < 1500 ? l : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${De(p.midi, c.flats, !0)} · ${Sf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Jo[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ a.jsx(wf, { frame: i, threshold: c.minRms })
  ] });
}
function Wk({ mic: r, frame: i, heard: l, accepted: c, now: d, s: h, change: p, devices: m, locked: x, calibrating: j, calibration: v, onTest: k, onStop: T, onCalibrate: N }) {
  const _ = A.useId(), w = sf(r.phase, i), E = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", B = r.phase === "on", b = l && d - l.at < 1500 ? l : null, U = b && (w === "pitch" || w === "untuned"), z = B && (i?.peak ?? 0) >= 0.98, V = r.phase === "error" ? [] : Hk(w, h, r.info, z), D = !h.device || m.some((F) => F.deviceId === h.device), O = (F, re) => p({ ...h, [F]: re });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${_}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${_}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Jo[w],
      w === "pitch" && b ? ` ${De(b.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Xo(r.info)}.` : r.phase === "error" ? r.error : Jo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    B && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          Xo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(i?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx(wf, { frame: i, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            _a(Math.max(-60, ds(i?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: b ? De(b.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: b ? `${_a(b.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: b ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          Sf(b.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${b.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, b.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: b ? `${Math.round(b.clarity * 100)} %` : i?.clarity !== void 0 && w === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    B && c && d - c.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      De(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    V.length > 0 && B && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: V.map((F) => /* @__PURE__ */ a.jsx("li", { children: F }, F)) }),
    r.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: T, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: x, onClick: k, children: "Testaa mikrofoni" }),
      E && B && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: j, onClick: N, children: j ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    x && r.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: x, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${_}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${_}-device`, value: h.device, onChange: (F) => O("device", F.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((F, re) => /* @__PURE__ */ a.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${re + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-rms`, children: [
              "Äänikynnys · ",
              _a(ds(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (F) => O("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (F) => O("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (F) => O("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (F) => O("cents", Number(F.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Qk = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : _i[r.mode === "caged" ? "maj" : r.chord].tones, bh = (r, i) => Qk(r).find(([l]) => l === i)?.[1], Ef = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Yk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Jk(r, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Xk(r, i, l, c, d) {
  return i.choices === "degree" ? `Oikein! ${ir(r.root, i.interval, i.degree)} on ${i.degree}. aste.` : Ef(r) ? `Oikein! ${i.degree}. aste on ${ir(r.root, i.interval, i.degree)}.` : r.mode === "interval" ? `Oikein! ${De(i.reference, r.flats, !0)} → ${i.name} on ${sr[i.interval]} ${Yk(i)}.` : r.mode === "notes" ? l === "board" && d ? `Oikein! ${De(d.midi, r.flats)} on ${Lh[d.string]}: ${bi(d.fret)}.` : `Oikein! Soitit sävelen ${De(c, r.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function Zk(r, i, l, c, d) {
  if (l === "note") return `Ei ${De(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (l === "degree") return `Ei ${bh(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Qe(d.midi) === Qe(i.midi);
  if (r.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${Zt[d.string]}-kieli. Etsi sävel ${eu[i.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${De(d.midi, r.flats)}. Etsi ${i.name}.`;
  if (Ef(r)) {
    const p = Qe(d.midi - r.root), m = bh(r, p), x = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${ir(r.root, p, m)} eli ${m}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${De(d.midi, r.flats)}, joka ei kuulu ${x}. Etsi ${i.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${De(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function qk(r, i, l) {
  const c = De(l, r.flats, !0);
  return Qe(l) === Qe(i.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Nf(r, i = !1) {
  const l = r.split(":"), c = (p) => Number(l[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), h = (p, m) => Zt[p] ? `${Zt[p]}-kieli, ${bi(m)}` : null;
  switch (l[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${De(c(1), i)}${l[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return l.length === 2 && d(1) ? `Kuule ja toista: ${De(c(1), i, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && sr[c(1)] ? `${sr[c(1)]} ${l[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = l[2];
      if (!d(1, 3) || !_i[p]) return null;
      const m = _i[p].tones.find(([x]) => x === c(3))?.[1];
      return m ? `${Rh(c(1), p)}: ${m}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ue.SCALES[l[2]];
      if (!d(1) || !p) return null;
      const m = `${ci(c(1))}-${p.name}`;
      if (l.length === 5 && d(3)) {
        const x = Ue.scaleNotes(p).find(([j]) => j === c(3))?.[1];
        return x ? `${m}: ${x}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(l[2] ?? "?")) return null;
      const p = `${ci(c(1))}-duuri, ${l[2]}-muoto`;
      if (l.length === 4 && d(3)) {
        const m = _i.maj.tones.find(([x]) => x === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Ah(r) {
  return Object.entries(r).flatMap(([i, l]) => {
    const [c, d, h, ...p] = i.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: i, input: c, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: l }];
  });
}
const Zo = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", ey = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function ty(r) {
  const i = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${as(r.mode)}${r.hints ? ` · ${Ra[r.hints].title}` : ""} · ${i} · keskimäärin ${Zo(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function ny({ store: r, s: i, locked: l, changed: c }) {
  const [d, h] = A.useState(""), p = A.useRef(null), { recent: m, sessions: x, stats: j } = r.data, v = Ai(i), k = $h(i), T = [...new Set(m.map((b) => b.mode))].map((b) => {
    const U = m.filter((z) => z.mode === b);
    return { mode: b, ...Do(U), last: Math.max(...U.map((z) => z.at)) };
  }).sort((b, U) => U.last - b.last), N = Ah(j).filter((b) => !b.guided && b.mode === i.mode && b.input === v && b.check === k && b.stat.attempts >= 3).map((b) => ({ ...b, score: tu(b.stat), text: Nf(b.item, i.flats) })).filter((b) => b.text && b.score < 0.8).sort((b, U) => b.score - U.score).slice(0, 5), _ = Ah(j).reduce((b, U) => b + U.stat.attempts, 0);
  function w() {
    const b = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(b), z = document.createElement("a");
    z.href = U, z.download = "musiikin-kartta-harjoittelu.json", z.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function E(b) {
    if (b)
      try {
        const U = await b.text();
        if (_ && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(U), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function B() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    _ === 0 ? /* @__PURE__ */ a.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        _,
        " vastattua kysymystä · ",
        x.length,
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
        /* @__PURE__ */ a.jsx("tbody", { children: T.map((b) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: as(b.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: b.count }),
          /* @__PURE__ */ a.jsx("td", { children: b.solo ? `${b.soloFirst}/${b.solo} · ${Math.round(b.soloFirst / b.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: b.guided }),
          /* @__PURE__ */ a.jsx("td", { children: Zo(b.ms / b.count) })
        ] }, b.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    N.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        as(i.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: N.map((b) => /* @__PURE__ */ a.jsxs("li", { children: [
        b.text,
        " · viime aikoina ",
        Math.round(rr(b.stat) * 100),
        " % heti oikein · ",
        Zo(ar(b.stat))
      ] }, b.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: _ ? `Harjoituksessa ${as(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        ey[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx(zp, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: j, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      x.length ? /* @__PURE__ */ a.jsx("ul", { children: x.slice(-10).reverse().map((b) => /* @__PURE__ */ a.jsx("li", { children: ty(b) }, b.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ a.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (b) => {
          E(b.target.files?.[0]);
        } }),
        /* @__PURE__ */ a.jsx("button", { type: "button", disabled: l || !_, onClick: B, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ a.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ a.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function iy() {
  try {
    return new Ud(localStorage);
  } catch {
    return new Ud();
  }
}
const Ph = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), sy = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", ry = [0, 2, 4, 5, 7, 9, 11];
function ay(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function ly() {
  const [r] = A.useState(iy), [i, l] = A.useState(() => Tp(location.search, r.data.settings)), [, c] = A.useReducer((L) => L + 1, 0), d = A.useRef(null), h = A.useRef(new zv()), p = A.useRef(new ur()), m = A.useRef(0), x = A.useRef(), j = A.useRef(), v = A.useRef(null), k = A.useRef(0), T = A.useRef(null), N = A.useRef(i);
  N.current = i;
  const [_, w] = A.useState({ phase: "off", purpose: "none" }), E = A.useRef(_), B = (L) => {
    E.current = L, w(L);
  }, [b, U] = A.useState(null), [z, V] = A.useState(null), [D, O] = A.useState(null), [F, re] = A.useState(0), [Z, we] = A.useState([]), [Ne, Y] = A.useState(!1), [he, G] = A.useState(!1), [ue, se] = A.useState(""), [W, ae] = A.useState("info"), [te, S] = A.useState(""), [g, ne] = A.useState(0), [ce, Ee] = A.useState([]), [H, K] = A.useState([]), [ee, J] = A.useState(null), [pe, Ce] = A.useState(!1), [ge, xe] = A.useState(""), [je, Ie] = A.useState(""), [Te, $] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : hf(L.get("kappale")) ? "songs" : Xp(L.get("polku"));
  }), [oe, le] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function Me() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), le(!0);
  }
  function _e() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), le(!1);
  }
  function He() {
    $(null), le(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const Oe = () => {
    Ev().then(we).catch(() => {
    });
  };
  function Fe() {
    clearTimeout(j.current), v.current = null, Ce(!1);
  }
  function Je() {
    U(null), V(null), O(null);
  }
  function vt() {
    h.current.stop(), Fe(), B({ phase: "off", purpose: "none" }), Je();
  }
  async function qt(L) {
    if (h.current.active && E.current.phase === "on")
      return Fe(), B({ ...E.current, purpose: L }), h.current.rearm(), !0;
    B({ phase: "requesting", purpose: L }), Je();
    try {
      const fe = await h.current.start(N.current.device, {
        ...Ph(N.current),
        onFrame: (Ge) => Pt.current.frame(Ge),
        onStableNote: (Ge) => Pt.current.stable(Ge)
      }, () => Pt.current.lost());
      return fe ? (B({ phase: "on", purpose: L, info: fe }), Oe(), !0) : !1;
    } catch (fe) {
      return B({ phase: "error", purpose: "none", error: Dv(fe) }), !1;
    }
  }
  function Ft(L) {
    v.current?.push(L.rms);
    const fe = performance.now();
    fe - k.current < 66 || (k.current = fe, U(L), re(fe), L.midi !== void 0 && L.frequency !== void 0 && V({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: fe }));
  }
  function en(L) {
    E.current.purpose === "test" ? O(L) : E.current.purpose === "round" && Lt(L.midi, "mic", void 0, L.heldMs);
  }
  function Gt() {
    const L = E.current.purpose === "round";
    Fe(), Je(), B({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    L && fe && ["active", "feedback", "paused"].includes(fe.phase) && (Re(), G(!1), fe.pause(), S("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Pt = A.useRef({ frame: Ft, stable: en, lost: Gt });
  Pt.current = { frame: Ft, stable: en, lost: Gt };
  function gn(L) {
    const fe = ba(L), Ge = fe.device !== N.current.device;
    N.current = fe, l(fe), r.settings(fe), S(""), h.current.active && (Ge && E.current.purpose === "test" ? (vt(), qt("test")) : h.current.setOptions(Ph(fe)));
  }
  function be(L) {
    Ie(""), d.current = null, le(!1), $(L);
  }
  function on() {
    xe(""), qt("test");
  }
  function Le() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (Fe(), v.current = [], Ce(!0), xe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), j.current = setTimeout(() => {
      const L = v.current ?? [];
      if (Fe(), L.length < 10) {
        xe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: Ge, loud: Wt } = Bv(L);
      gn({ ...N.current, minRms: fe }), xe(`Taustakohina on ${Math.round(ds(Ge))} dB ja äänikynnys nyt ${Math.round(ds(fe))} dB. ${Wt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Re() {
    m.current++, clearTimeout(x.current), p.current.stop();
  }
  function ze(L, fe) {
    if (!L.results.length) return;
    const Ge = Do(L.results);
    r.session({
      id: L.id,
      mode: L.settings.mode,
      count: Ge.count,
      first: Ge.first,
      ms: Ge.ms,
      solo: Ge.solo,
      soloFirst: Ge.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: fe
    });
  }
  async function Ze(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Re();
    const fe = m.current;
    L.pause(), h.current.pause(), G(!0), ae("info"), se("Kuuntele…"), c();
    try {
      await p.current.play(L.question.sound);
    } catch {
      fe === m.current && S("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== L || (L.resume(), h.current.resume(), G(!1), se(""), c());
  }
  async function at(L) {
    Ee([]), K([]), J(null), S(""), ne(L.hintLevel), h.current.rearm(), ae("info"), se(""), c(), L.question?.sound.length && await Ze(L);
  }
  async function un() {
    const L = N.current, fe = Io(L);
    if (fe) {
      S(fe);
      return;
    }
    Re();
    const Ge = m.current;
    if (S(""), xe(""), Ie(""), ja(L)) {
      Y(!0);
      const ot = await qt("round");
      if (Ge !== m.current) return;
      if (Y(!1), !ot) {
        S("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && vt();
    const Wt = new Jp(L, () => r.data.stats, (ot) => r.record(ot));
    try {
      Wt.start();
    } catch (ot) {
      E.current.purpose === "round" && vt(), S(ot instanceof Error ? ot.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Wt, requestAnimationFrame(() => T.current?.scrollIntoView({ block: "start", behavior: "auto" })), await at(Wt);
  }
  function St() {
    Re(), Y(!1), vt();
  }
  function Lt(L, fe, Ge, Wt = 0) {
    const ot = d.current, Rt = ot?.question;
    if (!ot || !Rt || ot.phase !== "active") return;
    const ks = ot.answer(L, fe, Ge, Wt);
    if (ks !== "ignored") {
      if (ks === "candidate")
        J(L), ae("bad"), se(qk(ot.settings, Rt, L));
      else if (ks === "wrong")
        Ge ? Ee((Et) => [...Et, Ge]) : K((Et) => [...Et, L]), ae("bad"), se(Zk(ot.settings, Rt, fe, L, Ge));
      else if (J(null), ae("good"), se(Xk(ot.settings, Rt, fe, L, Ge)), ze(ot, !1), ot.settings.advance) {
        const Et = m.current;
        x.current = setTimeout(() => {
          Et === m.current && Tn();
        }, fe === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Tn() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      Re();
      try {
        L.next();
      } catch (fe) {
        cn(!1), S(fe instanceof Error ? fe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        cn(!0);
        return;
      }
      await at(L);
    }
  }
  function cn(L = !1) {
    Re(), G(!1), Y(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && vt();
    const fe = d.current;
    fe && (fe.stop(), ze(fe, L)), J(null), ne(0), Ee([]), K([]), S(""), Ie(L ? "complete" : "stopped"), ae("info"), se(""), c();
  }
  function Mn() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Re(), G(!1), L.pause();
    const fe = E.current.purpose === "round";
    fe && vt(), ae("info"), se(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function cr() {
    const L = d.current;
    if (!L || L.phase !== "paused" || he) return;
    Re();
    const fe = m.current;
    if (S(""), ja(L.settings)) {
      Y(!0);
      const Ge = await qt("round");
      if (fe !== m.current) return;
      if (Y(!1), !Ge) {
        S("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), ae("info"), se(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await Ze(L));
  }
  function ms(L) {
    const fe = d.current;
    !fe || fe.phase !== "active" || (fe.useHint(L), ne(L), c());
  }
  const fi = A.useRef({ hidden: () => {
  }, restored: () => {
  } });
  fi.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || he ? Mn() : E.current.phase !== "off" && E.current.phase !== "error" && (Re(), Y(!1), vt());
    },
    restored: () => {
      Y(!1), G(!1), B({ phase: "off", purpose: "none" }), Je(), c();
    }
  }, A.useEffect(() => {
    Oe();
    const L = () => Oe();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const fe = () => {
      m.current++, clearTimeout(x.current), clearTimeout(j.current), h.current.stop(), p.current.stop(), Fv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && fi.current.hidden();
    }, Wt = (ot) => {
      ot.persisted && fi.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Wt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Wt);
    };
  }, []);
  const Li = A.useRef(null), mi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${he}`;
  A.useEffect(() => {
    const L = d.current, fe = T.current, Ge = document.activeElement;
    !L || !fe || !(Ge === document.body || fe.contains(Ge)) || (L.phase === "feedback" ? Li.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !he && (Ge === document.body || Ge === Li.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [mi]);
  const Ve = d.current, et = !!Ve && ["active", "paused", "feedback"].includes(Ve.phase), nt = et ? Ve.settings : i, ht = et ? Ve.question : void 0, Dt = !!ht && !!Ve?.answered, dn = et && Ve.phase === "paused" && !he && !Dt, zn = et && Ve.phase === "active" && !he, ps = et ? null : Io(i), vs = et || Ne, dr = Pi(nt), _n = Vp(nt), Bn = ht && !Dt ? g : 0, Ri = ht ? Yp(nt, ht, Dt ? 2 : Bn) : { marks: [], text: "" }, hr = [...new Map([...Ri.marks, ...Dt ? [] : ce.map((L) => ({ ...L, label: De(L.midi, nt.flats), kind: "wrong" }))].map((L) => [Xe(L), L])).values()], fr = et && ja(nt), mr = !!ht && !dn && (ht.choices === "position" || hr.length > 0), wt = Ve ? Do(Ve.results) : null, pr = !Ve || nt.hints !== "fade" ? "" : Ve.index <= 3 ? " · vastaus näkyy" : Ve.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", vr = Ve && !et ? Ve.results.filter((L) => L.errors > 0 || L.hint) : [], [Ia, lt] = ay(nt), Vn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ a.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ a.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), xn = r.data.notice === "hints-default" && /* @__PURE__ */ a.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !et && Te === null ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    /* @__PURE__ */ a.jsx(qp, { onSelect: be })
  ] }) : !et && Te === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    /* @__PURE__ */ a.jsx(ik, { onBack: He })
  ] }) : !et && Te === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    oe ? /* @__PURE__ */ a.jsx(sk, { onBack: _e }) : /* @__PURE__ */ a.jsx(ev, { onBack: He, onNotes: Me })
  ] }) : !et && Te === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    /* @__PURE__ */ a.jsx(lk, { onBack: He })
  ] }) : !et && Te === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    /* @__PURE__ */ a.jsx(Uk, { onBack: He })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Vn,
    xn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: Ia, children: [
      "Lue tämän harjoituksen teoria: ",
      lt,
      " →"
    ] }) }),
    Te !== "legacy" && /* @__PURE__ */ a.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && cn(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ a.jsx("h2", { children: Te === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ a.jsx("p", { children: Te === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ a.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ a.jsx("strong", { children: as(nt.mode) }),
      " · ",
      Qd(nt)
    ] }) : Te === "legacy" ? /* @__PURE__ */ a.jsx(Yd, { s: i, change: gn, locked: vs, problem: ps }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Yd, { s: i, change: gn, locked: vs, problem: ps })
    ] }),
    !et && (Te === "legacy" || ja(i)) && /* @__PURE__ */ a.jsx(
      Wk,
      {
        mic: _,
        frame: b,
        heard: z,
        accepted: D,
        now: F,
        s: i,
        change: gn,
        devices: Z,
        locked: Ne,
        calibrating: pe,
        calibration: ge,
        onTest: on,
        onStop: vt,
        onCalibrate: Le
      }
    ),
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: T, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: as(nt.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Ve.index}${Ve.total ? " / " + Ve.total : " · vapaa harjoittelu"} · ${Ra[nt.hints].title}${pr}${Ve.phase === "paused" && !he ? " · tauolla" : ""}` : je === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        Ve && Ve.results.length > 0 && wt ? /* @__PURE__ */ a.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ a.jsx("h3", { children: je === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ a.jsxs("dl", { children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-solo", children: wt.solo ? `${wt.soloFirst} / ${wt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ a.jsx("dd", { "data-testid": "summary-guided", children: wt.guided })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ a.jsx("dd", { children: sy(wt.ms / wt.count) })
            ] })
          ] }),
          wt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          vr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(vr.map((L) => Nf(L.item, i.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Qd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: Ne ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: St, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ps, onClick: () => {
          un();
        }, children: Ve?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ve && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ht && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: dn ? "Harjoitus on tauolla." : ht.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: dn ? "Kysymys palaa näkyviin, kun jatkat." : he ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Jk(nt, ht) }),
        Ve.hintLevel > 0 && !Dt && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: nt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        fr && /* @__PURE__ */ a.jsx(Gk, { mic: _, frame: b, heard: z, s: nt, now: F }),
        ht.choices === "note" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (nt.accidentals ? Array.from({ length: 12 }, (L, fe) => fe) : ry).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.midi % 12 ? "right" : "", disabled: !zn || H.includes(L), onClick: () => Lt(L, "note"), children: De(L, nt.flats) }, L)) }),
        ht.choices === "degree" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (nt.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[nt.scale]) : _i[nt.chord].tones).map(([L, fe]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.interval ? "right" : "", disabled: !zn || H.includes(L), onClick: () => Lt(L, "degree"), children: fe }, L)) }),
        mr && /* @__PURE__ */ a.jsx(
          di,
          {
            area: _n,
            marks: hr,
            disabled: !zn || ht.choices !== "position" || nt.input === "mic",
            onAnswer: (L) => Lt(L.midi, "board", L),
            caption: dr.fixed === "shape" ? `${nt.shape}-muodon alue` : dr.fixed === "box" ? `Boksin ${nt.box} alue` : "Otelauta"
          }
        ),
        !Dt && !dn && Bn > 0 && Ri.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Ri.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        ee !== null && Ve.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ve.confirmWrong(), J(null), se("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        te && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: te }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          Ve.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Li, onClick: () => {
            Tn();
          }, children: Ve.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ve.phase === "active" && !Dt && !he && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            Bn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(Math.max(1, Ve.hintLevel)), children: Ve.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Bn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ms(2), children: "Näytä vastaus" }),
            Bn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(0), children: "Piilota vihje" })
          ] }),
          ht.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !zn, onClick: () => {
            Ze(Ve);
          }, children: "Kuuntele uudelleen" }),
          Ve.phase === "paused" && !he ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: Ne, onClick: () => {
            cr();
          }, children: Ne ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ a.jsx("button", { type: "button", onClick: Mn, children: "Tauko" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => cn(), children: "Lopeta harjoitus" })
        ] }),
        Ve.phase === "feedback" && nt.advance && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "tally", children: wt?.count ? `Vastattu ${wt.count} · itsenäisesti heti oikein ${wt.soloFirst}/${wt.solo}${wt.guided ? ` · vihjeen kanssa ${wt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && te && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: te })
    ] }),
    !et && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "link-row", children: [
        i.mode === "scale" && /* @__PURE__ */ a.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ue.CHROM[i.root])}&asteikko=${i.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ a.jsx("a", { href: Mp(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(ny, { store: r, s: i, locked: vs, changed: () => {
        const L = ba(r.data.settings);
        N.current = L, l(L), c();
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
gp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(ly, {}));
//# sourceMappingURL=app.js.map
