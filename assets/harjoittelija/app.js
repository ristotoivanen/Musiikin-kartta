function rh(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ao = { exports: {} }, $i = {}, Oo = { exports: {} }, _e = {};
var _c;
function ih() {
  if (_c) return _e;
  _c = 1;
  var l = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), T = Symbol.iterator;
  function O(g) {
    return g === null || typeof g != "object" ? null : (g = T && g[T] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, _ = {};
  function E(g, $, ae) {
    this.props = g, this.context = $, this.refs = _, this.updater = ae || Q;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(g, $) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, $, "setState");
  }, E.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function B() {
  }
  B.prototype = E.prototype;
  function M(g, $, ae) {
    this.props = g, this.context = $, this.refs = _, this.updater = ae || Q;
  }
  var Y = M.prototype = new B();
  Y.constructor = M, H(Y, E.prototype), Y.isPureReactComponent = !0;
  var b = Array.isArray, ge = Object.prototype.hasOwnProperty, oe = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(g, $, ae) {
    var pe, ke = {}, ye = null, z = null;
    if ($ != null) for (pe in $.ref !== void 0 && (z = $.ref), $.key !== void 0 && (ye = "" + $.key), $) ge.call($, pe) && !K.hasOwnProperty(pe) && (ke[pe] = $[pe]);
    var V = arguments.length - 2;
    if (V === 1) ke.children = ae;
    else if (1 < V) {
      for (var F = Array(V), ee = 0; ee < V; ee++) F[ee] = arguments[ee + 2];
      ke.children = F;
    }
    if (g && g.defaultProps) for (pe in V = g.defaultProps, V) ke[pe] === void 0 && (ke[pe] = V[pe]);
    return { $$typeof: l, type: g, key: ye, ref: z, props: ke, _owner: oe.current };
  }
  function le(g, $) {
    return { $$typeof: l, type: g.type, key: $, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function de(g) {
    return typeof g == "object" && g !== null && g.$$typeof === l;
  }
  function Ie(g) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(ae) {
      return $[ae];
    });
  }
  var He = /\/+/g;
  function Re(g, $) {
    return typeof g == "object" && g !== null && g.key != null ? Ie("" + g.key) : $.toString(36);
  }
  function Le(g, $, ae, pe, ke) {
    var ye = typeof g;
    (ye === "undefined" || ye === "boolean") && (g = null);
    var z = !1;
    if (g === null) z = !0;
    else switch (ye) {
      case "string":
      case "number":
        z = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case l:
          case o:
            z = !0;
        }
    }
    if (z) return z = g, ke = ke(z), g = pe === "" ? "." + Re(z, 0) : pe, b(ke) ? (ae = "", g != null && (ae = g.replace(He, "$&/") + "/"), Le(ke, $, ae, "", function(ee) {
      return ee;
    })) : ke != null && (de(ke) && (ke = le(ke, ae + (!ke.key || z && z.key === ke.key ? "" : ("" + ke.key).replace(He, "$&/") + "/") + g)), $.push(ke)), 1;
    if (z = 0, pe = pe === "" ? "." : pe + ":", b(g)) for (var V = 0; V < g.length; V++) {
      ye = g[V];
      var F = pe + Re(ye, V);
      z += Le(ye, $, ae, F, ke);
    }
    else if (F = O(g), typeof F == "function") for (g = F.call(g), V = 0; !(ye = g.next()).done; ) ye = ye.value, F = pe + Re(ye, V++), z += Le(ye, $, ae, F, ke);
    else if (ye === "object") throw $ = String(g), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return z;
  }
  function De(g, $, ae) {
    if (g == null) return g;
    var pe = [], ke = 0;
    return Le(g, pe, "", "", function(ye) {
      return $.call(ae, ye, ke++);
    }), pe;
  }
  function We(g) {
    if (g._status === -1) {
      var $ = g._result;
      $ = $(), $.then(function(ae) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = ae);
      }, function(ae) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = ae);
      }), g._status === -1 && (g._status = 0, g._result = $);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var we = { current: null }, D = { transition: null }, X = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: D, ReactCurrentOwner: oe };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _e.Children = { map: De, forEach: function(g, $, ae) {
    De(g, function() {
      $.apply(this, arguments);
    }, ae);
  }, count: function(g) {
    var $ = 0;
    return De(g, function() {
      $++;
    }), $;
  }, toArray: function(g) {
    return De(g, function($) {
      return $;
    }) || [];
  }, only: function(g) {
    if (!de(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, _e.Component = E, _e.Fragment = a, _e.Profiler = h, _e.PureComponent = M, _e.StrictMode = d, _e.Suspense = N, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, _e.act = W, _e.cloneElement = function(g, $, ae) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var pe = H({}, g.props), ke = g.key, ye = g.ref, z = g._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (ye = $.ref, z = oe.current), $.key !== void 0 && (ke = "" + $.key), g.type && g.type.defaultProps) var V = g.type.defaultProps;
      for (F in $) ge.call($, F) && !K.hasOwnProperty(F) && (pe[F] = $[F] === void 0 && V !== void 0 ? V[F] : $[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) pe.children = ae;
    else if (1 < F) {
      V = Array(F);
      for (var ee = 0; ee < F; ee++) V[ee] = arguments[ee + 2];
      pe.children = V;
    }
    return { $$typeof: l, type: g.type, key: ke, ref: ye, props: pe, _owner: z };
  }, _e.createContext = function(g) {
    return g = { $$typeof: v, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: f, _context: g }, g.Consumer = g;
  }, _e.createElement = U, _e.createFactory = function(g) {
    var $ = U.bind(null, g);
    return $.type = g, $;
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(g) {
    return { $$typeof: x, render: g };
  }, _e.isValidElement = de, _e.lazy = function(g) {
    return { $$typeof: k, _payload: { _status: -1, _result: g }, _init: We };
  }, _e.memo = function(g, $) {
    return { $$typeof: I, type: g, compare: $ === void 0 ? null : $ };
  }, _e.startTransition = function(g) {
    var $ = D.transition;
    D.transition = {};
    try {
      g();
    } finally {
      D.transition = $;
    }
  }, _e.unstable_act = W, _e.useCallback = function(g, $) {
    return we.current.useCallback(g, $);
  }, _e.useContext = function(g) {
    return we.current.useContext(g);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(g) {
    return we.current.useDeferredValue(g);
  }, _e.useEffect = function(g, $) {
    return we.current.useEffect(g, $);
  }, _e.useId = function() {
    return we.current.useId();
  }, _e.useImperativeHandle = function(g, $, ae) {
    return we.current.useImperativeHandle(g, $, ae);
  }, _e.useInsertionEffect = function(g, $) {
    return we.current.useInsertionEffect(g, $);
  }, _e.useLayoutEffect = function(g, $) {
    return we.current.useLayoutEffect(g, $);
  }, _e.useMemo = function(g, $) {
    return we.current.useMemo(g, $);
  }, _e.useReducer = function(g, $, ae) {
    return we.current.useReducer(g, $, ae);
  }, _e.useRef = function(g) {
    return we.current.useRef(g);
  }, _e.useState = function(g) {
    return we.current.useState(g);
  }, _e.useSyncExternalStore = function(g, $, ae) {
    return we.current.useSyncExternalStore(g, $, ae);
  }, _e.useTransition = function() {
    return we.current.useTransition();
  }, _e.version = "18.3.1", _e;
}
var Cc;
function Zo() {
  return Cc || (Cc = 1, Oo.exports = ih()), Oo.exports;
}
var Nc;
function lh() {
  if (Nc) return $i;
  Nc = 1;
  var l = Zo(), o = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, h = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(x, N, I) {
    var k, T = {}, O = null, Q = null;
    I !== void 0 && (O = "" + I), N.key !== void 0 && (O = "" + N.key), N.ref !== void 0 && (Q = N.ref);
    for (k in N) d.call(N, k) && !f.hasOwnProperty(k) && (T[k] = N[k]);
    if (x && x.defaultProps) for (k in N = x.defaultProps, N) T[k] === void 0 && (T[k] = N[k]);
    return { $$typeof: o, type: x, key: O, ref: Q, props: T, _owner: h.current };
  }
  return $i.Fragment = a, $i.jsx = v, $i.jsxs = v, $i;
}
var Mc;
function sh() {
  return Mc || (Mc = 1, Ao.exports = lh()), Ao.exports;
}
var c = sh(), ve = Zo(), Ql = {}, Io = { exports: {} }, Dt = {}, Do = { exports: {} }, Bo = {};
var Tc;
function oh() {
  return Tc || (Tc = 1, (function(l) {
    function o(D, X) {
      var W = D.length;
      D.push(X);
      e: for (; 0 < W; ) {
        var g = W - 1 >>> 1, $ = D[g];
        if (0 < h($, X)) D[g] = X, D[W] = $, W = g;
        else break e;
      }
    }
    function a(D) {
      return D.length === 0 ? null : D[0];
    }
    function d(D) {
      if (D.length === 0) return null;
      var X = D[0], W = D.pop();
      if (W !== X) {
        D[0] = W;
        e: for (var g = 0, $ = D.length, ae = $ >>> 1; g < ae; ) {
          var pe = 2 * (g + 1) - 1, ke = D[pe], ye = pe + 1, z = D[ye];
          if (0 > h(ke, W)) ye < $ && 0 > h(z, ke) ? (D[g] = z, D[ye] = W, g = ye) : (D[g] = ke, D[pe] = W, g = pe);
          else if (ye < $ && 0 > h(z, W)) D[g] = z, D[ye] = W, g = ye;
          else break e;
        }
      }
      return X;
    }
    function h(D, X) {
      var W = D.sortIndex - X.sortIndex;
      return W !== 0 ? W : D.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var v = Date, x = v.now();
      l.unstable_now = function() {
        return v.now() - x;
      };
    }
    var N = [], I = [], k = 1, T = null, O = 3, Q = !1, H = !1, _ = !1, E = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Y(D) {
      for (var X = a(I); X !== null; ) {
        if (X.callback === null) d(I);
        else if (X.startTime <= D) d(I), X.sortIndex = X.expirationTime, o(N, X);
        else break;
        X = a(I);
      }
    }
    function b(D) {
      if (_ = !1, Y(D), !H) if (a(N) !== null) H = !0, We(ge);
      else {
        var X = a(I);
        X !== null && we(b, X.startTime - D);
      }
    }
    function ge(D, X) {
      H = !1, _ && (_ = !1, B(U), U = -1), Q = !0;
      var W = O;
      try {
        for (Y(X), T = a(N); T !== null && (!(T.expirationTime > X) || D && !Ie()); ) {
          var g = T.callback;
          if (typeof g == "function") {
            T.callback = null, O = T.priorityLevel;
            var $ = g(T.expirationTime <= X);
            X = l.unstable_now(), typeof $ == "function" ? T.callback = $ : T === a(N) && d(N), Y(X);
          } else d(N);
          T = a(N);
        }
        if (T !== null) var ae = !0;
        else {
          var pe = a(I);
          pe !== null && we(b, pe.startTime - X), ae = !1;
        }
        return ae;
      } finally {
        T = null, O = W, Q = !1;
      }
    }
    var oe = !1, K = null, U = -1, le = 5, de = -1;
    function Ie() {
      return !(l.unstable_now() - de < le);
    }
    function He() {
      if (K !== null) {
        var D = l.unstable_now();
        de = D;
        var X = !0;
        try {
          X = K(!0, D);
        } finally {
          X ? Re() : (oe = !1, K = null);
        }
      } else oe = !1;
    }
    var Re;
    if (typeof M == "function") Re = function() {
      M(He);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), De = Le.port2;
      Le.port1.onmessage = He, Re = function() {
        De.postMessage(null);
      };
    } else Re = function() {
      E(He, 0);
    };
    function We(D) {
      K = D, oe || (oe = !0, Re());
    }
    function we(D, X) {
      U = E(function() {
        D(l.unstable_now());
      }, X);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, l.unstable_continueExecution = function() {
      H || Q || (H = !0, We(ge));
    }, l.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < D ? Math.floor(1e3 / D) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, l.unstable_getFirstCallbackNode = function() {
      return a(N);
    }, l.unstable_next = function(D) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = O;
      }
      var W = O;
      O = X;
      try {
        return D();
      } finally {
        O = W;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(D, X) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = O;
      O = D;
      try {
        return X();
      } finally {
        O = W;
      }
    }, l.unstable_scheduleCallback = function(D, X, W) {
      var g = l.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? g + W : g) : W = g, D) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = W + $, D = { id: k++, callback: X, priorityLevel: D, startTime: W, expirationTime: $, sortIndex: -1 }, W > g ? (D.sortIndex = W, o(I, D), a(N) === null && D === a(I) && (_ ? (B(U), U = -1) : _ = !0, we(b, W - g))) : (D.sortIndex = $, o(N, D), H || Q || (H = !0, We(ge))), D;
    }, l.unstable_shouldYield = Ie, l.unstable_wrapCallback = function(D) {
      var X = O;
      return function() {
        var W = O;
        O = X;
        try {
          return D.apply(this, arguments);
        } finally {
          O = W;
        }
      };
    };
  })(Bo)), Bo;
}
var $c;
function ah() {
  return $c || ($c = 1, Do.exports = oh()), Do.exports;
}
var Rc;
function uh() {
  if (Rc) return Dt;
  Rc = 1;
  var l = Zo(), o = ah();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), h = {};
  function f(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (h[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, T = {};
  function O(e) {
    return N.call(T, e) ? !0 : N.call(k, e) ? !1 : I.test(e) ? T[e] = !0 : (k[e] = !0, !1);
  }
  function Q(e, t, n, r) {
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
  function H(e, t, n, r) {
    if (t === null || typeof t > "u" || Q(e, t, n, r)) return !0;
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
  function _(e, t, n, r, i, s, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = u;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new _(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new _(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new _(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new _(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new _(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new _(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      B,
      M
    );
    E[t] = new _(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(B, M);
    E[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(B, M);
    E[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Y(e, t, n, r) {
    var i = E.hasOwnProperty(t) ? E[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (H(t, n, i, r) && (n = null), r || i === null ? O(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = /* @__PURE__ */ Symbol.for("react.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), K = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), de = /* @__PURE__ */ Symbol.for("react.provider"), Ie = /* @__PURE__ */ Symbol.for("react.context"), He = /* @__PURE__ */ Symbol.for("react.forward_ref"), Re = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), De = /* @__PURE__ */ Symbol.for("react.memo"), We = /* @__PURE__ */ Symbol.for("react.lazy"), we = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, g;
  function $(e) {
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
  function pe(e, t) {
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
        } catch (S) {
          var r = S;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (S) {
          r = S;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (var i = S.stack.split(`
`), s = r.stack.split(`
`), u = i.length - 1, p = s.length - 1; 1 <= u && 0 <= p && i[u] !== s[p]; ) p--;
        for (; 1 <= u && 0 <= p; u--, p--) if (i[u] !== s[p]) {
          if (u !== 1 || p !== 1)
            do
              if (u--, p--, 0 > p || i[u] !== s[p]) {
                var m = `
` + i[u].replace(" at new ", " at ");
                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
              }
            while (1 <= u && 0 <= p);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? $(e) : "";
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return $(e.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = pe(e.type, !1), e;
      case 11:
        return e = pe(e.type.render, !1), e;
      case 1:
        return e = pe(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case K:
        return "Fragment";
      case oe:
        return "Portal";
      case le:
        return "Profiler";
      case U:
        return "StrictMode";
      case Re:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ie:
        return (e.displayName || "Context") + ".Consumer";
      case de:
        return (e._context.displayName || "Context") + ".Provider";
      case He:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case De:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case We:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function z(e) {
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
        return ye(t);
      case 8:
        return t === U ? "StrictMode" : "Mode";
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
  function V(e) {
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
      var i = n.get, s = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(u) {
        r = "" + u, s.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function he(e) {
    e._valueTracker || (e._valueTracker = ee(e));
  }
  function re(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = F(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ie(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function se(e, t) {
    var n = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Se(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = V(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xe(e, t) {
    t = t.checked, t != null && Y(e, "checked", t, !1);
  }
  function Ce(e, t) {
    xe(e, t);
    var n = V(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Te(e, t.type, n) : t.hasOwnProperty("defaultValue") && Te(e, t.type, V(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ae(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Te(e, t, n) {
    (t !== "number" || ie(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Be = Array.isArray;
  function Ve(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + V(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function be(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (Be(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: V(n) };
  }
  function Fe(e, t) {
    var n = V(t.value), r = V(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ot(e) {
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
  function bt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ct, xn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ct = ct || document.createElement("div"), ct.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ct.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function fe(e, t) {
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
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Pt).forEach(function(e) {
    je.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Pt[t] = Pt[e];
    });
  });
  function Ne(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pt.hasOwnProperty(e) && Pt[e] ? ("" + t).trim() : t + "px";
  }
  function Ee(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Ne(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Xe = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function at(e, t) {
    if (t) {
      if (Xe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Kt(e, t) {
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
  var Lt = null;
  function dn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var en = null, wt = null, Rn = null;
  function Me(e) {
    if (e = mi(e)) {
      if (typeof en != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = ol(t), en(e.stateNode, e.type, t));
    }
  }
  function ht(e) {
    wt ? Rn ? Rn.push(e) : Rn = [e] : wt = e;
  }
  function Ke() {
    if (wt) {
      var e = wt, t = Rn;
      if (Rn = wt = null, Me(e), t) for (e = 0; e < t.length; e++) Me(t[e]);
    }
  }
  function pt(e, t) {
    return e(t);
  }
  function Qt() {
  }
  var fn = !1;
  function nr(e, t, n) {
    if (fn) return e(t, n);
    fn = !0;
    try {
      return pt(e, t, n);
    } finally {
      fn = !1, (wt !== null || Rn !== null) && (Qt(), Ke());
    }
  }
  function Pn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
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
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var xr = !1;
  if (x) try {
    var Ln = {};
    Object.defineProperty(Ln, "passive", { get: function() {
      xr = !0;
    } }), window.addEventListener("test", Ln, Ln), window.removeEventListener("test", Ln, Ln);
  } catch {
    xr = !1;
  }
  function ql(e, t, n, r, i, s, u, p, m) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (P) {
      this.onError(P);
    }
  }
  var tn = !1, Fn = null, rr = !1, Xr = null, bl = { onError: function(e) {
    tn = !0, Fn = e;
  } };
  function jt(e, t, n, r, i, s, u, p, m) {
    tn = !1, Fn = null, ql.apply(bl, arguments);
  }
  function es(e, t, n, r, i, s, u, p, m) {
    if (jt.apply(this, arguments), tn) {
      if (tn) {
        var S = Fn;
        tn = !1, Fn = null;
      } else throw Error(a(198));
      rr || (rr = !0, Xr = S);
    }
  }
  function hn(e) {
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
  function Di(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Bi(e) {
    if (hn(e) !== e) throw Error(a(188));
  }
  function C(e) {
    var t = e.alternate;
    if (!t) {
      if (t = hn(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return Bi(i), e;
          if (s === r) return Bi(i), t;
          s = s.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) n = i, r = s;
      else {
        for (var u = !1, p = i.child; p; ) {
          if (p === n) {
            u = !0, n = i, r = s;
            break;
          }
          if (p === r) {
            u = !0, r = i, n = s;
            break;
          }
          p = p.sibling;
        }
        if (!u) {
          for (p = s.child; p; ) {
            if (p === n) {
              u = !0, n = s, r = i;
              break;
            }
            if (p === r) {
              u = !0, r = s, n = i;
              break;
            }
            p = p.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function J(e) {
    return e = C(e), e !== null ? $e(e) : null;
  }
  function $e(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $e(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Bt = o.unstable_scheduleCallback, it = o.unstable_cancelCallback, wr = o.unstable_shouldYield, Jr = o.unstable_requestPaint, Ue = o.unstable_now, md = o.unstable_getCurrentPriorityLevel, ts = o.unstable_ImmediatePriority, ea = o.unstable_UserBlockingPriority, Vi = o.unstable_NormalPriority, vd = o.unstable_LowPriority, ta = o.unstable_IdlePriority, Ui = null, pn = null;
  function yd(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var nn = Math.clz32 ? Math.clz32 : xd, gd = Math.log, kd = Math.LN2;
  function xd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gd(e) / kd | 0) | 0;
  }
  var Hi = 64, Wi = 4194304;
  function Zr(e) {
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
  function Ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, s = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var p = u & ~i;
      p !== 0 ? r = Zr(p) : (s &= u, s !== 0 && (r = Zr(s)));
    } else u = n & ~i, u !== 0 ? r = Zr(u) : s !== 0 && (r = Zr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - nn(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function wd(e, t) {
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
  function jd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var u = 31 - nn(s), p = 1 << u, m = i[u];
      m === -1 ? ((p & n) === 0 || (p & r) !== 0) && (i[u] = wd(p, t)) : m <= t && (e.expiredLanes |= p), s &= ~p;
    }
  }
  function ns(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function na() {
    var e = Hi;
    return Hi <<= 1, (Hi & 4194240) === 0 && (Hi = 64), e;
  }
  function rs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nn(t), e[t] = n;
  }
  function Sd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - nn(n), s = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
    }
  }
  function is(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - nn(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Oe = 0;
  function ra(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ia, ls, la, sa, oa, ss = !1, Qi = [], zn = null, An = null, On = null, br = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), In = [], Ed = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function aa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        An = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        br.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ei.delete(t.pointerId);
    }
  }
  function ti(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = mi(t), t !== null && ls(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function _d(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return zn = ti(zn, e, t, n, r, i), !0;
      case "dragenter":
        return An = ti(An, e, t, n, r, i), !0;
      case "mouseover":
        return On = ti(On, e, t, n, r, i), !0;
      case "pointerover":
        var s = i.pointerId;
        return br.set(s, ti(br.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return s = i.pointerId, ei.set(s, ti(ei.get(s) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function ua(e) {
    var t = ir(e.target);
    if (t !== null) {
      var n = hn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Di(n), t !== null) {
            e.blockedOn = t, oa(e.priority, function() {
              la(n);
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
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = as(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Lt = r, n.target.dispatchEvent(r), Lt = null;
      } else return t = mi(n), t !== null && ls(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ca(e, t, n) {
    Gi(e) && n.delete(t);
  }
  function Cd() {
    ss = !1, zn !== null && Gi(zn) && (zn = null), An !== null && Gi(An) && (An = null), On !== null && Gi(On) && (On = null), br.forEach(ca), ei.forEach(ca);
  }
  function ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ss || (ss = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Cd)));
  }
  function ri(e) {
    function t(i) {
      return ni(i, e);
    }
    if (0 < Qi.length) {
      ni(Qi[0], e);
      for (var n = 1; n < Qi.length; n++) {
        var r = Qi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && ni(zn, e), An !== null && ni(An, e), On !== null && ni(On, e), br.forEach(t), ei.forEach(t), n = 0; n < In.length; n++) r = In[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && (n = In[0], n.blockedOn === null); ) ua(n), n.blockedOn === null && In.shift();
  }
  var jr = b.ReactCurrentBatchConfig, Yi = !0;
  function Nd(e, t, n, r) {
    var i = Oe, s = jr.transition;
    jr.transition = null;
    try {
      Oe = 1, os(e, t, n, r);
    } finally {
      Oe = i, jr.transition = s;
    }
  }
  function Md(e, t, n, r) {
    var i = Oe, s = jr.transition;
    jr.transition = null;
    try {
      Oe = 4, os(e, t, n, r);
    } finally {
      Oe = i, jr.transition = s;
    }
  }
  function os(e, t, n, r) {
    if (Yi) {
      var i = as(e, t, n, r);
      if (i === null) _s(e, t, r, Xi, n), aa(e, r);
      else if (_d(i, e, t, n, r)) r.stopPropagation();
      else if (aa(e, r), t & 4 && -1 < Ed.indexOf(e)) {
        for (; i !== null; ) {
          var s = mi(i);
          if (s !== null && ia(s), s = as(e, t, n, r), s === null && _s(e, t, r, Xi, n), s === i) break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else _s(e, t, r, null, n);
    }
  }
  var Xi = null;
  function as(e, t, n, r) {
    if (Xi = null, e = dn(r), e = ir(e), e !== null) if (t = hn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Di(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Xi = e, null;
  }
  function da(e) {
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
        switch (md()) {
          case ts:
            return 1;
          case ea:
            return 4;
          case Vi:
          case vd:
            return 16;
          case ta:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dn = null, us = null, Ji = null;
  function fa() {
    if (Ji) return Ji;
    var e, t = us, n = t.length, r, i = "value" in Dn ? Dn.value : Dn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === i[s - r]; r++) ;
    return Ji = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qi() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function Vt(e) {
    function t(n, r, i, s, u) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = u, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(s) : s[p]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? qi : ha, this.isPropagationStopped = ha, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qi);
    }, persist: function() {
    }, isPersistent: qi }), t;
  }
  var Sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, cs = Vt(Sr), ii = W({}, Sr, { view: 0, detail: 0 }), Td = Vt(ii), ds, fs, li, bi = W({}, ii, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ps, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== li && (li && e.type === "mousemove" ? (ds = e.screenX - li.screenX, fs = e.screenY - li.screenY) : fs = ds = 0, li = e), ds);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : fs;
  } }), pa = Vt(bi), $d = W({}, bi, { dataTransfer: 0 }), Rd = Vt($d), Pd = W({}, ii, { relatedTarget: 0 }), hs = Vt(Pd), Ld = W({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fd = Vt(Ld), zd = W({}, Sr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ad = Vt(zd), Od = W({}, Sr, { data: 0 }), ma = Vt(Od), Id = {
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
  }, Dd = {
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
  }, Bd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bd[e]) ? !!t[e] : !1;
  }
  function ps() {
    return Vd;
  }
  var Ud = W({}, ii, { key: function(e) {
    if (e.key) {
      var t = Id[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ps, charCode: function(e) {
    return e.type === "keypress" ? Zi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Hd = Vt(Ud), Wd = W({}, bi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), va = Vt(Wd), Kd = W({}, ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ps }), Qd = Vt(Kd), Gd = W({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yd = Vt(Gd), Xd = W({}, bi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jd = Vt(Xd), Zd = [9, 13, 27, 32], ms = x && "CompositionEvent" in window, si = null;
  x && "documentMode" in document && (si = document.documentMode);
  var qd = x && "TextEvent" in window && !si, ya = x && (!ms || si && 8 < si && 11 >= si), ga = " ", ka = !1;
  function xa(e, t) {
    switch (e) {
      case "keyup":
        return Zd.indexOf(t.keyCode) !== -1;
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
  function wa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Er = !1;
  function bd(e, t) {
    switch (e) {
      case "compositionend":
        return wa(t);
      case "keypress":
        return t.which !== 32 ? null : (ka = !0, ga);
      case "textInput":
        return e = t.data, e === ga && ka ? null : e;
      default:
        return null;
    }
  }
  function ef(e, t) {
    if (Er) return e === "compositionend" || !ms && xa(e, t) ? (e = fa(), Ji = us = Dn = null, Er = !1, e) : null;
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
        return ya && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tf[e.type] : t === "textarea";
  }
  function Sa(e, t, n, r) {
    ht(r), t = il(t, "onChange"), 0 < t.length && (n = new cs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var oi = null, ai = null;
  function nf(e) {
    Va(e, 0);
  }
  function el(e) {
    var t = Tr(e);
    if (re(t)) return e;
  }
  function rf(e, t) {
    if (e === "change") return t;
  }
  var Ea = !1;
  if (x) {
    var vs;
    if (x) {
      var ys = "oninput" in document;
      if (!ys) {
        var _a = document.createElement("div");
        _a.setAttribute("oninput", "return;"), ys = typeof _a.oninput == "function";
      }
      vs = ys;
    } else vs = !1;
    Ea = vs && (!document.documentMode || 9 < document.documentMode);
  }
  function Ca() {
    oi && (oi.detachEvent("onpropertychange", Na), ai = oi = null);
  }
  function Na(e) {
    if (e.propertyName === "value" && el(ai)) {
      var t = [];
      Sa(t, ai, e, dn(e)), nr(nf, t);
    }
  }
  function lf(e, t, n) {
    e === "focusin" ? (Ca(), oi = t, ai = n, oi.attachEvent("onpropertychange", Na)) : e === "focusout" && Ca();
  }
  function sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return el(ai);
  }
  function of(e, t) {
    if (e === "click") return el(t);
  }
  function af(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function uf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rn = typeof Object.is == "function" ? Object.is : uf;
  function ui(e, t) {
    if (rn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!N.call(t, i) || !rn(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Ma(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ta(e, t) {
    var n = Ma(e);
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
      n = Ma(n);
    }
  }
  function $a(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $a(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ra() {
    for (var e = window, t = ie(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ie(e.document);
    }
    return t;
  }
  function gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function cf(e) {
    var t = Ra(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $a(n.ownerDocument.documentElement, n)) {
      if (r !== null && gs(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, s = Math.min(r.start, i);
          r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Ta(n, s);
          var u = Ta(
            n,
            r
          );
          i && u && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var df = x && "documentMode" in document && 11 >= document.documentMode, _r = null, ks = null, ci = null, xs = !1;
  function Pa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xs || _r == null || _r !== ie(r) || (r = _r, "selectionStart" in r && gs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ci && ui(ci, r) || (ci = r, r = il(ks, "onSelect"), 0 < r.length && (t = new cs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _r)));
  }
  function tl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Cr = { animationend: tl("Animation", "AnimationEnd"), animationiteration: tl("Animation", "AnimationIteration"), animationstart: tl("Animation", "AnimationStart"), transitionend: tl("Transition", "TransitionEnd") }, ws = {}, La = {};
  x && (La = document.createElement("div").style, "AnimationEvent" in window || (delete Cr.animationend.animation, delete Cr.animationiteration.animation, delete Cr.animationstart.animation), "TransitionEvent" in window || delete Cr.transitionend.transition);
  function nl(e) {
    if (ws[e]) return ws[e];
    if (!Cr[e]) return e;
    var t = Cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in La) return ws[e] = t[n];
    return e;
  }
  var Fa = nl("animationend"), za = nl("animationiteration"), Aa = nl("animationstart"), Oa = nl("transitionend"), Ia = /* @__PURE__ */ new Map(), Da = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Bn(e, t) {
    Ia.set(e, t), f(t, [e]);
  }
  for (var js = 0; js < Da.length; js++) {
    var Ss = Da[js], ff = Ss.toLowerCase(), hf = Ss[0].toUpperCase() + Ss.slice(1);
    Bn(ff, "on" + hf);
  }
  Bn(Fa, "onAnimationEnd"), Bn(za, "onAnimationIteration"), Bn(Aa, "onAnimationStart"), Bn("dblclick", "onDoubleClick"), Bn("focusin", "onFocus"), Bn("focusout", "onBlur"), Bn(Oa, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
  function Ba(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, es(r, t, void 0, e), e.currentTarget = null;
  }
  function Va(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var p = r[u], m = p.instance, S = p.currentTarget;
          if (p = p.listener, m !== s && i.isPropagationStopped()) break e;
          Ba(i, p, S), s = m;
        }
        else for (u = 0; u < r.length; u++) {
          if (p = r[u], m = p.instance, S = p.currentTarget, p = p.listener, m !== s && i.isPropagationStopped()) break e;
          Ba(i, p, S), s = m;
        }
      }
    }
    if (rr) throw e = Xr, rr = !1, Xr = null, e;
  }
  function Je(e, t) {
    var n = t[Rs];
    n === void 0 && (n = t[Rs] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ua(t, e, 2, !1), n.add(r));
  }
  function Es(e, t, n) {
    var r = 0;
    t && (r |= 4), Ua(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function fi(e) {
    if (!e[rl]) {
      e[rl] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (pf.has(n) || Es(n, !1, e), Es(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || (t[rl] = !0, Es("selectionchange", !1, t));
    }
  }
  function Ua(e, t, n, r) {
    switch (da(t)) {
      case 1:
        var i = Nd;
        break;
      case 4:
        i = Md;
        break;
      default:
        i = os;
    }
    n = i.bind(null, t, n, e), i = void 0, !xr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function _s(e, t, n, r, i) {
    var s = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var p = r.stateNode.containerInfo;
        if (p === i || p.nodeType === 8 && p.parentNode === i) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var m = u.tag;
          if ((m === 3 || m === 4) && (m = u.stateNode.containerInfo, m === i || m.nodeType === 8 && m.parentNode === i)) return;
          u = u.return;
        }
        for (; p !== null; ) {
          if (u = ir(p), u === null) return;
          if (m = u.tag, m === 5 || m === 6) {
            r = s = u;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    nr(function() {
      var S = s, P = dn(n), L = [];
      e: {
        var R = Ia.get(e);
        if (R !== void 0) {
          var G = cs, q = e;
          switch (e) {
            case "keypress":
              if (Zi(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = Hd;
              break;
            case "focusin":
              q = "focus", G = hs;
              break;
            case "focusout":
              q = "blur", G = hs;
              break;
            case "beforeblur":
            case "afterblur":
              G = hs;
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
              G = pa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Rd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Qd;
              break;
            case Fa:
            case za:
            case Aa:
              G = Fd;
              break;
            case Oa:
              G = Yd;
              break;
            case "scroll":
              G = Td;
              break;
            case "wheel":
              G = Jd;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Ad;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = va;
          }
          var te = (t & 4) !== 0, lt = !te && e === "scroll", w = te ? R !== null ? R + "Capture" : null : R;
          te = [];
          for (var y = S, j; y !== null; ) {
            j = y;
            var A = j.stateNode;
            if (j.tag === 5 && A !== null && (j = A, w !== null && (A = Pn(y, w), A != null && te.push(hi(y, A, j)))), lt) break;
            y = y.return;
          }
          0 < te.length && (R = new G(R, q, null, n, P), L.push({ event: R, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", R && n !== Lt && (q = n.relatedTarget || n.fromElement) && (ir(q) || q[wn])) break e;
          if ((G || R) && (R = P.window === P ? P : (R = P.ownerDocument) ? R.defaultView || R.parentWindow : window, G ? (q = n.relatedTarget || n.toElement, G = S, q = q ? ir(q) : null, q !== null && (lt = hn(q), q !== lt || q.tag !== 5 && q.tag !== 6) && (q = null)) : (G = null, q = S), G !== q)) {
            if (te = pa, A = "onMouseLeave", w = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (te = va, A = "onPointerLeave", w = "onPointerEnter", y = "pointer"), lt = G == null ? R : Tr(G), j = q == null ? R : Tr(q), R = new te(A, y + "leave", G, n, P), R.target = lt, R.relatedTarget = j, A = null, ir(P) === S && (te = new te(w, y + "enter", q, n, P), te.target = j, te.relatedTarget = lt, A = te), lt = A, G && q) t: {
              for (te = G, w = q, y = 0, j = te; j; j = Nr(j)) y++;
              for (j = 0, A = w; A; A = Nr(A)) j++;
              for (; 0 < y - j; ) te = Nr(te), y--;
              for (; 0 < j - y; ) w = Nr(w), j--;
              for (; y--; ) {
                if (te === w || w !== null && te === w.alternate) break t;
                te = Nr(te), w = Nr(w);
              }
              te = null;
            }
            else te = null;
            G !== null && Ha(L, R, G, te, !1), q !== null && lt !== null && Ha(L, lt, q, te, !0);
          }
        }
        e: {
          if (R = S ? Tr(S) : window, G = R.nodeName && R.nodeName.toLowerCase(), G === "select" || G === "input" && R.type === "file") var ne = rf;
          else if (ja(R)) if (Ea) ne = af;
          else {
            ne = sf;
            var ue = lf;
          }
          else (G = R.nodeName) && G.toLowerCase() === "input" && (R.type === "checkbox" || R.type === "radio") && (ne = of);
          if (ne && (ne = ne(e, S))) {
            Sa(L, ne, n, P);
            break e;
          }
          ue && ue(e, R, S), e === "focusout" && (ue = R._wrapperState) && ue.controlled && R.type === "number" && Te(R, "number", R.value);
        }
        switch (ue = S ? Tr(S) : window, e) {
          case "focusin":
            (ja(ue) || ue.contentEditable === "true") && (_r = ue, ks = S, ci = null);
            break;
          case "focusout":
            ci = ks = _r = null;
            break;
          case "mousedown":
            xs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xs = !1, Pa(L, n, P);
            break;
          case "selectionchange":
            if (df) break;
          case "keydown":
          case "keyup":
            Pa(L, n, P);
        }
        var ce;
        if (ms) e: {
          switch (e) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else Er ? xa(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (ya && n.locale !== "ko" && (Er || me !== "onCompositionStart" ? me === "onCompositionEnd" && Er && (ce = fa()) : (Dn = P, us = "value" in Dn ? Dn.value : Dn.textContent, Er = !0)), ue = il(S, me), 0 < ue.length && (me = new ma(me, e, null, n, P), L.push({ event: me, listeners: ue }), ce ? me.data = ce : (ce = wa(n), ce !== null && (me.data = ce)))), (ce = qd ? bd(e, n) : ef(e, n)) && (S = il(S, "onBeforeInput"), 0 < S.length && (P = new ma("onBeforeInput", "beforeinput", null, n, P), L.push({ event: P, listeners: S }), P.data = ce));
      }
      Va(L, t);
    });
  }
  function hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, s = i.stateNode;
      i.tag === 5 && s !== null && (i = s, s = Pn(e, n), s != null && r.unshift(hi(e, s, i)), s = Pn(e, t), s != null && r.push(hi(e, s, i))), e = e.return;
    }
    return r;
  }
  function Nr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ha(e, t, n, r, i) {
    for (var s = t._reactName, u = []; n !== null && n !== r; ) {
      var p = n, m = p.alternate, S = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 && S !== null && (p = S, i ? (m = Pn(n, s), m != null && u.unshift(hi(n, m, p))) : i || (m = Pn(n, s), m != null && u.push(hi(n, m, p)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var mf = /\r\n?/g, vf = /\u0000|\uFFFD/g;
  function Wa(e) {
    return (typeof e == "string" ? e : "" + e).replace(mf, `
`).replace(vf, "");
  }
  function ll(e, t, n) {
    if (t = Wa(t), Wa(e) !== t && n) throw Error(a(425));
  }
  function sl() {
  }
  var Cs = null, Ns = null;
  function Ms(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ts = typeof setTimeout == "function" ? setTimeout : void 0, yf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ka = typeof Promise == "function" ? Promise : void 0, gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ka < "u" ? function(e) {
    return Ka.resolve(null).then(e).catch(kf);
  } : Ts;
  function kf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $s(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), ri(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    ri(t);
  }
  function Vn(e) {
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
  function Qa(e) {
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
  var Mr = Math.random().toString(36).slice(2), mn = "__reactFiber$" + Mr, pi = "__reactProps$" + Mr, wn = "__reactContainer$" + Mr, Rs = "__reactEvents$" + Mr, xf = "__reactListeners$" + Mr, wf = "__reactHandles$" + Mr;
  function ir(e) {
    var t = e[mn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[wn] || n[mn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qa(e); e !== null; ) {
          if (n = e[mn]) return n;
          e = Qa(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function mi(e) {
    return e = e[mn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ol(e) {
    return e[pi] || null;
  }
  var Ps = [], $r = -1;
  function Un(e) {
    return { current: e };
  }
  function Ze(e) {
    0 > $r || (e.current = Ps[$r], Ps[$r] = null, $r--);
  }
  function Qe(e, t) {
    $r++, Ps[$r] = e.current, e.current = t;
  }
  var Hn = {}, St = Un(Hn), Ft = Un(!1), lr = Hn;
  function Rr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function zt(e) {
    return e = e.childContextTypes, e != null;
  }
  function al() {
    Ze(Ft), Ze(St);
  }
  function Ga(e, t, n) {
    if (St.current !== Hn) throw Error(a(168));
    Qe(St, t), Qe(Ft, n);
  }
  function Ya(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(a(108, z(e) || "Unknown", i));
    return W({}, n, r);
  }
  function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hn, lr = St.current, Qe(St, e), Qe(Ft, Ft.current), !0;
  }
  function Xa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = Ya(e, t, lr), r.__reactInternalMemoizedMergedChildContext = e, Ze(Ft), Ze(St), Qe(St, e)) : Ze(Ft), Qe(Ft, n);
  }
  var jn = null, cl = !1, Ls = !1;
  function Ja(e) {
    jn === null ? jn = [e] : jn.push(e);
  }
  function jf(e) {
    cl = !0, Ja(e);
  }
  function Wn() {
    if (!Ls && jn !== null) {
      Ls = !0;
      var e = 0, t = Oe;
      try {
        var n = jn;
        for (Oe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        jn = null, cl = !1;
      } catch (i) {
        throw jn !== null && (jn = jn.slice(e + 1)), Bt(ts, Wn), i;
      } finally {
        Oe = t, Ls = !1;
      }
    }
    return null;
  }
  var Pr = [], Lr = 0, dl = null, fl = 0, Gt = [], Yt = 0, sr = null, Sn = 1, En = "";
  function or(e, t) {
    Pr[Lr++] = fl, Pr[Lr++] = dl, dl = e, fl = t;
  }
  function Za(e, t, n) {
    Gt[Yt++] = Sn, Gt[Yt++] = En, Gt[Yt++] = sr, sr = e;
    var r = Sn;
    e = En;
    var i = 32 - nn(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - nn(t) + i;
    if (30 < s) {
      var u = i - i % 5;
      s = (r & (1 << u) - 1).toString(32), r >>= u, i -= u, Sn = 1 << 32 - nn(t) + i | n << i | r, En = s + e;
    } else Sn = 1 << s | n << i | r, En = e;
  }
  function Fs(e) {
    e.return !== null && (or(e, 1), Za(e, 1, 0));
  }
  function zs(e) {
    for (; e === dl; ) dl = Pr[--Lr], Pr[Lr] = null, fl = Pr[--Lr], Pr[Lr] = null;
    for (; e === sr; ) sr = Gt[--Yt], Gt[Yt] = null, En = Gt[--Yt], Gt[Yt] = null, Sn = Gt[--Yt], Gt[Yt] = null;
  }
  var Ut = null, Ht = null, qe = !1, ln = null;
  function qa(e, t) {
    var n = qt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ut = e, Ht = Vn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ut = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sr !== null ? { id: Sn, overflow: En } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ut = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function As(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Os(e) {
    if (qe) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!ba(e, t)) {
          if (As(e)) throw Error(a(418));
          t = Vn(n.nextSibling);
          var r = Ut;
          t && ba(e, t) ? qa(r, n) : (e.flags = e.flags & -4097 | 2, qe = !1, Ut = e);
        }
      } else {
        if (As(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, qe = !1, Ut = e;
      }
    }
  }
  function eu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ut = e;
  }
  function hl(e) {
    if (e !== Ut) return !1;
    if (!qe) return eu(e), qe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ms(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (As(e)) throw tu(), Error(a(418));
      for (; t; ) qa(e, t), t = Vn(t.nextSibling);
    }
    if (eu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ht = Vn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = Ut ? Vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function tu() {
    for (var e = Ht; e; ) e = Vn(e.nextSibling);
  }
  function Fr() {
    Ht = Ut = null, qe = !1;
  }
  function Is(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  var Sf = b.ReactCurrentBatchConfig;
  function vi(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var i = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(u) {
          var p = i.refs;
          u === null ? delete p[s] : p[s] = u;
        }, t._stringRef = s, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function nu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ru(e) {
    function t(w, y) {
      if (e) {
        var j = w.deletions;
        j === null ? (w.deletions = [y], w.flags |= 16) : j.push(y);
      }
    }
    function n(w, y) {
      if (!e) return null;
      for (; y !== null; ) t(w, y), y = y.sibling;
      return null;
    }
    function r(w, y) {
      for (w = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? w.set(y.key, y) : w.set(y.index, y), y = y.sibling;
      return w;
    }
    function i(w, y) {
      return w = qn(w, y), w.index = 0, w.sibling = null, w;
    }
    function s(w, y, j) {
      return w.index = j, e ? (j = w.alternate, j !== null ? (j = j.index, j < y ? (w.flags |= 2, y) : j) : (w.flags |= 2, y)) : (w.flags |= 1048576, y);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function p(w, y, j, A) {
      return y === null || y.tag !== 6 ? (y = $o(j, w.mode, A), y.return = w, y) : (y = i(y, j), y.return = w, y);
    }
    function m(w, y, j, A) {
      var ne = j.type;
      return ne === K ? P(w, y, j.props.children, A, j.key) : y !== null && (y.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === We && nu(ne) === y.type) ? (A = i(y, j.props), A.ref = vi(w, y, j), A.return = w, A) : (A = Il(j.type, j.key, j.props, null, w.mode, A), A.ref = vi(w, y, j), A.return = w, A);
    }
    function S(w, y, j, A) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== j.containerInfo || y.stateNode.implementation !== j.implementation ? (y = Ro(j, w.mode, A), y.return = w, y) : (y = i(y, j.children || []), y.return = w, y);
    }
    function P(w, y, j, A, ne) {
      return y === null || y.tag !== 7 ? (y = mr(j, w.mode, A, ne), y.return = w, y) : (y = i(y, j), y.return = w, y);
    }
    function L(w, y, j) {
      if (typeof y == "string" && y !== "" || typeof y == "number") return y = $o("" + y, w.mode, j), y.return = w, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ge:
            return j = Il(y.type, y.key, y.props, null, w.mode, j), j.ref = vi(w, null, y), j.return = w, j;
          case oe:
            return y = Ro(y, w.mode, j), y.return = w, y;
          case We:
            var A = y._init;
            return L(w, A(y._payload), j);
        }
        if (Be(y) || X(y)) return y = mr(y, w.mode, j, null), y.return = w, y;
        pl(w, y);
      }
      return null;
    }
    function R(w, y, j, A) {
      var ne = y !== null ? y.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return ne !== null ? null : p(w, y, "" + j, A);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case ge:
            return j.key === ne ? m(w, y, j, A) : null;
          case oe:
            return j.key === ne ? S(w, y, j, A) : null;
          case We:
            return ne = j._init, R(
              w,
              y,
              ne(j._payload),
              A
            );
        }
        if (Be(j) || X(j)) return ne !== null ? null : P(w, y, j, A, null);
        pl(w, j);
      }
      return null;
    }
    function G(w, y, j, A, ne) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return w = w.get(j) || null, p(y, w, "" + A, ne);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ge:
            return w = w.get(A.key === null ? j : A.key) || null, m(y, w, A, ne);
          case oe:
            return w = w.get(A.key === null ? j : A.key) || null, S(y, w, A, ne);
          case We:
            var ue = A._init;
            return G(w, y, j, ue(A._payload), ne);
        }
        if (Be(A) || X(A)) return w = w.get(j) || null, P(y, w, A, ne, null);
        pl(y, A);
      }
      return null;
    }
    function q(w, y, j, A) {
      for (var ne = null, ue = null, ce = y, me = y = 0, yt = null; ce !== null && me < j.length; me++) {
        ce.index > me ? (yt = ce, ce = null) : yt = ce.sibling;
        var ze = R(w, ce, j[me], A);
        if (ze === null) {
          ce === null && (ce = yt);
          break;
        }
        e && ce && ze.alternate === null && t(w, ce), y = s(ze, y, me), ue === null ? ne = ze : ue.sibling = ze, ue = ze, ce = yt;
      }
      if (me === j.length) return n(w, ce), qe && or(w, me), ne;
      if (ce === null) {
        for (; me < j.length; me++) ce = L(w, j[me], A), ce !== null && (y = s(ce, y, me), ue === null ? ne = ce : ue.sibling = ce, ue = ce);
        return qe && or(w, me), ne;
      }
      for (ce = r(w, ce); me < j.length; me++) yt = G(ce, w, me, j[me], A), yt !== null && (e && yt.alternate !== null && ce.delete(yt.key === null ? me : yt.key), y = s(yt, y, me), ue === null ? ne = yt : ue.sibling = yt, ue = yt);
      return e && ce.forEach(function(bn) {
        return t(w, bn);
      }), qe && or(w, me), ne;
    }
    function te(w, y, j, A) {
      var ne = X(j);
      if (typeof ne != "function") throw Error(a(150));
      if (j = ne.call(j), j == null) throw Error(a(151));
      for (var ue = ne = null, ce = y, me = y = 0, yt = null, ze = j.next(); ce !== null && !ze.done; me++, ze = j.next()) {
        ce.index > me ? (yt = ce, ce = null) : yt = ce.sibling;
        var bn = R(w, ce, ze.value, A);
        if (bn === null) {
          ce === null && (ce = yt);
          break;
        }
        e && ce && bn.alternate === null && t(w, ce), y = s(bn, y, me), ue === null ? ne = bn : ue.sibling = bn, ue = bn, ce = yt;
      }
      if (ze.done) return n(
        w,
        ce
      ), qe && or(w, me), ne;
      if (ce === null) {
        for (; !ze.done; me++, ze = j.next()) ze = L(w, ze.value, A), ze !== null && (y = s(ze, y, me), ue === null ? ne = ze : ue.sibling = ze, ue = ze);
        return qe && or(w, me), ne;
      }
      for (ce = r(w, ce); !ze.done; me++, ze = j.next()) ze = G(ce, w, me, ze.value, A), ze !== null && (e && ze.alternate !== null && ce.delete(ze.key === null ? me : ze.key), y = s(ze, y, me), ue === null ? ne = ze : ue.sibling = ze, ue = ze);
      return e && ce.forEach(function(nh) {
        return t(w, nh);
      }), qe && or(w, me), ne;
    }
    function lt(w, y, j, A) {
      if (typeof j == "object" && j !== null && j.type === K && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case ge:
            e: {
              for (var ne = j.key, ue = y; ue !== null; ) {
                if (ue.key === ne) {
                  if (ne = j.type, ne === K) {
                    if (ue.tag === 7) {
                      n(w, ue.sibling), y = i(ue, j.props.children), y.return = w, w = y;
                      break e;
                    }
                  } else if (ue.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === We && nu(ne) === ue.type) {
                    n(w, ue.sibling), y = i(ue, j.props), y.ref = vi(w, ue, j), y.return = w, w = y;
                    break e;
                  }
                  n(w, ue);
                  break;
                } else t(w, ue);
                ue = ue.sibling;
              }
              j.type === K ? (y = mr(j.props.children, w.mode, A, j.key), y.return = w, w = y) : (A = Il(j.type, j.key, j.props, null, w.mode, A), A.ref = vi(w, y, j), A.return = w, w = A);
            }
            return u(w);
          case oe:
            e: {
              for (ue = j.key; y !== null; ) {
                if (y.key === ue) if (y.tag === 4 && y.stateNode.containerInfo === j.containerInfo && y.stateNode.implementation === j.implementation) {
                  n(w, y.sibling), y = i(y, j.children || []), y.return = w, w = y;
                  break e;
                } else {
                  n(w, y);
                  break;
                }
                else t(w, y);
                y = y.sibling;
              }
              y = Ro(j, w.mode, A), y.return = w, w = y;
            }
            return u(w);
          case We:
            return ue = j._init, lt(w, y, ue(j._payload), A);
        }
        if (Be(j)) return q(w, y, j, A);
        if (X(j)) return te(w, y, j, A);
        pl(w, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, y !== null && y.tag === 6 ? (n(w, y.sibling), y = i(y, j), y.return = w, w = y) : (n(w, y), y = $o(j, w.mode, A), y.return = w, w = y), u(w)) : n(w, y);
    }
    return lt;
  }
  var zr = ru(!0), iu = ru(!1), ml = Un(null), vl = null, Ar = null, Ds = null;
  function Bs() {
    Ds = Ar = vl = null;
  }
  function Vs(e) {
    var t = ml.current;
    Ze(ml), e._currentValue = t;
  }
  function Us(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Or(e, t) {
    vl = e, Ds = Ar = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (At = !0), e.firstContext = null);
  }
  function Xt(e) {
    var t = e._currentValue;
    if (Ds !== e) if (e = { context: e, memoizedValue: t, next: null }, Ar === null) {
      if (vl === null) throw Error(a(308));
      Ar = e, vl.dependencies = { lanes: 0, firstContext: e };
    } else Ar = Ar.next = e;
    return t;
  }
  var ar = null;
  function Hs(e) {
    ar === null ? ar = [e] : ar.push(e);
  }
  function lu(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Hs(t)) : (n.next = i.next, i.next = n), t.interleaved = n, _n(e, r);
  }
  function _n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Kn = !1;
  function Ws(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function su(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Pe & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, _n(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Hs(r)) : (t.next = i.next, i.next = t), r.interleaved = t, _n(e, n);
  }
  function yl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, is(e, n);
    }
  }
  function ou(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          s === null ? i = s = u : s = s.next = u, n = n.next;
        } while (n !== null);
        s === null ? i = s = t : s = s.next = t;
      } else i = s = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function gl(e, t, n, r) {
    var i = e.updateQueue;
    Kn = !1;
    var s = i.firstBaseUpdate, u = i.lastBaseUpdate, p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var m = p, S = m.next;
      m.next = null, u === null ? s = S : u.next = S, u = m;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, p = P.lastBaseUpdate, p !== u && (p === null ? P.firstBaseUpdate = S : p.next = S, P.lastBaseUpdate = m));
    }
    if (s !== null) {
      var L = i.baseState;
      u = 0, P = S = m = null, p = s;
      do {
        var R = p.lane, G = p.eventTime;
        if ((r & R) === R) {
          P !== null && (P = P.next = {
            eventTime: G,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var q = e, te = p;
            switch (R = t, G = n, te.tag) {
              case 1:
                if (q = te.payload, typeof q == "function") {
                  L = q.call(G, L, R);
                  break e;
                }
                L = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = te.payload, R = typeof q == "function" ? q.call(G, L, R) : q, R == null) break e;
                L = W({}, L, R);
                break e;
              case 2:
                Kn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, R = i.effects, R === null ? i.effects = [p] : R.push(p));
        } else G = { eventTime: G, lane: R, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, P === null ? (S = P = G, m = L) : P = P.next = G, u |= R;
        if (p = p.next, p === null) {
          if (p = i.shared.pending, p === null) break;
          R = p, p = R.next, R.next = null, i.lastBaseUpdate = R, i.shared.pending = null;
        }
      } while (!0);
      if (P === null && (m = L), i.baseState = m, i.firstBaseUpdate = S, i.lastBaseUpdate = P, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          u |= i.lane, i = i.next;
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      dr |= u, e.lanes = u, e.memoizedState = L;
    }
  }
  function au(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(a(191, i));
        i.call(r);
      }
    }
  }
  var yi = {}, vn = Un(yi), gi = Un(yi), ki = Un(yi);
  function ur(e) {
    if (e === yi) throw Error(a(174));
    return e;
  }
  function Ks(e, t) {
    switch (Qe(ki, t), Qe(gi, e), Qe(vn, yi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bt(t, e);
    }
    Ze(vn), Qe(vn, t);
  }
  function Ir() {
    Ze(vn), Ze(gi), Ze(ki);
  }
  function uu(e) {
    ur(ki.current);
    var t = ur(vn.current), n = bt(t, e.type);
    t !== n && (Qe(gi, e), Qe(vn, n));
  }
  function Qs(e) {
    gi.current === e && (Ze(vn), Ze(gi));
  }
  var et = Un(0);
  function kl(e) {
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
  var Gs = [];
  function Ys() {
    for (var e = 0; e < Gs.length; e++) Gs[e]._workInProgressVersionPrimary = null;
    Gs.length = 0;
  }
  var xl = b.ReactCurrentDispatcher, Xs = b.ReactCurrentBatchConfig, cr = 0, tt = null, dt = null, mt = null, wl = !1, xi = !1, wi = 0, Ef = 0;
  function Et() {
    throw Error(a(321));
  }
  function Js(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rn(e[n], t[n])) return !1;
    return !0;
  }
  function Zs(e, t, n, r, i, s) {
    if (cr = s, tt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xl.current = e === null || e.memoizedState === null ? Mf : Tf, e = n(r, i), xi) {
      s = 0;
      do {
        if (xi = !1, wi = 0, 25 <= s) throw Error(a(301));
        s += 1, mt = dt = null, t.updateQueue = null, xl.current = $f, e = n(r, i);
      } while (xi);
    }
    if (xl.current = El, t = dt !== null && dt.next !== null, cr = 0, mt = dt = tt = null, wl = !1, t) throw Error(a(300));
    return e;
  }
  function qs() {
    var e = wi !== 0;
    return wi = 0, e;
  }
  function yn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? tt.memoizedState = mt = e : mt = mt.next = e, mt;
  }
  function Jt() {
    if (dt === null) {
      var e = tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = dt.next;
    var t = mt === null ? tt.memoizedState : mt.next;
    if (t !== null) mt = t, dt = e;
    else {
      if (e === null) throw Error(a(310));
      dt = e, e = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }, mt === null ? tt.memoizedState = mt = e : mt = mt.next = e;
    }
    return mt;
  }
  function ji(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bs(e) {
    var t = Jt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = dt, i = r.baseQueue, s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var u = i.next;
        i.next = s.next, s.next = u;
      }
      r.baseQueue = i = s, n.pending = null;
    }
    if (i !== null) {
      s = i.next, r = r.baseState;
      var p = u = null, m = null, S = s;
      do {
        var P = S.lane;
        if ((cr & P) === P) m !== null && (m = m.next = { lane: 0, action: S.action, hasEagerState: S.hasEagerState, eagerState: S.eagerState, next: null }), r = S.hasEagerState ? S.eagerState : e(r, S.action);
        else {
          var L = {
            lane: P,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          };
          m === null ? (p = m = L, u = r) : m = m.next = L, tt.lanes |= P, dr |= P;
        }
        S = S.next;
      } while (S !== null && S !== s);
      m === null ? u = r : m.next = p, rn(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        s = i.lane, tt.lanes |= s, dr |= s, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function eo(e) {
    var t = Jt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var u = i = i.next;
      do
        s = e(s, u.action), u = u.next;
      while (u !== i);
      rn(s, t.memoizedState) || (At = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, r];
  }
  function cu() {
  }
  function du(e, t) {
    var n = tt, r = Jt(), i = t(), s = !rn(r.memoizedState, i);
    if (s && (r.memoizedState = i, At = !0), r = r.queue, to(pu.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || mt !== null && mt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Si(9, hu.bind(null, n, r, i, t), void 0, null), vt === null) throw Error(a(349));
      (cr & 30) !== 0 || fu(n, t, i);
    }
    return i;
  }
  function fu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = tt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, tt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, mu(t) && vu(e);
  }
  function pu(e, t, n) {
    return n(function() {
      mu(t) && vu(e);
    });
  }
  function mu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rn(e, n);
    } catch {
      return !0;
    }
  }
  function vu(e) {
    var t = _n(e, 1);
    t !== null && un(t, e, 1, -1);
  }
  function yu(e) {
    var t = yn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ji, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nf.bind(null, tt, e), [t.memoizedState, e];
  }
  function Si(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = tt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, tt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function gu() {
    return Jt().memoizedState;
  }
  function jl(e, t, n, r) {
    var i = yn();
    tt.flags |= e, i.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Sl(e, t, n, r) {
    var i = Jt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (dt !== null) {
      var u = dt.memoizedState;
      if (s = u.destroy, r !== null && Js(r, u.deps)) {
        i.memoizedState = Si(t, n, s, r);
        return;
      }
    }
    tt.flags |= e, i.memoizedState = Si(1 | t, n, s, r);
  }
  function ku(e, t) {
    return jl(8390656, 8, e, t);
  }
  function to(e, t) {
    return Sl(2048, 8, e, t);
  }
  function xu(e, t) {
    return Sl(4, 2, e, t);
  }
  function wu(e, t) {
    return Sl(4, 4, e, t);
  }
  function ju(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Su(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Sl(4, 4, ju.bind(null, t, e), n);
  }
  function no() {
  }
  function Eu(e, t) {
    var n = Jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function _u(e, t) {
    var n = Jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Cu(e, t, n) {
    return (cr & 21) === 0 ? (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n) : (rn(n, t) || (n = na(), tt.lanes |= n, dr |= n, e.baseState = !0), t);
  }
  function _f(e, t) {
    var n = Oe;
    Oe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xs.transition;
    Xs.transition = {};
    try {
      e(!1), t();
    } finally {
      Oe = n, Xs.transition = r;
    }
  }
  function Nu() {
    return Jt().memoizedState;
  }
  function Cf(e, t, n) {
    var r = Jn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mu(e)) Tu(t, n);
    else if (n = lu(e, t, n, r), n !== null) {
      var i = $t();
      un(n, e, r, i), $u(n, t, r);
    }
  }
  function Nf(e, t, n) {
    var r = Jn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Mu(e)) Tu(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var u = t.lastRenderedState, p = s(u, n);
        if (i.hasEagerState = !0, i.eagerState = p, rn(p, u)) {
          var m = t.interleaved;
          m === null ? (i.next = i, Hs(t)) : (i.next = m.next, m.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = lu(e, t, i, r), n !== null && (i = $t(), un(n, e, r, i), $u(n, t, r));
    }
  }
  function Mu(e) {
    var t = e.alternate;
    return e === tt || t !== null && t === tt;
  }
  function Tu(e, t) {
    xi = wl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $u(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, is(e, n);
    }
  }
  var El = { readContext: Xt, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, Mf = { readContext: Xt, useCallback: function(e, t) {
    return yn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Xt, useEffect: ku, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, jl(
      4194308,
      4,
      ju.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return jl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return jl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = yn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = yn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cf.bind(null, tt, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = yn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: yu, useDebugValue: no, useDeferredValue: function(e) {
    return yn().memoizedState = e;
  }, useTransition: function() {
    var e = yu(!1), t = e[0];
    return e = _f.bind(null, e[1]), yn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = tt, i = yn();
    if (qe) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), vt === null) throw Error(a(349));
      (cr & 30) !== 0 || fu(r, t, n);
    }
    i.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return i.queue = s, ku(pu.bind(
      null,
      r,
      s,
      e
    ), [e]), r.flags |= 2048, Si(9, hu.bind(null, r, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = yn(), t = vt.identifierPrefix;
    if (qe) {
      var n = En, r = Sn;
      n = (r & ~(1 << 32 - nn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Tf = {
    readContext: Xt,
    useCallback: Eu,
    useContext: Xt,
    useEffect: to,
    useImperativeHandle: Su,
    useInsertionEffect: xu,
    useLayoutEffect: wu,
    useMemo: _u,
    useReducer: bs,
    useRef: gu,
    useState: function() {
      return bs(ji);
    },
    useDebugValue: no,
    useDeferredValue: function(e) {
      var t = Jt();
      return Cu(t, dt.memoizedState, e);
    },
    useTransition: function() {
      var e = bs(ji)[0], t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: cu,
    useSyncExternalStore: du,
    useId: Nu,
    unstable_isNewReconciler: !1
  }, $f = { readContext: Xt, useCallback: Eu, useContext: Xt, useEffect: to, useImperativeHandle: Su, useInsertionEffect: xu, useLayoutEffect: wu, useMemo: _u, useReducer: eo, useRef: gu, useState: function() {
    return eo(ji);
  }, useDebugValue: no, useDeferredValue: function(e) {
    var t = Jt();
    return dt === null ? t.memoizedState = e : Cu(t, dt.memoizedState, e);
  }, useTransition: function() {
    var e = eo(ji)[0], t = Jt().memoizedState;
    return [e, t];
  }, useMutableSource: cu, useSyncExternalStore: du, useId: Nu, unstable_isNewReconciler: !1 };
  function sn(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ro(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var _l = { isMounted: function(e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $t(), i = Jn(e), s = Cn(r, i);
    s.payload = t, n != null && (s.callback = n), t = Qn(e, s, i), t !== null && (un(t, e, i, r), yl(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $t(), i = Jn(e), s = Cn(r, i);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Qn(e, s, i), t !== null && (un(t, e, i, r), yl(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $t(), r = Jn(e), i = Cn(n, r);
    i.tag = 2, t != null && (i.callback = t), t = Qn(e, i, r), t !== null && (un(t, e, r, n), yl(t, e, r));
  } };
  function Ru(e, t, n, r, i, s, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, u) : t.prototype && t.prototype.isPureReactComponent ? !ui(n, r) || !ui(i, s) : !0;
  }
  function Pu(e, t, n) {
    var r = !1, i = Hn, s = t.contextType;
    return typeof s == "object" && s !== null ? s = Xt(s) : (i = zt(t) ? lr : St.current, r = t.contextTypes, s = (r = r != null) ? Rr(e, i) : Hn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function Lu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
  }
  function io(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Ws(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Xt(s) : (s = zt(t) ? lr : St.current, i.context = Rr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ro(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && _l.enqueueReplaceState(i, i.state, null), gl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ke(r), r = r.return;
      while (r);
      var i = n;
    } catch (s) {
      i = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function lo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function so(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fu(e, t, n) {
    n = Cn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Pl || (Pl = !0, jo = r), so(e, t);
    }, n;
  }
  function zu(e, t, n) {
    n = Cn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        so(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      so(e, t), typeof r != "function" && (Yn === null ? Yn = /* @__PURE__ */ new Set([this]) : Yn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function Au(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Rf();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Kf.bind(null, e, t, n), t.then(e, e));
  }
  function Ou(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Iu(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1), t.tag = 2, Qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var Pf = b.ReactCurrentOwner, At = !1;
  function Tt(e, t, n, r) {
    t.child = e === null ? iu(t, null, n, r) : zr(t, e.child, n, r);
  }
  function Du(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Or(t, i), r = Zs(e, t, n, r, s, i), n = qs(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Nn(e, t, i)) : (qe && n && Fs(t), t.flags |= 1, Tt(e, t, r, i), t.child);
  }
  function Bu(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !To(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Vu(e, t, s, r, i)) : (e = Il(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, (e.lanes & i) === 0) {
      var u = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ui, n(u, r) && e.ref === t.ref) return Nn(e, t, i);
    }
    return t.flags |= 1, e = qn(s, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Vu(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ui(s, r) && e.ref === t.ref) if (At = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (At = !0);
      else return t.lanes = e.lanes, Nn(e, t, i);
    }
    return oo(e, t, n, r, i);
  }
  function Uu(e, t, n) {
    var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(Vr, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Qe(Vr, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, Qe(Vr, Wt), Wt |= r;
    }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Qe(Vr, Wt), Wt |= r;
    return Tt(e, t, i, n), t.child;
  }
  function Hu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function oo(e, t, n, r, i) {
    var s = zt(n) ? lr : St.current;
    return s = Rr(t, s), Or(t, i), n = Zs(e, t, n, r, s, i), r = qs(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Nn(e, t, i)) : (qe && r && Fs(t), t.flags |= 1, Tt(e, t, n, i), t.child);
  }
  function Wu(e, t, n, r, i) {
    if (zt(n)) {
      var s = !0;
      ul(t);
    } else s = !1;
    if (Or(t, i), t.stateNode === null) Nl(e, t), Pu(t, n, r), io(t, n, r, i), r = !0;
    else if (e === null) {
      var u = t.stateNode, p = t.memoizedProps;
      u.props = p;
      var m = u.context, S = n.contextType;
      typeof S == "object" && S !== null ? S = Xt(S) : (S = zt(n) ? lr : St.current, S = Rr(t, S));
      var P = n.getDerivedStateFromProps, L = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      L || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== r || m !== S) && Lu(t, u, r, S), Kn = !1;
      var R = t.memoizedState;
      u.state = R, gl(t, r, u, i), m = t.memoizedState, p !== r || R !== m || Ft.current || Kn ? (typeof P == "function" && (ro(t, n, P, r), m = t.memoizedState), (p = Kn || Ru(t, n, p, r, R, m, S)) ? (L || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), u.props = r, u.state = m, u.context = S, r = p) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, su(e, t), p = t.memoizedProps, S = t.type === t.elementType ? p : sn(t.type, p), u.props = S, L = t.pendingProps, R = u.context, m = n.contextType, typeof m == "object" && m !== null ? m = Xt(m) : (m = zt(n) ? lr : St.current, m = Rr(t, m));
      var G = n.getDerivedStateFromProps;
      (P = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== L || R !== m) && Lu(t, u, r, m), Kn = !1, R = t.memoizedState, u.state = R, gl(t, r, u, i);
      var q = t.memoizedState;
      p !== L || R !== q || Ft.current || Kn ? (typeof G == "function" && (ro(t, n, G, r), q = t.memoizedState), (S = Kn || Ru(t, n, S, r, R, q, m) || !1) ? (P || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, q, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, q, m)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), u.props = r, u.state = q, u.context = m, r = S) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ao(e, t, n, r, s, i);
  }
  function ao(e, t, n, r, i, s) {
    Hu(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return i && Xa(t, n, !1), Nn(e, t, s);
    r = t.stateNode, Pf.current = t;
    var p = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = zr(t, e.child, null, s), t.child = zr(t, null, p, s)) : Tt(e, t, p, s), t.memoizedState = r.state, i && Xa(t, n, !0), t.child;
  }
  function Ku(e) {
    var t = e.stateNode;
    t.pendingContext ? Ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ga(e, t.context, !1), Ks(e, t.containerInfo);
  }
  function Qu(e, t, n, r, i) {
    return Fr(), Is(i), t.flags |= 256, Tt(e, t, n, r), t.child;
  }
  var uo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function co(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gu(e, t, n) {
    var r = t.pendingProps, i = et.current, s = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), p ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Qe(et, i & 1), e === null)
      return Os(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = u) : s = Dl(u, r, 0, null), e = mr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = co(n), t.memoizedState = uo, e) : fo(t, u));
    if (i = e.memoizedState, i !== null && (p = i.dehydrated, p !== null)) return Lf(e, t, u, r, p, i, n);
    if (s) {
      s = r.fallback, u = t.mode, i = e.child, p = i.sibling;
      var m = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = qn(i, m), r.subtreeFlags = i.subtreeFlags & 14680064), p !== null ? s = qn(p, s) : (s = mr(s, u, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, u = e.child.memoizedState, u = u === null ? co(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, s.memoizedState = u, s.childLanes = e.childLanes & ~n, t.memoizedState = uo, r;
    }
    return s = e.child, e = s.sibling, r = qn(s, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fo(e, t) {
    return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Cl(e, t, n, r) {
    return r !== null && Is(r), zr(t, e.child, null, n), e = fo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lf(e, t, n, r, i, s, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = lo(Error(a(422))), Cl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Dl({ mode: "visible", children: r.children }, i, 0, null), s = mr(s, i, u, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && zr(t, e.child, null, u), t.child.memoizedState = co(u), t.memoizedState = uo, s);
    if ((t.mode & 1) === 0) return Cl(e, t, u, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var p = r.dgst;
      return r = p, s = Error(a(419)), r = lo(s, r, void 0), Cl(e, t, u, r);
    }
    if (p = (u & e.childLanes) !== 0, At || p) {
      if (r = vt, r !== null) {
        switch (u & -u) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = (i & (r.suspendedLanes | u)) !== 0 ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, _n(e, i), un(r, e, i, -1));
      }
      return Mo(), r = lo(Error(a(421))), Cl(e, t, u, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ht = Vn(i.nextSibling), Ut = t, qe = !0, ln = null, e !== null && (Gt[Yt++] = Sn, Gt[Yt++] = En, Gt[Yt++] = sr, Sn = e.id, En = e.overflow, sr = t), t = fo(t, r.children), t.flags |= 4096, t);
  }
  function Yu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Us(e.return, t, n);
  }
  function ho(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
  }
  function Xu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, s = r.tail;
    if (Tt(e, t, r.children, n), r = et.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yu(e, n, t);
        else if (e.tag === 19) Yu(e, n, t);
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
    if (Qe(et, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && kl(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ho(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && kl(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        ho(t, !0, n, null, s);
        break;
      case "together":
        ho(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Nl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), dr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ff(e, t, n) {
    switch (t.tag) {
      case 3:
        Ku(t), Fr();
        break;
      case 5:
        uu(t);
        break;
      case 1:
        zt(t.type) && ul(t);
        break;
      case 4:
        Ks(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Qe(ml, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Qe(et, et.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Gu(e, t, n) : (Qe(et, et.current & 1), e = Nn(e, t, n), e !== null ? e.sibling : null);
        Qe(et, et.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Xu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Qe(et, et.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Uu(e, t, n);
    }
    return Nn(e, t, n);
  }
  var Ju, po, Zu, qu;
  Ju = function(e, t) {
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
  }, po = function() {
  }, Zu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, ur(vn.current);
      var s = null;
      switch (n) {
        case "input":
          i = se(e, i), r = se(e, r), s = [];
          break;
        case "select":
          i = W({}, i, { value: void 0 }), r = W({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          i = Nt(e, i), r = Nt(e, r), s = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sl);
      }
      at(n, r);
      var u;
      n = null;
      for (S in i) if (!r.hasOwnProperty(S) && i.hasOwnProperty(S) && i[S] != null) if (S === "style") {
        var p = i[S];
        for (u in p) p.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else S !== "dangerouslySetInnerHTML" && S !== "children" && S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (h.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in r) {
        var m = r[S];
        if (p = i?.[S], r.hasOwnProperty(S) && m !== p && (m != null || p != null)) if (S === "style") if (p) {
          for (u in p) !p.hasOwnProperty(u) || m && m.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in m) m.hasOwnProperty(u) && p[u] !== m[u] && (n || (n = {}), n[u] = m[u]);
        } else n || (s || (s = []), s.push(
          S,
          n
        )), n = m;
        else S === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, p = p ? p.__html : void 0, m != null && p !== m && (s = s || []).push(S, m)) : S === "children" ? typeof m != "string" && typeof m != "number" || (s = s || []).push(S, "" + m) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && (h.hasOwnProperty(S) ? (m != null && S === "onScroll" && Je("scroll", e), s || p === m || (s = [])) : (s = s || []).push(S, m));
      }
      n && (s = s || []).push("style", n);
      var S = s;
      (t.updateQueue = S) && (t.flags |= 4);
    }
  }, qu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Ei(e, t) {
    if (!qe) switch (e.tailMode) {
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
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function zf(e, t, n) {
    var r = t.pendingProps;
    switch (zs(t), t.tag) {
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
        return zt(t.type) && al(), _t(t), null;
      case 3:
        return r = t.stateNode, Ir(), Ze(Ft), Ze(St), Ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ln !== null && (_o(ln), ln = null))), po(e, t), _t(t), null;
      case 5:
        Qs(t);
        var i = ur(ki.current);
        if (n = t.type, e !== null && t.stateNode != null) Zu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return _t(t), null;
          }
          if (e = ur(vn.current), hl(t)) {
            r = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (r[mn] = t, r[pi] = s, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Je("cancel", r), Je("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Je("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < di.length; i++) Je(di[i], r);
                break;
              case "source":
                Je("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Je(
                  "error",
                  r
                ), Je("load", r);
                break;
              case "details":
                Je("toggle", r);
                break;
              case "input":
                Se(r, s), Je("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, Je("invalid", r);
                break;
              case "textarea":
                be(r, s), Je("invalid", r);
            }
            at(n, s), i = null;
            for (var u in s) if (s.hasOwnProperty(u)) {
              var p = s[u];
              u === "children" ? typeof p == "string" ? r.textContent !== p && (s.suppressHydrationWarning !== !0 && ll(r.textContent, p, e), i = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (s.suppressHydrationWarning !== !0 && ll(
                r.textContent,
                p,
                e
              ), i = ["children", "" + p]) : h.hasOwnProperty(u) && p != null && u === "onScroll" && Je("scroll", r);
            }
            switch (n) {
              case "input":
                he(r), Ae(r, s, !0);
                break;
              case "textarea":
                he(r), ot(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = sl);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[mn] = t, e[pi] = r, Ju(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Kt(n, r), n) {
                case "dialog":
                  Je("cancel", e), Je("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Je("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < di.length; i++) Je(di[i], e);
                  i = r;
                  break;
                case "source":
                  Je("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Je(
                    "error",
                    e
                  ), Je("load", e), i = r;
                  break;
                case "details":
                  Je("toggle", e), i = r;
                  break;
                case "input":
                  Se(e, r), i = se(e, r), Je("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = W({}, r, { value: void 0 }), Je("invalid", e);
                  break;
                case "textarea":
                  be(e, r), i = Nt(e, r), Je("invalid", e);
                  break;
                default:
                  i = r;
              }
              at(n, i), p = i;
              for (s in p) if (p.hasOwnProperty(s)) {
                var m = p[s];
                s === "style" ? Ee(e, m) : s === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && xn(e, m)) : s === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && fe(e, m) : typeof m == "number" && fe(e, "" + m) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (h.hasOwnProperty(s) ? m != null && s === "onScroll" && Je("scroll", e) : m != null && Y(e, s, m, u));
              }
              switch (n) {
                case "input":
                  he(e), Ae(e, r, !1);
                  break;
                case "textarea":
                  he(e), ot(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + V(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, s = r.value, s != null ? Ve(e, !!r.multiple, s, !1) : r.defaultValue != null && Ve(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = sl);
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
        if (e && t.stateNode != null) qu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = ur(ki.current), ur(vn.current), hl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[mn] = t, (s = r.nodeValue !== n) && (e = Ut, e !== null)) switch (e.tag) {
              case 3:
                ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mn] = t, t.stateNode = r;
        }
        return _t(t), null;
      case 13:
        if (Ze(et), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (qe && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) tu(), Fr(), t.flags |= 98560, s = !1;
          else if (s = hl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(a(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(a(317));
              s[mn] = t;
            } else Fr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), s = !1;
          } else ln !== null && (_o(ln), ln = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (et.current & 1) !== 0 ? ft === 0 && (ft = 3) : Mo())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Ir(), po(e, t), e === null && fi(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return Vs(t.type._context), _t(t), null;
      case 17:
        return zt(t.type) && al(), _t(t), null;
      case 19:
        if (Ze(et), s = t.memoizedState, s === null) return _t(t), null;
        if (r = (t.flags & 128) !== 0, u = s.rendering, u === null) if (r) Ei(s, !1);
        else {
          if (ft !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = kl(e), u !== null) {
              for (t.flags |= 128, Ei(s, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, u = s.alternate, u === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = u.childLanes, s.lanes = u.lanes, s.child = u.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = u.memoizedProps, s.memoizedState = u.memoizedState, s.updateQueue = u.updateQueue, s.type = u.type, e = u.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Qe(et, et.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Ue() > Ur && (t.flags |= 128, r = !0, Ei(s, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = kl(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ei(s, !0), s.tail === null && s.tailMode === "hidden" && !u.alternate && !qe) return _t(t), null;
          } else 2 * Ue() - s.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128, r = !0, Ei(s, !1), t.lanes = 4194304);
          s.isBackwards ? (u.sibling = t.child, t.child = u) : (n = s.last, n !== null ? n.sibling = u : t.child = u, s.last = u);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ue(), t.sibling = null, n = et.current, Qe(et, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return No(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Af(e, t) {
    switch (zs(t), t.tag) {
      case 1:
        return zt(t.type) && al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ir(), Ze(Ft), Ze(St), Ys(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Qs(t), null;
      case 13:
        if (Ze(et), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          Fr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ze(et), null;
      case 4:
        return Ir(), null;
      case 10:
        return Vs(t.type._context), null;
      case 22:
      case 23:
        return No(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ml = !1, Ct = !1, Of = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
  function Br(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      nt(e, t, r);
    }
    else n.current = null;
  }
  function mo(e, t, n) {
    try {
      n();
    } catch (r) {
      nt(e, t, r);
    }
  }
  var bu = !1;
  function If(e, t) {
    if (Cs = Yi, e = Ra(), gs(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, p = -1, m = -1, S = 0, P = 0, L = e, R = null;
          t: for (; ; ) {
            for (var G; L !== n || i !== 0 && L.nodeType !== 3 || (p = u + i), L !== s || r !== 0 && L.nodeType !== 3 || (m = u + r), L.nodeType === 3 && (u += L.nodeValue.length), (G = L.firstChild) !== null; )
              R = L, L = G;
            for (; ; ) {
              if (L === e) break t;
              if (R === n && ++S === i && (p = u), R === s && ++P === r && (m = u), (G = L.nextSibling) !== null) break;
              L = R, R = L.parentNode;
            }
            L = G;
          }
          n = p === -1 || m === -1 ? null : { start: p, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ns = { focusedElem: e, selectionRange: n }, Yi = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
    else for (; Z !== null; ) {
      t = Z;
      try {
        var q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (q !== null) {
              var te = q.memoizedProps, lt = q.memoizedState, w = t.stateNode, y = w.getSnapshotBeforeUpdate(t.elementType === t.type ? te : sn(t.type, te), lt);
              w.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          case 3:
            var j = t.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (A) {
        nt(t, t.return, A);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Z = e;
        break;
      }
      Z = t.return;
    }
    return q = bu, bu = !1, q;
  }
  function _i(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          i.destroy = void 0, s !== void 0 && mo(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Tl(e, t) {
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
  function vo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ec(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mn], delete t[pi], delete t[Rs], delete t[xf], delete t[wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function nc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sl));
    else if (r !== 4 && (e = e.child, e !== null)) for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), e = e.sibling;
  }
  function go(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (go(e, t, n), e = e.sibling; e !== null; ) go(e, t, n), e = e.sibling;
  }
  var gt = null, on = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; ) rc(e, t, n), n = n.sibling;
  }
  function rc(e, t, n) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(Ui, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ct || Br(n, t);
      case 6:
        var r = gt, i = on;
        gt = null, Gn(e, t, n), gt = r, on = i, gt !== null && (on ? (e = gt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : gt.removeChild(n.stateNode));
        break;
      case 18:
        gt !== null && (on ? (e = gt, n = n.stateNode, e.nodeType === 8 ? $s(e.parentNode, n) : e.nodeType === 1 && $s(e, n), ri(e)) : $s(gt, n.stateNode));
        break;
      case 4:
        r = gt, i = on, gt = n.stateNode.containerInfo, on = !0, Gn(e, t, n), gt = r, on = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var s = i, u = s.destroy;
            s = s.tag, u !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && mo(n, t, u), i = i.next;
          } while (i !== r);
        }
        Gn(e, t, n);
        break;
      case 1:
        if (!Ct && (Br(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          nt(n, t, p);
        }
        Gn(e, t, n);
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null, Gn(e, t, n), Ct = r) : Gn(e, t, n);
        break;
      default:
        Gn(e, t, n);
    }
  }
  function ic(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Of()), t.forEach(function(r) {
        var i = Gf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function an(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e, u = t, p = u;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              gt = p.stateNode, on = !1;
              break e;
            case 3:
              gt = p.stateNode.containerInfo, on = !0;
              break e;
            case 4:
              gt = p.stateNode.containerInfo, on = !0;
              break e;
          }
          p = p.return;
        }
        if (gt === null) throw Error(a(160));
        rc(s, u, i), gt = null, on = !1;
        var m = i.alternate;
        m !== null && (m.return = null), i.return = null;
      } catch (S) {
        nt(i, t, S);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lc(t, e), t = t.sibling;
  }
  function lc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(t, e), gn(e), r & 4) {
          try {
            _i(3, e, e.return), Tl(3, e);
          } catch (te) {
            nt(e, e.return, te);
          }
          try {
            _i(5, e, e.return);
          } catch (te) {
            nt(e, e.return, te);
          }
        }
        break;
      case 1:
        an(t, e), gn(e), r & 512 && n !== null && Br(n, n.return);
        break;
      case 5:
        if (an(t, e), gn(e), r & 512 && n !== null && Br(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            fe(i, "");
          } catch (te) {
            nt(e, e.return, te);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var s = e.memoizedProps, u = n !== null ? n.memoizedProps : s, p = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            p === "input" && s.type === "radio" && s.name != null && xe(i, s), Kt(p, u);
            var S = Kt(p, s);
            for (u = 0; u < m.length; u += 2) {
              var P = m[u], L = m[u + 1];
              P === "style" ? Ee(i, L) : P === "dangerouslySetInnerHTML" ? xn(i, L) : P === "children" ? fe(i, L) : Y(i, P, L, S);
            }
            switch (p) {
              case "input":
                Ce(i, s);
                break;
              case "textarea":
                Fe(i, s);
                break;
              case "select":
                var R = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var G = s.value;
                G != null ? Ve(i, !!s.multiple, G, !1) : R !== !!s.multiple && (s.defaultValue != null ? Ve(
                  i,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Ve(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[pi] = s;
          } catch (te) {
            nt(e, e.return, te);
          }
        }
        break;
      case 6:
        if (an(t, e), gn(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          i = e.stateNode, s = e.memoizedProps;
          try {
            i.nodeValue = s;
          } catch (te) {
            nt(e, e.return, te);
          }
        }
        break;
      case 3:
        if (an(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ri(t.containerInfo);
        } catch (te) {
          nt(e, e.return, te);
        }
        break;
      case 4:
        an(t, e), gn(e);
        break;
      case 13:
        an(t, e), gn(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (wo = Ue())), r & 4 && ic(e);
        break;
      case 22:
        if (P = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ct = (S = Ct) || P, an(t, e), Ct = S) : an(t, e), gn(e), r & 8192) {
          if (S = e.memoizedState !== null, (e.stateNode.isHidden = S) && !P && (e.mode & 1) !== 0) for (Z = e, P = e.child; P !== null; ) {
            for (L = Z = P; Z !== null; ) {
              switch (R = Z, G = R.child, R.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _i(4, R, R.return);
                  break;
                case 1:
                  Br(R, R.return);
                  var q = R.stateNode;
                  if (typeof q.componentWillUnmount == "function") {
                    r = R, n = R.return;
                    try {
                      t = r, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount();
                    } catch (te) {
                      nt(r, n, te);
                    }
                  }
                  break;
                case 5:
                  Br(R, R.return);
                  break;
                case 22:
                  if (R.memoizedState !== null) {
                    ac(L);
                    continue;
                  }
              }
              G !== null ? (G.return = R, Z = G) : ac(L);
            }
            P = P.sibling;
          }
          e: for (P = null, L = e; ; ) {
            if (L.tag === 5) {
              if (P === null) {
                P = L;
                try {
                  i = L.stateNode, S ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (p = L.stateNode, m = L.memoizedProps.style, u = m != null && m.hasOwnProperty("display") ? m.display : null, p.style.display = Ne("display", u));
                } catch (te) {
                  nt(e, e.return, te);
                }
              }
            } else if (L.tag === 6) {
              if (P === null) try {
                L.stateNode.nodeValue = S ? "" : L.memoizedProps;
              } catch (te) {
                nt(e, e.return, te);
              }
            } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === e) && L.child !== null) {
              L.child.return = L, L = L.child;
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              P === L && (P = null), L = L.return;
            }
            P === L && (P = null), L.sibling.return = L.return, L = L.sibling;
          }
        }
        break;
      case 19:
        an(t, e), gn(e), r & 4 && ic(e);
        break;
      case 21:
        break;
      default:
        an(
          t,
          e
        ), gn(e);
    }
  }
  function gn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (tc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (fe(i, ""), r.flags &= -33);
            var s = nc(e);
            go(e, s, i);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, p = nc(e);
            yo(e, p, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (m) {
        nt(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Df(e, t, n) {
    Z = e, sc(e);
  }
  function sc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Z !== null; ) {
      var i = Z, s = i.child;
      if (i.tag === 22 && r) {
        var u = i.memoizedState !== null || Ml;
        if (!u) {
          var p = i.alternate, m = p !== null && p.memoizedState !== null || Ct;
          p = Ml;
          var S = Ct;
          if (Ml = u, (Ct = m) && !S) for (Z = i; Z !== null; ) u = Z, m = u.child, u.tag === 22 && u.memoizedState !== null ? uc(i) : m !== null ? (m.return = u, Z = m) : uc(i);
          for (; s !== null; ) Z = s, sc(s), s = s.sibling;
          Z = i, Ml = p, Ct = S;
        }
        oc(e);
      } else (i.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = i, Z = s) : oc(e);
    }
  }
  function oc(e) {
    for (; Z !== null; ) {
      var t = Z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ct) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : sn(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var s = t.updateQueue;
              s !== null && au(t, s, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                au(t, u, n);
              }
              break;
            case 5:
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
                var m = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    m.autoFocus && n.focus();
                    break;
                  case "img":
                    m.src && (n.src = m.src);
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
                var S = t.alternate;
                if (S !== null) {
                  var P = S.memoizedState;
                  if (P !== null) {
                    var L = P.dehydrated;
                    L !== null && ri(L);
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
              throw Error(a(163));
          }
          Ct || t.flags & 512 && vo(t);
        } catch (R) {
          nt(t, t.return, R);
        }
      }
      if (t === e) {
        Z = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Z = n;
        break;
      }
      Z = t.return;
    }
  }
  function ac(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t === e) {
        Z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Z = n;
        break;
      }
      Z = t.return;
    }
  }
  function uc(e) {
    for (; Z !== null; ) {
      var t = Z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (m) {
              nt(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                nt(t, i, m);
              }
            }
            var s = t.return;
            try {
              vo(t);
            } catch (m) {
              nt(t, s, m);
            }
            break;
          case 5:
            var u = t.return;
            try {
              vo(t);
            } catch (m) {
              nt(t, u, m);
            }
        }
      } catch (m) {
        nt(t, t.return, m);
      }
      if (t === e) {
        Z = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, Z = p;
        break;
      }
      Z = t.return;
    }
  }
  var Bf = Math.ceil, $l = b.ReactCurrentDispatcher, ko = b.ReactCurrentOwner, Zt = b.ReactCurrentBatchConfig, Pe = 0, vt = null, ut = null, kt = 0, Wt = 0, Vr = Un(0), ft = 0, Ci = null, dr = 0, Rl = 0, xo = 0, Ni = null, Ot = null, wo = 0, Ur = 1 / 0, Mn = null, Pl = !1, jo = null, Yn = null, Ll = !1, Xn = null, Fl = 0, Mi = 0, So = null, zl = -1, Al = 0;
  function $t() {
    return (Pe & 6) !== 0 ? Ue() : zl !== -1 ? zl : zl = Ue();
  }
  function Jn(e) {
    return (e.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && kt !== 0 ? kt & -kt : Sf.transition !== null ? (Al === 0 && (Al = na()), Al) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : da(e.type)), e);
  }
  function un(e, t, n, r) {
    if (50 < Mi) throw Mi = 0, So = null, Error(a(185));
    qr(e, n, r), ((Pe & 2) === 0 || e !== vt) && (e === vt && ((Pe & 2) === 0 && (Rl |= n), ft === 4 && Zn(e, kt)), It(e, r), n === 1 && Pe === 0 && (t.mode & 1) === 0 && (Ur = Ue() + 500, cl && Wn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    jd(e, t);
    var r = Ki(e, e === vt ? kt : 0);
    if (r === 0) n !== null && it(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && it(n), t === 1) e.tag === 0 ? jf(dc.bind(null, e)) : Ja(dc.bind(null, e)), gf(function() {
        (Pe & 6) === 0 && Wn();
      }), n = null;
      else {
        switch (ra(r)) {
          case 1:
            n = ts;
            break;
          case 4:
            n = ea;
            break;
          case 16:
            n = Vi;
            break;
          case 536870912:
            n = ta;
            break;
          default:
            n = Vi;
        }
        n = kc(n, cc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function cc(e, t) {
    if (zl = -1, Al = 0, (Pe & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (Hr() && e.callbackNode !== n) return null;
    var r = Ki(e, e === vt ? kt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ol(e, r);
    else {
      t = r;
      var i = Pe;
      Pe |= 2;
      var s = hc();
      (vt !== e || kt !== t) && (Mn = null, Ur = Ue() + 500, hr(e, t));
      do
        try {
          Hf();
          break;
        } catch (p) {
          fc(e, p);
        }
      while (!0);
      Bs(), $l.current = s, Pe = i, ut !== null ? t = 0 : (vt = null, kt = 0, t = ft);
    }
    if (t !== 0) {
      if (t === 2 && (i = ns(e), i !== 0 && (r = i, t = Eo(e, i))), t === 1) throw n = Ci, hr(e, 0), Zn(e, r), It(e, Ue()), n;
      if (t === 6) Zn(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !Vf(i) && (t = Ol(e, r), t === 2 && (s = ns(e), s !== 0 && (r = s, t = Eo(e, s))), t === 1)) throw n = Ci, hr(e, 0), Zn(e, r), It(e, Ue()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            pr(e, Ot, Mn);
            break;
          case 3:
            if (Zn(e, r), (r & 130023424) === r && (t = wo + 500 - Ue(), 10 < t)) {
              if (Ki(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                $t(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Ts(pr.bind(null, e, Ot, Mn), t);
              break;
            }
            pr(e, Ot, Mn);
            break;
          case 4:
            if (Zn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var u = 31 - nn(r);
              s = 1 << u, u = t[u], u > i && (i = u), r &= ~s;
            }
            if (r = i, r = Ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ts(pr.bind(null, e, Ot, Mn), r);
              break;
            }
            pr(e, Ot, Mn);
            break;
          case 5:
            pr(e, Ot, Mn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return It(e, Ue()), e.callbackNode === n ? cc.bind(null, e) : null;
  }
  function Eo(e, t) {
    var n = Ni;
    return e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256), e = Ol(e, t), e !== 2 && (t = Ot, Ot = n, t !== null && _o(t)), e;
  }
  function _o(e) {
    Ot === null ? Ot = e : Ot.push.apply(Ot, e);
  }
  function Vf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.getSnapshot;
          i = i.value;
          try {
            if (!rn(s(), i)) return !1;
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
  function Zn(e, t) {
    for (t &= ~xo, t &= ~Rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - nn(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function dc(e) {
    if ((Pe & 6) !== 0) throw Error(a(327));
    Hr();
    var t = Ki(e, 0);
    if ((t & 1) === 0) return It(e, Ue()), null;
    var n = Ol(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ns(e);
      r !== 0 && (t = r, n = Eo(e, r));
    }
    if (n === 1) throw n = Ci, hr(e, 0), Zn(e, t), It(e, Ue()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pr(e, Ot, Mn), It(e, Ue()), null;
  }
  function Co(e, t) {
    var n = Pe;
    Pe |= 1;
    try {
      return e(t);
    } finally {
      Pe = n, Pe === 0 && (Ur = Ue() + 500, cl && Wn());
    }
  }
  function fr(e) {
    Xn !== null && Xn.tag === 0 && (Pe & 6) === 0 && Hr();
    var t = Pe;
    Pe |= 1;
    var n = Zt.transition, r = Oe;
    try {
      if (Zt.transition = null, Oe = 1, e) return e();
    } finally {
      Oe = r, Zt.transition = n, Pe = t, (Pe & 6) === 0 && Wn();
    }
  }
  function No() {
    Wt = Vr.current, Ze(Vr);
  }
  function hr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, yf(n)), ut !== null) for (n = ut.return; n !== null; ) {
      var r = n;
      switch (zs(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && al();
          break;
        case 3:
          Ir(), Ze(Ft), Ze(St), Ys();
          break;
        case 5:
          Qs(r);
          break;
        case 4:
          Ir();
          break;
        case 13:
          Ze(et);
          break;
        case 19:
          Ze(et);
          break;
        case 10:
          Vs(r.type._context);
          break;
        case 22:
        case 23:
          No();
      }
      n = n.return;
    }
    if (vt = e, ut = e = qn(e.current, null), kt = Wt = t, ft = 0, Ci = null, xo = Rl = dr = 0, Ot = Ni = null, ar !== null) {
      for (t = 0; t < ar.length; t++) if (n = ar[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, s = n.pending;
        if (s !== null) {
          var u = s.next;
          s.next = i, r.next = u;
        }
        n.pending = r;
      }
      ar = null;
    }
    return e;
  }
  function fc(e, t) {
    do {
      var n = ut;
      try {
        if (Bs(), xl.current = El, wl) {
          for (var r = tt.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          wl = !1;
        }
        if (cr = 0, mt = dt = tt = null, xi = !1, wi = 0, ko.current = null, n === null || n.return === null) {
          ft = 1, Ci = t, ut = null;
          break;
        }
        e: {
          var s = e, u = n.return, p = n, m = t;
          if (t = kt, p.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var S = m, P = p, L = P.tag;
            if ((P.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var R = P.alternate;
              R ? (P.updateQueue = R.updateQueue, P.memoizedState = R.memoizedState, P.lanes = R.lanes) : (P.updateQueue = null, P.memoizedState = null);
            }
            var G = Ou(u);
            if (G !== null) {
              G.flags &= -257, Iu(G, u, p, s, t), G.mode & 1 && Au(s, S, t), t = G, m = S;
              var q = t.updateQueue;
              if (q === null) {
                var te = /* @__PURE__ */ new Set();
                te.add(m), t.updateQueue = te;
              } else q.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                Au(s, S, t), Mo();
                break e;
              }
              m = Error(a(426));
            }
          } else if (qe && p.mode & 1) {
            var lt = Ou(u);
            if (lt !== null) {
              (lt.flags & 65536) === 0 && (lt.flags |= 256), Iu(lt, u, p, s, t), Is(Dr(m, p));
              break e;
            }
          }
          s = m = Dr(m, p), ft !== 4 && (ft = 2), Ni === null ? Ni = [s] : Ni.push(s), s = u;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Fu(s, m, t);
                ou(s, w);
                break e;
              case 1:
                p = m;
                var y = s.type, j = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Yn === null || !Yn.has(j)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var A = zu(s, p, t);
                  ou(s, A);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        mc(n);
      } catch (ne) {
        t = ne, ut === n && n !== null && (ut = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function hc() {
    var e = $l.current;
    return $l.current = El, e === null ? El : e;
  }
  function Mo() {
    (ft === 0 || ft === 3 || ft === 2) && (ft = 4), vt === null || (dr & 268435455) === 0 && (Rl & 268435455) === 0 || Zn(vt, kt);
  }
  function Ol(e, t) {
    var n = Pe;
    Pe |= 2;
    var r = hc();
    (vt !== e || kt !== t) && (Mn = null, hr(e, t));
    do
      try {
        Uf();
        break;
      } catch (i) {
        fc(e, i);
      }
    while (!0);
    if (Bs(), Pe = n, $l.current = r, ut !== null) throw Error(a(261));
    return vt = null, kt = 0, ft;
  }
  function Uf() {
    for (; ut !== null; ) pc(ut);
  }
  function Hf() {
    for (; ut !== null && !wr(); ) pc(ut);
  }
  function pc(e) {
    var t = gc(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? mc(e) : ut = t, ko.current = null;
  }
  function mc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = zf(n, t, Wt), n !== null) {
          ut = n;
          return;
        }
      } else {
        if (n = Af(n, t), n !== null) {
          n.flags &= 32767, ut = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ft = 6, ut = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ut = t;
        return;
      }
      ut = t = e;
    } while (t !== null);
    ft === 0 && (ft = 5);
  }
  function pr(e, t, n) {
    var r = Oe, i = Zt.transition;
    try {
      Zt.transition = null, Oe = 1, Wf(e, t, n, r);
    } finally {
      Zt.transition = i, Oe = r;
    }
    return null;
  }
  function Wf(e, t, n, r) {
    do
      Hr();
    while (Xn !== null);
    if ((Pe & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Sd(e, s), e === vt && (ut = vt = null, kt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ll || (Ll = !0, kc(Vi, function() {
      return Hr(), null;
    })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
      s = Zt.transition, Zt.transition = null;
      var u = Oe;
      Oe = 1;
      var p = Pe;
      Pe |= 4, ko.current = null, If(e, n), lc(n, e), cf(Ns), Yi = !!Cs, Ns = Cs = null, e.current = n, Df(n), Jr(), Pe = p, Oe = u, Zt.transition = s;
    } else e.current = n;
    if (Ll && (Ll = !1, Xn = e, Fl = i), s = e.pendingLanes, s === 0 && (Yn = null), yd(n.stateNode), It(e, Ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Pl) throw Pl = !1, e = jo, jo = null, e;
    return (Fl & 1) !== 0 && e.tag !== 0 && Hr(), s = e.pendingLanes, (s & 1) !== 0 ? e === So ? Mi++ : (Mi = 0, So = e) : Mi = 0, Wn(), null;
  }
  function Hr() {
    if (Xn !== null) {
      var e = ra(Fl), t = Zt.transition, n = Oe;
      try {
        if (Zt.transition = null, Oe = 16 > e ? 16 : e, Xn === null) var r = !1;
        else {
          if (e = Xn, Xn = null, Fl = 0, (Pe & 6) !== 0) throw Error(a(331));
          var i = Pe;
          for (Pe |= 4, Z = e.current; Z !== null; ) {
            var s = Z, u = s.child;
            if ((Z.flags & 16) !== 0) {
              var p = s.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var S = p[m];
                  for (Z = S; Z !== null; ) {
                    var P = Z;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _i(8, P, s);
                    }
                    var L = P.child;
                    if (L !== null) L.return = P, Z = L;
                    else for (; Z !== null; ) {
                      P = Z;
                      var R = P.sibling, G = P.return;
                      if (ec(P), P === S) {
                        Z = null;
                        break;
                      }
                      if (R !== null) {
                        R.return = G, Z = R;
                        break;
                      }
                      Z = G;
                    }
                  }
                }
                var q = s.alternate;
                if (q !== null) {
                  var te = q.child;
                  if (te !== null) {
                    q.child = null;
                    do {
                      var lt = te.sibling;
                      te.sibling = null, te = lt;
                    } while (te !== null);
                  }
                }
                Z = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && u !== null) u.return = s, Z = u;
            else e: for (; Z !== null; ) {
              if (s = Z, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  _i(9, s, s.return);
              }
              var w = s.sibling;
              if (w !== null) {
                w.return = s.return, Z = w;
                break e;
              }
              Z = s.return;
            }
          }
          var y = e.current;
          for (Z = y; Z !== null; ) {
            u = Z;
            var j = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && j !== null) j.return = u, Z = j;
            else e: for (u = y; Z !== null; ) {
              if (p = Z, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tl(9, p);
                }
              } catch (ne) {
                nt(p, p.return, ne);
              }
              if (p === u) {
                Z = null;
                break e;
              }
              var A = p.sibling;
              if (A !== null) {
                A.return = p.return, Z = A;
                break e;
              }
              Z = p.return;
            }
          }
          if (Pe = i, Wn(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(Ui, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Oe = n, Zt.transition = t;
      }
    }
    return !1;
  }
  function vc(e, t, n) {
    t = Dr(n, t), t = Fu(e, t, 1), e = Qn(e, t, 1), t = $t(), e !== null && (qr(e, 1, t), It(e, t));
  }
  function nt(e, t, n) {
    if (e.tag === 3) vc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
          e = Dr(n, e), e = zu(t, e, 1), t = Qn(t, e, 1), e = $t(), t !== null && (qr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Kf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $t(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (kt & n) === n && (ft === 4 || ft === 3 && (kt & 130023424) === kt && 500 > Ue() - wo ? hr(e, 0) : xo |= n), It(e, t);
  }
  function yc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Wi, Wi <<= 1, (Wi & 130023424) === 0 && (Wi = 4194304)));
    var n = $t();
    e = _n(e, t), e !== null && (qr(e, t, n), It(e, n));
  }
  function Qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), yc(e, n);
  }
  function Gf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), yc(e, n);
  }
  var gc;
  gc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ft.current) At = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return At = !1, Ff(e, t, n);
      At = (e.flags & 131072) !== 0;
    }
    else At = !1, qe && (t.flags & 1048576) !== 0 && Za(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Nl(e, t), e = t.pendingProps;
        var i = Rr(t, St.current);
        Or(t, n), i = Zs(null, t, r, e, i, n);
        var s = qs();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, zt(r) ? (s = !0, ul(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ws(t), i.updater = _l, t.stateNode = i, i._reactInternals = t, io(t, r, e, n), t = ao(null, t, r, !0, s, n)) : (t.tag = 0, qe && s && Fs(t), Tt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Nl(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Xf(r), e = sn(r, e), i) {
            case 0:
              t = oo(null, t, r, e, n);
              break e;
            case 1:
              t = Wu(null, t, r, e, n);
              break e;
            case 11:
              t = Du(null, t, r, e, n);
              break e;
            case 14:
              t = Bu(null, t, r, sn(r.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : sn(r, i), oo(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : sn(r, i), Wu(e, t, r, i, n);
      case 3:
        e: {
          if (Ku(t), e === null) throw Error(a(387));
          r = t.pendingProps, s = t.memoizedState, i = s.element, su(e, t), gl(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            i = Dr(Error(a(423)), t), t = Qu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = Dr(Error(a(424)), t), t = Qu(e, t, r, n, i);
            break e;
          } else for (Ht = Vn(t.stateNode.containerInfo.firstChild), Ut = t, qe = !0, ln = null, n = iu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Fr(), r === i) {
              t = Nn(e, t, n);
              break e;
            }
            Tt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return uu(t), e === null && Os(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, u = i.children, Ms(r, i) ? u = null : s !== null && Ms(r, s) && (t.flags |= 32), Hu(e, t), Tt(e, t, u, n), t.child;
      case 6:
        return e === null && Os(t), null;
      case 13:
        return Gu(e, t, n);
      case 4:
        return Ks(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zr(t, null, r, n) : Tt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : sn(r, i), Du(e, t, r, i, n);
      case 7:
        return Tt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Tt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Tt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, u = i.value, Qe(ml, r._currentValue), r._currentValue = u, s !== null) if (rn(s.value, u)) {
            if (s.children === i.children && !Ft.current) {
              t = Nn(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var p = s.dependencies;
            if (p !== null) {
              u = s.child;
              for (var m = p.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (s.tag === 1) {
                    m = Cn(-1, n & -n), m.tag = 2;
                    var S = s.updateQueue;
                    if (S !== null) {
                      S = S.shared;
                      var P = S.pending;
                      P === null ? m.next = m : (m.next = P.next, P.next = m), S.pending = m;
                    }
                  }
                  s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), Us(
                    s.return,
                    n,
                    t
                  ), p.lanes |= n;
                  break;
                }
                m = m.next;
              }
            } else if (s.tag === 10) u = s.type === t.type ? null : s.child;
            else if (s.tag === 18) {
              if (u = s.return, u === null) throw Error(a(341));
              u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), Us(u, n, t), u = s.sibling;
            } else u = s.child;
            if (u !== null) u.return = s;
            else for (u = s; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (s = u.sibling, s !== null) {
                s.return = u.return, u = s;
                break;
              }
              u = u.return;
            }
            s = u;
          }
          Tt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, Or(t, n), i = Xt(i), r = r(i), t.flags |= 1, Tt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = sn(r, t.pendingProps), i = sn(r.type, i), Bu(e, t, r, i, n);
      case 15:
        return Vu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : sn(r, i), Nl(e, t), t.tag = 1, zt(r) ? (e = !0, ul(t)) : e = !1, Or(t, n), Pu(t, r, i), io(t, r, i, n), ao(null, t, r, !0, e, n);
      case 19:
        return Xu(e, t, n);
      case 22:
        return Uu(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function kc(e, t) {
    return Bt(e, t);
  }
  function Yf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, n, r) {
    return new Yf(e, t, n, r);
  }
  function To(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Xf(e) {
    if (typeof e == "function") return To(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === He) return 11;
      if (e === De) return 14;
    }
    return 2;
  }
  function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = qt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Il(e, t, n, r, i, s) {
    var u = 2;
    if (r = e, typeof e == "function") To(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case K:
        return mr(n.children, i, s, t);
      case U:
        u = 8, i |= 8;
        break;
      case le:
        return e = qt(12, n, t, i | 2), e.elementType = le, e.lanes = s, e;
      case Re:
        return e = qt(13, n, t, i), e.elementType = Re, e.lanes = s, e;
      case Le:
        return e = qt(19, n, t, i), e.elementType = Le, e.lanes = s, e;
      case we:
        return Dl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case de:
            u = 10;
            break e;
          case Ie:
            u = 9;
            break e;
          case He:
            u = 11;
            break e;
          case De:
            u = 14;
            break e;
          case We:
            u = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = qt(u, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
  }
  function mr(e, t, n, r) {
    return e = qt(7, e, r, t), e.lanes = n, e;
  }
  function Dl(e, t, n, r) {
    return e = qt(22, e, r, t), e.elementType = we, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function $o(e, t, n) {
    return e = qt(6, e, null, t), e.lanes = n, e;
  }
  function Ro(e, t, n) {
    return t = qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Jf(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rs(0), this.expirationTimes = rs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Po(e, t, n, r, i, s, u, p, m) {
    return e = new Jf(e, t, n, p, m), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = qt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ws(s), e;
  }
  function Zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: oe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function xc(e) {
    if (!e) return Hn;
    e = e._reactInternals;
    e: {
      if (hn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (zt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (zt(n)) return Ya(e, n, t);
    }
    return t;
  }
  function wc(e, t, n, r, i, s, u, p, m) {
    return e = Po(n, r, !0, e, i, s, u, p, m), e.context = xc(null), n = e.current, r = $t(), i = Jn(n), s = Cn(r, i), s.callback = t ?? null, Qn(n, s, i), e.current.lanes = i, qr(e, i, r), It(e, r), e;
  }
  function Bl(e, t, n, r) {
    var i = t.current, s = $t(), u = Jn(i);
    return n = xc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cn(s, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qn(i, t, u), e !== null && (un(e, i, u, s), yl(e, i, u)), u;
  }
  function Vl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function jc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Lo(e, t) {
    jc(e, t), (e = e.alternate) && jc(e, t);
  }
  function qf() {
    return null;
  }
  var Sc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Fo(e) {
    this._internalRoot = e;
  }
  Ul.prototype.render = Fo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Bl(e, t, null, null);
  }, Ul.prototype.unmount = Fo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fr(function() {
        Bl(null, e, null, null);
      }), t[wn] = null;
    }
  };
  function Ul(e) {
    this._internalRoot = e;
  }
  Ul.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = sa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++) ;
      In.splice(n, 0, e), n === 0 && ua(e);
    }
  };
  function zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ec() {
  }
  function bf(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var S = Vl(u);
          s.call(S);
        };
      }
      var u = wc(t, r, e, 0, null, !1, !1, "", Ec);
      return e._reactRootContainer = u, e[wn] = u.current, fi(e.nodeType === 8 ? e.parentNode : e), fr(), u;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var S = Vl(m);
        p.call(S);
      };
    }
    var m = Po(e, 0, !1, null, null, !1, !1, "", Ec);
    return e._reactRootContainer = m, e[wn] = m.current, fi(e.nodeType === 8 ? e.parentNode : e), fr(function() {
      Bl(t, m, n, r);
    }), m;
  }
  function Wl(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var u = s;
      if (typeof i == "function") {
        var p = i;
        i = function() {
          var m = Vl(u);
          p.call(m);
        };
      }
      Bl(t, u, e, i);
    } else u = bf(n, t, e, i, r);
    return Vl(u);
  }
  ia = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zr(t.pendingLanes);
          n !== 0 && (is(t, n | 1), It(t, Ue()), (Pe & 6) === 0 && (Ur = Ue() + 500, Wn()));
        }
        break;
      case 13:
        fr(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var i = $t();
            un(r, e, 1, i);
          }
        }), Lo(e, 1);
    }
  }, ls = function(e) {
    if (e.tag === 13) {
      var t = _n(e, 134217728);
      if (t !== null) {
        var n = $t();
        un(t, e, 134217728, n);
      }
      Lo(e, 134217728);
    }
  }, la = function(e) {
    if (e.tag === 13) {
      var t = Jn(e), n = _n(e, t);
      if (n !== null) {
        var r = $t();
        un(n, e, t, r);
      }
      Lo(e, t);
    }
  }, sa = function() {
    return Oe;
  }, oa = function(e, t) {
    var n = Oe;
    try {
      return Oe = e, t();
    } finally {
      Oe = n;
    }
  }, en = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ce(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = ol(r);
              if (!i) throw Error(a(90));
              re(r), Ce(r, i);
            }
          }
        }
        break;
      case "textarea":
        Fe(e, n);
        break;
      case "select":
        t = n.value, t != null && Ve(e, !!n.multiple, t, !1);
    }
  }, pt = Co, Qt = fr;
  var eh = { usingClientEntryPoint: !1, Events: [mi, Tr, ol, ht, Ke, Co] }, Ti = { findFiberByHostInstance: ir, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, th = { bundleType: Ti.bundleType, version: Ti.version, rendererPackageName: Ti.rendererPackageName, rendererConfig: Ti.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = J(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ti.findFiberByHostInstance || qf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber) try {
      Ui = Kl.inject(th), pn = Kl;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zo(t)) throw Error(a(200));
    return Zf(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!zo(e)) throw Error(a(299));
    var n = !1, r = "", i = Sc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Po(e, 1, !1, null, null, n, !1, r, i), e[wn] = t.current, fi(e.nodeType === 8 ? e.parentNode : e), new Fo(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = J(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return fr(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!Hl(t)) throw Error(a(200));
    return Wl(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!zo(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, i = !1, s = "", u = Sc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = wc(t, null, e, 1, n ?? null, i, !1, s, u), e[wn] = t.current, fi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new Ul(t);
  }, Dt.render = function(e, t, n) {
    if (!Hl(t)) throw Error(a(200));
    return Wl(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!Hl(e)) throw Error(a(40));
    return e._reactRootContainer ? (fr(function() {
      Wl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Co, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hl(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Wl(e, t, n, !1, r);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var Pc;
function ch() {
  if (Pc) return Io.exports;
  Pc = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Io.exports = uh(), Io.exports;
}
var Lc;
function dh() {
  if (Lc) return Ql;
  Lc = 1;
  var l = ch();
  return Ql.createRoot = l.createRoot, Ql.hydrateRoot = l.hydrateRoot, Ql;
}
var fh = dh();
const hh = (() => {
  const l = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], o = "CDEFGAB", a = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], h = d.at(-1), f = { pentatonic: 15, "3nps": 17 }, v = 7, x = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], N = ["e", "B", "G", "D", "A", "E"], I = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], T = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], O = {
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
      base: T,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: T,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: T,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: T,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, Q = 26, H = 72, _ = 30, E = 54, B = 34, M = 11, Y = (Q + H) / 2, b = _ + (d.length - 1) * B + 30, ge = (z) => H + z * E, oe = (z) => z === 0 ? Y : ge(z) - E / 2, K = (z) => _ + z * B;
  function U(z, V, F) {
    const ee = o.indexOf(l[z][0]) + Number(F.slice(-1)) - 1, he = ee % o.length, re = a[he] + 12 * Math.floor(ee / o.length), ie = z + V - re;
    return o[he] + (ie < 0 ? "♭" : "♯").repeat(Math.abs(ie));
  }
  function le(z) {
    return [...z.base, ...z.add].sort((V, F) => V[0] - F[0]);
  }
  function de(z, V, F) {
    const ee = V + (F ? 1 : 0), he = x[ee % x.length], re = Math.min(...he.map(([Ce]) => Ce)), ie = Math.max(...he.map(([, Ce]) => Ce));
    let xe = (z - h % 12 + 12) % 12 - (F ? 8 : 5) + 12 * Math.floor(ee / x.length);
    return re + xe < 0 && (xe += 12), ie + xe > f.pentatonic && (xe -= 12), {
      strings: he.map((Ce) => Ce.map((Ae) => Ae + xe)),
      start: re + xe,
      end: ie + xe
    };
  }
  function Ie(z, V, F) {
    const ee = F[V], he = (z + ee - h % 12 + 12) % 12, re = h + he - ee, ie = d.map((se, Se) => {
      const xe = V + (d.length - 1 - Se) * 3;
      return [xe, xe + 1, xe + 2].map((Ce) => {
        const Ae = Math.floor(Ce / F.length), Te = F[Ce % F.length];
        return re + Te + 12 * Ae - se;
      });
    });
    return {
      strings: ie,
      start: Math.min(...ie.map((se) => se[0])),
      end: Math.max(...ie.map((se) => se.at(-1)))
    };
  }
  function He(z, V) {
    const F = [], ee = Math.ceil(-z.end / 12) * 12;
    for (let re = ee; z.start + re <= V; re += 12) {
      const ie = z.strings.map((Se) => Se.map((xe) => xe + re).filter((xe) => xe >= 0 && xe <= V)), se = ie.flat();
      F.push({
        strings: ie,
        start: Math.min(...se),
        end: Math.max(...se),
        partial: z.start + re < 0 || z.end + re > V
      });
    }
    const he = F.filter((re) => !re.partial);
    return he.length ? he : F;
  }
  function Re(z) {
    return le(z).length === v;
  }
  function Le(z, V, F) {
    const ee = Re(V);
    z.querySelector('[value="3nps"]').disabled = !ee, z.value = ee ? F ?? "3nps" : "pentatonic";
  }
  function De(z, V, F, ee, he) {
    const re = le(V).map(([ie]) => ie);
    return ee.map((ie) => {
      const se = ie - 1, Se = F === "3nps" ? Ie(z, se, re) : de(z, se, V.base === T), xe = he === void 0 ? [Se] : He(Se, he);
      return { number: ie, positions: xe };
    });
  }
  function We(z, V) {
    const F = z.getBoundingClientRect(), ee = z.querySelectorAll(V);
    let he = 1 / 0;
    ee.forEach((re) => {
      const ie = re.getBoundingClientRect();
      let se = 0;
      ie.left < F.left ? se = ie.left - F.left - 8 : ie.right > F.right && (se = ie.right - F.right + 8), Math.abs(se) < Math.abs(he) && (he = se);
    }), Number.isFinite(he) && (z.scrollLeft += he);
  }
  function we(z, V = !1) {
    const F = z === "3nps" ? v : x.length;
    return Array.from({ length: F }, (ee, he) => {
      const re = he + 1;
      return '<label class="box-toggle" data-box="' + re + '"><input type="checkbox" value="' + re + '"' + (V && he === 0 ? " checked" : "") + "> Boksi " + re + "</label>";
    }).join("");
  }
  function D(z, V) {
    const F = le(V), ee = new Map(F.map(([re, ie]) => [re, U(z, re, ie)])), he = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return F.flatMap(([re, ie]) => he.flatMap(({ suffix: se, base: Se }) => {
      const xe = Se.map(([Ce]) => ee.get((re + Ce) % 12));
      return xe.every(Boolean) ? {
        root: (z + re) % 12,
        degree: Number(String(ie).replace(/\D/g, "")),
        name: xe[0] + se,
        notes: xe,
        base: Se,
        add: []
      } : [];
    }));
  }
  function X(z, V) {
    const F = z.base.map(([re]) => (z.root + re) % 12), ee = d.map((re) => {
      const ie = [];
      for (let se = 0; se <= V; se++) {
        const Se = (re + se) % 12;
        F.includes(Se) && ie.push({ fret: se, pitch: Se });
      }
      return ie;
    }), he = [];
    for (let re = 0; re <= ee.length - 3; re++)
      for (const ie of ee[re])
        for (const se of ee[re + 1])
          if (ie.pitch !== se.pitch)
            for (const Se of ee[re + 2]) {
              if (Se.pitch === ie.pitch || Se.pitch === se.pitch) continue;
              const xe = [ie.fret, se.fret, Se.fret], Ce = Math.min(...xe), Ae = Math.max(...xe);
              if (Ae - Ce > 3) continue;
              const Te = Array(d.length).fill(null);
              Te.splice(re, 3, ...xe), he.push({ strings: Te, low: Ce, high: Ae });
            }
    return he.sort((re, ie) => re.high - ie.high || re.low - ie.low);
  }
  const W = {
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
  function $(z, V) {
    const F = W[z + ":" + V];
    if (F) return { frets: F, barre: null };
    let ee = null;
    return g.forEach(({ string: he, openPC: re, shapes: ie }) => {
      const se = ie[V];
      if (!se) return;
      let Se = (z - re + 12) % 12;
      if (Se + Math.min(...se.filter((Ae) => Ae !== null)) < 0 && (Se += 12), ee && ee.fret <= Se) return;
      const xe = se.map((Ae) => Ae === null ? null : Se + Ae), Ce = Se > 0 && se.at(-1) === 0 ? { fret: Se, from: he, to: se.length - 1 } : null;
      ee = { fret: Se, frets: xe, barre: Ce };
    }), ee && { frets: ee.frets, barre: ee.barre };
  }
  function ae(z, { frets: V, barre: F }, ee) {
    const xe = [...d].reverse(), Ce = V.filter((Fe) => Fe > 0), Te = !Ce.length || Math.max(...Ce) <= 4 && (V.includes(0) || Math.min(...Ce) === 1) ? 1 : Math.min(...Ce), Be = (Fe) => 24 + Fe * 14, Ve = (Fe) => 30 + (Fe - Te) * 18 + 18 / 2, Nt = 102;
    let be = '<svg class="chord-svg" viewBox="0 0 108 ' + (Nt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ee + "-ote paksusta kielestä ohueen: " + V.map((Fe) => Fe ?? "x").join(" ") + '">';
    for (let Fe = 0; Fe <= 4; Fe++)
      be += '<line class="' + (Fe === 0 && Te === 1 ? "nut" : "fret") + '" x1="' + Be(0) + '" y1="' + (30 + Fe * 18) + '" x2="' + Be(5) + '" y2="' + (30 + Fe * 18) + '"/>';
    return V.forEach((Fe, ot) => {
      be += '<line class="string" x1="' + Be(ot) + '" y1="30" x2="' + Be(ot) + '" y2="' + Nt + '"/>';
    }), Te > 1 && (be += '<text class="fret-label" x="15" y="' + (Ve(Te) + 4) + '">' + Te + "</text>"), F && (be += '<rect class="barre" x="' + (Be(F.from) - 6.5) + '" y="' + (Ve(F.fret) - 6.5) + '" width="' + ((F.to - F.from) * 14 + 13) + '" height="13" rx="6.5"/>'), V.forEach((Fe, ot) => {
      if (Fe === null) {
        be += '<text class="marker" x="' + Be(ot) + '" y="22">×</text>';
        return;
      }
      const Mt = (xe[ot] + Fe) % 12 === z;
      if (Fe === 0) {
        be += '<circle class="open' + (Mt ? " root-open" : "") + '" cx="' + Be(ot) + '" cy="18" r="4.5"/>';
        return;
      }
      F && Fe === F.fret && ot >= F.from && ot <= F.to && !Mt || (be += '<circle class="' + (Mt ? "root" : "tone") + '" cx="' + Be(ot) + '" cy="' + Ve(Fe) + '" r="6.5"/>');
    }), be + "</svg>";
  }
  function pe(z, V) {
    const F = new URLSearchParams(location.search), ee = l.indexOf(F.get("toonikka")), he = F.get("asteikko");
    return {
      rootPC: ee === -1 ? z : ee,
      scaleId: Object.hasOwn(O, he) ? he : V
    };
  }
  function ke(z, V, F) {
    return z + "?" + new URLSearchParams({ toonikka: l[V], asteikko: F });
  }
  function ye(z, V, F, {
    boxes: ee = [],
    onlyBoxNotes: he = !1,
    automatic: re = !0,
    focusDegree: ie = "",
    grip: se = null,
    label: Se = l[z] + " " + V.name,
    notes: xe = null,
    targets: Ce = !1
  } = {}) {
    const Ae = ge(F), Te = Ae + 48, Be = Te + 28, Ve = _ - 14, Nt = K(d.length - 1) + 14, be = Nt - Ve, Fe = re ? 680 : Math.ceil(Be * 0.64), ot = ee.flatMap((je) => je.positions), Mt = {};
    V.base.forEach(([je, Ne]) => Mt[(z + je) % 12] = { deg: Ne, added: !1 }), V.add.forEach(([je, Ne]) => Mt[(z + je) % 12] = { deg: Ne, added: !0 });
    const bt = d.map((je, Ne) => !!se && se[Ne] === null), ct = I.filter((je, Ne) => bt[Ne]).reverse(), xn = Se + ". " + F + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (ct.length ? " Soittamatta jäävät kielet: " + ct.join(", ") + "." : "");
    let fe = '<svg viewBox="0 0 ' + Be + " " + b + '" style="min-width:' + Fe + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Ce ? "group" : "img") + '" aria-label="' + xn + '">';
    fe += '<rect x="' + Q + '" y="' + Ve + '" width="' + (H - Q) + '" height="' + be + '" rx="6" fill="#2a2338"/>', fe += '<rect x="' + H + '" y="' + Ve + '" width="' + (Ae - H) + '" height="' + be + '" fill="#231a12"/>', fe += '<rect x="' + Ae + '" y="' + Ve + '" width="' + (Be - Ae - 4) + '" height="' + be + '" rx="8" fill="#32251e"/>';
    for (let je = 1; je <= F; je++)
      fe += '<line x1="' + ge(je) + '" y1="' + Ve + '" x2="' + ge(je) + '" y2="' + Nt + '" stroke="#6f5b47" stroke-width="2"/>';
    fe += '<rect x="' + (H - 3) + '" y="' + Ve + '" width="6" height="' + be + '" rx="2" fill="#d8cbb6"/>', fe += '<rect x="' + (Te - 11) + '" y="' + (Ve + 3) + '" width="22" height="' + (be - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', fe += '<rect x="' + (Te - 4) + '" y="' + (Ve + 7) + '" width="3" height="' + (be - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Pt = (Ve + Nt) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((je) => je <= F).forEach((je) => fe += '<circle cx="' + oe(je) + '" cy="' + Pt + '" r="5.5" fill="#7a6550"/>');
    for (let je = 12; je <= F; je += 12)
      fe += '<circle cx="' + oe(je) + '" cy="' + (Pt - B) + '" r="5.5" fill="#7a6550"/>', fe += '<circle cx="' + oe(je) + '" cy="' + (Pt + B) + '" r="5.5" fill="#7a6550"/>';
    fe += '<text x="' + Y + '" y="' + (b - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', fe += '<text x="' + H + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', fe += '<text x="' + Te + '" y="' + (b - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let je = 1; je <= F; je++)
      fe += '<text x="' + oe(je) + '" y="' + (b - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + je + "</text>";
    return ee.forEach(({ number: je, positions: Ne }) => {
      Ne.forEach((Ee) => {
        const Xe = Ee.partial ? "box-highlight box-partial" : "box-highlight";
        fe += '<g class="' + Xe + '" data-box="' + je + '" aria-hidden="true">';
        const at = Ee.strings.find((Lt) => Lt.length), Kt = (oe(at[0]) + oe(at.at(-1))) / 2;
        fe += '<text class="box-number" x="' + Kt + '" y="12">' + je + "</text>", Ee.strings.forEach((Lt, dn) => {
          if (!Lt.length) return;
          const en = oe(Lt[0]) - 16, wt = oe(Lt.at(-1)) - oe(Lt[0]) + 32;
          fe += '<rect class="box-band" x="' + en + '" y="' + (K(dn) - 14) + '" width="' + wt + '" height="28" rx="14"/>';
        }), fe += "</g>";
      });
    }), d.forEach((je, Ne) => {
      const Ee = 1 + Ne * 0.45, Xe = K(Ne);
      bt[Ne] ? fe += '<text class="muted-mark" x="' + Y + '" y="' + (Xe + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : fe += '<line x1="' + (Q + 4) + '" y1="' + Xe + '" x2="' + (H - 4) + '" y2="' + Xe + '" stroke="#8b809d" stroke-dasharray="3 3"/>', fe += "<g" + (bt[Ne] ? ' opacity=".35"' : "") + ">", fe += '<line x1="' + H + '" y1="' + Xe + '" x2="' + (Te + 5) + '" y2="' + Xe + '" stroke="#b9b9c4" stroke-width="' + Ee.toFixed(2) + '"/>', fe += '<circle cx="' + (Te + 5) + '" cy="' + Xe + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', fe += "</g>", fe += '<text x="13" y="' + (Xe + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + N[Ne] + "</text>";
    }), Ce && (fe += '<g class="fret-targets">', d.forEach((je, Ne) => {
      for (let Ee = 0; Ee <= F; Ee++) {
        const Xe = Ee ? I[Ne] + "-kieli, " + Ee + ". nauha" : "vapaa " + I[Ne] + "-kieli", at = Ee ? E : H - Q - 6;
        fe += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Ne + '" data-fret="' + Ee + '" data-midi="' + (je + Ee) + '" aria-label="' + Xe + '" x="' + (oe(Ee) - at / 2) + '" y="' + (K(Ne) - B / 2) + '" width="' + at + '" height="' + B + '" fill="transparent"/>';
      }
    }), fe += "</g>"), (xe ?? []).forEach(({ string: je, fret: Ne, label: Ee, kind: Xe }) => {
      fe += '<g class="octave-note octave-' + Xe + '">', fe += '<circle cx="' + oe(Ne) + '" cy="' + K(je) + '" r="' + M + '"/>', fe += '<text x="' + oe(Ne) + '" y="' + (K(je) + 3.5) + '" font-size="' + (Ee.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Ee + "</text>", fe += "</g>";
    }), se && (fe += '<g class="grip-notes">'), (xe ? [] : d).forEach((je, Ne) => {
      for (let Ee = 0; Ee <= F; Ee++) {
        const Xe = (je + Ee) % 12;
        if (!(Xe in Mt) || se && se[Ne] !== Ee || he && !ot.some(({ strings: en }) => {
          const wt = en[Ne];
          return wt.length > 0 && Ee >= wt[0] && Ee <= wt.at(-1);
        })) continue;
        const at = Mt[Xe], Kt = at.deg === "1", Lt = at.added ? "#f0a13c" : Kt ? "#4b2fd6" : "#6d4aff", dn = at.added ? "#1a1430" : "#fff";
        at.deg === ie && (fe += '<circle class="focus-note" cx="' + oe(Ee) + '" cy="' + K(Ne) + '" r="14.5"/>'), fe += '<circle cx="' + oe(Ee) + '" cy="' + K(Ne) + '" r="' + M + '" fill="' + Lt + '" stroke="' + (Kt ? "#fff" : "#1a1430") + '" stroke-width="' + (Kt ? 2.5 : 1) + '"/>', fe += '<text x="' + oe(Ee) + '" y="' + (K(Ne) + 3.5) + '" font-size="' + (at.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + dn + '" text-anchor="middle">' + at.deg + "</text>";
      }
    }), se && (fe += "</g>"), fe += "</svg>", fe;
  }
  return {
    CHROM: l,
    OPEN_PITCHES: d,
    PENT_MAJ: T,
    SCALES: O,
    noteName: U,
    scaleNotes: le,
    scaleTriads: D,
    triadGrips: X,
    chordGrip: $,
    renderChordDiagram: ae,
    selectionFromURL: pe,
    selectionHref: ke,
    renderBoard: ye,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: Re,
    syncBoxSystem: Le,
    fingeringBoxes: De,
    boxOptions: we,
    revealPositions: We
  };
})();
globalThis.MusicMapFretboard = hh;
function ph(l) {
  return 440 * Math.pow(2, (l - 69) / 12);
}
function mh(l) {
  return 69 + 12 * Math.log2(l / 440);
}
function vh(l) {
  const o = mh(l), a = Math.round(o), d = (o - a) * 100;
  return { midi: a, cents: d };
}
const rt = globalThis.MusicMapFretboard, Ge = (l) => (l % 12 + 12) % 12, yh = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], gh = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ye = (l, o = !1, a = !1) => (o ? gh : yh)[Ge(l)] + (a ? Math.floor(l / 12) - 1 : ""), tr = (l) => rt.CHROM[Ge(l)], Li = (l, o, a) => rt.noteName(Ge(l), o, a);
function kh(l, o) {
  const a = Math.floor(l / 12) - 1;
  return o[0] === "B" && Ge(l) < 2 ? a - 1 : o[0] === "C" && Ge(l) > 9 ? a + 1 : a;
}
const $n = ["ohut E", "B", "G", "D", "A", "paksu E"], qo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Jc = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], xh = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Gr = (l) => l === 0 ? "vapaa kieli" : `${l}. nauha`, Zc = (l, o) => ({ string: l, fret: o, midi: rt.OPEN_PITCHES[l] + o });
function Oi(l, o, a) {
  return [...l].sort((d, h) => d - h).flatMap((d) => Array.from({ length: Math.max(0, a - o + 1) }, (h, f) => Zc(d, o + f)));
}
const st = (l) => `${l.string}:${l.fret}`, yr = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, qc = (l, o) => o === "maj" ? `${tr(l)}-duurisointu` : o === "min" ? `${tr(l)}-mollisointu` : `${tr(l)}7-sointu`, Fi = [
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
], Fc = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function bc(l, o) {
  const a = Fc[o] ?? Fc.E, d = Ge(l - a.root);
  return a.frets.flatMap((h, f) => h === null ? [] : [Zc(f, h + d)]);
}
const Gl = {
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
}, Jl = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, er = (l, o, a, d) => typeof l == "number" && Number.isFinite(l) ? Math.max(o, Math.min(a, l)) : d, kn = (l, o, a) => o.includes(l) ? l : a;
function Xl(l) {
  const o = { ...Gl };
  o.mode = kn(l.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], o.mode), o.strings = Array.isArray(l.strings) ? [...new Set(l.strings.filter((a) => Number.isInteger(a) && a >= 0 && a <= 5))].sort((a, d) => a - d) : o.strings, o.strings.length || (o.strings = [...Gl.strings]), o.min = Math.round(er(l.min, 0, 24, o.min)), o.max = Math.round(er(l.max, o.min, 24, Math.max(o.min, o.max)));
  for (const a of ["accidentals", "flats", "weak", "advance", "reference"]) typeof l[a] == "boolean" && (o[a] = l[a]);
  return o.check = kn(l.check, ["class", "pitch"], o.check), o.input = kn(l.input, ["mic", "board"], o.input), o.rounds = [0, 10, 20].includes(l.rounds) ? l.rounds : o.rounds, o.root = Math.round(er(l.root, 0, 11, o.root)), o.scale = typeof l.scale == "string" && Object.hasOwn(rt.SCALES, l.scale) ? l.scale : o.scale, o.box = Math.round(er(l.box, 0, 5, o.box)), o.order = kn(l.order, ["random", "up", "down"], o.order), o.chord = kn(l.chord, ["maj", "min", "dom7"], o.chord), o.chordTone = kn(l.chordTone, ["build", "random", "1", "3", "5", "7"], o.chordTone), o.chord !== "dom7" && o.chordTone === "7" && (o.chordTone = "build"), o.shape = kn(l.shape, ["C", "A", "G", "E", "D"], o.shape), o.intervals = Array.isArray(l.intervals) ? [...new Set(l.intervals.filter((a) => Number.isInteger(a) && a >= 1 && a <= 12))].sort((a, d) => a - d) : o.intervals, o.intervals.length || (o.intervals = [...Gl.intervals]), o.direction = kn(l.direction, ["up", "down", "both"], o.direction), o.hints = kn(l.hints, ["off", "always", "fade"], o.hints), o.activity = kn(l.activity, ["play", "degree"], o.activity), o.minRms = er(l.minRms, 1e-3, 0.15, o.minRms), o.clarity = er(l.clarity, 0.85, 0.99, o.clarity), o.stability = er(l.stability, 120, 800, o.stability), o.cents = er(l.cents, 10, 45, o.cents), o.device = typeof l.device == "string" ? l.device.slice(0, 256) : "", o;
}
function wh(l, o) {
  const a = new URLSearchParams(l), d = { ...o };
  for (const [h, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    a.has(h) && Object.assign(d, { [f]: a.get(h) });
  for (const [h, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    a.has(h) && (d[f] = Number(a.get(h)));
  a.has("kielet") && (d.strings = a.get("kielet").split(",").map((h) => Number(h) - 1)), a.has("intervallit") && (d.intervals = a.get("intervallit").split(",").map(Number));
  for (const [h, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    a.has(h) && (d[f] = a.get(h) === "1");
  if (a.has("toonikka")) {
    const h = a.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = h.charAt(0).toUpperCase() + h.slice(1), v = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], x = Math.max(rt.CHROM.indexOf(f), v.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    x >= 0 && (d.root = x);
  }
  return Xl(d);
}
function jh(l) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: l.mode,
    toonikka: rt.CHROM[l.root],
    asteikko: l.scale,
    alku: String(l.min),
    loppu: String(l.max),
    boksi: String(l.box),
    kierros: String(l.rounds),
    tarkistus: l.check,
    muoto: l.shape,
    sointu: l.chord,
    jarjestys: l.order,
    vastaus: l.input,
    vihjeet: l.hints,
    tehtava: l.activity,
    sointuaste: l.chordTone,
    suunta: l.direction,
    kielet: l.strings.map((o) => o + 1).join(","),
    intervallit: l.intervals.join(","),
    kromaattinen: l.accidentals ? "1" : "0",
    alennukset: l.flats ? "1" : "0",
    kertaus: l.weak ? "1" : "0",
    vertailu: l.reference ? "1" : "0"
  });
}
const gr = (l) => l.mode === "ear-note" ? "note" : ["scale", "chord"].includes(l.mode) && l.activity === "degree" ? "degree" : l.input, Tn = (l) => l.mode === "scale" && l.order !== "random", ed = (l) => ["note", "degree"].includes(gr(l)) ? "class" : Tn(l) ? "pitch" : l.check, Vo = (l) => gr(l) === "mic", zc = "musiikin-kartta:harjoittelu", td = 3, Ho = () => ({ version: td, settings: { ...Gl }, stats: {}, recent: [], sessions: [] }), nd = (l) => `${l.input}:${l.check}:${l.hint ? "guided" : "solo"}:${l.item}`, cn = (l) => typeof l == "number" && Number.isFinite(l) && l >= 0;
function Sh(l) {
  return !!l && ["attempts", "correct", "totalMs", "lastSeen"].every((o) => cn(l[o])) && l.correct <= l.attempts && (l.errors === void 0 || cn(l.errors)) && (l.ema === void 0 || cn(l.ema) && l.ema <= 1) && (l.emaMs === void 0 || cn(l.emaMs));
}
function Eh(l) {
  return !!l && typeof l.id == "string" && cn(l.count) && cn(l.first) && l.first <= l.count && cn(l.ms) && cn(l.at) && (l.solo === void 0 || cn(l.solo) && l.solo <= l.count) && (l.soloFirst === void 0 || cn(l.soloFirst) && l.soloFirst <= (l.solo ?? l.count));
}
function Ac(l) {
  if (!l) return Ho();
  const o = JSON.parse(l);
  if (!o || ![1, 2, 3].includes(o.version) || !o.stats || typeof o.stats != "object" || Array.isArray(o.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(o.stats).some((v) => !Sh(v))) throw new Error("Virheellisiä tilastoja");
  if (o.recent !== void 0 && (!Array.isArray(o.recent) || o.recent.some((v) => !v || typeof v.id != "string" || !cn(v.ms)))) throw new Error("Virheellisiä tuloksia");
  if (o.sessions !== void 0 && (!Array.isArray(o.sessions) || o.sessions.some((v) => !Eh(v)))) throw new Error("Virheellisiä kierroksia");
  const a = o.version < 3, d = Xl(o.settings ?? {}), h = a && o.settings?.hints !== "always" && o.settings?.hints !== "off";
  h && (d.hints = "off");
  const f = {
    version: td,
    settings: d,
    stats: Object.fromEntries(Object.entries(o.stats).map(([v, x]) => [v, { ...x, errors: x.errors ?? 0 }])),
    recent: (o.recent ?? []).slice(-500),
    sessions: (o.sessions ?? []).slice(-200)
  };
  return (h || o.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Oc = 2500, _h = 8e3, Ic = 0.3, zi = (l) => l.ema ?? l.correct / l.attempts, Ai = (l) => l.emaMs ?? l.totalMs / l.attempts;
function bo(l) {
  if (!l?.attempts) return null;
  const o = Math.max(0, Math.min(1, 1 - (Ai(l) - Oc) / (_h - Oc)));
  return zi(l) * 0.65 + o * 0.35;
}
function Ch(l) {
  return !l || l.attempts < 3 ? 3 : 0.25 + (1 - bo(l)) * 3;
}
class Dc {
  constructor(o) {
    this.storage = o;
    try {
      this.data = Ac(o?.getItem(zc) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Ho();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(zc, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(o) {
    this.data.settings = o, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(o) {
    if (this.data.recent.some((v) => v.id === o.id)) return;
    const a = nd(o), d = this.data.stats[a] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, h = Number(o.first), f = {
      attempts: d.attempts + 1,
      correct: d.correct + h,
      errors: d.errors + o.errors,
      totalMs: d.totalMs + o.ms,
      lastSeen: o.at,
      ema: d.attempts ? zi(d) + Ic * (h - zi(d)) : h,
      emaMs: d.attempts ? Ai(d) + Ic * (o.ms - Ai(d)) : o.ms
    };
    Object.defineProperty(this.data.stats, a, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, o].slice(-500), this.save();
  }
  session(o) {
    this.data.sessions = [...this.data.sessions.filter((a) => a.id !== o.id), o].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(o) {
    if (!o.trim()) throw new Error("Tyhjä tiedosto");
    const a = Ac(o);
    this.data = a, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Ho(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Nh = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Mh = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea" };
function rd({ min: l, max: o }) {
  return /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsxs("tr", { children: [
    /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Kieli" }),
    Array.from({ length: o - l + 1 }, (a, d) => {
      const h = l + d;
      return /* @__PURE__ */ c.jsxs("th", { scope: "col", className: h === 0 ? "open-fret" : "", children: [
        h,
        h > 0 && h % 12 === 0 ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Nh.has(h) ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, h);
    })
  ] }) });
}
function Th({ area: l, marks: o = [], disabled: a = !1, onAnswer: d, caption: h = "Otelauta" }) {
  const f = { "--cols": l.max - l.min + 1 }, { strings: v, min: x, max: N } = l, [I, k] = ve.useState({ string: Math.min(...v), fret: x }), T = ve.useRef(null), O = new Map(o.map((_) => [st(_), _])), Q = o.map((_) => `${st(_)}${_.kind}`).join(",");
  ve.useEffect(() => {
    const _ = T.current, E = _?.querySelector(".target, .anchor");
    _ && E && (_.scrollLeft += E.getBoundingClientRect().left - _.getBoundingClientRect().left - _.clientWidth / 2 + E.clientWidth / 2);
  }, [Q]);
  const H = v.includes(I.string) && I.fret >= x && I.fret <= N ? I : { string: Math.min(...v), fret: x };
  return /* @__PURE__ */ c.jsx("div", { ref: T, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ c.jsxs("table", { className: "practice-board", style: f, children: [
    /* @__PURE__ */ c.jsxs("caption", { children: [
      h,
      " · ohut E ylimpänä"
    ] }),
    /* @__PURE__ */ c.jsx(rd, { min: x, max: N }),
    /* @__PURE__ */ c.jsx("tbody", { children: rt.OPEN_PITCHES.map((_, E) => /* @__PURE__ */ c.jsxs("tr", { className: v.includes(E) ? "" : "unused", children: [
      /* @__PURE__ */ c.jsxs("th", { scope: "row", children: [
        E + 1,
        " · ",
        $n[E]
      ] }),
      Oi([E], x, N).map((B) => {
        const M = O.get(st(B)), Y = `${$n[E]}-kieli, ${Gr(B.fret)}`;
        return /* @__PURE__ */ c.jsx("td", { className: `${B.fret === 0 ? "open-fret " : ""}${M ? M.kind === "answer" ? "target" : M.kind : ""}`, children: /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            "data-string": E,
            "data-fret": B.fret,
            tabIndex: H.string === E && H.fret === B.fret ? 0 : -1,
            onFocus: () => k(B),
            onKeyDown: (b) => {
              if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(b.key)) return;
              b.preventDefault();
              const ge = [...v].sort((le, de) => le - de), oe = ge.indexOf(E), K = b.key === "ArrowUp" ? ge[Math.max(0, oe - 1)] : b.key === "ArrowDown" ? ge[Math.min(ge.length - 1, oe + 1)] : E, U = b.key === "Home" ? x : b.key === "End" ? N : Math.max(x, Math.min(N, B.fret + (b.key === "ArrowRight" ? 1 : b.key === "ArrowLeft" ? -1 : 0)));
              b.currentTarget.closest("table")?.querySelector(`button[data-string="${K}"][data-fret="${U}"]`)?.focus();
            },
            disabled: a || !v.includes(E),
            "aria-label": Y + (M ? `, ${Mh[M.kind]}${M.label ? " " + M.label : ""}` : ""),
            onClick: () => d?.(B),
            children: M ? /* @__PURE__ */ c.jsx("span", { className: "dot", children: M.label || "●" }) : null
          }
        ) }, B.fret);
      })
    ] }, E)) })
  ] }) });
}
function $h({ area: l, stats: o, input: a, check: d, flats: h }) {
  const { strings: f, min: v, max: x } = l, N = `${a}:${d}:solo:notes:`;
  return /* @__PURE__ */ c.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ c.jsxs("table", { className: "practice-board mastery", style: { "--cols": x - v + 1 }, children: [
    /* @__PURE__ */ c.jsx("caption", { children: "Osaamiskartta · ohut E ylimpänä" }),
    /* @__PURE__ */ c.jsx(rd, { min: v, max: x }),
    /* @__PURE__ */ c.jsx("tbody", { children: rt.OPEN_PITCHES.map((I, k) => /* @__PURE__ */ c.jsxs("tr", { className: f.includes(k) ? "" : "unused", children: [
      /* @__PURE__ */ c.jsxs("th", { scope: "row", children: [
        k + 1,
        " · ",
        $n[k]
      ] }),
      Oi([k], v, x).map((T) => {
        const O = Object.hasOwn(o, N + st(T)) ? o[N + st(T)] : void 0, Q = bo(O), H = Q === null ? "unseen" : O.attempts < 3 ? "few" : Q >= 0.8 ? "strong" : Q >= 0.5 ? "growing" : "weak", _ = `${$n[k]}-kieli, ${Gr(T.fret)}, ${Ye(T.midi, h)}`, E = O ? `${Math.round(Q * 100)} %, ${O.correct}/${O.attempts} heti oikein, viime aikoina ${Math.round(zi(O) * 100)} % ja ${(Ai(O) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ c.jsxs("td", { className: `${T.fret === 0 ? "open-fret " : ""}${H}`, title: `${_}: ${E}`, children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: Q === null ? "·" : O.attempts < 3 ? "?" : Math.round(Q * 100) }),
          /* @__PURE__ */ c.jsxs("span", { className: "sr-only", children: [
            _,
            ": ",
            E
          ] })
        ] }, T.fret);
      })
    ] }, k)) })
  ] }) });
}
const Rh = (l) => l.mode === "scale" || l.mode === "chord" || l.mode === "caged", Zl = (l) => l.mode === "scale" ? rt.scaleNotes(rt.SCALES[l.scale]) : yr[l.mode === "caged" ? "maj" : l.chord].tones, id = (l) => rt.fingeringBoxes(l.root, rt.SCALES[l.scale], "pentatonic", [l.box])[0].positions[0];
function kr(l) {
  if (l.mode === "caged") {
    const o = bc(l.root, l.shape).map((a) => a.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...o), max: Math.max(...o), fixed: "shape" };
  }
  if (l.mode === "scale" && l.box) {
    const o = id(l);
    return { strings: l.strings, min: o.start, max: o.end, fixed: "box" };
  }
  return { strings: l.strings, min: l.min, max: l.max, fixed: "" };
}
function Ph(l) {
  const o = kr(l);
  return o.fixed ? { ...o, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, o.min - 1), max: Math.min(24, o.max + 1) } : o;
}
function Ii(l) {
  const o = kr(l), a = Oi(o.strings, o.min, o.max);
  if (l.mode === "notes" || l.mode === "ear-note" || l.mode === "repeat")
    return a.filter((f) => l.accidentals || ![1, 3, 6, 8, 10].includes(Ge(f.midi)));
  if (l.mode === "caged") {
    const f = new Set(bc(l.root, l.shape).map(st));
    return a.filter((v) => f.has(st(v)));
  }
  if (l.mode === "interval") return a;
  const d = a.filter((f) => Zl(l).some(([v]) => Ge(f.midi - l.root) === v));
  if (l.mode !== "scale" || !l.box) return d;
  const h = id(l);
  return d.filter((f) => {
    const v = h.strings[f.string];
    return v.length > 0 && f.fret >= v[0] && f.fret <= v.at(-1);
  });
}
function ld(l, o) {
  return (l.direction === "both" ? ["up", "down"] : [l.direction]).flatMap((d) => l.intervals.map((h) => ({
    iv: h,
    direction: d,
    pairs: o.flatMap((f) => o.filter((v) => v.midi === f.midi + (d === "down" ? -h : h)).map((v) => ({ reference: f, target: v })))
  }))).filter((d) => d.pairs.length);
}
function Lh(l) {
  const o = Zl(l);
  return l.mode !== "chord" || l.chordTone === "random" ? [] : l.chordTone === "build" ? o : o.filter(([, a]) => a.endsWith(l.chordTone));
}
function Wo(l) {
  const o = Ii(l), a = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!o.length)
    return l.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${l.box ? "Valitse lisää kieliä tai toinen boksi." : a}` : l.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${a}` : l.mode !== "interval" && !l.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${a}`;
  const d = Lh(l).filter(([h]) => !o.some((f) => Ge(f.midi - l.root) === h));
  return d.length ? `Valitulta alueelta puuttuu soinnun ${d.map(([, h]) => h + ". aste").join(" ja ")}. ${a}` : l.mode === "interval" && !ld(l, o).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Tn(l) && new Set(o.map((h) => h.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${a}` : null;
}
function Fh(l, o) {
  const a = [...new Map([...o].sort((d, h) => d.midi - h.midi || d.string - h.string).map((d) => [d.midi, d])).values()];
  return l.order === "down" ? a.reverse() : a;
}
function sd(l) {
  return Tn(l) ? new Set(Ii(l).map((o) => o.midi)).size : l.rounds;
}
function zh(l, o) {
  return l.hints === "always" ? 2 : l.hints === "fade" ? o <= 3 ? 2 : o <= 6 ? 1 : 0 : 0;
}
function Wr(l, o, a = Math.random) {
  if (!l.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const d = o.reduce((v, x) => v + x, 0), h = Math.min(0.999999999, Math.max(0, a()));
  if (!(d > 0)) return l[Math.floor(h * l.length)];
  let f = h * d;
  for (let v = 0; v < l.length; v++)
    if (f -= o[v], f < 0) return l[v];
  return l.at(-1);
}
const Bc = (l, o) => l.mode === "caged" ? `caged:${l.root}:${l.shape}:${o}` : l.mode === "chord" ? `chord:${l.root}:${l.chord}:${o}:${l.activity}` : `scale:${l.root}:${l.scale}:${o}:${l.activity}`;
function vr(l, o) {
  const a = l.filter((d) => !o(d));
  return a.length ? a : l;
}
function Ah(l, o, a = {}, d, h = Math.random) {
  const f = Wo(l);
  if (f) throw new Error(f);
  const v = ed(l), x = gr(l), N = v === "pitch", I = (K) => l.weak ? Ch(a[nd({ input: x, check: v, hint: !1, item: K })]) : 1, k = (K) => Wr(K, K.map(() => 1), h), T = Ii(l), O = { check: v, sound: [], choices: "position" };
  if (l.mode === "notes") {
    const K = vr(T, (de) => !!d && st(de) === st(d.position)), U = Wr(K, K.map((de) => I(`notes:${st(de)}`)), h), le = Ye(U.midi, l.flats, N);
    return {
      ...O,
      position: U,
      midi: U.midi,
      name: le,
      item: `notes:${st(U)}`,
      prompt: `Etsi ${le} ${qo[U.string]}.`
    };
  }
  if (l.mode === "ear-note") {
    const K = (Ie) => `ear-note:${Ge(Ie.midi)}${l.reference ? ":ref" : ""}`, U = vr(T, (Ie) => !!d && Ge(Ie.midi) === Ge(d.midi)), le = Wr(U, U.map((Ie) => I(K(Ie))), h), de = l.reference ? 57 + 12 * Math.round((le.midi - 57) / 12) : void 0;
    return {
      ...O,
      position: le,
      midi: le.midi,
      name: Ye(le.midi, l.flats),
      item: K(le),
      choices: "note",
      reference: de,
      sound: de === void 0 ? [le.midi] : [de, le.midi],
      prompt: l.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (l.mode === "repeat") {
    const K = vr(T, (le) => !!d && le.midi === d.midi), U = Wr(K, K.map((le) => I(`repeat:${le.midi}`)), h);
    return {
      ...O,
      position: U,
      midi: U.midi,
      name: Ye(U.midi, l.flats, !0),
      item: `repeat:${U.midi}`,
      sound: [U.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (l.mode === "interval") {
    const K = vr(ld(l, T), (de) => d?.interval === de.iv && d?.direction === de.direction), U = Wr(K, K.map((de) => I(`interval:${de.iv}:${de.direction}`)), h), le = k(vr(U.pairs, (de) => d?.reference === de.reference.midi));
    return {
      ...O,
      position: le.target,
      midi: le.target.midi,
      name: Ye(le.target.midi, l.flats, !0),
      item: `interval:${U.iv}:${U.direction}`,
      interval: U.iv,
      direction: U.direction,
      reference: le.reference.midi,
      sound: [le.reference.midi, le.target.midi],
      prompt: `Kuulet ${U.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ye(le.reference.midi, l.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const Q = Zl(l);
  let H, _ = 0;
  if (Tn(l)) {
    const K = Fh(l, T);
    _ = K.length, H = K[o % K.length];
  } else {
    const K = Q.filter(([de]) => T.some((Ie) => Ge(Ie.midi - l.root) === de)), U = l.mode === "chord" && l.chordTone !== "random" ? l.chordTone === "build" ? [Q[o % Q.length]] : Q.filter(([, de]) => de.endsWith(l.chordTone)) : vr(K, ([de]) => d?.interval === de), [le] = Wr(U, U.map(([de]) => I(Bc(l, de))), h);
    H = k(vr(T.filter((de) => Ge(de.midi - l.root) === le), (de) => !!d && st(de) === st(d.position)));
  }
  const E = Ge(H.midi - l.root), B = Q.find(([K]) => K === E)[1], M = Li(l.root, E, B), Y = N ? M + kh(H.midi, M) : M, b = l.mode === "scale" ? `${tr(l.root)}-${rt.SCALES[l.scale].name}${l.box ? `, boksi ${l.box}` : ""}` : l.mode === "caged" ? `${tr(l.root)}-duurisointu, ${l.shape}-muoto` : qc(l.root, l.chord), ge = l.mode !== "caged" && l.activity === "degree", oe = ge ? `${b}: mikä aste on ${M}?` : _ ? `${b} ${l.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${o % _ + 1}/${_}: ${B}. aste (${Y}).` : `${b}: etsi ${B}. aste${N ? ` (${Y})` : ""}.`;
  return {
    ...O,
    position: H,
    midi: H.midi,
    name: Y,
    item: Bc(l, E),
    prompt: oe,
    degree: B,
    interval: E,
    choices: ge ? "degree" : "position"
  };
}
function Ko(l, o, a) {
  return Number.isInteger(o) && (a === "class" ? Ge(l) === Ge(o) : l === o);
}
function od(l, o, a) {
  return Ko(o.midi, a.midi, o.check) ? l.mode === "notes" ? a.string === o.position.string : Rh(l) ? Ii(l).some((d) => st(d) === st(a)) : !0 : !1;
}
function Oh(l, o) {
  const a = kr(l);
  return Oi(a.strings, a.min, a.max).filter((d) => od(l, o, d));
}
const xt = (l, o, a) => ({ ...l, label: o, kind: a }), Ih = (l) => l.charAt(0).toUpperCase() + l.slice(1);
function Dh(l, o, a) {
  if (a <= 0) return { marks: [], text: "" };
  const d = a >= 2, h = kr(l), f = Oi(h.strings, h.min, h.max), v = Oh(l, o);
  if (l.mode === "notes") {
    if (d) return { marks: v.map((B) => xt(B, o.name, "answer")), text: `${o.name} on ${Jc[o.position.string]}: ${Gr(o.position.fret)}.` };
    const _ = f.find((B) => B.string === o.position.string), E = Ye(_.midi, l.flats);
    return {
      marks: [xt(_, E, "anchor")],
      text: `Apupiste: ${xh[_.string]} ${_.fret === 0 ? "vapaa sävel" : _.fret + ". nauhan sävel"} on ${E}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (l.mode === "ear-note")
    return d ? { marks: [xt(o.position, o.name, "answer")], text: `Sävel on ${o.name}.` } : { marks: [xt(o.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${$n[o.position.string]}-kieli, ${Gr(o.position.fret)}.` };
  if (l.mode === "repeat")
    return d ? { marks: v.map((_) => xt(_, Ye(_.midi, l.flats, o.check === "pitch"), "answer")), text: `Sävel on ${o.name}.` } : { marks: [], text: `Sävel löytyy ${qo[o.position.string]}.` };
  if (l.mode === "interval") {
    const _ = Ye(o.reference, l.flats, !0), E = f.filter((B) => B.midi === o.reference).map((B) => xt(B, _, "anchor"));
    return d ? {
      marks: [...E, ...v.map((B) => xt(B, Ye(B.midi, l.flats, !0), "answer"))],
      text: `${Ih(Fi[o.interval])} ${o.direction === "up" ? "ylöspäin" : "alaspäin"}: ${_} → ${o.name}.`
    } : { marks: E, text: `Alkusävel ${_} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${o.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const x = Ii(l), N = Zl(l), I = (_) => N.find(([E]) => E === Ge(_.midi - l.root))?.[1] ?? "", k = Li(l.root, o.interval, o.degree), T = x.filter((_) => Ge(_.midi - l.root) === 0), O = (_) => v.some((E) => st(E) === st(_)), Q = `${o.degree}. aste on ${k}.`;
  if (l.mode === "caged")
    return d ? { marks: x.map((_) => xt(_, I(_), O(_) ? "answer" : "shape")), text: Q } : { marks: x.map((_) => xt(_, "", "shape")), text: `${l.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${o.degree}. aste?` };
  const H = l.mode === "scale" ? "asteikon" : "soinnun";
  if (o.choices === "degree") {
    const _ = x.filter((E) => Ge(E.midi) === Ge(o.midi));
    return d ? { marks: [...(o.interval === 0 ? [] : T).map((E) => xt(E, "1", "anchor")), ..._.map((E) => xt(E, o.degree, "answer"))], text: `${k} on ${o.degree}. aste.` } : o.interval === 0 ? { marks: _.map((E) => xt(E, k, "shape")), text: `Katso ${H} nimeä: mikä on sen perussävel?` } : {
      marks: [...T.map((E) => xt(E, "1", "anchor")), ..._.map((E) => xt(E, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return d ? { marks: [...T.filter((_) => !O(_)).map((_) => xt(_, "1", "anchor")), ...v.map((_) => xt(_, o.degree, "answer"))], text: Q } : o.interval === 0 ? { marks: [], text: `1. aste on ${H} perussävel ${tr(l.root)}.` } : { marks: T.map((_) => xt(_, "1", "anchor")), text: `Apupiste: perussävelet (1). ${o.degree}. aste on ${o.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Bh {
  constructor(o, a, d, h = () => performance.now(), f = Math.random) {
    this.settings = o, this.stats = a, this.record = d, this.now = h, this.random = f, this.total = sd(o);
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
      this.question = Ah(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = zh(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(o) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(o))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(o, a, d, h = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(a === "degree" ? o === f.interval : a === "note" ? Ko(f.midi, o, "class") : a === "board" ? !!d && od(this.settings, f, d) : Ko(f.midi, o, f.check)))
      return a === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const x = a === "board" ? d : void 0, N = {
      id: `${this.id}:${this.index}`,
      item: x && this.settings.mode === "notes" ? `notes:${st(x)}` : f.item,
      mode: this.settings.mode,
      input: a,
      check: f.check,
      expected: f.midi,
      played: o,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, h)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return x ? N.position = st(x) : this.settings.mode === "notes" && (N.position = st(f.position)), this.results.push(N), this.record(N), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Qo(l) {
  const o = l.filter((a) => !a.hint);
  return {
    count: l.length,
    first: l.filter((a) => a.first).length,
    solo: o.length,
    soloFirst: o.filter((a) => a.first).length,
    guided: l.length - o.length,
    ms: l.reduce((a, d) => a + d.ms, 0)
  };
}
const Go = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], Qr = (l) => Go.find(([o]) => o === l)?.[1] ?? l;
function Rt({ label: l, children: o }) {
  const a = ve.useId();
  return /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ c.jsx("label", { htmlFor: a, children: l }),
    ve.cloneElement(o, { id: a })
  ] });
}
function Vc({ legend: l, name: o, value: a, options: d, onChange: h, disabled: f }) {
  return /* @__PURE__ */ c.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ c.jsx("legend", { children: l }),
    /* @__PURE__ */ c.jsx("div", { className: "choice-row", children: d.map((v) => /* @__PURE__ */ c.jsxs("label", { className: v.value === a ? "selected" : "", children: [
      /* @__PURE__ */ c.jsx("input", { type: "radio", name: o, value: v.value, checked: v.value === a, onChange: () => h(v.value) }),
      /* @__PURE__ */ c.jsxs("span", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: v.title }),
        /* @__PURE__ */ c.jsx("small", { children: v.summary })
      ] })
    ] }, v.value)) })
  ] });
}
function Uc(l) {
  const o = kr(l), a = sd(l), d = gr(l), h = d === "mic" ? "soita kitaralla" : d === "board" ? "vastaa otelaudalta" : d === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = o.fixed === "shape" ? `${l.shape}-muoto, nauhat ${o.min}–${o.max}` : o.fixed === "box" ? `boksi ${l.box}, nauhat ${o.min}–${o.max}` : `nauhat ${o.min}–${o.max}`, v = o.strings.length === 6 ? "" : ` · kielet ${o.strings.map((x) => x + 1).join(", ")}`;
  return `${Jl[l.hints].title} · ${h} · ${Tn(l) ? `yksi läpisoitto, ${a} säveltä` : a ? `${a} kysymystä` : "vapaa harjoittelu"} · ${f}${v}`;
}
function Vh({ s: l, change: o, locked: a, problem: d }) {
  const h = ve.useId(), f = (k, T) => o({ ...l, [k]: T }), v = kr(l), x = gr(l) === "note" || gr(l) === "degree", N = ["scale", "chord", "caged"].includes(l.mode), I = ["notes", "ear-note", "repeat"].includes(l.mode);
  return /* @__PURE__ */ c.jsxs("fieldset", { className: "settings", disabled: a, children: [
    /* @__PURE__ */ c.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ c.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ c.jsx(Rt, { label: "Harjoitus", children: /* @__PURE__ */ c.jsx("select", { value: l.mode, onChange: (k) => f("mode", k.target.value), children: Go.map(([k, T]) => /* @__PURE__ */ c.jsx("option", { value: k, children: T }, k)) }) }),
      /* @__PURE__ */ c.jsx("p", { className: "mode-note", children: Go.find(([k]) => k === l.mode)[2] })
    ] }),
    N && /* @__PURE__ */ c.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ c.jsx(Rt, { label: l.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ c.jsx("select", { value: l.root, onChange: (k) => f("root", Number(k.target.value)), children: rt.CHROM.map((k, T) => /* @__PURE__ */ c.jsx("option", { value: T, children: k }, k)) }) }),
      l.mode === "scale" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Rt, { label: "Asteikko", children: /* @__PURE__ */ c.jsx("select", { value: l.scale, onChange: (k) => f("scale", k.target.value), children: Object.entries(rt.SCALES).map(([k, T]) => /* @__PURE__ */ c.jsx("option", { value: k, children: T.name }, k)) }) }),
        /* @__PURE__ */ c.jsx(Rt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ c.jsxs("select", { value: l.box, onChange: (k) => f("box", Number(k.target.value)), children: [
          /* @__PURE__ */ c.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ c.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ c.jsx(Rt, { label: "Sävelten järjestys", children: /* @__PURE__ */ c.jsxs("select", { value: l.order, onChange: (k) => f("order", k.target.value), children: [
          /* @__PURE__ */ c.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ c.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ c.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      l.mode === "chord" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Rt, { label: "Sointutyyppi", children: /* @__PURE__ */ c.jsx("select", { value: l.chord, onChange: (k) => f("chord", k.target.value), children: Object.entries(yr).map(([k, T]) => /* @__PURE__ */ c.jsx("option", { value: k, children: T.name }, k)) }) }),
        /* @__PURE__ */ c.jsx(Rt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ c.jsxs("select", { value: l.chordTone, onChange: (k) => f("chordTone", k.target.value), children: [
          /* @__PURE__ */ c.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            l.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ c.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ c.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ c.jsxs("option", { value: "3", children: [
            "Terssi · ",
            l.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ c.jsx("option", { value: "5", children: "Kvintti · 5" }),
          l.chord === "dom7" && /* @__PURE__ */ c.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      l.mode === "caged" ? /* @__PURE__ */ c.jsx(Rt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ c.jsx("select", { value: l.shape, onChange: (k) => f("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ c.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ c.jsx(Rt, { label: "Tehtävä", children: /* @__PURE__ */ c.jsxs("select", { value: l.activity, onChange: (k) => f("activity", k.target.value), children: [
        /* @__PURE__ */ c.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ c.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    l.mode === "interval" && /* @__PURE__ */ c.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ c.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ c.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ c.jsxs("label", { children: [
        /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.intervals.includes(k), onChange: (T) => f("intervals", T.target.checked ? [...l.intervals, k] : l.intervals.filter((O) => O !== k)) }),
        Fi[k]
      ] }, k)) }),
      /* @__PURE__ */ c.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ c.jsx(Rt, { label: "Intervallin suunta", children: /* @__PURE__ */ c.jsxs("select", { value: l.direction, onChange: (k) => f("direction", k.target.value), children: [
        /* @__PURE__ */ c.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ c.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ c.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      Vc,
      {
        legend: "Harjoittelutapa",
        name: `${h}-way`,
        value: l.hints,
        onChange: (k) => f("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...Jl[k] }))
      }
    ),
    x ? /* @__PURE__ */ c.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ c.jsx(Vc, { legend: "Vastaustapa", name: `${h}-input`, value: l.input, onChange: (k) => f("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ c.jsxs("details", { children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ c.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ c.jsx(Rt, { label: "Kierroksen pituus", children: /* @__PURE__ */ c.jsxs("select", { value: l.rounds, disabled: Tn(l), onChange: (k) => f("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ c.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ c.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ c.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !x && /* @__PURE__ */ c.jsx(Rt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ c.jsxs("select", { value: Tn(l) ? "pitch" : l.check, disabled: Tn(l), onChange: (k) => f("check", k.target.value), children: [
          /* @__PURE__ */ c.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ c.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ c.jsx(Rt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ c.jsxs("select", { value: String(l.flats), onChange: (k) => f("flats", k.target.value === "true"), children: [
          /* @__PURE__ */ c.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ c.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Tn(l) && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      v.fixed ? /* @__PURE__ */ c.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        v.fixed === "shape" ? `${l.shape}-muoto` : `Boksi ${l.box}`,
        " määrää harjoitusalueen: nauhat ",
        v.min,
        "–",
        v.max,
        "."
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-pressed": l.min === 0 && l.max === k, onClick: () => o({ ...l, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ c.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ c.jsx(Rt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ c.jsx("input", { type: "number", min: "0", max: "24", value: l.min, onChange: (k) => f("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ c.jsx(Rt, { label: "Viimeinen nauha", children: /* @__PURE__ */ c.jsx("input", { type: "number", min: l.min, max: "24", value: l.max, onChange: (k) => f("max", Number(k.target.value)) }) })
        ] })
      ] }),
      v.fixed !== "shape" && /* @__PURE__ */ c.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ c.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ c.jsx("div", { className: "check-row", children: $n.map((k, T) => /* @__PURE__ */ c.jsxs("label", { children: [
          /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.strings.includes(T), onChange: (O) => f("strings", O.target.checked ? [...l.strings, T] : l.strings.filter((Q) => Q !== T)) }),
          T + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "check-row", children: [
        I && /* @__PURE__ */ c.jsxs("label", { children: [
          /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.accidentals, onChange: (k) => f("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        l.mode === "ear-note" && /* @__PURE__ */ c.jsxs("label", { children: [
          /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.reference, onChange: (k) => f("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ c.jsxs("label", { children: [
          /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.weak, onChange: (k) => f("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ c.jsxs("label", { children: [
          /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: l.advance, onChange: (k) => f("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ c.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: d })
  ] });
}
const Uh = 4e3;
class Hc extends Error {
  name = "MicSetupError";
}
async function Hh(l, o) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Hc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const a = {
    audio: {
      deviceId: l ? { exact: l } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, d = await navigator.mediaDevices.getUserMedia(a);
  let h;
  try {
    if (h = o ? o() : new AudioContext(), h.state !== "running") {
      let I;
      await Promise.race([
        h.resume(),
        new Promise((k, T) => {
          I = setTimeout(() => T(new Hc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Uh);
        })
      ]).finally(() => clearTimeout(I));
    }
    const f = h.createMediaStreamSource(d), v = h, x = d.getAudioTracks?.()[0] ?? d.getTracks()[0], N = x?.getSettings?.() ?? {};
    return {
      context: h,
      source: f,
      stream: d,
      label: x?.label ?? "",
      deviceId: N.deviceId ?? "",
      channelCount: N.channelCount ?? 1,
      stop: () => {
        d.getTracks().forEach((I) => I.stop()), f.disconnect(), o || v.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw d.getTracks().forEach((v) => v.stop()), o || await h?.close().catch(() => {
    }), f;
  }
}
async function Wh() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((o) => o.kind === "audioinput" && o.deviceId) : [];
}
var Uo, Wc;
function Kh() {
  if (Wc) return Uo;
  Wc = 1;
  function l(o) {
    if (this.size = o | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = o << 1;
    for (var a = new Array(this.size * 2), d = 0; d < a.length; d += 2) {
      const I = Math.PI * d / this.size;
      a[d] = Math.cos(I), a[d + 1] = -Math.sin(I);
    }
    this.table = a;
    for (var h = 0, f = 1; this.size > f; f <<= 1)
      h++;
    this._width = h % 2 === 0 ? h - 1 : h, this._bitrev = new Array(1 << this._width);
    for (var v = 0; v < this._bitrev.length; v++) {
      this._bitrev[v] = 0;
      for (var x = 0; x < this._width; x += 2) {
        var N = this._width - x - 2;
        this._bitrev[v] |= (v >>> x & 3) << N;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return Uo = l, l.prototype.fromComplexArray = function(a, d) {
    for (var h = d || new Array(a.length >>> 1), f = 0; f < a.length; f += 2)
      h[f >>> 1] = a[f];
    return h;
  }, l.prototype.createComplexArray = function() {
    const a = new Array(this._csize);
    for (var d = 0; d < a.length; d++)
      a[d] = 0;
    return a;
  }, l.prototype.toComplexArray = function(a, d) {
    for (var h = d || this.createComplexArray(), f = 0; f < h.length; f += 2)
      h[f] = a[f >>> 1], h[f + 1] = 0;
    return h;
  }, l.prototype.completeSpectrum = function(a) {
    for (var d = this._csize, h = d >>> 1, f = 2; f < h; f += 2)
      a[d - f] = a[f], a[d - f + 1] = -a[f + 1];
  }, l.prototype.transform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, l.prototype.realTransform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, l.prototype.inverseTransform = function(a, d) {
    if (a === d)
      throw new Error("Input and output buffers must be different");
    this._out = a, this._data = d, this._inv = 1, this._transform4();
    for (var h = 0; h < a.length; h++)
      a[h] /= this.size;
    this._out = null, this._data = null;
  }, l.prototype._transform4 = function() {
    var a = this._out, d = this._csize, h = this._width, f = 1 << h, v = d / f << 1, x, N, I = this._bitrev;
    if (v === 4)
      for (x = 0, N = 0; x < d; x += v, N++) {
        const E = I[N];
        this._singleTransform2(x, E, f);
      }
    else
      for (x = 0, N = 0; x < d; x += v, N++) {
        const E = I[N];
        this._singleTransform4(x, E, f);
      }
    var k = this._inv ? -1 : 1, T = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      v = d / f << 1;
      var O = v >>> 2;
      for (x = 0; x < d; x += v)
        for (var Q = x + O, H = x, _ = 0; H < Q; H += 2, _ += f) {
          const E = H, B = E + O, M = B + O, Y = M + O, b = a[E], ge = a[E + 1], oe = a[B], K = a[B + 1], U = a[M], le = a[M + 1], de = a[Y], Ie = a[Y + 1], He = b, Re = ge, Le = T[_], De = k * T[_ + 1], We = oe * Le - K * De, we = oe * De + K * Le, D = T[2 * _], X = k * T[2 * _ + 1], W = U * D - le * X, g = U * X + le * D, $ = T[3 * _], ae = k * T[3 * _ + 1], pe = de * $ - Ie * ae, ke = de * ae + Ie * $, ye = He + W, z = Re + g, V = He - W, F = Re - g, ee = We + pe, he = we + ke, re = k * (We - pe), ie = k * (we - ke), se = ye + ee, Se = z + he, xe = ye - ee, Ce = z - he, Ae = V + ie, Te = F - re, Be = V - ie, Ve = F + re;
          a[E] = se, a[E + 1] = Se, a[B] = Ae, a[B + 1] = Te, a[M] = xe, a[M + 1] = Ce, a[Y] = Be, a[Y + 1] = Ve;
        }
    }
  }, l.prototype._singleTransform2 = function(a, d, h) {
    const f = this._out, v = this._data, x = v[d], N = v[d + 1], I = v[d + h], k = v[d + h + 1], T = x + I, O = N + k, Q = x - I, H = N - k;
    f[a] = T, f[a + 1] = O, f[a + 2] = Q, f[a + 3] = H;
  }, l.prototype._singleTransform4 = function(a, d, h) {
    const f = this._out, v = this._data, x = this._inv ? -1 : 1, N = h * 2, I = h * 3, k = v[d], T = v[d + 1], O = v[d + h], Q = v[d + h + 1], H = v[d + N], _ = v[d + N + 1], E = v[d + I], B = v[d + I + 1], M = k + H, Y = T + _, b = k - H, ge = T - _, oe = O + E, K = Q + B, U = x * (O - E), le = x * (Q - B), de = M + oe, Ie = Y + K, He = b + le, Re = ge - U, Le = M - oe, De = Y - K, We = b - le, we = ge + U;
    f[a] = de, f[a + 1] = Ie, f[a + 2] = He, f[a + 3] = Re, f[a + 4] = Le, f[a + 5] = De, f[a + 6] = We, f[a + 7] = we;
  }, l.prototype._realTransform4 = function() {
    var a = this._out, d = this._csize, h = this._width, f = 1 << h, v = d / f << 1, x, N, I = this._bitrev;
    if (v === 4)
      for (x = 0, N = 0; x < d; x += v, N++) {
        const Xe = I[N];
        this._singleRealTransform2(x, Xe >>> 1, f >>> 1);
      }
    else
      for (x = 0, N = 0; x < d; x += v, N++) {
        const Xe = I[N];
        this._singleRealTransform4(x, Xe >>> 1, f >>> 1);
      }
    var k = this._inv ? -1 : 1, T = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      v = d / f << 1;
      var O = v >>> 1, Q = O >>> 1, H = Q >>> 1;
      for (x = 0; x < d; x += v)
        for (var _ = 0, E = 0; _ <= H; _ += 2, E += f) {
          var B = x + _, M = B + Q, Y = M + Q, b = Y + Q, ge = a[B], oe = a[B + 1], K = a[M], U = a[M + 1], le = a[Y], de = a[Y + 1], Ie = a[b], He = a[b + 1], Re = ge, Le = oe, De = T[E], We = k * T[E + 1], we = K * De - U * We, D = K * We + U * De, X = T[2 * E], W = k * T[2 * E + 1], g = le * X - de * W, $ = le * W + de * X, ae = T[3 * E], pe = k * T[3 * E + 1], ke = Ie * ae - He * pe, ye = Ie * pe + He * ae, z = Re + g, V = Le + $, F = Re - g, ee = Le - $, he = we + ke, re = D + ye, ie = k * (we - ke), se = k * (D - ye), Se = z + he, xe = V + re, Ce = F + se, Ae = ee - ie;
          if (a[B] = Se, a[B + 1] = xe, a[M] = Ce, a[M + 1] = Ae, _ === 0) {
            var Te = z - he, Be = V - re;
            a[Y] = Te, a[Y + 1] = Be;
            continue;
          }
          if (_ !== H) {
            var Ve = F, Nt = -ee, be = z, Fe = -V, ot = -k * se, Mt = -k * ie, bt = -k * re, ct = -k * he, xn = Ve + ot, fe = Nt + Mt, Pt = be + ct, je = Fe - bt, Ne = x + Q - _, Ee = x + O - _;
            a[Ne] = xn, a[Ne + 1] = fe, a[Ee] = Pt, a[Ee + 1] = je;
          }
        }
    }
  }, l.prototype._singleRealTransform2 = function(a, d, h) {
    const f = this._out, v = this._data, x = v[d], N = v[d + h], I = x + N, k = x - N;
    f[a] = I, f[a + 1] = 0, f[a + 2] = k, f[a + 3] = 0;
  }, l.prototype._singleRealTransform4 = function(a, d, h) {
    const f = this._out, v = this._data, x = this._inv ? -1 : 1, N = h * 2, I = h * 3, k = v[d], T = v[d + h], O = v[d + N], Q = v[d + I], H = k + O, _ = k - O, E = T + Q, B = x * (T - Q), M = H + E, Y = _, b = -B, ge = H - E, oe = _, K = B;
    f[a] = M, f[a + 1] = 0, f[a + 2] = Y, f[a + 3] = b, f[a + 4] = ge, f[a + 5] = 0, f[a + 6] = oe, f[a + 7] = K;
  }, Uo;
}
var Qh = Kh();
const Gh = /* @__PURE__ */ rh(Qh);
class Ri {
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
  static forFloat32Array(o) {
    return new Ri(
      o,
      (a) => new Float32Array(a)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(o) {
    return new Ri(
      o,
      (a) => new Float64Array(a)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(o) {
    return new Ri(o, (a) => Array(a));
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
  constructor(o, a) {
    if (o < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = o, this._fft = new Gh(Jh(2 * o)), this._bufferSupplier = a, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(o, a = this._bufferSupplier(o.length)) {
    if (o.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${o.length}`
      );
    for (let h = 0; h < o.length; h++)
      this._paddedInputBuffer[h] = o[h];
    for (let h = o.length; h < this._paddedInputBuffer.length; h++)
      this._paddedInputBuffer[h] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const d = this._transformBuffer;
    for (let h = 0; h < d.length; h += 2)
      d[h] = d[h] * d[h] + d[h + 1] * d[h + 1], d[h + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let h = 0; h < o.length; h++)
      a[h] = this._inverseBuffer[2 * h];
    return a;
  }
}
function Yh(l) {
  const o = [];
  let a = !1, d = -1 / 0, h = -1;
  for (let f = 1; f < l.length - 1; f++)
    l[f - 1] <= 0 && l[f] > 0 ? (a = !0, h = f, d = l[f]) : l[f - 1] > 0 && l[f] <= 0 ? (a = !1, h !== -1 && o.push(h)) : a && l[f] > d && (d = l[f], h = f);
  return o;
}
function Xh(l, o) {
  const [a, d, h] = [l - 1, l, l + 1], [f, v, x] = [o[a], o[d], o[h]], N = f / 2 - v + x / 2, I = -(f / 2) * (d + h) + v * (a + h) - x / 2 * (a + d), k = f * d * h / 2 - v * a * h + x * a * d / 2, T = -I / (2 * N), O = N * T * T + I * T + k;
  return [T, O];
}
class Pi {
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
  static forFloat32Array(o) {
    return new Pi(o, (a) => new Float32Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(o) {
    return new Pi(o, (a) => new Float64Array(a));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(o) {
    return new Pi(o, (a) => Array(a));
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
  constructor(o, a) {
    this._autocorrelator = new Ri(o, a), this._nsdfBuffer = a(o);
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
  set clarityThreshold(o) {
    if (!Number.isFinite(o) || o <= 0 || o > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = o;
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
  set minVolumeAbsolute(o) {
    if (!Number.isFinite(o) || o < 0 || o > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = o;
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
  set minVolumeDecibels(o) {
    if (!Number.isFinite(o) || o > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (o / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(o) {
    if (!Number.isFinite(o) || o <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = o;
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
  findPitch(o, a) {
    if (this._belowMinimumVolume(o)) return [0, 0];
    this._nsdf(o);
    const d = Yh(this._nsdfBuffer);
    if (d.length === 0)
      return [0, 0];
    const h = Math.max(...d.map((N) => this._nsdfBuffer[N])), f = d.find(
      (N) => this._nsdfBuffer[N] >= this._clarityThreshold * h
    ), [v, x] = Xh(
      // @ts-expect-error resultIndex is guaranteed to be defined
      f,
      this._nsdfBuffer
    );
    return [a / v, Math.min(x, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(o) {
    if (this._minVolumeAbsolute === 0) return !1;
    let a = 0;
    for (let d = 0; d < o.length; d++)
      a += o[d] ** 2;
    return Math.sqrt(a / o.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(o) {
    this._autocorrelator.autocorrelate(o, this._nsdfBuffer);
    let a = 2 * this._nsdfBuffer[0], d;
    for (d = 0; d < this._nsdfBuffer.length && a > 0; d++)
      this._nsdfBuffer[d] = 2 * this._nsdfBuffer[d] / a, a -= o[d] ** 2 + o[o.length - d - 1] ** 2;
    for (; d < this._nsdfBuffer.length; d++)
      this._nsdfBuffer[d] = 0;
  }
}
function Jh(l) {
  return l--, l |= l >> 1, l |= l >> 2, l |= l >> 4, l |= l >> 8, l |= l >> 16, l++, l;
}
function Zh(l) {
  const o = l * 0.17;
  let a = 2048;
  for (; a < o && a < 32768; ) a *= 2;
  return a;
}
const qh = 0.05, bh = 1.5;
class ep {
  constructor(o, a = {}) {
    this.mic = o, this.opts = a;
    const d = o.context, h = Zh(d.sampleRate), f = Math.max(1, Math.min(2, o.channelCount ?? 1));
    f > 1 && typeof d.createChannelSplitter == "function" && (this.splitter = d.createChannelSplitter(f), o.source.connect(this.splitter));
    for (let v = 0; v < (this.splitter ? f : 1); v++) {
      const x = d.createAnalyser();
      x.fftSize = h, x.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(x, v) : o.source.connect(x), this.analysers.push(x), this.buffers.push(new Float32Array(new ArrayBuffer(h * 4)));
    }
    this.shortLength = Math.min(h, Math.max(256, Math.round(d.sampleRate * qh))), this.detector = Pi.forFloat32Array(h), this.detector.minVolumeDecibels = -60;
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
  gate = new tp();
  onset = new np();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(o) {
    Object.assign(this.opts, o);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const o = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(o));
    };
    this.rafId = requestAnimationFrame(o);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const o of this.analysers) o.disconnect();
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
  processFrame(o) {
    const {
      minClarity: a = 0.9,
      minRms: d = 0.01,
      stabilityMs: h = 240,
      centsTolerance: f = 35,
      minFreq: v = 70,
      maxFreq: x = 1450,
      onFrame: N,
      onStableNote: I
    } = this.opts, k = this.analysers.map((K, U) => (K.getFloatTimeDomainData(this.buffers[U]), Kc(this.buffers[U], this.buffers[U].length - this.shortLength))), T = k.indexOf(Math.max(...k));
    T !== this.channel && k[T] > (k[this.channel] ?? 0) * bh && (this.channel = T);
    const O = this.buffers[this.channel], Q = k[this.channel], H = rp(O, O.length - this.shortLength), _ = { rms: Q, peak: H, channel: this.channel, levels: k }, E = Q < d, B = this.onset.feed(Q, o, d);
    if (E && Kc(O, 0) < d) {
      this.gate.feed(null, o, h, !0, !1), N?.({ ..._, status: "silent" });
      return;
    }
    const [M, Y] = this.detector.findPitch(O, this.mic.context.sampleRate);
    if (!isFinite(M) || Y < a) {
      this.gate.feed(null, o, h, E, B), N?.({ ..._, status: E ? "silent" : "unclear", clarity: isFinite(Y) ? Y : 0 });
      return;
    }
    if (M < v || M > x) {
      this.gate.feed(null, o, h, E, B), N?.({ ..._, status: "out-of-range", frequency: M, clarity: Y });
      return;
    }
    const { midi: b, cents: ge } = vh(M);
    if (Math.abs(ge) > f) {
      this.gate.feed(null, o, h, E, B), N?.({ ..._, status: "off-pitch", frequency: M, clarity: Y, midi: b, cents: ge });
      return;
    }
    N?.({ ..._, status: "pitch", frequency: M, clarity: Y, midi: b, cents: ge });
    const oe = this.gate.feed(b, o, h, E, B);
    oe !== null && I?.({ midi: b, frequency: M, cents: ge, clarity: Y, timestamp: o, heldMs: oe.heldMs });
  }
}
class tp {
  constructor(o = 120, a = 80) {
    this.releaseMs = o, this.gapMs = a;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(o, a, d, h, f) {
    if (h ? (this.quietSince ??= a, a - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), o === null)
      return this.current && a - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== o) && (this.current = { midi: o, since: a, seen: a }), this.current.seen = a;
    const v = a - this.current.since;
    return v < d ? null : (this.armed = !1, this.current = null, { midi: o, heldMs: v });
  }
}
class np {
  constructor(o = 2, a = 300, d = 150) {
    this.ratio = o, this.windowMs = a, this.refractoryMs = d;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(o, a, d) {
    if (a - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: a, rms: o }], !1;
    for (; this.history.length && a - this.history[0].time > this.windowMs; ) this.history.shift();
    const h = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : o;
    return this.history.push({ time: a, rms: o }), o < d * 1.5 || o < h * this.ratio ? !1 : (this.lastOnset = a, this.history = [{ time: a, rms: o }], !0);
  }
}
function Kc(l, o = 0) {
  const a = Math.max(0, o);
  let d = 0;
  for (let h = a; h < l.length; h++) d += l[h] * l[h];
  return Math.sqrt(d / Math.max(1, l.length - a));
}
function rp(l, o = 0) {
  let a = 0;
  for (let d = Math.max(0, o); d < l.length; d++) {
    const h = Math.abs(l[d]);
    h > a && (a = h);
  }
  return a;
}
const Yr = (l) => l > 0 ? Math.max(-90, 20 * Math.log10(l)) : -90;
let Kr;
function ad() {
  return (!Kr || Kr.state === "closed") && (Kr = new AudioContext()), Kr;
}
function ip() {
  const l = Kr;
  Kr = void 0, l?.close().catch(() => {
  });
}
const ud = (l) => l instanceof Error ? l.name : "";
function lp(l) {
  const o = ud(l);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(o) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : o === "NotFoundError" || o === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : o === "NotReadableError" || o === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : o === "MicSetupError" ? l.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class sp {
  constructor(o = (a) => Hh(a, ad)) {
    this.opener = o;
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
  async start(o, a, d) {
    this.stop();
    const h = this.generation;
    let f, v = !1;
    try {
      f = await this.opener(o || void 0);
    } catch (x) {
      if (!o || h !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(ud(x))) throw x;
      f = await this.opener(void 0), v = !0;
    }
    if (h !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new ep(f, { ...a });
      const x = () => {
        this.mic === f && (this.stop(), d());
      }, N = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((I) => I.addEventListener("ended", x, { once: !0, signal: N.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && x();
      }, { signal: N.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: v };
    } catch (x) {
      throw this.stop(), x;
    }
  }
  setOptions(o) {
    this.loop?.setOptions(o);
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
function cd(l, o) {
  return l !== "on" ? l : !o || o.status === "silent" ? "silent" : o.status === "pitch" ? "pitch" : o.status === "off-pitch" ? "untuned" : "noise";
}
const Qc = (l) => Math.max(0, Math.min(1, (Yr(l) + 60) / 60));
function op(l) {
  const o = [...l].sort((d, h) => d - h), a = o[Math.min(o.length - 1, Math.floor(o.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, a * 3)), noise: a, loud: a > 0.04 };
}
class ap {
  constructor(o = ad) {
    this.provide = o;
  }
  provide;
  master;
  token = 0;
  timer;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(o) {
    this.stop();
    const a = this.token, d = this.provide();
    if (d.state !== "running" && await d.resume(), a !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const f = Array.from({ length: 12 }, (N, I) => 1 / (I + 1) ** 1.3), v = d.createPeriodicWave?.(new Float32Array([0, ...f.map(() => 0)]), new Float32Array([0, ...f]));
    return o.forEach((N, I) => {
      const k = d.createOscillator(), T = d.createGain(), O = d.currentTime + 0.05 + I * 0.8;
      v ? k.setPeriodicWave(v) : k.type = "triangle", k.frequency.value = ph(N), T.gain.setValueAtTime(0, O), T.gain.linearRampToValueAtTime(0.22, O + 0.012), T.gain.exponentialRampToValueAtTime(1e-3, O + 0.7), k.connect(T), T.connect(h), k.start(O), k.stop(O + 0.72);
    }), !await new Promise((N) => {
      this.settle = N, this.timer = setTimeout(() => N(!0), o.length * 800 + 350);
    }) || a !== this.token ? !1 : (this.settle = void 0, h.disconnect(), this.master = void 0, !0);
  }
}
const Yo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Yl = (l, o = 1) => l.toFixed(o).replace(".", ",").replace("-", "−"), dd = (l) => {
  const o = Math.round(l);
  return (o > 0 ? "+" : o < 0 ? "−" : "±") + Math.abs(o);
}, Xo = (l) => l ? l.label || "Järjestelmän oletustulo" : "";
function up(l, o, a, d) {
  if (d) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (l) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Xo(a)}. Vaihda laite Mikrofonin asetuksista.`,
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
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${o.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${o.stability} ms.`];
    default:
      return [];
  }
}
function fd({ frame: l, threshold: o }) {
  const a = l?.rms ?? 0, d = Yr(a), h = (l?.peak ?? 0) >= 0.98 ? "clip" : a >= o ? "over" : "under";
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: `meter ${h}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, d)),
      "aria-valuetext": `${Yl(Math.max(-60, d), 0)} desibeliä${a >= o ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "meter-fill", style: { width: `${Qc(a) * 100}%` } }),
        /* @__PURE__ */ c.jsx("div", { className: "meter-threshold", style: { left: `${Qc(o) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function cp({ mic: l, frame: o, heard: a, s: d, now: h }) {
  const f = cd(l.phase, o), v = a && h - a.at < 1500 ? a : null, x = f === "pitch" || f === "untuned" || v ? v ? `Kuulen: ${Ye(v.midi, d.flats, !0)} · ${dd(v.cents)} senttiä${v.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Yo[f];
  return /* @__PURE__ */ c.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ c.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ c.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: x }),
    l.phase === "on" && /* @__PURE__ */ c.jsx(fd, { frame: o, threshold: d.minRms })
  ] });
}
function dp({ mic: l, frame: o, heard: a, accepted: d, now: h, s: f, change: v, devices: x, locked: N, calibrating: I, calibration: k, onTest: T, onStop: O, onCalibrate: Q }) {
  const H = ve.useId(), _ = cd(l.phase, o), E = l.purpose === "test" && l.phase !== "off" && l.phase !== "error", B = l.phase === "on", M = a && h - a.at < 1500 ? a : null, Y = M && (_ === "pitch" || _ === "untuned"), b = B && (o?.peak ?? 0) >= 0.98, ge = l.phase === "error" ? [] : up(_, f, l.info, b), oe = !f.device || x.some((U) => U.deviceId === f.device), K = (U, le) => v({ ...f, [U]: le });
  return /* @__PURE__ */ c.jsxs("section", { className: "mic-panel", "aria-labelledby": `${H}-title`, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ c.jsx("h2", { id: `${H}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ c.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: `mic-state ${_}`, "data-testid": "mic-state", "data-reading": _, children: [
      /* @__PURE__ */ c.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      l.phase === "error" ? l.error : Yo[_],
      _ === "pitch" && M ? ` ${Ye(M.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ c.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: l.phase === "on" ? `Mikrofoni kuuntelee: ${Xo(l.info)}.` : l.phase === "error" ? l.error : Yo[l.phase] }),
    l.phase === "off" && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    B && /* @__PURE__ */ c.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ c.jsxs("dd", { "data-testid": "mic-device", children: [
          Xo(l.info),
          l.info && l.info.channels > 1 ? ` · kanava ${(o?.channel ?? 0) + 1}/${l.info.channels}` : "",
          l.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          /* @__PURE__ */ c.jsx(fd, { frame: o, threshold: f.minRms }),
          /* @__PURE__ */ c.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Yl(Math.max(-60, Yr(o?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: Y ? "" : "stale", children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ c.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: M ? Ye(M.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: Y ? "" : "stale", children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ c.jsx("dd", { "data-testid": "mic-frequency", children: M ? `${Yl(M.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: Y ? "" : "stale", children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ c.jsx("dd", { "data-testid": "mic-cents", children: M ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          dd(M.cents),
          " senttiä",
          /* @__PURE__ */ c.jsx("span", { className: `cents ${M.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ c.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, M.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: Y ? "" : "stale", children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ c.jsx("dd", { "data-testid": "mic-clarity", children: M ? `${Math.round(M.clarity * 100)} %` : o?.clarity !== void 0 && _ === "noise" ? `${Math.round(o.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    B && d && h - d.timestamp < 4e3 && /* @__PURE__ */ c.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ye(d.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    ge.length > 0 && B && /* @__PURE__ */ c.jsx("ul", { className: "mic-advice", children: ge.map((U) => /* @__PURE__ */ c.jsx("li", { children: U }, U)) }),
    l.phase === "error" && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ c.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ c.jsxs("div", { className: "action-row", children: [
      E ? /* @__PURE__ */ c.jsx("button", { type: "button", onClick: O, children: "Lopeta testi" }) : /* @__PURE__ */ c.jsx("button", { type: "button", className: f.input === "mic" && l.phase !== "on" ? "primary" : "", disabled: N, onClick: T, children: "Testaa mikrofoni" }),
      E && B && /* @__PURE__ */ c.jsx("button", { type: "button", disabled: I, onClick: Q, children: I ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    N && l.purpose !== "test" && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ c.jsxs("details", { children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ c.jsxs("fieldset", { className: "plain", disabled: N, children: [
        /* @__PURE__ */ c.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ c.jsx("label", { htmlFor: `${H}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ c.jsxs("select", { id: `${H}-device`, value: f.device, onChange: (U) => K("device", U.target.value), children: [
              /* @__PURE__ */ c.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !oe && /* @__PURE__ */ c.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              x.map((U, le) => /* @__PURE__ */ c.jsx("option", { value: U.deviceId, children: U.label || `Äänitulo ${le + 1}` }, U.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ c.jsxs("label", { htmlFor: `${H}-rms`, children: [
              "Äänikynnys · ",
              Yl(Yr(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ c.jsx("input", { id: `${H}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (U) => K("minRms", Number(U.target.value)) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ c.jsxs("label", { htmlFor: `${H}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ c.jsx("input", { id: `${H}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (U) => K("clarity", Number(U.target.value)) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ c.jsxs("label", { htmlFor: `${H}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ c.jsx("input", { id: `${H}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (U) => K("stability", Number(U.target.value)) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ c.jsxs("label", { htmlFor: `${H}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ c.jsx("input", { id: `${H}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (U) => K("cents", Number(U.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("p", { className: "tools-note", children: [
          x.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const fp = (l) => l.mode === "scale" ? rt.scaleNotes(rt.SCALES[l.scale]) : yr[l.mode === "caged" ? "maj" : l.chord].tones, Gc = (l, o) => fp(l).find(([a]) => a === o)?.[1], hd = (l) => l.mode === "scale" || l.mode === "chord" || l.mode === "caged", hp = (l) => l.direction === "up" ? "ylöspäin" : "alaspäin";
function pp(l, o) {
  return o.choices === "note" ? "Valitse sävelnimi." : o.choices === "degree" ? "Valitse aste." : l.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function mp(l, o, a, d, h) {
  return o.choices === "degree" ? `Oikein! ${Li(l.root, o.interval, o.degree)} on ${o.degree}. aste.` : hd(l) ? `Oikein! ${o.degree}. aste on ${Li(l.root, o.interval, o.degree)}.` : l.mode === "interval" ? `Oikein! ${Ye(o.reference, l.flats, !0)} → ${o.name} on ${Fi[o.interval]} ${hp(o)}.` : l.mode === "notes" ? a === "board" && h ? `Oikein! ${Ye(h.midi, l.flats)} on ${Jc[h.string]}: ${Gr(h.fret)}.` : `Oikein! Soitit sävelen ${Ye(d, l.flats, !0)}.` : `Oikein! Sävel oli ${o.name}.`;
}
function vp(l, o, a, d, h) {
  if (a === "note") return `Ei ${Ye(d, l.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (a === "degree") return `Ei ${Gc(l, d) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!h) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ge(h.midi) === Ge(o.midi);
  if (l.mode === "notes")
    return h.string !== o.position.string ? `Tuo on ${$n[h.string]}-kieli. Etsi sävel ${qo[o.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${o.name}.` : `Tuo on ${Ye(h.midi, l.flats)}. Etsi ${o.name}.`;
  if (hd(l)) {
    const v = Ge(h.midi - l.root), x = Gc(l, v), N = l.mode === "scale" ? "asteikkoon" : "sointuun";
    return x ? f && o.check === "pitch" && h.midi !== o.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${o.name}.` : f ? `Oikea sävel, mutta ${l.mode === "caged" ? "muodon" : l.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${o.degree}. aste sen sisältä.` : `Tuo on ${Li(l.root, v, x)} eli ${x}. aste. Etsi ${o.degree}. aste.` : `Tuo on ${Ye(h.midi, l.flats)}, joka ei kuulu ${N}. Etsi ${o.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ye(h.midi, l.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function yp(l, o, a) {
  const d = Ye(a, l.flats, !0);
  return Ge(a) === Ge(o.midi) ? `Kuulin sävelen ${d}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${d}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function pd(l, o = !1) {
  const a = l.split(":"), d = (v) => Number(a[v]), h = (...v) => v.every((x) => Number.isInteger(d(x))), f = (v, x) => $n[v] ? `${$n[v]}-kieli, ${Gr(x)}` : null;
  switch (a[0]) {
    case "notes":
      return h(1, 2) ? f(d(1), d(2)) : null;
    case "ear-note":
      return h(1) ? `Kuultu sävel ${Ye(d(1), o)}${a[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return a.length === 2 && h(1) ? `Kuule ja toista: ${Ye(d(1), o, !0)}` : h(1, 2) && f(d(1), d(2)) ? `Kuule ja toista: ${f(d(1), d(2))}` : null;
    case "interval":
      return h(1) && Fi[d(1)] ? `${Fi[d(1)]} ${a[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const v = a[2];
      if (!h(1, 3) || !yr[v]) return null;
      const x = yr[v].tones.find(([N]) => N === d(3))?.[1];
      return x ? `${qc(d(1), v)}: ${x}. aste${a[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const v = rt.SCALES[a[2]];
      if (!h(1) || !v) return null;
      const x = `${tr(d(1))}-${v.name}`;
      if (a.length === 5 && h(3)) {
        const N = rt.scaleNotes(v).find(([I]) => I === d(3))?.[1];
        return N ? `${x}: ${N}. aste${a[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return h(3, 4) && f(d(3), d(4)) ? `${x}: ${f(d(3), d(4))}` : null;
    }
    case "caged": {
      if (!h(1) || !"CAGED".includes(a[2] ?? "?")) return null;
      const v = `${tr(d(1))}-duuri, ${a[2]}-muoto`;
      if (a.length === 4 && h(3)) {
        const x = yr.maj.tones.find(([N]) => N === d(3))?.[1];
        return x ? `${v}: ${x}. aste` : null;
      }
      return h(3, 4) && f(d(3), d(4)) ? `${v}: ${f(d(3), d(4))}` : null;
    }
    default:
      return null;
  }
}
function Yc(l) {
  return Object.entries(l).flatMap(([o, a]) => {
    const [d, h, f, ...v] = o.split(":");
    return !v.length || !["solo", "guided"].includes(f) ? [] : [{ key: o, input: d, check: h, guided: f === "guided", item: v.join(":"), mode: v[0], stat: a }];
  });
}
const Jo = (l) => (l / 1e3).toFixed(1).replace(".", ",") + " s", gp = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function kp(l) {
  const o = l.solo === void 0 ? `${l.first}/${l.count} heti oikein` : l.solo ? `itsenäisesti ${l.soloFirst ?? 0}/${l.solo} heti oikein${l.count > l.solo ? ` · ${l.count - l.solo} vihjeen kanssa` : ""}` : `${l.count} vastausta vihjeen kanssa`;
  return `${new Date(l.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${Qr(l.mode)}${l.hints ? ` · ${Jl[l.hints].title}` : ""} · ${o} · keskimäärin ${Jo(l.ms / Math.max(1, l.count))}${l.complete ? "" : " · keskeytetty"}`;
}
function xp({ store: l, s: o, locked: a, changed: d }) {
  const [h, f] = ve.useState(""), v = ve.useRef(null), { recent: x, sessions: N, stats: I } = l.data, k = gr(o), T = ed(o), O = [...new Set(x.map((M) => M.mode))].map((M) => {
    const Y = x.filter((b) => b.mode === M);
    return { mode: M, ...Qo(Y), last: Math.max(...Y.map((b) => b.at)) };
  }).sort((M, Y) => Y.last - M.last), Q = Yc(I).filter((M) => !M.guided && M.mode === o.mode && M.input === k && M.check === T && M.stat.attempts >= 3).map((M) => ({ ...M, score: bo(M.stat), text: pd(M.item, o.flats) })).filter((M) => M.text && M.score < 0.8).sort((M, Y) => M.score - Y.score).slice(0, 5), H = Yc(I).reduce((M, Y) => M + Y.stat.attempts, 0);
  function _() {
    const M = new Blob([JSON.stringify(l.data, null, 2)], { type: "application/json" }), Y = URL.createObjectURL(M), b = document.createElement("a");
    b.href = Y, b.download = "musiikin-kartta-harjoittelu.json", b.click(), setTimeout(() => URL.revokeObjectURL(Y), 1e3);
  }
  async function E(M) {
    if (M)
      try {
        const Y = await M.text();
        if (H && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        l.restore(Y), f("Varmuuskopio palautettu."), d();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        v.current && (v.current.value = "");
      }
  }
  function B() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (l.clearProgress(), f("Harjoitustulokset poistettu."), d());
  }
  return /* @__PURE__ */ c.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    H === 0 ? /* @__PURE__ */ c.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { children: [
        H,
        " vastattua kysymystä · ",
        N.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ c.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ c.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ c.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ c.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsxs("tr", { children: [
          /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ c.jsx("tbody", { children: O.map((M) => /* @__PURE__ */ c.jsxs("tr", { children: [
          /* @__PURE__ */ c.jsx("th", { scope: "row", children: Qr(M.mode) }),
          /* @__PURE__ */ c.jsx("td", { children: M.count }),
          /* @__PURE__ */ c.jsx("td", { children: M.solo ? `${M.soloFirst}/${M.solo} · ${Math.round(M.soloFirst / M.solo * 100)} %` : "–" }),
          /* @__PURE__ */ c.jsx("td", { children: M.guided }),
          /* @__PURE__ */ c.jsx("td", { children: Jo(M.ms / M.count) })
        ] }, M.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsx("h3", { children: "Seuraavaksi" }),
    Q.length ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        Qr(o.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ c.jsx("ul", { children: Q.map((M) => /* @__PURE__ */ c.jsxs("li", { children: [
        M.text,
        " · viime aikoina ",
        Math.round(zi(M.stat) * 100),
        " % heti oikein · ",
        Jo(Ai(M.stat))
      ] }, M.key)) })
    ] }) : /* @__PURE__ */ c.jsx("p", { children: H ? `Harjoituksessa ${Qr(o.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ c.jsxs("details", { children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ c.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        gp[o.input],
        ") ja tarkistuksella (",
        o.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ c.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ c.jsx($h, { area: { strings: o.strings, min: o.min, max: o.max, fixed: "" }, stats: I, input: o.input, check: o.check, flats: o.flats })
    ] }),
    /* @__PURE__ */ c.jsxs("details", { children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      N.length ? /* @__PURE__ */ c.jsx("ul", { children: N.slice(-10).reverse().map((M) => /* @__PURE__ */ c.jsx("li", { children: kp(M) }, M.id)) }) : /* @__PURE__ */ c.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ c.jsxs("details", { children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ c.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ c.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: _, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", disabled: a, onClick: () => v.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ c.jsx("input", { ref: v, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (M) => {
          E(M.target.files?.[0]);
        } }),
        /* @__PURE__ */ c.jsx("button", { type: "button", disabled: a || !H, onClick: B, children: "Poista harjoitustulokset" })
      ] }),
      h && /* @__PURE__ */ c.jsx("p", { role: "status", children: h })
    ] }),
    l.warning && /* @__PURE__ */ c.jsx("p", { role: "status", className: "error", children: l.warning })
  ] });
}
function wp() {
  try {
    return new Dc(localStorage);
  } catch {
    return new Dc();
  }
}
const Xc = (l) => ({ minRms: l.minRms, minClarity: l.clarity, stabilityMs: l.stability, centsTolerance: l.cents }), jp = (l) => (l / 1e3).toFixed(1).replace(".", ",") + " s", Sp = [0, 2, 4, 5, 7, 9, 11];
function Ep(l) {
  return l.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : l.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : l.mode === "chord" ? l.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : l.mode === "scale" ? ["mp", "majp"].includes(l.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function _p() {
  const [l] = ve.useState(wp), [o, a] = ve.useState(() => wh(location.search, l.data.settings)), [, d] = ve.useReducer((C) => C + 1, 0), h = ve.useRef(null), f = ve.useRef(new sp()), v = ve.useRef(new ap()), x = ve.useRef(0), N = ve.useRef(), I = ve.useRef(), k = ve.useRef(null), T = ve.useRef(0), O = ve.useRef(null), Q = ve.useRef(o);
  Q.current = o;
  const [H, _] = ve.useState({ phase: "off", purpose: "none" }), E = ve.useRef(H), B = (C) => {
    E.current = C, _(C);
  }, [M, Y] = ve.useState(null), [b, ge] = ve.useState(null), [oe, K] = ve.useState(null), [U, le] = ve.useState(0), [de, Ie] = ve.useState([]), [He, Re] = ve.useState(!1), [Le, De] = ve.useState(!1), [We, we] = ve.useState(""), [D, X] = ve.useState("info"), [W, g] = ve.useState(""), [$, ae] = ve.useState(0), [pe, ke] = ve.useState([]), [ye, z] = ve.useState([]), [V, F] = ve.useState(null), [ee, he] = ve.useState(!1), [re, ie] = ve.useState(""), [se, Se] = ve.useState(""), xe = () => {
    Wh().then(Ie).catch(() => {
    });
  };
  function Ce() {
    clearTimeout(I.current), k.current = null, he(!1);
  }
  function Ae() {
    Y(null), ge(null), K(null);
  }
  function Te() {
    f.current.stop(), Ce(), B({ phase: "off", purpose: "none" }), Ae();
  }
  async function Be(C) {
    if (f.current.active && E.current.phase === "on")
      return Ce(), B({ ...E.current, purpose: C }), f.current.rearm(), !0;
    B({ phase: "requesting", purpose: C }), Ae();
    try {
      const J = await f.current.start(Q.current.device, {
        ...Xc(Q.current),
        onFrame: ($e) => Fe.current.frame($e),
        onStableNote: ($e) => Fe.current.stable($e)
      }, () => Fe.current.lost());
      return J ? (B({ phase: "on", purpose: C, info: J }), xe(), !0) : !1;
    } catch (J) {
      return B({ phase: "error", purpose: "none", error: lp(J) }), !1;
    }
  }
  function Ve(C) {
    k.current?.push(C.rms);
    const J = performance.now();
    J - T.current < 66 || (T.current = J, Y(C), le(J), C.midi !== void 0 && C.frequency !== void 0 && ge({ midi: C.midi, frequency: C.frequency, cents: C.cents ?? 0, clarity: C.clarity ?? 0, tuned: C.status === "pitch", at: J }));
  }
  function Nt(C) {
    E.current.purpose === "test" ? K(C) : E.current.purpose === "round" && Ee(C.midi, "mic", void 0, C.heldMs);
  }
  function be() {
    const C = E.current.purpose === "round";
    Ce(), Ae(), B({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const J = h.current;
    C && J && ["active", "feedback", "paused"].includes(J.phase) && (ct(), De(!1), J.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), d());
  }
  const Fe = ve.useRef({ frame: Ve, stable: Nt, lost: be });
  Fe.current = { frame: Ve, stable: Nt, lost: be };
  function ot(C) {
    const J = Xl(C), $e = J.device !== Q.current.device;
    Q.current = J, a(J), l.settings(J), g(""), f.current.active && ($e && E.current.purpose === "test" ? (Te(), Be("test")) : f.current.setOptions(Xc(J)));
  }
  function Mt() {
    ie(""), Be("test");
  }
  function bt() {
    E.current.phase !== "on" || E.current.purpose !== "test" || (Ce(), k.current = [], he(!0), ie("Mitataan taustakohinaa kolme sekuntia. Älä soita."), I.current = setTimeout(() => {
      const C = k.current ?? [];
      if (Ce(), C.length < 10) {
        ie("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: J, noise: $e, loud: Bt } = op(C);
      ot({ ...Q.current, minRms: J }), ie(`Taustakohina on ${Math.round(Yr($e))} dB ja äänikynnys nyt ${Math.round(Yr(J))} dB. ${Bt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function ct() {
    x.current++, clearTimeout(N.current), v.current.stop();
  }
  function xn(C, J) {
    if (!C.results.length) return;
    const $e = Qo(C.results);
    l.session({
      id: C.id,
      mode: C.settings.mode,
      count: $e.count,
      first: $e.first,
      ms: $e.ms,
      solo: $e.solo,
      soloFirst: $e.soloFirst,
      hints: C.settings.hints,
      at: Date.now(),
      complete: J
    });
  }
  async function fe(C) {
    if (!C.question?.sound.length || C.phase !== "active") return;
    ct();
    const J = x.current;
    C.pause(), f.current.pause(), De(!0), X("info"), we("Kuuntele…"), d();
    try {
      await v.current.play(C.question.sound);
    } catch {
      J === x.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    J !== x.current || h.current !== C || (C.resume(), f.current.resume(), De(!1), we(""), d());
  }
  async function Pt(C) {
    ke([]), z([]), F(null), g(""), ae(C.hintLevel), f.current.rearm(), X("info"), we(""), d(), C.question?.sound.length && await fe(C);
  }
  async function je() {
    const C = Q.current, J = Wo(C);
    if (J) {
      g(J);
      return;
    }
    ct();
    const $e = x.current;
    if (g(""), ie(""), Se(""), Vo(C)) {
      Re(!0);
      const it = await Be("round");
      if ($e !== x.current) return;
      if (Re(!1), !it) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else E.current.phase !== "off" && Te();
    const Bt = new Bh(C, () => l.data.stats, (it) => l.record(it));
    try {
      Bt.start();
    } catch (it) {
      E.current.purpose === "round" && Te(), g(it instanceof Error ? it.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    h.current = Bt, requestAnimationFrame(() => O.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Pt(Bt);
  }
  function Ne() {
    ct(), Re(!1), Te();
  }
  function Ee(C, J, $e, Bt = 0) {
    const it = h.current, wr = it?.question;
    if (!it || !wr || it.phase !== "active") return;
    const Jr = it.answer(C, J, $e, Bt);
    if (Jr !== "ignored") {
      if (Jr === "candidate")
        F(C), X("bad"), we(yp(it.settings, wr, C));
      else if (Jr === "wrong")
        $e ? ke((Ue) => [...Ue, $e]) : z((Ue) => [...Ue, C]), X("bad"), we(vp(it.settings, wr, J, C, $e));
      else if (F(null), X("good"), we(mp(it.settings, wr, J, C, $e)), xn(it, !1), it.settings.advance) {
        const Ue = x.current;
        N.current = setTimeout(() => {
          Ue === x.current && Xe();
        }, J === "mic" ? 1800 : 1400);
      }
      d();
    }
  }
  async function Xe() {
    const C = h.current;
    if (!(!C || C.phase !== "feedback")) {
      ct();
      try {
        C.next();
      } catch (J) {
        at(!1), g(J instanceof Error ? J.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (C.phase === "done") {
        at(!0);
        return;
      }
      await Pt(C);
    }
  }
  function at(C = !1) {
    ct(), De(!1), Re(!1), (E.current.purpose === "round" || E.current.phase === "requesting") && Te();
    const J = h.current;
    J && (J.stop(), xn(J, C)), F(null), ae(0), ke([]), z([]), g(""), Se(C ? "complete" : "stopped"), X("info"), we(""), d();
  }
  function Kt() {
    const C = h.current;
    if (!C || !["active", "feedback", "paused"].includes(C.phase)) return;
    ct(), De(!1), C.pause();
    const J = E.current.purpose === "round";
    J && Te(), X("info"), we(`Harjoitus on tauolla.${J ? " Mikrofoni on suljettu." : ""}`), d();
  }
  async function Lt() {
    const C = h.current;
    if (!C || C.phase !== "paused" || Le) return;
    ct();
    const J = x.current;
    if (g(""), Vo(C.settings)) {
      Re(!0);
      const $e = await Be("round");
      if (J !== x.current) return;
      if (Re(!1), !$e) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    C.resume(), X("info"), we(""), d(), C.phase === "active" && (f.current.rearm(), C.question?.sound.length && await fe(C));
  }
  function dn(C) {
    const J = h.current;
    !J || J.phase !== "active" || (J.useHint(C), ae(C), d());
  }
  const en = ve.useRef({ hidden: () => {
  }, restored: () => {
  } });
  en.current = {
    hidden: () => {
      const C = h.current;
      C && ["active", "feedback"].includes(C.phase) || Le ? Kt() : E.current.phase !== "off" && E.current.phase !== "error" && (ct(), Re(!1), Te());
    },
    restored: () => {
      Re(!1), De(!1), B({ phase: "off", purpose: "none" }), Ae(), d();
    }
  }, ve.useEffect(() => {
    xe();
    const C = () => xe();
    navigator.mediaDevices?.addEventListener?.("devicechange", C);
    const J = () => {
      x.current++, clearTimeout(N.current), clearTimeout(I.current), f.current.stop(), v.current.stop(), ip(), h.current?.pause();
    }, $e = () => {
      document.hidden && en.current.hidden();
    }, Bt = (it) => {
      it.persisted && en.current.restored();
    };
    return document.addEventListener("visibilitychange", $e), window.addEventListener("pagehide", J), window.addEventListener("pageshow", Bt), () => {
      J(), navigator.mediaDevices?.removeEventListener?.("devicechange", C), document.removeEventListener("visibilitychange", $e), window.removeEventListener("pagehide", J), window.removeEventListener("pageshow", Bt);
    };
  }, []);
  const wt = ve.useRef(null), Rn = `${h.current?.id}:${h.current?.index}:${h.current?.phase}:${Le}`;
  ve.useEffect(() => {
    const C = h.current, J = O.current, $e = document.activeElement;
    !C || !J || !($e === document.body || J.contains($e)) || (C.phase === "feedback" ? wt.current?.focus({ preventScroll: !0 }) : C.phase === "active" && !Le && ($e === document.body || $e === wt.current) && J.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [Rn]);
  const Me = h.current, ht = !!Me && ["active", "paused", "feedback"].includes(Me.phase), Ke = ht ? Me.settings : o, pt = ht ? Me.question : void 0, Qt = !!pt && !!Me?.answered, fn = ht && Me.phase === "paused" && !Le && !Qt, nr = ht && Me.phase === "active" && !Le, Pn = ht ? null : Wo(o), xr = ht || He, Ln = kr(Ke), ql = Ph(Ke), tn = pt && !Qt ? $ : 0, Fn = pt ? Dh(Ke, pt, Qt ? 2 : tn) : { marks: [], text: "" }, rr = [...new Map([...Fn.marks, ...Qt ? [] : pe.map((C) => ({ ...C, label: Ye(C.midi, Ke.flats), kind: "wrong" }))].map((C) => [st(C), C])).values()], Xr = ht && Vo(Ke), bl = !!pt && !fn && (pt.choices === "position" || rr.length > 0), jt = Me ? Qo(Me.results) : null, es = !Me || Ke.hints !== "fade" ? "" : Me.index <= 3 ? " · vastaus näkyy" : Me.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hn = Me && !ht ? Me.results.filter((C) => C.errors > 0 || C.hint) : [], [Di, Bi] = Ep(Ke);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "intro", children: [
      /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "KUUNTELE · LÖYDÄ · SOITA" }),
      /* @__PURE__ */ c.jsx("h1", { children: "Kitaraharjoittelija" }),
      /* @__PURE__ */ c.jsx("p", { children: "Valitse harjoitus, vastaa otelaudalta tai soita oikealla kitaralla, ja näe, mitä jo osaat." })
    ] }),
    l.data.notice === "hints-default" && /* @__PURE__ */ c.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
      /* @__PURE__ */ c.jsxs("p", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
        " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
        /* @__PURE__ */ c.jsx("em", { children: "Testaa osaamistasi" }),
        ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
        /* @__PURE__ */ c.jsx("em", { children: "Opettele" }),
        " tai ",
        /* @__PURE__ */ c.jsx("em", { children: "Vähennä vihjeitä" }),
        "."
      ] }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => {
        l.dismissNotice(), d();
      }, children: "Selvä" })
    ] }),
    ht ? /* @__PURE__ */ c.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ c.jsx("strong", { children: Qr(Ke.mode) }),
      " · ",
      Uc(Ke)
    ] }) : /* @__PURE__ */ c.jsx(Vh, { s: o, change: ot, locked: xr, problem: Pn }),
    !ht && /* @__PURE__ */ c.jsx(
      dp,
      {
        mic: H,
        frame: M,
        heard: b,
        accepted: oe,
        now: U,
        s: o,
        change: ot,
        devices: de,
        locked: He,
        calibrating: ee,
        calibration: re,
        onTest: Mt,
        onStop: Te,
        onCalibrate: bt
      }
    ),
    /* @__PURE__ */ c.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: O, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ c.jsx("h2", { id: "session-title", children: Qr(Ke.mode) }),
        /* @__PURE__ */ c.jsx("span", { "data-testid": "round-status", children: ht ? `Kysymys ${Me.index}${Me.total ? " / " + Me.total : " · vapaa harjoittelu"} · ${Jl[Ke.hints].title}${es}${Me.phase === "paused" && !Le ? " · tauolla" : ""}` : se === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !ht && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Me && Me.results.length > 0 && jt ? /* @__PURE__ */ c.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ c.jsx("h3", { children: se === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ c.jsxs("dl", { children: [
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ c.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ c.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ c.jsx("dd", { children: jp(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hn.length > 0 && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ c.jsx("ul", { children: [...new Set(hn.map((C) => pd(C.item, o.flats)).filter(Boolean))].slice(0, 6).map((C) => /* @__PURE__ */ c.jsx("li", { children: C }, C)) })
          ] })
        ] }) : /* @__PURE__ */ c.jsx("p", { className: "question idle", children: Uc(o) }),
        /* @__PURE__ */ c.jsx("div", { className: "action-row", children: He ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: Ne, children: "Peru" })
        ] }) : /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", disabled: !!Pn, onClick: () => {
          je();
        }, children: Me?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Me && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      ht && pt && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: fn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ c.jsx("p", { className: "how", "data-testid": "instruction", children: fn ? "Kysymys palaa näkyviin, kun jatkat." : Le ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : pp(Ke, pt) }),
        Me.hintLevel > 0 && !Qt && /* @__PURE__ */ c.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ke.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Xr && /* @__PURE__ */ c.jsx(cp, { mic: H, frame: M, heard: b, s: Ke, now: U }),
        pt.choices === "note" && !fn && /* @__PURE__ */ c.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ke.accidentals ? Array.from({ length: 12 }, (C, J) => J) : Sp).map((C) => /* @__PURE__ */ c.jsx("button", { type: "button", className: ye.includes(C) ? "wrong" : Qt && C === pt.midi % 12 ? "right" : "", disabled: !nr || ye.includes(C), onClick: () => Ee(C, "note"), children: Ye(C, Ke.flats) }, C)) }),
        pt.choices === "degree" && !fn && /* @__PURE__ */ c.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ke.mode === "scale" ? rt.scaleNotes(rt.SCALES[Ke.scale]) : yr[Ke.chord].tones).map(([C, J]) => /* @__PURE__ */ c.jsx("button", { type: "button", className: ye.includes(C) ? "wrong" : Qt && C === pt.interval ? "right" : "", disabled: !nr || ye.includes(C), onClick: () => Ee(C, "degree"), children: J }, C)) }),
        bl && /* @__PURE__ */ c.jsx(
          Th,
          {
            area: ql,
            marks: rr,
            disabled: !nr || pt.choices !== "position" || Ke.input === "mic",
            onAnswer: (C) => Ee(C.midi, "board", C),
            caption: Ln.fixed === "shape" ? `${Ke.shape}-muodon alue` : Ln.fixed === "box" ? `Boksin ${Ke.box} alue` : "Otelauta"
          }
        ),
        !Qt && !fn && tn > 0 && Fn.text && /* @__PURE__ */ c.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Fn.text }),
        /* @__PURE__ */ c.jsx("p", { className: `feedback ${D}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: We }),
        V !== null && Me.phase === "active" && /* @__PURE__ */ c.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => {
            Me.confirmWrong(), F(null), we("Kirjattu virheeksi. Etsi sävel uudelleen."), d();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ c.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        W && /* @__PURE__ */ c.jsx("p", { className: "error", role: "alert", children: W }),
        /* @__PURE__ */ c.jsxs("div", { className: "action-row", children: [
          Me.phase === "feedback" && /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", ref: wt, onClick: () => {
            Xe();
          }, children: Me.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Me.phase === "active" && !Qt && !Le && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            tn === 0 && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => dn(Math.max(1, Me.hintLevel)), children: Me.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            tn === 1 && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => dn(2), children: "Näytä vastaus" }),
            tn > 0 && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => ae(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ c.jsx("button", { type: "button", disabled: !nr, onClick: () => {
            fe(Me);
          }, children: "Kuuntele uudelleen" }),
          Me.phase === "paused" && !Le ? /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", disabled: He, onClick: () => {
            Lt();
          }, children: He ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ c.jsx("button", { type: "button", onClick: Kt, children: "Tauko" }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => at(), children: "Lopeta harjoitus" })
        ] }),
        Me.phase === "feedback" && Ke.advance && /* @__PURE__ */ c.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ c.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !ht && W && /* @__PURE__ */ c.jsx("p", { className: "error", role: "alert", children: W })
    ] }),
    !ht && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { className: "link-row", children: [
        /* @__PURE__ */ c.jsxs("a", { href: Di, children: [
          "Lue teoria: ",
          Bi
        ] }),
        o.mode === "scale" && /* @__PURE__ */ c.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(rt.CHROM[o.root])}&asteikko=${o.scale}`, children: "Katso asteikko otelautaharjoittelijassa" }),
        /* @__PURE__ */ c.jsx("a", { href: jh(o), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ c.jsx(xp, { store: l, s: o, locked: xr, changed: () => {
        const C = Xl(l.data.settings);
        Q.current = C, a(C), d();
      } }),
      /* @__PURE__ */ c.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ c.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ c.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ c.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ c.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ c.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ c.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ c.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
fh.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ c.jsx(_p, {}));
//# sourceMappingURL=app.js.map
