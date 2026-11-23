function ap(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var vo = { exports: {} }, Js = {}, ko = { exports: {} }, Be = {};
var Md;
function lp() {
  if (Md) return Be;
  Md = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), k = Symbol.iterator;
  function w(j) {
    return j === null || typeof j != "object" ? null : (j = k && j[k] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, S = {};
  function E(j, g, ne) {
    this.props = j, this.context = g, this.refs = S, this.updater = ne || C;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(j, g) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, g, "setState");
  }, E.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function B() {
  }
  B.prototype = E.prototype;
  function b(j, g, ne) {
    this.props = j, this.context = g, this.refs = S, this.updater = ne || C;
  }
  var U = b.prototype = new B();
  U.constructor = b, _(U, E.prototype), U.isPureReactComponent = !0;
  var z = Array.isArray, V = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(j, g, ne) {
    var ce, Ee = {}, H = null, K = null;
    if (g != null) for (ce in g.ref !== void 0 && (K = g.ref), g.key !== void 0 && (H = "" + g.key), g) V.call(g, ce) && !O.hasOwnProperty(ce) && (Ee[ce] = g[ce]);
    var ee = arguments.length - 2;
    if (ee === 1) Ee.children = ne;
    else if (1 < ee) {
      for (var J = Array(ee), pe = 0; pe < ee; pe++) J[pe] = arguments[pe + 2];
      Ee.children = J;
    }
    if (j && j.defaultProps) for (ce in ee = j.defaultProps, ee) Ee[ce] === void 0 && (Ee[ce] = ee[ce]);
    return { $$typeof: r, type: j, key: H, ref: K, props: Ee, _owner: D.current };
  }
  function re(j, g) {
    return { $$typeof: r, type: j.type, key: g, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Z(j) {
    return typeof j == "object" && j !== null && j.$$typeof === r;
  }
  function we(j) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ne) {
      return g[ne];
    });
  }
  var Ne = /\/+/g;
  function Y(j, g) {
    return typeof j == "object" && j !== null && j.key != null ? we("" + j.key) : g.toString(36);
  }
  function he(j, g, ne, ce, Ee) {
    var H = typeof j;
    (H === "undefined" || H === "boolean") && (j = null);
    var K = !1;
    if (j === null) K = !0;
    else switch (H) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case r:
          case i:
            K = !0;
        }
    }
    if (K) return K = j, Ee = Ee(K), j = ce === "" ? "." + Y(K, 0) : ce, z(Ee) ? (ne = "", j != null && (ne = j.replace(Ne, "$&/") + "/"), he(Ee, g, ne, "", function(pe) {
      return pe;
    })) : Ee != null && (Z(Ee) && (Ee = re(Ee, ne + (!Ee.key || K && K.key === Ee.key ? "" : ("" + Ee.key).replace(Ne, "$&/") + "/") + j)), g.push(Ee)), 1;
    if (K = 0, ce = ce === "" ? "." : ce + ":", z(j)) for (var ee = 0; ee < j.length; ee++) {
      H = j[ee];
      var J = ce + Y(H, ee);
      K += he(H, g, ne, J, Ee);
    }
    else if (J = w(j), typeof J == "function") for (j = J.call(j), ee = 0; !(H = j.next()).done; ) H = H.value, J = ce + Y(H, ee++), K += he(H, g, ne, J, Ee);
    else if (H === "object") throw g = String(j), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function G(j, g, ne) {
    if (j == null) return j;
    var ce = [], Ee = 0;
    return he(j, ce, "", "", function(H) {
      return g.call(ne, H, Ee++);
    }), ce;
  }
  function oe(j) {
    if (j._status === -1) {
      var g = j._result;
      g = g(), g.then(function(ne) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ne);
      }, function(ne) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ne);
      }), j._status === -1 && (j._status = 0, j._result = g);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var se = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Be.Children = { map: G, forEach: function(j, g, ne) {
    G(j, function() {
      g.apply(this, arguments);
    }, ne);
  }, count: function(j) {
    var g = 0;
    return G(j, function() {
      g++;
    }), g;
  }, toArray: function(j) {
    return G(j, function(g) {
      return g;
    }) || [];
  }, only: function(j) {
    if (!Z(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Be.Component = E, Be.Fragment = l, Be.Profiler = d, Be.PureComponent = b, Be.StrictMode = c, Be.Suspense = x, Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Be.act = te, Be.cloneElement = function(j, g, ne) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var ce = _({}, j.props), Ee = j.key, H = j.ref, K = j._owner;
    if (g != null) {
      if (g.ref !== void 0 && (H = g.ref, K = D.current), g.key !== void 0 && (Ee = "" + g.key), j.type && j.type.defaultProps) var ee = j.type.defaultProps;
      for (J in g) V.call(g, J) && !O.hasOwnProperty(J) && (ce[J] = g[J] === void 0 && ee !== void 0 ? ee[J] : g[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) ce.children = ne;
    else if (1 < J) {
      ee = Array(J);
      for (var pe = 0; pe < J; pe++) ee[pe] = arguments[pe + 2];
      ce.children = ee;
    }
    return { $$typeof: r, type: j.type, key: Ee, ref: H, props: ce, _owner: K };
  }, Be.createContext = function(j) {
    return j = { $$typeof: p, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: h, _context: j }, j.Consumer = j;
  }, Be.createElement = I, Be.createFactory = function(j) {
    var g = I.bind(null, j);
    return g.type = j, g;
  }, Be.createRef = function() {
    return { current: null };
  }, Be.forwardRef = function(j) {
    return { $$typeof: m, render: j };
  }, Be.isValidElement = Z, Be.lazy = function(j) {
    return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: oe };
  }, Be.memo = function(j, g) {
    return { $$typeof: M, type: j, compare: g === void 0 ? null : g };
  }, Be.startTransition = function(j) {
    var g = W.transition;
    W.transition = {};
    try {
      j();
    } finally {
      W.transition = g;
    }
  }, Be.unstable_act = te, Be.useCallback = function(j, g) {
    return se.current.useCallback(j, g);
  }, Be.useContext = function(j) {
    return se.current.useContext(j);
  }, Be.useDebugValue = function() {
  }, Be.useDeferredValue = function(j) {
    return se.current.useDeferredValue(j);
  }, Be.useEffect = function(j, g) {
    return se.current.useEffect(j, g);
  }, Be.useId = function() {
    return se.current.useId();
  }, Be.useImperativeHandle = function(j, g, ne) {
    return se.current.useImperativeHandle(j, g, ne);
  }, Be.useInsertionEffect = function(j, g) {
    return se.current.useInsertionEffect(j, g);
  }, Be.useLayoutEffect = function(j, g) {
    return se.current.useLayoutEffect(j, g);
  }, Be.useMemo = function(j, g) {
    return se.current.useMemo(j, g);
  }, Be.useReducer = function(j, g, ne) {
    return se.current.useReducer(j, g, ne);
  }, Be.useRef = function(j) {
    return se.current.useRef(j);
  }, Be.useState = function(j) {
    return se.current.useState(j);
  }, Be.useSyncExternalStore = function(j, g, ne) {
    return se.current.useSyncExternalStore(j, g, ne);
  }, Be.useTransition = function() {
    return se.current.useTransition();
  }, Be.version = "18.3.1", Be;
}
var _d;
function Xo() {
  return _d || (_d = 1, ko.exports = lp()), ko.exports;
}
var bd;
function op() {
  if (bd) return Js;
  bd = 1;
  var r = Xo(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, x, M) {
    var v, k = {}, w = null, C = null;
    M !== void 0 && (w = "" + M), x.key !== void 0 && (w = "" + x.key), x.ref !== void 0 && (C = x.ref);
    for (v in x) c.call(x, v) && !h.hasOwnProperty(v) && (k[v] = x[v]);
    if (m && m.defaultProps) for (v in x = m.defaultProps, x) k[v] === void 0 && (k[v] = x[v]);
    return { $$typeof: i, type: m, key: w, ref: C, props: k, _owner: d.current };
  }
  return Js.Fragment = l, Js.jsx = p, Js.jsxs = p, Js;
}
var Ad;
function up() {
  return Ad || (Ad = 1, vo.exports = op()), vo.exports;
}
var a = up(), A = Xo(), ya = {}, yo = { exports: {} }, Ht = {}, go = { exports: {} }, xo = {};
var Pd;
function cp() {
  return Pd || (Pd = 1, (function(r) {
    function i(W, ae) {
      var te = W.length;
      W.push(ae);
      e: for (; 0 < te; ) {
        var j = te - 1 >>> 1, g = W[j];
        if (0 < d(g, ae)) W[j] = ae, W[te] = g, te = j;
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
        e: for (var j = 0, g = W.length, ne = g >>> 1; j < ne; ) {
          var ce = 2 * (j + 1) - 1, Ee = W[ce], H = ce + 1, K = W[H];
          if (0 > d(Ee, te)) H < g && 0 > d(K, Ee) ? (W[j] = K, W[H] = te, j = H) : (W[j] = Ee, W[ce] = te, j = ce);
          else if (H < g && 0 > d(K, te)) W[j] = K, W[H] = te, j = H;
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
    var x = [], M = [], v = 1, k = null, w = 3, C = !1, _ = !1, S = !1, E = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(W) {
      for (var ae = l(M); ae !== null; ) {
        if (ae.callback === null) c(M);
        else if (ae.startTime <= W) c(M), ae.sortIndex = ae.expirationTime, i(x, ae);
        else break;
        ae = l(M);
      }
    }
    function z(W) {
      if (S = !1, U(W), !_) if (l(x) !== null) _ = !0, oe(V);
      else {
        var ae = l(M);
        ae !== null && se(z, ae.startTime - W);
      }
    }
    function V(W, ae) {
      _ = !1, S && (S = !1, B(I), I = -1), C = !0;
      var te = w;
      try {
        for (U(ae), k = l(x); k !== null && (!(k.expirationTime > ae) || W && !we()); ) {
          var j = k.callback;
          if (typeof j == "function") {
            k.callback = null, w = k.priorityLevel;
            var g = j(k.expirationTime <= ae);
            ae = r.unstable_now(), typeof g == "function" ? k.callback = g : k === l(x) && c(x), U(ae);
          } else c(x);
          k = l(x);
        }
        if (k !== null) var ne = !0;
        else {
          var ce = l(M);
          ce !== null && se(z, ce.startTime - ae), ne = !1;
        }
        return ne;
      } finally {
        k = null, w = te, C = !1;
      }
    }
    var D = !1, O = null, I = -1, re = 5, Z = -1;
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
    function oe(W) {
      O = W, D || (D = !0, Y());
    }
    function se(W, ae) {
      I = E(function() {
        W(r.unstable_now());
      }, ae);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, r.unstable_continueExecution = function() {
      _ || C || (_ = !0, oe(V));
    }, r.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < W ? Math.floor(1e3 / W) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, r.unstable_getFirstCallbackNode = function() {
      return l(x);
    }, r.unstable_next = function(W) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = w;
      }
      var te = w;
      w = ae;
      try {
        return W();
      } finally {
        w = te;
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
      var te = w;
      w = W;
      try {
        return ae();
      } finally {
        w = te;
      }
    }, r.unstable_scheduleCallback = function(W, ae, te) {
      var j = r.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? j + te : j) : te = j, W) {
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
      return g = te + g, W = { id: v++, callback: ae, priorityLevel: W, startTime: te, expirationTime: g, sortIndex: -1 }, te > j ? (W.sortIndex = te, i(M, W), l(x) === null && W === l(M) && (S ? (B(I), I = -1) : S = !0, se(z, te - j))) : (W.sortIndex = g, i(x, W), _ || C || (_ = !0, oe(V))), W;
    }, r.unstable_shouldYield = we, r.unstable_wrapCallback = function(W) {
      var ae = w;
      return function() {
        var te = w;
        w = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          w = te;
        }
      };
    };
  })(xo)), xo;
}
var Ld;
function dp() {
  return Ld || (Ld = 1, go.exports = cp()), go.exports;
}
var Rd;
function hp() {
  if (Rd) return Ht;
  Rd = 1;
  var r = Xo(), i = dp();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function w(e) {
    return x.call(k, e) ? !0 : x.call(v, e) ? !1 : M.test(e) ? k[e] = !0 : (v[e] = !0, !1);
  }
  function C(e, t, n, s) {
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
    if (t === null || typeof t > "u" || C(e, t, n, s)) return !0;
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
  function S(e, t, n, s, o, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    E[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(B, b);
    E[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(B, b);
    E[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, s) {
    var o = E.hasOwnProperty(t) ? E[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, n, o, s) && (n = null), s || o === null ? w(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, s = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.provider"), we = /* @__PURE__ */ Symbol.for("react.context"), Ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Object.assign, j;
  function g(e) {
    if (j === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      j = t && t[1] || "";
    }
    return `
` + j + e;
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
        } catch (F) {
          var s = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          s = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          s = F;
        }
        e();
      }
    } catch (F) {
      if (F && s && typeof F.stack == "string") {
        for (var o = F.stack.split(`
`), u = s.stack.split(`
`), f = o.length - 1, y = u.length - 1; 1 <= f && 0 <= y && o[f] !== u[y]; ) y--;
        for (; 1 <= f && 0 <= y; f--, y--) if (o[f] !== u[y]) {
          if (f !== 1 || y !== 1)
            do
              if (f--, y--, 0 > y || o[f] !== u[y]) {
                var N = `
` + o[f].replace(" at new ", " at ");
                return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
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
      case I:
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
      case oe:
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
        return t === I ? "StrictMode" : "Mode";
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
  function Fe(e, t) {
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
    t.hasOwnProperty("value") ? ue(e, t.type, n) : t.hasOwnProperty("defaultValue") && ue(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function le(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ue(e, t, n) {
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
  function ze(e, t) {
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
  var It, en = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (It = It || document.createElement("div"), It.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = It.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  function De(e, t) {
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
    if (e = Os(e)) {
      if (typeof un != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Lr(t), un(e.stateNode, e.type, t));
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
  function or(e, t) {
    return e(t);
  }
  function fs() {
  }
  var hi = !1;
  function Pi(e, t, n) {
    if (hi) return e(t, n);
    hi = !0;
    try {
      return or(e, t, n);
    } finally {
      hi = !1, (St !== null || Lt !== null) && (fs(), Mn());
    }
  }
  function fi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = Lr(n);
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
  function nt(e, t, n, s, o, u, f, y, N) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (X) {
      this.onError(X);
    }
  }
  var ht = !1, Dt = null, dn = !1, Dn = null, ms = { onError: function(e) {
    ht = !0, Dt = e;
  } };
  function ps(e, t, n, s, o, u, f, y, N) {
    ht = !1, Dt = null, nt.apply(ms, arguments);
  }
  function ur(e, t, n, s, o, u, f, y, N) {
    if (ps.apply(this, arguments), ht) {
      if (ht) {
        var F = Dt;
        ht = !1, Dt = null;
      } else throw Error(l(198));
      dn || (dn = !0, Dn = F);
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
  function zn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Li(e) {
    if (_n(e) !== e) throw Error(l(188));
  }
  function cr(e) {
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
          if (u === n) return Li(o), e;
          if (u === s) return Li(o), t;
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
  function dr(e) {
    return e = cr(e), e !== null ? hr(e) : null;
  }
  function hr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = hr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wt = i.unstable_scheduleCallback, fr = i.unstable_cancelCallback, mr = i.unstable_shouldYield, Oa = i.unstable_requestPaint, lt = i.unstable_now, Bn = i.unstable_getCurrentPriorityLevel, xn = i.unstable_ImmediatePriority, L = i.unstable_UserBlockingPriority, fe = i.unstable_NormalPriority, Ge = i.unstable_LowPriority, Wt = i.unstable_IdlePriority, ot = null, Rt = null;
  function vs(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
      Rt.onCommitFiberRoot(ot, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Et = Math.clz32 ? Math.clz32 : Ef, Sf = Math.log, wf = Math.LN2;
  function Ef(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / wf | 0) | 0;
  }
  var pr = 64, vr = 4194304;
  function ks(e) {
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
  function kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, o = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var y = f & ~o;
      y !== 0 ? s = ks(y) : (u &= f, u !== 0 && (s = ks(u)));
    } else f = n & ~o, f !== 0 ? s = ks(f) : u !== 0 && (s = ks(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & o) === 0 && (o = s & -s, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Et(t), o = 1 << n, s |= e[n], t &= ~o;
    return s;
  }
  function Nf(e, t) {
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
  function Cf(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var f = 31 - Et(u), y = 1 << f, N = o[f];
      N === -1 ? ((y & n) === 0 || (y & s) !== 0) && (o[f] = Nf(y, t)) : N <= t && (e.expiredLanes |= y), u &= ~y;
    }
  }
  function $a(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var e = pr;
    return pr <<= 1, (pr & 4194240) === 0 && (pr = 64), e;
  }
  function Fa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ys(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
  }
  function Tf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Et(n), u = 1 << o;
      t[o] = 0, s[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function Ia(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Et(n), o = 1 << s;
      o & t | e[s] & t && (e[s] |= t), n &= ~o;
    }
  }
  var qe = 0;
  function au(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var lu, Da, ou, uu, cu, za = !1, yr = [], Vn = null, Kn = null, Un = null, gs = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), Hn = [], Mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function du(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        gs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xs.delete(t.pointerId);
    }
  }
  function js(e, t, n, s, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [o] }, t !== null && (t = Os(t), t !== null && Da(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function _f(e, t, n, s, o) {
    switch (t) {
      case "focusin":
        return Vn = js(Vn, e, t, n, s, o), !0;
      case "dragenter":
        return Kn = js(Kn, e, t, n, s, o), !0;
      case "mouseover":
        return Un = js(Un, e, t, n, s, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return gs.set(u, js(gs.get(u) || null, e, t, n, s, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, xs.set(u, js(xs.get(u) || null, e, t, n, s, o)), !0;
    }
    return !1;
  }
  function hu(e) {
    var t = mi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = zn(n), t !== null) {
            e.blockedOn = t, cu(e.priority, function() {
              ou(n);
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
  function gr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ze = s, n.target.dispatchEvent(s), Ze = null;
      } else return t = Os(n), t !== null && Da(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fu(e, t, n) {
    gr(e) && n.delete(t);
  }
  function bf() {
    za = !1, Vn !== null && gr(Vn) && (Vn = null), Kn !== null && gr(Kn) && (Kn = null), Un !== null && gr(Un) && (Un = null), gs.forEach(fu), xs.forEach(fu);
  }
  function Ss(e, t) {
    e.blockedOn === t && (e.blockedOn = null, za || (za = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, bf)));
  }
  function ws(e) {
    function t(o) {
      return Ss(o, e);
    }
    if (0 < yr.length) {
      Ss(yr[0], e);
      for (var n = 1; n < yr.length; n++) {
        var s = yr[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (Vn !== null && Ss(Vn, e), Kn !== null && Ss(Kn, e), Un !== null && Ss(Un, e), gs.forEach(t), xs.forEach(t), n = 0; n < Hn.length; n++) s = Hn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) hu(n), n.blockedOn === null && Hn.shift();
  }
  var Ri = z.ReactCurrentBatchConfig, xr = !0;
  function Af(e, t, n, s) {
    var o = qe, u = Ri.transition;
    Ri.transition = null;
    try {
      qe = 1, Ba(e, t, n, s);
    } finally {
      qe = o, Ri.transition = u;
    }
  }
  function Pf(e, t, n, s) {
    var o = qe, u = Ri.transition;
    Ri.transition = null;
    try {
      qe = 4, Ba(e, t, n, s);
    } finally {
      qe = o, Ri.transition = u;
    }
  }
  function Ba(e, t, n, s) {
    if (xr) {
      var o = Va(e, t, n, s);
      if (o === null) rl(e, t, s, jr, n), du(e, s);
      else if (_f(o, e, t, n, s)) s.stopPropagation();
      else if (du(e, s), t & 4 && -1 < Mf.indexOf(e)) {
        for (; o !== null; ) {
          var u = Os(o);
          if (u !== null && lu(u), u = Va(e, t, n, s), u === null && rl(e, t, s, jr, n), u === o) break;
          o = u;
        }
        o !== null && s.stopPropagation();
      } else rl(e, t, s, null, n);
    }
  }
  var jr = null;
  function Va(e, t, n, s) {
    if (jr = null, e = at(s), e = mi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = zn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return jr = e, null;
  }
  function mu(e) {
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
        switch (Bn()) {
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
  var Gn = null, Ka = null, Sr = null;
  function pu() {
    if (Sr) return Sr;
    var e, t = Ka, n = t.length, s, o = "value" in Gn ? Gn.value : Gn.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var f = n - e;
    for (s = 1; s <= f && t[n - s] === o[u - s]; s++) ;
    return Sr = o.slice(e, 1 < s ? 1 - s : void 0);
  }
  function wr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Er() {
    return !0;
  }
  function vu() {
    return !1;
  }
  function Qt(e) {
    function t(n, s, o, u, f) {
      this._reactName = n, this._targetInst = o, this.type = s, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Er : vu, this.isPropagationStopped = vu, this;
    }
    return te(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
    }, persist: function() {
    }, isPersistent: Er }), t;
  }
  var Oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ua = Qt(Oi), Es = te({}, Oi, { view: 0, detail: 0 }), Lf = Qt(Es), Ha, Ga, Ns, Nr = te({}, Es, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ns && (Ns && e.type === "mousemove" ? (Ha = e.screenX - Ns.screenX, Ga = e.screenY - Ns.screenY) : Ga = Ha = 0, Ns = e), Ha);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ga;
  } }), ku = Qt(Nr), Rf = te({}, Nr, { dataTransfer: 0 }), Of = Qt(Rf), $f = te({}, Es, { relatedTarget: 0 }), Wa = Qt($f), Ff = te({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = Qt(Ff), Df = te({}, Oi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zf = Qt(Df), Bf = te({}, Oi, { data: 0 }), yu = Qt(Bf), Vf = {
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
  }, Kf = {
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
  }, Uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
  }
  function Qa() {
    return Hf;
  }
  var Gf = te({}, Es, { key: function(e) {
    if (e.key) {
      var t = Vf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = wr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qa, charCode: function(e) {
    return e.type === "keypress" ? wr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Wf = Qt(Gf), Qf = te({}, Nr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gu = Qt(Qf), Yf = te({}, Es, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qa }), Jf = Qt(Yf), Xf = te({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zf = Qt(Xf), qf = te({}, Nr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), em = Qt(qf), tm = [9, 13, 27, 32], Ya = m && "CompositionEvent" in window, Cs = null;
  m && "documentMode" in document && (Cs = document.documentMode);
  var nm = m && "TextEvent" in window && !Cs, xu = m && (!Ya || Cs && 8 < Cs && 11 >= Cs), ju = " ", Su = !1;
  function wu(e, t) {
    switch (e) {
      case "keyup":
        return tm.indexOf(t.keyCode) !== -1;
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
  function Eu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $i = !1;
  function im(e, t) {
    switch (e) {
      case "compositionend":
        return Eu(t);
      case "keypress":
        return t.which !== 32 ? null : (Su = !0, ju);
      case "textInput":
        return e = t.data, e === ju && Su ? null : e;
      default:
        return null;
    }
  }
  function sm(e, t) {
    if ($i) return e === "compositionend" || !Ya && wu(e, t) ? (e = pu(), Sr = Ka = Gn = null, $i = !1, e) : null;
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
        return xu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rm[e.type] : t === "textarea";
  }
  function Cu(e, t, n, s) {
    cn(s), t = br(t, "onChange"), 0 < t.length && (n = new Ua("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var Ts = null, Ms = null;
  function am(e) {
    Uu(e, 0);
  }
  function Cr(e) {
    var t = Bi(e);
    if (ge(t)) return e;
  }
  function lm(e, t) {
    if (e === "change") return t;
  }
  var Tu = !1;
  if (m) {
    var Ja;
    if (m) {
      var Xa = "oninput" in document;
      if (!Xa) {
        var Mu = document.createElement("div");
        Mu.setAttribute("oninput", "return;"), Xa = typeof Mu.oninput == "function";
      }
      Ja = Xa;
    } else Ja = !1;
    Tu = Ja && (!document.documentMode || 9 < document.documentMode);
  }
  function _u() {
    Ts && (Ts.detachEvent("onpropertychange", bu), Ms = Ts = null);
  }
  function bu(e) {
    if (e.propertyName === "value" && Cr(Ms)) {
      var t = [];
      Cu(t, Ms, e, at(e)), Pi(am, t);
    }
  }
  function om(e, t, n) {
    e === "focusin" ? (_u(), Ts = t, Ms = n, Ts.attachEvent("onpropertychange", bu)) : e === "focusout" && _u();
  }
  function um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cr(Ms);
  }
  function cm(e, t) {
    if (e === "click") return Cr(t);
  }
  function dm(e, t) {
    if (e === "input" || e === "change") return Cr(t);
  }
  function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var hn = typeof Object.is == "function" ? Object.is : hm;
  function _s(e, t) {
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
  function Au(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pu(e, t) {
    var n = Au(e);
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
      n = Au(n);
    }
  }
  function Lu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ru() {
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
  function Za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function fm(e) {
    var t = Ru(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lu(n.ownerDocument.documentElement, n)) {
      if (s !== null && Za(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(s.start, o);
          s = s.end === void 0 ? u : Math.min(s.end, o), !e.extend && u > s && (o = s, s = u, u = o), o = Pu(n, u);
          var f = Pu(
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
  var mm = m && "documentMode" in document && 11 >= document.documentMode, Fi = null, qa = null, bs = null, el = !1;
  function Ou(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    el || Fi == null || Fi !== xe(s) || (s = Fi, "selectionStart" in s && Za(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), bs && _s(bs, s) || (bs = s, s = br(qa, "onSelect"), 0 < s.length && (t = new Ua("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = Fi)));
  }
  function Tr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ii = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, tl = {}, $u = {};
  m && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete Ii.animationend.animation, delete Ii.animationiteration.animation, delete Ii.animationstart.animation), "TransitionEvent" in window || delete Ii.transitionend.transition);
  function Mr(e) {
    if (tl[e]) return tl[e];
    if (!Ii[e]) return e;
    var t = Ii[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in $u) return tl[e] = t[n];
    return e;
  }
  var Fu = Mr("animationend"), Iu = Mr("animationiteration"), Du = Mr("animationstart"), zu = Mr("transitionend"), Bu = /* @__PURE__ */ new Map(), Vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Bu.set(e, t), h(t, [e]);
  }
  for (var nl = 0; nl < Vu.length; nl++) {
    var il = Vu[nl], pm = il.toLowerCase(), vm = il[0].toUpperCase() + il.slice(1);
    Wn(pm, "on" + vm);
  }
  Wn(Fu, "onAnimationEnd"), Wn(Iu, "onAnimationIteration"), Wn(Du, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(zu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
  function Ku(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, ur(s, t, void 0, e), e.currentTarget = null;
  }
  function Uu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], o = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = s.length - 1; 0 <= f; f--) {
          var y = s[f], N = y.instance, F = y.currentTarget;
          if (y = y.listener, N !== u && o.isPropagationStopped()) break e;
          Ku(o, y, F), u = N;
        }
        else for (f = 0; f < s.length; f++) {
          if (y = s[f], N = y.instance, F = y.currentTarget, y = y.listener, N !== u && o.isPropagationStopped()) break e;
          Ku(o, y, F), u = N;
        }
      }
    }
    if (dn) throw e = Dn, dn = !1, Dn = null, e;
  }
  function it(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (Hu(t, e, 2, !1), n.add(s));
  }
  function sl(e, t, n) {
    var s = 0;
    t && (s |= 4), Hu(n, e, s, t);
  }
  var _r = "_reactListening" + Math.random().toString(36).slice(2);
  function Ps(e) {
    if (!e[_r]) {
      e[_r] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (km.has(n) || sl(n, !1, e), sl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_r] || (t[_r] = !0, sl("selectionchange", !1, t));
    }
  }
  function Hu(e, t, n, s) {
    switch (mu(t)) {
      case 1:
        var o = Af;
        break;
      case 4:
        o = Pf;
        break;
      default:
        o = Ba;
    }
    n = o.bind(null, t, n, e), o = void 0, !Ve || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function rl(e, t, n, s, o) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var f = s.tag;
      if (f === 3 || f === 4) {
        var y = s.stateNode.containerInfo;
        if (y === o || y.nodeType === 8 && y.parentNode === o) break;
        if (f === 4) for (f = s.return; f !== null; ) {
          var N = f.tag;
          if ((N === 3 || N === 4) && (N = f.stateNode.containerInfo, N === o || N.nodeType === 8 && N.parentNode === o)) return;
          f = f.return;
        }
        for (; y !== null; ) {
          if (f = mi(y), f === null) return;
          if (N = f.tag, N === 5 || N === 6) {
            s = u = f;
            continue e;
          }
          y = y.parentNode;
        }
      }
      s = s.return;
    }
    Pi(function() {
      var F = u, X = at(n), q = [];
      e: {
        var Q = Bu.get(e);
        if (Q !== void 0) {
          var de = Ua, ve = e;
          switch (e) {
            case "keypress":
              if (wr(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Wf;
              break;
            case "focusin":
              ve = "focus", de = Wa;
              break;
            case "focusout":
              ve = "blur", de = Wa;
              break;
            case "beforeblur":
            case "afterblur":
              de = Wa;
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
              de = ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Of;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Jf;
              break;
            case Fu:
            case Iu:
            case Du:
              de = If;
              break;
            case zu:
              de = Zf;
              break;
            case "scroll":
              de = Lf;
              break;
            case "wheel":
              de = em;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = gu;
          }
          var ye = (t & 4) !== 0, ft = !ye && e === "scroll", P = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var T = F, R; T !== null; ) {
            R = T;
            var ie = R.stateNode;
            if (R.tag === 5 && ie !== null && (R = ie, P !== null && (ie = fi(T, P), ie != null && ye.push(Ls(T, ie, R)))), ft) break;
            T = T.return;
          }
          0 < ye.length && (Q = new de(Q, ve, null, n, X), q.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== Ze && (ve = n.relatedTarget || n.fromElement) && (mi(ve) || ve[bn])) break e;
          if ((de || Q) && (Q = X.window === X ? X : (Q = X.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (ve = n.relatedTarget || n.toElement, de = F, ve = ve ? mi(ve) : null, ve !== null && (ft = _n(ve), ve !== ft || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (de = null, ve = F), de !== ve)) {
            if (ye = ku, ie = "onMouseLeave", P = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ye = gu, ie = "onPointerLeave", P = "onPointerEnter", T = "pointer"), ft = de == null ? Q : Bi(de), R = ve == null ? Q : Bi(ve), Q = new ye(ie, T + "leave", de, n, X), Q.target = ft, Q.relatedTarget = R, ie = null, mi(X) === F && (ye = new ye(P, T + "enter", ve, n, X), ye.target = R, ye.relatedTarget = ft, ie = ye), ft = ie, de && ve) t: {
              for (ye = de, P = ve, T = 0, R = ye; R; R = Di(R)) T++;
              for (R = 0, ie = P; ie; ie = Di(ie)) R++;
              for (; 0 < T - R; ) ye = Di(ye), T--;
              for (; 0 < R - T; ) P = Di(P), R--;
              for (; T--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = Di(ye), P = Di(P);
              }
              ye = null;
            }
            else ye = null;
            de !== null && Gu(q, Q, de, ye, !1), ve !== null && ft !== null && Gu(q, ft, ve, ye, !0);
          }
        }
        e: {
          if (Q = F ? Bi(F) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var Se = lm;
          else if (Nu(Q)) if (Tu) Se = dm;
          else {
            Se = um;
            var Ae = om;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Se = cm);
          if (Se && (Se = Se(e, F))) {
            Cu(q, Se, n, X);
            break e;
          }
          Ae && Ae(e, Q, F), e === "focusout" && (Ae = Q._wrapperState) && Ae.controlled && Q.type === "number" && ue(Q, "number", Q.value);
        }
        switch (Ae = F ? Bi(F) : window, e) {
          case "focusin":
            (Nu(Ae) || Ae.contentEditable === "true") && (Fi = Ae, qa = F, bs = null);
            break;
          case "focusout":
            bs = qa = Fi = null;
            break;
          case "mousedown":
            el = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            el = !1, Ou(q, n, X);
            break;
          case "selectionchange":
            if (mm) break;
          case "keydown":
          case "keyup":
            Ou(q, n, X);
        }
        var Pe;
        if (Ya) e: {
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
        else $i ? wu(e, n) && ($e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($e = "onCompositionStart");
        $e && (xu && n.locale !== "ko" && ($i || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && $i && (Pe = pu()) : (Gn = X, Ka = "value" in Gn ? Gn.value : Gn.textContent, $i = !0)), Ae = br(F, $e), 0 < Ae.length && ($e = new yu($e, e, null, n, X), q.push({ event: $e, listeners: Ae }), Pe ? $e.data = Pe : (Pe = Eu(n), Pe !== null && ($e.data = Pe)))), (Pe = nm ? im(e, n) : sm(e, n)) && (F = br(F, "onBeforeInput"), 0 < F.length && (X = new yu("onBeforeInput", "beforeinput", null, n, X), q.push({ event: X, listeners: F }), X.data = Pe));
      }
      Uu(q, t);
    });
  }
  function Ls(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function br(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = fi(e, n), u != null && s.unshift(Ls(e, u, o)), u = fi(e, t), u != null && s.push(Ls(e, u, o))), e = e.return;
    }
    return s;
  }
  function Di(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Gu(e, t, n, s, o) {
    for (var u = t._reactName, f = []; n !== null && n !== s; ) {
      var y = n, N = y.alternate, F = y.stateNode;
      if (N !== null && N === s) break;
      y.tag === 5 && F !== null && (y = F, o ? (N = fi(n, u), N != null && f.unshift(Ls(n, N, y))) : o || (N = fi(n, u), N != null && f.push(Ls(n, N, y)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ym = /\r\n?/g, gm = /\u0000|\uFFFD/g;
  function Wu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ym, `
`).replace(gm, "");
  }
  function Ar(e, t, n) {
    if (t = Wu(t), Wu(e) !== t && n) throw Error(l(425));
  }
  function Pr() {
  }
  var al = null, ll = null;
  function ol(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ul = typeof setTimeout == "function" ? setTimeout : void 0, xm = typeof clearTimeout == "function" ? clearTimeout : void 0, Qu = typeof Promise == "function" ? Promise : void 0, jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qu < "u" ? function(e) {
    return Qu.resolve(null).then(e).catch(Sm);
  } : ul;
  function Sm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function cl(e, t) {
    var n = t, s = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (s === 0) {
          e.removeChild(o), ws(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = o;
    } while (n);
    ws(t);
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
  function Yu(e) {
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
  var zi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + zi, Rs = "__reactProps$" + zi, bn = "__reactContainer$" + zi, dl = "__reactEvents$" + zi, wm = "__reactListeners$" + zi, Em = "__reactHandles$" + zi;
  function mi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bn] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yu(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = Yu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Os(e) {
    return e = e[jn] || e[bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Bi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Lr(e) {
    return e[Rs] || null;
  }
  var hl = [], Vi = -1;
  function Yn(e) {
    return { current: e };
  }
  function st(e) {
    0 > Vi || (e.current = hl[Vi], hl[Vi] = null, Vi--);
  }
  function tt(e, t) {
    Vi++, hl[Vi] = e.current, e.current = t;
  }
  var Jn = {}, Mt = Yn(Jn), zt = Yn(!1), pi = Jn;
  function Ki(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Bt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Rr() {
    st(zt), st(Mt);
  }
  function Ju(e, t, n) {
    if (Mt.current !== Jn) throw Error(l(168));
    tt(Mt, t), tt(zt, n);
  }
  function Xu(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(l(108, K(e) || "Unknown", o));
    return te({}, n, s);
  }
  function Or(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, pi = Mt.current, tt(Mt, e), tt(zt, zt.current), !0;
  }
  function Zu(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(l(169));
    n ? (e = Xu(e, t, pi), s.__reactInternalMemoizedMergedChildContext = e, st(zt), st(Mt), tt(Mt, e)) : st(zt), tt(zt, n);
  }
  var An = null, $r = !1, fl = !1;
  function qu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Nm(e) {
    $r = !0, qu(e);
  }
  function Xn() {
    if (!fl && An !== null) {
      fl = !0;
      var e = 0, t = qe;
      try {
        var n = An;
        for (qe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        An = null, $r = !1;
      } catch (o) {
        throw An !== null && (An = An.slice(e + 1)), wt(xn, Xn), o;
      } finally {
        qe = t, fl = !1;
      }
    }
    return null;
  }
  var Ui = [], Hi = 0, Fr = null, Ir = 0, tn = [], nn = 0, vi = null, Pn = 1, Ln = "";
  function ki(e, t) {
    Ui[Hi++] = Ir, Ui[Hi++] = Fr, Fr = e, Ir = t;
  }
  function ec(e, t, n) {
    tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = vi, vi = e;
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
  function ml(e) {
    e.return !== null && (ki(e, 1), ec(e, 1, 0));
  }
  function pl(e) {
    for (; e === Fr; ) Fr = Ui[--Hi], Ui[Hi] = null, Ir = Ui[--Hi], Ui[Hi] = null;
    for (; e === vi; ) vi = tn[--nn], tn[nn] = null, Ln = tn[--nn], tn[nn] = null, Pn = tn[--nn], tn[nn] = null;
  }
  var Yt = null, Jt = null, rt = !1, fn = null;
  function tc(e, t) {
    var n = ln(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function nc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Yt = e, Jt = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Yt = e, Jt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vi !== null ? { id: Pn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ln(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Yt = e, Jt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function kl(e) {
    if (rt) {
      var t = Jt;
      if (t) {
        var n = t;
        if (!nc(e, t)) {
          if (vl(e)) throw Error(l(418));
          t = Qn(n.nextSibling);
          var s = Yt;
          t && nc(e, t) ? tc(s, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Yt = e);
        }
      } else {
        if (vl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Yt = e;
      }
    }
  }
  function ic(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Yt = e;
  }
  function Dr(e) {
    if (e !== Yt) return !1;
    if (!rt) return ic(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps)), t && (t = Jt)) {
      if (vl(e)) throw sc(), Error(l(418));
      for (; t; ) tc(e, t), t = Qn(t.nextSibling);
    }
    if (ic(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Jt = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Jt = null;
      }
    } else Jt = Yt ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function sc() {
    for (var e = Jt; e; ) e = Qn(e.nextSibling);
  }
  function Gi() {
    Jt = Yt = null, rt = !1;
  }
  function yl(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var Cm = z.ReactCurrentBatchConfig;
  function $s(e, t, n) {
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
  function zr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function rc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ac(e) {
    function t(P, T) {
      if (e) {
        var R = P.deletions;
        R === null ? (P.deletions = [T], P.flags |= 16) : R.push(T);
      }
    }
    function n(P, T) {
      if (!e) return null;
      for (; T !== null; ) t(P, T), T = T.sibling;
      return null;
    }
    function s(P, T) {
      for (P = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? P.set(T.key, T) : P.set(T.index, T), T = T.sibling;
      return P;
    }
    function o(P, T) {
      return P = ri(P, T), P.index = 0, P.sibling = null, P;
    }
    function u(P, T, R) {
      return P.index = R, e ? (R = P.alternate, R !== null ? (R = R.index, R < T ? (P.flags |= 2, T) : R) : (P.flags |= 2, T)) : (P.flags |= 1048576, T);
    }
    function f(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function y(P, T, R, ie) {
      return T === null || T.tag !== 6 ? (T = uo(R, P.mode, ie), T.return = P, T) : (T = o(T, R), T.return = P, T);
    }
    function N(P, T, R, ie) {
      var Se = R.type;
      return Se === O ? X(P, T, R.props.children, ie, R.key) : T !== null && (T.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === oe && rc(Se) === T.type) ? (ie = o(T, R.props), ie.ref = $s(P, T, R), ie.return = P, ie) : (ie = ca(R.type, R.key, R.props, null, P.mode, ie), ie.ref = $s(P, T, R), ie.return = P, ie);
    }
    function F(P, T, R, ie) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = co(R, P.mode, ie), T.return = P, T) : (T = o(T, R.children || []), T.return = P, T);
    }
    function X(P, T, R, ie, Se) {
      return T === null || T.tag !== 7 ? (T = Ni(R, P.mode, ie, Se), T.return = P, T) : (T = o(T, R), T.return = P, T);
    }
    function q(P, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = uo("" + T, P.mode, R), T.return = P, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case V:
            return R = ca(T.type, T.key, T.props, null, P.mode, R), R.ref = $s(P, null, T), R.return = P, R;
          case D:
            return T = co(T, P.mode, R), T.return = P, T;
          case oe:
            var ie = T._init;
            return q(P, ie(T._payload), R);
        }
        if (Me(T) || ae(T)) return T = Ni(T, P.mode, R, null), T.return = P, T;
        zr(P, T);
      }
      return null;
    }
    function Q(P, T, R, ie) {
      var Se = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Se !== null ? null : y(P, T, "" + R, ie);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return R.key === Se ? N(P, T, R, ie) : null;
          case D:
            return R.key === Se ? F(P, T, R, ie) : null;
          case oe:
            return Se = R._init, Q(
              P,
              T,
              Se(R._payload),
              ie
            );
        }
        if (Me(R) || ae(R)) return Se !== null ? null : X(P, T, R, ie, null);
        zr(P, R);
      }
      return null;
    }
    function de(P, T, R, ie, Se) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(R) || null, y(T, P, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case V:
            return P = P.get(ie.key === null ? R : ie.key) || null, N(T, P, ie, Se);
          case D:
            return P = P.get(ie.key === null ? R : ie.key) || null, F(T, P, ie, Se);
          case oe:
            var Ae = ie._init;
            return de(P, T, R, Ae(ie._payload), Se);
        }
        if (Me(ie) || ae(ie)) return P = P.get(R) || null, X(T, P, ie, Se, null);
        zr(T, ie);
      }
      return null;
    }
    function ve(P, T, R, ie) {
      for (var Se = null, Ae = null, Pe = T, $e = T = 0, jt = null; Pe !== null && $e < R.length; $e++) {
        Pe.index > $e ? (jt = Pe, Pe = null) : jt = Pe.sibling;
        var Ye = Q(P, Pe, R[$e], ie);
        if (Ye === null) {
          Pe === null && (Pe = jt);
          break;
        }
        e && Pe && Ye.alternate === null && t(P, Pe), T = u(Ye, T, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye, Pe = jt;
      }
      if ($e === R.length) return n(P, Pe), rt && ki(P, $e), Se;
      if (Pe === null) {
        for (; $e < R.length; $e++) Pe = q(P, R[$e], ie), Pe !== null && (T = u(Pe, T, $e), Ae === null ? Se = Pe : Ae.sibling = Pe, Ae = Pe);
        return rt && ki(P, $e), Se;
      }
      for (Pe = s(P, Pe); $e < R.length; $e++) jt = de(Pe, P, $e, R[$e], ie), jt !== null && (e && jt.alternate !== null && Pe.delete(jt.key === null ? $e : jt.key), T = u(jt, T, $e), Ae === null ? Se = jt : Ae.sibling = jt, Ae = jt);
      return e && Pe.forEach(function(ai) {
        return t(P, ai);
      }), rt && ki(P, $e), Se;
    }
    function ye(P, T, R, ie) {
      var Se = ae(R);
      if (typeof Se != "function") throw Error(l(150));
      if (R = Se.call(R), R == null) throw Error(l(151));
      for (var Ae = Se = null, Pe = T, $e = T = 0, jt = null, Ye = R.next(); Pe !== null && !Ye.done; $e++, Ye = R.next()) {
        Pe.index > $e ? (jt = Pe, Pe = null) : jt = Pe.sibling;
        var ai = Q(P, Pe, Ye.value, ie);
        if (ai === null) {
          Pe === null && (Pe = jt);
          break;
        }
        e && Pe && ai.alternate === null && t(P, Pe), T = u(ai, T, $e), Ae === null ? Se = ai : Ae.sibling = ai, Ae = ai, Pe = jt;
      }
      if (Ye.done) return n(
        P,
        Pe
      ), rt && ki(P, $e), Se;
      if (Pe === null) {
        for (; !Ye.done; $e++, Ye = R.next()) Ye = q(P, Ye.value, ie), Ye !== null && (T = u(Ye, T, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
        return rt && ki(P, $e), Se;
      }
      for (Pe = s(P, Pe); !Ye.done; $e++, Ye = R.next()) Ye = de(Pe, P, $e, Ye.value, ie), Ye !== null && (e && Ye.alternate !== null && Pe.delete(Ye.key === null ? $e : Ye.key), T = u(Ye, T, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
      return e && Pe.forEach(function(rp) {
        return t(P, rp);
      }), rt && ki(P, $e), Se;
    }
    function ft(P, T, R, ie) {
      if (typeof R == "object" && R !== null && R.type === O && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            e: {
              for (var Se = R.key, Ae = T; Ae !== null; ) {
                if (Ae.key === Se) {
                  if (Se = R.type, Se === O) {
                    if (Ae.tag === 7) {
                      n(P, Ae.sibling), T = o(Ae, R.props.children), T.return = P, P = T;
                      break e;
                    }
                  } else if (Ae.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === oe && rc(Se) === Ae.type) {
                    n(P, Ae.sibling), T = o(Ae, R.props), T.ref = $s(P, Ae, R), T.return = P, P = T;
                    break e;
                  }
                  n(P, Ae);
                  break;
                } else t(P, Ae);
                Ae = Ae.sibling;
              }
              R.type === O ? (T = Ni(R.props.children, P.mode, ie, R.key), T.return = P, P = T) : (ie = ca(R.type, R.key, R.props, null, P.mode, ie), ie.ref = $s(P, T, R), ie.return = P, P = ie);
            }
            return f(P);
          case D:
            e: {
              for (Ae = R.key; T !== null; ) {
                if (T.key === Ae) if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                  n(P, T.sibling), T = o(T, R.children || []), T.return = P, P = T;
                  break e;
                } else {
                  n(P, T);
                  break;
                }
                else t(P, T);
                T = T.sibling;
              }
              T = co(R, P.mode, ie), T.return = P, P = T;
            }
            return f(P);
          case oe:
            return Ae = R._init, ft(P, T, Ae(R._payload), ie);
        }
        if (Me(R)) return ve(P, T, R, ie);
        if (ae(R)) return ye(P, T, R, ie);
        zr(P, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, T !== null && T.tag === 6 ? (n(P, T.sibling), T = o(T, R), T.return = P, P = T) : (n(P, T), T = uo(R, P.mode, ie), T.return = P, P = T), f(P)) : n(P, T);
    }
    return ft;
  }
  var Wi = ac(!0), lc = ac(!1), Br = Yn(null), Vr = null, Qi = null, gl = null;
  function xl() {
    gl = Qi = Vr = null;
  }
  function jl(e) {
    var t = Br.current;
    st(Br), e._currentValue = t;
  }
  function Sl(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Yi(e, t) {
    Vr = e, gl = Qi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Vt = !0), e.firstContext = null);
  }
  function sn(e) {
    var t = e._currentValue;
    if (gl !== e) if (e = { context: e, memoizedValue: t, next: null }, Qi === null) {
      if (Vr === null) throw Error(l(308));
      Qi = e, Vr.dependencies = { lanes: 0, firstContext: e };
    } else Qi = Qi.next = e;
    return t;
  }
  var yi = null;
  function wl(e) {
    yi === null ? yi = [e] : yi.push(e);
  }
  function oc(e, t, n, s) {
    var o = t.interleaved;
    return o === null ? (n.next = n, wl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rn(e, s);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function El(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function uc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (We & 2) !== 0) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Rn(e, n);
    }
    return o = s.interleaved, o === null ? (t.next = t, wl(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Rn(e, n);
  }
  function Kr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ia(e, n);
    }
  }
  function cc(e, t) {
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
  function Ur(e, t, n, s) {
    var o = e.updateQueue;
    Zn = !1;
    var u = o.firstBaseUpdate, f = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var N = y, F = N.next;
      N.next = null, f === null ? u = F : f.next = F, f = N;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, y = X.lastBaseUpdate, y !== f && (y === null ? X.firstBaseUpdate = F : y.next = F, X.lastBaseUpdate = N));
    }
    if (u !== null) {
      var q = o.baseState;
      f = 0, X = F = N = null, y = u;
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
                Zn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, Q = o.effects, Q === null ? o.effects = [y] : Q.push(y));
        } else de = { eventTime: de, lane: Q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, X === null ? (F = X = de, N = q) : X = X.next = de, f |= Q;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null) break;
          Q = y, y = Q.next, Q.next = null, o.lastBaseUpdate = Q, o.shared.pending = null;
        }
      } while (!0);
      if (X === null && (N = q), o.baseState = N, o.firstBaseUpdate = F, o.lastBaseUpdate = X, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          f |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      ji |= f, e.lanes = f, e.memoizedState = q;
    }
  }
  function dc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = n, typeof o != "function") throw Error(l(191, o));
        o.call(s);
      }
    }
  }
  var Fs = {}, Sn = Yn(Fs), Is = Yn(Fs), Ds = Yn(Fs);
  function gi(e) {
    if (e === Fs) throw Error(l(174));
    return e;
  }
  function Nl(e, t) {
    switch (tt(Ds, t), tt(Is, e), tt(Sn, Fs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qt(t, e);
    }
    st(Sn), tt(Sn, t);
  }
  function Ji() {
    st(Sn), st(Is), st(Ds);
  }
  function hc(e) {
    gi(Ds.current);
    var t = gi(Sn.current), n = qt(t, e.type);
    t !== n && (tt(Is, e), tt(Sn, n));
  }
  function Cl(e) {
    Is.current === e && (st(Sn), st(Is));
  }
  var ut = Yn(0);
  function Hr(e) {
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
  var Tl = [];
  function Ml() {
    for (var e = 0; e < Tl.length; e++) Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0;
  }
  var Gr = z.ReactCurrentDispatcher, _l = z.ReactCurrentBatchConfig, xi = 0, ct = null, kt = null, gt = null, Wr = !1, zs = !1, Bs = 0, Tm = 0;
  function _t() {
    throw Error(l(321));
  }
  function bl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!hn(e[n], t[n])) return !1;
    return !0;
  }
  function Al(e, t, n, s, o, u) {
    if (xi = u, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gr.current = e === null || e.memoizedState === null ? Am : Pm, e = n(s, o), zs) {
      u = 0;
      do {
        if (zs = !1, Bs = 0, 25 <= u) throw Error(l(301));
        u += 1, gt = kt = null, t.updateQueue = null, Gr.current = Lm, e = n(s, o);
      } while (zs);
    }
    if (Gr.current = Jr, t = kt !== null && kt.next !== null, xi = 0, gt = kt = ct = null, Wr = !1, t) throw Error(l(300));
    return e;
  }
  function Pl() {
    var e = Bs !== 0;
    return Bs = 0, e;
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
  function Vs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
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
      var y = f = null, N = null, F = u;
      do {
        var X = F.lane;
        if ((xi & X) === X) N !== null && (N = N.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), s = F.hasEagerState ? F.eagerState : e(s, F.action);
        else {
          var q = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          N === null ? (y = N = q, f = s) : N = N.next = q, ct.lanes |= X, ji |= X;
        }
        F = F.next;
      } while (F !== null && F !== u);
      N === null ? f = s : N.next = y, hn(s, t.memoizedState) || (Vt = !0), t.memoizedState = s, t.baseState = f, t.baseQueue = N, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, ct.lanes |= u, ji |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Rl(e) {
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
  function fc() {
  }
  function mc(e, t) {
    var n = ct, s = rn(), o = t(), u = !hn(s.memoizedState, o);
    if (u && (s.memoizedState = o, Vt = !0), s = s.queue, Ol(kc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || gt !== null && gt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ks(9, vc.bind(null, n, s, o, t), void 0, null), xt === null) throw Error(l(349));
      (xi & 30) !== 0 || pc(n, t, o);
    }
    return o;
  }
  function pc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, yc(t) && gc(e);
  }
  function kc(e, t, n) {
    return n(function() {
      yc(t) && gc(e);
    });
  }
  function yc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !hn(e, n);
    } catch {
      return !0;
    }
  }
  function gc(e) {
    var t = Rn(e, 1);
    t !== null && kn(t, e, 1, -1);
  }
  function xc(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vs, lastRenderedState: e }, t.queue = e, e = e.dispatch = bm.bind(null, ct, e), [t.memoizedState, e];
  }
  function Ks(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function jc() {
    return rn().memoizedState;
  }
  function Qr(e, t, n, s) {
    var o = wn();
    ct.flags |= e, o.memoizedState = Ks(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function Yr(e, t, n, s) {
    var o = rn();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (kt !== null) {
      var f = kt.memoizedState;
      if (u = f.destroy, s !== null && bl(s, f.deps)) {
        o.memoizedState = Ks(t, n, u, s);
        return;
      }
    }
    ct.flags |= e, o.memoizedState = Ks(1 | t, n, u, s);
  }
  function Sc(e, t) {
    return Qr(8390656, 8, e, t);
  }
  function Ol(e, t) {
    return Yr(2048, 8, e, t);
  }
  function wc(e, t) {
    return Yr(4, 2, e, t);
  }
  function Ec(e, t) {
    return Yr(4, 4, e, t);
  }
  function Nc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Cc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Yr(4, 4, Nc.bind(null, t, e), n);
  }
  function $l() {
  }
  function Tc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && bl(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Mc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && bl(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function _c(e, t, n) {
    return (xi & 21) === 0 ? (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n) : (hn(n, t) || (n = ru(), ct.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function Mm(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = _l.transition;
    _l.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, _l.transition = s;
    }
  }
  function bc() {
    return rn().memoizedState;
  }
  function _m(e, t, n) {
    var s = ii(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Ac(e)) Pc(t, n);
    else if (n = oc(e, t, n, s), n !== null) {
      var o = $t();
      kn(n, e, s, o), Lc(n, t, s);
    }
  }
  function bm(e, t, n) {
    var s = ii(e), o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ac(e)) Pc(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, y = u(f, n);
        if (o.hasEagerState = !0, o.eagerState = y, hn(y, f)) {
          var N = t.interleaved;
          N === null ? (o.next = o, wl(t)) : (o.next = N.next, N.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = oc(e, t, o, s), n !== null && (o = $t(), kn(n, e, s, o), Lc(n, t, s));
    }
  }
  function Ac(e) {
    var t = e.alternate;
    return e === ct || t !== null && t === ct;
  }
  function Pc(e, t) {
    zs = Wr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Lc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ia(e, n);
    }
  }
  var Jr = { readContext: sn, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, Am = { readContext: sn, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: sn, useEffect: Sc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Qr(
      4194308,
      4,
      Nc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Qr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Qr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = wn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = _m.bind(null, ct, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: xc, useDebugValue: $l, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = xc(!1), t = e[0];
    return e = Mm.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = ct, o = wn();
    if (rt) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), xt === null) throw Error(l(349));
      (xi & 30) !== 0 || pc(s, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Sc(kc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ks(9, vc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = xt.identifierPrefix;
    if (rt) {
      var n = Ln, s = Pn;
      n = (s & ~(1 << 32 - Et(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Tm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Pm = {
    readContext: sn,
    useCallback: Tc,
    useContext: sn,
    useEffect: Ol,
    useImperativeHandle: Cc,
    useInsertionEffect: wc,
    useLayoutEffect: Ec,
    useMemo: Mc,
    useReducer: Ll,
    useRef: jc,
    useState: function() {
      return Ll(Vs);
    },
    useDebugValue: $l,
    useDeferredValue: function(e) {
      var t = rn();
      return _c(t, kt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ll(Vs)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: mc,
    useId: bc,
    unstable_isNewReconciler: !1
  }, Lm = { readContext: sn, useCallback: Tc, useContext: sn, useEffect: Ol, useImperativeHandle: Cc, useInsertionEffect: wc, useLayoutEffect: Ec, useMemo: Mc, useReducer: Rl, useRef: jc, useState: function() {
    return Rl(Vs);
  }, useDebugValue: $l, useDeferredValue: function(e) {
    var t = rn();
    return kt === null ? t.memoizedState = e : _c(t, kt.memoizedState, e);
  }, useTransition: function() {
    var e = Rl(Vs)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: fc, useSyncExternalStore: mc, useId: bc, unstable_isNewReconciler: !1 };
  function mn(e, t) {
    if (e && e.defaultProps) {
      t = te({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Fl(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Xr = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = $t(), o = ii(e), u = On(s, o);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, o), t !== null && (kn(t, e, o, s), Kr(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = $t(), o = ii(e), u = On(s, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, o), t !== null && (kn(t, e, o, s), Kr(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $t(), s = ii(e), o = On(n, s);
    o.tag = 2, t != null && (o.callback = t), t = qn(e, o, s), t !== null && (kn(t, e, s, n), Kr(t, e, s));
  } };
  function Rc(e, t, n, s, o, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, f) : t.prototype && t.prototype.isPureReactComponent ? !_s(n, s) || !_s(o, u) : !0;
  }
  function Oc(e, t, n) {
    var s = !1, o = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = sn(u) : (o = Bt(t) ? pi : Mt.current, s = t.contextTypes, u = (s = s != null) ? Ki(e, o) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xr, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function $c(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && Xr.enqueueReplaceState(t, t.state, null);
  }
  function Il(e, t, n, s) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, El(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = sn(u) : (u = Bt(t) ? pi : Mt.current, o.context = Ki(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Fl(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Xr.enqueueReplaceState(o, o.state, null), Ur(e, n, o, s), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xi(e, t) {
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
  function Dl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function zl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Rm = typeof WeakMap == "function" ? WeakMap : Map;
  function Fc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      sa || (sa = !0, to = s), zl(e, t);
    }, n;
  }
  function Ic(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      n.payload = function() {
        return s(o);
      }, n.callback = function() {
        zl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      zl(e, t), typeof s != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Dc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Rm();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(n) || (o.add(n), e = Qm.bind(null, e, t, n), t.then(e, e));
  }
  function zc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bc(e, t, n, s, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Om = z.ReactCurrentOwner, Vt = !1;
  function Ot(e, t, n, s) {
    t.child = e === null ? lc(t, null, n, s) : Wi(t, e.child, n, s);
  }
  function Vc(e, t, n, s, o) {
    n = n.render;
    var u = t.ref;
    return Yi(t, o), s = Al(e, t, n, s, u, o), n = Pl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $n(e, t, o)) : (rt && n && ml(t), t.flags |= 1, Ot(e, t, s, o), t.child);
  }
  function Kc(e, t, n, s, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !oo(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Uc(e, t, u, s, o)) : (e = ca(n.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : _s, n(f, s) && e.ref === t.ref) return $n(e, t, o);
    }
    return t.flags |= 1, e = ri(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Uc(e, t, n, s, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (_s(u, s) && e.ref === t.ref) if (Vt = !1, t.pendingProps = s = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Vt = !0);
      else return t.lanes = e.lanes, $n(e, t, o);
    }
    return Bl(e, t, n, s, o);
  }
  function Hc(e, t, n) {
    var s = t.pendingProps, o = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(qi, Xt), Xt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, tt(qi, Xt), Xt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, tt(qi, Xt), Xt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, tt(qi, Xt), Xt |= s;
    return Ot(e, t, o, n), t.child;
  }
  function Gc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, s, o) {
    var u = Bt(n) ? pi : Mt.current;
    return u = Ki(t, u), Yi(t, o), n = Al(e, t, n, s, u, o), s = Pl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $n(e, t, o)) : (rt && s && ml(t), t.flags |= 1, Ot(e, t, n, o), t.child);
  }
  function Wc(e, t, n, s, o) {
    if (Bt(n)) {
      var u = !0;
      Or(t);
    } else u = !1;
    if (Yi(t, o), t.stateNode === null) qr(e, t), Oc(t, n, s), Il(t, n, s, o), s = !0;
    else if (e === null) {
      var f = t.stateNode, y = t.memoizedProps;
      f.props = y;
      var N = f.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = sn(F) : (F = Bt(n) ? pi : Mt.current, F = Ki(t, F));
      var X = n.getDerivedStateFromProps, q = typeof X == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== s || N !== F) && $c(t, f, s, F), Zn = !1;
      var Q = t.memoizedState;
      f.state = Q, Ur(t, s, f, o), N = t.memoizedState, y !== s || Q !== N || zt.current || Zn ? (typeof X == "function" && (Fl(t, n, X, s), N = t.memoizedState), (y = Zn || Rc(t, n, y, s, Q, N, F)) ? (q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = N), f.props = s, f.state = N, f.context = F, s = y) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      f = t.stateNode, uc(e, t), y = t.memoizedProps, F = t.type === t.elementType ? y : mn(t.type, y), f.props = F, q = t.pendingProps, Q = f.context, N = n.contextType, typeof N == "object" && N !== null ? N = sn(N) : (N = Bt(n) ? pi : Mt.current, N = Ki(t, N));
      var de = n.getDerivedStateFromProps;
      (X = typeof de == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== q || Q !== N) && $c(t, f, s, N), Zn = !1, Q = t.memoizedState, f.state = Q, Ur(t, s, f, o);
      var ve = t.memoizedState;
      y !== q || Q !== ve || zt.current || Zn ? (typeof de == "function" && (Fl(t, n, de, s), ve = t.memoizedState), (F = Zn || Rc(t, n, F, s, Q, ve, N) || !1) ? (X || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, ve, N), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(s, ve, N)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ve), f.props = s, f.state = ve, f.context = N, s = F) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Vl(e, t, n, s, u, o);
  }
  function Vl(e, t, n, s, o, u) {
    Gc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!s && !f) return o && Zu(t, n, !1), $n(e, t, u);
    s = t.stateNode, Om.current = t;
    var y = f && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && f ? (t.child = Wi(t, e.child, null, u), t.child = Wi(t, null, y, u)) : Ot(e, t, y, u), t.memoizedState = s.state, o && Zu(t, n, !0), t.child;
  }
  function Qc(e) {
    var t = e.stateNode;
    t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1), Nl(e, t.containerInfo);
  }
  function Yc(e, t, n, s, o) {
    return Gi(), yl(o), t.flags |= 256, Ot(e, t, n, s), t.child;
  }
  var Kl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ul(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Jc(e, t, n) {
    var s = t.pendingProps, o = ut.current, u = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), tt(ut, o & 1), e === null)
      return kl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, f = { mode: "hidden", children: f }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = da(f, s, 0, null), e = Ni(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ul(n), t.memoizedState = Kl, e) : Hl(t, f));
    if (o = e.memoizedState, o !== null && (y = o.dehydrated, y !== null)) return $m(e, t, f, s, y, o, n);
    if (u) {
      u = s.fallback, f = t.mode, o = e.child, y = o.sibling;
      var N = { mode: "hidden", children: s.children };
      return (f & 1) === 0 && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = N, t.deletions = null) : (s = ri(o, N), s.subtreeFlags = o.subtreeFlags & 14680064), y !== null ? u = ri(y, u) : (u = Ni(u, f, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, f = e.child.memoizedState, f = f === null ? Ul(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = Kl, s;
    }
    return u = e.child, e = u.sibling, s = ri(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Hl(e, t) {
    return t = da({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Zr(e, t, n, s) {
    return s !== null && yl(s), Wi(t, e.child, null, n), e = Hl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $m(e, t, n, s, o, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Dl(Error(l(422))), Zr(e, t, f, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, o = t.mode, s = da({ mode: "visible", children: s.children }, o, 0, null), u = Ni(u, o, f, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Wi(t, e.child, null, f), t.child.memoizedState = Ul(f), t.memoizedState = Kl, u);
    if ((t.mode & 1) === 0) return Zr(e, t, f, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var y = s.dgst;
      return s = y, u = Error(l(419)), s = Dl(u, s, void 0), Zr(e, t, f, s);
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
      return lo(), s = Dl(Error(l(421))), Zr(e, t, f, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ym.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, Jt = Qn(o.nextSibling), Yt = t, rt = !0, fn = null, e !== null && (tn[nn++] = Pn, tn[nn++] = Ln, tn[nn++] = vi, Pn = e.id, Ln = e.overflow, vi = t), t = Hl(t, s.children), t.flags |= 4096, t);
  }
  function Xc(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Sl(e.return, t, n);
  }
  function Gl(e, t, n, s, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = o);
  }
  function Zc(e, t, n) {
    var s = t.pendingProps, o = s.revealOrder, u = s.tail;
    if (Ot(e, t, s.children, n), s = ut.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xc(e, n, t);
        else if (e.tag === 19) Xc(e, n, t);
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
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Hr(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Gl(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Hr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Gl(t, !0, n, null, u);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qr(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ji |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fm(e, t, n) {
    switch (t.tag) {
      case 3:
        Qc(t), Gi();
        break;
      case 5:
        hc(t);
        break;
      case 1:
        Bt(t.type) && Or(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        tt(Br, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (tt(ut, ut.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Jc(e, t, n) : (tt(ut, ut.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        tt(ut, ut.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return Zc(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), tt(ut, ut.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Hc(e, t, n);
    }
    return $n(e, t, n);
  }
  var qc, Wl, ed, td;
  qc = function(e, t) {
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
  }, Wl = function() {
  }, ed = function(e, t, n, s) {
    var o = e.memoizedProps;
    if (o !== s) {
      e = t.stateNode, gi(Sn.current);
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
          typeof o.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Pr);
      }
      Re(n, s);
      var f;
      n = null;
      for (F in o) if (!s.hasOwnProperty(F) && o.hasOwnProperty(F) && o[F] != null) if (F === "style") {
        var y = o[F];
        for (f in y) y.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (d.hasOwnProperty(F) ? u || (u = []) : (u = u || []).push(F, null));
      for (F in s) {
        var N = s[F];
        if (y = o?.[F], s.hasOwnProperty(F) && N !== y && (N != null || y != null)) if (F === "style") if (y) {
          for (f in y) !y.hasOwnProperty(f) || N && N.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in N) N.hasOwnProperty(f) && y[f] !== N[f] && (n || (n = {}), n[f] = N[f]);
        } else n || (u || (u = []), u.push(
          F,
          n
        )), n = N;
        else F === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, y = y ? y.__html : void 0, N != null && y !== N && (u = u || []).push(F, N)) : F === "children" ? typeof N != "string" && typeof N != "number" || (u = u || []).push(F, "" + N) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (d.hasOwnProperty(F) ? (N != null && F === "onScroll" && it("scroll", e), u || y === N || (u = [])) : (u = u || []).push(F, N));
      }
      n && (u = u || []).push("style", n);
      var F = u;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, td = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Us(e, t) {
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
  function Im(e, t, n) {
    var s = t.pendingProps;
    switch (pl(t), t.tag) {
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
        return Bt(t.type) && Rr(), bt(t), null;
      case 3:
        return s = t.stateNode, Ji(), st(zt), st(Mt), Ml(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (so(fn), fn = null))), Wl(e, t), bt(t), null;
      case 5:
        Cl(t);
        var o = gi(Ds.current);
        if (n = t.type, e !== null && t.stateNode != null) ed(e, t, n, s, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return bt(t), null;
          }
          if (e = gi(Sn.current), Dr(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[jn] = t, s[Rs] = u, e = (t.mode & 1) !== 0, n) {
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
                for (o = 0; o < As.length; o++) it(As[o], s);
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
                Fe(s, u), it("invalid", s);
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
              f === "children" ? typeof y == "string" ? s.textContent !== y && (u.suppressHydrationWarning !== !0 && Ar(s.textContent, y, e), o = ["children", y]) : typeof y == "number" && s.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && Ar(
                s.textContent,
                y,
                e
              ), o = ["children", "" + y]) : d.hasOwnProperty(f) && y != null && f === "onScroll" && it("scroll", s);
            }
            switch (n) {
              case "input":
                Ce(s), le(s, u, !0);
                break;
              case "textarea":
                Ce(s), Je(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Pr);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            f = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = f.createElement(n, { is: s.is }) : (e = f.createElement(n), n === "select" && (f = e, s.multiple ? f.multiple = !0 : s.size && (f.size = s.size))) : e = f.createElementNS(e, n), e[jn] = t, e[Rs] = s, qc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = De(n, s), n) {
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
                  for (o = 0; o < As.length; o++) it(As[o], e);
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
                  Fe(e, s), o = je(e, s), it("invalid", e);
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
                var N = y[u];
                u === "style" ? on(e, N) : u === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && en(e, N)) : u === "children" ? typeof N == "string" ? (n !== "textarea" || N !== "") && Gt(e, N) : typeof N == "number" && Gt(e, "" + N) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? N != null && u === "onScroll" && it("scroll", e) : N != null && U(e, u, N, f));
              }
              switch (n) {
                case "input":
                  Ce(e), le(e, s, !1);
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
                  typeof o.onClick == "function" && (e.onclick = Pr);
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
        if (e && t.stateNode != null) td(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(l(166));
          if (n = gi(Ds.current), gi(Sn.current), Dr(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[jn] = t, (u = s.nodeValue !== n) && (e = Yt, e !== null)) switch (e.tag) {
              case 3:
                Ar(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ar(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[jn] = t, t.stateNode = s;
        }
        return bt(t), null;
      case 13:
        if (st(ut), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Jt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) sc(), Gi(), t.flags |= 98560, u = !1;
          else if (u = Dr(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[jn] = t;
            } else Gi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bt(t), u = !1;
          } else fn !== null && (so(fn), fn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ut.current & 1) !== 0 ? yt === 0 && (yt = 3) : lo())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
      case 4:
        return Ji(), Wl(e, t), e === null && Ps(t.stateNode.containerInfo), bt(t), null;
      case 10:
        return jl(t.type._context), bt(t), null;
      case 17:
        return Bt(t.type) && Rr(), bt(t), null;
      case 19:
        if (st(ut), u = t.memoizedState, u === null) return bt(t), null;
        if (s = (t.flags & 128) !== 0, f = u.rendering, f === null) if (s) Us(u, !1);
        else {
          if (yt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Hr(e), f !== null) {
              for (t.flags |= 128, Us(u, !1), s = f.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return tt(ut, ut.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && lt() > es && (t.flags |= 128, s = !0, Us(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Hr(f), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Us(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !rt) return bt(t), null;
          } else 2 * lt() - u.renderingStartTime > es && n !== 1073741824 && (t.flags |= 128, s = !0, Us(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = lt(), t.sibling = null, n = ut.current, tt(ut, s ? n & 1 | 2 : n & 1), t) : (bt(t), null);
      case 22:
      case 23:
        return ao(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Xt & 1073741824) !== 0 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Dm(e, t) {
    switch (pl(t), t.tag) {
      case 1:
        return Bt(t.type) && Rr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ji(), st(zt), st(Mt), Ml(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Cl(t), null;
      case 13:
        if (st(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Gi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return st(ut), null;
      case 4:
        return Ji(), null;
      case 10:
        return jl(t.type._context), null;
      case 22:
      case 23:
        return ao(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ea = !1, At = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Zi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      dt(e, t, s);
    }
    else n.current = null;
  }
  function Ql(e, t, n) {
    try {
      n();
    } catch (s) {
      dt(e, t, s);
    }
  }
  var nd = !1;
  function Bm(e, t) {
    if (al = xr, e = Ru(), Za(e)) {
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
          var f = 0, y = -1, N = -1, F = 0, X = 0, q = e, Q = null;
          t: for (; ; ) {
            for (var de; q !== n || o !== 0 && q.nodeType !== 3 || (y = f + o), q !== u || s !== 0 && q.nodeType !== 3 || (N = f + s), q.nodeType === 3 && (f += q.nodeValue.length), (de = q.firstChild) !== null; )
              Q = q, q = de;
            for (; ; ) {
              if (q === e) break t;
              if (Q === n && ++F === o && (y = f), Q === u && ++X === s && (N = f), (de = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = de;
          }
          n = y === -1 || N === -1 ? null : { start: y, end: N };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ll = { focusedElem: e, selectionRange: n }, xr = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
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
              var ye = ve.memoizedProps, ft = ve.memoizedState, P = t.stateNode, T = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : mn(t.type, ye), ft);
              P.__reactInternalSnapshotBeforeUpdate = T;
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
    return ve = nd, nd = !1, ve;
  }
  function Hs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && Ql(t, n, u);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function ta(e, t) {
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
  function Yl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function id(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, id(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Rs], delete t[dl], delete t[wm], delete t[Em])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function sd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function rd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Jl(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pr));
    else if (s !== 4 && (e = e.child, e !== null)) for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), e = e.sibling;
  }
  function Xl(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), e = e.sibling;
  }
  var Nt = null, pn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) ad(e, t, n), n = n.sibling;
  }
  function ad(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
      Rt.onCommitFiberUnmount(ot, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        At || Zi(n, t);
      case 6:
        var s = Nt, o = pn;
        Nt = null, ei(e, t, n), Nt = s, pn = o, Nt !== null && (pn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
        break;
      case 18:
        Nt !== null && (pn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? cl(e.parentNode, n) : e.nodeType === 1 && cl(e, n), ws(e)) : cl(Nt, n.stateNode));
        break;
      case 4:
        s = Nt, o = pn, Nt = n.stateNode.containerInfo, pn = !0, ei(e, t, n), Nt = s, pn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!At && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var u = o, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ql(n, t, f), o = o.next;
          } while (o !== s);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!At && (Zi(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (y) {
          dt(n, t, y);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (At = (s = At) || n.memoizedState !== null, ei(e, t, n), At = s) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zm()), t.forEach(function(s) {
        var o = Jm.bind(null, e, s);
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
        ad(u, f, o), Nt = null, pn = !1;
        var N = o.alternate;
        N !== null && (N.return = null), o.return = null;
      } catch (F) {
        dt(o, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) od(t, e), t = t.sibling;
  }
  function od(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(t, e), En(e), s & 4) {
          try {
            Hs(3, e, e.return), ta(3, e);
          } catch (ye) {
            dt(e, e.return, ye);
          }
          try {
            Hs(5, e, e.return);
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 1:
        vn(t, e), En(e), s & 512 && n !== null && Zi(n, n.return);
        break;
      case 5:
        if (vn(t, e), En(e), s & 512 && n !== null && Zi(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Gt(o, "");
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        if (s & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, y = e.type, N = e.updateQueue;
          if (e.updateQueue = null, N !== null) try {
            y === "input" && u.type === "radio" && u.name != null && Te(o, u), De(y, f);
            var F = De(y, u);
            for (f = 0; f < N.length; f += 2) {
              var X = N[f], q = N[f + 1];
              X === "style" ? on(o, q) : X === "dangerouslySetInnerHTML" ? en(o, q) : X === "children" ? Gt(o, q) : U(o, X, q, F);
            }
            switch (y) {
              case "input":
                $(o, u);
                break;
              case "textarea":
                ze(o, u);
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
            o[Rs] = u;
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
          ws(t.containerInfo);
        } catch (ye) {
          dt(e, e.return, ye);
        }
        break;
      case 4:
        vn(t, e), En(e);
        break;
      case 13:
        vn(t, e), En(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (eo = lt())), s & 4 && ld(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (At = (F = At) || X, vn(t, e), At = F) : vn(t, e), En(e), s & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !X && (e.mode & 1) !== 0) for (me = e, X = e.child; X !== null; ) {
            for (q = me = X; me !== null; ) {
              switch (Q = me, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hs(4, Q, Q.return);
                  break;
                case 1:
                  Zi(Q, Q.return);
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
                  Zi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    dd(q);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, me = de) : dd(q);
            }
            X = X.sibling;
          }
          e: for (X = null, q = e; ; ) {
            if (q.tag === 5) {
              if (X === null) {
                X = q;
                try {
                  o = q.stateNode, F ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = q.stateNode, N = q.memoizedProps.style, f = N != null && N.hasOwnProperty("display") ? N.display : null, y.style.display = be("display", f));
                } catch (ye) {
                  dt(e, e.return, ye);
                }
              }
            } else if (q.tag === 6) {
              if (X === null) try {
                q.stateNode.nodeValue = F ? "" : q.memoizedProps;
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
        vn(t, e), En(e), s & 4 && ld(e);
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
            if (sd(n)) {
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
            var u = rd(e);
            Xl(e, u, o);
            break;
          case 3:
          case 4:
            var f = s.stateNode.containerInfo, y = rd(e);
            Jl(e, y, f);
            break;
          default:
            throw Error(l(161));
        }
      } catch (N) {
        dt(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e, t, n) {
    me = e, ud(e);
  }
  function ud(e, t, n) {
    for (var s = (e.mode & 1) !== 0; me !== null; ) {
      var o = me, u = o.child;
      if (o.tag === 22 && s) {
        var f = o.memoizedState !== null || ea;
        if (!f) {
          var y = o.alternate, N = y !== null && y.memoizedState !== null || At;
          y = ea;
          var F = At;
          if (ea = f, (At = N) && !F) for (me = o; me !== null; ) f = me, N = f.child, f.tag === 22 && f.memoizedState !== null ? hd(o) : N !== null ? (N.return = f, me = N) : hd(o);
          for (; u !== null; ) me = u, ud(u), u = u.sibling;
          me = o, ea = y, At = F;
        }
        cd(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, me = u) : cd(e);
    }
  }
  function cd(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              At || ta(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !At) if (n === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                s.componentDidUpdate(o, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && dc(t, u, s);
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
                dc(t, f, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var N = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && n.focus();
                    break;
                  case "img":
                    N.src && (n.src = N.src);
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
                  var X = F.memoizedState;
                  if (X !== null) {
                    var q = X.dehydrated;
                    q !== null && ws(q);
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
          At || t.flags & 512 && Yl(t);
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
  function dd(e) {
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
  function hd(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ta(4, t);
            } catch (N) {
              dt(t, n, N);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (N) {
                dt(t, o, N);
              }
            }
            var u = t.return;
            try {
              Yl(t);
            } catch (N) {
              dt(t, u, N);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Yl(t);
            } catch (N) {
              dt(t, f, N);
            }
        }
      } catch (N) {
        dt(t, t.return, N);
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
  var Km = Math.ceil, na = z.ReactCurrentDispatcher, Zl = z.ReactCurrentOwner, an = z.ReactCurrentBatchConfig, We = 0, xt = null, mt = null, Ct = 0, Xt = 0, qi = Yn(0), yt = 0, Gs = null, ji = 0, ia = 0, ql = 0, Ws = null, Kt = null, eo = 0, es = 1 / 0, Fn = null, sa = !1, to = null, ti = null, ra = !1, ni = null, aa = 0, Qs = 0, no = null, la = -1, oa = 0;
  function $t() {
    return (We & 6) !== 0 ? lt() : la !== -1 ? la : la = lt();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && Ct !== 0 ? Ct & -Ct : Cm.transition !== null ? (oa === 0 && (oa = ru()), oa) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mu(e.type)), e);
  }
  function kn(e, t, n, s) {
    if (50 < Qs) throw Qs = 0, no = null, Error(l(185));
    ys(e, n, s), ((We & 2) === 0 || e !== xt) && (e === xt && ((We & 2) === 0 && (ia |= n), yt === 4 && si(e, Ct)), Ut(e, s), n === 1 && We === 0 && (t.mode & 1) === 0 && (es = lt() + 500, $r && Xn()));
  }
  function Ut(e, t) {
    var n = e.callbackNode;
    Cf(e, t);
    var s = kr(e, e === xt ? Ct : 0);
    if (s === 0) n !== null && fr(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && fr(n), t === 1) e.tag === 0 ? Nm(md.bind(null, e)) : qu(md.bind(null, e)), jm(function() {
        (We & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (au(s)) {
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
        n = Sd(n, fd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function fd(e, t) {
    if (la = -1, oa = 0, (We & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (ts() && e.callbackNode !== n) return null;
    var s = kr(e, e === xt ? Ct : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = ua(e, s);
    else {
      t = s;
      var o = We;
      We |= 2;
      var u = vd();
      (xt !== e || Ct !== t) && (Fn = null, es = lt() + 500, wi(e, t));
      do
        try {
          Gm();
          break;
        } catch (y) {
          pd(e, y);
        }
      while (!0);
      xl(), na.current = u, We = o, mt !== null ? t = 0 : (xt = null, Ct = 0, t = yt);
    }
    if (t !== 0) {
      if (t === 2 && (o = $a(e), o !== 0 && (s = o, t = io(e, o))), t === 1) throw n = Gs, wi(e, 0), si(e, s), Ut(e, lt()), n;
      if (t === 6) si(e, s);
      else {
        if (o = e.current.alternate, (s & 30) === 0 && !Um(o) && (t = ua(e, s), t === 2 && (u = $a(e), u !== 0 && (s = u, t = io(e, u))), t === 1)) throw n = Gs, wi(e, 0), si(e, s), Ut(e, lt()), n;
        switch (e.finishedWork = o, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Ei(e, Kt, Fn);
            break;
          case 3:
            if (si(e, s), (s & 130023424) === s && (t = eo + 500 - lt(), 10 < t)) {
              if (kr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & s) !== s) {
                $t(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = ul(Ei.bind(null, e, Kt, Fn), t);
              break;
            }
            Ei(e, Kt, Fn);
            break;
          case 4:
            if (si(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, o = -1; 0 < s; ) {
              var f = 31 - Et(s);
              u = 1 << f, f = t[f], f > o && (o = f), s &= ~u;
            }
            if (s = o, s = lt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Km(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = ul(Ei.bind(null, e, Kt, Fn), s);
              break;
            }
            Ei(e, Kt, Fn);
            break;
          case 5:
            Ei(e, Kt, Fn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Ut(e, lt()), e.callbackNode === n ? fd.bind(null, e) : null;
  }
  function io(e, t) {
    var n = Ws;
    return e.current.memoizedState.isDehydrated && (wi(e, t).flags |= 256), e = ua(e, t), e !== 2 && (t = Kt, Kt = n, t !== null && so(t)), e;
  }
  function so(e) {
    Kt === null ? Kt = e : Kt.push.apply(Kt, e);
  }
  function Um(e) {
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
  function si(e, t) {
    for (t &= ~ql, t &= ~ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Et(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function md(e) {
    if ((We & 6) !== 0) throw Error(l(327));
    ts();
    var t = kr(e, 0);
    if ((t & 1) === 0) return Ut(e, lt()), null;
    var n = ua(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = $a(e);
      s !== 0 && (t = s, n = io(e, s));
    }
    if (n === 1) throw n = Gs, wi(e, 0), si(e, t), Ut(e, lt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ei(e, Kt, Fn), Ut(e, lt()), null;
  }
  function ro(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (es = lt() + 500, $r && Xn());
    }
  }
  function Si(e) {
    ni !== null && ni.tag === 0 && (We & 6) === 0 && ts();
    var t = We;
    We |= 1;
    var n = an.transition, s = qe;
    try {
      if (an.transition = null, qe = 1, e) return e();
    } finally {
      qe = s, an.transition = n, We = t, (We & 6) === 0 && Xn();
    }
  }
  function ao() {
    Xt = qi.current, st(qi);
  }
  function wi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xm(n)), mt !== null) for (n = mt.return; n !== null; ) {
      var s = n;
      switch (pl(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Rr();
          break;
        case 3:
          Ji(), st(zt), st(Mt), Ml();
          break;
        case 5:
          Cl(s);
          break;
        case 4:
          Ji();
          break;
        case 13:
          st(ut);
          break;
        case 19:
          st(ut);
          break;
        case 10:
          jl(s.type._context);
          break;
        case 22:
        case 23:
          ao();
      }
      n = n.return;
    }
    if (xt = e, mt = e = ri(e.current, null), Ct = Xt = t, yt = 0, Gs = null, ql = ia = ji = 0, Kt = Ws = null, yi !== null) {
      for (t = 0; t < yi.length; t++) if (n = yi[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var o = s.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = o, s.next = f;
        }
        n.pending = s;
      }
      yi = null;
    }
    return e;
  }
  function pd(e, t) {
    do {
      var n = mt;
      try {
        if (xl(), Gr.current = Jr, Wr) {
          for (var s = ct.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          Wr = !1;
        }
        if (xi = 0, gt = kt = ct = null, zs = !1, Bs = 0, Zl.current = null, n === null || n.return === null) {
          yt = 1, Gs = t, mt = null;
          break;
        }
        e: {
          var u = e, f = n.return, y = n, N = t;
          if (t = Ct, y.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var F = N, X = y, q = X.tag;
            if ((X.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Q = X.alternate;
              Q ? (X.updateQueue = Q.updateQueue, X.memoizedState = Q.memoizedState, X.lanes = Q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var de = zc(f);
            if (de !== null) {
              de.flags &= -257, Bc(de, f, y, u, t), de.mode & 1 && Dc(u, F, t), t = de, N = F;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(N), t.updateQueue = ye;
              } else ve.add(N);
              break e;
            } else {
              if ((t & 1) === 0) {
                Dc(u, F, t), lo();
                break e;
              }
              N = Error(l(426));
            }
          } else if (rt && y.mode & 1) {
            var ft = zc(f);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), Bc(ft, f, y, u, t), yl(Xi(N, y));
              break e;
            }
          }
          u = N = Xi(N, y), yt !== 4 && (yt = 2), Ws === null ? Ws = [u] : Ws.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = Fc(u, N, t);
                cc(u, P);
                break e;
              case 1:
                y = N;
                var T = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ti === null || !ti.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var ie = Ic(u, y, t);
                  cc(u, ie);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        yd(n);
      } catch (Se) {
        t = Se, mt === n && n !== null && (mt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vd() {
    var e = na.current;
    return na.current = Jr, e === null ? Jr : e;
  }
  function lo() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4), xt === null || (ji & 268435455) === 0 && (ia & 268435455) === 0 || si(xt, Ct);
  }
  function ua(e, t) {
    var n = We;
    We |= 2;
    var s = vd();
    (xt !== e || Ct !== t) && (Fn = null, wi(e, t));
    do
      try {
        Hm();
        break;
      } catch (o) {
        pd(e, o);
      }
    while (!0);
    if (xl(), We = n, na.current = s, mt !== null) throw Error(l(261));
    return xt = null, Ct = 0, yt;
  }
  function Hm() {
    for (; mt !== null; ) kd(mt);
  }
  function Gm() {
    for (; mt !== null && !mr(); ) kd(mt);
  }
  function kd(e) {
    var t = jd(e.alternate, e, Xt);
    e.memoizedProps = e.pendingProps, t === null ? yd(e) : mt = t, Zl.current = null;
  }
  function yd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Im(n, t, Xt), n !== null) {
          mt = n;
          return;
        }
      } else {
        if (n = Dm(n, t), n !== null) {
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
  function Ei(e, t, n) {
    var s = qe, o = an.transition;
    try {
      an.transition = null, qe = 1, Wm(e, t, n, s);
    } finally {
      an.transition = o, qe = s;
    }
    return null;
  }
  function Wm(e, t, n, s) {
    do
      ts();
    while (ni !== null);
    if ((We & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Tf(e, u), e === xt && (mt = xt = null, Ct = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ra || (ra = !0, Sd(fe, function() {
      return ts(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = an.transition, an.transition = null;
      var f = qe;
      qe = 1;
      var y = We;
      We |= 4, Zl.current = null, Bm(e, n), od(n, e), fm(ll), xr = !!al, ll = al = null, e.current = n, Vm(n), Oa(), We = y, qe = f, an.transition = u;
    } else e.current = n;
    if (ra && (ra = !1, ni = e, aa = o), u = e.pendingLanes, u === 0 && (ti = null), vs(n.stateNode), Ut(e, lt()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], s(o.value, { componentStack: o.stack, digest: o.digest });
    if (sa) throw sa = !1, e = to, to = null, e;
    return (aa & 1) !== 0 && e.tag !== 0 && ts(), u = e.pendingLanes, (u & 1) !== 0 ? e === no ? Qs++ : (Qs = 0, no = e) : Qs = 0, Xn(), null;
  }
  function ts() {
    if (ni !== null) {
      var e = au(aa), t = an.transition, n = qe;
      try {
        if (an.transition = null, qe = 16 > e ? 16 : e, ni === null) var s = !1;
        else {
          if (e = ni, ni = null, aa = 0, (We & 6) !== 0) throw Error(l(331));
          var o = We;
          for (We |= 4, me = e.current; me !== null; ) {
            var u = me, f = u.child;
            if ((me.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var N = 0; N < y.length; N++) {
                  var F = y[N];
                  for (me = F; me !== null; ) {
                    var X = me;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hs(8, X, u);
                    }
                    var q = X.child;
                    if (q !== null) q.return = X, me = q;
                    else for (; me !== null; ) {
                      X = me;
                      var Q = X.sibling, de = X.return;
                      if (id(X), X === F) {
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
                  Hs(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, me = P;
                break e;
              }
              me = u.return;
            }
          }
          var T = e.current;
          for (me = T; me !== null; ) {
            f = me;
            var R = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && R !== null) R.return = f, me = R;
            else e: for (f = T; me !== null; ) {
              if (y = me, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ta(9, y);
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
          if (We = o, Xn(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
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
  function gd(e, t, n) {
    t = Xi(n, t), t = Fc(e, t, 1), e = qn(e, t, 1), t = $t(), e !== null && (ys(e, 1, t), Ut(e, t));
  }
  function dt(e, t, n) {
    if (e.tag === 3) gd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        gd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ti === null || !ti.has(s))) {
          e = Xi(n, e), e = Ic(t, e, 1), t = qn(t, e, 1), e = $t(), t !== null && (ys(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = $t(), e.pingedLanes |= e.suspendedLanes & n, xt === e && (Ct & n) === n && (yt === 4 || yt === 3 && (Ct & 130023424) === Ct && 500 > lt() - eo ? wi(e, 0) : ql |= n), Ut(e, t);
  }
  function xd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = vr, vr <<= 1, (vr & 130023424) === 0 && (vr = 4194304)));
    var n = $t();
    e = Rn(e, t), e !== null && (ys(e, t, n), Ut(e, n));
  }
  function Ym(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), xd(e, n);
  }
  function Jm(e, t) {
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
    s !== null && s.delete(t), xd(e, n);
  }
  var jd;
  jd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || zt.current) Vt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Vt = !1, Fm(e, t, n);
      Vt = (e.flags & 131072) !== 0;
    }
    else Vt = !1, rt && (t.flags & 1048576) !== 0 && ec(t, Ir, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        qr(e, t), e = t.pendingProps;
        var o = Ki(t, Mt.current);
        Yi(t, n), o = Al(null, t, s, e, o, n);
        var u = Pl();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Bt(s) ? (u = !0, Or(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, El(t), o.updater = Xr, t.stateNode = o, o._reactInternals = t, Il(t, s, e, n), t = Vl(null, t, s, !0, u, n)) : (t.tag = 0, rt && u && ml(t), Ot(null, t, o, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (qr(e, t), e = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = Zm(s), e = mn(s, e), o) {
            case 0:
              t = Bl(null, t, s, e, n);
              break e;
            case 1:
              t = Wc(null, t, s, e, n);
              break e;
            case 11:
              t = Vc(null, t, s, e, n);
              break e;
            case 14:
              t = Kc(null, t, s, mn(s.type, e), n);
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
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Bl(e, t, s, o, n);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Wc(e, t, s, o, n);
      case 3:
        e: {
          if (Qc(t), e === null) throw Error(l(387));
          s = t.pendingProps, u = t.memoizedState, o = u.element, uc(e, t), Ur(t, s, null, n);
          var f = t.memoizedState;
          if (s = f.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = Xi(Error(l(423)), t), t = Yc(e, t, s, n, o);
            break e;
          } else if (s !== o) {
            o = Xi(Error(l(424)), t), t = Yc(e, t, s, n, o);
            break e;
          } else for (Jt = Qn(t.stateNode.containerInfo.firstChild), Yt = t, rt = !0, fn = null, n = lc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Gi(), s === o) {
              t = $n(e, t, n);
              break e;
            }
            Ot(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return hc(t), e === null && kl(t), s = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = o.children, ol(s, o) ? f = null : u !== null && ol(s, u) && (t.flags |= 32), Gc(e, t), Ot(e, t, f, n), t.child;
      case 6:
        return e === null && kl(t), null;
      case 13:
        return Jc(e, t, n);
      case 4:
        return Nl(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Wi(t, null, s, n) : Ot(e, t, s, n), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), Vc(e, t, s, o, n);
      case 7:
        return Ot(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ot(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ot(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, o = t.pendingProps, u = t.memoizedProps, f = o.value, tt(Br, s._currentValue), s._currentValue = f, u !== null) if (hn(u.value, f)) {
            if (u.children === o.children && !zt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var y = u.dependencies;
            if (y !== null) {
              f = u.child;
              for (var N = y.firstContext; N !== null; ) {
                if (N.context === s) {
                  if (u.tag === 1) {
                    N = On(-1, n & -n), N.tag = 2;
                    var F = u.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var X = F.pending;
                      X === null ? N.next = N : (N.next = X.next, X.next = N), F.pending = N;
                    }
                  }
                  u.lanes |= n, N = u.alternate, N !== null && (N.lanes |= n), Sl(
                    u.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                N = N.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(l(341));
              f.lanes |= n, y = f.alternate, y !== null && (y.lanes |= n), Sl(f, n, t), f = u.sibling;
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
        return o = t.type, s = t.pendingProps.children, Yi(t, n), o = sn(o), s = s(o), t.flags |= 1, Ot(e, t, s, n), t.child;
      case 14:
        return s = t.type, o = mn(s, t.pendingProps), o = mn(s.type, o), Kc(e, t, s, o, n);
      case 15:
        return Uc(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : mn(s, o), qr(e, t), t.tag = 1, Bt(s) ? (e = !0, Or(t)) : e = !1, Yi(t, n), Oc(t, s, o), Il(t, s, o, n), Vl(null, t, s, !0, e, n);
      case 19:
        return Zc(e, t, n);
      case 22:
        return Hc(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Sd(e, t) {
    return wt(e, t);
  }
  function Xm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, n, s) {
    return new Xm(e, t, n, s);
  }
  function oo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zm(e) {
    if (typeof e == "function") return oo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ne) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = ln(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ca(e, t, n, s, o, u) {
    var f = 2;
    if (s = e, typeof e == "function") oo(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case O:
        return Ni(n.children, o, u, t);
      case I:
        f = 8, o |= 8;
        break;
      case re:
        return e = ln(12, n, t, o | 2), e.elementType = re, e.lanes = u, e;
      case Y:
        return e = ln(13, n, t, o), e.elementType = Y, e.lanes = u, e;
      case he:
        return e = ln(19, n, t, o), e.elementType = he, e.lanes = u, e;
      case se:
        return da(n, o, u, t);
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
          case oe:
            f = 16, s = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = ln(f, n, t, o), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function Ni(e, t, n, s) {
    return e = ln(7, e, s, t), e.lanes = n, e;
  }
  function da(e, t, n, s) {
    return e = ln(22, e, s, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function uo(e, t, n) {
    return e = ln(6, e, null, t), e.lanes = n, e;
  }
  function co(e, t, n) {
    return t = ln(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function qm(e, t, n, s, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fa(0), this.expirationTimes = Fa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fa(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function ho(e, t, n, s, o, u, f, y, N) {
    return e = new qm(e, t, n, y, N), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = ln(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(u), e;
  }
  function ep(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function wd(e) {
    if (!e) return Jn;
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
      if (Bt(n)) return Xu(e, n, t);
    }
    return t;
  }
  function Ed(e, t, n, s, o, u, f, y, N) {
    return e = ho(n, s, !0, e, o, u, f, y, N), e.context = wd(null), n = e.current, s = $t(), o = ii(n), u = On(s, o), u.callback = t ?? null, qn(n, u, o), e.current.lanes = o, ys(e, o, s), Ut(e, s), e;
  }
  function ha(e, t, n, s) {
    var o = t.current, u = $t(), f = ii(o);
    return n = wd(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, f), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = qn(o, t, f), e !== null && (kn(e, o, f, u), Kr(e, o, f)), f;
  }
  function fa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Nd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fo(e, t) {
    Nd(e, t), (e = e.alternate) && Nd(e, t);
  }
  function tp() {
    return null;
  }
  var Cd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function mo(e) {
    this._internalRoot = e;
  }
  ma.prototype.render = mo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    ha(e, t, null, null);
  }, ma.prototype.unmount = mo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Si(function() {
        ha(null, e, null, null);
      }), t[bn] = null;
    }
  };
  function ma(e) {
    this._internalRoot = e;
  }
  ma.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && hu(e);
    }
  };
  function po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function pa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Td() {
  }
  function np(e, t, n, s, o) {
    if (o) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var F = fa(f);
          u.call(F);
        };
      }
      var f = Ed(t, s, e, 0, null, !1, !1, "", Td);
      return e._reactRootContainer = f, e[bn] = f.current, Ps(e.nodeType === 8 ? e.parentNode : e), Si(), f;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof s == "function") {
      var y = s;
      s = function() {
        var F = fa(N);
        y.call(F);
      };
    }
    var N = ho(e, 0, !1, null, null, !1, !1, "", Td);
    return e._reactRootContainer = N, e[bn] = N.current, Ps(e.nodeType === 8 ? e.parentNode : e), Si(function() {
      ha(t, N, n, s);
    }), N;
  }
  function va(e, t, n, s, o) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof o == "function") {
        var y = o;
        o = function() {
          var N = fa(f);
          y.call(N);
        };
      }
      ha(t, f, e, o);
    } else f = np(n, t, e, o, s);
    return fa(f);
  }
  lu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ks(t.pendingLanes);
          n !== 0 && (Ia(t, n | 1), Ut(t, lt()), (We & 6) === 0 && (es = lt() + 500, Xn()));
        }
        break;
      case 13:
        Si(function() {
          var s = Rn(e, 1);
          if (s !== null) {
            var o = $t();
            kn(s, e, 1, o);
          }
        }), fo(e, 1);
    }
  }, Da = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = $t();
        kn(t, e, 134217728, n);
      }
      fo(e, 134217728);
    }
  }, ou = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Rn(e, t);
      if (n !== null) {
        var s = $t();
        kn(n, e, t, s);
      }
      fo(e, t);
    }
  }, uu = function() {
    return qe;
  }, cu = function(e, t) {
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
              var o = Lr(s);
              if (!o) throw Error(l(90));
              ge(s), $(s, o);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && _e(e, !!n.multiple, t, !1);
    }
  }, or = ro, fs = Si;
  var ip = { usingClientEntryPoint: !1, Events: [Os, Bi, Lr, cn, Mn, ro] }, Ys = { findFiberByHostInstance: mi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sp = { bundleType: Ys.bundleType, version: Ys.version, rendererPackageName: Ys.rendererPackageName, rendererConfig: Ys.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = dr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ys.findFiberByHostInstance || tp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ka = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ka.isDisabled && ka.supportsFiber) try {
      ot = ka.inject(sp), Rt = ka;
    } catch {
    }
  }
  return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip, Ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!po(t)) throw Error(l(200));
    return ep(e, t, null, n);
  }, Ht.createRoot = function(e, t) {
    if (!po(e)) throw Error(l(299));
    var n = !1, s = "", o = Cd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ho(e, 1, !1, null, null, n, !1, s, o), e[bn] = t.current, Ps(e.nodeType === 8 ? e.parentNode : e), new mo(t);
  }, Ht.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = dr(t), e = e === null ? null : e.stateNode, e;
  }, Ht.flushSync = function(e) {
    return Si(e);
  }, Ht.hydrate = function(e, t, n) {
    if (!pa(t)) throw Error(l(200));
    return va(null, e, t, !0, n);
  }, Ht.hydrateRoot = function(e, t, n) {
    if (!po(e)) throw Error(l(405));
    var s = n != null && n.hydratedSources || null, o = !1, u = "", f = Cd;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Ed(t, null, e, 1, n ?? null, o, !1, u, f), e[bn] = t.current, Ps(e), s) for (e = 0; e < s.length; e++) n = s[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new ma(t);
  }, Ht.render = function(e, t, n) {
    if (!pa(t)) throw Error(l(200));
    return va(null, e, t, !1, n);
  }, Ht.unmountComponentAtNode = function(e) {
    if (!pa(e)) throw Error(l(40));
    return e._reactRootContainer ? (Si(function() {
      va(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bn] = null;
      });
    }), !0) : !1;
  }, Ht.unstable_batchedUpdates = ro, Ht.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!pa(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return va(e, t, n, !1, s);
  }, Ht.version = "18.3.1-next-f1338f8080-20240426", Ht;
}
var Od;
function fp() {
  if (Od) return yo.exports;
  Od = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), yo.exports = hp(), yo.exports;
}
var $d;
function mp() {
  if ($d) return ya;
  $d = 1;
  var r = fp();
  return ya.createRoot = r.createRoot, ya.hydrateRoot = r.hydrateRoot, ya;
}
var pp = mp();
const vp = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], x = ["e", "B", "G", "D", "A", "E"], M = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], k = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], w = {
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
  }, C = 26, _ = 72, S = 30, E = 54, B = 34, b = 11, U = (C + _) / 2, z = S + (c.length - 1) * B + 30, V = (K) => _ + K * E, D = (K) => K === 0 ? U : V(K) - E / 2, O = (K) => S + K * B;
  function I(K, ee, J) {
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
      strings: Ce.map(($) => $.map((le) => le + Te)),
      start: ge + Te,
      end: xe + Te
    };
  }
  function we(K, ee, J) {
    const pe = J[ee], Ce = (K + pe - d % 12 + 12) % 12, ge = d + Ce - pe, xe = c.map((je, Fe) => {
      const Te = ee + (c.length - 1 - Fe) * 3;
      return [Te, Te + 1, Te + 2].map(($) => {
        const le = Math.floor($ / J.length), ue = J[$ % J.length];
        return ge + ue + 12 * le - je;
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
      const xe = K.strings.map((Fe) => Fe.map((Te) => Te + ge).filter((Te) => Te >= 0 && Te <= ee)), je = xe.flat();
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
      const je = xe - 1, Fe = J === "3nps" ? we(K, je, ge) : Z(K, je, ee.base === k), Te = Ce === void 0 ? [Fe] : Ne(Fe, Ce);
      return { number: xe, positions: Te };
    });
  }
  function oe(K, ee) {
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
    const J = re(ee), pe = new Map(J.map(([ge, xe]) => [ge, I(K, ge, xe)])), Ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return J.flatMap(([ge, xe]) => Ce.flatMap(({ suffix: je, base: Fe }) => {
      const Te = Fe.map(([$]) => pe.get((ge + $) % 12));
      return Te.every(Boolean) ? {
        root: (K + ge) % 12,
        degree: Number(String(xe).replace(/\D/g, "")),
        name: Te[0] + je,
        notes: Te,
        base: Fe,
        add: []
      } : [];
    }));
  }
  function ae(K, ee) {
    const J = K.base.map(([ge]) => (K.root + ge) % 12), pe = c.map((ge) => {
      const xe = [];
      for (let je = 0; je <= ee; je++) {
        const Fe = (ge + je) % 12;
        J.includes(Fe) && xe.push({ fret: je, pitch: Fe });
      }
      return xe;
    }), Ce = [];
    for (let ge = 0; ge <= pe.length - 3; ge++)
      for (const xe of pe[ge])
        for (const je of pe[ge + 1])
          if (xe.pitch !== je.pitch)
            for (const Fe of pe[ge + 2]) {
              if (Fe.pitch === xe.pitch || Fe.pitch === je.pitch) continue;
              const Te = [xe.fret, je.fret, Fe.fret], $ = Math.min(...Te), le = Math.max(...Te);
              if (le - $ > 3) continue;
              const ue = Array(c.length).fill(null);
              ue.splice(ge, 3, ...Te), Ce.push({ strings: ue, low: $, high: le });
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
  }, j = [
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
    return j.forEach(({ string: Ce, openPC: ge, shapes: xe }) => {
      const je = xe[ee];
      if (!je) return;
      let Fe = (K - ge + 12) % 12;
      if (Fe + Math.min(...je.filter((le) => le !== null)) < 0 && (Fe += 12), pe && pe.fret <= Fe) return;
      const Te = je.map((le) => le === null ? null : Fe + le), $ = Fe > 0 && je.at(-1) === 0 ? { fret: Fe, from: Ce, to: je.length - 1 } : null;
      pe = { fret: Fe, frets: Te, barre: $ };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function ne(K, { frets: ee, barre: J }, pe) {
    const Te = [...c].reverse(), $ = ee.filter((ze) => ze > 0), ue = !$.length || Math.max(...$) <= 4 && (ee.includes(0) || Math.min(...$) === 1) ? 1 : Math.min(...$), Me = (ze) => 24 + ze * 14, _e = (ze) => 30 + (ze - ue) * 18 + 18 / 2, He = 102;
    let Oe = '<svg class="chord-svg" viewBox="0 0 108 ' + (He + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + ee.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Oe += '<line class="' + (ze === 0 && ue === 1 ? "nut" : "fret") + '" x1="' + Me(0) + '" y1="' + (30 + ze * 18) + '" x2="' + Me(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return ee.forEach((ze, Je) => {
      Oe += '<line class="string" x1="' + Me(Je) + '" y1="30" x2="' + Me(Je) + '" y2="' + He + '"/>';
    }), ue > 1 && (Oe += '<text class="fret-label" x="15" y="' + (_e(ue) + 4) + '">' + ue + "</text>"), J && (Oe += '<rect class="barre" x="' + (Me(J.from) - 6.5) + '" y="' + (_e(J.fret) - 6.5) + '" width="' + ((J.to - J.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((ze, Je) => {
      if (ze === null) {
        Oe += '<text class="marker" x="' + Me(Je) + '" y="22">×</text>';
        return;
      }
      const vt = (Te[Je] + ze) % 12 === K;
      if (ze === 0) {
        Oe += '<circle class="open' + (vt ? " root-open" : "") + '" cx="' + Me(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      J && ze === J.fret && Je >= J.from && Je <= J.to && !vt || (Oe += '<circle class="' + (vt ? "root" : "tone") + '" cx="' + Me(Je) + '" cy="' + _e(ze) + '" r="6.5"/>');
    }), Oe + "</svg>";
  }
  function ce(K, ee) {
    const J = new URLSearchParams(location.search), pe = r.indexOf(J.get("toonikka")), Ce = J.get("asteikko");
    return {
      rootPC: pe === -1 ? K : pe,
      scaleId: Object.hasOwn(w, Ce) ? Ce : ee
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
    barre: Fe = null,
    label: Te = r[K] + " " + ee.name,
    notes: $ = null,
    targets: le = !1,
    muteFret: ue = null
  } = {}) {
    const Me = V(J), _e = Me + 48, He = _e + 28, Oe = S - 14, ze = O(c.length - 1) + 14, Je = ze - Oe, vt = ge ? 680 : Math.ceil(He * 0.64), qt = pe.flatMap((Le) => Le.positions), It = {};
    ee.base.forEach(([Le, Re]) => It[(K + Le) % 12] = { deg: Re, added: !1 }), ee.add.forEach(([Le, Re]) => It[(K + Le) % 12] = { deg: Re, added: !0 });
    const en = c.map((Le, Re) => !!je && je[Re] === null), Gt = !!je && ue !== null, Pt = M.filter((Le, Re) => en[Re]).reverse(), gn = Te + ". " + J + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Pt.length ? " Soittamatta jäävät kielet: " + Pt.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + He + " " + z + '" style="min-width:' + vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (le ? "group" : "img") + '" aria-label="' + gn + '">';
    be += '<rect x="' + C + '" y="' + Oe + '" width="' + (_ - C) + '" height="' + Je + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + _ + '" y="' + Oe + '" width="' + (Me - _) + '" height="' + Je + '" fill="#231a12"/>', be += '<rect x="' + Me + '" y="' + Oe + '" width="' + (He - Me - 4) + '" height="' + Je + '" rx="8" fill="#32251e"/>';
    for (let Le = 1; Le <= J; Le++)
      be += '<line x1="' + V(Le) + '" y1="' + Oe + '" x2="' + V(Le) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (_ - 3) + '" y="' + Oe + '" width="6" height="' + Je + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (_e - 11) + '" y="' + (Oe + 3) + '" width="22" height="' + (Je - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (_e - 4) + '" y="' + (Oe + 7) + '" width="3" height="' + (Je - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const on = (Oe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Le) => Le <= J).forEach((Le) => be += '<circle cx="' + D(Le) + '" cy="' + on + '" r="5.5" fill="#7a6550"/>');
    for (let Le = 12; Le <= J; Le += 12)
      be += '<circle cx="' + D(Le) + '" cy="' + (on - B) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + D(Le) + '" cy="' + (on + B) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + U + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + _ + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + _e + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Le = 1; Le <= J; Le++)
      be += '<text x="' + D(Le) + '" y="' + (z - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Le + "</text>";
    if (pe.forEach(({ number: Le, positions: Re }) => {
      Re.forEach((De) => {
        const Ze = De.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ze + '" data-box="' + Le + '" aria-hidden="true">';
        const at = De.strings.find((St) => St.length), un = (D(at[0]) + D(at.at(-1))) / 2;
        be += '<text class="box-number" x="' + un + '" y="12">' + Le + "</text>", De.strings.forEach((St, Lt) => {
          if (!St.length) return;
          const Tn = D(St[0]) - 16, cn = D(St.at(-1)) - D(St[0]) + 32;
          be += '<rect class="box-band" x="' + Tn + '" y="' + (O(Lt) - 14) + '" width="' + cn + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), c.forEach((Le, Re) => {
      const De = 1 + Re * 0.45, Ze = O(Re), at = en[Re] && !Gt;
      at ? be += '<text class="muted-mark" x="' + U + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : en[Re] && ue === 0 || (be += '<line x1="' + (C + 4) + '" y1="' + Ze + '" x2="' + (_ - 4) + '" y2="' + Ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (at ? ' opacity=".35"' : "") + ">", be += '<line x1="' + _ + '" y1="' + Ze + '" x2="' + (_e + 5) + '" y2="' + Ze + '" stroke="#b9b9c4" stroke-width="' + De.toFixed(2) + '"/>', be += '<circle cx="' + (_e + 5) + '" cy="' + Ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + x[Re] + "</text>";
    }), je && Fe && Fe.fret >= 1 && Fe.fret <= J) {
      const Le = O(Fe.from), Re = O(Fe.to), De = Math.min(Le, Re) - 6, Ze = Math.max(Le, Re) + 6;
      be += '<rect class="barre-indicator" x="' + (D(Fe.fret) - 7) + '" y="' + De + '" width="14" height="' + (Ze - De) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return le && (be += '<g class="fret-targets">', c.forEach((Le, Re) => {
      for (let De = 0; De <= J; De++) {
        const Ze = De ? M[Re] + "-kieli, " + De + ". nauha" : "vapaa " + M[Re] + "-kieli", at = De ? E : _ - C - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + De + '" data-midi="' + (Le + De) + '" aria-label="' + Ze + '" x="' + (D(De) - at / 2) + '" y="' + (O(Re) - B / 2) + '" width="' + at + '" height="' + B + '" fill="transparent"/>';
      }
    }), be += "</g>"), ($ ?? []).forEach(({ string: Le, fret: Re, label: De, kind: Ze }) => {
      be += '<g class="octave-note octave-' + Ze + '">', be += '<circle cx="' + D(Re) + '" cy="' + O(Le) + '" r="' + b + '"/>', be += '<text x="' + D(Re) + '" y="' + (O(Le) + 3.5) + '" font-size="' + (De.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + De + "</text>", be += "</g>";
    }), je && (be += '<g class="grip-notes">'), ($ ? [] : c).forEach((Le, Re) => {
      for (let De = 0; De <= J; De++) {
        const Ze = (Le + De) % 12;
        if (!(Ze in It) || je && je[Re] !== De || Ce && !qt.some(({ strings: cn }) => {
          const Mn = cn[Re];
          return Mn.length > 0 && De >= Mn[0] && De <= Mn.at(-1);
        })) continue;
        const at = It[Ze], un = at.deg === "1", St = at.added ? "#f0a13c" : un ? "#4b2fd6" : "#6d4aff", Lt = at.added ? "#1a1430" : "#fff";
        at.deg === xe && (be += '<circle class="focus-note" cx="' + D(De) + '" cy="' + O(Re) + '" r="14.5"/>');
        const Tn = je ? ' data-string="' + (Re + 1) + '" data-fret="' + De + '" data-degree="' + at.deg + '"' : "";
        be += "<circle" + Tn + ' cx="' + D(De) + '" cy="' + O(Re) + '" r="' + b + '" fill="' + St + '" stroke="' + (un ? "#fff" : "#1a1430") + '" stroke-width="' + (un ? 2.5 : 1) + '"/>', be += '<text x="' + D(De) + '" y="' + (O(Re) + 3.5) + '" font-size="' + (at.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Lt + '" text-anchor="middle">' + at.deg + "</text>";
      }
    }), je && (be += "</g>"), Gt && en.forEach((Le, Re) => {
      if (!Le) return;
      const De = D(ue), Ze = O(Re);
      be += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + ue + '">', be += '<circle cx="' + De + '" cy="' + Ze + '" r="9" fill="' + (ue === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + De + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
    }), be += "</svg>", be;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: k,
    SCALES: w,
    noteName: I,
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
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = vp;
function jo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function kp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function yp(r) {
  const i = kp(r), l = Math.round(i), c = (i - l) * 100;
  return { midi: l, cents: c };
}
const Ue = globalThis.MusicMapFretboard, Qe = (r) => (r % 12 + 12) % 12, gp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], xp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (r, i = !1, l = !1) => (i ? xp : gp)[Qe(r)] + (l ? Math.floor(r / 12) - 1 : ""), ui = (r) => Ue.CHROM[Qe(r)], tr = (r, i, l) => Ue.noteName(Qe(r), i, l);
function jp(r, i) {
  const l = Math.floor(r / 12) - 1;
  return i[0] === "B" && Qe(r) < 2 ? l - 1 : i[0] === "C" && Qe(r) > 9 ? l + 1 : l;
}
const Zt = ["ohut E", "B", "G", "D", "A", "paksu E"], Zo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], bh = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Sp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], _i = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ke = (r, i) => ({ string: r, fret: i, midi: Ue.OPEN_PITCHES[r] + i });
function ds(r, i, l) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => Ke(c, i + h)));
}
const Xe = (r) => `${r.string}:${r.fret}`, Mi = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Ah = (r, i) => i === "maj" ? `${ui(r)}-duurisointu` : i === "min" ? `${ui(r)}-mollisointu` : `${ui(r)}7-sointu`, nr = [
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
], Fd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Ph(r, i) {
  const l = Fd[i] ?? Fd.E, c = Qe(r - l.root);
  return l.frets.flatMap((d, h) => d === null ? [] : [Ke(h, d + c)]);
}
const Sa = {
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
}, Pa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (r, i, l, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(i, Math.min(l, r)) : c, Nn = (r, i, l) => i.includes(r) ? r : l;
function Ma(r) {
  const i = { ...Sa };
  i.mode = Nn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], i.mode), i.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((l) => Number.isInteger(l) && l >= 0 && l <= 5))].sort((l, c) => l - c) : i.strings, i.strings.length || (i.strings = [...Sa.strings]), i.min = Math.round(li(r.min, 0, 24, i.min)), i.max = Math.round(li(r.max, i.min, 24, Math.max(i.min, i.max)));
  for (const l of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[l] == "boolean" && (i[l] = r[l]);
  return i.check = Nn(r.check, ["class", "pitch"], i.check), i.input = Nn(r.input, ["mic", "board"], i.input), i.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : i.rounds, i.root = Math.round(li(r.root, 0, 11, i.root)), i.scale = typeof r.scale == "string" && Object.hasOwn(Ue.SCALES, r.scale) ? r.scale : i.scale, i.box = Math.round(li(r.box, 0, 5, i.box)), i.order = Nn(r.order, ["random", "up", "down"], i.order), i.chord = Nn(r.chord, ["maj", "min", "dom7"], i.chord), i.chordTone = Nn(r.chordTone, ["build", "random", "1", "3", "5", "7"], i.chordTone), i.chord !== "dom7" && i.chordTone === "7" && (i.chordTone = "build"), i.shape = Nn(r.shape, ["C", "A", "G", "E", "D"], i.shape), i.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((l) => Number.isInteger(l) && l >= 1 && l <= 12))].sort((l, c) => l - c) : i.intervals, i.intervals.length || (i.intervals = [...Sa.intervals]), i.direction = Nn(r.direction, ["up", "down", "both"], i.direction), i.hints = Nn(r.hints, ["off", "always", "fade"], i.hints), i.activity = Nn(r.activity, ["play", "degree"], i.activity), i.minRms = li(r.minRms, 1e-3, 0.15, i.minRms), i.clarity = li(r.clarity, 0.85, 0.99, i.clarity), i.stability = li(r.stability, 120, 800, i.stability), i.cents = li(r.cents, 10, 45, i.cents), i.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", i;
}
function wp(r, i) {
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
  return Ma(c);
}
function Ep(r) {
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
const bi = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, In = (r) => r.mode === "scale" && r.order !== "random", Lh = (r) => ["note", "degree"].includes(bi(r)) ? "class" : In(r) ? "pitch" : r.check, ga = (r) => bi(r) === "mic", Id = "musiikin-kartta:harjoittelu", Rh = 3, Ro = () => ({ version: Rh, settings: { ...Sa }, stats: {}, recent: [], sessions: [] }), Oh = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, yn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function Np(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((i) => yn(r[i])) && r.correct <= r.attempts && (r.errors === void 0 || yn(r.errors)) && (r.ema === void 0 || yn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || yn(r.emaMs));
}
function Cp(r) {
  return !!r && typeof r.id == "string" && yn(r.count) && yn(r.first) && r.first <= r.count && yn(r.ms) && yn(r.at) && (r.solo === void 0 || yn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || yn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Dd(r) {
  if (!r) return Ro();
  const i = JSON.parse(r);
  if (!i || ![1, 2, 3].includes(i.version) || !i.stats || typeof i.stats != "object" || Array.isArray(i.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(i.stats).some((p) => !Np(p))) throw new Error("Virheellisiä tilastoja");
  if (i.recent !== void 0 && (!Array.isArray(i.recent) || i.recent.some((p) => !p || typeof p.id != "string" || !yn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (i.sessions !== void 0 && (!Array.isArray(i.sessions) || i.sessions.some((p) => !Cp(p)))) throw new Error("Virheellisiä kierroksia");
  const l = i.version < 3, c = Ma(i.settings ?? {}), d = l && i.settings?.hints !== "always" && i.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: Rh,
    settings: c,
    stats: Object.fromEntries(Object.entries(i.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (i.recent ?? []).slice(-500),
    sessions: (i.sessions ?? []).slice(-200)
  };
  return (d || i.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const zd = 2500, Tp = 8e3, Bd = 0.3, ir = (r) => r.ema ?? r.correct / r.attempts, sr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function qo(r) {
  if (!r?.attempts) return null;
  const i = Math.max(0, Math.min(1, 1 - (sr(r) - zd) / (Tp - zd)));
  return ir(r) * 0.65 + i * 0.35;
}
function Mp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - qo(r)) * 3;
}
class Vd {
  constructor(i) {
    this.storage = i;
    try {
      this.data = Dd(i?.getItem(Id) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Ro();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Id, JSON.stringify(this.data)), this.warning = "";
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
    const l = Oh(i), c = this.data.stats[l] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(i.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + i.errors,
      totalMs: c.totalMs + i.ms,
      lastSeen: i.at,
      ema: c.attempts ? ir(c) + Bd * (d - ir(c)) : d,
      emaMs: c.attempts ? sr(c) + Bd * (i.ms - sr(c)) : i.ms
    };
    Object.defineProperty(this.data.stats, l, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, i].slice(-500), this.save();
  }
  session(i) {
    this.data.sessions = [...this.data.sessions.filter((l) => l.id !== i.id), i].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(i) {
    if (!i.trim()) throw new Error("Tyhjä tiedosto");
    const l = Dd(i);
    this.data = l, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Ro(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const _p = 4e3, Kd = 12, bp = 1500;
function Ap(r, i) {
  const l = r.left + r.stickyLeft, c = r.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Kd : i.right > c && (d = i.right - c + Kd), d === 0) return null;
  const h = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + d));
  return Math.abs(h - r.scrollLeft) < 1 ? null : h;
}
function Pp(r, i) {
  return i.right <= r.left + r.stickyLeft || i.left >= r.right;
}
function $h(r, i, l, { stickySelector: c, enabled: d = !0, playback: h } = {}) {
  const p = A.useRef(0), m = A.useRef(!1), x = A.useRef(""), M = A.useRef(0), v = A.useRef(h);
  A.useEffect(() => {
    const k = r.current;
    if (!k || !d) return;
    const w = () => {
      p.current = Date.now() + _p;
    }, C = () => {
      m.current = !0, w();
    }, _ = () => {
      m.current && (m.current = !1, w());
    }, S = (E) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(E.key) && w();
    };
    return k.addEventListener("pointerdown", C, { passive: !0 }), k.addEventListener("touchstart", C, { passive: !0 }), k.addEventListener("wheel", w, { passive: !0 }), k.addEventListener("keydown", S), window.addEventListener("pointerup", _, { passive: !0 }), window.addEventListener("pointercancel", _, { passive: !0 }), window.addEventListener("touchend", _, { passive: !0 }), window.addEventListener("touchcancel", _, { passive: !0 }), () => {
      k.removeEventListener("pointerdown", C), k.removeEventListener("touchstart", C), k.removeEventListener("wheel", w), k.removeEventListener("keydown", S), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), window.removeEventListener("touchend", _), window.removeEventListener("touchcancel", _);
    };
  }, [r, d]), A.useLayoutEffect(() => {
    const k = h !== void 0 && !!h && h !== v.current;
    v.current = h, k && !m.current && (p.current = 0);
  }, [h]), A.useLayoutEffect(() => {
    h === void 0 && x.current === "" && l !== "" && Date.now() - M.current > bp && !m.current && (p.current = 0), x.current !== "" && l === "" && (M.current = Date.now()), x.current = l;
    const k = r.current;
    if (!k || !d || !l || m.current || Date.now() < p.current) return;
    const w = k.querySelector(i);
    if (!w) return;
    const C = k.getBoundingClientRect(), _ = w.getBoundingClientRect(), S = c ? k.querySelector(c) : null, E = S && getComputedStyle(S).position === "sticky" ? S.getBoundingClientRect().width : 0, B = {
      left: C.left,
      right: C.left + k.clientWidth,
      scrollLeft: k.scrollLeft,
      maxScroll: k.scrollWidth - k.clientWidth,
      stickyLeft: E
    }, b = Ap(B, _);
    if (b === null) return;
    const z = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Pp(B, _);
    typeof k.scrollTo == "function" ? k.scrollTo({ left: b, behavior: z ? "auto" : "smooth" }) : k.scrollLeft = b;
  }, [r, i, l, c, d, h]);
}
const Lp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Rp = ["e", "B", "G", "D", "A", "E"];
function Fh({ string: r }) {
  return /* @__PURE__ */ a.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ a.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ a.jsx("strong", { children: Rp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ a.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ a.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Ih = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Op = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Dh({ min: r, max: i }) {
  return /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
    /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - r + 1 }, (l, c) => {
      const d = r + c;
      return /* @__PURE__ */ a.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Lp.has(d) ? /* @__PURE__ */ a.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ci({ area: r, marks: i = [], mutedStrings: l = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta", follow: p = "hints", playback: m }) {
  const x = { "--cols": r.max - r.min + 1 }, { strings: M, min: v, max: k } = r, [w, C] = A.useState({ string: Math.min(...M), fret: v }), _ = A.useRef(null), S = new Map(i.map((V) => [Xe(V), V])), E = i.map((V) => `${Xe(V)}${V.kind}`).join(",");
  A.useEffect(() => {
    if (p !== "hints") return;
    const V = _.current, D = V?.querySelector(".target, .anchor");
    V && D && (V.scrollLeft += D.getBoundingClientRect().left - V.getBoundingClientRect().left - V.clientWidth / 2 + D.clientWidth / 2);
  }, [E, p]), A.useEffect(() => {
    p === "playing" && _.current && (_.current.scrollLeft = 0);
  }, [p, v, k]);
  const B = i.find((V) => V.kind === "playing");
  $h(_, ".playing", B ? Xe(B) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [b, U] = A.useState({ left: !1, right: !1 });
  A.useEffect(() => {
    const V = _.current;
    if (!V) return;
    const D = () => {
      const I = V.scrollLeft > 2, re = V.scrollLeft + V.clientWidth < V.scrollWidth - 2;
      U((Z) => Z.left === I && Z.right === re ? Z : { left: I, right: re });
    };
    D(), V.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(V), () => {
      V.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [E, v, k]);
  const z = M.includes(w.string) && w.fret >= v && w.fret <= k ? w : { string: Math.min(...M), fret: v };
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
      /* @__PURE__ */ a.jsx(Dh, { min: v, max: k }),
      /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((V, D) => /* @__PURE__ */ a.jsxs("tr", { className: M.includes(D) ? "" : "unused", style: Ih(D), children: [
        /* @__PURE__ */ a.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Zt[D]}${l.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ a.jsx(Fh, { string: D }),
          l.includes(D) && /* @__PURE__ */ a.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ds([D], v, k).map((O) => {
          const I = S.get(Xe(O)), re = `${Zt[D]}-kieli, ${_i(O.fret)}`;
          return /* @__PURE__ */ a.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${I ? I.kind === "answer" ? "target" : I.kind : ""}`, children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: z.string === D && z.fret === O.fret ? 0 : -1,
              onFocus: () => C(O),
              onKeyDown: (Z) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) return;
                Z.preventDefault();
                const we = [...M].sort((G, oe) => G - oe), Ne = we.indexOf(D), Y = Z.key === "ArrowUp" ? we[Math.max(0, Ne - 1)] : Z.key === "ArrowDown" ? we[Math.min(we.length - 1, Ne + 1)] : D, he = Z.key === "Home" ? v : Z.key === "End" ? k : Math.max(v, Math.min(k, O.fret + (Z.key === "ArrowRight" ? 1 : Z.key === "ArrowLeft" ? -1 : 0)));
                Z.currentTarget.closest("table")?.querySelector(`button[data-string="${Y}"][data-fret="${he}"]`)?.focus();
              },
              disabled: c || !M.includes(D),
              "aria-label": re + (I ? `, ${Op[I.kind]}${I.label ? " " + I.label : ""}` : ""),
              onClick: () => d?.(O),
              children: I ? /* @__PURE__ */ a.jsx("span", { className: "dot", children: I.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function $p({ area: r, stats: i, input: l, check: c, flats: d }) {
  const { strings: h, min: p, max: m } = r, x = `${l}:${c}:solo:notes:`;
  return /* @__PURE__ */ a.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ a.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ a.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ a.jsx(Dh, { min: p, max: m }),
    /* @__PURE__ */ a.jsx("tbody", { children: Ue.OPEN_PITCHES.map((M, v) => /* @__PURE__ */ a.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Ih(v), children: [
      /* @__PURE__ */ a.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Zt[v]}`, children: /* @__PURE__ */ a.jsx(Fh, { string: v }) }),
      ds([v], p, m).map((k) => {
        const w = Object.hasOwn(i, x + Xe(k)) ? i[x + Xe(k)] : void 0, C = qo(w), _ = C === null ? "unseen" : w.attempts < 3 ? "few" : C >= 0.8 ? "strong" : C >= 0.5 ? "growing" : "weak", S = `${Zt[v]}-kieli, ${_i(k.fret)}, ${Ie(k.midi, d)}`, E = w ? `${Math.round(C * 100)} %, ${w.correct}/${w.attempts} heti oikein, viime aikoina ${Math.round(ir(w) * 100)} % ja ${(sr(w) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ a.jsxs("td", { className: `${k.fret === 0 ? "open-fret " : ""}${_}`, title: `${S}: ${E}`, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: C === null ? "·" : w.attempts < 3 ? "?" : Math.round(C * 100) }),
          /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
            S,
            ": ",
            E
          ] })
        ] }, k.fret);
      })
    ] }, v)) })
  ] }) });
}
const Fp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", La = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : Mi[r.mode === "caged" ? "maj" : r.chord].tones, zh = (r) => Ue.fingeringBoxes(r.root, Ue.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Ai(r) {
  if (r.mode === "caged") {
    const i = Ph(r.root, r.shape).map((l) => l.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...i), max: Math.max(...i), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const i = zh(r);
    return { strings: r.strings, min: i.start, max: i.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Ip(r) {
  const i = Ai(r);
  return i.fixed ? { ...i, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, i.min - 1), max: Math.min(24, i.max + 1) } : i;
}
function ar(r) {
  const i = Ai(r), l = ds(i.strings, i.min, i.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return l.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(Qe(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(Ph(r.root, r.shape).map(Xe));
    return l.filter((p) => h.has(Xe(p)));
  }
  if (r.mode === "interval") return l;
  const c = l.filter((h) => La(r).some(([p]) => Qe(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = zh(r);
  return c.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Bh(r, i) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: i.flatMap((h) => i.filter((p) => p.midi === h.midi + (c === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Dp(r) {
  const i = La(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? i : i.filter(([, l]) => l.endsWith(r.chordTone));
}
function Oo(r) {
  const i = ar(r), l = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!i.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : l}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${l}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${l}`;
  const c = Dp(r).filter(([d]) => !i.some((h) => Qe(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${l}` : r.mode === "interval" && !Bh(r, i).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(r) && new Set(i.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${l}` : null;
}
function zp(r, i) {
  const l = [...new Map([...i].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? l.reverse() : l;
}
function Vh(r) {
  return In(r) ? new Set(ar(r).map((i) => i.midi)).size : r.rounds;
}
function Bp(r, i) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? i <= 3 ? 2 : i <= 6 ? 1 : 0 : 0;
}
function ns(r, i, l = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = i.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, l()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let p = 0; p < r.length; p++)
    if (h -= i[p], h < 0) return r[p];
  return r.at(-1);
}
const Ud = (r, i) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${i}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${i}:${r.activity}` : `scale:${r.root}:${r.scale}:${i}:${r.activity}`;
function Ci(r, i) {
  const l = r.filter((c) => !i(c));
  return l.length ? l : r;
}
function Vp(r, i, l = {}, c, d = Math.random) {
  const h = Oo(r);
  if (h) throw new Error(h);
  const p = Lh(r), m = bi(r), x = p === "pitch", M = (O) => r.weak ? Mp(l[Oh({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => ns(O, O.map(() => 1), d), k = ar(r), w = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const O = Ci(k, (Z) => !!c && Xe(Z) === Xe(c.position)), I = ns(O, O.map((Z) => M(`notes:${Xe(Z)}`)), d), re = Ie(I.midi, r.flats, x);
    return {
      ...w,
      position: I,
      midi: I.midi,
      name: re,
      item: `notes:${Xe(I)}`,
      prompt: `Etsi ${re} ${Zo[I.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const O = (we) => `ear-note:${Qe(we.midi)}${r.reference ? ":ref" : ""}`, I = Ci(k, (we) => !!c && Qe(we.midi) === Qe(c.midi)), re = ns(I, I.map((we) => M(O(we))), d), Z = r.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...w,
      position: re,
      midi: re.midi,
      name: Ie(re.midi, r.flats),
      item: O(re),
      choices: "note",
      reference: Z,
      sound: Z === void 0 ? [re.midi] : [Z, re.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const O = Ci(k, (re) => !!c && re.midi === c.midi), I = ns(O, O.map((re) => M(`repeat:${re.midi}`)), d);
    return {
      ...w,
      position: I,
      midi: I.midi,
      name: Ie(I.midi, r.flats, !0),
      item: `repeat:${I.midi}`,
      sound: [I.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const O = Ci(Bh(r, k), (Z) => c?.interval === Z.iv && c?.direction === Z.direction), I = ns(O, O.map((Z) => M(`interval:${Z.iv}:${Z.direction}`)), d), re = v(Ci(I.pairs, (Z) => c?.reference === Z.reference.midi));
    return {
      ...w,
      position: re.target,
      midi: re.target.midi,
      name: Ie(re.target.midi, r.flats, !0),
      item: `interval:${I.iv}:${I.direction}`,
      interval: I.iv,
      direction: I.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${I.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(re.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const C = La(r);
  let _, S = 0;
  if (In(r)) {
    const O = zp(r, k);
    S = O.length, _ = O[i % O.length];
  } else {
    const O = C.filter(([Z]) => k.some((we) => Qe(we.midi - r.root) === Z)), I = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [C[i % C.length]] : C.filter(([, Z]) => Z.endsWith(r.chordTone)) : Ci(O, ([Z]) => c?.interval === Z), [re] = ns(I, I.map(([Z]) => M(Ud(r, Z))), d);
    _ = v(Ci(k.filter((Z) => Qe(Z.midi - r.root) === re), (Z) => !!c && Xe(Z) === Xe(c.position)));
  }
  const E = Qe(_.midi - r.root), B = C.find(([O]) => O === E)[1], b = tr(r.root, E, B), U = x ? b + jp(_.midi, b) : b, z = r.mode === "scale" ? `${ui(r.root)}-${Ue.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${ui(r.root)}-duurisointu, ${r.shape}-muoto` : Ah(r.root, r.chord), V = r.mode !== "caged" && r.activity === "degree", D = V ? `${z}: mikä aste on ${b}?` : S ? `${z} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${i % S + 1}/${S}: ${B}. aste (${U}).` : `${z}: etsi ${B}. aste${x ? ` (${U})` : ""}.`;
  return {
    ...w,
    position: _,
    midi: _.midi,
    name: U,
    item: Ud(r, E),
    prompt: D,
    degree: B,
    interval: E,
    choices: V ? "degree" : "position"
  };
}
function $o(r, i, l) {
  return Number.isInteger(i) && (l === "class" ? Qe(r) === Qe(i) : r === i);
}
function Kh(r, i, l) {
  return $o(i.midi, l.midi, i.check) ? r.mode === "notes" ? l.string === i.position.string : Fp(r) ? ar(r).some((c) => Xe(c) === Xe(l)) : !0 : !1;
}
function Kp(r, i) {
  const l = Ai(r);
  return ds(l.strings, l.min, l.max).filter((c) => Kh(r, i, c));
}
const Tt = (r, i, l) => ({ ...r, label: i, kind: l }), Up = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Hp(r, i, l) {
  if (l <= 0) return { marks: [], text: "" };
  const c = l >= 2, d = Ai(r), h = ds(d.strings, d.min, d.max), p = Kp(r, i);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((B) => Tt(B, i.name, "answer")), text: `${i.name} on ${bh[i.position.string]}: ${_i(i.position.fret)}.` };
    const S = h.find((B) => B.string === i.position.string), E = Ie(S.midi, r.flats);
    return {
      marks: [Tt(S, E, "anchor")],
      text: `Apupiste: ${Sp[S.string]} ${S.fret === 0 ? "vapaa sävel" : S.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Tt(i.position, i.name, "answer")], text: `Sävel on ${i.name}.` } : { marks: [Tt(i.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Zt[i.position.string]}-kieli, ${_i(i.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((S) => Tt(S, Ie(S.midi, r.flats, i.check === "pitch"), "answer")), text: `Sävel on ${i.name}.` } : { marks: [], text: `Sävel löytyy ${Zo[i.position.string]}.` };
  if (r.mode === "interval") {
    const S = Ie(i.reference, r.flats, !0), E = h.filter((B) => B.midi === i.reference).map((B) => Tt(B, S, "anchor"));
    return c ? {
      marks: [...E, ...p.map((B) => Tt(B, Ie(B.midi, r.flats, !0), "answer"))],
      text: `${Up(nr[i.interval])} ${i.direction === "up" ? "ylöspäin" : "alaspäin"}: ${S} → ${i.name}.`
    } : { marks: E, text: `Alkusävel ${S} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${i.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = ar(r), x = La(r), M = (S) => x.find(([E]) => E === Qe(S.midi - r.root))?.[1] ?? "", v = tr(r.root, i.interval, i.degree), k = m.filter((S) => Qe(S.midi - r.root) === 0), w = (S) => p.some((E) => Xe(E) === Xe(S)), C = `${i.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((S) => Tt(S, M(S), w(S) ? "answer" : "shape")), text: C } : { marks: m.map((S) => Tt(S, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${i.degree}. aste?` };
  const _ = r.mode === "scale" ? "asteikon" : "soinnun";
  if (i.choices === "degree") {
    const S = m.filter((E) => Qe(E.midi) === Qe(i.midi));
    return c ? { marks: [...(i.interval === 0 ? [] : k).map((E) => Tt(E, "1", "anchor")), ...S.map((E) => Tt(E, i.degree, "answer"))], text: `${v} on ${i.degree}. aste.` } : i.interval === 0 ? { marks: S.map((E) => Tt(E, v, "shape")), text: `Katso ${_} nimeä: mikä on sen perussävel?` } : {
      marks: [...k.map((E) => Tt(E, "1", "anchor")), ...S.map((E) => Tt(E, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...k.filter((S) => !w(S)).map((S) => Tt(S, "1", "anchor")), ...p.map((S) => Tt(S, i.degree, "answer"))], text: C } : i.interval === 0 ? { marks: [], text: `1. aste on ${_} perussävel ${ui(r.root)}.` } : { marks: k.map((S) => Tt(S, "1", "anchor")), text: `Apupiste: perussävelet (1). ${i.degree}. aste on ${i.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Gp {
  constructor(i, l, c, d = () => performance.now(), h = Math.random) {
    this.settings = i, this.stats = l, this.record = c, this.now = d, this.random = h, this.total = Vh(i);
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
      this.question = Vp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Bp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(l === "degree" ? i === h.interval : l === "note" ? $o(h.midi, i, "class") : l === "board" ? !!c && Kh(this.settings, h, c) : $o(h.midi, i, h.check)))
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
function Fo(r) {
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
const Io = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], rs = (r) => Io.find(([i]) => i === r)?.[1] ?? r;
function Ft({ label: r, children: i }) {
  const l = A.useId();
  return /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: l, children: r }),
    A.cloneElement(i, { id: l })
  ] });
}
function Hd({ legend: r, name: i, value: l, options: c, onChange: d, disabled: h }) {
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
function Gd(r) {
  const i = Ai(r), l = Vh(r), c = bi(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = i.fixed === "shape" ? `${r.shape}-muoto, nauhat ${i.min}–${i.max}` : i.fixed === "box" ? `boksi ${r.box}, nauhat ${i.min}–${i.max}` : `nauhat ${i.min}–${i.max}`, p = i.strings.length === 6 ? "" : ` · kielet ${i.strings.map((m) => m + 1).join(", ")}`;
  return `${Pa[r.hints].title} · ${d} · ${In(r) ? `yksi läpisoitto, ${l} säveltä` : l ? `${l} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Wd({ s: r, change: i, locked: l, problem: c }) {
  const d = A.useId(), h = (v, k) => i({ ...r, [v]: k }), p = Ai(r), m = bi(r) === "note" || bi(r) === "degree", x = ["scale", "chord", "caged"].includes(r.mode), M = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ a.jsxs("fieldset", { className: "settings", disabled: l, children: [
    /* @__PURE__ */ a.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Ft, { label: "Harjoitus", children: /* @__PURE__ */ a.jsx("select", { value: r.mode, onChange: (v) => h("mode", v.target.value), children: Io.map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k }, v)) }) }),
      /* @__PURE__ */ a.jsx("p", { className: "mode-note", children: Io.find(([v]) => v === r.mode)[2] })
    ] }),
    x && /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ a.jsx(Ft, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ a.jsx("select", { value: r.root, onChange: (v) => h("root", Number(v.target.value)), children: Ue.CHROM.map((v, k) => /* @__PURE__ */ a.jsx("option", { value: k, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Ft, { label: "Asteikko", children: /* @__PURE__ */ a.jsx("select", { value: r.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ue.SCALES).map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Ft, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ a.jsxs("select", { value: r.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ a.jsx(Ft, { label: "Sävelten järjestys", children: /* @__PURE__ */ a.jsxs("select", { value: r.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ a.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ a.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Ft, { label: "Sointutyyppi", children: /* @__PURE__ */ a.jsx("select", { value: r.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Mi).map(([v, k]) => /* @__PURE__ */ a.jsx("option", { value: v, children: k.name }, v)) }) }),
        /* @__PURE__ */ a.jsx(Ft, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ a.jsxs("select", { value: r.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      r.mode === "caged" ? /* @__PURE__ */ a.jsx(Ft, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ a.jsx("select", { value: r.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ a.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ a.jsx(Ft, { label: "Tehtävä", children: /* @__PURE__ */ a.jsxs("select", { value: r.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ a.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ a.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (k) => h("intervals", k.target.checked ? [...r.intervals, v] : r.intervals.filter((w) => w !== v)) }),
        nr[v]
      ] }, v)) }),
      /* @__PURE__ */ a.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ a.jsx(Ft, { label: "Intervallin suunta", children: /* @__PURE__ */ a.jsxs("select", { value: r.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ a.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ a.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Hd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Pa[v] }))
      }
    ),
    m ? /* @__PURE__ */ a.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ a.jsx(Hd, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ a.jsx(Ft, { label: "Kierroksen pituus", children: /* @__PURE__ */ a.jsxs("select", { value: r.rounds, disabled: In(r), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ a.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ a.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ a.jsx(Ft, { label: "Vastausten tarkistus", children: /* @__PURE__ */ a.jsxs("select", { value: In(r) ? "pitch" : r.check, disabled: In(r), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ a.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Ft, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ a.jsxs("select", { value: String(r.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ a.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ a.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(r) && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
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
          /* @__PURE__ */ a.jsx(Ft, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ a.jsx(Ft, { label: "Viimeinen nauha", children: /* @__PURE__ */ a.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ a.jsx("div", { className: "check-row", children: Zt.map((v, k) => /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: r.strings.includes(k), onChange: (w) => h("strings", w.target.checked ? [...r.strings, k] : r.strings.filter((C) => C !== k)) }),
          k + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "check-row", children: [
        M && /* @__PURE__ */ a.jsxs("label", { children: [
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
const Qd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Wp(r) {
  return r && Object.hasOwn(Qd, r) ? Qd[r] : null;
}
const Qp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Yp({ onSelect: r }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ a.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ a.jsx("div", { className: "learning-grid", children: Qp.map((i) => /* @__PURE__ */ a.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(i.id), children: [
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
function Jp({ onBack: r, onNotes: i }) {
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
const Xp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Do = 100, Uh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function eu(r) {
  if (r === null || r.trim() === "") return Do;
  const i = Number(r);
  return Number.isFinite(i) ? Math.round(Math.min(100, Math.max(0, i))) : Do;
}
function Zp() {
  try {
    return eu(localStorage.getItem(Uh));
  } catch {
    return Do;
  }
}
function qp(r) {
  try {
    localStorage.setItem(Uh, String(eu(String(r))));
  } catch {
  }
}
function So(r, i, l = !0) {
  return l ? Xp[r] * eu(String(i)) / 100 : 0;
}
function Hh(r = () => new Audio()) {
  try {
    const i = r();
    return i.volume = 0.5, Math.abs(i.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Gh = 0.12, ev = 2e3, Wh = 3, Yd = 1e-3, tv = Gh, Jd = 1500, nv = 4e3;
function Qh(r) {
  return r.readyState >= Wh && !r.seeking;
}
function Yh(r) {
  return r.every(Qh);
}
function iv(r) {
  let i = 0;
  for (const l of r)
    if (!Qh(l))
      try {
        const c = l.play();
        l.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), i++;
      } catch {
      }
  return i;
}
function sv(r, i, l, c = {
  set: (d, h) => setTimeout(d, h),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const h = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, m = null;
    const x = c.set(() => M("aikakatkaisu"), i);
    function M(w) {
      if (!p) {
        p = !0, c.clear(x), m !== null && c.clear(m);
        for (const C of r) for (const _ of h) C.removeEventListener(_, v);
        d(w);
      }
    }
    function v() {
      l() ? M("ohitettu") : r.some((w) => w.error) ? M("virhe") : Yh(r) && M("valmis");
    }
    const k = () => {
      v(), p || (m = c.set(k, 50));
    };
    for (const w of r) for (const C of h) w.addEventListener(C, v);
    v(), p || (m = c.set(k, 50));
  });
}
function rv(r, i = !1) {
  return i ? !0 : r.atLoopBoundary || r.drift <= Gh || r.seeking || r.readyState < Wh ? !1 : r.msSinceLastFix >= ev;
}
const av = 1.5, lv = 0.4, ov = 0.5;
let zo = null, uv = null;
function cv(r) {
  return zo !== null ? zo : (uv ??= Hh()) ? 0 : lv;
}
class Jh {
  constructor(i = cv()) {
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
  align(i, l, c = !1, d = performance.now(), h = Yd) {
    if (l.readyState < 1 || i.readyState < 1 || !c && (l.paused || i.paused) || !c && d < this.holdUntil) return !1;
    const p = l.currentTime - i.currentTime, m = Math.abs(p), x = i.loop && Number.isFinite(i.duration) && Math.abs(m - i.duration) < 0.35, M = this.lastFix.get(l);
    if (!rv({
      drift: m,
      atLoopBoundary: x,
      seeking: l.seeking,
      readyState: l.readyState,
      msSinceLastFix: M === void 0 ? 1 / 0 : d - M
    }, c)) return !1;
    const v = !i.paused;
    !c && v && M !== void 0 && (this.latency = Math.min(av, Math.max(0, this.latency - ov * p)), zo = this.latency);
    let k = i.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(l.duration) && (k = Math.min(k, Math.max(0, l.duration - 0.05))), Math.abs(l.currentTime - k) < Math.max(h, Yd)) return !1;
    try {
      l.currentTime = k;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(l, d) : this.lastFix.delete(l), !0;
  }
}
function dv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function hv(r = dv(), i = () => Hh()) {
  return r ? "webaudio" : i() ? "element" : "webaudio";
}
function fv(r = globalThis.navigator) {
  const i = r?.audioSession;
  i && i.type !== "playback" && (i.type = "playback");
}
const mv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class pv {
  constructor(i = mv, l = globalThis.navigator) {
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
        fv(this.nav);
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
const vv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", kv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Xd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const i = Math.floor(r);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function Xh() {
  const r = A.useRef(null), i = A.useRef(null), [l, c] = A.useState(!1), [d, h] = A.useState(!1), [p, m] = A.useState(!1), [x, M] = A.useState(0), [v, k] = A.useState(0), [w, C] = A.useState(""), _ = A.useRef(new Jh());
  function S(z = !1) {
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
      C(""), V.muted = !d, V.volume = 0.55, z.volume = 0.75, S(!0);
      try {
        await Promise.all(d ? [z.play(), V.play()] : [z.play()]), S(), c(!0);
      } catch {
        E(), C("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
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
      M(z);
    }
  }
  function U(z) {
    const V = r.current, D = i.current;
    if (h(z), !!D) {
      if (D.muted = !z, !z) {
        D.pause();
        return;
      }
      !V || !l || (S(!0), D.play().catch(() => C("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
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
        Xd(x),
        " / ",
        Xd(v)
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: vv,
        loop: p,
        onLoadedMetadata: (z) => k(z.currentTarget.duration),
        onTimeUpdate: (z) => {
          M(z.currentTarget.currentTime), z.currentTarget.paused || S();
        },
        onEnded: () => {
          r.current?.loop || (i.current?.pause(), c(!1), M(v));
        },
        onPause: () => {
          i.current?.pause(), c(!1);
        },
        onError: () => C("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ a.jsx(
      "audio",
      {
        ref: i,
        preload: "metadata",
        src: kv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const z = r.current, V = i.current;
          z?.duration && V?.duration && Math.abs(z.duration - V.duration) > 0.15 && C("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => C("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    w && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: w }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const yv = 4e3;
class Zd extends Error {
  name = "MicSetupError";
}
async function gv(r, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Zd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let M;
      await Promise.race([
        d.resume(),
        new Promise((v, k) => {
          M = setTimeout(() => k(new Zd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), yv);
        })
      ]).finally(() => clearTimeout(M));
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
        c.getTracks().forEach((M) => M.stop()), h.disconnect(), i || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), i || await d?.close().catch(() => {
    }), h;
  }
}
async function xv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var wo, qd;
function jv() {
  if (qd) return wo;
  qd = 1;
  function r(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var l = new Array(this.size * 2), c = 0; c < l.length; c += 2) {
      const M = Math.PI * c / this.size;
      l[c] = Math.cos(M), l[c + 1] = -Math.sin(M);
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
  return wo = r, r.prototype.fromComplexArray = function(l, c) {
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
    var l = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, x, M = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const E = M[x];
        this._singleTransform2(m, E, h);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const E = M[x];
        this._singleTransform4(m, E, h);
      }
    var v = this._inv ? -1 : 1, k = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var w = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var C = m + w, _ = m, S = 0; _ < C; _ += 2, S += h) {
          const E = _, B = E + w, b = B + w, U = b + w, z = l[E], V = l[E + 1], D = l[B], O = l[B + 1], I = l[b], re = l[b + 1], Z = l[U], we = l[U + 1], Ne = z, Y = V, he = k[S], G = v * k[S + 1], oe = D * he - O * G, se = D * G + O * he, W = k[2 * S], ae = v * k[2 * S + 1], te = I * W - re * ae, j = I * ae + re * W, g = k[3 * S], ne = v * k[3 * S + 1], ce = Z * g - we * ne, Ee = Z * ne + we * g, H = Ne + te, K = Y + j, ee = Ne - te, J = Y - j, pe = oe + ce, Ce = se + Ee, ge = v * (oe - ce), xe = v * (se - Ee), je = H + pe, Fe = K + Ce, Te = H - pe, $ = K - Ce, le = ee + xe, ue = J - ge, Me = ee - xe, _e = J + ge;
          l[E] = je, l[E + 1] = Fe, l[B] = le, l[B + 1] = ue, l[b] = Te, l[b + 1] = $, l[U] = Me, l[U + 1] = _e;
        }
    }
  }, r.prototype._singleTransform2 = function(l, c, d) {
    const h = this._out, p = this._data, m = p[c], x = p[c + 1], M = p[c + d], v = p[c + d + 1], k = m + M, w = x + v, C = m - M, _ = x - v;
    h[l] = k, h[l + 1] = w, h[l + 2] = C, h[l + 3] = _;
  }, r.prototype._singleTransform4 = function(l, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, M = d * 3, v = p[c], k = p[c + 1], w = p[c + d], C = p[c + d + 1], _ = p[c + x], S = p[c + x + 1], E = p[c + M], B = p[c + M + 1], b = v + _, U = k + S, z = v - _, V = k - S, D = w + E, O = C + B, I = m * (w - E), re = m * (C - B), Z = b + D, we = U + O, Ne = z + re, Y = V - I, he = b - D, G = U - O, oe = z - re, se = V + I;
    h[l] = Z, h[l + 1] = we, h[l + 2] = Ne, h[l + 3] = Y, h[l + 4] = he, h[l + 5] = G, h[l + 6] = oe, h[l + 7] = se;
  }, r.prototype._realTransform4 = function() {
    var l = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, x, M = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Le = M[x];
        this._singleRealTransform2(m, Le >>> 1, h >>> 1);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Le = M[x];
        this._singleRealTransform4(m, Le >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, k = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var w = p >>> 1, C = w >>> 1, _ = C >>> 1;
      for (m = 0; m < c; m += p)
        for (var S = 0, E = 0; S <= _; S += 2, E += h) {
          var B = m + S, b = B + C, U = b + C, z = U + C, V = l[B], D = l[B + 1], O = l[b], I = l[b + 1], re = l[U], Z = l[U + 1], we = l[z], Ne = l[z + 1], Y = V, he = D, G = k[E], oe = v * k[E + 1], se = O * G - I * oe, W = O * oe + I * G, ae = k[2 * E], te = v * k[2 * E + 1], j = re * ae - Z * te, g = re * te + Z * ae, ne = k[3 * E], ce = v * k[3 * E + 1], Ee = we * ne - Ne * ce, H = we * ce + Ne * ne, K = Y + j, ee = he + g, J = Y - j, pe = he - g, Ce = se + Ee, ge = W + H, xe = v * (se - Ee), je = v * (W - H), Fe = K + Ce, Te = ee + ge, $ = J + je, le = pe - xe;
          if (l[B] = Fe, l[B + 1] = Te, l[b] = $, l[b + 1] = le, S === 0) {
            var ue = K - Ce, Me = ee - ge;
            l[U] = ue, l[U + 1] = Me;
            continue;
          }
          if (S !== _) {
            var _e = J, He = -pe, Oe = K, ze = -ee, Je = -v * je, vt = -v * xe, qt = -v * ge, It = -v * Ce, en = _e + Je, Gt = He + vt, Pt = Oe + It, gn = ze - qt, be = m + C - S, on = m + w - S;
            l[be] = en, l[be + 1] = Gt, l[on] = Pt, l[on + 1] = gn;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(l, c, d) {
    const h = this._out, p = this._data, m = p[c], x = p[c + d], M = m + x, v = m - x;
    h[l] = M, h[l + 1] = 0, h[l + 2] = v, h[l + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(l, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, M = d * 3, v = p[c], k = p[c + d], w = p[c + x], C = p[c + M], _ = v + w, S = v - w, E = k + C, B = m * (k - C), b = _ + E, U = S, z = -B, V = _ - E, D = S, O = B;
    h[l] = b, h[l + 1] = 0, h[l + 2] = U, h[l + 3] = z, h[l + 4] = V, h[l + 5] = 0, h[l + 6] = D, h[l + 7] = O;
  }, wo;
}
var Sv = jv();
const wv = /* @__PURE__ */ ap(Sv);
class Zs {
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
    return new Zs(
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
    return new Zs(
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
    return new Zs(i, (l) => Array(l));
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
    this._inputLength = i, this._fft = new wv(Cv(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Ev(r) {
  const i = [];
  let l = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (l = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && r[h] > c && (c = r[h], d = h);
  return i;
}
function Nv(r, i) {
  const [l, c, d] = [r - 1, r, r + 1], [h, p, m] = [i[l], i[c], i[d]], x = h / 2 - p + m / 2, M = -(h / 2) * (c + d) + p * (l + d) - m / 2 * (l + c), v = h * c * d / 2 - p * l * d + m * l * c / 2, k = -M / (2 * x), w = x * k * k + M * k + v;
  return [k, w];
}
class qs {
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
    return new qs(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new qs(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new qs(i, (l) => Array(l));
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
    this._autocorrelator = new Zs(i, l), this._nsdfBuffer = l(i);
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
    const c = Ev(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((x) => this._nsdfBuffer[x])), h = c.find(
      (x) => this._nsdfBuffer[x] >= this._clarityThreshold * d
    ), [p, m] = Nv(
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
function Cv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function Tv(r) {
  const i = r * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Mv = 0.05, _v = 1.5;
class bv {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const c = i.context, d = Tv(c.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : i.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Mv))), this.detector = qs.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Av();
  onset = new Pv();
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
      onStableNote: M
    } = this.opts, v = this.analysers.map((O, I) => (O.getFloatTimeDomainData(this.buffers[I]), eh(this.buffers[I], this.buffers[I].length - this.shortLength))), k = v.indexOf(Math.max(...v));
    k !== this.channel && v[k] > (v[this.channel] ?? 0) * _v && (this.channel = k);
    const w = this.buffers[this.channel], C = v[this.channel], _ = Lv(w, w.length - this.shortLength), S = { rms: C, peak: _, channel: this.channel, levels: v }, E = C < c, B = this.onset.feed(C, i, c);
    if (E && eh(w, 0) < c) {
      this.gate.feed(null, i, d, !0, !1), x?.({ ...S, status: "silent" });
      return;
    }
    const [b, U] = this.detector.findPitch(w, this.mic.context.sampleRate);
    if (!isFinite(b) || U < l) {
      this.gate.feed(null, i, d, E, B), x?.({ ...S, status: E ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (b < p || b > m) {
      this.gate.feed(null, i, d, E, B), x?.({ ...S, status: "out-of-range", frequency: b, clarity: U });
      return;
    }
    const { midi: z, cents: V } = yp(b);
    if (Math.abs(V) > h) {
      this.gate.feed(null, i, d, E, B), x?.({ ...S, status: "off-pitch", frequency: b, clarity: U, midi: z, cents: V });
      return;
    }
    x?.({ ...S, status: "pitch", frequency: b, clarity: U, midi: z, cents: V });
    const D = this.gate.feed(z, i, d, E, B);
    D !== null && M?.({ midi: z, frequency: b, cents: V, clarity: U, timestamp: i, heldMs: D.heldMs });
  }
}
class Av {
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
class Pv {
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
function eh(r, i = 0) {
  const l = Math.max(0, i);
  let c = 0;
  for (let d = l; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - l));
}
function Lv(r, i = 0) {
  let l = 0;
  for (let c = Math.max(0, i); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > l && (l = d);
  }
  return l;
}
const cs = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let is;
function Zh() {
  return (!is || is.state === "closed") && (is = new AudioContext()), is;
}
function Rv() {
  const r = is;
  is = void 0, r?.close().catch(() => {
  });
}
const qh = (r) => r instanceof Error ? r.name : "";
function Ov(r) {
  const i = qh(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class $v {
  constructor(i = (l) => gv(l, Zh)) {
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
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(qh(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new bv(h, { ...l });
      const m = () => {
        this.mic === h && (this.stop(), c());
      }, x = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((M) => M.addEventListener("ended", m, { once: !0, signal: x.signal })), h.context.addEventListener?.("statechange", () => {
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
function ef(r, i) {
  return r !== "on" ? r : !i || i.status === "silent" ? "silent" : i.status === "pitch" ? "pitch" : i.status === "off-pitch" ? "untuned" : "noise";
}
const th = (r) => Math.max(0, Math.min(1, (cs(r) + 60) / 60));
function Fv(r) {
  const i = [...r].sort((c, d) => c - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function Eo(r) {
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
function Ra(r) {
  const i = r instanceof Error ? r.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class lr {
  constructor(i = Zh) {
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
    if (await Eo(d), c !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const p = Array.from({ length: 12 }, (M, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return i.forEach((M, v) => {
      const k = d.createOscillator(), w = d.createGain(), C = d.currentTime + 0.05 + v * 0.8;
      m ? k.setPeriodicWave(m) : k.type = "triangle", k.frequency.value = jo(M), w.gain.setValueAtTime(0, C), w.gain.linearRampToValueAtTime(0.22, C + 0.012), w.gain.exponentialRampToValueAtTime(1e-3, C + 0.7), k.connect(w), w.connect(h), k.start(C), k.stop(C + 0.72), l && this.noteTimers.push(setTimeout(() => {
        c === this.token && l(v);
      }, 50 + v * 800));
    }), !await new Promise((M) => {
      this.settle = M, this.timer = setTimeout(() => M(!0), i.length * 800 + 350);
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
    if (await Eo(p), h !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, l)), x = p.createGain();
    x.connect(p.destination), this.master = x;
    const M = Array.from({ length: 12 }, (_, S) => 1 / (S + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...M.map(() => 0)]),
      new Float32Array([0, ...M])
    ), k = p.currentTime + 0.05;
    let w = 0;
    return i.forEach((_, S) => {
      if (!Number.isFinite(_.beat) || _.beat < 0 || !Number.isFinite(_.duration) || _.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const E = k + _.beat * m, B = _.duration * m, b = E + Math.max(0.08, B * 0.94), U = p.createOscillator(), z = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = jo(_.midi), z.gain.setValueAtTime(0, E), z.gain.linearRampToValueAtTime(0.22, E + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, b - 0.01), U.connect(z), z.connect(x), U.start(E), U.stop(b), c && this.noteTimers.push(setTimeout(() => {
        h === this.token && c(S);
      }, 50 + _.beat * m * 1e3));
      const V = i[S + 1]?.beat ?? 1 / 0;
      d && V > _.beat + _.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + _.beat * m * 1e3 + B * 1e3)), w = Math.max(w, _.beat + _.duration);
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), 50 + w * m * 1e3 + 150);
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
    if (await Eo(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (S, E) => 1 / (E + 1) ** 1.3), x = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let M = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (S) => {
      d === this.token && Number.isFinite(S) && (M = 60 / Math.max(40, Math.min(140, S)));
    };
    const v = 1.6;
    let k = h.currentTime + 0.05, w = 0;
    const C = [], _ = () => {
      if (d === this.token) {
        if (k < h.currentTime - 0.02) {
          const S = Math.ceil((h.currentTime - k) / M);
          k += S * M, w = (w + S) % i.length, C.length = 0;
        }
        for (; k < h.currentTime + v; ) {
          const S = i[w], E = w, B = k, b = h.createOscillator(), U = h.createGain();
          x ? b.setPeriodicWave(x) : b.type = "triangle", b.frequency.value = jo(S), U.gain.setValueAtTime(0, B), U.gain.linearRampToValueAtTime(0.22, B + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, B + M * 0.975), b.connect(U), U.connect(p), b.start(B), b.stop(B + M * 0.985), C.push({ at: B, index: E }), k += M, w = (w + 1) % i.length;
        }
        for (; C.length && C[0].at <= h.currentTime + 0.01; ) {
          const S = C.shift();
          l?.(S.index);
        }
      }
    };
    return _(), this.loopTick = setInterval(_, 25), new Promise((S) => {
      this.settle = S;
    });
  }
}
function di(r, i) {
  let l = 0;
  const c = i.map(([d, h, p]) => {
    const x = { position: d === null || h === null ? null : Ke(d, h), beat: l, duration: p };
    return l += p, x;
  });
  return { label: r, events: c, beats: l };
}
function No(r, ...i) {
  let l = 0;
  const c = i.flatMap((d) => {
    const h = d.events.map((p) => ({ ...p, beat: p.beat + l }));
    return l += d.beats, h;
  });
  return { label: r, events: c, beats: l };
}
const nh = di("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), ih = di("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Iv = di("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), sh = di("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), rh = di("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Dv = di("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), ah = di("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), lh = di("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), zv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [nh, ih],
    whole: No("Melodia · A + B + C", nh, ih, Iv),
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
    fragments: [sh, rh],
    whole: No("Ukko Nooa · A + B", sh, rh),
    bonus: Dv,
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
    fragments: [ah, lh],
    whole: No("Siirtymämelodia · A + B", ah, lh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Bv(r) {
  return r.events.filter((i) => i.position !== null).map((i) => ({ midi: i.position.midi, beat: i.beat, duration: i.duration }));
}
const oh = ["e", "B", "G", "D", "A", "E"];
function tu({ pieceId: r, stage: i, onBeforePlay: l, stopHandleRef: c }) {
  const d = zv[r], [h, p] = A.useState(i === "fingering" ? "a" : "whole"), [m, x] = A.useState(d.tempo), [M, v] = A.useState(!1), [k, w] = A.useState(!1), [C, _] = A.useState(i !== "memory"), [S, E] = A.useState(!1), [B, b] = A.useState(null), [U, z] = A.useState(""), V = A.useRef(new lr()), D = A.useRef(0);
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
  const I = i === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], re = I.find((g) => g.id === h) ?? I[0], Z = re.clip, we = Bv(Z), Ne = B === null ? null : we[B]?.beat ?? null, Y = Ne === null ? null : Z.events.find((g) => g.beat === Ne)?.position ?? null, he = A.useRef(null);
  $h(he, ".melody-playing", S && Ne !== null ? String(Ne) : "", { enabled: M && k, playback: S });
  const G = Z.beats / 4, oe = [...new Map(Z.events.filter((g) => g.position).map((g) => [Xe(g.position), g.position])).values()], se = oe.map((g) => g.fret), W = oe.filter((g) => C || Y?.string === g.string && Y.fret === g.fret).map((g) => ({
    ...g,
    label: Ie(g.midi),
    kind: Y?.string === g.string && Y.fret === g.fret ? "playing" : Qe(g.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(oe.map((g) => g.string))],
    min: Math.min(...se),
    max: Math.max(...se),
    fixed: "box"
  };
  async function te() {
    if (S) {
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
      g === D.current && z(Ra(ne));
    } finally {
      g === D.current && (E(!1), b(null));
    }
  }
  function j(g) {
    O(), z(""), p(g);
  }
  return /* @__PURE__ */ a.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ a.jsxs("details", { onToggle: (g) => {
    const ne = g.currentTarget.open;
    v(ne), ne || O();
  }, children: [
    /* @__PURE__ */ a.jsx("summary", { children: i === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    M && /* @__PURE__ */ a.jsxs("div", { className: "melody-practice-content", children: [
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
      i !== "memory" && /* @__PURE__ */ a.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: I.map((g) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": re.id === g.id,
          onClick: () => j(g.id),
          children: g.name
        },
        g.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": S, onClick: () => {
          te();
        }, children: S ? "■ Pysäytä melodia" : i === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ a.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ a.jsx("select", { value: m, onChange: (g) => {
            O(), x(Number(g.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((g, ne) => g - ne).filter((g, ne, ce) => ce.indexOf(g) === ne).map((g) => /* @__PURE__ */ a.jsxs("option", { value: g, children: [
            g,
            " BPM"
          ] }, g)) })
        ] }),
        /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": k, onClick: () => w((g) => !g), children: k ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ a.jsx("p", { className: "melody-now", "aria-live": "polite", children: S && B !== null ? `Nyt soi ${Ie(we[B].midi)} · ${oh[Y.string]}-kieli, ${Y.fret}. nauha` : S ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ a.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ a.jsx(ci, { area: ae, marks: W, disabled: !0, follow: "playing", playback: S, caption: `${d.title}, ${re.name}` }),
        /* @__PURE__ */ a.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C,
              onClick: () => _((g) => !g),
              children: C ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
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
          /* @__PURE__ */ a.jsx("tbody", { children: oh.map((g, ne) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("th", { scope: "row", children: g }),
            Z.events.map((ce, Ee) => {
              const H = ce.position?.string === ne, K = H && Ne === ce.beat;
              return /* @__PURE__ */ a.jsx(
                "td",
                {
                  className: `${ce.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${H && Qe(ce.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${g}-kieli, ${ce.position.fret}. nauha, ${Ie(ce.position.midi)}` : void 0,
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
const Bo = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [1, 2]), tf = [...new Map(Bo.flatMap((r) => r.positions[0].strings.flatMap((i, l) => i.map((c) => {
  const d = Ke(l, c);
  return [Xe(d), d];
})))).values()].sort((r, i) => r.midi - i.midi || i.string - r.string), _a = [5, 4, 3, 2, 1, 0].flatMap((r) => tf.filter((i) => i.string === r).sort((i, l) => i.fret - l.fret)), Vo = [
  ..._a,
  ..._a.slice(1, -1).reverse()
], Vv = [...Vo, _a[0]], uh = new Set(
  Bo[0].positions[0].strings.flatMap((r, i) => r.map((l) => {
    const c = Ke(i, l);
    return Xe(c);
  })).filter((r) => Bo[1].positions[0].strings.flatMap((i, l) => i.map((c) => Xe(Ke(l, c)))).includes(r))
), Kv = [
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
], nf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", sf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Co = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ch = (r) => Qe(r) === 9;
function dh() {
  try {
    const r = Number(localStorage.getItem(nf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Uv() {
  try {
    const r = Number(localStorage.getItem(sf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Hv({ onBack: r, onPosition: i }) {
  const [l, c] = A.useState(dh), [d, h] = A.useState(dh), [p, m] = A.useState(!1), [x, M] = A.useState("roots"), [v, k] = A.useState(Uv), [w, C] = A.useState(null), [_, S] = A.useState(null), [E, B] = A.useState(""), b = A.useRef(new lr()), U = A.useRef(0), z = A.useRef(null), V = _ === null ? null : Vo[_];
  function D() {
    z.current?.(), U.current++, b.current.stop(), C(null), S(null);
  }
  A.useEffect(() => {
    const Y = () => {
      document.hidden && (U.current++, b.current.stop(), C(null), S(null));
    };
    return document.addEventListener("visibilitychange", Y), () => {
      document.removeEventListener("visibilitychange", Y), U.current++, b.current.stop();
    };
  }, []);
  async function O(Y) {
    z.current?.();
    const he = ++U.current;
    b.current.stop(), S(null), B(""), C(Y);
    try {
      Y === "transition" ? await b.current.play(Kv.map((G) => G.midi)) : Y === "once" ? await b.current.play(Vv.map((G) => G.midi)) : await b.current.loop(Vo.map((G) => G.midi), (G) => {
        he === U.current && S(G);
      }, v);
    } catch (G) {
      he === U.current && B(Ra(G));
    } finally {
      he === U.current && (C(null), S(null));
    }
  }
  function I(Y) {
    const he = Math.max(40, Math.min(140, Y));
    k(he), b.current.setLoopTempo(he);
    try {
      localStorage.setItem(sf, String(he));
    } catch {
    }
  }
  function re(Y) {
    Y > l || (D(), h(Y), m(!1), M("roots"));
  }
  function Z() {
    D();
    const Y = Math.min(4, d + 1);
    if (h(Y), m(!1), M("roots"), Y > l) {
      c(Y);
      try {
        localStorage.setItem(nf, String(Y));
      } catch {
      }
    }
  }
  const we = (Y, he) => d < 2 || d === 2 && p && uh.has(he) || d === 3 && (x === "all" || x === "roots" && ch(Y)), Ne = tf.filter((Y) => we(Y.midi, Xe(Y))).map((Y) => ({
    ...Y,
    label: d < 2 || d === 2 && p || d === 3 && x === "all" ? Ie(Y.midi) : "A",
    kind: d < 2 && V?.string === Y.string && V?.fret === Y.fret ? "playing" : ch(Y.midi) ? "answer" : uh.has(Xe(Y)) ? "anchor" : "shape"
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
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Co.map((Y, he) => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: Co[d].title }),
        /* @__PURE__ */ a.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Co[d].detail }),
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
              _a.length,
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
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => I(v - 5), children: "− 5" }),
          /* @__PURE__ */ a.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => I(v + 5), children: "+ 5" }),
          /* @__PURE__ */ a.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": w === "whole",
              onClick: () => w === "whole" ? D() : void O("whole"),
              children: w === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": w === "once",
              onClick: () => w === "once" ? D() : void O("once"),
              children: w === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": w === "transition",
              onClick: () => w === "transition" ? D() : void O("transition"),
              children: w === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
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
                  onChange: () => M(Y.value)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: Y.name })
            ] }, Y.value))
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => w === "once" ? D() : void O("once"), children: w === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => w === "transition" ? D() : void O("transition"), children: w === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: w === "whole" ? V && d < 2 ? `Nyt soi ${Ie(V.midi, !1, !0)} · ${Zt[V.string]}-kieli, nauha ${V.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : w === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : w === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        E && /* @__PURE__ */ a.jsx("p", { role: "alert", className: "error", children: E }),
        /* @__PURE__ */ a.jsx(
          ci,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: w,
            marks: Ne,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? x === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : x === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ a.jsx(
          tu,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ a.jsx(Xh, {}),
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
const er = "musiikin-kartta:skaalapolku:v1", wa = "musiikin-kartta:skaalapolku:position-2:v1", To = "musiikin-kartta:skaalapolku:position-3:v1", Ea = "musiikin-kartta:skaalapolku:bridge-1-2:v1", ba = "musiikin-kartta:skaalapolku:active-position:v1", rf = "musiikin-kartta:skaalapolku:tempo:v1", as = 75, Ko = 40, Uo = 140;
function Gv() {
  try {
    const r = localStorage.getItem(rf);
    if (r === null) return as;
    const i = Number(r);
    return Number.isInteger(i) && i >= Ko && i <= Uo && i % 5 === 0 ? i : as;
  } catch {
    return as;
  }
}
const Mo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], hh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Cn(r = er) {
  try {
    const i = Number(localStorage.getItem(r));
    return Number.isInteger(i) ? Math.max(0, Math.min(4, i)) : 0;
  } catch {
    return 0;
  }
}
function _o() {
  try {
    const r = localStorage.getItem(ba);
    return r === "3" && Cn(Ea) === 4 ? 3 : Cn(er) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Wv() {
  try {
    return Cn(wa) === 4 && localStorage.getItem(ba) === "bridge";
  } catch {
    return !1;
  }
}
function Qv({ onBack: r }) {
  const [i, l] = A.useState(_o), [c, d] = A.useState(Wv), [h, p] = A.useState(() => ({
    1: Cn(er),
    2: Cn(wa),
    3: Cn(To)
  })), [m, x] = A.useState(() => Cn(_o() === 3 ? To : _o() === 2 ? wa : er)), M = h[i], [v, k] = A.useState(!1), [w, C] = A.useState("roots"), [_, S] = A.useState(Gv), [E, B] = A.useState(null), [b, U] = A.useState(null), [z, V] = A.useState(""), D = A.useRef(new lr()), O = A.useRef(0), I = A.useRef(null);
  function re(H) {
    const K = Math.max(Ko, Math.min(Uo, H));
    S(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(rf, String(K));
    } catch {
    }
  }
  function Z() {
    I.current?.(), O.current++, D.current.stop(), B(null), U(null);
  }
  A.useEffect(() => {
    const H = () => {
      document.hidden && (O.current++, D.current.stop(), B(null), U(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), O.current++, D.current.stop();
    };
  }, []);
  const we = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [i])[0].positions[0], Ne = we.strings.flatMap((H, K) => H.map((ee) => Ke(K, ee))).sort((H, K) => H.midi - K.midi || K.string - H.string), Y = [...Ne, ...Ne.slice(1, -1).reverse()], he = b === null ? null : Y[b], G = i === 1 ? [69, 72, 69, 67, 64, 67, 69] : i === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], oe = we.start, se = we.end, W = (H) => Qe(H) === 9, ae = (H) => m < 2 ? !0 : m === 2 ? v && W(H) : w === "scale" || w === "roots" && W(H), te = Ne.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: m < 2 || m === 3 && w === "scale" ? Ie(H.midi) : "A",
    kind: m < 2 && he?.string === H.string && he.fret === H.fret ? "playing" : W(H.midi) ? "answer" : "shape"
  }));
  async function j(H) {
    I.current?.();
    const K = ++O.current;
    D.current.stop(), U(null), V(""), B(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(Y.map((ee) => ee.midi), (ee) => {
        K === O.current && U(ee);
      }, m === 2 ? _ : as);
    } catch (ee) {
      K === O.current && V(Ra(ee));
    } finally {
      K === O.current && (B(null), U(null));
    }
  }
  function g() {
    Z();
    const H = Math.min(4, m + 1);
    if (x(H), k(!1), C("roots"), H > M) {
      p((ee) => ({ ...ee, [i]: H }));
      const K = i === 1 ? er : i === 2 ? wa : To;
      try {
        localStorage.setItem(K, String(H));
      } catch {
      }
    }
  }
  function ne(H) {
    H > M || (Z(), x(H), k(!1), C("roots"));
  }
  function ce(H) {
    if (!(H === 2 && h[1] < 4) && !(H === 3 && Cn(Ea) < 4)) {
      Z(), d(!1), l(H), x(h[H]), k(!1), C("roots"), V("");
      try {
        localStorage.setItem(ba, String(H));
      } catch {
      }
    }
  }
  function Ee() {
    if (!(h[2] < 4)) {
      Z(), d(!0), k(!1), V("");
      try {
        localStorage.setItem(ba, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ a.jsx(Hv, { onBack: r, onPosition: ce }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
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
      oe,
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
          disabled: Cn(Ea) < 4,
          onClick: () => ce(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("nav", { className: "journey-steps", "aria-label": `Position ${i} harjoitukset`, children: Mo.map((H, K) => /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > M,
        onClick: () => ne(K),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "journey-index", children: K > M ? "🔒" : K < M ? "✓" : K + 1 }),
          /* @__PURE__ */ a.jsx("span", { children: K === 4 ? `Positio ${i} harjoiteltu` : H.title })
        ]
      },
      H.title
    )) }),
    /* @__PURE__ */ a.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${i} harjoiteltu` : Mo[m].title }),
        /* @__PURE__ */ a.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: Mo[m].detail }),
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
              disabled: _ <= Ko,
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
              disabled: _ >= Uo,
              onClick: () => re(_ + 5),
              children: "+ 5"
            }
          ),
          _ !== as && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => re(as),
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
              onClick: () => E === "loop" ? Z() : void j("loop"),
              children: E === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          i !== 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => E === "phrase" ? Z() : void j("phrase"), children: E === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: E === "loop" ? he && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(he.midi, !1, !0)} · ${Zt[he.string]}-kieli, nauha ${he.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: z }),
        m >= 1 && m <= 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          m === 2 && /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", "aria-pressed": v, onClick: () => k((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ a.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              hh.map((H) => /* @__PURE__ */ a.jsxs("label", { children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: H.value,
                    checked: w === H.value,
                    onChange: () => C(H.value)
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { children: H.label })
              ] }, H.value))
            ] }),
            i !== 1 && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
              j("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ a.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: E, caption: `A-mollipentatoninen, positio ${i}` }),
          /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? hh.find((H) => H.value === w).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: se, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: E, caption: `Position ${i} sävelet` }),
          /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        i === 1 && (m === 1 || m === 2) && /* @__PURE__ */ a.jsx(
          tu,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: Z,
            stopHandleRef: I
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ a.jsx(Xh, {}, i),
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
        Cn(Ea) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Yv = ["ionian", "aeolian"], ss = {
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
}, af = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", lf = "musiikin-kartta:moodipolku:active:v1", Jv = (r) => {
  const i = ss[r].positions;
  return [...i, ...i.slice(1, -1).reverse()];
}, Xv = (r) => [...Jv(r), ss[r].positions[0]], fh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Na(r) {
  try {
    const i = Number(localStorage.getItem(af(r)));
    return Number.isInteger(i) ? Math.max(0, Math.min(5, i)) : 0;
  } catch {
    return 0;
  }
}
function mh() {
  try {
    return localStorage.getItem(lf) === "aeolian" && Na("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Zv({ onBack: r }) {
  const [i, l] = A.useState(mh), [c, d] = A.useState(() => ({
    ionian: Na("ionian"),
    aeolian: Na("aeolian")
  })), [h, p] = A.useState(() => Na(mh())), [m, x] = A.useState(null), [M, v] = A.useState(null), [k, w] = A.useState(!1), [C, _] = A.useState("roots"), [S, E] = A.useState(""), [B, b] = A.useState(null), [U, z] = A.useState(null), V = A.useRef(new lr()), D = A.useRef(0), O = A.useRef(null), I = ss[i], re = Xv(i), Z = m === "scale" && M !== null ? re[M] : null;
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
      return Ee === D.current && E(Ra(H)), !1;
    } finally {
      Ee === D.current && (x(null), v(null));
    }
  }
  function Y(g) {
    g > c[i] || (we(), p(g), b(null), z(null), w(!1), _("roots"), E(""));
  }
  function he() {
    we();
    const g = Math.min(5, h + 1);
    if (p(g), b(null), z(null), w(!1), _("roots"), g > c[i]) {
      d((ne) => ({ ...ne, [i]: g }));
      try {
        localStorage.setItem(af(i), String(g));
      } catch {
      }
    }
  }
  function G(g) {
    if (!(g === "aeolian" && c.ionian < 5)) {
      we(), l(g), p(c[g]), b(null), z(null), w(!1), _("roots"), E("");
      try {
        localStorage.setItem(lf, g);
      } catch {
      }
    }
  }
  async function oe() {
    we(), z(null), b(null);
    const g = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ne("comparison", ss[g].phrase) && b(g);
  }
  const se = (g) => Qe(g) === I.tonic, W = I.positions.filter((g) => h < 2 ? !0 : h === 2 ? k && se(g.midi) : h === 4 ? C === "all" || C === "roots" && se(g.midi) : !1).map((g) => ({
    ...g,
    label: h === 2 || h === 4 && C === "roots" ? I.tonicName : Ie(g.midi),
    kind: Z?.string === g.string && Z.fret === g.fret ? "playing" : se(g.midi) ? "answer" : "shape"
  })), ae = [...new Set(I.positions.map((g) => g.string))], te = Math.min(...I.positions.map((g) => g.fret)), j = Math.max(...I.positions.map((g) => g.fret));
  return /* @__PURE__ */ a.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ a.jsx("button", { type: "button", className: "back-link", onClick: () => {
      we(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ a.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Yv.indexOf(i) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ a.jsxs("h2", { id: "mode-path-title", children: [
      I.title,
      " · ",
      I.alias
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ a.jsx("p", { className: "learning-lead", children: I.explanation }),
    /* @__PURE__ */ a.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ a.jsx("strong", { children: I.noteNames }),
      " · Pohjasävel ",
      I.tonicName,
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
      fh.map((g, ne) => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : fh[h] }),
        /* @__PURE__ */ a.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          I.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          I.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ a.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ a.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        I.tonicName,
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
                oe();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          B !== null && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ne("comparison", ss[B].phrase);
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
            ss[B].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Soita ",
          I.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          I.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          I.tonicName,
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
                checked: C === g,
                onChange: () => _(g)
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: ne })
          ] }, g))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => w((g) => !g), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
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
          onClick: () => m === "accompaniment" ? we() : void Ne("accompaniment", I.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && m === "scale" && Z && /* @__PURE__ */ a.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ie(Z.midi, !1, !0),
        " · ",
        Zt[Z.string],
        "-kieli, nauha ",
        Z.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ a.jsx(
        ci,
        {
          area: { strings: ae, min: te, max: j, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: I.title + " – yhden oktaavin sormitus"
        }
      ),
      i === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ a.jsx(
        tu,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: we,
          stopHandleRef: O
        },
        `nooa:${h}`
      ),
      S && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: S }),
      h < 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ a.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: he, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ a.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          I.title,
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
function qv({ onBack: r }) {
  const [i, l] = A.useState(null);
  return i === "pentatonic" ? /* @__PURE__ */ a.jsx(Qv, { onBack: () => l(null) }) : i === "modes" ? /* @__PURE__ */ a.jsx(Zv, { onBack: () => l(null) }) : /* @__PURE__ */ a.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
const Xs = [0, 2, 4, 5, 7, 9, 11], xa = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function ek({ onBack: r }) {
  const [i, l] = A.useState(0), [c, d] = A.useState([]), [h, p] = A.useState(!1), [m, x] = A.useState(""), [M, v] = A.useState(0), k = i >= Xs.length, w = Xs[Math.min(i, Xs.length - 1)], C = ds(xa.strings, xa.min, xa.max).filter((V) => Qe(V.midi) === w), _ = C.filter((V) => !c.includes(Xe(V))), S = _.length === 0 && !k, E = !S && h ? _[0] : void 0, B = [
    ...C.filter((V) => c.includes(Xe(V))).map((V) => ({ ...V, kind: "answer", label: Ie(V.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function b(V) {
    if (k || S) return;
    const D = Xe(V);
    if (Qe(V.midi) !== w) {
      v((re) => re + 1), x(`Valitsit sävelen ${Ie(V.midi)}. Etsi ${Ie(w)}.`);
      return;
    }
    if (c.includes(D)) {
      x("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, D];
    d(O), p(!1);
    const I = C.length - O.length;
    x(I ? `Oikein! ${Ie(w)} löytyi ${Zt[V.string]}-kieleltä (${_i(V.fret)}). Vielä ${I}.` : `Löysit kaikki ${C.length} ${Ie(w)}-säveltä tällä alueella.`);
  }
  function U() {
    S && (l((V) => V + 1), d([]), p(!1), x(""));
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
        M ? `Vääriä valintoja yhteensä ${M}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: z, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(w),
          "-sävelet"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Sävel ",
          i + 1,
          " / ",
          Xs.length
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ie(w),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        C.length
      ] }),
      /* @__PURE__ */ a.jsx(
        ci,
        {
          area: xa,
          marks: B,
          onAnswer: b,
          disabled: S,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: S ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        !S && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((V) => !V),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        S && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: U, children: i === Xs.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const tk = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, bo = ["C", "G", "D", "Em"], ph = ["C", "G", "D", "Em", "Am", "E", "A"], nk = { min: 0, max: 3, fixed: "" };
function vh(r) {
  const i = [...r];
  for (let l = i.length - 1; l > 0; l--) {
    const c = Math.floor(Math.random() * (l + 1));
    [i[l], i[c]] = [i[c], i[l]];
  }
  return i;
}
function ik({ onBack: r }) {
  const [i, l] = A.useState(4), [c, d] = A.useState(() => vh(bo)), [h, p] = A.useState(0), [m, x] = A.useState(null), [M, v] = A.useState([]), [k, w] = A.useState(0), C = h >= c.length, _ = tk[c[Math.min(h, c.length - 1)]], S = i === 4 ? bo : ph, E = _.frets.flatMap((O, I) => O === null ? [] : [I]), B = _.frets.flatMap((O, I) => O === null ? [I] : []), b = { ...nk, strings: E }, U = _.frets.flatMap((O, I) => O === null ? [] : [{
    ...Ke(I, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function z(O = i) {
    l(O), d(vh(O === 4 ? bo : ph)), p(0), x(null), v([]), w(0);
  }
  function V(O) {
    m || C || M.includes(O) || (O === _.name ? x(O) : (v((I) => [...I, O]), w((I) => I + 1)));
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
    /* @__PURE__ */ a.jsx("div", { className: "journey-lesson", children: C ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
        ci,
        {
          area: b,
          marks: U,
          mutedStrings: B,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ a.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: S.map((O) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : M.includes(O) ? "wrong" : "",
          disabled: !!m || M.includes(O),
          "aria-pressed": m === O,
          onClick: () => V(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ a.jsx(
        "p",
        {
          className: m ? "feedback good" : M.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${_.name}-sointu.` : M.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ a.jsx("div", { className: "action-row", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", onClick: D, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (r, i) => ({ first: r, ...i ? { second: i } : {} }), ls = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], os = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], us = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], of = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], sk = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ls(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...os(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: us,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ls(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...os(), ke("E♭"), ke("F")],
    lyrics: us
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
    bars: ls(),
    lyrics: of
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...os(), ke("E♭", "F"), ke("Gm")],
    lyrics: us
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
], rk = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ls(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...os(), ke("E♭"), ke("E♭")],
    lyrics: us
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ls(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...os(), ke("E♭"), ke("F")],
    lyrics: us
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
    bars: ls(),
    lyrics: of
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...os(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: us
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], hs = {
  acoustic: sk,
  normal: rk
}, ak = "normal", Ho = "yksi-sointu-kaksi-askelta", nu = {
  acoustic: Ho + "-akustinen",
  normal: Ho + "-normaali"
}, uf = (r) => r === Ho || Object.values(nu).includes(r ?? "");
function lk(r) {
  const i = Object.entries(nu).find(([, l]) => l === r);
  return i ? i[0] : null;
}
const ok = (r) => nu[r], kh = (r) => {
  const i = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
};
function iu(r, i = "acoustic") {
  const l = hs[i], c = l[r], d = l[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function su(r, i = "acoustic") {
  const l = hs[i], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let k = 1; k < l.length && !(c < l[k].start); k++)
    d = k;
  const h = l[d];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= rr(d, p + 1, i); )
    p++;
  const m = rr(d, p, i), x = iu(d, i) / 4;
  let M = 1;
  for (; M < 4 && c >= m + M * x; ) M++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: M,
    chord: v.second && M >= 3 ? v.second : v.first
  };
}
function rr(r, i, l = "acoustic") {
  return hs[l][r].start + iu(r, l) * i;
}
function uk(r) {
  return hs[r].flatMap((i, l) => i.bars.flatMap((c, d) => {
    const h = rr(l, d, r), p = { section: i, sectionIndex: l, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const m = iu(l, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + m }];
  }));
}
function ck(r, i = "acoustic", l = !1) {
  const c = hs[i], d = su(r, i), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", m = uk(i), x = m.findIndex((C) => C.sectionIndex === d.sectionIndex && C.barIndex === d.barIndex && C.part === p), v = [
    ...m.slice(x + 1).map((C) => ({ ...C, wrapped: !1 })),
    ...l ? m.slice(0, x + 1).map((C) => ({ ...C, wrapped: !0 })) : []
  ].find((C) => C.chord !== d.chord) ?? null;
  let k = null;
  const w = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!w || l)) {
    const C = w ? 0 : d.sectionIndex + 1, _ = c[C], S = _.bars[0].first;
    k = {
      section: _,
      sectionIndex: C,
      firstChord: S,
      wrapped: w,
      continues: S === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: k };
}
function dk(r) {
  const i = r.filter((m) => m.lyrics?.length), l = (m) => 1 + (m.lyrics?.length ?? 0), c = i.reduce((m, x) => m + l(x), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= i.length; m++) {
    const x = Math.abs(c - 2 * p);
    (x < h || x === h && p >= c - p) && (d = m, h = x), m < i.length && (p += l(i[m]));
  }
  return [i.slice(0, d), i.slice(d)];
}
const Go = ["Gm", "F", "B♭", "E♭", "Dm", "C"], cf = "musiikin-kartta:kappale-sointuvihjeet:v1", Ca = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, yh = {
  showChords: !0,
  level: 0,
  fadeOrder: Ca
};
function ja(r, i) {
  return !i.showChords || i.level >= i.fadeOrder[r];
}
function gh(r) {
  if (!r) return { ...yh, fadeOrder: { ...Ca } };
  try {
    const i = JSON.parse(r);
    if (!i || typeof i != "object") throw new Error("Invalid settings");
    const l = i, c = l.level, d = { ...Ca }, h = l.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of Go)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof l.showChords == "boolean" ? l.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...yh, fadeOrder: { ...Ca } };
  }
}
function hk() {
  try {
    return gh(localStorage.getItem(cf));
  } catch {
    return gh(null);
  }
}
const fk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function mk(r) {
  const i = fk.exec(r.trim());
  if (!i) return r;
  const [, l, , c = "", d = ""] = i;
  return l + "5" + c + d;
}
const pk = (r, i) => i === "power" ? mk(r) : r, vk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], kk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function yk({ version: r, position: i, loop: l = !1, onSeek: c }) {
  const [d, h] = A.useState(hk), [p, m] = A.useState(null), [x, M] = A.useState(!1), [v, k] = A.useState("full"), w = (G) => pk(G, v), C = hs[r], _ = su(i, r), { section: S, sectionIndex: E, barIndex: B, beat: b, chord: U } = _, z = b >= 3 && S.bars[B].second ? "second" : "first", V = (G, oe, se) => `${r}:${G}:${oe}:${se}`, D = (G, oe) => V(S.id, G, oe), O = D(B, z), I = ja(U, d), re = I && p === O, Z = (G, oe, se) => !ja(G, d) || p === D(oe, se), we = d.showChords && d.level === 0, Ne = Go.filter((G) => ja(G, d)).length, { nextSection: Y } = ck(i, r, l), he = !!Y && ja(Y.firstChord, d);
  return A.useEffect(() => {
    m(null);
  }, [O]), A.useEffect(() => {
    try {
      localStorage.setItem(cf, JSON.stringify(d));
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
              h((oe) => ({ ...oe, showChords: G.target.checked })), m(null);
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
            onChange: (G) => M(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ a.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, oe]) => /* @__PURE__ */ a.jsxs("label", { children: [
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
          /* @__PURE__ */ a.jsx("span", { children: oe })
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
              const oe = Number(G.target.value);
              h((se) => ({ ...se, level: oe })), m(null);
            },
            children: vk.map((G) => /* @__PURE__ */ a.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ne === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ne}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ a.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ a.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ a.jsx("div", { className: "song-fade-order", children: Go.map((G) => /* @__PURE__ */ a.jsxs("label", { children: [
        G,
        /* @__PURE__ */ a.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (oe) => {
              const se = Number(oe.target.value);
              h((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [G]: se } })), m(null);
            },
            children: kk.map((oe) => /* @__PURE__ */ a.jsx("option", { value: oe.value, children: oe.label }, oe.value))
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
            value: S.id,
            onChange: (G) => {
              const oe = C.find((se) => se.id === G.target.value);
              oe && c(oe.start);
            },
            children: C.map((G) => /* @__PURE__ */ a.jsxs("option", { value: G.id, children: [
              kh(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "song-current-chord", children: [
          I && !re ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ a.jsx("strong", { children: I && !re ? "?" : w(U) }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            S.title,
            ", tahti ",
            B + 1,
            ", isku ",
            b,
            "/4"
          ] }),
          I && /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsx("strong", { children: he ? "?" : w(Y.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": S.title + ": tahdit", children: S.bars.map((G, oe) => {
      const se = oe === B, W = se && (b < 3 || !G.second), ae = se && b >= 3 && !!G.second, te = Z(G.first, oe, "first"), j = G.second ? Z(G.second, oe, "second") : !1, g = (te ? w(G.first) : "sointu piilossa") + (G.second ? " " + (j ? w(G.second) : "sointu piilossa") : "") + (we && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (we && G.possibleChord ? " (" + w(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (se ? " active" : ""),
          "aria-pressed": se,
          "aria-label": "Tahti " + (oe + 1) + ": " + g + ". Siirry kohtaan " + kh(rr(E, oe, r)),
          onClick: () => c(rr(E, oe, r)),
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
            ] }),
            /* @__PURE__ */ a.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ a.jsx("strong", { className: W && te ? "now" : "", children: te ? w(G.first) : "?" }),
              G.second && /* @__PURE__ */ a.jsx("strong", { className: ae && j ? "now" : "", children: j ? w(G.second) : "?" })
            ] }),
            we && G.passingBass && /* @__PURE__ */ a.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            we && G.possibleChord && /* @__PURE__ */ a.jsxs("small", { children: [
              "Mahdollinen (",
              w(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        oe
      );
    }) }),
    x ? /* @__PURE__ */ a.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ a.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ a.jsx("div", { className: "song-all-lyrics-grid", children: dk(C).map((G, oe) => /* @__PURE__ */ a.jsx("div", { className: "song-lyrics-column", children: G.map((se) => /* @__PURE__ */ a.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ a.jsx("h5", { children: se.title }),
        se.lyrics?.map((W, ae) => /* @__PURE__ */ a.jsx("p", { children: W }, ae))
      ] }, se.id)) }, oe)) }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : S.lyrics && /* @__PURE__ */ a.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ a.jsxs("h4", { children: [
        S.title,
        ": sanat"
      ] }),
      S.lyrics.map((G, oe) => /* @__PURE__ */ a.jsx("p", { children: G }, oe))
    ] }),
    we && S.note && /* @__PURE__ */ a.jsx("p", { className: "song-chord-note", children: S.note })
  ] });
}
const Aa = 7, gk = { name: "bluesasteikko", base: Ue.SCALES.mp.base, add: [[6, "♭5"]] }, Ao = [
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
    scale: gk,
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
function xk(r) {
  return Ue.scaleNotes(r).map(([i, l]) => Ue.noteName(Aa, i, l));
}
const df = (r) => r === "pentatonic" ? 5 : 7;
function jk(r, i, l) {
  const c = i.filter((m) => m >= 1 && m <= df(r.system)), d = Ue.fingeringBoxes(Aa, r.scale, r.system, c, l);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([m]) => (Aa + m) % 12), p = (m, x) => x >= 0 && x <= l && h.includes((Ue.OPEN_PITCHES[m] + x) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((x) => {
    const M = x.strings.map((k, w) => {
      if (!k.length) return k;
      const C = k[k.length - 1];
      return p(w, C + 1) ? [...k.slice(0, -1), C + 1] : k;
    }), v = M.flat();
    return { ...x, strings: M, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const xh = 17;
function Sk({ open: r }) {
  const [i, l] = A.useState("mp"), [c, d] = A.useState({ pentatonic: [], "3nps": [] }), [h, p] = A.useState(!1), [m, x] = A.useState(!1), M = A.useRef(null), v = Ao.find((E) => E.id === i) ?? Ao[0], k = c[v.system], w = jk(v, k, xh), C = w.some((E) => E.positions.length > 0), _ = Ue.renderBoard(Aa, v.scale, xh, {
    automatic: !0,
    boxes: w,
    onlyBoxNotes: C && h,
    label: v.title + (k.length ? ", " + k.map((E) => "boksi " + E).join(", ") : "")
  });
  A.useEffect(() => {
    const E = M.current;
    !E || !r || w.length === 1 && Ue.revealPositions(E, ".box-highlight");
  }, [_, r]);
  function S(E, B) {
    d((b) => ({ ...b, [v.system]: B ? [...b[v.system], E].sort((U, z) => U - z) : b[v.system].filter((U) => U !== E) }));
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ a.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ a.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ a.jsx("select", { value: i, onChange: (E) => l(E.target.value), children: Ao.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.title }, E.id)) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ a.jsx("strong", { children: v.title }),
      /* @__PURE__ */ a.jsx("span", { children: xk(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: M,
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
      /* @__PURE__ */ a.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: df(v.system) }, (E, B) => B + 1).map((E) => /* @__PURE__ */ a.jsxs("label", { className: "box-toggle", "data-box": E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            value: E,
            checked: k.includes(E),
            onChange: (B) => S(E, B.target.checked)
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
            checked: C && h,
            disabled: !C,
            onChange: (E) => p(E.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: C ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const pt = ["backing", "guitar", "vocals"], hf = 0.05, ff = 5e-3;
class wk {
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
        const M = await this.fetchImpl(i[x], { signal: c.signal });
        if (!M.ok) throw new Error(`${x}: HTTP ${M.status}`);
        const v = await M.arrayBuffer();
        return this.record("ladattu", { track: x, bytes: v.byteLength, kesto: Math.round(this.now() - h) }), v;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const m = {};
      for (const [x, M] of pt.entries()) {
        const v = this.now();
        this.record("purku-alku", { track: M });
        const k = await this.context.decodeAudioData(p[x]);
        if (!d()) return "peruttu";
        m[M] = k, this.record("purettu", {
          track: M,
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
    const c = Math.max(0, Math.min(i, l - 1e-3)), d = this.context.currentTime + hf, h = pt.map((p) => {
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
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(l, this.context.currentTime, ff) : c.value = l;
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
function Ek(r) {
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
const Ti = 1152, Nk = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], Ck = [44100, 48e3, 32e3];
function Tk(r) {
  let i = 0;
  for (r.length >= 10 && r[0] === 73 && r[1] === 68 && r[2] === 51 && (i = 10 + ((r[6] & 127) << 21 | (r[7] & 127) << 14 | (r[8] & 127) << 7 | r[9] & 127) + (r[5] & 16 ? 10 : 0)); i + 4 <= r.length && !(r[i] === 255 && (r[i + 1] & 224) === 224); ) i++;
  const l = [];
  let c = 0, d = 0, h = i;
  for (; h + 4 <= r.length && r[h] === 255 && (r[h + 1] & 224) === 224; ) {
    const C = r[h + 1], _ = r[h + 2], S = r[h + 3];
    if ((C >> 3 & 3) !== 3 || (C >> 1 & 3) !== 1) throw new Error("MP3: vain MPEG-1 Layer III on tuettu");
    const E = Nk[_ >> 4 & 15] * 1e3, B = Ck[_ >> 2 & 3];
    if (!E || !B) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${h}`);
    const b = Math.floor(144 * E / B) + (_ >> 1 & 1);
    if (h + b > r.length) break;
    if (!c)
      c = B, d = (S >> 6 & 3) === 3 ? 1 : 2;
    else if (B !== c) throw new Error("MP3: näytetaajuus vaihtuu kesken tiedoston");
    l.push(h), h += b;
  }
  if (!l.length) throw new Error("MP3: kehyksiä ei löytynyt");
  let p = 0, m = 0, x = 0;
  const M = l[0] + 4 + (d === 1 ? 17 : 32), v = String.fromCharCode(...r.subarray(M, M + 4));
  if (v === "Xing" || v === "Info") {
    x = 1;
    const C = r[M + 7], _ = M + 8 + (C & 1 ? 4 : 0) + (C & 2 ? 4 : 0) + (C & 4 ? 100 : 0) + (C & 8 ? 4 : 0), S = r.subarray(_, _ + 4);
    if (_ + 24 <= l[1] && S.length === 4 && [...S].every((E) => E >= 32 && E < 127)) {
      const E = _ + 21;
      p = r[E] << 4 | r[E + 1] >> 4, m = (r[E + 1] & 15) << 8 | r[E + 2];
    }
  }
  const k = Uint32Array.from(l.slice(x)), w = Math.max(0, k.length * Ti - p - m);
  return { sampleRate: c, channels: d, frameOffsets: k, dataEnd: h, delay: p, padding: m, length: w };
}
const mf = 2, Mk = 1;
function jh(r, i, l, c = 0) {
  const d = i + r.delay, h = d + l, p = r.frameOffsets.length, m = Math.max(0, Math.floor(d / Ti) - mf), x = Math.min(p, Math.ceil(h / Ti) + Mk + Math.ceil(c / Ti));
  return { firstFrame: m, endFrame: x, skip: d - m * Ti + c };
}
const pf = 100, Po = 160;
function _k(r, i, l, c = 1700) {
  const h = (mf + 1) * Ti;
  if (i.length < h + 2048 + c) return null;
  let p = 0;
  for (let k = h; k < h + 2048; k++) p += i[k] * i[k];
  if (p < 1e-6) return null;
  const m = pf * Ti - l.delay;
  let x = null, M = 1 / 0;
  for (let k = 0; k <= c; k++) {
    const w = m - k;
    if (w + h < 0 || w + h + 2048 > r.length) continue;
    let C = 0;
    for (let _ = h; _ < h + 2048 && C < M; _ += 8) C = Math.max(C, Math.abs(i[_] - r[w + _]));
    C < M && (M = C, x = k);
  }
  if (x === null) return null;
  let v = 0;
  for (let k = h; k < h + 2048; k++) v = Math.max(v, Math.abs(i[k] - r[m - x + k]));
  return v <= 1e-4 ? x : null;
}
function Lo(r, i, l) {
  const c = l.endFrame < i.frameOffsets.length ? i.frameOffsets[l.endFrame] : i.dataEnd;
  return r.slice(i.frameOffsets[l.firstFrame], c);
}
const bk = 10, Sh = 4, Ak = 6, Pk = 400, Lk = 256;
class wh {
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
    this.error = "", this.setState("ladataan");
    const h = this.now();
    this.record("lataus-alku");
    try {
      const p = await Promise.all(pt.map(async (w) => {
        const C = await this.fetchImpl(i[w], { signal: c.signal });
        if (!C.ok) throw new Error(`${w}: HTTP ${C.status}`);
        const _ = new Uint8Array(await C.arrayBuffer());
        return this.record("ladattu", { track: w, bytes: _.byteLength, kesto: Math.round(this.now() - h) }), _;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const m = {};
      if (pt.forEach((w, C) => {
        m[w] = { bytes: p[C], layout: Tk(p[C]) };
      }), new Set(pt.map((w) => m[w].layout.sampleRate)).size !== 1) throw new Error("Raitojen näytetaajuudet eroavat");
      const M = m.backing.layout.sampleRate, v = Math.max(...pt.map((w) => m[w].layout.channels));
      if ((M !== this.rate || v !== this.channels) && (this.slots = []), this.rate = M, this.channels = v, this.length = Math.min(...pt.map((w) => m[w].layout.length)), this.data = m, this.gen++, M !== this.context.sampleRate && this.record("naytetaajuus-ero", { mp3: M, konteksti: this.context.sampleRate }), this.decoderDelay === null && await this.calibrate(m), !d()) return "peruttu";
      const k = await this.obtain(0);
      if (!d()) return "peruttu";
      if (!k) throw new Error("Puskurialtaassa ei ole tilaa");
      return this.controller = null, this.record("valmis", {
        kesto: Math.round(this.now() - h),
        bytes: this.bufferBytes,
        compressed: this.compressedBytes,
        duration: this.duration,
        sampleRate: M
      }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.data = null, this.length = 0, this.error = p instanceof Error ? p.message : String(p), this.record("virhe", { message: this.error }), this.setState("virhe"), "virhe") : "peruttu";
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
    const l = Math.max(0, Math.min(Math.round(i * this.rate), this.length - 1));
    return this.session = { id: ++this.sessionId, items: [], nextFrame: null, nextTimeline: l, ending: !1 }, this.offset = l / this.rate, this.timer = this.setIntervalImpl(() => {
      this.pump();
    }, Pk), this.pump(), !0;
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
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(l, this.context.currentTime, ff) : c.value = l;
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
    const h = jh(d.layout, l, c, this.decoderDelay ?? 0), p = await this.decoder().decodeAudioData(Lo(d.bytes, d.layout, h).buffer);
    return Array.from({ length: p.numberOfChannels }, (m, x) => p.getChannelData(x).slice(h.skip, h.skip + c));
  }
  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan. Ilman tätä palat olisivat
   * esimerkiksi Chromiumissa 529 näytettä (11 ms) siirtyneinä. Epäonnistuessa oletetaan Applen käytös (0).
   */
  async calibrate(i) {
    const l = this.decoder();
    for (const c of pt) {
      const { bytes: d, layout: h } = i[c];
      if (h.frameOffsets.length <= Po + 2) continue;
      const p = await l.decodeAudioData(d.slice(0, h.frameOffsets[Po]).buffer), m = await l.decodeAudioData(Lo(d, h, { firstFrame: pf, endFrame: Po }).buffer), x = _k(p.getChannelData(0), m.getChannelData(0), h);
      if (x !== null) {
        this.decoderDelay = x, this.record("kalibroitu", { track: c, dekooderiviive: x });
        return;
      }
    }
    this.decoderDelay = 0, this.record("kalibrointi-epaonnistui");
  }
  decoder() {
    return this.rate === this.context.sampleRate ? this.context : this.decoderFor ? this.decoderFor(this.rate) : new OfflineAudioContext(1, 1, this.rate);
  }
  get segmentLength() {
    return Math.round(bk * this.rate);
  }
  /** Vapaa allaspaikka: varaamaton tai vanhentunut ensin, sitten pisimpään käyttämätön; uusi vain tarvittaessa. */
  freeSlot() {
    const i = this.slots.filter((c) => c.users === 0 && !c.filling), l = i.find((c) => !c.ready || c.gen !== this.gen);
    if (l) return l;
    if (i.length && this.slots.length >= Sh) return i.reduce((c, d) => c.used <= d.used ? c : d);
    if (this.slots.length < Sh) {
      const c = {};
      for (const h of pt) c[h] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
      const d = { buffers: c, gen: -1, start: 0, length: 0, ready: !1, filling: !1, users: 0, used: 0 };
      return this.slots.push(d), this.record("allas", { paikat: this.slots.length, bytes: this.bufferBytes }), d;
    }
    return i.length ? i.reduce((c, d) => c.used <= d.used ? c : d) : null;
  }
  /** Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta tai uusi purku alkaen kohdasta start. */
  async obtain(i) {
    const l = this.gen, c = this.slots.find((x) => x.ready && x.gen === l && i >= x.start && i < x.start + x.length);
    if (c)
      return c.used = ++this.useCounter, c;
    const d = this.data, h = this.freeSlot();
    if (!h || !d) return null;
    const p = Math.min(this.segmentLength, this.length - i);
    Object.assign(h, { gen: l, start: i, length: p, ready: !1, filling: !0 });
    const m = this.now();
    try {
      const x = this.decoder(), M = await Promise.all(pt.map(async (v) => {
        const { bytes: k, layout: w } = d[v], C = jh(w, i, p, this.decoderDelay ?? 0), _ = await x.decodeAudioData(Lo(k, w, C).buffer);
        return { track: v, buffer: _, plan: C };
      }));
      if (h.filling = !1, l !== this.gen)
        return h.gen = -1, null;
      for (const { track: v, buffer: k, plan: w } of M) {
        const C = h.buffers[v];
        for (let _ = 0; _ < C.numberOfChannels; _++) {
          const S = k.getChannelData(Math.min(_, k.numberOfChannels - 1)).subarray(w.skip, w.skip + p);
          C.copyToChannel(S, _, 0), S.length < p && (C.copyToChannel(new Float32Array(p - S.length), _, S.length), this.record("pala-lyhyt", { track: v, start: i, puuttuu: p - S.length }));
        }
      }
      return h.ready = !0, h.used = ++this.useCounter, this.record("pala", { start: i / this.rate, length: p / this.rate, kesto: Math.round(this.now() - m) }), h;
    } catch (x) {
      throw h.filling = !1, h.gen = -1, x;
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
        if (!i || i.ending || i.nextFrame !== null && i.nextFrame / this.context.sampleRate - this.context.currentTime >= Ak) return;
        let l = i.nextTimeline;
        if (l >= this.length) {
          if (!this.looping) {
            i.ending = !0;
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
    const d = this.context.sampleRate, h = c - l.start, p = l.length - h, m = Math.ceil((this.context.currentTime + hf) * d);
    let x = i.nextFrame ?? m;
    i.nextFrame !== null && i.nextFrame < Math.ceil(this.context.currentTime * d) + Lk && (this.record("alivuoto", { myohassa: Math.round((this.context.currentTime * d - i.nextFrame) / d * 1e3) }), x = m);
    const M = x / d, v = pt.map((w) => {
      const C = this.context.createBufferSource();
      return C.buffer = l.buffers[w], C.connect(this.inputs[w]), C.start(M, h / this.rate), C;
    }), k = { slot: l, frame: x, timelineStart: c, length: p, sources: v, done: !1 };
    l.users++, v[0].onended = () => this.finished(i, k), i.items.push(k), i.items.length === 1 ? this.record("soitto", { when: M, offset: c / this.rate, contextTime: this.context.currentTime }) : this.record("pala-ajastettu", { when: M, offset: c / this.rate, pituus: p / this.rate }), i.nextFrame = x + Math.round(p * d / this.rate), i.nextTimeline = c + p;
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
const vf = typeof location < "u" ? new URLSearchParams(location.search).get("soitin") : null, Wo = vf === "d2", oi = vf === "d1" || Wo, Rk = 48e3;
let kf = null;
function Ok() {
  return lk(new URLSearchParams(location.search).get("kappale")) ?? kf ?? ak;
}
function $k(r) {
  kf = r;
  const i = new URL(location.href);
  uf(i.searchParams.get("kappale")) && (i.searchParams.set("kappale", ok(r)), history.replaceState(history.state, "", i.pathname + i.search + i.hash));
}
const Fk = {
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
}, Eh = 1e-3;
function Nh(r, i) {
  try {
    r.currentTime = i;
  } catch {
  }
}
function Ch(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const i = Math.floor(r);
  return String(Math.floor(i / 60)) + ":" + String(i % 60).padStart(2, "0");
}
function Ik({ onBack: r }) {
  const i = A.useRef(null), l = A.useRef(null), c = A.useRef(null), d = A.useRef(0), h = A.useRef(new Jh()), p = A.useRef(null), m = A.useRef(null), x = A.useRef(0), [M, v] = A.useState("tyhja"), [k, w] = A.useState(Ok), C = Fk[k], [_, S] = A.useState(!1), [E, B] = A.useState(!0), [b, U] = A.useState(!0), [z, V] = A.useState(!1), [D, O] = A.useState(!1), [I, re] = A.useState(!1), [Z, we] = A.useState(Zp), [Ne] = A.useState(() => hv()), Y = A.useRef(null), [he, G] = A.useState(""), [oe, se] = A.useState(0), [W, ae] = A.useState(0), [te, j] = A.useState("");
  function g($ = !1, le, ue) {
    const Me = i.current;
    if (Me)
      for (const _e of [l.current, c.current])
        _e && (!le || _e === le) && h.current.align(Me, _e, $, void 0, ue);
  }
  function ne() {
    return [
      ["backing", i.current, !0],
      ["guitar", l.current, E],
      ["vocals", c.current, b]
    ];
  }
  function ce($ = Z, le) {
    if (oi) {
      const ue = m.current?.player;
      if (ue) for (const [Me, , _e] of ne()) ue.setLevel(Me, So(Me, $, le?.[Me] ?? _e));
      return;
    }
    for (const [ue, Me, _e] of ne()) {
      if (!Me) continue;
      const He = So(ue, $, le?.[ue] ?? _e);
      if (Ne === "webaudio" && Y.current?.routed(Me))
        Y.current.setLevel(Me, He);
      else
        try {
          Me.volume = So(ue, $);
        } catch {
        }
    }
  }
  function Ee($) {
    we($), qp($), ce($);
  }
  function H() {
    if (oi) {
      const $ = m.current?.player;
      $?.playing && se($.pause());
    }
    d.current++, i.current?.pause(), l.current?.pause(), c.current?.pause(), S(!1);
  }
  function K($) {
    if ($ !== k) {
      oi && (x.current++, m.current?.player.release()), p.current = null, H();
      for (const le of [i.current, l.current, c.current])
        if (le)
          try {
            le.currentTime = 0;
          } catch {
          }
      se(0), ae(0), j(""), w($), $k($);
    }
  }
  function ee($) {
    if (oi) {
      const Me = m.current?.player, _e = Math.max(0, Math.min($, W > 0 ? W : $));
      se(_e), Me?.state === "valmis" ? Me.seek(_e) : p.current = _e;
      return;
    }
    const le = i.current;
    if (!le || !Number.isFinite($)) return;
    const ue = Math.max(0, Math.min($, Number.isFinite(le.duration) ? le.duration : $));
    p.current = ue, se(ue), Nh(le, ue);
  }
  function J($) {
    const le = p.current;
    if (le === null || $ !== i.current || $.seeking) return;
    const ue = Number.isFinite($.duration) ? Math.min(le, $.duration) : le;
    if (ue !== le && (p.current = ue, se(ue)), Math.abs($.currentTime - ue) < Eh) return;
    const Me = $.seekable;
    for (let _e = 0; _e < Me.length; _e++)
      if (Me.start(_e) <= ue && ue <= Me.end(_e)) {
        Nh($, ue);
        return;
      }
  }
  function pe($) {
    if ($ !== i.current) return;
    const le = p.current;
    if (le === null)
      se($.currentTime);
    else if ($.readyState >= 1 && !$.seeking && Math.abs($.currentTime - le) < Eh) {
      p.current = null, g(!0);
      return;
    }
    $.paused || g();
  }
  function Ce() {
    if (m.current) return m.current;
    try {
      const $ = Ek(Wo ? { sampleRate: Rk } : void 0), le = Wo ? new wh($) : new wk($);
      return le.onStateChange = v, le instanceof wh && (le.onError = (ue) => {
        S(!1), se(le.position()), j(`Toisto keskeytyi (${ue}). Paina Soita uudelleen.`);
      }), le.onEnded = () => {
        S(!1), se(le.duration);
      }, $.onstatechange = () => {
        $.state !== "running" && le.playing && (se(le.pause()), S(!1));
      }, m.current = { context: $, player: le }, window.__kappaleD1 = { context: $, player: le }, m.current;
    } catch ($) {
      return j("Web Audio ei ole käytettävissä tässä selaimessa. " + ($ instanceof Error ? $.message : "")), null;
    }
  }
  async function ge() {
    const $ = Ce();
    if (!$) return;
    const { context: le, player: ue } = $;
    if (_) {
      se(ue.pause()), S(!1);
      return;
    }
    if (ue.state === "ladataan" || ue.state === "puretaan") {
      x.current++, ue.cancel();
      return;
    }
    const Me = le.state === "running" ? Promise.resolve() : le.resume();
    j("");
    const _e = ++x.current;
    if (ue.state !== "valmis") {
      const Oe = await ue.load({ backing: C.backing, guitar: C.guitar, vocals: C.vocals });
      if (_e !== x.current) return;
      if (Oe === "virhe") {
        j("Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.");
        return;
      }
      if (Oe !== "valmis") return;
      ae(ue.duration);
    }
    try {
      await Me;
    } catch {
    }
    if (_e !== x.current) return;
    if (le.state !== "running") {
      j(`Ääni ei käynnistynyt (Web Audio: ${le.state}). Paina Soita uudelleen.`);
      return;
    }
    ce(), ue.setLoop(z), p.current !== null && (ue.seek(p.current), p.current = null);
    let He = ue.position();
    if (He >= ue.duration - 0.05 && (He = 0), !ue.play(He)) {
      j("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    se(He), S(!0);
  }
  async function xe() {
    if (oi) {
      await ge();
      return;
    }
    const $ = i.current, le = l.current, ue = c.current;
    if (!$ || !le || !ue) return;
    if (_) {
      H();
      return;
    }
    j("");
    const Me = p.current ?? $.currentTime;
    if (Number.isFinite($.duration) && Me >= $.duration - 0.05 && ee(0), J($), Ne === "webaudio") {
      const Oe = Y.current ??= new pv(), ze = Oe.unlock() && [$, le, ue].map((Je) => Oe.route(Je)).every(Boolean);
      G(ze ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + Oe.lastError);
    }
    ce(), le.muted = !E, ue.muted = !b, g(!0, void 0, tv);
    const _e = ++d.current;
    E || le.pause(), b || ue.pause();
    const He = [$, ...E ? [le] : [], ...b ? [ue] : []];
    if (!Yh(He)) {
      iv(He);
      const Oe = await sv(He, nv, () => _e !== d.current);
      if (Oe === "ohitettu" || _e !== d.current) return;
      if (Oe === "virhe") {
        H(), j("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (h.current.hold(performance.now() + Jd), await Promise.all(He.map((Oe) => Oe.play())), _e !== d.current) return;
      if (h.current.hold(performance.now() + Jd), g(), S(!0), Ne === "webaudio" && Y.current?.routed($)) {
        const Oe = Y.current;
        setTimeout(() => {
          _e === d.current && Oe.state !== "running" && j(`Ääni ei käynnistynyt (Web Audio: ${Oe.state}). Pysäytä ja soita uudelleen.${Oe.lastError ? " " + Oe.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (_e !== d.current) return;
      H(), j("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function je($, le, ue) {
    if (!$) return;
    if ($.muted = !le, !le) {
      $.pause();
      return;
    }
    !i.current || !_ || (g(!0, $), $.play().catch(() => j(ue + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Fe($) {
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
    if (!oi || !_) return;
    let $ = 0, le = "", ue = 0;
    const Me = () => {
      const _e = m.current?.player;
      if (_e?.playing) {
        const He = _e.audiblePosition(), Oe = su(He, k), ze = `${Oe.sectionIndex}:${Oe.barIndex}:${Oe.beat}`, Je = performance.now();
        (ze !== le || Je - ue > 250) && (le = ze, ue = Je, se(He));
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
          C.label,
          " · ",
          C.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          xe();
        }, children: _ ? "■ Tauko" : M === "ladataan" || M === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: W > 0 ? W : 1,
            step: 0.1,
            value: Math.min(oe, W > 0 ? W : 1),
            disabled: W <= 0,
            onChange: ($) => ee(Number($.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Ch(oe),
          " / ",
          Ch(W)
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: E,
              onChange: ($) => Fe($.target.checked)
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
        /* @__PURE__ */ a.jsxs("a", { href: C.download, download: C.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ a.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ a.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          C.label,
          ", koko kappale · ",
          C.downloadSize
        ] })
      ] }),
      te && /* @__PURE__ */ a.jsx("p", { className: "backing-error", role: "alert", children: te }),
      oi && (M === "ladataan" || M === "puretaan") && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: M === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
      !oi && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: i,
            src: C.backing,
            preload: "metadata",
            loop: z,
            onLoadedMetadata: ($) => {
              $.currentTarget === i.current && (ae($.currentTarget.duration), J($.currentTarget));
            },
            onProgress: ($) => J($.currentTarget),
            onCanPlay: ($) => J($.currentTarget),
            onTimeUpdate: ($) => pe($.currentTarget),
            onEnded: ($) => {
              $.currentTarget !== i.current || $.currentTarget.loop || (p.current = null, l.current?.pause(), c.current?.pause(), S(!1), se($.currentTarget.duration));
            },
            onPause: ($) => {
              $.currentTarget === i.current && S(!1);
            },
            onError: () => j(C.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          k + "-backing"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: l,
            src: C.guitar,
            preload: "metadata",
            muted: !E,
            loop: z,
            onLoadedMetadata: () => {
              i.current?.paused && g(!0);
            },
            onError: () => j(C.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          k + "-guitar"
        ),
        /* @__PURE__ */ a.jsx(
          "audio",
          {
            ref: c,
            src: C.vocals,
            preload: "metadata",
            muted: !b,
            loop: z,
            onLoadedMetadata: () => {
              i.current?.paused && g(!0);
            },
            onError: () => j(C.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          k + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-chart-collapse", open: D, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: ($) => {
        $.preventDefault(), O((le) => !le);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ a.jsx(yk, { version: k, position: oe, loop: z, onSeek: ee })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ a.jsx("summary", { onClick: ($) => {
        $.preventDefault(), re((le) => !le);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ a.jsx(Sk, { open: I })
    ] })
  ] });
}
const Qo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Ta = (r, i = 1) => r.toFixed(i).replace(".", ",").replace("-", "−"), yf = (r) => {
  const i = Math.round(r);
  return (i > 0 ? "+" : i < 0 ? "−" : "±") + Math.abs(i);
}, Yo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function Dk(r, i, l, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Yo(l)}. Vaihda laite Mikrofonin asetuksista.`,
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
function gf({ frame: r, threshold: i }) {
  const l = r?.rms ?? 0, c = cs(l), d = (r?.peak ?? 0) >= 0.98 ? "clip" : l >= i ? "over" : "under";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${Ta(Math.max(-60, c), 0)} desibeliä${l >= i ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meter-fill", style: { width: `${th(l) * 100}%` } }),
        /* @__PURE__ */ a.jsx("div", { className: "meter-threshold", style: { left: `${th(i) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function zk({ mic: r, frame: i, heard: l, s: c, now: d }) {
  const h = ef(r.phase, i), p = l && d - l.at < 1500 ? l : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Ie(p.midi, c.flats, !0)} · ${yf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Qo[h];
  return /* @__PURE__ */ a.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ a.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ a.jsx(gf, { frame: i, threshold: c.minRms })
  ] });
}
function Bk({ mic: r, frame: i, heard: l, accepted: c, now: d, s: h, change: p, devices: m, locked: x, calibrating: M, calibration: v, onTest: k, onStop: w, onCalibrate: C }) {
  const _ = A.useId(), S = ef(r.phase, i), E = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", B = r.phase === "on", b = l && d - l.at < 1500 ? l : null, U = b && (S === "pitch" || S === "untuned"), z = B && (i?.peak ?? 0) >= 0.98, V = r.phase === "error" ? [] : Dk(S, h, r.info, z), D = !h.device || m.some((I) => I.deviceId === h.device), O = (I, re) => p({ ...h, [I]: re });
  return /* @__PURE__ */ a.jsxs("section", { className: "mic-panel", "aria-labelledby": `${_}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ a.jsx("h2", { id: `${_}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ a.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: `mic-state ${S}`, "data-testid": "mic-state", "data-reading": S, children: [
      /* @__PURE__ */ a.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Qo[S],
      S === "pitch" && b ? ` ${Ie(b.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Yo(r.info)}.` : r.phase === "error" ? r.error : Qo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    B && /* @__PURE__ */ a.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ a.jsxs("dd", { "data-testid": "mic-device", children: [
          Yo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(i?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          /* @__PURE__ */ a.jsx(gf, { frame: i, threshold: h.minRms }),
          /* @__PURE__ */ a.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Ta(Math.max(-60, cs(i?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ a.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: b ? Ie(b.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-frequency", children: b ? `${Ta(b.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-cents", children: b ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          yf(b.cents),
          " senttiä",
          /* @__PURE__ */ a.jsx("span", { className: `cents ${b.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, b.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ a.jsx("dd", { "data-testid": "mic-clarity", children: b ? `${Math.round(b.clarity * 100)} %` : i?.clarity !== void 0 && S === "noise" ? `${Math.round(i.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    B && c && d - c.timestamp < 4e3 && /* @__PURE__ */ a.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    V.length > 0 && B && /* @__PURE__ */ a.jsx("ul", { className: "mic-advice", children: V.map((I) => /* @__PURE__ */ a.jsx("li", { children: I }, I)) }),
    r.phase === "error" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ a.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, children: "Lopeta testi" }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: x, onClick: k, children: "Testaa mikrofoni" }),
      E && B && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: M, onClick: C, children: M ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    x && r.purpose !== "test" && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ a.jsxs("fieldset", { className: "plain", disabled: x, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsx("label", { htmlFor: `${_}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ a.jsxs("select", { id: `${_}-device`, value: h.device, onChange: (I) => O("device", I.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ a.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((I, re) => /* @__PURE__ */ a.jsx("option", { value: I.deviceId, children: I.label || `Äänitulo ${re + 1}` }, I.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-rms`, children: [
              "Äänikynnys · ",
              Ta(cs(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (I) => O("minRms", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (I) => O("clarity", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (I) => O("stability", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ a.jsxs("label", { htmlFor: `${_}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ a.jsx("input", { id: `${_}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (I) => O("cents", Number(I.target.value)) })
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
const Vk = (r) => r.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[r.scale]) : Mi[r.mode === "caged" ? "maj" : r.chord].tones, Th = (r, i) => Vk(r).find(([l]) => l === i)?.[1], xf = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Kk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Uk(r, i) {
  return i.choices === "note" ? "Valitse sävelnimi." : i.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Hk(r, i, l, c, d) {
  return i.choices === "degree" ? `Oikein! ${tr(r.root, i.interval, i.degree)} on ${i.degree}. aste.` : xf(r) ? `Oikein! ${i.degree}. aste on ${tr(r.root, i.interval, i.degree)}.` : r.mode === "interval" ? `Oikein! ${Ie(i.reference, r.flats, !0)} → ${i.name} on ${nr[i.interval]} ${Kk(i)}.` : r.mode === "notes" ? l === "board" && d ? `Oikein! ${Ie(d.midi, r.flats)} on ${bh[d.string]}: ${_i(d.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, r.flats, !0)}.` : `Oikein! Sävel oli ${i.name}.`;
}
function Gk(r, i, l, c, d) {
  if (l === "note") return `Ei ${Ie(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (l === "degree") return `Ei ${Th(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Qe(d.midi) === Qe(i.midi);
  if (r.mode === "notes")
    return d.string !== i.position.string ? `Tuo on ${Zt[d.string]}-kieli. Etsi sävel ${Zo[i.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${i.name}.` : `Tuo on ${Ie(d.midi, r.flats)}. Etsi ${i.name}.`;
  if (xf(r)) {
    const p = Qe(d.midi - r.root), m = Th(r, p), x = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && i.check === "pitch" && d.midi !== i.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${i.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${i.degree}. aste sen sisältä.` : `Tuo on ${tr(r.root, p, m)} eli ${m}. aste. Etsi ${i.degree}. aste.` : `Tuo on ${Ie(d.midi, r.flats)}, joka ei kuulu ${x}. Etsi ${i.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Wk(r, i, l) {
  const c = Ie(l, r.flats, !0);
  return Qe(l) === Qe(i.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function jf(r, i = !1) {
  const l = r.split(":"), c = (p) => Number(l[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), h = (p, m) => Zt[p] ? `${Zt[p]}-kieli, ${_i(m)}` : null;
  switch (l[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Ie(c(1), i)}${l[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return l.length === 2 && d(1) ? `Kuule ja toista: ${Ie(c(1), i, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && nr[c(1)] ? `${nr[c(1)]} ${l[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = l[2];
      if (!d(1, 3) || !Mi[p]) return null;
      const m = Mi[p].tones.find(([x]) => x === c(3))?.[1];
      return m ? `${Ah(c(1), p)}: ${m}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ue.SCALES[l[2]];
      if (!d(1) || !p) return null;
      const m = `${ui(c(1))}-${p.name}`;
      if (l.length === 5 && d(3)) {
        const x = Ue.scaleNotes(p).find(([M]) => M === c(3))?.[1];
        return x ? `${m}: ${x}. aste${l[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(l[2] ?? "?")) return null;
      const p = `${ui(c(1))}-duuri, ${l[2]}-muoto`;
      if (l.length === 4 && d(3)) {
        const m = Mi.maj.tones.find(([x]) => x === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Mh(r) {
  return Object.entries(r).flatMap(([i, l]) => {
    const [c, d, h, ...p] = i.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: i, input: c, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: l }];
  });
}
const Jo = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Qk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Yk(r) {
  const i = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${rs(r.mode)}${r.hints ? ` · ${Pa[r.hints].title}` : ""} · ${i} · keskimäärin ${Jo(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Jk({ store: r, s: i, locked: l, changed: c }) {
  const [d, h] = A.useState(""), p = A.useRef(null), { recent: m, sessions: x, stats: M } = r.data, v = bi(i), k = Lh(i), w = [...new Set(m.map((b) => b.mode))].map((b) => {
    const U = m.filter((z) => z.mode === b);
    return { mode: b, ...Fo(U), last: Math.max(...U.map((z) => z.at)) };
  }).sort((b, U) => U.last - b.last), C = Mh(M).filter((b) => !b.guided && b.mode === i.mode && b.input === v && b.check === k && b.stat.attempts >= 3).map((b) => ({ ...b, score: qo(b.stat), text: jf(b.item, i.flats) })).filter((b) => b.text && b.score < 0.8).sort((b, U) => b.score - U.score).slice(0, 5), _ = Mh(M).reduce((b, U) => b + U.stat.attempts, 0);
  function S() {
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
        /* @__PURE__ */ a.jsx("tbody", { children: w.map((b) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "row", children: rs(b.mode) }),
          /* @__PURE__ */ a.jsx("td", { children: b.count }),
          /* @__PURE__ */ a.jsx("td", { children: b.solo ? `${b.soloFirst}/${b.solo} · ${Math.round(b.soloFirst / b.solo * 100)} %` : "–" }),
          /* @__PURE__ */ a.jsx("td", { children: b.guided }),
          /* @__PURE__ */ a.jsx("td", { children: Jo(b.ms / b.count) })
        ] }, b.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsx("h3", { children: "Seuraavaksi" }),
    C.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        rs(i.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: C.map((b) => /* @__PURE__ */ a.jsxs("li", { children: [
        b.text,
        " · viime aikoina ",
        Math.round(ir(b.stat) * 100),
        " % heti oikein · ",
        Jo(sr(b.stat))
      ] }, b.key)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: _ ? `Harjoituksessa ${rs(i.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Qk[i.input],
        ") ja tarkistuksella (",
        i.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ a.jsx($p, { area: { strings: i.strings, min: i.min, max: i.max, fixed: "" }, stats: M, input: i.input, check: i.check, flats: i.flats })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      x.length ? /* @__PURE__ */ a.jsx("ul", { children: x.slice(-10).reverse().map((b) => /* @__PURE__ */ a.jsx("li", { children: Yk(b) }, b.id)) }) : /* @__PURE__ */ a.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ a.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: S, children: "Lataa varmuuskopio" }),
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
function Xk() {
  try {
    return new Vd(localStorage);
  } catch {
    return new Vd();
  }
}
const _h = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Zk = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", qk = [0, 2, 4, 5, 7, 9, 11];
function ey(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function ty() {
  const [r] = A.useState(Xk), [i, l] = A.useState(() => wp(location.search, r.data.settings)), [, c] = A.useReducer((L) => L + 1, 0), d = A.useRef(null), h = A.useRef(new $v()), p = A.useRef(new lr()), m = A.useRef(0), x = A.useRef(), M = A.useRef(), v = A.useRef(null), k = A.useRef(0), w = A.useRef(null), C = A.useRef(i);
  C.current = i;
  const [_, S] = A.useState({ phase: "off", purpose: "none" }), E = A.useRef(_), B = (L) => {
    E.current = L, S(L);
  }, [b, U] = A.useState(null), [z, V] = A.useState(null), [D, O] = A.useState(null), [I, re] = A.useState(0), [Z, we] = A.useState([]), [Ne, Y] = A.useState(!1), [he, G] = A.useState(!1), [oe, se] = A.useState(""), [W, ae] = A.useState("info"), [te, j] = A.useState(""), [g, ne] = A.useState(0), [ce, Ee] = A.useState([]), [H, K] = A.useState([]), [ee, J] = A.useState(null), [pe, Ce] = A.useState(!1), [ge, xe] = A.useState(""), [je, Fe] = A.useState(""), [Te, $] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : uf(L.get("kappale")) ? "songs" : Wp(L.get("polku"));
  }), [le, ue] = A.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function Me() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), ue(!0);
  }
  function _e() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), ue(!1);
  }
  function He() {
    $(null), ue(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const Oe = () => {
    xv().then(we).catch(() => {
    });
  };
  function ze() {
    clearTimeout(M.current), v.current = null, Ce(!1);
  }
  function Je() {
    U(null), V(null), O(null);
  }
  function vt() {
    h.current.stop(), ze(), B({ phase: "off", purpose: "none" }), Je();
  }
  async function qt(L) {
    if (h.current.active && E.current.phase === "on")
      return ze(), B({ ...E.current, purpose: L }), h.current.rearm(), !0;
    B({ phase: "requesting", purpose: L }), Je();
    try {
      const fe = await h.current.start(C.current.device, {
        ..._h(C.current),
        onFrame: (Ge) => Pt.current.frame(Ge),
        onStableNote: (Ge) => Pt.current.stable(Ge)
      }, () => Pt.current.lost());
      return fe ? (B({ phase: "on", purpose: L, info: fe }), Oe(), !0) : !1;
    } catch (fe) {
      return B({ phase: "error", purpose: "none", error: Ov(fe) }), !1;
    }
  }
  function It(L) {
    v.current?.push(L.rms);
    const fe = performance.now();
    fe - k.current < 66 || (k.current = fe, U(L), re(fe), L.midi !== void 0 && L.frequency !== void 0 && V({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: fe }));
  }
  function en(L) {
    E.current.purpose === "test" ? O(L) : E.current.purpose === "round" && Lt(L.midi, "mic", void 0, L.heldMs);
  }
  function Gt() {
    const L = E.current.purpose === "round";
    ze(), Je(), B({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    L && fe && ["active", "feedback", "paused"].includes(fe.phase) && (Re(), G(!1), fe.pause(), j("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Pt = A.useRef({ frame: It, stable: en, lost: Gt });
  Pt.current = { frame: It, stable: en, lost: Gt };
  function gn(L) {
    const fe = Ma(L), Ge = fe.device !== C.current.device;
    C.current = fe, l(fe), r.settings(fe), j(""), h.current.active && (Ge && E.current.purpose === "test" ? (vt(), qt("test")) : h.current.setOptions(_h(fe)));
  }
  function be(L) {
    Fe(""), d.current = null, ue(!1), $(L);
  }
  function on() {
    xe(""), qt("test");
  }
  function Le() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (ze(), v.current = [], Ce(!0), xe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), M.current = setTimeout(() => {
      const L = v.current ?? [];
      if (ze(), L.length < 10) {
        xe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: Ge, loud: Wt } = Fv(L);
      gn({ ...C.current, minRms: fe }), xe(`Taustakohina on ${Math.round(cs(Ge))} dB ja äänikynnys nyt ${Math.round(cs(fe))} dB. ${Wt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Re() {
    m.current++, clearTimeout(x.current), p.current.stop();
  }
  function De(L, fe) {
    if (!L.results.length) return;
    const Ge = Fo(L.results);
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
      fe === m.current && j("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== L || (L.resume(), h.current.resume(), G(!1), se(""), c());
  }
  async function at(L) {
    Ee([]), K([]), J(null), j(""), ne(L.hintLevel), h.current.rearm(), ae("info"), se(""), c(), L.question?.sound.length && await Ze(L);
  }
  async function un() {
    const L = C.current, fe = Oo(L);
    if (fe) {
      j(fe);
      return;
    }
    Re();
    const Ge = m.current;
    if (j(""), xe(""), Fe(""), ga(L)) {
      Y(!0);
      const ot = await qt("round");
      if (Ge !== m.current) return;
      if (Y(!1), !ot) {
        j("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && vt();
    const Wt = new Gp(L, () => r.data.stats, (ot) => r.record(ot));
    try {
      Wt.start();
    } catch (ot) {
      E.current.purpose === "round" && vt(), j(ot instanceof Error ? ot.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Wt, requestAnimationFrame(() => w.current?.scrollIntoView({ block: "start", behavior: "auto" })), await at(Wt);
  }
  function St() {
    Re(), Y(!1), vt();
  }
  function Lt(L, fe, Ge, Wt = 0) {
    const ot = d.current, Rt = ot?.question;
    if (!ot || !Rt || ot.phase !== "active") return;
    const vs = ot.answer(L, fe, Ge, Wt);
    if (vs !== "ignored") {
      if (vs === "candidate")
        J(L), ae("bad"), se(Wk(ot.settings, Rt, L));
      else if (vs === "wrong")
        Ge ? Ee((Et) => [...Et, Ge]) : K((Et) => [...Et, L]), ae("bad"), se(Gk(ot.settings, Rt, fe, L, Ge));
      else if (J(null), ae("good"), se(Hk(ot.settings, Rt, fe, L, Ge)), De(ot, !1), ot.settings.advance) {
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
        cn(!1), j(fe instanceof Error ? fe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
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
    fe && (fe.stop(), De(fe, L)), J(null), ne(0), Ee([]), K([]), j(""), Fe(L ? "complete" : "stopped"), ae("info"), se(""), c();
  }
  function Mn() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Re(), G(!1), L.pause();
    const fe = E.current.purpose === "round";
    fe && vt(), ae("info"), se(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function or() {
    const L = d.current;
    if (!L || L.phase !== "paused" || he) return;
    Re();
    const fe = m.current;
    if (j(""), ga(L.settings)) {
      Y(!0);
      const Ge = await qt("round");
      if (fe !== m.current) return;
      if (Y(!1), !Ge) {
        j("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), ae("info"), se(""), c(), L.phase === "active" && (h.current.rearm(), L.question?.sound.length && await Ze(L));
  }
  function fs(L) {
    const fe = d.current;
    !fe || fe.phase !== "active" || (fe.useHint(L), ne(L), c());
  }
  const hi = A.useRef({ hidden: () => {
  }, restored: () => {
  } });
  hi.current = {
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
      m.current++, clearTimeout(x.current), clearTimeout(M.current), h.current.stop(), p.current.stop(), Rv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && hi.current.hidden();
    }, Wt = (ot) => {
      ot.persisted && hi.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Wt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Wt);
    };
  }, []);
  const Pi = A.useRef(null), fi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${he}`;
  A.useEffect(() => {
    const L = d.current, fe = w.current, Ge = document.activeElement;
    !L || !fe || !(Ge === document.body || fe.contains(Ge)) || (L.phase === "feedback" ? Pi.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !he && (Ge === document.body || Ge === Pi.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [fi]);
  const Ve = d.current, et = !!Ve && ["active", "paused", "feedback"].includes(Ve.phase), nt = et ? Ve.settings : i, ht = et ? Ve.question : void 0, Dt = !!ht && !!Ve?.answered, dn = et && Ve.phase === "paused" && !he && !Dt, Dn = et && Ve.phase === "active" && !he, ms = et ? null : Oo(i), ps = et || Ne, ur = Ai(nt), _n = Ip(nt), zn = ht && !Dt ? g : 0, Li = ht ? Hp(nt, ht, Dt ? 2 : zn) : { marks: [], text: "" }, cr = [...new Map([...Li.marks, ...Dt ? [] : ce.map((L) => ({ ...L, label: Ie(L.midi, nt.flats), kind: "wrong" }))].map((L) => [Xe(L), L])).values()], dr = et && ga(nt), hr = !!ht && !dn && (ht.choices === "position" || cr.length > 0), wt = Ve ? Fo(Ve.results) : null, fr = !Ve || nt.hints !== "fade" ? "" : Ve.index <= 3 ? " · vastaus näkyy" : Ve.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", mr = Ve && !et ? Ve.results.filter((L) => L.errors > 0 || L.hint) : [], [Oa, lt] = ey(nt), Bn = /* @__PURE__ */ a.jsxs("div", { className: "intro", children: [
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
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(Yp, { onSelect: be })
  ] }) : !et && Te === "scales" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(qv, { onBack: He })
  ] }) : !et && Te === "ear" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    le ? /* @__PURE__ */ a.jsx(ek, { onBack: _e }) : /* @__PURE__ */ a.jsx(Jp, { onBack: He, onNotes: Me })
  ] }) : !et && Te === "chords" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(ik, { onBack: He })
  ] }) : !et && Te === "songs" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx(Ik, { onBack: He })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Bn,
    xn,
    /* @__PURE__ */ a.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ a.jsxs("a", { href: Oa, children: [
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
      /* @__PURE__ */ a.jsx("strong", { children: rs(nt.mode) }),
      " · ",
      Gd(nt)
    ] }) : Te === "legacy" ? /* @__PURE__ */ a.jsx(Wd, { s: i, change: gn, locked: ps, problem: ms }) : /* @__PURE__ */ a.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ a.jsx(Wd, { s: i, change: gn, locked: ps, problem: ms })
    ] }),
    !et && (Te === "legacy" || ga(i)) && /* @__PURE__ */ a.jsx(
      Bk,
      {
        mic: _,
        frame: b,
        heard: z,
        accepted: D,
        now: I,
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
    /* @__PURE__ */ a.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: w, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ a.jsx("h2", { id: "session-title", children: rs(nt.mode) }),
        /* @__PURE__ */ a.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Ve.index}${Ve.total ? " / " + Ve.total : " · vapaa harjoittelu"} · ${Pa[nt.hints].title}${fr}${Ve.phase === "paused" && !he ? " · tauolla" : ""}` : je === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
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
              /* @__PURE__ */ a.jsx("dd", { children: Zk(wt.ms / wt.count) })
            ] })
          ] }),
          wt.solo === 0 && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          mr.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ a.jsx("ul", { children: [...new Set(mr.map((L) => jf(L.item, i.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ a.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ a.jsx("p", { className: "question idle", children: Gd(i) }),
        /* @__PURE__ */ a.jsx("div", { className: "action-row", children: Ne ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: St, children: "Peru" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: !!ms, onClick: () => {
          un();
        }, children: Ve?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ve && /* @__PURE__ */ a.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ht && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: dn ? "Harjoitus on tauolla." : ht.prompt }),
        /* @__PURE__ */ a.jsx("p", { className: "how", "data-testid": "instruction", children: dn ? "Kysymys palaa näkyviin, kun jatkat." : he ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Uk(nt, ht) }),
        Ve.hintLevel > 0 && !Dt && /* @__PURE__ */ a.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: nt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        dr && /* @__PURE__ */ a.jsx(zk, { mic: _, frame: b, heard: z, s: nt, now: I }),
        ht.choices === "note" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (nt.accidentals ? Array.from({ length: 12 }, (L, fe) => fe) : qk).map((L) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.midi % 12 ? "right" : "", disabled: !Dn || H.includes(L), onClick: () => Lt(L, "note"), children: Ie(L, nt.flats) }, L)) }),
        ht.choices === "degree" && !dn && /* @__PURE__ */ a.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (nt.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[nt.scale]) : Mi[nt.chord].tones).map(([L, fe]) => /* @__PURE__ */ a.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.interval ? "right" : "", disabled: !Dn || H.includes(L), onClick: () => Lt(L, "degree"), children: fe }, L)) }),
        hr && /* @__PURE__ */ a.jsx(
          ci,
          {
            area: _n,
            marks: cr,
            disabled: !Dn || ht.choices !== "position" || nt.input === "mic",
            onAnswer: (L) => Lt(L.midi, "board", L),
            caption: ur.fixed === "shape" ? `${nt.shape}-muodon alue` : ur.fixed === "box" ? `Boksin ${nt.box} alue` : "Otelauta"
          }
        ),
        !Dt && !dn && zn > 0 && Li.text && /* @__PURE__ */ a.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Li.text }),
        /* @__PURE__ */ a.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        ee !== null && Ve.phase === "active" && /* @__PURE__ */ a.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => {
            Ve.confirmWrong(), J(null), se("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ a.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        te && /* @__PURE__ */ a.jsx("p", { className: "error", role: "alert", children: te }),
        /* @__PURE__ */ a.jsxs("div", { className: "action-row", children: [
          Ve.phase === "feedback" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", ref: Pi, onClick: () => {
            Tn();
          }, children: Ve.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ve.phase === "active" && !Dt && !he && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            zn === 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => fs(Math.max(1, Ve.hintLevel)), children: Ve.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            zn === 1 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => fs(2), children: "Näytä vastaus" }),
            zn > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => ne(0), children: "Piilota vihje" })
          ] }),
          ht.sound.length > 0 && /* @__PURE__ */ a.jsx("button", { type: "button", disabled: !Dn, onClick: () => {
            Ze(Ve);
          }, children: "Kuuntele uudelleen" }),
          Ve.phase === "paused" && !he ? /* @__PURE__ */ a.jsx("button", { type: "button", className: "primary", disabled: Ne, onClick: () => {
            or();
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
        /* @__PURE__ */ a.jsx("a", { href: Ep(i), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ a.jsx(Jk, { store: r, s: i, locked: ps, changed: () => {
        const L = Ma(r.data.settings);
        C.current = L, l(L), c();
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
pp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ a.jsx(ty, {}));
//# sourceMappingURL=app.js.map
