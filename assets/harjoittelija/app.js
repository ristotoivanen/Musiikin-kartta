function qm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ho = { exports: {} }, Wr = {}, mo = { exports: {} }, Ie = {};
var Sd;
function ep() {
  if (Sd) return Ie;
  Sd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function C(N) {
    return N === null || typeof N != "object" ? null : (N = g && N[g] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, w = {};
  function j(N, y, q) {
    this.props = N, this.context = y, this.refs = w, this.updater = q || _;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(N, y) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, y, "setState");
  }, j.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function I() {
  }
  I.prototype = j.prototype;
  function E(N, y, q) {
    this.props = N, this.context = y, this.refs = w, this.updater = q || _;
  }
  var U = E.prototype = new I();
  U.constructor = E, P(U, j.prototype), U.isPureReactComponent = !0;
  var K = Array.isArray, z = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(N, y, q) {
    var ce, Ce = {}, G = null, B = null;
    if (y != null) for (ce in y.ref !== void 0 && (B = y.ref), y.key !== void 0 && (G = "" + y.key), y) z.call(y, ce) && !O.hasOwnProperty(ce) && (Ce[ce] = y[ce]);
    var J = arguments.length - 2;
    if (J === 1) Ce.children = q;
    else if (1 < J) {
      for (var X = Array(J), he = 0; he < J; he++) X[he] = arguments[he + 2];
      Ce.children = X;
    }
    if (N && N.defaultProps) for (ce in J = N.defaultProps, J) Ce[ce] === void 0 && (Ce[ce] = J[ce]);
    return { $$typeof: r, type: N, key: G, ref: B, props: Ce, _owner: D.current };
  }
  function se(N, y) {
    return { $$typeof: r, type: N.type, key: y, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ne(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }
  function Ee(N) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(q) {
      return y[q];
    });
  }
  var Pe = /\/+/g;
  function Z(N, y) {
    return typeof N == "object" && N !== null && N.key != null ? Ee("" + N.key) : y.toString(36);
  }
  function fe(N, y, q, ce, Ce) {
    var G = typeof N;
    (G === "undefined" || G === "boolean") && (N = null);
    var B = !1;
    if (N === null) B = !0;
    else switch (G) {
      case "string":
      case "number":
        B = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case r:
          case a:
            B = !0;
        }
    }
    if (B) return B = N, Ce = Ce(B), N = ce === "" ? "." + Z(B, 0) : ce, K(Ce) ? (q = "", N != null && (q = N.replace(Pe, "$&/") + "/"), fe(Ce, y, q, "", function(he) {
      return he;
    })) : Ce != null && (ne(Ce) && (Ce = se(Ce, q + (!Ce.key || B && B.key === Ce.key ? "" : ("" + Ce.key).replace(Pe, "$&/") + "/") + N)), y.push(Ce)), 1;
    if (B = 0, ce = ce === "" ? "." : ce + ":", K(N)) for (var J = 0; J < N.length; J++) {
      G = N[J];
      var X = ce + Z(G, J);
      B += fe(G, y, q, X, Ce);
    }
    else if (X = C(N), typeof X == "function") for (N = X.call(N), J = 0; !(G = N.next()).done; ) G = G.value, X = ce + Z(G, J++), B += fe(G, y, q, X, Ce);
    else if (G === "object") throw y = String(N), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function H(N, y, q) {
    if (N == null) return N;
    var ce = [], Ce = 0;
    return fe(N, ce, "", "", function(G) {
      return y.call(q, G, Ce++);
    }), ce;
  }
  function ue(N) {
    if (N._status === -1) {
      var y = N._result;
      y = y(), y.then(function(q) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = q);
      }, function(q) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = q);
      }), N._status === -1 && (N._status = 0, N._result = y);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var le = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: H, forEach: function(N, y, q) {
    H(N, function() {
      y.apply(this, arguments);
    }, q);
  }, count: function(N) {
    var y = 0;
    return H(N, function() {
      y++;
    }), y;
  }, toArray: function(N) {
    return H(N, function(y) {
      return y;
    }) || [];
  }, only: function(N) {
    if (!ne(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Ie.Component = j, Ie.Fragment = o, Ie.Profiler = d, Ie.PureComponent = E, Ie.StrictMode = c, Ie.Suspense = x, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Ie.act = ie, Ie.cloneElement = function(N, y, q) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var ce = P({}, N.props), Ce = N.key, G = N.ref, B = N._owner;
    if (y != null) {
      if (y.ref !== void 0 && (G = y.ref, B = D.current), y.key !== void 0 && (Ce = "" + y.key), N.type && N.type.defaultProps) var J = N.type.defaultProps;
      for (X in y) z.call(y, X) && !O.hasOwnProperty(X) && (ce[X] = y[X] === void 0 && J !== void 0 ? J[X] : y[X]);
    }
    var X = arguments.length - 2;
    if (X === 1) ce.children = q;
    else if (1 < X) {
      J = Array(X);
      for (var he = 0; he < X; he++) J[he] = arguments[he + 2];
      ce.children = J;
    }
    return { $$typeof: r, type: N.type, key: Ce, ref: G, props: ce, _owner: B };
  }, Ie.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: f, _context: N }, N.Consumer = N;
  }, Ie.createElement = F, Ie.createFactory = function(N) {
    var y = F.bind(null, N);
    return y.type = N, y;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(N) {
    return { $$typeof: m, render: N };
  }, Ie.isValidElement = ne, Ie.lazy = function(N) {
    return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: ue };
  }, Ie.memo = function(N, y) {
    return { $$typeof: b, type: N, compare: y === void 0 ? null : y };
  }, Ie.startTransition = function(N) {
    var y = W.transition;
    W.transition = {};
    try {
      N();
    } finally {
      W.transition = y;
    }
  }, Ie.unstable_act = ie, Ie.useCallback = function(N, y) {
    return le.current.useCallback(N, y);
  }, Ie.useContext = function(N) {
    return le.current.useContext(N);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(N) {
    return le.current.useDeferredValue(N);
  }, Ie.useEffect = function(N, y) {
    return le.current.useEffect(N, y);
  }, Ie.useId = function() {
    return le.current.useId();
  }, Ie.useImperativeHandle = function(N, y, q) {
    return le.current.useImperativeHandle(N, y, q);
  }, Ie.useInsertionEffect = function(N, y) {
    return le.current.useInsertionEffect(N, y);
  }, Ie.useLayoutEffect = function(N, y) {
    return le.current.useLayoutEffect(N, y);
  }, Ie.useMemo = function(N, y) {
    return le.current.useMemo(N, y);
  }, Ie.useReducer = function(N, y, q) {
    return le.current.useReducer(N, y, q);
  }, Ie.useRef = function(N) {
    return le.current.useRef(N);
  }, Ie.useState = function(N) {
    return le.current.useState(N);
  }, Ie.useSyncExternalStore = function(N, y, q) {
    return le.current.useSyncExternalStore(N, y, q);
  }, Ie.useTransition = function() {
    return le.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var wd;
function Go() {
  return wd || (wd = 1, mo.exports = ep()), mo.exports;
}
var Nd;
function tp() {
  if (Nd) return Wr;
  Nd = 1;
  var r = Go(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, x, b) {
    var v, g = {}, C = null, _ = null;
    b !== void 0 && (C = "" + b), x.key !== void 0 && (C = "" + x.key), x.ref !== void 0 && (_ = x.ref);
    for (v in x) c.call(x, v) && !f.hasOwnProperty(v) && (g[v] = x[v]);
    if (m && m.defaultProps) for (v in x = m.defaultProps, x) g[v] === void 0 && (g[v] = x[v]);
    return { $$typeof: a, type: m, key: C, ref: _, props: g, _owner: d.current };
  }
  return Wr.Fragment = o, Wr.jsx = p, Wr.jsxs = p, Wr;
}
var Ed;
function np() {
  return Ed || (Ed = 1, ho.exports = tp()), ho.exports;
}
var s = np(), M = Go(), pa = {}, po = { exports: {} }, Jt = {}, vo = { exports: {} }, ko = {};
var Cd;
function ip() {
  return Cd || (Cd = 1, (function(r) {
    function a(W, ae) {
      var ie = W.length;
      W.push(ae);
      e: for (; 0 < ie; ) {
        var N = ie - 1 >>> 1, y = W[N];
        if (0 < d(y, ae)) W[N] = ae, W[ie] = y, ie = N;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ae = W[0], ie = W.pop();
      if (ie !== ae) {
        W[0] = ie;
        e: for (var N = 0, y = W.length, q = y >>> 1; N < q; ) {
          var ce = 2 * (N + 1) - 1, Ce = W[ce], G = ce + 1, B = W[G];
          if (0 > d(Ce, ie)) G < y && 0 > d(B, Ce) ? (W[N] = B, W[G] = ie, N = G) : (W[N] = Ce, W[ce] = ie, N = ce);
          else if (G < y && 0 > d(B, ie)) W[N] = B, W[G] = ie, N = G;
          else break e;
        }
      }
      return ae;
    }
    function d(W, ae) {
      var ie = W.sortIndex - ae.sortIndex;
      return ie !== 0 ? ie : W.id - ae.id;
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
    var x = [], b = [], v = 1, g = null, C = 3, _ = !1, P = !1, w = !1, j = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(W) {
      for (var ae = o(b); ae !== null; ) {
        if (ae.callback === null) c(b);
        else if (ae.startTime <= W) c(b), ae.sortIndex = ae.expirationTime, a(x, ae);
        else break;
        ae = o(b);
      }
    }
    function K(W) {
      if (w = !1, U(W), !P) if (o(x) !== null) P = !0, ue(z);
      else {
        var ae = o(b);
        ae !== null && le(K, ae.startTime - W);
      }
    }
    function z(W, ae) {
      P = !1, w && (w = !1, I(F), F = -1), _ = !0;
      var ie = C;
      try {
        for (U(ae), g = o(x); g !== null && (!(g.expirationTime > ae) || W && !Ee()); ) {
          var N = g.callback;
          if (typeof N == "function") {
            g.callback = null, C = g.priorityLevel;
            var y = N(g.expirationTime <= ae);
            ae = r.unstable_now(), typeof y == "function" ? g.callback = y : g === o(x) && c(x), U(ae);
          } else c(x);
          g = o(x);
        }
        if (g !== null) var q = !0;
        else {
          var ce = o(b);
          ce !== null && le(K, ce.startTime - ae), q = !1;
        }
        return q;
      } finally {
        g = null, C = ie, _ = !1;
      }
    }
    var D = !1, O = null, F = -1, se = 5, ne = -1;
    function Ee() {
      return !(r.unstable_now() - ne < se);
    }
    function Pe() {
      if (O !== null) {
        var W = r.unstable_now();
        ne = W;
        var ae = !0;
        try {
          ae = O(!0, W);
        } finally {
          ae ? Z() : (D = !1, O = null);
        }
      } else D = !1;
    }
    var Z;
    if (typeof E == "function") Z = function() {
      E(Pe);
    };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), H = fe.port2;
      fe.port1.onmessage = Pe, Z = function() {
        H.postMessage(null);
      };
    } else Z = function() {
      j(Pe, 0);
    };
    function ue(W) {
      O = W, D || (D = !0, Z());
    }
    function le(W, ae) {
      F = j(function() {
        W(r.unstable_now());
      }, ae);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, r.unstable_continueExecution = function() {
      P || _ || (P = !0, ue(z));
    }, r.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < W ? Math.floor(1e3 / W) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(x);
    }, r.unstable_next = function(W) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = C;
      }
      var ie = C;
      C = ae;
      try {
        return W();
      } finally {
        C = ie;
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
      var ie = C;
      C = W;
      try {
        return ae();
      } finally {
        C = ie;
      }
    }, r.unstable_scheduleCallback = function(W, ae, ie) {
      var N = r.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? N + ie : N) : ie = N, W) {
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
      return y = ie + y, W = { id: v++, callback: ae, priorityLevel: W, startTime: ie, expirationTime: y, sortIndex: -1 }, ie > N ? (W.sortIndex = ie, a(b, W), o(x) === null && W === o(b) && (w ? (I(F), F = -1) : w = !0, le(K, ie - N))) : (W.sortIndex = y, a(x, W), P || _ || (P = !0, ue(z))), W;
    }, r.unstable_shouldYield = Ee, r.unstable_wrapCallback = function(W) {
      var ae = C;
      return function() {
        var ie = C;
        C = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          C = ie;
        }
      };
    };
  })(ko)), ko;
}
var Td;
function rp() {
  return Td || (Td = 1, vo.exports = ip()), vo.exports;
}
var Md;
function sp() {
  if (Md) return Jt;
  Md = 1;
  var r = Go(), a = rp();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function C(e) {
    return x.call(g, e) ? !0 : x.call(v, e) ? !1 : b.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function _(e, t, n, i) {
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
  function P(e, t, n, i) {
    if (t === null || typeof t > "u" || _(e, t, n, i)) return !0;
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
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    j[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    j[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    j[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    j[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    j[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    j[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    j[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    j[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    j[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      E
    );
    j[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, E);
    j[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, E);
    j[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    j[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    j[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, i) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, l, i) && (n = null), i || l === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var K = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, z = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), Pe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), le = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ie = Object.assign, N;
  function y(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var q = !1;
  function ce(e, t) {
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
        } catch ($) {
          var i = $;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch ($) {
          i = $;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          i = $;
        }
        e();
      }
    } catch ($) {
      if ($ && i && typeof $.stack == "string") {
        for (var l = $.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var S = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
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
  function Ce(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Portal";
      case se:
        return "Profiler";
      case F:
        return "StrictMode";
      case Z:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ee:
        return (e.displayName || "Context") + ".Consumer";
      case ne:
        return (e._context.displayName || "Context") + ".Provider";
      case Pe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
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
  function J(e) {
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
  function X(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function he(e) {
    var t = X(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function Me(e) {
    e._valueTracker || (e._valueTracker = he(e));
  }
  function ke(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = X(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ve(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function we(e, t) {
    var n = t.checked;
    return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Re(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = J(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Te(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Be(e, t) {
    Te(e, t);
    var n = J(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ue(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ue(e, t.type, J(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function tt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ue(e, t, n) {
    (t !== "number" || ve(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ye = Array.isArray;
  function rt(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + J(n), t = null, l = 0; l < e.length; l++) {
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
    return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function qe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Ye(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: J(n) };
  }
  function $e(e, t) {
    var n = J(t.value), i = J(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function nt(e) {
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
  function Ft(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Tt, Kt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Tt = Tt || document.createElement("div"), Tt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function It(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var V = {
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
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(V).forEach(function(e) {
    ge.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), V[t] = V[e];
    });
  });
  function te(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || V.hasOwnProperty(e) && V[e] ? ("" + t).trim() : t + "px";
  }
  function Fe(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = te(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var oe = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Se(e, t) {
    if (t) {
      if (oe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  function Xe(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ke = null, mt = null, kt = null;
  function Cn(e) {
    if (e = Ar(e)) {
      if (typeof Ke != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = bs(t), Ke(e.stateNode, e.type, t));
    }
  }
  function cn(e) {
    mt ? kt ? kt.push(e) : kt = [e] : mt = e;
  }
  function Tn() {
    if (mt) {
      var e = mt, t = kt;
      if (kt = mt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
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
      ci = !1, (mt !== null || kt !== null) && (cr(), Tn());
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
  var De = !1;
  if (m) try {
    var it = {};
    Object.defineProperty(it, "passive", { get: function() {
      De = !0;
    } }), window.addEventListener("test", it, it), window.removeEventListener("test", it, it);
  } catch {
    De = !1;
  }
  function at(e, t, n, i, l, u, h, k, S) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var yt = !1, Ut = null, dn = !1, In = null, dr = { onError: function(e) {
    yt = !0, Ut = e;
  } };
  function fr(e, t, n, i, l, u, h, k, S) {
    yt = !1, Ut = null, at.apply(dr, arguments);
  }
  function as(e, t, n, i, l, u, h, k, S) {
    if (fr.apply(this, arguments), yt) {
      if (yt) {
        var $ = Ut;
        yt = !1, Ut = null;
      } else throw Error(o(198));
      dn || (dn = !0, In = $);
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
  var Mt = a.unstable_scheduleCallback, cs = a.unstable_cancelCallback, ds = a.unstable_shouldYield, Aa = a.unstable_requestPaint, ct = a.unstable_now, zn = a.unstable_getCurrentPriorityLevel, gn = a.unstable_ImmediatePriority, R = a.unstable_UserBlockingPriority, me = a.unstable_NormalPriority, Ge = a.unstable_LowPriority, Xt = a.unstable_IdlePriority, dt = null, Dt = null;
  function hr(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
      Dt.onCommitFiberRoot(dt, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var _t = Math.clz32 ? Math.clz32 : kh, ph = Math.log, vh = Math.LN2;
  function kh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ph(e) / vh | 0) | 0;
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
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - _t(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function yh(e, t) {
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
  function gh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - _t(u), k = 1 << h, S = l[h];
      S === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = yh(k, t)) : S <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Ra(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qo() {
    var e = fs;
    return fs <<= 1, (fs & 4194240) === 0 && (fs = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
  }
  function jh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - _t(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Oa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - _t(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var et = 0;
  function eu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var tu, $a, nu, iu, ru, Fa = !1, ps = [], Bn = null, Vn = null, Kn = null, vr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Un = [], xh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function su(e, t) {
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
  function Sh(e, t, n, i, l) {
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
  function au(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Dn(n), t !== null) {
            e.blockedOn = t, ru(e.priority, function() {
              nu(n);
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
        He = i, n.target.dispatchEvent(i), He = null;
      } else return t = Ar(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function lu(e, t, n) {
    vs(e) && n.delete(t);
  }
  function wh() {
    Fa = !1, Bn !== null && vs(Bn) && (Bn = null), Vn !== null && vs(Vn) && (Vn = null), Kn !== null && vs(Kn) && (Kn = null), vr.forEach(lu), kr.forEach(lu);
  }
  function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fa || (Fa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, wh)));
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
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) au(n), n.blockedOn === null && Un.shift();
  }
  var Pi = K.ReactCurrentBatchConfig, ks = !0;
  function Nh(e, t, n, i) {
    var l = et, u = Pi.transition;
    Pi.transition = null;
    try {
      et = 1, Ia(e, t, n, i);
    } finally {
      et = l, Pi.transition = u;
    }
  }
  function Eh(e, t, n, i) {
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
      if (l === null) nl(e, t, i, ys, n), su(e, i);
      else if (Sh(l, e, t, n, i)) i.stopPropagation();
      else if (su(e, i), t & 4 && -1 < xh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Ar(l);
          if (u !== null && tu(u), u = Da(e, t, n, i), u === null && nl(e, t, i, ys, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else nl(e, t, i, null, n);
    }
  }
  var ys = null;
  function Da(e, t, n, i) {
    if (ys = null, e = Xe(i), e = fi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Dn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ys = e, null;
  }
  function ou(e) {
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
          case me:
          case Ge:
            return 16;
          case Xt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, za = null, gs = null;
  function uu() {
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
  function cu() {
    return !1;
  }
  function Zt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? xs : cu, this.isPropagationStopped = cu, this;
    }
    return ie(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ba = Zt(Ai), xr = ie({}, Ai, { view: 0, detail: 0 }), Ch = Zt(xr), Va, Ka, Sr, Ss = ie({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Va = e.screenX - Sr.screenX, Ka = e.screenY - Sr.screenY) : Ka = Va = 0, Sr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ka;
  } }), du = Zt(Ss), Th = ie({}, Ss, { dataTransfer: 0 }), Mh = Zt(Th), _h = ie({}, xr, { relatedTarget: 0 }), Ua = Zt(_h), bh = ie({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ph = Zt(bh), Ah = ie({}, Ai, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Rh = Zt(Ah), Lh = ie({}, Ai, { data: 0 }), fu = Zt(Lh), Oh = {
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
  }, $h = {
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
  }, Fh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ih(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fh[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return Ih;
  }
  var Dh = ie({}, xr, { key: function(e) {
    if (e.key) {
      var t = Oh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $h[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), zh = Zt(Dh), Bh = ie({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = Zt(Bh), Vh = ie({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), Kh = Zt(Vh), Uh = ie({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hh = Zt(Uh), Gh = ie({}, Ss, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wh = Zt(Gh), Qh = [9, 13, 27, 32], Ga = m && "CompositionEvent" in window, wr = null;
  m && "documentMode" in document && (wr = document.documentMode);
  var Yh = m && "TextEvent" in window && !wr, mu = m && (!Ga || wr && 8 < wr && 11 >= wr), pu = " ", vu = !1;
  function ku(e, t) {
    switch (e) {
      case "keyup":
        return Qh.indexOf(t.keyCode) !== -1;
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
  function yu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ri = !1;
  function Jh(e, t) {
    switch (e) {
      case "compositionend":
        return yu(t);
      case "keypress":
        return t.which !== 32 ? null : (vu = !0, pu);
      case "textInput":
        return e = t.data, e === pu && vu ? null : e;
      default:
        return null;
    }
  }
  function Xh(e, t) {
    if (Ri) return e === "compositionend" || !Ga && ku(e, t) ? (e = uu(), gs = za = Hn = null, Ri = !1, e) : null;
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
        return mu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Zh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zh[e.type] : t === "textarea";
  }
  function ju(e, t, n, i) {
    cn(i), t = Ts(t, "onChange"), 0 < t.length && (n = new Ba("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Er = null;
  function qh(e) {
    Iu(e, 0);
  }
  function ws(e) {
    var t = Ii(e);
    if (ke(t)) return e;
  }
  function em(e, t) {
    if (e === "change") return t;
  }
  var xu = !1;
  if (m) {
    var Wa;
    if (m) {
      var Qa = "oninput" in document;
      if (!Qa) {
        var Su = document.createElement("div");
        Su.setAttribute("oninput", "return;"), Qa = typeof Su.oninput == "function";
      }
      Wa = Qa;
    } else Wa = !1;
    xu = Wa && (!document.documentMode || 9 < document.documentMode);
  }
  function wu() {
    Nr && (Nr.detachEvent("onpropertychange", Nu), Er = Nr = null);
  }
  function Nu(e) {
    if (e.propertyName === "value" && ws(Er)) {
      var t = [];
      ju(t, Er, e, Xe(e)), _i(qh, t);
    }
  }
  function tm(e, t, n) {
    e === "focusin" ? (wu(), Nr = t, Er = n, Nr.attachEvent("onpropertychange", Nu)) : e === "focusout" && wu();
  }
  function nm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ws(Er);
  }
  function im(e, t) {
    if (e === "click") return ws(t);
  }
  function rm(e, t) {
    if (e === "input" || e === "change") return ws(t);
  }
  function sm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var fn = typeof Object.is == "function" ? Object.is : sm;
  function Cr(e, t) {
    if (fn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!x.call(t, l) || !fn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Cu(e, t) {
    var n = Eu(e);
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
      n = Eu(n);
    }
  }
  function Tu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Mu() {
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
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function am(e) {
    var t = Mu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Tu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ya(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = Cu(n, u);
          var h = Cu(
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
  var lm = m && "documentMode" in document && 11 >= document.documentMode, Li = null, Ja = null, Tr = null, Xa = !1;
  function _u(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa || Li == null || Li !== ve(i) || (i = Li, "selectionStart" in i && Ya(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Tr && Cr(Tr, i) || (Tr = i, i = Ts(Ja, "onSelect"), 0 < i.length && (t = new Ba("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function Ns(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, Za = {}, bu = {};
  m && (bu = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Es(e) {
    if (Za[e]) return Za[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in bu) return Za[e] = t[n];
    return e;
  }
  var Pu = Es("animationend"), Au = Es("animationiteration"), Ru = Es("animationstart"), Lu = Es("transitionend"), Ou = /* @__PURE__ */ new Map(), $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gn(e, t) {
    Ou.set(e, t), f(t, [e]);
  }
  for (var qa = 0; qa < $u.length; qa++) {
    var el = $u[qa], om = el.toLowerCase(), um = el[0].toUpperCase() + el.slice(1);
    Gn(om, "on" + um);
  }
  Gn(Pu, "onAnimationEnd"), Gn(Au, "onAnimationIteration"), Gn(Ru, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(Lu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
  function Fu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, as(i, t, void 0, e), e.currentTarget = null;
  }
  function Iu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], S = k.instance, $ = k.currentTarget;
          if (k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Fu(l, k, $), u = S;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], S = k.instance, $ = k.currentTarget, k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Fu(l, k, $), u = S;
        }
      }
    }
    if (dn) throw e = In, dn = !1, In = null, e;
  }
  function lt(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Du(t, e, 2, !1), n.add(i));
  }
  function tl(e, t, n) {
    var i = 0;
    t && (i |= 4), Du(n, e, i, t);
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[Cs]) {
      e[Cs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (cm.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cs] || (t[Cs] = !0, tl("selectionchange", !1, t));
    }
  }
  function Du(e, t, n, i) {
    switch (ou(t)) {
      case 1:
        var l = Nh;
        break;
      case 4:
        l = Eh;
        break;
      default:
        l = Ia;
    }
    n = l.bind(null, t, n, e), l = void 0, !De || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
          var S = h.tag;
          if ((S === 3 || S === 4) && (S = h.stateNode.containerInfo, S === l || S.nodeType === 8 && S.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = fi(k), h === null) return;
          if (S = h.tag, S === 5 || S === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    _i(function() {
      var $ = u, Y = Xe(n), ee = [];
      e: {
        var Q = Ou.get(e);
        if (Q !== void 0) {
          var de = Ba, ye = e;
          switch (e) {
            case "keypress":
              if (js(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = zh;
              break;
            case "focusin":
              ye = "focus", de = Ua;
              break;
            case "focusout":
              ye = "blur", de = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ua;
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
              de = du;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Mh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Kh;
              break;
            case Pu:
            case Au:
            case Ru:
              de = Ph;
              break;
            case Lu:
              de = Hh;
              break;
            case "scroll":
              de = Ch;
              break;
            case "wheel":
              de = Wh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = hu;
          }
          var xe = (t & 4) !== 0, gt = !xe && e === "scroll", A = xe ? Q !== null ? Q + "Capture" : null : Q;
          xe = [];
          for (var T = $, L; T !== null; ) {
            L = T;
            var re = L.stateNode;
            if (L.tag === 5 && re !== null && (L = re, A !== null && (re = di(T, A), re != null && xe.push(br(T, re, L)))), gt) break;
            T = T.return;
          }
          0 < xe.length && (Q = new de(Q, ye, null, n, Y), ee.push({ event: Q, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== He && (ye = n.relatedTarget || n.fromElement) && (fi(ye) || ye[_n])) break e;
          if ((de || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (ye = n.relatedTarget || n.toElement, de = $, ye = ye ? fi(ye) : null, ye !== null && (gt = Mn(ye), ye !== gt || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (de = null, ye = $), de !== ye)) {
            if (xe = du, re = "onMouseLeave", A = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (xe = hu, re = "onPointerLeave", A = "onPointerEnter", T = "pointer"), gt = de == null ? Q : Ii(de), L = ye == null ? Q : Ii(ye), Q = new xe(re, T + "leave", de, n, Y), Q.target = gt, Q.relatedTarget = L, re = null, fi(Y) === $ && (xe = new xe(A, T + "enter", ye, n, Y), xe.target = L, xe.relatedTarget = gt, re = xe), gt = re, de && ye) t: {
              for (xe = de, A = ye, T = 0, L = xe; L; L = $i(L)) T++;
              for (L = 0, re = A; re; re = $i(re)) L++;
              for (; 0 < T - L; ) xe = $i(xe), T--;
              for (; 0 < L - T; ) A = $i(A), L--;
              for (; T--; ) {
                if (xe === A || A !== null && xe === A.alternate) break t;
                xe = $i(xe), A = $i(A);
              }
              xe = null;
            }
            else xe = null;
            de !== null && zu(ee, Q, de, xe, !1), ye !== null && gt !== null && zu(ee, gt, ye, xe, !0);
          }
        }
        e: {
          if (Q = $ ? Ii($) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var Ne = em;
          else if (gu(Q)) if (xu) Ne = rm;
          else {
            Ne = nm;
            var _e = tm;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Ne = im);
          if (Ne && (Ne = Ne(e, $))) {
            ju(ee, Ne, n, Y);
            break e;
          }
          _e && _e(e, Q, $), e === "focusout" && (_e = Q._wrapperState) && _e.controlled && Q.type === "number" && Ue(Q, "number", Q.value);
        }
        switch (_e = $ ? Ii($) : window, e) {
          case "focusin":
            (gu(_e) || _e.contentEditable === "true") && (Li = _e, Ja = $, Tr = null);
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
            Xa = !1, _u(ee, n, Y);
            break;
          case "selectionchange":
            if (lm) break;
          case "keydown":
          case "keyup":
            _u(ee, n, Y);
        }
        var be;
        if (Ga) e: {
          switch (e) {
            case "compositionstart":
              var Ae = "onCompositionStart";
              break e;
            case "compositionend":
              Ae = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ae = "onCompositionUpdate";
              break e;
          }
          Ae = void 0;
        }
        else Ri ? ku(e, n) && (Ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (mu && n.locale !== "ko" && (Ri || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Ri && (be = uu()) : (Hn = Y, za = "value" in Hn ? Hn.value : Hn.textContent, Ri = !0)), _e = Ts($, Ae), 0 < _e.length && (Ae = new fu(Ae, e, null, n, Y), ee.push({ event: Ae, listeners: _e }), be ? Ae.data = be : (be = yu(n), be !== null && (Ae.data = be)))), (be = Yh ? Jh(e, n) : Xh(e, n)) && ($ = Ts($, "onBeforeInput"), 0 < $.length && (Y = new fu("onBeforeInput", "beforeinput", null, n, Y), ee.push({ event: Y, listeners: $ }), Y.data = be));
      }
      Iu(ee, t);
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
  function zu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, S = k.alternate, $ = k.stateNode;
      if (S !== null && S === i) break;
      k.tag === 5 && $ !== null && (k = $, l ? (S = di(n, u), S != null && h.unshift(br(n, S, k))) : l || (S = di(n, u), S != null && h.push(br(n, S, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var dm = /\r\n?/g, fm = /\u0000|\uFFFD/g;
  function Bu(e) {
    return (typeof e == "string" ? e : "" + e).replace(dm, `
`).replace(fm, "");
  }
  function Ms(e, t, n) {
    if (t = Bu(t), Bu(e) !== t && n) throw Error(o(425));
  }
  function _s() {
  }
  var il = null, rl = null;
  function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, hm = typeof clearTimeout == "function" ? clearTimeout : void 0, Vu = typeof Promise == "function" ? Promise : void 0, mm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vu < "u" ? function(e) {
    return Vu.resolve(null).then(e).catch(pm);
  } : al;
  function pm(e) {
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
  function Ku(e) {
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
  var Fi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Fi, Pr = "__reactProps$" + Fi, _n = "__reactContainer$" + Fi, ol = "__reactEvents$" + Fi, vm = "__reactListeners$" + Fi, km = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ku(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = Ku(e);
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
  function st(e, t) {
    Di++, ul[Di] = e.current, e.current = t;
  }
  var Yn = {}, Rt = Qn(Yn), Ht = Qn(!1), hi = Yn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ps() {
    ot(Ht), ot(Rt);
  }
  function Uu(e, t, n) {
    if (Rt.current !== Yn) throw Error(o(168));
    st(Rt, t), st(Ht, n);
  }
  function Hu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, B(e) || "Unknown", l));
    return ie({}, n, i);
  }
  function As(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yn, hi = Rt.current, st(Rt, e), st(Ht, Ht.current), !0;
  }
  function Gu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Hu(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, ot(Ht), ot(Rt), st(Rt, e)) : ot(Ht), st(Ht, n);
  }
  var bn = null, Rs = !1, cl = !1;
  function Wu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function ym(e) {
    Rs = !0, Wu(e);
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
        throw bn !== null && (bn = bn.slice(e + 1)), Mt(gn, Jn), l;
      } finally {
        et = t, cl = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Ls = null, Os = 0, rn = [], sn = 0, mi = null, Pn = 1, An = "";
  function pi(e, t) {
    Bi[Vi++] = Os, Bi[Vi++] = Ls, Ls = e, Os = t;
  }
  function Qu(e, t, n) {
    rn[sn++] = Pn, rn[sn++] = An, rn[sn++] = mi, mi = e;
    var i = Pn;
    e = An;
    var l = 32 - _t(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - _t(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Pn = 1 << 32 - _t(t) + l | n << l | i, An = u + e;
    } else Pn = 1 << u | n << l | i, An = e;
  }
  function dl(e) {
    e.return !== null && (pi(e, 1), Qu(e, 1, 0));
  }
  function fl(e) {
    for (; e === Ls; ) Ls = Bi[--Vi], Bi[Vi] = null, Os = Bi[--Vi], Bi[Vi] = null;
    for (; e === mi; ) mi = rn[--sn], rn[sn] = null, An = rn[--sn], rn[sn] = null, Pn = rn[--sn], rn[sn] = null;
  }
  var qt = null, en = null, ut = !1, hn = null;
  function Yu(e, t) {
    var n = un(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ju(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, en = Wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, en = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = un(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, en = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (ut) {
      var t = en;
      if (t) {
        var n = t;
        if (!Ju(e, t)) {
          if (hl(e)) throw Error(o(418));
          t = Wn(n.nextSibling);
          var i = qt;
          t && Ju(e, t) ? Yu(i, n) : (e.flags = e.flags & -4097 | 2, ut = !1, qt = e);
        }
      } else {
        if (hl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, ut = !1, qt = e;
      }
    }
  }
  function Xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qt = e;
  }
  function $s(e) {
    if (e !== qt) return !1;
    if (!ut) return Xu(e), ut = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = en)) {
      if (hl(e)) throw Zu(), Error(o(418));
      for (; t; ) Yu(e, t), t = Wn(t.nextSibling);
    }
    if (Xu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                en = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        en = null;
      }
    } else en = qt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zu() {
    for (var e = en; e; ) e = Wn(e.nextSibling);
  }
  function Ki() {
    en = qt = null, ut = !1;
  }
  function pl(e) {
    hn === null ? hn = [e] : hn.push(e);
  }
  var gm = K.ReactCurrentBatchConfig;
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
  function qu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ec(e) {
    function t(A, T) {
      if (e) {
        var L = A.deletions;
        L === null ? (A.deletions = [T], A.flags |= 16) : L.push(T);
      }
    }
    function n(A, T) {
      if (!e) return null;
      for (; T !== null; ) t(A, T), T = T.sibling;
      return null;
    }
    function i(A, T) {
      for (A = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? A.set(T.key, T) : A.set(T.index, T), T = T.sibling;
      return A;
    }
    function l(A, T) {
      return A = ri(A, T), A.index = 0, A.sibling = null, A;
    }
    function u(A, T, L) {
      return A.index = L, e ? (L = A.alternate, L !== null ? (L = L.index, L < T ? (A.flags |= 2, T) : L) : (A.flags |= 2, T)) : (A.flags |= 1048576, T);
    }
    function h(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function k(A, T, L, re) {
      return T === null || T.tag !== 6 ? (T = ao(L, A.mode, re), T.return = A, T) : (T = l(T, L), T.return = A, T);
    }
    function S(A, T, L, re) {
      var Ne = L.type;
      return Ne === O ? Y(A, T, L.props.children, re, L.key) : T !== null && (T.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === ue && qu(Ne) === T.type) ? (re = l(T, L.props), re.ref = Rr(A, T, L), re.return = A, re) : (re = la(L.type, L.key, L.props, null, A.mode, re), re.ref = Rr(A, T, L), re.return = A, re);
    }
    function $(A, T, L, re) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== L.containerInfo || T.stateNode.implementation !== L.implementation ? (T = lo(L, A.mode, re), T.return = A, T) : (T = l(T, L.children || []), T.return = A, T);
    }
    function Y(A, T, L, re, Ne) {
      return T === null || T.tag !== 7 ? (T = wi(L, A.mode, re, Ne), T.return = A, T) : (T = l(T, L), T.return = A, T);
    }
    function ee(A, T, L) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = ao("" + T, A.mode, L), T.return = A, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case z:
            return L = la(T.type, T.key, T.props, null, A.mode, L), L.ref = Rr(A, null, T), L.return = A, L;
          case D:
            return T = lo(T, A.mode, L), T.return = A, T;
          case ue:
            var re = T._init;
            return ee(A, re(T._payload), L);
        }
        if (Ye(T) || ae(T)) return T = wi(T, A.mode, L, null), T.return = A, T;
        Fs(A, T);
      }
      return null;
    }
    function Q(A, T, L, re) {
      var Ne = T !== null ? T.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Ne !== null ? null : k(A, T, "" + L, re);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            return L.key === Ne ? S(A, T, L, re) : null;
          case D:
            return L.key === Ne ? $(A, T, L, re) : null;
          case ue:
            return Ne = L._init, Q(
              A,
              T,
              Ne(L._payload),
              re
            );
        }
        if (Ye(L) || ae(L)) return Ne !== null ? null : Y(A, T, L, re, null);
        Fs(A, L);
      }
      return null;
    }
    function de(A, T, L, re, Ne) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return A = A.get(L) || null, k(T, A, "" + re, Ne);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case z:
            return A = A.get(re.key === null ? L : re.key) || null, S(T, A, re, Ne);
          case D:
            return A = A.get(re.key === null ? L : re.key) || null, $(T, A, re, Ne);
          case ue:
            var _e = re._init;
            return de(A, T, L, _e(re._payload), Ne);
        }
        if (Ye(re) || ae(re)) return A = A.get(L) || null, Y(T, A, re, Ne, null);
        Fs(T, re);
      }
      return null;
    }
    function ye(A, T, L, re) {
      for (var Ne = null, _e = null, be = T, Ae = T = 0, Ct = null; be !== null && Ae < L.length; Ae++) {
        be.index > Ae ? (Ct = be, be = null) : Ct = be.sibling;
        var Je = Q(A, be, L[Ae], re);
        if (Je === null) {
          be === null && (be = Ct);
          break;
        }
        e && be && Je.alternate === null && t(A, be), T = u(Je, T, Ae), _e === null ? Ne = Je : _e.sibling = Je, _e = Je, be = Ct;
      }
      if (Ae === L.length) return n(A, be), ut && pi(A, Ae), Ne;
      if (be === null) {
        for (; Ae < L.length; Ae++) be = ee(A, L[Ae], re), be !== null && (T = u(be, T, Ae), _e === null ? Ne = be : _e.sibling = be, _e = be);
        return ut && pi(A, Ae), Ne;
      }
      for (be = i(A, be); Ae < L.length; Ae++) Ct = de(be, A, Ae, L[Ae], re), Ct !== null && (e && Ct.alternate !== null && be.delete(Ct.key === null ? Ae : Ct.key), T = u(Ct, T, Ae), _e === null ? Ne = Ct : _e.sibling = Ct, _e = Ct);
      return e && be.forEach(function(si) {
        return t(A, si);
      }), ut && pi(A, Ae), Ne;
    }
    function xe(A, T, L, re) {
      var Ne = ae(L);
      if (typeof Ne != "function") throw Error(o(150));
      if (L = Ne.call(L), L == null) throw Error(o(151));
      for (var _e = Ne = null, be = T, Ae = T = 0, Ct = null, Je = L.next(); be !== null && !Je.done; Ae++, Je = L.next()) {
        be.index > Ae ? (Ct = be, be = null) : Ct = be.sibling;
        var si = Q(A, be, Je.value, re);
        if (si === null) {
          be === null && (be = Ct);
          break;
        }
        e && be && si.alternate === null && t(A, be), T = u(si, T, Ae), _e === null ? Ne = si : _e.sibling = si, _e = si, be = Ct;
      }
      if (Je.done) return n(
        A,
        be
      ), ut && pi(A, Ae), Ne;
      if (be === null) {
        for (; !Je.done; Ae++, Je = L.next()) Je = ee(A, Je.value, re), Je !== null && (T = u(Je, T, Ae), _e === null ? Ne = Je : _e.sibling = Je, _e = Je);
        return ut && pi(A, Ae), Ne;
      }
      for (be = i(A, be); !Je.done; Ae++, Je = L.next()) Je = de(be, A, Ae, Je.value, re), Je !== null && (e && Je.alternate !== null && be.delete(Je.key === null ? Ae : Je.key), T = u(Je, T, Ae), _e === null ? Ne = Je : _e.sibling = Je, _e = Je);
      return e && be.forEach(function(Zm) {
        return t(A, Zm);
      }), ut && pi(A, Ae), Ne;
    }
    function gt(A, T, L, re) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            e: {
              for (var Ne = L.key, _e = T; _e !== null; ) {
                if (_e.key === Ne) {
                  if (Ne = L.type, Ne === O) {
                    if (_e.tag === 7) {
                      n(A, _e.sibling), T = l(_e, L.props.children), T.return = A, A = T;
                      break e;
                    }
                  } else if (_e.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === ue && qu(Ne) === _e.type) {
                    n(A, _e.sibling), T = l(_e, L.props), T.ref = Rr(A, _e, L), T.return = A, A = T;
                    break e;
                  }
                  n(A, _e);
                  break;
                } else t(A, _e);
                _e = _e.sibling;
              }
              L.type === O ? (T = wi(L.props.children, A.mode, re, L.key), T.return = A, A = T) : (re = la(L.type, L.key, L.props, null, A.mode, re), re.ref = Rr(A, T, L), re.return = A, A = re);
            }
            return h(A);
          case D:
            e: {
              for (_e = L.key; T !== null; ) {
                if (T.key === _e) if (T.tag === 4 && T.stateNode.containerInfo === L.containerInfo && T.stateNode.implementation === L.implementation) {
                  n(A, T.sibling), T = l(T, L.children || []), T.return = A, A = T;
                  break e;
                } else {
                  n(A, T);
                  break;
                }
                else t(A, T);
                T = T.sibling;
              }
              T = lo(L, A.mode, re), T.return = A, A = T;
            }
            return h(A);
          case ue:
            return _e = L._init, gt(A, T, _e(L._payload), re);
        }
        if (Ye(L)) return ye(A, T, L, re);
        if (ae(L)) return xe(A, T, L, re);
        Fs(A, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, T !== null && T.tag === 6 ? (n(A, T.sibling), T = l(T, L), T.return = A, A = T) : (n(A, T), T = ao(L, A.mode, re), T.return = A, A = T), h(A)) : n(A, T);
    }
    return gt;
  }
  var Ui = ec(!0), tc = ec(!1), Is = Qn(null), Ds = null, Hi = null, vl = null;
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
    Ds = e, vl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Wt = !0), e.firstContext = null);
  }
  function an(e) {
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
  function nc(e, t, n, i) {
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
  function ic(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ln(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (We & 2) !== 0) {
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
  function rc(e, t) {
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
      var S = k, $ = S.next;
      S.next = null, h === null ? u = $ : h.next = $, h = S;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, k = Y.lastBaseUpdate, k !== h && (k === null ? Y.firstBaseUpdate = $ : k.next = $, Y.lastBaseUpdate = S));
    }
    if (u !== null) {
      var ee = l.baseState;
      h = 0, Y = $ = S = null, k = u;
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
            var ye = e, xe = k;
            switch (Q = t, de = n, xe.tag) {
              case 1:
                if (ye = xe.payload, typeof ye == "function") {
                  ee = ye.call(de, ee, Q);
                  break e;
                }
                ee = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = xe.payload, Q = typeof ye == "function" ? ye.call(de, ee, Q) : ye, Q == null) break e;
                ee = ie({}, ee, Q);
                break e;
              case 2:
                Xn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else de = { eventTime: de, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Y === null ? ($ = Y = de, S = ee) : Y = Y.next = de, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (S = ee), l.baseState = S, l.firstBaseUpdate = $, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      gi |= h, e.lanes = h, e.memoizedState = ee;
    }
  }
  function sc(e, t, n) {
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
    switch (st($r, t), st(Or, e), st(xn, Lr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ft(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ft(t, e);
    }
    ot(xn), st(xn, t);
  }
  function Wi() {
    ot(xn), ot(Or), ot($r);
  }
  function ac(e) {
    ki($r.current);
    var t = ki(xn.current), n = Ft(t, e.type);
    t !== n && (st(Or, e), st(xn, n));
  }
  function wl(e) {
    Or.current === e && (ot(xn), ot(Or));
  }
  var ft = Qn(0);
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
  var Ks = K.ReactCurrentDispatcher, Cl = K.ReactCurrentBatchConfig, yi = 0, ht = null, St = null, Nt = null, Us = !1, Fr = !1, Ir = 0, jm = 0;
  function Lt() {
    throw Error(o(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!fn(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, i, l, u) {
    if (yi = u, ht = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ks.current = e === null || e.memoizedState === null ? Nm : Em, e = n(i, l), Fr) {
      u = 0;
      do {
        if (Fr = !1, Ir = 0, 25 <= u) throw Error(o(301));
        u += 1, Nt = St = null, t.updateQueue = null, Ks.current = Cm, e = n(i, l);
      } while (Fr);
    }
    if (Ks.current = Ws, t = St !== null && St.next !== null, yi = 0, Nt = St = ht = null, Us = !1, t) throw Error(o(300));
    return e;
  }
  function _l() {
    var e = Ir !== 0;
    return Ir = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? ht.memoizedState = Nt = e : Nt = Nt.next = e, Nt;
  }
  function ln() {
    if (St === null) {
      var e = ht.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = St.next;
    var t = Nt === null ? ht.memoizedState : Nt.next;
    if (t !== null) Nt = t, St = e;
    else {
      if (e === null) throw Error(o(310));
      St = e, e = { memoizedState: St.memoizedState, baseState: St.baseState, baseQueue: St.baseQueue, queue: St.queue, next: null }, Nt === null ? ht.memoizedState = Nt = e : Nt = Nt.next = e;
    }
    return Nt;
  }
  function Dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bl(e) {
    var t = ln(), n = t.queue;
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
      var k = h = null, S = null, $ = u;
      do {
        var Y = $.lane;
        if ((yi & Y) === Y) S !== null && (S = S.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), i = $.hasEagerState ? $.eagerState : e(i, $.action);
        else {
          var ee = {
            lane: Y,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          S === null ? (k = S = ee, h = i) : S = S.next = ee, ht.lanes |= Y, gi |= Y;
        }
        $ = $.next;
      } while ($ !== null && $ !== u);
      S === null ? h = i : S.next = k, fn(i, t.memoizedState) || (Wt = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = S, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ht.lanes |= u, gi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pl(e) {
    var t = ln(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      fn(u, t.memoizedState) || (Wt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function lc() {
  }
  function oc(e, t) {
    var n = ht, i = ln(), l = t(), u = !fn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Wt = !0), i = i.queue, Al(dc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || Nt !== null && Nt.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, cc.bind(null, n, i, l, t), void 0, null), Et === null) throw Error(o(349));
      (yi & 30) !== 0 || uc(n, t, l);
    }
    return l;
  }
  function uc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function cc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, fc(t) && hc(e);
  }
  function dc(e, t, n) {
    return n(function() {
      fc(t) && hc(e);
    });
  }
  function fc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !fn(e, n);
    } catch {
      return !0;
    }
  }
  function hc(e) {
    var t = Rn(e, 1);
    t !== null && kn(t, e, 1, -1);
  }
  function mc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wm.bind(null, ht, e), [t.memoizedState, e];
  }
  function zr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function pc() {
    return ln().memoizedState;
  }
  function Hs(e, t, n, i) {
    var l = Sn();
    ht.flags |= e, l.memoizedState = zr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Gs(e, t, n, i) {
    var l = ln();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (St !== null) {
      var h = St.memoizedState;
      if (u = h.destroy, i !== null && Tl(i, h.deps)) {
        l.memoizedState = zr(t, n, u, i);
        return;
      }
    }
    ht.flags |= e, l.memoizedState = zr(1 | t, n, u, i);
  }
  function vc(e, t) {
    return Hs(8390656, 8, e, t);
  }
  function Al(e, t) {
    return Gs(2048, 8, e, t);
  }
  function kc(e, t) {
    return Gs(4, 2, e, t);
  }
  function yc(e, t) {
    return Gs(4, 4, e, t);
  }
  function gc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function jc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gs(4, 4, gc.bind(null, t, e), n);
  }
  function Rl() {
  }
  function xc(e, t) {
    var n = ln();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function Sc(e, t) {
    var n = ln();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function wc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Wt = !0), e.memoizedState = n) : (fn(n, t) || (n = qo(), ht.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function xm(e, t) {
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
  function Nc() {
    return ln().memoizedState;
  }
  function Sm(e, t, n) {
    var i = ni(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Ec(e)) Cc(t, n);
    else if (n = nc(e, t, n, i), n !== null) {
      var l = Bt();
      kn(n, e, i, l), Tc(n, t, i);
    }
  }
  function wm(e, t, n) {
    var i = ni(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ec(e)) Cc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, fn(k, h)) {
          var S = t.interleaved;
          S === null ? (l.next = l, jl(t)) : (l.next = S.next, S.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = nc(e, t, l, i), n !== null && (l = Bt(), kn(n, e, i, l), Tc(n, t, i));
    }
  }
  function Ec(e) {
    var t = e.alternate;
    return e === ht || t !== null && t === ht;
  }
  function Cc(e, t) {
    Fr = Us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Tc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
    }
  }
  var Ws = { readContext: an, useCallback: Lt, useContext: Lt, useEffect: Lt, useImperativeHandle: Lt, useInsertionEffect: Lt, useLayoutEffect: Lt, useMemo: Lt, useReducer: Lt, useRef: Lt, useState: Lt, useDebugValue: Lt, useDeferredValue: Lt, useTransition: Lt, useMutableSource: Lt, useSyncExternalStore: Lt, useId: Lt, unstable_isNewReconciler: !1 }, Nm = { readContext: an, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: an, useEffect: vc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(
      4194308,
      4,
      gc.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Sm.bind(null, ht, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: mc, useDebugValue: Rl, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = mc(!1), t = e[0];
    return e = xm.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = ht, l = Sn();
    if (ut) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), Et === null) throw Error(o(349));
      (yi & 30) !== 0 || uc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, vc(dc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, zr(9, cc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = Et.identifierPrefix;
    if (ut) {
      var n = An, i = Pn;
      n = (i & ~(1 << 32 - _t(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = jm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Em = {
    readContext: an,
    useCallback: xc,
    useContext: an,
    useEffect: Al,
    useImperativeHandle: jc,
    useInsertionEffect: kc,
    useLayoutEffect: yc,
    useMemo: Sc,
    useReducer: bl,
    useRef: pc,
    useState: function() {
      return bl(Dr);
    },
    useDebugValue: Rl,
    useDeferredValue: function(e) {
      var t = ln();
      return wc(t, St.memoizedState, e);
    },
    useTransition: function() {
      var e = bl(Dr)[0], t = ln().memoizedState;
      return [e, t];
    },
    useMutableSource: lc,
    useSyncExternalStore: oc,
    useId: Nc,
    unstable_isNewReconciler: !1
  }, Cm = { readContext: an, useCallback: xc, useContext: an, useEffect: Al, useImperativeHandle: jc, useInsertionEffect: kc, useLayoutEffect: yc, useMemo: Sc, useReducer: Pl, useRef: pc, useState: function() {
    return Pl(Dr);
  }, useDebugValue: Rl, useDeferredValue: function(e) {
    var t = ln();
    return St === null ? t.memoizedState = e : wc(t, St.memoizedState, e);
  }, useTransition: function() {
    var e = Pl(Dr)[0], t = ln().memoizedState;
    return [e, t];
  }, useMutableSource: lc, useSyncExternalStore: oc, useId: Nc, unstable_isNewReconciler: !1 };
  function mn(e, t) {
    if (e && e.defaultProps) {
      t = ie({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ll(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
  function Mc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, i) || !Cr(l, u) : !0;
  }
  function _c(e, t, n) {
    var i = !1, l = Yn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = an(u) : (l = Gt(t) ? hi : Rt.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Yn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function bc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function Ol(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = an(u) : (u = Gt(t) ? hi : Rt.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ll(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Qs.enqueueReplaceState(l, l.state, null), Bs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += Ce(i), i = i.return;
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
  var Tm = typeof WeakMap == "function" ? WeakMap : Map;
  function Pc(e, t, n) {
    n = Ln(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ta || (ta = !0, Zl = i), Fl(e, t);
    }, n;
  }
  function Ac(e, t, n) {
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
  function Rc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Tm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Bm.bind(null, e, t, n), t.then(e, e));
  }
  function Lc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Oc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1), t.tag = 2, Zn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Mm = K.ReactCurrentOwner, Wt = !1;
  function zt(e, t, n, i) {
    t.child = e === null ? tc(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function $c(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Ml(e, t, n, i, u, l), n = _l(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (ut && n && dl(t), t.flags |= 1, zt(e, t, i, l), t.child);
  }
  function Fc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !so(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Ic(e, t, u, i, l)) : (e = la(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = ri(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ic(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, i) && e.ref === t.ref) if (Wt = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Wt = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return Il(e, t, n, i, l);
  }
  function Dc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, st(Ji, tn), tn |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, st(Ji, tn), tn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, st(Ji, tn), tn |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, st(Ji, tn), tn |= i;
    return zt(e, t, l, n), t.child;
  }
  function zc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, i, l) {
    var u = Gt(n) ? hi : Rt.current;
    return u = zi(t, u), Gi(t, l), n = Ml(e, t, n, i, u, l), i = _l(), e !== null && !Wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (ut && i && dl(t), t.flags |= 1, zt(e, t, n, l), t.child);
  }
  function Bc(e, t, n, i, l) {
    if (Gt(n)) {
      var u = !0;
      As(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Js(e, t), _c(t, n, i), Ol(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var S = h.context, $ = n.contextType;
      typeof $ == "object" && $ !== null ? $ = an($) : ($ = Gt(n) ? hi : Rt.current, $ = zi(t, $));
      var Y = n.getDerivedStateFromProps, ee = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      ee || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || S !== $) && bc(t, h, i, $), Xn = !1;
      var Q = t.memoizedState;
      h.state = Q, Bs(t, i, h, l), S = t.memoizedState, k !== i || Q !== S || Ht.current || Xn ? (typeof Y == "function" && (Ll(t, n, Y, i), S = t.memoizedState), (k = Xn || Mc(t, n, k, i, Q, S, $)) ? (ee || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = S), h.props = i, h.state = S, h.context = $, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ic(e, t), k = t.memoizedProps, $ = t.type === t.elementType ? k : mn(t.type, k), h.props = $, ee = t.pendingProps, Q = h.context, S = n.contextType, typeof S == "object" && S !== null ? S = an(S) : (S = Gt(n) ? hi : Rt.current, S = zi(t, S));
      var de = n.getDerivedStateFromProps;
      (Y = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== ee || Q !== S) && bc(t, h, i, S), Xn = !1, Q = t.memoizedState, h.state = Q, Bs(t, i, h, l);
      var ye = t.memoizedState;
      k !== ee || Q !== ye || Ht.current || Xn ? (typeof de == "function" && (Ll(t, n, de, i), ye = t.memoizedState), ($ = Xn || Mc(t, n, $, i, Q, ye, S) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ye, S), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ye, S)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ye), h.props = i, h.state = ye, h.context = S, i = $) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Dl(e, t, n, i, u, l);
  }
  function Dl(e, t, n, i, l, u) {
    zc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Gu(t, n, !1), On(e, t, u);
    i = t.stateNode, Mm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : zt(e, t, k, u), t.memoizedState = i.state, l && Gu(t, n, !0), t.child;
  }
  function Vc(e) {
    var t = e.stateNode;
    t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function Kc(e, t, n, i, l) {
    return Ki(), pl(l), t.flags |= 256, zt(e, t, n, i), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Uc(e, t, n) {
    var i = t.pendingProps, l = ft.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), st(ft, l & 1), e === null)
      return ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = oa(h, i, 0, null), e = wi(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Bl(n), t.memoizedState = zl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return _m(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var S = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = S, t.deletions = null) : (i = ri(l, S), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = ri(k, u) : (u = wi(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Bl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = zl, i;
    }
    return u = e.child, e = u.sibling, i = ri(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ys(e, t, n, i) {
    return i !== null && pl(i), Ui(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function _m(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = $l(Error(o(422))), Ys(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = oa({ mode: "visible", children: i.children }, l, 0, null), u = wi(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = Bl(h), t.memoizedState = zl, u);
    if ((t.mode & 1) === 0) return Ys(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = $l(u, i, void 0), Ys(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Wt || k) {
      if (i = Et, i !== null) {
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
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, en = Wn(l.nextSibling), qt = t, ut = !0, hn = null, e !== null && (rn[sn++] = Pn, rn[sn++] = An, rn[sn++] = mi, Pn = e.id, An = e.overflow, mi = t), t = Vl(t, i.children), t.flags |= 4096, t);
  }
  function Hc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), gl(e.return, t, n);
  }
  function Kl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Gc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (zt(e, t, i.children, n), i = ft.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hc(e, n, t);
        else if (e.tag === 19) Hc(e, n, t);
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
    if (st(ft, i), (t.mode & 1) === 0) t.memoizedState = null;
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
  function bm(e, t, n) {
    switch (t.tag) {
      case 3:
        Vc(t), Ki();
        break;
      case 5:
        ac(t);
        break;
      case 1:
        Gt(t.type) && As(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        st(Is, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (st(ft, ft.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Uc(e, t, n) : (st(ft, ft.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        st(ft, ft.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Gc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), st(ft, ft.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Dc(e, t, n);
    }
    return On(e, t, n);
  }
  var Wc, Ul, Qc, Yc;
  Wc = function(e, t) {
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
  }, Qc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(xn.current);
      var u = null;
      switch (n) {
        case "input":
          l = we(e, l), i = we(e, i), u = [];
          break;
        case "select":
          l = ie({}, l, { value: void 0 }), i = ie({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = jt(e, l), i = jt(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = _s);
      }
      Se(n, i);
      var h;
      n = null;
      for ($ in l) if (!i.hasOwnProperty($) && l.hasOwnProperty($) && l[$] != null) if ($ === "style") {
        var k = l[$];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (d.hasOwnProperty($) ? u || (u = []) : (u = u || []).push($, null));
      for ($ in i) {
        var S = i[$];
        if (k = l?.[$], i.hasOwnProperty($) && S !== k && (S != null || k != null)) if ($ === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || S && S.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in S) S.hasOwnProperty(h) && k[h] !== S[h] && (n || (n = {}), n[h] = S[h]);
        } else n || (u || (u = []), u.push(
          $,
          n
        )), n = S;
        else $ === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, k = k ? k.__html : void 0, S != null && k !== S && (u = u || []).push($, S)) : $ === "children" ? typeof S != "string" && typeof S != "number" || (u = u || []).push($, "" + S) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (d.hasOwnProperty($) ? (S != null && $ === "onScroll" && lt("scroll", e), u || k === S || (u = [])) : (u = u || []).push($, S));
      }
      n && (u = u || []).push("style", n);
      var $ = u;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, Yc = function(e, t, n, i) {
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
  function Ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Pm(e, t, n) {
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
        return Ot(t), null;
      case 1:
        return Gt(t.type) && Ps(), Ot(t), null;
      case 3:
        return i = t.stateNode, Wi(), ot(Ht), ot(Rt), El(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && ($s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hn !== null && (to(hn), hn = null))), Ul(e, t), Ot(t), null;
      case 5:
        wl(t);
        var l = ki($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Qc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Ot(t), null;
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
                Re(i, u), lt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, lt("invalid", i);
                break;
              case "textarea":
                qe(i, u), lt("invalid", i);
            }
            Se(n, u), l = null;
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
                Me(i), tt(i, u, !0);
                break;
              case "textarea":
                Me(i), nt(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = _s);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[jn] = t, e[Pr] = i, Wc(e, t, !1, !1), t.stateNode = e;
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
                  Re(e, i), l = we(e, i), lt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = ie({}, i, { value: void 0 }), lt("invalid", e);
                  break;
                case "textarea":
                  qe(e, i), l = jt(e, i), lt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Se(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var S = k[u];
                u === "style" ? Fe(e, S) : u === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && Kt(e, S)) : u === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && It(e, S) : typeof S == "number" && It(e, "" + S) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? S != null && u === "onScroll" && lt("scroll", e) : S != null && U(e, u, S, h));
              }
              switch (n) {
                case "input":
                  Me(e), tt(e, i, !1);
                  break;
                case "textarea":
                  Me(e), nt(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + J(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? rt(e, !!i.multiple, u, !1) : i.defaultValue != null && rt(
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
        return Ot(t), null;
      case 6:
        if (e && t.stateNode != null) Yc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = ki($r.current), ki(xn.current), $s(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[jn] = t, (u = i.nodeValue !== n) && (e = qt, e !== null)) switch (e.tag) {
              case 3:
                Ms(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ms(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[jn] = t, t.stateNode = i;
        }
        return Ot(t), null;
      case 13:
        if (ot(ft), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ut && en !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Zu(), Ki(), t.flags |= 98560, u = !1;
          else if (u = $s(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[jn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ot(t), u = !1;
          } else hn !== null && (to(hn), hn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ft.current & 1) !== 0 ? wt === 0 && (wt = 3) : ro())), t.updateQueue !== null && (t.flags |= 4), Ot(t), null);
      case 4:
        return Wi(), Ul(e, t), e === null && _r(t.stateNode.containerInfo), Ot(t), null;
      case 10:
        return yl(t.type._context), Ot(t), null;
      case 17:
        return Gt(t.type) && Ps(), Ot(t), null;
      case 19:
        if (ot(ft), u = t.memoizedState, u === null) return Ot(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Br(u, !1);
        else {
          if (wt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Vs(e), h !== null) {
              for (t.flags |= 128, Br(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return st(ft, ft.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ct() > Xi && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !ut) return Ot(t), null;
          } else 2 * ct() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ct(), t.sibling = null, n = ft.current, st(ft, i ? n & 1 | 2 : n & 1), t) : (Ot(t), null);
      case 22:
      case 23:
        return io(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (tn & 1073741824) !== 0 && (Ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ot(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Am(e, t) {
    switch (fl(t), t.tag) {
      case 1:
        return Gt(t.type) && Ps(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), ot(Ht), ot(Rt), El(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wl(t), null;
      case 13:
        if (ot(ft), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ot(ft), null;
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
  var Xs = !1, $t = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
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
  var Jc = !1;
  function Lm(e, t) {
    if (il = ks, e = Mu(), Ya(e)) {
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
          var h = 0, k = -1, S = -1, $ = 0, Y = 0, ee = e, Q = null;
          t: for (; ; ) {
            for (var de; ee !== n || l !== 0 && ee.nodeType !== 3 || (k = h + l), ee !== u || i !== 0 && ee.nodeType !== 3 || (S = h + i), ee.nodeType === 3 && (h += ee.nodeValue.length), (de = ee.firstChild) !== null; )
              Q = ee, ee = de;
            for (; ; ) {
              if (ee === e) break t;
              if (Q === n && ++$ === l && (k = h), Q === u && ++Y === i && (S = h), (de = ee.nextSibling) !== null) break;
              ee = Q, Q = ee.parentNode;
            }
            ee = de;
          }
          n = k === -1 || S === -1 ? null : { start: k, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (rl = { focusedElem: e, selectionRange: n }, ks = !1, pe = t; pe !== null; ) if (t = pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pe = e;
    else for (; pe !== null; ) {
      t = pe;
      try {
        var ye = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var xe = ye.memoizedProps, gt = ye.memoizedState, A = t.stateNode, T = A.getSnapshotBeforeUpdate(t.elementType === t.type ? xe : mn(t.type, xe), gt);
              A.__reactInternalSnapshotBeforeUpdate = T;
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
      } catch (re) {
        pt(t, t.return, re);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return ye = Jc, Jc = !1, ye;
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
  function Xc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Pr], delete t[ol], delete t[vm], delete t[km])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zc(e.return)) return null;
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
  var bt = null, pn = !1;
  function qn(e, t, n) {
    for (n = n.child; n !== null; ) ed(e, t, n), n = n.sibling;
  }
  function ed(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
      Dt.onCommitFiberUnmount(dt, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        $t || Yi(n, t);
      case 6:
        var i = bt, l = pn;
        bt = null, qn(e, t, n), bt = i, pn = l, bt !== null && (pn ? (e = bt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : bt.removeChild(n.stateNode));
        break;
      case 18:
        bt !== null && (pn ? (e = bt, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), jr(e)) : ll(bt, n.stateNode));
        break;
      case 4:
        i = bt, l = pn, bt = n.stateNode.containerInfo, pn = !0, qn(e, t, n), bt = i, pn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$t && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        qn(e, t, n);
        break;
      case 1:
        if (!$t && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? ($t = (i = $t) || n.memoizedState !== null, qn(e, t, n), $t = i) : qn(e, t, n);
        break;
      default:
        qn(e, t, n);
    }
  }
  function td(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rm()), t.forEach(function(i) {
        var l = Km.bind(null, e, i);
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
              bt = k.stateNode, pn = !1;
              break e;
            case 3:
              bt = k.stateNode.containerInfo, pn = !0;
              break e;
            case 4:
              bt = k.stateNode.containerInfo, pn = !0;
              break e;
          }
          k = k.return;
        }
        if (bt === null) throw Error(o(160));
        ed(u, h, l), bt = null, pn = !1;
        var S = l.alternate;
        S !== null && (S.return = null), l.return = null;
      } catch ($) {
        pt(l, t, $);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) nd(t, e), t = t.sibling;
  }
  function nd(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(t, e), wn(e), i & 4) {
          try {
            Vr(3, e, e.return), Zs(3, e);
          } catch (xe) {
            pt(e, e.return, xe);
          }
          try {
            Vr(5, e, e.return);
          } catch (xe) {
            pt(e, e.return, xe);
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
            It(l, "");
          } catch (xe) {
            pt(e, e.return, xe);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Te(l, u), Le(k, h);
            var $ = Le(k, u);
            for (h = 0; h < S.length; h += 2) {
              var Y = S[h], ee = S[h + 1];
              Y === "style" ? Fe(l, ee) : Y === "dangerouslySetInnerHTML" ? Kt(l, ee) : Y === "children" ? It(l, ee) : U(l, Y, ee, $);
            }
            switch (k) {
              case "input":
                Be(l, u);
                break;
              case "textarea":
                $e(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? rt(l, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? rt(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : rt(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Pr] = u;
          } catch (xe) {
            pt(e, e.return, xe);
          }
        }
        break;
      case 6:
        if (vn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (xe) {
            pt(e, e.return, xe);
          }
        }
        break;
      case 3:
        if (vn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (xe) {
          pt(e, e.return, xe);
        }
        break;
      case 4:
        vn(t, e), wn(e);
        break;
      case 13:
        vn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xl = ct())), i & 4 && td(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? ($t = ($ = $t) || Y, vn(t, e), $t = $) : vn(t, e), wn(e), i & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !Y && (e.mode & 1) !== 0) for (pe = e, Y = e.child; Y !== null; ) {
            for (ee = pe = Y; pe !== null; ) {
              switch (Q = pe, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, Q, Q.return);
                  break;
                case 1:
                  Yi(Q, Q.return);
                  var ye = Q.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ye.props = t.memoizedProps, ye.state = t.memoizedState, ye.componentWillUnmount();
                    } catch (xe) {
                      pt(i, n, xe);
                    }
                  }
                  break;
                case 5:
                  Yi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    sd(ee);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, pe = de) : sd(ee);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, ee = e; ; ) {
            if (ee.tag === 5) {
              if (Y === null) {
                Y = ee;
                try {
                  l = ee.stateNode, $ ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = ee.stateNode, S = ee.memoizedProps.style, h = S != null && S.hasOwnProperty("display") ? S.display : null, k.style.display = te("display", h));
                } catch (xe) {
                  pt(e, e.return, xe);
                }
              }
            } else if (ee.tag === 6) {
              if (Y === null) try {
                ee.stateNode.nodeValue = $ ? "" : ee.memoizedProps;
              } catch (xe) {
                pt(e, e.return, xe);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === e) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === e) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === e) break e;
              Y === ee && (Y = null), ee = ee.return;
            }
            Y === ee && (Y = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        vn(t, e), wn(e), i & 4 && td(e);
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
            if (Zc(n)) {
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
            i.flags & 32 && (It(l, ""), i.flags &= -33);
            var u = qc(e);
            Ql(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = qc(e);
            Wl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        pt(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Om(e, t, n) {
    pe = e, id(e);
  }
  function id(e, t, n) {
    for (var i = (e.mode & 1) !== 0; pe !== null; ) {
      var l = pe, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Xs;
        if (!h) {
          var k = l.alternate, S = k !== null && k.memoizedState !== null || $t;
          k = Xs;
          var $ = $t;
          if (Xs = h, ($t = S) && !$) for (pe = l; pe !== null; ) h = pe, S = h.child, h.tag === 22 && h.memoizedState !== null ? ad(l) : S !== null ? (S.return = h, pe = S) : ad(l);
          for (; u !== null; ) pe = u, id(u), u = u.sibling;
          pe = l, Xs = k, $t = $;
        }
        rd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, pe = u) : rd(e);
    }
  }
  function rd(e) {
    for (; pe !== null; ) {
      var t = pe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $t || Zs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !$t) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && sc(t, u, i);
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
                sc(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && n.focus();
                    break;
                  case "img":
                    S.src && (n.src = S.src);
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
                var $ = t.alternate;
                if ($ !== null) {
                  var Y = $.memoizedState;
                  if (Y !== null) {
                    var ee = Y.dehydrated;
                    ee !== null && jr(ee);
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
          $t || t.flags & 512 && Gl(t);
        } catch (Q) {
          pt(t, t.return, Q);
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
  function sd(e) {
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
  function ad(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zs(4, t);
            } catch (S) {
              pt(t, n, S);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (S) {
                pt(t, l, S);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (S) {
              pt(t, u, S);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Gl(t);
            } catch (S) {
              pt(t, h, S);
            }
        }
      } catch (S) {
        pt(t, t.return, S);
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
  var $m = Math.ceil, qs = K.ReactCurrentDispatcher, Yl = K.ReactCurrentOwner, on = K.ReactCurrentBatchConfig, We = 0, Et = null, xt = null, Pt = 0, tn = 0, Ji = Qn(0), wt = 0, Kr = null, gi = 0, ea = 0, Jl = 0, Ur = null, Qt = null, Xl = 0, Xi = 1 / 0, $n = null, ta = !1, Zl = null, ei = null, na = !1, ti = null, ia = 0, Hr = 0, ql = null, ra = -1, sa = 0;
  function Bt() {
    return (We & 6) !== 0 ? ct() : ra !== -1 ? ra : ra = ct();
  }
  function ni(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && Pt !== 0 ? Pt & -Pt : gm.transition !== null ? (sa === 0 && (sa = qo()), sa) : (e = et, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ou(e.type)), e);
  }
  function kn(e, t, n, i) {
    if (50 < Hr) throw Hr = 0, ql = null, Error(o(185));
    pr(e, n, i), ((We & 2) === 0 || e !== Et) && (e === Et && ((We & 2) === 0 && (ea |= n), wt === 4 && ii(e, Pt)), Yt(e, i), n === 1 && We === 0 && (t.mode & 1) === 0 && (Xi = ct() + 500, Rs && Jn()));
  }
  function Yt(e, t) {
    var n = e.callbackNode;
    gh(e, t);
    var i = ms(e, e === Et ? Pt : 0);
    if (i === 0) n !== null && cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && cs(n), t === 1) e.tag === 0 ? ym(od.bind(null, e)) : Wu(od.bind(null, e)), mm(function() {
        (We & 6) === 0 && Jn();
      }), n = null;
      else {
        switch (eu(i)) {
          case 1:
            n = gn;
            break;
          case 4:
            n = R;
            break;
          case 16:
            n = me;
            break;
          case 536870912:
            n = Xt;
            break;
          default:
            n = me;
        }
        n = vd(n, ld.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ld(e, t) {
    if (ra = -1, sa = 0, (We & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = ms(e, e === Et ? Pt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = aa(e, i);
    else {
      t = i;
      var l = We;
      We |= 2;
      var u = cd();
      (Et !== e || Pt !== t) && ($n = null, Xi = ct() + 500, xi(e, t));
      do
        try {
          Dm();
          break;
        } catch (k) {
          ud(e, k);
        }
      while (!0);
      kl(), qs.current = u, We = l, xt !== null ? t = 0 : (Et = null, Pt = 0, t = wt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ra(e), l !== 0 && (i = l, t = eo(e, l))), t === 1) throw n = Kr, xi(e, 0), ii(e, i), Yt(e, ct()), n;
      if (t === 6) ii(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Fm(l) && (t = aa(e, i), t === 2 && (u = Ra(e), u !== 0 && (i = u, t = eo(e, u))), t === 1)) throw n = Kr, xi(e, 0), ii(e, i), Yt(e, ct()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Si(e, Qt, $n);
            break;
          case 3:
            if (ii(e, i), (i & 130023424) === i && (t = Xl + 500 - ct(), 10 < t)) {
              if (ms(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Bt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = al(Si.bind(null, e, Qt, $n), t);
              break;
            }
            Si(e, Qt, $n);
            break;
          case 4:
            if (ii(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - _t(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = ct() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * $m(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = al(Si.bind(null, e, Qt, $n), i);
              break;
            }
            Si(e, Qt, $n);
            break;
          case 5:
            Si(e, Qt, $n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Yt(e, ct()), e.callbackNode === n ? ld.bind(null, e) : null;
  }
  function eo(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = Qt, Qt = n, t !== null && to(t)), e;
  }
  function to(e) {
    Qt === null ? Qt = e : Qt.push.apply(Qt, e);
  }
  function Fm(e) {
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
      var n = 31 - _t(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function od(e) {
    if ((We & 6) !== 0) throw Error(o(327));
    Zi();
    var t = ms(e, 0);
    if ((t & 1) === 0) return Yt(e, ct()), null;
    var n = aa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ra(e);
      i !== 0 && (t = i, n = eo(e, i));
    }
    if (n === 1) throw n = Kr, xi(e, 0), ii(e, t), Yt(e, ct()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, Qt, $n), Yt(e, ct()), null;
  }
  function no(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (Xi = ct() + 500, Rs && Jn());
    }
  }
  function ji(e) {
    ti !== null && ti.tag === 0 && (We & 6) === 0 && Zi();
    var t = We;
    We |= 1;
    var n = on.transition, i = et;
    try {
      if (on.transition = null, et = 1, e) return e();
    } finally {
      et = i, on.transition = n, We = t, (We & 6) === 0 && Jn();
    }
  }
  function io() {
    tn = Ji.current, ot(Ji);
  }
  function xi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, hm(n)), xt !== null) for (n = xt.return; n !== null; ) {
      var i = n;
      switch (fl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ps();
          break;
        case 3:
          Wi(), ot(Ht), ot(Rt), El();
          break;
        case 5:
          wl(i);
          break;
        case 4:
          Wi();
          break;
        case 13:
          ot(ft);
          break;
        case 19:
          ot(ft);
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
    if (Et = e, xt = e = ri(e.current, null), Pt = tn = t, wt = 0, Kr = null, Jl = ea = gi = 0, Qt = Ur = null, vi !== null) {
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
  function ud(e, t) {
    do {
      var n = xt;
      try {
        if (kl(), Ks.current = Ws, Us) {
          for (var i = ht.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Us = !1;
        }
        if (yi = 0, Nt = St = ht = null, Fr = !1, Ir = 0, Yl.current = null, n === null || n.return === null) {
          wt = 1, Kr = t, xt = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, S = t;
          if (t = Pt, k.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var $ = S, Y = k, ee = Y.tag;
            if ((Y.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var de = Lc(h);
            if (de !== null) {
              de.flags &= -257, Oc(de, h, k, u, t), de.mode & 1 && Rc(u, $, t), t = de, S = $;
              var ye = t.updateQueue;
              if (ye === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(S), t.updateQueue = xe;
              } else ye.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Rc(u, $, t), ro();
                break e;
              }
              S = Error(o(426));
            }
          } else if (ut && k.mode & 1) {
            var gt = Lc(h);
            if (gt !== null) {
              (gt.flags & 65536) === 0 && (gt.flags |= 256), Oc(gt, h, k, u, t), pl(Qi(S, k));
              break e;
            }
          }
          u = S = Qi(S, k), wt !== 4 && (wt = 2), Ur === null ? Ur = [u] : Ur.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var A = Pc(u, S, t);
                rc(u, A);
                break e;
              case 1:
                k = S;
                var T = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ei === null || !ei.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var re = Ac(u, k, t);
                  rc(u, re);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        fd(n);
      } catch (Ne) {
        t = Ne, xt === n && n !== null && (xt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function cd() {
    var e = qs.current;
    return qs.current = Ws, e === null ? Ws : e;
  }
  function ro() {
    (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Et === null || (gi & 268435455) === 0 && (ea & 268435455) === 0 || ii(Et, Pt);
  }
  function aa(e, t) {
    var n = We;
    We |= 2;
    var i = cd();
    (Et !== e || Pt !== t) && ($n = null, xi(e, t));
    do
      try {
        Im();
        break;
      } catch (l) {
        ud(e, l);
      }
    while (!0);
    if (kl(), We = n, qs.current = i, xt !== null) throw Error(o(261));
    return Et = null, Pt = 0, wt;
  }
  function Im() {
    for (; xt !== null; ) dd(xt);
  }
  function Dm() {
    for (; xt !== null && !ds(); ) dd(xt);
  }
  function dd(e) {
    var t = pd(e.alternate, e, tn);
    e.memoizedProps = e.pendingProps, t === null ? fd(e) : xt = t, Yl.current = null;
  }
  function fd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Pm(n, t, tn), n !== null) {
          xt = n;
          return;
        }
      } else {
        if (n = Am(n, t), n !== null) {
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
    var i = et, l = on.transition;
    try {
      on.transition = null, et = 1, zm(e, t, n, i);
    } finally {
      on.transition = l, et = i;
    }
    return null;
  }
  function zm(e, t, n, i) {
    do
      Zi();
    while (ti !== null);
    if ((We & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (jh(e, u), e === Et && (xt = Et = null, Pt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || na || (na = !0, vd(me, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = on.transition, on.transition = null;
      var h = et;
      et = 1;
      var k = We;
      We |= 4, Yl.current = null, Lm(e, n), nd(n, e), am(rl), ks = !!il, rl = il = null, e.current = n, Om(n), Aa(), We = k, et = h, on.transition = u;
    } else e.current = n;
    if (na && (na = !1, ti = e, ia = l), u = e.pendingLanes, u === 0 && (ei = null), hr(n.stateNode), Yt(e, ct()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ta) throw ta = !1, e = Zl, Zl = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === ql ? Hr++ : (Hr = 0, ql = e) : Hr = 0, Jn(), null;
  }
  function Zi() {
    if (ti !== null) {
      var e = eu(ia), t = on.transition, n = et;
      try {
        if (on.transition = null, et = 16 > e ? 16 : e, ti === null) var i = !1;
        else {
          if (e = ti, ti = null, ia = 0, (We & 6) !== 0) throw Error(o(331));
          var l = We;
          for (We |= 4, pe = e.current; pe !== null; ) {
            var u = pe, h = u.child;
            if ((pe.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var S = 0; S < k.length; S++) {
                  var $ = k[S];
                  for (pe = $; pe !== null; ) {
                    var Y = pe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vr(8, Y, u);
                    }
                    var ee = Y.child;
                    if (ee !== null) ee.return = Y, pe = ee;
                    else for (; pe !== null; ) {
                      Y = pe;
                      var Q = Y.sibling, de = Y.return;
                      if (Xc(Y), Y === $) {
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
                var ye = u.alternate;
                if (ye !== null) {
                  var xe = ye.child;
                  if (xe !== null) {
                    ye.child = null;
                    do {
                      var gt = xe.sibling;
                      xe.sibling = null, xe = gt;
                    } while (xe !== null);
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
                  Vr(9, u, u.return);
              }
              var A = u.sibling;
              if (A !== null) {
                A.return = u.return, pe = A;
                break e;
              }
              pe = u.return;
            }
          }
          var T = e.current;
          for (pe = T; pe !== null; ) {
            h = pe;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, pe = L;
            else e: for (h = T; pe !== null; ) {
              if (k = pe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zs(9, k);
                }
              } catch (Ne) {
                pt(k, k.return, Ne);
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
          if (We = l, Jn(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
            Dt.onPostCommitFiberRoot(dt, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        et = n, on.transition = t;
      }
    }
    return !1;
  }
  function hd(e, t, n) {
    t = Qi(n, t), t = Pc(e, t, 1), e = Zn(e, t, 1), t = Bt(), e !== null && (pr(e, 1, t), Yt(e, t));
  }
  function pt(e, t, n) {
    if (e.tag === 3) hd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        hd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ei === null || !ei.has(i))) {
          e = Qi(n, e), e = Ac(t, e, 1), t = Zn(t, e, 1), e = Bt(), t !== null && (pr(t, 1, e), Yt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Bm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Bt(), e.pingedLanes |= e.suspendedLanes & n, Et === e && (Pt & n) === n && (wt === 4 || wt === 3 && (Pt & 130023424) === Pt && 500 > ct() - Xl ? xi(e, 0) : Jl |= n), Yt(e, t);
  }
  function md(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = hs, hs <<= 1, (hs & 130023424) === 0 && (hs = 4194304)));
    var n = Bt();
    e = Rn(e, t), e !== null && (pr(e, t, n), Yt(e, n));
  }
  function Vm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), md(e, n);
  }
  function Km(e, t) {
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
    i !== null && i.delete(t), md(e, n);
  }
  var pd;
  pd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ht.current) Wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Wt = !1, bm(e, t, n);
      Wt = (e.flags & 131072) !== 0;
    }
    else Wt = !1, ut && (t.flags & 1048576) !== 0 && Qu(t, Os, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Js(e, t), e = t.pendingProps;
        var l = zi(t, Rt.current);
        Gi(t, n), l = Ml(null, t, i, e, l, n);
        var u = _l();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Gt(i) ? (u = !0, As(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xl(t), l.updater = Qs, t.stateNode = l, l._reactInternals = t, Ol(t, i, e, n), t = Dl(null, t, i, !0, u, n)) : (t.tag = 0, ut && u && dl(t), zt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Js(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Hm(i), e = mn(i, e), l) {
            case 0:
              t = Il(null, t, i, e, n);
              break e;
            case 1:
              t = Bc(null, t, i, e, n);
              break e;
            case 11:
              t = $c(null, t, i, e, n);
              break e;
            case 14:
              t = Fc(null, t, i, mn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), Bc(e, t, i, l, n);
      case 3:
        e: {
          if (Vc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, ic(e, t), Bs(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = Kc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = Kc(e, t, i, n, l);
            break e;
          } else for (en = Wn(t.stateNode.containerInfo.firstChild), qt = t, ut = !0, hn = null, n = tc(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return ac(t), e === null && ml(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, sl(i, l) ? h = null : u !== null && sl(i, u) && (t.flags |= 32), zc(e, t), zt(e, t, h, n), t.child;
      case 6:
        return e === null && ml(t), null;
      case 13:
        return Uc(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : zt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), $c(e, t, i, l, n);
      case 7:
        return zt(e, t, t.pendingProps, n), t.child;
      case 8:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, st(Is, i._currentValue), i._currentValue = h, u !== null) if (fn(u.value, h)) {
            if (u.children === l.children && !Ht.current) {
              t = On(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var S = k.firstContext; S !== null; ) {
                if (S.context === i) {
                  if (u.tag === 1) {
                    S = Ln(-1, n & -n), S.tag = 2;
                    var $ = u.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var Y = $.pending;
                      Y === null ? S.next = S : (S.next = Y.next, Y.next = S), $.pending = S;
                    }
                  }
                  u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), gl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                S = S.next;
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
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = an(l), i = i(l), t.flags |= 1, zt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = mn(i, t.pendingProps), l = mn(i.type, l), Fc(e, t, i, l, n);
      case 15:
        return Ic(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : mn(i, l), Js(e, t), t.tag = 1, Gt(i) ? (e = !0, As(t)) : e = !1, Gi(t, n), _c(t, i, l), Ol(t, i, l, n), Dl(null, t, i, !0, e, n);
      case 19:
        return Gc(e, t, n);
      case 22:
        return Dc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function vd(e, t) {
    return Mt(e, t);
  }
  function Um(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function un(e, t, n, i) {
    return new Um(e, t, n, i);
  }
  function so(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hm(e) {
    if (typeof e == "function") return so(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Pe) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = un(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function la(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") so(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case O:
        return wi(n.children, l, u, t);
      case F:
        h = 8, l |= 8;
        break;
      case se:
        return e = un(12, n, t, l | 2), e.elementType = se, e.lanes = u, e;
      case Z:
        return e = un(13, n, t, l), e.elementType = Z, e.lanes = u, e;
      case fe:
        return e = un(19, n, t, l), e.elementType = fe, e.lanes = u, e;
      case le:
        return oa(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ne:
            h = 10;
            break e;
          case Ee:
            h = 9;
            break e;
          case Pe:
            h = 11;
            break e;
          case H:
            h = 14;
            break e;
          case ue:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = un(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function wi(e, t, n, i) {
    return e = un(7, e, i, t), e.lanes = n, e;
  }
  function oa(e, t, n, i) {
    return e = un(22, e, i, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ao(e, t, n) {
    return e = un(6, e, null, t), e.lanes = n, e;
  }
  function lo(e, t, n) {
    return t = un(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Gm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function oo(e, t, n, i, l, u, h, k, S) {
    return e = new Gm(e, t, n, k, S), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = un(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xl(u), e;
  }
  function Wm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function kd(e) {
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
            if (Gt(t.type)) {
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
      if (Gt(n)) return Hu(e, n, t);
    }
    return t;
  }
  function yd(e, t, n, i, l, u, h, k, S) {
    return e = oo(n, i, !0, e, l, u, h, k, S), e.context = kd(null), n = e.current, i = Bt(), l = ni(n), u = Ln(i, l), u.callback = t ?? null, Zn(n, u, l), e.current.lanes = l, pr(e, l, i), Yt(e, i), e;
  }
  function ua(e, t, n, i) {
    var l = t.current, u = Bt(), h = ni(l);
    return n = kd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ln(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Zn(l, t, h), e !== null && (kn(e, l, h, u), zs(e, l, h)), h;
  }
  function ca(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function gd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function uo(e, t) {
    gd(e, t), (e = e.alternate) && gd(e, t);
  }
  function Qm() {
    return null;
  }
  var jd = typeof reportError == "function" ? reportError : function(e) {
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
      var t = iu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && au(e);
    }
  };
  function fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function xd() {
  }
  function Ym(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var $ = ca(h);
          u.call($);
        };
      }
      var h = yd(t, i, e, 0, null, !1, !1, "", xd);
      return e._reactRootContainer = h, e[_n] = h.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var $ = ca(S);
        k.call($);
      };
    }
    var S = oo(e, 0, !1, null, null, !1, !1, "", xd);
    return e._reactRootContainer = S, e[_n] = S.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(function() {
      ua(t, S, n, i);
    }), S;
  }
  function ha(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var S = ca(h);
          k.call(S);
        };
      }
      ua(t, h, e, l);
    } else h = Ym(n, t, e, l, i);
    return ca(h);
  }
  tu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (Oa(t, n | 1), Yt(t, ct()), (We & 6) === 0 && (Xi = ct() + 500, Jn()));
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
  }, nu = function(e) {
    if (e.tag === 13) {
      var t = ni(e), n = Rn(e, t);
      if (n !== null) {
        var i = Bt();
        kn(n, e, t, i);
      }
      uo(e, t);
    }
  }, iu = function() {
    return et;
  }, ru = function(e, t) {
    var n = et;
    try {
      return et = e, t();
    } finally {
      et = n;
    }
  }, Ke = function(e, t, n) {
    switch (t) {
      case "input":
        if (Be(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = bs(i);
              if (!l) throw Error(o(90));
              ke(i), Be(i, l);
            }
          }
        }
        break;
      case "textarea":
        $e(e, n);
        break;
      case "select":
        t = n.value, t != null && rt(e, !!n.multiple, t, !1);
    }
  }, ss = no, cr = ji;
  var Jm = { usingClientEntryPoint: !1, Events: [Ar, Ii, bs, cn, Tn, no] }, Gr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xm = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = os(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Gr.findFiberByHostInstance || Qm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber) try {
      dt = ma.inject(Xm), Dt = ma;
    } catch {
    }
  }
  return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm, Jt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fo(t)) throw Error(o(200));
    return Wm(e, t, null, n);
  }, Jt.createRoot = function(e, t) {
    if (!fo(e)) throw Error(o(299));
    var n = !1, i = "", l = jd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oo(e, 1, !1, null, null, n, !1, i, l), e[_n] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new co(t);
  }, Jt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = os(t), e = e === null ? null : e.stateNode, e;
  }, Jt.flushSync = function(e) {
    return ji(e);
  }, Jt.hydrate = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !0, n);
  }, Jt.hydrateRoot = function(e, t, n) {
    if (!fo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = jd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = yd(t, null, e, 1, n ?? null, l, !1, u, h), e[_n] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new da(t);
  }, Jt.render = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !1, n);
  }, Jt.unmountComponentAtNode = function(e) {
    if (!fa(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      ha(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Jt.unstable_batchedUpdates = no, Jt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!fa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ha(e, t, n, !1, i);
  }, Jt.version = "18.3.1-next-f1338f8080-20240426", Jt;
}
var _d;
function ap() {
  if (_d) return po.exports;
  _d = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), po.exports = sp(), po.exports;
}
var bd;
function lp() {
  if (bd) return pa;
  bd = 1;
  var r = ap();
  return pa.createRoot = r.createRoot, pa.hydrateRoot = r.hydrateRoot, pa;
}
var op = lp();
const up = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], x = ["e", "B", "G", "D", "A", "E"], b = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], C = {
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
  }, _ = 26, P = 72, w = 30, j = 54, I = 34, E = 11, U = (_ + P) / 2, K = w + (c.length - 1) * I + 30, z = (B) => P + B * j, D = (B) => B === 0 ? U : z(B) - j / 2, O = (B) => w + B * I;
  function F(B, J, X) {
    const he = a.indexOf(r[B][0]) + Number(X.slice(-1)) - 1, Me = he % a.length, ke = o[Me] + 12 * Math.floor(he / a.length), ve = B + J - ke;
    return a[Me] + (ve < 0 ? "♭" : "♯").repeat(Math.abs(ve));
  }
  function se(B) {
    return [...B.base, ...B.add].sort((J, X) => J[0] - X[0]);
  }
  function ne(B, J, X) {
    const he = J + (X ? 1 : 0), Me = m[he % m.length], ke = Math.min(...Me.map(([Be]) => Be)), ve = Math.max(...Me.map(([, Be]) => Be));
    let Te = (B - d % 12 + 12) % 12 - (X ? 8 : 5) + 12 * Math.floor(he / m.length);
    return ke + Te < 0 && (Te += 12), ve + Te > f.pentatonic && (Te -= 12), {
      strings: Me.map((Be) => Be.map((tt) => tt + Te)),
      start: ke + Te,
      end: ve + Te
    };
  }
  function Ee(B, J, X) {
    const he = X[J], Me = (B + he - d % 12 + 12) % 12, ke = d + Me - he, ve = c.map((we, Re) => {
      const Te = J + (c.length - 1 - Re) * 3;
      return [Te, Te + 1, Te + 2].map((Be) => {
        const tt = Math.floor(Be / X.length), Ue = X[Be % X.length];
        return ke + Ue + 12 * tt - we;
      });
    });
    return {
      strings: ve,
      start: Math.min(...ve.map((we) => we[0])),
      end: Math.max(...ve.map((we) => we.at(-1)))
    };
  }
  function Pe(B, J) {
    const X = [], he = Math.ceil(-B.end / 12) * 12;
    for (let ke = he; B.start + ke <= J; ke += 12) {
      const ve = B.strings.map((Re) => Re.map((Te) => Te + ke).filter((Te) => Te >= 0 && Te <= J)), we = ve.flat();
      X.push({
        strings: ve,
        start: Math.min(...we),
        end: Math.max(...we),
        partial: B.start + ke < 0 || B.end + ke > J
      });
    }
    const Me = X.filter((ke) => !ke.partial);
    return Me.length ? Me : X;
  }
  function Z(B) {
    return se(B).length === p;
  }
  function fe(B, J, X) {
    const he = Z(J);
    B.querySelector('[value="3nps"]').disabled = !he, B.value = he ? X ?? "3nps" : "pentatonic";
  }
  function H(B, J, X, he, Me) {
    const ke = se(J).map(([ve]) => ve);
    return he.map((ve) => {
      const we = ve - 1, Re = X === "3nps" ? Ee(B, we, ke) : ne(B, we, J.base === g), Te = Me === void 0 ? [Re] : Pe(Re, Me);
      return { number: ve, positions: Te };
    });
  }
  function ue(B, J) {
    const X = B.getBoundingClientRect(), he = B.querySelectorAll(J);
    let Me = 1 / 0;
    he.forEach((ke) => {
      const ve = ke.getBoundingClientRect();
      let we = 0;
      ve.left < X.left ? we = ve.left - X.left - 8 : ve.right > X.right && (we = ve.right - X.right + 8), Math.abs(we) < Math.abs(Me) && (Me = we);
    }), Number.isFinite(Me) && (B.scrollLeft += Me);
  }
  function le(B, J = !1) {
    const X = B === "3nps" ? p : m.length;
    return Array.from({ length: X }, (he, Me) => {
      const ke = Me + 1;
      return '<label class="box-toggle" data-box="' + ke + '"><input type="checkbox" value="' + ke + '"' + (J && Me === 0 ? " checked" : "") + "> Boksi " + ke + "</label>";
    }).join("");
  }
  function W(B, J) {
    const X = se(J), he = new Map(X.map(([ke, ve]) => [ke, F(B, ke, ve)])), Me = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return X.flatMap(([ke, ve]) => Me.flatMap(({ suffix: we, base: Re }) => {
      const Te = Re.map(([Be]) => he.get((ke + Be) % 12));
      return Te.every(Boolean) ? {
        root: (B + ke) % 12,
        degree: Number(String(ve).replace(/\D/g, "")),
        name: Te[0] + we,
        notes: Te,
        base: Re,
        add: []
      } : [];
    }));
  }
  function ae(B, J) {
    const X = B.base.map(([ke]) => (B.root + ke) % 12), he = c.map((ke) => {
      const ve = [];
      for (let we = 0; we <= J; we++) {
        const Re = (ke + we) % 12;
        X.includes(Re) && ve.push({ fret: we, pitch: Re });
      }
      return ve;
    }), Me = [];
    for (let ke = 0; ke <= he.length - 3; ke++)
      for (const ve of he[ke])
        for (const we of he[ke + 1])
          if (ve.pitch !== we.pitch)
            for (const Re of he[ke + 2]) {
              if (Re.pitch === ve.pitch || Re.pitch === we.pitch) continue;
              const Te = [ve.fret, we.fret, Re.fret], Be = Math.min(...Te), tt = Math.max(...Te);
              if (tt - Be > 3) continue;
              const Ue = Array(c.length).fill(null);
              Ue.splice(ke, 3, ...Te), Me.push({ strings: Ue, low: Be, high: tt });
            }
    return Me.sort((ke, ve) => ke.high - ve.high || ke.low - ve.low);
  }
  const ie = {
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
  }, N = [
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
  function y(B, J) {
    const X = ie[B + ":" + J];
    if (X) return { frets: X, barre: null };
    let he = null;
    return N.forEach(({ string: Me, openPC: ke, shapes: ve }) => {
      const we = ve[J];
      if (!we) return;
      let Re = (B - ke + 12) % 12;
      if (Re + Math.min(...we.filter((tt) => tt !== null)) < 0 && (Re += 12), he && he.fret <= Re) return;
      const Te = we.map((tt) => tt === null ? null : Re + tt), Be = Re > 0 && we.at(-1) === 0 ? { fret: Re, from: Me, to: we.length - 1 } : null;
      he = { fret: Re, frets: Te, barre: Be };
    }), he && { frets: he.frets, barre: he.barre };
  }
  function q(B, { frets: J, barre: X }, he) {
    const Te = [...c].reverse(), Be = J.filter(($e) => $e > 0), Ue = !Be.length || Math.max(...Be) <= 4 && (J.includes(0) || Math.min(...Be) === 1) ? 1 : Math.min(...Be), Ye = ($e) => 24 + $e * 14, rt = ($e) => 30 + ($e - Ue) * 18 + 18 / 2, jt = 102;
    let qe = '<svg class="chord-svg" viewBox="0 0 108 ' + (jt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + he + "-ote paksusta kielestä ohueen: " + J.map(($e) => $e ?? "x").join(" ") + '">';
    for (let $e = 0; $e <= 4; $e++)
      qe += '<line class="' + ($e === 0 && Ue === 1 ? "nut" : "fret") + '" x1="' + Ye(0) + '" y1="' + (30 + $e * 18) + '" x2="' + Ye(5) + '" y2="' + (30 + $e * 18) + '"/>';
    return J.forEach(($e, nt) => {
      qe += '<line class="string" x1="' + Ye(nt) + '" y1="30" x2="' + Ye(nt) + '" y2="' + jt + '"/>';
    }), Ue > 1 && (qe += '<text class="fret-label" x="15" y="' + (rt(Ue) + 4) + '">' + Ue + "</text>"), X && (qe += '<rect class="barre" x="' + (Ye(X.from) - 6.5) + '" y="' + (rt(X.fret) - 6.5) + '" width="' + ((X.to - X.from) * 14 + 13) + '" height="13" rx="6.5"/>'), J.forEach(($e, nt) => {
      if ($e === null) {
        qe += '<text class="marker" x="' + Ye(nt) + '" y="22">×</text>';
        return;
      }
      const vt = (Te[nt] + $e) % 12 === B;
      if ($e === 0) {
        qe += '<circle class="open' + (vt ? " root-open" : "") + '" cx="' + Ye(nt) + '" cy="18" r="4.5"/>';
        return;
      }
      X && $e === X.fret && nt >= X.from && nt <= X.to && !vt || (qe += '<circle class="' + (vt ? "root" : "tone") + '" cx="' + Ye(nt) + '" cy="' + rt($e) + '" r="6.5"/>');
    }), qe + "</svg>";
  }
  function ce(B, J) {
    const X = new URLSearchParams(location.search), he = r.indexOf(X.get("toonikka")), Me = X.get("asteikko");
    return {
      rootPC: he === -1 ? B : he,
      scaleId: Object.hasOwn(C, Me) ? Me : J
    };
  }
  function Ce(B, J, X) {
    return B + "?" + new URLSearchParams({ toonikka: r[J], asteikko: X });
  }
  function G(B, J, X, {
    boxes: he = [],
    onlyBoxNotes: Me = !1,
    automatic: ke = !0,
    focusDegree: ve = "",
    grip: we = null,
    barre: Re = null,
    label: Te = r[B] + " " + J.name,
    notes: Be = null,
    targets: tt = !1,
    muteFret: Ue = null
  } = {}) {
    const Ye = z(X), rt = Ye + 48, jt = rt + 28, qe = w - 14, $e = O(c.length - 1) + 14, nt = $e - qe, vt = ke ? 680 : Math.ceil(jt * 0.64), Ft = he.flatMap((oe) => oe.positions), Tt = {};
    J.base.forEach(([oe, Se]) => Tt[(B + oe) % 12] = { deg: Se, added: !1 }), J.add.forEach(([oe, Se]) => Tt[(B + oe) % 12] = { deg: Se, added: !0 });
    const Kt = c.map((oe, Se) => !!we && we[Se] === null), It = !!we && Ue !== null, V = b.filter((oe, Se) => Kt[Se]).reverse(), ge = Te + ". " + X + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (V.length ? " Soittamatta jäävät kielet: " + V.join(", ") + "." : "");
    let te = '<svg viewBox="0 0 ' + jt + " " + K + '" style="min-width:' + vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (tt ? "group" : "img") + '" aria-label="' + ge + '">';
    te += '<rect x="' + _ + '" y="' + qe + '" width="' + (P - _) + '" height="' + nt + '" rx="6" fill="#2a2338"/>', te += '<rect x="' + P + '" y="' + qe + '" width="' + (Ye - P) + '" height="' + nt + '" fill="#231a12"/>', te += '<rect x="' + Ye + '" y="' + qe + '" width="' + (jt - Ye - 4) + '" height="' + nt + '" rx="8" fill="#32251e"/>';
    for (let oe = 1; oe <= X; oe++)
      te += '<line x1="' + z(oe) + '" y1="' + qe + '" x2="' + z(oe) + '" y2="' + $e + '" stroke="#6f5b47" stroke-width="2"/>';
    te += '<rect x="' + (P - 3) + '" y="' + qe + '" width="6" height="' + nt + '" rx="2" fill="#d8cbb6"/>', te += '<rect x="' + (rt - 11) + '" y="' + (qe + 3) + '" width="22" height="' + (nt - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', te += '<rect x="' + (rt - 4) + '" y="' + (qe + 7) + '" width="3" height="' + (nt - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Fe = (qe + $e) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((oe) => oe <= X).forEach((oe) => te += '<circle cx="' + D(oe) + '" cy="' + Fe + '" r="5.5" fill="#7a6550"/>');
    for (let oe = 12; oe <= X; oe += 12)
      te += '<circle cx="' + D(oe) + '" cy="' + (Fe - I) + '" r="5.5" fill="#7a6550"/>', te += '<circle cx="' + D(oe) + '" cy="' + (Fe + I) + '" r="5.5" fill="#7a6550"/>';
    te += '<text x="' + U + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', te += '<text x="' + P + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', te += '<text x="' + rt + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let oe = 1; oe <= X; oe++)
      te += '<text x="' + D(oe) + '" y="' + (K - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + oe + "</text>";
    if (he.forEach(({ number: oe, positions: Se }) => {
      Se.forEach((Le) => {
        const He = Le.partial ? "box-highlight box-partial" : "box-highlight";
        te += '<g class="' + He + '" data-box="' + oe + '" aria-hidden="true">';
        const Xe = Le.strings.find((mt) => mt.length), Ke = (D(Xe[0]) + D(Xe.at(-1))) / 2;
        te += '<text class="box-number" x="' + Ke + '" y="12">' + oe + "</text>", Le.strings.forEach((mt, kt) => {
          if (!mt.length) return;
          const Cn = D(mt[0]) - 16, cn = D(mt.at(-1)) - D(mt[0]) + 32;
          te += '<rect class="box-band" x="' + Cn + '" y="' + (O(kt) - 14) + '" width="' + cn + '" height="28" rx="14"/>';
        }), te += "</g>";
      });
    }), c.forEach((oe, Se) => {
      const Le = 1 + Se * 0.45, He = O(Se), Xe = Kt[Se] && !It;
      Xe ? te += '<text class="muted-mark" x="' + U + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Kt[Se] && Ue === 0 || (te += '<line x1="' + (_ + 4) + '" y1="' + He + '" x2="' + (P - 4) + '" y2="' + He + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), te += "<g" + (Xe ? ' opacity=".35"' : "") + ">", te += '<line x1="' + P + '" y1="' + He + '" x2="' + (rt + 5) + '" y2="' + He + '" stroke="#b9b9c4" stroke-width="' + Le.toFixed(2) + '"/>', te += '<circle cx="' + (rt + 5) + '" cy="' + He + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', te += "</g>", te += '<text x="13" y="' + (He + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + x[Se] + "</text>";
    }), we && Re && Re.fret >= 1 && Re.fret <= X) {
      const oe = O(Re.from), Se = O(Re.to), Le = Math.min(oe, Se) - 6, He = Math.max(oe, Se) + 6;
      te += '<rect class="barre-indicator" x="' + (D(Re.fret) - 7) + '" y="' + Le + '" width="14" height="' + (He - Le) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return tt && (te += '<g class="fret-targets">', c.forEach((oe, Se) => {
      for (let Le = 0; Le <= X; Le++) {
        const He = Le ? b[Se] + "-kieli, " + Le + ". nauha" : "vapaa " + b[Se] + "-kieli", Xe = Le ? j : P - _ - 6;
        te += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Se + '" data-fret="' + Le + '" data-midi="' + (oe + Le) + '" aria-label="' + He + '" x="' + (D(Le) - Xe / 2) + '" y="' + (O(Se) - I / 2) + '" width="' + Xe + '" height="' + I + '" fill="transparent"/>';
      }
    }), te += "</g>"), (Be ?? []).forEach(({ string: oe, fret: Se, label: Le, kind: He }) => {
      te += '<g class="octave-note octave-' + He + '">', te += '<circle cx="' + D(Se) + '" cy="' + O(oe) + '" r="' + E + '"/>', te += '<text x="' + D(Se) + '" y="' + (O(oe) + 3.5) + '" font-size="' + (Le.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Le + "</text>", te += "</g>";
    }), we && (te += '<g class="grip-notes">'), (Be ? [] : c).forEach((oe, Se) => {
      for (let Le = 0; Le <= X; Le++) {
        const He = (oe + Le) % 12;
        if (!(He in Tt) || we && we[Se] !== Le || Me && !Ft.some(({ strings: cn }) => {
          const Tn = cn[Se];
          return Tn.length > 0 && Le >= Tn[0] && Le <= Tn.at(-1);
        })) continue;
        const Xe = Tt[He], Ke = Xe.deg === "1", mt = Xe.added ? "#f0a13c" : Ke ? "#4b2fd6" : "#6d4aff", kt = Xe.added ? "#1a1430" : "#fff";
        Xe.deg === ve && (te += '<circle class="focus-note" cx="' + D(Le) + '" cy="' + O(Se) + '" r="14.5"/>');
        const Cn = we ? ' data-string="' + (Se + 1) + '" data-fret="' + Le + '" data-degree="' + Xe.deg + '"' : "";
        te += "<circle" + Cn + ' cx="' + D(Le) + '" cy="' + O(Se) + '" r="' + E + '" fill="' + mt + '" stroke="' + (Ke ? "#fff" : "#1a1430") + '" stroke-width="' + (Ke ? 2.5 : 1) + '"/>', te += '<text x="' + D(Le) + '" y="' + (O(Se) + 3.5) + '" font-size="' + (Xe.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + kt + '" text-anchor="middle">' + Xe.deg + "</text>";
      }
    }), we && (te += "</g>"), It && Kt.forEach((oe, Se) => {
      if (!oe) return;
      const Le = D(Ue), He = O(Se);
      te += '<g class="muted-mark grip-mute" data-string="' + (Se + 1) + '" data-fret="' + Ue + '">', te += '<circle cx="' + Le + '" cy="' + He + '" r="9" fill="' + (Ue === 0 ? "#2a2338" : "#231a12") + '"/>', te += '<text x="' + Le + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', te += "</g>";
    }), te += "</svg>", te;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: g,
    SCALES: C,
    noteName: F,
    scaleNotes: se,
    scaleTriads: W,
    triadGrips: ae,
    chordGrip: y,
    renderChordDiagram: q,
    selectionFromURL: ce,
    selectionHref: Ce,
    renderBoard: G,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: Z,
    syncBoxSystem: fe,
    fingeringBoxes: H,
    boxOptions: le,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = up;
function yo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function cp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function dp(r) {
  const a = cp(r), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Ve = globalThis.MusicMapFretboard, Qe = (r) => (r % 12 + 12) % 12, fp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], hp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Oe = (r, a = !1, o = !1) => (a ? hp : fp)[Qe(r)] + (o ? Math.floor(r / 12) - 1 : ""), li = (r) => Ve.CHROM[Qe(r)], Zr = (r, a, o) => Ve.noteName(Qe(r), a, o);
function mp(r, a) {
  const o = Math.floor(r / 12) - 1;
  return a[0] === "B" && Qe(r) < 2 ? o - 1 : a[0] === "C" && Qe(r) > 9 ? o + 1 : o;
}
const nn = ["ohut E", "B", "G", "D", "A", "paksu E"], Wo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Ef = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], pp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, ze = (r, a) => ({ string: r, fret: a, midi: Ve.OPEN_PITCHES[r] + a });
function or(r, a, o) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => ze(c, a + f)));
}
const Ze = (r) => `${r.string}:${r.fret}`, Ei = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Cf = (r, a) => a === "maj" ? `${li(r)}-duurisointu` : a === "min" ? `${li(r)}-mollisointu` : `${li(r)}7-sointu`, qr = [
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
], Pd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Tf(r, a) {
  const o = Pd[a] ?? Pd.E, c = Qe(r - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [ze(f, d + c)]);
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
  return a.check = Nn(r.check, ["class", "pitch"], a.check), a.input = Nn(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(ai(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ve.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(ai(r.box, 0, 5, a.box)), a.order = Nn(r.order, ["random", "up", "down"], a.order), a.chord = Nn(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ga.intervals]), a.direction = Nn(r.direction, ["up", "down", "both"], a.direction), a.hints = Nn(r.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(r.activity, ["play", "degree"], a.activity), a.minRms = ai(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = ai(r.clarity, 0.85, 0.99, a.clarity), a.stability = ai(r.stability, 120, 800, a.stability), a.cents = ai(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function vp(r, a) {
  const o = new URLSearchParams(r), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ve.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Ea(c);
}
function kp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Ve.CHROM[r.root],
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
const Ti = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Fn = (r) => r.mode === "scale" && r.order !== "random", Mf = (r) => ["note", "degree"].includes(Ti(r)) ? "class" : Fn(r) ? "pitch" : r.check, va = (r) => Ti(r) === "mic", Ad = "musiikin-kartta:harjoittelu", _f = 3, _o = () => ({ version: _f, settings: { ...ga }, stats: {}, recent: [], sessions: [] }), bf = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, yn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function yp(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => yn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || yn(r.errors)) && (r.ema === void 0 || yn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || yn(r.emaMs));
}
function gp(r) {
  return !!r && typeof r.id == "string" && yn(r.count) && yn(r.first) && r.first <= r.count && yn(r.ms) && yn(r.at) && (r.solo === void 0 || yn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || yn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Rd(r) {
  if (!r) return _o();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !yp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !yn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !gp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Ea(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: _f,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Ld = 2500, jp = 8e3, Od = 0.3, es = (r) => r.ema ?? r.correct / r.attempts, ts = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Qo(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(r) - Ld) / (jp - Ld)));
  return es(r) * 0.65 + a * 0.35;
}
function xp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Qo(r)) * 3;
}
class $d {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Rd(a?.getItem(Ad) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = _o();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Ad, JSON.stringify(this.data)), this.warning = "";
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
    const o = bf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + Od * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + Od * (a.ms - ts(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Rd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ..._o(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Sp = 4e3, Fd = 12, wp = 1500;
function Np(r, a) {
  const o = r.left + r.stickyLeft, c = r.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Fd : a.right > c && (d = a.right - c + Fd), d === 0) return null;
  const f = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + d));
  return Math.abs(f - r.scrollLeft) < 1 ? null : f;
}
function Ep(r, a) {
  return a.right <= r.left + r.stickyLeft || a.left >= r.right;
}
function Pf(r, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = M.useRef(0), m = M.useRef(!1), x = M.useRef(""), b = M.useRef(0), v = M.useRef(f);
  M.useEffect(() => {
    const g = r.current;
    if (!g || !d) return;
    const C = () => {
      p.current = Date.now() + Sp;
    }, _ = () => {
      m.current = !0, C();
    }, P = () => {
      m.current && (m.current = !1, C());
    }, w = (j) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(j.key) && C();
    };
    return g.addEventListener("pointerdown", _, { passive: !0 }), g.addEventListener("touchstart", _, { passive: !0 }), g.addEventListener("wheel", C, { passive: !0 }), g.addEventListener("keydown", w), window.addEventListener("pointerup", P, { passive: !0 }), window.addEventListener("pointercancel", P, { passive: !0 }), window.addEventListener("touchend", P, { passive: !0 }), window.addEventListener("touchcancel", P, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", _), g.removeEventListener("touchstart", _), g.removeEventListener("wheel", C), g.removeEventListener("keydown", w), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), window.removeEventListener("touchend", P), window.removeEventListener("touchcancel", P);
    };
  }, [r, d]), M.useLayoutEffect(() => {
    const g = f !== void 0 && !!f && f !== v.current;
    v.current = f, g && !m.current && (p.current = 0);
  }, [f]), M.useLayoutEffect(() => {
    f === void 0 && x.current === "" && o !== "" && Date.now() - b.current > wp && !m.current && (p.current = 0), x.current !== "" && o === "" && (b.current = Date.now()), x.current = o;
    const g = r.current;
    if (!g || !d || !o || m.current || Date.now() < p.current) return;
    const C = g.querySelector(a);
    if (!C) return;
    const _ = g.getBoundingClientRect(), P = C.getBoundingClientRect(), w = c ? g.querySelector(c) : null, j = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, I = {
      left: _.left,
      right: _.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: j
    }, E = Np(I, P);
    if (E === null) return;
    const K = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Ep(I, P);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: E, behavior: K ? "auto" : "smooth" }) : g.scrollLeft = E;
  }, [r, a, o, c, d, f]);
}
const Cp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Tp = ["e", "B", "G", "D", "A", "E"];
function Af({ string: r }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ s.jsx("strong", { children: Tp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Rf = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Mp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Lf({ min: r, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - r + 1 }, (o, c) => {
      const d = r + c;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Cp.has(d) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function oi({ area: r, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const x = { "--cols": r.max - r.min + 1 }, { strings: b, min: v, max: g } = r, [C, _] = M.useState({ string: Math.min(...b), fret: v }), P = M.useRef(null), w = new Map(a.map((z) => [Ze(z), z])), j = a.map((z) => `${Ze(z)}${z.kind}`).join(",");
  M.useEffect(() => {
    if (p !== "hints") return;
    const z = P.current, D = z?.querySelector(".target, .anchor");
    z && D && (z.scrollLeft += D.getBoundingClientRect().left - z.getBoundingClientRect().left - z.clientWidth / 2 + D.clientWidth / 2);
  }, [j, p]), M.useEffect(() => {
    p === "playing" && P.current && (P.current.scrollLeft = 0);
  }, [p, v, g]);
  const I = a.find((z) => z.kind === "playing");
  Pf(P, ".playing", I ? Ze(I) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [E, U] = M.useState({ left: !1, right: !1 });
  M.useEffect(() => {
    const z = P.current;
    if (!z) return;
    const D = () => {
      const F = z.scrollLeft > 2, se = z.scrollLeft + z.clientWidth < z.scrollWidth - 2;
      U((ne) => ne.left === F && ne.right === se ? ne : { left: F, right: se });
    };
    D(), z.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(z), () => {
      z.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [j, v, g]);
  const K = b.includes(C.string) && C.fret >= v && C.fret <= g ? C : { string: Math.min(...b), fret: v };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (E.left ? " more-left" : "") + (E.right ? " more-right" : ""), children: [
    (E.left || E.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      E.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      E.left && E.right ? "molemmilla puolilla" : E.right ? "oikealla" : "vasemmalla",
      E.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: P, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board", style: x, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(Lf, { min: v, max: g }),
      /* @__PURE__ */ s.jsx("tbody", { children: Ve.OPEN_PITCHES.map((z, D) => /* @__PURE__ */ s.jsxs("tr", { className: b.includes(D) ? "" : "unused", style: Rf(D), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${nn[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(Af, { string: D }),
          o.includes(D) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([D], v, g).map((O) => {
          const F = w.get(Ze(O)), se = `${nn[D]}-kieli, ${Ci(O.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: K.string === D && K.fret === O.fret ? 0 : -1,
              onFocus: () => _(O),
              onKeyDown: (ne) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ne.key)) return;
                ne.preventDefault();
                const Ee = [...b].sort((H, ue) => H - ue), Pe = Ee.indexOf(D), Z = ne.key === "ArrowUp" ? Ee[Math.max(0, Pe - 1)] : ne.key === "ArrowDown" ? Ee[Math.min(Ee.length - 1, Pe + 1)] : D, fe = ne.key === "Home" ? v : ne.key === "End" ? g : Math.max(v, Math.min(g, O.fret + (ne.key === "ArrowRight" ? 1 : ne.key === "ArrowLeft" ? -1 : 0)));
                ne.currentTarget.closest("table")?.querySelector(`button[data-string="${Z}"][data-fret="${fe}"]`)?.focus();
              },
              disabled: c || !b.includes(D),
              "aria-label": se + (F ? `, ${Mp[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => d?.(O),
              children: F ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function _p({ area: r, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = r, x = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(Lf, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: Ve.OPEN_PITCHES.map((b, v) => /* @__PURE__ */ s.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Rf(v), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${nn[v]}`, children: /* @__PURE__ */ s.jsx(Af, { string: v }) }),
      or([v], p, m).map((g) => {
        const C = Object.hasOwn(a, x + Ze(g)) ? a[x + Ze(g)] : void 0, _ = Qo(C), P = _ === null ? "unseen" : C.attempts < 3 ? "few" : _ >= 0.8 ? "strong" : _ >= 0.5 ? "growing" : "weak", w = `${nn[v]}-kieli, ${Ci(g.fret)}, ${Oe(g.midi, d)}`, j = C ? `${Math.round(_ * 100)} %, ${C.correct}/${C.attempts} heti oikein, viime aikoina ${Math.round(es(C) * 100)} % ja ${(ts(C) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${P}`, title: `${w}: ${j}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: _ === null ? "·" : C.attempts < 3 ? "?" : Math.round(_ * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            j
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const bp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", ba = (r) => r.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, Of = (r) => Ve.fingeringBoxes(r.root, Ve.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Mi(r) {
  if (r.mode === "caged") {
    const a = Tf(r.root, r.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = Of(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Pp(r) {
  const a = Mi(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(r) {
  const a = Mi(r), o = or(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return o.filter((f) => r.accidentals || ![1, 3, 6, 8, 10].includes(Qe(f.midi)));
  if (r.mode === "caged") {
    const f = new Set(Tf(r.root, r.shape).map(Ze));
    return o.filter((p) => f.has(Ze(p)));
  }
  if (r.mode === "interval") return o;
  const c = o.filter((f) => ba(r).some(([p]) => Qe(f.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = Of(r);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function $f(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Ap(r) {
  const a = ba(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(r.chordTone));
}
function bo(r) {
  const a = is(r), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = Ap(r).filter(([d]) => !a.some((f) => Qe(f.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : r.mode === "interval" && !$f(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(r) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Rp(r, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? o.reverse() : o;
}
function Ff(r) {
  return Fn(r) ? new Set(is(r).map((a) => a.midi)).size : r.rounds;
}
function Lp(r, a) {
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
const Id = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ni(r, a) {
  const o = r.filter((c) => !a(c));
  return o.length ? o : r;
}
function Op(r, a, o = {}, c, d = Math.random) {
  const f = bo(r);
  if (f) throw new Error(f);
  const p = Mf(r), m = Ti(r), x = p === "pitch", b = (O) => r.weak ? xp(o[bf({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => qi(O, O.map(() => 1), d), g = is(r), C = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const O = Ni(g, (ne) => !!c && Ze(ne) === Ze(c.position)), F = qi(O, O.map((ne) => b(`notes:${Ze(ne)}`)), d), se = Oe(F.midi, r.flats, x);
    return {
      ...C,
      position: F,
      midi: F.midi,
      name: se,
      item: `notes:${Ze(F)}`,
      prompt: `Etsi ${se} ${Wo[F.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const O = (Ee) => `ear-note:${Qe(Ee.midi)}${r.reference ? ":ref" : ""}`, F = Ni(g, (Ee) => !!c && Qe(Ee.midi) === Qe(c.midi)), se = qi(F, F.map((Ee) => b(O(Ee))), d), ne = r.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...C,
      position: se,
      midi: se.midi,
      name: Oe(se.midi, r.flats),
      item: O(se),
      choices: "note",
      reference: ne,
      sound: ne === void 0 ? [se.midi] : [ne, se.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const O = Ni(g, (se) => !!c && se.midi === c.midi), F = qi(O, O.map((se) => b(`repeat:${se.midi}`)), d);
    return {
      ...C,
      position: F,
      midi: F.midi,
      name: Oe(F.midi, r.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const O = Ni($f(r, g), (ne) => c?.interval === ne.iv && c?.direction === ne.direction), F = qi(O, O.map((ne) => b(`interval:${ne.iv}:${ne.direction}`)), d), se = v(Ni(F.pairs, (ne) => c?.reference === ne.reference.midi));
    return {
      ...C,
      position: se.target,
      midi: se.target.midi,
      name: Oe(se.target.midi, r.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Oe(se.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const _ = ba(r);
  let P, w = 0;
  if (Fn(r)) {
    const O = Rp(r, g);
    w = O.length, P = O[a % O.length];
  } else {
    const O = _.filter(([ne]) => g.some((Ee) => Qe(Ee.midi - r.root) === ne)), F = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [_[a % _.length]] : _.filter(([, ne]) => ne.endsWith(r.chordTone)) : Ni(O, ([ne]) => c?.interval === ne), [se] = qi(F, F.map(([ne]) => b(Id(r, ne))), d);
    P = v(Ni(g.filter((ne) => Qe(ne.midi - r.root) === se), (ne) => !!c && Ze(ne) === Ze(c.position)));
  }
  const j = Qe(P.midi - r.root), I = _.find(([O]) => O === j)[1], E = Zr(r.root, j, I), U = x ? E + mp(P.midi, E) : E, K = r.mode === "scale" ? `${li(r.root)}-${Ve.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${li(r.root)}-duurisointu, ${r.shape}-muoto` : Cf(r.root, r.chord), z = r.mode !== "caged" && r.activity === "degree", D = z ? `${K}: mikä aste on ${E}?` : w ? `${K} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${I}. aste (${U}).` : `${K}: etsi ${I}. aste${x ? ` (${U})` : ""}.`;
  return {
    ...C,
    position: P,
    midi: P.midi,
    name: U,
    item: Id(r, j),
    prompt: D,
    degree: I,
    interval: j,
    choices: z ? "degree" : "position"
  };
}
function Po(r, a, o) {
  return Number.isInteger(a) && (o === "class" ? Qe(r) === Qe(a) : r === a);
}
function If(r, a, o) {
  return Po(a.midi, o.midi, a.check) ? r.mode === "notes" ? o.string === a.position.string : bp(r) ? is(r).some((c) => Ze(c) === Ze(o)) : !0 : !1;
}
function $p(r, a) {
  const o = Mi(r);
  return or(o.strings, o.min, o.max).filter((c) => If(r, a, c));
}
const At = (r, a, o) => ({ ...r, label: a, kind: o }), Fp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Ip(r, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = Mi(r), f = or(d.strings, d.min, d.max), p = $p(r, a);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((I) => At(I, a.name, "answer")), text: `${a.name} on ${Ef[a.position.string]}: ${Ci(a.position.fret)}.` };
    const w = f.find((I) => I.string === a.position.string), j = Oe(w.midi, r.flats);
    return {
      marks: [At(w, j, "anchor")],
      text: `Apupiste: ${pp[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${j}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [At(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [At(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${nn[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((w) => At(w, Oe(w.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Wo[a.position.string]}.` };
  if (r.mode === "interval") {
    const w = Oe(a.reference, r.flats, !0), j = f.filter((I) => I.midi === a.reference).map((I) => At(I, w, "anchor"));
    return c ? {
      marks: [...j, ...p.map((I) => At(I, Oe(I.midi, r.flats, !0), "answer"))],
      text: `${Fp(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: j, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(r), x = ba(r), b = (w) => x.find(([j]) => j === Qe(w.midi - r.root))?.[1] ?? "", v = Zr(r.root, a.interval, a.degree), g = m.filter((w) => Qe(w.midi - r.root) === 0), C = (w) => p.some((j) => Ze(j) === Ze(w)), _ = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((w) => At(w, b(w), C(w) ? "answer" : "shape")), text: _ } : { marks: m.map((w) => At(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const P = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((j) => Qe(j.midi) === Qe(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : g).map((j) => At(j, "1", "anchor")), ...w.map((j) => At(j, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((j) => At(j, v, "shape")), text: `Katso ${P} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((j) => At(j, "1", "anchor")), ...w.map((j) => At(j, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...g.filter((w) => !C(w)).map((w) => At(w, "1", "anchor")), ...p.map((w) => At(w, a.degree, "answer"))], text: _ } : a.interval === 0 ? { marks: [], text: `1. aste on ${P} perussävel ${li(r.root)}.` } : { marks: g.map((w) => At(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Dp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Ff(a);
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
      this.question = Op(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Lp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? Po(f.midi, a, "class") : o === "board" ? !!c && If(this.settings, f, c) : Po(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, x = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ze(m)}` : f.item,
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
    return m ? x.position = Ze(m) : this.settings.mode === "notes" && (x.position = Ze(f.position)), this.results.push(x), this.record(x), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ao(r) {
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
const Ro = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], nr = (r) => Ro.find(([a]) => a === r)?.[1] ?? r;
function Vt({ label: r, children: a }) {
  const o = M.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: o, children: r }),
    M.cloneElement(a, { id: o })
  ] });
}
function Dd({ legend: r, name: a, value: o, options: c, onChange: d, disabled: f }) {
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
function zd(r) {
  const a = Mi(r), o = Ff(r), c = Ti(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${_a[r.hints].title} · ${d} · ${Fn(r) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Bd({ s: r, change: a, locked: o, problem: c }) {
  const d = M.useId(), f = (v, g) => a({ ...r, [v]: g }), p = Mi(r), m = Ti(r) === "note" || Ti(r) === "degree", x = ["scale", "chord", "caged"].includes(r.mode), b = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Vt, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: r.mode, onChange: (v) => f("mode", v.target.value), children: Ro.map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: Ro.find(([v]) => v === r.mode)[2] })
    ] }),
    x && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Vt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: r.root, onChange: (v) => f("root", Number(v.target.value)), children: Ve.CHROM.map((v, g) => /* @__PURE__ */ s.jsx("option", { value: g, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Vt, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: r.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Ve.SCALES).map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g.name }, v)) }) }),
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
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (g) => f("intervals", g.target.checked ? [...r.intervals, v] : r.intervals.filter((C) => C !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx(Vt, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: r.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      Dd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ..._a[v] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(Dd, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (v) => f("input", v), options: [
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
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: nn.map((v, g) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.strings.includes(g), onChange: (C) => f("strings", C.target.checked ? [...r.strings, g] : r.strings.filter((_) => _ !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        b && /* @__PURE__ */ s.jsxs("label", { children: [
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
const Vd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function zp(r) {
  return r && Object.hasOwn(Vd, r) ? Vd[r] : null;
}
const Bp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Vp({ onSelect: r }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: Bp.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
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
function Kp({ onBack: r, onNotes: a }) {
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
const Up = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Lo = 100, Df = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Yo(r) {
  if (r === null || r.trim() === "") return Lo;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Lo;
}
function Hp() {
  try {
    return Yo(localStorage.getItem(Df));
  } catch {
    return Lo;
  }
}
function Gp(r) {
  try {
    localStorage.setItem(Df, String(Yo(String(r))));
  } catch {
  }
}
function Kd(r, a, o = !0) {
  return o ? Up[r] * Yo(String(a)) / 100 : 0;
}
function zf(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Bf = 0.12, Wp = 2e3, Vf = 3, Oo = 1e-3, Qp = Bf, Ud = 1500, Hd = 4e3;
function Kf(r) {
  return r.readyState >= Vf && !r.seeking;
}
function Uf(r) {
  return r.every(Kf);
}
function Gd(r) {
  let a = 0;
  for (const o of r)
    if (!Kf(o))
      try {
        const c = o.play();
        o.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), a++;
      } catch {
      }
  return a;
}
function Hf(r, a, o, c = Gf) {
  return Wf(
    r,
    Uf,
    ["loadeddata", "canplay", "canplaythrough", "seeked", "error"],
    a,
    o,
    c
  );
}
const Gf = { set: (r, a) => setTimeout(r, a), clear: (r) => clearTimeout(r) }, Yp = 100, Wd = 250;
async function Jp(r, a, o) {
  const { timeoutMs: c, cancelled: d, stale: f, playedAt: p, onLoad: m, source: x, now: b = () => performance.now(), timers: v = Gf } = o, g = b(), C = () => Math.max(0, c - (b() - g));
  for (const j of r) j.paused || j.pause();
  const _ = (j) => {
    const I = x?.(j);
    return I !== void 0 && I !== j.src ? I : void 0;
  }, P = r.filter((j) => f(j) || _(j) !== void 0);
  if (P.length) {
    const I = Math.max(-1 / 0, ...P.map((E) => p?.(E) ?? -1 / 0)) + Yp - b();
    if (I > 0 && await new Promise((E) => {
      v.set(E, I);
    }), d()) return "ohitettu";
    for (const E of P) {
      const U = _(E);
      U !== void 0 ? E.src = U : E.load(), m?.(E);
    }
  }
  const w = await Wf(
    r,
    (j) => j.every((I) => I.readyState >= 1),
    ["loadedmetadata", "loadeddata", "canplay", "error"],
    C(),
    d,
    v
  );
  if (w !== "valmis") return w;
  for (const j of r) {
    const I = Number.isFinite(j.duration) ? Math.min(a, Math.max(0, j.duration - 0.05)) : a;
    if (!(Math.abs(j.currentTime - I) < Oo))
      try {
        j.currentTime = I;
      } catch {
        return "virhe";
      }
  }
  return Hf(r, C(), d, v);
}
async function Xp(r, a = {}) {
  const o = a.fetch ?? ((x, b) => fetch(x, b)), c = a.createUrl ?? ((x) => URL.createObjectURL(x)), d = a.revokeUrl ?? ((x) => URL.revokeObjectURL(x)), f = await Promise.all(r.map(async (x) => {
    const b = await o(x, { signal: a.signal });
    if (!b.ok) throw new Error(`${x}: HTTP ${b.status}`);
    const v = await b.blob();
    return v.type.startsWith("audio/") ? v : new Blob([v], { type: "audio/mpeg" });
  })), p = f.map((x) => c(x));
  let m = !1;
  return {
    urls: p,
    bytes: f.reduce((x, b) => x + b.size, 0),
    release() {
      if (!m) {
        m = !0;
        for (const x of p) d(x);
      }
    }
  };
}
function Wf(r, a, o, c, d, f) {
  return new Promise((p) => {
    let m = !1, x = null;
    const b = f.set(() => v("aikakatkaisu"), c);
    function v(_) {
      if (!m) {
        m = !0, f.clear(b), x !== null && f.clear(x);
        for (const P of r) for (const w of o) P.removeEventListener(w, g);
        p(_);
      }
    }
    function g() {
      d() ? v("ohitettu") : r.some((_) => _.error) ? v("virhe") : a(r) && v("valmis");
    }
    const C = () => {
      g(), m || (x = f.set(C, 50));
    };
    for (const _ of r) for (const P of o) _.addEventListener(P, g);
    g(), m || (x = f.set(C, 50));
  });
}
function Zp(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= Bf || r.seeking || r.readyState < Vf ? !1 : r.msSinceLastFix >= Wp;
}
const qp = 1.5, ev = 0.4, tv = 0.5;
let $o = null, nv = null;
function iv(r) {
  return $o !== null ? $o : (nv ??= zf()) ? 0 : ev;
}
class Qf {
  constructor(a = iv()) {
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
  align(a, o, c = !1, d = performance.now(), f = Oo) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused) || !c && d < this.holdUntil) return !1;
    const p = o.currentTime - a.currentTime, m = Math.abs(p), x = a.loop && Number.isFinite(a.duration) && Math.abs(m - a.duration) < 0.35, b = this.lastFix.get(o);
    if (!Zp({
      drift: m,
      atLoopBoundary: x,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: b === void 0 ? 1 / 0 : d - b
    }, c)) return !1;
    const v = !a.paused;
    !c && v && b !== void 0 && (this.latency = Math.min(qp, Math.max(0, this.latency - tv * p)), $o = this.latency);
    let g = a.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (g = Math.min(g, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - g) < Math.max(f, Oo)) return !1;
    try {
      o.currentTime = g;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function rv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function sv(r = rv(), a = () => zf()) {
  return r ? "webaudio" : a() ? "element" : "webaudio";
}
function av(r = globalThis.navigator) {
  const a = r?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const lv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class ov {
  constructor(a = lv, o = globalThis.navigator) {
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
        av(this.nav);
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
const uv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", cv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Qd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Yf() {
  const r = M.useRef(null), a = M.useRef(null), [o, c] = M.useState(!1), [d, f] = M.useState(!1), [p, m] = M.useState(!1), [x, b] = M.useState(0), [v, g] = M.useState(0), [C, _] = M.useState(""), P = M.useRef(new Qf());
  function w(K = !1) {
    const z = r.current, D = a.current;
    !z || !D || !Number.isFinite(z.currentTime) || P.current.align(z, D, K);
  }
  function j() {
    r.current?.pause(), a.current?.pause(), c(!1);
  }
  async function I() {
    const K = r.current, z = a.current;
    if (!(!K || !z)) {
      if (o) {
        j();
        return;
      }
      _(""), z.muted = !d, z.volume = 0.55, K.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [K.play(), z.play()] : [K.play()]), w(), c(!0);
      } catch {
        j(), _("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function E(K) {
    const z = r.current, D = a.current;
    if (!(!z || !D || !Number.isFinite(K))) {
      z.currentTime = K;
      try {
        D.currentTime = K;
      } catch {
      }
      b(K);
    }
  }
  function U(K) {
    const z = r.current, D = a.current;
    if (f(K), !!D) {
      if (D.muted = !K, !K) {
        D.pause();
        return;
      }
      !z || !o || (w(!0), D.play().catch(() => _("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return M.useEffect(() => {
    const K = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", K), () => {
      document.removeEventListener("visibilitychange", K), r.current?.pause(), a.current?.pause();
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
              onChange: (K) => U(K.target.checked)
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
              onChange: (K) => m(K.target.checked)
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
          value: Math.min(x, v > 0 ? v : 1),
          disabled: !v,
          onChange: (K) => E(Number(K.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Qd(x),
        " / ",
        Qd(v)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: uv,
        loop: p,
        onLoadedMetadata: (K) => g(K.currentTarget.duration),
        onTimeUpdate: (K) => {
          b(K.currentTarget.currentTime), K.currentTarget.paused || w();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), c(!1), b(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => _("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: cv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const K = r.current, z = a.current;
          K?.duration && z?.duration && Math.abs(K.duration - z.duration) > 0.15 && _("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => _("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    C && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: C }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const dv = 4e3;
class Yd extends Error {
  name = "MicSetupError";
}
async function fv(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Yd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let b;
      await Promise.race([
        d.resume(),
        new Promise((v, g) => {
          b = setTimeout(() => g(new Yd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), dv);
        })
      ]).finally(() => clearTimeout(b));
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
        c.getTracks().forEach((b) => b.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function hv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var go, Jd;
function mv() {
  if (Jd) return go;
  Jd = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const b = Math.PI * c / this.size;
      o[c] = Math.cos(b), o[c + 1] = -Math.sin(b);
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, b = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const j = b[x];
        this._singleTransform2(m, j, f);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const j = b[x];
        this._singleTransform4(m, j, f);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var _ = m + C, P = m, w = 0; P < _; P += 2, w += f) {
          const j = P, I = j + C, E = I + C, U = E + C, K = o[j], z = o[j + 1], D = o[I], O = o[I + 1], F = o[E], se = o[E + 1], ne = o[U], Ee = o[U + 1], Pe = K, Z = z, fe = g[w], H = v * g[w + 1], ue = D * fe - O * H, le = D * H + O * fe, W = g[2 * w], ae = v * g[2 * w + 1], ie = F * W - se * ae, N = F * ae + se * W, y = g[3 * w], q = v * g[3 * w + 1], ce = ne * y - Ee * q, Ce = ne * q + Ee * y, G = Pe + ie, B = Z + N, J = Pe - ie, X = Z - N, he = ue + ce, Me = le + Ce, ke = v * (ue - ce), ve = v * (le - Ce), we = G + he, Re = B + Me, Te = G - he, Be = B - Me, tt = J + ve, Ue = X - ke, Ye = J - ve, rt = X + ke;
          o[j] = we, o[j + 1] = Re, o[I] = tt, o[I + 1] = Ue, o[E] = Te, o[E + 1] = Be, o[U] = Ye, o[U + 1] = rt;
        }
    }
  }, r.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + 1], b = p[c + d], v = p[c + d + 1], g = m + b, C = x + v, _ = m - b, P = x - v;
    f[o] = g, f[o + 1] = C, f[o + 2] = _, f[o + 3] = P;
  }, r.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, b = d * 3, v = p[c], g = p[c + 1], C = p[c + d], _ = p[c + d + 1], P = p[c + x], w = p[c + x + 1], j = p[c + b], I = p[c + b + 1], E = v + P, U = g + w, K = v - P, z = g - w, D = C + j, O = _ + I, F = m * (C - j), se = m * (_ - I), ne = E + D, Ee = U + O, Pe = K + se, Z = z - F, fe = E - D, H = U - O, ue = K - se, le = z + F;
    f[o] = ne, f[o + 1] = Ee, f[o + 2] = Pe, f[o + 3] = Z, f[o + 4] = fe, f[o + 5] = H, f[o + 6] = ue, f[o + 7] = le;
  }, r.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, b = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const oe = b[x];
        this._singleRealTransform2(m, oe >>> 1, f >>> 1);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const oe = b[x];
        this._singleRealTransform4(m, oe >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 1, _ = C >>> 1, P = _ >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, j = 0; w <= P; w += 2, j += f) {
          var I = m + w, E = I + _, U = E + _, K = U + _, z = o[I], D = o[I + 1], O = o[E], F = o[E + 1], se = o[U], ne = o[U + 1], Ee = o[K], Pe = o[K + 1], Z = z, fe = D, H = g[j], ue = v * g[j + 1], le = O * H - F * ue, W = O * ue + F * H, ae = g[2 * j], ie = v * g[2 * j + 1], N = se * ae - ne * ie, y = se * ie + ne * ae, q = g[3 * j], ce = v * g[3 * j + 1], Ce = Ee * q - Pe * ce, G = Ee * ce + Pe * q, B = Z + N, J = fe + y, X = Z - N, he = fe - y, Me = le + Ce, ke = W + G, ve = v * (le - Ce), we = v * (W - G), Re = B + Me, Te = J + ke, Be = X + we, tt = he - ve;
          if (o[I] = Re, o[I + 1] = Te, o[E] = Be, o[E + 1] = tt, w === 0) {
            var Ue = B - Me, Ye = J - ke;
            o[U] = Ue, o[U + 1] = Ye;
            continue;
          }
          if (w !== P) {
            var rt = X, jt = -he, qe = B, $e = -J, nt = -v * we, vt = -v * ve, Ft = -v * ke, Tt = -v * Me, Kt = rt + nt, It = jt + vt, V = qe + Tt, ge = $e - Ft, te = m + _ - w, Fe = m + C - w;
            o[te] = Kt, o[te + 1] = It, o[Fe] = V, o[Fe + 1] = ge;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + d], b = m + x, v = m - x;
    f[o] = b, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, b = d * 3, v = p[c], g = p[c + d], C = p[c + x], _ = p[c + b], P = v + C, w = v - C, j = g + _, I = m * (g - _), E = P + j, U = w, K = -I, z = P - j, D = w, O = I;
    f[o] = E, f[o + 1] = 0, f[o + 2] = U, f[o + 3] = K, f[o + 4] = z, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = O;
  }, go;
}
var pv = mv();
const vv = /* @__PURE__ */ qm(pv);
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
    this._inputLength = a, this._fft = new vv(gv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function kv(r) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < r.length - 1; f++)
    r[f - 1] <= 0 && r[f] > 0 ? (o = !0, d = f, c = r[f]) : r[f - 1] > 0 && r[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && r[f] > c && (c = r[f], d = f);
  return a;
}
function yv(r, a) {
  const [o, c, d] = [r - 1, r, r + 1], [f, p, m] = [a[o], a[c], a[d]], x = f / 2 - p + m / 2, b = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, g = -b / (2 * x), C = x * g * g + b * g + v;
  return [g, C];
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
    const c = kv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((x) => this._nsdfBuffer[x])), f = c.find(
      (x) => this._nsdfBuffer[x] >= this._clarityThreshold * d
    ), [p, m] = yv(
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
function gv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function jv(r) {
  const a = r * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const xv = 0.05, Sv = 1.5;
class wv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = jv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * xv))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Nv();
  onset = new Ev();
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
      onStableNote: b
    } = this.opts, v = this.analysers.map((O, F) => (O.getFloatTimeDomainData(this.buffers[F]), Xd(this.buffers[F], this.buffers[F].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * Sv && (this.channel = g);
    const C = this.buffers[this.channel], _ = v[this.channel], P = Cv(C, C.length - this.shortLength), w = { rms: _, peak: P, channel: this.channel, levels: v }, j = _ < c, I = this.onset.feed(_, a, c);
    if (j && Xd(C, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), x?.({ ...w, status: "silent" });
      return;
    }
    const [E, U] = this.detector.findPitch(C, this.mic.context.sampleRate);
    if (!isFinite(E) || U < o) {
      this.gate.feed(null, a, d, j, I), x?.({ ...w, status: j ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (E < p || E > m) {
      this.gate.feed(null, a, d, j, I), x?.({ ...w, status: "out-of-range", frequency: E, clarity: U });
      return;
    }
    const { midi: K, cents: z } = dp(E);
    if (Math.abs(z) > f) {
      this.gate.feed(null, a, d, j, I), x?.({ ...w, status: "off-pitch", frequency: E, clarity: U, midi: K, cents: z });
      return;
    }
    x?.({ ...w, status: "pitch", frequency: E, clarity: U, midi: K, cents: z });
    const D = this.gate.feed(K, a, d, j, I);
    D !== null && b?.({ midi: K, frequency: E, cents: z, clarity: U, timestamp: a, heldMs: D.heldMs });
  }
}
class Nv {
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
class Ev {
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
function Xd(r, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - o));
}
function Cv(r, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > o && (o = d);
  }
  return o;
}
const lr = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let er;
function Jf() {
  return (!er || er.state === "closed") && (er = new AudioContext()), er;
}
function Tv() {
  const r = er;
  er = void 0, r?.close().catch(() => {
  });
}
const Xf = (r) => r instanceof Error ? r.name : "";
function Mv(r) {
  const a = Xf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class _v {
  constructor(a = (o) => fv(o, Jf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Xf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new wv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, x = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((b) => b.addEventListener("ended", m, { once: !0, signal: x.signal })), f.context.addEventListener?.("statechange", () => {
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
function Zf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Zd = (r) => Math.max(0, Math.min(1, (lr(r) + 60) / 60));
function bv(r) {
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
  constructor(a = Jf) {
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
    const p = Array.from({ length: 12 }, (b, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((b, v) => {
      const g = d.createOscillator(), C = d.createGain(), _ = d.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = yo(b), C.gain.setValueAtTime(0, _), C.gain.linearRampToValueAtTime(0.22, _ + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, _ + 0.7), g.connect(C), C.connect(f), g.start(_), g.stop(_ + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), a.length * 800 + 350);
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
    const m = 60 / Math.max(40, Math.min(140, o)), x = p.createGain();
    x.connect(p.destination), this.master = x;
    const b = Array.from({ length: 12 }, (P, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...b.map(() => 0)]),
      new Float32Array([0, ...b])
    ), g = p.currentTime + 0.05;
    let C = 0;
    return a.forEach((P, w) => {
      if (!Number.isFinite(P.beat) || P.beat < 0 || !Number.isFinite(P.duration) || P.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const j = g + P.beat * m, I = P.duration * m, E = j + Math.max(0.08, I * 0.94), U = p.createOscillator(), K = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = yo(P.midi), K.gain.setValueAtTime(0, j), K.gain.linearRampToValueAtTime(0.22, j + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, E - 0.01), U.connect(K), K.connect(x), U.start(j), U.stop(E), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(w);
      }, 50 + P.beat * m * 1e3));
      const z = a[w + 1]?.beat ?? 1 / 0;
      d && z > P.beat + P.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + P.beat * m * 1e3 + I * 1e3)), C = Math.max(C, P.beat + P.duration);
    }), !await new Promise((P) => {
      this.settle = P, this.timer = setTimeout(() => P(!0), 50 + C * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], x.disconnect(), this.master = void 0, !0);
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
    const m = Array.from({ length: 12 }, (w, j) => 1 / (j + 1) ** 1.3), x = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let b = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (b = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let g = f.currentTime + 0.05, C = 0;
    const _ = [], P = () => {
      if (d === this.token) {
        if (g < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - g) / b);
          g += w * b, C = (C + w) % a.length, _.length = 0;
        }
        for (; g < f.currentTime + v; ) {
          const w = a[C], j = C, I = g, E = f.createOscillator(), U = f.createGain();
          x ? E.setPeriodicWave(x) : E.type = "triangle", E.frequency.value = yo(w), U.gain.setValueAtTime(0, I), U.gain.linearRampToValueAtTime(0.22, I + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, I + b * 0.975), E.connect(U), U.connect(p), E.start(I), E.stop(I + b * 0.985), _.push({ at: I, index: j }), g += b, C = (C + 1) % a.length;
        }
        for (; _.length && _[0].at <= f.currentTime + 0.01; ) {
          const w = _.shift();
          o?.(w.index);
        }
      }
    };
    return P(), this.loopTick = setInterval(P, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function ui(r, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const x = { position: d === null || f === null ? null : ze(d, f), beat: o, duration: p };
    return o += p, x;
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
const qd = ui("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), ef = ui("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Pv = ui("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), tf = ui("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), nf = ui("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Av = ui("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), rf = ui("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), sf = ui("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Rv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [qd, ef],
    whole: xo("Melodia · A + B + C", qd, ef, Pv),
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
    fragments: [tf, nf],
    whole: xo("Ukko Nooa · A + B", tf, nf),
    bonus: Av,
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
    fragments: [rf, sf],
    whole: xo("Siirtymämelodia · A + B", rf, sf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Lv(r) {
  return r.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const af = ["e", "B", "G", "D", "A", "E"];
function Jo({ pieceId: r, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = Rv[r], [f, p] = M.useState(a === "fingering" ? "a" : "whole"), [m, x] = M.useState(d.tempo), [b, v] = M.useState(!1), [g, C] = M.useState(!1), [_, P] = M.useState(a !== "memory"), [w, j] = M.useState(!1), [I, E] = M.useState(null), [U, K] = M.useState(""), z = M.useRef(new rs()), D = M.useRef(0);
  function O() {
    D.current++, z.current.stop(), j(!1), E(null);
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
  const F = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], se = F.find((y) => y.id === f) ?? F[0], ne = se.clip, Ee = Lv(ne), Pe = I === null ? null : Ee[I]?.beat ?? null, Z = Pe === null ? null : ne.events.find((y) => y.beat === Pe)?.position ?? null, fe = M.useRef(null);
  Pf(fe, ".melody-playing", w && Pe !== null ? String(Pe) : "", { enabled: b && g, playback: w });
  const H = ne.beats / 4, ue = [...new Map(ne.events.filter((y) => y.position).map((y) => [Ze(y.position), y.position])).values()], le = ue.map((y) => y.fret), W = ue.filter((y) => _ || Z?.string === y.string && Z.fret === y.fret).map((y) => ({
    ...y,
    label: Oe(y.midi),
    kind: Z?.string === y.string && Z.fret === y.fret ? "playing" : Qe(y.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(ue.map((y) => y.string))],
    min: Math.min(...le),
    max: Math.max(...le),
    fixed: "box"
  };
  async function ie() {
    if (w) {
      O();
      return;
    }
    o?.();
    const y = ++D.current;
    z.current.stop(), j(!0), E(null), K("");
    try {
      await z.current.playTimed(Ee, m, (q) => {
        y === D.current && E(q);
      }, () => {
        y === D.current && E(null);
      });
    } catch (q) {
      y === D.current && K(Pa(q));
    } finally {
      y === D.current && (j(!1), E(null));
    }
  }
  function N(y) {
    O(), K(""), p(y);
  }
  return /* @__PURE__ */ s.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ s.jsxs("details", { onToggle: (y) => {
    const q = y.currentTarget.open;
    v(q), q || O();
  }, children: [
    /* @__PURE__ */ s.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    b && /* @__PURE__ */ s.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ s.jsx("h4", { children: d.title }),
      /* @__PURE__ */ s.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        H.toString().replace(".", ","),
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
      a !== "memory" && /* @__PURE__ */ s.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: F.map((y) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": se.id === y.id,
          onClick: () => N(y.id),
          children: y.name
        },
        y.id
      )) }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          ie();
        }, children: w ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ s.jsx("select", { value: m, onChange: (y) => {
            O(), x(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, q) => y - q).filter((y, q, ce) => ce.indexOf(y) === q).map((y) => /* @__PURE__ */ s.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": g, onClick: () => C((y) => !y), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ s.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && I !== null ? `Nyt soi ${Oe(Ee[I].midi)} · ${af[Z.string]}-kieli, ${Z.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ s.jsx(oi, { area: ae, marks: W, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${se.name}` }),
        /* @__PURE__ */ s.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": _,
              onClick: () => P((y) => !y),
              children: _ ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ s.jsxs("div", { ref: fe, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ s.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${se.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kieli" }),
            ne.events.map((y, q) => /* @__PURE__ */ s.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ s.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ s.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, q))
          ] }) }),
          /* @__PURE__ */ s.jsx("tbody", { children: af.map((y, q) => /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "row", children: y }),
            ne.events.map((ce, Ce) => {
              const G = ce.position?.string === q, B = G && Pe === ce.beat;
              return /* @__PURE__ */ s.jsx(
                "td",
                {
                  className: `${ce.beat % 4 === 0 ? "bar-start " : ""}${B ? "melody-playing " : ""}${G && Qe(ce.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${y}-kieli, ${ce.position.fret}. nauha, ${Oe(ce.position.midi)}` : void 0,
                  children: G ? ce.position.fret : "—"
                },
                Ce
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
const Fo = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [1, 2]), qf = [...new Map(Fo.flatMap((r) => r.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = ze(o, c);
  return [Ze(d), d];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Ca = [5, 4, 3, 2, 1, 0].flatMap((r) => qf.filter((a) => a.string === r).sort((a, o) => a.fret - o.fret)), Io = [
  ...Ca,
  ...Ca.slice(1, -1).reverse()
], Ov = [...Io, Ca[0]], lf = new Set(
  Fo[0].positions[0].strings.flatMap((r, a) => r.map((o) => {
    const c = ze(a, o);
    return Ze(c);
  })).filter((r) => Fo[1].positions[0].strings.flatMap((a, o) => a.map((c) => Ze(ze(o, c)))).includes(r))
), $v = [
  ze(5, 5),
  ze(5, 8),
  ze(5, 10),
  ze(4, 7),
  ze(4, 10),
  ze(3, 7),
  ze(3, 10),
  ze(3, 7),
  ze(4, 10),
  ze(4, 7),
  ze(5, 10),
  ze(5, 8),
  ze(5, 5)
], eh = "musiikin-kartta:skaalapolku:bridge-1-2:v1", th = "musiikin-kartta:skaalapolku:bridge-tempo:v1", So = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], of = (r) => Qe(r) === 9;
function uf() {
  try {
    const r = Number(localStorage.getItem(eh));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Fv() {
  try {
    const r = Number(localStorage.getItem(th));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Iv({ onBack: r, onPosition: a }) {
  const [o, c] = M.useState(uf), [d, f] = M.useState(uf), [p, m] = M.useState(!1), [x, b] = M.useState("roots"), [v, g] = M.useState(Fv), [C, _] = M.useState(null), [P, w] = M.useState(null), [j, I] = M.useState(""), E = M.useRef(new rs()), U = M.useRef(0), K = M.useRef(null), z = P === null ? null : Io[P];
  function D() {
    K.current?.(), U.current++, E.current.stop(), _(null), w(null);
  }
  M.useEffect(() => {
    const Z = () => {
      document.hidden && (U.current++, E.current.stop(), _(null), w(null));
    };
    return document.addEventListener("visibilitychange", Z), () => {
      document.removeEventListener("visibilitychange", Z), U.current++, E.current.stop();
    };
  }, []);
  async function O(Z) {
    K.current?.();
    const fe = ++U.current;
    E.current.stop(), w(null), I(""), _(Z);
    try {
      Z === "transition" ? await E.current.play($v.map((H) => H.midi)) : Z === "once" ? await E.current.play(Ov.map((H) => H.midi)) : await E.current.loop(Io.map((H) => H.midi), (H) => {
        fe === U.current && w(H);
      }, v);
    } catch (H) {
      fe === U.current && I(Pa(H));
    } finally {
      fe === U.current && (_(null), w(null));
    }
  }
  function F(Z) {
    const fe = Math.max(40, Math.min(140, Z));
    g(fe), E.current.setLoopTempo(fe);
    try {
      localStorage.setItem(th, String(fe));
    } catch {
    }
  }
  function se(Z) {
    Z > o || (D(), f(Z), m(!1), b("roots"));
  }
  function ne() {
    D();
    const Z = Math.min(4, d + 1);
    if (f(Z), m(!1), b("roots"), Z > o) {
      c(Z);
      try {
        localStorage.setItem(eh, String(Z));
      } catch {
      }
    }
  }
  const Ee = (Z, fe) => d < 2 || d === 2 && p && lf.has(fe) || d === 3 && (x === "all" || x === "roots" && of(Z)), Pe = qf.filter((Z) => Ee(Z.midi, Ze(Z))).map((Z) => ({
    ...Z,
    label: d < 2 || d === 2 && p || d === 3 && x === "all" ? Oe(Z.midi) : "A",
    kind: d < 2 && z?.string === Z.string && z?.fret === Z.fret ? "playing" : of(Z.midi) ? "answer" : lf.has(Ze(Z)) ? "anchor" : "shape"
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
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => se(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: So.map((Z, fe) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: fe === d ? "journey-step current" : "journey-step",
        "aria-current": fe === d ? "step" : void 0,
        disabled: fe > o,
        onClick: () => se(fe),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: fe > o ? "🔒" : fe < o ? "✓" : fe + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: Z.title })
        ]
      },
      Z.title
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
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ s.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "whole",
              onClick: () => C === "whole" ? D() : void O("whole"),
              children: C === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "once",
              onClick: () => C === "once" ? D() : void O("once"),
              children: C === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "transition",
              onClick: () => C === "transition" ? D() : void O("transition"),
              children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((Z) => !Z), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => se(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Z) => /* @__PURE__ */ s.jsxs("label", { children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Z.value,
                  checked: x === Z.value,
                  onChange: () => b(Z.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: Z.name })
            ] }, Z.value))
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => C === "once" ? D() : void O("once"), children: C === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => C === "transition" ? D() : void O("transition"), children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "whole" ? z && d < 2 ? `Nyt soi ${Oe(z.midi, !1, !0)} · ${nn[z.string]}-kieli, nauha ${z.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : C === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : C === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        j && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: j }),
        /* @__PURE__ */ s.jsx(
          oi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: C,
            marks: Pe,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? x === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : x === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ s.jsx(
          Jo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: K
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ s.jsx(Yf, {}),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ne, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ s.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => se(2), children: "Kertaa muistiharjoitus" }),
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
const Xr = "musiikin-kartta:skaalapolku:v1", ja = "musiikin-kartta:skaalapolku:position-2:v1", wo = "musiikin-kartta:skaalapolku:position-3:v1", xa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ta = "musiikin-kartta:skaalapolku:active-position:v1", nh = "musiikin-kartta:skaalapolku:tempo:v1", ir = 75, Do = 40, zo = 140;
function Dv() {
  try {
    const r = localStorage.getItem(nh);
    if (r === null) return ir;
    const a = Number(r);
    return Number.isInteger(a) && a >= Do && a <= zo && a % 5 === 0 ? a : ir;
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
], cf = [
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
function zv() {
  try {
    return En(ja) === 4 && localStorage.getItem(Ta) === "bridge";
  } catch {
    return !1;
  }
}
function Bv({ onBack: r }) {
  const [a, o] = M.useState(Eo), [c, d] = M.useState(zv), [f, p] = M.useState(() => ({
    1: En(Xr),
    2: En(ja),
    3: En(wo)
  })), [m, x] = M.useState(() => En(Eo() === 3 ? wo : Eo() === 2 ? ja : Xr)), b = f[a], [v, g] = M.useState(!1), [C, _] = M.useState("roots"), [P, w] = M.useState(Dv), [j, I] = M.useState(null), [E, U] = M.useState(null), [K, z] = M.useState(""), D = M.useRef(new rs()), O = M.useRef(0), F = M.useRef(null);
  function se(G) {
    const B = Math.max(Do, Math.min(zo, G));
    w(B), D.current.setLoopTempo(B);
    try {
      localStorage.setItem(nh, String(B));
    } catch {
    }
  }
  function ne() {
    F.current?.(), O.current++, D.current.stop(), I(null), U(null);
  }
  M.useEffect(() => {
    const G = () => {
      document.hidden && (O.current++, D.current.stop(), I(null), U(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), O.current++, D.current.stop();
    };
  }, []);
  const Ee = Ve.fingeringBoxes(9, Ve.SCALES.mp, "pentatonic", [a])[0].positions[0], Pe = Ee.strings.flatMap((G, B) => G.map((J) => ze(B, J))).sort((G, B) => G.midi - B.midi || B.string - G.string), Z = [...Pe, ...Pe.slice(1, -1).reverse()], fe = E === null ? null : Z[E], H = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ue = Ee.start, le = Ee.end, W = (G) => Qe(G) === 9, ae = (G) => m < 2 ? !0 : m === 2 ? v && W(G) : C === "scale" || C === "roots" && W(G), ie = Pe.filter((G) => ae(G.midi)).map((G) => ({
    ...G,
    label: m < 2 || m === 3 && C === "scale" ? Oe(G.midi) : "A",
    kind: m < 2 && fe?.string === G.string && fe.fret === G.fret ? "playing" : W(G.midi) ? "answer" : "shape"
  }));
  async function N(G) {
    F.current?.();
    const B = ++O.current;
    D.current.stop(), U(null), z(""), I(G);
    try {
      G === "phrase" ? await D.current.play(H) : await D.current.loop(Z.map((J) => J.midi), (J) => {
        B === O.current && U(J);
      }, m === 2 ? P : ir);
    } catch (J) {
      B === O.current && z(Pa(J));
    } finally {
      B === O.current && (I(null), U(null));
    }
  }
  function y() {
    ne();
    const G = Math.min(4, m + 1);
    if (x(G), g(!1), _("roots"), G > b) {
      p((J) => ({ ...J, [a]: G }));
      const B = a === 1 ? Xr : a === 2 ? ja : wo;
      try {
        localStorage.setItem(B, String(G));
      } catch {
      }
    }
  }
  function q(G) {
    G > b || (ne(), x(G), g(!1), _("roots"));
  }
  function ce(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && En(xa) < 4)) {
      ne(), d(!1), o(G), x(f[G]), g(!1), _("roots"), z("");
      try {
        localStorage.setItem(Ta, String(G));
      } catch {
      }
    }
  }
  function Ce() {
    if (!(f[2] < 4)) {
      ne(), d(!0), g(!1), z("");
      try {
        localStorage.setItem(Ta, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ s.jsx(Iv, { onBack: r, onPosition: ce }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ne(), r();
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
      ue,
      "–",
      le,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => ce(1), children: "Positio 1" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => ce(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Ce,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(xa) < 4,
          onClick: () => ce(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: No.map((G, B) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: B === m ? "journey-step current" : "journey-step",
        "aria-current": B === m ? "step" : void 0,
        disabled: B > b,
        onClick: () => q(B),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: B > b ? "🔒" : B < b ? "✓" : B + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: B === 4 ? `Positio ${a} harjoiteltu` : G.title })
        ]
      },
      G.title
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
              disabled: P <= Do,
              onClick: () => se(P - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            P,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: P >= zo,
              onClick: () => se(P + 5),
              children: "+ 5"
            }
          ),
          P !== ir && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => se(ir),
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
              "aria-pressed": j === "loop",
              onClick: () => j === "loop" ? ne() : void N("loop"),
              children: j === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => j === "phrase" ? ne() : void N("phrase"), children: j === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: j === "loop" ? fe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Oe(fe.midi, !1, !0)} · ${nn[fe.string]}-kieli, nauha ${fe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        K && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: K }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => q(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              cf.map((G) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: C === G.value,
                    onChange: () => _(G.value)
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            a !== 1 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
              N("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ s.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: le, fixed: "box" }, marks: ie, disabled: !0, follow: "playing", playback: j, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? cf.find((G) => G.value === C).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: le, fixed: "box" }, marks: ie, disabled: !0, follow: "playing", playback: j, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ s.jsx(
          Jo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: ne,
            stopHandleRef: F
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ s.jsx(Yf, {}, a),
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
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => ce(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: Ce, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => ce(2), children: "Kertaa positio 2" })
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
const Vv = ["ionian", "aeolian"], tr = {
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
      ze(4, 3),
      ze(4, 5),
      ze(3, 2),
      ze(3, 3),
      ze(3, 5),
      ze(2, 2),
      ze(2, 4),
      ze(2, 5)
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
      ze(5, 5),
      ze(5, 7),
      ze(5, 8),
      ze(4, 5),
      ze(4, 7),
      ze(4, 8),
      ze(3, 5),
      ze(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, ih = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", rh = "musiikin-kartta:moodipolku:active:v1", Kv = (r) => {
  const a = tr[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Uv = (r) => [...Kv(r), tr[r].positions[0]], df = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Sa(r) {
  try {
    const a = Number(localStorage.getItem(ih(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function ff() {
  try {
    return localStorage.getItem(rh) === "aeolian" && Sa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Hv({ onBack: r }) {
  const [a, o] = M.useState(ff), [c, d] = M.useState(() => ({
    ionian: Sa("ionian"),
    aeolian: Sa("aeolian")
  })), [f, p] = M.useState(() => Sa(ff())), [m, x] = M.useState(null), [b, v] = M.useState(null), [g, C] = M.useState(!1), [_, P] = M.useState("roots"), [w, j] = M.useState(""), [I, E] = M.useState(null), [U, K] = M.useState(null), z = M.useRef(new rs()), D = M.useRef(0), O = M.useRef(null), F = tr[a], se = Uv(a), ne = m === "scale" && b !== null ? se[b] : null;
  function Ee() {
    O.current?.(), D.current++, z.current.stop(), x(null), v(null);
  }
  M.useEffect(() => {
    const y = () => {
      document.hidden && (D.current++, z.current.stop(), x(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, z.current.stop();
    };
  }, []);
  async function Pe(y, q, ce = !1) {
    O.current?.();
    const Ce = ++D.current;
    z.current.stop(), v(null), j(""), x(y);
    try {
      const G = ce ? await z.current.loop(q, void 0, 75) : await z.current.play(q, (B) => {
        Ce === D.current && y === "scale" && v(B);
      });
      return Ce === D.current && G;
    } catch (G) {
      return Ce === D.current && j(Pa(G)), !1;
    } finally {
      Ce === D.current && (x(null), v(null));
    }
  }
  function Z(y) {
    y > c[a] || (Ee(), p(y), E(null), K(null), C(!1), P("roots"), j(""));
  }
  function fe() {
    Ee();
    const y = Math.min(5, f + 1);
    if (p(y), E(null), K(null), C(!1), P("roots"), y > c[a]) {
      d((q) => ({ ...q, [a]: y }));
      try {
        localStorage.setItem(ih(a), String(y));
      } catch {
      }
    }
  }
  function H(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      Ee(), o(y), p(c[y]), E(null), K(null), C(!1), P("roots"), j("");
      try {
        localStorage.setItem(rh, y);
      } catch {
      }
    }
  }
  async function ue() {
    Ee(), K(null), E(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Pe("comparison", tr[y].phrase) && E(y);
  }
  const le = (y) => Qe(y) === F.tonic, W = F.positions.filter((y) => f < 2 ? !0 : f === 2 ? g && le(y.midi) : f === 4 ? _ === "all" || _ === "roots" && le(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && _ === "roots" ? F.tonicName : Oe(y.midi),
    kind: ne?.string === y.string && ne.fret === y.fret ? "playing" : le(y.midi) ? "answer" : "shape"
  })), ae = [...new Set(F.positions.map((y) => y.string))], ie = Math.min(...F.positions.map((y) => y.fret)), N = Math.max(...F.positions.map((y) => y.fret));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Ee(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Vv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => H("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => H("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ s.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      df.map((y, q) => /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: f === q ? "journey-step current" : "journey-step",
          "aria-current": f === q ? "step" : void 0,
          disabled: q > c[a],
          onClick: () => Z(q),
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
          onClick: () => Z(5),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ s.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : df[f] }),
        /* @__PURE__ */ s.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ s.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
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
                ue();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          I !== null && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            Pe("comparison", tr[I].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        I !== null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => K("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => K("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ s.jsxs("p", { role: "status", children: [
            U === I ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            tr[I].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
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
                checked: _ === y,
                onChange: () => P(y)
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: q })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => C((y) => !y), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? Ee() : void Pe("scale", se.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? Ee() : void Pe("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && ne && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Oe(ne.midi, !1, !0),
        " · ",
        nn[ne.string],
        "-kieli, nauha ",
        ne.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ s.jsx(
        oi,
        {
          area: { strings: ae, min: ie, max: N, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ s.jsx(
        Jo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: Ee,
          stopHandleRef: O
        },
        `nooa:${f}`
      ),
      w && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: w }),
      f < 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ s.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: fe, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ s.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Z(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => H("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ s.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Gv({ onBack: r }) {
  const [a, o] = M.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ s.jsx(Bv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ s.jsx(Hv, { onBack: () => o(null) }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
function Wv({ onBack: r }) {
  const [a, o] = M.useState(0), [c, d] = M.useState([]), [f, p] = M.useState(!1), [m, x] = M.useState(""), [b, v] = M.useState(0), g = a >= Qr.length, C = Qr[Math.min(a, Qr.length - 1)], _ = or(ka.strings, ka.min, ka.max).filter((z) => Qe(z.midi) === C), P = _.filter((z) => !c.includes(Ze(z))), w = P.length === 0 && !g, j = !w && f ? P[0] : void 0, I = [
    ..._.filter((z) => c.includes(Ze(z))).map((z) => ({ ...z, kind: "answer", label: Oe(z.midi) })),
    ...j ? [{ ...j, kind: "anchor", label: "?" }] : []
  ];
  function E(z) {
    if (g || w) return;
    const D = Ze(z);
    if (Qe(z.midi) !== C) {
      v((se) => se + 1), x(`Valitsit sävelen ${Oe(z.midi)}. Etsi ${Oe(C)}.`);
      return;
    }
    if (c.includes(D)) {
      x("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, D];
    d(O), p(!1);
    const F = _.length - O.length;
    x(F ? `Oikein! ${Oe(C)} löytyi ${nn[z.string]}-kieleltä (${Ci(z.fret)}). Vielä ${F}.` : `Löysit kaikki ${_.length} ${Oe(C)}-säveltä tällä alueella.`);
  }
  function U() {
    w && (o((z) => z + 1), d([]), p(!1), x(""));
  }
  function K() {
    o(0), d([]), p(!1), x(""), v(0);
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
        b ? `Vääriä valintoja yhteensä ${b}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: K, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          "Etsi kaikki ",
          Oe(C),
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
        Oe(C),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        _.length
      ] }),
      /* @__PURE__ */ s.jsx(
        oi,
        {
          area: ka,
          marks: I,
          onAnswer: E,
          disabled: w,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: w ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        !w && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((z) => !z),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: U, children: a === Qr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const Qv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Co = ["C", "G", "D", "Em"], hf = ["C", "G", "D", "Em", "Am", "E", "A"], Yv = { min: 0, max: 3, fixed: "" };
function mf(r) {
  const a = [...r];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Jv({ onBack: r }) {
  const [a, o] = M.useState(4), [c, d] = M.useState(() => mf(Co)), [f, p] = M.useState(0), [m, x] = M.useState(null), [b, v] = M.useState([]), [g, C] = M.useState(0), _ = f >= c.length, P = Qv[c[Math.min(f, c.length - 1)]], w = a === 4 ? Co : hf, j = P.frets.flatMap((O, F) => O === null ? [] : [F]), I = P.frets.flatMap((O, F) => O === null ? [F] : []), E = { ...Yv, strings: j }, U = P.frets.flatMap((O, F) => O === null ? [] : [{
    ...ze(F, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function K(O = a) {
    o(O), d(mf(O === 4 ? Co : hf)), p(0), x(null), v([]), C(0);
  }
  function z(O) {
    m || _ || b.includes(O) || (O === P.name ? x(O) : (v((F) => [...F, O]), C((F) => F + 1)));
  }
  function D() {
    m && (p((O) => O + 1), x(null), v([]));
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
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: _ ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => K(), children: "Harjoittele uudelleen" }) })
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
          area: E,
          marks: U,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ s.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((O) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : b.includes(O) ? "wrong" : "",
          disabled: !!m || b.includes(O),
          "aria-pressed": m === O,
          onClick: () => z(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: m ? "feedback good" : b.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${P.name}-sointu.` : b.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: D, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const je = (r, a) => ({ first: r, ...a ? { second: a } : {} }), rr = () => [
  je("Gm", "F"),
  je("Gm"),
  je("B♭", "F"),
  je("Gm"),
  je("Gm", "F"),
  je("Gm"),
  je("E♭", "F"),
  je("Gm")
], sr = () => [
  je("B♭", "F"),
  je("Gm", "Dm"),
  je("E♭", "F"),
  je("Gm", "Dm")
], ar = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], sh = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Xv = [
  { id: "intro", title: "Intro", start: 0, bars: [je("Gm", "F"), je("Gm"), je("B♭", "F"), je("Gm")] },
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
    bars: [...sr(), je("E♭"), { ...je("E♭"), passingBass: "F" }],
    lyrics: ar,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [je("Gm", "F"), je("Gm")] },
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
    bars: [...sr(), je("E♭"), je("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [je("Gm"), je("Dm"), je("F"), je("C"), je("Gm"), je("Dm"), je("E♭"), je("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: rr(),
    lyrics: sh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...sr(), je("E♭", "F"), je("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      je("E♭", "F"),
      { ...je("Gm"), possibleChord: "Dm" },
      je("E♭", "F"),
      je("Gm", "F"),
      { ...je("Gm"), possibleChord: "Dm" },
      je("Gm", "F"),
      je("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Zv = [
  { id: "intro", title: "Intro", start: 0, bars: [je("Gm", "F"), je("Gm"), je("B♭", "F"), je("Gm")] },
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
    bars: [...sr(), je("E♭"), je("E♭")],
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
    bars: [...sr(), je("E♭"), je("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [je("Gm"), je("Dm"), je("F"), je("C"), je("Gm"), je("Dm"), je("E♭"), je("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: rr(),
    lyrics: sh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...sr(), je("B♭", "F"), je("Gm"), je("E♭", "F"), je("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [je("E♭", "F"), je("Gm", "F"), je("E♭", "F"), je("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ur = {
  acoustic: Xv,
  normal: Zv
}, qv = "normal", Bo = "yksi-sointu-kaksi-askelta", Xo = {
  acoustic: Bo + "-akustinen",
  normal: Bo + "-normaali"
}, ah = (r) => r === Bo || Object.values(Xo).includes(r ?? "");
function ek(r) {
  const a = Object.entries(Xo).find(([, o]) => o === r);
  return a ? a[0] : null;
}
const tk = (r) => Xo[r], pf = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Zo(r, a = "acoustic") {
  const o = ur[a], c = o[r], d = o[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function lh(r, a = "acoustic") {
  const o = ur[a], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let g = 1; g < o.length && !(c < o[g].start); g++)
    d = g;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), x = Zo(d, a) / 4;
  let b = 1;
  for (; b < 4 && c >= m + b * x; ) b++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: b,
    chord: v.second && b >= 3 ? v.second : v.first
  };
}
function ns(r, a, o = "acoustic") {
  return ur[o][r].start + Zo(r, o) * a;
}
function nk(r) {
  return ur[r].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, r), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Zo(o, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function ik(r, a = "acoustic", o = !1) {
  const c = ur[a], d = lh(r, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = nk(a), x = m.findIndex((_) => _.sectionIndex === d.sectionIndex && _.barIndex === d.barIndex && _.part === p), v = [
    ...m.slice(x + 1).map((_) => ({ ..._, wrapped: !1 })),
    ...o ? m.slice(0, x + 1).map((_) => ({ ..._, wrapped: !0 })) : []
  ].find((_) => _.chord !== d.chord) ?? null;
  let g = null;
  const C = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!C || o)) {
    const _ = C ? 0 : d.sectionIndex + 1, P = c[_], w = P.bars[0].first;
    g = {
      section: P,
      sectionIndex: _,
      firstChord: w,
      wrapped: C,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function rk(r) {
  const a = r.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, x) => m + o(x), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const x = Math.abs(c - 2 * p);
    (x < f || x === f && p >= c - p) && (d = m, f = x), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Vo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], oh = "musiikin-kartta:kappale-sointuvihjeet:v1", wa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, vf = {
  showChords: !0,
  level: 0,
  fadeOrder: wa
};
function ya(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function kf(r) {
  if (!r) return { ...vf, fadeOrder: { ...wa } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...wa }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Vo)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...vf, fadeOrder: { ...wa } };
  }
}
function sk() {
  try {
    return kf(localStorage.getItem(oh));
  } catch {
    return kf(null);
  }
}
const ak = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function lk(r) {
  const a = ak.exec(r.trim());
  if (!a) return r;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const ok = (r, a) => a === "power" ? lk(r) : r, uk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], ck = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function dk({ version: r, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = M.useState(sk), [p, m] = M.useState(null), [x, b] = M.useState(!1), [v, g] = M.useState("full"), C = (H) => ok(H, v), _ = ur[r], P = lh(a, r), { section: w, sectionIndex: j, barIndex: I, beat: E, chord: U } = P, K = E >= 3 && w.bars[I].second ? "second" : "first", z = (H, ue, le) => `${r}:${H}:${ue}:${le}`, D = (H, ue) => z(w.id, H, ue), O = D(I, K), F = ya(U, d), se = F && p === O, ne = (H, ue, le) => !ya(H, d) || p === D(ue, le), Ee = d.showChords && d.level === 0, Pe = Vo.filter((H) => ya(H, d)).length, { nextSection: Z } = ik(a, r, o), fe = !!Z && ya(Z.firstChord, d);
  return M.useEffect(() => {
    m(null);
  }, [O]), M.useEffect(() => {
    try {
      localStorage.setItem(oh, JSON.stringify(d));
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
            onChange: (H) => {
              f((ue) => ({ ...ue, showChords: H.target.checked })), m(null);
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
            checked: x,
            onChange: (H) => b(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ue]) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: v === H,
              onChange: () => g(H)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: ue })
        ] }, H))
      ] }),
      /* @__PURE__ */ s.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (H) => {
              const ue = Number(H.target.value);
              f((le) => ({ ...le, level: ue })), m(null);
            },
            children: uk.map((H) => /* @__PURE__ */ s.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Pe === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Pe}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: Vo.map((H) => /* @__PURE__ */ s.jsxs("label", { children: [
        H,
        /* @__PURE__ */ s.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (ue) => {
              const le = Number(ue.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [H]: le } })), m(null);
            },
            children: ck.map((ue) => /* @__PURE__ */ s.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ s.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (H) => {
              const ue = _.find((le) => le.id === H.target.value);
              ue && c(ue.start);
            },
            children: _.map((H) => /* @__PURE__ */ s.jsxs("option", { value: H.id, children: [
              pf(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          F && !se ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: F && !se ? "?" : C(U) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            w.title,
            ", tahti ",
            I + 1,
            ", isku ",
            E,
            "/4"
          ] }),
          F && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(se ? null : O),
              children: se ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Z && /* @__PURE__ */ s.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ s.jsx("strong", { children: fe ? "?" : C(Z.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, ue) => {
      const le = ue === I, W = le && (E < 3 || !H.second), ae = le && E >= 3 && !!H.second, ie = ne(H.first, ue, "first"), N = H.second ? ne(H.second, ue, "second") : !1, y = (ie ? C(H.first) : "sointu piilossa") + (H.second ? " " + (N ? C(H.second) : "sointu piilossa") : "") + (Ee && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (Ee && H.possibleChord ? " (" + C(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (le ? " active" : ""),
          "aria-pressed": le,
          "aria-label": "Tahti " + (ue + 1) + ": " + y + ". Siirry kohtaan " + pf(ns(j, ue, r)),
          onClick: () => c(ns(j, ue, r)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: W && ie ? "now" : "", children: ie ? C(H.first) : "?" }),
              H.second && /* @__PURE__ */ s.jsx("strong", { className: ae && N ? "now" : "", children: N ? C(H.second) : "?" })
            ] }),
            Ee && H.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            Ee && H.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              C(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    x ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: rk(_).map((H, ue) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: H.map((le) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: le.title }),
        le.lyrics?.map((W, ae) => /* @__PURE__ */ s.jsx("p", { children: W }, ae))
      ] }, le.id)) }, ue)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, ue) => /* @__PURE__ */ s.jsx("p", { children: H }, ue))
    ] }),
    Ee && w.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const Ma = 7, fk = { name: "bluesasteikko", base: Ve.SCALES.mp.base, add: [[6, "♭5"]] }, To = [
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
    scale: fk,
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
function hk(r) {
  return Ve.scaleNotes(r).map(([a, o]) => Ve.noteName(Ma, a, o));
}
const uh = (r) => r === "pentatonic" ? 5 : 7;
function mk(r, a, o) {
  const c = a.filter((m) => m >= 1 && m <= uh(r.system)), d = Ve.fingeringBoxes(Ma, r.scale, r.system, c, o);
  if (r.id !== "blues") return d;
  const f = r.scale.add.map(([m]) => (Ma + m) % 12), p = (m, x) => x >= 0 && x <= o && f.includes((Ve.OPEN_PITCHES[m] + x) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((x) => {
    const b = x.strings.map((g, C) => {
      if (!g.length) return g;
      const _ = g[g.length - 1];
      return p(C, _ + 1) ? [...g.slice(0, -1), _ + 1] : g;
    }), v = b.flat();
    return { ...x, strings: b, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const yf = 17;
function pk({ open: r }) {
  const [a, o] = M.useState("mp"), [c, d] = M.useState({ pentatonic: [], "3nps": [] }), [f, p] = M.useState(!1), [m, x] = M.useState(!1), b = M.useRef(null), v = To.find((j) => j.id === a) ?? To[0], g = c[v.system], C = mk(v, g, yf), _ = C.some((j) => j.positions.length > 0), P = Ve.renderBoard(Ma, v.scale, yf, {
    automatic: !0,
    boxes: C,
    onlyBoxNotes: _ && f,
    label: v.title + (g.length ? ", " + g.map((j) => "boksi " + j).join(", ") : "")
  });
  M.useEffect(() => {
    const j = b.current;
    !j || !r || C.length === 1 && Ve.revealPositions(j, ".box-highlight");
  }, [P, r]);
  function w(j, I) {
    d((E) => ({ ...E, [v.system]: I ? [...E[v.system], j].sort((U, K) => U - K) : E[v.system].filter((U) => U !== j) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (j) => o(j.target.value), children: To.map((j) => /* @__PURE__ */ s.jsx("option", { value: j.id, children: j.title }, j.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: v.title }),
      /* @__PURE__ */ s.jsx("span", { children: hk(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: b,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: P }
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
      /* @__PURE__ */ s.jsx("summary", { onClick: (j) => {
        j.preventDefault(), x((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: uh(v.system) }, (j, I) => I + 1).map((j) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": j, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            value: j,
            checked: g.includes(j),
            onChange: (I) => w(j, I.target.checked)
          }
        ),
        " Boksi ",
        j
      ] }, v.system + j)) }),
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: _ && f,
            disabled: !_,
            onChange: (j) => p(j.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: _ ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let ch = null;
function vk() {
  return ek(new URLSearchParams(location.search).get("kappale")) ?? ch ?? qv;
}
function kk(r) {
  ch = r;
  const a = new URL(location.href);
  ah(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", tk(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const yk = {
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
}, gf = 1e-3, Mo = (() => {
  const r = typeof location > "u" ? null : new URLSearchParams(location.search).get("muistilahde");
  return r === "heti" || r === "tausta" ? r : "pois";
})();
function jf(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function xf(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function gk({ onBack: r }) {
  const a = M.useRef(null), o = M.useRef(null), c = M.useRef(null), d = M.useRef(0), f = M.useRef(new Qf()), p = M.useRef(null), m = M.useRef(/* @__PURE__ */ new WeakMap()), x = M.useRef(/* @__PURE__ */ new WeakSet()), b = M.useRef(null), v = M.useRef(0), g = M.useRef(0), C = M.useRef(null), _ = M.useRef(!1), P = M.useRef({ guitar: !0, vocals: !0 }), w = M.useRef(null), [j, I] = M.useState(vk), E = yk[j], [U, K] = M.useState(!1), [z, D] = M.useState(!0), [O, F] = M.useState(!0), [se, ne] = M.useState(!1), [Ee, Pe] = M.useState(!1), [Z, fe] = M.useState(!1), [H, ue] = M.useState(Hp), le = M.useRef(H), [W] = M.useState(() => sv()), ae = M.useRef(null), [ie, N] = M.useState(""), [y, q] = M.useState(0), [ce, Ce] = M.useState(0), [G, B] = M.useState("");
  function J(V = !1, ge, te) {
    const Fe = a.current;
    if (Fe)
      for (const oe of [o.current, c.current])
        oe && (!ge || oe === ge) && f.current.align(Fe, oe, V, void 0, te);
  }
  function X() {
    const V = P.current;
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, V.guitar],
      ["vocals", c.current, V.vocals]
    ];
  }
  function he(V = le.current, ge) {
    for (const [te, Fe, oe] of X()) {
      if (!Fe) continue;
      const Se = Kd(te, V, ge?.[te] ?? oe);
      if (W === "webaudio" && ae.current?.routed(Fe))
        ae.current.setLevel(Fe, Se);
      else
        try {
          Fe.volume = Kd(te, V);
        } catch {
        }
    }
  }
  function Me(V) {
    le.current = V, ue(V), Gp(V), he(V);
  }
  function ke(V = P.current) {
    const ge = a.current, te = o.current, Fe = c.current;
    return !ge || !te || !Fe ? [] : [ge, ...V.guitar ? [te] : [], ...V.vocals ? [Fe] : []];
  }
  const ve = () => W === "webaudio", we = (V) => m.current.has(V);
  function Re() {
    if (!ve() || Mo === "pois") return null;
    if (w.current?.version === j) return w.current.done;
    Te();
    const V = new AbortController(), ge = { version: j, set: null, controller: V, done: Promise.resolve(null) };
    return ge.done = Xp([E.backing, E.guitar, E.vocals], { signal: V.signal }).then((te) => w.current !== ge ? (te.release(), null) : (ge.set = te, te)).catch(() => null), w.current = ge, ge.done;
  }
  function Te() {
    const V = w.current;
    w.current = null, V && (V.controller.abort(), V.set?.release());
  }
  function Be(V) {
    const ge = w.current?.version === j ? w.current.set : null, te = [a.current, o.current, c.current].indexOf(V);
    return ge && te >= 0 ? ge.urls[te] : void 0;
  }
  function tt(V, ge) {
    const te = ++v.current;
    g.current++;
    const Fe = Jp(ge, V, {
      timeoutMs: Hd,
      cancelled: () => te !== v.current,
      stale: (oe) => m.current.has(oe),
      playedAt: (oe) => m.current.get(oe),
      onLoad: (oe) => {
        m.current.delete(oe);
      },
      source: (oe) => Be(oe)
    }).finally(() => {
      g.current--;
    });
    return b.current = { at: V, elements: ge, done: Fe }, Fe;
  }
  function Ue() {
    v.current++, b.current = null, C.current !== null && (clearTimeout(C.current), C.current = null);
  }
  function Ye(V = !0) {
    d.current++, Ue(), _.current = !1, a.current?.pause(), o.current?.pause(), c.current?.pause(), K(!1);
    const ge = a.current, te = ke();
    V && ve() && ge && te.some(we) && tt(p.current ?? ge.currentTime, te);
  }
  function rt(V, ge) {
    d.current++, Ue(), _.current = !0, a.current?.pause(), o.current?.pause(), c.current?.pause(), p.current = V, q(V), C.current = setTimeout(() => {
      C.current = null, Ft();
    }, ge);
  }
  function jt(V) {
    if (V !== j) {
      p.current = null, Ye(!1), Te();
      for (const ge of [a.current, o.current, c.current])
        if (ge)
          try {
            ge.currentTime = 0;
          } catch {
          }
      q(0), Ce(0), B(""), I(V), kk(V);
    }
  }
  function qe(V) {
    const ge = a.current;
    if (!ge || !Number.isFinite(V)) return;
    const te = Math.max(0, Math.min(V, Number.isFinite(ge.duration) ? ge.duration : V));
    if (ve() && (U || _.current)) {
      rt(te, Wd);
      return;
    }
    if (p.current = te, q(te), ve() && (ke().some(we) || b.current)) {
      Ue(), C.current = setTimeout(() => {
        C.current = null, tt(te, ke());
      }, Wd);
      return;
    }
    jf(ge, te);
  }
  function $e(V) {
    if (g.current > 0) return;
    const ge = p.current;
    if (ge === null || V !== a.current || V.seeking) return;
    const te = Number.isFinite(V.duration) ? Math.min(ge, V.duration) : ge;
    if (te !== ge && (p.current = te, q(te)), Math.abs(V.currentTime - te) < gf) return;
    const Fe = V.seekable;
    for (let oe = 0; oe < Fe.length; oe++)
      if (Fe.start(oe) <= te && te <= Fe.end(oe)) {
        jf(V, te);
        return;
      }
  }
  function nt(V) {
    if (V !== a.current || g.current > 0) return;
    const ge = p.current;
    if (ge === null)
      q(V.currentTime);
    else if (V.readyState >= 1 && !V.seeking && Math.abs(V.currentTime - ge) < gf) {
      p.current = null, J(!0);
      return;
    }
    V.paused || J();
  }
  async function vt() {
    if (!(!a.current || !o.current || !c.current)) {
      if (U || _.current) {
        Ye();
        return;
      }
      await Ft();
    }
  }
  async function Ft() {
    const V = a.current, ge = o.current, te = c.current;
    if (!V || !ge || !te) return;
    C.current !== null && (clearTimeout(C.current), C.current = null);
    const Fe = P.current;
    B("");
    let oe = p.current ?? b.current?.at ?? V.currentTime;
    Number.isFinite(V.duration) && oe >= V.duration - 0.05 && (oe = 0, p.current = 0, q(0));
    const Se = ke(Fe), Le = Re(), He = ve() && (Se.some((Ke) => x.current.has(Ke)) || Mo === "heti" && Le !== null);
    if (He || $e(V), W === "webaudio") {
      const Ke = ae.current ??= new ov(), mt = Ke.unlock() && [V, ge, te].map((kt) => Ke.route(kt)).every(Boolean);
      N(mt ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + Ke.lastError);
    }
    he(), ge.muted = !Fe.guitar, te.muted = !Fe.vocals, He || J(!0, void 0, Qp);
    const Xe = ++d.current;
    if (Fe.guitar || ge.pause(), Fe.vocals || te.pause(), He) {
      if (Gd(Se.filter((kt) => !x.current.has(kt))), Mo === "heti" && Le && (await Le, Xe !== d.current))
        return;
      const Ke = b.current, mt = await (Ke && Ke.at === oe && Se.every((kt) => Ke.elements.includes(kt)) ? Ke.done : tt(oe, Se));
      if (Xe !== d.current) return;
      if (mt === "ohitettu") {
        _.current = !1, K(!1);
        return;
      }
      if (mt === "virhe") {
        Ye(!1), B("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
      b.current = null, p.current = null, q(oe);
    }
    if (!Uf(Se)) {
      Gd(Se);
      const Ke = await Hf(Se, Hd, () => Xe !== d.current);
      if (Ke === "ohitettu" || Xe !== d.current) return;
      if (Ke === "virhe") {
        Ye(!1), B("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (f.current.hold(performance.now() + Ud), await Promise.all(Se.map((Ke) => Ke.play().then(() => {
        m.current.set(Ke, performance.now()), x.current.add(Ke);
      }))), Xe !== d.current) return;
      if (_.current = !1, f.current.hold(performance.now() + Ud), J(), K(!0), W === "webaudio" && ae.current?.routed(V)) {
        const Ke = ae.current;
        setTimeout(() => {
          Xe === d.current && Ke.state !== "running" && B(`Ääni ei käynnistynyt (Web Audio: ${Ke.state}). Pysäytä ja soita uudelleen.${Ke.lastError ? " " + Ke.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Xe !== d.current) return;
      Ye(!1), B("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Tt(V, ge, te) {
    if (!V) return;
    if (V.muted = !ge, !ge) {
      V.pause();
      return;
    }
    const Fe = a.current;
    if (!(!Fe || !(U || _.current))) {
      if (ve()) {
        rt(p.current ?? Fe.currentTime, 0);
        return;
      }
      J(!0, V), V.play().catch(() => B(te + " ei käynnistynyt. Pysäytä ja soita uudelleen."));
    }
  }
  function Kt(V) {
    P.current = { ...P.current, guitar: V }, D(V), he(H, { guitar: V }), Tt(o.current, V, "Kitararaita");
  }
  function It(V) {
    P.current = { ...P.current, vocals: V }, F(V), he(H, { vocals: V }), Tt(c.current, V, "Lauluraita");
  }
  return M.useEffect(() => {
    const V = () => {
      document.hidden && Ye(!1);
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), d.current++, v.current++, C.current !== null && clearTimeout(C.current), Te(), a.current?.pause(), o.current?.pause(), c.current?.pause(), ae.current?.close();
    };
  }, []), M.useEffect(() => {
    he();
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
          onChange: (V) => jt(V.target.value),
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
          E.label,
          " · ",
          E.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          vt();
        }, children: U ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: ce > 0 ? ce : 1,
            step: 0.1,
            value: Math.min(y, ce > 0 ? ce : 1),
            disabled: ce <= 0,
            onChange: (V) => qe(Number(V.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          xf(y),
          " / ",
          xf(ce)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: z,
              onChange: (V) => Kt(V.target.checked)
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
              onChange: (V) => It(V.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: se,
              onChange: (V) => ne(V.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": W, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            H > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            H > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: H,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": H + " %",
              onChange: (V) => Me(Number(V.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            H,
            " %"
          ] })
        ] })
      ] }),
      ie && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: ie }),
      /* @__PURE__ */ s.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ s.jsxs("a", { href: E.download, download: E.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ s.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ s.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          E.label,
          ", koko kappale · ",
          E.downloadSize
        ] })
      ] }),
      G && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: G }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: E.backing,
          preload: "metadata",
          loop: se,
          onLoadedMetadata: (V) => {
            V.currentTarget === a.current && (Ce(V.currentTarget.duration), $e(V.currentTarget));
          },
          onProgress: (V) => $e(V.currentTarget),
          onCanPlay: (V) => $e(V.currentTarget),
          onTimeUpdate: (V) => nt(V.currentTarget),
          onEnded: (V) => {
            V.currentTarget !== a.current || V.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), K(!1), q(V.currentTarget.duration));
          },
          onPause: (V) => {
            V.currentTarget === a.current && !_.current && K(!1);
          },
          onError: () => B(E.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        j + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: o,
          src: E.guitar,
          preload: "metadata",
          muted: !z,
          loop: se,
          onLoadedMetadata: () => {
            a.current?.paused && g.current === 0 && J(!0);
          },
          onError: () => B(E.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        j + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: c,
          src: E.vocals,
          preload: "metadata",
          muted: !O,
          loop: se,
          onLoadedMetadata: () => {
            a.current?.paused && g.current === 0 && J(!0);
          },
          onError: () => B(E.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        j + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: Ee, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (V) => {
        V.preventDefault(), Pe((ge) => !ge);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(dk, { version: j, position: y, loop: se, onSeek: qe })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: Z, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (V) => {
        V.preventDefault(), fe((ge) => !ge);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(pk, { open: Z })
    ] })
  ] });
}
const Ko = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Na = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), dh = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Uo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function jk(r, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Uo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function fh({ frame: r, threshold: a }) {
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
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${Zd(o) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${Zd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function xk({ mic: r, frame: a, heard: o, s: c, now: d }) {
  const f = Zf(r.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Oe(p.midi, c.flats, !0)} · ${dh(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Ko[f];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ s.jsx(fh, { frame: a, threshold: c.minRms })
  ] });
}
function Sk({ mic: r, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: x, calibrating: b, calibration: v, onTest: g, onStop: C, onCalibrate: _ }) {
  const P = M.useId(), w = Zf(r.phase, a), j = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", I = r.phase === "on", E = o && d - o.at < 1500 ? o : null, U = E && (w === "pitch" || w === "untuned"), K = I && (a?.peak ?? 0) >= 0.98, z = r.phase === "error" ? [] : jk(w, f, r.info, K), D = !f.device || m.some((F) => F.deviceId === f.device), O = (F, se) => p({ ...f, [F]: se });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${P}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${P}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Ko[w],
      w === "pitch" && E ? ` ${Oe(E.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Uo(r.info)}.` : r.phase === "error" ? r.error : Ko[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Uo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(fh, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Na(Math.max(-60, lr(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Oe(E.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${Na(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          dh(E.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && c && d - c.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Oe(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    z.length > 0 && I && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: z.map((F) => /* @__PURE__ */ s.jsx("li", { children: F }, F)) }),
    r.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      j ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: C, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: f.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: x, onClick: g, children: "Testaa mikrofoni" }),
      j && I && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: b, onClick: _, children: b ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    x && r.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: x, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: `${P}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ s.jsxs("select", { id: `${P}-device`, value: f.device, onChange: (F) => O("device", F.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ s.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((F, se) => /* @__PURE__ */ s.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${se + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${P}-rms`, children: [
              "Äänikynnys · ",
              Na(lr(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${P}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (F) => O("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${P}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${P}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (F) => O("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${P}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${P}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (F) => O("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${P}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${P}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (F) => O("cents", Number(F.target.value)) })
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
const wk = (r) => r.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, Sf = (r, a) => wk(r).find(([o]) => o === a)?.[1], hh = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Nk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Ek(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Ck(r, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : hh(r) ? `Oikein! ${a.degree}. aste on ${Zr(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Oe(a.reference, r.flats, !0)} → ${a.name} on ${qr[a.interval]} ${Nk(a)}.` : r.mode === "notes" ? o === "board" && d ? `Oikein! ${Oe(d.midi, r.flats)} on ${Ef[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${Oe(c, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Tk(r, a, o, c, d) {
  if (o === "note") return `Ei ${Oe(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${Sf(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Qe(d.midi) === Qe(a.midi);
  if (r.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${nn[d.string]}-kieli. Etsi sävel ${Wo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Oe(d.midi, r.flats)}. Etsi ${a.name}.`;
  if (hh(r)) {
    const p = Qe(d.midi - r.root), m = Sf(r, p), x = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Oe(d.midi, r.flats)}, joka ei kuulu ${x}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Oe(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Mk(r, a, o) {
  const c = Oe(o, r.flats, !0);
  return Qe(o) === Qe(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function mh(r, a = !1) {
  const o = r.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => nn[p] ? `${nn[p]}-kieli, ${Ci(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Oe(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Oe(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ei[p]) return null;
      const m = Ei[p].tones.find(([x]) => x === c(3))?.[1];
      return m ? `${Cf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ve.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${li(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const x = Ve.scaleNotes(p).find(([b]) => b === c(3))?.[1];
        return x ? `${m}: ${x}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${li(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ei.maj.tones.find(([x]) => x === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function wf(r) {
  return Object.entries(r).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Ho = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", _k = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function bk(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${nr(r.mode)}${r.hints ? ` · ${_a[r.hints].title}` : ""} · ${a} · keskimäärin ${Ho(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Pk({ store: r, s: a, locked: o, changed: c }) {
  const [d, f] = M.useState(""), p = M.useRef(null), { recent: m, sessions: x, stats: b } = r.data, v = Ti(a), g = Mf(a), C = [...new Set(m.map((E) => E.mode))].map((E) => {
    const U = m.filter((K) => K.mode === E);
    return { mode: E, ...Ao(U), last: Math.max(...U.map((K) => K.at)) };
  }).sort((E, U) => U.last - E.last), _ = wf(b).filter((E) => !E.guided && E.mode === a.mode && E.input === v && E.check === g && E.stat.attempts >= 3).map((E) => ({ ...E, score: Qo(E.stat), text: mh(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, U) => E.score - U.score).slice(0, 5), P = wf(b).reduce((E, U) => E + U.stat.attempts, 0);
  function w() {
    const E = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(E), K = document.createElement("a");
    K.href = U, K.download = "musiikin-kartta-harjoittelu.json", K.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function j(E) {
    if (E)
      try {
        const U = await E.text();
        if (P && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(U), f("Varmuuskopio palautettu."), c();
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
    P === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        P,
        " vastattua kysymystä · ",
        x.length,
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
        /* @__PURE__ */ s.jsx("tbody", { children: C.map((E) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: nr(E.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: E.count }),
          /* @__PURE__ */ s.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: E.guided }),
          /* @__PURE__ */ s.jsx("td", { children: Ho(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    _.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        nr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: _.map((E) => /* @__PURE__ */ s.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(es(E.stat) * 100),
        " % heti oikein · ",
        Ho(ts(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: P ? `Harjoituksessa ${nr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        _k[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(_p, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: b, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      x.length ? /* @__PURE__ */ s.jsx("ul", { children: x.slice(-10).reverse().map((E) => /* @__PURE__ */ s.jsx("li", { children: bk(E) }, E.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          j(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o || !P, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ s.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function Ak() {
  try {
    return new $d(localStorage);
  } catch {
    return new $d();
  }
}
const Nf = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Rk = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Lk = [0, 2, 4, 5, 7, 9, 11];
function Ok(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function $k() {
  const [r] = M.useState(Ak), [a, o] = M.useState(() => vp(location.search, r.data.settings)), [, c] = M.useReducer((R) => R + 1, 0), d = M.useRef(null), f = M.useRef(new _v()), p = M.useRef(new rs()), m = M.useRef(0), x = M.useRef(), b = M.useRef(), v = M.useRef(null), g = M.useRef(0), C = M.useRef(null), _ = M.useRef(a);
  _.current = a;
  const [P, w] = M.useState({ phase: "off", purpose: "none" }), j = M.useRef(P), I = (R) => {
    j.current = R, w(R);
  }, [E, U] = M.useState(null), [K, z] = M.useState(null), [D, O] = M.useState(null), [F, se] = M.useState(0), [ne, Ee] = M.useState([]), [Pe, Z] = M.useState(!1), [fe, H] = M.useState(!1), [ue, le] = M.useState(""), [W, ae] = M.useState("info"), [ie, N] = M.useState(""), [y, q] = M.useState(0), [ce, Ce] = M.useState([]), [G, B] = M.useState([]), [J, X] = M.useState(null), [he, Me] = M.useState(!1), [ke, ve] = M.useState(""), [we, Re] = M.useState(""), [Te, Be] = M.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.has("tila") || R.has("vanha") ? "legacy" : ah(R.get("kappale")) ? "songs" : zp(R.get("polku"));
  }), [tt, Ue] = M.useState(() => {
    const R = new URLSearchParams(location.search);
    return R.get("polku") === "otelauta" && R.get("harjoitus") === "savelten-etsinta";
  });
  function Ye() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), Ue(!0);
  }
  function rt() {
    const R = new URL(location.href);
    R.searchParams.set("polku", "otelauta"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash), Ue(!1);
  }
  function jt() {
    Be(null), Ue(!1);
    const R = new URL(location.href);
    R.searchParams.delete("polku"), R.searchParams.delete("harjoitus"), history.replaceState(history.state, "", R.pathname + R.search + R.hash);
  }
  const qe = () => {
    hv().then(Ee).catch(() => {
    });
  };
  function $e() {
    clearTimeout(b.current), v.current = null, Me(!1);
  }
  function nt() {
    U(null), z(null), O(null);
  }
  function vt() {
    f.current.stop(), $e(), I({ phase: "off", purpose: "none" }), nt();
  }
  async function Ft(R) {
    if (f.current.active && j.current.phase === "on")
      return $e(), I({ ...j.current, purpose: R }), f.current.rearm(), !0;
    I({ phase: "requesting", purpose: R }), nt();
    try {
      const me = await f.current.start(_.current.device, {
        ...Nf(_.current),
        onFrame: (Ge) => V.current.frame(Ge),
        onStableNote: (Ge) => V.current.stable(Ge)
      }, () => V.current.lost());
      return me ? (I({ phase: "on", purpose: R, info: me }), qe(), !0) : !1;
    } catch (me) {
      return I({ phase: "error", purpose: "none", error: Mv(me) }), !1;
    }
  }
  function Tt(R) {
    v.current?.push(R.rms);
    const me = performance.now();
    me - g.current < 66 || (g.current = me, U(R), se(me), R.midi !== void 0 && R.frequency !== void 0 && z({ midi: R.midi, frequency: R.frequency, cents: R.cents ?? 0, clarity: R.clarity ?? 0, tuned: R.status === "pitch", at: me }));
  }
  function Kt(R) {
    j.current.purpose === "test" ? O(R) : j.current.purpose === "round" && kt(R.midi, "mic", void 0, R.heldMs);
  }
  function It() {
    const R = j.current.purpose === "round";
    $e(), nt(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const me = d.current;
    R && me && ["active", "feedback", "paused"].includes(me.phase) && (Se(), H(!1), me.pause(), N("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const V = M.useRef({ frame: Tt, stable: Kt, lost: It });
  V.current = { frame: Tt, stable: Kt, lost: It };
  function ge(R) {
    const me = Ea(R), Ge = me.device !== _.current.device;
    _.current = me, o(me), r.settings(me), N(""), f.current.active && (Ge && j.current.purpose === "test" ? (vt(), Ft("test")) : f.current.setOptions(Nf(me)));
  }
  function te(R) {
    Re(""), d.current = null, Ue(!1), Be(R);
  }
  function Fe() {
    ve(""), Ft("test");
  }
  function oe() {
    j.current.phase !== "on" || j.current.purpose !== "test" || ($e(), v.current = [], Me(!0), ve("Mitataan taustakohinaa kolme sekuntia. Älä soita."), b.current = setTimeout(() => {
      const R = v.current ?? [];
      if ($e(), R.length < 10) {
        ve("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: me, noise: Ge, loud: Xt } = bv(R);
      ge({ ..._.current, minRms: me }), ve(`Taustakohina on ${Math.round(lr(Ge))} dB ja äänikynnys nyt ${Math.round(lr(me))} dB. ${Xt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Se() {
    m.current++, clearTimeout(x.current), p.current.stop();
  }
  function Le(R, me) {
    if (!R.results.length) return;
    const Ge = Ao(R.results);
    r.session({
      id: R.id,
      mode: R.settings.mode,
      count: Ge.count,
      first: Ge.first,
      ms: Ge.ms,
      solo: Ge.solo,
      soloFirst: Ge.soloFirst,
      hints: R.settings.hints,
      at: Date.now(),
      complete: me
    });
  }
  async function He(R) {
    if (!R.question?.sound.length || R.phase !== "active") return;
    Se();
    const me = m.current;
    R.pause(), f.current.pause(), H(!0), ae("info"), le("Kuuntele…"), c();
    try {
      await p.current.play(R.question.sound);
    } catch {
      me === m.current && N("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    me !== m.current || d.current !== R || (R.resume(), f.current.resume(), H(!1), le(""), c());
  }
  async function Xe(R) {
    Ce([]), B([]), X(null), N(""), q(R.hintLevel), f.current.rearm(), ae("info"), le(""), c(), R.question?.sound.length && await He(R);
  }
  async function Ke() {
    const R = _.current, me = bo(R);
    if (me) {
      N(me);
      return;
    }
    Se();
    const Ge = m.current;
    if (N(""), ve(""), Re(""), va(R)) {
      Z(!0);
      const dt = await Ft("round");
      if (Ge !== m.current) return;
      if (Z(!1), !dt) {
        N("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else j.current.phase !== "off" && vt();
    const Xt = new Dp(R, () => r.data.stats, (dt) => r.record(dt));
    try {
      Xt.start();
    } catch (dt) {
      j.current.purpose === "round" && vt(), N(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Xt, requestAnimationFrame(() => C.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Xe(Xt);
  }
  function mt() {
    Se(), Z(!1), vt();
  }
  function kt(R, me, Ge, Xt = 0) {
    const dt = d.current, Dt = dt?.question;
    if (!dt || !Dt || dt.phase !== "active") return;
    const hr = dt.answer(R, me, Ge, Xt);
    if (hr !== "ignored") {
      if (hr === "candidate")
        X(R), ae("bad"), le(Mk(dt.settings, Dt, R));
      else if (hr === "wrong")
        Ge ? Ce((_t) => [..._t, Ge]) : B((_t) => [..._t, R]), ae("bad"), le(Tk(dt.settings, Dt, me, R, Ge));
      else if (X(null), ae("good"), le(Ck(dt.settings, Dt, me, R, Ge)), Le(dt, !1), dt.settings.advance) {
        const _t = m.current;
        x.current = setTimeout(() => {
          _t === m.current && Cn();
        }, me === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Cn() {
    const R = d.current;
    if (!(!R || R.phase !== "feedback")) {
      Se();
      try {
        R.next();
      } catch (me) {
        cn(!1), N(me instanceof Error ? me.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (R.phase === "done") {
        cn(!0);
        return;
      }
      await Xe(R);
    }
  }
  function cn(R = !1) {
    Se(), H(!1), Z(!1), (j.current.purpose === "round" || j.current.phase === "requesting") && vt();
    const me = d.current;
    me && (me.stop(), Le(me, R)), X(null), q(0), Ce([]), B([]), N(""), Re(R ? "complete" : "stopped"), ae("info"), le(""), c();
  }
  function Tn() {
    const R = d.current;
    if (!R || !["active", "feedback", "paused"].includes(R.phase)) return;
    Se(), H(!1), R.pause();
    const me = j.current.purpose === "round";
    me && vt(), ae("info"), le(`Harjoitus on tauolla.${me ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function ss() {
    const R = d.current;
    if (!R || R.phase !== "paused" || fe) return;
    Se();
    const me = m.current;
    if (N(""), va(R.settings)) {
      Z(!0);
      const Ge = await Ft("round");
      if (me !== m.current) return;
      if (Z(!1), !Ge) {
        N("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    R.resume(), ae("info"), le(""), c(), R.phase === "active" && (f.current.rearm(), R.question?.sound.length && await He(R));
  }
  function cr(R) {
    const me = d.current;
    !me || me.phase !== "active" || (me.useHint(R), q(R), c());
  }
  const ci = M.useRef({ hidden: () => {
  }, restored: () => {
  } });
  ci.current = {
    hidden: () => {
      const R = d.current;
      R && ["active", "feedback"].includes(R.phase) || fe ? Tn() : j.current.phase !== "off" && j.current.phase !== "error" && (Se(), Z(!1), vt());
    },
    restored: () => {
      Z(!1), H(!1), I({ phase: "off", purpose: "none" }), nt(), c();
    }
  }, M.useEffect(() => {
    qe();
    const R = () => qe();
    navigator.mediaDevices?.addEventListener?.("devicechange", R);
    const me = () => {
      m.current++, clearTimeout(x.current), clearTimeout(b.current), f.current.stop(), p.current.stop(), Tv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && ci.current.hidden();
    }, Xt = (dt) => {
      dt.persisted && ci.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", me), window.addEventListener("pageshow", Xt), () => {
      me(), navigator.mediaDevices?.removeEventListener?.("devicechange", R), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", me), window.removeEventListener("pageshow", Xt);
    };
  }, []);
  const _i = M.useRef(null), di = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${fe}`;
  M.useEffect(() => {
    const R = d.current, me = C.current, Ge = document.activeElement;
    !R || !me || !(Ge === document.body || me.contains(Ge)) || (R.phase === "feedback" ? _i.current?.focus({ preventScroll: !0 }) : R.phase === "active" && !fe && (Ge === document.body || Ge === _i.current) && me.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [di]);
  const De = d.current, it = !!De && ["active", "paused", "feedback"].includes(De.phase), at = it ? De.settings : a, yt = it ? De.question : void 0, Ut = !!yt && !!De?.answered, dn = it && De.phase === "paused" && !fe && !Ut, In = it && De.phase === "active" && !fe, dr = it ? null : bo(a), fr = it || Pe, as = Mi(at), Mn = Pp(at), Dn = yt && !Ut ? y : 0, bi = yt ? Ip(at, yt, Ut ? 2 : Dn) : { marks: [], text: "" }, ls = [...new Map([...bi.marks, ...Ut ? [] : ce.map((R) => ({ ...R, label: Oe(R.midi, at.flats), kind: "wrong" }))].map((R) => [Ze(R), R])).values()], os = it && va(at), us = !!yt && !dn && (yt.choices === "position" || ls.length > 0), Mt = De ? Ao(De.results) : null, cs = !De || at.hints !== "fade" ? "" : De.index <= 3 ? " · vastaus näkyy" : De.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", ds = De && !it ? De.results.filter((R) => R.errors > 0 || R.hint) : [], [Aa, ct] = Ok(at), zn = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
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
  return !it && Te === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Vp, { onSelect: te })
  ] }) : !it && Te === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Gv, { onBack: jt })
  ] }) : !it && Te === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    tt ? /* @__PURE__ */ s.jsx(Wv, { onBack: rt }) : /* @__PURE__ */ s.jsx(Kp, { onBack: jt, onNotes: Ye })
  ] }) : !it && Te === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(Jv, { onBack: jt })
  ] }) : !it && Te === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx(gk, { onBack: jt })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: Aa, children: [
      "Lue tämän harjoituksen teoria: ",
      ct,
      " →"
    ] }) }),
    Te !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        it && cn(), jt();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: Te === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: Te === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    it ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: nr(at.mode) }),
      " · ",
      zd(at)
    ] }) : Te === "legacy" ? /* @__PURE__ */ s.jsx(Bd, { s: a, change: ge, locked: fr, problem: dr }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(Bd, { s: a, change: ge, locked: fr, problem: dr })
    ] }),
    !it && (Te === "legacy" || va(a)) && /* @__PURE__ */ s.jsx(
      Sk,
      {
        mic: P,
        frame: E,
        heard: K,
        accepted: D,
        now: F,
        s: a,
        change: ge,
        devices: ne,
        locked: Pe,
        calibrating: he,
        calibration: ke,
        onTest: Fe,
        onStop: vt,
        onCalibrate: oe
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: C, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: nr(at.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: it ? `Kysymys ${De.index}${De.total ? " / " + De.total : " · vapaa harjoittelu"} · ${_a[at.hints].title}${cs}${De.phase === "paused" && !fe ? " · tauolla" : ""}` : we === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !it && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        De && De.results.length > 0 && Mt ? /* @__PURE__ */ s.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ s.jsx("h3", { children: we === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ s.jsxs("dl", { children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-solo", children: Mt.solo ? `${Mt.soloFirst} / ${Mt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-guided", children: Mt.guided })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ s.jsx("dd", { children: Rk(Mt.ms / Mt.count) })
            ] })
          ] }),
          Mt.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          ds.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(ds.map((R) => mh(R.item, a.flats)).filter(Boolean))].slice(0, 6).map((R) => /* @__PURE__ */ s.jsx("li", { children: R }, R)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: zd(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: Pe ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: mt, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!dr, onClick: () => {
          Ke();
        }, children: De?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !De && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      it && yt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: dn ? "Harjoitus on tauolla." : yt.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: dn ? "Kysymys palaa näkyviin, kun jatkat." : fe ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Ek(at, yt) }),
        De.hintLevel > 0 && !Ut && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: at.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        os && /* @__PURE__ */ s.jsx(xk, { mic: P, frame: E, heard: K, s: at, now: F }),
        yt.choices === "note" && !dn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (at.accidentals ? Array.from({ length: 12 }, (R, me) => me) : Lk).map((R) => /* @__PURE__ */ s.jsx("button", { type: "button", className: G.includes(R) ? "wrong" : Ut && R === yt.midi % 12 ? "right" : "", disabled: !In || G.includes(R), onClick: () => kt(R, "note"), children: Oe(R, at.flats) }, R)) }),
        yt.choices === "degree" && !dn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (at.mode === "scale" ? Ve.scaleNotes(Ve.SCALES[at.scale]) : Ei[at.chord].tones).map(([R, me]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: G.includes(R) ? "wrong" : Ut && R === yt.interval ? "right" : "", disabled: !In || G.includes(R), onClick: () => kt(R, "degree"), children: me }, R)) }),
        us && /* @__PURE__ */ s.jsx(
          oi,
          {
            area: Mn,
            marks: ls,
            disabled: !In || yt.choices !== "position" || at.input === "mic",
            onAnswer: (R) => kt(R.midi, "board", R),
            caption: as.fixed === "shape" ? `${at.shape}-muodon alue` : as.fixed === "box" ? `Boksin ${at.box} alue` : "Otelauta"
          }
        ),
        !Ut && !dn && Dn > 0 && bi.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: bi.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        J !== null && De.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            De.confirmWrong(), X(null), le("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ie && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: ie }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          De.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: _i, onClick: () => {
            Cn();
          }, children: De.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          De.phase === "active" && !Ut && !fe && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            Dn === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cr(Math.max(1, De.hintLevel)), children: De.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Dn === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cr(2), children: "Näytä vastaus" }),
            Dn > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => q(0), children: "Piilota vihje" })
          ] }),
          yt.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !In, onClick: () => {
            He(De);
          }, children: "Kuuntele uudelleen" }),
          De.phase === "paused" && !fe ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: Pe, onClick: () => {
            ss();
          }, children: Pe ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Tn, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => cn(), children: "Lopeta harjoitus" })
        ] }),
        De.phase === "feedback" && at.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: Mt?.count ? `Vastattu ${Mt.count} · itsenäisesti heti oikein ${Mt.soloFirst}/${Mt.solo}${Mt.guided ? ` · vihjeen kanssa ${Mt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !it && ie && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: ie })
    ] }),
    !it && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ve.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: kp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(Pk, { store: r, s: a, locked: fr, changed: () => {
        const R = Ea(r.data.settings);
        _.current = R, o(R), c();
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
op.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx($k, {}));
//# sourceMappingURL=app.js.map
